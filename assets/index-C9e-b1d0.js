(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const mt={},Fs=[],zn=()=>{},ip=()=>!1,Yo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),hc=n=>n.startsWith("onUpdate:"),Ht=Object.assign,fc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},sp=Object.prototype.hasOwnProperty,at=(n,e)=>sp.call(n,e),je=Array.isArray,pr=n=>$o(n)==="[object Map]",rp=n=>$o(n)==="[object Set]",Ke=n=>typeof n=="function",Bt=n=>typeof n=="string",Qs=n=>typeof n=="symbol",At=n=>n!==null&&typeof n=="object",Zh=n=>(At(n)||Ke(n))&&Ke(n.then)&&Ke(n.catch),op=Object.prototype.toString,$o=n=>op.call(n),ap=n=>$o(n).slice(8,-1),lp=n=>$o(n)==="[object Object]",dc=n=>Bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,mr=uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ko=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},cp=/-(\w)/g,xn=Ko(n=>n.replace(cp,(e,t)=>t?t.toUpperCase():"")),up=/\B([A-Z])/g,ss=Ko(n=>n.replace(up,"-$1").toLowerCase()),jo=Ko(n=>n.charAt(0).toUpperCase()+n.slice(1)),pa=Ko(n=>n?`on${jo(n)}`:""),Ri=(n,e)=>!Object.is(n,e),ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Jh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},hp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Qc;const Qh=()=>Qc||(Qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pc(n){if(je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Bt(i)?mp(i):pc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Bt(n)||At(n))return n}const fp=/;(?![^(]*\))/g,dp=/:([^]+)/,pp=/\/\*[^]*?\*\//g;function mp(n){const e={};return n.replace(pp,"").split(fp).forEach(t=>{if(t){const i=t.split(dp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Vn(n){let e="";if(Bt(n))e=n;else if(je(n))for(let t=0;t<n.length;t++){const i=Vn(n[t]);i&&(e+=i+" ")}else if(At(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_p=uc(gp);function ef(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class vp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function xp(){return hn}let gt;const ga=new WeakSet;class tf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ga.has(this)&&(ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eu(this),rf(this);const e=gt,t=Cn;gt=this,Cn=!0;try{return this.fn()}finally{of(this),gt=e,Cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_c(e);this.deps=this.depsTail=void 0,eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ll(this)&&this.run()}get dirty(){return ll(this)}}let nf=0,Ds;function sf(n){n.flags|=8,n.next=Ds,Ds=n}function mc(){nf++}function gc(){if(--nf>0)return;let n;for(;Ds;){let e=Ds,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Ds,Ds=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function rf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function of(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),_c(i),yp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ll(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(af(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function af(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Tr))return;n.globalVersion=Tr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ll(n)){n.flags&=-3;return}const t=gt,i=Cn;gt=n,Cn=!0;try{rf(n);const s=n.fn(n._value);(e.version===0||Ri(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{gt=t,Cn=i,of(n),n.flags&=-3}}function _c(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)_c(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function yp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Cn=!0;const lf=[];function Pi(){lf.push(Cn),Cn=!1}function Li(){const n=lf.pop();Cn=n===void 0?!0:n}function eu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let Tr=0;class Mp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!gt||!Cn||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new Mp(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,cf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,Tr++,this.notify(e)}notify(e){mc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{gc()}}}function cf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)cf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const cl=new WeakMap,Qi=Symbol(""),ul=Symbol(""),Ar=Symbol("");function $t(n,e,t){if(Cn&&gt){let i=cl.get(n);i||cl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new vc),s.target=n,s.map=i,s.key=t),s.track()}}function oi(n,e,t,i,s,r){const o=cl.get(n);if(!o){Tr++;return}const a=l=>{l&&l.trigger()};if(mc(),e==="clear")o.forEach(a);else{const l=je(n),c=l&&dc(t);if(l&&t==="length"){const h=Number(i);o.forEach((u,f)=>{(f==="length"||f===Ar||!Qs(f)&&f>=h)&&a(u)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(Ar)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Qi)),pr(n)&&a(o.get(ul)));break;case"delete":l||(a(o.get(Qi)),pr(n)&&a(o.get(ul)));break;case"set":pr(n)&&a(o.get(Qi));break}}gc()}function ms(n){const e=ct(n);return e===n?e:($t(e,"iterate",Ar),Pn(n)?e:e.map(Jt))}function xc(n){return $t(n=ct(n),"iterate",Ar),n}const Sp={__proto__:null,[Symbol.iterator](){return _a(this,Symbol.iterator,Jt)},concat(...n){return ms(this).concat(...n.map(e=>je(e)?ms(e):e))},entries(){return _a(this,"entries",n=>(n[1]=Jt(n[1]),n))},every(n,e){return Yn(this,"every",n,e,void 0,arguments)},filter(n,e){return Yn(this,"filter",n,e,t=>t.map(Jt),arguments)},find(n,e){return Yn(this,"find",n,e,Jt,arguments)},findIndex(n,e){return Yn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Yn(this,"findLast",n,e,Jt,arguments)},findLastIndex(n,e){return Yn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Yn(this,"forEach",n,e,void 0,arguments)},includes(...n){return va(this,"includes",n)},indexOf(...n){return va(this,"indexOf",n)},join(n){return ms(this).join(n)},lastIndexOf(...n){return va(this,"lastIndexOf",n)},map(n,e){return Yn(this,"map",n,e,void 0,arguments)},pop(){return nr(this,"pop")},push(...n){return nr(this,"push",n)},reduce(n,...e){return tu(this,"reduce",n,e)},reduceRight(n,...e){return tu(this,"reduceRight",n,e)},shift(){return nr(this,"shift")},some(n,e){return Yn(this,"some",n,e,void 0,arguments)},splice(...n){return nr(this,"splice",n)},toReversed(){return ms(this).toReversed()},toSorted(n){return ms(this).toSorted(n)},toSpliced(...n){return ms(this).toSpliced(...n)},unshift(...n){return nr(this,"unshift",n)},values(){return _a(this,"values",Jt)}};function _a(n,e,t){const i=xc(n),s=i[e]();return i!==n&&!Pn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Ep=Array.prototype;function Yn(n,e,t,i,s,r){const o=xc(n),a=o!==n&&!Pn(n),l=o[e];if(l!==Ep[e]){const u=l.apply(n,r);return a?Jt(u):u}let c=t;o!==n&&(a?c=function(u,f){return t.call(this,Jt(u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function tu(n,e,t,i){const s=xc(n);let r=t;return s!==n&&(Pn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Jt(a),l,n)}),s[e](r,...i)}function va(n,e,t){const i=ct(n);$t(i,"iterate",Ar);const s=i[e](...t);return(s===-1||s===!1)&&Ec(t[0])?(t[0]=ct(t[0]),i[e](...t)):s}function nr(n,e,t=[]){Pi(),mc();const i=ct(n)[e].apply(n,t);return gc(),Li(),i}const wp=uc("__proto__,__v_isRef,__isVue"),uf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qs));function bp(n){Qs(n)||(n=String(n));const e=ct(this);return $t(e,"has",n),e.hasOwnProperty(n)}class hf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Bp:mf:r?pf:df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=je(e);if(!s){let l;if(o&&(l=Sp[t]))return l;if(t==="hasOwnProperty")return bp}const a=Reflect.get(e,t,qt(e)?e:i);return(Qs(t)?uf.has(t):wp(t))||(s||$t(e,"get",t),r)?a:qt(a)?o&&dc(t)?a:a.value:At(a)?s?_f(a):Jo(a):a}}class ff extends hf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=es(r);if(!Pn(i)&&!es(i)&&(r=ct(r),i=ct(i)),!je(e)&&qt(r)&&!qt(i))return l?!1:(r.value=i,!0)}const o=je(e)&&dc(t)?Number(t)<e.length:at(e,t),a=Reflect.set(e,t,i,qt(e)?e:s);return e===ct(s)&&(o?Ri(i,r)&&oi(e,"set",t,i):oi(e,"add",t,i)),a}deleteProperty(e,t){const i=at(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&oi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Qs(t)||!uf.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",je(e)?"length":Qi),Reflect.ownKeys(e)}}class Tp extends hf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ap=new ff,Rp=new Tp,Cp=new ff(!0);const yc=n=>n,Zo=n=>Reflect.getPrototypeOf(n);function Kr(n,e,t=!1,i=!1){n=n.__v_raw;const s=ct(n),r=ct(e);t||(Ri(e,r)&&$t(s,"get",e),$t(s,"get",r));const{has:o}=Zo(s),a=i?yc:t?wc:Jt;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function jr(n,e=!1){const t=this.__v_raw,i=ct(t),s=ct(n);return e||(Ri(n,s)&&$t(i,"has",n),$t(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Zr(n,e=!1){return n=n.__v_raw,!e&&$t(ct(n),"iterate",Qi),Reflect.get(n,"size",n)}function nu(n,e=!1){!e&&!Pn(n)&&!es(n)&&(n=ct(n));const t=ct(this);return Zo(t).has.call(t,n)||(t.add(n),oi(t,"add",n,n)),this}function iu(n,e,t=!1){!t&&!Pn(e)&&!es(e)&&(e=ct(e));const i=ct(this),{has:s,get:r}=Zo(i);let o=s.call(i,n);o||(n=ct(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,e),o?Ri(e,a)&&oi(i,"set",n,e):oi(i,"add",n,e),this}function su(n){const e=ct(this),{has:t,get:i}=Zo(e);let s=t.call(e,n);s||(n=ct(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&oi(e,"delete",n,void 0),r}function ru(){const n=ct(this),e=n.size!==0,t=n.clear();return e&&oi(n,"clear",void 0,void 0),t}function Jr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=ct(o),l=e?yc:n?wc:Jt;return!n&&$t(a,"iterate",Qi),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function Qr(n,e,t){return function(...i){const s=this.__v_raw,r=ct(s),o=pr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?yc:e?wc:Jt;return!e&&$t(r,"iterate",l?ul:Qi),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function pi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Pp(){const n={get(r){return Kr(this,r)},get size(){return Zr(this)},has:jr,add:nu,set:iu,delete:su,clear:ru,forEach:Jr(!1,!1)},e={get(r){return Kr(this,r,!1,!0)},get size(){return Zr(this)},has:jr,add(r){return nu.call(this,r,!0)},set(r,o){return iu.call(this,r,o,!0)},delete:su,clear:ru,forEach:Jr(!1,!0)},t={get(r){return Kr(this,r,!0)},get size(){return Zr(this,!0)},has(r){return jr.call(this,r,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:Jr(!0,!1)},i={get(r){return Kr(this,r,!0,!0)},get size(){return Zr(this,!0)},has(r){return jr.call(this,r,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:Jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Qr(r,!1,!1),t[r]=Qr(r,!0,!1),e[r]=Qr(r,!1,!0),i[r]=Qr(r,!0,!0)}),[n,t,e,i]}const[Lp,Ip,Dp,Up]=Pp();function Mc(n,e){const t=e?n?Up:Dp:n?Ip:Lp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(at(t,s)&&s in i?t:i,s,r)}const Np={get:Mc(!1,!1)},Fp={get:Mc(!1,!0)},Op={get:Mc(!0,!1)};const df=new WeakMap,pf=new WeakMap,mf=new WeakMap,Bp=new WeakMap;function zp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gp(n){return n.__v_skip||!Object.isExtensible(n)?0:zp(ap(n))}function Jo(n){return es(n)?n:Sc(n,!1,Ap,Np,df)}function gf(n){return Sc(n,!1,Cp,Fp,pf)}function _f(n){return Sc(n,!0,Rp,Op,mf)}function Sc(n,e,t,i,s){if(!At(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Gp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function gr(n){return es(n)?gr(n.__v_raw):!!(n&&n.__v_isReactive)}function es(n){return!!(n&&n.__v_isReadonly)}function Pn(n){return!!(n&&n.__v_isShallow)}function Ec(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function Hp(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Jh(n,"__v_skip",!0),n}const Jt=n=>At(n)?Jo(n):n,wc=n=>At(n)?_f(n):n;function qt(n){return n?n.__v_isRef===!0:!1}function nt(n){return vf(n,!1)}function kp(n){return vf(n,!0)}function vf(n,e){return qt(n)?n:new Vp(n,e)}class Vp{constructor(e,t){this.dep=new vc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:Jt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Pn(e)||es(e);e=i?e:ct(e),Ri(e,t)&&(this._rawValue=e,this._value=i?e:Jt(e),this.dep.trigger())}}function Os(n){return qt(n)?n.value:n}const Wp={get:(n,e,t)=>e==="__v_raw"?n:Os(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return qt(s)&&!qt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function xf(n){return gr(n)?n:new Proxy(n,Wp)}class Xp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new vc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return sf(this),!0}get value(){const e=this.dep.track();return af(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qp(n,e,t=!1){let i,s;return Ke(n)?i=n:(i=n.get,s=n.set),new Xp(i,s,t)}const eo={},Fo=new WeakMap;let Wi;function Yp(n,e=!1,t=Wi){if(t){let i=Fo.get(t);i||Fo.set(t,i=[]),i.push(n)}}function $p(n,e,t=mt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:Pn(E)||s===!1||s===0?ii(E,1):ii(E);let h,u,f,m,_=!1,x=!1;if(qt(n)?(u=()=>n.value,_=Pn(n)):gr(n)?(u=()=>c(n),_=!0):je(n)?(x=!0,_=n.some(E=>gr(E)||Pn(E)),u=()=>n.map(E=>{if(qt(E))return E.value;if(gr(E))return c(E);if(Ke(E))return l?l(E,2):E()})):Ke(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){Pi();try{f()}finally{Li()}}const E=Wi;Wi=h;try{return l?l(n,3,[m]):n(m)}finally{Wi=E}}:u=zn,e&&s){const E=u,F=s===!0?1/0:s;u=()=>ii(E(),F)}const d=xp(),p=()=>{h.stop(),d&&fc(d.effects,h)};if(r&&e){const E=e;e=(...F)=>{E(...F),p()}}let b=x?new Array(n.length).fill(eo):eo;const M=E=>{if(!(!(h.flags&1)||!h.dirty&&!E))if(e){const F=h.run();if(s||_||(x?F.some((P,R)=>Ri(P,b[R])):Ri(F,b))){f&&f();const P=Wi;Wi=h;try{const R=[F,b===eo?void 0:x&&b[0]===eo?[]:b,m];l?l(e,3,R):e(...R),b=F}finally{Wi=P}}}else h.run()};return a&&a(M),h=new tf(u),h.scheduler=o?()=>o(M,!1):M,m=E=>Yp(E,!1,h),f=h.onStop=()=>{const E=Fo.get(h);if(E){if(l)l(E,4);else for(const F of E)F();Fo.delete(h)}},e?i?M(!0):b=h.run():o?o(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function ii(n,e=1/0,t){if(e<=0||!At(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,qt(n))ii(n.value,e,t);else if(je(n))for(let i=0;i<n.length;i++)ii(n[i],e,t);else if(rp(n)||pr(n))n.forEach(i=>{ii(i,e,t)});else if(lp(n)){for(const i in n)ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ii(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(n,e,t,i){try{return i?n(...i):n()}catch(s){Qo(s,e,t)}}function Hn(n,e,t,i){if(Ke(n)){const s=Hr(n,e,t,i);return s&&Zh(s)&&s.catch(r=>{Qo(r,e,t)}),s}if(je(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Hn(n[r],e,t,i));return s}}function Qo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){Pi(),Hr(r,null,10,[n,l,c]),Li();return}}Kp(n,t,s,i,o)}function Kp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}let Rr=!1,hl=!1;const Qt=[];let Nn=0;const Bs=[];let Si=null,Ps=0;const yf=Promise.resolve();let bc=null;function Mf(n){const e=bc||yf;return n?e.then(this?n.bind(this):n):e}function jp(n){let e=Rr?Nn+1:0,t=Qt.length;for(;e<t;){const i=e+t>>>1,s=Qt[i],r=Cr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Tc(n){if(!(n.flags&1)){const e=Cr(n),t=Qt[Qt.length-1];!t||!(n.flags&2)&&e>=Cr(t)?Qt.push(n):Qt.splice(jp(e),0,n),n.flags|=1,Sf()}}function Sf(){!Rr&&!hl&&(hl=!0,bc=yf.then(wf))}function Zp(n){je(n)?Bs.push(...n):Si&&n.id===-1?Si.splice(Ps+1,0,n):n.flags&1||(Bs.push(n),n.flags|=1),Sf()}function ou(n,e,t=Rr?Nn+1:0){for(;t<Qt.length;t++){const i=Qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ef(n){if(Bs.length){const e=[...new Set(Bs)].sort((t,i)=>Cr(t)-Cr(i));if(Bs.length=0,Si){Si.push(...e);return}for(Si=e,Ps=0;Ps<Si.length;Ps++){const t=Si[Ps];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Si=null,Ps=0}}const Cr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wf(n){hl=!1,Rr=!0;try{for(Nn=0;Nn<Qt.length;Nn++){const e=Qt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<Qt.length;Nn++){const e=Qt[Nn];e&&(e.flags&=-2)}Nn=0,Qt.length=0,Ef(),Rr=!1,bc=null,(Qt.length||Bs.length)&&wf()}}let fn=null,bf=null;function Oo(n){const e=fn;return fn=n,bf=n&&n.type.__scopeId||null,e}function Xi(n,e=fn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&gu(-1);const r=Oo(e);let o;try{o=n(...s)}finally{Oo(r),i._d&&gu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Jp(n,e){if(fn===null)return n;const t=sa(fn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=mt]=e[s];r&&(Ke(r)&&(r={mounted:r,updated:r}),r.deep&&ii(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Fi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Pi(),Hn(l,t,8,[n.el,a,n,e]),Li())}}const Qp=Symbol("_vte"),em=n=>n.__isTeleport;function Ac(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ac(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Wn(n,e){return Ke(n)?Ht({name:n.name},e,{setup:n}):n}function Tf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function fl(n,e,t,i,s=!1){if(je(n)){n.forEach((_,x)=>fl(_,e&&(je(e)?e[x]:e),t,i,s));return}if(_r(i)&&!s)return;const r=i.shapeFlag&4?sa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===mt?a.refs={}:a.refs,u=a.setupState,f=ct(u),m=u===mt?()=>!1:_=>at(f,_);if(c!=null&&c!==l&&(Bt(c)?(h[c]=null,m(c)&&(u[c]=null)):qt(c)&&(c.value=null)),Ke(l))Hr(l,a,12,[o,h]);else{const _=Bt(l),x=qt(l);if(_||x){const d=()=>{if(n.f){const p=_?m(l)?u[l]:h[l]:l.value;s?je(p)&&fc(p,r):je(p)?p.includes(r)||p.push(r):_?(h[l]=[r],m(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else _?(h[l]=o,m(l)&&(u[l]=o)):x&&(l.value=o,n.k&&(h[n.k]=o))};o?(d.id=-1,un(d,t)):d()}}}const _r=n=>!!n.type.__asyncLoader,Af=n=>n.type.__isKeepAlive;function tm(n,e){Rf(n,"a",e)}function nm(n,e){Rf(n,"da",e)}function Rf(n,e,t=Xt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ea(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Af(s.parent.vnode)&&im(i,e,t,s),s=s.parent}}function im(n,e,t,i){const s=ea(e,n,i,!0);Rc(()=>{fc(i[e],s)},t)}function ea(n,e,t=Xt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Pi();const a=kr(t),l=Hn(e,t,n,o);return a(),Li(),l});return i?s.unshift(r):s.push(r),r}}const ui=n=>(e,t=Xt)=>{(!ia||n==="sp")&&ea(n,(...i)=>e(...i),t)},sm=ui("bm"),hi=ui("m"),rm=ui("bu"),om=ui("u"),am=ui("bum"),Rc=ui("um"),lm=ui("sp"),cm=ui("rtg"),um=ui("rtc");function hm(n,e=Xt){ea("ec",n,e)}const fm="components";function au(n,e){return pm(fm,n,!0,e)||n}const dm=Symbol.for("v-ndc");function pm(n,e,t=!0,i=!1){const s=fn||Xt;if(s){const r=s.type;{const a=t0(r,!1);if(a&&(a===e||a===xn(e)||a===jo(xn(e))))return r}const o=lu(s[n]||r[n],e)||lu(s.appContext[n],e);return!o&&i?r:o}}function lu(n,e){return n&&(n[e]||n[xn(e)]||n[jo(xn(e))])}const dl=n=>n?Yf(n)?sa(n):dl(n.parent):null,vr=Ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>dl(n.parent),$root:n=>dl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Cc(n),$forceUpdate:n=>n.f||(n.f=()=>{Tc(n.update)}),$nextTick:n=>n.n||(n.n=Mf.bind(n.proxy)),$watch:n=>Nm.bind(n)}),xa=(n,e)=>n!==mt&&!n.__isScriptSetup&&at(n,e),mm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(xa(i,e))return o[e]=1,i[e];if(s!==mt&&at(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&at(c,e))return o[e]=3,r[e];if(t!==mt&&at(t,e))return o[e]=4,t[e];pl&&(o[e]=0)}}const h=vr[e];let u,f;if(h)return e==="$attrs"&&$t(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==mt&&at(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,at(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return xa(s,e)?(s[e]=t,!0):i!==mt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==mt&&at(n,o)||xa(e,o)||(a=r[0])&&at(a,o)||at(i,o)||at(vr,o)||at(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cu(n){return je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let pl=!0;function gm(n){const e=Cc(n),t=n.proxy,i=n.ctx;pl=!1,e.beforeCreate&&uu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:m,updated:_,activated:x,deactivated:d,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:E,render:F,renderTracked:P,renderTriggered:R,errorCaptured:N,serverPrefetch:ne,expose:y,inheritAttrs:w,components:$,directives:k,filters:Z}=e;if(c&&_m(c,i,null),o)for(const Q in o){const X=o[Q];Ke(X)&&(i[Q]=X.bind(t))}if(s){const Q=s.call(t,t);At(Q)&&(n.data=Jo(Q))}if(pl=!0,r)for(const Q in r){const X=r[Q],pe=Ke(X)?X.bind(t,t):Ke(X.get)?X.get.bind(t,t):zn,Me=!Ke(X)&&Ke(X.set)?X.set.bind(t):zn,_e=bn({get:pe,set:Me});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Ae=>_e.value=Ae})}if(a)for(const Q in a)Cf(a[Q],i,t,Q);if(l){const Q=Ke(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(X=>{To(X,Q[X])})}h&&uu(h,n,"c");function H(Q,X){je(X)?X.forEach(pe=>Q(pe.bind(t))):X&&Q(X.bind(t))}if(H(sm,u),H(hi,f),H(rm,m),H(om,_),H(tm,x),H(nm,d),H(hm,N),H(um,P),H(cm,R),H(am,b),H(Rc,E),H(lm,ne),je(y))if(y.length){const Q=n.exposed||(n.exposed={});y.forEach(X=>{Object.defineProperty(Q,X,{get:()=>t[X],set:pe=>t[X]=pe})})}else n.exposed||(n.exposed={});F&&n.render===zn&&(n.render=F),w!=null&&(n.inheritAttrs=w),$&&(n.components=$),k&&(n.directives=k),ne&&Tf(n)}function _m(n,e,t=zn){je(n)&&(n=ml(n));for(const i in n){const s=n[i];let r;At(s)?"default"in s?r=ai(s.from||i,s.default,!0):r=ai(s.from||i):r=ai(s),qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function uu(n,e,t){Hn(je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cf(n,e,t,i){let s=i.includes(".")?Vf(t,i):()=>t[i];if(Bt(n)){const r=e[n];Ke(r)&&Ft(s,r)}else if(Ke(n))Ft(s,n.bind(t));else if(At(n))if(je(n))n.forEach(r=>Cf(r,e,t,i));else{const r=Ke(n.handler)?n.handler.bind(t):e[n.handler];Ke(r)&&Ft(s,r,n)}}function Cc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Bo(l,c,o,!0)),Bo(l,e,o)),At(e)&&r.set(e,l),l}function Bo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Bo(n,r,t,!0),s&&s.forEach(o=>Bo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=vm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const vm={data:hu,props:fu,emits:fu,methods:fr,computed:fr,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:fr,directives:fr,watch:ym,provide:hu,inject:xm};function hu(n,e){return e?n?function(){return Ht(Ke(n)?n.call(this,this):n,Ke(e)?e.call(this,this):e)}:e:n}function xm(n,e){return fr(ml(n),ml(e))}function ml(n){if(je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Kt(n,e){return n?[...new Set([].concat(n,e))]:e}function fr(n,e){return n?Ht(Object.create(null),n,e):e}function fu(n,e){return n?je(n)&&je(e)?[...new Set([...n,...e])]:Ht(Object.create(null),cu(n),cu(e??{})):e}function ym(n,e){if(!n)return e;if(!e)return n;const t=Ht(Object.create(null),n);for(const i in e)t[i]=Kt(n[i],e[i]);return t}function Pf(){return{app:null,config:{isNativeTag:ip,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mm=0;function Sm(n,e){return function(i,s=null){Ke(i)||(i=Ht({},i)),s!=null&&!At(s)&&(s=null);const r=Pf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Mm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:i0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Ke(h.install)?(o.add(h),h.install(c,...u)):Ke(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const m=c._ceVNode||Dt(i,s);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(m,h):n(m,h,f),l=!0,c._container=h,h.__vue_app__=c,sa(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Hn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=zs;zs=c;try{return h()}finally{zs=u}}};return c}}let zs=null;function To(n,e){if(Xt){let t=Xt.provides;const i=Xt.parent&&Xt.parent.provides;i===t&&(t=Xt.provides=Object.create(i)),t[n]=e}}function ai(n,e,t=!1){const i=Xt||fn;if(i||zs){const s=zs?zs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ke(e)?e.call(i&&i.proxy):e}}const Lf={},If=()=>Object.create(Lf),Df=n=>Object.getPrototypeOf(n)===Lf;function Em(n,e,t,i=!1){const s={},r=If();n.propsDefaults=Object.create(null),Uf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:gf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function wm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ct(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(ta(n.emitsOptions,f))continue;const m=e[f];if(l)if(at(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const _=xn(f);s[_]=gl(l,a,_,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{Uf(n,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!at(e,u)&&((h=ss(u))===u||!at(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=gl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!at(e,u))&&(delete r[u],c=!0)}c&&oi(n.attrs,"set","")}function Uf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(mr(l))continue;const c=e[l];let h;s&&at(s,h=xn(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ct(t),c=a||mt;for(let h=0;h<r.length;h++){const u=r[h];t[u]=gl(s,l,u,c[u],n,!at(c,u))}}return o}function gl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=kr(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ss(t))&&(i=!0))}return i}const bm=new WeakMap;function Nf(n,e,t=!1){const i=t?bm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ke(n)){const h=u=>{l=!0;const[f,m]=Nf(u,e,!0);Ht(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return At(n)&&i.set(n,Fs),Fs;if(je(r))for(let h=0;h<r.length;h++){const u=xn(r[h]);du(u)&&(o[u]=mt)}else if(r)for(const h in r){const u=xn(h);if(du(u)){const f=r[h],m=o[u]=je(f)||Ke(f)?{type:f}:Ht({},f),_=m.type;let x=!1,d=!0;if(je(_))for(let p=0;p<_.length;++p){const b=_[p],M=Ke(b)&&b.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(d=!1)}else x=Ke(_)&&_.name==="Boolean";m[0]=x,m[1]=d,(x||at(m,"default"))&&a.push(u)}}const c=[o,a];return At(n)&&i.set(n,c),c}function du(n){return n[0]!=="$"&&!mr(n)}const Ff=n=>n[0]==="_"||n==="$stable",Pc=n=>je(n)?n.map(On):[On(n)],Tm=(n,e,t)=>{if(e._n)return e;const i=Xi((...s)=>Pc(e(...s)),t);return i._c=!1,i},Of=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Ff(s))continue;const r=n[s];if(Ke(r))e[s]=Tm(s,r,i);else if(r!=null){const o=Pc(r);e[s]=()=>o}}},Bf=(n,e)=>{const t=Pc(e);n.slots.default=()=>t},zf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Am=(n,e,t)=>{const i=n.slots=If();if(n.vnode.shapeFlag&32){const s=e._;s?(zf(i,e,t),t&&Jh(i,"_",s,!0)):Of(e,i)}else e&&Bf(n,e)},Rm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:zf(s,e,t):(r=!e.$stable,Of(e,s)),o=e}else e&&(Bf(n,e),o={default:1});if(r)for(const a in s)!Ff(a)&&o[a]==null&&delete s[a]},un=km;function Cm(n){return Pm(n)}function Pm(n,e){const t=Qh();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:m=zn,insertStaticContent:_}=n,x=(g,T,L,D=null,I=null,Y=null,j=void 0,S=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!ir(g,T)&&(D=U(g),Ae(g,I,Y,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:V,shapeFlag:O}=T;switch(C){case na:d(g,T,L,D);break;case Pr:p(g,T,L,D);break;case Sa:g==null&&b(T,L,D,j);break;case tn:$(g,T,L,D,I,Y,j,S,v);break;default:O&1?F(g,T,L,D,I,Y,j,S,v):O&6?k(g,T,L,D,I,Y,j,S,v):(O&64||O&128)&&C.process(g,T,L,D,I,Y,j,S,v,ue)}V!=null&&I&&fl(V,g&&g.ref,Y,T||g,!T)},d=(g,T,L,D)=>{if(g==null)i(T.el=a(T.children),L,D);else{const I=T.el=g.el;T.children!==g.children&&c(I,T.children)}},p=(g,T,L,D)=>{g==null?i(T.el=l(T.children||""),L,D):T.el=g.el},b=(g,T,L,D)=>{[g.el,g.anchor]=_(g.children,T,L,D,g.el,g.anchor)},M=({el:g,anchor:T},L,D)=>{let I;for(;g&&g!==T;)I=f(g),i(g,L,D),g=I;i(T,L,D)},E=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=f(g),s(g),g=L;s(T)},F=(g,T,L,D,I,Y,j,S,v)=>{T.type==="svg"?j="svg":T.type==="math"&&(j="mathml"),g==null?P(T,L,D,I,Y,j,S,v):ne(g,T,I,Y,j,S,v)},P=(g,T,L,D,I,Y,j,S)=>{let v,C;const{props:V,shapeFlag:O,transition:G,dirs:de}=g;if(v=g.el=o(g.type,Y,V&&V.is,V),O&8?h(v,g.children):O&16&&N(g.children,v,null,D,I,ya(g,Y),j,S),de&&Fi(g,null,D,"created"),R(v,g,g.scopeId,j,D),V){for(const me in V)me!=="value"&&!mr(me)&&r(v,me,null,V[me],Y,D);"value"in V&&r(v,"value",null,V.value,Y),(C=V.onVnodeBeforeMount)&&Un(C,D,g)}de&&Fi(g,null,D,"beforeMount");const ce=Lm(I,G);ce&&G.beforeEnter(v),i(v,T,L),((C=V&&V.onVnodeMounted)||ce||de)&&un(()=>{C&&Un(C,D,g),ce&&G.enter(v),de&&Fi(g,null,D,"mounted")},I)},R=(g,T,L,D,I)=>{if(L&&m(g,L),D)for(let Y=0;Y<D.length;Y++)m(g,D[Y]);if(I){let Y=I.subTree;if(T===Y||Xf(Y.type)&&(Y.ssContent===T||Y.ssFallback===T)){const j=I.vnode;R(g,j,j.scopeId,j.slotScopeIds,I.parent)}}},N=(g,T,L,D,I,Y,j,S,v=0)=>{for(let C=v;C<g.length;C++){const V=g[C]=S?Ei(g[C]):On(g[C]);x(null,V,T,L,D,I,Y,j,S)}},ne=(g,T,L,D,I,Y,j)=>{const S=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:V}=T;v|=g.patchFlag&16;const O=g.props||mt,G=T.props||mt;let de;if(L&&Oi(L,!1),(de=G.onVnodeBeforeUpdate)&&Un(de,L,T,g),V&&Fi(T,g,L,"beforeUpdate"),L&&Oi(L,!0),(O.innerHTML&&G.innerHTML==null||O.textContent&&G.textContent==null)&&h(S,""),C?y(g.dynamicChildren,C,S,L,D,ya(T,I),Y):j||X(g,T,S,null,L,D,ya(T,I),Y,!1),v>0){if(v&16)w(S,O,G,L,I);else if(v&2&&O.class!==G.class&&r(S,"class",null,G.class,I),v&4&&r(S,"style",O.style,G.style,I),v&8){const ce=T.dynamicProps;for(let me=0;me<ce.length;me++){const be=ce[me],fe=O[be],ye=G[be];(ye!==fe||be==="value")&&r(S,be,fe,ye,I,L)}}v&1&&g.children!==T.children&&h(S,T.children)}else!j&&C==null&&w(S,O,G,L,I);((de=G.onVnodeUpdated)||V)&&un(()=>{de&&Un(de,L,T,g),V&&Fi(T,g,L,"updated")},D)},y=(g,T,L,D,I,Y,j)=>{for(let S=0;S<T.length;S++){const v=g[S],C=T[S],V=v.el&&(v.type===tn||!ir(v,C)||v.shapeFlag&70)?u(v.el):L;x(v,C,V,null,D,I,Y,j,!0)}},w=(g,T,L,D,I)=>{if(T!==L){if(T!==mt)for(const Y in T)!mr(Y)&&!(Y in L)&&r(g,Y,T[Y],null,I,D);for(const Y in L){if(mr(Y))continue;const j=L[Y],S=T[Y];j!==S&&Y!=="value"&&r(g,Y,S,j,I,D)}"value"in L&&r(g,"value",T.value,L.value,I)}},$=(g,T,L,D,I,Y,j,S,v)=>{const C=T.el=g?g.el:a(""),V=T.anchor=g?g.anchor:a("");let{patchFlag:O,dynamicChildren:G,slotScopeIds:de}=T;de&&(S=S?S.concat(de):de),g==null?(i(C,L,D),i(V,L,D),N(T.children||[],L,V,I,Y,j,S,v)):O>0&&O&64&&G&&g.dynamicChildren?(y(g.dynamicChildren,G,L,I,Y,j,S),(T.key!=null||I&&T===I.subTree)&&Gf(g,T,!0)):X(g,T,L,V,I,Y,j,S,v)},k=(g,T,L,D,I,Y,j,S,v)=>{T.slotScopeIds=S,g==null?T.shapeFlag&512?I.ctx.activate(T,L,D,j,v):Z(T,L,D,I,Y,j,v):ae(g,T,v)},Z=(g,T,L,D,I,Y,j)=>{const S=g.component=jm(g,D,I);if(Af(g)&&(S.ctx.renderer=ue),Zm(S,!1,j),S.asyncDep){if(I&&I.registerDep(S,H,j),!g.el){const v=S.subTree=Dt(Pr);p(null,v,T,L)}}else H(S,g,T,L,I,Y,j)},ae=(g,T,L)=>{const D=T.component=g.component;if(Gm(g,T,L))if(D.asyncDep&&!D.asyncResolved){Q(D,T,L);return}else D.next=T,D.update();else T.el=g.el,D.vnode=T},H=(g,T,L,D,I,Y,j)=>{const S=()=>{if(g.isMounted){let{next:O,bu:G,u:de,parent:ce,vnode:me}=g;{const Pe=Hf(g);if(Pe){O&&(O.el=me.el,Q(g,O,j)),Pe.asyncDep.then(()=>{g.isUnmounted||S()});return}}let be=O,fe;Oi(g,!1),O?(O.el=me.el,Q(g,O,j)):O=me,G&&ma(G),(fe=O.props&&O.props.onVnodeBeforeUpdate)&&Un(fe,ce,O,me),Oi(g,!0);const ye=Ma(g),Re=g.subTree;g.subTree=ye,x(Re,ye,u(Re.el),U(Re),g,I,Y),O.el=ye.el,be===null&&Hm(g,ye.el),de&&un(de,I),(fe=O.props&&O.props.onVnodeUpdated)&&un(()=>Un(fe,ce,O,me),I)}else{let O;const{el:G,props:de}=T,{bm:ce,m:me,parent:be,root:fe,type:ye}=g,Re=_r(T);if(Oi(g,!1),ce&&ma(ce),!Re&&(O=de&&de.onVnodeBeforeMount)&&Un(O,be,T),Oi(g,!0),G&&ee){const Pe=()=>{g.subTree=Ma(g),ee(G,g.subTree,g,I,null)};Re&&ye.__asyncHydrate?ye.__asyncHydrate(G,g,Pe):Pe()}else{fe.ce&&fe.ce._injectChildStyle(ye);const Pe=g.subTree=Ma(g);x(null,Pe,L,D,g,I,Y),T.el=Pe.el}if(me&&un(me,I),!Re&&(O=de&&de.onVnodeMounted)){const Pe=T;un(()=>Un(O,be,Pe),I)}(T.shapeFlag&256||be&&_r(be.vnode)&&be.vnode.shapeFlag&256)&&g.a&&un(g.a,I),g.isMounted=!0,T=L=D=null}};g.scope.on();const v=g.effect=new tf(S);g.scope.off();const C=g.update=v.run.bind(v),V=g.job=v.runIfDirty.bind(v);V.i=g,V.id=g.uid,v.scheduler=()=>Tc(V),Oi(g,!0),C()},Q=(g,T,L)=>{T.component=g;const D=g.vnode.props;g.vnode=T,g.next=null,wm(g,T.props,D,L),Rm(g,T.children,L),Pi(),ou(g),Li()},X=(g,T,L,D,I,Y,j,S,v=!1)=>{const C=g&&g.children,V=g?g.shapeFlag:0,O=T.children,{patchFlag:G,shapeFlag:de}=T;if(G>0){if(G&128){Me(C,O,L,D,I,Y,j,S,v);return}else if(G&256){pe(C,O,L,D,I,Y,j,S,v);return}}de&8?(V&16&&Se(C,I,Y),O!==C&&h(L,O)):V&16?de&16?Me(C,O,L,D,I,Y,j,S,v):Se(C,I,Y,!0):(V&8&&h(L,""),de&16&&N(O,L,D,I,Y,j,S,v))},pe=(g,T,L,D,I,Y,j,S,v)=>{g=g||Fs,T=T||Fs;const C=g.length,V=T.length,O=Math.min(C,V);let G;for(G=0;G<O;G++){const de=T[G]=v?Ei(T[G]):On(T[G]);x(g[G],de,L,null,I,Y,j,S,v)}C>V?Se(g,I,Y,!0,!1,O):N(T,L,D,I,Y,j,S,v,O)},Me=(g,T,L,D,I,Y,j,S,v)=>{let C=0;const V=T.length;let O=g.length-1,G=V-1;for(;C<=O&&C<=G;){const de=g[C],ce=T[C]=v?Ei(T[C]):On(T[C]);if(ir(de,ce))x(de,ce,L,null,I,Y,j,S,v);else break;C++}for(;C<=O&&C<=G;){const de=g[O],ce=T[G]=v?Ei(T[G]):On(T[G]);if(ir(de,ce))x(de,ce,L,null,I,Y,j,S,v);else break;O--,G--}if(C>O){if(C<=G){const de=G+1,ce=de<V?T[de].el:D;for(;C<=G;)x(null,T[C]=v?Ei(T[C]):On(T[C]),L,ce,I,Y,j,S,v),C++}}else if(C>G)for(;C<=O;)Ae(g[C],I,Y,!0),C++;else{const de=C,ce=C,me=new Map;for(C=ce;C<=G;C++){const Ce=T[C]=v?Ei(T[C]):On(T[C]);Ce.key!=null&&me.set(Ce.key,C)}let be,fe=0;const ye=G-ce+1;let Re=!1,Pe=0;const we=new Array(ye);for(C=0;C<ye;C++)we[C]=0;for(C=de;C<=O;C++){const Ce=g[C];if(fe>=ye){Ae(Ce,I,Y,!0);continue}let Ge;if(Ce.key!=null)Ge=me.get(Ce.key);else for(be=ce;be<=G;be++)if(we[be-ce]===0&&ir(Ce,T[be])){Ge=be;break}Ge===void 0?Ae(Ce,I,Y,!0):(we[Ge-ce]=C+1,Ge>=Pe?Pe=Ge:Re=!0,x(Ce,T[Ge],L,null,I,Y,j,S,v),fe++)}const ze=Re?Im(we):Fs;for(be=ze.length-1,C=ye-1;C>=0;C--){const Ce=ce+C,Ge=T[Ce],B=Ce+1<V?T[Ce+1].el:D;we[C]===0?x(null,Ge,L,B,I,Y,j,S,v):Re&&(be<0||C!==ze[be]?_e(Ge,L,B,2):be--)}}},_e=(g,T,L,D,I=null)=>{const{el:Y,type:j,transition:S,children:v,shapeFlag:C}=g;if(C&6){_e(g.component.subTree,T,L,D);return}if(C&128){g.suspense.move(T,L,D);return}if(C&64){j.move(g,T,L,ue);return}if(j===tn){i(Y,T,L);for(let O=0;O<v.length;O++)_e(v[O],T,L,D);i(g.anchor,T,L);return}if(j===Sa){M(g,T,L);return}if(D!==2&&C&1&&S)if(D===0)S.beforeEnter(Y),i(Y,T,L),un(()=>S.enter(Y),I);else{const{leave:O,delayLeave:G,afterLeave:de}=S,ce=()=>i(Y,T,L),me=()=>{O(Y,()=>{ce(),de&&de()})};G?G(Y,ce,me):me()}else i(Y,T,L)},Ae=(g,T,L,D=!1,I=!1)=>{const{type:Y,props:j,ref:S,children:v,dynamicChildren:C,shapeFlag:V,patchFlag:O,dirs:G,cacheIndex:de}=g;if(O===-2&&(I=!1),S!=null&&fl(S,null,L,g,!0),de!=null&&(T.renderCache[de]=void 0),V&256){T.ctx.deactivate(g);return}const ce=V&1&&G,me=!_r(g);let be;if(me&&(be=j&&j.onVnodeBeforeUnmount)&&Un(be,T,g),V&6)he(g.component,L,D);else{if(V&128){g.suspense.unmount(L,D);return}ce&&Fi(g,null,T,"beforeUnmount"),V&64?g.type.remove(g,T,L,ue,D):C&&!C.hasOnce&&(Y!==tn||O>0&&O&64)?Se(C,T,L,!1,!0):(Y===tn&&O&384||!I&&V&16)&&Se(v,T,L),D&&Oe(g)}(me&&(be=j&&j.onVnodeUnmounted)||ce)&&un(()=>{be&&Un(be,T,g),ce&&Fi(g,null,T,"unmounted")},L)},Oe=g=>{const{type:T,el:L,anchor:D,transition:I}=g;if(T===tn){re(L,D);return}if(T===Sa){E(g);return}const Y=()=>{s(L),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(g.shapeFlag&1&&I&&!I.persisted){const{leave:j,delayLeave:S}=I,v=()=>j(L,Y);S?S(g.el,Y,v):v()}else Y()},re=(g,T)=>{let L;for(;g!==T;)L=f(g),s(g),g=L;s(T)},he=(g,T,L)=>{const{bum:D,scope:I,job:Y,subTree:j,um:S,m:v,a:C}=g;pu(v),pu(C),D&&ma(D),I.stop(),Y&&(Y.flags|=8,Ae(j,g,T,L)),S&&un(S,T),un(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Se=(g,T,L,D=!1,I=!1,Y=0)=>{for(let j=Y;j<g.length;j++)Ae(g[j],T,L,D,I)},U=g=>{if(g.shapeFlag&6)return U(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),L=T&&T[Qp];return L?f(L):T};let le=!1;const se=(g,T,L)=>{g==null?T._vnode&&Ae(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,L),T._vnode=g,le||(le=!0,ou(),Ef(),le=!1)},ue={p:x,um:Ae,m:_e,r:Oe,mt:Z,mc:N,pc:X,pbc:y,n:U,o:n};let Ee,ee;return{render:se,hydrate:Ee,createApp:Sm(se,Ee)}}function ya({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Oi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Lm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Gf(n,e,t=!1){const i=n.children,s=e.children;if(je(i)&&je(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ei(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Gf(o,a)),a.type===na&&(a.el=o.el)}}function Im(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Hf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hf(e)}function pu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Dm=Symbol.for("v-scx"),Um=()=>ai(Dm);function Ft(n,e,t){return kf(n,e,t)}function kf(n,e,t=mt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ht({},t);let l;if(ia)if(r==="sync"){const f=Um();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=zn,f.resume=zn,f.pause=zn,f}const c=Xt;a.call=(f,m,_)=>Hn(f,c,m,_);let h=!1;r==="post"?a.scheduler=f=>{un(f,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,m)=>{m?f():Tc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const u=$p(n,e,a);return l&&l.push(u),u}function Nm(n,e,t){const i=this.proxy,s=Bt(n)?n.includes(".")?Vf(i,n):()=>i[n]:n.bind(i,i);let r;Ke(e)?r=e:(r=e.handler,t=e);const o=kr(this),a=kf(s,r.bind(i),t);return o(),a}function Vf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Fm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${xn(e)}Modifiers`]||n[`${ss(e)}Modifiers`];function Om(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||mt;let s=t;const r=e.startsWith("update:"),o=r&&Fm(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Bt(h)?h.trim():h)),o.number&&(s=t.map(hp)));let a,l=i[a=pa(e)]||i[a=pa(xn(e))];!l&&r&&(l=i[a=pa(ss(e))]),l&&Hn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Hn(c,n,6,s)}}function Wf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ke(n)){const l=c=>{const h=Wf(c,e,!0);h&&(a=!0,Ht(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(At(n)&&i.set(n,null),null):(je(r)?r.forEach(l=>o[l]=null):Ht(o,r),At(n)&&i.set(n,o),o)}function ta(n,e){return!n||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,ss(e))||at(n,e))}function Ma(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:m,ctx:_,inheritAttrs:x}=n,d=Oo(n);let p,b;try{if(t.shapeFlag&4){const E=s||i,F=E;p=On(c.call(F,E,h,u,m,f,_)),b=a}else{const E=e;p=On(E.length>1?E(u,{attrs:a,slots:o,emit:l}):E(u,null)),b=e.props?a:Bm(a)}}catch(E){xr.length=0,Qo(E,n,1),p=Dt(Pr)}let M=p;if(b&&x!==!1){const E=Object.keys(b),{shapeFlag:F}=M;E.length&&F&7&&(r&&E.some(hc)&&(b=zm(b,r)),M=Ws(M,b,!1,!0))}return t.dirs&&(M=Ws(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Ac(M,t.transition),p=M,Oo(d),p}const Bm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Yo(t))&&((e||(e={}))[t]=n[t]);return e},zm=(n,e)=>{const t={};for(const i in n)(!hc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Gm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?mu(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==i[f]&&!ta(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?mu(i,o,c):!0:!!o;return!1}function mu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ta(t,r))return!0}return!1}function Hm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Xf=n=>n.__isSuspense;function km(n,e){e&&e.pendingBranch?je(n)?e.effects.push(...n):e.effects.push(n):Zp(n)}const tn=Symbol.for("v-fgt"),na=Symbol.for("v-txt"),Pr=Symbol.for("v-cmt"),Sa=Symbol.for("v-stc"),xr=[];let dn=null;function Ii(n=!1){xr.push(dn=n?null:[])}function Vm(){xr.pop(),dn=xr[xr.length-1]||null}let Lr=1;function gu(n){Lr+=n,n<0&&dn&&(dn.hasOnce=!0)}function Wm(n){return n.dynamicChildren=Lr>0?dn||Fs:null,Vm(),Lr>0&&dn&&dn.push(n),n}function Di(n,e,t,i,s,r){return Wm(Qe(n,e,t,i,s,r,!0))}function zo(n){return n?n.__v_isVNode===!0:!1}function ir(n,e){return n.type===e.type&&n.key===e.key}const qf=({key:n})=>n??null,Ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Bt(n)||qt(n)||Ke(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function Qe(n,e=null,t=null,i=0,s=null,r=n===tn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qf(e),ref:e&&Ao(e),scopeId:bf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return a?(Lc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Bt(t)?8:16),Lr>0&&!o&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const Dt=Xm;function Xm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===dm)&&(n=Pr),zo(n)){const a=Ws(n,e,!0);return t&&Lc(a,t),Lr>0&&!r&&dn&&(a.shapeFlag&6?dn[dn.indexOf(n)]=a:dn.push(a)),a.patchFlag=-2,a}if(n0(n)&&(n=n.__vccOpts),e){e=qm(e);let{class:a,style:l}=e;a&&!Bt(a)&&(e.class=Vn(a)),At(l)&&(Ec(l)&&!je(l)&&(l=Ht({},l)),e.style=pc(l))}const o=Bt(n)?1:Xf(n)?128:em(n)?64:At(n)?4:Ke(n)?2:0;return Qe(n,e,t,i,s,o,r,!0)}function qm(n){return n?Ec(n)||Df(n)?Ht({},n):n:null}function Ws(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Ym(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&qf(c),ref:e&&e.ref?t&&r?je(r)?r.concat(Ao(e)):[r,Ao(e)]:Ao(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==tn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ws(n.ssContent),ssFallback:n.ssFallback&&Ws(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ac(h,l.clone(h)),h}function qi(n=" ",e=0){return Dt(na,null,n,e)}function On(n){return n==null||typeof n=="boolean"?Dt(Pr):je(n)?Dt(tn,null,n.slice()):zo(n)?Ei(n):Dt(na,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ws(n)}function Lc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(je(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Lc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Df(e)?e._ctx=fn:s===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[qi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ym(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Vn([e.class,i.class]));else if(s==="style")e.style=pc([e.style,i.style]);else if(Yo(s)){const r=e[s],o=i[s];o&&r!==o&&!(je(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Un(n,e,t,i=null){Hn(n,e,7,[t,i])}const $m=Pf();let Km=0;function jm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||$m,r={uid:Km++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nf(i,s),emitsOptions:Wf(i,s),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Om.bind(null,r),n.ce&&n.ce(r),r}let Xt=null,Go,_l;{const n=Qh(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Go=e("__VUE_INSTANCE_SETTERS__",t=>Xt=t),_l=e("__VUE_SSR_SETTERS__",t=>ia=t)}const kr=n=>{const e=Xt;return Go(n),n.scope.on(),()=>{n.scope.off(),Go(e)}},_u=()=>{Xt&&Xt.scope.off(),Go(null)};function Yf(n){return n.vnode.shapeFlag&4}let ia=!1;function Zm(n,e=!1,t=!1){e&&_l(e);const{props:i,children:s}=n.vnode,r=Yf(n);Em(n,i,r,e),Am(n,s,t);const o=r?Jm(n,e):void 0;return e&&_l(!1),o}function Jm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,mm);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?e0(n):null,r=kr(n);Pi();const o=Hr(i,n,0,[n.props,s]);if(Li(),r(),Zh(o)){if(_r(n)||Tf(n),o.then(_u,_u),e)return o.then(a=>{vu(n,a,e)}).catch(a=>{Qo(a,n,0)});n.asyncDep=o}else vu(n,o,e)}else $f(n,e)}function vu(n,e,t){Ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:At(e)&&(n.setupState=xf(e)),$f(n,t)}let xu;function $f(n,e,t){const i=n.type;if(!n.render){if(!e&&xu&&!i.render){const s=i.template||Cc(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ht(Ht({isCustomElement:r,delimiters:a},o),l);i.render=xu(s,c)}}n.render=i.render||zn}{const s=kr(n);Pi();try{gm(n)}finally{Li(),s()}}}const Qm={get(n,e){return $t(n,"get",""),n[e]}};function e0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Qm),slots:n.slots,emit:n.emit,expose:e}}function sa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xf(Hp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in vr)return vr[t](n)},has(e,t){return t in e||t in vr}})):n.proxy}function t0(n,e=!0){return Ke(n)?n.displayName||n.name:n.name||e&&n.__name}function n0(n){return Ke(n)&&"__vccOpts"in n}const bn=(n,e)=>qp(n,e,ia);function Kf(n,e,t){const i=arguments.length;return i===2?At(e)&&!je(e)?zo(e)?Dt(n,null,[e]):Dt(n,e):Dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&zo(t)&&(t=[t]),Dt(n,e,t))}const i0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vl;const yu=typeof window<"u"&&window.trustedTypes;if(yu)try{vl=yu.createPolicy("vue",{createHTML:n=>n})}catch{}const jf=vl?n=>vl.createHTML(n):n=>n,s0="http://www.w3.org/2000/svg",r0="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,Mu=ni&&ni.createElement("template"),o0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ni.createElementNS(s0,n):e==="mathml"?ni.createElementNS(r0,n):t?ni.createElement(n,{is:t}):ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ni.createTextNode(n),createComment:n=>ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Mu.innerHTML=jf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Mu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},a0=Symbol("_vtc");function l0(n,e,t){const i=n[a0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ho=Symbol("_vod"),Zf=Symbol("_vsh"),c0={beforeMount(n,{value:e},{transition:t}){n[Ho]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):sr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),sr(n,!0),i.enter(n)):i.leave(n,()=>{sr(n,!1)}):sr(n,e))},beforeUnmount(n,{value:e}){sr(n,e)}};function sr(n,e){n.style.display=e?n[Ho]:"none",n[Zf]=!e}const u0=Symbol(""),h0=/(^|;)\s*display\s*:/;function f0(n,e,t){const i=n.style,s=Bt(t);let r=!1;if(t&&!s){if(e)if(Bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ro(i,a,"")}else for(const o in e)t[o]==null&&Ro(i,o,"");for(const o in t)o==="display"&&(r=!0),Ro(i,o,t[o])}else if(s){if(e!==t){const o=i[u0];o&&(t+=";"+o),i.cssText=t,r=h0.test(t)}}else e&&n.removeAttribute("style");Ho in n&&(n[Ho]=r?i.display:"",n[Zf]&&(i.display="none"))}const Su=/\s*!important$/;function Ro(n,e,t){if(je(t))t.forEach(i=>Ro(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=d0(n,e);Su.test(t)?n.setProperty(ss(i),t.replace(Su,""),"important"):n[i]=t}}const Eu=["Webkit","Moz","ms"],Ea={};function d0(n,e){const t=Ea[e];if(t)return t;let i=xn(e);if(i!=="filter"&&i in n)return Ea[e]=i;i=jo(i);for(let s=0;s<Eu.length;s++){const r=Eu[s]+i;if(r in n)return Ea[e]=r}return e}const wu="http://www.w3.org/1999/xlink";function bu(n,e,t,i,s,r=_p(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(wu,e.slice(6,e.length)):n.setAttributeNS(wu,e,t):t==null||r&&!ef(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Qs(t)?String(t):t)}function Tu(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=ef(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function p0(n,e,t,i){n.addEventListener(e,t,i)}function m0(n,e,t,i){n.removeEventListener(e,t,i)}const Au=Symbol("_vei");function g0(n,e,t,i,s=null){const r=n[Au]||(n[Au]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=_0(e);if(i){const c=r[e]=y0(i,s);p0(n,a,c,l)}else o&&(m0(n,a,o,l),r[e]=void 0)}}const Ru=/(?:Once|Passive|Capture)$/;function _0(n){let e;if(Ru.test(n)){e={};let i;for(;i=n.match(Ru);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ss(n.slice(2)),e]}let wa=0;const v0=Promise.resolve(),x0=()=>wa||(v0.then(()=>wa=0),wa=Date.now());function y0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Hn(M0(i,t.value),e,5,[i])};return t.value=n,t.attached=x0(),t}function M0(n,e){if(je(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Cu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,S0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?l0(n,i,o):e==="style"?f0(n,t,i):Yo(e)?hc(e)||g0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):E0(n,e,i,o))?(Tu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Bt(i))?Tu(n,xn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),bu(n,e,i,o))};function E0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Cu(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cu(e)&&Bt(t)?!1:e in n}const w0=Ht({patchProp:S0},o0);let Pu;function b0(){return Pu||(Pu=Cm(w0))}const T0=(...n)=>{const e=b0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=R0(i);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,A0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function A0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function R0(n){return Bt(n)?document.querySelector(n):n}const C0={id:"app"},P0=Wn({__name:"App",setup(n){const e=nt(!1);function t(i){i.clientY<50?e.value=!0:e.value=!1}return hi(()=>{window.addEventListener("mousemove",t)}),Rc(()=>{window.removeEventListener("mousemove",t)}),(i,s)=>{const r=au("router-link"),o=au("router-view");return Ii(),Di("div",C0,[Jp(Qe("nav",null,[Dt(r,{to:"/3d-bear-arts/leather"},{default:Xi(()=>s[0]||(s[0]=[qi("Leather")])),_:1}),Dt(r,{to:"/3d-bear-arts/pop-art"},{default:Xi(()=>s[1]||(s[1]=[qi("Pop Mouse Move")])),_:1}),Dt(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Xi(()=>s[2]||(s[2]=[qi("Pop-Bear-3")])),_:1}),Dt(r,{to:"/3d-bear-arts/machine"},{default:Xi(()=>s[3]||(s[3]=[qi("machine Bear")])),_:1}),Dt(r,{to:"/3d-bear-arts/"},{default:Xi(()=>s[4]||(s[4]=[qi("Water Bear2")])),_:1}),Dt(r,{to:"/3d-bear-arts/ghost-bear"},{default:Xi(()=>s[5]||(s[5]=[qi("ghost Bear")])),_:1})],512),[[c0,e.value]]),Dt(o)])}}}),Ui=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},L0=Ui(P0,[["__scopeId","data-v-d489d2c1"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ls=typeof document<"u";function Jf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function I0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Jf(n.default)}const dt=Object.assign;function ba(n,e){const t={};for(const i in e){const s=e[i];t[i]=In(s)?s.map(n):n(s)}return t}const yr=()=>{},In=Array.isArray,Qf=/#/g,D0=/&/g,U0=/\//g,N0=/=/g,F0=/\?/g,ed=/\+/g,O0=/%5B/g,B0=/%5D/g,td=/%5E/g,z0=/%60/g,nd=/%7B/g,G0=/%7C/g,id=/%7D/g,H0=/%20/g;function Ic(n){return encodeURI(""+n).replace(G0,"|").replace(O0,"[").replace(B0,"]")}function k0(n){return Ic(n).replace(nd,"{").replace(id,"}").replace(td,"^")}function xl(n){return Ic(n).replace(ed,"%2B").replace(H0,"+").replace(Qf,"%23").replace(D0,"%26").replace(z0,"`").replace(nd,"{").replace(id,"}").replace(td,"^")}function V0(n){return xl(n).replace(N0,"%3D")}function W0(n){return Ic(n).replace(Qf,"%23").replace(F0,"%3F")}function X0(n){return n==null?"":W0(n).replace(U0,"%2F")}function Ir(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const q0=/\/$/,Y0=n=>n.replace(q0,"");function Ta(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Z0(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Ir(o)}}function $0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Lu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function K0(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Xs(e.matched[i],t.matched[s])&&sd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Xs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function sd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!j0(n[t],e[t]))return!1;return!0}function j0(n,e){return In(n)?Iu(n,e):In(e)?Iu(e,n):n===e}function Iu(n,e){return In(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Z0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Dr;(function(n){n.pop="pop",n.push="push"})(Dr||(Dr={}));var Mr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Mr||(Mr={}));function J0(n){if(!n)if(Ls){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Y0(n)}const Q0=/^[^#]+#/;function eg(n,e){return n.replace(Q0,"#")+e}function tg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ra=()=>({left:window.scrollX,top:window.scrollY});function ng(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=tg(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Du(n,e){return(history.state?history.state.position-e:-1)+n}const yl=new Map;function ig(n,e){yl.set(n,e)}function sg(n){const e=yl.get(n);return yl.delete(n),e}let rg=()=>location.protocol+"//"+location.host;function rd(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Lu(l,"")}return Lu(t,n)+i+s}function og(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const m=rd(n,location),_=t.value,x=e.value;let d=0;if(f){if(t.value=m,e.value=f,o&&o===_){o=null;return}d=x?f.position-x.position:0}else i(m);s.forEach(p=>{p(t.value,_,{delta:d,type:Dr.pop,direction:d?d>0?Mr.forward:Mr.back:Mr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const m=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(m),m}function h(){const{history:f}=window;f.state&&f.replaceState(dt({},f.state,{scroll:ra()}),"")}function u(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Uu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?ra():null}}function ag(n){const{history:e,location:t}=window,i={value:rd(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=n.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:rg()+n+l;try{e[h?"replaceState":"pushState"](c,"",f),s.value=c}catch(m){console.error(m),t[h?"replace":"assign"](f)}}function o(l,c){const h=dt({},e.state,Uu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=dt({},s.value,e.state,{forward:l,scroll:ra()});r(h.current,h,!0);const u=dt({},Uu(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function lg(n){n=J0(n);const e=ag(n),t=og(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=dt({location:"",base:n,go:i,createHref:eg.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function cg(n){return typeof n=="string"||n&&typeof n=="object"}function od(n){return typeof n=="string"||typeof n=="symbol"}const ad=Symbol("");var Nu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Nu||(Nu={}));function qs(n,e){return dt(new Error,{type:n,[ad]:!0},e)}function $n(n,e){return n instanceof Error&&ad in n&&(e==null||!!(n.type&e))}const Fu="[^/]+?",ug={sensitive:!1,strict:!1,start:!0,end:!0},hg=/[.+*?^${}()[\]/\\]/g;function fg(n,e){const t=dt({},ug,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const h=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const f=c[u];let m=40+(t.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(hg,"\\$&"),m+=40;else if(f.type===1){const{value:_,repeatable:x,optional:d,regexp:p}=f;r.push({name:_,repeatable:x,optional:d});const b=p||Fu;if(b!==Fu){m+=10;try{new RegExp(`(${b})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+E.message)}}let M=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(M=d&&c.length<2?`(?:/${M})`:"/"+M),d&&(M+="?"),s+=M,m+=20,d&&(m+=-8),x&&(m+=-20),b===".*"&&(m+=-50)}h.push(m)}i.push(h)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let f=1;f<h.length;f++){const m=h[f]||"",_=r[f-1];u[_.name]=m&&_.repeatable?m.split("/"):m}return u}function l(c){let h="",u=!1;for(const f of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const m of f)if(m.type===0)h+=m.value;else if(m.type===1){const{value:_,repeatable:x,optional:d}=m,p=_ in c?c[_]:"";if(In(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=In(p)?p.join("/"):p;if(!b)if(d)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function dg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ld(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=dg(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Ou(i))return 1;if(Ou(s))return-1}return s.length-i.length}function Ou(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const pg={type:0,value:""},mg=/[a-zA-Z0-9_]/;function gg(n){if(!n)return[[]];if(n==="/")return[[pg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:mg.test(l)?f():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:t=3:h+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function _g(n,e,t){const i=fg(gg(n.path),t),s=dt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vg(n,e){const t=[],i=new Map;e=Hu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,m){const _=!m,x=zu(u);x.aliasOf=m&&m.record;const d=Hu(e,u),p=[x];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of E)p.push(zu(dt({},x,{components:m?m.record.components:x.components,path:F,aliasOf:m?m.record:x})))}let b,M;for(const E of p){const{path:F}=E;if(f&&F[0]!=="/"){const P=f.record.path,R=P[P.length-1]==="/"?"":"/";E.path=f.record.path+(F&&R+F)}if(b=_g(E,f,d),m?m.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),_&&u.name&&!Gu(b)&&o(u.name)),cd(b)&&l(b),x.children){const P=x.children;for(let R=0;R<P.length;R++)r(P[R],b,m&&m.children[R])}m=m||b}return M?()=>{o(M)}:yr}function o(u){if(od(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){const f=Mg(u,t);t.splice(f,0,u),u.record.name&&!Gu(u)&&i.set(u.record.name,u)}function c(u,f){let m,_={},x,d;if("name"in u&&u.name){if(m=i.get(u.name),!m)throw qs(1,{location:u});d=m.record.name,_=dt(Bu(f.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&Bu(u.params,m.keys.map(M=>M.name))),x=m.stringify(_)}else if(u.path!=null)x=u.path,m=t.find(M=>M.re.test(x)),m&&(_=m.parse(x),d=m.record.name);else{if(m=f.name?i.get(f.name):t.find(M=>M.re.test(f.path)),!m)throw qs(1,{location:u,currentLocation:f});d=m.record.name,_=dt({},f.params,u.params),x=m.stringify(_)}const p=[];let b=m;for(;b;)p.unshift(b.record),b=b.parent;return{name:d,path:x,params:_,matched:p,meta:yg(p)}}n.forEach(u=>r(u));function h(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Bu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function zu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:xg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Gu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function yg(n){return n.reduce((e,t)=>dt(e,t.meta),{})}function Hu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Mg(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;ld(n,e[r])<0?i=r:t=r+1}const s=Sg(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Sg(n){let e=n;for(;e=e.parent;)if(cd(e)&&ld(n,e)===0)return e}function cd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Eg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(ed," "),o=r.indexOf("="),a=Ir(o<0?r:r.slice(0,o)),l=o<0?null:Ir(r.slice(o+1));if(a in e){let c=e[a];In(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ku(n){let e="";for(let t in n){const i=n[t];if(t=V0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(In(i)?i.map(r=>r&&xl(r)):[i&&xl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function wg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=In(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const bg=Symbol(""),Vu=Symbol(""),Dc=Symbol(""),ud=Symbol(""),Ml=Symbol("");function rr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function wi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(qs(4,{from:t,to:e})):f instanceof Error?l(f):cg(f)?l(qs(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},h=r(()=>n.call(i&&i.instances[s],e,t,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(f=>l(f))})}function Aa(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Jf(l)){const h=(l.__vccOpts||l)[e];h&&r.push(wi(h,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=I0(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const m=(u.__vccOpts||u)[e];return m&&wi(m,t,i,o,a,s)()}))}}return r}function Wu(n){const e=ai(Dc),t=ai(ud),i=bn(()=>{const l=Os(n.to);return e.resolve(l)}),s=bn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=t.matched;if(!h||!u.length)return-1;const f=u.findIndex(Xs.bind(null,h));if(f>-1)return f;const m=Xu(l[c-2]);return c>1&&Xu(h)===m&&u[u.length-1].path!==m?u.findIndex(Xs.bind(null,l[c-2])):f}),r=bn(()=>s.value>-1&&Cg(t.params,i.value.params)),o=bn(()=>s.value>-1&&s.value===t.matched.length-1&&sd(t.params,i.value.params));function a(l={}){return Rg(l)?e[Os(n.replace)?"replace":"push"](Os(n.to)).catch(yr):Promise.resolve()}return{route:i,href:bn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Tg=Wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wu,setup(n,{slots:e}){const t=Jo(Wu(n)),{options:i}=ai(Dc),s=bn(()=>({[qu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[qu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Kf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Ag=Tg;function Rg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Cg(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!In(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Xu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const qu=(n,e,t)=>n??e??t,Pg=Wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ai(Ml),s=bn(()=>n.route||i.value),r=ai(Vu,0),o=bn(()=>{let c=Os(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=bn(()=>s.value.matched[o.value]);To(Vu,bn(()=>o.value+1)),To(bg,a),To(Ml,s);const l=nt();return Ft(()=>[l.value,a.value,n.name],([c,h,u],[f,m,_])=>{h&&(h.instances[u]=c,m&&m!==h&&c&&c===f&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),c&&h&&(!m||!Xs(h,m)||!f)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,f=u&&u.components[h];if(!f)return Yu(t.default,{Component:f,route:c});const m=u.props[h],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=Kf(f,dt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return Yu(t.default,{Component:d,route:c})||d}}});function Yu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Lg=Pg;function Ig(n){const e=vg(n.routes,n),t=n.parseQuery||Eg,i=n.stringifyQuery||ku,s=n.history,r=rr(),o=rr(),a=rr(),l=kp(mi);let c=mi;Ls&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ba.bind(null,U=>""+U),u=ba.bind(null,X0),f=ba.bind(null,Ir);function m(U,le){let se,ue;return od(U)?(se=e.getRecordMatcher(U),ue=le):ue=U,e.addRoute(ue,se)}function _(U){const le=e.getRecordMatcher(U);le&&e.removeRoute(le)}function x(){return e.getRoutes().map(U=>U.record)}function d(U){return!!e.getRecordMatcher(U)}function p(U,le){if(le=dt({},le||l.value),typeof U=="string"){const T=Ta(t,U,le.path),L=e.resolve({path:T.path},le),D=s.createHref(T.fullPath);return dt(T,L,{params:f(L.params),hash:Ir(T.hash),redirectedFrom:void 0,href:D})}let se;if(U.path!=null)se=dt({},U,{path:Ta(t,U.path,le.path).path});else{const T=dt({},U.params);for(const L in T)T[L]==null&&delete T[L];se=dt({},U,{params:u(T)}),le.params=u(le.params)}const ue=e.resolve(se,le),Ee=U.hash||"";ue.params=h(f(ue.params));const ee=$0(i,dt({},U,{hash:k0(Ee),path:ue.path})),g=s.createHref(ee);return dt({fullPath:ee,hash:Ee,query:i===ku?wg(U.query):U.query||{}},ue,{redirectedFrom:void 0,href:g})}function b(U){return typeof U=="string"?Ta(t,U,l.value.path):dt({},U)}function M(U,le){if(c!==U)return qs(8,{from:le,to:U})}function E(U){return R(U)}function F(U){return E(dt(b(U),{replace:!0}))}function P(U){const le=U.matched[U.matched.length-1];if(le&&le.redirect){const{redirect:se}=le;let ue=typeof se=="function"?se(U):se;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=b(ue):{path:ue},ue.params={}),dt({query:U.query,hash:U.hash,params:ue.path!=null?{}:U.params},ue)}}function R(U,le){const se=c=p(U),ue=l.value,Ee=U.state,ee=U.force,g=U.replace===!0,T=P(se);if(T)return R(dt(b(T),{state:typeof T=="object"?dt({},Ee,T.state):Ee,force:ee,replace:g}),le||se);const L=se;L.redirectedFrom=le;let D;return!ee&&K0(i,ue,se)&&(D=qs(16,{to:L,from:ue}),_e(ue,ue,!0,!1)),(D?Promise.resolve(D):y(L,ue)).catch(I=>$n(I)?$n(I,2)?I:Me(I):X(I,L,ue)).then(I=>{if(I){if($n(I,2))return R(dt({replace:g},b(I.to),{state:typeof I.to=="object"?dt({},Ee,I.to.state):Ee,force:ee}),le||L)}else I=$(L,ue,!0,g,Ee);return w(L,ue,I),I})}function N(U,le){const se=M(U,le);return se?Promise.reject(se):Promise.resolve()}function ne(U){const le=re.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(U):U()}function y(U,le){let se;const[ue,Ee,ee]=Dg(U,le);se=Aa(ue.reverse(),"beforeRouteLeave",U,le);for(const T of ue)T.leaveGuards.forEach(L=>{se.push(wi(L,U,le))});const g=N.bind(null,U,le);return se.push(g),Se(se).then(()=>{se=[];for(const T of r.list())se.push(wi(T,U,le));return se.push(g),Se(se)}).then(()=>{se=Aa(Ee,"beforeRouteUpdate",U,le);for(const T of Ee)T.updateGuards.forEach(L=>{se.push(wi(L,U,le))});return se.push(g),Se(se)}).then(()=>{se=[];for(const T of ee)if(T.beforeEnter)if(In(T.beforeEnter))for(const L of T.beforeEnter)se.push(wi(L,U,le));else se.push(wi(T.beforeEnter,U,le));return se.push(g),Se(se)}).then(()=>(U.matched.forEach(T=>T.enterCallbacks={}),se=Aa(ee,"beforeRouteEnter",U,le,ne),se.push(g),Se(se))).then(()=>{se=[];for(const T of o.list())se.push(wi(T,U,le));return se.push(g),Se(se)}).catch(T=>$n(T,8)?T:Promise.reject(T))}function w(U,le,se){a.list().forEach(ue=>ne(()=>ue(U,le,se)))}function $(U,le,se,ue,Ee){const ee=M(U,le);if(ee)return ee;const g=le===mi,T=Ls?history.state:{};se&&(ue||g?s.replace(U.fullPath,dt({scroll:g&&T&&T.scroll},Ee)):s.push(U.fullPath,Ee)),l.value=U,_e(U,le,se,g),Me()}let k;function Z(){k||(k=s.listen((U,le,se)=>{if(!he.listening)return;const ue=p(U),Ee=P(ue);if(Ee){R(dt(Ee,{replace:!0}),ue).catch(yr);return}c=ue;const ee=l.value;Ls&&ig(Du(ee.fullPath,se.delta),ra()),y(ue,ee).catch(g=>$n(g,12)?g:$n(g,2)?(R(g.to,ue).then(T=>{$n(T,20)&&!se.delta&&se.type===Dr.pop&&s.go(-1,!1)}).catch(yr),Promise.reject()):(se.delta&&s.go(-se.delta,!1),X(g,ue,ee))).then(g=>{g=g||$(ue,ee,!1),g&&(se.delta&&!$n(g,8)?s.go(-se.delta,!1):se.type===Dr.pop&&$n(g,20)&&s.go(-1,!1)),w(ue,ee,g)}).catch(yr)}))}let ae=rr(),H=rr(),Q;function X(U,le,se){Me(U);const ue=H.list();return ue.length?ue.forEach(Ee=>Ee(U,le,se)):console.error(U),Promise.reject(U)}function pe(){return Q&&l.value!==mi?Promise.resolve():new Promise((U,le)=>{ae.add([U,le])})}function Me(U){return Q||(Q=!U,Z(),ae.list().forEach(([le,se])=>U?se(U):le()),ae.reset()),U}function _e(U,le,se,ue){const{scrollBehavior:Ee}=n;if(!Ls||!Ee)return Promise.resolve();const ee=!se&&sg(Du(U.fullPath,0))||(ue||!se)&&history.state&&history.state.scroll||null;return Mf().then(()=>Ee(U,le,ee)).then(g=>g&&ng(g)).catch(g=>X(g,U,le))}const Ae=U=>s.go(U);let Oe;const re=new Set,he={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:d,getRoutes:x,resolve:p,options:n,push:E,replace:F,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:pe,install(U){const le=this;U.component("RouterLink",Ag),U.component("RouterView",Lg),U.config.globalProperties.$router=le,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Os(l)}),Ls&&!Oe&&l.value===mi&&(Oe=!0,E(s.location).catch(Ee=>{}));const se={};for(const Ee in mi)Object.defineProperty(se,Ee,{get:()=>l.value[Ee],enumerable:!0});U.provide(Dc,le),U.provide(ud,gf(se)),U.provide(Ml,l);const ue=U.unmount;re.add(U),U.unmount=function(){re.delete(U),re.size<1&&(c=mi,k&&k(),k=null,l.value=mi,Oe=!1,Q=!1),ue()}}};function Se(U){return U.reduce((le,se)=>le.then(()=>ne(se)),Promise.resolve())}return he}function Dg(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Xs(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Xs(c,l))||s.push(l))}return[t,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="169",Ug=0,$u=1,Ng=2,hd=1,Fg=2,ti=3,Ci=0,nn=1,st=2,Ti=0,Gs=1,Ku=2,ju=3,Zu=4,Og=5,Ki=100,Bg=101,zg=102,Gg=103,Hg=104,kg=200,Vg=201,Wg=202,Xg=203,Sl=204,El=205,qg=206,Yg=207,$g=208,Kg=209,jg=210,Zg=211,Jg=212,Qg=213,e_=214,wl=0,bl=1,Tl=2,Ys=3,Al=4,Rl=5,Cl=6,Pl=7,fd=0,t_=1,n_=2,Ai=0,i_=1,s_=2,r_=3,o_=4,a_=5,l_=6,c_=7,dd=300,$s=301,Ks=302,Ur=303,Ll=304,oa=306,Ot=1e3,Zi=1001,Il=1002,vn=1003,u_=1004,to=1005,Tn=1006,Ra=1007,Ji=1008,li=1009,pd=1010,md=1011,Nr=1012,Nc=1013,ts=1014,si=1015,Vr=1016,Fc=1017,Oc=1018,js=1020,gd=35902,_d=1021,vd=1022,Rn=1023,xd=1024,yd=1025,Hs=1026,Zs=1027,Md=1028,Bc=1029,Sd=1030,zc=1031,Gc=1033,Co=33776,Po=33777,Lo=33778,Io=33779,Dl=35840,Ul=35841,Nl=35842,Fl=35843,Ol=36196,Bl=37492,zl=37496,Gl=37808,Hl=37809,kl=37810,Vl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,$l=37816,Kl=37817,jl=37818,Zl=37819,Jl=37820,Ql=37821,Do=36492,ec=36494,tc=36495,Ed=36283,nc=36284,ic=36285,sc=36286,h_=3200,f_=3201,wd=0,d_=1,bi="",Fn="srgb",Ni="srgb-linear",Hc="display-p3",aa="display-p3-linear",ko="linear",vt="srgb",Vo="rec709",Wo="p3",gs=7680,Ju=519,p_=512,m_=513,g_=514,bd=515,__=516,v_=517,x_=518,y_=519,Qu=35044,eh="300 es",ri=2e3,Xo=2001;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const Sr=Math.PI/180,Fr=180/Math.PI;function rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function kc(n,e){return(n%e+e)%e}function M_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function S_(n,e,t){return n!==e?(t-n)/(e-n):0}function Er(n,e,t){return(1-t)*n+t*e}function E_(n,e,t,i){return Er(n,e,1-Math.exp(-t*i))}function w_(n,e=1){return e-Math.abs(kc(n,e*2)-e)}function b_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function T_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function A_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function R_(n,e){return n+Math.random()*(e-n)}function C_(n){return n*(.5-Math.random())}function P_(n){n!==void 0&&(th=n);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L_(n){return n*Sr}function I_(n){return n*Fr}function D_(n){return(n&n-1)===0&&n!==0}function U_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function N_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function F_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const it={DEG2RAD:Sr,RAD2DEG:Fr,generateUUID:rs,clamp:Ut,euclideanModulo:kc,mapLinear:M_,inverseLerp:S_,lerp:Er,damp:E_,pingpong:w_,smoothstep:b_,smootherstep:T_,randInt:A_,randFloat:R_,randFloatSpread:C_,seededRandom:P_,degToRad:L_,radToDeg:I_,isPowerOfTwo:D_,ceilPowerOfTwo:U_,floorPowerOfTwo:N_,setQuaternionFromProperEuler:F_,normalize:jt,denormalize:Is};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],_=i[8],x=s[0],d=s[3],p=s[6],b=s[1],M=s[4],E=s[7],F=s[2],P=s[5],R=s[8];return r[0]=o*x+a*b+l*F,r[3]=o*d+a*M+l*P,r[6]=o*p+a*E+l*R,r[1]=c*x+h*b+u*F,r[4]=c*d+h*M+u*P,r[7]=c*p+h*E+u*R,r[2]=f*x+m*b+_*F,r[5]=f*d+m*M+_*P,r[8]=f*p+m*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=t*u+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Je;function Td(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function O_(){const n=Or("canvas");return n.style.display="block",n}const nh={};function Uo(n){n in nh||(nh[n]=!0,console.warn(n))}function B_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function z_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function G_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ih=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),or={[Ni]:{transfer:ko,primaries:Vo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Fn]:{transfer:vt,primaries:Vo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[aa]:{transfer:ko,primaries:Wo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih)},[Hc]:{transfer:vt,primaries:Wo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih).convertLinearToSRGB()}},H_=new Set([Ni,aa]),lt={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!H_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=or[e].toReference,s=or[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return or[n].primaries},getTransfer:function(n){return n===bi?ko:or[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(or[e].luminanceCoefficients)}};function ks(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class k_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Or("canvas")),_s.width=e.width,_s.height=e.height;const i=_s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ks(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ks(t[i]/255)*255):t[i]=ks(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V_=0;class Ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(La(s[o].image)):r.push(La(s[o]))}else r=La(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function La(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?k_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let W_=0;class en extends er{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=Zi,s=Zi,r=Tn,o=Ji,a=Rn,l=li,c=en.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=rs(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ot:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ot:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=dd;en.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],x=l[2],d=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(m+1)/2,F=(p+1)/2,P=(h+f)/4,R=(u+x)/4,N=(_+d)/4;return M>E&&M>F?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=R/i):E>F?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=P/s,r=N/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=R/r,s=N/r),this.set(i,s,r,t),this}let b=Math.sqrt((d-_)*(d-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(d-_)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class X_ extends er{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ad(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends X_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rd extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class q_ extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==f||c!==m||h!==_){let d=1-a;const p=l*f+c*m+h*_+u*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const F=Math.sqrt(M),P=Math.atan2(F,p*b);d=Math.sin(d*P)/F,a=Math.sin(a*P)/F}const E=a*b;if(l=l*d+f*E,c=c*d+m*E,h=h*d+_*E,u=u*d+x*E,d===1-a){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*m-c*f,e[t+1]=l*_+h*f+c*u-a*m,e[t+2]=c*_+h*m+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new W,rh=new Wr;class Xr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),io.subVectors(this.max,ar),vs.subVectors(e.a,ar),xs.subVectors(e.b,ar),ys.subVectors(e.c,ar),gi.subVectors(xs,vs),_i.subVectors(ys,xs),Bi.subVectors(vs,ys);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Bi.z,Bi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Bi.z,0,-Bi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Bi.y,Bi.x,0];return!Da(t,vs,xs,ys,io)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,vs,xs,ys,io))?!1:(so.crossVectors(gi,_i),t=[so.x,so.y,so.z],Da(t,vs,xs,ys,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new W,new W,new W,new W,new W,new W,new W,new W],Sn=new W,no=new Xr,vs=new W,xs=new W,ys=new W,gi=new W,_i=new W,Bi=new W,ar=new W,io=new W,so=new W,zi=new W;function Da(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zi.fromArray(n,r);const a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),h=i.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Y_=new Xr,lr=new W,Ua=new W;class Vc{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Y_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(Ua)),this.expandByPoint(lr.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new W,Na=new W,ro=new W,vi=new W,Fa=new W,oo=new W,Oa=new W;class $_{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Na.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Na);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ro),a=vi.dot(this.direction),l=-vi.dot(ro),c=vi.lengthSq(),h=Math.abs(1-o*o);let u,f,m,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Na).addScaledVector(ro,f),m}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){Fa.subVectors(t,e),oo.subVectors(i,e),Oa.crossVectors(Fa,oo);let o=this.direction.dot(Oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(oo.crossVectors(vi,oo));if(l<0)return null;const c=a*this.direction.dot(Fa.cross(vi));if(c<0||l+c>o)return null;const h=-a*vi.dot(Oa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,s,r,o,a,l,c,h,u,f,m,_,x,d){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,m,_,x,d)}set(e,t,i,s,r,o,a,l,c,h,u,f,m,_,x,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=_,p[11]=x,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,_=c*h,x=c*u;t[0]=f+x*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,_=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+_,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K_,e,j_)}lookAt(e,t,i){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),xi.crossVectors(i,ln),xi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),xi.crossVectors(i,ln)),xi.normalize(),ao.crossVectors(ln,xi),s[0]=xi.x,s[4]=ao.x,s[8]=ln.x,s[1]=xi.y,s[5]=ao.y,s[9]=ln.y,s[2]=xi.z,s[6]=ao.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],_=i[2],x=i[6],d=i[10],p=i[14],b=i[3],M=i[7],E=i[11],F=i[15],P=s[0],R=s[4],N=s[8],ne=s[12],y=s[1],w=s[5],$=s[9],k=s[13],Z=s[2],ae=s[6],H=s[10],Q=s[14],X=s[3],pe=s[7],Me=s[11],_e=s[15];return r[0]=o*P+a*y+l*Z+c*X,r[4]=o*R+a*w+l*ae+c*pe,r[8]=o*N+a*$+l*H+c*Me,r[12]=o*ne+a*k+l*Q+c*_e,r[1]=h*P+u*y+f*Z+m*X,r[5]=h*R+u*w+f*ae+m*pe,r[9]=h*N+u*$+f*H+m*Me,r[13]=h*ne+u*k+f*Q+m*_e,r[2]=_*P+x*y+d*Z+p*X,r[6]=_*R+x*w+d*ae+p*pe,r[10]=_*N+x*$+d*H+p*Me,r[14]=_*ne+x*k+d*Q+p*_e,r[3]=b*P+M*y+E*Z+F*X,r[7]=b*R+M*w+E*ae+F*pe,r[11]=b*N+M*$+E*H+F*Me,r[15]=b*ne+M*k+E*Q+F*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],_=e[3],x=e[7],d=e[11],p=e[15];return _*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*m-i*l*m)+x*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+d*(+t*c*u-t*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],_=e[12],x=e[13],d=e[14],p=e[15],b=u*d*c-x*f*c+x*l*m-a*d*m-u*l*p+a*f*p,M=_*f*c-h*d*c-_*l*m+o*d*m+h*l*p-o*f*p,E=h*x*c-_*u*c+_*a*m-o*x*m-h*a*p+o*u*p,F=_*u*l-h*x*l-_*a*f+o*x*f+h*a*d-o*u*d,P=t*b+i*M+s*E+r*F;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=b*R,e[1]=(x*f*r-u*d*r-x*s*m+i*d*m+u*s*p-i*f*p)*R,e[2]=(a*d*r-x*l*r+x*s*c-i*d*c-a*s*p+i*l*p)*R,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*m-i*l*m)*R,e[4]=M*R,e[5]=(h*d*r-_*f*r+_*s*m-t*d*m-h*s*p+t*f*p)*R,e[6]=(_*l*r-o*d*r-_*s*c+t*d*c+o*s*p-t*l*p)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*R,e[8]=E*R,e[9]=(_*u*r-h*x*r-_*i*m+t*x*m+h*i*p-t*u*p)*R,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*m-t*a*m)*R,e[12]=F*R,e[13]=(h*x*s-_*u*s+_*i*f-t*x*f-h*i*d+t*u*d)*R,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*d-t*a*d)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,_=r*u,x=o*h,d=o*u,p=a*u,b=l*c,M=l*h,E=l*u,F=i.x,P=i.y,R=i.z;return s[0]=(1-(x+p))*F,s[1]=(m+E)*F,s[2]=(_-M)*F,s[3]=0,s[4]=(m-E)*P,s[5]=(1-(f+p))*P,s[6]=(d+b)*P,s[7]=0,s[8]=(_+M)*R,s[9]=(d-b)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ms.set(s[0],s[1],s[2]).length();const o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const c=1/r,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ri){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(a===ri)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ri){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,m=(i+s)*h;let _,x;if(a===ri)_=(o+r)*u,x=-2*u;else if(a===Xo)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ms=new W,En=new xt,K_=new W(0,0,0),j_=new W(1,1,1),xi=new W,ao=new W,ln=new W,oh=new xt,ah=new Wr;class kn{constructor(e=0,t=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z_=0;const lh=new W,Ss=new Wr,Zn=new xt,lo=new W,cr=new W,J_=new W,Q_=new Wr,ch=new W(1,0,0),uh=new W(0,1,0),hh=new W(0,0,1),fh={type:"added"},ev={type:"removed"},Es={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Yt extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new W,t=new kn,i=new Wr,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Je}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lo.copy(e):lo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(cr,lo,this.up):Zn.lookAt(lo,cr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ev),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,J_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new W(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new W,Jn=new W,za=new W,Qn=new W,ws=new W,bs=new W,dh=new W,Ga=new W,Ha=new W,ka=new W,Va=new pt,Wa=new pt,Xa=new pt;class An{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Jn.subVectors(i,t),za.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Jn),l=wn.dot(za),c=Jn.dot(Jn),h=Jn.dot(za),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Va.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Va.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,i),Xa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Va,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Jn.subVectors(e,t),wn.cross(Jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ws.subVectors(s,i),bs.subVectors(r,i),Ga.subVectors(e,i);const l=ws.dot(Ga),c=bs.dot(Ga);if(l<=0&&c<=0)return t.copy(i);Ha.subVectors(e,s);const h=ws.dot(Ha),u=bs.dot(Ha);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ws,o);ka.subVectors(e,r);const m=ws.dot(ka),_=bs.dot(ka);if(_>=0&&m<=_)return t.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(bs,a);const d=h*_-m*u;if(d<=0&&u-h>=0&&m-_>=0)return dh.subVectors(r,s),a=(u-h)/(u-h+(m-_)),t.copy(s).addScaledVector(dh,a);const p=1/(d+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(ws,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},co={h:0,s:0,l:0};function qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=kc(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=Fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=Pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return lt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ut(Wt.r*255,0,255))*65536+Math.round(Ut(Wt.g*255,0,255))*256+Math.round(Ut(Wt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Fn){lt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(co);const i=Er(yi.h,co.h,t),s=Er(yi.s,co.s,t),r=Er(yi.l,co.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new tt;tt.NAMES=Pd;let tv=0;class qr extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Gs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=El,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sn extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new W,uo=new Ie;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}}class Ld extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Id extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nv=0;const _n=new xt,Ya=new Yt,Ts=new W,cn=new Xr,ur=new Xr,It=new W;class yn extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?Id:Ld)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(cn.min,ur.min),cn.expandByPoint(It),It.addVectors(cn.max,ur.max),cn.expandByPoint(It)):(cn.expandByPoint(ur.min),cn.expandByPoint(ur.max))}cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),It.add(Ts)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new W,l[N]=new W;const c=new W,h=new W,u=new W,f=new Ie,m=new Ie,_=new Ie,x=new W,d=new W;function p(N,ne,y){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,ne),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,ne),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(f),_.sub(f);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(w),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(w),a[N].add(x),a[ne].add(x),a[y].add(x),l[N].add(d),l[ne].add(d),l[y].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,ne=b.length;N<ne;++N){const y=b[N],w=y.start,$=y.count;for(let k=w,Z=w+$;k<Z;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new W,E=new W,F=new W,P=new W;function R(N){F.fromBufferAttribute(s,N),P.copy(F);const ne=a[N];M.copy(ne),M.sub(F.multiplyScalar(F.dot(ne))).normalize(),E.crossVectors(P,ne);const w=E.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,w)}for(let N=0,ne=b.length;N<ne;++N){const y=b[N],w=y.start,$=y.count;for(let k=w,Z=w+$;k<Z;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,h=new W,u=new W;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,d=l.length;x<d;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let p=0;p<h;p++)f[_++]=c[m++]}return new Gn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new xt,Gi=new $_,ho=new Vc,mh=new W,fo=new W,po=new W,mo=new W,$a=new W,go=new W,gh=new W,_o=new W;class z extends Yt{constructor(e=new yn,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&($a.fromBufferAttribute(u,e),o?go.addScaledVector($a,h):go.addScaledVector($a.sub(t),h))}t.add(go)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(ho.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ho,mh)===null||Gi.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(ph),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],p=o[d.materialIndex],b=Math.max(d.start,m.start),M=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let E=b,F=M;E<F;E+=3){const P=a.getX(E),R=a.getX(E+1),N=a.getX(E+2);s=vo(this,p,e,i,c,h,u,P,R,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const b=a.getX(d),M=a.getX(d+1),E=a.getX(d+2);s=vo(this,o,e,i,c,h,u,b,M,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],p=o[d.materialIndex],b=Math.max(d.start,m.start),M=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let E=b,F=M;E<F;E+=3){const P=E,R=E+1,N=E+2;s=vo(this,p,e,i,c,h,u,P,R,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const b=d,M=d+1,E=d+2;s=vo(this,o,e,i,c,h,u,b,M,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function iv(n,e,t,i,s,r,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;_o.copy(a),_o.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_o);return c<t.near||c>t.far?null:{distance:c,point:_o.clone(),object:n}}function vo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,fo),n.getVertexPosition(l,po),n.getVertexPosition(c,mo);const h=iv(n,e,t,i,fo,po,mo,gh);if(h){const u=new W;An.getBarycoord(gh,fo,po,mo,u),s&&(h.uv=An.getInterpolatedAttribute(s,a,l,c,u,new Ie)),r&&(h.uv1=An.getInterpolatedAttribute(r,a,l,c,u,new Ie)),o&&(h.normal=An.getInterpolatedAttribute(o,a,l,c,u,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};An.getNormal(fo,po,mo,f.normal),h.face=f,h.barycoord=u}return h}class os extends yn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function _(x,d,p,b,M,E,F,P,R,N,ne){const y=E/R,w=F/N,$=E/2,k=F/2,Z=P/2,ae=R+1,H=N+1;let Q=0,X=0;const pe=new W;for(let Me=0;Me<H;Me++){const _e=Me*w-k;for(let Ae=0;Ae<ae;Ae++){const Oe=Ae*y-$;pe[x]=Oe*b,pe[d]=_e*M,pe[p]=Z,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[d]=0,pe[p]=P>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Ae/R),u.push(1-Me/N),Q+=1}}for(let Me=0;Me<N;Me++)for(let _e=0;_e<R;_e++){const Ae=f+_e+ae*Me,Oe=f+_e+ae*(Me+1),re=f+(_e+1)+ae*(Me+1),he=f+(_e+1)+ae*Me;l.push(Ae,Oe,he),l.push(Oe,re,he),X+=6}a.addGroup(m,X,ne),m+=X,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Js(n[t]);for(const s in i)e[s]=i[s]}return e}function sv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const rv={clone:Js,merge:Zt};var ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ov,this.fragmentShader=av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ud extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new W,_h=new Ie,vh=new Ie;class Ct extends Ud{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,_h,vh),t.subVectors(vh,_h)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Rs=1;class lv extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ct(As,Rs,e,t);s.layers=this.layers,this.add(s);const r=new Ct(As,Rs,e,t);r.layers=this.layers,this.add(r);const o=new Ct(As,Rs,e,t);o.layers=this.layers,this.add(o);const a=new Ct(As,Rs,e,t);a.layers=this.layers,this.add(a);const l=new Ct(As,Rs,e,t);l.layers=this.layers,this.add(l);const c=new Ct(As,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Nd extends en{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cv extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Nd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new os(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Ti});r.uniforms.tEquirect.value=t;const o=new z(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Tn),new lv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ka=new W,uv=new W,hv=new Je;class Yi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ka.subVectors(i,t).cross(uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hv.getNormalMatrix(e),s=this.coplanarPoint(Ka).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Vc,xo=new W;class Wc{constructor(e=new Yi,t=new Yi,i=new Yi,s=new Yi,r=new Yi,o=new Yi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],_=s[9],x=s[10],d=s[11],p=s[12],b=s[13],M=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,d-m,E-p).normalize(),i[1].setComponents(l+r,f+c,d+m,E+p).normalize(),i[2].setComponents(l+o,f+h,d+_,E+b).normalize(),i[3].setComponents(l-o,f-h,d-_,E-b).normalize(),i[4].setComponents(l-a,f-u,d-x,E-M).normalize(),t===ri)i[5].setComponents(l+a,f+u,d+x,E+M).normalize();else if(t===Xo)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(xo.x=s.normal.x>0?e.max.x:e.min.x,xo.y=s.normal.y>0?e.max.y:e.min.y,xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fv(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],x=u[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const x=u[m];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class la extends yn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],_=[],x=[],d=[];for(let p=0;p<h;p++){const b=p*f-o;for(let M=0;M<c;M++){const E=M*u-r;_.push(E,-b,0),x.push(0,0,1),d.push(M/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,E=b+c*(p+1),F=b+1+c*(p+1),P=b+1+c*p;m.push(M,E,P),m.push(E,F,P)}this.setIndex(m),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}var dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pv=`#ifdef USE_ALPHAHASH
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
#endif`,mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xv=`#ifdef USE_AOMAP
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
#endif`,yv=`#ifdef USE_AOMAP
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
#endif`,Sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ev=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tv=`#ifdef USE_IRIDESCENCE
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
#endif`,Av=`#ifdef USE_BUMPMAP
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
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fv=`#define PI 3.141592653589793
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
#endif`,Bv=`vec3 transformedNormal = objectNormal;
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
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wv=`
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
}`,Xv=`#ifdef USE_ENVMAP
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
#endif`,qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kv=`#ifdef USE_ENVMAP
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
#endif`,jv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
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
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,hx=`struct PhysicalMaterial {
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
}`,fx=`
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gx=`#ifdef OPAQUE
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
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dy=`uniform sampler2D t2D;
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
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
}`,xy=`#if DEPTH_PACKING == 3200
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
}`,yy=`#define DISTANCE
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
}`,My=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`uniform float scale;
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
}`,by=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#define LAMBERT
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define MATCAP
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
}`,Ly=`#define MATCAP
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
}`,Iy=`#define NORMAL
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
}`,Dy=`#define NORMAL
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
}`,Uy=`#define PHONG
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
}`,Ny=`#define PHONG
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
}`,Fy=`#define STANDARD
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
}`,Oy=`#define STANDARD
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
}`,By=`#define TOON
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
}`,zy=`#define TOON
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
}`,Gy=`uniform float size;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,ky=`#include <common>
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
}`,Vy=`uniform vec3 color;
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
}`,Wy=`uniform float rotation;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:dv,alphahash_pars_fragment:pv,alphamap_fragment:mv,alphamap_pars_fragment:gv,alphatest_fragment:_v,alphatest_pars_fragment:vv,aomap_fragment:xv,aomap_pars_fragment:yv,batching_pars_vertex:Mv,batching_vertex:Sv,begin_vertex:Ev,beginnormal_vertex:wv,bsdfs:bv,iridescence_fragment:Tv,bumpmap_pars_fragment:Av,clipping_planes_fragment:Rv,clipping_planes_pars_fragment:Cv,clipping_planes_pars_vertex:Pv,clipping_planes_vertex:Lv,color_fragment:Iv,color_pars_fragment:Dv,color_pars_vertex:Uv,color_vertex:Nv,common:Fv,cube_uv_reflection_fragment:Ov,defaultnormal_vertex:Bv,displacementmap_pars_vertex:zv,displacementmap_vertex:Gv,emissivemap_fragment:Hv,emissivemap_pars_fragment:kv,colorspace_fragment:Vv,colorspace_pars_fragment:Wv,envmap_fragment:Xv,envmap_common_pars_fragment:qv,envmap_pars_fragment:Yv,envmap_pars_vertex:$v,envmap_physical_pars_fragment:rx,envmap_vertex:Kv,fog_vertex:jv,fog_pars_vertex:Zv,fog_fragment:Jv,fog_pars_fragment:Qv,gradientmap_pars_fragment:ex,lightmap_pars_fragment:tx,lights_lambert_fragment:nx,lights_lambert_pars_fragment:ix,lights_pars_begin:sx,lights_toon_fragment:ox,lights_toon_pars_fragment:ax,lights_phong_fragment:lx,lights_phong_pars_fragment:cx,lights_physical_fragment:ux,lights_physical_pars_fragment:hx,lights_fragment_begin:fx,lights_fragment_maps:dx,lights_fragment_end:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:vx,map_fragment:xx,map_pars_fragment:yx,map_particle_fragment:Mx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:wx,morphinstance_vertex:bx,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Lx,normal_pars_fragment:Ix,normal_pars_vertex:Dx,normal_vertex:Ux,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:zx,opaque_fragment:Gx,packing:Hx,premultiplied_alpha_fragment:kx,project_vertex:Vx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:$x,shadowmap_pars_vertex:Kx,shadowmap_vertex:jx,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:ey,skinnormal_vertex:ty,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:sy,tonemapping_pars_fragment:ry,transmission_fragment:oy,transmission_pars_fragment:ay,uv_pars_fragment:ly,uv_pars_vertex:cy,uv_vertex:uy,worldpos_vertex:hy,background_vert:fy,background_frag:dy,backgroundCube_vert:py,backgroundCube_frag:my,cube_vert:gy,cube_frag:_y,depth_vert:vy,depth_frag:xy,distanceRGBA_vert:yy,distanceRGBA_frag:My,equirect_vert:Sy,equirect_frag:Ey,linedashed_vert:wy,linedashed_frag:by,meshbasic_vert:Ty,meshbasic_frag:Ay,meshlambert_vert:Ry,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Ly,meshnormal_vert:Iy,meshnormal_frag:Dy,meshphong_vert:Uy,meshphong_frag:Ny,meshphysical_vert:Fy,meshphysical_frag:Oy,meshtoon_vert:By,meshtoon_frag:zy,points_vert:Gy,points_frag:Hy,shadow_vert:ky,shadow_frag:Vy,sprite_vert:Wy,sprite_frag:Xy},Le={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Bn={basic:{uniforms:Zt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([Le.points,Le.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([Le.common,Le.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([Le.sprite,Le.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Zt([Le.common,Le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Zt([Le.lights,Le.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Bn.physical={uniforms:Zt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const yo={r:0,b:0,g:0},ki=new kn,qy=new xt;function Yy(n,e,t,i,s,r,o){const a=new tt(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const E=_(b);E===null?p(a,l):E&&E.isColor&&(p(E,1),M=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(b,M){const E=_(M);E&&(E.isCubeTexture||E.mapping===oa)?(h===void 0&&(h=new z(new os(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Js(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(M.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(ki)),h.material.toneMapped=lt.getTransfer(E.colorSpace)!==vt,(u!==E||f!==E.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new z(new la(2,2),new ci({name:"BackgroundMaterial",uniforms:Js(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=lt.getTransfer(E.colorSpace)!==vt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(yo,Dd(n)),i.buffers.color.setClear(yo.r,yo.g,yo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:d}}function $y(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,w,$,k,Z){let ae=!1;const H=u(k,$,w);r!==H&&(r=H,c(r.object)),ae=m(y,k,$,Z),ae&&_(y,k,$,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,E(y,w,$,k),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,w,$){const k=$.wireframe===!0;let Z=i[y.id];Z===void 0&&(Z={},i[y.id]=Z);let ae=Z[w.id];ae===void 0&&(ae={},Z[w.id]=ae);let H=ae[k];return H===void 0&&(H=f(l()),ae[k]=H),H}function f(y){const w=[],$=[],k=[];for(let Z=0;Z<t;Z++)w[Z]=0,$[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:$,attributeDivisors:k,object:y,attributes:{},index:null}}function m(y,w,$,k){const Z=r.attributes,ae=w.attributes;let H=0;const Q=$.getAttributes();for(const X in Q)if(Q[X].location>=0){const Me=Z[X];let _e=ae[X];if(_e===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),Me===void 0||Me.attribute!==_e||_e&&Me.data!==_e.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function _(y,w,$,k){const Z={},ae=w.attributes;let H=0;const Q=$.getAttributes();for(const X in Q)if(Q[X].location>=0){let Me=ae[X];Me===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor));const _e={};_e.attribute=Me,Me&&Me.data&&(_e.data=Me.data),Z[X]=_e,H++}r.attributes=Z,r.attributesNum=H,r.index=k}function x(){const y=r.newAttributes;for(let w=0,$=y.length;w<$;w++)y[w]=0}function d(y){p(y,0)}function p(y,w){const $=r.newAttributes,k=r.enabledAttributes,Z=r.attributeDivisors;$[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),Z[y]!==w&&(n.vertexAttribDivisor(y,w),Z[y]=w)}function b(){const y=r.newAttributes,w=r.enabledAttributes;for(let $=0,k=w.length;$<k;$++)w[$]!==y[$]&&(n.disableVertexAttribArray($),w[$]=0)}function M(y,w,$,k,Z,ae,H){H===!0?n.vertexAttribIPointer(y,w,$,Z,ae):n.vertexAttribPointer(y,w,$,k,Z,ae)}function E(y,w,$,k){x();const Z=k.attributes,ae=$.getAttributes(),H=w.defaultAttributeValues;for(const Q in ae){const X=ae[Q];if(X.location>=0){let pe=Z[Q];if(pe===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),pe!==void 0){const Me=pe.normalized,_e=pe.itemSize,Ae=e.get(pe);if(Ae===void 0)continue;const Oe=Ae.buffer,re=Ae.type,he=Ae.bytesPerElement,Se=re===n.INT||re===n.UNSIGNED_INT||pe.gpuType===Nc;if(pe.isInterleavedBufferAttribute){const U=pe.data,le=U.stride,se=pe.offset;if(U.isInstancedInterleavedBuffer){for(let ue=0;ue<X.locationSize;ue++)p(X.location+ue,U.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ue=0;ue<X.locationSize;ue++)d(X.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ue=0;ue<X.locationSize;ue++)M(X.location+ue,_e/X.locationSize,re,Me,le*he,(se+_e/X.locationSize*ue)*he,Se)}else{if(pe.isInstancedBufferAttribute){for(let U=0;U<X.locationSize;U++)p(X.location+U,pe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let U=0;U<X.locationSize;U++)d(X.location+U);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let U=0;U<X.locationSize;U++)M(X.location+U,_e/X.locationSize,re,Me,_e*he,_e/X.locationSize*U*he,Se)}}else if(H!==void 0){const Me=H[Q];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(X.location,Me);break;case 3:n.vertexAttrib3fv(X.location,Me);break;case 4:n.vertexAttrib4fv(X.location,Me);break;default:n.vertexAttrib1fv(X.location,Me)}}}}b()}function F(){N();for(const y in i){const w=i[y];for(const $ in w){const k=w[$];for(const Z in k)h(k[Z].object),delete k[Z];delete w[$]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const $ in w){const k=w[$];for(const Z in k)h(k[Z].object),delete k[Z];delete w[$]}delete i[y.id]}function R(y){for(const w in i){const $=i[w];if($[y.id]===void 0)continue;const k=$[y.id];for(const Z in k)h(k[Z].object),delete k[Z];delete $[y.id]}}function N(){ne(),o=!0,r!==s&&(r=s,c(r.object))}function ne(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:ne,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:d,disableUnusedAttributes:b}}function Ky(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];t.update(m,i,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<f.length;x++)t.update(_,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===Vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==li&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==si&&!N)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:F,maxSamples:P}}function Zy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Yi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{const b=r?0:i,M=b*4;let E=p.clippingState||null;l.value=E,E=h(_,f,M,m);for(let F=0;F!==M;++F)E[F]=t[F];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,_){const x=u!==null?u.length:0;let d=null;if(x!==0){if(d=l.value,_!==!0||d===null){const p=m+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<p)&&(d=new Float32Array(p));for(let M=0,E=m;M!==x;++M,E+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function Jy(n){let e=new WeakMap;function t(o,a){return a===Ur?o.mapping=$s:a===Ll&&(o.mapping=Ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ur||a===Ll)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Od extends Ud{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Us=4,xh=[.125,.215,.35,.446,.526,.582],ji=20,ja=new Od,yh=new tt;let Za=null,Ja=0,Qa=0,el=!1;const $i=(1+Math.sqrt(5))/2,Cs=1/$i,Mh=[new W(-$i,Cs,0),new W($i,Cs,0),new W(-Cs,0,$i),new W(Cs,0,$i),new W(0,$i,-Cs),new W(0,$i,Cs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ja,Qa),this._renderer.xr.enabled=el,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Vr,format:Rn,colorSpace:Ni,depthBuffer:!1},s=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qy(r)),this._blurMaterial=eM(r,e,t)}return s}_compileMaterial(e){const t=new z(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,i,s){const a=new Ct(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yh),h.toneMapping=Ai,h.autoClear=!1;const m=new sn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new z(new os,m);let x=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,x=!0):(m.color.copy(yh),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Mo(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===$s||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Mo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ja)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mh[(s-r-1)%Mh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new z(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ji-1),x=r/_,d=isFinite(r)?1+Math.floor(h*x):ji;d>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ji}`);const p=[];let b=0;for(let R=0;R<ji;++R){const N=R/x,ne=Math.exp(-N*N/2);p.push(ne),R===0?b+=ne:R<d&&(b+=2*ne)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const E=this._sizeLods[s],F=3*E*(s>M-Us?s-M+Us:0),P=4*(this._cubeSize-E);Mo(t,F,P,3*E,2*E),l.setRenderTarget(t),l.render(u,ja)}}function Qy(n){const e=[],t=[],i=[];let s=n;const r=n-Us+1+xh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Us?l=xh[o-n+Us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,x=3,d=2,p=1,b=new Float32Array(x*_*m),M=new Float32Array(d*_*m),E=new Float32Array(p*_*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,N=P>2?0:-1,ne=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];b.set(ne,x*_*P),M.set(f,d*_*P);const y=[P,P,P,P,P,P];E.set(y,p*_*P)}const F=new yn;F.setAttribute("position",new Gn(b,x)),F.setAttribute("uv",new Gn(M,d)),F.setAttribute("faceIndex",new Gn(E,p)),e.push(F),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eh(n,e,t){const i=new ns(n,e,t);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function eM(n,e,t){const i=new Float32Array(ji),s=new W(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function wh(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function bh(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function tM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ur||l===Ll,h=l===$s||l===Ks;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Sh(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Sh(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Uo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function iM(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let d=0,p=x.length;d<p;d++)e.remove(x[d])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const x=m[_];for(let d=0,p=x.length;d<p;d++)e.update(x[d],n.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let M=0,E=b.length;M<E;M+=3){const F=b[M+0],P=b[M+1],R=b[M+2];f.push(F,P,P,R,R,F)}}else if(_!==void 0){const b=_.array;x=_.version;for(let M=0,E=b.length/3-1;M<E;M+=3){const F=M+0,P=M+1,R=M+2;f.push(F,P,P,R,R,F)}}else return;const d=new(Td(f)?Id:Ld)(f,1);d.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,d)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),t.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,f*o,_),t.update(m,i,_))}function h(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,_);let d=0;for(let p=0;p<_;p++)d+=m[p];t.update(d,i,1)}function u(f,m,_,x){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/o,m[p],x[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,x,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b];for(let b=0;b<x.length;b++)t.update(p,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function oM(n,e,t){const i=new WeakMap,s=new pt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),d===!0&&(E=3);let F=a.attributes.position.count*E,P=1;F>e.maxTextureSize&&(P=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*P*4*u),N=new Rd(R,F,P,u);N.type=si,N.needsUpdate=!0;const ne=E*4;for(let w=0;w<u;w++){const $=p[w],k=b[w],Z=M[w],ae=F*P*4*w;for(let H=0;H<$.count;H++){const Q=H*ne;_===!0&&(s.fromBufferAttribute($,H),R[ae+Q+0]=s.x,R[ae+Q+1]=s.y,R[ae+Q+2]=s.z,R[ae+Q+3]=0),x===!0&&(s.fromBufferAttribute(k,H),R[ae+Q+4]=s.x,R[ae+Q+5]=s.y,R[ae+Q+6]=s.z,R[ae+Q+7]=0),d===!0&&(s.fromBufferAttribute(Z,H),R[ae+Q+8]=s.x,R[ae+Q+9]=s.y,R[ae+Q+10]=s.z,R[ae+Q+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:N,size:new Ie(F,P)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function aM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Bd extends en{constructor(e,t,i,s,r,o,a,l,c,h=Hs){if(h!==Hs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Hs&&(i=ts),i===void 0&&h===Zs&&(i=js),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zd=new en,Th=new Bd(1,1),Gd=new Rd,Hd=new q_,kd=new Nd,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ca(n,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function fM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),Lt(t,i)}}function dM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),Lt(t,i)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Lt(t,i)}}function mM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function xM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function EM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=bd,r=Th):r=zd,t.setTexture2D(e||r,s)}function wM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hd,s)}function bM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||kd,s)}function TM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gd,s)}function AM(n){switch(n){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return hM;case 35674:return fM;case 35675:return dM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return yM;case 36295:return MM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return TM}}function RM(n,e){n.uniform1fv(this.addr,e)}function CM(n,e){const t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function PM(n,e){const t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function LM(n,e){const t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function IM(n,e){const t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function DM(n,e){const t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function UM(n,e){const t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function NM(n,e){n.uniform1iv(this.addr,e)}function FM(n,e){n.uniform2iv(this.addr,e)}function OM(n,e){n.uniform3iv(this.addr,e)}function BM(n,e){n.uniform4iv(this.addr,e)}function zM(n,e){n.uniform1uiv(this.addr,e)}function GM(n,e){n.uniform2uiv(this.addr,e)}function HM(n,e){n.uniform3uiv(this.addr,e)}function kM(n,e){n.uniform4uiv(this.addr,e)}function VM(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zd,r[o])}function WM(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hd,r[o])}function XM(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kd,r[o])}function qM(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gd,r[o])}function YM(n){switch(n){case 5126:return RM;case 35664:return CM;case 35665:return PM;case 35666:return LM;case 35674:return IM;case 35675:return DM;case 35676:return UM;case 5124:case 35670:return NM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return GM;case 36295:return HM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}class $M{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=AM(t.type)}}class KM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YM(t.type)}}class jM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Ih(n,e){n.seq.push(e),n.map[e.id]=e}function ZM(n,e,t){const i=n.name,s=i.length;for(tl.lastIndex=0;;){const r=tl.exec(i),o=tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ih(t,c===void 0?new $M(a,n,e):new KM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new jM(a),Ih(t,u)),t=u}}}class No{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ZM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const JM=37297;let QM=0;function eS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function tS(n){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n);let i;switch(e===t?i="":e===Wo&&t===Vo?i="LinearDisplayP3ToLinearSRGB":e===Vo&&t===Wo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ni:case aa:return[i,"LinearTransferOETF"];case Fn:case Hc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+eS(n.getShaderSource(e),o)}else return s}function nS(n,e){const t=tS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function iS(n,e){let t;switch(e){case i_:t="Linear";break;case s_:t="Reinhard";break;case r_:t="Cineon";break;case o_:t="ACESFilmic";break;case l_:t="AgX";break;case c_:t="Neutral";break;case a_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const So=new W;function sS(){lt.getLuminanceCoefficients(So);const n=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function oS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dr(n){return n!==""}function Nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lS=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(n){return n.replace(lS,uS)}const cS=new Map;function uS(n,e){let t=Ze[e];if(t===void 0){const i=cS.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rc(t)}const hS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(hS,fS)}function fS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function dS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function pS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function gS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fd:e="ENVMAP_BLENDING_MULTIPLY";break;case t_:e="ENVMAP_BLENDING_MIX";break;case n_:e="ENVMAP_BLENDING_ADD";break}return e}function _S(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dS(t),c=pS(t),h=mS(t),u=gS(t),f=_S(t),m=rS(t),_=oS(r),x=s.createProgram();let d,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(d=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ai?iS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,nS("linearToOutputTexel",t.outputColorSpace),sS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=rc(o),o=Nh(o,t),o=Fh(o,t),a=rc(a),a=Nh(a,t),a=Fh(a,t),o=Oh(o),a=Oh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+d+o,E=b+p+a,F=Dh(s,s.VERTEX_SHADER,M),P=Dh(s,s.FRAGMENT_SHADER,E);s.attachShader(x,F),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(w){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(F).trim(),Z=s.getShaderInfoLog(P).trim();let ae=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,P);else{const Q=Uh(s,F,"vertex"),X=Uh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+$+`
`+Q+`
`+X)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(k===""||Z==="")&&(H=!1);H&&(w.diagnostics={runnable:ae,programLog:$,vertexShader:{log:k,prefix:d},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(F),s.deleteShader(P),N=new No(s,x),ne=aS(s,x)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let ne;this.getAttributes=function(){return ne===void 0&&R(this),ne};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,JM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=P,this}let xS=0;class yS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MS(e),t.set(e,i)),i}}class MS{constructor(e){this.id=xS++,this.code=e,this.usedTimes=0}}function SS(n,e,t,i,s,r,o){const a=new Cd,l=new yS,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,w,$,k,Z){const ae=k.fog,H=Z.geometry,Q=y.isMeshStandardMaterial?k.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||Q),pe=X&&X.mapping===oa?X.image.height:null,Me=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const _e=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ae=_e!==void 0?_e.length:0;let Oe=0;H.morphAttributes.position!==void 0&&(Oe=1),H.morphAttributes.normal!==void 0&&(Oe=2),H.morphAttributes.color!==void 0&&(Oe=3);let re,he,Se,U;if(Me){const ut=Bn[Me];re=ut.vertexShader,he=ut.fragmentShader}else re=y.vertexShader,he=y.fragmentShader,l.update(y),Se=l.getVertexShaderID(y),U=l.getFragmentShaderID(y);const le=n.getRenderTarget(),se=Z.isInstancedMesh===!0,ue=Z.isBatchedMesh===!0,Ee=!!y.map,ee=!!y.matcap,g=!!X,T=!!y.aoMap,L=!!y.lightMap,D=!!y.bumpMap,I=!!y.normalMap,Y=!!y.displacementMap,j=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,V=y.clearcoat>0,O=y.dispersion>0,G=y.iridescence>0,de=y.sheen>0,ce=y.transmission>0,me=C&&!!y.anisotropyMap,be=V&&!!y.clearcoatMap,fe=V&&!!y.clearcoatNormalMap,ye=V&&!!y.clearcoatRoughnessMap,Re=G&&!!y.iridescenceMap,Pe=G&&!!y.iridescenceThicknessMap,we=de&&!!y.sheenColorMap,ze=de&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,Ge=!!y.specularColorMap,B=!!y.specularIntensityMap,xe=ce&&!!y.transmissionMap,J=ce&&!!y.thicknessMap,te=!!y.gradientMap,ve=!!y.alphaMap,ge=y.alphaTest>0,De=!!y.alphaHash,Xe=!!y.extensions;let et=Ai;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(et=n.toneMapping);const We={shaderID:Me,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:he,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:U,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ue,batchingColor:ue&&Z._colorsTexture!==null,instancing:se,instancingColor:se&&Z.instanceColor!==null,instancingMorph:se&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ni,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:ee,envMap:g,envMapMode:g&&X.mapping,envMapCubeUVHeight:pe,aoMap:T,lightMap:L,bumpMap:D,normalMap:I,displacementMap:m&&Y,emissiveMap:j,normalMapObjectSpace:I&&y.normalMapType===d_,normalMapTangentSpace:I&&y.normalMapType===wd,metalnessMap:S,roughnessMap:v,anisotropy:C,anisotropyMap:me,clearcoat:V,clearcoatMap:be,clearcoatNormalMap:fe,clearcoatRoughnessMap:ye,dispersion:O,iridescence:G,iridescenceMap:Re,iridescenceThicknessMap:Pe,sheen:de,sheenColorMap:we,sheenRoughnessMap:ze,specularMap:Ce,specularColorMap:Ge,specularIntensityMap:B,transmission:ce,transmissionMap:xe,thicknessMap:J,gradientMap:te,opaque:y.transparent===!1&&y.blending===Gs&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:ge,alphaHash:De,combine:y.combine,mapUv:Ee&&d(y.map.channel),aoMapUv:T&&d(y.aoMap.channel),lightMapUv:L&&d(y.lightMap.channel),bumpMapUv:D&&d(y.bumpMap.channel),normalMapUv:I&&d(y.normalMap.channel),displacementMapUv:Y&&d(y.displacementMap.channel),emissiveMapUv:j&&d(y.emissiveMap.channel),metalnessMapUv:S&&d(y.metalnessMap.channel),roughnessMapUv:v&&d(y.roughnessMap.channel),anisotropyMapUv:me&&d(y.anisotropyMap.channel),clearcoatMapUv:be&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&d(y.sheenRoughnessMap.channel),specularMapUv:Ce&&d(y.specularMap.channel),specularColorMapUv:Ge&&d(y.specularColorMap.channel),specularIntensityMapUv:B&&d(y.specularIntensityMap.channel),transmissionMapUv:xe&&d(y.transmissionMap.channel),thicknessMapUv:J&&d(y.thicknessMap.channel),alphaMapUv:ve&&d(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(I||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!H.attributes.uv&&(Ee||ve),fog:!!ae,useFog:y.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&$.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===st,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&y.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function b(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const $ in y.defines)w.push($),w.push(y.defines[$]);return y.isRawShaderMaterial===!1&&(M(w,y),E(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function M(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function E(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function F(y){const w=x[y.type];let $;if(w){const k=Bn[w];$=rv.clone(k.uniforms)}else $=y.uniforms;return $}function P(y,w){let $;for(let k=0,Z=h.length;k<Z;k++){const ae=h[k];if(ae.cacheKey===w){$=ae,++$.usedTimes;break}}return $===void 0&&($=new vS(n,w,y,r),h.push($)),$}function R(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function N(y){l.remove(y)}function ne(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:F,acquireProgram:P,releaseProgram:R,releaseShaderCache:N,programs:h,dispose:ne}}function ES(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,m,_,x,d){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:x,group:d},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=d),e++,p}function a(u,f,m,_,x,d){const p=o(u,f,m,_,x,d);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(u,f,m,_,x,d){const p=o(u,f,m,_,x,d);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||wS),i.length>1&&i.sort(f||zh),s.length>1&&s.sort(f||zh)}function h(){for(let u=e,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function bS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Gh,n.set(i,[o])):s>=r.length?(o=new Gh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function TS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new tt};break;case"SpotLight":t={position:new W,direction:new W,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function AS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RS=0;function CS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PS(n){const e=new TS,t=AS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new xt,o=new xt;function a(c){let h=0,u=0,f=0;for(let ne=0;ne<9;ne++)i.probe[ne].set(0,0,0);let m=0,_=0,x=0,d=0,p=0,b=0,M=0,E=0,F=0,P=0,R=0;c.sort(CS);for(let ne=0,y=c.length;ne<y;ne++){const w=c[ne],$=w.color,k=w.intensity,Z=w.distance,ae=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=$.r*k,u+=$.g*k,f+=$.b*k;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],k);R++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,X=t.get(w);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=ae,i.directionalShadowMatrix[m]=w.shadow.matrix,b++}i.directional[m]=H,m++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy($).multiplyScalar(k),H.distance=Z,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[x]=H;const Q=w.shadow;if(w.map&&(i.spotLightMap[F]=w.map,F++,Q.updateMatrices(w),w.castShadow&&P++),i.spotLightMatrix[x]=Q.matrix,w.castShadow){const X=t.get(w);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=ae,E++}x++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy($).multiplyScalar(k),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[d]=H,d++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const Q=w.shadow,X=t.get(w);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=w.shadow.matrix,M++}i.point[_]=H,_++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(k),H.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[p]=H,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==d||N.hemiLength!==p||N.numDirectionalShadows!==b||N.numPointShadows!==M||N.numSpotShadows!==E||N.numSpotMaps!==F||N.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=d,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+F-P,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,N.directionalLength=m,N.pointLength=_,N.spotLength=x,N.rectAreaLength=d,N.hemiLength=p,N.numDirectionalShadows=b,N.numPointShadows=M,N.numSpotShadows=E,N.numSpotMaps=F,N.numLightProbes=R,i.version=RS++)}function l(c,h){let u=0,f=0,m=0,_=0,x=0;const d=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(M.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),m++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(M.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(d),x++}}}return{setup:a,setupView:l,state:i}}function Hh(n){const e=new PS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Hh(n),e.set(s,[a])):r>=o.length?(a=new Hh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class IS extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DS extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const US=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NS=`uniform sampler2D shadow_pass;
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
}`;function FS(n,e,t){let i=new Wc;const s=new Ie,r=new Ie,o=new pt,a=new IS({depthPacking:f_}),l=new DS,c={},h=t.maxTextureSize,u={[Ci]:nn,[nn]:Ci,[st]:st},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:US,fragmentShader:NS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new yn;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new z(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let p=this.type;this.render=function(P,R,N){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;const ne=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Ti),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const k=p!==ti&&this.type===ti,Z=p===ti&&this.type!==ti;for(let ae=0,H=P.length;ae<H;ae++){const Q=P[ae],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const pe=X.getFrameExtents();if(s.multiply(pe),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,X.mapSize.y=r.y)),X.map===null||k===!0||Z===!0){const _e=this.type!==ti?{minFilter:vn,magFilter:vn}:{};X.map!==null&&X.map.dispose(),X.map=new ns(s.x,s.y,_e),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Me=X.getViewportCount();for(let _e=0;_e<Me;_e++){const Ae=X.getViewport(_e);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),$.viewport(o),X.updateMatrices(Q,_e),i=X.getFrustum(),E(R,N,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===ti&&b(X,N),X.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(ne,y,w)};function b(P,R){const N=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ns(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,N,f,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,N,m,x,null)}function M(P,R,N,ne){let y=null;const w=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)y=w;else if(y=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=y.uuid,k=R.uuid;let Z=c[$];Z===void 0&&(Z={},c[$]=Z);let ae=Z[k];ae===void 0&&(ae=y.clone(),Z[k]=ae,R.addEventListener("dispose",F)),y=ae}if(y.visible=R.visible,y.wireframe=R.wireframe,ne===ti?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const $=n.properties.get(y);$.light=N}return y}function E(P,R,N,ne,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===ti)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const k=e.update(P),Z=P.material;if(Array.isArray(Z)){const ae=k.groups;for(let H=0,Q=ae.length;H<Q;H++){const X=ae[H],pe=Z[X.materialIndex];if(pe&&pe.visible){const Me=M(P,pe,ne,y);P.onBeforeShadow(n,P,R,N,k,Me,X),n.renderBufferDirect(N,null,k,Me,P,X),P.onAfterShadow(n,P,R,N,k,Me,X)}}}else if(Z.visible){const ae=M(P,Z,ne,y);P.onBeforeShadow(n,P,R,N,k,ae,null),n.renderBufferDirect(N,null,k,ae,P,null),P.onAfterShadow(n,P,R,N,k,ae,null)}}const $=P.children;for(let k=0,Z=$.length;k<Z;k++)E($[k],R,N,ne,y)}function F(P){P.target.removeEventListener("dispose",F);for(const N in c){const ne=c[N],y=P.target.uuid;y in ne&&(ne[y].dispose(),delete ne[y])}}}const OS={[wl]:bl,[Tl]:Cl,[Al]:Pl,[Ys]:Rl,[bl]:wl,[Cl]:Tl,[Pl]:Al,[Rl]:Ys};function BS(n){function e(){let B=!1;const xe=new pt;let J=null;const te=new pt(0,0,0,0);return{setMask:function(ve){J!==ve&&!B&&(n.colorMask(ve,ve,ve,ve),J=ve)},setLocked:function(ve){B=ve},setClear:function(ve,ge,De,Xe,et){et===!0&&(ve*=Xe,ge*=Xe,De*=Xe),xe.set(ve,ge,De,Xe),te.equals(xe)===!1&&(n.clearColor(ve,ge,De,Xe),te.copy(xe))},reset:function(){B=!1,J=null,te.set(-1,0,0,0)}}}function t(){let B=!1,xe=!1,J=null,te=null,ve=null;return{setReversed:function(ge){xe=ge},setTest:function(ge){ge?Se(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(ge){J!==ge&&!B&&(n.depthMask(ge),J=ge)},setFunc:function(ge){if(xe&&(ge=OS[ge]),te!==ge){switch(ge){case wl:n.depthFunc(n.NEVER);break;case bl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ge}},setLocked:function(ge){B=ge},setClear:function(ge){ve!==ge&&(n.clearDepth(ge),ve=ge)},reset:function(){B=!1,J=null,te=null,ve=null}}}function i(){let B=!1,xe=null,J=null,te=null,ve=null,ge=null,De=null,Xe=null,et=null;return{setTest:function(We){B||(We?Se(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(We){xe!==We&&!B&&(n.stencilMask(We),xe=We)},setFunc:function(We,ut,ht){(J!==We||te!==ut||ve!==ht)&&(n.stencilFunc(We,ut,ht),J=We,te=ut,ve=ht)},setOp:function(We,ut,ht){(ge!==We||De!==ut||Xe!==ht)&&(n.stencilOp(We,ut,ht),ge=We,De=ut,Xe=ht)},setLocked:function(We){B=We},setClear:function(We){et!==We&&(n.clearStencil(We),et=We)},reset:function(){B=!1,xe=null,J=null,te=null,ve=null,ge=null,De=null,Xe=null,et=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],m=null,_=!1,x=null,d=null,p=null,b=null,M=null,E=null,F=null,P=new tt(0,0,0),R=0,N=!1,ne=null,y=null,w=null,$=null,k=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,H=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ae=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ae=H>=2);let X=null,pe={};const Me=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Ae=new pt().fromArray(Me),Oe=new pt().fromArray(_e);function re(B,xe,J,te){const ve=new Uint8Array(4),ge=n.createTexture();n.bindTexture(B,ge),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<J;De++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(xe+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ge}const he={};he[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),r.setFunc(Ys),L(!1),D($u),Se(n.CULL_FACE),g(Ti);function Se(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function U(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function le(B,xe){return h[B]!==xe?(n.bindFramebuffer(B,xe),h[B]=xe,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function se(B,xe){let J=f,te=!1;if(B){J=u.get(xe),J===void 0&&(J=[],u.set(xe,J));const ve=B.textures;if(J.length!==ve.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,De=ve.length;ge<De;ge++)J[ge]=n.COLOR_ATTACHMENT0+ge;J.length=ve.length,te=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,te=!0);te&&n.drawBuffers(J)}function ue(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const Ee={[Ki]:n.FUNC_ADD,[Bg]:n.FUNC_SUBTRACT,[zg]:n.FUNC_REVERSE_SUBTRACT};Ee[Gg]=n.MIN,Ee[Hg]=n.MAX;const ee={[kg]:n.ZERO,[Vg]:n.ONE,[Wg]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[jg]:n.SRC_ALPHA_SATURATE,[$g]:n.DST_COLOR,[qg]:n.DST_ALPHA,[Xg]:n.ONE_MINUS_SRC_COLOR,[El]:n.ONE_MINUS_SRC_ALPHA,[Kg]:n.ONE_MINUS_DST_COLOR,[Yg]:n.ONE_MINUS_DST_ALPHA,[Zg]:n.CONSTANT_COLOR,[Jg]:n.ONE_MINUS_CONSTANT_COLOR,[Qg]:n.CONSTANT_ALPHA,[e_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,xe,J,te,ve,ge,De,Xe,et,We){if(B===Ti){_===!0&&(U(n.BLEND),_=!1);return}if(_===!1&&(Se(n.BLEND),_=!0),B!==Og){if(B!==x||We!==N){if((d!==Ki||M!==Ki)&&(n.blendEquation(n.FUNC_ADD),d=Ki,M=Ki),We)switch(B){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.ONE,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,b=null,E=null,F=null,P.set(0,0,0),R=0,x=B,N=We}return}ve=ve||xe,ge=ge||J,De=De||te,(xe!==d||ve!==M)&&(n.blendEquationSeparate(Ee[xe],Ee[ve]),d=xe,M=ve),(J!==p||te!==b||ge!==E||De!==F)&&(n.blendFuncSeparate(ee[J],ee[te],ee[ge],ee[De]),p=J,b=te,E=ge,F=De),(Xe.equals(P)===!1||et!==R)&&(n.blendColor(Xe.r,Xe.g,Xe.b,et),P.copy(Xe),R=et),x=B,N=!1}function T(B,xe){B.side===st?U(n.CULL_FACE):Se(n.CULL_FACE);let J=B.side===nn;xe&&(J=!J),L(J),B.blending===Gs&&B.transparent===!1?g(Ti):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const te=B.stencilWrite;o.setTest(te),te&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Y(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){ne!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),ne=B)}function D(B){B!==Ug?(Se(n.CULL_FACE),B!==y&&(B===$u?n.cullFace(n.BACK):B===Ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),y=B}function I(B){B!==w&&(ae&&n.lineWidth(B),w=B)}function Y(B,xe,J){B?(Se(n.POLYGON_OFFSET_FILL),($!==xe||k!==J)&&(n.polygonOffset(xe,J),$=xe,k=J)):U(n.POLYGON_OFFSET_FILL)}function j(B){B?Se(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function S(B){B===void 0&&(B=n.TEXTURE0+Z-1),X!==B&&(n.activeTexture(B),X=B)}function v(B,xe,J){J===void 0&&(X===null?J=n.TEXTURE0+Z-1:J=X);let te=pe[J];te===void 0&&(te={type:void 0,texture:void 0},pe[J]=te),(te.type!==B||te.texture!==xe)&&(X!==J&&(n.activeTexture(J),X=J),n.bindTexture(B,xe||he[B]),te.type=B,te.texture=xe)}function C(){const B=pe[X];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(B){Ae.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ae.copy(B))}function we(B){Oe.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Oe.copy(B))}function ze(B,xe){let J=l.get(xe);J===void 0&&(J=new WeakMap,l.set(xe,J));let te=J.get(B);te===void 0&&(te=n.getUniformBlockIndex(xe,B.name),J.set(B,te))}function Ce(B,xe){const te=l.get(xe).get(B);a.get(xe)!==te&&(n.uniformBlockBinding(xe,te,B.__bindingPointIndex),a.set(xe,te))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,pe={},h={},u=new WeakMap,f=[],m=null,_=!1,x=null,d=null,p=null,b=null,M=null,E=null,F=null,P=new tt(0,0,0),R=0,N=!1,ne=null,y=null,w=null,$=null,k=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:U,bindFramebuffer:le,drawBuffers:se,useProgram:ue,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:D,setLineWidth:I,setPolygonOffset:Y,setScissorTest:j,activeTexture:S,bindTexture:v,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:O,texImage2D:ye,texImage3D:Re,updateUBOMapping:ze,uniformBlockBinding:Ce,texStorage2D:be,texStorage3D:fe,texSubImage2D:G,texSubImage3D:de,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Pe,viewport:we,reset:Ge}}function kh(n,e,t,i){const s=zS(i);switch(t){case _d:return n*e;case xd:return n*e;case yd:return n*e*2;case Md:return n*e/s.components*s.byteLength;case Bc:return n*e/s.components*s.byteLength;case Sd:return n*e*2/s.components*s.byteLength;case zc:return n*e*2/s.components*s.byteLength;case vd:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case Gc:return n*e*4/s.components*s.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(n,16)*Math.max(e,8)/4;case Dl:case Nl:return Math.max(n,8)*Math.max(e,8)/2;case Ol:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Do:case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ed:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ic:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zS(n){switch(n){case li:case pd:return{byteLength:1,components:1};case Nr:case md:case Vr:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case ts:case Nc:case si:return{byteLength:4,components:1};case gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function GS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):Or("canvas")}function x(S,v,C){let V=1;const O=j(S);if((O.width>C||O.height>C)&&(V=C/Math.max(O.width,O.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(V*O.width),de=Math.floor(V*O.height);u===void 0&&(u=_(G,de));const ce=v?_(G,de):u;return ce.width=G,ce.height=de,ce.getContext("2d").drawImage(S,0,0,G,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+G+"x"+de+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),S;return S}function d(S){return S.generateMipmaps&&S.minFilter!==vn&&S.minFilter!==Tn}function p(S){n.generateMipmap(S)}function b(S,v,C,V,O=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=v;if(v===n.RED&&(C===n.FLOAT&&(G=n.R32F),C===n.HALF_FLOAT&&(G=n.R16F),C===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.R8UI),C===n.UNSIGNED_SHORT&&(G=n.R16UI),C===n.UNSIGNED_INT&&(G=n.R32UI),C===n.BYTE&&(G=n.R8I),C===n.SHORT&&(G=n.R16I),C===n.INT&&(G=n.R32I)),v===n.RG&&(C===n.FLOAT&&(G=n.RG32F),C===n.HALF_FLOAT&&(G=n.RG16F),C===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RG8UI),C===n.UNSIGNED_SHORT&&(G=n.RG16UI),C===n.UNSIGNED_INT&&(G=n.RG32UI),C===n.BYTE&&(G=n.RG8I),C===n.SHORT&&(G=n.RG16I),C===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGB8UI),C===n.UNSIGNED_SHORT&&(G=n.RGB16UI),C===n.UNSIGNED_INT&&(G=n.RGB32UI),C===n.BYTE&&(G=n.RGB8I),C===n.SHORT&&(G=n.RGB16I),C===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),C===n.UNSIGNED_INT&&(G=n.RGBA32UI),C===n.BYTE&&(G=n.RGBA8I),C===n.SHORT&&(G=n.RGBA16I),C===n.INT&&(G=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){const de=O?ko:lt.getTransfer(V);C===n.FLOAT&&(G=n.RGBA32F),C===n.HALF_FLOAT&&(G=n.RGBA16F),C===n.UNSIGNED_BYTE&&(G=de===vt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function M(S,v){let C;return S?v===null||v===ts||v===js?C=n.DEPTH24_STENCIL8:v===si?C=n.DEPTH32F_STENCIL8:v===Nr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ts||v===js?C=n.DEPTH_COMPONENT24:v===si?C=n.DEPTH_COMPONENT32F:v===Nr&&(C=n.DEPTH_COMPONENT16),C}function E(S,v){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==vn&&S.minFilter!==Tn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function F(S){const v=S.target;v.removeEventListener("dispose",F),R(v),v.isVideoTexture&&h.delete(v)}function P(S){const v=S.target;v.removeEventListener("dispose",P),ne(v)}function R(S){const v=i.get(S);if(v.__webglInit===void 0)return;const C=S.source,V=f.get(C);if(V){const O=V[v.__cacheKey];O.usedTimes--,O.usedTimes===0&&N(S),Object.keys(V).length===0&&f.delete(C)}i.remove(S)}function N(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const C=S.source,V=f.get(C);delete V[v.__cacheKey],o.memory.textures--}function ne(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let O=0;O<v.__webglFramebuffer[V].length;O++)n.deleteFramebuffer(v.__webglFramebuffer[V][O]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=S.textures;for(let V=0,O=C.length;V<O;V++){const G=i.get(C[V]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(C[V])}i.remove(S)}let y=0;function w(){y=0}function $(){const S=y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),y+=1,S}function k(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Z(S,v){const C=i.get(S);if(S.isVideoTexture&&I(S),S.isRenderTargetTexture===!1&&S.version>0&&C.__version!==S.version){const V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(C,S,v);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function ae(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Oe(C,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function H(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Oe(C,S,v);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function Q(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){re(C,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const X={[Ot]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Il]:n.MIRRORED_REPEAT},pe={[vn]:n.NEAREST,[u_]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Ra]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},Me={[p_]:n.NEVER,[y_]:n.ALWAYS,[m_]:n.LESS,[bd]:n.LEQUAL,[g_]:n.EQUAL,[x_]:n.GEQUAL,[__]:n.GREATER,[v_]:n.NOTEQUAL};function _e(S,v){if(v.type===si&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tn||v.magFilter===Ra||v.magFilter===to||v.magFilter===Ji||v.minFilter===Tn||v.minFilter===Ra||v.minFilter===to||v.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,X[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,X[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,X[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vn||v.minFilter!==to&&v.minFilter!==Ji||v.type===si&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ae(S,v){let C=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",F));const V=v.source;let O=f.get(V);O===void 0&&(O={},f.set(V,O));const G=k(v);if(G!==S.__cacheKey){O[G]===void 0&&(O[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),O[G].usedTimes++;const de=O[S.__cacheKey];de!==void 0&&(O[S.__cacheKey].usedTimes--,de.usedTimes===0&&N(v)),S.__cacheKey=G,S.__webglTexture=O[G].texture}return C}function Oe(S,v,C){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const O=Ae(S,v),G=v.source;t.bindTexture(V,S.__webglTexture,n.TEXTURE0+C);const de=i.get(G);if(G.version!==de.__version||O===!0){t.activeTexture(n.TEXTURE0+C);const ce=lt.getPrimaries(lt.workingColorSpace),me=v.colorSpace===bi?null:lt.getPrimaries(v.colorSpace),be=v.colorSpace===bi||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let fe=x(v.image,!1,s.maxTextureSize);fe=Y(v,fe);const ye=r.convert(v.format,v.colorSpace),Re=r.convert(v.type);let Pe=b(v.internalFormat,ye,Re,v.colorSpace,v.isVideoTexture);_e(V,v);let we;const ze=v.mipmaps,Ce=v.isVideoTexture!==!0,Ge=de.__version===void 0||O===!0,B=G.dataReady,xe=E(v,fe);if(v.isDepthTexture)Pe=M(v.format===Zs,v.type),Ge&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,Pe,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Pe,fe.width,fe.height,0,ye,Re,null));else if(v.isDataTexture)if(ze.length>0){Ce&&Ge&&t.texStorage2D(n.TEXTURE_2D,xe,Pe,ze[0].width,ze[0].height);for(let J=0,te=ze.length;J<te;J++)we=ze[J],Ce?B&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,we.width,we.height,ye,Re,we.data):t.texImage2D(n.TEXTURE_2D,J,Pe,we.width,we.height,0,ye,Re,we.data);v.generateMipmaps=!1}else Ce?(Ge&&t.texStorage2D(n.TEXTURE_2D,xe,Pe,fe.width,fe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,ye,Re,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,fe.width,fe.height,0,ye,Re,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ce&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Pe,ze[0].width,ze[0].height,fe.depth);for(let J=0,te=ze.length;J<te;J++)if(we=ze[J],v.format!==Rn)if(ye!==null)if(Ce){if(B)if(v.layerUpdates.size>0){const ve=kh(we.width,we.height,v.format,v.type);for(const ge of v.layerUpdates){const De=we.data.subarray(ge*ve/we.data.BYTES_PER_ELEMENT,(ge+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ge,we.width,we.height,1,ye,De,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,we.width,we.height,fe.depth,ye,we.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Pe,we.width,we.height,fe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,we.width,we.height,fe.depth,ye,Re,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Pe,we.width,we.height,fe.depth,0,ye,Re,we.data)}else{Ce&&Ge&&t.texStorage2D(n.TEXTURE_2D,xe,Pe,ze[0].width,ze[0].height);for(let J=0,te=ze.length;J<te;J++)we=ze[J],v.format!==Rn?ye!==null?Ce?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,we.width,we.height,ye,we.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?B&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,we.width,we.height,ye,Re,we.data):t.texImage2D(n.TEXTURE_2D,J,Pe,we.width,we.height,0,ye,Re,we.data)}else if(v.isDataArrayTexture)if(Ce){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Pe,fe.width,fe.height,fe.depth),B)if(v.layerUpdates.size>0){const J=kh(fe.width,fe.height,v.format,v.type);for(const te of v.layerUpdates){const ve=fe.data.subarray(te*J/fe.data.BYTES_PER_ELEMENT,(te+1)*J/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,fe.width,fe.height,1,ye,Re,ve)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ye,Re,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,ye,Re,fe.data);else if(v.isData3DTexture)Ce?(Ge&&t.texStorage3D(n.TEXTURE_3D,xe,Pe,fe.width,fe.height,fe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ye,Re,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,ye,Re,fe.data);else if(v.isFramebufferTexture){if(Ge)if(Ce)t.texStorage2D(n.TEXTURE_2D,xe,Pe,fe.width,fe.height);else{let J=fe.width,te=fe.height;for(let ve=0;ve<xe;ve++)t.texImage2D(n.TEXTURE_2D,ve,Pe,J,te,0,ye,Re,null),J>>=1,te>>=1}}else if(ze.length>0){if(Ce&&Ge){const J=j(ze[0]);t.texStorage2D(n.TEXTURE_2D,xe,Pe,J.width,J.height)}for(let J=0,te=ze.length;J<te;J++)we=ze[J],Ce?B&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ye,Re,we):t.texImage2D(n.TEXTURE_2D,J,Pe,ye,Re,we);v.generateMipmaps=!1}else if(Ce){if(Ge){const J=j(fe);t.texStorage2D(n.TEXTURE_2D,xe,Pe,J.width,J.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Re,fe)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ye,Re,fe);d(v)&&p(V),de.__version=G.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function re(S,v,C){if(v.image.length!==6)return;const V=Ae(S,v),O=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+C);const G=i.get(O);if(O.version!==G.__version||V===!0){t.activeTexture(n.TEXTURE0+C);const de=lt.getPrimaries(lt.workingColorSpace),ce=v.colorSpace===bi?null:lt.getPrimaries(v.colorSpace),me=v.colorSpace===bi||de===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!be&&!fe?ye[te]=x(v.image[te],!0,s.maxCubemapSize):ye[te]=fe?v.image[te].image:v.image[te],ye[te]=Y(v,ye[te]);const Re=ye[0],Pe=r.convert(v.format,v.colorSpace),we=r.convert(v.type),ze=b(v.internalFormat,Pe,we,v.colorSpace),Ce=v.isVideoTexture!==!0,Ge=G.__version===void 0||V===!0,B=O.dataReady;let xe=E(v,Re);_e(n.TEXTURE_CUBE_MAP,v);let J;if(be){Ce&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ze,Re.width,Re.height);for(let te=0;te<6;te++){J=ye[te].mipmaps;for(let ve=0;ve<J.length;ve++){const ge=J[ve];v.format!==Rn?Pe!==null?Ce?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,ge.width,ge.height,Pe,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,ze,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,ge.width,ge.height,Pe,we,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,ze,ge.width,ge.height,0,Pe,we,ge.data)}}}else{if(J=v.mipmaps,Ce&&Ge){J.length>0&&xe++;const te=j(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ze,te.width,te.height)}for(let te=0;te<6;te++)if(fe){Ce?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,Pe,we,ye[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,ye[te].width,ye[te].height,0,Pe,we,ye[te].data);for(let ve=0;ve<J.length;ve++){const De=J[ve].image[te].image;Ce?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,De.width,De.height,Pe,we,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,ze,De.width,De.height,0,Pe,we,De.data)}}else{Ce?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,we,ye[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,Pe,we,ye[te]);for(let ve=0;ve<J.length;ve++){const ge=J[ve];Ce?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Pe,we,ge.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,ze,Pe,we,ge.image[te])}}}d(v)&&p(n.TEXTURE_CUBE_MAP),G.__version=O.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function he(S,v,C,V,O,G){const de=r.convert(C.format,C.colorSpace),ce=r.convert(C.type),me=b(C.internalFormat,de,ce,C.colorSpace);if(!i.get(v).__hasExternalTextures){const fe=Math.max(1,v.width>>G),ye=Math.max(1,v.height>>G);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,G,me,fe,ye,v.depth,0,de,ce,null):t.texImage2D(O,G,me,fe,ye,0,de,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),D(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,O,i.get(C).__webglTexture,0,L(v)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,O,i.get(C).__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(S,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const V=v.depthTexture,O=V&&V.isDepthTexture?V.type:null,G=M(v.stencilBuffer,O),de=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=L(v);D(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,G,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,S)}else{const V=v.textures;for(let O=0;O<V.length;O++){const G=V[O],de=r.convert(G.format,G.colorSpace),ce=r.convert(G.type),me=b(G.internalFormat,de,ce,G.colorSpace),be=L(v);C&&D(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,me,v.width,v.height):D(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,O=L(v);if(v.depthTexture.format===Hs)D(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===Zs)D(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function le(S){const v=i.get(S),C=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const V=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const O=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",O)};V.addEventListener("dispose",O),v.__depthDisposeCallback=O}v.__boundDepthTexture=V}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");U(v.__webglFramebuffer,S)}else if(C){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),Se(v.__webglDepthbuffer[V],S,!1);else{const O=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Se(v.__webglDepthbuffer,S,!1);else{const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,O)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(S,v,C){const V=i.get(S);v!==void 0&&he(V.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&le(S)}function ue(S){const v=S.texture,C=i.get(S),V=i.get(v);S.addEventListener("dispose",P);const O=S.textures,G=S.isWebGLCubeRenderTarget===!0,de=O.length>1;if(de||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),G){C.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ce]=[];for(let me=0;me<v.mipmaps.length;me++)C.__webglFramebuffer[ce][me]=n.createFramebuffer()}else C.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)C.__webglFramebuffer[ce]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(de)for(let ce=0,me=O.length;ce<me;ce++){const be=i.get(O[ce]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&D(S)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ce=0;ce<O.length;ce++){const me=O[ce];C.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ce]);const be=r.convert(me.format,me.colorSpace),fe=r.convert(me.type),ye=b(me.internalFormat,be,fe,me.colorSpace,S.isXRRenderTarget===!0),Re=L(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ye,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,C.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(C.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)he(C.__webglFramebuffer[ce][me],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else he(C.__webglFramebuffer[ce],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);d(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ce=0,me=O.length;ce<me;ce++){const be=O[ce],fe=i.get(be);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),_e(n.TEXTURE_2D,be),he(C.__webglFramebuffer,S,be,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),d(be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,V.__webglTexture),_e(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)he(C.__webglFramebuffer[me],S,v,n.COLOR_ATTACHMENT0,ce,me);else he(C.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ce,0);d(v)&&p(ce),t.unbindTexture()}S.depthBuffer&&le(S)}function Ee(S){const v=S.textures;for(let C=0,V=v.length;C<V;C++){const O=v[C];if(d(O)){const G=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(O).__webglTexture;t.bindTexture(G,de),p(G),t.unbindTexture()}}}const ee=[],g=[];function T(S){if(S.samples>0){if(D(S)===!1){const v=S.textures,C=S.width,V=S.height;let O=n.COLOR_BUFFER_BIT;const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(S),ce=v.length>1;if(ce)for(let me=0;me<v.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<v.length;me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const be=i.get(v[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,C,V,0,0,C,V,O,n.NEAREST),l===!0&&(ee.length=0,g.length=0,ee.push(n.COLOR_ATTACHMENT0+me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ee.push(G),g.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<v.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const be=i.get(v[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(S){return Math.min(s.maxSamples,S.samples)}function D(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(S){const v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Y(S,v){const C=S.colorSpace,V=S.format,O=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||C!==Ni&&C!==bi&&(lt.getTransfer(C)===vt?(V!==Rn||O!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function j(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=w,this.setTexture2D=Z,this.setTexture2DArray=ae,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=se,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=he,this.useMultisampledRTT=D}function HS(n,e){function t(i,s=bi){let r;const o=lt.getTransfer(s);if(i===li)return n.UNSIGNED_BYTE;if(i===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pd)return n.BYTE;if(i===md)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===Vr)return n.HALF_FLOAT;if(i===_d)return n.ALPHA;if(i===vd)return n.RGB;if(i===Rn)return n.RGBA;if(i===xd)return n.LUMINANCE;if(i===yd)return n.LUMINANCE_ALPHA;if(i===Hs)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===Md)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Sd)return n.RG;if(i===zc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Lo||i===Io)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dl||i===Ul||i===Nl||i===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ol||i===Bl||i===zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ol||i===Bl)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gl||i===Hl||i===kl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Kl||i===jl||i===Zl||i===Jl||i===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ql)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Do||i===ec||i===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Do)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ed||i===nc||i===ic||i===sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class kS extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $e extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VS={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),p=this._getHandJoint(c,x);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const WS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XS=`
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

}`;class qS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new en,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ci({vertexShader:WS,fragmentShader:XS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new la(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YS extends er{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const x=new qS,d=t.getContextAttributes();let p=null,b=null;const M=[],E=[],F=new Ie;let P=null;const R=new Ct;R.layers.enable(1),R.viewport=new pt;const N=new Ct;N.layers.enable(2),N.viewport=new pt;const ne=[R,N],y=new kS;y.layers.enable(1),y.layers.enable(2);let w=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=M[re];return he===void 0&&(he=new nl,M[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=M[re];return he===void 0&&(he=new nl,M[re]=he),he.getGripSpace()},this.getHand=function(re){let he=M[re];return he===void 0&&(he=new nl,M[re]=he),he.getHandSpace()};function k(re){const he=E.indexOf(re.inputSource);if(he===-1)return;const Se=M[he];Se!==void 0&&(Se.update(re.inputSource,re.frame,c||o),Se.dispatchEvent({type:re.type,data:re.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ae);for(let re=0;re<M.length;re++){const he=E[re];he!==null&&(E[re]=null,M[re].disconnect(he))}w=null,$=null,x.reset(),e.setRenderTarget(p),m=null,f=null,u=null,s=null,b=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ae),d.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const he={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ns(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let he=null,Se=null,U=null;d.depth&&(U=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=d.stencil?Zs:Hs,Se=d.stencil?js:ts);const le={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ns(f.textureWidth,f.textureHeight,{format:Rn,type:li,depthTexture:new Bd(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(re){for(let he=0;he<re.removed.length;he++){const Se=re.removed[he],U=E.indexOf(Se);U>=0&&(E[U]=null,M[U].disconnect(Se))}for(let he=0;he<re.added.length;he++){const Se=re.added[he];let U=E.indexOf(Se);if(U===-1){for(let se=0;se<M.length;se++)if(se>=E.length){E.push(Se),U=se;break}else if(E[se]===null){E[se]=Se,U=se;break}if(U===-1)break}const le=M[U];le&&le.connect(Se)}}const H=new W,Q=new W;function X(re,he,Se){H.setFromMatrixPosition(he.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const U=H.distanceTo(Q),le=he.projectionMatrix.elements,se=Se.projectionMatrix.elements,ue=le[14]/(le[10]-1),Ee=le[14]/(le[10]+1),ee=(le[9]+1)/le[5],g=(le[9]-1)/le[5],T=(le[8]-1)/le[0],L=(se[8]+1)/se[0],D=ue*T,I=ue*L,Y=U/(-T+L),j=Y*-T;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(j),re.translateZ(Y),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),le[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const S=ue+Y,v=Ee+Y,C=D-j,V=I+(U-j),O=ee*Ee/v*S,G=g*Ee/v*S;re.projectionMatrix.makePerspective(C,V,O,G,S,v),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function pe(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let he=re.near,Se=re.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),y.near=N.near=R.near=he,y.far=N.far=R.far=Se,(w!==y.near||$!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,$=y.far);const U=re.parent,le=y.cameras;pe(y,U);for(let se=0;se<le.length;se++)pe(le[se],U);le.length===2?X(y,R,N):y.projectionMatrix.copy(R.projectionMatrix),Me(re,y,U)};function Me(re,he,Se){Se===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(Se.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Fr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _e=null;function Ae(re,he){if(h=he.getViewerPose(c||o),_=he,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let U=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,U=!0);for(let se=0;se<Se.length;se++){const ue=Se[se];let Ee=null;if(m!==null)Ee=m.getViewport(ue);else{const g=u.getViewSubImage(f,ue);Ee=g.viewport,se===0&&(e.setRenderTargetTextures(b,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(b))}let ee=ne[se];ee===void 0&&(ee=new Ct,ee.layers.enable(se),ee.viewport=new pt,ne[se]=ee),ee.matrix.fromArray(ue.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),se===0&&(y.matrix.copy(ee.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),U===!0&&y.cameras.push(ee)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const se=u.getDepthInformation(Se[0]);se&&se.isValid&&se.texture&&x.init(e,se,s.renderState)}}for(let Se=0;Se<M.length;Se++){const U=E[Se],le=M[Se];U!==null&&le!==void 0&&le.update(U,he,c||o)}_e&&_e(re,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Oe=new Fd;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(re){_e=re},this.dispose=function(){}}}const Vi=new kn,$S=new xt;function KS(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Dd(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,b,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,E)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),x(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,b,M):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===nn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===nn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,E=b.envMapRotation;M&&(d.envMap.value=M,Vi.copy(E),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),d.envMapRotation.value.setFromMatrix4($S.makeRotationFromEuler(Vi)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,b,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*b,d.scale.value=M*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,b){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){const b=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const E=M.program;i.uniformBlockBinding(b,E)}function c(b,M){let E=s[b.id];E===void 0&&(_(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",d));const F=M.program;i.updateUBOMapping(b,F);const P=e.render.frame;r[b.id]!==P&&(f(b),r[b.id]=P)}function h(b){const M=u();b.__bindingPointIndex=M;const E=n.createBuffer(),F=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,F,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=s[b.id],E=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,R=E.length;P<R;P++){const N=Array.isArray(E[P])?E[P]:[E[P]];for(let ne=0,y=N.length;ne<y;ne++){const w=N[ne];if(m(w,P,ne,F)===!0){const $=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let Z=0;for(let ae=0;ae<k.length;ae++){const H=k[ae],Q=x(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,$+Z,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,Z),Z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,M,E,F){const P=b.value,R=M+"_"+E;if(F[R]===void 0)return typeof P=="number"||typeof P=="boolean"?F[R]=P:F[R]=P.clone(),!0;{const N=F[R];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return F[R]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function _(b){const M=b.uniforms;let E=0;const F=16;for(let R=0,N=M.length;R<N;R++){const ne=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,w=ne.length;y<w;y++){const $=ne[y],k=Array.isArray($.value)?$.value:[$.value];for(let Z=0,ae=k.length;Z<ae;Z++){const H=k[Z],Q=x(H),X=E%F,pe=X%Q.boundary,Me=X+pe;E+=pe,Me!==0&&F-Me<Q.storage&&(E+=F-Me),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=Q.storage}}}const P=E%F;return P>0&&(E+=F-P),b.__size=E,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function d(b){const M=b.target;M.removeEventListener("dispose",d);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class as{constructor(e={}){const{canvas:t=O_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,d=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Ai,this.toneMappingExposure=1;const M=this;let E=!1,F=0,P=0,R=null,N=-1,ne=null;const y=new pt,w=new pt;let $=null;const k=new tt(0);let Z=0,ae=t.width,H=t.height,Q=1,X=null,pe=null;const Me=new pt(0,0,ae,H),_e=new pt(0,0,ae,H);let Ae=!1;const Oe=new Wc;let re=!1,he=!1;const Se=new xt,U=new xt,le=new W,se=new pt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function ee(){return R===null?Q:1}let g=i;function T(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ge,!1),g===null){const q="webgl2";if(g=T(q,A),g===null)throw T(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,D,I,Y,j,S,v,C,V,O,G,de,ce,me,be,fe,ye,Re,Pe,we,ze,Ce,Ge,B;function xe(){L=new nM(g),L.init(),Ce=new HS(g,L),D=new jy(g,L,e,Ce),I=new BS(g),D.reverseDepthBuffer&&I.buffers.depth.setReversed(!0),Y=new rM(g),j=new ES,S=new GS(g,L,I,j,D,Ce,Y),v=new Jy(M),C=new tM(M),V=new fv(g),Ge=new $y(g,V),O=new iM(g,V,Y,Ge),G=new aM(g,O,V,Y),Pe=new oM(g,D,S),fe=new Zy(j),de=new SS(M,v,C,L,D,Ge,fe),ce=new KS(M,j),me=new bS,be=new LS(L),Re=new Yy(M,v,C,I,G,f,l),ye=new FS(M,G,D),B=new jS(g,Y,D,I),we=new Ky(g,L,Y),ze=new sM(g,L,Y),Y.programs=de.programs,M.capabilities=D,M.extensions=L,M.properties=j,M.renderLists=me,M.shadowMap=ye,M.state=I,M.info=Y}xe();const J=new YS(M,g);this.xr=J,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(ae,H,!1))},this.getSize=function(A){return A.set(ae,H)},this.setSize=function(A,q,ie=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,H=q,t.width=Math.floor(A*Q),t.height=Math.floor(q*Q),ie===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ae*Q,H*Q).floor()},this.setDrawingBufferSize=function(A,q,ie){ae=A,H=q,Q=ie,t.width=Math.floor(A*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(Me)},this.setViewport=function(A,q,ie,oe){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,q,ie,oe),I.viewport(y.copy(Me).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(_e)},this.setScissor=function(A,q,ie,oe){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,q,ie,oe),I.scissor(w.copy(_e).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(A){I.setScissorTest(Ae=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(A=!0,q=!0,ie=!0){let oe=0;if(A){let K=!1;if(R!==null){const Te=R.texture.format;K=Te===Gc||Te===zc||Te===Bc}if(K){const Te=R.texture.type,Ue=Te===li||Te===ts||Te===Nr||Te===js||Te===Fc||Te===Oc,Be=Re.getClearColor(),He=Re.getClearAlpha(),qe=Be.r,Ye=Be.g,ke=Be.b;Ue?(m[0]=qe,m[1]=Ye,m[2]=ke,m[3]=He,g.clearBufferuiv(g.COLOR,0,m)):(_[0]=qe,_[1]=Ye,_[2]=ke,_[3]=He,g.clearBufferiv(g.COLOR,0,_))}else oe|=g.COLOR_BUFFER_BIT}q&&(oe|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ie&&(oe|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),me.dispose(),be.dispose(),j.dispose(),v.dispose(),C.dispose(),G.dispose(),Ge.dispose(),B.dispose(),de.dispose(),J.dispose(),J.removeEventListener("sessionstart",kt),J.removeEventListener("sessionend",wt),St.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Y.autoReset,q=ye.enabled,ie=ye.autoUpdate,oe=ye.needsUpdate,K=ye.type;xe(),Y.autoReset=A,ye.enabled=q,ye.autoUpdate=ie,ye.needsUpdate=oe,ye.type=K}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function De(A){const q=A.target;q.removeEventListener("dispose",De),Xe(q)}function Xe(A){et(A),j.remove(A)}function et(A){const q=j.get(A).programs;q!==void 0&&(q.forEach(function(ie){de.releaseProgram(ie)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ie,oe,K,Te){q===null&&(q=ue);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,Be=Qd(A,q,ie,oe,K);I.setMaterial(oe,Ue);let He=ie.index,qe=1;if(oe.wireframe===!0){if(He=O.getWireframeAttribute(ie),He===void 0)return;qe=2}const Ye=ie.drawRange,ke=ie.attributes.position;let ft=Ye.start*qe,_t=(Ye.start+Ye.count)*qe;Te!==null&&(ft=Math.max(ft,Te.start*qe),_t=Math.min(_t,(Te.start+Te.count)*qe)),He!==null?(ft=Math.max(ft,0),_t=Math.min(_t,He.count)):ke!=null&&(ft=Math.max(ft,0),_t=Math.min(_t,ke.count));const Et=_t-ft;if(Et<0||Et===1/0)return;Ge.setup(K,oe,Be,ie,He);let on,rt=we;if(He!==null&&(on=V.get(He),rt=ze,rt.setIndex(on)),K.isMesh)oe.wireframe===!0?(I.setLineWidth(oe.wireframeLinewidth*ee()),rt.setMode(g.LINES)):rt.setMode(g.TRIANGLES);else if(K.isLine){let Ve=oe.linewidth;Ve===void 0&&(Ve=1),I.setLineWidth(Ve*ee()),K.isLineSegments?rt.setMode(g.LINES):K.isLineLoop?rt.setMode(g.LINE_LOOP):rt.setMode(g.LINE_STRIP)}else K.isPoints?rt.setMode(g.POINTS):K.isSprite&&rt.setMode(g.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)rt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))rt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ve=K._multiDrawStarts,Gt=K._multiDrawCounts,ot=K._multiDrawCount,Mn=He?V.get(He).bytesPerElement:1,ps=j.get(oe).currentProgram.getUniforms();for(let an=0;an<ot;an++)ps.setValue(g,"_gl_DrawID",an),rt.render(Ve[an]/Mn,Gt[an])}else if(K.isInstancedMesh)rt.renderInstances(ft,Et,K.count);else if(ie.isInstancedBufferGeometry){const Ve=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Gt=Math.min(ie.instanceCount,Ve);rt.renderInstances(ft,Et,Gt)}else rt.render(ft,Et)};function We(A,q,ie){A.transparent===!0&&A.side===st&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,fi(A,q,ie),A.side=Ci,A.needsUpdate=!0,fi(A,q,ie),A.side=st):fi(A,q,ie)}this.compile=function(A,q,ie=null){ie===null&&(ie=A),d=be.get(ie),d.init(q),b.push(d),ie.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),A!==ie&&A.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),d.setupLights();const oe=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const Be=Te[Ue];We(Be,ie,K),oe.add(Be)}else We(Te,ie,K),oe.add(Te)}),b.pop(),d=null,oe},this.compileAsync=function(A,q,ie=null){const oe=this.compile(A,q,ie);return new Promise(K=>{function Te(){if(oe.forEach(function(Ue){j.get(Ue).currentProgram.isReady()&&oe.delete(Ue)}),oe.size===0){K(A);return}setTimeout(Te,10)}L.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ut=null;function ht(A){ut&&ut(A)}function kt(){St.stop()}function wt(){St.start()}const St=new Fd;St.setAnimationLoop(ht),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(A){ut=A,J.setAnimationLoop(A),A===null?St.stop():St.start()},J.addEventListener("sessionstart",kt),J.addEventListener("sessionend",wt),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(q),q=J.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,q,R),d=be.get(A,b.length),d.init(q),b.push(d),U.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Oe.setFromProjectionMatrix(U),he=this.localClippingEnabled,re=fe.init(this.clippingPlanes,he),x=me.get(A,p.length),x.init(),p.push(x),J.enabled===!0&&J.isPresenting===!0){const Te=M.xr.getDepthSensingMesh();Te!==null&&zt(Te,q,-1/0,M.sortObjects)}zt(A,q,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(X,pe),Ee=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ee&&Re.addToRenderList(x,A),this.info.render.frame++,re===!0&&fe.beginShadows();const ie=d.state.shadowsArray;ye.render(ie,A,q),re===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=x.opaque,K=x.transmissive;if(d.setupLights(),q.isArrayCamera){const Te=q.cameras;if(K.length>0)for(let Ue=0,Be=Te.length;Ue<Be;Ue++){const He=Te[Ue];pn(oe,K,A,He)}Ee&&Re.render(A);for(let Ue=0,Be=Te.length;Ue<Be;Ue++){const He=Te[Ue];rn(x,A,He,He.viewport)}}else K.length>0&&pn(oe,K,A,q),Ee&&Re.render(A),rn(x,A,q);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,q),Ge.resetDefaultState(),N=-1,ne=null,b.pop(),b.length>0?(d=b[b.length-1],re===!0&&fe.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function zt(A,q,ie,oe){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){oe&&se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);const Ue=G.update(A),Be=A.material;Be.visible&&x.push(A,Ue,Be,ie,se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const Ue=G.update(A),Be=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),se.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),se.copy(Ue.boundingSphere.center)),se.applyMatrix4(A.matrixWorld).applyMatrix4(U)),Array.isArray(Be)){const He=Ue.groups;for(let qe=0,Ye=He.length;qe<Ye;qe++){const ke=He[qe],ft=Be[ke.materialIndex];ft&&ft.visible&&x.push(A,Ue,ft,ie,se.z,ke)}}else Be.visible&&x.push(A,Ue,Be,ie,se.z,null)}}const Te=A.children;for(let Ue=0,Be=Te.length;Ue<Be;Ue++)zt(Te[Ue],q,ie,oe)}function rn(A,q,ie,oe){const K=A.opaque,Te=A.transmissive,Ue=A.transparent;d.setupLightsView(ie),re===!0&&fe.setGlobalState(M.clippingPlanes,ie),oe&&I.viewport(y.copy(oe)),K.length>0&&mn(K,q,ie),Te.length>0&&mn(Te,q,ie),Ue.length>0&&mn(Ue,q,ie),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function pn(A,q,ie,oe){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[oe.id]===void 0&&(d.state.transmissionRenderTarget[oe.id]=new ns(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Vr:li,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const Te=d.state.transmissionRenderTarget[oe.id],Ue=oe.viewport||y;Te.setSize(Ue.z,Ue.w);const Be=M.getRenderTarget();M.setRenderTarget(Te),M.getClearColor(k),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Ee&&Re.render(ie);const He=M.toneMapping;M.toneMapping=Ai;const qe=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),d.setupLightsView(oe),re===!0&&fe.setGlobalState(M.clippingPlanes,oe),mn(A,ie,oe),S.updateMultisampleRenderTarget(Te),S.updateRenderTargetMipmap(Te),L.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ke=0,ft=q.length;ke<ft;ke++){const _t=q[ke],Et=_t.object,on=_t.geometry,rt=_t.material,Ve=_t.group;if(rt.side===st&&Et.layers.test(oe.layers)){const Gt=rt.side;rt.side=nn,rt.needsUpdate=!0,$r(Et,ie,oe,on,rt,Ve),rt.side=Gt,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(S.updateMultisampleRenderTarget(Te),S.updateRenderTargetMipmap(Te))}M.setRenderTarget(Be),M.setClearColor(k,Z),qe!==void 0&&(oe.viewport=qe),M.toneMapping=He}function mn(A,q,ie){const oe=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Te=A.length;K<Te;K++){const Ue=A[K],Be=Ue.object,He=Ue.geometry,qe=oe===null?Ue.material:oe,Ye=Ue.group;Be.layers.test(ie.layers)&&$r(Be,q,ie,He,qe,Ye)}}function $r(A,q,ie,oe,K,Te){A.onBeforeRender(M,q,ie,oe,K,Te),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(M,q,ie,oe,A,Te),K.transparent===!0&&K.side===st&&K.forceSinglePass===!1?(K.side=nn,K.needsUpdate=!0,M.renderBufferDirect(ie,q,oe,K,A,Te),K.side=Ci,K.needsUpdate=!0,M.renderBufferDirect(ie,q,oe,K,A,Te),K.side=st):M.renderBufferDirect(ie,q,oe,K,A,Te),A.onAfterRender(M,q,ie,oe,K,Te)}function fi(A,q,ie){q.isScene!==!0&&(q=ue);const oe=j.get(A),K=d.state.lights,Te=d.state.shadowsArray,Ue=K.state.version,Be=de.getParameters(A,K.state,Te,q,ie),He=de.getProgramCacheKey(Be);let qe=oe.programs;oe.environment=A.isMeshStandardMaterial?q.environment:null,oe.fog=q.fog,oe.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",De),qe=new Map,oe.programs=qe);let Ye=qe.get(He);if(Ye!==void 0){if(oe.currentProgram===Ye&&oe.lightsStateVersion===Ue)return Zc(A,Be),Ye}else Be.uniforms=de.getUniforms(A),A.onBeforeCompile(Be,M),Ye=de.acquireProgram(Be,He),qe.set(He,Ye),oe.uniforms=Be.uniforms;const ke=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=fe.uniform),Zc(A,Be),oe.needsLights=tp(A),oe.lightsStateVersion=Ue,oe.needsLights&&(ke.ambientLightColor.value=K.state.ambient,ke.lightProbe.value=K.state.probe,ke.directionalLights.value=K.state.directional,ke.directionalLightShadows.value=K.state.directionalShadow,ke.spotLights.value=K.state.spot,ke.spotLightShadows.value=K.state.spotShadow,ke.rectAreaLights.value=K.state.rectArea,ke.ltc_1.value=K.state.rectAreaLTC1,ke.ltc_2.value=K.state.rectAreaLTC2,ke.pointLights.value=K.state.point,ke.pointLightShadows.value=K.state.pointShadow,ke.hemisphereLights.value=K.state.hemi,ke.directionalShadowMap.value=K.state.directionalShadowMap,ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ke.spotShadowMap.value=K.state.spotShadowMap,ke.spotLightMatrix.value=K.state.spotLightMatrix,ke.spotLightMap.value=K.state.spotLightMap,ke.pointShadowMap.value=K.state.pointShadowMap,ke.pointShadowMatrix.value=K.state.pointShadowMatrix),oe.currentProgram=Ye,oe.uniformsList=null,Ye}function jc(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=No.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Zc(A,q){const ie=j.get(A);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function Qd(A,q,ie,oe,K){q.isScene!==!0&&(q=ue),S.resetTextureUnits();const Te=q.fog,Ue=oe.isMeshStandardMaterial?q.environment:null,Be=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ni,He=(oe.isMeshStandardMaterial?C:v).get(oe.envMap||Ue),qe=oe.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ye=!!ie.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),ke=!!ie.morphAttributes.position,ft=!!ie.morphAttributes.normal,_t=!!ie.morphAttributes.color;let Et=Ai;oe.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Et=M.toneMapping);const on=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,rt=on!==void 0?on.length:0,Ve=j.get(oe),Gt=d.state.lights;if(re===!0&&(he===!0||A!==ne)){const gn=A===ne&&oe.id===N;fe.setState(oe,A,gn)}let ot=!1;oe.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Gt.state.version||Ve.outputColorSpace!==Be||K.isBatchedMesh&&Ve.batching===!1||!K.isBatchedMesh&&Ve.batching===!0||K.isBatchedMesh&&Ve.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ve.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ve.instancing===!1||!K.isInstancedMesh&&Ve.instancing===!0||K.isSkinnedMesh&&Ve.skinning===!1||!K.isSkinnedMesh&&Ve.skinning===!0||K.isInstancedMesh&&Ve.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ve.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ve.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ve.instancingMorph===!1&&K.morphTexture!==null||Ve.envMap!==He||oe.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==fe.numPlanes||Ve.numIntersection!==fe.numIntersection)||Ve.vertexAlphas!==qe||Ve.vertexTangents!==Ye||Ve.morphTargets!==ke||Ve.morphNormals!==ft||Ve.morphColors!==_t||Ve.toneMapping!==Et||Ve.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Ve.__version=oe.version);let Mn=Ve.currentProgram;ot===!0&&(Mn=fi(oe,q,K));let ps=!1,an=!1,ha=!1;const bt=Mn.getUniforms(),di=Ve.uniforms;if(I.useProgram(Mn.program)&&(ps=!0,an=!0,ha=!0),oe.id!==N&&(N=oe.id,an=!0),ps||ne!==A){D.reverseDepthBuffer?(Se.copy(A.projectionMatrix),z_(Se),G_(Se),bt.setValue(g,"projectionMatrix",Se)):bt.setValue(g,"projectionMatrix",A.projectionMatrix),bt.setValue(g,"viewMatrix",A.matrixWorldInverse);const gn=bt.map.cameraPosition;gn!==void 0&&gn.setValue(g,le.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&bt.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&bt.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,an=!0,ha=!0)}if(K.isSkinnedMesh){bt.setOptional(g,K,"bindMatrix"),bt.setOptional(g,K,"bindMatrixInverse");const gn=K.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),bt.setValue(g,"boneTexture",gn.boneTexture,S))}K.isBatchedMesh&&(bt.setOptional(g,K,"batchingTexture"),bt.setValue(g,"batchingTexture",K._matricesTexture,S),bt.setOptional(g,K,"batchingIdTexture"),bt.setValue(g,"batchingIdTexture",K._indirectTexture,S),bt.setOptional(g,K,"batchingColorTexture"),K._colorsTexture!==null&&bt.setValue(g,"batchingColorTexture",K._colorsTexture,S));const fa=ie.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0)&&Pe.update(K,ie,Mn),(an||Ve.receiveShadow!==K.receiveShadow)&&(Ve.receiveShadow=K.receiveShadow,bt.setValue(g,"receiveShadow",K.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(di.envMap.value=He,di.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&q.environment!==null&&(di.envMapIntensity.value=q.environmentIntensity),an&&(bt.setValue(g,"toneMappingExposure",M.toneMappingExposure),Ve.needsLights&&ep(di,ha),Te&&oe.fog===!0&&ce.refreshFogUniforms(di,Te),ce.refreshMaterialUniforms(di,oe,Q,H,d.state.transmissionRenderTarget[A.id]),No.upload(g,jc(Ve),di,S)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(No.upload(g,jc(Ve),di,S),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&bt.setValue(g,"center",K.center),bt.setValue(g,"modelViewMatrix",K.modelViewMatrix),bt.setValue(g,"normalMatrix",K.normalMatrix),bt.setValue(g,"modelMatrix",K.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const gn=oe.uniformsGroups;for(let da=0,np=gn.length;da<np;da++){const Jc=gn[da];B.update(Jc,Mn),B.bind(Jc,Mn)}}return Mn}function ep(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function tp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,q,ie){j.get(A.texture).__webglTexture=q,j.get(A.depthTexture).__webglTexture=ie;const oe=j.get(A);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=ie===void 0,oe.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const ie=j.get(A);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ie=0){R=A,F=q,P=ie;let oe=!0,K=null,Te=!1,Ue=!1;if(A){const He=j.get(A);if(He.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(g.FRAMEBUFFER,null),oe=!1;else if(He.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(He.__hasExternalTextures)S.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(He.__boundDepthTexture!==ke){if(ke!==null&&j.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const Ye=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?K=Ye[q][ie]:K=Ye[q],Te=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?K=j.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?K=Ye[ie]:K=Ye,y.copy(A.viewport),w.copy(A.scissor),$=A.scissorTest}else y.copy(Me).multiplyScalar(Q).floor(),w.copy(_e).multiplyScalar(Q).floor(),$=Ae;if(I.bindFramebuffer(g.FRAMEBUFFER,K)&&oe&&I.drawBuffers(A,K),I.viewport(y),I.scissor(w),I.setScissorTest($),Te){const He=j.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,ie)}else if(Ue){const He=j.get(A.texture),qe=q||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,He.__webglTexture,ie||0,qe)}N=-1},this.readRenderTargetPixels=function(A,q,ie,oe,K,Te,Ue){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){I.bindFramebuffer(g.FRAMEBUFFER,Be);try{const He=A.texture,qe=He.format,Ye=He.type;if(!D.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-oe&&ie>=0&&ie<=A.height-K&&g.readPixels(q,ie,oe,K,Ce.convert(qe),Ce.convert(Ye),Te)}finally{const He=R!==null?j.get(R).__webglFramebuffer:null;I.bindFramebuffer(g.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,q,ie,oe,K,Te,Ue){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){const He=A.texture,qe=He.format,Ye=He.type;if(!D.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-oe&&ie>=0&&ie<=A.height-K){I.bindFramebuffer(g.FRAMEBUFFER,Be);const ke=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,ke),g.bufferData(g.PIXEL_PACK_BUFFER,Te.byteLength,g.STREAM_READ),g.readPixels(q,ie,oe,K,Ce.convert(qe),Ce.convert(Ye),0);const ft=R!==null?j.get(R).__webglFramebuffer:null;I.bindFramebuffer(g.FRAMEBUFFER,ft);const _t=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await B_(g,_t,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,ke),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Te),g.deleteBuffer(ke),g.deleteSync(_t),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,ie=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const oe=Math.pow(2,-ie),K=Math.floor(A.image.width*oe),Te=Math.floor(A.image.height*oe),Ue=q!==null?q.x:0,Be=q!==null?q.y:0;S.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,ie,0,0,Ue,Be,K,Te),I.unbindTexture()},this.copyTextureToTexture=function(A,q,ie=null,oe=null,K=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,A=arguments[1],q=arguments[2],K=arguments[3]||0,ie=null);let Te,Ue,Be,He,qe,Ye;ie!==null?(Te=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,Be=ie.min.x,He=ie.min.y):(Te=A.image.width,Ue=A.image.height,Be=0,He=0),oe!==null?(qe=oe.x,Ye=oe.y):(qe=0,Ye=0);const ke=Ce.convert(q.format),ft=Ce.convert(q.type);S.setTexture2D(q,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment);const _t=g.getParameter(g.UNPACK_ROW_LENGTH),Et=g.getParameter(g.UNPACK_IMAGE_HEIGHT),on=g.getParameter(g.UNPACK_SKIP_PIXELS),rt=g.getParameter(g.UNPACK_SKIP_ROWS),Ve=g.getParameter(g.UNPACK_SKIP_IMAGES),Gt=A.isCompressedTexture?A.mipmaps[K]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Gt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Gt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Be),g.pixelStorei(g.UNPACK_SKIP_ROWS,He),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,K,qe,Ye,Te,Ue,ke,ft,Gt.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,K,qe,Ye,Gt.width,Gt.height,ke,Gt.data):g.texSubImage2D(g.TEXTURE_2D,K,qe,Ye,Te,Ue,ke,ft,Gt),g.pixelStorei(g.UNPACK_ROW_LENGTH,_t),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Et),g.pixelStorei(g.UNPACK_SKIP_PIXELS,on),g.pixelStorei(g.UNPACK_SKIP_ROWS,rt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ve),K===0&&q.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(A,q,ie=null,oe=null,K=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,oe=arguments[1]||null,A=arguments[2],q=arguments[3],K=arguments[4]||0);let Te,Ue,Be,He,qe,Ye,ke,ft,_t;const Et=A.isCompressedTexture?A.mipmaps[K]:A.image;ie!==null?(Te=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,Be=ie.max.z-ie.min.z,He=ie.min.x,qe=ie.min.y,Ye=ie.min.z):(Te=Et.width,Ue=Et.height,Be=Et.depth,He=0,qe=0,Ye=0),oe!==null?(ke=oe.x,ft=oe.y,_t=oe.z):(ke=0,ft=0,_t=0);const on=Ce.convert(q.format),rt=Ce.convert(q.type);let Ve;if(q.isData3DTexture)S.setTexture3D(q,0),Ve=g.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)S.setTexture2DArray(q,0),Ve=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment);const Gt=g.getParameter(g.UNPACK_ROW_LENGTH),ot=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Mn=g.getParameter(g.UNPACK_SKIP_PIXELS),ps=g.getParameter(g.UNPACK_SKIP_ROWS),an=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,Et.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Et.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,He),g.pixelStorei(g.UNPACK_SKIP_ROWS,qe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ye),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(Ve,K,ke,ft,_t,Te,Ue,Be,on,rt,Et.data):q.isCompressedArrayTexture?g.compressedTexSubImage3D(Ve,K,ke,ft,_t,Te,Ue,Be,on,Et.data):g.texSubImage3D(Ve,K,ke,ft,_t,Te,Ue,Be,on,rt,Et),g.pixelStorei(g.UNPACK_ROW_LENGTH,Gt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ot),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Mn),g.pixelStorei(g.UNPACK_SKIP_ROWS,ps),g.pixelStorei(g.UNPACK_SKIP_IMAGES,an),K===0&&q.generateMipmaps&&g.generateMipmap(Ve),I.unbindTexture()},this.initRenderTarget=function(A){j.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),I.unbindTexture()},this.resetState=function(){F=0,P=0,R=null,I.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hc?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===aa?"display-p3":"srgb"}}class ls extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ie:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new W,s=[],r=[],o=[],a=new W,l=new xt;for(let m=0;m<=e;m++){const _=m/e;s[m]=this.getTangentAt(_,new W)}r[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ut(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ut(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qc extends Xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ie){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ZS extends qc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Eo=new W,il=new Yc,sl=new Yc,rl=new Yc;class JS extends Xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new W){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Eo.subVectors(s[0],s[1]).add(s[0]),c=Eo);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Eo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);x<1e-4&&(x=1),_<1e-4&&(_=x),d<1e-4&&(d=x),il.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,x,d),sl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,x,d),rl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,x,d)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),rl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(il.calc(l),sl.calc(l),rl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function QS(n,e){const t=1-n;return t*t*e}function eE(n,e){return 2*(1-n)*n*e}function tE(n,e){return n*n*e}function wr(n,e,t,i){return QS(n,e)+eE(n,t)+tE(n,i)}function nE(n,e){const t=1-n;return t*t*t*e}function iE(n,e){const t=1-n;return 3*t*t*n*e}function sE(n,e){return 3*(1-n)*n*n*e}function rE(n,e){return n*n*n*e}function br(n,e,t,i,s){return nE(n,e)+iE(n,t)+sE(n,i)+rE(n,s)}class Vd extends Xn{constructor(e=new Ie,t=new Ie,i=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ie){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oE extends Xn{constructor(e=new W,t=new W,i=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new W){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y),br(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wd extends Xn{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aE extends Xn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends Xn{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lE extends Xn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y),wr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Vh(a,l.x,c.x,h.x,u.x),Vh(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}}var oc=Object.freeze({__proto__:null,ArcCurve:ZS,CatmullRomCurve3:JS,CubicBezierCurve:Vd,CubicBezierCurve3:oE,EllipseCurve:qc,LineCurve:Wd,LineCurve3:aE,QuadraticBezierCurve:Xd,QuadraticBezierCurve3:lE,SplineCurve:qd});class cE extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new oc[s.type]().fromJSON(s))}return this}}class ac extends cE{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Wd(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Xd(this.currentPoint.clone(),new Ie(e,t),new Ie(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Vd(this.currentPoint.clone(),new Ie(e,t),new Ie(i,s),new Ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new qd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new qc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mt extends yn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new W,h=new Ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=i+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dn extends yn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let _=0;const x=[],d=i/2;let p=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(m,2));function b(){const E=new W,F=new W;let P=0;const R=(t-e)/i;for(let N=0;N<=r;N++){const ne=[],y=N/r,w=y*(t-e)+e;for(let $=0;$<=s;$++){const k=$/s,Z=k*l+a,ae=Math.sin(Z),H=Math.cos(Z);F.x=w*ae,F.y=-y*i+d,F.z=w*H,u.push(F.x,F.y,F.z),E.set(ae,R,H).normalize(),f.push(E.x,E.y,E.z),m.push(k,1-y),ne.push(_++)}x.push(ne)}for(let N=0;N<s;N++)for(let ne=0;ne<r;ne++){const y=x[ne][N],w=x[ne+1][N],$=x[ne+1][N+1],k=x[ne][N+1];e>0&&(h.push(y,w,k),P+=3),t>0&&(h.push(w,$,k),P+=3)}c.addGroup(p,P,0),p+=P}function M(E){const F=_,P=new Ie,R=new W;let N=0;const ne=E===!0?e:t,y=E===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,d*y,0),f.push(0,y,0),m.push(.5,.5),_++;const w=_;for(let $=0;$<=s;$++){const Z=$/s*l+a,ae=Math.cos(Z),H=Math.sin(Z);R.x=ne*H,R.y=d*y,R.z=ne*ae,u.push(R.x,R.y,R.z),f.push(0,y,0),P.x=ae*.5+.5,P.y=H*.5*y+.5,m.push(P.x,P.y),_++}for(let $=0;$<s;$++){const k=F+$,Z=w+$;E===!0?h.push(Z,Z+1,k):h.push(Z+1,Z,k),N+=3}c.addGroup(p,N,E===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ln extends ac{constructor(e){super(e),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ac().fromJSON(s))}return this}}const uE={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Yd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,m;if(i&&(r=mE(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let _=t;_<s;_+=t)u=n[_],f=n[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Br(r,o,t,a,l,m,0),o}};function Yd(n,e,t,i,s){let r,o;if(s===TE(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Wh(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Wh(r,n[r],n[r+1],o);return o&&ua(o,o.next)&&(Gr(o),o=o.next),o}function is(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ua(t,t.next)||yt(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Br(n,e,t,i,s,r,o){if(!n)return;!o&&r&&yE(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?fE(n,i,s,r):hE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Gr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=dE(is(n),e,t),Br(n,e,t,i,s,r,2)):o===2&&pE(n,e,t,i,s,r):Br(is(n),e,t,i,s,r,1);break}}}function hE(n){const e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=m&&Ns(s,a,r,l,o,c,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function fE(n,e,t,i){const s=n.prev,r=n,o=n.next;if(yt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,d=h>u?h>f?h:f:u>f?u:f,p=lc(m,_,e,t,i),b=lc(x,d,e,t,i);let M=n.prevZ,E=n.nextZ;for(;M&&M.z>=p&&E&&E.z<=b;){if(M.x>=m&&M.x<=x&&M.y>=_&&M.y<=d&&M!==s&&M!==o&&Ns(a,h,l,u,c,f,M.x,M.y)&&yt(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=m&&E.x<=x&&E.y>=_&&E.y<=d&&E!==s&&E!==o&&Ns(a,h,l,u,c,f,E.x,E.y)&&yt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=p;){if(M.x>=m&&M.x<=x&&M.y>=_&&M.y<=d&&M!==s&&M!==o&&Ns(a,h,l,u,c,f,M.x,M.y)&&yt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=b;){if(E.x>=m&&E.x<=x&&E.y>=_&&E.y<=d&&E!==s&&E!==o&&Ns(a,h,l,u,c,f,E.x,E.y)&&yt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function dE(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!ua(s,r)&&$d(s,i,i.next,r)&&zr(s,r)&&zr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Gr(i),Gr(i.next),i=n=r),i=i.next}while(i!==n);return is(i)}function pE(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&EE(o,a)){let l=Kd(o,a);o=is(o,o.next),l=is(l,l.next),Br(o,e,t,i,s,r,0),Br(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function mE(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Yd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(SE(c));for(s.sort(gE),r=0;r<s.length;r++)t=_E(s[r],t);return t}function gE(n,e){return n.x-e.x}function _E(n,e){const t=vE(n,e);if(!t)return e;const i=Kd(t,n);return is(i,i.next),is(t,t.next)}function vE(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ns(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),zr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&xE(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function xE(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function yE(n,e,t,i){let s=n;do s.z===0&&(s.z=lc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ME(s)}function ME(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function lc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function SE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ns(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function EE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!wE(n,e)&&(zr(n,e)&&zr(e,n)&&bE(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||ua(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ua(n,e){return n.x===e.x&&n.y===e.y}function $d(n,e,t,i){const s=bo(yt(n,e,t)),r=bo(yt(n,e,i)),o=bo(yt(t,i,n)),a=bo(yt(t,i,e));return!!(s!==r&&o!==a||s===0&&wo(n,t,e)||r===0&&wo(n,i,e)||o===0&&wo(t,n,i)||a===0&&wo(t,e,i))}function wo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function bo(n){return n>0?1:n<0?-1:0}function wE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&$d(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function zr(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function bE(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Kd(n,e){const t=new cc(n.i,n.x,n.y),i=new cc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Wh(n,e,t,i){const s=new cc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function cc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function TE(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Vs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Vs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Xh(e),qh(i,e);let o=e.length;t.forEach(Xh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,qh(i,t[l]);const a=uE.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Xh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function qh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class qn extends yn{constructor(e=new Ln([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Tt(s,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:AE;let M,E=!1,F,P,R,N;p&&(M=p.getSpacedPoints(h),E=!0,f=!1,F=p.computeFrenetFrames(h,!1),P=new W,R=new W,N=new W),f||(d=0,m=0,_=0,x=0);const ne=a.extractPoints(c);let y=ne.shape;const w=ne.holes;if(!Vs.isClockWise(y)){y=y.reverse();for(let ee=0,g=w.length;ee<g;ee++){const T=w[ee];Vs.isClockWise(T)&&(w[ee]=T.reverse())}}const k=Vs.triangulateShape(y,w),Z=y;for(let ee=0,g=w.length;ee<g;ee++){const T=w[ee];y=y.concat(T)}function ae(ee,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(g,T)}const H=y.length,Q=k.length;function X(ee,g,T){let L,D,I;const Y=ee.x-g.x,j=ee.y-g.y,S=T.x-ee.x,v=T.y-ee.y,C=Y*Y+j*j,V=Y*v-j*S;if(Math.abs(V)>Number.EPSILON){const O=Math.sqrt(C),G=Math.sqrt(S*S+v*v),de=g.x-j/O,ce=g.y+Y/O,me=T.x-v/G,be=T.y+S/G,fe=((me-de)*v-(be-ce)*S)/(Y*v-j*S);L=de+Y*fe-ee.x,D=ce+j*fe-ee.y;const ye=L*L+D*D;if(ye<=2)return new Ie(L,D);I=Math.sqrt(ye/2)}else{let O=!1;Y>Number.EPSILON?S>Number.EPSILON&&(O=!0):Y<-Number.EPSILON?S<-Number.EPSILON&&(O=!0):Math.sign(j)===Math.sign(v)&&(O=!0),O?(L=-j,D=Y,I=Math.sqrt(C)):(L=Y,D=j,I=Math.sqrt(C/2))}return new Ie(L/I,D/I)}const pe=[];for(let ee=0,g=Z.length,T=g-1,L=ee+1;ee<g;ee++,T++,L++)T===g&&(T=0),L===g&&(L=0),pe[ee]=X(Z[ee],Z[T],Z[L]);const Me=[];let _e,Ae=pe.concat();for(let ee=0,g=w.length;ee<g;ee++){const T=w[ee];_e=[];for(let L=0,D=T.length,I=D-1,Y=L+1;L<D;L++,I++,Y++)I===D&&(I=0),Y===D&&(Y=0),_e[L]=X(T[L],T[I],T[Y]);Me.push(_e),Ae=Ae.concat(_e)}for(let ee=0;ee<d;ee++){const g=ee/d,T=m*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let D=0,I=Z.length;D<I;D++){const Y=ae(Z[D],pe[D],L);U(Y.x,Y.y,-T)}for(let D=0,I=w.length;D<I;D++){const Y=w[D];_e=Me[D];for(let j=0,S=Y.length;j<S;j++){const v=ae(Y[j],_e[j],L);U(v.x,v.y,-T)}}}const Oe=_+x;for(let ee=0;ee<H;ee++){const g=f?ae(y[ee],Ae[ee],Oe):y[ee];E?(R.copy(F.normals[0]).multiplyScalar(g.x),P.copy(F.binormals[0]).multiplyScalar(g.y),N.copy(M[0]).add(R).add(P),U(N.x,N.y,N.z)):U(g.x,g.y,0)}for(let ee=1;ee<=h;ee++)for(let g=0;g<H;g++){const T=f?ae(y[g],Ae[g],Oe):y[g];E?(R.copy(F.normals[ee]).multiplyScalar(T.x),P.copy(F.binormals[ee]).multiplyScalar(T.y),N.copy(M[ee]).add(R).add(P),U(N.x,N.y,N.z)):U(T.x,T.y,u/h*ee)}for(let ee=d-1;ee>=0;ee--){const g=ee/d,T=m*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let D=0,I=Z.length;D<I;D++){const Y=ae(Z[D],pe[D],L);U(Y.x,Y.y,u+T)}for(let D=0,I=w.length;D<I;D++){const Y=w[D];_e=Me[D];for(let j=0,S=Y.length;j<S;j++){const v=ae(Y[j],_e[j],L);E?U(v.x,v.y+M[h-1].y,M[h-1].x+T):U(v.x,v.y,u+T)}}}re(),he();function re(){const ee=s.length/3;if(f){let g=0,T=H*g;for(let L=0;L<Q;L++){const D=k[L];le(D[2]+T,D[1]+T,D[0]+T)}g=h+d*2,T=H*g;for(let L=0;L<Q;L++){const D=k[L];le(D[0]+T,D[1]+T,D[2]+T)}}else{for(let g=0;g<Q;g++){const T=k[g];le(T[2],T[1],T[0])}for(let g=0;g<Q;g++){const T=k[g];le(T[0]+H*h,T[1]+H*h,T[2]+H*h)}}i.addGroup(ee,s.length/3-ee,0)}function he(){const ee=s.length/3;let g=0;Se(Z,g),g+=Z.length;for(let T=0,L=w.length;T<L;T++){const D=w[T];Se(D,g),g+=D.length}i.addGroup(ee,s.length/3-ee,1)}function Se(ee,g){let T=ee.length;for(;--T>=0;){const L=T;let D=T-1;D<0&&(D=ee.length-1);for(let I=0,Y=h+d*2;I<Y;I++){const j=H*I,S=H*(I+1),v=g+L+j,C=g+D+j,V=g+D+S,O=g+L+S;se(v,C,V,O)}}}function U(ee,g,T){l.push(ee),l.push(g),l.push(T)}function le(ee,g,T){ue(ee),ue(g),ue(T);const L=s.length/3,D=b.generateTopUV(i,s,L-3,L-2,L-1);Ee(D[0]),Ee(D[1]),Ee(D[2])}function se(ee,g,T,L){ue(ee),ue(g),ue(L),ue(g),ue(T),ue(L);const D=s.length/3,I=b.generateSideWallUV(i,s,D-6,D-3,D-2,D-1);Ee(I[0]),Ee(I[1]),Ee(I[3]),Ee(I[1]),Ee(I[2]),Ee(I[3])}function ue(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Ee(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return RE(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new oc[s.type]().fromJSON(s)),new qn(i,e.options)}}const AE={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Ie(r,o),new Ie(a,l),new Ie(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],m=e[s*3+1],_=e[s*3+2],x=e[r*3],d=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ie(o,1-l),new Ie(c,1-u),new Ie(f,1-_),new Ie(x,1-p)]:[new Ie(a,1-l),new Ie(h,1-u),new Ie(m,1-_),new Ie(d,1-p)]}};function RE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ne extends yn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new W,f=new W,m=[],_=[],x=[],d=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let E=0;p===0&&o===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let F=0;F<=t;F++){const P=F/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),d.push(P+E,1-M),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const M=h[p][b+1],E=h[p][b],F=h[p+1][b],P=h[p+1][b+1];(p!==0||o>0)&&m.push(M,E,P),(p!==i-1||l<Math.PI)&&m.push(E,F,P)}this.setIndex(m),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ne(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $c extends yn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new W,u=new W,f=new W;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const x=_/s*r,d=m/i*Math.PI*2;u.x=(e+t*Math.cos(d))*Math.cos(x),u.y=(e+t*Math.cos(d))*Math.sin(x),u.z=t*Math.sin(d),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const x=(s+1)*m+_-1,d=(s+1)*(m-1)+_-1,p=(s+1)*(m-1)+_,b=(s+1)*m+_;o.push(x,d,b),o.push(d,p,b)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jd extends qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fe extends jd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const qo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class CE{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const PE=new CE;class Yr{constructor(e){this.manager=e!==void 0?e:PE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class LE extends Error{constructor(e,t){super(e),this.response=t}}class IE extends Yr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=qo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:i,onError:s});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ei[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,_=m!==0;let x=0;const d=new ReadableStream({start(p){b();function b(){u.read().then(({done:M,value:E})=>{if(M)p.close();else{x+=E.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let P=0,R=h.length;P<R;P++){const N=h[P];N.onProgress&&N.onProgress(F)}p.enqueue(E),b()}},M=>{p.error(M)})}}});return new Response(d)}else throw new LE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{qo.add(e,c);const h=ei[e];delete ei[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=ei[e];if(h===void 0)throw this.manager.itemError(e),c;delete ei[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class DE extends Yr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=qo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Or("img");function l(){h(),qo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class cs extends Yr{constructor(e){super(e)}load(e,t,i,s){const r=new en,o=new DE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Kc extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ol=new xt,Yh=new W,$h=new W;class Zd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kh=new xt,hr=new W,al=new W;class UE extends Zd{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(hr),al.copy(i.position),al.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(al),i.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh)}}class us extends Kc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new UE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class NE extends Zd{constructor(){super(new Od(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hs extends Kc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new NE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fs extends Kc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class FE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jh(){return performance.now()}class OE{constructor(){this.type="ShapePath",this.color=new tt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ac,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let M=0,E=p.length;M<E;M++){const F=p[M],P=new Ln;P.curves=F.curves,b.push(P)}return b}function i(p,b){const M=b.length;let E=!1;for(let F=M-1,P=0;P<M;F=P++){let R=b[F],N=b[P],ne=N.x-R.x,y=N.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=b[P],ne=-ne,N=b[F],y=-y),p.y<R.y||p.y>N.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const w=y*(p.x-R.x)-ne*(p.y-R.y);if(w===0)return!0;if(w<0)continue;E=!E}}else{if(p.y!==R.y)continue;if(N.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=N.x)return!0}}return E}const s=Vs.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Ln,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;const u=[],f=[];let m=[],_=0,x;f[_]=void 0,m[_]=[];for(let p=0,b=r.length;p<b;p++)a=r[p],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new Ln,p:x},f[_].s.curves=a.curves,h&&_++,m[_]=[]):m[_].push({h:a,p:x[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,b=0;for(let M=0,E=f.length;M<E;M++)u[M]=[];for(let M=0,E=f.length;M<E;M++){const F=m[M];for(let P=0;P<F.length;P++){const R=F[P];let N=!0;for(let ne=0;ne<f.length;ne++)i(R.p,f[ne].p)&&(M!==ne&&b++,N?(N=!1,u[ne].push(R)):p=!0);N&&u[M].push(R)}}b>0&&p===!1&&(m=u)}let d;for(let p=0,b=f.length;p<b;p++){l=f[p].s,c.push(l),d=m[p];for(let M=0,E=d.length;M<E;M++)l.holes.push(d[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);class ds extends Yr{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new IE(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},i,s)}parse(e){return new BE(e)}}class BE{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=zE(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function zE(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=GE(h,s,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function GE(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new OE;let a,l,c,h,u,f,m,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,p=x.length;d<p;)switch(x[d++]){case"m":a=x[d++]*e+t,l=x[d++]*e+i,o.moveTo(a,l);break;case"l":a=x[d++]*e+t,l=x[d++]*e+i,o.lineTo(a,l);break;case"q":c=x[d++]*e+t,h=x[d++]*e+i,u=x[d++]*e+t,f=x[d++]*e+i,o.quadraticCurveTo(u,f,c,h);break;case"b":c=x[d++]*e+t,h=x[d++]*e+i,u=x[d++]*e+t,f=x[d++]*e+i,m=x[d++]*e+t,_=x[d++]*e+i,o.bezierCurveTo(u,f,m,_,c,h);break}}return{offsetX:r.ha*e,path:o}}class Nt extends qn{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const s=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const HE=Wn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=null,s=nt(!1),r=nt(!1),o=nt(!1);return hi(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ls,c=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),h=new as({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new $e,f=new fs(16777215,2);l.add(f);const m=new hs(16777215,4);m.position.set(5,5,5),l.add(m);const _=new us(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new cs,d=x.load("/3d-bear-arts/assets/lv2.jpg"),p=x.load("/3d-bear-arts/assets/lv2.jpg");d.wrapS=d.wrapT=Ot,p.wrapS=p.wrapT=Ot;const b=new Fe({color:8343336,metalness:0,roughness:.8,bumpMap:d,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),M=new Fe({color:5978654,metalness:0,roughness:.8,bumpMap:d,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),E=new Fe({color:13152668,metalness:.2,roughness:.05,bumpMap:d,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:p,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:st});new Fe({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const F=new Ne(1,32,32,0,Math.PI),P=new z(F,E),R=new z(F,b);P.scale.set(.85,.85,.8),R.scale.set(.85,.85,.8),P.position.y=-.2,R.position.y=-.2,P.rotation.y=Math.PI/2,R.rotation.y=Math.PI*1.5;const N=new Mt(1,32),ne=new z(N,b);ne.scale.set(.85,.85,.8),ne.position.set(0,-.2,0),ne.rotation.y=Math.PI/2;const y=new $e;y.add(P),y.add(R),y.add(ne),u.add(y);const w=new Ne(.6,32,32,0,Math.PI),$=new z(w,b);$.scale.set(1,.95,.95),$.position.set(0,1,0),$.rotation.y=Math.PI*1.5;const k=new z(w,E);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI/2;const Z=new Mt(.6,32),ae=new z(Z,b);ae.position.set(0,1,0),ae.rotation.y=Math.PI/2,ae.scale.set(1,.95,.95);const H=new $e;H.add($),H.add(k),H.add(ae),u.add(H);const Q=new Ne(.25,32,32),X=new z(Q,b);X.position.set(-.45,1.35,-.1),u.add(X);const pe=new z(Q,E);pe.position.set(.45,1.35,-.1),u.add(pe);const Me=new Ne(.25,32,32,Math.PI/2,Math.PI),_e=new z(Me,M);_e.scale.set(1.1,.6,.8),_e.position.set(0,.84,.5),_e.rotation.y=Math.PI;const Ae=new Ne(.25,32,32,Math.PI/2,Math.PI),Oe=new z(Ae,E);Oe.scale.set(1.1,.6,.8),Oe.position.set(0,.84,.5),Oe.rotation.y=0;const re=new Mt(.25,32),he=new z(re,b);he.scale.set(.8,.6,.8),he.position.set(0,.84,.5),he.rotation.y=Math.PI/2;const Se=new $e;Se.add(_e),Se.add(Oe),Se.add(he),u.add(Se);const U=new Ln;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const le={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Fe({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const se=new qn(U,le),ue=new z(se,b);ue.scale.set(.1,.1,.1),ue.rotation.z=it.degToRad(210),ue.rotation.x=it.degToRad(5),ue.rotation.y=it.degToRad(-45),ue.position.set(-.4,.9,.45);const Ee=new z(se,M);Ee.scale.set(.6,.5,.5),Ee.position.set(.35,0,0),Ee.rotation.y=Math.PI,Ee.rotation.x=Math.PI;const ee=new z(se,M);ee.scale.set(.2,.2,.2),ee.position.set(.5,-.1,.2),ee.rotation.y=Math.PI,ee.rotation.x=Math.PI,u.add(ee);const g=new os(1.3,1.2,.6),T=new z(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new $c(.15,.025,10,100);new Fe({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const D=new z(L,b);D.position.set(.35,.1,.1),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/8,D.rotation.y=Math.PI/14;const I=new z(L,b);I.position.set(.35,.1,.13),I.rotation.z=Math.PI/2,I.rotation.x=Math.PI/-8,I.rotation.y=Math.PI/12;const Y=new $e;Y.add(T),Y.add(D),Y.add(I),u.add(Y);const j=new Ne(.35,32,32),S=new z(j,b);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),u.add(S);const v=new z(j,E);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new Dn(.2,.22,.6,32),V=new z(C,b);V.position.set(-.4,-1.05,0),u.add(V);const O=new z(C,E);O.position.set(.4,-1.05,0),u.add(O);const G=new Ne(.3,32,32),de=new z(G,b);de.scale.set(1,.72,1.5),de.position.set(-.4,-1.45,.17),u.add(de);const ce=new z(G,E);ce.scale.set(1,.72,1.5),ce.position.set(.4,-1.45,.17),u.add(ce);const me=new Ne(.44,32,32),be=new z(me,b);be.position.set(-.15,-.45,-.4),u.add(be);const fe=new z(me,E);fe.position.set(.15,-.45,-.4),u.add(fe);const ye=new Ne(.18,32,32),Re=new z(ye,b);Re.position.set(0,-.35,-.8),u.add(Re),new ds().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(te){const ve=new Nt("X",{font:te,size:.2,depth:.05});new sn({color:0});const ge=new z(ve,M);ge.position.set(-.3,.99,.53),ge.rotation.x=it.degToRad(-5),ge.rotation.y=it.degToRad(-15),u.add(ge);const De=new Nt("O",{font:te,size:.2,depth:.05});new sn({color:0});const Xe=new z(De,M);Xe.position.set(.14,.99,.53),Xe.rotation.y=it.degToRad(12),Xe.rotation.x=it.degToRad(-5),u.add(Xe)}),Re.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const we=()=>{u.rotation.y,u.rotation.x},ze=()=>{s.value=!0,r.value=!1,o.value=!1},Ce=()=>{s.value=!1,r.value=!0,o.value=!1},Ge=()=>{s.value=!1,r.value=!1,we()},B=te=>{const ve=window.innerWidth/2;te>ve?ze():Ce(),we()},xe=te=>{clearTimeout(i),Ge(),o.value=!0;const ve={x:te.clientX/window.innerWidth*2-1,y:-(te.clientY/window.innerHeight)*2+1};if(o.value){const ge=ve.x*Math.PI*.2,De=ve.y*Math.PI*.2;u.rotation.y=ge,u.rotation.x=De}i=setTimeout(()=>{o.value=!1,B(te.clientX)},500)};window.addEventListener("mousemove",xe);const J=te=>{if(o.value){const ve={x:te.clientX/window.innerWidth*2-1,y:-(te.clientY/window.innerHeight)*2+1},ge=ve.x*Math.PI*.2,De=ve.y*Math.PI*.2;u.rotation.y=ge,u.rotation.x=De}};window.addEventListener("mousemove",J),a(),Ft(()=>e.bodyPosition,te=>{u.position.set(te.x,te.y,te.z)}),Ft(()=>e.cameraPosition,te=>{c.position.set(e.bodyPosition.x,1,te),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Ii(),Di("div",{ref_key:"threeCanvas",ref:t,class:Vn(n.background?"no-bg":"three-canvas")},null,2))}}),kE=Ui(HE,[["__scopeId","data-v-f3beb116"]]),VE=Wn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=null,s=nt(!1),r=nt(!1),o=nt(!1);return hi(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ls,c=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),h=new as({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new $e,f=new fs(16777215,2);l.add(f);const m=new hs(16777215,4);m.position.set(5,5,5),l.add(m);const _=new us(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new cs,d=x.load("/3d-bear-arts/assets/pop6.jpg"),p=x.load("/3d-bear-arts/assets/pop7.jpg");d.wrapS=d.wrapT=Ot,p.wrapS=p.wrapT=Ot;const b=new Fe({color:16738740,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),M=new Fe({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st}),E=new Fe({color:16766720,map:d,metalness:.3,roughness:.5}),F=new Fe({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st}),P=new Fe({color:9055202,map:d,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Fe({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st});const R=new Fe({color:65535,map:d,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),N=new Fe({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st}),ne=new Ne(1,32,32,0,Math.PI),y=new z(ne,M),w=new z(ne,b);y.scale.set(.85,.85,.8),w.scale.set(.85,.85,.8),y.position.y=-.2,w.position.y=-.2,y.rotation.y=Math.PI/2,w.rotation.y=Math.PI*1.5;const $=new Mt(1,32),k=new z($,b);k.scale.set(.85,.85,.8),k.position.set(0,-.2,0),k.rotation.y=Math.PI/2;const Z=new $e;Z.add(y),Z.add(w),Z.add(k),u.add(Z);const ae=new Ne(.6,32,32,0,Math.PI),H=new z(ae,E);H.scale.set(1,.95,.95),H.position.set(0,1,0),H.rotation.y=Math.PI*1.5;const Q=new z(ae,F);Q.scale.set(1,.95,.95),Q.position.set(0,1,0),Q.rotation.y=Math.PI/2;const X=new Mt(.6,32),pe=new z(X,E);pe.position.set(0,1,0),pe.rotation.y=Math.PI/2,pe.scale.set(1,.95,.95);const Me=new $e;Me.add(H),Me.add(Q),Me.add(pe),u.add(Me);const _e=new Ne(.25,32,32),Ae=new z(_e,b);Ae.position.set(-.45,1.35,-.1),u.add(Ae);const Oe=new z(_e,M);Oe.position.set(.45,1.35,-.1),u.add(Oe);const re=new Ne(.25,32,32,Math.PI/2,Math.PI),he=new z(re,E);he.scale.set(1.1,.6,.8),he.position.set(0,.84,.5),he.rotation.y=Math.PI;const Se=new Ne(.25,32,32,Math.PI/2,Math.PI),U=new z(Se,F);U.scale.set(1.1,.6,.8),U.position.set(0,.84,.5),U.rotation.y=0;const le=new Mt(.25,32),se=new z(le,E);se.scale.set(.8,.6,.8),se.position.set(0,.84,.5),se.rotation.y=Math.PI/2;const ue=new $e;ue.add(he),ue.add(U),ue.add(se),u.add(ue);const Ee=new Ln;Ee.moveTo(0,0),Ee.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Ee.bezierCurveTo(-.6,.3,0,.6,0,1),Ee.bezierCurveTo(0,.6,.6,.3,.6,0),Ee.bezierCurveTo(.6,-.3,0,-.3,0,0);const ee={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new qn(Ee,ee),T=new z(g,E);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new z(g,R);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const D=new z(g,b);D.scale.set(.25,.25,.27),D.position.set(.4,.3,-.2),D.rotation.y=Math.PI,D.rotation.x=Math.PI,u.add(D);const I=new Ne(.35,32,32),Y=new z(I,R);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),u.add(Y);const j=new z(I,N);j.scale.set(.75,1.25,.65),j.position.set(.7,-.15,.2),u.add(j);const S=new Dn(.2,.22,.6,32),v=new z(S,E);v.position.set(-.4,-1.05,0),u.add(v);const C=new z(S,F);C.position.set(.4,-1.05,0),u.add(C);const V=new Ne(.3,32,32),O=new z(V,E);O.scale.set(1,.72,1.5),O.position.set(-.4,-1.45,.17),u.add(O);const G=new z(V,F);G.scale.set(1,.72,1.5),G.position.set(.4,-1.45,.17),u.add(G);const de=new Ne(.44,32,32),ce=new z(de,b);ce.position.set(-.15,-.45,-.4),u.add(ce);const me=new z(de,M);me.position.set(.15,-.45,-.4),u.add(me);const be=new Ne(.18,32,32),fe=new z(be,b);fe.position.set(0,-.35,-.8),u.add(fe),new ds().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xe){const J=new Nt("X",{font:xe,size:.2,depth:.05});new sn({color:0});const te=new z(J,b);te.position.set(-.3,.99,.53),te.rotation.x=it.degToRad(-5),te.rotation.y=it.degToRad(-15),u.add(te);const ve=new Nt("O",{font:xe,size:.2,depth:.05});new sn({color:0});const ge=new z(ve,R);ge.position.set(.14,.99,.53),ge.rotation.y=it.degToRad(12),ge.rotation.x=it.degToRad(-5),u.add(ge);const De=new Nt("POP",{font:xe,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Xe=new Fe({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Fe({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const et=new Fe({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),We=new Fe({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ut=new z(De,Xe);ut.scale.set(.15,.15,.15),ut.position.set(.03,1.16,.1),ut.rotateZ(-25),u.add(ut);const ht=new z(De,P);ht.scale.set(.14,.14,.14),ht.rotateZ(45),ht.position.set(.2,-.7,.3),u.add(ht);const kt=new z(De,et);kt.scale.set(.14,.14,.14),kt.rotateZ(45),kt.rotateY(45),kt.position.set(.3,.7,.3),u.add(kt);const wt=new z(De,et);wt.scale.set(.15,.15,.15),wt.rotateZ(45),wt.rotateY(45),wt.position.set(.35,-1.5,.3),u.add(wt);const St=new z(De,We);St.scale.set(.17,.17,.17),St.rotateZ(45),St.rotateY(15),St.position.set(.35,1,.3),u.add(St)}),fe.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const Re=()=>{u.rotation.y,u.rotation.x},Pe=()=>{s.value=!0,r.value=!1,o.value=!1},we=()=>{s.value=!1,r.value=!0,o.value=!1},ze=()=>{s.value=!1,r.value=!1,Re()},Ce=xe=>{const J=window.innerWidth/2;xe>J?Pe():we(),Re()},Ge=xe=>{clearTimeout(i),ze(),o.value=!0;const J={x:xe.clientX/window.innerWidth*2-1,y:-(xe.clientY/window.innerHeight)*2+1};if(o.value){const te=J.x*Math.PI*.2,ve=J.y*Math.PI*.2;u.rotation.y=te,u.rotation.x=ve}i=setTimeout(()=>{o.value=!1,Ce(xe.clientX)},500)};window.addEventListener("mousemove",Ge);const B=xe=>{if(o.value){const J={x:xe.clientX/window.innerWidth*2-1,y:-(xe.clientY/window.innerHeight)*2+1},te=J.x*Math.PI*.2,ve=J.y*Math.PI*.2;u.rotation.y=te,u.rotation.x=ve}};window.addEventListener("mousemove",B),a(),Ft(()=>e.bodyPosition,xe=>{u.position.set(xe.x,xe.y,xe.z)}),Ft(()=>e.cameraPosition,xe=>{c.position.set(e.bodyPosition.x,1,xe),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Ii(),Di("div",{ref_key:"threeCanvas",ref:t,class:Vn(n.background?"no-bg":"three-canvas")},null,2))}}),WE=Ui(VE,[["__scopeId","data-v-8cfea564"]]),XE={class:"pixel-controls"},qE={class:"side-buttons"},YE=Wn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);hi(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03);const te=xe.getElapsedTime();B.forEach((ve,ge)=>{const De=.2+Math.sin(te*3+J[ge])*.1;ve.scale.set(De,De,De)}),x.render(m,_)};const m=new ls,_=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),x=new as({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new $e,p=new $e;m.add(p);const b=new fs(16777215,2);m.add(b);const M=new hs(16777215,4);M.position.set(5,5,5),m.add(M);const E=new us(16777215,5,50);E.position.set(0,2,4),m.add(E);const F=new cs,P=F.load("/3d-bear-arts/assets/pop6.jpg"),R=F.load("/3d-bear-arts/assets/pop7.jpg");P.wrapS=P.wrapT=Ot,R.wrapS=R.wrapT=Ot,R.repeat.set(2,2);const N=new Fe({color:16738740,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),ne=new Fe({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st}),y=new Fe({color:16766720,map:P,metalness:.3,roughness:.5}),w=new Fe({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st}),$=new Fe({color:9055202,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Fe({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st});const k=new Fe({color:65535,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Fe({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st}),ae=new Ne(1,32,32,0,Math.PI),H=new z(ae,ne),Q=new z(ae,N);H.scale.set(.85,.85,.8),Q.scale.set(.85,.85,.8),H.position.y=-.2,Q.position.y=-.2,H.rotation.y=Math.PI/2,Q.rotation.y=Math.PI*1.5;const X=new Mt(1,32),pe=new z(X,N);pe.scale.set(.85,.85,.8),pe.position.set(0,-.2,0),pe.rotation.y=Math.PI/2;const Me=new $e;Me.add(H),Me.add(Q),Me.add(pe),d.add(Me);const _e=new Ne(.6,32,32,0,Math.PI),Ae=new z(_e,y);Ae.scale.set(1,.95,.95),Ae.position.set(0,1,0),Ae.rotation.y=Math.PI*1.5;const Oe=new z(_e,w);Oe.scale.set(1,.95,.95),Oe.position.set(0,1,0),Oe.rotation.y=Math.PI/2;const re=new Mt(.6,32),he=new z(re,y);he.position.set(0,1,0),he.rotation.y=Math.PI/2,he.scale.set(1,.95,.95);const Se=new $e;Se.add(Ae),Se.add(Oe),Se.add(he),d.add(Se);const U=new Ne(.25,32,32),le=new z(U,N);le.position.set(-.45,1.35,-.1),d.add(le);const se=new z(U,ne);se.position.set(.45,1.35,-.1),d.add(se);const ue=new Ne(.25,32,32,Math.PI/2,Math.PI),Ee=new z(ue,y);Ee.scale.set(1.1,.6,.8),Ee.position.set(0,.84,.5),Ee.rotation.y=Math.PI;const ee=new Ne(.25,32,32,Math.PI/2,Math.PI),g=new z(ee,w);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Mt(.25,32),L=new z(T,y);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const D=new $e;D.add(Ee),D.add(g),D.add(L),d.add(D);const I=new Ln;I.moveTo(0,0),I.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),I.bezierCurveTo(-.6,.3,0,.6,0,1),I.bezierCurveTo(0,.6,.6,.3,.6,0),I.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},j=new qn(I,Y),S=new z(j,y);S.scale.set(.5,.5,.5),S.position.set(.3,0,0),S.rotation.y=Math.PI,S.rotation.x=Math.PI,d.add(S);const v=new z(j,k);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,d.add(v);const C=new z(j,N);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,d.add(C);const V=new Ne(.35,32,32),O=new z(V,k);O.scale.set(.75,1.25,.65),O.position.set(-.7,-.15,.2),d.add(O);const G=new z(V,Z);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),d.add(G);const de=new Dn(.2,.22,.6,32),ce=new z(de,y);ce.position.set(-.4,-1.05,0),d.add(ce);const me=new z(de,w);me.position.set(.4,-1.05,0),d.add(me);const be=new Ne(.3,32,32),fe=new z(be,y);fe.scale.set(1,.72,1.5),fe.position.set(-.4,-1.45,.17),d.add(fe);const ye=new z(be,w);ye.scale.set(1,.72,1.5),ye.position.set(.4,-1.45,.17),d.add(ye);const Re=new Ne(.44,32,32),Pe=new z(Re,N);Pe.position.set(-.15,-.45,-.4),d.add(Pe);const we=new z(Re,ne);we.position.set(.15,-.45,-.4),d.add(we);const ze=new Ne(.18,32,32),Ce=new z(ze,N);Ce.position.set(0,-.35,-.8),d.add(Ce),new ds().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(te){const ve=new Nt("X",{font:te,size:.2,depth:.05});new sn({color:0});const ge=new z(ve,N);ge.position.set(-.3,.99,.53),ge.rotation.x=it.degToRad(-5),ge.rotation.y=it.degToRad(-15),d.add(ge);const De=new Nt("O",{font:te,size:.2,depth:.05});new sn({color:0});const Xe=new z(De,k);Xe.position.set(.14,.99,.53),Xe.rotation.y=it.degToRad(12),Xe.rotation.x=it.degToRad(-5),d.add(Xe);const et=new Nt("POP",{font:te,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Nt("🐻",{font:te,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const We=new Nt("BAO      BEAR",{font:te,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ut=new Fe({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Fe({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ht=new Fe({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),kt=new Fe({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),wt=new z(et,ut);wt.scale.set(.15,.15,.15),wt.position.set(.02,1.16,.1),wt.rotateZ(-25),d.add(wt);const St=new z(et,$);St.scale.set(.14,.14,.14),St.rotateZ(45),St.position.set(.2,-.7,.3),d.add(St);const zt=new z(et,ht);zt.scale.set(.14,.14,.14),zt.rotateZ(45),zt.rotateY(45),zt.position.set(.3,.7,.3),d.add(zt);const rn=new z(et,ht);rn.scale.set(.15,.15,.15),rn.rotateZ(45),rn.rotateY(45),rn.position.set(.35,-1.5,.3),d.add(rn);const pn=new z(et,kt);pn.scale.set(.17,.17,.17),pn.rotateZ(45),pn.rotateY(15),pn.position.set(.35,1,.3),d.add(pn);const mn=new z(We,ut);mn.scale.set(.7,.7,.7),mn.position.set(-6,0,-3),p.add(mn)}),Ce.renderOrder=1,d.scale.set(1.4,1.4,1.4),m.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,d.rotation.x=.1;const B=[S,v,C],xe=new FE,J=[0,Math.PI/2,Math.PI,0,Math.PI/3];f(),Ft(()=>e.bodyPosition,te=>{d.position.set(te.x,te.y,te.z)}),Ft(()=>e.cameraPosition,te=>{_.position.set(e.bodyPosition.x,1,te),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(Ii(),Di(tn,null,[Qe("div",{ref_key:"threeCanvas",ref:t,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Qe("div",XE,[Qe("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Qe("div",qE,[Qe("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Qe("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Qe("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),$E=Ui(YE,[["__scopeId","data-v-48c1be4c"]]),KE={class:"pixel-controls"},jE={class:"side-buttons"},ZE=Wn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);hi(()=>{if(t.value){let f=function(ht,kt){const wt=new Dn(Ge,Ge,B,32);wt.rotateX(Math.PI/2);const St=new z(wt,ht),zt=new $e;for(let pn=0;pn<xe;pn++){const mn=pn/xe*Math.PI*2,$r=new os(J,te,ve),fi=new z($r,ht);fi.position.set((Ge+ve/26)*Math.cos(mn),(Ge+ve/26)*Math.sin(mn),0),fi.rotation.z=mn,zt.add(fi)}const rn=new $e;return rn.add(St),rn.add(zt),rn.position.set(kt.x,kt.y,kt.z),rn},m=function(){requestAnimationFrame(m),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),ge.rotation.z-=.02,De.rotation.z+=.03,Xe.rotation.z+=.02,et.rotation.z+=.02,We.rotation.z-=.03,ut.rotation.y+=.04,d.render(_,x)};const _=new ls,x=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),d=new as({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(d.domElement);const p=new $e,b=new $e;_.add(b);const M=new fs(16777215,2);_.add(M);const E=new hs(16777215,4);E.position.set(5,5,5),_.add(E);const F=new us(16777215,5,50);F.position.set(0,2,4),_.add(F);const P=new cs,R=P.load("/3d-bear-arts/assets/metal.jpg"),N=P.load("/3d-bear-arts/assets/pop7.jpg"),ne=P.load("/3d-bear-arts/assets/gear.jpg");R.wrapS=R.wrapT=Ot,N.wrapS=N.wrapT=Ot,N.repeat.set(2,2);const y=new Fe({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:R});ne.mapping=Ur;const w=new Fe({color:"#d3d3d3",metalness:1,roughness:.25,map:R,envMap:ne,clearcoat:.7,clearcoatRoughness:.3}),$=new Fe({color:"#C0C0C0",metalness:1,roughness:.25,envMap:ne,clearcoat:.7,clearcoatRoughness:.3}),k=new Fe({color:"#C0C0C0",metalness:1,roughness:.25,map:R,envMap:ne,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),Z=new Fe({color:"#C0C0C0",metalness:1,roughness:.5,map:R,envMap:ne,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),ae=new Fe({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:st});new Fe({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const H=new Fe({color:"#d3d3d3",metalness:1,roughness:.2,map:ne,envMap:ne,clearcoat:.7,clearcoatRoughness:.3});new Fe({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:ne}),new Fe({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:R,transparent:!0,opacity:.3});const Q=new Ne(1,32,32,0,Math.PI),X=new z(Q,Z),pe=new z(Q,w);X.scale.set(.85,.85,.8),pe.scale.set(.85,.85,.8),X.position.y=-.2,pe.position.y=-.2,X.rotation.y=Math.PI/2,pe.rotation.y=Math.PI*1.5;const Me=new Mt(1,32),_e=new z(Me,k);_e.scale.set(.85,.85,.8),_e.position.set(0,-.2,0),_e.rotation.y=Math.PI/2;const Ae=new $e;Ae.add(X),Ae.add(pe),Ae.add(_e),p.add(Ae);const Oe=new Ne(.6,32,32,0,Math.PI),re=new z(Oe,w);re.scale.set(1,.95,.95),re.position.set(0,1,0),re.rotation.y=Math.PI*1.5;const he=new z(Oe,Z);he.scale.set(1,.95,.95),he.position.set(0,1,0),he.rotation.y=Math.PI/2;const Se=new Mt(.6,32),U=new z(Se,k);U.position.set(0,1,0),U.rotation.y=Math.PI/2,U.scale.set(1,.95,.95);const le=new $e;le.add(re),le.add(he),le.add(U),p.add(le);const se=new Ne(.25,32,32),ue=new z(se,w);ue.position.set(-.45,1.35,-.1),p.add(ue);const Ee=new z(se,k);Ee.position.set(.45,1.35,-.1),p.add(Ee);const ee=new Ne(.25,32,32,Math.PI/2,Math.PI),g=new z(ee,w);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new Ne(.25,32,32,Math.PI/2,Math.PI),L=new z(T,k);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const D=new Mt(.25,32),I=new z(D,ae);I.scale.set(.8,.6,.8),I.position.set(0,.84,.5),I.rotation.y=Math.PI/2;const Y=new $e;Y.add(g),Y.add(L),Y.add(I),p.add(Y);const j=new Ln;j.moveTo(0,0),j.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),j.bezierCurveTo(-.6,.3,0,.6,0,1),j.bezierCurveTo(0,.6,.6,.3,.6,0),j.bezierCurveTo(.6,-.3,0,-.3,0,0);const S={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new qn(j,S),C=new Ne(.35,32,32),V=new z(C,w);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),p.add(V);const O=new z(C,k);O.scale.set(.75,1.25,.65),O.position.set(.7,-.15,.2),p.add(O);const G=new Dn(.2,.22,.6,32),de=new z(G,w);de.position.set(-.4,-1.05,0),p.add(de);const ce=new z(G,k);ce.position.set(.4,-1.05,0),p.add(ce);const me=new Ne(.3,32,32),be=new z(me,w);be.scale.set(1,.72,1.5),be.position.set(-.4,-1.45,.17),p.add(be);const fe=new z(me,k);fe.scale.set(1,.72,1.5),fe.position.set(.4,-1.45,.17),p.add(fe);const ye=new Ne(.44,32,32),Re=new z(ye,w);Re.position.set(-.15,-.45,-.4),p.add(Re);const Pe=new z(ye,Z);Pe.position.set(.15,-.45,-.4),p.add(Pe);const we=new Ne(.18,32,32),ze=new z(we,w);ze.position.set(0,-.35,-.8),p.add(ze),new ds().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ht){const kt=new Nt("X",{font:ht,size:.2,depth:.05});new sn({color:0});const wt=new z(kt,y);wt.position.set(-.3,.99,.53),wt.rotation.x=it.degToRad(-5),wt.rotation.y=it.degToRad(-15),p.add(wt);const St=new Nt("O",{font:ht,size:.2,depth:.05});new sn({color:0});const zt=new z(St,y);zt.position.set(.14,.99,.53),zt.rotation.y=it.degToRad(12),zt.rotation.x=it.degToRad(-5),p.add(zt)}),ze.renderOrder=1;const Ge=1.2,B=.5,xe=8,J=.7,te=.3,ve=.5,ge=f(H,{x:-2,y:0,z:0}),De=f(H,{x:0,y:0,z:0}),Xe=f(H,{x:2,y:0,z:0}),et=f(H,{x:2,y:0,z:0}),We=f(H,{x:2,y:-2,z:0}),ut=new z(v,$);ut.scale.set(.3,.3,.3),ut.position.set(.25,1.1,0),ut.rotation.y=Math.PI,ut.rotation.x=Math.PI,p.add(ut),ge.position.set(.35,0,0),De.position.set(.25,-.3,.4),Xe.position.set(.3,.3,-.2),et.position.set(.25,.17,.4),We.position.set(.5,-.3,.45),ge.scale.set(.2,.2,.2),De.scale.set(.18,.18,.18),Xe.scale.set(.15,.15,.15),et.scale.set(.17,.17,.17),We.scale.set(.15,.15,.15),De.rotation.z=Math.PI/4,Xe.rotation.z=-Math.PI/4,et.rotation.y=-Math.PI/2,We.rotation.y=-Math.PI/2,p.add(ge),p.add(De),p.add(Xe),p.add(et),p.add(We),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),x.position.set(e.bodyPosition.x,1,e.cameraPosition),x.lookAt(e.bodyPosition.x,0,0),x.position.z=4,m(),Ft(()=>e.bodyPosition,ht=>{p.position.set(ht.x,ht.y,ht.z)}),Ft(()=>e.cameraPosition,ht=>{x.position.set(e.bodyPosition.x,1,ht),x.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(Ii(),Di(tn,null,[Qe("div",{ref_key:"threeCanvas",ref:t,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Qe("div",KE,[Qe("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Qe("div",jE,[Qe("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Qe("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Qe("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),JE=Ui(ZE,[["__scopeId","data-v-9a57b6d8"]]),QE={class:"pixel-controls"},ew={class:"side-buttons"},tw=Wn({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);hi(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03),x.render(m,_)};const m=new ls,_=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),x=new as({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new $e,p=new $e;m.add(p);const b=new fs(16777215,2);m.add(b);const M=new hs(16777215,4);M.position.set(5,5,5),m.add(M);const E=new us(16777215,5,50);E.position.set(0,2,4),m.add(E);const F=new cs,P=F.load("/3d-bear-arts/assets/sun.jpg"),R=F.load("/3d-bear-arts/assets/gear.jpg"),N=F.load("/3d-bear-arts/assets/underwater.jpg"),ne=F.load("/3d-bear-arts/assets/beach.jpg");N.wrapS=N.wrapT=Ot,ne.wrapS=ne.wrapT=Ot,ne.repeat.set(.8,1),R.mapping=Ur,P.wrapS=P.wrapT=Ot;const y=new Fe({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:ne,envMapIntensity:.8,side:st,transparent:!0,opacity:.9}),w=new Fe({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:ne,envMapIntensity:.6,side:st,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new Fe({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:ne,side:st,transparent:!0,opacity:.9});const $=new Fe({color:8374441,metalness:1,roughness:.25,envMap:R,clearcoat:.7,clearcoatRoughness:.3}),k=new Fe({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:st}),Z=new Fe({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:ne,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),ae=new Fe({color:"#a4d0f5",metalness:0,roughness:.8,map:P,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),H=new Fe({color:"#a4d0f5",metalness:0,roughness:.85,map:ne,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),Q=new Ne(1,32,32,0,Math.PI),X=new z(Q,k),pe=new z(Q,w);X.scale.set(.85,.85,.8),pe.scale.set(.85,.85,.8),X.position.y=-.2,pe.position.y=-.2,X.rotation.y=Math.PI/2,pe.rotation.y=Math.PI*1.5;const Me=new Mt(1,32),_e=new z(Me,H);_e.scale.set(.85,.85,.8),_e.position.set(0,-.2,0),_e.rotation.y=Math.PI/2;const Ae=new $e;Ae.add(X),Ae.add(pe),Ae.add(_e);const Oe=new Ne(.6,32,32,0,Math.PI*2,0,Math.PI/2),re=new Fe({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),he=new z(Oe,re);he.position.set(0,-.2,0),he.rotation.x=Math.PI,he.scale.set(1.25,1.25,1.25),Ae.add(he);const Se=new Fe({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:st,transparent:!0,opacity:.7,depthWrite:!1}),U=new z(Me,Se);U.scale.set(.7,.7,.7),U.position.set(0,-.3,0),U.rotation.x=Math.PI/2,U.renderOrder=1,Ae.add(U),d.add(Ae);const le=new Ne(.6,32,32,0,Math.PI),se=new z(le,y);se.scale.set(1,.95,.95),se.position.set(0,1,0),se.rotation.y=Math.PI*1.5;const ue=new z(le,Z);ue.scale.set(1,.95,.95),ue.position.set(0,1,0),ue.rotation.y=Math.PI/2;const Ee=new Mt(.6,32),ee=new z(Ee,ae);ee.position.set(0,1,0),ee.rotation.y=Math.PI/2,ee.scale.set(1,.95,.95);const g=new $e;g.add(se),g.add(ue),g.add(ee),d.add(g);const T=new Ne(.25,32,32),L=new z(T,y);L.position.set(-.45,1.35,-.1),d.add(L);const D=new z(T,Z);D.position.set(.45,1.35,-.1),d.add(D);const I=new Ne(.25,32,32,Math.PI/2,Math.PI),Y=new z(I,y);Y.scale.set(1.1,.6,.8),Y.position.set(0,.84,.5),Y.rotation.y=Math.PI;const j=new Ne(.25,32,32,Math.PI/2,Math.PI),S=new z(j,Z);S.scale.set(1.1,.6,.8),S.position.set(0,.84,.5),S.rotation.y=0;const v=new Mt(.25,32),C=new z(v,ae);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const V=new $e;V.add(Y),V.add(S),V.add(C),d.add(V);const O=new Ln;O.moveTo(0,0),O.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),O.bezierCurveTo(-.6,.3,0,.6,0,1),O.bezierCurveTo(0,.6,.6,.3,.6,0),O.bezierCurveTo(.6,-.3,0,-.3,0,0);const G={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},de=new qn(O,G),ce=new Ne(.35,32,32),me=new z(ce,y);me.scale.set(.75,1.25,.65),me.position.set(-.7,-.15,.2),d.add(me);const be=new z(ce,Z);be.scale.set(.75,1.25,.65),be.position.set(.7,-.15,.2),d.add(be);const fe=new Dn(.2,.22,.6,32),ye=new z(fe,y);ye.position.set(-.4,-1.05,0),d.add(ye);const Re=new z(fe,Z);Re.position.set(.4,-1.05,0),d.add(Re);const Pe=new Ne(.3,32,32),we=new z(Pe,y);we.scale.set(1,.72,1.5),we.position.set(-.4,-1.45,.17),d.add(we);const ze=new z(Pe,Z);ze.scale.set(1,.72,1.5),ze.position.set(.4,-1.45,.17),d.add(ze);const Ce=new Ne(.44,32,32),Ge=new z(Ce,y);Ge.position.set(-.15,-.45,-.4),d.add(Ge);const B=new z(Ce,Z);B.position.set(.15,-.45,-.4),d.add(B);const xe=new Ne(.18,32,32),J=new z(xe,w);J.position.set(0,-.35,-.8),d.add(J),new ds().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ge){const De=new Nt("X",{font:ge,size:.2,depth:.05});new sn({color:0});const Xe=new z(De,y);Xe.position.set(-.3,.99,.53),Xe.rotation.x=it.degToRad(-5),Xe.rotation.y=it.degToRad(-15),d.add(Xe);const et=new Nt("O",{font:ge,size:.2,depth:.05});new sn({color:0});const We=new z(et,w);We.position.set(.14,.99,.53),We.rotation.y=it.degToRad(12),We.rotation.x=it.degToRad(-5),d.add(We)}),J.renderOrder=1,d.rotation.x=.1;const ve=new z(de,$);ve.scale.set(.3,.3,.3),ve.position.set(.25,1.1,0),ve.rotation.y=Math.PI,ve.rotation.x=Math.PI,d.add(ve),d.scale.set(1.4,1.4,1.4),m.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,f(),Ft(()=>e.bodyPosition,ge=>{d.position.set(ge.x,ge.y,ge.z)}),Ft(()=>e.cameraPosition,ge=>{_.position.set(e.bodyPosition.x,1,ge),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(Ii(),Di(tn,null,[Qe("div",{ref_key:"threeCanvas",ref:t,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Qe("div",QE,[Qe("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Qe("div",ew,[Qe("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Qe("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Qe("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),nw=Ui(tw,[["__scopeId","data-v-08c607ba"]]),iw={class:"pixel-controls"},sw={class:"side-buttons"},rw=Wn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);hi(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03),Ee.uniforms.u_time.value+=.25,ce.rotation.y+=.04,x.render(m,_)};const m=new ls,_=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),x=new as({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new $e,p=new $e;m.add(p);const b=new fs(16777215,2);m.add(b);const M=new hs(16777215,4);M.position.set(5,5,5),m.add(M);const E=new us(16777215,5,50);E.position.set(0,2,4),m.add(E);const F=new cs,P=F.load("/3d-bear-arts/assets/beach.jpg");P.repeat.set(.8,1);const R=F.load("/3d-bear-arts/assets/sun.jpg");P.wrapS=P.wrapT=Ot,P.repeat.set(.8,1),R.wrapS=R.wrapT=Ot;const N=new Fe({color:11592447,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Fe({color:11592447,map:P,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st,depthWrite:!1,depthTest:!0});const ne=new Fe({color:11592447,map:P,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:st,ior:1.33,depthWrite:!1,depthTest:!0}),y=new Fe({color:11592447,map:P,metalness:.1,roughness:.6,transparent:!0,opacity:.85,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),w=new Fe({color:11592447,map:P,metalness:.1,roughness:.6,transparent:!0,opacity:.85,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:st}),$=new Fe({color:11592447,map:P,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:st,ior:1.33});new Fe({color:11592447,map:P,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.7,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1});const k=new Fe({color:11592447,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Ne(1,32,32,0,Math.PI),ae=new z(Z,w),H=new z(Z,ne);ae.scale.set(.85,.85,.8),H.scale.set(.85,.85,.8),ae.position.y=-.2,H.position.y=-.2,ae.rotation.y=Math.PI/2,H.rotation.y=Math.PI*1.5;const Q=new Mt(1,32),X=new z(Q,N);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const pe=new $e;pe.add(ae),pe.add(H),pe.add(X),d.add(pe);const Me=new Ne(.6,32,32,0,Math.PI),_e=new z(Me,N);_e.scale.set(1,.95,.95),_e.position.set(0,1,0),_e.rotation.y=Math.PI*1.5;const Ae=new z(Me,y);Ae.scale.set(1,.95,.95),Ae.position.set(0,1,0),Ae.rotation.y=Math.PI/2;const Oe=new Mt(.6,32),re=new z(Oe,N);re.position.set(0,1,0),re.rotation.y=Math.PI/2,re.scale.set(1,.95,.95);const he=new $e;he.add(_e),he.add(Ae),he.add(re),d.add(he);const Se=new Ne(.6,32,32,0,Math.PI*2,0,Math.PI/2),U=new Fe({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),le=new z(Se,U);le.position.set(0,-.2,0),le.rotation.x=Math.PI,le.scale.set(1.25,1.25,1.25),pe.add(le);const se=new Fe({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:st,transparent:!0,opacity:.7,depthWrite:!1}),ue=new z(Q,se);ue.scale.set(.7,.7,.7),ue.position.set(0,-.3,0),ue.rotation.x=Math.PI/2,ue.renderOrder=1,pe.add(ue),d.add(pe);const Ee=new ci({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:1.2}},vertexShader:`
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

                    vec3 color = mix(baseColor, waveColor, 0.5 + (waveX + waveY) * 0.5); 
                    gl_FragColor = vec4(color, 0.85); // Adjust opacity for visibility
                }
            `}),ee=new z(Q,Ee);ee.position.set(0,-.3,0),ee.scale.set(.7,.7,.7),ee.rotation.x=-Math.PI/2,ee.renderOrder=1,pe.add(ee);const g=new Ne(.25,32,32),T=new z(g,$);T.position.set(-.45,1.35,-.1),d.add(T);const L=new z(g,y);L.position.set(.45,1.35,-.1),d.add(L);const D=new Ne(.25,32,32,Math.PI/2,Math.PI),I=new z(D,$);I.scale.set(1.1,.6,.8),I.position.set(0,.84,.5),I.rotation.y=Math.PI;const Y=new Ne(.25,32,32,Math.PI/2,Math.PI),j=new z(Y,ne);j.scale.set(1.1,.6,.8),j.position.set(0,.84,.5),j.rotation.y=0;const S=new Mt(.25,32),v=new z(S,ne);v.scale.set(.8,.6,.8),v.position.set(0,.84,.5),v.rotation.y=Math.PI/2;const C=new $e;C.add(I),C.add(j),C.add(v),d.add(C);const V=new Fe({color:8374441,metalness:1,roughness:.25,envMap:R,clearcoat:.7,clearcoatRoughness:.3}),O=new Ln;O.moveTo(0,0),O.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),O.bezierCurveTo(-.6,.3,0,.6,0,1),O.bezierCurveTo(0,.6,.6,.3,.6,0),O.bezierCurveTo(.6,-.3,0,-.3,0,0);const G={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},de=new qn(O,G),ce=new z(de,V);ce.scale.set(.3,.3,.3),ce.position.set(.25,1.1,0),ce.rotation.y=Math.PI,ce.rotation.x=Math.PI,d.add(ce);const me=new Ne(.35,32,32),be=new z(me,ne);be.scale.set(.75,1.25,.65),be.position.set(-.7,-.15,.2),d.add(be);const fe=new z(me,ne);fe.scale.set(.75,1.25,.65),fe.position.set(.7,-.15,.2),d.add(fe);const ye=new Dn(.2,.22,.6,32),Re=new z(ye,$);Re.position.set(-.4,-1.05,0),d.add(Re);const Pe=new z(ye,$);Pe.position.set(.4,-1.05,0),d.add(Pe);const we=new Ne(.3,32,32),ze=new z(we,$);ze.scale.set(1,.72,1.5),ze.position.set(-.4,-1.45,.17),d.add(ze);const Ce=new z(we,$);Ce.scale.set(1,.72,1.5),Ce.position.set(.4,-1.45,.17),d.add(Ce);const Ge=new Ne(.44,32,32),B=new z(Ge,$);B.position.set(-.15,-.45,-.4),d.add(B);const xe=new z(Ge,y);xe.position.set(.15,-.45,-.4),d.add(xe);const J=new Ne(.18,32,32),te=new z(J,$);te.position.set(0,-.35,-.8),d.add(te),new ds().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ge){const De=new Nt("X",{font:ge,size:.2,depth:.05}),Xe=new z(De,k);Xe.position.set(-.3,.99,.53),Xe.rotation.x=it.degToRad(-5),Xe.rotation.y=it.degToRad(-15),d.add(Xe);const et=new Nt("O",{font:ge,size:.2,depth:.05}),We=new z(et,k);We.position.set(.14,.99,.53),We.rotation.y=it.degToRad(12),We.rotation.x=it.degToRad(-5),d.add(We)}),d.scale.set(1.4,1.4,1.4),m.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,d.rotation.x=.1,f(),Ft(()=>e.bodyPosition,ge=>{d.position.set(ge.x,ge.y,ge.z)}),Ft(()=>e.cameraPosition,ge=>{_.position.set(e.bodyPosition.x,1,ge),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(Ii(),Di(tn,null,[Qe("div",{ref_key:"threeCanvas",ref:t,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Qe("div",iw,[Qe("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Qe("div",sw,[Qe("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Qe("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Qe("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),ow=Ui(rw,[["__scopeId","data-v-2dd883f7"]]),aw={class:"pixel-controls"},lw={class:"side-buttons"},cw=Wn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);hi(()=>{if(t.value){let f=function(J,te){const ve=new $e,ge=new Ne(1,32,32),De=new z(ge,$);De.scale.set(1,.8,1),ve.add(De);const Xe=new Dn(.1,.1,.5,16),et=new jd({color:9127187}),We=new z(Xe,et);return We.position.set(0,.9,0),ve.add(We),ve},m=function(){requestAnimationFrame(m),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),ze.rotation.z-=.02,Ce.rotation.z+=.03,Ge.rotation.z+=.02,B.rotation.z+=.02,xe.rotation.z-=.03,we.rotation.y+=.04,d.render(_,x)};const _=new ls,x=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),d=new as({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(d.domElement);const p=new $e,b=new $e;_.add(b);const M=new fs(16777215,2);_.add(M);const E=new hs(16777215,4);E.position.set(5,5,5),_.add(E);const F=new us(16777215,5,50);F.position.set(0,2,4),_.add(F);const P=new cs,R=P.load("/3d-bear-arts/assets/pumpkin.jpg");R.wrapS=R.wrapT=Ot,R.repeat.set(.8,.8);const N=P.load("/3d-bear-arts/assets/pumpkin.jpg");N.wrapS=N.wrapT=Ot,N.repeat.set(1,1);const ne=new Fe({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Fe({color:16747520,metalness:.1,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st});const y=new $e,w=new Fe({color:16747520,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),$=new Fe({color:16747520,map:N,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Fe({color:16747520,map:R,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:st}),Z=new Ne(1,32,32,0,Math.PI),ae=new z(Z,k),H=new z(Z,w);ae.scale.set(.85,.85,.8),H.scale.set(.85,.85,.8),ae.position.y=-.2,H.position.y=-.2,ae.rotation.y=Math.PI/2,H.rotation.y=Math.PI*1.5;const Q=new Mt(1,32),X=new z(Q,$);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const pe=new $e;pe.add(ae),pe.add(H),pe.add(X),p.add(pe);const Me=new Ne(.6,32,32,0,Math.PI),_e=new z(Me,w);_e.scale.set(1,.95,.95),_e.position.set(0,1,0),_e.rotation.y=Math.PI*1.5;const Ae=new z(Me,k);Ae.scale.set(1,.95,.95),Ae.position.set(0,1,0),Ae.rotation.y=Math.PI/2;const Oe=new Mt(.6,32),re=new z(Oe,$);re.position.set(0,1,0),re.rotation.y=Math.PI/2,re.scale.set(1,.95,.95);const he=new $e;he.add(_e),he.add(Ae),he.add(re),p.add(he);const Se=new Ne(.25,32,32),U=new z(Se,$);U.position.set(-.45,1.35,-.1),p.add(U);const le=new z(Se,k);le.position.set(.45,1.35,-.1),p.add(le);const se=new Ne(.25,32,32,Math.PI/2,Math.PI),ue=new z(se,w);ue.scale.set(1.1,.6,.8),ue.position.set(0,.84,.5),ue.rotation.y=Math.PI;const Ee=new Ne(.25,32,32,Math.PI/2,Math.PI),ee=new z(Ee,k);ee.scale.set(1.1,.6,.8),ee.position.set(0,.84,.5),ee.rotation.y=0;const g=new Mt(.25,32),T=new z(g,w);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new $e;L.add(ue),L.add(ee),L.add(T),p.add(L);const D=new Ln;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const I={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Y=new qn(D,I),j=new Ne(.35,32,32),S=new z(j,w);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),p.add(S);const v=new z(j,k);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),p.add(v);const C=new Dn(.2,.22,.6,32),V=new z(C,w);V.position.set(-.4,-1.05,0),p.add(V);const O=new z(C,k);O.position.set(.4,-1.05,0),p.add(O);const G=new Ne(.3,32,32),de=new z(G,w);de.scale.set(1,.72,1.5),de.position.set(-.4,-1.45,.17),p.add(de);const ce=new z(G,k);ce.scale.set(1,.72,1.5),ce.position.set(.4,-1.45,.17),p.add(ce);const me=new Ne(.44,32,32),be=new z(me,w);be.position.set(-.15,-.45,-.4),p.add(be);const fe=new z(me,k);fe.position.set(.15,-.45,-.4),p.add(fe);const ye=new Ne(.18,32,32),Re=new z(ye,$);Re.position.set(0,-.35,-.8),p.add(Re),new ds().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(J){const te=new Nt("X",{font:J,size:.2,depth:.05});new sn({color:0});const ve=new z(te,$);ve.position.set(-.3,.99,.53),ve.rotation.x=it.degToRad(-5),ve.rotation.y=it.degToRad(-15),p.add(ve);const ge=new Nt("O",{font:J,size:.2,depth:.05});new sn({color:0});const De=new z(ge,$);De.position.set(.14,.99,.53),De.rotation.y=it.degToRad(12),De.rotation.x=it.degToRad(-5),p.add(De)}),Re.renderOrder=1;const we=new z(Y,ne);we.scale.set(.3,.3,.3),we.position.set(.25,1.1,0),we.rotation.y=Math.PI,we.rotation.x=Math.PI,p.add(we),p.add(y);const ze=f(),Ce=f(),Ge=f(),B=f(),xe=f();ze.position.set(.35,0,0),Ce.position.set(.25,-.3,.4),Ge.position.set(.3,.3,-.2),B.position.set(.25,.17,.4),xe.position.set(.5,-.3,.45),ze.scale.set(.2,.2,.2),Ce.scale.set(.18,.18,.18),Ge.scale.set(.15,.15,.15),B.scale.set(.17,.17,.17),xe.scale.set(.15,.15,.15),Ce.rotation.z=Math.PI/4,Ge.rotation.z=-Math.PI/4,B.rotation.y=-Math.PI/2,xe.rotation.y=-Math.PI/2,p.add(ze),p.add(Ce),p.add(Ge),p.add(B),p.add(xe),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),x.position.set(e.bodyPosition.x,1,e.cameraPosition),x.lookAt(e.bodyPosition.x,0,0),x.position.z=4,m(),Ft(()=>e.bodyPosition,J=>{p.position.set(J.x,J.y,J.z)}),Ft(()=>e.cameraPosition,J=>{x.position.set(e.bodyPosition.x,1,J),x.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(Ii(),Di(tn,null,[Qe("div",{ref_key:"threeCanvas",ref:t,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Qe("div",aw,[Qe("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Qe("div",lw,[Qe("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Qe("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Qe("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),uw=Ui(cw,[["__scopeId","data-v-1a7b5f82"]]),hw=[{path:"/3d-bear-arts/leather",name:"Leather",component:kE},{path:"/3d-bear-arts/pop-art",name:"Pop",component:WE},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:$E},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:JE},{path:"/3d-bear-arts/water",name:"Water Bear",component:nw},{path:"/3d-bear-arts/",name:"Water",component:ow},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:uw}],fw=Ig({history:lg(),routes:hw}),Jd=T0(L0);Jd.use(fw);Jd.mount("#app");
