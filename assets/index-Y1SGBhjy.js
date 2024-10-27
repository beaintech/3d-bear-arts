(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},Ts=[],Fn=()=>{},np=()=>!1,Yo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),hc=n=>n.startsWith("onUpdate:"),zt=Object.assign,fc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ip=Object.prototype.hasOwnProperty,st=(n,e)=>ip.call(n,e),$e=Array.isArray,ar=n=>$o(n)==="[object Map]",sp=n=>$o(n)==="[object Set]",Ye=n=>typeof n=="function",Dt=n=>typeof n=="string",ks=n=>typeof n=="symbol",At=n=>n!==null&&typeof n=="object",Zh=n=>(At(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),rp=Object.prototype.toString,$o=n=>rp.call(n),op=n=>$o(n).slice(8,-1),ap=n=>$o(n)==="[object Object]",dc=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,lr=uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ko=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},lp=/-(\w)/g,vn=Ko(n=>n.replace(lp,(e,t)=>t?t.toUpperCase():"")),cp=/\B([A-Z])/g,Ji=Ko(n=>n.replace(cp,"-$1").toLowerCase()),jo=Ko(n=>n.charAt(0).toUpperCase()+n.slice(1)),pa=Ko(n=>n?`on${jo(n)}`:""),Si=(n,e)=>!Object.is(n,e),ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Jh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},up=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Qc;const Qh=()=>Qc||(Qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pc(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Dt(i)?pp(i):pc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(n)||At(n))return n}const hp=/;(?![^(]*\))/g,fp=/:([^]+)/,dp=/\/\*[^]*?\*\//g;function pp(n){const e={};return n.replace(dp,"").split(hp).forEach(t=>{if(t){const i=t.split(fp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ti(n){let e="";if(Dt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Ti(n[t]);i&&(e+=i+" ")}else if(At(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const mp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gp=uc(mp);function ef(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ln;class _p{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ln;try{return ln=this,e()}finally{ln=t}}}on(){ln=this}off(){ln=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function vp(){return ln}let ft;const ga=new WeakSet;class tf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ga.has(this)&&(ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eu(this),rf(this);const e=ft,t=Cn;ft=this,Cn=!0;try{return this.fn()}finally{of(this),ft=e,Cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_c(e);this.deps=this.depsTail=void 0,eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ll(this)&&this.run()}get dirty(){return ll(this)}}let nf=0,Es;function sf(n){n.flags|=8,n.next=Es,Es=n}function mc(){nf++}function gc(){if(--nf>0)return;let n;for(;Es;){let e=Es,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Es,Es=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function rf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function of(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),_c(i),xp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ll(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(af(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function af(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===xr))return;n.globalVersion=xr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ll(n)){n.flags&=-3;return}const t=ft,i=Cn;ft=n,Cn=!0;try{rf(n);const s=n.fn(n._value);(e.version===0||Si(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ft=t,Cn=i,of(n),n.flags&=-3}}function _c(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)_c(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function xp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Cn=!0;const lf=[];function Ai(){lf.push(Cn),Cn=!1}function Ri(){const n=lf.pop();Cn=n===void 0?!0:n}function eu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let xr=0;class Mp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ft||!Cn||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new Mp(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,cf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,xr++,this.notify(e)}notify(e){mc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{gc()}}}function cf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)cf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const cl=new WeakMap,Yi=Symbol(""),ul=Symbol(""),Mr=Symbol("");function Xt(n,e,t){if(Cn&&ft){let i=cl.get(n);i||cl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new vc),s.target=n,s.map=i,s.key=t),s.track()}}function ti(n,e,t,i,s,r){const o=cl.get(n);if(!o){xr++;return}const a=l=>{l&&l.trigger()};if(mc(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&dc(t);if(l&&t==="length"){const h=Number(i);o.forEach((u,f)=>{(f==="length"||f===Mr||!ks(f)&&f>=h)&&a(u)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(Mr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Yi)),ar(n)&&a(o.get(ul)));break;case"delete":l||(a(o.get(Yi)),ar(n)&&a(o.get(ul)));break;case"set":ar(n)&&a(o.get(Yi));break}}gc()}function is(n){const e=ot(n);return e===n?e:(Xt(e,"iterate",Mr),Pn(n)?e:e.map(Kt))}function xc(n){return Xt(n=ot(n),"iterate",Mr),n}const yp={__proto__:null,[Symbol.iterator](){return _a(this,Symbol.iterator,Kt)},concat(...n){return is(this).concat(...n.map(e=>$e(e)?is(e):e))},entries(){return _a(this,"entries",n=>(n[1]=Kt(n[1]),n))},every(n,e){return Vn(this,"every",n,e,void 0,arguments)},filter(n,e){return Vn(this,"filter",n,e,t=>t.map(Kt),arguments)},find(n,e){return Vn(this,"find",n,e,Kt,arguments)},findIndex(n,e){return Vn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Vn(this,"findLast",n,e,Kt,arguments)},findLastIndex(n,e){return Vn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Vn(this,"forEach",n,e,void 0,arguments)},includes(...n){return va(this,"includes",n)},indexOf(...n){return va(this,"indexOf",n)},join(n){return is(this).join(n)},lastIndexOf(...n){return va(this,"lastIndexOf",n)},map(n,e){return Vn(this,"map",n,e,void 0,arguments)},pop(){return Ks(this,"pop")},push(...n){return Ks(this,"push",n)},reduce(n,...e){return tu(this,"reduce",n,e)},reduceRight(n,...e){return tu(this,"reduceRight",n,e)},shift(){return Ks(this,"shift")},some(n,e){return Vn(this,"some",n,e,void 0,arguments)},splice(...n){return Ks(this,"splice",n)},toReversed(){return is(this).toReversed()},toSorted(n){return is(this).toSorted(n)},toSpliced(...n){return is(this).toSpliced(...n)},unshift(...n){return Ks(this,"unshift",n)},values(){return _a(this,"values",Kt)}};function _a(n,e,t){const i=xc(n),s=i[e]();return i!==n&&!Pn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Sp=Array.prototype;function Vn(n,e,t,i,s,r){const o=xc(n),a=o!==n&&!Pn(n),l=o[e];if(l!==Sp[e]){const u=l.apply(n,r);return a?Kt(u):u}let c=t;o!==n&&(a?c=function(u,f){return t.call(this,Kt(u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function tu(n,e,t,i){const s=xc(n);let r=t;return s!==n&&(Pn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Kt(a),l,n)}),s[e](r,...i)}function va(n,e,t){const i=ot(n);Xt(i,"iterate",Mr);const s=i[e](...t);return(s===-1||s===!1)&&Ec(t[0])?(t[0]=ot(t[0]),i[e](...t)):s}function Ks(n,e,t=[]){Ai(),mc();const i=ot(n)[e].apply(n,t);return gc(),Ri(),i}const Ep=uc("__proto__,__v_isRef,__isVue"),uf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ks));function wp(n){ks(n)||(n=String(n));const e=ot(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class hf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Fp:mf:r?pf:df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){let l;if(o&&(l=yp[t]))return l;if(t==="hasOwnProperty")return wp}const a=Reflect.get(e,t,kt(e)?e:i);return(ks(t)?uf.has(t):Ep(t))||(s||Xt(e,"get",t),r)?a:kt(a)?o&&dc(t)?a:a.value:At(a)?s?_f(a):Jo(a):a}}class ff extends hf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=$i(r);if(!Pn(i)&&!$i(i)&&(r=ot(r),i=ot(i)),!$e(e)&&kt(r)&&!kt(i))return l?!1:(r.value=i,!0)}const o=$e(e)&&dc(t)?Number(t)<e.length:st(e,t),a=Reflect.set(e,t,i,kt(e)?e:s);return e===ot(s)&&(o?Si(i,r)&&ti(e,"set",t,i):ti(e,"add",t,i)),a}deleteProperty(e,t){const i=st(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ti(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ks(t)||!uf.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",$e(e)?"length":Yi),Reflect.ownKeys(e)}}class bp extends hf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Tp=new ff,Ap=new bp,Rp=new ff(!0);const Mc=n=>n,Zo=n=>Reflect.getPrototypeOf(n);function $r(n,e,t=!1,i=!1){n=n.__v_raw;const s=ot(n),r=ot(e);t||(Si(e,r)&&Xt(s,"get",e),Xt(s,"get",r));const{has:o}=Zo(s),a=i?Mc:t?wc:Kt;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Kr(n,e=!1){const t=this.__v_raw,i=ot(t),s=ot(n);return e||(Si(n,s)&&Xt(i,"has",n),Xt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function jr(n,e=!1){return n=n.__v_raw,!e&&Xt(ot(n),"iterate",Yi),Reflect.get(n,"size",n)}function nu(n,e=!1){!e&&!Pn(n)&&!$i(n)&&(n=ot(n));const t=ot(this);return Zo(t).has.call(t,n)||(t.add(n),ti(t,"add",n,n)),this}function iu(n,e,t=!1){!t&&!Pn(e)&&!$i(e)&&(e=ot(e));const i=ot(this),{has:s,get:r}=Zo(i);let o=s.call(i,n);o||(n=ot(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,e),o?Si(e,a)&&ti(i,"set",n,e):ti(i,"add",n,e),this}function su(n){const e=ot(this),{has:t,get:i}=Zo(e);let s=t.call(e,n);s||(n=ot(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ti(e,"delete",n,void 0),r}function ru(){const n=ot(this),e=n.size!==0,t=n.clear();return e&&ti(n,"clear",void 0,void 0),t}function Zr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=ot(o),l=e?Mc:n?wc:Kt;return!n&&Xt(a,"iterate",Yi),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function Jr(n,e,t){return function(...i){const s=this.__v_raw,r=ot(s),o=ar(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Mc:e?wc:Kt;return!e&&Xt(r,"iterate",l?ul:Yi),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function li(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Cp(){const n={get(r){return $r(this,r)},get size(){return jr(this)},has:Kr,add:nu,set:iu,delete:su,clear:ru,forEach:Zr(!1,!1)},e={get(r){return $r(this,r,!1,!0)},get size(){return jr(this)},has:Kr,add(r){return nu.call(this,r,!0)},set(r,o){return iu.call(this,r,o,!0)},delete:su,clear:ru,forEach:Zr(!1,!0)},t={get(r){return $r(this,r,!0)},get size(){return jr(this,!0)},has(r){return Kr.call(this,r,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:Zr(!0,!1)},i={get(r){return $r(this,r,!0,!0)},get size(){return jr(this,!0)},has(r){return Kr.call(this,r,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:Zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Jr(r,!1,!1),t[r]=Jr(r,!0,!1),e[r]=Jr(r,!1,!0),i[r]=Jr(r,!0,!0)}),[n,t,e,i]}const[Pp,Lp,Ip,Dp]=Cp();function yc(n,e){const t=e?n?Dp:Ip:n?Lp:Pp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(st(t,s)&&s in i?t:i,s,r)}const Up={get:yc(!1,!1)},Np={get:yc(!1,!0)},Op={get:yc(!0,!1)};const df=new WeakMap,pf=new WeakMap,mf=new WeakMap,Fp=new WeakMap;function Bp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zp(n){return n.__v_skip||!Object.isExtensible(n)?0:Bp(op(n))}function Jo(n){return $i(n)?n:Sc(n,!1,Tp,Up,df)}function gf(n){return Sc(n,!1,Rp,Np,pf)}function _f(n){return Sc(n,!0,Ap,Op,mf)}function Sc(n,e,t,i,s){if(!At(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=zp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function cr(n){return $i(n)?cr(n.__v_raw):!!(n&&n.__v_isReactive)}function $i(n){return!!(n&&n.__v_isReadonly)}function Pn(n){return!!(n&&n.__v_isShallow)}function Ec(n){return n?!!n.__v_raw:!1}function ot(n){const e=n&&n.__v_raw;return e?ot(e):n}function Hp(n){return!st(n,"__v_skip")&&Object.isExtensible(n)&&Jh(n,"__v_skip",!0),n}const Kt=n=>At(n)?Jo(n):n,wc=n=>At(n)?_f(n):n;function kt(n){return n?n.__v_isRef===!0:!1}function mt(n){return vf(n,!1)}function Gp(n){return vf(n,!0)}function vf(n,e){return kt(n)?n:new Vp(n,e)}class Vp{constructor(e,t){this.dep=new vc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ot(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Pn(e)||$i(e);e=i?e:ot(e),Si(e,t)&&(this._rawValue=e,this._value=i?e:Kt(e),this.dep.trigger())}}function As(n){return kt(n)?n.value:n}const kp={get:(n,e,t)=>e==="__v_raw"?n:As(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return kt(s)&&!kt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function xf(n){return cr(n)?n:new Proxy(n,kp)}class Wp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new vc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return sf(this),!0}get value(){const e=this.dep.track();return af(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xp(n,e,t=!1){let i,s;return Ye(n)?i=n:(i=n.get,s=n.set),new Wp(i,s,t)}const Qr={},No=new WeakMap;let Hi;function qp(n,e=!1,t=Hi){if(t){let i=No.get(t);i||No.set(t,i=[]),i.push(n)}}function Yp(n,e,t=ht){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:Pn(E)||s===!1||s===0?Jn(E,1):Jn(E);let h,u,f,d,_=!1,M=!1;if(kt(n)?(u=()=>n.value,_=Pn(n)):cr(n)?(u=()=>c(n),_=!0):$e(n)?(M=!0,_=n.some(E=>cr(E)||Pn(E)),u=()=>n.map(E=>{if(kt(E))return E.value;if(cr(E))return c(E);if(Ye(E))return l?l(E,2):E()})):Ye(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){Ai();try{f()}finally{Ri()}}const E=Hi;Hi=h;try{return l?l(n,3,[d]):n(d)}finally{Hi=E}}:u=Fn,e&&s){const E=u,U=s===!0?1/0:s;u=()=>Jn(E(),U)}const p=vp(),m=()=>{h.stop(),p&&fc(p.effects,h)};if(r&&e){const E=e;e=(...U)=>{E(...U),m()}}let b=M?new Array(n.length).fill(Qr):Qr;const y=E=>{if(!(!(h.flags&1)||!h.dirty&&!E))if(e){const U=h.run();if(s||_||(M?U.some((P,R)=>Si(P,b[R])):Si(U,b))){f&&f();const P=Hi;Hi=h;try{const R=[U,b===Qr?void 0:M&&b[0]===Qr?[]:b,d];l?l(e,3,R):e(...R),b=U}finally{Hi=P}}}else h.run()};return a&&a(y),h=new tf(u),h.scheduler=o?()=>o(y,!1):y,d=E=>qp(E,!1,h),f=h.onStop=()=>{const E=No.get(h);if(E){if(l)l(E,4);else for(const U of E)U();No.delete(h)}},e?i?y(!0):b=h.run():o?o(y.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function Jn(n,e=1/0,t){if(e<=0||!At(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,kt(n))Jn(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)Jn(n[i],e,t);else if(sp(n)||ar(n))n.forEach(i=>{Jn(i,e,t)});else if(ap(n)){for(const i in n)Jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Jn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dr(n,e,t,i){try{return i?n(...i):n()}catch(s){Qo(s,e,t)}}function zn(n,e,t,i){if(Ye(n)){const s=Dr(n,e,t,i);return s&&Zh(s)&&s.catch(r=>{Qo(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(zn(n[r],e,t,i));return s}}function Qo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){Ai(),Dr(r,null,10,[n,l,c]),Ri();return}}$p(n,t,s,i,o)}function $p(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}let yr=!1,hl=!1;const jt=[];let Dn=0;const Rs=[];let gi=null,vs=0;const Mf=Promise.resolve();let bc=null;function yf(n){const e=bc||Mf;return n?e.then(this?n.bind(this):n):e}function Kp(n){let e=yr?Dn+1:0,t=jt.length;for(;e<t;){const i=e+t>>>1,s=jt[i],r=Sr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Tc(n){if(!(n.flags&1)){const e=Sr(n),t=jt[jt.length-1];!t||!(n.flags&2)&&e>=Sr(t)?jt.push(n):jt.splice(Kp(e),0,n),n.flags|=1,Sf()}}function Sf(){!yr&&!hl&&(hl=!0,bc=Mf.then(wf))}function jp(n){$e(n)?Rs.push(...n):gi&&n.id===-1?gi.splice(vs+1,0,n):n.flags&1||(Rs.push(n),n.flags|=1),Sf()}function ou(n,e,t=yr?Dn+1:0){for(;t<jt.length;t++){const i=jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ef(n){if(Rs.length){const e=[...new Set(Rs)].sort((t,i)=>Sr(t)-Sr(i));if(Rs.length=0,gi){gi.push(...e);return}for(gi=e,vs=0;vs<gi.length;vs++){const t=gi[vs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}gi=null,vs=0}}const Sr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wf(n){hl=!1,yr=!0;try{for(Dn=0;Dn<jt.length;Dn++){const e=jt[Dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Dr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dn<jt.length;Dn++){const e=jt[Dn];e&&(e.flags&=-2)}Dn=0,jt.length=0,Ef(),yr=!1,bc=null,(jt.length||Rs.length)&&wf()}}let cn=null,bf=null;function Oo(n){const e=cn;return cn=n,bf=n&&n.type.__scopeId||null,e}function xs(n,e=cn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&gu(-1);const r=Oo(e);let o;try{o=n(...s)}finally{Oo(r),i._d&&gu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zp(n,e){if(cn===null)return n;const t=sa(cn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ht]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&Jn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ii(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ai(),zn(l,t,8,[n.el,a,n,e]),Ri())}}const Jp=Symbol("_vte"),Qp=n=>n.__isTeleport;function Ac(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ac(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ci(n,e){return Ye(n)?zt({name:n.name},e,{setup:n}):n}function Tf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function fl(n,e,t,i,s=!1){if($e(n)){n.forEach((_,M)=>fl(_,e&&($e(e)?e[M]:e),t,i,s));return}if(ur(i)&&!s)return;const r=i.shapeFlag&4?sa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===ht?a.refs={}:a.refs,u=a.setupState,f=ot(u),d=u===ht?()=>!1:_=>st(f,_);if(c!=null&&c!==l&&(Dt(c)?(h[c]=null,d(c)&&(u[c]=null)):kt(c)&&(c.value=null)),Ye(l))Dr(l,a,12,[o,h]);else{const _=Dt(l),M=kt(l);if(_||M){const p=()=>{if(n.f){const m=_?d(l)?u[l]:h[l]:l.value;s?$e(m)&&fc(m,r):$e(m)?m.includes(r)||m.push(r):_?(h[l]=[r],d(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else _?(h[l]=o,d(l)&&(u[l]=o)):M&&(l.value=o,n.k&&(h[n.k]=o))};o?(p.id=-1,an(p,t)):p()}}}const ur=n=>!!n.type.__asyncLoader,Af=n=>n.type.__isKeepAlive;function em(n,e){Rf(n,"a",e)}function tm(n,e){Rf(n,"da",e)}function Rf(n,e,t=Vt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ea(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Af(s.parent.vnode)&&nm(i,e,t,s),s=s.parent}}function nm(n,e,t,i){const s=ea(e,n,i,!0);Rc(()=>{fc(i[e],s)},t)}function ea(n,e,t=Vt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ai();const a=Ur(t),l=zn(e,t,n,o);return a(),Ri(),l});return i?s.unshift(r):s.push(r),r}}const ri=n=>(e,t=Vt)=>{(!ia||n==="sp")&&ea(n,(...i)=>e(...i),t)},im=ri("bm"),Qi=ri("m"),sm=ri("bu"),rm=ri("u"),om=ri("bum"),Rc=ri("um"),am=ri("sp"),lm=ri("rtg"),cm=ri("rtc");function um(n,e=Vt){ea("ec",n,e)}const hm="components";function au(n,e){return dm(hm,n,!0,e)||n}const fm=Symbol.for("v-ndc");function dm(n,e,t=!0,i=!1){const s=cn||Vt;if(s){const r=s.type;{const a=eg(r,!1);if(a&&(a===e||a===vn(e)||a===jo(vn(e))))return r}const o=lu(s[n]||r[n],e)||lu(s.appContext[n],e);return!o&&i?r:o}}function lu(n,e){return n&&(n[e]||n[vn(e)]||n[jo(vn(e))])}const dl=n=>n?Yf(n)?sa(n):dl(n.parent):null,hr=zt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>dl(n.parent),$root:n=>dl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Cc(n),$forceUpdate:n=>n.f||(n.f=()=>{Tc(n.update)}),$nextTick:n=>n.n||(n.n=yf.bind(n.proxy)),$watch:n=>Um.bind(n)}),xa=(n,e)=>n!==ht&&!n.__isScriptSetup&&st(n,e),pm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(xa(i,e))return o[e]=1,i[e];if(s!==ht&&st(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&st(c,e))return o[e]=3,r[e];if(t!==ht&&st(t,e))return o[e]=4,t[e];pl&&(o[e]=0)}}const h=hr[e];let u,f;if(h)return e==="$attrs"&&Xt(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ht&&st(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,st(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return xa(s,e)?(s[e]=t,!0):i!==ht&&st(i,e)?(i[e]=t,!0):st(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ht&&st(n,o)||xa(e,o)||(a=r[0])&&st(a,o)||st(i,o)||st(hr,o)||st(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:st(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let pl=!0;function mm(n){const e=Cc(n),t=n.proxy,i=n.ctx;pl=!1,e.beforeCreate&&uu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:d,updated:_,activated:M,deactivated:p,beforeDestroy:m,beforeUnmount:b,destroyed:y,unmounted:E,render:U,renderTracked:P,renderTriggered:R,errorCaptured:O,serverPrefetch:ie,expose:x,inheritAttrs:w,components:K,directives:k,filters:J}=e;if(c&&gm(c,i,null),o)for(const Q in o){const X=o[Q];Ye(X)&&(i[Q]=X.bind(t))}if(s){const Q=s.call(t,t);At(Q)&&(n.data=Jo(Q))}if(pl=!0,r)for(const Q in r){const X=r[Q],me=Ye(X)?X.bind(t,t):Ye(X.get)?X.get.bind(t,t):Fn,ye=!Ye(X)&&Ye(X.set)?X.set.bind(t):Fn,ge=bn({get:me,set:ye});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Pe=>ge.value=Pe})}if(a)for(const Q in a)Cf(a[Q],i,t,Q);if(l){const Q=Ye(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(X=>{bo(X,Q[X])})}h&&uu(h,n,"c");function G(Q,X){$e(X)?X.forEach(me=>Q(me.bind(t))):X&&Q(X.bind(t))}if(G(im,u),G(Qi,f),G(sm,d),G(rm,_),G(em,M),G(tm,p),G(um,O),G(cm,P),G(lm,R),G(om,b),G(Rc,E),G(am,ie),$e(x))if(x.length){const Q=n.exposed||(n.exposed={});x.forEach(X=>{Object.defineProperty(Q,X,{get:()=>t[X],set:me=>t[X]=me})})}else n.exposed||(n.exposed={});U&&n.render===Fn&&(n.render=U),w!=null&&(n.inheritAttrs=w),K&&(n.components=K),k&&(n.directives=k),ie&&Tf(n)}function gm(n,e,t=Fn){$e(n)&&(n=ml(n));for(const i in n){const s=n[i];let r;At(s)?"default"in s?r=ni(s.from||i,s.default,!0):r=ni(s.from||i):r=ni(s),kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function uu(n,e,t){zn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cf(n,e,t,i){let s=i.includes(".")?kf(t,i):()=>t[i];if(Dt(n)){const r=e[n];Ye(r)&&Qt(s,r)}else if(Ye(n))Qt(s,n.bind(t));else if(At(n))if($e(n))n.forEach(r=>Cf(r,e,t,i));else{const r=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(r)&&Qt(s,r,n)}}function Cc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Fo(l,c,o,!0)),Fo(l,e,o)),At(e)&&r.set(e,l),l}function Fo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Fo(n,r,t,!0),s&&s.forEach(o=>Fo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=_m[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const _m={data:hu,props:fu,emits:fu,methods:rr,computed:rr,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:rr,directives:rr,watch:xm,provide:hu,inject:vm};function hu(n,e){return e?n?function(){return zt(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function vm(n,e){return rr(ml(n),ml(e))}function ml(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qt(n,e){return n?[...new Set([].concat(n,e))]:e}function rr(n,e){return n?zt(Object.create(null),n,e):e}function fu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:zt(Object.create(null),cu(n),cu(e??{})):e}function xm(n,e){if(!n)return e;if(!e)return n;const t=zt(Object.create(null),n);for(const i in e)t[i]=qt(n[i],e[i]);return t}function Pf(){return{app:null,config:{isNativeTag:np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mm=0;function ym(n,e){return function(i,s=null){Ye(i)||(i=zt({},i)),s!=null&&!At(s)&&(s=null);const r=Pf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Mm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ng,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Ye(h.install)?(o.add(h),h.install(c,...u)):Ye(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const d=c._ceVNode||Ot(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,h):n(d,h,f),l=!0,c._container=h,h.__vue_app__=c,sa(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(zn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=Cs;Cs=c;try{return h()}finally{Cs=u}}};return c}}let Cs=null;function bo(n,e){if(Vt){let t=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===t&&(t=Vt.provides=Object.create(i)),t[n]=e}}function ni(n,e,t=!1){const i=Vt||cn;if(i||Cs){const s=Cs?Cs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const Lf={},If=()=>Object.create(Lf),Df=n=>Object.getPrototypeOf(n)===Lf;function Sm(n,e,t,i=!1){const s={},r=If();n.propsDefaults=Object.create(null),Uf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:gf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Em(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ot(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(ta(n.emitsOptions,f))continue;const d=e[f];if(l)if(st(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const _=vn(f);s[_]=gl(l,a,_,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Uf(n,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!st(e,u)&&((h=Ji(u))===u||!st(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=gl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!st(e,u))&&(delete r[u],c=!0)}c&&ti(n.attrs,"set","")}function Uf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(lr(l))continue;const c=e[l];let h;s&&st(s,h=vn(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ot(t),c=a||ht;for(let h=0;h<r.length;h++){const u=r[h];t[u]=gl(s,l,u,c[u],n,!st(c,u))}}return o}function gl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=st(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=Ur(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ji(t))&&(i=!0))}return i}const wm=new WeakMap;function Nf(n,e,t=!1){const i=t?wm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ye(n)){const h=u=>{l=!0;const[f,d]=Nf(u,e,!0);zt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return At(n)&&i.set(n,Ts),Ts;if($e(r))for(let h=0;h<r.length;h++){const u=vn(r[h]);du(u)&&(o[u]=ht)}else if(r)for(const h in r){const u=vn(h);if(du(u)){const f=r[h],d=o[u]=$e(f)||Ye(f)?{type:f}:zt({},f),_=d.type;let M=!1,p=!0;if($e(_))for(let m=0;m<_.length;++m){const b=_[m],y=Ye(b)&&b.name;if(y==="Boolean"){M=!0;break}else y==="String"&&(p=!1)}else M=Ye(_)&&_.name==="Boolean";d[0]=M,d[1]=p,(M||st(d,"default"))&&a.push(u)}}const c=[o,a];return At(n)&&i.set(n,c),c}function du(n){return n[0]!=="$"&&!lr(n)}const Of=n=>n[0]==="_"||n==="$stable",Pc=n=>$e(n)?n.map(Nn):[Nn(n)],bm=(n,e,t)=>{if(e._n)return e;const i=xs((...s)=>Pc(e(...s)),t);return i._c=!1,i},Ff=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Of(s))continue;const r=n[s];if(Ye(r))e[s]=bm(s,r,i);else if(r!=null){const o=Pc(r);e[s]=()=>o}}},Bf=(n,e)=>{const t=Pc(e);n.slots.default=()=>t},zf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Tm=(n,e,t)=>{const i=n.slots=If();if(n.vnode.shapeFlag&32){const s=e._;s?(zf(i,e,t),t&&Jh(i,"_",s,!0)):Ff(e,i)}else e&&Bf(n,e)},Am=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:zf(s,e,t):(r=!e.$stable,Ff(e,s)),o=e}else e&&(Bf(n,e),o={default:1});if(r)for(const a in s)!Of(a)&&o[a]==null&&delete s[a]},an=Gm;function Rm(n){return Cm(n)}function Cm(n,e){const t=Qh();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:d=Fn,insertStaticContent:_}=n,M=(g,T,L,I=null,D=null,Y=null,$=void 0,S=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!js(g,T)&&(I=N(g),Pe(g,D,Y,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:V,shapeFlag:B}=T;switch(C){case na:p(g,T,L,I);break;case Er:m(g,T,L,I);break;case Sa:g==null&&b(T,L,I,$);break;case gn:K(g,T,L,I,D,Y,$,S,v);break;default:B&1?U(g,T,L,I,D,Y,$,S,v):B&6?k(g,T,L,I,D,Y,$,S,v):(B&64||B&128)&&C.process(g,T,L,I,D,Y,$,S,v,ue)}V!=null&&D&&fl(V,g&&g.ref,Y,T||g,!T)},p=(g,T,L,I)=>{if(g==null)i(T.el=a(T.children),L,I);else{const D=T.el=g.el;T.children!==g.children&&c(D,T.children)}},m=(g,T,L,I)=>{g==null?i(T.el=l(T.children||""),L,I):T.el=g.el},b=(g,T,L,I)=>{[g.el,g.anchor]=_(g.children,T,L,I,g.el,g.anchor)},y=({el:g,anchor:T},L,I)=>{let D;for(;g&&g!==T;)D=f(g),i(g,L,I),g=D;i(T,L,I)},E=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=f(g),s(g),g=L;s(T)},U=(g,T,L,I,D,Y,$,S,v)=>{T.type==="svg"?$="svg":T.type==="math"&&($="mathml"),g==null?P(T,L,I,D,Y,$,S,v):ie(g,T,D,Y,$,S,v)},P=(g,T,L,I,D,Y,$,S)=>{let v,C;const{props:V,shapeFlag:B,transition:z,dirs:he}=g;if(v=g.el=o(g.type,Y,V&&V.is,V),B&8?h(v,g.children):B&16&&O(g.children,v,null,I,D,Ma(g,Y),$,S),he&&Ii(g,null,I,"created"),R(v,g,g.scopeId,$,I),V){for(const pe in V)pe!=="value"&&!lr(pe)&&r(v,pe,null,V[pe],Y,I);"value"in V&&r(v,"value",null,V.value,Y),(C=V.onVnodeBeforeMount)&&In(C,I,g)}he&&Ii(g,null,I,"beforeMount");const ce=Pm(D,z);ce&&z.beforeEnter(v),i(v,T,L),((C=V&&V.onVnodeMounted)||ce||he)&&an(()=>{C&&In(C,I,g),ce&&z.enter(v),he&&Ii(g,null,I,"mounted")},D)},R=(g,T,L,I,D)=>{if(L&&d(g,L),I)for(let Y=0;Y<I.length;Y++)d(g,I[Y]);if(D){let Y=D.subTree;if(T===Y||Xf(Y.type)&&(Y.ssContent===T||Y.ssFallback===T)){const $=D.vnode;R(g,$,$.scopeId,$.slotScopeIds,D.parent)}}},O=(g,T,L,I,D,Y,$,S,v=0)=>{for(let C=v;C<g.length;C++){const V=g[C]=S?_i(g[C]):Nn(g[C]);M(null,V,T,L,I,D,Y,$,S)}},ie=(g,T,L,I,D,Y,$)=>{const S=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:V}=T;v|=g.patchFlag&16;const B=g.props||ht,z=T.props||ht;let he;if(L&&Di(L,!1),(he=z.onVnodeBeforeUpdate)&&In(he,L,T,g),V&&Ii(T,g,L,"beforeUpdate"),L&&Di(L,!0),(B.innerHTML&&z.innerHTML==null||B.textContent&&z.textContent==null)&&h(S,""),C?x(g.dynamicChildren,C,S,L,I,Ma(T,D),Y):$||X(g,T,S,null,L,I,Ma(T,D),Y,!1),v>0){if(v&16)w(S,B,z,L,D);else if(v&2&&B.class!==z.class&&r(S,"class",null,z.class,D),v&4&&r(S,"style",B.style,z.style,D),v&8){const ce=T.dynamicProps;for(let pe=0;pe<ce.length;pe++){const Te=ce[pe],fe=B[Te],xe=z[Te];(xe!==fe||Te==="value")&&r(S,Te,fe,xe,D,L)}}v&1&&g.children!==T.children&&h(S,T.children)}else!$&&C==null&&w(S,B,z,L,D);((he=z.onVnodeUpdated)||V)&&an(()=>{he&&In(he,L,T,g),V&&Ii(T,g,L,"updated")},I)},x=(g,T,L,I,D,Y,$)=>{for(let S=0;S<T.length;S++){const v=g[S],C=T[S],V=v.el&&(v.type===gn||!js(v,C)||v.shapeFlag&70)?u(v.el):L;M(v,C,V,null,I,D,Y,$,!0)}},w=(g,T,L,I,D)=>{if(T!==L){if(T!==ht)for(const Y in T)!lr(Y)&&!(Y in L)&&r(g,Y,T[Y],null,D,I);for(const Y in L){if(lr(Y))continue;const $=L[Y],S=T[Y];$!==S&&Y!=="value"&&r(g,Y,S,$,D,I)}"value"in L&&r(g,"value",T.value,L.value,D)}},K=(g,T,L,I,D,Y,$,S,v)=>{const C=T.el=g?g.el:a(""),V=T.anchor=g?g.anchor:a("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:he}=T;he&&(S=S?S.concat(he):he),g==null?(i(C,L,I),i(V,L,I),O(T.children||[],L,V,D,Y,$,S,v)):B>0&&B&64&&z&&g.dynamicChildren?(x(g.dynamicChildren,z,L,D,Y,$,S),(T.key!=null||D&&T===D.subTree)&&Hf(g,T,!0)):X(g,T,L,V,D,Y,$,S,v)},k=(g,T,L,I,D,Y,$,S,v)=>{T.slotScopeIds=S,g==null?T.shapeFlag&512?D.ctx.activate(T,L,I,$,v):J(T,L,I,D,Y,$,v):ae(g,T,v)},J=(g,T,L,I,D,Y,$)=>{const S=g.component=Km(g,I,D);if(Af(g)&&(S.ctx.renderer=ue),jm(S,!1,$),S.asyncDep){if(D&&D.registerDep(S,G,$),!g.el){const v=S.subTree=Ot(Er);m(null,v,T,L)}}else G(S,g,T,L,D,Y,$)},ae=(g,T,L)=>{const I=T.component=g.component;if(zm(g,T,L))if(I.asyncDep&&!I.asyncResolved){Q(I,T,L);return}else I.next=T,I.update();else T.el=g.el,I.vnode=T},G=(g,T,L,I,D,Y,$)=>{const S=()=>{if(g.isMounted){let{next:B,bu:z,u:he,parent:ce,vnode:pe}=g;{const Le=Gf(g);if(Le){B&&(B.el=pe.el,Q(g,B,$)),Le.asyncDep.then(()=>{g.isUnmounted||S()});return}}let Te=B,fe;Di(g,!1),B?(B.el=pe.el,Q(g,B,$)):B=pe,z&&ma(z),(fe=B.props&&B.props.onVnodeBeforeUpdate)&&In(fe,ce,B,pe),Di(g,!0);const xe=ya(g),Ce=g.subTree;g.subTree=xe,M(Ce,xe,u(Ce.el),N(Ce),g,D,Y),B.el=xe.el,Te===null&&Hm(g,xe.el),he&&an(he,D),(fe=B.props&&B.props.onVnodeUpdated)&&an(()=>In(fe,ce,B,pe),D)}else{let B;const{el:z,props:he}=T,{bm:ce,m:pe,parent:Te,root:fe,type:xe}=g,Ce=ur(T);if(Di(g,!1),ce&&ma(ce),!Ce&&(B=he&&he.onVnodeBeforeMount)&&In(B,Te,T),Di(g,!0),z&&te){const Le=()=>{g.subTree=ya(g),te(z,g.subTree,g,D,null)};Ce&&xe.__asyncHydrate?xe.__asyncHydrate(z,g,Le):Le()}else{fe.ce&&fe.ce._injectChildStyle(xe);const Le=g.subTree=ya(g);M(null,Le,L,I,g,D,Y),T.el=Le.el}if(pe&&an(pe,D),!Ce&&(B=he&&he.onVnodeMounted)){const Le=T;an(()=>In(B,Te,Le),D)}(T.shapeFlag&256||Te&&ur(Te.vnode)&&Te.vnode.shapeFlag&256)&&g.a&&an(g.a,D),g.isMounted=!0,T=L=I=null}};g.scope.on();const v=g.effect=new tf(S);g.scope.off();const C=g.update=v.run.bind(v),V=g.job=v.runIfDirty.bind(v);V.i=g,V.id=g.uid,v.scheduler=()=>Tc(V),Di(g,!0),C()},Q=(g,T,L)=>{T.component=g;const I=g.vnode.props;g.vnode=T,g.next=null,Em(g,T.props,I,L),Am(g,T.children,L),Ai(),ou(g),Ri()},X=(g,T,L,I,D,Y,$,S,v=!1)=>{const C=g&&g.children,V=g?g.shapeFlag:0,B=T.children,{patchFlag:z,shapeFlag:he}=T;if(z>0){if(z&128){ye(C,B,L,I,D,Y,$,S,v);return}else if(z&256){me(C,B,L,I,D,Y,$,S,v);return}}he&8?(V&16&&Se(C,D,Y),B!==C&&h(L,B)):V&16?he&16?ye(C,B,L,I,D,Y,$,S,v):Se(C,D,Y,!0):(V&8&&h(L,""),he&16&&O(B,L,I,D,Y,$,S,v))},me=(g,T,L,I,D,Y,$,S,v)=>{g=g||Ts,T=T||Ts;const C=g.length,V=T.length,B=Math.min(C,V);let z;for(z=0;z<B;z++){const he=T[z]=v?_i(T[z]):Nn(T[z]);M(g[z],he,L,null,D,Y,$,S,v)}C>V?Se(g,D,Y,!0,!1,B):O(T,L,I,D,Y,$,S,v,B)},ye=(g,T,L,I,D,Y,$,S,v)=>{let C=0;const V=T.length;let B=g.length-1,z=V-1;for(;C<=B&&C<=z;){const he=g[C],ce=T[C]=v?_i(T[C]):Nn(T[C]);if(js(he,ce))M(he,ce,L,null,D,Y,$,S,v);else break;C++}for(;C<=B&&C<=z;){const he=g[B],ce=T[z]=v?_i(T[z]):Nn(T[z]);if(js(he,ce))M(he,ce,L,null,D,Y,$,S,v);else break;B--,z--}if(C>B){if(C<=z){const he=z+1,ce=he<V?T[he].el:I;for(;C<=z;)M(null,T[C]=v?_i(T[C]):Nn(T[C]),L,ce,D,Y,$,S,v),C++}}else if(C>z)for(;C<=B;)Pe(g[C],D,Y,!0),C++;else{const he=C,ce=C,pe=new Map;for(C=ce;C<=z;C++){const De=T[C]=v?_i(T[C]):Nn(T[C]);De.key!=null&&pe.set(De.key,C)}let Te,fe=0;const xe=z-ce+1;let Ce=!1,Le=0;const be=new Array(xe);for(C=0;C<xe;C++)be[C]=0;for(C=he;C<=B;C++){const De=g[C];if(fe>=xe){Pe(De,D,Y,!0);continue}let Be;if(De.key!=null)Be=pe.get(De.key);else for(Te=ce;Te<=z;Te++)if(be[Te-ce]===0&&js(De,T[Te])){Be=Te;break}Be===void 0?Pe(De,D,Y,!0):(be[Be-ce]=C+1,Be>=Le?Le=Be:Ce=!0,M(De,T[Be],L,null,D,Y,$,S,v),fe++)}const Ve=Ce?Lm(be):Ts;for(Te=Ve.length-1,C=xe-1;C>=0;C--){const De=ce+C,Be=T[De],F=De+1<V?T[De+1].el:I;be[C]===0?M(null,Be,L,F,D,Y,$,S,v):Ce&&(Te<0||C!==Ve[Te]?ge(Be,L,F,2):Te--)}}},ge=(g,T,L,I,D=null)=>{const{el:Y,type:$,transition:S,children:v,shapeFlag:C}=g;if(C&6){ge(g.component.subTree,T,L,I);return}if(C&128){g.suspense.move(T,L,I);return}if(C&64){$.move(g,T,L,ue);return}if($===gn){i(Y,T,L);for(let B=0;B<v.length;B++)ge(v[B],T,L,I);i(g.anchor,T,L);return}if($===Sa){y(g,T,L);return}if(I!==2&&C&1&&S)if(I===0)S.beforeEnter(Y),i(Y,T,L),an(()=>S.enter(Y),D);else{const{leave:B,delayLeave:z,afterLeave:he}=S,ce=()=>i(Y,T,L),pe=()=>{B(Y,()=>{ce(),he&&he()})};z?z(Y,ce,pe):pe()}else i(Y,T,L)},Pe=(g,T,L,I=!1,D=!1)=>{const{type:Y,props:$,ref:S,children:v,dynamicChildren:C,shapeFlag:V,patchFlag:B,dirs:z,cacheIndex:he}=g;if(B===-2&&(D=!1),S!=null&&fl(S,null,L,g,!0),he!=null&&(T.renderCache[he]=void 0),V&256){T.ctx.deactivate(g);return}const ce=V&1&&z,pe=!ur(g);let Te;if(pe&&(Te=$&&$.onVnodeBeforeUnmount)&&In(Te,T,g),V&6)de(g.component,L,I);else{if(V&128){g.suspense.unmount(L,I);return}ce&&Ii(g,null,T,"beforeUnmount"),V&64?g.type.remove(g,T,L,ue,I):C&&!C.hasOnce&&(Y!==gn||B>0&&B&64)?Se(C,T,L,!1,!0):(Y===gn&&B&384||!D&&V&16)&&Se(v,T,L),I&&Fe(g)}(pe&&(Te=$&&$.onVnodeUnmounted)||ce)&&an(()=>{Te&&In(Te,T,g),ce&&Ii(g,null,T,"unmounted")},L)},Fe=g=>{const{type:T,el:L,anchor:I,transition:D}=g;if(T===gn){oe(L,I);return}if(T===Sa){E(g);return}const Y=()=>{s(L),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:S}=D,v=()=>$(L,Y);S?S(g.el,Y,v):v()}else Y()},oe=(g,T)=>{let L;for(;g!==T;)L=f(g),s(g),g=L;s(T)},de=(g,T,L)=>{const{bum:I,scope:D,job:Y,subTree:$,um:S,m:v,a:C}=g;pu(v),pu(C),I&&ma(I),D.stop(),Y&&(Y.flags|=8,Pe($,g,T,L)),S&&an(S,T),an(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Se=(g,T,L,I=!1,D=!1,Y=0)=>{for(let $=Y;$<g.length;$++)Pe(g[$],T,L,I,D)},N=g=>{if(g.shapeFlag&6)return N(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),L=T&&T[Jp];return L?f(L):T};let le=!1;const re=(g,T,L)=>{g==null?T._vnode&&Pe(T._vnode,null,null,!0):M(T._vnode||null,g,T,null,null,null,L),T._vnode=g,le||(le=!0,ou(),Ef(),le=!1)},ue={p:M,um:Pe,m:ge,r:Fe,mt:J,mc:O,pc:X,pbc:x,n:N,o:n};let Ee,te;return{render:re,hydrate:Ee,createApp:ym(re,Ee)}}function Ma({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Pm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hf(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=_i(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Hf(o,a)),a.type===na&&(a.el=o.el)}}function Lm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Gf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gf(e)}function pu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Im=Symbol.for("v-scx"),Dm=()=>ni(Im);function Qt(n,e,t){return Vf(n,e,t)}function Vf(n,e,t=ht){const{immediate:i,deep:s,flush:r,once:o}=t,a=zt({},t);let l;if(ia)if(r==="sync"){const f=Dm();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=Fn,f.resume=Fn,f.pause=Fn,f}const c=Vt;a.call=(f,d,_)=>zn(f,c,d,_);let h=!1;r==="post"?a.scheduler=f=>{an(f,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,d)=>{d?f():Tc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const u=Yp(n,e,a);return l&&l.push(u),u}function Um(n,e,t){const i=this.proxy,s=Dt(n)?n.includes(".")?kf(i,n):()=>i[n]:n.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,t=e);const o=Ur(this),a=Vf(s,r.bind(i),t);return o(),a}function kf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Nm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${vn(e)}Modifiers`]||n[`${Ji(e)}Modifiers`];function Om(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let s=t;const r=e.startsWith("update:"),o=r&&Nm(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Dt(h)?h.trim():h)),o.number&&(s=t.map(up)));let a,l=i[a=pa(e)]||i[a=pa(vn(e))];!l&&r&&(l=i[a=pa(Ji(e))]),l&&zn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,zn(c,n,6,s)}}function Wf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ye(n)){const l=c=>{const h=Wf(c,e,!0);h&&(a=!0,zt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(At(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>o[l]=null):zt(o,r),At(n)&&i.set(n,o),o)}function ta(n,e){return!n||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(n,e[0].toLowerCase()+e.slice(1))||st(n,Ji(e))||st(n,e))}function ya(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:d,ctx:_,inheritAttrs:M}=n,p=Oo(n);let m,b;try{if(t.shapeFlag&4){const E=s||i,U=E;m=Nn(c.call(U,E,h,u,d,f,_)),b=a}else{const E=e;m=Nn(E.length>1?E(u,{attrs:a,slots:o,emit:l}):E(u,null)),b=e.props?a:Fm(a)}}catch(E){fr.length=0,Qo(E,n,1),m=Ot(Er)}let y=m;if(b&&M!==!1){const E=Object.keys(b),{shapeFlag:U}=y;E.length&&U&7&&(r&&E.some(hc)&&(b=Bm(b,r)),y=Us(y,b,!1,!0))}return t.dirs&&(y=Us(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Ac(y,t.transition),m=y,Oo(p),m}const Fm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Yo(t))&&((e||(e={}))[t]=n[t]);return e},Bm=(n,e)=>{const t={};for(const i in n)(!hc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function zm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?mu(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==i[f]&&!ta(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?mu(i,o,c):!0:!!o;return!1}function mu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ta(t,r))return!0}return!1}function Hm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Xf=n=>n.__isSuspense;function Gm(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):jp(n)}const gn=Symbol.for("v-fgt"),na=Symbol.for("v-txt"),Er=Symbol.for("v-cmt"),Sa=Symbol.for("v-stc"),fr=[];let un=null;function Ws(n=!1){fr.push(un=n?null:[])}function Vm(){fr.pop(),un=fr[fr.length-1]||null}let wr=1;function gu(n){wr+=n,n<0&&un&&(un.hasOnce=!0)}function km(n){return n.dynamicChildren=wr>0?un||Ts:null,Vm(),wr>0&&un&&un.push(n),n}function Xs(n,e,t,i,s,r){return km(gt(n,e,t,i,s,r,!0))}function Bo(n){return n?n.__v_isVNode===!0:!1}function js(n,e){return n.type===e.type&&n.key===e.key}const qf=({key:n})=>n??null,To=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||kt(n)||Ye(n)?{i:cn,r:n,k:e,f:!!t}:n:null);function gt(n,e=null,t=null,i=0,s=null,r=n===gn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qf(e),ref:e&&To(e),scopeId:bf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:cn};return a?(Lc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),wr>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const Ot=Wm;function Wm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===fm)&&(n=Er),Bo(n)){const a=Us(n,e,!0);return t&&Lc(a,t),wr>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(n)]=a:un.push(a)),a.patchFlag=-2,a}if(tg(n)&&(n=n.__vccOpts),e){e=Xm(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=Ti(a)),At(l)&&(Ec(l)&&!$e(l)&&(l=zt({},l)),e.style=pc(l))}const o=Dt(n)?1:Xf(n)?128:Qp(n)?64:At(n)?4:Ye(n)?2:0;return gt(n,e,t,i,s,o,r,!0)}function Xm(n){return n?Ec(n)||Df(n)?zt({},n):n:null}function Us(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?qm(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&qf(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(To(e)):[r,To(e)]:To(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Us(n.ssContent),ssFallback:n.ssFallback&&Us(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ac(h,l.clone(h)),h}function Ms(n=" ",e=0){return Ot(na,null,n,e)}function Nn(n){return n==null||typeof n=="boolean"?Ot(Er):$e(n)?Ot(gn,null,n.slice()):Bo(n)?_i(n):Ot(na,null,String(n))}function _i(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Us(n)}function Lc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Lc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Df(e)?e._ctx=cn:s===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[Ms(e)]):t=8);n.children=e,n.shapeFlag|=t}function qm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ti([e.class,i.class]));else if(s==="style")e.style=pc([e.style,i.style]);else if(Yo(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function In(n,e,t,i=null){zn(n,e,7,[t,i])}const Ym=Pf();let $m=0;function Km(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Ym,r={uid:$m++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nf(i,s),emitsOptions:Wf(i,s),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Om.bind(null,r),n.ce&&n.ce(r),r}let Vt=null,zo,_l;{const n=Qh(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};zo=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),_l=e("__VUE_SSR_SETTERS__",t=>ia=t)}const Ur=n=>{const e=Vt;return zo(n),n.scope.on(),()=>{n.scope.off(),zo(e)}},_u=()=>{Vt&&Vt.scope.off(),zo(null)};function Yf(n){return n.vnode.shapeFlag&4}let ia=!1;function jm(n,e=!1,t=!1){e&&_l(e);const{props:i,children:s}=n.vnode,r=Yf(n);Sm(n,i,r,e),Tm(n,s,t);const o=r?Zm(n,e):void 0;return e&&_l(!1),o}function Zm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,pm);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Qm(n):null,r=Ur(n);Ai();const o=Dr(i,n,0,[n.props,s]);if(Ri(),r(),Zh(o)){if(ur(n)||Tf(n),o.then(_u,_u),e)return o.then(a=>{vu(n,a,e)}).catch(a=>{Qo(a,n,0)});n.asyncDep=o}else vu(n,o,e)}else $f(n,e)}function vu(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:At(e)&&(n.setupState=xf(e)),$f(n,t)}let xu;function $f(n,e,t){const i=n.type;if(!n.render){if(!e&&xu&&!i.render){const s=i.template||Cc(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=zt(zt({isCustomElement:r,delimiters:a},o),l);i.render=xu(s,c)}}n.render=i.render||Fn}{const s=Ur(n);Ai();try{mm(n)}finally{Ri(),s()}}}const Jm={get(n,e){return Xt(n,"get",""),n[e]}};function Qm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Jm),slots:n.slots,emit:n.emit,expose:e}}function sa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xf(Hp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in hr)return hr[t](n)},has(e,t){return t in e||t in hr}})):n.proxy}function eg(n,e=!0){return Ye(n)?n.displayName||n.name:n.name||e&&n.__name}function tg(n){return Ye(n)&&"__vccOpts"in n}const bn=(n,e)=>Xp(n,e,ia);function Kf(n,e,t){const i=arguments.length;return i===2?At(e)&&!$e(e)?Bo(e)?Ot(n,null,[e]):Ot(n,e):Ot(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Bo(t)&&(t=[t]),Ot(n,e,t))}const ng="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vl;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{vl=Mu.createPolicy("vue",{createHTML:n=>n})}catch{}const jf=vl?n=>vl.createHTML(n):n=>n,ig="http://www.w3.org/2000/svg",sg="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,yu=Zn&&Zn.createElement("template"),rg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Zn.createElementNS(ig,n):e==="mathml"?Zn.createElementNS(sg,n):t?Zn.createElement(n,{is:t}):Zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{yu.innerHTML=jf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=yu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},og=Symbol("_vtc");function ag(n,e,t){const i=n[og];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ho=Symbol("_vod"),Zf=Symbol("_vsh"),lg={beforeMount(n,{value:e},{transition:t}){n[Ho]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Zs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Zs(n,!0),i.enter(n)):i.leave(n,()=>{Zs(n,!1)}):Zs(n,e))},beforeUnmount(n,{value:e}){Zs(n,e)}};function Zs(n,e){n.style.display=e?n[Ho]:"none",n[Zf]=!e}const cg=Symbol(""),ug=/(^|;)\s*display\s*:/;function hg(n,e,t){const i=n.style,s=Dt(t);let r=!1;if(t&&!s){if(e)if(Dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ao(i,a,"")}else for(const o in e)t[o]==null&&Ao(i,o,"");for(const o in t)o==="display"&&(r=!0),Ao(i,o,t[o])}else if(s){if(e!==t){const o=i[cg];o&&(t+=";"+o),i.cssText=t,r=ug.test(t)}}else e&&n.removeAttribute("style");Ho in n&&(n[Ho]=r?i.display:"",n[Zf]&&(i.display="none"))}const Su=/\s*!important$/;function Ao(n,e,t){if($e(t))t.forEach(i=>Ao(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=fg(n,e);Su.test(t)?n.setProperty(Ji(i),t.replace(Su,""),"important"):n[i]=t}}const Eu=["Webkit","Moz","ms"],Ea={};function fg(n,e){const t=Ea[e];if(t)return t;let i=vn(e);if(i!=="filter"&&i in n)return Ea[e]=i;i=jo(i);for(let s=0;s<Eu.length;s++){const r=Eu[s]+i;if(r in n)return Ea[e]=r}return e}const wu="http://www.w3.org/1999/xlink";function bu(n,e,t,i,s,r=gp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(wu,e.slice(6,e.length)):n.setAttributeNS(wu,e,t):t==null||r&&!ef(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ks(t)?String(t):t)}function Tu(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=ef(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function dg(n,e,t,i){n.addEventListener(e,t,i)}function pg(n,e,t,i){n.removeEventListener(e,t,i)}const Au=Symbol("_vei");function mg(n,e,t,i,s=null){const r=n[Au]||(n[Au]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=gg(e);if(i){const c=r[e]=xg(i,s);dg(n,a,c,l)}else o&&(pg(n,a,o,l),r[e]=void 0)}}const Ru=/(?:Once|Passive|Capture)$/;function gg(n){let e;if(Ru.test(n)){e={};let i;for(;i=n.match(Ru);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ji(n.slice(2)),e]}let wa=0;const _g=Promise.resolve(),vg=()=>wa||(_g.then(()=>wa=0),wa=Date.now());function xg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;zn(Mg(i,t.value),e,5,[i])};return t.value=n,t.attached=vg(),t}function Mg(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Cu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,yg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?ag(n,i,o):e==="style"?hg(n,t,i):Yo(e)?hc(e)||mg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sg(n,e,i,o))?(Tu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Dt(i))?Tu(n,vn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),bu(n,e,i,o))};function Sg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Cu(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cu(e)&&Dt(t)?!1:e in n}const Eg=zt({patchProp:yg},rg);let Pu;function wg(){return Pu||(Pu=Rm(Eg))}const bg=(...n)=>{const e=wg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Ag(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Tg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Tg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ag(n){return Dt(n)?document.querySelector(n):n}const Rg={id:"app"},Cg=Ci({__name:"App",setup(n){const e=mt(!1);function t(i){i.clientY<50?e.value=!0:e.value=!1}return Qi(()=>{window.addEventListener("mousemove",t)}),Rc(()=>{window.removeEventListener("mousemove",t)}),(i,s)=>{const r=au("router-link"),o=au("router-view");return Ws(),Xs("div",Rg,[Zp(gt("nav",null,[Ot(r,{to:"/3d-bear-arts/leather"},{default:xs(()=>s[0]||(s[0]=[Ms("Leather")])),_:1}),Ot(r,{to:"/3d-bear-arts/pop-art"},{default:xs(()=>s[1]||(s[1]=[Ms("Pop")])),_:1}),Ot(r,{to:"/3d-bear-arts/pop-art-bear"},{default:xs(()=>s[2]||(s[2]=[Ms("Pop-Bear")])),_:1}),Ot(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:xs(()=>s[3]||(s[3]=[Ms("Pop-Bear-3")])),_:1}),Ot(r,{to:"/3d-bear-arts"},{default:xs(()=>s[4]||(s[4]=[Ms("Metal Bear")])),_:1})],512),[[lg,e.value]]),Ot(o)])}}}),qs=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Pg=qs(Cg,[["__scopeId","data-v-3204156c"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof document<"u";function Jf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Lg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Jf(n.default)}const lt=Object.assign;function ba(n,e){const t={};for(const i in e){const s=e[i];t[i]=Ln(s)?s.map(n):n(s)}return t}const dr=()=>{},Ln=Array.isArray,Qf=/#/g,Ig=/&/g,Dg=/\//g,Ug=/=/g,Ng=/\?/g,ed=/\+/g,Og=/%5B/g,Fg=/%5D/g,td=/%5E/g,Bg=/%60/g,nd=/%7B/g,zg=/%7C/g,id=/%7D/g,Hg=/%20/g;function Ic(n){return encodeURI(""+n).replace(zg,"|").replace(Og,"[").replace(Fg,"]")}function Gg(n){return Ic(n).replace(nd,"{").replace(id,"}").replace(td,"^")}function xl(n){return Ic(n).replace(ed,"%2B").replace(Hg,"+").replace(Qf,"%23").replace(Ig,"%26").replace(Bg,"`").replace(nd,"{").replace(id,"}").replace(td,"^")}function Vg(n){return xl(n).replace(Ug,"%3D")}function kg(n){return Ic(n).replace(Qf,"%23").replace(Ng,"%3F")}function Wg(n){return n==null?"":kg(n).replace(Dg,"%2F")}function br(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Xg=/\/$/,qg=n=>n.replace(Xg,"");function Ta(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=jg(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:br(o)}}function Yg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Lu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function $g(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Ns(e.matched[i],t.matched[s])&&sd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ns(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function sd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Kg(n[t],e[t]))return!1;return!0}function Kg(n,e){return Ln(n)?Iu(n,e):Ln(e)?Iu(e,n):n===e}function Iu(n,e){return Ln(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function jg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Tr;(function(n){n.pop="pop",n.push="push"})(Tr||(Tr={}));var pr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(pr||(pr={}));function Zg(n){if(!n)if(ys){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),qg(n)}const Jg=/^[^#]+#/;function Qg(n,e){return n.replace(Jg,"#")+e}function e0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ra=()=>({left:window.scrollX,top:window.scrollY});function t0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=e0(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Du(n,e){return(history.state?history.state.position-e:-1)+n}const Ml=new Map;function n0(n,e){Ml.set(n,e)}function i0(n){const e=Ml.get(n);return Ml.delete(n),e}let s0=()=>location.protocol+"//"+location.host;function rd(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Lu(l,"")}return Lu(t,n)+i+s}function r0(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=rd(n,location),_=t.value,M=e.value;let p=0;if(f){if(t.value=d,e.value=f,o&&o===_){o=null;return}p=M?f.position-M.position:0}else i(d);s.forEach(m=>{m(t.value,_,{delta:p,type:Tr.pop,direction:p?p>0?pr.forward:pr.back:pr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(d),d}function h(){const{history:f}=window;f.state&&f.replaceState(lt({},f.state,{scroll:ra()}),"")}function u(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Uu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?ra():null}}function o0(n){const{history:e,location:t}=window,i={value:rd(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=n.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:s0()+n+l;try{e[h?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[h?"replace":"assign"](f)}}function o(l,c){const h=lt({},e.state,Uu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=lt({},s.value,e.state,{forward:l,scroll:ra()});r(h.current,h,!0);const u=lt({},Uu(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function a0(n){n=Zg(n);const e=o0(n),t=r0(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=lt({location:"",base:n,go:i,createHref:Qg.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function l0(n){return typeof n=="string"||n&&typeof n=="object"}function od(n){return typeof n=="string"||typeof n=="symbol"}const ad=Symbol("");var Nu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Nu||(Nu={}));function Os(n,e){return lt(new Error,{type:n,[ad]:!0},e)}function kn(n,e){return n instanceof Error&&ad in n&&(e==null||!!(n.type&e))}const Ou="[^/]+?",c0={sensitive:!1,strict:!1,start:!0,end:!0},u0=/[.+*?^${}()[\]/\\]/g;function h0(n,e){const t=lt({},c0,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const h=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const f=c[u];let d=40+(t.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(u0,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:M,optional:p,regexp:m}=f;r.push({name:_,repeatable:M,optional:p});const b=m||Ou;if(b!==Ou){d+=10;try{new RegExp(`(${b})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+E.message)}}let y=M?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(y=p&&c.length<2?`(?:/${y})`:"/"+y),p&&(y+="?"),s+=y,d+=20,p&&(d+=-8),M&&(d+=-20),b===".*"&&(d+=-50)}h.push(d)}i.push(h)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let f=1;f<h.length;f++){const d=h[f]||"",_=r[f-1];u[_.name]=d&&_.repeatable?d.split("/"):d}return u}function l(c){let h="",u=!1;for(const f of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const d of f)if(d.type===0)h+=d.value;else if(d.type===1){const{value:_,repeatable:M,optional:p}=d,m=_ in c?c[_]:"";if(Ln(m)&&!M)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Ln(m)?m.join("/"):m;if(!b)if(p)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function f0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ld(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=f0(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Fu(i))return 1;if(Fu(s))return-1}return s.length-i.length}function Fu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const d0={type:0,value:""},p0=/[a-zA-Z0-9_]/;function m0(n){if(!n)return[[]];if(n==="/")return[[d0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:p0.test(l)?f():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:t=3:h+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function g0(n,e,t){const i=h0(m0(n.path),t),s=lt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function _0(n,e){const t=[],i=new Map;e=Gu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,d){const _=!d,M=zu(u);M.aliasOf=d&&d.record;const p=Gu(e,u),m=[M];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of E)m.push(zu(lt({},M,{components:d?d.record.components:M.components,path:U,aliasOf:d?d.record:M})))}let b,y;for(const E of m){const{path:U}=E;if(f&&U[0]!=="/"){const P=f.record.path,R=P[P.length-1]==="/"?"":"/";E.path=f.record.path+(U&&R+U)}if(b=g0(E,f,p),d?d.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),_&&u.name&&!Hu(b)&&o(u.name)),cd(b)&&l(b),M.children){const P=M.children;for(let R=0;R<P.length;R++)r(P[R],b,d&&d.children[R])}d=d||b}return y?()=>{o(y)}:dr}function o(u){if(od(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){const f=M0(u,t);t.splice(f,0,u),u.record.name&&!Hu(u)&&i.set(u.record.name,u)}function c(u,f){let d,_={},M,p;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Os(1,{location:u});p=d.record.name,_=lt(Bu(f.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&Bu(u.params,d.keys.map(y=>y.name))),M=d.stringify(_)}else if(u.path!=null)M=u.path,d=t.find(y=>y.re.test(M)),d&&(_=d.parse(M),p=d.record.name);else{if(d=f.name?i.get(f.name):t.find(y=>y.re.test(f.path)),!d)throw Os(1,{location:u,currentLocation:f});p=d.record.name,_=lt({},f.params,u.params),M=d.stringify(_)}const m=[];let b=d;for(;b;)m.unshift(b.record),b=b.parent;return{name:p,path:M,params:_,matched:m,meta:x0(m)}}n.forEach(u=>r(u));function h(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Bu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function zu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:v0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function v0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Hu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function x0(n){return n.reduce((e,t)=>lt(e,t.meta),{})}function Gu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function M0(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;ld(n,e[r])<0?i=r:t=r+1}const s=y0(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function y0(n){let e=n;for(;e=e.parent;)if(cd(e)&&ld(n,e)===0)return e}function cd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function S0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(ed," "),o=r.indexOf("="),a=br(o<0?r:r.slice(0,o)),l=o<0?null:br(r.slice(o+1));if(a in e){let c=e[a];Ln(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Vu(n){let e="";for(let t in n){const i=n[t];if(t=Vg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ln(i)?i.map(r=>r&&xl(r)):[i&&xl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function E0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Ln(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const w0=Symbol(""),ku=Symbol(""),Dc=Symbol(""),ud=Symbol(""),yl=Symbol("");function Js(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function vi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Os(4,{from:t,to:e})):f instanceof Error?l(f):l0(f)?l(Os(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},h=r(()=>n.call(i&&i.instances[s],e,t,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(f=>l(f))})}function Aa(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Jf(l)){const h=(l.__vccOpts||l)[e];h&&r.push(vi(h,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=Lg(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const d=(u.__vccOpts||u)[e];return d&&vi(d,t,i,o,a,s)()}))}}return r}function Wu(n){const e=ni(Dc),t=ni(ud),i=bn(()=>{const l=As(n.to);return e.resolve(l)}),s=bn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=t.matched;if(!h||!u.length)return-1;const f=u.findIndex(Ns.bind(null,h));if(f>-1)return f;const d=Xu(l[c-2]);return c>1&&Xu(h)===d&&u[u.length-1].path!==d?u.findIndex(Ns.bind(null,l[c-2])):f}),r=bn(()=>s.value>-1&&R0(t.params,i.value.params)),o=bn(()=>s.value>-1&&s.value===t.matched.length-1&&sd(t.params,i.value.params));function a(l={}){return A0(l)?e[As(n.replace)?"replace":"push"](As(n.to)).catch(dr):Promise.resolve()}return{route:i,href:bn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const b0=Ci({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wu,setup(n,{slots:e}){const t=Jo(Wu(n)),{options:i}=ni(Dc),s=bn(()=>({[qu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[qu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Kf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),T0=b0;function A0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function R0(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Ln(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Xu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const qu=(n,e,t)=>n??e??t,C0=Ci({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ni(yl),s=bn(()=>n.route||i.value),r=ni(ku,0),o=bn(()=>{let c=As(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=bn(()=>s.value.matched[o.value]);bo(ku,bn(()=>o.value+1)),bo(w0,a),bo(yl,s);const l=mt();return Qt(()=>[l.value,a.value,n.name],([c,h,u],[f,d,_])=>{h&&(h.instances[u]=c,d&&d!==h&&c&&c===f&&(h.leaveGuards.size||(h.leaveGuards=d.leaveGuards),h.updateGuards.size||(h.updateGuards=d.updateGuards))),c&&h&&(!d||!Ns(h,d)||!f)&&(h.enterCallbacks[u]||[]).forEach(M=>M(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,f=u&&u.components[h];if(!f)return Yu(t.default,{Component:f,route:c});const d=u.props[h],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=Kf(f,lt({},_,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return Yu(t.default,{Component:p,route:c})||p}}});function Yu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const P0=C0;function L0(n){const e=_0(n.routes,n),t=n.parseQuery||S0,i=n.stringifyQuery||Vu,s=n.history,r=Js(),o=Js(),a=Js(),l=Gp(ci);let c=ci;ys&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ba.bind(null,N=>""+N),u=ba.bind(null,Wg),f=ba.bind(null,br);function d(N,le){let re,ue;return od(N)?(re=e.getRecordMatcher(N),ue=le):ue=N,e.addRoute(ue,re)}function _(N){const le=e.getRecordMatcher(N);le&&e.removeRoute(le)}function M(){return e.getRoutes().map(N=>N.record)}function p(N){return!!e.getRecordMatcher(N)}function m(N,le){if(le=lt({},le||l.value),typeof N=="string"){const T=Ta(t,N,le.path),L=e.resolve({path:T.path},le),I=s.createHref(T.fullPath);return lt(T,L,{params:f(L.params),hash:br(T.hash),redirectedFrom:void 0,href:I})}let re;if(N.path!=null)re=lt({},N,{path:Ta(t,N.path,le.path).path});else{const T=lt({},N.params);for(const L in T)T[L]==null&&delete T[L];re=lt({},N,{params:u(T)}),le.params=u(le.params)}const ue=e.resolve(re,le),Ee=N.hash||"";ue.params=h(f(ue.params));const te=Yg(i,lt({},N,{hash:Gg(Ee),path:ue.path})),g=s.createHref(te);return lt({fullPath:te,hash:Ee,query:i===Vu?E0(N.query):N.query||{}},ue,{redirectedFrom:void 0,href:g})}function b(N){return typeof N=="string"?Ta(t,N,l.value.path):lt({},N)}function y(N,le){if(c!==N)return Os(8,{from:le,to:N})}function E(N){return R(N)}function U(N){return E(lt(b(N),{replace:!0}))}function P(N){const le=N.matched[N.matched.length-1];if(le&&le.redirect){const{redirect:re}=le;let ue=typeof re=="function"?re(N):re;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=b(ue):{path:ue},ue.params={}),lt({query:N.query,hash:N.hash,params:ue.path!=null?{}:N.params},ue)}}function R(N,le){const re=c=m(N),ue=l.value,Ee=N.state,te=N.force,g=N.replace===!0,T=P(re);if(T)return R(lt(b(T),{state:typeof T=="object"?lt({},Ee,T.state):Ee,force:te,replace:g}),le||re);const L=re;L.redirectedFrom=le;let I;return!te&&$g(i,ue,re)&&(I=Os(16,{to:L,from:ue}),ge(ue,ue,!0,!1)),(I?Promise.resolve(I):x(L,ue)).catch(D=>kn(D)?kn(D,2)?D:ye(D):X(D,L,ue)).then(D=>{if(D){if(kn(D,2))return R(lt({replace:g},b(D.to),{state:typeof D.to=="object"?lt({},Ee,D.to.state):Ee,force:te}),le||L)}else D=K(L,ue,!0,g,Ee);return w(L,ue,D),D})}function O(N,le){const re=y(N,le);return re?Promise.reject(re):Promise.resolve()}function ie(N){const le=oe.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(N):N()}function x(N,le){let re;const[ue,Ee,te]=I0(N,le);re=Aa(ue.reverse(),"beforeRouteLeave",N,le);for(const T of ue)T.leaveGuards.forEach(L=>{re.push(vi(L,N,le))});const g=O.bind(null,N,le);return re.push(g),Se(re).then(()=>{re=[];for(const T of r.list())re.push(vi(T,N,le));return re.push(g),Se(re)}).then(()=>{re=Aa(Ee,"beforeRouteUpdate",N,le);for(const T of Ee)T.updateGuards.forEach(L=>{re.push(vi(L,N,le))});return re.push(g),Se(re)}).then(()=>{re=[];for(const T of te)if(T.beforeEnter)if(Ln(T.beforeEnter))for(const L of T.beforeEnter)re.push(vi(L,N,le));else re.push(vi(T.beforeEnter,N,le));return re.push(g),Se(re)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),re=Aa(te,"beforeRouteEnter",N,le,ie),re.push(g),Se(re))).then(()=>{re=[];for(const T of o.list())re.push(vi(T,N,le));return re.push(g),Se(re)}).catch(T=>kn(T,8)?T:Promise.reject(T))}function w(N,le,re){a.list().forEach(ue=>ie(()=>ue(N,le,re)))}function K(N,le,re,ue,Ee){const te=y(N,le);if(te)return te;const g=le===ci,T=ys?history.state:{};re&&(ue||g?s.replace(N.fullPath,lt({scroll:g&&T&&T.scroll},Ee)):s.push(N.fullPath,Ee)),l.value=N,ge(N,le,re,g),ye()}let k;function J(){k||(k=s.listen((N,le,re)=>{if(!de.listening)return;const ue=m(N),Ee=P(ue);if(Ee){R(lt(Ee,{replace:!0}),ue).catch(dr);return}c=ue;const te=l.value;ys&&n0(Du(te.fullPath,re.delta),ra()),x(ue,te).catch(g=>kn(g,12)?g:kn(g,2)?(R(g.to,ue).then(T=>{kn(T,20)&&!re.delta&&re.type===Tr.pop&&s.go(-1,!1)}).catch(dr),Promise.reject()):(re.delta&&s.go(-re.delta,!1),X(g,ue,te))).then(g=>{g=g||K(ue,te,!1),g&&(re.delta&&!kn(g,8)?s.go(-re.delta,!1):re.type===Tr.pop&&kn(g,20)&&s.go(-1,!1)),w(ue,te,g)}).catch(dr)}))}let ae=Js(),G=Js(),Q;function X(N,le,re){ye(N);const ue=G.list();return ue.length?ue.forEach(Ee=>Ee(N,le,re)):console.error(N),Promise.reject(N)}function me(){return Q&&l.value!==ci?Promise.resolve():new Promise((N,le)=>{ae.add([N,le])})}function ye(N){return Q||(Q=!N,J(),ae.list().forEach(([le,re])=>N?re(N):le()),ae.reset()),N}function ge(N,le,re,ue){const{scrollBehavior:Ee}=n;if(!ys||!Ee)return Promise.resolve();const te=!re&&i0(Du(N.fullPath,0))||(ue||!re)&&history.state&&history.state.scroll||null;return yf().then(()=>Ee(N,le,te)).then(g=>g&&t0(g)).catch(g=>X(g,N,le))}const Pe=N=>s.go(N);let Fe;const oe=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:p,getRoutes:M,resolve:m,options:n,push:E,replace:U,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:me,install(N){const le=this;N.component("RouterLink",T0),N.component("RouterView",P0),N.config.globalProperties.$router=le,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>As(l)}),ys&&!Fe&&l.value===ci&&(Fe=!0,E(s.location).catch(Ee=>{}));const re={};for(const Ee in ci)Object.defineProperty(re,Ee,{get:()=>l.value[Ee],enumerable:!0});N.provide(Dc,le),N.provide(ud,gf(re)),N.provide(yl,l);const ue=N.unmount;oe.add(N),N.unmount=function(){oe.delete(N),oe.size<1&&(c=ci,k&&k(),k=null,l.value=ci,Fe=!1,Q=!1),ue()}}};function Se(N){return N.reduce((le,re)=>le.then(()=>ie(re)),Promise.resolve())}return de}function I0(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ns(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ns(c,l))||s.push(l))}return[t,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="169",D0=0,$u=1,U0=2,hd=1,N0=2,jn=3,Ei=0,en=1,xt=2,Mi=0,Ps=1,Ku=2,ju=3,Zu=4,O0=5,ki=100,F0=101,B0=102,z0=103,H0=104,G0=200,V0=201,k0=202,W0=203,Sl=204,El=205,X0=206,q0=207,Y0=208,$0=209,K0=210,j0=211,Z0=212,J0=213,Q0=214,wl=0,bl=1,Tl=2,Fs=3,Al=4,Rl=5,Cl=6,Pl=7,fd=0,e_=1,t_=2,yi=0,n_=1,i_=2,s_=3,r_=4,o_=5,a_=6,l_=7,dd=300,Bs=301,zs=302,Go=303,Ll=304,oa=306,hn=1e3,Xi=1001,Il=1002,_n=1003,c_=1004,eo=1005,Tn=1006,Ra=1007,qi=1008,si=1009,pd=1010,md=1011,Ar=1012,Nc=1013,Ki=1014,Qn=1015,Nr=1016,Oc=1017,Fc=1018,Hs=1020,gd=35902,_d=1021,vd=1022,Rn=1023,xd=1024,Md=1025,Ls=1026,Gs=1027,yd=1028,Bc=1029,Sd=1030,zc=1031,Hc=1033,Ro=33776,Co=33777,Po=33778,Lo=33779,Dl=35840,Ul=35841,Nl=35842,Ol=35843,Fl=36196,Bl=37492,zl=37496,Hl=37808,Gl=37809,Vl=37810,kl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,$l=37816,Kl=37817,jl=37818,Zl=37819,Jl=37820,Ql=37821,Io=36492,ec=36494,tc=36495,Ed=36283,nc=36284,ic=36285,sc=36286,u_=3200,h_=3201,wd=0,f_=1,xi="",Un="srgb",Pi="srgb-linear",Gc="display-p3",aa="display-p3-linear",Vo="linear",pt="srgb",ko="rec709",Wo="p3",ss=7680,Ju=519,d_=512,p_=513,m_=514,bd=515,g_=516,__=517,v_=518,x_=519,Qu=35044,eh="300 es",ei=2e3,Xo=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const mr=Math.PI/180,Rr=180/Math.PI;function es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function Vc(n,e){return(n%e+e)%e}function M_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function y_(n,e,t){return n!==e?(t-n)/(e-n):0}function gr(n,e,t){return(1-t)*n+t*e}function S_(n,e,t,i){return gr(n,e,1-Math.exp(-t*i))}function E_(n,e=1){return e-Math.abs(Vc(n,e*2)-e)}function w_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function b_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function T_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function A_(n,e){return n+Math.random()*(e-n)}function R_(n){return n*(.5-Math.random())}function C_(n){n!==void 0&&(th=n);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P_(n){return n*mr}function L_(n){return n*Rr}function I_(n){return(n&n-1)===0&&n!==0}function D_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function U_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function N_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:mr,RAD2DEG:Rr,generateUUID:es,clamp:It,euclideanModulo:Vc,mapLinear:M_,inverseLerp:y_,lerp:gr,damp:S_,pingpong:E_,smoothstep:w_,smootherstep:b_,randInt:T_,randFloat:A_,randFloatSpread:R_,seededRandom:C_,degToRad:P_,radToDeg:L_,isPowerOfTwo:I_,ceilPowerOfTwo:D_,floorPowerOfTwo:U_,setQuaternionFromProperEuler:N_,normalize:Yt,denormalize:Ss};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],_=i[8],M=s[0],p=s[3],m=s[6],b=s[1],y=s[4],E=s[7],U=s[2],P=s[5],R=s[8];return r[0]=o*M+a*b+l*U,r[3]=o*p+a*y+l*P,r[6]=o*m+a*E+l*R,r[1]=c*M+h*b+u*U,r[4]=c*p+h*y+u*P,r[7]=c*m+h*E+u*R,r[2]=f*M+d*b+_*U,r[5]=f*p+d*y+_*P,r[8]=f*m+d*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,_=t*u+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=u*M,e[1]=(s*c-h*i)*M,e[2]=(a*i-s*o)*M,e[3]=f*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Ze;function Td(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function O_(){const n=Cr("canvas");return n.style.display="block",n}const nh={};function Do(n){n in nh||(nh[n]=!0,console.warn(n))}function F_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function B_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function z_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ih=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[Pi]:{transfer:Vo,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Un]:{transfer:pt,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[aa]:{transfer:Vo,primaries:Wo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih)},[Gc]:{transfer:pt,primaries:Wo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih).convertLinearToSRGB()}},H_=new Set([Pi,aa]),rt={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!H_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Qs[e].toReference,s=Qs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Qs[n].primaries},getTransfer:function(n){return n===xi?Vo:Qs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Qs[e].luminanceCoefficients)}};function Is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class G_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=Cr("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Is(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Is(t[i]/255)*255):t[i]=Is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V_=0;class Ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(La(s[o].image)):r.push(La(s[o]))}else r=La(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function La(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?G_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k_=0;class Jt extends Ys{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=Xi,s=Xi,r=Tn,o=qi,a=Rn,l=si,c=Jt.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=es(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=dd;Jt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(d+1)/2,U=(m+1)/2,P=(h+f)/4,R=(u+M)/4,O=(_+p)/4;return y>E&&y>U?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=P/i,r=R/i):E>U?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=P/s,r=O/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=R/r,s=O/r),this.set(i,s,r,t),this}let b=Math.sqrt((p-_)*(p-_)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-M)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W_ extends Ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Jt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ad(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends W_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rd extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X_ extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=M;return}if(u!==M||l!==f||c!==d||h!==_){let p=1-a;const m=l*f+c*d+h*_+u*M,b=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const U=Math.sqrt(y),P=Math.atan2(U,m*b);p=Math.sin(p*P)/U,a=Math.sin(a*P)/U}const E=a*b;if(l=l*p+f*E,c=c*p+d*E,h=h*p+_*E,u=u*p+M*E,p===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*d-c*f,e[t+1]=l*_+h*f+c*u-a*d,e[t+2]=c*_+h*d+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new H,rh=new Or;class Fr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),no.subVectors(this.max,er),os.subVectors(e.a,er),as.subVectors(e.b,er),ls.subVectors(e.c,er),ui.subVectors(as,os),hi.subVectors(ls,as),Ui.subVectors(os,ls);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Ui.z,Ui.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Ui.z,0,-Ui.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Ui.y,Ui.x,0];return!Da(t,os,as,ls,no)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,os,as,ls,no))?!1:(io.crossVectors(ui,hi),t=[io.x,io.y,io.z],Da(t,os,as,ls,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new H,new H,new H,new H,new H,new H,new H,new H],Sn=new H,to=new Fr,os=new H,as=new H,ls=new H,ui=new H,hi=new H,Ui=new H,er=new H,no=new H,io=new H,Ni=new H;function Da(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),h=i.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const q_=new Fr,tr=new H,Ua=new H;class kc{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):q_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(tr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Ua)),this.expandByPoint(tr.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new H,Na=new H,so=new H,fi=new H,Oa=new H,ro=new H,Fa=new H;class Y_{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Na.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Na);const r=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=fi.dot(this.direction),l=-fi.dot(so),c=fi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Na).addScaledVector(so,f),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,s,r){Oa.subVectors(t,e),ro.subVectors(i,e),Fa.crossVectors(Oa,ro);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(ro.crossVectors(fi,ro));if(l<0)return null;const c=a*this.direction.dot(Oa.cross(fi));if(c<0||l+c>o)return null;const h=-a*fi.dot(Fa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,_,M,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,_,M,p)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,_,M,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,_=a*h,M=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+_*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,_=c*h,M=c*u;t[0]=f+M*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-_,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,_=c*h,M=c*u;t[0]=f-M*a,t[4]=-o*u,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,_=a*h,M=a*u;t[0]=l*h,t[4]=_*c-d,t[8]=f*c+M,t[1]=l*u,t[5]=M*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,M=a*c;t[0]=l*h,t[4]=M-f*u,t[8]=_*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+_,t[10]=f-M*u}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,M=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+M,t[5]=o*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=a*h,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($_,e,K_)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),di.crossVectors(i,rn),di.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),di.crossVectors(i,rn)),di.normalize(),oo.crossVectors(rn,di),s[0]=di.x,s[4]=oo.x,s[8]=rn.x,s[1]=di.y,s[5]=oo.y,s[9]=rn.y,s[2]=di.z,s[6]=oo.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],_=i[2],M=i[6],p=i[10],m=i[14],b=i[3],y=i[7],E=i[11],U=i[15],P=s[0],R=s[4],O=s[8],ie=s[12],x=s[1],w=s[5],K=s[9],k=s[13],J=s[2],ae=s[6],G=s[10],Q=s[14],X=s[3],me=s[7],ye=s[11],ge=s[15];return r[0]=o*P+a*x+l*J+c*X,r[4]=o*R+a*w+l*ae+c*me,r[8]=o*O+a*K+l*G+c*ye,r[12]=o*ie+a*k+l*Q+c*ge,r[1]=h*P+u*x+f*J+d*X,r[5]=h*R+u*w+f*ae+d*me,r[9]=h*O+u*K+f*G+d*ye,r[13]=h*ie+u*k+f*Q+d*ge,r[2]=_*P+M*x+p*J+m*X,r[6]=_*R+M*w+p*ae+m*me,r[10]=_*O+M*K+p*G+m*ye,r[14]=_*ie+M*k+p*Q+m*ge,r[3]=b*P+y*x+E*J+U*X,r[7]=b*R+y*w+E*ae+U*me,r[11]=b*O+y*K+E*G+U*ye,r[15]=b*ie+y*k+E*Q+U*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],_=e[3],M=e[7],p=e[11],m=e[15];return _*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+M*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],_=e[12],M=e[13],p=e[14],m=e[15],b=u*p*c-M*f*c+M*l*d-a*p*d-u*l*m+a*f*m,y=_*f*c-h*p*c-_*l*d+o*p*d+h*l*m-o*f*m,E=h*M*c-_*u*c+_*a*d-o*M*d-h*a*m+o*u*m,U=_*u*l-h*M*l-_*a*f+o*M*f+h*a*p-o*u*p,P=t*b+i*y+s*E+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=b*R,e[1]=(M*f*r-u*p*r-M*s*d+i*p*d+u*s*m-i*f*m)*R,e[2]=(a*p*r-M*l*r+M*s*c-i*p*c-a*s*m+i*l*m)*R,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*R,e[4]=y*R,e[5]=(h*p*r-_*f*r+_*s*d-t*p*d-h*s*m+t*f*m)*R,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*m-t*l*m)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*R,e[8]=E*R,e[9]=(_*u*r-h*M*r-_*i*d+t*M*d+h*i*m-t*u*m)*R,e[10]=(o*M*r-_*a*r+_*i*c-t*M*c-o*i*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*R,e[12]=U*R,e[13]=(h*M*s-_*u*s+_*i*f-t*M*f-h*i*p+t*u*p)*R,e[14]=(_*a*s-o*M*s-_*i*l+t*M*l+o*i*p-t*a*p)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,_=r*u,M=o*h,p=o*u,m=a*u,b=l*c,y=l*h,E=l*u,U=i.x,P=i.y,R=i.z;return s[0]=(1-(M+m))*U,s[1]=(d+E)*U,s[2]=(_-y)*U,s[3]=0,s[4]=(d-E)*P,s[5]=(1-(f+m))*P,s[6]=(p+b)*P,s[7]=0,s[8]=(_+y)*R,s[9]=(p-b)*R,s[10]=(1-(f+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const c=1/r,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ei){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,_;if(a===ei)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xo)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ei){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,d=(i+s)*h;let _,M;if(a===ei)_=(o+r)*u,M=-2*u;else if(a===Xo)_=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cs=new H,En=new _t,$_=new H(0,0,0),K_=new H(1,1,1),di=new H,oo=new H,rn=new H,oh=new _t,ah=new Or;class Hn{constructor(e=0,t=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j_=0;const lh=new H,us=new Or,qn=new _t,ao=new H,nr=new H,Z_=new H,J_=new Or,ch=new H(1,0,0),uh=new H(0,1,0),hh=new H(0,0,1),fh={type:"added"},Q_={type:"removed"},hs={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Wt extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new H,t=new Hn,i=new Or,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ze}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ao.copy(e):ao.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(nr,ao,this.up):qn.lookAt(ao,nr,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(qn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Q_),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,J_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new H(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new H,Yn=new H,za=new H,$n=new H,fs=new H,ds=new H,dh=new H,Ha=new H,Ga=new H,Va=new H,ka=new ut,Wa=new ut,Xa=new ut;class An{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Yn.subVectors(i,t),za.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Yn),l=wn.dot(za),c=Yn.dot(Yn),h=Yn.dot(za),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ka.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),ka.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,i),Xa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ka,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Yn.subVectors(e,t),wn.cross(Yn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),wn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;fs.subVectors(s,i),ds.subVectors(r,i),Ha.subVectors(e,i);const l=fs.dot(Ha),c=ds.dot(Ha);if(l<=0&&c<=0)return t.copy(i);Ga.subVectors(e,s);const h=fs.dot(Ga),u=ds.dot(Ga);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(fs,o);Va.subVectors(e,r);const d=fs.dot(Va),_=ds.dot(Va);if(_>=0&&d<=_)return t.copy(r);const M=d*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ds,a);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return dh.subVectors(r,s),a=(u-h)/(u-h+(d-_)),t.copy(s).addScaledVector(dh,a);const m=1/(p+M+f);return o=M*m,a=f*m,t.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Vc(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=Pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return rt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(It(Gt.r*255,0,255))*65536+Math.round(It(Gt.g*255,0,255))*256+Math.round(It(Gt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Un){rt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(lo);const i=gr(pi.h,lo.h,t),s=gr(pi.s,lo.s,t),r=gr(pi.l,lo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new et;et.NAMES=Pd;let ev=0;class Br extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Ps,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=El,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xn extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new H,co=new Re;class Bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}}class Ld extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Id extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tv=0;const mn=new _t,Ya=new Wt,ps=new H,on=new Fr,ir=new Fr,Lt=new H;class Mn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?Id:Ld)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(on.min,ir.min),on.expandByPoint(Lt),Lt.addVectors(on.max,ir.max),on.expandByPoint(Lt)):(on.expandByPoint(ir.min),on.expandByPoint(ir.max))}on.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Lt.add(ps)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new H,l[O]=new H;const c=new H,h=new H,u=new H,f=new Re,d=new Re,_=new Re,M=new H,p=new H;function m(O,ie,x){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,ie),u.fromBufferAttribute(i,x),f.fromBufferAttribute(r,O),d.fromBufferAttribute(r,ie),_.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const w=1/(d.x*_.y-_.x*d.y);isFinite(w)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(w),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(w),a[O].add(M),a[ie].add(M),a[x].add(M),l[O].add(p),l[ie].add(p),l[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,ie=b.length;O<ie;++O){const x=b[O],w=x.start,K=x.count;for(let k=w,J=w+K;k<J;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new H,E=new H,U=new H,P=new H;function R(O){U.fromBufferAttribute(s,O),P.copy(U);const ie=a[O];y.copy(ie),y.sub(U.multiplyScalar(U.dot(ie))).normalize(),E.crossVectors(P,ie);const w=E.dot(l[O])<0?-1:1;o.setXYZW(O,y.x,y.y,y.z,w)}for(let O=0,ie=b.length;O<ie;++O){const x=b[O],w=x.start,K=x.count;for(let k=w,J=w+K;k<J;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,u=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?d=l[M]*a.data.stride+a.offset:d=l[M]*h;for(let m=0;m<h;m++)f[_++]=c[d++]}return new Bn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new _t,Oi=new Y_,uo=new kc,mh=new H,ho=new H,fo=new H,po=new H,$a=new H,mo=new H,gh=new H,go=new H;class j extends Wt{constructor(e=new Mn,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&($a.fromBufferAttribute(u,e),o?mo.addScaledVector($a,h):mo.addScaledVector($a.sub(t),h))}t.add(mo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(uo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(uo,mh)===null||Oi.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(ph),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const p=f[_],m=o[p.materialIndex],b=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let E=b,U=y;E<U;E+=3){const P=a.getX(E),R=a.getX(E+1),O=a.getX(E+2);s=_o(this,m,e,i,c,h,u,P,R,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let p=_,m=M;p<m;p+=3){const b=a.getX(p),y=a.getX(p+1),E=a.getX(p+2);s=_o(this,o,e,i,c,h,u,b,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const p=f[_],m=o[p.materialIndex],b=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=b,U=y;E<U;E+=3){const P=E,R=E+1,O=E+2;s=_o(this,m,e,i,c,h,u,P,R,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let p=_,m=M;p<m;p+=3){const b=p,y=p+1,E=p+2;s=_o(this,o,e,i,c,h,u,b,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function nv(n,e,t,i,s,r,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ei,a),l===null)return null;go.copy(a),go.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(go);return c<t.near||c>t.far?null:{distance:c,point:go.clone(),object:n}}function _o(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ho),n.getVertexPosition(l,fo),n.getVertexPosition(c,po);const h=nv(n,e,t,i,ho,fo,po,gh);if(h){const u=new H;An.getBarycoord(gh,ho,fo,po,u),s&&(h.uv=An.getInterpolatedAttribute(s,a,l,c,u,new Re)),r&&(h.uv1=An.getInterpolatedAttribute(r,a,l,c,u,new Re)),o&&(h.normal=An.getInterpolatedAttribute(o,a,l,c,u,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};An.getNormal(ho,fo,po,f.normal),h.face=f,h.barycoord=u}return h}class ts extends Mn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function _(M,p,m,b,y,E,U,P,R,O,ie){const x=E/R,w=U/O,K=E/2,k=U/2,J=P/2,ae=R+1,G=O+1;let Q=0,X=0;const me=new H;for(let ye=0;ye<G;ye++){const ge=ye*w-k;for(let Pe=0;Pe<ae;Pe++){const Fe=Pe*x-K;me[M]=Fe*b,me[p]=ge*y,me[m]=J,c.push(me.x,me.y,me.z),me[M]=0,me[p]=0,me[m]=P>0?1:-1,h.push(me.x,me.y,me.z),u.push(Pe/R),u.push(1-ye/O),Q+=1}}for(let ye=0;ye<O;ye++)for(let ge=0;ge<R;ge++){const Pe=f+ge+ae*ye,Fe=f+ge+ae*(ye+1),oe=f+(ge+1)+ae*(ye+1),de=f+(ge+1)+ae*ye;l.push(Pe,Fe,de),l.push(Fe,oe,de),X+=6}a.addGroup(d,X,ie),d+=X,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const s in i)e[s]=i[s]}return e}function iv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const sv={clone:Vs,merge:$t};var rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rv,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ud extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new H,_h=new Re,vh=new Re;class Ft extends Ud{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,_h,vh),t.subVectors(vh,_h)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class av extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ft(ms,gs,e,t);s.layers=this.layers,this.add(s);const r=new Ft(ms,gs,e,t);r.layers=this.layers,this.add(r);const o=new Ft(ms,gs,e,t);o.layers=this.layers,this.add(o);const a=new Ft(ms,gs,e,t);a.layers=this.layers,this.add(a);const l=new Ft(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new Ft(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Nd extends Jt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lv extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Nd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ts(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Mi});r.uniforms.tEquirect.value=t;const o=new j(s,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=Tn),new av(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ka=new H,cv=new H,uv=new Ze;class Gi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ka.subVectors(i,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uv.getNormalMatrix(e),s=this.coplanarPoint(Ka).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new kc,vo=new H;class Wc{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],M=s[10],p=s[11],m=s[12],b=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,p-d,E-m).normalize(),i[1].setComponents(l+r,f+c,p+d,E+m).normalize(),i[2].setComponents(l+o,f+h,p+_,E+b).normalize(),i[3].setComponents(l-o,f-h,p-_,E-b).normalize(),i[4].setComponents(l-a,f-u,p-M,E-y).normalize(),t===ei)i[5].setComponents(l+a,f+u,p+M,E+y).normalize();else if(t===Xo)i[5].setComponents(a,u,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hv(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],M=u[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const M=u[d];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class la extends Mn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],_=[],M=[],p=[];for(let m=0;m<h;m++){const b=m*f-o;for(let y=0;y<c;y++){const E=y*u-r;_.push(E,-b,0),M.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const y=b+c*m,E=b+c*(m+1),U=b+1+c*(m+1),P=b+1+c*m;d.push(y,E,P),d.push(E,U,P)}this.setIndex(d),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(M,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}var fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dv=`#ifdef USE_ALPHAHASH
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
#endif`,pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vv=`#ifdef USE_AOMAP
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
#endif`,xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mv=`#ifdef USE_BATCHING
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
#endif`,yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ev=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bv=`#ifdef USE_IRIDESCENCE
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
#endif`,Tv=`#ifdef USE_BUMPMAP
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
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nv=`#define PI 3.141592653589793
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
} // validated`,Ov=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fv=`vec3 transformedNormal = objectNormal;
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
#endif`,Bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",kv=`
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
}`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qv=`#ifdef USE_GRADIENTMAP
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
}`,ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
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
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
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
#endif`,ux=`struct PhysicalMaterial {
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
}`,hx=`
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yx=`#if defined( USE_POINTS_UV )
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
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jx=`float getShadowMask() {
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
}`,Zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,Qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,tM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rM=`#ifdef USE_TRANSMISSION
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
#endif`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fM=`uniform sampler2D t2D;
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,xM=`#define DISTANCE
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
}`,MM=`#define DISTANCE
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
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`uniform float scale;
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
}`,wM=`uniform vec3 diffuse;
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
}`,bM=`#include <common>
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
}`,TM=`uniform vec3 diffuse;
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
}`,AM=`#define LAMBERT
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
}`,RM=`#define LAMBERT
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
}`,CM=`#define MATCAP
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
}`,PM=`#define MATCAP
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
}`,LM=`#define NORMAL
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
}`,IM=`#define NORMAL
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
}`,DM=`#define PHONG
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
}`,UM=`#define PHONG
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
}`,NM=`#define STANDARD
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
}`,OM=`#define STANDARD
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
}`,FM=`#define TOON
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
}`,BM=`#define TOON
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
}`,zM=`uniform float size;
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
}`,HM=`uniform vec3 diffuse;
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
}`,GM=`#include <common>
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
}`,VM=`uniform vec3 color;
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
}`,kM=`uniform float rotation;
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
}`,WM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:fv,alphahash_pars_fragment:dv,alphamap_fragment:pv,alphamap_pars_fragment:mv,alphatest_fragment:gv,alphatest_pars_fragment:_v,aomap_fragment:vv,aomap_pars_fragment:xv,batching_pars_vertex:Mv,batching_vertex:yv,begin_vertex:Sv,beginnormal_vertex:Ev,bsdfs:wv,iridescence_fragment:bv,bumpmap_pars_fragment:Tv,clipping_planes_fragment:Av,clipping_planes_pars_fragment:Rv,clipping_planes_pars_vertex:Cv,clipping_planes_vertex:Pv,color_fragment:Lv,color_pars_fragment:Iv,color_pars_vertex:Dv,color_vertex:Uv,common:Nv,cube_uv_reflection_fragment:Ov,defaultnormal_vertex:Fv,displacementmap_pars_vertex:Bv,displacementmap_vertex:zv,emissivemap_fragment:Hv,emissivemap_pars_fragment:Gv,colorspace_fragment:Vv,colorspace_pars_fragment:kv,envmap_fragment:Wv,envmap_common_pars_fragment:Xv,envmap_pars_fragment:qv,envmap_pars_vertex:Yv,envmap_physical_pars_fragment:sx,envmap_vertex:$v,fog_vertex:Kv,fog_pars_vertex:jv,fog_fragment:Zv,fog_pars_fragment:Jv,gradientmap_pars_fragment:Qv,lightmap_pars_fragment:ex,lights_lambert_fragment:tx,lights_lambert_pars_fragment:nx,lights_pars_begin:ix,lights_toon_fragment:rx,lights_toon_pars_fragment:ox,lights_phong_fragment:ax,lights_phong_pars_fragment:lx,lights_physical_fragment:cx,lights_physical_pars_fragment:ux,lights_fragment_begin:hx,lights_fragment_maps:fx,lights_fragment_end:dx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:_x,map_fragment:vx,map_pars_fragment:xx,map_particle_fragment:Mx,map_particle_pars_fragment:yx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:wx,morphcolor_vertex:bx,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ax,morphtarget_vertex:Rx,normal_fragment_begin:Cx,normal_fragment_maps:Px,normal_pars_fragment:Lx,normal_pars_vertex:Ix,normal_vertex:Dx,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:Fx,iridescence_pars_fragment:Bx,opaque_fragment:zx,packing:Hx,premultiplied_alpha_fragment:Gx,project_vertex:Vx,dithering_fragment:kx,dithering_pars_fragment:Wx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:$x,shadowmap_vertex:Kx,shadowmask_pars_fragment:jx,skinbase_vertex:Zx,skinning_pars_vertex:Jx,skinning_vertex:Qx,skinnormal_vertex:eM,specularmap_fragment:tM,specularmap_pars_fragment:nM,tonemapping_fragment:iM,tonemapping_pars_fragment:sM,transmission_fragment:rM,transmission_pars_fragment:oM,uv_pars_fragment:aM,uv_pars_vertex:lM,uv_vertex:cM,worldpos_vertex:uM,background_vert:hM,background_frag:fM,backgroundCube_vert:dM,backgroundCube_frag:pM,cube_vert:mM,cube_frag:gM,depth_vert:_M,depth_frag:vM,distanceRGBA_vert:xM,distanceRGBA_frag:MM,equirect_vert:yM,equirect_frag:SM,linedashed_vert:EM,linedashed_frag:wM,meshbasic_vert:bM,meshbasic_frag:TM,meshlambert_vert:AM,meshlambert_frag:RM,meshmatcap_vert:CM,meshmatcap_frag:PM,meshnormal_vert:LM,meshnormal_frag:IM,meshphong_vert:DM,meshphong_frag:UM,meshphysical_vert:NM,meshphysical_frag:OM,meshtoon_vert:FM,meshtoon_frag:BM,points_vert:zM,points_frag:HM,shadow_vert:GM,shadow_frag:VM,sprite_vert:kM,sprite_frag:WM},Ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},On={basic:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:$t([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:$t([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:$t([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:$t([Ae.points,Ae.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:$t([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:$t([Ae.common,Ae.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:$t([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:$t([Ae.sprite,Ae.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:$t([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:$t([Ae.lights,Ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};On.physical={uniforms:$t([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const xo={r:0,b:0,g:0},Bi=new Hn,XM=new _t;function qM(n,e,t,i,s,r,o){const a=new et(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function M(b){let y=!1;const E=_(b);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,y){const E=_(y);E&&(E.isCubeTexture||E.mapping===oa)?(h===void 0&&(h=new j(new ts(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Vs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(y.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(XM.makeRotationFromEuler(Bi)),h.material.toneMapped=rt.getTransfer(E.colorSpace)!==pt,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new j(new la(2,2),new wi({name:"BackgroundMaterial",uniforms:Vs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(xo,Dd(n)),i.buffers.color.setClear(xo.r,xo.g,xo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:M,addToRenderList:p}}function YM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,w,K,k,J){let ae=!1;const G=u(k,K,w);r!==G&&(r=G,c(r.object)),ae=d(x,k,K,J),ae&&_(x,k,K,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,E(x,w,K,k),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,w,K){const k=K.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let ae=J[w.id];ae===void 0&&(ae={},J[w.id]=ae);let G=ae[k];return G===void 0&&(G=f(l()),ae[k]=G),G}function f(x){const w=[],K=[],k=[];for(let J=0;J<t;J++)w[J]=0,K[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:K,attributeDivisors:k,object:x,attributes:{},index:null}}function d(x,w,K,k){const J=r.attributes,ae=w.attributes;let G=0;const Q=K.getAttributes();for(const X in Q)if(Q[X].location>=0){const ye=J[X];let ge=ae[X];if(ge===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),ye===void 0||ye.attribute!==ge||ge&&ye.data!==ge.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function _(x,w,K,k){const J={},ae=w.attributes;let G=0;const Q=K.getAttributes();for(const X in Q)if(Q[X].location>=0){let ye=ae[X];ye===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor));const ge={};ge.attribute=ye,ye&&ye.data&&(ge.data=ye.data),J[X]=ge,G++}r.attributes=J,r.attributesNum=G,r.index=k}function M(){const x=r.newAttributes;for(let w=0,K=x.length;w<K;w++)x[w]=0}function p(x){m(x,0)}function m(x,w){const K=r.newAttributes,k=r.enabledAttributes,J=r.attributeDivisors;K[x]=1,k[x]===0&&(n.enableVertexAttribArray(x),k[x]=1),J[x]!==w&&(n.vertexAttribDivisor(x,w),J[x]=w)}function b(){const x=r.newAttributes,w=r.enabledAttributes;for(let K=0,k=w.length;K<k;K++)w[K]!==x[K]&&(n.disableVertexAttribArray(K),w[K]=0)}function y(x,w,K,k,J,ae,G){G===!0?n.vertexAttribIPointer(x,w,K,J,ae):n.vertexAttribPointer(x,w,K,k,J,ae)}function E(x,w,K,k){M();const J=k.attributes,ae=K.getAttributes(),G=w.defaultAttributeValues;for(const Q in ae){const X=ae[Q];if(X.location>=0){let me=J[Q];if(me===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),me!==void 0){const ye=me.normalized,ge=me.itemSize,Pe=e.get(me);if(Pe===void 0)continue;const Fe=Pe.buffer,oe=Pe.type,de=Pe.bytesPerElement,Se=oe===n.INT||oe===n.UNSIGNED_INT||me.gpuType===Nc;if(me.isInterleavedBufferAttribute){const N=me.data,le=N.stride,re=me.offset;if(N.isInstancedInterleavedBuffer){for(let ue=0;ue<X.locationSize;ue++)m(X.location+ue,N.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ue=0;ue<X.locationSize;ue++)p(X.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ue=0;ue<X.locationSize;ue++)y(X.location+ue,ge/X.locationSize,oe,ye,le*de,(re+ge/X.locationSize*ue)*de,Se)}else{if(me.isInstancedBufferAttribute){for(let N=0;N<X.locationSize;N++)m(X.location+N,me.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let N=0;N<X.locationSize;N++)p(X.location+N);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let N=0;N<X.locationSize;N++)y(X.location+N,ge/X.locationSize,oe,ye,ge*de,ge/X.locationSize*N*de,Se)}}else if(G!==void 0){const ye=G[Q];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(X.location,ye);break;case 3:n.vertexAttrib3fv(X.location,ye);break;case 4:n.vertexAttrib4fv(X.location,ye);break;default:n.vertexAttrib1fv(X.location,ye)}}}}b()}function U(){O();for(const x in i){const w=i[x];for(const K in w){const k=w[K];for(const J in k)h(k[J].object),delete k[J];delete w[K]}delete i[x]}}function P(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const K in w){const k=w[K];for(const J in k)h(k[J].object),delete k[J];delete w[K]}delete i[x.id]}function R(x){for(const w in i){const K=i[w];if(K[x.id]===void 0)continue;const k=K[x.id];for(const J in k)h(k[J].object),delete k[J];delete K[x.id]}}function O(){ie(),o=!0,r!==s&&(r=s,c(r.object))}function ie(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:ie,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function $M(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let M=0;M<u;M++)_+=h[M];for(let M=0;M<f.length;M++)t.update(_,i,f[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const O=R===Nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==si&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qn&&!O)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:U,maxSamples:P}}function jM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Gi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,y=b*4;let E=m.clippingState||null;l.value=E,E=h(_,f,y,d);for(let U=0;U!==y;++U)E[U]=t[U];m.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,_){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=l.value,_!==!0||p===null){const m=d+M*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,E=d;y!==M;++y,E+=4)o.copy(u[y]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function ZM(n){let e=new WeakMap;function t(o,a){return a===Go?o.mapping=Bs:a===Ll&&(o.mapping=zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Go||a===Ll)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Fd extends Ud{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,xh=[.125,.215,.35,.446,.526,.582],Wi=20,ja=new Fd,Mh=new et;let Za=null,Ja=0,Qa=0,el=!1;const Vi=(1+Math.sqrt(5))/2,_s=1/Vi,yh=[new H(-Vi,_s,0),new H(Vi,_s,0),new H(-_s,0,Vi),new H(_s,0,Vi),new H(0,Vi,-_s),new H(0,Vi,_s),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ja,Qa),this._renderer.xr.enabled=el,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Nr,format:Rn,colorSpace:Pi,depthBuffer:!1},s=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JM(r)),this._blurMaterial=QM(r,e,t)}return s}_compileMaterial(e){const t=new j(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,i,s){const a=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Mh),h.toneMapping=yi,h.autoClear=!1;const d=new xn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new j(new ts,d);let M=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,M=!0):(d.color.copy(Mh),M=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;Mo(s,b*y,m>2?y:0,y,y),h.setRenderTarget(s),M&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Bs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Mo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ja)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yh[(s-r-1)%yh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new j(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wi-1),M=r/_,p=isFinite(r)?1+Math.floor(h*M):Wi;p>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wi}`);const m=[];let b=0;for(let R=0;R<Wi;++R){const O=R/M,ie=Math.exp(-O*O/2);m.push(ie),R===0?b+=ie:R<p&&(b+=2*ie)}for(let R=0;R<m.length;R++)m[R]=m[R]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const E=this._sizeLods[s],U=3*E*(s>y-ws?s-y+ws:0),P=4*(this._cubeSize-E);Mo(t,U,P,3*E,2*E),l.setRenderTarget(t),l.render(u,ja)}}function JM(n){const e=[],t=[],i=[];let s=n;const r=n-ws+1+xh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ws?l=xh[o-n+ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,M=3,p=2,m=1,b=new Float32Array(M*_*d),y=new Float32Array(p*_*d),E=new Float32Array(m*_*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,O=P>2?0:-1,ie=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];b.set(ie,M*_*P),y.set(f,p*_*P);const x=[P,P,P,P,P,P];E.set(x,m*_*P)}const U=new Mn;U.setAttribute("position",new Bn(b,M)),U.setAttribute("uv",new Bn(y,p)),U.setAttribute("faceIndex",new Bn(E,m)),e.push(U),s>ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eh(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function QM(n,e,t){const i=new Float32Array(Wi),s=new H(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function wh(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function bh(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function ey(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Go||l===Ll,h=l===Bs||l===zs;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Sh(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Sh(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ty(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Do("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ny(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let p=0,m=M.length;p<m;p++)e.remove(M[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const M=d[_];for(let p=0,m=M.length;p<m;p++)e.update(M[p],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,_=u.attributes.position;let M=0;if(d!==null){const b=d.array;M=d.version;for(let y=0,E=b.length;y<E;y+=3){const U=b[y+0],P=b[y+1],R=b[y+2];f.push(U,P,P,R,R,U)}}else if(_!==void 0){const b=_.array;M=_.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const U=y+0,P=y+1,R=y+2;f.push(U,P,P,R,R,U)}}else return;const p=new(Td(f)?Id:Ld)(f,1);p.version=M;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function iy(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),t.update(d,i,_))}function h(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,i,1)}function u(f,d,_,M){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],M[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,M,0,_);let m=0;for(let b=0;b<_;b++)m+=d[b];for(let b=0;b<M.length;b++)t.update(m,i,M[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ry(n,e,t){const i=new WeakMap,s=new ut;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let x=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),M===!0&&(E=2),p===!0&&(E=3);let U=a.attributes.position.count*E,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const R=new Float32Array(U*P*4*u),O=new Rd(R,U,P,u);O.type=Qn,O.needsUpdate=!0;const ie=E*4;for(let w=0;w<u;w++){const K=m[w],k=b[w],J=y[w],ae=U*P*4*w;for(let G=0;G<K.count;G++){const Q=G*ie;_===!0&&(s.fromBufferAttribute(K,G),R[ae+Q+0]=s.x,R[ae+Q+1]=s.y,R[ae+Q+2]=s.z,R[ae+Q+3]=0),M===!0&&(s.fromBufferAttribute(k,G),R[ae+Q+4]=s.x,R[ae+Q+5]=s.y,R[ae+Q+6]=s.z,R[ae+Q+7]=0),p===!0&&(s.fromBufferAttribute(J,G),R[ae+Q+8]=s.x,R[ae+Q+9]=s.y,R[ae+Q+10]=s.z,R[ae+Q+11]=J.itemSize===4?s.w:1)}}f={count:u,texture:O,size:new Re(U,P)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function oy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Bd extends Jt{constructor(e,t,i,s,r,o,a,l,c,h=Ls){if(h!==Ls&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ls&&(i=Ki),i===void 0&&h===Gs&&(i=Hs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zd=new Jt,Th=new Bd(1,1),Hd=new Rd,Gd=new X_,Vd=new Nd,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ca(n,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),Pt(t,i)}}function fy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),Pt(t,i)}}function dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Pt(t,i)}}function py(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Sy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=bd,r=Th):r=zd,t.setTexture2D(e||r,s)}function Ey(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gd,s)}function wy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vd,s)}function by(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hd,s)}function Ty(n){switch(n){case 5126:return ay;case 35664:return ly;case 35665:return cy;case 35666:return uy;case 35674:return hy;case 35675:return fy;case 35676:return dy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return vy;case 36294:return xy;case 36295:return My;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return by}}function Ay(n,e){n.uniform1fv(this.addr,e)}function Ry(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function Cy(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function Py(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function Ly(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Iy(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dy(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Uy(n,e){n.uniform1iv(this.addr,e)}function Ny(n,e){n.uniform2iv(this.addr,e)}function Oy(n,e){n.uniform3iv(this.addr,e)}function Fy(n,e){n.uniform4iv(this.addr,e)}function By(n,e){n.uniform1uiv(this.addr,e)}function zy(n,e){n.uniform2uiv(this.addr,e)}function Hy(n,e){n.uniform3uiv(this.addr,e)}function Gy(n,e){n.uniform4uiv(this.addr,e)}function Vy(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zd,r[o])}function ky(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gd,r[o])}function Wy(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vd,r[o])}function Xy(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function qy(n){switch(n){case 5126:return Ay;case 35664:return Ry;case 35665:return Cy;case 35666:return Py;case 35674:return Ly;case 35675:return Iy;case 35676:return Dy;case 5124:case 35670:return Uy;case 35667:case 35671:return Ny;case 35668:case 35672:return Oy;case 35669:case 35673:return Fy;case 5125:return By;case 36294:return zy;case 36295:return Hy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}class Yy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ty(t.type)}}class $y{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qy(t.type)}}class Ky{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Ih(n,e){n.seq.push(e),n.map[e.id]=e}function jy(n,e,t){const i=n.name,s=i.length;for(tl.lastIndex=0;;){const r=tl.exec(i),o=tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ih(t,c===void 0?new Yy(a,n,e):new $y(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Ky(a),Ih(t,u)),t=u}}}class Uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);jy(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Zy=37297;let Jy=0;function Qy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function eS(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===Wo&&t===ko?i="LinearDisplayP3ToLinearSRGB":e===ko&&t===Wo&&(i="LinearSRGBToLinearDisplayP3"),n){case Pi:case aa:return[i,"LinearTransferOETF"];case Un:case Gc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Qy(n.getShaderSource(e),o)}else return s}function tS(n,e){const t=eS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nS(n,e){let t;switch(e){case n_:t="Linear";break;case i_:t="Reinhard";break;case s_:t="Cineon";break;case r_:t="ACESFilmic";break;case a_:t="AgX";break;case l_:t="Neutral";break;case o_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yo=new H;function iS(){rt.getLuminanceCoefficients(yo);const n=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function rS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function or(n){return n!==""}function Nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(n){return n.replace(aS,cS)}const lS=new Map;function cS(n,e){let t=je[e];if(t===void 0){const i=lS.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rc(t)}const uS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(n){return n.replace(uS,hS)}function hS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function fS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===N0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function dS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function mS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fd:e="ENVMAP_BLENDING_MULTIPLY";break;case e_:e="ENVMAP_BLENDING_MIX";break;case t_:e="ENVMAP_BLENDING_ADD";break}return e}function gS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _S(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fS(t),c=dS(t),h=pS(t),u=mS(t),f=gS(t),d=sS(t),_=rS(r),M=s.createProgram();let p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(or).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(or).join(`
`),m.length>0&&(m+=`
`)):(p=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?je.tonemapping_pars_fragment:"",t.toneMapping!==yi?nS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,tS("linearToOutputTexel",t.outputColorSpace),iS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=rc(o),o=Nh(o,t),o=Oh(o,t),a=rc(a),a=Nh(a,t),a=Oh(a,t),o=Fh(o),a=Fh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=b+p+o,E=b+m+a,U=Dh(s,s.VERTEX_SHADER,y),P=Dh(s,s.FRAGMENT_SHADER,E);s.attachShader(M,U),s.attachShader(M,P),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(w){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(M).trim(),k=s.getShaderInfoLog(U).trim(),J=s.getShaderInfoLog(P).trim();let ae=!0,G=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,U,P);else{const Q=Uh(s,U,"vertex"),X=Uh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+K+`
`+Q+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(k===""||J==="")&&(G=!1);G&&(w.diagnostics={runnable:ae,programLog:K,vertexShader:{log:k,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(U),s.deleteShader(P),O=new Uo(s,M),ie=oS(s,M)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let ie;this.getAttributes=function(){return ie===void 0&&R(this),ie};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(M,Zy)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jy++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=P,this}let vS=0;class xS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MS(e),t.set(e,i)),i}}class MS{constructor(e){this.id=vS++,this.code=e,this.usedTimes=0}}function yS(n,e,t,i,s,r,o){const a=new Cd,l=new xS,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,w,K,k,J){const ae=k.fog,G=J.geometry,Q=x.isMeshStandardMaterial?k.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||Q),me=X&&X.mapping===oa?X.image.height:null,ye=M[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Pe=ge!==void 0?ge.length:0;let Fe=0;G.morphAttributes.position!==void 0&&(Fe=1),G.morphAttributes.normal!==void 0&&(Fe=2),G.morphAttributes.color!==void 0&&(Fe=3);let oe,de,Se,N;if(ye){const Je=On[ye];oe=Je.vertexShader,de=Je.fragmentShader}else oe=x.vertexShader,de=x.fragmentShader,l.update(x),Se=l.getVertexShaderID(x),N=l.getFragmentShaderID(x);const le=n.getRenderTarget(),re=J.isInstancedMesh===!0,ue=J.isBatchedMesh===!0,Ee=!!x.map,te=!!x.matcap,g=!!X,T=!!x.aoMap,L=!!x.lightMap,I=!!x.bumpMap,D=!!x.normalMap,Y=!!x.displacementMap,$=!!x.emissiveMap,S=!!x.metalnessMap,v=!!x.roughnessMap,C=x.anisotropy>0,V=x.clearcoat>0,B=x.dispersion>0,z=x.iridescence>0,he=x.sheen>0,ce=x.transmission>0,pe=C&&!!x.anisotropyMap,Te=V&&!!x.clearcoatMap,fe=V&&!!x.clearcoatNormalMap,xe=V&&!!x.clearcoatRoughnessMap,Ce=z&&!!x.iridescenceMap,Le=z&&!!x.iridescenceThicknessMap,be=he&&!!x.sheenColorMap,Ve=he&&!!x.sheenRoughnessMap,De=!!x.specularMap,Be=!!x.specularColorMap,F=!!x.specularIntensityMap,ve=ce&&!!x.transmissionMap,ne=ce&&!!x.thicknessMap,Z=!!x.gradientMap,_e=!!x.alphaMap,Me=x.alphaTest>0,Ne=!!x.alphaHash,Ke=!!x.extensions;let tt=yi;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(tt=n.toneMapping);const Xe={shaderID:ye,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:de,defines:x.defines,customVertexShaderID:Se,customFragmentShaderID:N,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:ue,batchingColor:ue&&J._colorsTexture!==null,instancing:re,instancingColor:re&&J.instanceColor!==null,instancingMorph:re&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Pi,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:te,envMap:g,envMapMode:g&&X.mapping,envMapCubeUVHeight:me,aoMap:T,lightMap:L,bumpMap:I,normalMap:D,displacementMap:d&&Y,emissiveMap:$,normalMapObjectSpace:D&&x.normalMapType===f_,normalMapTangentSpace:D&&x.normalMapType===wd,metalnessMap:S,roughnessMap:v,anisotropy:C,anisotropyMap:pe,clearcoat:V,clearcoatMap:Te,clearcoatNormalMap:fe,clearcoatRoughnessMap:xe,dispersion:B,iridescence:z,iridescenceMap:Ce,iridescenceThicknessMap:Le,sheen:he,sheenColorMap:be,sheenRoughnessMap:Ve,specularMap:De,specularColorMap:Be,specularIntensityMap:F,transmission:ce,transmissionMap:ve,thicknessMap:ne,gradientMap:Z,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:Me,alphaHash:Ne,combine:x.combine,mapUv:Ee&&p(x.map.channel),aoMapUv:T&&p(x.aoMap.channel),lightMapUv:L&&p(x.lightMap.channel),bumpMapUv:I&&p(x.bumpMap.channel),normalMapUv:D&&p(x.normalMap.channel),displacementMapUv:Y&&p(x.displacementMap.channel),emissiveMapUv:$&&p(x.emissiveMap.channel),metalnessMapUv:S&&p(x.metalnessMap.channel),roughnessMapUv:v&&p(x.roughnessMap.channel),anisotropyMapUv:pe&&p(x.anisotropyMap.channel),clearcoatMapUv:Te&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&p(x.sheenRoughnessMap.channel),specularMapUv:De&&p(x.specularMap.channel),specularColorMapUv:Be&&p(x.specularColorMap.channel),specularIntensityMapUv:F&&p(x.specularIntensityMap.channel),transmissionMapUv:ve&&p(x.transmissionMap.channel),thicknessMapUv:ne&&p(x.thicknessMap.channel),alphaMapUv:_e&&p(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(D||C),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(Ee||_e),fog:!!ae,useFog:x.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xt,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ke&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&x.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function b(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const K in x.defines)w.push(K),w.push(x.defines[K]);return x.isRawShaderMaterial===!1&&(y(w,x),E(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function y(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function E(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function U(x){const w=M[x.type];let K;if(w){const k=On[w];K=sv.clone(k.uniforms)}else K=x.uniforms;return K}function P(x,w){let K;for(let k=0,J=h.length;k<J;k++){const ae=h[k];if(ae.cacheKey===w){K=ae,++K.usedTimes;break}}return K===void 0&&(K=new _S(n,w,x,r),h.push(K)),K}function R(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function O(x){l.remove(x)}function ie(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:U,acquireProgram:P,releaseProgram:R,releaseShaderCache:O,programs:h,dispose:ie}}function SS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ES(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,_,M,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:M,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=M,m.group=p),e++,m}function a(u,f,d,_,M,p){const m=o(u,f,d,_,M,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(u,f,d,_,M,p){const m=o(u,f,d,_,M,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||ES),i.length>1&&i.sort(f||zh),s.length>1&&s.sort(f||zh)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Hh,n.set(i,[o])):s>=r.length?(o=new Hh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function TS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AS=0;function RS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CS(n){const e=new bS,t=TS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new _t,o=new _t;function a(c){let h=0,u=0,f=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let d=0,_=0,M=0,p=0,m=0,b=0,y=0,E=0,U=0,P=0,R=0;c.sort(RS);for(let ie=0,x=c.length;ie<x;ie++){const w=c[ie],K=w.color,k=w.intensity,J=w.distance,ae=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=K.r*k,u+=K.g*k,f+=K.b*k;else if(w.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(w.sh.coefficients[G],k);R++}else if(w.isDirectionalLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,X=t.get(w);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=ae,i.directionalShadowMatrix[d]=w.shadow.matrix,b++}i.directional[d]=G,d++}else if(w.isSpotLight){const G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(K).multiplyScalar(k),G.distance=J,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,i.spot[M]=G;const Q=w.shadow;if(w.map&&(i.spotLightMap[U]=w.map,U++,Q.updateMatrices(w),w.castShadow&&P++),i.spotLightMatrix[M]=Q.matrix,w.castShadow){const X=t.get(w);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.spotShadow[M]=X,i.spotShadowMap[M]=ae,E++}M++}else if(w.isRectAreaLight){const G=e.get(w);G.color.copy(K).multiplyScalar(k),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=G,p++}else if(w.isPointLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const Q=w.shadow,X=t.get(w);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=w.shadow.matrix,y++}i.point[_]=G,_++}else if(w.isHemisphereLight){const G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(k),G.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[m]=G,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==d||O.pointLength!==_||O.spotLength!==M||O.rectAreaLength!==p||O.hemiLength!==m||O.numDirectionalShadows!==b||O.numPointShadows!==y||O.numSpotShadows!==E||O.numSpotMaps!==U||O.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,O.directionalLength=d,O.pointLength=_,O.spotLength=M,O.rectAreaLength=p,O.hemiLength=m,O.numDirectionalShadows=b,O.numPointShadows=y,O.numSpotShadows=E,O.numSpotMaps=U,O.numLightProbes=R,i.version=AS++)}function l(c,h){let u=0,f=0,d=0,_=0,M=0;const p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const y=c[m];if(y.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(y.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),M++}}}return{setup:a,setupView:l,state:i}}function Gh(n){const e=new CS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function PS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Gh(n),e.set(s,[a])):r>=o.length?(a=new Gh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class LS extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IS extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,US=`uniform sampler2D shadow_pass;
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
}`;function NS(n,e,t){let i=new Wc;const s=new Re,r=new Re,o=new ut,a=new LS({depthPacking:h_}),l=new IS,c={},h=t.maxTextureSize,u={[Ei]:en,[en]:Ei,[xt]:xt},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:DS,fragmentShader:US}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Mn;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new j(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let m=this.type;this.render=function(P,R,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const ie=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Mi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const k=m!==jn&&this.type===jn,J=m===jn&&this.type!==jn;for(let ae=0,G=P.length;ae<G;ae++){const Q=P[ae],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const me=X.getFrameExtents();if(s.multiply(me),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,X.mapSize.y=r.y)),X.map===null||k===!0||J===!0){const ge=this.type!==jn?{minFilter:_n,magFilter:_n}:{};X.map!==null&&X.map.dispose(),X.map=new ji(s.x,s.y,ge),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ye=X.getViewportCount();for(let ge=0;ge<ye;ge++){const Pe=X.getViewport(ge);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),K.viewport(o),X.updateMatrices(Q,ge),i=X.getFrustum(),E(R,O,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===jn&&b(X,O),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(ie,x,w)};function b(P,R){const O=e.update(M);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ji(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,O,f,M,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,O,d,M,null)}function y(P,R,O,ie){let x=null;const w=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)x=w;else if(x=O.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=x.uuid,k=R.uuid;let J=c[K];J===void 0&&(J={},c[K]=J);let ae=J[k];ae===void 0&&(ae=x.clone(),J[k]=ae,R.addEventListener("dispose",U)),x=ae}if(x.visible=R.visible,x.wireframe=R.wireframe,ie===jn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const K=n.properties.get(x);K.light=O}return x}function E(P,R,O,ie,x){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===jn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const k=e.update(P),J=P.material;if(Array.isArray(J)){const ae=k.groups;for(let G=0,Q=ae.length;G<Q;G++){const X=ae[G],me=J[X.materialIndex];if(me&&me.visible){const ye=y(P,me,ie,x);P.onBeforeShadow(n,P,R,O,k,ye,X),n.renderBufferDirect(O,null,k,ye,P,X),P.onAfterShadow(n,P,R,O,k,ye,X)}}}else if(J.visible){const ae=y(P,J,ie,x);P.onBeforeShadow(n,P,R,O,k,ae,null),n.renderBufferDirect(O,null,k,ae,P,null),P.onAfterShadow(n,P,R,O,k,ae,null)}}const K=P.children;for(let k=0,J=K.length;k<J;k++)E(K[k],R,O,ie,x)}function U(P){P.target.removeEventListener("dispose",U);for(const O in c){const ie=c[O],x=P.target.uuid;x in ie&&(ie[x].dispose(),delete ie[x])}}}const OS={[wl]:bl,[Tl]:Cl,[Al]:Pl,[Fs]:Rl,[bl]:wl,[Cl]:Tl,[Pl]:Al,[Rl]:Fs};function FS(n){function e(){let F=!1;const ve=new ut;let ne=null;const Z=new ut(0,0,0,0);return{setMask:function(_e){ne!==_e&&!F&&(n.colorMask(_e,_e,_e,_e),ne=_e)},setLocked:function(_e){F=_e},setClear:function(_e,Me,Ne,Ke,tt){tt===!0&&(_e*=Ke,Me*=Ke,Ne*=Ke),ve.set(_e,Me,Ne,Ke),Z.equals(ve)===!1&&(n.clearColor(_e,Me,Ne,Ke),Z.copy(ve))},reset:function(){F=!1,ne=null,Z.set(-1,0,0,0)}}}function t(){let F=!1,ve=!1,ne=null,Z=null,_e=null;return{setReversed:function(Me){ve=Me},setTest:function(Me){Me?Se(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(Me){ne!==Me&&!F&&(n.depthMask(Me),ne=Me)},setFunc:function(Me){if(ve&&(Me=OS[Me]),Z!==Me){switch(Me){case wl:n.depthFunc(n.NEVER);break;case bl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=Me}},setLocked:function(Me){F=Me},setClear:function(Me){_e!==Me&&(n.clearDepth(Me),_e=Me)},reset:function(){F=!1,ne=null,Z=null,_e=null}}}function i(){let F=!1,ve=null,ne=null,Z=null,_e=null,Me=null,Ne=null,Ke=null,tt=null;return{setTest:function(Xe){F||(Xe?Se(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(Xe){ve!==Xe&&!F&&(n.stencilMask(Xe),ve=Xe)},setFunc:function(Xe,Je,Qe){(ne!==Xe||Z!==Je||_e!==Qe)&&(n.stencilFunc(Xe,Je,Qe),ne=Xe,Z=Je,_e=Qe)},setOp:function(Xe,Je,Qe){(Me!==Xe||Ne!==Je||Ke!==Qe)&&(n.stencilOp(Xe,Je,Qe),Me=Xe,Ne=Je,Ke=Qe)},setLocked:function(Xe){F=Xe},setClear:function(Xe){tt!==Xe&&(n.clearStencil(Xe),tt=Xe)},reset:function(){F=!1,ve=null,ne=null,Z=null,_e=null,Me=null,Ne=null,Ke=null,tt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,_=!1,M=null,p=null,m=null,b=null,y=null,E=null,U=null,P=new et(0,0,0),R=0,O=!1,ie=null,x=null,w=null,K=null,k=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,G=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ae=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ae=G>=2);let X=null,me={};const ye=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Pe=new ut().fromArray(ye),Fe=new ut().fromArray(ge);function oe(F,ve,ne,Z){const _e=new Uint8Array(4),Me=n.createTexture();n.bindTexture(F,Me),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<ne;Ne++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(ve+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return Me}const de={};de[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),r.setFunc(Fs),L(!1),I($u),Se(n.CULL_FACE),g(Mi);function Se(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function N(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function le(F,ve){return h[F]!==ve?(n.bindFramebuffer(F,ve),h[F]=ve,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function re(F,ve){let ne=f,Z=!1;if(F){ne=u.get(ve),ne===void 0&&(ne=[],u.set(ve,ne));const _e=F.textures;if(ne.length!==_e.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Ne=_e.length;Me<Ne;Me++)ne[Me]=n.COLOR_ATTACHMENT0+Me;ne.length=_e.length,Z=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Z=!0);Z&&n.drawBuffers(ne)}function ue(F){return d!==F?(n.useProgram(F),d=F,!0):!1}const Ee={[ki]:n.FUNC_ADD,[F0]:n.FUNC_SUBTRACT,[B0]:n.FUNC_REVERSE_SUBTRACT};Ee[z0]=n.MIN,Ee[H0]=n.MAX;const te={[G0]:n.ZERO,[V0]:n.ONE,[k0]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[K0]:n.SRC_ALPHA_SATURATE,[Y0]:n.DST_COLOR,[X0]:n.DST_ALPHA,[W0]:n.ONE_MINUS_SRC_COLOR,[El]:n.ONE_MINUS_SRC_ALPHA,[$0]:n.ONE_MINUS_DST_COLOR,[q0]:n.ONE_MINUS_DST_ALPHA,[j0]:n.CONSTANT_COLOR,[Z0]:n.ONE_MINUS_CONSTANT_COLOR,[J0]:n.CONSTANT_ALPHA,[Q0]:n.ONE_MINUS_CONSTANT_ALPHA};function g(F,ve,ne,Z,_e,Me,Ne,Ke,tt,Xe){if(F===Mi){_===!0&&(N(n.BLEND),_=!1);return}if(_===!1&&(Se(n.BLEND),_=!0),F!==O0){if(F!==M||Xe!==O){if((p!==ki||y!==ki)&&(n.blendEquation(n.FUNC_ADD),p=ki,y=ki),Xe)switch(F){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.ONE,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,b=null,E=null,U=null,P.set(0,0,0),R=0,M=F,O=Xe}return}_e=_e||ve,Me=Me||ne,Ne=Ne||Z,(ve!==p||_e!==y)&&(n.blendEquationSeparate(Ee[ve],Ee[_e]),p=ve,y=_e),(ne!==m||Z!==b||Me!==E||Ne!==U)&&(n.blendFuncSeparate(te[ne],te[Z],te[Me],te[Ne]),m=ne,b=Z,E=Me,U=Ne),(Ke.equals(P)===!1||tt!==R)&&(n.blendColor(Ke.r,Ke.g,Ke.b,tt),P.copy(Ke),R=tt),M=F,O=!1}function T(F,ve){F.side===xt?N(n.CULL_FACE):Se(n.CULL_FACE);let ne=F.side===en;ve&&(ne=!ne),L(ne),F.blending===Ps&&F.transparent===!1?g(Mi):g(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const Z=F.stencilWrite;o.setTest(Z),Z&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(F){ie!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),ie=F)}function I(F){F!==D0?(Se(n.CULL_FACE),F!==x&&(F===$u?n.cullFace(n.BACK):F===U0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),x=F}function D(F){F!==w&&(ae&&n.lineWidth(F),w=F)}function Y(F,ve,ne){F?(Se(n.POLYGON_OFFSET_FILL),(K!==ve||k!==ne)&&(n.polygonOffset(ve,ne),K=ve,k=ne)):N(n.POLYGON_OFFSET_FILL)}function $(F){F?Se(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function S(F){F===void 0&&(F=n.TEXTURE0+J-1),X!==F&&(n.activeTexture(F),X=F)}function v(F,ve,ne){ne===void 0&&(X===null?ne=n.TEXTURE0+J-1:ne=X);let Z=me[ne];Z===void 0&&(Z={type:void 0,texture:void 0},me[ne]=Z),(Z.type!==F||Z.texture!==ve)&&(X!==ne&&(n.activeTexture(ne),X=ne),n.bindTexture(F,ve||de[F]),Z.type=F,Z.texture=ve)}function C(){const F=me[X];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(F){Pe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Pe.copy(F))}function be(F){Fe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Fe.copy(F))}function Ve(F,ve){let ne=l.get(ve);ne===void 0&&(ne=new WeakMap,l.set(ve,ne));let Z=ne.get(F);Z===void 0&&(Z=n.getUniformBlockIndex(ve,F.name),ne.set(F,Z))}function De(F,ve){const Z=l.get(ve).get(F);a.get(ve)!==Z&&(n.uniformBlockBinding(ve,Z,F.__bindingPointIndex),a.set(ve,Z))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,me={},h={},u=new WeakMap,f=[],d=null,_=!1,M=null,p=null,m=null,b=null,y=null,E=null,U=null,P=new et(0,0,0),R=0,O=!1,ie=null,x=null,w=null,K=null,k=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:N,bindFramebuffer:le,drawBuffers:re,useProgram:ue,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:I,setLineWidth:D,setPolygonOffset:Y,setScissorTest:$,activeTexture:S,bindTexture:v,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:B,texImage2D:xe,texImage3D:Ce,updateUBOMapping:Ve,uniformBlockBinding:De,texStorage2D:Te,texStorage3D:fe,texSubImage2D:z,texSubImage3D:he,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:Le,viewport:be,reset:Be}}function Vh(n,e,t,i){const s=BS(i);switch(t){case _d:return n*e;case xd:return n*e;case Md:return n*e*2;case yd:return n*e/s.components*s.byteLength;case Bc:return n*e/s.components*s.byteLength;case Sd:return n*e*2/s.components*s.byteLength;case zc:return n*e*2/s.components*s.byteLength;case vd:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case Hc:return n*e*4/s.components*s.byteLength;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Ol:return Math.max(n,16)*Math.max(e,8)/4;case Dl:case Nl:return Math.max(n,8)*Math.max(e,8)/2;case Fl:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Io:case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ed:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ic:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BS(n){switch(n){case si:case pd:return{byteLength:1,components:1};case Ar:case md:case Nr:return{byteLength:2,components:1};case Oc:case Fc:return{byteLength:2,components:4};case Ki:case Nc:case Qn:return{byteLength:4,components:1};case gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return d?new OffscreenCanvas(S,v):Cr("canvas")}function M(S,v,C){let V=1;const B=$(S);if((B.width>C||B.height>C)&&(V=C/Math.max(B.width,B.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const z=Math.floor(V*B.width),he=Math.floor(V*B.height);u===void 0&&(u=_(z,he));const ce=v?_(z,he):u;return ce.width=z,ce.height=he,ce.getContext("2d").drawImage(S,0,0,z,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+z+"x"+he+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),S;return S}function p(S){return S.generateMipmaps&&S.minFilter!==_n&&S.minFilter!==Tn}function m(S){n.generateMipmap(S)}function b(S,v,C,V,B=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let z=v;if(v===n.RED&&(C===n.FLOAT&&(z=n.R32F),C===n.HALF_FLOAT&&(z=n.R16F),C===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.R8UI),C===n.UNSIGNED_SHORT&&(z=n.R16UI),C===n.UNSIGNED_INT&&(z=n.R32UI),C===n.BYTE&&(z=n.R8I),C===n.SHORT&&(z=n.R16I),C===n.INT&&(z=n.R32I)),v===n.RG&&(C===n.FLOAT&&(z=n.RG32F),C===n.HALF_FLOAT&&(z=n.RG16F),C===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RG8UI),C===n.UNSIGNED_SHORT&&(z=n.RG16UI),C===n.UNSIGNED_INT&&(z=n.RG32UI),C===n.BYTE&&(z=n.RG8I),C===n.SHORT&&(z=n.RG16I),C===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RGB8UI),C===n.UNSIGNED_SHORT&&(z=n.RGB16UI),C===n.UNSIGNED_INT&&(z=n.RGB32UI),C===n.BYTE&&(z=n.RGB8I),C===n.SHORT&&(z=n.RGB16I),C===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),C===n.UNSIGNED_INT&&(z=n.RGBA32UI),C===n.BYTE&&(z=n.RGBA8I),C===n.SHORT&&(z=n.RGBA16I),C===n.INT&&(z=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){const he=B?Vo:rt.getTransfer(V);C===n.FLOAT&&(z=n.RGBA32F),C===n.HALF_FLOAT&&(z=n.RGBA16F),C===n.UNSIGNED_BYTE&&(z=he===pt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function y(S,v){let C;return S?v===null||v===Ki||v===Hs?C=n.DEPTH24_STENCIL8:v===Qn?C=n.DEPTH32F_STENCIL8:v===Ar&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ki||v===Hs?C=n.DEPTH_COMPONENT24:v===Qn?C=n.DEPTH_COMPONENT32F:v===Ar&&(C=n.DEPTH_COMPONENT16),C}function E(S,v){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==_n&&S.minFilter!==Tn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function U(S){const v=S.target;v.removeEventListener("dispose",U),R(v),v.isVideoTexture&&h.delete(v)}function P(S){const v=S.target;v.removeEventListener("dispose",P),ie(v)}function R(S){const v=i.get(S);if(v.__webglInit===void 0)return;const C=S.source,V=f.get(C);if(V){const B=V[v.__cacheKey];B.usedTimes--,B.usedTimes===0&&O(S),Object.keys(V).length===0&&f.delete(C)}i.remove(S)}function O(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const C=S.source,V=f.get(C);delete V[v.__cacheKey],o.memory.textures--}function ie(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let B=0;B<v.__webglFramebuffer[V].length;B++)n.deleteFramebuffer(v.__webglFramebuffer[V][B]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=S.textures;for(let V=0,B=C.length;V<B;V++){const z=i.get(C[V]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(C[V])}i.remove(S)}let x=0;function w(){x=0}function K(){const S=x;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),x+=1,S}function k(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function J(S,v){const C=i.get(S);if(S.isVideoTexture&&D(S),S.isRenderTargetTexture===!1&&S.version>0&&C.__version!==S.version){const V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(C,S,v);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function ae(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Fe(C,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function G(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Fe(C,S,v);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function Q(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){oe(C,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const X={[hn]:n.REPEAT,[Xi]:n.CLAMP_TO_EDGE,[Il]:n.MIRRORED_REPEAT},me={[_n]:n.NEAREST,[c_]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Ra]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},ye={[d_]:n.NEVER,[x_]:n.ALWAYS,[p_]:n.LESS,[bd]:n.LEQUAL,[m_]:n.EQUAL,[v_]:n.GEQUAL,[g_]:n.GREATER,[__]:n.NOTEQUAL};function ge(S,v){if(v.type===Qn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tn||v.magFilter===Ra||v.magFilter===eo||v.magFilter===qi||v.minFilter===Tn||v.minFilter===Ra||v.minFilter===eo||v.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,X[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,X[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,X[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===_n||v.minFilter!==eo&&v.minFilter!==qi||v.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Pe(S,v){let C=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",U));const V=v.source;let B=f.get(V);B===void 0&&(B={},f.set(V,B));const z=k(v);if(z!==S.__cacheKey){B[z]===void 0&&(B[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),B[z].usedTimes++;const he=B[S.__cacheKey];he!==void 0&&(B[S.__cacheKey].usedTimes--,he.usedTimes===0&&O(v)),S.__cacheKey=z,S.__webglTexture=B[z].texture}return C}function Fe(S,v,C){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const B=Pe(S,v),z=v.source;t.bindTexture(V,S.__webglTexture,n.TEXTURE0+C);const he=i.get(z);if(z.version!==he.__version||B===!0){t.activeTexture(n.TEXTURE0+C);const ce=rt.getPrimaries(rt.workingColorSpace),pe=v.colorSpace===xi?null:rt.getPrimaries(v.colorSpace),Te=v.colorSpace===xi||ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let fe=M(v.image,!1,s.maxTextureSize);fe=Y(v,fe);const xe=r.convert(v.format,v.colorSpace),Ce=r.convert(v.type);let Le=b(v.internalFormat,xe,Ce,v.colorSpace,v.isVideoTexture);ge(V,v);let be;const Ve=v.mipmaps,De=v.isVideoTexture!==!0,Be=he.__version===void 0||B===!0,F=z.dataReady,ve=E(v,fe);if(v.isDepthTexture)Le=y(v.format===Gs,v.type),Be&&(De?t.texStorage2D(n.TEXTURE_2D,1,Le,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Le,fe.width,fe.height,0,xe,Ce,null));else if(v.isDataTexture)if(Ve.length>0){De&&Be&&t.texStorage2D(n.TEXTURE_2D,ve,Le,Ve[0].width,Ve[0].height);for(let ne=0,Z=Ve.length;ne<Z;ne++)be=Ve[ne],De?F&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,be.width,be.height,xe,Ce,be.data):t.texImage2D(n.TEXTURE_2D,ne,Le,be.width,be.height,0,xe,Ce,be.data);v.generateMipmaps=!1}else De?(Be&&t.texStorage2D(n.TEXTURE_2D,ve,Le,fe.width,fe.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,xe,Ce,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Le,fe.width,fe.height,0,xe,Ce,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Le,Ve[0].width,Ve[0].height,fe.depth);for(let ne=0,Z=Ve.length;ne<Z;ne++)if(be=Ve[ne],v.format!==Rn)if(xe!==null)if(De){if(F)if(v.layerUpdates.size>0){const _e=Vh(be.width,be.height,v.format,v.type);for(const Me of v.layerUpdates){const Ne=be.data.subarray(Me*_e/be.data.BYTES_PER_ELEMENT,(Me+1)*_e/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Me,be.width,be.height,1,xe,Ne,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,fe.depth,xe,be.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Le,be.width,be.height,fe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,fe.depth,xe,Ce,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Le,be.width,be.height,fe.depth,0,xe,Ce,be.data)}else{De&&Be&&t.texStorage2D(n.TEXTURE_2D,ve,Le,Ve[0].width,Ve[0].height);for(let ne=0,Z=Ve.length;ne<Z;ne++)be=Ve[ne],v.format!==Rn?xe!==null?De?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,be.width,be.height,xe,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Le,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?F&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,be.width,be.height,xe,Ce,be.data):t.texImage2D(n.TEXTURE_2D,ne,Le,be.width,be.height,0,xe,Ce,be.data)}else if(v.isDataArrayTexture)if(De){if(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Le,fe.width,fe.height,fe.depth),F)if(v.layerUpdates.size>0){const ne=Vh(fe.width,fe.height,v.format,v.type);for(const Z of v.layerUpdates){const _e=fe.data.subarray(Z*ne/fe.data.BYTES_PER_ELEMENT,(Z+1)*ne/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,fe.width,fe.height,1,xe,Ce,_e)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ce,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,xe,Ce,fe.data);else if(v.isData3DTexture)De?(Be&&t.texStorage3D(n.TEXTURE_3D,ve,Le,fe.width,fe.height,fe.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ce,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,xe,Ce,fe.data);else if(v.isFramebufferTexture){if(Be)if(De)t.texStorage2D(n.TEXTURE_2D,ve,Le,fe.width,fe.height);else{let ne=fe.width,Z=fe.height;for(let _e=0;_e<ve;_e++)t.texImage2D(n.TEXTURE_2D,_e,Le,ne,Z,0,xe,Ce,null),ne>>=1,Z>>=1}}else if(Ve.length>0){if(De&&Be){const ne=$(Ve[0]);t.texStorage2D(n.TEXTURE_2D,ve,Le,ne.width,ne.height)}for(let ne=0,Z=Ve.length;ne<Z;ne++)be=Ve[ne],De?F&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,xe,Ce,be):t.texImage2D(n.TEXTURE_2D,ne,Le,xe,Ce,be);v.generateMipmaps=!1}else if(De){if(Be){const ne=$(fe);t.texStorage2D(n.TEXTURE_2D,ve,Le,ne.width,ne.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ce,fe)}else t.texImage2D(n.TEXTURE_2D,0,Le,xe,Ce,fe);p(v)&&m(V),he.__version=z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function oe(S,v,C){if(v.image.length!==6)return;const V=Pe(S,v),B=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+C);const z=i.get(B);if(B.version!==z.__version||V===!0){t.activeTexture(n.TEXTURE0+C);const he=rt.getPrimaries(rt.workingColorSpace),ce=v.colorSpace===xi?null:rt.getPrimaries(v.colorSpace),pe=v.colorSpace===xi||he===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!Te&&!fe?xe[Z]=M(v.image[Z],!0,s.maxCubemapSize):xe[Z]=fe?v.image[Z].image:v.image[Z],xe[Z]=Y(v,xe[Z]);const Ce=xe[0],Le=r.convert(v.format,v.colorSpace),be=r.convert(v.type),Ve=b(v.internalFormat,Le,be,v.colorSpace),De=v.isVideoTexture!==!0,Be=z.__version===void 0||V===!0,F=B.dataReady;let ve=E(v,Ce);ge(n.TEXTURE_CUBE_MAP,v);let ne;if(Te){De&&Be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ve,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){ne=xe[Z].mipmaps;for(let _e=0;_e<ne.length;_e++){const Me=ne[_e];v.format!==Rn?Le!==null?De?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Ve,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Me.width,Me.height,Le,be,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Ve,Me.width,Me.height,0,Le,be,Me.data)}}}else{if(ne=v.mipmaps,De&&Be){ne.length>0&&ve++;const Z=$(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(fe){De?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,Le,be,xe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,xe[Z].width,xe[Z].height,0,Le,be,xe[Z].data);for(let _e=0;_e<ne.length;_e++){const Ne=ne[_e].image[Z].image;De?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Ne.width,Ne.height,Le,be,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Ve,Ne.width,Ne.height,0,Le,be,Ne.data)}}else{De?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,be,xe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Le,be,xe[Z]);for(let _e=0;_e<ne.length;_e++){const Me=ne[_e];De?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Le,be,Me.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Ve,Le,be,Me.image[Z])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),z.__version=B.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function de(S,v,C,V,B,z){const he=r.convert(C.format,C.colorSpace),ce=r.convert(C.type),pe=b(C.internalFormat,he,ce,C.colorSpace);if(!i.get(v).__hasExternalTextures){const fe=Math.max(1,v.width>>z),xe=Math.max(1,v.height>>z);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?t.texImage3D(B,z,pe,fe,xe,v.depth,0,he,ce,null):t.texImage2D(B,z,pe,fe,xe,0,he,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),I(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,B,i.get(C).__webglTexture,0,L(v)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,B,i.get(C).__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(S,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const V=v.depthTexture,B=V&&V.isDepthTexture?V.type:null,z=y(v.stencilBuffer,B),he=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=L(v);I(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,z,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,S)}else{const V=v.textures;for(let B=0;B<V.length;B++){const z=V[B],he=r.convert(z.format,z.colorSpace),ce=r.convert(z.type),pe=b(z.internalFormat,he,ce,z.colorSpace),Te=L(v);C&&I(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,pe,v.width,v.height):I(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,B=L(v);if(v.depthTexture.format===Ls)I(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===Gs)I(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function le(S){const v=i.get(S),C=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const V=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const B=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",B)};V.addEventListener("dispose",B),v.__depthDisposeCallback=B}v.__boundDepthTexture=V}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");N(v.__webglFramebuffer,S)}else if(C){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),Se(v.__webglDepthbuffer[V],S,!1);else{const B=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Se(v.__webglDepthbuffer,S,!1);else{const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,B)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(S,v,C){const V=i.get(S);v!==void 0&&de(V.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&le(S)}function ue(S){const v=S.texture,C=i.get(S),V=i.get(v);S.addEventListener("dispose",P);const B=S.textures,z=S.isWebGLCubeRenderTarget===!0,he=B.length>1;if(he||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),z){C.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ce]=[];for(let pe=0;pe<v.mipmaps.length;pe++)C.__webglFramebuffer[ce][pe]=n.createFramebuffer()}else C.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)C.__webglFramebuffer[ce]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(he)for(let ce=0,pe=B.length;ce<pe;ce++){const Te=i.get(B[ce]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&I(S)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ce=0;ce<B.length;ce++){const pe=B[ce];C.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ce]);const Te=r.convert(pe.format,pe.colorSpace),fe=r.convert(pe.type),xe=b(pe.internalFormat,Te,fe,pe.colorSpace,S.isXRRenderTarget===!0),Ce=L(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,C.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(C.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ge(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)de(C.__webglFramebuffer[ce][pe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else de(C.__webglFramebuffer[ce],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ce=0,pe=B.length;ce<pe;ce++){const Te=B[ce],fe=i.get(Te);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),ge(n.TEXTURE_2D,Te),de(C.__webglFramebuffer,S,Te,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(Te)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,V.__webglTexture),ge(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)de(C.__webglFramebuffer[pe],S,v,n.COLOR_ATTACHMENT0,ce,pe);else de(C.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ce,0);p(v)&&m(ce),t.unbindTexture()}S.depthBuffer&&le(S)}function Ee(S){const v=S.textures;for(let C=0,V=v.length;C<V;C++){const B=v[C];if(p(B)){const z=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(B).__webglTexture;t.bindTexture(z,he),m(z),t.unbindTexture()}}}const te=[],g=[];function T(S){if(S.samples>0){if(I(S)===!1){const v=S.textures,C=S.width,V=S.height;let B=n.COLOR_BUFFER_BIT;const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(S),ce=v.length>1;if(ce)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Te=i.get(v[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,C,V,0,0,C,V,B,n.NEAREST),l===!0&&(te.length=0,g.length=0,te.push(n.COLOR_ATTACHMENT0+pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(te.push(z),g.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Te=i.get(v[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(S){return Math.min(s.maxSamples,S.samples)}function I(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(S){const v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Y(S,v){const C=S.colorSpace,V=S.format,B=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||C!==Pi&&C!==xi&&(rt.getTransfer(C)===pt?(V!==Rn||B!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function $(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=w,this.setTexture2D=J,this.setTexture2DArray=ae,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=re,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=de,this.useMultisampledRTT=I}function HS(n,e){function t(i,s=xi){let r;const o=rt.getTransfer(s);if(i===si)return n.UNSIGNED_BYTE;if(i===Oc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pd)return n.BYTE;if(i===md)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===Nr)return n.HALF_FLOAT;if(i===_d)return n.ALPHA;if(i===vd)return n.RGB;if(i===Rn)return n.RGBA;if(i===xd)return n.LUMINANCE;if(i===Md)return n.LUMINANCE_ALPHA;if(i===Ls)return n.DEPTH_COMPONENT;if(i===Gs)return n.DEPTH_STENCIL;if(i===yd)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Sd)return n.RG;if(i===zc)return n.RG_INTEGER;if(i===Hc)return n.RGBA_INTEGER;if(i===Ro||i===Co||i===Po||i===Lo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dl||i===Ul||i===Nl||i===Ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Bl||i===zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fl||i===Bl)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===Gl||i===Vl||i===kl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Kl||i===jl||i===Zl||i===Jl||i===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===ec||i===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Io)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ed||i===nc||i===ic||i===sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class GS extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ct extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VS={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WS=`
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

}`;class XS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wi({vertexShader:kS,fragmentShader:WS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new j(new la(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qS extends Ys{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const M=new XS,p=t.getContextAttributes();let m=null,b=null;const y=[],E=[],U=new Re;let P=null;const R=new Ft;R.layers.enable(1),R.viewport=new ut;const O=new Ft;O.layers.enable(2),O.viewport=new ut;const ie=[R,O],x=new GS;x.layers.enable(1),x.layers.enable(2);let w=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let de=y[oe];return de===void 0&&(de=new nl,y[oe]=de),de.getTargetRaySpace()},this.getControllerGrip=function(oe){let de=y[oe];return de===void 0&&(de=new nl,y[oe]=de),de.getGripSpace()},this.getHand=function(oe){let de=y[oe];return de===void 0&&(de=new nl,y[oe]=de),de.getHandSpace()};function k(oe){const de=E.indexOf(oe.inputSource);if(de===-1)return;const Se=y[de];Se!==void 0&&(Se.update(oe.inputSource,oe.frame,c||o),Se.dispatchEvent({type:oe.type,data:oe.inputSource}))}function J(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ae);for(let oe=0;oe<y.length;oe++){const de=E[oe];de!==null&&(E[oe]=null,y[oe].disconnect(de))}w=null,K=null,M.reset(),e.setRenderTarget(m),d=null,f=null,u=null,s=null,b=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ae),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ji(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,Se=null,N=null;p.depth&&(N=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?Gs:Ls,Se=p.stencil?Hs:Ki);const le={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ji(f.textureWidth,f.textureHeight,{format:Rn,type:si,depthTexture:new Bd(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Fe.setContext(s),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ae(oe){for(let de=0;de<oe.removed.length;de++){const Se=oe.removed[de],N=E.indexOf(Se);N>=0&&(E[N]=null,y[N].disconnect(Se))}for(let de=0;de<oe.added.length;de++){const Se=oe.added[de];let N=E.indexOf(Se);if(N===-1){for(let re=0;re<y.length;re++)if(re>=E.length){E.push(Se),N=re;break}else if(E[re]===null){E[re]=Se,N=re;break}if(N===-1)break}const le=y[N];le&&le.connect(Se)}}const G=new H,Q=new H;function X(oe,de,Se){G.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const N=G.distanceTo(Q),le=de.projectionMatrix.elements,re=Se.projectionMatrix.elements,ue=le[14]/(le[10]-1),Ee=le[14]/(le[10]+1),te=(le[9]+1)/le[5],g=(le[9]-1)/le[5],T=(le[8]-1)/le[0],L=(re[8]+1)/re[0],I=ue*T,D=ue*L,Y=N/(-T+L),$=Y*-T;if(de.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX($),oe.translateZ(Y),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),le[10]===-1)oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const S=ue+Y,v=Ee+Y,C=I-$,V=D+(N-$),B=te*Ee/v*S,z=g*Ee/v*S;oe.projectionMatrix.makePerspective(C,V,B,z,S,v),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function me(oe,de){de===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(de.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let de=oe.near,Se=oe.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(Se=M.depthFar)),x.near=O.near=R.near=de,x.far=O.far=R.far=Se,(w!==x.near||K!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,K=x.far);const N=oe.parent,le=x.cameras;me(x,N);for(let re=0;re<le.length;re++)me(le[re],N);le.length===2?X(x,R,O):x.projectionMatrix.copy(R.projectionMatrix),ye(oe,x,N)};function ye(oe,de,Se){Se===null?oe.matrix.copy(de.matrixWorld):(oe.matrix.copy(Se.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(de.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Rr*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=oe)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let ge=null;function Pe(oe,de){if(h=de.getViewerPose(c||o),_=de,h!==null){const Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let N=!1;Se.length!==x.cameras.length&&(x.cameras.length=0,N=!0);for(let re=0;re<Se.length;re++){const ue=Se[re];let Ee=null;if(d!==null)Ee=d.getViewport(ue);else{const g=u.getViewSubImage(f,ue);Ee=g.viewport,re===0&&(e.setRenderTargetTextures(b,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(b))}let te=ie[re];te===void 0&&(te=new Ft,te.layers.enable(re),te.viewport=new ut,ie[re]=te),te.matrix.fromArray(ue.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ue.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),re===0&&(x.matrix.copy(te.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),N===!0&&x.cameras.push(te)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const re=u.getDepthInformation(Se[0]);re&&re.isValid&&re.texture&&M.init(e,re,s.renderState)}}for(let Se=0;Se<y.length;Se++){const N=E[Se],le=y[Se];N!==null&&le!==void 0&&le.update(N,de,c||o)}ge&&ge(oe,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Fe=new Od;Fe.setAnimationLoop(Pe),this.setAnimationLoop=function(oe){ge=oe},this.dispose=function(){}}}const zi=new Hn,YS=new _t;function $S(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Dd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,y,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===en&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===en&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m),y=b.envMap,E=b.envMapRotation;y&&(p.envMap.value=y,zi.copy(E),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),p.envMapRotation.value.setFromMatrix4(YS.makeRotationFromEuler(zi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function KS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const E=y.program;i.uniformBlockBinding(b,E)}function c(b,y){let E=s[b.id];E===void 0&&(_(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",p));const U=y.program;i.updateUBOMapping(b,U);const P=e.render.frame;r[b.id]!==P&&(f(b),r[b.id]=P)}function h(b){const y=u();b.__bindingPointIndex=y;const E=n.createBuffer(),U=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=s[b.id],E=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,R=E.length;P<R;P++){const O=Array.isArray(E[P])?E[P]:[E[P]];for(let ie=0,x=O.length;ie<x;ie++){const w=O[ie];if(d(w,P,ie,U)===!0){const K=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let J=0;for(let ae=0;ae<k.length;ae++){const G=k[ae],Q=M(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,K+J,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,y,E,U){const P=b.value,R=y+"_"+E;if(U[R]===void 0)return typeof P=="number"||typeof P=="boolean"?U[R]=P:U[R]=P.clone(),!0;{const O=U[R];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return U[R]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function _(b){const y=b.uniforms;let E=0;const U=16;for(let R=0,O=y.length;R<O;R++){const ie=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,w=ie.length;x<w;x++){const K=ie[x],k=Array.isArray(K.value)?K.value:[K.value];for(let J=0,ae=k.length;J<ae;J++){const G=k[J],Q=M(G),X=E%U,me=X%Q.boundary,ye=X+me;E+=me,ye!==0&&U-ye<Q.storage&&(E+=U-ye),K.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=Q.storage}}}const P=E%U;return P>0&&(E+=U-P),b.__size=E,b.__cache={},this}function M(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class zr{constructor(e={}){const{canvas:t=O_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let M=null,p=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=yi,this.toneMappingExposure=1;const y=this;let E=!1,U=0,P=0,R=null,O=-1,ie=null;const x=new ut,w=new ut;let K=null;const k=new et(0);let J=0,ae=t.width,G=t.height,Q=1,X=null,me=null;const ye=new ut(0,0,ae,G),ge=new ut(0,0,ae,G);let Pe=!1;const Fe=new Wc;let oe=!1,de=!1;const Se=new _t,N=new _t,le=new H,re=new ut,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function te(){return R===null?Q:1}let g=i;function T(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Me,!1),g===null){const W="webgl2";if(g=T(W,A),g===null)throw T(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,I,D,Y,$,S,v,C,V,B,z,he,ce,pe,Te,fe,xe,Ce,Le,be,Ve,De,Be,F;function ve(){L=new ty(g),L.init(),De=new HS(g,L),I=new KM(g,L,e,De),D=new FS(g),I.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),Y=new sy(g),$=new SS,S=new zS(g,L,D,$,I,De,Y),v=new ZM(y),C=new ey(y),V=new hv(g),Be=new YM(g,V),B=new ny(g,V,Y,Be),z=new oy(g,B,V,Y),Le=new ry(g,I,S),fe=new jM($),he=new yS(y,v,C,L,I,Be,fe),ce=new $S(y,$),pe=new wS,Te=new PS(L),Ce=new qM(y,v,C,D,z,f,l),xe=new NS(y,z,I),F=new KS(g,Y,I,D),be=new $M(g,L,Y),Ve=new iy(g,L,Y),Y.programs=he.programs,y.capabilities=I,y.extensions=L,y.properties=$,y.renderLists=pe,y.shadowMap=xe,y.state=D,y.info=Y}ve();const ne=new qS(y,g);this.xr=ne,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(ae,G,!1))},this.getSize=function(A){return A.set(ae,G)},this.setSize=function(A,W,ee=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,G=W,t.width=Math.floor(A*Q),t.height=Math.floor(W*Q),ee===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ae*Q,G*Q).floor()},this.setDrawingBufferSize=function(A,W,ee){ae=A,G=W,Q=ee,t.width=Math.floor(A*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,W,ee,se){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,W,ee,se),D.viewport(x.copy(ye).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,W,ee,se){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,W,ee,se),D.scissor(w.copy(ge).multiplyScalar(Q).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(A){D.setScissorTest(Pe=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(A=!0,W=!0,ee=!0){let se=0;if(A){let q=!1;if(R!==null){const we=R.texture.format;q=we===Hc||we===zc||we===Bc}if(q){const we=R.texture.type,Ie=we===si||we===Ki||we===Ar||we===Hs||we===Oc||we===Fc,Ue=Ce.getClearColor(),Oe=Ce.getClearAlpha(),ke=Ue.r,qe=Ue.g,ze=Ue.b;Ie?(d[0]=ke,d[1]=qe,d[2]=ze,d[3]=Oe,g.clearBufferuiv(g.COLOR,0,d)):(_[0]=ke,_[1]=qe,_[2]=ze,_[3]=Oe,g.clearBufferiv(g.COLOR,0,_))}else se|=g.COLOR_BUFFER_BIT}W&&(se|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ee&&(se|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),pe.dispose(),Te.dispose(),$.dispose(),v.dispose(),C.dispose(),z.dispose(),Be.dispose(),F.dispose(),he.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",yt),ne.removeEventListener("sessionend",wt),St.stop()};function Z(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Y.autoReset,W=xe.enabled,ee=xe.autoUpdate,se=xe.needsUpdate,q=xe.type;ve(),Y.autoReset=A,xe.enabled=W,xe.autoUpdate=ee,xe.needsUpdate=se,xe.type=q}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ne(A){const W=A.target;W.removeEventListener("dispose",Ne),Ke(W)}function Ke(A){tt(A),$.remove(A)}function tt(A){const W=$.get(A).programs;W!==void 0&&(W.forEach(function(ee){he.releaseProgram(ee)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ee,se,q,we){W===null&&(W=ue);const Ie=q.isMesh&&q.matrixWorld.determinant()<0,Ue=Jd(A,W,ee,se,q);D.setMaterial(se,Ie);let Oe=ee.index,ke=1;if(se.wireframe===!0){if(Oe=B.getWireframeAttribute(ee),Oe===void 0)return;ke=2}const qe=ee.drawRange,ze=ee.attributes.position;let at=qe.start*ke,dt=(qe.start+qe.count)*ke;we!==null&&(at=Math.max(at,we.start*ke),dt=Math.min(dt,(we.start+we.count)*ke)),Oe!==null?(at=Math.max(at,0),dt=Math.min(dt,Oe.count)):ze!=null&&(at=Math.max(at,0),dt=Math.min(dt,ze.count));const Et=dt-at;if(Et<0||Et===1/0)return;Be.setup(q,se,Ue,ee,Oe);let nn,nt=be;if(Oe!==null&&(nn=V.get(Oe),nt=Ve,nt.setIndex(nn)),q.isMesh)se.wireframe===!0?(D.setLineWidth(se.wireframeLinewidth*te()),nt.setMode(g.LINES)):nt.setMode(g.TRIANGLES);else if(q.isLine){let He=se.linewidth;He===void 0&&(He=1),D.setLineWidth(He*te()),q.isLineSegments?nt.setMode(g.LINES):q.isLineLoop?nt.setMode(g.LINE_LOOP):nt.setMode(g.LINE_STRIP)}else q.isPoints?nt.setMode(g.POINTS):q.isSprite&&nt.setMode(g.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)nt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))nt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const He=q._multiDrawStarts,Nt=q._multiDrawCounts,it=q._multiDrawCount,yn=Oe?V.get(Oe).bytesPerElement:1,ns=$.get(se).currentProgram.getUniforms();for(let sn=0;sn<it;sn++)ns.setValue(g,"_gl_DrawID",sn),nt.render(He[sn]/yn,Nt[sn])}else if(q.isInstancedMesh)nt.renderInstances(at,Et,q.count);else if(ee.isInstancedBufferGeometry){const He=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Nt=Math.min(ee.instanceCount,He);nt.renderInstances(at,Et,Nt)}else nt.render(at,Et)};function Xe(A,W,ee){A.transparent===!0&&A.side===xt&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,oi(A,W,ee),A.side=Ei,A.needsUpdate=!0,oi(A,W,ee),A.side=xt):oi(A,W,ee)}this.compile=function(A,W,ee=null){ee===null&&(ee=A),p=Te.get(ee),p.init(W),b.push(p),ee.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),A!==ee&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const se=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const we=q.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){const Ue=we[Ie];Xe(Ue,ee,q),se.add(Ue)}else Xe(we,ee,q),se.add(we)}),b.pop(),p=null,se},this.compileAsync=function(A,W,ee=null){const se=this.compile(A,W,ee);return new Promise(q=>{function we(){if(se.forEach(function(Ie){$.get(Ie).currentProgram.isReady()&&se.delete(Ie)}),se.size===0){q(A);return}setTimeout(we,10)}L.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Je=null;function Qe(A){Je&&Je(A)}function yt(){St.stop()}function wt(){St.start()}const St=new Od;St.setAnimationLoop(Qe),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(A){Je=A,ne.setAnimationLoop(A),A===null?St.stop():St.start()},ne.addEventListener("sessionstart",yt),ne.addEventListener("sessionend",wt),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(W),W=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,W,R),p=Te.get(A,b.length),p.init(W),b.push(p),N.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Fe.setFromProjectionMatrix(N),de=this.localClippingEnabled,oe=fe.init(this.clippingPlanes,de),M=pe.get(A,m.length),M.init(),m.push(M),ne.enabled===!0&&ne.isPresenting===!0){const we=y.xr.getDepthSensingMesh();we!==null&&Ut(we,W,-1/0,y.sortObjects)}Ut(A,W,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(X,me),Ee=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ee&&Ce.addToRenderList(M,A),this.info.render.frame++,oe===!0&&fe.beginShadows();const ee=p.state.shadowsArray;xe.render(ee,A,W),oe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=M.opaque,q=M.transmissive;if(p.setupLights(),W.isArrayCamera){const we=W.cameras;if(q.length>0)for(let Ie=0,Ue=we.length;Ie<Ue;Ie++){const Oe=we[Ie];fn(se,q,A,Oe)}Ee&&Ce.render(A);for(let Ie=0,Ue=we.length;Ie<Ue;Ie++){const Oe=we[Ie];tn(M,A,Oe,Oe.viewport)}}else q.length>0&&fn(se,q,A,W),Ee&&Ce.render(A),tn(M,A,W);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(y,A,W),Be.resetDefaultState(),O=-1,ie=null,b.pop(),b.length>0?(p=b[b.length-1],oe===!0&&fe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function Ut(A,W,ee,se){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){se&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Ie=z.update(A),Ue=A.material;Ue.visible&&M.push(A,Ie,Ue,ee,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){const Ie=z.update(A),Ue=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),re.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),re.copy(Ie.boundingSphere.center)),re.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Ue)){const Oe=Ie.groups;for(let ke=0,qe=Oe.length;ke<qe;ke++){const ze=Oe[ke],at=Ue[ze.materialIndex];at&&at.visible&&M.push(A,Ie,at,ee,re.z,ze)}}else Ue.visible&&M.push(A,Ie,Ue,ee,re.z,null)}}const we=A.children;for(let Ie=0,Ue=we.length;Ie<Ue;Ie++)Ut(we[Ie],W,ee,se)}function tn(A,W,ee,se){const q=A.opaque,we=A.transmissive,Ie=A.transparent;p.setupLightsView(ee),oe===!0&&fe.setGlobalState(y.clippingPlanes,ee),se&&D.viewport(x.copy(se)),q.length>0&&dn(q,W,ee),we.length>0&&dn(we,W,ee),Ie.length>0&&dn(Ie,W,ee),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function fn(A,W,ee,se){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new ji(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Nr:si,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const we=p.state.transmissionRenderTarget[se.id],Ie=se.viewport||x;we.setSize(Ie.z,Ie.w);const Ue=y.getRenderTarget();y.setRenderTarget(we),y.getClearColor(k),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Ee&&Ce.render(ee);const Oe=y.toneMapping;y.toneMapping=yi;const ke=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),oe===!0&&fe.setGlobalState(y.clippingPlanes,se),dn(A,ee,se),S.updateMultisampleRenderTarget(we),S.updateRenderTargetMipmap(we),L.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ze=0,at=W.length;ze<at;ze++){const dt=W[ze],Et=dt.object,nn=dt.geometry,nt=dt.material,He=dt.group;if(nt.side===xt&&Et.layers.test(se.layers)){const Nt=nt.side;nt.side=en,nt.needsUpdate=!0,Yr(Et,ee,se,nn,nt,He),nt.side=Nt,nt.needsUpdate=!0,qe=!0}}qe===!0&&(S.updateMultisampleRenderTarget(we),S.updateRenderTargetMipmap(we))}y.setRenderTarget(Ue),y.setClearColor(k,J),ke!==void 0&&(se.viewport=ke),y.toneMapping=Oe}function dn(A,W,ee){const se=W.isScene===!0?W.overrideMaterial:null;for(let q=0,we=A.length;q<we;q++){const Ie=A[q],Ue=Ie.object,Oe=Ie.geometry,ke=se===null?Ie.material:se,qe=Ie.group;Ue.layers.test(ee.layers)&&Yr(Ue,W,ee,Oe,ke,qe)}}function Yr(A,W,ee,se,q,we){A.onBeforeRender(y,W,ee,se,q,we),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(y,W,ee,se,A,we),q.transparent===!0&&q.side===xt&&q.forceSinglePass===!1?(q.side=en,q.needsUpdate=!0,y.renderBufferDirect(ee,W,se,q,A,we),q.side=Ei,q.needsUpdate=!0,y.renderBufferDirect(ee,W,se,q,A,we),q.side=xt):y.renderBufferDirect(ee,W,se,q,A,we),A.onAfterRender(y,W,ee,se,q,we)}function oi(A,W,ee){W.isScene!==!0&&(W=ue);const se=$.get(A),q=p.state.lights,we=p.state.shadowsArray,Ie=q.state.version,Ue=he.getParameters(A,q.state,we,W,ee),Oe=he.getProgramCacheKey(Ue);let ke=se.programs;se.environment=A.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Ne),ke=new Map,se.programs=ke);let qe=ke.get(Oe);if(qe!==void 0){if(se.currentProgram===qe&&se.lightsStateVersion===Ie)return Zc(A,Ue),qe}else Ue.uniforms=he.getUniforms(A),A.onBeforeCompile(Ue,y),qe=he.acquireProgram(Ue,Oe),ke.set(Oe,qe),se.uniforms=Ue.uniforms;const ze=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=fe.uniform),Zc(A,Ue),se.needsLights=ep(A),se.lightsStateVersion=Ie,se.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMap.value=q.state.directionalShadowMap,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotShadowMap.value=q.state.spotShadowMap,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMap.value=q.state.pointShadowMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=qe,se.uniformsList=null,qe}function jc(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Uo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Zc(A,W){const ee=$.get(A);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Jd(A,W,ee,se,q){W.isScene!==!0&&(W=ue),S.resetTextureUnits();const we=W.fog,Ie=se.isMeshStandardMaterial?W.environment:null,Ue=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Pi,Oe=(se.isMeshStandardMaterial?C:v).get(se.envMap||Ie),ke=se.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,qe=!!ee.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ze=!!ee.morphAttributes.position,at=!!ee.morphAttributes.normal,dt=!!ee.morphAttributes.color;let Et=yi;se.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Et=y.toneMapping);const nn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,nt=nn!==void 0?nn.length:0,He=$.get(se),Nt=p.state.lights;if(oe===!0&&(de===!0||A!==ie)){const pn=A===ie&&se.id===O;fe.setState(se,A,pn)}let it=!1;se.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Nt.state.version||He.outputColorSpace!==Ue||q.isBatchedMesh&&He.batching===!1||!q.isBatchedMesh&&He.batching===!0||q.isBatchedMesh&&He.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&He.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&He.instancing===!1||!q.isInstancedMesh&&He.instancing===!0||q.isSkinnedMesh&&He.skinning===!1||!q.isSkinnedMesh&&He.skinning===!0||q.isInstancedMesh&&He.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&He.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&He.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&He.instancingMorph===!1&&q.morphTexture!==null||He.envMap!==Oe||se.fog===!0&&He.fog!==we||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==fe.numPlanes||He.numIntersection!==fe.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==qe||He.morphTargets!==ze||He.morphNormals!==at||He.morphColors!==dt||He.toneMapping!==Et||He.morphTargetsCount!==nt)&&(it=!0):(it=!0,He.__version=se.version);let yn=He.currentProgram;it===!0&&(yn=oi(se,W,q));let ns=!1,sn=!1,ha=!1;const bt=yn.getUniforms(),ai=He.uniforms;if(D.useProgram(yn.program)&&(ns=!0,sn=!0,ha=!0),se.id!==O&&(O=se.id,sn=!0),ns||ie!==A){I.reverseDepthBuffer?(Se.copy(A.projectionMatrix),B_(Se),z_(Se),bt.setValue(g,"projectionMatrix",Se)):bt.setValue(g,"projectionMatrix",A.projectionMatrix),bt.setValue(g,"viewMatrix",A.matrixWorldInverse);const pn=bt.map.cameraPosition;pn!==void 0&&pn.setValue(g,le.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&bt.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&bt.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,sn=!0,ha=!0)}if(q.isSkinnedMesh){bt.setOptional(g,q,"bindMatrix"),bt.setOptional(g,q,"bindMatrixInverse");const pn=q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),bt.setValue(g,"boneTexture",pn.boneTexture,S))}q.isBatchedMesh&&(bt.setOptional(g,q,"batchingTexture"),bt.setValue(g,"batchingTexture",q._matricesTexture,S),bt.setOptional(g,q,"batchingIdTexture"),bt.setValue(g,"batchingIdTexture",q._indirectTexture,S),bt.setOptional(g,q,"batchingColorTexture"),q._colorsTexture!==null&&bt.setValue(g,"batchingColorTexture",q._colorsTexture,S));const fa=ee.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0)&&Le.update(q,ee,yn),(sn||He.receiveShadow!==q.receiveShadow)&&(He.receiveShadow=q.receiveShadow,bt.setValue(g,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(ai.envMap.value=Oe,ai.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&W.environment!==null&&(ai.envMapIntensity.value=W.environmentIntensity),sn&&(bt.setValue(g,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&Qd(ai,ha),we&&se.fog===!0&&ce.refreshFogUniforms(ai,we),ce.refreshMaterialUniforms(ai,se,Q,G,p.state.transmissionRenderTarget[A.id]),Uo.upload(g,jc(He),ai,S)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Uo.upload(g,jc(He),ai,S),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&bt.setValue(g,"center",q.center),bt.setValue(g,"modelViewMatrix",q.modelViewMatrix),bt.setValue(g,"normalMatrix",q.normalMatrix),bt.setValue(g,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const pn=se.uniformsGroups;for(let da=0,tp=pn.length;da<tp;da++){const Jc=pn[da];F.update(Jc,yn),F.bind(Jc,yn)}}return yn}function Qd(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ep(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,W,ee){$.get(A.texture).__webglTexture=W,$.get(A.depthTexture).__webglTexture=ee;const se=$.get(A);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ee===void 0,se.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const ee=$.get(A);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ee=0){R=A,U=W,P=ee;let se=!0,q=null,we=!1,Ie=!1;if(A){const Oe=$.get(A);if(Oe.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),se=!1;else if(Oe.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(Oe.__hasExternalTextures)S.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Oe.__boundDepthTexture!==ze){if(ze!==null&&$.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ie=!0);const qe=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[W])?q=qe[W][ee]:q=qe[W],we=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?q=$.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?q=qe[ee]:q=qe,x.copy(A.viewport),w.copy(A.scissor),K=A.scissorTest}else x.copy(ye).multiplyScalar(Q).floor(),w.copy(ge).multiplyScalar(Q).floor(),K=Pe;if(D.bindFramebuffer(g.FRAMEBUFFER,q)&&se&&D.drawBuffers(A,q),D.viewport(x),D.scissor(w),D.setScissorTest(K),we){const Oe=$.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,ee)}else if(Ie){const Oe=$.get(A.texture),ke=W||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Oe.__webglTexture,ee||0,ke)}O=-1},this.readRenderTargetPixels=function(A,W,ee,se,q,we,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){D.bindFramebuffer(g.FRAMEBUFFER,Ue);try{const Oe=A.texture,ke=Oe.format,qe=Oe.type;if(!I.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-se&&ee>=0&&ee<=A.height-q&&g.readPixels(W,ee,se,q,De.convert(ke),De.convert(qe),we)}finally{const Oe=R!==null?$.get(R).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,W,ee,se,q,we,Ie){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){const Oe=A.texture,ke=Oe.format,qe=Oe.type;if(!I.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-se&&ee>=0&&ee<=A.height-q){D.bindFramebuffer(g.FRAMEBUFFER,Ue);const ze=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,ze),g.bufferData(g.PIXEL_PACK_BUFFER,we.byteLength,g.STREAM_READ),g.readPixels(W,ee,se,q,De.convert(ke),De.convert(qe),0);const at=R!==null?$.get(R).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,at);const dt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await F_(g,dt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,ze),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,we),g.deleteBuffer(ze),g.deleteSync(dt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,ee=0){A.isTexture!==!0&&(Do("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const se=Math.pow(2,-ee),q=Math.floor(A.image.width*se),we=Math.floor(A.image.height*se),Ie=W!==null?W.x:0,Ue=W!==null?W.y:0;S.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,ee,0,0,Ie,Ue,q,we),D.unbindTexture()},this.copyTextureToTexture=function(A,W,ee=null,se=null,q=0){A.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,A=arguments[1],W=arguments[2],q=arguments[3]||0,ee=null);let we,Ie,Ue,Oe,ke,qe;ee!==null?(we=ee.max.x-ee.min.x,Ie=ee.max.y-ee.min.y,Ue=ee.min.x,Oe=ee.min.y):(we=A.image.width,Ie=A.image.height,Ue=0,Oe=0),se!==null?(ke=se.x,qe=se.y):(ke=0,qe=0);const ze=De.convert(W.format),at=De.convert(W.type);S.setTexture2D(W,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,W.unpackAlignment);const dt=g.getParameter(g.UNPACK_ROW_LENGTH),Et=g.getParameter(g.UNPACK_IMAGE_HEIGHT),nn=g.getParameter(g.UNPACK_SKIP_PIXELS),nt=g.getParameter(g.UNPACK_SKIP_ROWS),He=g.getParameter(g.UNPACK_SKIP_IMAGES),Nt=A.isCompressedTexture?A.mipmaps[q]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Nt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Nt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ue),g.pixelStorei(g.UNPACK_SKIP_ROWS,Oe),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,q,ke,qe,we,Ie,ze,at,Nt.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,q,ke,qe,Nt.width,Nt.height,ze,Nt.data):g.texSubImage2D(g.TEXTURE_2D,q,ke,qe,we,Ie,ze,at,Nt),g.pixelStorei(g.UNPACK_ROW_LENGTH,dt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Et),g.pixelStorei(g.UNPACK_SKIP_PIXELS,nn),g.pixelStorei(g.UNPACK_SKIP_ROWS,nt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,He),q===0&&W.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ee=null,se=null,q=0){A.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,se=arguments[1]||null,A=arguments[2],W=arguments[3],q=arguments[4]||0);let we,Ie,Ue,Oe,ke,qe,ze,at,dt;const Et=A.isCompressedTexture?A.mipmaps[q]:A.image;ee!==null?(we=ee.max.x-ee.min.x,Ie=ee.max.y-ee.min.y,Ue=ee.max.z-ee.min.z,Oe=ee.min.x,ke=ee.min.y,qe=ee.min.z):(we=Et.width,Ie=Et.height,Ue=Et.depth,Oe=0,ke=0,qe=0),se!==null?(ze=se.x,at=se.y,dt=se.z):(ze=0,at=0,dt=0);const nn=De.convert(W.format),nt=De.convert(W.type);let He;if(W.isData3DTexture)S.setTexture3D(W,0),He=g.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)S.setTexture2DArray(W,0),He=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,W.unpackAlignment);const Nt=g.getParameter(g.UNPACK_ROW_LENGTH),it=g.getParameter(g.UNPACK_IMAGE_HEIGHT),yn=g.getParameter(g.UNPACK_SKIP_PIXELS),ns=g.getParameter(g.UNPACK_SKIP_ROWS),sn=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,Et.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Et.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Oe),g.pixelStorei(g.UNPACK_SKIP_ROWS,ke),g.pixelStorei(g.UNPACK_SKIP_IMAGES,qe),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(He,q,ze,at,dt,we,Ie,Ue,nn,nt,Et.data):W.isCompressedArrayTexture?g.compressedTexSubImage3D(He,q,ze,at,dt,we,Ie,Ue,nn,Et.data):g.texSubImage3D(He,q,ze,at,dt,we,Ie,Ue,nn,nt,Et),g.pixelStorei(g.UNPACK_ROW_LENGTH,Nt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,it),g.pixelStorei(g.UNPACK_SKIP_PIXELS,yn),g.pixelStorei(g.UNPACK_SKIP_ROWS,ns),g.pixelStorei(g.UNPACK_SKIP_IMAGES,sn),q===0&&W.generateMipmaps&&g.generateMipmap(He),D.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){U=0,P=0,R=null,D.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gc?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===aa?"display-p3":"srgb"}}class Hr extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Re:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new H,s=[],r=[],o=[],a=new H,l=new _t;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(It(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(It(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qc extends Gn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jS extends qc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const So=new H,il=new Yc,sl=new Yc,rl=new Yc;class ZS extends Gn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),c=So);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),_<1e-4&&(_=M),p<1e-4&&(p=M),il.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,M,p),sl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,M,p),rl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,M,p)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),rl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(il.calc(l),sl.calc(l),rl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function JS(n,e){const t=1-n;return t*t*e}function QS(n,e){return 2*(1-n)*n*e}function eE(n,e){return n*n*e}function _r(n,e,t,i){return JS(n,e)+QS(n,t)+eE(n,i)}function tE(n,e){const t=1-n;return t*t*t*e}function nE(n,e){const t=1-n;return 3*t*t*n*e}function iE(n,e){return 3*(1-n)*n*n*e}function sE(n,e){return n*n*n*e}function vr(n,e,t,i,s){return tE(n,e)+nE(n,t)+iE(n,i)+sE(n,s)}class kd extends Gn{constructor(e=new Re,t=new Re,i=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(e,s.x,r.x,o.x,a.x),vr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rE extends Gn{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(e,s.x,r.x,o.x,a.x),vr(e,s.y,r.y,o.y,a.y),vr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wd extends Gn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oE extends Gn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends Gn{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aE extends Gn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y),_r(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(kh(a,l.x,c.x,h.x,u.x),kh(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var oc=Object.freeze({__proto__:null,ArcCurve:jS,CatmullRomCurve3:ZS,CubicBezierCurve:kd,CubicBezierCurve3:rE,EllipseCurve:qc,LineCurve:Wd,LineCurve3:oE,QuadraticBezierCurve:Xd,QuadraticBezierCurve3:aE,SplineCurve:qd});class lE extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new oc[s.type]().fromJSON(s))}return this}}class ac extends lE{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Wd(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Xd(this.currentPoint.clone(),new Re(e,t),new Re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new kd(this.currentPoint.clone(),new Re(e,t),new Re(i,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new qd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new qc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bt extends Mn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new H,h=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class bi extends Mn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const M=[],p=i/2;let m=0;b(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(d,2));function b(){const E=new H,U=new H;let P=0;const R=(t-e)/i;for(let O=0;O<=r;O++){const ie=[],x=O/r,w=x*(t-e)+e;for(let K=0;K<=s;K++){const k=K/s,J=k*l+a,ae=Math.sin(J),G=Math.cos(J);U.x=w*ae,U.y=-x*i+p,U.z=w*G,u.push(U.x,U.y,U.z),E.set(ae,R,G).normalize(),f.push(E.x,E.y,E.z),d.push(k,1-x),ie.push(_++)}M.push(ie)}for(let O=0;O<s;O++)for(let ie=0;ie<r;ie++){const x=M[ie][O],w=M[ie+1][O],K=M[ie+1][O+1],k=M[ie][O+1];e>0&&(h.push(x,w,k),P+=3),t>0&&(h.push(w,K,k),P+=3)}c.addGroup(m,P,0),m+=P}function y(E){const U=_,P=new Re,R=new H;let O=0;const ie=E===!0?e:t,x=E===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,p*x,0),f.push(0,x,0),d.push(.5,.5),_++;const w=_;for(let K=0;K<=s;K++){const J=K/s*l+a,ae=Math.cos(J),G=Math.sin(J);R.x=ie*G,R.y=p*x,R.z=ie*ae,u.push(R.x,R.y,R.z),f.push(0,x,0),P.x=ae*.5+.5,P.y=G*.5*x+.5,d.push(P.x,P.y),_++}for(let K=0;K<s;K++){const k=U+K,J=w+K;E===!0?h.push(J,J+1,k):h.push(J+1,J,k),O+=3}c.addGroup(m,O,E===!0?1:2),m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ii extends ac{constructor(e){super(e),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ac().fromJSON(s))}return this}}const cE={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Yd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=pE(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let _=t;_<s;_+=t)u=n[_],f=n[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Pr(r,o,t,a,l,d,0),o}};function Yd(n,e,t,i,s){let r,o;if(s===bE(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Wh(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Wh(r,n[r],n[r+1],o);return o&&ua(o,o.next)&&(Ir(o),o=o.next),o}function Zi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ua(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Pr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&xE(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?hE(n,i,s,r):uE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Ir(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=fE(Zi(n),e,t),Pr(n,e,t,i,s,r,2)):o===2&&dE(n,e,t,i,s,r):Pr(Zi(n),e,t,i,s,r,1);break}}}function uE(n){const e=n.prev,t=n,i=n.next;if(Mt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=d&&bs(s,a,r,l,o,c,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function hE(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Mt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,M=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=lc(d,_,e,t,i),b=lc(M,p,e,t,i);let y=n.prevZ,E=n.nextZ;for(;y&&y.z>=m&&E&&E.z<=b;){if(y.x>=d&&y.x<=M&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&bs(a,h,l,u,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=d&&E.x<=M&&E.y>=_&&E.y<=p&&E!==s&&E!==o&&bs(a,h,l,u,c,f,E.x,E.y)&&Mt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=M&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&bs(a,h,l,u,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=b;){if(E.x>=d&&E.x<=M&&E.y>=_&&E.y<=p&&E!==s&&E!==o&&bs(a,h,l,u,c,f,E.x,E.y)&&Mt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function fE(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!ua(s,r)&&$d(s,i,i.next,r)&&Lr(s,r)&&Lr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Ir(i),Ir(i.next),i=n=r),i=i.next}while(i!==n);return Zi(i)}function dE(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&SE(o,a)){let l=Kd(o,a);o=Zi(o,o.next),l=Zi(l,l.next),Pr(o,e,t,i,s,r,0),Pr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function pE(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Yd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(yE(c));for(s.sort(mE),r=0;r<s.length;r++)t=gE(s[r],t);return t}function mE(n,e){return n.x-e.x}function gE(n,e){const t=_E(n,e);if(!t)return e;const i=Kd(t,n);return Zi(i,i.next),Zi(t,t.next)}function _E(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&bs(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Lr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&vE(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function vE(n,e){return Mt(n.prev,n,e.prev)<0&&Mt(e.next,n,n.next)<0}function xE(n,e,t,i){let s=n;do s.z===0&&(s.z=lc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ME(s)}function ME(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function lc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function yE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function bs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function SE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!EE(n,e)&&(Lr(n,e)&&Lr(e,n)&&wE(n,e)&&(Mt(n.prev,n,e.prev)||Mt(n,e.prev,e))||ua(n,e)&&Mt(n.prev,n,n.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ua(n,e){return n.x===e.x&&n.y===e.y}function $d(n,e,t,i){const s=wo(Mt(n,e,t)),r=wo(Mt(n,e,i)),o=wo(Mt(t,i,n)),a=wo(Mt(t,i,e));return!!(s!==r&&o!==a||s===0&&Eo(n,t,e)||r===0&&Eo(n,i,e)||o===0&&Eo(t,n,i)||a===0&&Eo(t,e,i))}function Eo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function wo(n){return n>0?1:n<0?-1:0}function EE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&$d(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Lr(n,e){return Mt(n.prev,n,n.next)<0?Mt(n,e,n.next)>=0&&Mt(n,n.prev,e)>=0:Mt(n,e,n.prev)<0||Mt(n,n.next,e)<0}function wE(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Kd(n,e){const t=new cc(n.i,n.x,n.y),i=new cc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Wh(n,e,t,i){const s=new cc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ir(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function cc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bE(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ds{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ds.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Xh(e),qh(i,e);let o=e.length;t.forEach(Xh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,qh(i,t[l]);const a=cE.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Xh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function qh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Li extends Mn{constructor(e=new ii([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Tt(s,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:TE;let y,E=!1,U,P,R,O;m&&(y=m.getSpacedPoints(h),E=!0,f=!1,U=m.computeFrenetFrames(h,!1),P=new H,R=new H,O=new H),f||(p=0,d=0,_=0,M=0);const ie=a.extractPoints(c);let x=ie.shape;const w=ie.holes;if(!Ds.isClockWise(x)){x=x.reverse();for(let te=0,g=w.length;te<g;te++){const T=w[te];Ds.isClockWise(T)&&(w[te]=T.reverse())}}const k=Ds.triangulateShape(x,w),J=x;for(let te=0,g=w.length;te<g;te++){const T=w[te];x=x.concat(T)}function ae(te,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(g,T)}const G=x.length,Q=k.length;function X(te,g,T){let L,I,D;const Y=te.x-g.x,$=te.y-g.y,S=T.x-te.x,v=T.y-te.y,C=Y*Y+$*$,V=Y*v-$*S;if(Math.abs(V)>Number.EPSILON){const B=Math.sqrt(C),z=Math.sqrt(S*S+v*v),he=g.x-$/B,ce=g.y+Y/B,pe=T.x-v/z,Te=T.y+S/z,fe=((pe-he)*v-(Te-ce)*S)/(Y*v-$*S);L=he+Y*fe-te.x,I=ce+$*fe-te.y;const xe=L*L+I*I;if(xe<=2)return new Re(L,I);D=Math.sqrt(xe/2)}else{let B=!1;Y>Number.EPSILON?S>Number.EPSILON&&(B=!0):Y<-Number.EPSILON?S<-Number.EPSILON&&(B=!0):Math.sign($)===Math.sign(v)&&(B=!0),B?(L=-$,I=Y,D=Math.sqrt(C)):(L=Y,I=$,D=Math.sqrt(C/2))}return new Re(L/D,I/D)}const me=[];for(let te=0,g=J.length,T=g-1,L=te+1;te<g;te++,T++,L++)T===g&&(T=0),L===g&&(L=0),me[te]=X(J[te],J[T],J[L]);const ye=[];let ge,Pe=me.concat();for(let te=0,g=w.length;te<g;te++){const T=w[te];ge=[];for(let L=0,I=T.length,D=I-1,Y=L+1;L<I;L++,D++,Y++)D===I&&(D=0),Y===I&&(Y=0),ge[L]=X(T[L],T[D],T[Y]);ye.push(ge),Pe=Pe.concat(ge)}for(let te=0;te<p;te++){const g=te/p,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+M;for(let I=0,D=J.length;I<D;I++){const Y=ae(J[I],me[I],L);N(Y.x,Y.y,-T)}for(let I=0,D=w.length;I<D;I++){const Y=w[I];ge=ye[I];for(let $=0,S=Y.length;$<S;$++){const v=ae(Y[$],ge[$],L);N(v.x,v.y,-T)}}}const Fe=_+M;for(let te=0;te<G;te++){const g=f?ae(x[te],Pe[te],Fe):x[te];E?(R.copy(U.normals[0]).multiplyScalar(g.x),P.copy(U.binormals[0]).multiplyScalar(g.y),O.copy(y[0]).add(R).add(P),N(O.x,O.y,O.z)):N(g.x,g.y,0)}for(let te=1;te<=h;te++)for(let g=0;g<G;g++){const T=f?ae(x[g],Pe[g],Fe):x[g];E?(R.copy(U.normals[te]).multiplyScalar(T.x),P.copy(U.binormals[te]).multiplyScalar(T.y),O.copy(y[te]).add(R).add(P),N(O.x,O.y,O.z)):N(T.x,T.y,u/h*te)}for(let te=p-1;te>=0;te--){const g=te/p,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+M;for(let I=0,D=J.length;I<D;I++){const Y=ae(J[I],me[I],L);N(Y.x,Y.y,u+T)}for(let I=0,D=w.length;I<D;I++){const Y=w[I];ge=ye[I];for(let $=0,S=Y.length;$<S;$++){const v=ae(Y[$],ge[$],L);E?N(v.x,v.y+y[h-1].y,y[h-1].x+T):N(v.x,v.y,u+T)}}}oe(),de();function oe(){const te=s.length/3;if(f){let g=0,T=G*g;for(let L=0;L<Q;L++){const I=k[L];le(I[2]+T,I[1]+T,I[0]+T)}g=h+p*2,T=G*g;for(let L=0;L<Q;L++){const I=k[L];le(I[0]+T,I[1]+T,I[2]+T)}}else{for(let g=0;g<Q;g++){const T=k[g];le(T[2],T[1],T[0])}for(let g=0;g<Q;g++){const T=k[g];le(T[0]+G*h,T[1]+G*h,T[2]+G*h)}}i.addGroup(te,s.length/3-te,0)}function de(){const te=s.length/3;let g=0;Se(J,g),g+=J.length;for(let T=0,L=w.length;T<L;T++){const I=w[T];Se(I,g),g+=I.length}i.addGroup(te,s.length/3-te,1)}function Se(te,g){let T=te.length;for(;--T>=0;){const L=T;let I=T-1;I<0&&(I=te.length-1);for(let D=0,Y=h+p*2;D<Y;D++){const $=G*D,S=G*(D+1),v=g+L+$,C=g+I+$,V=g+I+S,B=g+L+S;re(v,C,V,B)}}}function N(te,g,T){l.push(te),l.push(g),l.push(T)}function le(te,g,T){ue(te),ue(g),ue(T);const L=s.length/3,I=b.generateTopUV(i,s,L-3,L-2,L-1);Ee(I[0]),Ee(I[1]),Ee(I[2])}function re(te,g,T,L){ue(te),ue(g),ue(L),ue(g),ue(T),ue(L);const I=s.length/3,D=b.generateSideWallUV(i,s,I-6,I-3,I-2,I-1);Ee(D[0]),Ee(D[1]),Ee(D[3]),Ee(D[1]),Ee(D[2]),Ee(D[3])}function ue(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function Ee(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return AE(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new oc[s.type]().fromJSON(s)),new Li(i,e.options)}}const TE={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Re(r,o),new Re(a,l),new Re(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],_=e[s*3+2],M=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Re(o,1-l),new Re(c,1-u),new Re(f,1-_),new Re(M,1-m)]:[new Re(a,1-l),new Re(h,1-u),new Re(d,1-_),new Re(p,1-m)]}};function AE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class We extends Mn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new H,f=new H,d=[],_=[],M=[],p=[];for(let m=0;m<=i;m++){const b=[],y=m/i;let E=0;m===0&&o===0?E=.5/t:m===i&&l===Math.PI&&(E=-.5/t);for(let U=0;U<=t;U++){const P=U/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+y*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),p.push(P+E,1-y),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<t;b++){const y=h[m][b+1],E=h[m][b],U=h[m+1][b],P=h[m+1][b+1];(m!==0||o>0)&&d.push(y,E,P),(m!==i-1||l<Math.PI)&&d.push(E,U,P)}this.setIndex(d),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(M,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new We(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $c extends Mn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new H,u=new H,f=new H;for(let d=0;d<=i;d++)for(let _=0;_<=s;_++){const M=_/s*r,p=d/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(M),u.y=(e+t*Math.cos(p))*Math.sin(M),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=s;_++){const M=(s+1)*d+_-1,p=(s+1)*(d-1)+_-1,m=(s+1)*(d-1)+_,b=(s+1)*d+_;o.push(M,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class RE extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ge extends RE{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const qo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class CE{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const PE=new CE;class Gr{constructor(e){this.manager=e!==void 0?e:PE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class LE extends Error{constructor(e,t){super(e),this.response=t}}class IE extends Gr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=qo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:i,onError:s});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Kn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let M=0;const p=new ReadableStream({start(m){b();function b(){u.read().then(({done:y,value:E})=>{if(y)m.close();else{M+=E.byteLength;const U=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:d});for(let P=0,R=h.length;P<R;P++){const O=h[P];O.onProgress&&O.onProgress(U)}m.enqueue(E),b()}},y=>{m.error(y)})}}});return new Response(p)}else throw new LE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{qo.add(e,c);const h=Kn[e];delete Kn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class DE extends Gr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=qo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Cr("img");function l(){h(),qo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Vr extends Gr{constructor(e){super(e)}load(e,t,i,s){const r=new Jt,o=new DE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Kc extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ol=new _t,Yh=new H,$h=new H;class jd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kh=new _t,sr=new H,al=new H;class UE extends jd{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(sr),al.copy(i.position),al.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(al),i.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh)}}class kr extends Kc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new UE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class NE extends jd{constructor(){super(new Fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wr extends Kc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new NE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xr extends Kc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class OE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jh(){return performance.now()}class FE{constructor(){this.type="ShapePath",this.color=new et,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ac,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const b=[];for(let y=0,E=m.length;y<E;y++){const U=m[y],P=new ii;P.curves=U.curves,b.push(P)}return b}function i(m,b){const y=b.length;let E=!1;for(let U=y-1,P=0;P<y;U=P++){let R=b[U],O=b[P],ie=O.x-R.x,x=O.y-R.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(R=b[P],ie=-ie,O=b[U],x=-x),m.y<R.y||m.y>O.y)continue;if(m.y===R.y){if(m.x===R.x)return!0}else{const w=x*(m.x-R.x)-ie*(m.y-R.y);if(w===0)return!0;if(w<0)continue;E=!E}}else{if(m.y!==R.y)continue;if(O.x<=m.x&&m.x<=R.x||R.x<=m.x&&m.x<=O.x)return!0}}return E}const s=Ds.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new ii,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],_=0,M;f[_]=void 0,d[_]=[];for(let m=0,b=r.length;m<b;m++)a=r[m],M=a.getPoints(),o=s(M),o=e?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new ii,p:M},f[_].s.curves=a.curves,h&&_++,d[_]=[]):d[_].push({h:a,p:M[0]});if(!f[0])return t(r);if(f.length>1){let m=!1,b=0;for(let y=0,E=f.length;y<E;y++)u[y]=[];for(let y=0,E=f.length;y<E;y++){const U=d[y];for(let P=0;P<U.length;P++){const R=U[P];let O=!0;for(let ie=0;ie<f.length;ie++)i(R.p,f[ie].p)&&(y!==ie&&b++,O?(O=!1,u[ie].push(R)):m=!0);O&&u[y].push(R)}}b>0&&m===!1&&(d=u)}let p;for(let m=0,b=f.length;m<b;m++){l=f[m].s,c.push(l),p=d[m];for(let y=0,E=p.length;y<E;y++)l.holes.push(p[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);class qr extends Gr{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new IE(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},i,s)}parse(e){return new BE(e)}}class BE{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=zE(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function zE(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=HE(h,s,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function HE(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new FE;let a,l,c,h,u,f,d,_;if(r.o){const M=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=M.length;p<m;)switch(M[p++]){case"m":a=M[p++]*e+t,l=M[p++]*e+i,o.moveTo(a,l);break;case"l":a=M[p++]*e+t,l=M[p++]*e+i,o.lineTo(a,l);break;case"q":c=M[p++]*e+t,h=M[p++]*e+i,u=M[p++]*e+t,f=M[p++]*e+i,o.quadraticCurveTo(u,f,c,h);break;case"b":c=M[p++]*e+t,h=M[p++]*e+i,u=M[p++]*e+t,f=M[p++]*e+i,d=M[p++]*e+t,_=M[p++]*e+i,o.bezierCurveTo(u,f,d,_,c,h);break}}return{offsetX:r.ha*e,path:o}}class Zt extends Li{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const s=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const GE=Ci({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=mt(null);let i=null,s=mt(!1),r=mt(!1),o=mt(!1);return Qi(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new Hr,c=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3),h=new zr({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new ct,f=new Xr(16777215,2);l.add(f);const d=new Wr(16777215,4);d.position.set(5,5,5),l.add(d);const _=new kr(16777215,5,50);_.position.set(0,2,4),l.add(_);const M=new Vr,p=M.load("/3d-bear-arts/assets/lv2.jpg"),m=M.load("/3d-bear-arts/assets/lv2.jpg");p.wrapS=p.wrapT=hn,m.wrapS=m.wrapT=hn;const b=new Ge({color:8343336,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),y=new Ge({color:5978654,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),E=new Ge({color:13152668,metalness:.2,roughness:.05,bumpMap:p,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:xt});new Ge({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const U=new We(1,32,32,0,Math.PI),P=new j(U,E),R=new j(U,b);P.scale.set(.85,.85,.8),R.scale.set(.85,.85,.8),P.position.y=-.2,R.position.y=-.2,P.rotation.y=Math.PI/2,R.rotation.y=Math.PI*1.5;const O=new Bt(1,32),ie=new j(O,b);ie.scale.set(.85,.85,.8),ie.position.set(0,-.2,0),ie.rotation.y=Math.PI/2;const x=new ct;x.add(P),x.add(R),x.add(ie),u.add(x);const w=new We(.6,32,32,0,Math.PI),K=new j(w,b);K.scale.set(1,.95,.95),K.position.set(0,1,0),K.rotation.y=Math.PI*1.5;const k=new j(w,E);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI/2;const J=new Bt(.6,32),ae=new j(J,b);ae.position.set(0,1,0),ae.rotation.y=Math.PI/2,ae.scale.set(1,.95,.95);const G=new ct;G.add(K),G.add(k),G.add(ae),u.add(G);const Q=new We(.25,32,32),X=new j(Q,b);X.position.set(-.45,1.35,-.1),u.add(X);const me=new j(Q,E);me.position.set(.45,1.35,-.1),u.add(me);const ye=new We(.25,32,32,Math.PI/2,Math.PI),ge=new j(ye,y);ge.scale.set(1.1,.6,.8),ge.position.set(0,.84,.5),ge.rotation.y=Math.PI;const Pe=new We(.25,32,32,Math.PI/2,Math.PI),Fe=new j(Pe,E);Fe.scale.set(1.1,.6,.8),Fe.position.set(0,.84,.5),Fe.rotation.y=0;const oe=new Bt(.25,32),de=new j(oe,b);de.scale.set(.8,.6,.8),de.position.set(0,.84,.5),de.rotation.y=Math.PI/2;const Se=new ct;Se.add(ge),Se.add(Fe),Se.add(de),u.add(Se);const N=new ii;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const le={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ge({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const re=new Li(N,le),ue=new j(re,b);ue.scale.set(.1,.1,.1),ue.rotation.z=vt.degToRad(210),ue.rotation.x=vt.degToRad(5),ue.rotation.y=vt.degToRad(-45),ue.position.set(-.4,.9,.45);const Ee=new j(re,y);Ee.scale.set(.6,.5,.5),Ee.position.set(.35,0,0),Ee.rotation.y=Math.PI,Ee.rotation.x=Math.PI;const te=new j(re,y);te.scale.set(.2,.2,.2),te.position.set(.5,-.1,.2),te.rotation.y=Math.PI,te.rotation.x=Math.PI,u.add(te);const g=new ts(1.3,1.2,.6),T=new j(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new $c(.15,.025,10,100);new Ge({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const I=new j(L,b);I.position.set(.35,.1,.1),I.rotation.z=Math.PI/2,I.rotation.x=Math.PI/8,I.rotation.y=Math.PI/14;const D=new j(L,b);D.position.set(.35,.1,.13),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/-8,D.rotation.y=Math.PI/12;const Y=new ct;Y.add(T),Y.add(I),Y.add(D),u.add(Y);const $=new We(.35,32,32),S=new j($,b);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),u.add(S);const v=new j($,E);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new bi(.2,.22,.6,32),V=new j(C,b);V.position.set(-.4,-1.05,0),u.add(V);const B=new j(C,E);B.position.set(.4,-1.05,0),u.add(B);const z=new We(.3,32,32),he=new j(z,b);he.scale.set(1,.72,1.5),he.position.set(-.4,-1.45,.17),u.add(he);const ce=new j(z,E);ce.scale.set(1,.72,1.5),ce.position.set(.4,-1.45,.17),u.add(ce);const pe=new We(.44,32,32),Te=new j(pe,b);Te.position.set(-.15,-.45,-.4),u.add(Te);const fe=new j(pe,E);fe.position.set(.15,-.45,-.4),u.add(fe);const xe=new We(.18,32,32),Ce=new j(xe,b);Ce.position.set(0,-.35,-.8),u.add(Ce),new qr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Z){const _e=new Zt("X",{font:Z,size:.2,depth:.05});new xn({color:0});const Me=new j(_e,y);Me.position.set(-.3,.99,.53),Me.rotation.x=vt.degToRad(-5),Me.rotation.y=vt.degToRad(-15),u.add(Me);const Ne=new Zt("O",{font:Z,size:.2,depth:.05});new xn({color:0});const Ke=new j(Ne,y);Ke.position.set(.14,.99,.53),Ke.rotation.y=vt.degToRad(12),Ke.rotation.x=vt.degToRad(-5),u.add(Ke)}),Ce.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const be=()=>{u.rotation.y,u.rotation.x},Ve=()=>{s.value=!0,r.value=!1,o.value=!1},De=()=>{s.value=!1,r.value=!0,o.value=!1},Be=()=>{s.value=!1,r.value=!1,be()},F=Z=>{const _e=window.innerWidth/2;Z>_e?Ve():De(),be()},ve=Z=>{clearTimeout(i),Be(),o.value=!0;const _e={x:Z.clientX/window.innerWidth*2-1,y:-(Z.clientY/window.innerHeight)*2+1};if(o.value){const Me=_e.x*Math.PI*.2,Ne=_e.y*Math.PI*.2;u.rotation.y=Me,u.rotation.x=Ne}i=setTimeout(()=>{o.value=!1,F(Z.clientX)},500)};window.addEventListener("mousemove",ve);const ne=Z=>{if(o.value){const _e={x:Z.clientX/window.innerWidth*2-1,y:-(Z.clientY/window.innerHeight)*2+1},Me=_e.x*Math.PI*.2,Ne=_e.y*Math.PI*.2;u.rotation.y=Me,u.rotation.x=Ne}};window.addEventListener("mousemove",ne),a(),Qt(()=>e.bodyPosition,Z=>{u.position.set(Z.x,Z.y,Z.z)}),Qt(()=>e.cameraPosition,Z=>{c.position.set(e.bodyPosition.x,1,Z),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Ws(),Xs("div",{ref_key:"threeCanvas",ref:t,class:Ti(n.background?"no-bg":"three-canvas")},null,2))}}),VE=qs(GE,[["__scopeId","data-v-f3beb116"]]),kE=Ci({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=mt(null);let i=null,s=mt(!1),r=mt(!1),o=mt(!1);return Qi(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new Hr,c=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3),h=new zr({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new ct,f=new Xr(16777215,2);l.add(f);const d=new Wr(16777215,4);d.position.set(5,5,5),l.add(d);const _=new kr(16777215,5,50);_.position.set(0,2,4),l.add(_);const M=new Vr,p=M.load("/3d-bear-arts/assets/pop6.jpg"),m=M.load("/3d-bear-arts/assets/pop7.jpg");p.wrapS=p.wrapT=hn,m.wrapS=m.wrapT=hn;const b=new Ge({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),y=new Ge({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt}),E=new Ge({color:16766720,map:p,metalness:.3,roughness:.5}),U=new Ge({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt}),P=new Ge({color:9055202,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ge({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt});const R=new Ge({color:65535,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),O=new Ge({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt}),ie=new We(1,32,32,0,Math.PI),x=new j(ie,y),w=new j(ie,b);x.scale.set(.85,.85,.8),w.scale.set(.85,.85,.8),x.position.y=-.2,w.position.y=-.2,x.rotation.y=Math.PI/2,w.rotation.y=Math.PI*1.5;const K=new Bt(1,32),k=new j(K,b);k.scale.set(.85,.85,.8),k.position.set(0,-.2,0),k.rotation.y=Math.PI/2;const J=new ct;J.add(x),J.add(w),J.add(k),u.add(J);const ae=new We(.6,32,32,0,Math.PI),G=new j(ae,E);G.scale.set(1,.95,.95),G.position.set(0,1,0),G.rotation.y=Math.PI*1.5;const Q=new j(ae,U);Q.scale.set(1,.95,.95),Q.position.set(0,1,0),Q.rotation.y=Math.PI/2;const X=new Bt(.6,32),me=new j(X,E);me.position.set(0,1,0),me.rotation.y=Math.PI/2,me.scale.set(1,.95,.95);const ye=new ct;ye.add(G),ye.add(Q),ye.add(me),u.add(ye);const ge=new We(.25,32,32),Pe=new j(ge,b);Pe.position.set(-.45,1.35,-.1),u.add(Pe);const Fe=new j(ge,y);Fe.position.set(.45,1.35,-.1),u.add(Fe);const oe=new We(.25,32,32,Math.PI/2,Math.PI),de=new j(oe,E);de.scale.set(1.1,.6,.8),de.position.set(0,.84,.5),de.rotation.y=Math.PI;const Se=new We(.25,32,32,Math.PI/2,Math.PI),N=new j(Se,U);N.scale.set(1.1,.6,.8),N.position.set(0,.84,.5),N.rotation.y=0;const le=new Bt(.25,32),re=new j(le,E);re.scale.set(.8,.6,.8),re.position.set(0,.84,.5),re.rotation.y=Math.PI/2;const ue=new ct;ue.add(de),ue.add(N),ue.add(re),u.add(ue);const Ee=new ii;Ee.moveTo(0,0),Ee.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Ee.bezierCurveTo(-.6,.3,0,.6,0,1),Ee.bezierCurveTo(0,.6,.6,.3,.6,0),Ee.bezierCurveTo(.6,-.3,0,-.3,0,0);const te={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Li(Ee,te),T=new j(g,E);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new j(g,R);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const I=new j(g,b);I.scale.set(.25,.25,.27),I.position.set(.4,.3,-.2),I.rotation.y=Math.PI,I.rotation.x=Math.PI,u.add(I);const D=new We(.35,32,32),Y=new j(D,R);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),u.add(Y);const $=new j(D,O);$.scale.set(.75,1.25,.65),$.position.set(.7,-.15,.2),u.add($);const S=new bi(.2,.22,.6,32),v=new j(S,E);v.position.set(-.4,-1.05,0),u.add(v);const C=new j(S,U);C.position.set(.4,-1.05,0),u.add(C);const V=new We(.3,32,32),B=new j(V,E);B.scale.set(1,.72,1.5),B.position.set(-.4,-1.45,.17),u.add(B);const z=new j(V,U);z.scale.set(1,.72,1.5),z.position.set(.4,-1.45,.17),u.add(z);const he=new We(.44,32,32),ce=new j(he,b);ce.position.set(-.15,-.45,-.4),u.add(ce);const pe=new j(he,y);pe.position.set(.15,-.45,-.4),u.add(pe);const Te=new We(.18,32,32),fe=new j(Te,b);fe.position.set(0,-.35,-.8),u.add(fe),new qr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ve){const ne=new Zt("X",{font:ve,size:.2,depth:.05});new xn({color:0});const Z=new j(ne,b);Z.position.set(-.3,.99,.53),Z.rotation.x=vt.degToRad(-5),Z.rotation.y=vt.degToRad(-15),u.add(Z);const _e=new Zt("O",{font:ve,size:.2,depth:.05});new xn({color:0});const Me=new j(_e,R);Me.position.set(.14,.99,.53),Me.rotation.y=vt.degToRad(12),Me.rotation.x=vt.degToRad(-5),u.add(Me);const Ne=new Zt("POP",{font:ve,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Ke=new Ge({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ge({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const tt=new Ge({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Xe=new Ge({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),Je=new j(Ne,Ke);Je.scale.set(.15,.15,.15),Je.position.set(.03,1.16,.1),Je.rotateZ(-25),u.add(Je);const Qe=new j(Ne,P);Qe.scale.set(.14,.14,.14),Qe.rotateZ(45),Qe.position.set(.2,-.7,.3),u.add(Qe);const yt=new j(Ne,tt);yt.scale.set(.14,.14,.14),yt.rotateZ(45),yt.rotateY(45),yt.position.set(.3,.7,.3),u.add(yt);const wt=new j(Ne,tt);wt.scale.set(.15,.15,.15),wt.rotateZ(45),wt.rotateY(45),wt.position.set(.35,-1.5,.3),u.add(wt);const St=new j(Ne,Xe);St.scale.set(.17,.17,.17),St.rotateZ(45),St.rotateY(15),St.position.set(.35,1,.3),u.add(St)}),fe.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const Ce=()=>{u.rotation.y,u.rotation.x},Le=()=>{s.value=!0,r.value=!1,o.value=!1},be=()=>{s.value=!1,r.value=!0,o.value=!1},Ve=()=>{s.value=!1,r.value=!1,Ce()},De=ve=>{const ne=window.innerWidth/2;ve>ne?Le():be(),Ce()},Be=ve=>{clearTimeout(i),Ve(),o.value=!0;const ne={x:ve.clientX/window.innerWidth*2-1,y:-(ve.clientY/window.innerHeight)*2+1};if(o.value){const Z=ne.x*Math.PI*.2,_e=ne.y*Math.PI*.2;u.rotation.y=Z,u.rotation.x=_e}i=setTimeout(()=>{o.value=!1,De(ve.clientX)},500)};window.addEventListener("mousemove",Be);const F=ve=>{if(o.value){const ne={x:ve.clientX/window.innerWidth*2-1,y:-(ve.clientY/window.innerHeight)*2+1},Z=ne.x*Math.PI*.2,_e=ne.y*Math.PI*.2;u.rotation.y=Z,u.rotation.x=_e}};window.addEventListener("mousemove",F),a(),Qt(()=>e.bodyPosition,ve=>{u.position.set(ve.x,ve.y,ve.z)}),Qt(()=>e.cameraPosition,ve=>{c.position.set(e.bodyPosition.x,1,ve),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Ws(),Xs("div",{ref_key:"threeCanvas",ref:t,class:Ti(n.background?"no-bg":"three-canvas")},null,2))}}),WE=qs(kE,[["__scopeId","data-v-8cfea564"]]),XE={class:"pixel-controls"},qE={class:"side-buttons"},YE=Ci({__name:"PopBear2",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=mt(null);let i=mt(!1),s=mt(!1),r=mt(!1),o=mt(!1);Qi(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),M.render(d,_)};const d=new Hr,_=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3),M=new zr({antialias:!0,alpha:!0});M.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(M.domElement);const p=new ct,m=new Xr(16777215,2);d.add(m);const b=new Wr(16777215,4);b.position.set(5,5,5),d.add(b);const y=new kr(16777215,5,50);y.position.set(0,2,4),d.add(y);const E=new Vr,U=E.load("/3d-bear-arts/assets/popbear.jpg"),P=E.load("/3d-bear-arts/assets/popbear.jpg");U.wrapS=U.wrapT=hn,P.wrapS=P.wrapT=hn,P.repeat.set(2,2);const R=new Ge({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),O=new Ge({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt}),ie=new Ge({color:16766720,map:U,metalness:.3,roughness:.5}),x=new Ge({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt}),w=new Ge({color:9055202,map:U,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ge({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt});const K=new Ge({color:65535,map:U,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Ge({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt}),J=new We(1,32,32,0,Math.PI),ae=new j(J,O),G=new j(J,R);ae.scale.set(.85,.85,.8),G.scale.set(.85,.85,.8),ae.position.y=-.2,G.position.y=-.2,ae.rotation.y=Math.PI/2,G.rotation.y=Math.PI*1.5;const Q=new Bt(1,32),X=new j(Q,R);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const me=new ct;me.add(ae),me.add(G),me.add(X),p.add(me);const ye=new We(.6,32,32,0,Math.PI),ge=new j(ye,ie);ge.scale.set(1,.95,.95),ge.position.set(0,1,0),ge.rotation.y=Math.PI*1.5;const Pe=new j(ye,x);Pe.scale.set(1,.95,.95),Pe.position.set(0,1,0),Pe.rotation.y=Math.PI/2;const Fe=new Bt(.6,32),oe=new j(Fe,ie);oe.position.set(0,1,0),oe.rotation.y=Math.PI/2,oe.scale.set(1,.95,.95);const de=new ct;de.add(ge),de.add(Pe),de.add(oe),p.add(de);const Se=new We(.25,32,32),N=new j(Se,R);N.position.set(-.45,1.35,-.1),p.add(N);const le=new j(Se,O);le.position.set(.45,1.35,-.1),p.add(le);const re=new We(.25,32,32,Math.PI/2,Math.PI),ue=new j(re,ie);ue.scale.set(1.1,.6,.8),ue.position.set(0,.84,.5),ue.rotation.y=Math.PI;const Ee=new We(.25,32,32,Math.PI/2,Math.PI),te=new j(Ee,x);te.scale.set(1.1,.6,.8),te.position.set(0,.84,.5),te.rotation.y=0;const g=new Bt(.25,32),T=new j(g,ie);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new ct;L.add(ue),L.add(te),L.add(T),p.add(L);const I=new ii;I.moveTo(0,0),I.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),I.bezierCurveTo(-.6,.3,0,.6,0,1),I.bezierCurveTo(0,.6,.6,.3,.6,0),I.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Y=new Li(I,D),$=new j(Y,ie);$.scale.set(.5,.5,.5),$.position.set(.35,0,0),$.rotation.y=Math.PI,$.rotation.x=Math.PI,p.add($);const S=new j(Y,K);S.scale.set(.2,.2,.25),S.position.set(.5,-.3,.4),S.rotation.y=Math.PI,S.rotation.x=Math.PI,p.add(S);const v=new j(Y,R);v.scale.set(.25,.25,.27),v.position.set(.4,.3,-.2),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new We(.35,32,32),V=new j(C,K);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),p.add(V);const B=new j(C,k);B.scale.set(.75,1.25,.65),B.position.set(.7,-.15,.2),p.add(B);const z=new bi(.2,.22,.6,32),he=new j(z,ie);he.position.set(-.4,-1.05,0),p.add(he);const ce=new j(z,x);ce.position.set(.4,-1.05,0),p.add(ce);const pe=new We(.3,32,32),Te=new j(pe,ie);Te.scale.set(1,.72,1.5),Te.position.set(-.4,-1.45,.17),p.add(Te);const fe=new j(pe,x);fe.scale.set(1,.72,1.5),fe.position.set(.4,-1.45,.17),p.add(fe);const xe=new We(.44,32,32),Ce=new j(xe,R);Ce.position.set(-.15,-.45,-.4),p.add(Ce);const Le=new j(xe,O);Le.position.set(.15,-.45,-.4),p.add(Le);const be=new We(.18,32,32),Ve=new j(be,R);Ve.position.set(0,-.35,-.8),p.add(Ve),new qr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Be){const F=new Zt("X",{font:Be,size:.2,depth:.05});new xn({color:0});const ve=new j(F,R);ve.position.set(-.3,.99,.53),ve.rotation.x=vt.degToRad(-5),ve.rotation.y=vt.degToRad(-15),p.add(ve);const ne=new Zt("O",{font:Be,size:.2,depth:.05});new xn({color:0});const Z=new j(ne,K);Z.position.set(.14,.99,.53),Z.rotation.y=vt.degToRad(12),Z.rotation.x=vt.degToRad(-5),p.add(Z);const _e=new Zt("POP",{font:Be,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Me=new Ge({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ge({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Ne=new Ge({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Ke=new Ge({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),tt=new j(_e,Me);tt.scale.set(.15,.15,.15),tt.position.set(.03,1.16,.1),tt.rotateZ(-25),p.add(tt);const Xe=new j(_e,w);Xe.scale.set(.14,.14,.14),Xe.rotateZ(45),Xe.position.set(.2,-.7,.3),p.add(Xe);const Je=new j(_e,Ne);Je.scale.set(.14,.14,.14),Je.rotateZ(45),Je.rotateY(45),Je.position.set(.3,.7,.3),p.add(Je);const Qe=new j(_e,Ne);Qe.scale.set(.15,.15,.15),Qe.rotateZ(45),Qe.rotateY(45),Qe.position.set(.35,-1.5,.3),p.add(Qe);const yt=new j(_e,Ke);yt.scale.set(.17,.17,.17),yt.rotateZ(45),yt.rotateY(15),yt.position.set(.35,1,.3),p.add(yt)}),Ve.renderOrder=1,p.scale.set(1.4,1.4,1.4),d.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,f(),Qt(()=>e.bodyPosition,Be=>{p.position.set(Be.x,Be.y,Be.z)}),Qt(()=>e.cameraPosition,Be=>{_.position.set(e.bodyPosition.x,1,Be),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),M.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,d)=>(Ws(),Xs(gn,null,[gt("div",{ref_key:"threeCanvas",ref:t,class:Ti(n.background?"no-bg":"three-canvas")},null,2),gt("div",XE,[gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),gt("div",qE,[gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),$E=qs(YE,[["__scopeId","data-v-67caa51b"]]),KE={class:"pixel-controls"},jE={class:"side-buttons"},ZE=Ci({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=mt(null);let i=mt(!1),s=mt(!1),r=mt(!1),o=mt(!1);Qi(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03);const Z=ve.getElapsedTime();F.forEach((_e,Me)=>{const Ne=.2+Math.sin(Z*3+ne[Me])*.1;_e.scale.set(Ne,Ne,Ne)}),M.render(d,_)};const d=new Hr,_=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3),M=new zr({antialias:!0,alpha:!0});M.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(M.domElement);const p=new ct,m=new ct;d.add(m);const b=new Xr(16777215,2);d.add(b);const y=new Wr(16777215,4);y.position.set(5,5,5),d.add(y);const E=new kr(16777215,5,50);E.position.set(0,2,4),d.add(E);const U=new Vr,P=U.load("/3d-bear-arts/assets/pop6.jpg"),R=U.load("/3d-bear-arts/assets/pop7.jpg");P.wrapS=P.wrapT=hn,R.wrapS=R.wrapT=hn,R.repeat.set(2,2);const O=new Ge({color:16738740,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),ie=new Ge({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt}),x=new Ge({color:16766720,map:P,metalness:.3,roughness:.5}),w=new Ge({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt}),K=new Ge({color:9055202,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ge({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt});const k=new Ge({color:65535,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Ge({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xt}),ae=new We(1,32,32,0,Math.PI),G=new j(ae,ie),Q=new j(ae,O);G.scale.set(.85,.85,.8),Q.scale.set(.85,.85,.8),G.position.y=-.2,Q.position.y=-.2,G.rotation.y=Math.PI/2,Q.rotation.y=Math.PI*1.5;const X=new Bt(1,32),me=new j(X,O);me.scale.set(.85,.85,.8),me.position.set(0,-.2,0),me.rotation.y=Math.PI/2;const ye=new ct;ye.add(G),ye.add(Q),ye.add(me),p.add(ye);const ge=new We(.6,32,32,0,Math.PI),Pe=new j(ge,x);Pe.scale.set(1,.95,.95),Pe.position.set(0,1,0),Pe.rotation.y=Math.PI*1.5;const Fe=new j(ge,w);Fe.scale.set(1,.95,.95),Fe.position.set(0,1,0),Fe.rotation.y=Math.PI/2;const oe=new Bt(.6,32),de=new j(oe,x);de.position.set(0,1,0),de.rotation.y=Math.PI/2,de.scale.set(1,.95,.95);const Se=new ct;Se.add(Pe),Se.add(Fe),Se.add(de),p.add(Se);const N=new We(.25,32,32),le=new j(N,O);le.position.set(-.45,1.35,-.1),p.add(le);const re=new j(N,ie);re.position.set(.45,1.35,-.1),p.add(re);const ue=new We(.25,32,32,Math.PI/2,Math.PI),Ee=new j(ue,x);Ee.scale.set(1.1,.6,.8),Ee.position.set(0,.84,.5),Ee.rotation.y=Math.PI;const te=new We(.25,32,32,Math.PI/2,Math.PI),g=new j(te,w);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Bt(.25,32),L=new j(T,x);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const I=new ct;I.add(Ee),I.add(g),I.add(L),p.add(I);const D=new ii;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},$=new Li(D,Y),S=new j($,x);S.scale.set(.5,.5,.5),S.position.set(.3,0,0),S.rotation.y=Math.PI,S.rotation.x=Math.PI,p.add(S);const v=new j($,k);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new j($,O);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,p.add(C);const V=new We(.35,32,32),B=new j(V,k);B.scale.set(.75,1.25,.65),B.position.set(-.7,-.15,.2),p.add(B);const z=new j(V,J);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),p.add(z);const he=new bi(.2,.22,.6,32),ce=new j(he,x);ce.position.set(-.4,-1.05,0),p.add(ce);const pe=new j(he,w);pe.position.set(.4,-1.05,0),p.add(pe);const Te=new We(.3,32,32),fe=new j(Te,x);fe.scale.set(1,.72,1.5),fe.position.set(-.4,-1.45,.17),p.add(fe);const xe=new j(Te,w);xe.scale.set(1,.72,1.5),xe.position.set(.4,-1.45,.17),p.add(xe);const Ce=new We(.44,32,32),Le=new j(Ce,O);Le.position.set(-.15,-.45,-.4),p.add(Le);const be=new j(Ce,ie);be.position.set(.15,-.45,-.4),p.add(be);const Ve=new We(.18,32,32),De=new j(Ve,O);De.position.set(0,-.35,-.8),p.add(De),new qr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Z){const _e=new Zt("X",{font:Z,size:.2,depth:.05});new xn({color:0});const Me=new j(_e,O);Me.position.set(-.3,.99,.53),Me.rotation.x=vt.degToRad(-5),Me.rotation.y=vt.degToRad(-15),p.add(Me);const Ne=new Zt("O",{font:Z,size:.2,depth:.05});new xn({color:0});const Ke=new j(Ne,k);Ke.position.set(.14,.99,.53),Ke.rotation.y=vt.degToRad(12),Ke.rotation.x=vt.degToRad(-5),p.add(Ke);const tt=new Zt("POP",{font:Z,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Zt("🐻",{font:Z,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Xe=new Zt("BAO      BEAR",{font:Z,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),Je=new Ge({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ge({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Qe=new Ge({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),yt=new Ge({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),wt=new j(tt,Je);wt.scale.set(.15,.15,.15),wt.position.set(.02,1.16,.1),wt.rotateZ(-25),p.add(wt);const St=new j(tt,K);St.scale.set(.14,.14,.14),St.rotateZ(45),St.position.set(.2,-.7,.3),p.add(St);const Ut=new j(tt,Qe);Ut.scale.set(.14,.14,.14),Ut.rotateZ(45),Ut.rotateY(45),Ut.position.set(.3,.7,.3),p.add(Ut);const tn=new j(tt,Qe);tn.scale.set(.15,.15,.15),tn.rotateZ(45),tn.rotateY(45),tn.position.set(.35,-1.5,.3),p.add(tn);const fn=new j(tt,yt);fn.scale.set(.17,.17,.17),fn.rotateZ(45),fn.rotateY(15),fn.position.set(.35,1,.3),p.add(fn);const dn=new j(Xe,Je);dn.scale.set(.7,.7,.7),dn.position.set(-6,0,-3),m.add(dn)}),De.renderOrder=1,p.scale.set(1.4,1.4,1.4),d.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,p.rotation.x=.1;const F=[S,v,C],ve=new OE,ne=[0,Math.PI/2,Math.PI,0,Math.PI/3];f(),Qt(()=>e.bodyPosition,Z=>{p.position.set(Z.x,Z.y,Z.z)}),Qt(()=>e.cameraPosition,Z=>{_.position.set(e.bodyPosition.x,1,Z),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),M.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,d)=>(Ws(),Xs(gn,null,[gt("div",{ref_key:"threeCanvas",ref:t,class:Ti(n.background?"no-bg":"three-canvas")},null,2),gt("div",KE,[gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),gt("div",jE,[gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),JE=qs(ZE,[["__scopeId","data-v-48c1be4c"]]),QE={class:"pixel-controls"},ew={class:"side-buttons"},tw=Ci({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=mt(null);let i=mt(!1),s=mt(!1),r=mt(!1),o=mt(!1);Qi(()=>{if(t.value){let f=function(Qe,yt){const wt=new bi(Be,Be,F,32);wt.rotateX(Math.PI/2);const St=new j(wt,Qe),Ut=new ct;for(let fn=0;fn<ve;fn++){const dn=fn/ve*Math.PI*2,Yr=new ts(ne,Z,_e),oi=new j(Yr,Qe);oi.position.set((Be+_e/2)*Math.cos(dn),(Be+_e/2)*Math.sin(dn),0),oi.rotation.z=dn,Ut.add(oi)}const tn=new ct;return tn.add(St),tn.add(Ut),tn.position.set(yt.x,yt.y,yt.z),tn},d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),Me.rotation.z-=.02,Ne.rotation.z+=.03,Ke.rotation.z-=.02,tt.rotation.z+=.02,Xe.rotation.z-=.03,Je.rotation.y+=.04,p.render(_,M)};const _=new Hr,M=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3),p=new zr({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(p.domElement);const m=new ct,b=new ct;_.add(b);const y=new Xr(16777215,2);_.add(y);const E=new Wr(16777215,4);E.position.set(5,5,5),_.add(E);const U=new kr(16777215,5,50);U.position.set(0,2,4),_.add(U);const P=new Vr,R=P.load("/3d-bear-arts/assets/metal.jpg"),O=P.load("/3d-bear-arts/assets/pop7.jpg"),ie=P.load("/3d-bear-arts/assets/gear.jpg");R.wrapS=R.wrapT=hn,O.wrapS=O.wrapT=hn,O.repeat.set(2,2);const x=new Ge({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:R});ie.mapping=Go;const w=new Ge({color:"#d3d3d3",metalness:1,roughness:.25,map:R,envMap:ie,clearcoat:.7,clearcoatRoughness:.3}),K=new Ge({color:"#D32F2F",metalness:1,roughness:.25,envMap:ie,clearcoat:.7,clearcoatRoughness:.3}),k=new Ge({color:"#C0C0C0",metalness:1,roughness:.25,map:R,envMap:ie,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),J=new Ge({color:"#C0C0C0",metalness:1,roughness:.5,map:R,envMap:ie,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),ae=new Ge({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:xt});new Ge({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const G=new Ge({color:"#d3d3d3",metalness:1,roughness:.2,map:ie,envMap:ie,clearcoat:.7,clearcoatRoughness:.3});new Ge({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:ie}),new Ge({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:R,transparent:!0,opacity:.3});const Q=new We(1,32,32,0,Math.PI),X=new j(Q,J),me=new j(Q,w);X.scale.set(.85,.85,.8),me.scale.set(.85,.85,.8),X.position.y=-.2,me.position.y=-.2,X.rotation.y=Math.PI/2,me.rotation.y=Math.PI*1.5;const ye=new Bt(1,32),ge=new j(ye,k);ge.scale.set(.85,.85,.8),ge.position.set(0,-.2,0),ge.rotation.y=Math.PI/2;const Pe=new ct;Pe.add(X),Pe.add(me),Pe.add(ge),m.add(Pe);const Fe=new We(.6,32,32,0,Math.PI),oe=new j(Fe,w);oe.scale.set(1,.95,.95),oe.position.set(0,1,0),oe.rotation.y=Math.PI*1.5;const de=new j(Fe,J);de.scale.set(1,.95,.95),de.position.set(0,1,0),de.rotation.y=Math.PI/2;const Se=new Bt(.6,32),N=new j(Se,k);N.position.set(0,1,0),N.rotation.y=Math.PI/2,N.scale.set(1,.95,.95);const le=new ct;le.add(oe),le.add(de),le.add(N),m.add(le);const re=new We(.25,32,32),ue=new j(re,w);ue.position.set(-.45,1.35,-.1),m.add(ue);const Ee=new j(re,k);Ee.position.set(.45,1.35,-.1),m.add(Ee);const te=new We(.25,32,32,Math.PI/2,Math.PI),g=new j(te,w);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new We(.25,32,32,Math.PI/2,Math.PI),L=new j(T,k);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const I=new Bt(.25,32),D=new j(I,ae);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const Y=new ct;Y.add(g),Y.add(L),Y.add(D),m.add(Y);const $=new ii;$.moveTo(0,0),$.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),$.bezierCurveTo(-.6,.3,0,.6,0,1),$.bezierCurveTo(0,.6,.6,.3,.6,0),$.bezierCurveTo(.6,-.3,0,-.3,0,0);const S={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Li($,S),C=new We(.35,32,32),V=new j(C,w);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),m.add(V);const B=new j(C,k);B.scale.set(.75,1.25,.65),B.position.set(.7,-.15,.2),m.add(B);const z=new bi(.2,.22,.6,32),he=new j(z,w);he.position.set(-.4,-1.05,0),m.add(he);const ce=new j(z,k);ce.position.set(.4,-1.05,0),m.add(ce);const pe=new We(.3,32,32),Te=new j(pe,w);Te.scale.set(1,.72,1.5),Te.position.set(-.4,-1.45,.17),m.add(Te);const fe=new j(pe,k);fe.scale.set(1,.72,1.5),fe.position.set(.4,-1.45,.17),m.add(fe);const xe=new We(.44,32,32),Ce=new j(xe,w);Ce.position.set(-.15,-.45,-.4),m.add(Ce);const Le=new j(xe,J);Le.position.set(.15,-.45,-.4),m.add(Le);const be=new We(.18,32,32),Ve=new j(be,w);Ve.position.set(0,-.35,-.8),m.add(Ve),new qr().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Qe){const yt=new Zt("X",{font:Qe,size:.2,depth:.05});new xn({color:0});const wt=new j(yt,w);wt.position.set(-.3,.99,.53),wt.rotation.x=vt.degToRad(-5),wt.rotation.y=vt.degToRad(-15),m.add(wt);const St=new Zt("O",{font:Qe,size:.2,depth:.05});new xn({color:0});const Ut=new j(St,x);Ut.position.set(.14,.99,.53),Ut.rotation.y=vt.degToRad(12),Ut.rotation.x=vt.degToRad(-5),m.add(Ut)}),Ve.renderOrder=1;const Be=1.2,F=.8,ve=8,ne=.3,Z=.3,_e=.7,Me=f(G,{x:-2,y:0,z:0}),Ne=f(G,{x:0,y:0,z:0}),Ke=f(G,{x:2,y:0,z:0}),tt=f(G,{x:2,y:0,z:0}),Xe=f(G,{x:2,y:-2,z:0}),Je=new j(v,K);Je.scale.set(.3,.3,.3),Je.position.set(.25,1.1,0),Je.rotation.y=Math.PI,Je.rotation.x=Math.PI,m.add(Je),Me.position.set(.35,0,0),Ne.position.set(.25,-.3,.4),Ke.position.set(.3,.3,-.2),tt.position.set(.25,.17,.4),Xe.position.set(.5,-.4,.35),Me.scale.set(.2,.2,.2),Ne.scale.set(.18,.18,.18),Ke.scale.set(.15,.15,.15),tt.scale.set(.17,.17,.17),Xe.scale.set(.15,.15,.15),Ne.rotation.z=Math.PI/4,Ke.rotation.z=-Math.PI/4,tt.rotation.y=-Math.PI/2,Xe.rotation.y=-Math.PI/2,m.add(Me),m.add(Ne),m.add(Ke),m.add(tt),m.add(Xe),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),M.position.set(e.bodyPosition.x,1,e.cameraPosition),M.lookAt(e.bodyPosition.x,0,0),M.position.z=4,d(),Qt(()=>e.bodyPosition,Qe=>{m.position.set(Qe.x,Qe.y,Qe.z)}),Qt(()=>e.cameraPosition,Qe=>{M.position.set(e.bodyPosition.x,1,Qe),M.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,d)=>(Ws(),Xs(gn,null,[gt("div",{ref_key:"threeCanvas",ref:t,class:Ti(n.background?"no-bg":"three-canvas")},null,2),gt("div",QE,[gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),gt("div",ew,[gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),nw=qs(tw,[["__scopeId","data-v-4fb9efff"]]),iw=[{path:"/3d-bear-arts/leather",name:"Leather",component:VE},{path:"/3d-bear-arts/pop-art",name:"Pop",component:WE},{path:"/3d-bear-arts/pop-art-bear",name:"PopArtBear 2",component:$E},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:JE},{path:"/3d-bear-arts",name:"MetalMachineBear",component:nw}],sw=L0({history:a0(),routes:iw}),Zd=bg(Pg);Zd.use(sw);Zd.mount("#app");
