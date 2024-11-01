(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function dc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const mt={},Os=[],Wn=()=>{},sp=()=>!1,Ko=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),pc=n=>n.startsWith("onUpdate:"),Xt=Object.assign,mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},rp=Object.prototype.hasOwnProperty,ct=(n,e)=>rp.call(n,e),Je=Array.isArray,mr=n=>Zo(n)==="[object Map]",op=n=>Zo(n)==="[object Set]",Ze=n=>typeof n=="function",kt=n=>typeof n=="string",er=n=>typeof n=="symbol",Lt=n=>n!==null&&typeof n=="object",Jh=n=>(Lt(n)||Ze(n))&&Ze(n.then)&&Ze(n.catch),ap=Object.prototype.toString,Zo=n=>ap.call(n),lp=n=>Zo(n).slice(8,-1),cp=n=>Zo(n)==="[object Object]",gc=n=>kt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gr=dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},up=/-(\w)/g,Mn=Jo(n=>n.replace(up,(e,t)=>t?t.toUpperCase():"")),hp=/\B([A-Z])/g,fs=Jo(n=>n.replace(hp,"-$1").toLowerCase()),Qo=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),_a=Jo(n=>n?`on${Qo(n)}`:""),Ui=(n,e)=>!Object.is(n,e),va=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Qh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},fp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let eu;const ef=()=>eu||(eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _c(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=kt(i)?gp(i):_c(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(kt(n)||Lt(n))return n}const dp=/;(?![^(]*\))/g,pp=/:([^]+)/,mp=/\/\*[^]*?\*\//g;function gp(n){const e={};return n.replace(mp,"").split(dp).forEach(t=>{if(t){const i=t.split(pp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function On(n){let e="";if(kt(n))e=n;else if(Je(n))for(let t=0;t<n.length;t++){const i=On(n[t]);i&&(e+=i+" ")}else if(Lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const _p="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vp=dc(_p);function tf(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dn;class xp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function yp(){return dn}let gt;const xa=new WeakSet;class nf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dn&&dn.active&&dn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xa.has(this)&&(xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tu(this),of(this);const e=gt,t=Dn;gt=this,Dn=!0;try{return this.fn()}finally{af(this),gt=e,Dn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yc(e);this.deps=this.depsTail=void 0,tu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hl(this)&&this.run()}get dirty(){return hl(this)}}let sf=0,Us;function rf(n){n.flags|=8,n.next=Us,Us=n}function vc(){sf++}function xc(){if(--sf>0)return;let n;for(;Us;){let e=Us,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Us,Us=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function of(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function af(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),yc(i),Mp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function hl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function lf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ar))return;n.globalVersion=Ar;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!hl(n)){n.flags&=-3;return}const t=gt,i=Dn;gt=n,Dn=!0;try{of(n);const s=n.fn(n._value);(e.version===0||Ui(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{gt=t,Dn=i,af(n),n.flags&=-3}}function yc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)yc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Mp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Dn=!0;const cf=[];function Fi(){cf.push(Dn),Dn=!1}function Oi(){const n=cf.pop();Dn=n===void 0?!0:n}function tu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let Ar=0;class Sp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!gt||!Dn||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new Sp(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,uf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,Ar++,this.notify(e)}notify(e){vc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{xc()}}}function uf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)uf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const fl=new WeakMap,as=Symbol(""),dl=Symbol(""),Rr=Symbol("");function Jt(n,e,t){if(Dn&&gt){let i=fl.get(n);i||fl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Mc),s.target=n,s.map=i,s.key=t),s.track()}}function ui(n,e,t,i,s,r){const o=fl.get(n);if(!o){Ar++;return}const a=l=>{l&&l.trigger()};if(vc(),e==="clear")o.forEach(a);else{const l=Je(n),c=l&&gc(t);if(l&&t==="length"){const h=Number(i);o.forEach((u,f)=>{(f==="length"||f===Rr||!er(f)&&f>=h)&&a(u)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(Rr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(as)),mr(n)&&a(o.get(dl)));break;case"delete":l||(a(o.get(as)),mr(n)&&a(o.get(dl)));break;case"set":mr(n)&&a(o.get(as));break}}xc()}function gs(n){const e=ht(n);return e===n?e:(Jt(e,"iterate",Rr),Un(n)?e:e.map(nn))}function Sc(n){return Jt(n=ht(n),"iterate",Rr),n}const wp={__proto__:null,[Symbol.iterator](){return ya(this,Symbol.iterator,nn)},concat(...n){return gs(this).concat(...n.map(e=>Je(e)?gs(e):e))},entries(){return ya(this,"entries",n=>(n[1]=nn(n[1]),n))},every(n,e){return Zn(this,"every",n,e,void 0,arguments)},filter(n,e){return Zn(this,"filter",n,e,t=>t.map(nn),arguments)},find(n,e){return Zn(this,"find",n,e,nn,arguments)},findIndex(n,e){return Zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Zn(this,"findLast",n,e,nn,arguments)},findLastIndex(n,e){return Zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ma(this,"includes",n)},indexOf(...n){return Ma(this,"indexOf",n)},join(n){return gs(this).join(n)},lastIndexOf(...n){return Ma(this,"lastIndexOf",n)},map(n,e){return Zn(this,"map",n,e,void 0,arguments)},pop(){return ir(this,"pop")},push(...n){return ir(this,"push",n)},reduce(n,...e){return nu(this,"reduce",n,e)},reduceRight(n,...e){return nu(this,"reduceRight",n,e)},shift(){return ir(this,"shift")},some(n,e){return Zn(this,"some",n,e,void 0,arguments)},splice(...n){return ir(this,"splice",n)},toReversed(){return gs(this).toReversed()},toSorted(n){return gs(this).toSorted(n)},toSpliced(...n){return gs(this).toSpliced(...n)},unshift(...n){return ir(this,"unshift",n)},values(){return ya(this,"values",nn)}};function ya(n,e,t){const i=Sc(n),s=i[e]();return i!==n&&!Un(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Ep=Array.prototype;function Zn(n,e,t,i,s,r){const o=Sc(n),a=o!==n&&!Un(n),l=o[e];if(l!==Ep[e]){const u=l.apply(n,r);return a?nn(u):u}let c=t;o!==n&&(a?c=function(u,f){return t.call(this,nn(u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function nu(n,e,t,i){const s=Sc(n);let r=t;return s!==n&&(Un(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,nn(a),l,n)}),s[e](r,...i)}function Ma(n,e,t){const i=ht(n);Jt(i,"iterate",Rr);const s=i[e](...t);return(s===-1||s===!1)&&Tc(t[0])?(t[0]=ht(t[0]),i[e](...t)):s}function ir(n,e,t=[]){Fi(),vc();const i=ht(n)[e].apply(n,t);return xc(),Oi(),i}const bp=dc("__proto__,__v_isRef,__isVue"),hf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(er));function Tp(n){er(n)||(n=String(n));const e=ht(this);return Jt(e,"has",n),e.hasOwnProperty(n)}class ff{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?zp:gf:r?mf:pf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Je(e);if(!s){let l;if(o&&(l=wp[t]))return l;if(t==="hasOwnProperty")return Tp}const a=Reflect.get(e,t,Kt(e)?e:i);return(er(t)?hf.has(t):bp(t))||(s||Jt(e,"get",t),r)?a:Kt(a)?o&&gc(t)?a:a.value:Lt(a)?s?vf(a):ta(a):a}}class df extends ff{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=ls(r);if(!Un(i)&&!ls(i)&&(r=ht(r),i=ht(i)),!Je(e)&&Kt(r)&&!Kt(i))return l?!1:(r.value=i,!0)}const o=Je(e)&&gc(t)?Number(t)<e.length:ct(e,t),a=Reflect.set(e,t,i,Kt(e)?e:s);return e===ht(s)&&(o?Ui(i,r)&&ui(e,"set",t,i):ui(e,"add",t,i)),a}deleteProperty(e,t){const i=ct(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ui(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!er(t)||!hf.has(t))&&Jt(e,"has",t),i}ownKeys(e){return Jt(e,"iterate",Je(e)?"length":as),Reflect.ownKeys(e)}}class Ap extends ff{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Rp=new df,Cp=new Ap,Pp=new df(!0);const wc=n=>n,ea=n=>Reflect.getPrototypeOf(n);function Jr(n,e,t=!1,i=!1){n=n.__v_raw;const s=ht(n),r=ht(e);t||(Ui(e,r)&&Jt(s,"get",e),Jt(s,"get",r));const{has:o}=ea(s),a=i?wc:t?Ac:nn;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Qr(n,e=!1){const t=this.__v_raw,i=ht(t),s=ht(n);return e||(Ui(n,s)&&Jt(i,"has",n),Jt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function eo(n,e=!1){return n=n.__v_raw,!e&&Jt(ht(n),"iterate",as),Reflect.get(n,"size",n)}function iu(n,e=!1){!e&&!Un(n)&&!ls(n)&&(n=ht(n));const t=ht(this);return ea(t).has.call(t,n)||(t.add(n),ui(t,"add",n,n)),this}function su(n,e,t=!1){!t&&!Un(e)&&!ls(e)&&(e=ht(e));const i=ht(this),{has:s,get:r}=ea(i);let o=s.call(i,n);o||(n=ht(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,e),o?Ui(e,a)&&ui(i,"set",n,e):ui(i,"add",n,e),this}function ru(n){const e=ht(this),{has:t,get:i}=ea(e);let s=t.call(e,n);s||(n=ht(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ui(e,"delete",n,void 0),r}function ou(){const n=ht(this),e=n.size!==0,t=n.clear();return e&&ui(n,"clear",void 0,void 0),t}function to(n,e){return function(i,s){const r=this,o=r.__v_raw,a=ht(o),l=e?wc:n?Ac:nn;return!n&&Jt(a,"iterate",as),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function no(n,e,t){return function(...i){const s=this.__v_raw,r=ht(s),o=mr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?wc:e?Ac:nn;return!e&&Jt(r,"iterate",l?dl:as),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function vi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Lp(){const n={get(r){return Jr(this,r)},get size(){return eo(this)},has:Qr,add:iu,set:su,delete:ru,clear:ou,forEach:to(!1,!1)},e={get(r){return Jr(this,r,!1,!0)},get size(){return eo(this)},has:Qr,add(r){return iu.call(this,r,!0)},set(r,o){return su.call(this,r,o,!0)},delete:ru,clear:ou,forEach:to(!1,!0)},t={get(r){return Jr(this,r,!0)},get size(){return eo(this,!0)},has(r){return Qr.call(this,r,!0)},add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear"),forEach:to(!0,!1)},i={get(r){return Jr(this,r,!0,!0)},get size(){return eo(this,!0)},has(r){return Qr.call(this,r,!0)},add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear"),forEach:to(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=no(r,!1,!1),t[r]=no(r,!0,!1),e[r]=no(r,!1,!0),i[r]=no(r,!0,!0)}),[n,t,e,i]}const[Ip,Dp,Up,Np]=Lp();function Ec(n,e){const t=e?n?Np:Up:n?Dp:Ip;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ct(t,s)&&s in i?t:i,s,r)}const Fp={get:Ec(!1,!1)},Op={get:Ec(!1,!0)},Bp={get:Ec(!0,!1)};const pf=new WeakMap,mf=new WeakMap,gf=new WeakMap,zp=new WeakMap;function Gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hp(n){return n.__v_skip||!Object.isExtensible(n)?0:Gp(lp(n))}function ta(n){return ls(n)?n:bc(n,!1,Rp,Fp,pf)}function _f(n){return bc(n,!1,Pp,Op,mf)}function vf(n){return bc(n,!0,Cp,Bp,gf)}function bc(n,e,t,i,s){if(!Lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Hp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function _r(n){return ls(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function ls(n){return!!(n&&n.__v_isReadonly)}function Un(n){return!!(n&&n.__v_isShallow)}function Tc(n){return n?!!n.__v_raw:!1}function ht(n){const e=n&&n.__v_raw;return e?ht(e):n}function kp(n){return!ct(n,"__v_skip")&&Object.isExtensible(n)&&Qh(n,"__v_skip",!0),n}const nn=n=>Lt(n)?ta(n):n,Ac=n=>Lt(n)?vf(n):n;function Kt(n){return n?n.__v_isRef===!0:!1}function tt(n){return xf(n,!1)}function Vp(n){return xf(n,!0)}function xf(n,e){return Kt(n)?n:new Wp(n,e)}class Wp{constructor(e,t){this.dep=new Mc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:nn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Un(e)||ls(e);e=i?e:ht(e),Ui(e,t)&&(this._rawValue=e,this._value=i?e:nn(e),this.dep.trigger())}}function Bs(n){return Kt(n)?n.value:n}const Xp={get:(n,e,t)=>e==="__v_raw"?n:Bs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Kt(s)&&!Kt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function yf(n){return _r(n)?n:new Proxy(n,Xp)}class qp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Mc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return rf(this),!0}get value(){const e=this.dep.track();return lf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yp(n,e,t=!1){let i,s;return Ze(n)?i=n:(i=n.get,s=n.set),new qp(i,s,t)}const io={},zo=new WeakMap;let es;function $p(n,e=!1,t=es){if(t){let i=zo.get(t);i||zo.set(t,i=[]),i.push(n)}}function jp(n,e,t=mt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=w=>s?w:Un(w)||s===!1||s===0?ai(w,1):ai(w);let h,u,f,p,_=!1,x=!1;if(Kt(n)?(u=()=>n.value,_=Un(n)):_r(n)?(u=()=>c(n),_=!0):Je(n)?(x=!0,_=n.some(w=>_r(w)||Un(w)),u=()=>n.map(w=>{if(Kt(w))return w.value;if(_r(w))return c(w);if(Ze(w))return l?l(w,2):w()})):Ze(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){Fi();try{f()}finally{Oi()}}const w=es;es=h;try{return l?l(n,3,[p]):n(p)}finally{es=w}}:u=Wn,e&&s){const w=u,O=s===!0?1/0:s;u=()=>ai(w(),O)}const d=yp(),m=()=>{h.stop(),d&&mc(d.effects,h)};if(r&&e){const w=e;e=(...O)=>{w(...O),m()}}let b=x?new Array(n.length).fill(io):io;const M=w=>{if(!(!(h.flags&1)||!h.dirty&&!w))if(e){const O=h.run();if(s||_||(x?O.some((P,R)=>Ui(P,b[R])):Ui(O,b))){f&&f();const P=es;es=h;try{const R=[O,b===io?void 0:x&&b[0]===io?[]:b,p];l?l(e,3,R):e(...R),b=O}finally{es=P}}}else h.run()};return a&&a(M),h=new nf(u),h.scheduler=o?()=>o(M,!1):M,p=w=>$p(w,!1,h),f=h.onStop=()=>{const w=zo.get(h);if(w){if(l)l(w,4);else for(const O of w)O();zo.delete(h)}},e?i?M(!0):b=h.run():o?o(M.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function ai(n,e=1/0,t){if(e<=0||!Lt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Kt(n))ai(n.value,e,t);else if(Je(n))for(let i=0;i<n.length;i++)ai(n[i],e,t);else if(op(n)||mr(n))n.forEach(i=>{ai(i,e,t)});else if(cp(n)){for(const i in n)ai(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ai(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kr(n,e,t,i){try{return i?n(...i):n()}catch(s){na(s,e,t)}}function qn(n,e,t,i){if(Ze(n)){const s=kr(n,e,t,i);return s&&Jh(s)&&s.catch(r=>{na(r,e,t)}),s}if(Je(n)){const s=[];for(let r=0;r<n.length;r++)s.push(qn(n[r],e,t,i));return s}}function na(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){Fi(),kr(r,null,10,[n,l,c]),Oi();return}}Kp(n,t,s,i,o)}function Kp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}let Cr=!1,pl=!1;const sn=[];let Gn=0;const zs=[];let Ri=null,Ls=0;const Mf=Promise.resolve();let Rc=null;function Sf(n){const e=Rc||Mf;return n?e.then(this?n.bind(this):n):e}function Zp(n){let e=Cr?Gn+1:0,t=sn.length;for(;e<t;){const i=e+t>>>1,s=sn[i],r=Pr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Cc(n){if(!(n.flags&1)){const e=Pr(n),t=sn[sn.length-1];!t||!(n.flags&2)&&e>=Pr(t)?sn.push(n):sn.splice(Zp(e),0,n),n.flags|=1,wf()}}function wf(){!Cr&&!pl&&(pl=!0,Rc=Mf.then(bf))}function Jp(n){Je(n)?zs.push(...n):Ri&&n.id===-1?Ri.splice(Ls+1,0,n):n.flags&1||(zs.push(n),n.flags|=1),wf()}function au(n,e,t=Cr?Gn+1:0){for(;t<sn.length;t++){const i=sn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;sn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ef(n){if(zs.length){const e=[...new Set(zs)].sort((t,i)=>Pr(t)-Pr(i));if(zs.length=0,Ri){Ri.push(...e);return}for(Ri=e,Ls=0;Ls<Ri.length;Ls++){const t=Ri[Ls];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ri=null,Ls=0}}const Pr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function bf(n){pl=!1,Cr=!0;try{for(Gn=0;Gn<sn.length;Gn++){const e=sn[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<sn.length;Gn++){const e=sn[Gn];e&&(e.flags&=-2)}Gn=0,sn.length=0,Ef(),Cr=!1,Rc=null,(sn.length||zs.length)&&bf()}}let pn=null,Tf=null;function Go(n){const e=pn;return pn=n,Tf=n&&n.type.__scopeId||null,e}function Ti(n,e=pn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&_u(-1);const r=Go(e);let o;try{o=n(...s)}finally{Go(r),i._d&&_u(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Qp(n,e){if(pn===null)return n;const t=aa(pn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=mt]=e[s];r&&(Ze(r)&&(r={mounted:r,updated:r}),r.deep&&ai(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function qi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Fi(),qn(l,t,8,[n.el,a,n,e]),Oi())}}const em=Symbol("_vte"),tm=n=>n.__isTeleport;function Pc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Pc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Bn(n,e){return Ze(n)?Xt({name:n.name},e,{setup:n}):n}function Af(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ml(n,e,t,i,s=!1){if(Je(n)){n.forEach((_,x)=>ml(_,e&&(Je(e)?e[x]:e),t,i,s));return}if(vr(i)&&!s)return;const r=i.shapeFlag&4?aa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===mt?a.refs={}:a.refs,u=a.setupState,f=ht(u),p=u===mt?()=>!1:_=>ct(f,_);if(c!=null&&c!==l&&(kt(c)?(h[c]=null,p(c)&&(u[c]=null)):Kt(c)&&(c.value=null)),Ze(l))kr(l,a,12,[o,h]);else{const _=kt(l),x=Kt(l);if(_||x){const d=()=>{if(n.f){const m=_?p(l)?u[l]:h[l]:l.value;s?Je(m)&&mc(m,r):Je(m)?m.includes(r)||m.push(r):_?(h[l]=[r],p(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else _?(h[l]=o,p(l)&&(u[l]=o)):x&&(l.value=o,n.k&&(h[n.k]=o))};o?(d.id=-1,fn(d,t)):d()}}}const vr=n=>!!n.type.__asyncLoader,Rf=n=>n.type.__isKeepAlive;function nm(n,e){Cf(n,"a",e)}function im(n,e){Cf(n,"da",e)}function Cf(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ia(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Rf(s.parent.vnode)&&sm(i,e,t,s),s=s.parent}}function sm(n,e,t,i){const s=ia(e,n,i,!0);Lc(()=>{mc(i[e],s)},t)}function ia(n,e,t=jt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Fi();const a=Vr(t),l=qn(e,t,n,o);return a(),Oi(),l});return i?s.unshift(r):s.push(r),r}}const di=n=>(e,t=jt)=>{(!oa||n==="sp")&&ia(n,(...i)=>e(...i),t)},rm=di("bm"),jn=di("m"),om=di("bu"),am=di("u"),lm=di("bum"),Lc=di("um"),cm=di("sp"),um=di("rtg"),hm=di("rtc");function fm(n,e=jt){ia("ec",n,e)}const dm="components";function lu(n,e){return mm(dm,n,!0,e)||n}const pm=Symbol.for("v-ndc");function mm(n,e,t=!0,i=!1){const s=pn||jt;if(s){const r=s.type;{const a=n0(r,!1);if(a&&(a===e||a===Mn(e)||a===Qo(Mn(e))))return r}const o=cu(s[n]||r[n],e)||cu(s.appContext[n],e);return!o&&i?r:o}}function cu(n,e){return n&&(n[e]||n[Mn(e)]||n[Qo(Mn(e))])}const gl=n=>n?$f(n)?aa(n):gl(n.parent):null,xr=Xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>gl(n.parent),$root:n=>gl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ic(n),$forceUpdate:n=>n.f||(n.f=()=>{Cc(n.update)}),$nextTick:n=>n.n||(n.n=Sf.bind(n.proxy)),$watch:n=>Fm.bind(n)}),Sa=(n,e)=>n!==mt&&!n.__isScriptSetup&&ct(n,e),gm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Sa(i,e))return o[e]=1,i[e];if(s!==mt&&ct(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&ct(c,e))return o[e]=3,r[e];if(t!==mt&&ct(t,e))return o[e]=4,t[e];_l&&(o[e]=0)}}const h=xr[e];let u,f;if(h)return e==="$attrs"&&Jt(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==mt&&ct(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ct(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Sa(s,e)?(s[e]=t,!0):i!==mt&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==mt&&ct(n,o)||Sa(e,o)||(a=r[0])&&ct(a,o)||ct(i,o)||ct(xr,o)||ct(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function uu(n){return Je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _l=!0;function _m(n){const e=Ic(n),t=n.proxy,i=n.ctx;_l=!1,e.beforeCreate&&hu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:p,updated:_,activated:x,deactivated:d,beforeDestroy:m,beforeUnmount:b,destroyed:M,unmounted:w,render:O,renderTracked:P,renderTriggered:R,errorCaptured:F,serverPrefetch:te,expose:y,inheritAttrs:E,components:q,directives:k,filters:Z}=e;if(c&&vm(c,i,null),o)for(const J in o){const W=o[J];Ze(W)&&(i[J]=W.bind(t))}if(s){const J=s.call(t,t);Lt(J)&&(n.data=ta(J))}if(_l=!0,r)for(const J in r){const W=r[J],pe=Ze(W)?W.bind(t,t):Ze(W.get)?W.get.bind(t,t):Wn,ve=!Ze(W)&&Ze(W.set)?W.set.bind(t):Wn,_e=Cn({get:pe,set:ve});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Te=>_e.value=Te})}if(a)for(const J in a)Pf(a[J],i,t,J);if(l){const J=Ze(l)?l.call(t):l;Reflect.ownKeys(J).forEach(W=>{Co(W,J[W])})}h&&hu(h,n,"c");function H(J,W){Je(W)?W.forEach(pe=>J(pe.bind(t))):W&&J(W.bind(t))}if(H(rm,u),H(jn,f),H(om,p),H(am,_),H(nm,x),H(im,d),H(fm,F),H(hm,P),H(um,R),H(lm,b),H(Lc,w),H(cm,te),Je(y))if(y.length){const J=n.exposed||(n.exposed={});y.forEach(W=>{Object.defineProperty(J,W,{get:()=>t[W],set:pe=>t[W]=pe})})}else n.exposed||(n.exposed={});O&&n.render===Wn&&(n.render=O),E!=null&&(n.inheritAttrs=E),q&&(n.components=q),k&&(n.directives=k),te&&Af(n)}function vm(n,e,t=Wn){Je(n)&&(n=vl(n));for(const i in n){const s=n[i];let r;Lt(s)?"default"in s?r=hi(s.from||i,s.default,!0):r=hi(s.from||i):r=hi(s),Kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function hu(n,e,t){qn(Je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Pf(n,e,t,i){let s=i.includes(".")?Wf(t,i):()=>t[i];if(kt(n)){const r=e[n];Ze(r)&&Ft(s,r)}else if(Ze(n))Ft(s,n.bind(t));else if(Lt(n))if(Je(n))n.forEach(r=>Pf(r,e,t,i));else{const r=Ze(n.handler)?n.handler.bind(t):e[n.handler];Ze(r)&&Ft(s,r,n)}}function Ic(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ho(l,c,o,!0)),Ho(l,e,o)),Lt(e)&&r.set(e,l),l}function Ho(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ho(n,r,t,!0),s&&s.forEach(o=>Ho(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=xm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const xm={data:fu,props:du,emits:du,methods:dr,computed:dr,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:dr,directives:dr,watch:Mm,provide:fu,inject:ym};function fu(n,e){return e?n?function(){return Xt(Ze(n)?n.call(this,this):n,Ze(e)?e.call(this,this):e)}:e:n}function ym(n,e){return dr(vl(n),vl(e))}function vl(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Qt(n,e){return n?[...new Set([].concat(n,e))]:e}function dr(n,e){return n?Xt(Object.create(null),n,e):e}function du(n,e){return n?Je(n)&&Je(e)?[...new Set([...n,...e])]:Xt(Object.create(null),uu(n),uu(e??{})):e}function Mm(n,e){if(!n)return e;if(!e)return n;const t=Xt(Object.create(null),n);for(const i in e)t[i]=Qt(n[i],e[i]);return t}function Lf(){return{app:null,config:{isNativeTag:sp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sm=0;function wm(n,e){return function(i,s=null){Ze(i)||(i=Xt({},i)),s!=null&&!Lt(s)&&(s=null);const r=Lf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Sm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:s0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Ze(h.install)?(o.add(h),h.install(c,...u)):Ze(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const p=c._ceVNode||Ot(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(p,h):n(p,h,f),l=!0,c._container=h,h.__vue_app__=c,aa(p.component)}},onUnmount(h){a.push(h)},unmount(){l&&(qn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=Gs;Gs=c;try{return h()}finally{Gs=u}}};return c}}let Gs=null;function Co(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function hi(n,e,t=!1){const i=jt||pn;if(i||Gs){const s=Gs?Gs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ze(e)?e.call(i&&i.proxy):e}}const If={},Df=()=>Object.create(If),Uf=n=>Object.getPrototypeOf(n)===If;function Em(n,e,t,i=!1){const s={},r=Df();n.propsDefaults=Object.create(null),Nf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:_f(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function bm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ht(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(sa(n.emitsOptions,f))continue;const p=e[f];if(l)if(ct(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=Mn(f);s[_]=xl(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Nf(n,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!ct(e,u)&&((h=fs(u))===u||!ct(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=xl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!ct(e,u))&&(delete r[u],c=!0)}c&&ui(n.attrs,"set","")}function Nf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(gr(l))continue;const c=e[l];let h;s&&ct(s,h=Mn(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:sa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ht(t),c=a||mt;for(let h=0;h<r.length;h++){const u=r[h];t[u]=xl(s,l,u,c[u],n,!ct(c,u))}}return o}function xl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ct(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=Vr(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===fs(t))&&(i=!0))}return i}const Tm=new WeakMap;function Ff(n,e,t=!1){const i=t?Tm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ze(n)){const h=u=>{l=!0;const[f,p]=Ff(u,e,!0);Xt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return Lt(n)&&i.set(n,Os),Os;if(Je(r))for(let h=0;h<r.length;h++){const u=Mn(r[h]);pu(u)&&(o[u]=mt)}else if(r)for(const h in r){const u=Mn(h);if(pu(u)){const f=r[h],p=o[u]=Je(f)||Ze(f)?{type:f}:Xt({},f),_=p.type;let x=!1,d=!0;if(Je(_))for(let m=0;m<_.length;++m){const b=_[m],M=Ze(b)&&b.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(d=!1)}else x=Ze(_)&&_.name==="Boolean";p[0]=x,p[1]=d,(x||ct(p,"default"))&&a.push(u)}}const c=[o,a];return Lt(n)&&i.set(n,c),c}function pu(n){return n[0]!=="$"&&!gr(n)}const Of=n=>n[0]==="_"||n==="$stable",Dc=n=>Je(n)?n.map(kn):[kn(n)],Am=(n,e,t)=>{if(e._n)return e;const i=Ti((...s)=>Dc(e(...s)),t);return i._c=!1,i},Bf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Of(s))continue;const r=n[s];if(Ze(r))e[s]=Am(s,r,i);else if(r!=null){const o=Dc(r);e[s]=()=>o}}},zf=(n,e)=>{const t=Dc(e);n.slots.default=()=>t},Gf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Rm=(n,e,t)=>{const i=n.slots=Df();if(n.vnode.shapeFlag&32){const s=e._;s?(Gf(i,e,t),t&&Qh(i,"_",s,!0)):Bf(e,i)}else e&&zf(n,e)},Cm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Gf(s,e,t):(r=!e.$stable,Bf(e,s)),o=e}else e&&(zf(n,e),o={default:1});if(r)for(const a in s)!Of(a)&&o[a]==null&&delete s[a]},fn=Vm;function Pm(n){return Lm(n)}function Lm(n,e){const t=ef();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:p=Wn,insertStaticContent:_}=n,x=(g,T,L,U=null,I=null,Y=null,j=void 0,S=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!sr(g,T)&&(U=N(g),Te(g,I,Y,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:V,shapeFlag:z}=T;switch(C){case ra:d(g,T,L,U);break;case Lr:m(g,T,L,U);break;case ba:g==null&&b(T,L,U,j);break;case rn:q(g,T,L,U,I,Y,j,S,v);break;default:z&1?O(g,T,L,U,I,Y,j,S,v):z&6?k(g,T,L,U,I,Y,j,S,v):(z&64||z&128)&&C.process(g,T,L,U,I,Y,j,S,v,ue)}V!=null&&I&&ml(V,g&&g.ref,Y,T||g,!T)},d=(g,T,L,U)=>{if(g==null)i(T.el=a(T.children),L,U);else{const I=T.el=g.el;T.children!==g.children&&c(I,T.children)}},m=(g,T,L,U)=>{g==null?i(T.el=l(T.children||""),L,U):T.el=g.el},b=(g,T,L,U)=>{[g.el,g.anchor]=_(g.children,T,L,U,g.el,g.anchor)},M=({el:g,anchor:T},L,U)=>{let I;for(;g&&g!==T;)I=f(g),i(g,L,U),g=I;i(T,L,U)},w=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=f(g),s(g),g=L;s(T)},O=(g,T,L,U,I,Y,j,S,v)=>{T.type==="svg"?j="svg":T.type==="math"&&(j="mathml"),g==null?P(T,L,U,I,Y,j,S,v):te(g,T,I,Y,j,S,v)},P=(g,T,L,U,I,Y,j,S)=>{let v,C;const{props:V,shapeFlag:z,transition:G,dirs:de}=g;if(v=g.el=o(g.type,Y,V&&V.is,V),z&8?h(v,g.children):z&16&&F(g.children,v,null,U,I,wa(g,Y),j,S),de&&qi(g,null,U,"created"),R(v,g,g.scopeId,j,U),V){for(const me in V)me!=="value"&&!gr(me)&&r(v,me,null,V[me],Y,U);"value"in V&&r(v,"value",null,V.value,Y),(C=V.onVnodeBeforeMount)&&zn(C,U,g)}de&&qi(g,null,U,"beforeMount");const ce=Im(I,G);ce&&G.beforeEnter(v),i(v,T,L),((C=V&&V.onVnodeMounted)||ce||de)&&fn(()=>{C&&zn(C,U,g),ce&&G.enter(v),de&&qi(g,null,U,"mounted")},I)},R=(g,T,L,U,I)=>{if(L&&p(g,L),U)for(let Y=0;Y<U.length;Y++)p(g,U[Y]);if(I){let Y=I.subTree;if(T===Y||qf(Y.type)&&(Y.ssContent===T||Y.ssFallback===T)){const j=I.vnode;R(g,j,j.scopeId,j.slotScopeIds,I.parent)}}},F=(g,T,L,U,I,Y,j,S,v=0)=>{for(let C=v;C<g.length;C++){const V=g[C]=S?Ci(g[C]):kn(g[C]);x(null,V,T,L,U,I,Y,j,S)}},te=(g,T,L,U,I,Y,j)=>{const S=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:V}=T;v|=g.patchFlag&16;const z=g.props||mt,G=T.props||mt;let de;if(L&&Yi(L,!1),(de=G.onVnodeBeforeUpdate)&&zn(de,L,T,g),V&&qi(T,g,L,"beforeUpdate"),L&&Yi(L,!0),(z.innerHTML&&G.innerHTML==null||z.textContent&&G.textContent==null)&&h(S,""),C?y(g.dynamicChildren,C,S,L,U,wa(T,I),Y):j||W(g,T,S,null,L,U,wa(T,I),Y,!1),v>0){if(v&16)E(S,z,G,L,I);else if(v&2&&z.class!==G.class&&r(S,"class",null,G.class,I),v&4&&r(S,"style",z.style,G.style,I),v&8){const ce=T.dynamicProps;for(let me=0;me<ce.length;me++){const Ee=ce[me],fe=z[Ee],xe=G[Ee];(xe!==fe||Ee==="value")&&r(S,Ee,fe,xe,I,L)}}v&1&&g.children!==T.children&&h(S,T.children)}else!j&&C==null&&E(S,z,G,L,I);((de=G.onVnodeUpdated)||V)&&fn(()=>{de&&zn(de,L,T,g),V&&qi(T,g,L,"updated")},U)},y=(g,T,L,U,I,Y,j)=>{for(let S=0;S<T.length;S++){const v=g[S],C=T[S],V=v.el&&(v.type===rn||!sr(v,C)||v.shapeFlag&70)?u(v.el):L;x(v,C,V,null,U,I,Y,j,!0)}},E=(g,T,L,U,I)=>{if(T!==L){if(T!==mt)for(const Y in T)!gr(Y)&&!(Y in L)&&r(g,Y,T[Y],null,I,U);for(const Y in L){if(gr(Y))continue;const j=L[Y],S=T[Y];j!==S&&Y!=="value"&&r(g,Y,S,j,I,U)}"value"in L&&r(g,"value",T.value,L.value,I)}},q=(g,T,L,U,I,Y,j,S,v)=>{const C=T.el=g?g.el:a(""),V=T.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:G,slotScopeIds:de}=T;de&&(S=S?S.concat(de):de),g==null?(i(C,L,U),i(V,L,U),F(T.children||[],L,V,I,Y,j,S,v)):z>0&&z&64&&G&&g.dynamicChildren?(y(g.dynamicChildren,G,L,I,Y,j,S),(T.key!=null||I&&T===I.subTree)&&Hf(g,T,!0)):W(g,T,L,V,I,Y,j,S,v)},k=(g,T,L,U,I,Y,j,S,v)=>{T.slotScopeIds=S,g==null?T.shapeFlag&512?I.ctx.activate(T,L,U,j,v):Z(T,L,U,I,Y,j,v):re(g,T,v)},Z=(g,T,L,U,I,Y,j)=>{const S=g.component=Zm(g,U,I);if(Rf(g)&&(S.ctx.renderer=ue),Jm(S,!1,j),S.asyncDep){if(I&&I.registerDep(S,H,j),!g.el){const v=S.subTree=Ot(Lr);m(null,v,T,L)}}else H(S,g,T,L,I,Y,j)},re=(g,T,L)=>{const U=T.component=g.component;if(Hm(g,T,L))if(U.asyncDep&&!U.asyncResolved){J(U,T,L);return}else U.next=T,U.update();else T.el=g.el,U.vnode=T},H=(g,T,L,U,I,Y,j)=>{const S=()=>{if(g.isMounted){let{next:z,bu:G,u:de,parent:ce,vnode:me}=g;{const Ce=kf(g);if(Ce){z&&(z.el=me.el,J(g,z,j)),Ce.asyncDep.then(()=>{g.isUnmounted||S()});return}}let Ee=z,fe;Yi(g,!1),z?(z.el=me.el,J(g,z,j)):z=me,G&&va(G),(fe=z.props&&z.props.onVnodeBeforeUpdate)&&zn(fe,ce,z,me),Yi(g,!0);const xe=Ea(g),Re=g.subTree;g.subTree=xe,x(Re,xe,u(Re.el),N(Re),g,I,Y),z.el=xe.el,Ee===null&&km(g,xe.el),de&&fn(de,I),(fe=z.props&&z.props.onVnodeUpdated)&&fn(()=>zn(fe,ce,z,me),I)}else{let z;const{el:G,props:de}=T,{bm:ce,m:me,parent:Ee,root:fe,type:xe}=g,Re=vr(T);if(Yi(g,!1),ce&&va(ce),!Re&&(z=de&&de.onVnodeBeforeMount)&&zn(z,Ee,T),Yi(g,!0),G&&ee){const Ce=()=>{g.subTree=Ea(g),ee(G,g.subTree,g,I,null)};Re&&xe.__asyncHydrate?xe.__asyncHydrate(G,g,Ce):Ce()}else{fe.ce&&fe.ce._injectChildStyle(xe);const Ce=g.subTree=Ea(g);x(null,Ce,L,U,g,I,Y),T.el=Ce.el}if(me&&fn(me,I),!Re&&(z=de&&de.onVnodeMounted)){const Ce=T;fn(()=>zn(z,Ee,Ce),I)}(T.shapeFlag&256||Ee&&vr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&fn(g.a,I),g.isMounted=!0,T=L=U=null}};g.scope.on();const v=g.effect=new nf(S);g.scope.off();const C=g.update=v.run.bind(v),V=g.job=v.runIfDirty.bind(v);V.i=g,V.id=g.uid,v.scheduler=()=>Cc(V),Yi(g,!0),C()},J=(g,T,L)=>{T.component=g;const U=g.vnode.props;g.vnode=T,g.next=null,bm(g,T.props,U,L),Cm(g,T.children,L),Fi(),au(g),Oi()},W=(g,T,L,U,I,Y,j,S,v=!1)=>{const C=g&&g.children,V=g?g.shapeFlag:0,z=T.children,{patchFlag:G,shapeFlag:de}=T;if(G>0){if(G&128){ve(C,z,L,U,I,Y,j,S,v);return}else if(G&256){pe(C,z,L,U,I,Y,j,S,v);return}}de&8?(V&16&&Se(C,I,Y),z!==C&&h(L,z)):V&16?de&16?ve(C,z,L,U,I,Y,j,S,v):Se(C,I,Y,!0):(V&8&&h(L,""),de&16&&F(z,L,U,I,Y,j,S,v))},pe=(g,T,L,U,I,Y,j,S,v)=>{g=g||Os,T=T||Os;const C=g.length,V=T.length,z=Math.min(C,V);let G;for(G=0;G<z;G++){const de=T[G]=v?Ci(T[G]):kn(T[G]);x(g[G],de,L,null,I,Y,j,S,v)}C>V?Se(g,I,Y,!0,!1,z):F(T,L,U,I,Y,j,S,v,z)},ve=(g,T,L,U,I,Y,j,S,v)=>{let C=0;const V=T.length;let z=g.length-1,G=V-1;for(;C<=z&&C<=G;){const de=g[C],ce=T[C]=v?Ci(T[C]):kn(T[C]);if(sr(de,ce))x(de,ce,L,null,I,Y,j,S,v);else break;C++}for(;C<=z&&C<=G;){const de=g[z],ce=T[G]=v?Ci(T[G]):kn(T[G]);if(sr(de,ce))x(de,ce,L,null,I,Y,j,S,v);else break;z--,G--}if(C>z){if(C<=G){const de=G+1,ce=de<V?T[de].el:U;for(;C<=G;)x(null,T[C]=v?Ci(T[C]):kn(T[C]),L,ce,I,Y,j,S,v),C++}}else if(C>G)for(;C<=z;)Te(g[C],I,Y,!0),C++;else{const de=C,ce=C,me=new Map;for(C=ce;C<=G;C++){const Pe=T[C]=v?Ci(T[C]):kn(T[C]);Pe.key!=null&&me.set(Pe.key,C)}let Ee,fe=0;const xe=G-ce+1;let Re=!1,Ce=0;const be=new Array(xe);for(C=0;C<xe;C++)be[C]=0;for(C=de;C<=z;C++){const Pe=g[C];if(fe>=xe){Te(Pe,I,Y,!0);continue}let ze;if(Pe.key!=null)ze=me.get(Pe.key);else for(Ee=ce;Ee<=G;Ee++)if(be[Ee-ce]===0&&sr(Pe,T[Ee])){ze=Ee;break}ze===void 0?Te(Pe,I,Y,!0):(be[ze-ce]=C+1,ze>=Ce?Ce=ze:Re=!0,x(Pe,T[ze],L,null,I,Y,j,S,v),fe++)}const Be=Re?Dm(be):Os;for(Ee=Be.length-1,C=xe-1;C>=0;C--){const Pe=ce+C,ze=T[Pe],B=Pe+1<V?T[Pe+1].el:U;be[C]===0?x(null,ze,L,B,I,Y,j,S,v):Re&&(Ee<0||C!==Be[Ee]?_e(ze,L,B,2):Ee--)}}},_e=(g,T,L,U,I=null)=>{const{el:Y,type:j,transition:S,children:v,shapeFlag:C}=g;if(C&6){_e(g.component.subTree,T,L,U);return}if(C&128){g.suspense.move(T,L,U);return}if(C&64){j.move(g,T,L,ue);return}if(j===rn){i(Y,T,L);for(let z=0;z<v.length;z++)_e(v[z],T,L,U);i(g.anchor,T,L);return}if(j===ba){M(g,T,L);return}if(U!==2&&C&1&&S)if(U===0)S.beforeEnter(Y),i(Y,T,L),fn(()=>S.enter(Y),I);else{const{leave:z,delayLeave:G,afterLeave:de}=S,ce=()=>i(Y,T,L),me=()=>{z(Y,()=>{ce(),de&&de()})};G?G(Y,ce,me):me()}else i(Y,T,L)},Te=(g,T,L,U=!1,I=!1)=>{const{type:Y,props:j,ref:S,children:v,dynamicChildren:C,shapeFlag:V,patchFlag:z,dirs:G,cacheIndex:de}=g;if(z===-2&&(I=!1),S!=null&&ml(S,null,L,g,!0),de!=null&&(T.renderCache[de]=void 0),V&256){T.ctx.deactivate(g);return}const ce=V&1&&G,me=!vr(g);let Ee;if(me&&(Ee=j&&j.onVnodeBeforeUnmount)&&zn(Ee,T,g),V&6)he(g.component,L,U);else{if(V&128){g.suspense.unmount(L,U);return}ce&&qi(g,null,T,"beforeUnmount"),V&64?g.type.remove(g,T,L,ue,U):C&&!C.hasOnce&&(Y!==rn||z>0&&z&64)?Se(C,T,L,!1,!0):(Y===rn&&z&384||!I&&V&16)&&Se(v,T,L),U&&Oe(g)}(me&&(Ee=j&&j.onVnodeUnmounted)||ce)&&fn(()=>{Ee&&zn(Ee,T,g),ce&&qi(g,null,T,"unmounted")},L)},Oe=g=>{const{type:T,el:L,anchor:U,transition:I}=g;if(T===rn){ie(L,U);return}if(T===ba){w(g);return}const Y=()=>{s(L),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(g.shapeFlag&1&&I&&!I.persisted){const{leave:j,delayLeave:S}=I,v=()=>j(L,Y);S?S(g.el,Y,v):v()}else Y()},ie=(g,T)=>{let L;for(;g!==T;)L=f(g),s(g),g=L;s(T)},he=(g,T,L)=>{const{bum:U,scope:I,job:Y,subTree:j,um:S,m:v,a:C}=g;mu(v),mu(C),U&&va(U),I.stop(),Y&&(Y.flags|=8,Te(j,g,T,L)),S&&fn(S,T),fn(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Se=(g,T,L,U=!1,I=!1,Y=0)=>{for(let j=Y;j<g.length;j++)Te(g[j],T,L,U,I)},N=g=>{if(g.shapeFlag&6)return N(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),L=T&&T[em];return L?f(L):T};let le=!1;const se=(g,T,L)=>{g==null?T._vnode&&Te(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,L),T._vnode=g,le||(le=!0,au(),Ef(),le=!1)},ue={p:x,um:Te,m:_e,r:Oe,mt:Z,mc:F,pc:W,pbc:y,n:N,o:n};let we,ee;return{render:se,hydrate:we,createApp:wm(se,we)}}function wa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Im(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hf(n,e,t=!1){const i=n.children,s=e.children;if(Je(i)&&Je(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ci(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Hf(o,a)),a.type===ra&&(a.el=o.el)}}function Dm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function kf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kf(e)}function mu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Um=Symbol.for("v-scx"),Nm=()=>hi(Um);function Ft(n,e,t){return Vf(n,e,t)}function Vf(n,e,t=mt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Xt({},t);let l;if(oa)if(r==="sync"){const f=Nm();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=Wn,f.resume=Wn,f.pause=Wn,f}const c=jt;a.call=(f,p,_)=>qn(f,c,p,_);let h=!1;r==="post"?a.scheduler=f=>{fn(f,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,p)=>{p?f():Cc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const u=jp(n,e,a);return l&&l.push(u),u}function Fm(n,e,t){const i=this.proxy,s=kt(n)?n.includes(".")?Wf(i,n):()=>i[n]:n.bind(i,i);let r;Ze(e)?r=e:(r=e.handler,t=e);const o=Vr(this),a=Vf(s,r.bind(i),t);return o(),a}function Wf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Om=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Mn(e)}Modifiers`]||n[`${fs(e)}Modifiers`];function Bm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||mt;let s=t;const r=e.startsWith("update:"),o=r&&Om(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>kt(h)?h.trim():h)),o.number&&(s=t.map(fp)));let a,l=i[a=_a(e)]||i[a=_a(Mn(e))];!l&&r&&(l=i[a=_a(fs(e))]),l&&qn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,qn(c,n,6,s)}}function Xf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ze(n)){const l=c=>{const h=Xf(c,e,!0);h&&(a=!0,Xt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Lt(n)&&i.set(n,null),null):(Je(r)?r.forEach(l=>o[l]=null):Xt(o,r),Lt(n)&&i.set(n,o),o)}function sa(n,e){return!n||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,fs(e))||ct(n,e))}function Ea(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:p,ctx:_,inheritAttrs:x}=n,d=Go(n);let m,b;try{if(t.shapeFlag&4){const w=s||i,O=w;m=kn(c.call(O,w,h,u,p,f,_)),b=a}else{const w=e;m=kn(w.length>1?w(u,{attrs:a,slots:o,emit:l}):w(u,null)),b=e.props?a:zm(a)}}catch(w){yr.length=0,na(w,n,1),m=Ot(Lr)}let M=m;if(b&&x!==!1){const w=Object.keys(b),{shapeFlag:O}=M;w.length&&O&7&&(r&&w.some(pc)&&(b=Gm(b,r)),M=Xs(M,b,!1,!0))}return t.dirs&&(M=Xs(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Pc(M,t.transition),m=M,Go(d),m}const zm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ko(t))&&((e||(e={}))[t]=n[t]);return e},Gm=(n,e)=>{const t={};for(const i in n)(!pc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Hm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?gu(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==i[f]&&!sa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gu(i,o,c):!0:!!o;return!1}function gu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!sa(t,r))return!0}return!1}function km({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const qf=n=>n.__isSuspense;function Vm(n,e){e&&e.pendingBranch?Je(n)?e.effects.push(...n):e.effects.push(n):Jp(n)}const rn=Symbol.for("v-fgt"),ra=Symbol.for("v-txt"),Lr=Symbol.for("v-cmt"),ba=Symbol.for("v-stc"),yr=[];let mn=null;function pi(n=!1){yr.push(mn=n?null:[])}function Wm(){yr.pop(),mn=yr[yr.length-1]||null}let Ir=1;function _u(n){Ir+=n,n<0&&mn&&(mn.hasOnce=!0)}function Xm(n){return n.dynamicChildren=Ir>0?mn||Os:null,Wm(),Ir>0&&mn&&mn.push(n),n}function mi(n,e,t,i,s,r){return Xm(Ke(n,e,t,i,s,r,!0))}function ko(n){return n?n.__v_isVNode===!0:!1}function sr(n,e){return n.type===e.type&&n.key===e.key}const Yf=({key:n})=>n??null,Po=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?kt(n)||Kt(n)||Ze(n)?{i:pn,r:n,k:e,f:!!t}:n:null);function Ke(n,e=null,t=null,i=0,s=null,r=n===rn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Yf(e),ref:e&&Po(e),scopeId:Tf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pn};return a?(Uc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=kt(t)?8:16),Ir>0&&!o&&mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mn.push(l),l}const Ot=qm;function qm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===pm)&&(n=Lr),ko(n)){const a=Xs(n,e,!0);return t&&Uc(a,t),Ir>0&&!r&&mn&&(a.shapeFlag&6?mn[mn.indexOf(n)]=a:mn.push(a)),a.patchFlag=-2,a}if(i0(n)&&(n=n.__vccOpts),e){e=Ym(e);let{class:a,style:l}=e;a&&!kt(a)&&(e.class=On(a)),Lt(l)&&(Tc(l)&&!Je(l)&&(l=Xt({},l)),e.style=_c(l))}const o=kt(n)?1:qf(n)?128:tm(n)?64:Lt(n)?4:Ze(n)?2:0;return Ke(n,e,t,i,s,o,r,!0)}function Ym(n){return n?Tc(n)||Uf(n)?Xt({},n):n:null}function Xs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?$m(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Yf(c),ref:e&&e.ref?t&&r?Je(r)?r.concat(Po(e)):[r,Po(e)]:Po(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xs(n.ssContent),ssFallback:n.ssFallback&&Xs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Pc(h,l.clone(h)),h}function Ai(n=" ",e=0){return Ot(ra,null,n,e)}function kn(n){return n==null||typeof n=="boolean"?Ot(Lr):Je(n)?Ot(rn,null,n.slice()):ko(n)?Ci(n):Ot(ra,null,String(n))}function Ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xs(n)}function Uc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Je(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Uc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Uf(e)?e._ctx=pn:s===3&&pn&&(pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:pn},t=32):(e=String(e),i&64?(t=16,e=[Ai(e)]):t=8);n.children=e,n.shapeFlag|=t}function $m(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=On([e.class,i.class]));else if(s==="style")e.style=_c([e.style,i.style]);else if(Ko(s)){const r=e[s],o=i[s];o&&r!==o&&!(Je(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function zn(n,e,t,i=null){qn(n,e,7,[t,i])}const jm=Lf();let Km=0;function Zm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||jm,r={uid:Km++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ff(i,s),emitsOptions:Xf(i,s),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Bm.bind(null,r),n.ce&&n.ce(r),r}let jt=null,Vo,yl;{const n=ef(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Vo=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),yl=e("__VUE_SSR_SETTERS__",t=>oa=t)}const Vr=n=>{const e=jt;return Vo(n),n.scope.on(),()=>{n.scope.off(),Vo(e)}},vu=()=>{jt&&jt.scope.off(),Vo(null)};function $f(n){return n.vnode.shapeFlag&4}let oa=!1;function Jm(n,e=!1,t=!1){e&&yl(e);const{props:i,children:s}=n.vnode,r=$f(n);Em(n,i,r,e),Rm(n,s,t);const o=r?Qm(n,e):void 0;return e&&yl(!1),o}function Qm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gm);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?t0(n):null,r=Vr(n);Fi();const o=kr(i,n,0,[n.props,s]);if(Oi(),r(),Jh(o)){if(vr(n)||Af(n),o.then(vu,vu),e)return o.then(a=>{xu(n,a,e)}).catch(a=>{na(a,n,0)});n.asyncDep=o}else xu(n,o,e)}else jf(n,e)}function xu(n,e,t){Ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Lt(e)&&(n.setupState=yf(e)),jf(n,t)}let yu;function jf(n,e,t){const i=n.type;if(!n.render){if(!e&&yu&&!i.render){const s=i.template||Ic(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Xt(Xt({isCustomElement:r,delimiters:a},o),l);i.render=yu(s,c)}}n.render=i.render||Wn}{const s=Vr(n);Fi();try{_m(n)}finally{Oi(),s()}}}const e0={get(n,e){return Jt(n,"get",""),n[e]}};function t0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,e0),slots:n.slots,emit:n.emit,expose:e}}function aa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yf(kp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xr)return xr[t](n)},has(e,t){return t in e||t in xr}})):n.proxy}function n0(n,e=!0){return Ze(n)?n.displayName||n.name:n.name||e&&n.__name}function i0(n){return Ze(n)&&"__vccOpts"in n}const Cn=(n,e)=>Yp(n,e,oa);function Kf(n,e,t){const i=arguments.length;return i===2?Lt(e)&&!Je(e)?ko(e)?Ot(n,null,[e]):Ot(n,e):Ot(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ko(t)&&(t=[t]),Ot(n,e,t))}const s0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ml;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{Ml=Mu.createPolicy("vue",{createHTML:n=>n})}catch{}const Zf=Ml?n=>Ml.createHTML(n):n=>n,r0="http://www.w3.org/2000/svg",o0="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,Su=oi&&oi.createElement("template"),a0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?oi.createElementNS(r0,n):e==="mathml"?oi.createElementNS(o0,n):t?oi.createElement(n,{is:t}):oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Su.innerHTML=Zf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Su.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},l0=Symbol("_vtc");function c0(n,e,t){const i=n[l0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Wo=Symbol("_vod"),Jf=Symbol("_vsh"),u0={beforeMount(n,{value:e},{transition:t}){n[Wo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):rr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),rr(n,!0),i.enter(n)):i.leave(n,()=>{rr(n,!1)}):rr(n,e))},beforeUnmount(n,{value:e}){rr(n,e)}};function rr(n,e){n.style.display=e?n[Wo]:"none",n[Jf]=!e}const h0=Symbol(""),f0=/(^|;)\s*display\s*:/;function d0(n,e,t){const i=n.style,s=kt(t);let r=!1;if(t&&!s){if(e)if(kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Lo(i,a,"")}else for(const o in e)t[o]==null&&Lo(i,o,"");for(const o in t)o==="display"&&(r=!0),Lo(i,o,t[o])}else if(s){if(e!==t){const o=i[h0];o&&(t+=";"+o),i.cssText=t,r=f0.test(t)}}else e&&n.removeAttribute("style");Wo in n&&(n[Wo]=r?i.display:"",n[Jf]&&(i.display="none"))}const wu=/\s*!important$/;function Lo(n,e,t){if(Je(t))t.forEach(i=>Lo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=p0(n,e);wu.test(t)?n.setProperty(fs(i),t.replace(wu,""),"important"):n[i]=t}}const Eu=["Webkit","Moz","ms"],Ta={};function p0(n,e){const t=Ta[e];if(t)return t;let i=Mn(e);if(i!=="filter"&&i in n)return Ta[e]=i;i=Qo(i);for(let s=0;s<Eu.length;s++){const r=Eu[s]+i;if(r in n)return Ta[e]=r}return e}const bu="http://www.w3.org/1999/xlink";function Tu(n,e,t,i,s,r=vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(bu,e.slice(6,e.length)):n.setAttributeNS(bu,e,t):t==null||r&&!tf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":er(t)?String(t):t)}function Au(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=tf(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function m0(n,e,t,i){n.addEventListener(e,t,i)}function g0(n,e,t,i){n.removeEventListener(e,t,i)}const Ru=Symbol("_vei");function _0(n,e,t,i,s=null){const r=n[Ru]||(n[Ru]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=v0(e);if(i){const c=r[e]=M0(i,s);m0(n,a,c,l)}else o&&(g0(n,a,o,l),r[e]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function v0(n){let e;if(Cu.test(n)){e={};let i;for(;i=n.match(Cu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fs(n.slice(2)),e]}let Aa=0;const x0=Promise.resolve(),y0=()=>Aa||(x0.then(()=>Aa=0),Aa=Date.now());function M0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;qn(S0(i,t.value),e,5,[i])};return t.value=n,t.attached=y0(),t}function S0(n,e){if(Je(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Pu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,w0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?c0(n,i,o):e==="style"?d0(n,t,i):Ko(e)?pc(e)||_0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):E0(n,e,i,o))?(Au(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!kt(i))?Au(n,Mn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Tu(n,e,i,o))};function E0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Pu(e)&&Ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pu(e)&&kt(t)?!1:e in n}const b0=Xt({patchProp:w0},a0);let Lu;function T0(){return Lu||(Lu=Pm(b0))}const A0=(...n)=>{const e=T0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=C0(i);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,R0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function R0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function C0(n){return kt(n)?document.querySelector(n):n}const P0={id:"app"},L0=Bn({__name:"App",setup(n){const e=tt(!1);function t(i){i.clientY<50?e.value=!0:e.value=!1}return jn(()=>{window.addEventListener("mousemove",t)}),Lc(()=>{window.removeEventListener("mousemove",t)}),(i,s)=>{const r=lu("router-link"),o=lu("router-view");return pi(),mi("div",P0,[Qp(Ke("nav",null,[Ot(r,{to:"/3d-bear-arts/leather"},{default:Ti(()=>s[0]||(s[0]=[Ai("Leather")])),_:1}),Ot(r,{to:"/3d-bear-arts/pop-art"},{default:Ti(()=>s[1]||(s[1]=[Ai("Pop MouseMove")])),_:1}),Ot(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Ti(()=>s[2]||(s[2]=[Ai("Pop3")])),_:1}),Ot(r,{to:"/3d-bear-arts/machine"},{default:Ti(()=>s[3]||(s[3]=[Ai("machine")])),_:1}),Ot(r,{to:"/3d-bear-arts/"},{default:Ti(()=>s[4]||(s[4]=[Ai("Water")])),_:1}),Ot(r,{to:"/3d-bear-arts/ghost-bear"},{default:Ti(()=>s[5]||(s[5]=[Ai("ghost")])),_:1}),Ot(r,{to:"/3d-bear-arts/white-ghost-bear"},{default:Ti(()=>s[6]||(s[6]=[Ai("white ghost")])),_:1})],512),[[u0,e.value]]),Ot(o)])}}}),gi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},I0=gi(L0,[["__scopeId","data-v-663af727"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Is=typeof document<"u";function Qf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function D0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Qf(n.default)}const dt=Object.assign;function Ra(n,e){const t={};for(const i in e){const s=e[i];t[i]=Nn(s)?s.map(n):n(s)}return t}const Mr=()=>{},Nn=Array.isArray,ed=/#/g,U0=/&/g,N0=/\//g,F0=/=/g,O0=/\?/g,td=/\+/g,B0=/%5B/g,z0=/%5D/g,nd=/%5E/g,G0=/%60/g,id=/%7B/g,H0=/%7C/g,sd=/%7D/g,k0=/%20/g;function Nc(n){return encodeURI(""+n).replace(H0,"|").replace(B0,"[").replace(z0,"]")}function V0(n){return Nc(n).replace(id,"{").replace(sd,"}").replace(nd,"^")}function Sl(n){return Nc(n).replace(td,"%2B").replace(k0,"+").replace(ed,"%23").replace(U0,"%26").replace(G0,"`").replace(id,"{").replace(sd,"}").replace(nd,"^")}function W0(n){return Sl(n).replace(F0,"%3D")}function X0(n){return Nc(n).replace(ed,"%23").replace(O0,"%3F")}function q0(n){return n==null?"":X0(n).replace(N0,"%2F")}function Dr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Y0=/\/$/,$0=n=>n.replace(Y0,"");function Ca(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=J0(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Dr(o)}}function j0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Iu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function K0(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&qs(e.matched[i],t.matched[s])&&rd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function qs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function rd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Z0(n[t],e[t]))return!1;return!0}function Z0(n,e){return Nn(n)?Du(n,e):Nn(e)?Du(e,n):n===e}function Du(n,e){return Nn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function J0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const xi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ur;(function(n){n.pop="pop",n.push="push"})(Ur||(Ur={}));var Sr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Sr||(Sr={}));function Q0(n){if(!n)if(Is){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),$0(n)}const eg=/^[^#]+#/;function tg(n,e){return n.replace(eg,"#")+e}function ng(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const la=()=>({left:window.scrollX,top:window.scrollY});function ig(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=ng(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uu(n,e){return(history.state?history.state.position-e:-1)+n}const wl=new Map;function sg(n,e){wl.set(n,e)}function rg(n){const e=wl.get(n);return wl.delete(n),e}let og=()=>location.protocol+"//"+location.host;function od(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Iu(l,"")}return Iu(t,n)+i+s}function ag(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=od(n,location),_=t.value,x=e.value;let d=0;if(f){if(t.value=p,e.value=f,o&&o===_){o=null;return}d=x?f.position-x.position:0}else i(p);s.forEach(m=>{m(t.value,_,{delta:d,type:Ur.pop,direction:d?d>0?Sr.forward:Sr.back:Sr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const p=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(p),p}function h(){const{history:f}=window;f.state&&f.replaceState(dt({},f.state,{scroll:la()}),"")}function u(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Nu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?la():null}}function lg(n){const{history:e,location:t}=window,i={value:od(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=n.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:og()+n+l;try{e[h?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),t[h?"replace":"assign"](f)}}function o(l,c){const h=dt({},e.state,Nu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=dt({},s.value,e.state,{forward:l,scroll:la()});r(h.current,h,!0);const u=dt({},Nu(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function cg(n){n=Q0(n);const e=lg(n),t=ag(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=dt({location:"",base:n,go:i,createHref:tg.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ug(n){return typeof n=="string"||n&&typeof n=="object"}function ad(n){return typeof n=="string"||typeof n=="symbol"}const ld=Symbol("");var Fu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Fu||(Fu={}));function Ys(n,e){return dt(new Error,{type:n,[ld]:!0},e)}function Jn(n,e){return n instanceof Error&&ld in n&&(e==null||!!(n.type&e))}const Ou="[^/]+?",hg={sensitive:!1,strict:!1,start:!0,end:!0},fg=/[.+*?^${}()[\]/\\]/g;function dg(n,e){const t=dt({},hg,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const h=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const f=c[u];let p=40+(t.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(fg,"\\$&"),p+=40;else if(f.type===1){const{value:_,repeatable:x,optional:d,regexp:m}=f;r.push({name:_,repeatable:x,optional:d});const b=m||Ou;if(b!==Ou){p+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+w.message)}}let M=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(M=d&&c.length<2?`(?:/${M})`:"/"+M),d&&(M+="?"),s+=M,p+=20,d&&(p+=-8),x&&(p+=-20),b===".*"&&(p+=-50)}h.push(p)}i.push(h)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let f=1;f<h.length;f++){const p=h[f]||"",_=r[f-1];u[_.name]=p&&_.repeatable?p.split("/"):p}return u}function l(c){let h="",u=!1;for(const f of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const p of f)if(p.type===0)h+=p.value;else if(p.type===1){const{value:_,repeatable:x,optional:d}=p,m=_ in c?c[_]:"";if(Nn(m)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Nn(m)?m.join("/"):m;if(!b)if(d)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function pg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cd(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=pg(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Bu(i))return 1;if(Bu(s))return-1}return s.length-i.length}function Bu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const mg={type:0,value:""},gg=/[a-zA-Z0-9_]/;function _g(n){if(!n)return[[]];if(n==="/")return[[mg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:gg.test(l)?f():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:t=3:h+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function vg(n,e,t){const i=dg(_g(n.path),t),s=dt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xg(n,e){const t=[],i=new Map;e=ku({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,p){const _=!p,x=Gu(u);x.aliasOf=p&&p.record;const d=ku(e,u),m=[x];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of w)m.push(Gu(dt({},x,{components:p?p.record.components:x.components,path:O,aliasOf:p?p.record:x})))}let b,M;for(const w of m){const{path:O}=w;if(f&&O[0]!=="/"){const P=f.record.path,R=P[P.length-1]==="/"?"":"/";w.path=f.record.path+(O&&R+O)}if(b=vg(w,f,d),p?p.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),_&&u.name&&!Hu(b)&&o(u.name)),ud(b)&&l(b),x.children){const P=x.children;for(let R=0;R<P.length;R++)r(P[R],b,p&&p.children[R])}p=p||b}return M?()=>{o(M)}:Mr}function o(u){if(ad(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){const f=Sg(u,t);t.splice(f,0,u),u.record.name&&!Hu(u)&&i.set(u.record.name,u)}function c(u,f){let p,_={},x,d;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw Ys(1,{location:u});d=p.record.name,_=dt(zu(f.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&zu(u.params,p.keys.map(M=>M.name))),x=p.stringify(_)}else if(u.path!=null)x=u.path,p=t.find(M=>M.re.test(x)),p&&(_=p.parse(x),d=p.record.name);else{if(p=f.name?i.get(f.name):t.find(M=>M.re.test(f.path)),!p)throw Ys(1,{location:u,currentLocation:f});d=p.record.name,_=dt({},f.params,u.params),x=p.stringify(_)}const m=[];let b=p;for(;b;)m.unshift(b.record),b=b.parent;return{name:d,path:x,params:_,matched:m,meta:Mg(m)}}n.forEach(u=>r(u));function h(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function zu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Gu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:yg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function yg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Hu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Mg(n){return n.reduce((e,t)=>dt(e,t.meta),{})}function ku(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Sg(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;cd(n,e[r])<0?i=r:t=r+1}const s=wg(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function wg(n){let e=n;for(;e=e.parent;)if(ud(e)&&cd(n,e)===0)return e}function ud({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Eg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(td," "),o=r.indexOf("="),a=Dr(o<0?r:r.slice(0,o)),l=o<0?null:Dr(r.slice(o+1));if(a in e){let c=e[a];Nn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Vu(n){let e="";for(let t in n){const i=n[t];if(t=W0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Nn(i)?i.map(r=>r&&Sl(r)):[i&&Sl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function bg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Nn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Tg=Symbol(""),Wu=Symbol(""),Fc=Symbol(""),hd=Symbol(""),El=Symbol("");function or(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Pi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ys(4,{from:t,to:e})):f instanceof Error?l(f):ug(f)?l(Ys(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},h=r(()=>n.call(i&&i.instances[s],e,t,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(f=>l(f))})}function Pa(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Qf(l)){const h=(l.__vccOpts||l)[e];h&&r.push(Pi(h,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=D0(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const p=(u.__vccOpts||u)[e];return p&&Pi(p,t,i,o,a,s)()}))}}return r}function Xu(n){const e=hi(Fc),t=hi(hd),i=Cn(()=>{const l=Bs(n.to);return e.resolve(l)}),s=Cn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=t.matched;if(!h||!u.length)return-1;const f=u.findIndex(qs.bind(null,h));if(f>-1)return f;const p=qu(l[c-2]);return c>1&&qu(h)===p&&u[u.length-1].path!==p?u.findIndex(qs.bind(null,l[c-2])):f}),r=Cn(()=>s.value>-1&&Pg(t.params,i.value.params)),o=Cn(()=>s.value>-1&&s.value===t.matched.length-1&&rd(t.params,i.value.params));function a(l={}){return Cg(l)?e[Bs(n.replace)?"replace":"push"](Bs(n.to)).catch(Mr):Promise.resolve()}return{route:i,href:Cn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Ag=Bn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xu,setup(n,{slots:e}){const t=ta(Xu(n)),{options:i}=hi(Fc),s=Cn(()=>({[Yu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Yu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Kf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Rg=Ag;function Cg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Pg(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Nn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function qu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Yu=(n,e,t)=>n??e??t,Lg=Bn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=hi(El),s=Cn(()=>n.route||i.value),r=hi(Wu,0),o=Cn(()=>{let c=Bs(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=Cn(()=>s.value.matched[o.value]);Co(Wu,Cn(()=>o.value+1)),Co(Tg,a),Co(El,s);const l=tt();return Ft(()=>[l.value,a.value,n.name],([c,h,u],[f,p,_])=>{h&&(h.instances[u]=c,p&&p!==h&&c&&c===f&&(h.leaveGuards.size||(h.leaveGuards=p.leaveGuards),h.updateGuards.size||(h.updateGuards=p.updateGuards))),c&&h&&(!p||!qs(h,p)||!f)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,f=u&&u.components[h];if(!f)return $u(t.default,{Component:f,route:c});const p=u.props[h],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,d=Kf(f,dt({},_,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return $u(t.default,{Component:d,route:c})||d}}});function $u(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Ig=Lg;function Dg(n){const e=xg(n.routes,n),t=n.parseQuery||Eg,i=n.stringifyQuery||Vu,s=n.history,r=or(),o=or(),a=or(),l=Vp(xi);let c=xi;Is&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ra.bind(null,N=>""+N),u=Ra.bind(null,q0),f=Ra.bind(null,Dr);function p(N,le){let se,ue;return ad(N)?(se=e.getRecordMatcher(N),ue=le):ue=N,e.addRoute(ue,se)}function _(N){const le=e.getRecordMatcher(N);le&&e.removeRoute(le)}function x(){return e.getRoutes().map(N=>N.record)}function d(N){return!!e.getRecordMatcher(N)}function m(N,le){if(le=dt({},le||l.value),typeof N=="string"){const T=Ca(t,N,le.path),L=e.resolve({path:T.path},le),U=s.createHref(T.fullPath);return dt(T,L,{params:f(L.params),hash:Dr(T.hash),redirectedFrom:void 0,href:U})}let se;if(N.path!=null)se=dt({},N,{path:Ca(t,N.path,le.path).path});else{const T=dt({},N.params);for(const L in T)T[L]==null&&delete T[L];se=dt({},N,{params:u(T)}),le.params=u(le.params)}const ue=e.resolve(se,le),we=N.hash||"";ue.params=h(f(ue.params));const ee=j0(i,dt({},N,{hash:V0(we),path:ue.path})),g=s.createHref(ee);return dt({fullPath:ee,hash:we,query:i===Vu?bg(N.query):N.query||{}},ue,{redirectedFrom:void 0,href:g})}function b(N){return typeof N=="string"?Ca(t,N,l.value.path):dt({},N)}function M(N,le){if(c!==N)return Ys(8,{from:le,to:N})}function w(N){return R(N)}function O(N){return w(dt(b(N),{replace:!0}))}function P(N){const le=N.matched[N.matched.length-1];if(le&&le.redirect){const{redirect:se}=le;let ue=typeof se=="function"?se(N):se;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=b(ue):{path:ue},ue.params={}),dt({query:N.query,hash:N.hash,params:ue.path!=null?{}:N.params},ue)}}function R(N,le){const se=c=m(N),ue=l.value,we=N.state,ee=N.force,g=N.replace===!0,T=P(se);if(T)return R(dt(b(T),{state:typeof T=="object"?dt({},we,T.state):we,force:ee,replace:g}),le||se);const L=se;L.redirectedFrom=le;let U;return!ee&&K0(i,ue,se)&&(U=Ys(16,{to:L,from:ue}),_e(ue,ue,!0,!1)),(U?Promise.resolve(U):y(L,ue)).catch(I=>Jn(I)?Jn(I,2)?I:ve(I):W(I,L,ue)).then(I=>{if(I){if(Jn(I,2))return R(dt({replace:g},b(I.to),{state:typeof I.to=="object"?dt({},we,I.to.state):we,force:ee}),le||L)}else I=q(L,ue,!0,g,we);return E(L,ue,I),I})}function F(N,le){const se=M(N,le);return se?Promise.reject(se):Promise.resolve()}function te(N){const le=ie.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(N):N()}function y(N,le){let se;const[ue,we,ee]=Ug(N,le);se=Pa(ue.reverse(),"beforeRouteLeave",N,le);for(const T of ue)T.leaveGuards.forEach(L=>{se.push(Pi(L,N,le))});const g=F.bind(null,N,le);return se.push(g),Se(se).then(()=>{se=[];for(const T of r.list())se.push(Pi(T,N,le));return se.push(g),Se(se)}).then(()=>{se=Pa(we,"beforeRouteUpdate",N,le);for(const T of we)T.updateGuards.forEach(L=>{se.push(Pi(L,N,le))});return se.push(g),Se(se)}).then(()=>{se=[];for(const T of ee)if(T.beforeEnter)if(Nn(T.beforeEnter))for(const L of T.beforeEnter)se.push(Pi(L,N,le));else se.push(Pi(T.beforeEnter,N,le));return se.push(g),Se(se)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),se=Pa(ee,"beforeRouteEnter",N,le,te),se.push(g),Se(se))).then(()=>{se=[];for(const T of o.list())se.push(Pi(T,N,le));return se.push(g),Se(se)}).catch(T=>Jn(T,8)?T:Promise.reject(T))}function E(N,le,se){a.list().forEach(ue=>te(()=>ue(N,le,se)))}function q(N,le,se,ue,we){const ee=M(N,le);if(ee)return ee;const g=le===xi,T=Is?history.state:{};se&&(ue||g?s.replace(N.fullPath,dt({scroll:g&&T&&T.scroll},we)):s.push(N.fullPath,we)),l.value=N,_e(N,le,se,g),ve()}let k;function Z(){k||(k=s.listen((N,le,se)=>{if(!he.listening)return;const ue=m(N),we=P(ue);if(we){R(dt(we,{replace:!0}),ue).catch(Mr);return}c=ue;const ee=l.value;Is&&sg(Uu(ee.fullPath,se.delta),la()),y(ue,ee).catch(g=>Jn(g,12)?g:Jn(g,2)?(R(g.to,ue).then(T=>{Jn(T,20)&&!se.delta&&se.type===Ur.pop&&s.go(-1,!1)}).catch(Mr),Promise.reject()):(se.delta&&s.go(-se.delta,!1),W(g,ue,ee))).then(g=>{g=g||q(ue,ee,!1),g&&(se.delta&&!Jn(g,8)?s.go(-se.delta,!1):se.type===Ur.pop&&Jn(g,20)&&s.go(-1,!1)),E(ue,ee,g)}).catch(Mr)}))}let re=or(),H=or(),J;function W(N,le,se){ve(N);const ue=H.list();return ue.length?ue.forEach(we=>we(N,le,se)):console.error(N),Promise.reject(N)}function pe(){return J&&l.value!==xi?Promise.resolve():new Promise((N,le)=>{re.add([N,le])})}function ve(N){return J||(J=!N,Z(),re.list().forEach(([le,se])=>N?se(N):le()),re.reset()),N}function _e(N,le,se,ue){const{scrollBehavior:we}=n;if(!Is||!we)return Promise.resolve();const ee=!se&&rg(Uu(N.fullPath,0))||(ue||!se)&&history.state&&history.state.scroll||null;return Sf().then(()=>we(N,le,ee)).then(g=>g&&ig(g)).catch(g=>W(g,N,le))}const Te=N=>s.go(N);let Oe;const ie=new Set,he={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:d,getRoutes:x,resolve:m,options:n,push:w,replace:O,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:pe,install(N){const le=this;N.component("RouterLink",Rg),N.component("RouterView",Ig),N.config.globalProperties.$router=le,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Bs(l)}),Is&&!Oe&&l.value===xi&&(Oe=!0,w(s.location).catch(we=>{}));const se={};for(const we in xi)Object.defineProperty(se,we,{get:()=>l.value[we],enumerable:!0});N.provide(Fc,le),N.provide(hd,_f(se)),N.provide(El,l);const ue=N.unmount;ie.add(N),N.unmount=function(){ie.delete(N),ie.size<1&&(c=xi,k&&k(),k=null,l.value=xi,Oe=!1,J=!1),ue()}}};function Se(N){return N.reduce((le,se)=>le.then(()=>te(se)),Promise.resolve())}return he}function Ug(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>qs(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>qs(c,l))||s.push(l))}return[t,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="169",Ng=0,ju=1,Fg=2,fd=1,Og=2,ri=3,Ni=0,an=1,ot=2,Ii=0,Hs=1,Ku=2,Zu=3,Ju=4,Bg=5,is=100,zg=101,Gg=102,Hg=103,kg=104,Vg=200,Wg=201,Xg=202,qg=203,bl=204,Tl=205,Yg=206,$g=207,jg=208,Kg=209,Zg=210,Jg=211,Qg=212,e_=213,t_=214,Al=0,Rl=1,Cl=2,$s=3,Pl=4,Ll=5,Il=6,Dl=7,dd=0,n_=1,i_=2,Di=0,s_=1,r_=2,o_=3,a_=4,l_=5,c_=6,u_=7,pd=300,js=301,Ks=302,Nr=303,Ul=304,ca=306,Ct=1e3,rs=1001,Nl=1002,yn=1003,h_=1004,so=1005,Pn=1006,La=1007,os=1008,fi=1009,md=1010,gd=1011,Fr=1012,Bc=1013,cs=1014,li=1015,Wr=1016,zc=1017,Gc=1018,Zs=1020,_d=35902,vd=1021,xd=1022,In=1023,yd=1024,Md=1025,ks=1026,Js=1027,Sd=1028,Hc=1029,wd=1030,kc=1031,Vc=1033,Io=33776,Do=33777,Uo=33778,No=33779,Fl=35840,Ol=35841,Bl=35842,zl=35843,Gl=36196,Hl=37492,kl=37496,Vl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,$l=37813,jl=37814,Kl=37815,Zl=37816,Jl=37817,Ql=37818,ec=37819,tc=37820,nc=37821,Fo=36492,ic=36494,sc=36495,Ed=36283,rc=36284,oc=36285,ac=36286,f_=3200,d_=3201,bd=0,p_=1,Li="",Hn="srgb",Bi="srgb-linear",Wc="display-p3",ua="display-p3-linear",Xo="linear",yt="srgb",qo="rec709",Yo="p3",_s=7680,Qu=519,m_=512,g_=513,__=514,Td=515,v_=516,x_=517,y_=518,M_=519,eh=35044,th="300 es",ci=2e3,$o=2001;class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const wr=Math.PI/180,Or=180/Math.PI;function ds(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function Xc(n,e){return(n%e+e)%e}function S_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function w_(n,e,t){return n!==e?(t-n)/(e-n):0}function Er(n,e,t){return(1-t)*n+t*e}function E_(n,e,t,i){return Er(n,e,1-Math.exp(-t*i))}function b_(n,e=1){return e-Math.abs(Xc(n,e*2)-e)}function T_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function A_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function R_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function C_(n,e){return n+Math.random()*(e-n)}function P_(n){return n*(.5-Math.random())}function L_(n){n!==void 0&&(nh=n);let e=nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I_(n){return n*wr}function D_(n){return n*Or}function U_(n){return(n&n-1)===0&&n!==0}function N_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function F_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function O_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ds(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const it={DEG2RAD:wr,RAD2DEG:Or,generateUUID:ds,clamp:Ht,euclideanModulo:Xc,mapLinear:S_,inverseLerp:w_,lerp:Er,damp:E_,pingpong:b_,smoothstep:T_,smootherstep:A_,randInt:R_,randFloat:C_,randFloatSpread:P_,seededRandom:L_,degToRad:I_,radToDeg:D_,isPowerOfTwo:U_,ceilPowerOfTwo:N_,floorPowerOfTwo:F_,setQuaternionFromProperEuler:O_,normalize:en,denormalize:Ds};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,s,r,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],_=i[8],x=s[0],d=s[3],m=s[6],b=s[1],M=s[4],w=s[7],O=s[2],P=s[5],R=s[8];return r[0]=o*x+a*b+l*O,r[3]=o*d+a*M+l*P,r[6]=o*m+a*w+l*R,r[1]=c*x+h*b+u*O,r[4]=c*d+h*M+u*P,r[7]=c*m+h*w+u*R,r[2]=f*x+p*b+_*O,r[5]=f*d+p*M+_*P,r[8]=f*m+p*w+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,_=t*u+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new et;function Ad(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B_(){const n=Br("canvas");return n.style.display="block",n}const ih={};function Oo(n){n in ih||(ih[n]=!0,console.warn(n))}function z_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function G_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function H_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sh=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rh=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ar={[Bi]:{transfer:Xo,primaries:qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Hn]:{transfer:yt,primaries:qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ua]:{transfer:Xo,primaries:Yo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(rh),fromReference:n=>n.applyMatrix3(sh)},[Wc]:{transfer:yt,primaries:Yo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(rh),fromReference:n=>n.applyMatrix3(sh).convertLinearToSRGB()}},k_=new Set([Bi,ua]),ut={enabled:!0,_workingColorSpace:Bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!k_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ar[e].toReference,s=ar[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ar[n].primaries},getTransfer:function(n){return n===Li?Xo:ar[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ar[e].luminanceCoefficients)}};function Vs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Da(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vs;class V_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=Br("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vs(t[i]/255)*255):t[i]=Vs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W_=0;class Rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ua(s[o].image)):r.push(Ua(s[o]))}else r=Ua(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?V_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X_=0;class on extends tr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=rs,s=rs,r=Pn,o=os,a=In,l=fi,c=on.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ds(),this.name="",this.source=new Rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ct:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ct:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=pd;on.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],x=l[2],d=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(p+1)/2,O=(m+1)/2,P=(h+f)/4,R=(u+x)/4,F=(_+d)/4;return M>w&&M>O?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=R/i):w>O?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=F/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=R/r,s=F/r),this.set(i,s,r,t),this}let b=Math.sqrt((d-_)*(d-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(d-_)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q_ extends tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends q_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cd extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y_ extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==f||c!==p||h!==_){let d=1-a;const m=l*f+c*p+h*_+u*x,b=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const O=Math.sqrt(M),P=Math.atan2(O,m*b);d=Math.sin(d*P)/O,a=Math.sin(a*P)/O}const w=a*b;if(l=l*d+f*w,c=c*d+p*w,h=h*d+_*w,u=u*d+x*w,d===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*p-c*f,e[t+1]=l*_+h*f+c*u-a*p,e[t+2]=c*_+h*p+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new X,oh=new Xr;class qr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),oo.subVectors(this.max,lr),xs.subVectors(e.a,lr),ys.subVectors(e.b,lr),Ms.subVectors(e.c,lr),yi.subVectors(ys,xs),Mi.subVectors(Ms,ys),$i.subVectors(xs,Ms);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-$i.z,$i.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,$i.z,0,-$i.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-$i.y,$i.x,0];return!Fa(t,xs,ys,Ms,oo)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,xs,ys,Ms,oo))?!1:(ao.crossVectors(yi,Mi),t=[ao.x,ao.y,ao.z],Fa(t,xs,ys,Ms,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new X,new X,new X,new X,new X,new X,new X,new X],Tn=new X,ro=new qr,xs=new X,ys=new X,Ms=new X,yi=new X,Mi=new X,$i=new X,lr=new X,oo=new X,ao=new X,ji=new X;function Fa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $_=new qr,cr=new X,Oa=new X;class qc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Oa)),this.expandByPoint(cr.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new X,Ba=new X,lo=new X,Si=new X,za=new X,co=new X,Ga=new X;class j_{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ba.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot(lo),a=Si.dot(this.direction),l=-Si.dot(lo),c=Si.lengthSq(),h=Math.abs(1-o*o);let u,f,p,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ba).addScaledVector(lo,f),p}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,s,r){za.subVectors(t,e),co.subVectors(i,e),Ga.crossVectors(za,co);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(co.crossVectors(Si,co));if(l<0)return null;const c=a*this.direction.dot(za.cross(Si));if(c<0||l+c>o)return null;const h=-a*Si.dot(Ga);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,i,s,r,o,a,l,c,h,u,f,p,_,x,d){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,p,_,x,d)}set(e,t,i,s,r,o,a,l,c,h,u,f,p,_,x,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=_,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,_=c*h,x=c*u;t[0]=f+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,_=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=_*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+_,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K_,e,Z_)}lookAt(e,t,i){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),wi.crossVectors(i,un),wi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),wi.crossVectors(i,un)),wi.normalize(),uo.crossVectors(un,wi),s[0]=wi.x,s[4]=uo.x,s[8]=un.x,s[1]=wi.y,s[5]=uo.y,s[9]=un.y,s[2]=wi.z,s[6]=uo.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],_=i[2],x=i[6],d=i[10],m=i[14],b=i[3],M=i[7],w=i[11],O=i[15],P=s[0],R=s[4],F=s[8],te=s[12],y=s[1],E=s[5],q=s[9],k=s[13],Z=s[2],re=s[6],H=s[10],J=s[14],W=s[3],pe=s[7],ve=s[11],_e=s[15];return r[0]=o*P+a*y+l*Z+c*W,r[4]=o*R+a*E+l*re+c*pe,r[8]=o*F+a*q+l*H+c*ve,r[12]=o*te+a*k+l*J+c*_e,r[1]=h*P+u*y+f*Z+p*W,r[5]=h*R+u*E+f*re+p*pe,r[9]=h*F+u*q+f*H+p*ve,r[13]=h*te+u*k+f*J+p*_e,r[2]=_*P+x*y+d*Z+m*W,r[6]=_*R+x*E+d*re+m*pe,r[10]=_*F+x*q+d*H+m*ve,r[14]=_*te+x*k+d*J+m*_e,r[3]=b*P+M*y+w*Z+O*W,r[7]=b*R+M*E+w*re+O*pe,r[11]=b*F+M*q+w*H+O*ve,r[15]=b*te+M*k+w*J+O*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],_=e[3],x=e[7],d=e[11],m=e[15];return _*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+d*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],_=e[12],x=e[13],d=e[14],m=e[15],b=u*d*c-x*f*c+x*l*p-a*d*p-u*l*m+a*f*m,M=_*f*c-h*d*c-_*l*p+o*d*p+h*l*m-o*f*m,w=h*x*c-_*u*c+_*a*p-o*x*p-h*a*m+o*u*m,O=_*u*l-h*x*l-_*a*f+o*x*f+h*a*d-o*u*d,P=t*b+i*M+s*w+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=b*R,e[1]=(x*f*r-u*d*r-x*s*p+i*d*p+u*s*m-i*f*m)*R,e[2]=(a*d*r-x*l*r+x*s*c-i*d*c-a*s*m+i*l*m)*R,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*R,e[4]=M*R,e[5]=(h*d*r-_*f*r+_*s*p-t*d*p-h*s*m+t*f*m)*R,e[6]=(_*l*r-o*d*r-_*s*c+t*d*c+o*s*m-t*l*m)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=w*R,e[9]=(_*u*r-h*x*r-_*i*p+t*x*p+h*i*m-t*u*m)*R,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*R,e[12]=O*R,e[13]=(h*x*s-_*u*s+_*i*f-t*x*f-h*i*d+t*u*d)*R,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*d-t*a*d)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,_=r*u,x=o*h,d=o*u,m=a*u,b=l*c,M=l*h,w=l*u,O=i.x,P=i.y,R=i.z;return s[0]=(1-(x+m))*O,s[1]=(p+w)*O,s[2]=(_-M)*O,s[3]=0,s[4]=(p-w)*P,s[5]=(1-(f+m))*P,s[6]=(d+b)*P,s[7]=0,s[8]=(_+M)*R,s[9]=(d-b)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const c=1/r,h=1/o,u=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ci){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(a===ci)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$o)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ci){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,p=(i+s)*h;let _,x;if(a===ci)_=(o+r)*u,x=-2*u;else if(a===$o)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ss=new X,An=new St,K_=new X(0,0,0),Z_=new X(1,1,1),wi=new X,uo=new X,un=new X,ah=new St,lh=new Xr;class Yn{constructor(e=0,t=0,i=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J_=0;const ch=new X,ws=new Xr,ti=new St,ho=new X,ur=new X,Q_=new X,ev=new Xr,uh=new X(1,0,0),hh=new X(0,1,0),fh=new X(0,0,1),dh={type:"added"},tv={type:"removed"},Es={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Zt extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new X,t=new Yn,i=new Xr,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new et}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ho.copy(e):ho.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(ur,ho,this.up):ti.lookAt(ho,ur,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ti),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tv),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,ev,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Zt.DEFAULT_UP=new X(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new X,ni=new X,ka=new X,ii=new X,bs=new X,Ts=new X,ph=new X,Va=new X,Wa=new X,Xa=new X,qa=new pt,Ya=new pt,$a=new pt;class Ln{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Rn.subVectors(e,t),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Rn.subVectors(s,t),ni.subVectors(i,t),ka.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(ni),l=Rn.dot(ka),c=ni.dot(ni),h=ni.dot(ka),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return qa.setScalar(0),Ya.setScalar(0),$a.setScalar(0),qa.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,i),$a.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qa,r.x),o.addScaledVector(Ya,r.y),o.addScaledVector($a,r.z),o}static isFrontFacing(e,t,i,s){return Rn.subVectors(i,t),ni.subVectors(e,t),Rn.cross(ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Rn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;bs.subVectors(s,i),Ts.subVectors(r,i),Va.subVectors(e,i);const l=bs.dot(Va),c=Ts.dot(Va);if(l<=0&&c<=0)return t.copy(i);Wa.subVectors(e,s);const h=bs.dot(Wa),u=Ts.dot(Wa);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(bs,o);Xa.subVectors(e,r);const p=bs.dot(Xa),_=Ts.dot(Xa);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ts,a);const d=h*_-p*u;if(d<=0&&u-h>=0&&p-_>=0)return ph.subVectors(r,s),a=(u-h)/(u-h+(p-_)),t.copy(s).addScaledVector(ph,a);const m=1/(d+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(bs,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},fo={h:0,s:0,l:0};function ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=Xc(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ja(o,r,e+1/3),this.g=ja(o,r,e),this.b=ja(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=Hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const i=Ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return ut.fromWorkingColorSpace($t.copy(this),e),Math.round(Ht($t.r*255,0,255))*65536+Math.round(Ht($t.g*255,0,255))*256+Math.round(Ht($t.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Hn){ut.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(fo);const i=Er(Ei.h,fo.h,t),s=Er(Ei.s,fo.s,t),r=Er(Ei.l,fo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new st;st.NAMES=Ld;let nv=0;class Yr extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=Hs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Tl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==Tl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fn extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new X,po=new Ue;class Xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eh,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}}class Id extends Xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dd extends Xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends Xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let iv=0;const xn=new St,Ka=new Zt,As=new X,hn=new qr,hr=new qr,Gt=new X;class En extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Dd:Id)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(hn.min,hr.min),hn.expandByPoint(Gt),Gt.addVectors(hn.max,hr.max),hn.expandByPoint(Gt)):(hn.expandByPoint(hr.min),hn.expandByPoint(hr.max))}hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Gt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Gt.add(As)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new X,l[F]=new X;const c=new X,h=new X,u=new X,f=new Ue,p=new Ue,_=new Ue,x=new X,d=new X;function m(F,te,y){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,te),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,te),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),_.sub(f);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(E),d.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(E),a[F].add(x),a[te].add(x),a[y].add(x),l[F].add(d),l[te].add(d),l[y].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,te=b.length;F<te;++F){const y=b[F],E=y.start,q=y.count;for(let k=E,Z=E+q;k<Z;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new X,w=new X,O=new X,P=new X;function R(F){O.fromBufferAttribute(s,F),P.copy(O);const te=a[F];M.copy(te),M.sub(O.multiplyScalar(O.dot(te))).normalize(),w.crossVectors(P,te);const E=w.dot(l[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,E)}for(let F=0,te=b.length;F<te;++F){const y=b[F],E=y.start,q=y.count;for(let k=E,Z=E+q;k<Z;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,h=new X,u=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let x=0,d=l.length;x<d;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let m=0;m<h;m++)f[_++]=c[p++]}return new Xn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new St,Ki=new j_,mo=new qc,gh=new X,go=new X,_o=new X,vo=new X,Za=new X,xo=new X,_h=new X,yo=new X;class D extends Zt{constructor(e=new En,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Za.fromBufferAttribute(u,e),o?xo.addScaledVector(Za,h):xo.addScaledVector(Za.sub(t),h))}t.add(xo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(mo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(mo,gh)===null||Ki.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(mh),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],m=o[d.materialIndex],b=Math.max(d.start,p.start),M=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let w=b,O=M;w<O;w+=3){const P=a.getX(w),R=a.getX(w+1),F=a.getX(w+2);s=Mo(this,m,e,i,c,h,u,P,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let d=_,m=x;d<m;d+=3){const b=a.getX(d),M=a.getX(d+1),w=a.getX(d+2);s=Mo(this,o,e,i,c,h,u,b,M,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],m=o[d.materialIndex],b=Math.max(d.start,p.start),M=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let w=b,O=M;w<O;w+=3){const P=w,R=w+1,F=w+2;s=Mo(this,m,e,i,c,h,u,P,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let d=_,m=x;d<m;d+=3){const b=d,M=d+1,w=d+2;s=Mo(this,o,e,i,c,h,u,b,M,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function sv(n,e,t,i,s,r,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ni,a),l===null)return null;yo.copy(a),yo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(yo);return c<t.near||c>t.far?null:{distance:c,point:yo.clone(),object:n}}function Mo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,go),n.getVertexPosition(l,_o),n.getVertexPosition(c,vo);const h=sv(n,e,t,i,go,_o,vo,_h);if(h){const u=new X;Ln.getBarycoord(_h,go,_o,vo,u),s&&(h.uv=Ln.getInterpolatedAttribute(s,a,l,c,u,new Ue)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,a,l,c,u,new Ue)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,l,c,u,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};Ln.getNormal(go,_o,vo,f.normal),h.face=f,h.barycoord=u}return h}class ps extends En{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(u,2));function _(x,d,m,b,M,w,O,P,R,F,te){const y=w/R,E=O/F,q=w/2,k=O/2,Z=P/2,re=R+1,H=F+1;let J=0,W=0;const pe=new X;for(let ve=0;ve<H;ve++){const _e=ve*E-k;for(let Te=0;Te<re;Te++){const Oe=Te*y-q;pe[x]=Oe*b,pe[d]=_e*M,pe[m]=Z,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[d]=0,pe[m]=P>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Te/R),u.push(1-ve/F),J+=1}}for(let ve=0;ve<F;ve++)for(let _e=0;_e<R;_e++){const Te=f+_e+re*ve,Oe=f+_e+re*(ve+1),ie=f+(_e+1)+re*(ve+1),he=f+(_e+1)+re*ve;l.push(Te,Oe,he),l.push(Oe,ie,he),W+=6}a.addGroup(p,W,te),p+=W,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const s in i)e[s]=i[s]}return e}function rv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const ov={clone:Qs,merge:tn};var av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nd extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new X,vh=new Ue,xh=new Ue;class Ut extends Nd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,vh,xh),t.subVectors(xh,vh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rs=-90,Cs=1;class cv extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const r=new Ut(Rs,Cs,e,t);r.layers=this.layers,this.add(r);const o=new Ut(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const a=new Ut(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const l=new Ut(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new Ut(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Fd extends on{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uv extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ps(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Ii});r.uniforms.tEquirect.value=t;const o=new D(s,r),a=t.minFilter;return t.minFilter===os&&(t.minFilter=Pn),new cv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ja=new X,hv=new X,fv=new et;class ts{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ja.subVectors(i,t).cross(hv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fv.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new qc,So=new X;class Yc{constructor(e=new ts,t=new ts,i=new ts,s=new ts,r=new ts,o=new ts){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],_=s[9],x=s[10],d=s[11],m=s[12],b=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,d-p,w-m).normalize(),i[1].setComponents(l+r,f+c,d+p,w+m).normalize(),i[2].setComponents(l+o,f+h,d+_,w+b).normalize(),i[3].setComponents(l-o,f-h,d-_,w-b).normalize(),i[4].setComponents(l-a,f-u,d-x,w-M).normalize(),t===ci)i[5].setComponents(l+a,f+u,d+x,w+M).normalize();else if(t===$o)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(So.x=s.normal.x>0?e.max.x:e.min.x,So.y=s.normal.y>0?e.max.y:e.min.y,So.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dv(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){const _=u[f],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ha extends En{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],_=[],x=[],d=[];for(let m=0;m<h;m++){const b=m*f-o;for(let M=0;M<c;M++){const w=M*u-r;_.push(w,-b,0),x.push(0,0,1),d.push(M/a),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const M=b+c*m,w=b+c*(m+1),O=b+1+c*(m+1),P=b+1+c*m;p.push(M,w,P),p.push(w,O,P)}this.setIndex(p),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mv=`#ifdef USE_ALPHAHASH
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
#endif`,gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_v=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yv=`#ifdef USE_AOMAP
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
#endif`,Mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sv=`#ifdef USE_BATCHING
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
#endif`,wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ev=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Av=`#ifdef USE_IRIDESCENCE
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
#endif`,Rv=`#ifdef USE_BUMPMAP
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
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ov=`#define PI 3.141592653589793
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
} // validated`,Bv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zv=`vec3 transformedNormal = objectNormal;
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
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xv=`
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
}`,qv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
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
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
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
#endif`,fx=`struct PhysicalMaterial {
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
}`,dx=`
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wx=`#if defined( USE_POINTS_UV )
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
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
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
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jx=`float getShadowMask() {
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
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,py=`uniform sampler2D t2D;
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`#include <common>
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
}`,yy=`#if DEPTH_PACKING == 3200
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
}`,My=`#define DISTANCE
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
}`,Sy=`#define DISTANCE
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
}`,wy=`varying vec3 vWorldDirection;
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
}`,by=`uniform float scale;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,Ay=`#include <common>
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define LAMBERT
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
}`,Ly=`#define MATCAP
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
}`,Iy=`#define MATCAP
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
}`,Dy=`#define NORMAL
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
}`,Uy=`#define NORMAL
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
}`,Ny=`#define PHONG
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
}`,Fy=`#define PHONG
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
}`,Oy=`#define STANDARD
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
}`,By=`#define STANDARD
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
}`,zy=`#define TOON
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
}`,Gy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Vy=`#include <common>
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
}`,Wy=`uniform vec3 color;
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
}`,Xy=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:pv,alphahash_pars_fragment:mv,alphamap_fragment:gv,alphamap_pars_fragment:_v,alphatest_fragment:vv,alphatest_pars_fragment:xv,aomap_fragment:yv,aomap_pars_fragment:Mv,batching_pars_vertex:Sv,batching_vertex:wv,begin_vertex:Ev,beginnormal_vertex:bv,bsdfs:Tv,iridescence_fragment:Av,bumpmap_pars_fragment:Rv,clipping_planes_fragment:Cv,clipping_planes_pars_fragment:Pv,clipping_planes_pars_vertex:Lv,clipping_planes_vertex:Iv,color_fragment:Dv,color_pars_fragment:Uv,color_pars_vertex:Nv,color_vertex:Fv,common:Ov,cube_uv_reflection_fragment:Bv,defaultnormal_vertex:zv,displacementmap_pars_vertex:Gv,displacementmap_vertex:Hv,emissivemap_fragment:kv,emissivemap_pars_fragment:Vv,colorspace_fragment:Wv,colorspace_pars_fragment:Xv,envmap_fragment:qv,envmap_common_pars_fragment:Yv,envmap_pars_fragment:$v,envmap_pars_vertex:jv,envmap_physical_pars_fragment:ox,envmap_vertex:Kv,fog_vertex:Zv,fog_pars_vertex:Jv,fog_fragment:Qv,fog_pars_fragment:ex,gradientmap_pars_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:ux,lights_physical_fragment:hx,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:xx,map_fragment:yx,map_pars_fragment:Mx,map_particle_fragment:Sx,map_particle_pars_fragment:wx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:bx,morphinstance_vertex:Tx,morphcolor_vertex:Ax,morphnormal_vertex:Rx,morphtarget_pars_vertex:Cx,morphtarget_vertex:Px,normal_fragment_begin:Lx,normal_fragment_maps:Ix,normal_pars_fragment:Dx,normal_pars_vertex:Ux,normal_vertex:Nx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Bx,clearcoat_pars_fragment:zx,iridescence_pars_fragment:Gx,opaque_fragment:Hx,packing:kx,premultiplied_alpha_fragment:Vx,project_vertex:Wx,dithering_fragment:Xx,dithering_pars_fragment:qx,roughnessmap_fragment:Yx,roughnessmap_pars_fragment:$x,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:Kx,shadowmap_vertex:Zx,shadowmask_pars_fragment:Jx,skinbase_vertex:Qx,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:sy,tonemapping_fragment:ry,tonemapping_pars_fragment:oy,transmission_fragment:ay,transmission_pars_fragment:ly,uv_pars_fragment:cy,uv_pars_vertex:uy,uv_vertex:hy,worldpos_vertex:fy,background_vert:dy,background_frag:py,backgroundCube_vert:my,backgroundCube_frag:gy,cube_vert:_y,cube_frag:vy,depth_vert:xy,depth_frag:yy,distanceRGBA_vert:My,distanceRGBA_frag:Sy,equirect_vert:wy,equirect_frag:Ey,linedashed_vert:by,linedashed_frag:Ty,meshbasic_vert:Ay,meshbasic_frag:Ry,meshlambert_vert:Cy,meshlambert_frag:Py,meshmatcap_vert:Ly,meshmatcap_frag:Iy,meshnormal_vert:Dy,meshnormal_frag:Uy,meshphong_vert:Ny,meshphong_frag:Fy,meshphysical_vert:Oy,meshphysical_frag:By,meshtoon_vert:zy,meshtoon_frag:Gy,points_vert:Hy,points_frag:ky,shadow_vert:Vy,shadow_frag:Wy,sprite_vert:Xy,sprite_frag:qy},Ie={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Vn={basic:{uniforms:tn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:tn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new st(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:tn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:tn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:tn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new st(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:tn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:tn([Ie.points,Ie.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:tn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:tn([Ie.common,Ie.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:tn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:tn([Ie.sprite,Ie.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:tn([Ie.common,Ie.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:tn([Ie.lights,Ie.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Vn.physical={uniforms:tn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const wo={r:0,b:0,g:0},Ji=new Yn,Yy=new St;function $y(n,e,t,i,s,r,o){const a=new st(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const w=_(b);w===null?m(a,l):w&&w.isColor&&(m(w,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(b,M){const w=_(M);w&&(w.isCubeTexture||w.mapping===ca)?(h===void 0&&(h=new D(new ps(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Qs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ji.copy(M.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(Ji)),h.material.toneMapped=ut.getTransfer(w.colorSpace)!==yt,(u!==w||f!==w.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new D(new ha(2,2),new $n({name:"BackgroundMaterial",uniforms:Qs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(w.colorSpace)!==yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,M){b.getRGB(wo,Ud(n)),i.buffers.color.setClear(wo.r,wo.g,wo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:d}}function jy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,E,q,k,Z){let re=!1;const H=u(k,q,E);r!==H&&(r=H,c(r.object)),re=p(y,k,q,Z),re&&_(y,k,q,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,w(y,E,q,k),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,q){const k=q.wireframe===!0;let Z=i[y.id];Z===void 0&&(Z={},i[y.id]=Z);let re=Z[E.id];re===void 0&&(re={},Z[E.id]=re);let H=re[k];return H===void 0&&(H=f(l()),re[k]=H),H}function f(y){const E=[],q=[],k=[];for(let Z=0;Z<t;Z++)E[Z]=0,q[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:q,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,E,q,k){const Z=r.attributes,re=E.attributes;let H=0;const J=q.getAttributes();for(const W in J)if(J[W].location>=0){const ve=Z[W];let _e=re[W];if(_e===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),ve===void 0||ve.attribute!==_e||_e&&ve.data!==_e.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function _(y,E,q,k){const Z={},re=E.attributes;let H=0;const J=q.getAttributes();for(const W in J)if(J[W].location>=0){let ve=re[W];ve===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));const _e={};_e.attribute=ve,ve&&ve.data&&(_e.data=ve.data),Z[W]=_e,H++}r.attributes=Z,r.attributesNum=H,r.index=k}function x(){const y=r.newAttributes;for(let E=0,q=y.length;E<q;E++)y[E]=0}function d(y){m(y,0)}function m(y,E){const q=r.newAttributes,k=r.enabledAttributes,Z=r.attributeDivisors;q[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),Z[y]!==E&&(n.vertexAttribDivisor(y,E),Z[y]=E)}function b(){const y=r.newAttributes,E=r.enabledAttributes;for(let q=0,k=E.length;q<k;q++)E[q]!==y[q]&&(n.disableVertexAttribArray(q),E[q]=0)}function M(y,E,q,k,Z,re,H){H===!0?n.vertexAttribIPointer(y,E,q,Z,re):n.vertexAttribPointer(y,E,q,k,Z,re)}function w(y,E,q,k){x();const Z=k.attributes,re=q.getAttributes(),H=E.defaultAttributeValues;for(const J in re){const W=re[J];if(W.location>=0){let pe=Z[J];if(pe===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),pe!==void 0){const ve=pe.normalized,_e=pe.itemSize,Te=e.get(pe);if(Te===void 0)continue;const Oe=Te.buffer,ie=Te.type,he=Te.bytesPerElement,Se=ie===n.INT||ie===n.UNSIGNED_INT||pe.gpuType===Bc;if(pe.isInterleavedBufferAttribute){const N=pe.data,le=N.stride,se=pe.offset;if(N.isInstancedInterleavedBuffer){for(let ue=0;ue<W.locationSize;ue++)m(W.location+ue,N.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ue=0;ue<W.locationSize;ue++)d(W.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ue=0;ue<W.locationSize;ue++)M(W.location+ue,_e/W.locationSize,ie,ve,le*he,(se+_e/W.locationSize*ue)*he,Se)}else{if(pe.isInstancedBufferAttribute){for(let N=0;N<W.locationSize;N++)m(W.location+N,pe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let N=0;N<W.locationSize;N++)d(W.location+N);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let N=0;N<W.locationSize;N++)M(W.location+N,_e/W.locationSize,ie,ve,_e*he,_e/W.locationSize*N*he,Se)}}else if(H!==void 0){const ve=H[J];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(W.location,ve);break;case 3:n.vertexAttrib3fv(W.location,ve);break;case 4:n.vertexAttrib4fv(W.location,ve);break;default:n.vertexAttrib1fv(W.location,ve)}}}}b()}function O(){F();for(const y in i){const E=i[y];for(const q in E){const k=E[q];for(const Z in k)h(k[Z].object),delete k[Z];delete E[q]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const q in E){const k=E[q];for(const Z in k)h(k[Z].object),delete k[Z];delete E[q]}delete i[y.id]}function R(y){for(const E in i){const q=i[E];if(q[y.id]===void 0)continue;const k=q[y.id];for(const Z in k)h(k[Z].object),delete k[Z];delete q[y.id]}}function F(){te(),o=!0,r!==s&&(r=s,c(r.object))}function te(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:te,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:d,disableUnusedAttributes:b}}function Ky(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<f.length;x++)t.update(_,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==In&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const F=R===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==li&&!F)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:O,maxSamples:P}}function Jy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ts,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{const b=r?0:i,M=b*4;let w=m.clippingState||null;l.value=w,w=h(_,f,M,p);for(let O=0;O!==M;++O)w[O]=t[O];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,_){const x=u!==null?u.length:0;let d=null;if(x!==0){if(d=l.value,_!==!0||d===null){const m=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<m)&&(d=new Float32Array(m));for(let M=0,w=p;M!==x;++M,w+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(d,w),d[w+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function Qy(n){let e=new WeakMap;function t(o,a){return a===Nr?o.mapping=js:a===Ul&&(o.mapping=Ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nr||a===Ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Bd extends Nd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ns=4,yh=[.125,.215,.35,.446,.526,.582],ss=20,Qa=new Bd,Mh=new st;let el=null,tl=0,nl=0,il=!1;const ns=(1+Math.sqrt(5))/2,Ps=1/ns,Sh=[new X(-ns,Ps,0),new X(ns,Ps,0),new X(-Ps,0,ns),new X(Ps,0,ns),new X(0,ns,-Ps),new X(0,ns,Ps),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),this._renderer.xr.enabled=il,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Wr,format:In,colorSpace:Bi,depthBuffer:!1},s=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eM(r)),this._blurMaterial=tM(r,e,t)}return s}_compileMaterial(e){const t=new D(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,i,s){const a=new Ut(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Mh),h.toneMapping=Di,h.autoClear=!1;const p=new Fn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new D(new ps,p);let x=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,x=!0):(p.color.copy(Mh),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;Eo(s,b*M,m>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===js||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new D(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Eo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sh[(s-r-1)%Sh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new D(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ss-1),x=r/_,d=isFinite(r)?1+Math.floor(h*x):ss;d>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ss}`);const m=[];let b=0;for(let R=0;R<ss;++R){const F=R/x,te=Math.exp(-F*F/2);m.push(te),R===0?b+=te:R<d&&(b+=2*te)}for(let R=0;R<m.length;R++)m[R]=m[R]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const w=this._sizeLods[s],O=3*w*(s>M-Ns?s-M+Ns:0),P=4*(this._cubeSize-w);Eo(t,O,P,3*w,2*w),l.setRenderTarget(t),l.render(u,Qa)}}function eM(n){const e=[],t=[],i=[];let s=n;const r=n-Ns+1+yh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ns?l=yh[o-n+Ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,x=3,d=2,m=1,b=new Float32Array(x*_*p),M=new Float32Array(d*_*p),w=new Float32Array(m*_*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,F=P>2?0:-1,te=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];b.set(te,x*_*P),M.set(f,d*_*P);const y=[P,P,P,P,P,P];w.set(y,m*_*P)}const O=new En;O.setAttribute("position",new Xn(b,x)),O.setAttribute("uv",new Xn(M,d)),O.setAttribute("faceIndex",new Xn(w,m)),e.push(O),s>Ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eh(n,e,t){const i=new us(n,e,t);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tM(n,e,t){const i=new Float32Array(ss),s=new X(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function bh(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Th(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function nM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nr||l===Ul,h=l===js||l===Ks;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wh(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new wh(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Oo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sM(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let d=0,m=x.length;d<m;d++)e.remove(x[d])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const x=p[_];for(let d=0,m=x.length;d<m;d++)e.update(x[d],n.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let M=0,w=b.length;M<w;M+=3){const O=b[M+0],P=b[M+1],R=b[M+2];f.push(O,P,P,R,R,O)}}else if(_!==void 0){const b=_.array;x=_.version;for(let M=0,w=b.length/3-1;M<w;M+=3){const O=M+0,P=M+1,R=M+2;f.push(O,P,P,R,R,O)}}else return;const d=new(Ad(f)?Dd:Id)(f,1);d.version=x;const m=r.get(u);m&&e.remove(m),r.set(u,d)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let d=0;for(let m=0;m<_;m++)d+=p[m];t.update(d,i,1)}function u(f,p,_,x){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],x[m]);else{d.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,_);let m=0;for(let b=0;b<_;b++)m+=p[b];for(let b=0;b<x.length;b++)t.update(m,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function oM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function aM(n,e,t){const i=new WeakMap,s=new pt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),d===!0&&(w=3);let O=a.attributes.position.count*w,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const R=new Float32Array(O*P*4*u),F=new Cd(R,O,P,u);F.type=li,F.needsUpdate=!0;const te=w*4;for(let E=0;E<u;E++){const q=m[E],k=b[E],Z=M[E],re=O*P*4*E;for(let H=0;H<q.count;H++){const J=H*te;_===!0&&(s.fromBufferAttribute(q,H),R[re+J+0]=s.x,R[re+J+1]=s.y,R[re+J+2]=s.z,R[re+J+3]=0),x===!0&&(s.fromBufferAttribute(k,H),R[re+J+4]=s.x,R[re+J+5]=s.y,R[re+J+6]=s.z,R[re+J+7]=0),d===!0&&(s.fromBufferAttribute(Z,H),R[re+J+8]=s.x,R[re+J+9]=s.y,R[re+J+10]=s.z,R[re+J+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:F,size:new Ue(O,P)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function lM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class zd extends on{constructor(e,t,i,s,r,o,a,l,c,h=ks){if(h!==ks&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ks&&(i=cs),i===void 0&&h===Js&&(i=Zs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gd=new on,Ah=new zd(1,1),Hd=new Cd,kd=new Y_,Vd=new Fd,Rh=[],Ch=[],Ph=new Float32Array(16),Lh=new Float32Array(9),Ih=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Rh[s];if(r===void 0&&(r=new Float32Array(s),Rh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fa(n,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function dM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Ih.set(i),n.uniformMatrix2fv(this.addr,!1,Ih),zt(t,i)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Lh.set(i),n.uniformMatrix3fv(this.addr,!1,Lh),zt(t,i)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Ph.set(i),n.uniformMatrix4fv(this.addr,!1,Ph),zt(t,i)}}function gM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function EM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ah.compareFunction=Td,r=Ah):r=Gd,t.setTexture2D(e||r,s)}function bM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||kd,s)}function TM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vd,s)}function AM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hd,s)}function RM(n){switch(n){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return MM;case 36295:return SM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function CM(n,e){n.uniform1fv(this.addr,e)}function PM(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function LM(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function IM(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function DM(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UM(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NM(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FM(n,e){n.uniform1iv(this.addr,e)}function OM(n,e){n.uniform2iv(this.addr,e)}function BM(n,e){n.uniform3iv(this.addr,e)}function zM(n,e){n.uniform4iv(this.addr,e)}function GM(n,e){n.uniform1uiv(this.addr,e)}function HM(n,e){n.uniform2uiv(this.addr,e)}function kM(n,e){n.uniform3uiv(this.addr,e)}function VM(n,e){n.uniform4uiv(this.addr,e)}function WM(n,e,t){const i=this.cache,s=e.length,r=fa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Gd,r[o])}function XM(n,e,t){const i=this.cache,s=e.length,r=fa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kd,r[o])}function qM(n,e,t){const i=this.cache,s=e.length,r=fa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vd,r[o])}function YM(n,e,t){const i=this.cache,s=e.length,r=fa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function $M(n){switch(n){case 5126:return CM;case 35664:return PM;case 35665:return LM;case 35666:return IM;case 35674:return DM;case 35675:return UM;case 35676:return NM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return GM;case 36294:return HM;case 36295:return kM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class jM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class KM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}}class ZM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Dh(n,e){n.seq.push(e),n.map[e.id]=e}function JM(n,e,t){const i=n.name,s=i.length;for(sl.lastIndex=0;;){const r=sl.exec(i),o=sl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dh(t,c===void 0?new jM(a,n,e):new KM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new ZM(a),Dh(t,u)),t=u}}}class Bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);JM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Uh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QM=37297;let eS=0;function tS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function nS(n){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(n);let i;switch(e===t?i="":e===Yo&&t===qo?i="LinearDisplayP3ToLinearSRGB":e===qo&&t===Yo&&(i="LinearSRGBToLinearDisplayP3"),n){case Bi:case ua:return[i,"LinearTransferOETF"];case Hn:case Wc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Nh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tS(n.getShaderSource(e),o)}else return s}function iS(n,e){const t=nS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sS(n,e){let t;switch(e){case s_:t="Linear";break;case r_:t="Reinhard";break;case o_:t="Cineon";break;case a_:t="ACESFilmic";break;case c_:t="AgX";break;case u_:t="Neutral";break;case l_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bo=new X;function rS(){ut.getLuminanceCoefficients(bo);const n=bo.x.toFixed(4),e=bo.y.toFixed(4),t=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function aS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function pr(n){return n!==""}function Fh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cS=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(cS,hS)}const uS=new Map;function hS(n,e){let t=Qe[e];if(t===void 0){const i=uS.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const fS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(n){return n.replace(fS,dS)}function dS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function mS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case Ks:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function _S(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dd:e="ENVMAP_BLENDING_MULTIPLY";break;case n_:e="ENVMAP_BLENDING_MIX";break;case i_:e="ENVMAP_BLENDING_ADD";break}return e}function vS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pS(t),c=mS(t),h=gS(t),u=_S(t),f=vS(t),p=oS(t),_=aS(r),x=s.createProgram();let d,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(pr).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(pr).join(`
`),m.length>0&&(m+=`
`)):(d=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),m=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Di?sS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,iS("linearToOutputTexel",t.outputColorSpace),rS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=lc(o),o=Fh(o,t),o=Oh(o,t),a=lc(a),a=Fh(a,t),a=Oh(a,t),o=Bh(o),a=Bh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=b+d+o,w=b+m+a,O=Uh(s,s.VERTEX_SHADER,M),P=Uh(s,s.FRAGMENT_SHADER,w);s.attachShader(x,O),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(E){if(n.debug.checkShaderErrors){const q=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(O).trim(),Z=s.getShaderInfoLog(P).trim();let re=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,P);else{const J=Nh(s,O,"vertex"),W=Nh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+q+`
`+J+`
`+W)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(k===""||Z==="")&&(H=!1);H&&(E.diagnostics={runnable:re,programLog:q,vertexShader:{log:k,prefix:d},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(O),s.deleteShader(P),F=new Bo(s,x),te=lS(s,x)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let te;this.getAttributes=function(){return te===void 0&&R(this),te};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,QM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=P,this}let yS=0;class MS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new SS(e),t.set(e,i)),i}}class SS{constructor(e){this.id=yS++,this.code=e,this.usedTimes=0}}function wS(n,e,t,i,s,r,o){const a=new Pd,l=new MS,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,q,k,Z){const re=k.fog,H=Z.geometry,J=y.isMeshStandardMaterial?k.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||J),pe=W&&W.mapping===ca?W.image.height:null,ve=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const _e=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Te=_e!==void 0?_e.length:0;let Oe=0;H.morphAttributes.position!==void 0&&(Oe=1),H.morphAttributes.normal!==void 0&&(Oe=2),H.morphAttributes.color!==void 0&&(Oe=3);let ie,he,Se,N;if(ve){const nt=Vn[ve];ie=nt.vertexShader,he=nt.fragmentShader}else ie=y.vertexShader,he=y.fragmentShader,l.update(y),Se=l.getVertexShaderID(y),N=l.getFragmentShaderID(y);const le=n.getRenderTarget(),se=Z.isInstancedMesh===!0,ue=Z.isBatchedMesh===!0,we=!!y.map,ee=!!y.matcap,g=!!W,T=!!y.aoMap,L=!!y.lightMap,U=!!y.bumpMap,I=!!y.normalMap,Y=!!y.displacementMap,j=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,V=y.clearcoat>0,z=y.dispersion>0,G=y.iridescence>0,de=y.sheen>0,ce=y.transmission>0,me=C&&!!y.anisotropyMap,Ee=V&&!!y.clearcoatMap,fe=V&&!!y.clearcoatNormalMap,xe=V&&!!y.clearcoatRoughnessMap,Re=G&&!!y.iridescenceMap,Ce=G&&!!y.iridescenceThicknessMap,be=de&&!!y.sheenColorMap,Be=de&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,ze=!!y.specularColorMap,B=!!y.specularIntensityMap,ye=ce&&!!y.transmissionMap,ne=ce&&!!y.thicknessMap,Q=!!y.gradientMap,Me=!!y.alphaMap,ge=y.alphaTest>0,Fe=!!y.alphaHash,ke=!!y.extensions;let qe=Di;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(qe=n.toneMapping);const Ve={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:he,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ue,batchingColor:ue&&Z._colorsTexture!==null,instancing:se,instancingColor:se&&Z.instanceColor!==null,instancingMorph:se&&Z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Bi,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:ee,envMap:g,envMapMode:g&&W.mapping,envMapCubeUVHeight:pe,aoMap:T,lightMap:L,bumpMap:U,normalMap:I,displacementMap:p&&Y,emissiveMap:j,normalMapObjectSpace:I&&y.normalMapType===p_,normalMapTangentSpace:I&&y.normalMapType===bd,metalnessMap:S,roughnessMap:v,anisotropy:C,anisotropyMap:me,clearcoat:V,clearcoatMap:Ee,clearcoatNormalMap:fe,clearcoatRoughnessMap:xe,dispersion:z,iridescence:G,iridescenceMap:Re,iridescenceThicknessMap:Ce,sheen:de,sheenColorMap:be,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:ze,specularIntensityMap:B,transmission:ce,transmissionMap:ye,thicknessMap:ne,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Hs&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:ge,alphaHash:Fe,combine:y.combine,mapUv:we&&d(y.map.channel),aoMapUv:T&&d(y.aoMap.channel),lightMapUv:L&&d(y.lightMap.channel),bumpMapUv:U&&d(y.bumpMap.channel),normalMapUv:I&&d(y.normalMap.channel),displacementMapUv:Y&&d(y.displacementMap.channel),emissiveMapUv:j&&d(y.emissiveMap.channel),metalnessMapUv:S&&d(y.metalnessMap.channel),roughnessMapUv:v&&d(y.roughnessMap.channel),anisotropyMapUv:me&&d(y.anisotropyMap.channel),clearcoatMapUv:Ee&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&d(y.sheenRoughnessMap.channel),specularMapUv:Pe&&d(y.specularMap.channel),specularColorMapUv:ze&&d(y.specularColorMap.channel),specularIntensityMapUv:B&&d(y.specularIntensityMap.channel),transmissionMapUv:ye&&d(y.transmissionMap.channel),thicknessMapUv:ne&&d(y.thicknessMap.channel),alphaMapUv:Me&&d(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(I||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!H.attributes.uv&&(we||Me),fog:!!re,useFog:y.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ot,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ke&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&y.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function b(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)E.push(q),E.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(M(E,y),w(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function M(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function w(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function O(y){const E=x[y.type];let q;if(E){const k=Vn[E];q=ov.clone(k.uniforms)}else q=y.uniforms;return q}function P(y,E){let q;for(let k=0,Z=h.length;k<Z;k++){const re=h[k];if(re.cacheKey===E){q=re,++q.usedTimes;break}}return q===void 0&&(q=new xS(n,E,y,r),h.push(q)),q}function R(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function F(y){l.remove(y)}function te(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:O,acquireProgram:P,releaseProgram:R,releaseShaderCache:F,programs:h,dispose:te}}function ES(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function bS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,p,_,x,d){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:d},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=x,m.group=d),e++,m}function a(u,f,p,_,x,d){const m=o(u,f,p,_,x,d);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,f,p,_,x,d){const m=o(u,f,p,_,x,d);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||bS),i.length>1&&i.sort(f||Gh),s.length>1&&s.sort(f||Gh)}function h(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function TS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Hh,n.set(i,[o])):s>=r.length?(o=new Hh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new st};break;case"SpotLight":t={position:new X,direction:new X,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function RS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CS=0;function PS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LS(n){const e=new AS,t=RS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new St,o=new St;function a(c){let h=0,u=0,f=0;for(let te=0;te<9;te++)i.probe[te].set(0,0,0);let p=0,_=0,x=0,d=0,m=0,b=0,M=0,w=0,O=0,P=0,R=0;c.sort(PS);for(let te=0,y=c.length;te<y;te++){const E=c[te],q=E.color,k=E.intensity,Z=E.distance,re=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=q.r*k,u+=q.g*k,f+=q.b*k;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],k);R++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const J=E.shadow,W=t.get(E);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=E.shadow.matrix,b++}i.directional[p]=H,p++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(q).multiplyScalar(k),H.distance=Z,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[x]=H;const J=E.shadow;if(E.map&&(i.spotLightMap[O]=E.map,O++,J.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[x]=J.matrix,E.castShadow){const W=t.get(E);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=re,w++}x++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(q).multiplyScalar(k),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[d]=H,d++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const J=E.shadow,W=t.get(E);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=E.shadow.matrix,M++}i.point[_]=H,_++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(k),H.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[m]=H,m++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==d||F.hemiLength!==m||F.numDirectionalShadows!==b||F.numPointShadows!==M||F.numSpotShadows!==w||F.numSpotMaps!==O||F.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=d,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,F.directionalLength=p,F.pointLength=_,F.spotLength=x,F.rectAreaLength=d,F.hemiLength=m,F.numDirectionalShadows=b,F.numPointShadows=M,F.numSpotShadows=w,F.numSpotMaps=O,F.numLightProbes=R,i.version=CS++)}function l(c,h){let u=0,f=0,p=0,_=0,x=0;const d=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const M=c[m];if(M.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),u++}else if(M.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),p++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),o.identity(),r.copy(M.matrixWorld),r.premultiply(d),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(d),x++}}}return{setup:a,setupView:l,state:i}}function kh(n){const e=new LS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function IS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new kh(n),e.set(s,[a])):r>=o.length?(a=new kh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class DS extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class US extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FS=`uniform sampler2D shadow_pass;
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
}`;function OS(n,e,t){let i=new Yc;const s=new Ue,r=new Ue,o=new pt,a=new DS({depthPacking:d_}),l=new US,c={},h=t.maxTextureSize,u={[Ni]:an,[an]:Ni,[ot]:ot},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:NS,fragmentShader:FS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new D(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd;let m=this.type;this.render=function(P,R,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;const te=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Ii),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const k=m!==ri&&this.type===ri,Z=m===ri&&this.type!==ri;for(let re=0,H=P.length;re<H;re++){const J=P[re],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const pe=W.getFrameExtents();if(s.multiply(pe),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,W.mapSize.y=r.y)),W.map===null||k===!0||Z===!0){const _e=this.type!==ri?{minFilter:yn,magFilter:yn}:{};W.map!==null&&W.map.dispose(),W.map=new us(s.x,s.y,_e),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ve=W.getViewportCount();for(let _e=0;_e<ve;_e++){const Te=W.getViewport(_e);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),q.viewport(o),W.updateMatrices(J,_e),i=W.getFrustum(),w(R,F,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===ri&&b(W,F),W.needsUpdate=!1}m=this.type,d.needsUpdate=!1,n.setRenderTarget(te,y,E)};function b(P,R){const F=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new us(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,F,f,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,F,p,x,null)}function M(P,R,F,te){let y=null;const E=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)y=E;else if(y=F.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=y.uuid,k=R.uuid;let Z=c[q];Z===void 0&&(Z={},c[q]=Z);let re=Z[k];re===void 0&&(re=y.clone(),Z[k]=re,R.addEventListener("dispose",O)),y=re}if(y.visible=R.visible,y.wireframe=R.wireframe,te===ri?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const q=n.properties.get(y);q.light=F}return y}function w(P,R,F,te,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===ri)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const k=e.update(P),Z=P.material;if(Array.isArray(Z)){const re=k.groups;for(let H=0,J=re.length;H<J;H++){const W=re[H],pe=Z[W.materialIndex];if(pe&&pe.visible){const ve=M(P,pe,te,y);P.onBeforeShadow(n,P,R,F,k,ve,W),n.renderBufferDirect(F,null,k,ve,P,W),P.onAfterShadow(n,P,R,F,k,ve,W)}}}else if(Z.visible){const re=M(P,Z,te,y);P.onBeforeShadow(n,P,R,F,k,re,null),n.renderBufferDirect(F,null,k,re,P,null),P.onAfterShadow(n,P,R,F,k,re,null)}}const q=P.children;for(let k=0,Z=q.length;k<Z;k++)w(q[k],R,F,te,y)}function O(P){P.target.removeEventListener("dispose",O);for(const F in c){const te=c[F],y=P.target.uuid;y in te&&(te[y].dispose(),delete te[y])}}}const BS={[Al]:Rl,[Cl]:Il,[Pl]:Dl,[$s]:Ll,[Rl]:Al,[Il]:Cl,[Dl]:Pl,[Ll]:$s};function zS(n){function e(){let B=!1;const ye=new pt;let ne=null;const Q=new pt(0,0,0,0);return{setMask:function(Me){ne!==Me&&!B&&(n.colorMask(Me,Me,Me,Me),ne=Me)},setLocked:function(Me){B=Me},setClear:function(Me,ge,Fe,ke,qe){qe===!0&&(Me*=ke,ge*=ke,Fe*=ke),ye.set(Me,ge,Fe,ke),Q.equals(ye)===!1&&(n.clearColor(Me,ge,Fe,ke),Q.copy(ye))},reset:function(){B=!1,ne=null,Q.set(-1,0,0,0)}}}function t(){let B=!1,ye=!1,ne=null,Q=null,Me=null;return{setReversed:function(ge){ye=ge},setTest:function(ge){ge?Se(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(ge){ne!==ge&&!B&&(n.depthMask(ge),ne=ge)},setFunc:function(ge){if(ye&&(ge=BS[ge]),Q!==ge){switch(ge){case Al:n.depthFunc(n.NEVER);break;case Rl:n.depthFunc(n.ALWAYS);break;case Cl:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case Pl:n.depthFunc(n.EQUAL);break;case Ll:n.depthFunc(n.GEQUAL);break;case Il:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ge}},setLocked:function(ge){B=ge},setClear:function(ge){Me!==ge&&(n.clearDepth(ge),Me=ge)},reset:function(){B=!1,ne=null,Q=null,Me=null}}}function i(){let B=!1,ye=null,ne=null,Q=null,Me=null,ge=null,Fe=null,ke=null,qe=null;return{setTest:function(Ve){B||(Ve?Se(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(Ve){ye!==Ve&&!B&&(n.stencilMask(Ve),ye=Ve)},setFunc:function(Ve,nt,rt){(ne!==Ve||Q!==nt||Me!==rt)&&(n.stencilFunc(Ve,nt,rt),ne=Ve,Q=nt,Me=rt)},setOp:function(Ve,nt,rt){(ge!==Ve||Fe!==nt||ke!==rt)&&(n.stencilOp(Ve,nt,rt),ge=Ve,Fe=nt,ke=rt)},setLocked:function(Ve){B=Ve},setClear:function(Ve){qe!==Ve&&(n.clearStencil(Ve),qe=Ve)},reset:function(){B=!1,ye=null,ne=null,Q=null,Me=null,ge=null,Fe=null,ke=null,qe=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],p=null,_=!1,x=null,d=null,m=null,b=null,M=null,w=null,O=null,P=new st(0,0,0),R=0,F=!1,te=null,y=null,E=null,q=null,k=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,H=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),re=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),re=H>=2);let W=null,pe={};const ve=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Te=new pt().fromArray(ve),Oe=new pt().fromArray(_e);function ie(B,ye,ne,Q){const Me=new Uint8Array(4),ge=n.createTexture();n.bindTexture(B,ge),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<ne;Fe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ye+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ge}const he={};he[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),r.setFunc($s),L(!1),U(ju),Se(n.CULL_FACE),g(Ii);function Se(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function N(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function le(B,ye){return h[B]!==ye?(n.bindFramebuffer(B,ye),h[B]=ye,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ye),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function se(B,ye){let ne=f,Q=!1;if(B){ne=u.get(ye),ne===void 0&&(ne=[],u.set(ye,ne));const Me=B.textures;if(ne.length!==Me.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Fe=Me.length;ge<Fe;ge++)ne[ge]=n.COLOR_ATTACHMENT0+ge;ne.length=Me.length,Q=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Q=!0);Q&&n.drawBuffers(ne)}function ue(B){return p!==B?(n.useProgram(B),p=B,!0):!1}const we={[is]:n.FUNC_ADD,[zg]:n.FUNC_SUBTRACT,[Gg]:n.FUNC_REVERSE_SUBTRACT};we[Hg]=n.MIN,we[kg]=n.MAX;const ee={[Vg]:n.ZERO,[Wg]:n.ONE,[Xg]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[Zg]:n.SRC_ALPHA_SATURATE,[jg]:n.DST_COLOR,[Yg]:n.DST_ALPHA,[qg]:n.ONE_MINUS_SRC_COLOR,[Tl]:n.ONE_MINUS_SRC_ALPHA,[Kg]:n.ONE_MINUS_DST_COLOR,[$g]:n.ONE_MINUS_DST_ALPHA,[Jg]:n.CONSTANT_COLOR,[Qg]:n.ONE_MINUS_CONSTANT_COLOR,[e_]:n.CONSTANT_ALPHA,[t_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,ye,ne,Q,Me,ge,Fe,ke,qe,Ve){if(B===Ii){_===!0&&(N(n.BLEND),_=!1);return}if(_===!1&&(Se(n.BLEND),_=!0),B!==Bg){if(B!==x||Ve!==F){if((d!==is||M!==is)&&(n.blendEquation(n.FUNC_ADD),d=is,M=is),Ve)switch(B){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.ONE,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ju:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,b=null,w=null,O=null,P.set(0,0,0),R=0,x=B,F=Ve}return}Me=Me||ye,ge=ge||ne,Fe=Fe||Q,(ye!==d||Me!==M)&&(n.blendEquationSeparate(we[ye],we[Me]),d=ye,M=Me),(ne!==m||Q!==b||ge!==w||Fe!==O)&&(n.blendFuncSeparate(ee[ne],ee[Q],ee[ge],ee[Fe]),m=ne,b=Q,w=ge,O=Fe),(ke.equals(P)===!1||qe!==R)&&(n.blendColor(ke.r,ke.g,ke.b,qe),P.copy(ke),R=qe),x=B,F=!1}function T(B,ye){B.side===ot?N(n.CULL_FACE):Se(n.CULL_FACE);let ne=B.side===an;ye&&(ne=!ne),L(ne),B.blending===Hs&&B.transparent===!1?g(Ii):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const Q=B.stencilWrite;o.setTest(Q),Q&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Y(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){te!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),te=B)}function U(B){B!==Ng?(Se(n.CULL_FACE),B!==y&&(B===ju?n.cullFace(n.BACK):B===Fg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),y=B}function I(B){B!==E&&(re&&n.lineWidth(B),E=B)}function Y(B,ye,ne){B?(Se(n.POLYGON_OFFSET_FILL),(q!==ye||k!==ne)&&(n.polygonOffset(ye,ne),q=ye,k=ne)):N(n.POLYGON_OFFSET_FILL)}function j(B){B?Se(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function S(B){B===void 0&&(B=n.TEXTURE0+Z-1),W!==B&&(n.activeTexture(B),W=B)}function v(B,ye,ne){ne===void 0&&(W===null?ne=n.TEXTURE0+Z-1:ne=W);let Q=pe[ne];Q===void 0&&(Q={type:void 0,texture:void 0},pe[ne]=Q),(Q.type!==B||Q.texture!==ye)&&(W!==ne&&(n.activeTexture(ne),W=ne),n.bindTexture(B,ye||he[B]),Q.type=B,Q.texture=ye)}function C(){const B=pe[W];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(B){Te.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Te.copy(B))}function be(B){Oe.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Oe.copy(B))}function Be(B,ye){let ne=l.get(ye);ne===void 0&&(ne=new WeakMap,l.set(ye,ne));let Q=ne.get(B);Q===void 0&&(Q=n.getUniformBlockIndex(ye,B.name),ne.set(B,Q))}function Pe(B,ye){const Q=l.get(ye).get(B);a.get(ye)!==Q&&(n.uniformBlockBinding(ye,Q,B.__bindingPointIndex),a.set(ye,Q))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,pe={},h={},u=new WeakMap,f=[],p=null,_=!1,x=null,d=null,m=null,b=null,M=null,w=null,O=null,P=new st(0,0,0),R=0,F=!1,te=null,y=null,E=null,q=null,k=null,Te.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:N,bindFramebuffer:le,drawBuffers:se,useProgram:ue,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:U,setLineWidth:I,setPolygonOffset:Y,setScissorTest:j,activeTexture:S,bindTexture:v,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:z,texImage2D:xe,texImage3D:Re,updateUBOMapping:Be,uniformBlockBinding:Pe,texStorage2D:Ee,texStorage3D:fe,texSubImage2D:G,texSubImage3D:de,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Ce,viewport:be,reset:ze}}function Vh(n,e,t,i){const s=GS(i);switch(t){case vd:return n*e;case yd:return n*e;case Md:return n*e*2;case Sd:return n*e/s.components*s.byteLength;case Hc:return n*e/s.components*s.byteLength;case wd:return n*e*2/s.components*s.byteLength;case kc:return n*e*2/s.components*s.byteLength;case xd:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case Vc:return n*e*4/s.components*s.byteLength;case Io:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uo:case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:case zl:return Math.max(n,16)*Math.max(e,8)/4;case Fl:case Bl:return Math.max(n,8)*Math.max(e,8)/2;case Gl:case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fo:case ic:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ed:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function GS(n){switch(n){case fi:case md:return{byteLength:1,components:1};case Fr:case gd:case Wr:return{byteLength:2,components:1};case zc:case Gc:return{byteLength:2,components:4};case cs:case Bc:case li:return{byteLength:4,components:1};case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function HS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return p?new OffscreenCanvas(S,v):Br("canvas")}function x(S,v,C){let V=1;const z=j(S);if((z.width>C||z.height>C)&&(V=C/Math.max(z.width,z.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(V*z.width),de=Math.floor(V*z.height);u===void 0&&(u=_(G,de));const ce=v?_(G,de):u;return ce.width=G,ce.height=de,ce.getContext("2d").drawImage(S,0,0,G,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+G+"x"+de+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),S;return S}function d(S){return S.generateMipmaps&&S.minFilter!==yn&&S.minFilter!==Pn}function m(S){n.generateMipmap(S)}function b(S,v,C,V,z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=v;if(v===n.RED&&(C===n.FLOAT&&(G=n.R32F),C===n.HALF_FLOAT&&(G=n.R16F),C===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.R8UI),C===n.UNSIGNED_SHORT&&(G=n.R16UI),C===n.UNSIGNED_INT&&(G=n.R32UI),C===n.BYTE&&(G=n.R8I),C===n.SHORT&&(G=n.R16I),C===n.INT&&(G=n.R32I)),v===n.RG&&(C===n.FLOAT&&(G=n.RG32F),C===n.HALF_FLOAT&&(G=n.RG16F),C===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RG8UI),C===n.UNSIGNED_SHORT&&(G=n.RG16UI),C===n.UNSIGNED_INT&&(G=n.RG32UI),C===n.BYTE&&(G=n.RG8I),C===n.SHORT&&(G=n.RG16I),C===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGB8UI),C===n.UNSIGNED_SHORT&&(G=n.RGB16UI),C===n.UNSIGNED_INT&&(G=n.RGB32UI),C===n.BYTE&&(G=n.RGB8I),C===n.SHORT&&(G=n.RGB16I),C===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),C===n.UNSIGNED_INT&&(G=n.RGBA32UI),C===n.BYTE&&(G=n.RGBA8I),C===n.SHORT&&(G=n.RGBA16I),C===n.INT&&(G=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){const de=z?Xo:ut.getTransfer(V);C===n.FLOAT&&(G=n.RGBA32F),C===n.HALF_FLOAT&&(G=n.RGBA16F),C===n.UNSIGNED_BYTE&&(G=de===yt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function M(S,v){let C;return S?v===null||v===cs||v===Zs?C=n.DEPTH24_STENCIL8:v===li?C=n.DEPTH32F_STENCIL8:v===Fr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===cs||v===Zs?C=n.DEPTH_COMPONENT24:v===li?C=n.DEPTH_COMPONENT32F:v===Fr&&(C=n.DEPTH_COMPONENT16),C}function w(S,v){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==yn&&S.minFilter!==Pn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function O(S){const v=S.target;v.removeEventListener("dispose",O),R(v),v.isVideoTexture&&h.delete(v)}function P(S){const v=S.target;v.removeEventListener("dispose",P),te(v)}function R(S){const v=i.get(S);if(v.__webglInit===void 0)return;const C=S.source,V=f.get(C);if(V){const z=V[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&F(S),Object.keys(V).length===0&&f.delete(C)}i.remove(S)}function F(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const C=S.source,V=f.get(C);delete V[v.__cacheKey],o.memory.textures--}function te(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let z=0;z<v.__webglFramebuffer[V].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[V][z]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=S.textures;for(let V=0,z=C.length;V<z;V++){const G=i.get(C[V]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(C[V])}i.remove(S)}let y=0;function E(){y=0}function q(){const S=y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),y+=1,S}function k(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Z(S,v){const C=i.get(S);if(S.isVideoTexture&&I(S),S.isRenderTargetTexture===!1&&S.version>0&&C.__version!==S.version){const V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(C,S,v);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function re(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Oe(C,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function H(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Oe(C,S,v);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function J(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){ie(C,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const W={[Ct]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[Nl]:n.MIRRORED_REPEAT},pe={[yn]:n.NEAREST,[h_]:n.NEAREST_MIPMAP_NEAREST,[so]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},ve={[m_]:n.NEVER,[M_]:n.ALWAYS,[g_]:n.LESS,[Td]:n.LEQUAL,[__]:n.EQUAL,[y_]:n.GEQUAL,[v_]:n.GREATER,[x_]:n.NOTEQUAL};function _e(S,v){if(v.type===li&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pn||v.magFilter===La||v.magFilter===so||v.magFilter===os||v.minFilter===Pn||v.minFilter===La||v.minFilter===so||v.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,W[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,W[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,W[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yn||v.minFilter!==so&&v.minFilter!==os||v.type===li&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Te(S,v){let C=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",O));const V=v.source;let z=f.get(V);z===void 0&&(z={},f.set(V,z));const G=k(v);if(G!==S.__cacheKey){z[G]===void 0&&(z[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),z[G].usedTimes++;const de=z[S.__cacheKey];de!==void 0&&(z[S.__cacheKey].usedTimes--,de.usedTimes===0&&F(v)),S.__cacheKey=G,S.__webglTexture=z[G].texture}return C}function Oe(S,v,C){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const z=Te(S,v),G=v.source;t.bindTexture(V,S.__webglTexture,n.TEXTURE0+C);const de=i.get(G);if(G.version!==de.__version||z===!0){t.activeTexture(n.TEXTURE0+C);const ce=ut.getPrimaries(ut.workingColorSpace),me=v.colorSpace===Li?null:ut.getPrimaries(v.colorSpace),Ee=v.colorSpace===Li||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let fe=x(v.image,!1,s.maxTextureSize);fe=Y(v,fe);const xe=r.convert(v.format,v.colorSpace),Re=r.convert(v.type);let Ce=b(v.internalFormat,xe,Re,v.colorSpace,v.isVideoTexture);_e(V,v);let be;const Be=v.mipmaps,Pe=v.isVideoTexture!==!0,ze=de.__version===void 0||z===!0,B=G.dataReady,ye=w(v,fe);if(v.isDepthTexture)Ce=M(v.format===Js,v.type),ze&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ce,fe.width,fe.height,0,xe,Re,null));else if(v.isDataTexture)if(Be.length>0){Pe&&ze&&t.texStorage2D(n.TEXTURE_2D,ye,Ce,Be[0].width,Be[0].height);for(let ne=0,Q=Be.length;ne<Q;ne++)be=Be[ne],Pe?B&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,be.width,be.height,xe,Re,be.data):t.texImage2D(n.TEXTURE_2D,ne,Ce,be.width,be.height,0,xe,Re,be.data);v.generateMipmaps=!1}else Pe?(ze&&t.texStorage2D(n.TEXTURE_2D,ye,Ce,fe.width,fe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,xe,Re,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,fe.width,fe.height,0,xe,Re,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ce,Be[0].width,Be[0].height,fe.depth);for(let ne=0,Q=Be.length;ne<Q;ne++)if(be=Be[ne],v.format!==In)if(xe!==null)if(Pe){if(B)if(v.layerUpdates.size>0){const Me=Vh(be.width,be.height,v.format,v.type);for(const ge of v.layerUpdates){const Fe=be.data.subarray(ge*Me/be.data.BYTES_PER_ELEMENT,(ge+1)*Me/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,ge,be.width,be.height,1,xe,Fe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,fe.depth,xe,be.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ce,be.width,be.height,fe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,fe.depth,xe,Re,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ce,be.width,be.height,fe.depth,0,xe,Re,be.data)}else{Pe&&ze&&t.texStorage2D(n.TEXTURE_2D,ye,Ce,Be[0].width,Be[0].height);for(let ne=0,Q=Be.length;ne<Q;ne++)be=Be[ne],v.format!==In?xe!==null?Pe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,be.width,be.height,xe,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ce,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?B&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,be.width,be.height,xe,Re,be.data):t.texImage2D(n.TEXTURE_2D,ne,Ce,be.width,be.height,0,xe,Re,be.data)}else if(v.isDataArrayTexture)if(Pe){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ce,fe.width,fe.height,fe.depth),B)if(v.layerUpdates.size>0){const ne=Vh(fe.width,fe.height,v.format,v.type);for(const Q of v.layerUpdates){const Me=fe.data.subarray(Q*ne/fe.data.BYTES_PER_ELEMENT,(Q+1)*ne/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,fe.width,fe.height,1,xe,Re,Me)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Re,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,xe,Re,fe.data);else if(v.isData3DTexture)Pe?(ze&&t.texStorage3D(n.TEXTURE_3D,ye,Ce,fe.width,fe.height,fe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Re,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,xe,Re,fe.data);else if(v.isFramebufferTexture){if(ze)if(Pe)t.texStorage2D(n.TEXTURE_2D,ye,Ce,fe.width,fe.height);else{let ne=fe.width,Q=fe.height;for(let Me=0;Me<ye;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ce,ne,Q,0,xe,Re,null),ne>>=1,Q>>=1}}else if(Be.length>0){if(Pe&&ze){const ne=j(Be[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ce,ne.width,ne.height)}for(let ne=0,Q=Be.length;ne<Q;ne++)be=Be[ne],Pe?B&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,xe,Re,be):t.texImage2D(n.TEXTURE_2D,ne,Ce,xe,Re,be);v.generateMipmaps=!1}else if(Pe){if(ze){const ne=j(fe);t.texStorage2D(n.TEXTURE_2D,ye,Ce,ne.width,ne.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Re,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ce,xe,Re,fe);d(v)&&m(V),de.__version=G.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ie(S,v,C){if(v.image.length!==6)return;const V=Te(S,v),z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+C);const G=i.get(z);if(z.version!==G.__version||V===!0){t.activeTexture(n.TEXTURE0+C);const de=ut.getPrimaries(ut.workingColorSpace),ce=v.colorSpace===Li?null:ut.getPrimaries(v.colorSpace),me=v.colorSpace===Li||de===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let Q=0;Q<6;Q++)!Ee&&!fe?xe[Q]=x(v.image[Q],!0,s.maxCubemapSize):xe[Q]=fe?v.image[Q].image:v.image[Q],xe[Q]=Y(v,xe[Q]);const Re=xe[0],Ce=r.convert(v.format,v.colorSpace),be=r.convert(v.type),Be=b(v.internalFormat,Ce,be,v.colorSpace),Pe=v.isVideoTexture!==!0,ze=G.__version===void 0||V===!0,B=z.dataReady;let ye=w(v,Re);_e(n.TEXTURE_CUBE_MAP,v);let ne;if(Ee){Pe&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,Re.width,Re.height);for(let Q=0;Q<6;Q++){ne=xe[Q].mipmaps;for(let Me=0;Me<ne.length;Me++){const ge=ne[Me];v.format!==In?Ce!==null?Pe?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,ge.width,ge.height,Ce,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,ge.width,ge.height,Ce,be,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Be,ge.width,ge.height,0,Ce,be,ge.data)}}}else{if(ne=v.mipmaps,Pe&&ze){ne.length>0&&ye++;const Q=j(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Be,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(fe){Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe[Q].width,xe[Q].height,Ce,be,xe[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,xe[Q].width,xe[Q].height,0,Ce,be,xe[Q].data);for(let Me=0;Me<ne.length;Me++){const Fe=ne[Me].image[Q].image;Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,Fe.width,Fe.height,Ce,be,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Be,Fe.width,Fe.height,0,Ce,be,Fe.data)}}else{Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,be,xe[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,Ce,be,xe[Q]);for(let Me=0;Me<ne.length;Me++){const ge=ne[Me];Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,Ce,be,ge.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Be,Ce,be,ge.image[Q])}}}d(v)&&m(n.TEXTURE_CUBE_MAP),G.__version=z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function he(S,v,C,V,z,G){const de=r.convert(C.format,C.colorSpace),ce=r.convert(C.type),me=b(C.internalFormat,de,ce,C.colorSpace);if(!i.get(v).__hasExternalTextures){const fe=Math.max(1,v.width>>G),xe=Math.max(1,v.height>>G);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?t.texImage3D(z,G,me,fe,xe,v.depth,0,de,ce,null):t.texImage2D(z,G,me,fe,xe,0,de,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,z,i.get(C).__webglTexture,0,L(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,z,i.get(C).__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(S,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const V=v.depthTexture,z=V&&V.isDepthTexture?V.type:null,G=M(v.stencilBuffer,z),de=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=L(v);U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,G,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,S)}else{const V=v.textures;for(let z=0;z<V.length;z++){const G=V[z],de=r.convert(G.format,G.colorSpace),ce=r.convert(G.type),me=b(G.internalFormat,de,ce,G.colorSpace),Ee=L(v);C&&U(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,me,v.width,v.height):U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,z=L(v);if(v.depthTexture.format===ks)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===Js)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function le(S){const v=i.get(S),C=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const V=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",z)};V.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=V}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");N(v.__webglFramebuffer,S)}else if(C){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),Se(v.__webglDepthbuffer[V],S,!1);else{const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Se(v.__webglDepthbuffer,S,!1);else{const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(S,v,C){const V=i.get(S);v!==void 0&&he(V.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&le(S)}function ue(S){const v=S.texture,C=i.get(S),V=i.get(v);S.addEventListener("dispose",P);const z=S.textures,G=S.isWebGLCubeRenderTarget===!0,de=z.length>1;if(de||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),G){C.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ce]=[];for(let me=0;me<v.mipmaps.length;me++)C.__webglFramebuffer[ce][me]=n.createFramebuffer()}else C.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)C.__webglFramebuffer[ce]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(de)for(let ce=0,me=z.length;ce<me;ce++){const Ee=i.get(z[ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&U(S)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ce=0;ce<z.length;ce++){const me=z[ce];C.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ce]);const Ee=r.convert(me.format,me.colorSpace),fe=r.convert(me.type),xe=b(me.internalFormat,Ee,fe,me.colorSpace,S.isXRRenderTarget===!0),Re=L(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,C.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(C.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)he(C.__webglFramebuffer[ce][me],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else he(C.__webglFramebuffer[ce],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);d(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ce=0,me=z.length;ce<me;ce++){const Ee=z[ce],fe=i.get(Ee);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),_e(n.TEXTURE_2D,Ee),he(C.__webglFramebuffer,S,Ee,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),d(Ee)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,V.__webglTexture),_e(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)he(C.__webglFramebuffer[me],S,v,n.COLOR_ATTACHMENT0,ce,me);else he(C.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ce,0);d(v)&&m(ce),t.unbindTexture()}S.depthBuffer&&le(S)}function we(S){const v=S.textures;for(let C=0,V=v.length;C<V;C++){const z=v[C];if(d(z)){const G=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(z).__webglTexture;t.bindTexture(G,de),m(G),t.unbindTexture()}}}const ee=[],g=[];function T(S){if(S.samples>0){if(U(S)===!1){const v=S.textures,C=S.width,V=S.height;let z=n.COLOR_BUFFER_BIT;const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(S),ce=v.length>1;if(ce)for(let me=0;me<v.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<v.length;me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ee=i.get(v[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,C,V,0,0,C,V,z,n.NEAREST),l===!0&&(ee.length=0,g.length=0,ee.push(n.COLOR_ATTACHMENT0+me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ee.push(G),g.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<v.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ee=i.get(v[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(S){return Math.min(s.maxSamples,S.samples)}function U(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(S){const v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Y(S,v){const C=S.colorSpace,V=S.format,z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||C!==Bi&&C!==Li&&(ut.getTransfer(C)===yt?(V!==In||z!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function j(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=E,this.setTexture2D=Z,this.setTexture2DArray=re,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=se,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=he,this.useMultisampledRTT=U}function kS(n,e){function t(i,s=Li){let r;const o=ut.getTransfer(s);if(i===fi)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_d)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===md)return n.BYTE;if(i===gd)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===Bc)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Wr)return n.HALF_FLOAT;if(i===vd)return n.ALPHA;if(i===xd)return n.RGB;if(i===In)return n.RGBA;if(i===yd)return n.LUMINANCE;if(i===Md)return n.LUMINANCE_ALPHA;if(i===ks)return n.DEPTH_COMPONENT;if(i===Js)return n.DEPTH_STENCIL;if(i===Sd)return n.RED;if(i===Hc)return n.RED_INTEGER;if(i===wd)return n.RG;if(i===kc)return n.RG_INTEGER;if(i===Vc)return n.RGBA_INTEGER;if(i===Io||i===Do||i===Uo||i===No)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===Ol||i===Bl||i===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gl||i===Hl||i===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gl||i===Hl)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===jl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fo||i===ic||i===sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fo)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ed||i===rc||i===oc||i===ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class VS extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $e extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WS={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),m=this._getHandJoint(c,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const XS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qS=`
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

}`;class YS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new on,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $n({vertexShader:XS,fragmentShader:qS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new D(new ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $S extends tr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null;const x=new YS,d=t.getContextAttributes();let m=null,b=null;const M=[],w=[],O=new Ue;let P=null;const R=new Ut;R.layers.enable(1),R.viewport=new pt;const F=new Ut;F.layers.enable(2),F.viewport=new pt;const te=[R,F],y=new VS;y.layers.enable(1),y.layers.enable(2);let E=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=M[ie];return he===void 0&&(he=new rl,M[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=M[ie];return he===void 0&&(he=new rl,M[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=M[ie];return he===void 0&&(he=new rl,M[ie]=he),he.getHandSpace()};function k(ie){const he=w.indexOf(ie.inputSource);if(he===-1)return;const Se=M[he];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,c||o),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",re);for(let ie=0;ie<M.length;ie++){const he=w[ie];he!==null&&(w[ie]=null,M[ie].disconnect(he))}E=null,q=null,x.reset(),e.setRenderTarget(m),p=null,f=null,u=null,s=null,b=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",re),d.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const he={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new us(p.framebufferWidth,p.framebufferHeight,{format:In,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let he=null,Se=null,N=null;d.depth&&(N=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=d.stencil?Js:ks,Se=d.stencil?Zs:cs);const le={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new us(f.textureWidth,f.textureHeight,{format:In,type:fi,depthTexture:new zd(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(ie){for(let he=0;he<ie.removed.length;he++){const Se=ie.removed[he],N=w.indexOf(Se);N>=0&&(w[N]=null,M[N].disconnect(Se))}for(let he=0;he<ie.added.length;he++){const Se=ie.added[he];let N=w.indexOf(Se);if(N===-1){for(let se=0;se<M.length;se++)if(se>=w.length){w.push(Se),N=se;break}else if(w[se]===null){w[se]=Se,N=se;break}if(N===-1)break}const le=M[N];le&&le.connect(Se)}}const H=new X,J=new X;function W(ie,he,Se){H.setFromMatrixPosition(he.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);const N=H.distanceTo(J),le=he.projectionMatrix.elements,se=Se.projectionMatrix.elements,ue=le[14]/(le[10]-1),we=le[14]/(le[10]+1),ee=(le[9]+1)/le[5],g=(le[9]-1)/le[5],T=(le[8]-1)/le[0],L=(se[8]+1)/se[0],U=ue*T,I=ue*L,Y=N/(-T+L),j=Y*-T;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(j),ie.translateZ(Y),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),le[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const S=ue+Y,v=we+Y,C=U-j,V=I+(N-j),z=ee*we/v*S,G=g*we/v*S;ie.projectionMatrix.makePerspective(C,V,z,G,S,v),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function pe(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let he=ie.near,Se=ie.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),y.near=F.near=R.near=he,y.far=F.far=R.far=Se,(E!==y.near||q!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,q=y.far);const N=ie.parent,le=y.cameras;pe(y,N);for(let se=0;se<le.length;se++)pe(le[se],N);le.length===2?W(y,R,F):y.projectionMatrix.copy(R.projectionMatrix),ve(ie,y,N)};function ve(ie,he,Se){Se===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Or*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _e=null;function Te(ie,he){if(h=he.getViewerPose(c||o),_=he,h!==null){const Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let N=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let se=0;se<Se.length;se++){const ue=Se[se];let we=null;if(p!==null)we=p.getViewport(ue);else{const g=u.getViewSubImage(f,ue);we=g.viewport,se===0&&(e.setRenderTargetTextures(b,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(b))}let ee=te[se];ee===void 0&&(ee=new Ut,ee.layers.enable(se),ee.viewport=new pt,te[se]=ee),ee.matrix.fromArray(ue.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(we.x,we.y,we.width,we.height),se===0&&(y.matrix.copy(ee.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(ee)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const se=u.getDepthInformation(Se[0]);se&&se.isValid&&se.texture&&x.init(e,se,s.renderState)}}for(let Se=0;Se<M.length;Se++){const N=w[Se],le=M[Se];N!==null&&le!==void 0&&le.update(N,he,c||o)}_e&&_e(ie,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Oe=new Od;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(ie){_e=ie},this.dispose=function(){}}}const Qi=new Yn,jS=new St;function KS(n,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function i(d,m){m.color.getRGB(d.fogColor.value,Ud(n)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,b,M,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),h(d,m)):m.isMeshStandardMaterial?(r(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,w)):m.isMeshMatcapMaterial?(r(d,m),_(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),x(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?l(d,m,b,M):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===an&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===an&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const b=e.get(m),M=b.envMap,w=b.envMapRotation;M&&(d.envMap.value=M,Qi.copy(w),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),d.envMapRotation.value.setFromMatrix4(jS.makeRotationFromEuler(Qi)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,b,M){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*b,d.scale.value=M*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,b){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){const b=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const w=M.program;i.uniformBlockBinding(b,w)}function c(b,M){let w=s[b.id];w===void 0&&(_(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",d));const O=M.program;i.updateUBOMapping(b,O);const P=e.render.frame;r[b.id]!==P&&(f(b),r[b.id]=P)}function h(b){const M=u();b.__bindingPointIndex=M;const w=n.createBuffer(),O=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=s[b.id],w=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,R=w.length;P<R;P++){const F=Array.isArray(w[P])?w[P]:[w[P]];for(let te=0,y=F.length;te<y;te++){const E=F[te];if(p(E,P,te,O)===!0){const q=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let Z=0;for(let re=0;re<k.length;re++){const H=k[re],J=x(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,q+Z,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,Z),Z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,M,w,O){const P=b.value,R=M+"_"+w;if(O[R]===void 0)return typeof P=="number"||typeof P=="boolean"?O[R]=P:O[R]=P.clone(),!0;{const F=O[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return O[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function _(b){const M=b.uniforms;let w=0;const O=16;for(let R=0,F=M.length;R<F;R++){const te=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,E=te.length;y<E;y++){const q=te[y],k=Array.isArray(q.value)?q.value:[q.value];for(let Z=0,re=k.length;Z<re;Z++){const H=k[Z],J=x(H),W=w%O,pe=W%J.boundary,ve=W+pe;w+=pe,ve!==0&&O-ve<J.storage&&(w+=O-ve),q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=J.storage}}}const P=w%O;return P>0&&(w+=O-P),b.__size=w,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function d(b){const M=b.target;M.removeEventListener("dispose",d);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class zi{constructor(e={}){const{canvas:t=B_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,d=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Di,this.toneMappingExposure=1;const M=this;let w=!1,O=0,P=0,R=null,F=-1,te=null;const y=new pt,E=new pt;let q=null;const k=new st(0);let Z=0,re=t.width,H=t.height,J=1,W=null,pe=null;const ve=new pt(0,0,re,H),_e=new pt(0,0,re,H);let Te=!1;const Oe=new Yc;let ie=!1,he=!1;const Se=new St,N=new St,le=new X,se=new pt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ee(){return R===null?J:1}let g=i;function T(A,$){return t.getContext(A,$)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ge,!1),g===null){const $="webgl2";if(g=T($,A),g===null)throw T($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,U,I,Y,j,S,v,C,V,z,G,de,ce,me,Ee,fe,xe,Re,Ce,be,Be,Pe,ze,B;function ye(){L=new iM(g),L.init(),Pe=new kS(g,L),U=new Zy(g,L,e,Pe),I=new zS(g),U.reverseDepthBuffer&&I.buffers.depth.setReversed(!0),Y=new oM(g),j=new ES,S=new HS(g,L,I,j,U,Pe,Y),v=new Qy(M),C=new nM(M),V=new dv(g),ze=new jy(g,V),z=new sM(g,V,Y,ze),G=new lM(g,z,V,Y),Ce=new aM(g,U,S),fe=new Jy(j),de=new wS(M,v,C,L,U,ze,fe),ce=new KS(M,j),me=new TS,Ee=new IS(L),Re=new $y(M,v,C,I,G,f,l),xe=new OS(M,G,U),B=new ZS(g,Y,U,I),be=new Ky(g,L,Y),Be=new rM(g,L,Y),Y.programs=de.programs,M.capabilities=U,M.extensions=L,M.properties=j,M.renderLists=me,M.shadowMap=xe,M.state=I,M.info=Y}ye();const ne=new $S(M,g);this.xr=ne,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(re,H,!1))},this.getSize=function(A){return A.set(re,H)},this.setSize=function(A,$,oe=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,H=$,t.width=Math.floor(A*J),t.height=Math.floor($*J),oe===!0&&(t.style.width=A+"px",t.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(re*J,H*J).floor()},this.setDrawingBufferSize=function(A,$,oe){re=A,H=$,J=oe,t.width=Math.floor(A*oe),t.height=Math.floor($*oe),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,$,oe,ae){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,$,oe,ae),I.viewport(y.copy(ve).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(_e)},this.setScissor=function(A,$,oe,ae){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,$,oe,ae),I.scissor(E.copy(_e).multiplyScalar(J).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){I.setScissorTest(Te=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(A=!0,$=!0,oe=!0){let ae=0;if(A){let K=!1;if(R!==null){const Ae=R.texture.format;K=Ae===Vc||Ae===kc||Ae===Hc}if(K){const Ae=R.texture.type,Ne=Ae===fi||Ae===cs||Ae===Fr||Ae===Zs||Ae===zc||Ae===Gc,Ge=Re.getClearColor(),He=Re.getClearAlpha(),Ye=Ge.r,je=Ge.g,We=Ge.b;Ne?(p[0]=Ye,p[1]=je,p[2]=We,p[3]=He,g.clearBufferuiv(g.COLOR,0,p)):(_[0]=Ye,_[1]=je,_[2]=We,_[3]=He,g.clearBufferiv(g.COLOR,0,_))}else ae|=g.COLOR_BUFFER_BIT}$&&(ae|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),oe&&(ae|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),me.dispose(),Ee.dispose(),j.dispose(),v.dispose(),C.dispose(),G.dispose(),ze.dispose(),B.dispose(),de.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",wt),ne.removeEventListener("sessionend",Et),Mt.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Y.autoReset,$=xe.enabled,oe=xe.autoUpdate,ae=xe.needsUpdate,K=xe.type;ye(),Y.autoReset=A,xe.enabled=$,xe.autoUpdate=oe,xe.needsUpdate=ae,xe.type=K}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fe(A){const $=A.target;$.removeEventListener("dispose",Fe),ke($)}function ke(A){qe(A),j.remove(A)}function qe(A){const $=j.get(A).programs;$!==void 0&&($.forEach(function(oe){de.releaseProgram(oe)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,oe,ae,K,Ae){$===null&&($=ue);const Ne=K.isMesh&&K.matrixWorld.determinant()<0,Ge=Zr(A,$,oe,ae,K);I.setMaterial(ae,Ne);let He=oe.index,Ye=1;if(ae.wireframe===!0){if(He=z.getWireframeAttribute(oe),He===void 0)return;Ye=2}const je=oe.drawRange,We=oe.attributes.position;let ft=je.start*Ye,xt=(je.start+je.count)*Ye;Ae!==null&&(ft=Math.max(ft,Ae.start*Ye),xt=Math.min(xt,(Ae.start+Ae.count)*Ye)),He!==null?(ft=Math.max(ft,0),xt=Math.min(xt,He.count)):We!=null&&(ft=Math.max(ft,0),xt=Math.min(xt,We.count));const At=xt-ft;if(At<0||At===1/0)return;ze.setup(K,ae,Ge,oe,He);let ln,at=be;if(He!==null&&(ln=V.get(He),at=Be,at.setIndex(ln)),K.isMesh)ae.wireframe===!0?(I.setLineWidth(ae.wireframeLinewidth*ee()),at.setMode(g.LINES)):at.setMode(g.TRIANGLES);else if(K.isLine){let Xe=ae.linewidth;Xe===void 0&&(Xe=1),I.setLineWidth(Xe*ee()),K.isLineSegments?at.setMode(g.LINES):K.isLineLoop?at.setMode(g.LINE_LOOP):at.setMode(g.LINE_STRIP)}else K.isPoints?at.setMode(g.POINTS):K.isSprite&&at.setMode(g.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)at.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))at.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Xe=K._multiDrawStarts,Wt=K._multiDrawCounts,lt=K._multiDrawCount,bn=He?V.get(He).bytesPerElement:1,ms=j.get(ae).currentProgram.getUniforms();for(let cn=0;cn<lt;cn++)ms.setValue(g,"_gl_DrawID",cn),at.render(Xe[cn]/bn,Wt[cn])}else if(K.isInstancedMesh)at.renderInstances(ft,At,K.count);else if(oe.isInstancedBufferGeometry){const Xe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Wt=Math.min(oe.instanceCount,Xe);at.renderInstances(ft,At,Wt)}else at.render(ft,At)};function Ve(A,$,oe){A.transparent===!0&&A.side===ot&&A.forceSinglePass===!1?(A.side=an,A.needsUpdate=!0,qt(A,$,oe),A.side=Ni,A.needsUpdate=!0,qt(A,$,oe),A.side=ot):qt(A,$,oe)}this.compile=function(A,$,oe=null){oe===null&&(oe=A),d=Ee.get(oe),d.init($),b.push(d),oe.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),A!==oe&&A.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),d.setupLights();const ae=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Ge=Ae[Ne];Ve(Ge,oe,K),ae.add(Ge)}else Ve(Ae,oe,K),ae.add(Ae)}),b.pop(),d=null,ae},this.compileAsync=function(A,$,oe=null){const ae=this.compile(A,$,oe);return new Promise(K=>{function Ae(){if(ae.forEach(function(Ne){j.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){K(A);return}setTimeout(Ae,10)}L.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let nt=null;function rt(A){nt&&nt(A)}function wt(){Mt.stop()}function Et(){Mt.start()}const Mt=new Od;Mt.setAnimationLoop(rt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(A){nt=A,ne.setAnimationLoop(A),A===null?Mt.stop():Mt.start()},ne.addEventListener("sessionstart",wt),ne.addEventListener("sessionend",Et),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera($),$=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,$,R),d=Ee.get(A,b.length),d.init($),b.push(d),N.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Oe.setFromProjectionMatrix(N),he=this.localClippingEnabled,ie=fe.init(this.clippingPlanes,he),x=me.get(A,m.length),x.init(),m.push(x),ne.enabled===!0&&ne.isPresenting===!0){const Ae=M.xr.getDepthSensingMesh();Ae!==null&&It(Ae,$,-1/0,M.sortObjects)}It(A,$,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(W,pe),we=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,we&&Re.addToRenderList(x,A),this.info.render.frame++,ie===!0&&fe.beginShadows();const oe=d.state.shadowsArray;xe.render(oe,A,$),ie===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=x.opaque,K=x.transmissive;if(d.setupLights(),$.isArrayCamera){const Ae=$.cameras;if(K.length>0)for(let Ne=0,Ge=Ae.length;Ne<Ge;Ne++){const He=Ae[Ne];Vt(ae,K,A,He)}we&&Re.render(A);for(let Ne=0,Ge=Ae.length;Ne<Ge;Ne++){const He=Ae[Ne];vt(x,A,He,He.viewport)}}else K.length>0&&Vt(ae,K,A,$),we&&Re.render(A),vt(x,A,$);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,$),ze.resetDefaultState(),F=-1,te=null,b.pop(),b.length>0?(d=b[b.length-1],ie===!0&&fe.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function It(A,$,oe,ae){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){ae&&se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Ne=G.update(A),Ge=A.material;Ge.visible&&x.push(A,Ne,Ge,oe,se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const Ne=G.update(A),Ge=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),se.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),se.copy(Ne.boundingSphere.center)),se.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Ge)){const He=Ne.groups;for(let Ye=0,je=He.length;Ye<je;Ye++){const We=He[Ye],ft=Ge[We.materialIndex];ft&&ft.visible&&x.push(A,Ne,ft,oe,se.z,We)}}else Ge.visible&&x.push(A,Ne,Ge,oe,se.z,null)}}const Ae=A.children;for(let Ne=0,Ge=Ae.length;Ne<Ge;Ne++)It(Ae[Ne],$,oe,ae)}function vt(A,$,oe,ae){const K=A.opaque,Ae=A.transmissive,Ne=A.transparent;d.setupLightsView(oe),ie===!0&&fe.setGlobalState(M.clippingPlanes,oe),ae&&I.viewport(y.copy(ae)),K.length>0&&bt(K,$,oe),Ae.length>0&&bt(Ae,$,oe),Ne.length>0&&bt(Ne,$,oe),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Vt(A,$,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ae.id]===void 0&&(d.state.transmissionRenderTarget[ae.id]=new us(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Wr:fi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const Ae=d.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||y;Ae.setSize(Ne.z,Ne.w);const Ge=M.getRenderTarget();M.setRenderTarget(Ae),M.getClearColor(k),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),we&&Re.render(oe);const He=M.toneMapping;M.toneMapping=Di;const Ye=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),d.setupLightsView(ae),ie===!0&&fe.setGlobalState(M.clippingPlanes,ae),bt(A,oe,ae),S.updateMultisampleRenderTarget(Ae),S.updateRenderTargetMipmap(Ae),L.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let We=0,ft=$.length;We<ft;We++){const xt=$[We],At=xt.object,ln=xt.geometry,at=xt.material,Xe=xt.group;if(at.side===ot&&At.layers.test(ae.layers)){const Wt=at.side;at.side=an,at.needsUpdate=!0,_n(At,oe,ae,ln,at,Xe),at.side=Wt,at.needsUpdate=!0,je=!0}}je===!0&&(S.updateMultisampleRenderTarget(Ae),S.updateRenderTargetMipmap(Ae))}M.setRenderTarget(Ge),M.setClearColor(k,Z),Ye!==void 0&&(ae.viewport=Ye),M.toneMapping=He}function bt(A,$,oe){const ae=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Ae=A.length;K<Ae;K++){const Ne=A[K],Ge=Ne.object,He=Ne.geometry,Ye=ae===null?Ne.material:ae,je=Ne.group;Ge.layers.test(oe.layers)&&_n(Ge,$,oe,He,Ye,je)}}function _n(A,$,oe,ae,K,Ae){A.onBeforeRender(M,$,oe,ae,K,Ae),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(M,$,oe,ae,A,Ae),K.transparent===!0&&K.side===ot&&K.forceSinglePass===!1?(K.side=an,K.needsUpdate=!0,M.renderBufferDirect(oe,$,ae,K,A,Ae),K.side=Ni,K.needsUpdate=!0,M.renderBufferDirect(oe,$,ae,K,A,Ae),K.side=ot):M.renderBufferDirect(oe,$,ae,K,A,Ae),A.onAfterRender(M,$,oe,ae,K,Ae)}function qt(A,$,oe){$.isScene!==!0&&($=ue);const ae=j.get(A),K=d.state.lights,Ae=d.state.shadowsArray,Ne=K.state.version,Ge=de.getParameters(A,K.state,Ae,$,oe),He=de.getProgramCacheKey(Ge);let Ye=ae.programs;ae.environment=A.isMeshStandardMaterial?$.environment:null,ae.fog=$.fog,ae.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",Fe),Ye=new Map,ae.programs=Ye);let je=Ye.get(He);if(je!==void 0){if(ae.currentProgram===je&&ae.lightsStateVersion===Ne)return Kr(A,Ge),je}else Ge.uniforms=de.getUniforms(A),A.onBeforeCompile(Ge,M),je=de.acquireProgram(Ge,He),Ye.set(He,je),ae.uniforms=Ge.uniforms;const We=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=fe.uniform),Kr(A,Ge),ae.needsLights=np(A),ae.lightsStateVersion=Ne,ae.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),ae.currentProgram=je,ae.uniformsList=null,je}function jr(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=Bo.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function Kr(A,$){const oe=j.get(A);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function Zr(A,$,oe,ae,K){$.isScene!==!0&&($=ue),S.resetTextureUnits();const Ae=$.fog,Ne=ae.isMeshStandardMaterial?$.environment:null,Ge=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bi,He=(ae.isMeshStandardMaterial?C:v).get(ae.envMap||Ne),Ye=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,je=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),We=!!oe.morphAttributes.position,ft=!!oe.morphAttributes.normal,xt=!!oe.morphAttributes.color;let At=Di;ae.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=M.toneMapping);const ln=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,at=ln!==void 0?ln.length:0,Xe=j.get(ae),Wt=d.state.lights;if(ie===!0&&(he===!0||A!==te)){const vn=A===te&&ae.id===F;fe.setState(ae,A,vn)}let lt=!1;ae.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Wt.state.version||Xe.outputColorSpace!==Ge||K.isBatchedMesh&&Xe.batching===!1||!K.isBatchedMesh&&Xe.batching===!0||K.isBatchedMesh&&Xe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Xe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Xe.instancing===!1||!K.isInstancedMesh&&Xe.instancing===!0||K.isSkinnedMesh&&Xe.skinning===!1||!K.isSkinnedMesh&&Xe.skinning===!0||K.isInstancedMesh&&Xe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xe.instancingMorph===!1&&K.morphTexture!==null||Xe.envMap!==He||ae.fog===!0&&Xe.fog!==Ae||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==fe.numPlanes||Xe.numIntersection!==fe.numIntersection)||Xe.vertexAlphas!==Ye||Xe.vertexTangents!==je||Xe.morphTargets!==We||Xe.morphNormals!==ft||Xe.morphColors!==xt||Xe.toneMapping!==At||Xe.morphTargetsCount!==at)&&(lt=!0):(lt=!0,Xe.__version=ae.version);let bn=Xe.currentProgram;lt===!0&&(bn=qt(ae,$,K));let ms=!1,cn=!1,pa=!1;const Rt=bn.getUniforms(),_i=Xe.uniforms;if(I.useProgram(bn.program)&&(ms=!0,cn=!0,pa=!0),ae.id!==F&&(F=ae.id,cn=!0),ms||te!==A){U.reverseDepthBuffer?(Se.copy(A.projectionMatrix),G_(Se),H_(Se),Rt.setValue(g,"projectionMatrix",Se)):Rt.setValue(g,"projectionMatrix",A.projectionMatrix),Rt.setValue(g,"viewMatrix",A.matrixWorldInverse);const vn=Rt.map.cameraPosition;vn!==void 0&&vn.setValue(g,le.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Rt.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Rt.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),te!==A&&(te=A,cn=!0,pa=!0)}if(K.isSkinnedMesh){Rt.setOptional(g,K,"bindMatrix"),Rt.setOptional(g,K,"bindMatrixInverse");const vn=K.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Rt.setValue(g,"boneTexture",vn.boneTexture,S))}K.isBatchedMesh&&(Rt.setOptional(g,K,"batchingTexture"),Rt.setValue(g,"batchingTexture",K._matricesTexture,S),Rt.setOptional(g,K,"batchingIdTexture"),Rt.setValue(g,"batchingIdTexture",K._indirectTexture,S),Rt.setOptional(g,K,"batchingColorTexture"),K._colorsTexture!==null&&Rt.setValue(g,"batchingColorTexture",K._colorsTexture,S));const ma=oe.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0)&&Ce.update(K,oe,bn),(cn||Xe.receiveShadow!==K.receiveShadow)&&(Xe.receiveShadow=K.receiveShadow,Rt.setValue(g,"receiveShadow",K.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(_i.envMap.value=He,_i.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&$.environment!==null&&(_i.envMapIntensity.value=$.environmentIntensity),cn&&(Rt.setValue(g,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&tp(_i,pa),Ae&&ae.fog===!0&&ce.refreshFogUniforms(_i,Ae),ce.refreshMaterialUniforms(_i,ae,J,H,d.state.transmissionRenderTarget[A.id]),Bo.upload(g,jr(Xe),_i,S)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bo.upload(g,jr(Xe),_i,S),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Rt.setValue(g,"center",K.center),Rt.setValue(g,"modelViewMatrix",K.modelViewMatrix),Rt.setValue(g,"normalMatrix",K.normalMatrix),Rt.setValue(g,"modelMatrix",K.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const vn=ae.uniformsGroups;for(let ga=0,ip=vn.length;ga<ip;ga++){const Qc=vn[ga];B.update(Qc,bn),B.bind(Qc,bn)}}return bn}function tp(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function np(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,$,oe){j.get(A.texture).__webglTexture=$,j.get(A.depthTexture).__webglTexture=oe;const ae=j.get(A);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=oe===void 0,ae.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,$){const oe=j.get(A);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,oe=0){R=A,O=$,P=oe;let ae=!0,K=null,Ae=!1,Ne=!1;if(A){const He=j.get(A);if(He.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(g.FRAMEBUFFER,null),ae=!1;else if(He.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(He.__hasExternalTextures)S.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&j.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ne=!0);const je=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[$])?K=je[$][oe]:K=je[$],Ae=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?K=j.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?K=je[oe]:K=je,y.copy(A.viewport),E.copy(A.scissor),q=A.scissorTest}else y.copy(ve).multiplyScalar(J).floor(),E.copy(_e).multiplyScalar(J).floor(),q=Te;if(I.bindFramebuffer(g.FRAMEBUFFER,K)&&ae&&I.drawBuffers(A,K),I.viewport(y),I.scissor(E),I.setScissorTest(q),Ae){const He=j.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+$,He.__webglTexture,oe)}else if(Ne){const He=j.get(A.texture),Ye=$||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,He.__webglTexture,oe||0,Ye)}F=-1},this.readRenderTargetPixels=function(A,$,oe,ae,K,Ae,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){I.bindFramebuffer(g.FRAMEBUFFER,Ge);try{const He=A.texture,Ye=He.format,je=He.type;if(!U.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-ae&&oe>=0&&oe<=A.height-K&&g.readPixels($,oe,ae,K,Pe.convert(Ye),Pe.convert(je),Ae)}finally{const He=R!==null?j.get(R).__webglFramebuffer:null;I.bindFramebuffer(g.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,$,oe,ae,K,Ae,Ne){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){const He=A.texture,Ye=He.format,je=He.type;if(!U.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=A.width-ae&&oe>=0&&oe<=A.height-K){I.bindFramebuffer(g.FRAMEBUFFER,Ge);const We=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,We),g.bufferData(g.PIXEL_PACK_BUFFER,Ae.byteLength,g.STREAM_READ),g.readPixels($,oe,ae,K,Pe.convert(Ye),Pe.convert(je),0);const ft=R!==null?j.get(R).__webglFramebuffer:null;I.bindFramebuffer(g.FRAMEBUFFER,ft);const xt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await z_(g,xt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,We),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Ae),g.deleteBuffer(We),g.deleteSync(xt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,$=null,oe=0){A.isTexture!==!0&&(Oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1]);const ae=Math.pow(2,-oe),K=Math.floor(A.image.width*ae),Ae=Math.floor(A.image.height*ae),Ne=$!==null?$.x:0,Ge=$!==null?$.y:0;S.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,oe,0,0,Ne,Ge,K,Ae),I.unbindTexture()},this.copyTextureToTexture=function(A,$,oe=null,ae=null,K=0){A.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,A=arguments[1],$=arguments[2],K=arguments[3]||0,oe=null);let Ae,Ne,Ge,He,Ye,je;oe!==null?(Ae=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,Ge=oe.min.x,He=oe.min.y):(Ae=A.image.width,Ne=A.image.height,Ge=0,He=0),ae!==null?(Ye=ae.x,je=ae.y):(Ye=0,je=0);const We=Pe.convert($.format),ft=Pe.convert($.type);S.setTexture2D($,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,$.unpackAlignment);const xt=g.getParameter(g.UNPACK_ROW_LENGTH),At=g.getParameter(g.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(g.UNPACK_SKIP_PIXELS),at=g.getParameter(g.UNPACK_SKIP_ROWS),Xe=g.getParameter(g.UNPACK_SKIP_IMAGES),Wt=A.isCompressedTexture?A.mipmaps[K]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Wt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Wt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ge),g.pixelStorei(g.UNPACK_SKIP_ROWS,He),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,K,Ye,je,Ae,Ne,We,ft,Wt.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,K,Ye,je,Wt.width,Wt.height,We,Wt.data):g.texSubImage2D(g.TEXTURE_2D,K,Ye,je,Ae,Ne,We,ft,Wt),g.pixelStorei(g.UNPACK_ROW_LENGTH,xt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,At),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(g.UNPACK_SKIP_ROWS,at),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Xe),K===0&&$.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(A,$,oe=null,ae=null,K=0){A.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ae=arguments[1]||null,A=arguments[2],$=arguments[3],K=arguments[4]||0);let Ae,Ne,Ge,He,Ye,je,We,ft,xt;const At=A.isCompressedTexture?A.mipmaps[K]:A.image;oe!==null?(Ae=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,Ge=oe.max.z-oe.min.z,He=oe.min.x,Ye=oe.min.y,je=oe.min.z):(Ae=At.width,Ne=At.height,Ge=At.depth,He=0,Ye=0,je=0),ae!==null?(We=ae.x,ft=ae.y,xt=ae.z):(We=0,ft=0,xt=0);const ln=Pe.convert($.format),at=Pe.convert($.type);let Xe;if($.isData3DTexture)S.setTexture3D($,0),Xe=g.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)S.setTexture2DArray($,0),Xe=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,$.unpackAlignment);const Wt=g.getParameter(g.UNPACK_ROW_LENGTH),lt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),bn=g.getParameter(g.UNPACK_SKIP_PIXELS),ms=g.getParameter(g.UNPACK_SKIP_ROWS),cn=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,At.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,At.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,He),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ye),g.pixelStorei(g.UNPACK_SKIP_IMAGES,je),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(Xe,K,We,ft,xt,Ae,Ne,Ge,ln,at,At.data):$.isCompressedArrayTexture?g.compressedTexSubImage3D(Xe,K,We,ft,xt,Ae,Ne,Ge,ln,At.data):g.texSubImage3D(Xe,K,We,ft,xt,Ae,Ne,Ge,ln,at,At),g.pixelStorei(g.UNPACK_ROW_LENGTH,Wt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,lt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,bn),g.pixelStorei(g.UNPACK_SKIP_ROWS,ms),g.pixelStorei(g.UNPACK_SKIP_IMAGES,cn),K===0&&$.generateMipmaps&&g.generateMipmap(Xe),I.unbindTexture()},this.initRenderTarget=function(A){j.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),I.unbindTexture()},this.resetState=function(){O=0,P=0,R=null,I.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wc?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===ua?"display-p3":"srgb"}}class Gi extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ue:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new X,s=[],r=[],o=[],a=new X,l=new St;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new X)}r[0]=new X,o[0]=new X;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ht(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ht(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jc extends Kn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class JS extends jc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Kc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const To=new X,ol=new Kc,al=new Kc,ll=new Kc;class QS extends Kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new X){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(To.subVectors(s[0],s[1]).add(s[0]),c=To);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(To.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=To),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),_<1e-4&&(_=x),d<1e-4&&(d=x),ol.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,x,d),al.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,x,d),ll.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,x,d)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),al.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ll.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ol.calc(l),al.calc(l),ll.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new X().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function ew(n,e){const t=1-n;return t*t*e}function tw(n,e){return 2*(1-n)*n*e}function nw(n,e){return n*n*e}function br(n,e,t,i){return ew(n,e)+tw(n,t)+nw(n,i)}function iw(n,e){const t=1-n;return t*t*t*e}function sw(n,e){const t=1-n;return 3*t*t*n*e}function rw(n,e){return 3*(1-n)*n*n*e}function ow(n,e){return n*n*n*e}function Tr(n,e,t,i,s){return iw(n,e)+sw(n,t)+rw(n,i)+ow(n,s)}class Wd extends Kn{constructor(e=new Ue,t=new Ue,i=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ue){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aw extends Kn{constructor(e=new X,t=new X,i=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y),Tr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xd extends Kn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lw extends Kn{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends Kn{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cw extends Kn{constructor(e=new X,t=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y),br(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yd extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Wh(a,l.x,c.x,h.x,u.x),Wh(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}}var cc=Object.freeze({__proto__:null,ArcCurve:JS,CatmullRomCurve3:QS,CubicBezierCurve:Wd,CubicBezierCurve3:aw,EllipseCurve:jc,LineCurve:Xd,LineCurve3:lw,QuadraticBezierCurve:qd,QuadraticBezierCurve3:cw,SplineCurve:Yd});class uw extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new cc[s.type]().fromJSON(s))}return this}}class uc extends uw{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Xd(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new qd(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Wd(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s),new Ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Yd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new jc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _t extends En{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new X,h=new Ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sn extends En{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let _=0;const x=[],d=i/2;let m=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(p,2));function b(){const w=new X,O=new X;let P=0;const R=(t-e)/i;for(let F=0;F<=r;F++){const te=[],y=F/r,E=y*(t-e)+e;for(let q=0;q<=s;q++){const k=q/s,Z=k*l+a,re=Math.sin(Z),H=Math.cos(Z);O.x=E*re,O.y=-y*i+d,O.z=E*H,u.push(O.x,O.y,O.z),w.set(re,R,H).normalize(),f.push(w.x,w.y,w.z),p.push(k,1-y),te.push(_++)}x.push(te)}for(let F=0;F<s;F++)for(let te=0;te<r;te++){const y=x[te][F],E=x[te+1][F],q=x[te+1][F+1],k=x[te][F+1];e>0&&(h.push(y,E,k),P+=3),t>0&&(h.push(E,q,k),P+=3)}c.addGroup(m,P,0),m+=P}function M(w){const O=_,P=new Ue,R=new X;let F=0;const te=w===!0?e:t,y=w===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,d*y,0),f.push(0,y,0),p.push(.5,.5),_++;const E=_;for(let q=0;q<=s;q++){const Z=q/s*l+a,re=Math.cos(Z),H=Math.sin(Z);R.x=te*H,R.y=d*y,R.z=te*re,u.push(R.x,R.y,R.z),f.push(0,y,0),P.x=re*.5+.5,P.y=H*.5*y+.5,p.push(P.x,P.y),_++}for(let q=0;q<s;q++){const k=O+q,Z=E+q;w===!0?h.push(Z,Z+1,k):h.push(Z+1,Z,k),F+=3}c.addGroup(m,F,w===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gn extends uc{constructor(e){super(e),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new uc().fromJSON(s))}return this}}const hw={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=$d(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,p;if(i&&(r=gw(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let _=t;_<s;_+=t)u=n[_],f=n[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return zr(r,o,t,a,l,p,0),o}};function $d(n,e,t,i,s){let r,o;if(s===Aw(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Xh(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Xh(r,n[r],n[r+1],o);return o&&da(o,o.next)&&(Hr(o),o=o.next),o}function hs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(da(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function zr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Mw(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?dw(n,i,s,r):fw(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Hr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=pw(hs(n),e,t),zr(n,e,t,i,s,r,2)):o===2&&mw(n,e,t,i,s,r):zr(hs(n),e,t,i,s,r,1);break}}}function fw(n){const e=n.prev,t=n,i=n.next;if(Tt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=p&&Fs(s,a,r,l,o,c,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function dw(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Tt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,d=h>u?h>f?h:f:u>f?u:f,m=hc(p,_,e,t,i),b=hc(x,d,e,t,i);let M=n.prevZ,w=n.nextZ;for(;M&&M.z>=m&&w&&w.z<=b;){if(M.x>=p&&M.x<=x&&M.y>=_&&M.y<=d&&M!==s&&M!==o&&Fs(a,h,l,u,c,f,M.x,M.y)&&Tt(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=p&&w.x<=x&&w.y>=_&&w.y<=d&&w!==s&&w!==o&&Fs(a,h,l,u,c,f,w.x,w.y)&&Tt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=x&&M.y>=_&&M.y<=d&&M!==s&&M!==o&&Fs(a,h,l,u,c,f,M.x,M.y)&&Tt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=b;){if(w.x>=p&&w.x<=x&&w.y>=_&&w.y<=d&&w!==s&&w!==o&&Fs(a,h,l,u,c,f,w.x,w.y)&&Tt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function pw(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!da(s,r)&&jd(s,i,i.next,r)&&Gr(s,r)&&Gr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Hr(i),Hr(i.next),i=n=r),i=i.next}while(i!==n);return hs(i)}function mw(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ew(o,a)){let l=Kd(o,a);o=hs(o,o.next),l=hs(l,l.next),zr(o,e,t,i,s,r,0),zr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function gw(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=$d(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ww(c));for(s.sort(_w),r=0;r<s.length;r++)t=vw(s[r],t);return t}function _w(n,e){return n.x-e.x}function vw(n,e){const t=xw(n,e);if(!t)return e;const i=Kd(t,n);return hs(i,i.next),hs(t,t.next)}function xw(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Fs(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Gr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&yw(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function yw(n,e){return Tt(n.prev,n,e.prev)<0&&Tt(e.next,n,n.next)<0}function Mw(n,e,t,i){let s=n;do s.z===0&&(s.z=hc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Sw(s)}function Sw(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function hc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ww(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Fs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ew(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!bw(n,e)&&(Gr(n,e)&&Gr(e,n)&&Tw(n,e)&&(Tt(n.prev,n,e.prev)||Tt(n,e.prev,e))||da(n,e)&&Tt(n.prev,n,n.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function da(n,e){return n.x===e.x&&n.y===e.y}function jd(n,e,t,i){const s=Ro(Tt(n,e,t)),r=Ro(Tt(n,e,i)),o=Ro(Tt(t,i,n)),a=Ro(Tt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ao(n,t,e)||r===0&&Ao(n,i,e)||o===0&&Ao(t,n,i)||a===0&&Ao(t,e,i))}function Ao(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ro(n){return n>0?1:n<0?-1:0}function bw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&jd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Gr(n,e){return Tt(n.prev,n,n.next)<0?Tt(n,e,n.next)>=0&&Tt(n,n.prev,e)>=0:Tt(n,e,n.prev)<0||Tt(n,n.next,e)<0}function Tw(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Kd(n,e){const t=new fc(n.i,n.x,n.y),i=new fc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Xh(n,e,t,i){const s=new fc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Aw(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ws{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ws.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];qh(e),Yh(i,e);let o=e.length;t.forEach(qh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Yh(i,t[l]);const a=hw.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function qh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Yh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class wn extends En{constructor(e=new gn([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Pt(s,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Rw;let M,w=!1,O,P,R,F;m&&(M=m.getSpacedPoints(h),w=!0,f=!1,O=m.computeFrenetFrames(h,!1),P=new X,R=new X,F=new X),f||(d=0,p=0,_=0,x=0);const te=a.extractPoints(c);let y=te.shape;const E=te.holes;if(!Ws.isClockWise(y)){y=y.reverse();for(let ee=0,g=E.length;ee<g;ee++){const T=E[ee];Ws.isClockWise(T)&&(E[ee]=T.reverse())}}const k=Ws.triangulateShape(y,E),Z=y;for(let ee=0,g=E.length;ee<g;ee++){const T=E[ee];y=y.concat(T)}function re(ee,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(g,T)}const H=y.length,J=k.length;function W(ee,g,T){let L,U,I;const Y=ee.x-g.x,j=ee.y-g.y,S=T.x-ee.x,v=T.y-ee.y,C=Y*Y+j*j,V=Y*v-j*S;if(Math.abs(V)>Number.EPSILON){const z=Math.sqrt(C),G=Math.sqrt(S*S+v*v),de=g.x-j/z,ce=g.y+Y/z,me=T.x-v/G,Ee=T.y+S/G,fe=((me-de)*v-(Ee-ce)*S)/(Y*v-j*S);L=de+Y*fe-ee.x,U=ce+j*fe-ee.y;const xe=L*L+U*U;if(xe<=2)return new Ue(L,U);I=Math.sqrt(xe/2)}else{let z=!1;Y>Number.EPSILON?S>Number.EPSILON&&(z=!0):Y<-Number.EPSILON?S<-Number.EPSILON&&(z=!0):Math.sign(j)===Math.sign(v)&&(z=!0),z?(L=-j,U=Y,I=Math.sqrt(C)):(L=Y,U=j,I=Math.sqrt(C/2))}return new Ue(L/I,U/I)}const pe=[];for(let ee=0,g=Z.length,T=g-1,L=ee+1;ee<g;ee++,T++,L++)T===g&&(T=0),L===g&&(L=0),pe[ee]=W(Z[ee],Z[T],Z[L]);const ve=[];let _e,Te=pe.concat();for(let ee=0,g=E.length;ee<g;ee++){const T=E[ee];_e=[];for(let L=0,U=T.length,I=U-1,Y=L+1;L<U;L++,I++,Y++)I===U&&(I=0),Y===U&&(Y=0),_e[L]=W(T[L],T[I],T[Y]);ve.push(_e),Te=Te.concat(_e)}for(let ee=0;ee<d;ee++){const g=ee/d,T=p*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let U=0,I=Z.length;U<I;U++){const Y=re(Z[U],pe[U],L);N(Y.x,Y.y,-T)}for(let U=0,I=E.length;U<I;U++){const Y=E[U];_e=ve[U];for(let j=0,S=Y.length;j<S;j++){const v=re(Y[j],_e[j],L);N(v.x,v.y,-T)}}}const Oe=_+x;for(let ee=0;ee<H;ee++){const g=f?re(y[ee],Te[ee],Oe):y[ee];w?(R.copy(O.normals[0]).multiplyScalar(g.x),P.copy(O.binormals[0]).multiplyScalar(g.y),F.copy(M[0]).add(R).add(P),N(F.x,F.y,F.z)):N(g.x,g.y,0)}for(let ee=1;ee<=h;ee++)for(let g=0;g<H;g++){const T=f?re(y[g],Te[g],Oe):y[g];w?(R.copy(O.normals[ee]).multiplyScalar(T.x),P.copy(O.binormals[ee]).multiplyScalar(T.y),F.copy(M[ee]).add(R).add(P),N(F.x,F.y,F.z)):N(T.x,T.y,u/h*ee)}for(let ee=d-1;ee>=0;ee--){const g=ee/d,T=p*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let U=0,I=Z.length;U<I;U++){const Y=re(Z[U],pe[U],L);N(Y.x,Y.y,u+T)}for(let U=0,I=E.length;U<I;U++){const Y=E[U];_e=ve[U];for(let j=0,S=Y.length;j<S;j++){const v=re(Y[j],_e[j],L);w?N(v.x,v.y+M[h-1].y,M[h-1].x+T):N(v.x,v.y,u+T)}}}ie(),he();function ie(){const ee=s.length/3;if(f){let g=0,T=H*g;for(let L=0;L<J;L++){const U=k[L];le(U[2]+T,U[1]+T,U[0]+T)}g=h+d*2,T=H*g;for(let L=0;L<J;L++){const U=k[L];le(U[0]+T,U[1]+T,U[2]+T)}}else{for(let g=0;g<J;g++){const T=k[g];le(T[2],T[1],T[0])}for(let g=0;g<J;g++){const T=k[g];le(T[0]+H*h,T[1]+H*h,T[2]+H*h)}}i.addGroup(ee,s.length/3-ee,0)}function he(){const ee=s.length/3;let g=0;Se(Z,g),g+=Z.length;for(let T=0,L=E.length;T<L;T++){const U=E[T];Se(U,g),g+=U.length}i.addGroup(ee,s.length/3-ee,1)}function Se(ee,g){let T=ee.length;for(;--T>=0;){const L=T;let U=T-1;U<0&&(U=ee.length-1);for(let I=0,Y=h+d*2;I<Y;I++){const j=H*I,S=H*(I+1),v=g+L+j,C=g+U+j,V=g+U+S,z=g+L+S;se(v,C,V,z)}}}function N(ee,g,T){l.push(ee),l.push(g),l.push(T)}function le(ee,g,T){ue(ee),ue(g),ue(T);const L=s.length/3,U=b.generateTopUV(i,s,L-3,L-2,L-1);we(U[0]),we(U[1]),we(U[2])}function se(ee,g,T,L){ue(ee),ue(g),ue(L),ue(g),ue(T),ue(L);const U=s.length/3,I=b.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);we(I[0]),we(I[1]),we(I[3]),we(I[1]),we(I[2]),we(I[3])}function ue(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function we(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Cw(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new cc[s.type]().fromJSON(s)),new wn(i,e.options)}}const Rw={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Ue(r,o),new Ue(a,l),new Ue(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],p=e[s*3+1],_=e[s*3+2],x=e[r*3],d=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ue(o,1-l),new Ue(c,1-u),new Ue(f,1-_),new Ue(x,1-m)]:[new Ue(a,1-l),new Ue(h,1-u),new Ue(p,1-_),new Ue(d,1-m)]}};function Cw(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Le extends En{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new X,f=new X,p=[],_=[],x=[],d=[];for(let m=0;m<=i;m++){const b=[],M=m/i;let w=0;m===0&&o===0?w=.5/t:m===i&&l===Math.PI&&(w=-.5/t);for(let O=0;O<=t;O++){const P=O/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),d.push(P+w,1-M),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<t;b++){const M=h[m][b+1],w=h[m][b],O=h[m+1][b],P=h[m+1][b+1];(m!==0||o>0)&&p.push(M,w,P),(m!==i-1||l<Math.PI)&&p.push(w,O,P)}this.setIndex(p),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zc extends En{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new X,u=new X,f=new X;for(let p=0;p<=i;p++)for(let _=0;_<=s;_++){const x=_/s*r,d=p/i*Math.PI*2;u.x=(e+t*Math.cos(d))*Math.cos(x),u.y=(e+t*Math.cos(d))*Math.sin(x),u.z=t*Math.sin(d),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,d=(s+1)*(p-1)+_-1,m=(s+1)*(p-1)+_,b=(s+1)*p+_;o.push(x,d,b),o.push(d,m,b)}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zd extends Yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class De extends Zd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const jo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Pw{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Lw=new Pw;class $r{constructor(e){this.manager=e!==void 0?e:Lw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$r.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class Iw extends Error{constructor(e,t){super(e),this.response=t}}class Dw extends $r{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:i,onError:s});return}si[e]=[],si[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=si[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let x=0;const d=new ReadableStream({start(m){b();function b(){u.read().then(({done:M,value:w})=>{if(M)m.close();else{x+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let P=0,R=h.length;P<R;P++){const F=h[P];F.onProgress&&F.onProgress(O)}m.enqueue(w),b()}},M=>{m.error(M)})}}});return new Response(d)}else throw new Iw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{jo.add(e,c);const h=si[e];delete si[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=si[e];if(h===void 0)throw this.manager.itemError(e),c;delete si[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Uw extends $r{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Br("img");function l(){h(),jo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Hi extends $r{constructor(e){super(e)}load(e,t,i,s){const r=new on,o=new Uw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Jc extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const cl=new St,$h=new X,jh=new X;class Jd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),t.position.copy($h),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kh=new St,fr=new X,ul=new X;class Nw extends Jd{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(fr),ul.copy(i.position),ul.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ul),i.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh)}}class ki extends Jc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fw extends Jd{constructor(){super(new Bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vi extends Jc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Fw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wi extends Jc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zh(){return performance.now()}class Ow{constructor(){this.type="ShapePath",this.color=new st,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new uc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const b=[];for(let M=0,w=m.length;M<w;M++){const O=m[M],P=new gn;P.curves=O.curves,b.push(P)}return b}function i(m,b){const M=b.length;let w=!1;for(let O=M-1,P=0;P<M;O=P++){let R=b[O],F=b[P],te=F.x-R.x,y=F.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=b[P],te=-te,F=b[O],y=-y),m.y<R.y||m.y>F.y)continue;if(m.y===R.y){if(m.x===R.x)return!0}else{const E=y*(m.x-R.x)-te*(m.y-R.y);if(E===0)return!0;if(E<0)continue;w=!w}}else{if(m.y!==R.y)continue;if(F.x<=m.x&&m.x<=R.x||R.x<=m.x&&m.x<=F.x)return!0}}return w}const s=Ws.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new gn,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;const u=[],f=[];let p=[],_=0,x;f[_]=void 0,p[_]=[];for(let m=0,b=r.length;m<b;m++)a=r[m],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new gn,p:x},f[_].s.curves=a.curves,h&&_++,p[_]=[]):p[_].push({h:a,p:x[0]});if(!f[0])return t(r);if(f.length>1){let m=!1,b=0;for(let M=0,w=f.length;M<w;M++)u[M]=[];for(let M=0,w=f.length;M<w;M++){const O=p[M];for(let P=0;P<O.length;P++){const R=O[P];let F=!0;for(let te=0;te<f.length;te++)i(R.p,f[te].p)&&(M!==te&&b++,F?(F=!1,u[te].push(R)):m=!0);F&&u[M].push(R)}}b>0&&m===!1&&(p=u)}let d;for(let m=0,b=f.length;m<b;m++){l=f[m].s,c.push(l),d=p[m];for(let M=0,w=d.length;M<w;M++)l.holes.push(d[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);class Xi extends $r{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Dw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},i,s)}parse(e){return new Bw(e)}}class Bw{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=zw(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function zw(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=Gw(h,s,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function Gw(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new Ow;let a,l,c,h,u,f,p,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,m=x.length;d<m;)switch(x[d++]){case"m":a=x[d++]*e+t,l=x[d++]*e+i,o.moveTo(a,l);break;case"l":a=x[d++]*e+t,l=x[d++]*e+i,o.lineTo(a,l);break;case"q":c=x[d++]*e+t,h=x[d++]*e+i,u=x[d++]*e+t,f=x[d++]*e+i,o.quadraticCurveTo(u,f,c,h);break;case"b":c=x[d++]*e+t,h=x[d++]*e+i,u=x[d++]*e+t,f=x[d++]*e+i,p=x[d++]*e+t,_=x[d++]*e+i,o.bezierCurveTo(u,f,p,_,c,h);break}}return{offsetX:r.ha*e,path:o}}class Nt extends wn{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const s=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const Hw=Bn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=tt(null);let i=null,s=tt(!1),r=tt(!1),o=tt(!1);return jn(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new Gi,c=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),h=new zi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new $e,f=new Wi(16777215,2);l.add(f);const p=new Vi(16777215,4);p.position.set(5,5,5),l.add(p);const _=new ki(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Hi,d=x.load("/3d-bear-arts/assets/lv2.jpg"),m=x.load("/3d-bear-arts/assets/lv2.jpg");d.wrapS=d.wrapT=Ct,m.wrapS=m.wrapT=Ct;const b=new De({color:8343336,metalness:0,roughness:.8,bumpMap:d,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),M=new De({color:5978654,metalness:0,roughness:.8,bumpMap:d,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),w=new De({color:13152668,metalness:.2,roughness:.05,bumpMap:d,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:ot});new De({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const O=new Le(1,32,32,0,Math.PI),P=new D(O,w),R=new D(O,b);P.scale.set(.85,.85,.8),R.scale.set(.85,.85,.8),P.position.y=-.2,R.position.y=-.2,P.rotation.y=Math.PI/2,R.rotation.y=Math.PI*1.5;const F=new _t(1,32),te=new D(F,b);te.scale.set(.85,.85,.8),te.position.set(0,-.2,0),te.rotation.y=Math.PI/2;const y=new $e;y.add(P),y.add(R),y.add(te),u.add(y);const E=new Le(.6,32,32,0,Math.PI),q=new D(E,b);q.scale.set(1,.95,.95),q.position.set(0,1,0),q.rotation.y=Math.PI*1.5;const k=new D(E,w);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI/2;const Z=new _t(.6,32),re=new D(Z,b);re.position.set(0,1,0),re.rotation.y=Math.PI/2,re.scale.set(1,.95,.95);const H=new $e;H.add(q),H.add(k),H.add(re),u.add(H);const J=new Le(.25,32,32),W=new D(J,b);W.position.set(-.45,1.35,-.1),u.add(W);const pe=new D(J,w);pe.position.set(.45,1.35,-.1),u.add(pe);const ve=new Le(.25,32,32,Math.PI/2,Math.PI),_e=new D(ve,M);_e.scale.set(1.1,.6,.8),_e.position.set(0,.84,.5),_e.rotation.y=Math.PI;const Te=new Le(.25,32,32,Math.PI/2,Math.PI),Oe=new D(Te,w);Oe.scale.set(1.1,.6,.8),Oe.position.set(0,.84,.5),Oe.rotation.y=0;const ie=new _t(.25,32),he=new D(ie,b);he.scale.set(.8,.6,.8),he.position.set(0,.84,.5),he.rotation.y=Math.PI/2;const Se=new $e;Se.add(_e),Se.add(Oe),Se.add(he),u.add(Se);const N=new gn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const le={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new De({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const se=new wn(N,le),ue=new D(se,b);ue.scale.set(.1,.1,.1),ue.rotation.z=it.degToRad(210),ue.rotation.x=it.degToRad(5),ue.rotation.y=it.degToRad(-45),ue.position.set(-.4,.9,.45);const we=new D(se,M);we.scale.set(.6,.5,.5),we.position.set(.35,0,0),we.rotation.y=Math.PI,we.rotation.x=Math.PI;const ee=new D(se,M);ee.scale.set(.2,.2,.2),ee.position.set(.5,-.1,.2),ee.rotation.y=Math.PI,ee.rotation.x=Math.PI,u.add(ee);const g=new ps(1.3,1.2,.6),T=new D(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new Zc(.15,.025,10,100);new De({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const U=new D(L,b);U.position.set(.35,.1,.1),U.rotation.z=Math.PI/2,U.rotation.x=Math.PI/8,U.rotation.y=Math.PI/14;const I=new D(L,b);I.position.set(.35,.1,.13),I.rotation.z=Math.PI/2,I.rotation.x=Math.PI/-8,I.rotation.y=Math.PI/12;const Y=new $e;Y.add(T),Y.add(U),Y.add(I),u.add(Y);const j=new Le(.35,32,32),S=new D(j,b);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),u.add(S);const v=new D(j,w);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new Sn(.2,.22,.6,32),V=new D(C,b);V.position.set(-.4,-1.05,0),u.add(V);const z=new D(C,w);z.position.set(.4,-1.05,0),u.add(z);const G=new Le(.3,32,32),de=new D(G,b);de.scale.set(1,.72,1.5),de.position.set(-.4,-1.45,.17),u.add(de);const ce=new D(G,w);ce.scale.set(1,.72,1.5),ce.position.set(.4,-1.45,.17),u.add(ce);const me=new Le(.44,32,32),Ee=new D(me,b);Ee.position.set(-.15,-.45,-.4),u.add(Ee);const fe=new D(me,w);fe.position.set(.15,-.45,-.4),u.add(fe);const xe=new Le(.18,32,32),Re=new D(xe,b);Re.position.set(0,-.35,-.8),u.add(Re),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const Me=new Nt("X",{font:Q,size:.2,depth:.05});new Fn({color:0});const ge=new D(Me,M);ge.position.set(-.3,.99,.53),ge.rotation.x=it.degToRad(-5),ge.rotation.y=it.degToRad(-15),u.add(ge);const Fe=new Nt("O",{font:Q,size:.2,depth:.05});new Fn({color:0});const ke=new D(Fe,M);ke.position.set(.14,.99,.53),ke.rotation.y=it.degToRad(12),ke.rotation.x=it.degToRad(-5),u.add(ke)}),Re.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const be=()=>{u.rotation.y,u.rotation.x},Be=()=>{s.value=!0,r.value=!1,o.value=!1},Pe=()=>{s.value=!1,r.value=!0,o.value=!1},ze=()=>{s.value=!1,r.value=!1,be()},B=Q=>{const Me=window.innerWidth/2;Q>Me?Be():Pe(),be()},ye=Q=>{clearTimeout(i),ze(),o.value=!0;const Me={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1};if(o.value){const ge=Me.x*Math.PI*.2,Fe=Me.y*Math.PI*.2;u.rotation.y=ge,u.rotation.x=Fe}i=setTimeout(()=>{o.value=!1,B(Q.clientX)},500)};window.addEventListener("mousemove",ye);const ne=Q=>{if(o.value){const Me={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1},ge=Me.x*Math.PI*.2,Fe=Me.y*Math.PI*.2;u.rotation.y=ge,u.rotation.x=Fe}};window.addEventListener("mousemove",ne),a(),Ft(()=>e.bodyPosition,Q=>{u.position.set(Q.x,Q.y,Q.z)}),Ft(()=>e.cameraPosition,Q=>{c.position.set(e.bodyPosition.x,1,Q),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(pi(),mi("div",{ref_key:"threeCanvas",ref:t,class:On(n.background?"no-bg":"three-canvas")},null,2))}}),kw=gi(Hw,[["__scopeId","data-v-f3beb116"]]),Vw=Bn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=tt(null);let i=null,s=tt(!1),r=tt(!1),o=tt(!1);return jn(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new Gi,c=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),h=new zi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new $e,f=new Wi(16777215,2);l.add(f);const p=new Vi(16777215,4);p.position.set(5,5,5),l.add(p);const _=new ki(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Hi,d=x.load("/3d-bear-arts/assets/pop6.jpg"),m=x.load("/3d-bear-arts/assets/pop7.jpg");d.wrapS=d.wrapT=Ct,m.wrapS=m.wrapT=Ct;const b=new De({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),M=new De({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ot}),w=new De({color:16766720,map:d,metalness:.3,roughness:.5}),O=new De({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ot}),P=new De({color:9055202,map:d,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new De({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ot});const R=new De({color:65535,map:d,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),F=new De({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ot}),te=new Le(1,32,32,0,Math.PI),y=new D(te,M),E=new D(te,b);y.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),y.position.y=-.2,E.position.y=-.2,y.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const q=new _t(1,32),k=new D(q,b);k.scale.set(.85,.85,.8),k.position.set(0,-.2,0),k.rotation.y=Math.PI/2;const Z=new $e;Z.add(y),Z.add(E),Z.add(k),u.add(Z);const re=new Le(.6,32,32,0,Math.PI),H=new D(re,w);H.scale.set(1,.95,.95),H.position.set(0,1,0),H.rotation.y=Math.PI*1.5;const J=new D(re,O);J.scale.set(1,.95,.95),J.position.set(0,1,0),J.rotation.y=Math.PI/2;const W=new _t(.6,32),pe=new D(W,w);pe.position.set(0,1,0),pe.rotation.y=Math.PI/2,pe.scale.set(1,.95,.95);const ve=new $e;ve.add(H),ve.add(J),ve.add(pe),u.add(ve);const _e=new Le(.25,32,32),Te=new D(_e,b);Te.position.set(-.45,1.35,-.1),u.add(Te);const Oe=new D(_e,M);Oe.position.set(.45,1.35,-.1),u.add(Oe);const ie=new Le(.25,32,32,Math.PI/2,Math.PI),he=new D(ie,w);he.scale.set(1.1,.6,.8),he.position.set(0,.84,.5),he.rotation.y=Math.PI;const Se=new Le(.25,32,32,Math.PI/2,Math.PI),N=new D(Se,O);N.scale.set(1.1,.6,.8),N.position.set(0,.84,.5),N.rotation.y=0;const le=new _t(.25,32),se=new D(le,w);se.scale.set(.8,.6,.8),se.position.set(0,.84,.5),se.rotation.y=Math.PI/2;const ue=new $e;ue.add(he),ue.add(N),ue.add(se),u.add(ue);const we=new gn;we.moveTo(0,0),we.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),we.bezierCurveTo(-.6,.3,0,.6,0,1),we.bezierCurveTo(0,.6,.6,.3,.6,0),we.bezierCurveTo(.6,-.3,0,-.3,0,0);const ee={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new wn(we,ee),T=new D(g,w);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new D(g,R);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const U=new D(g,b);U.scale.set(.25,.25,.27),U.position.set(.4,.3,-.2),U.rotation.y=Math.PI,U.rotation.x=Math.PI,u.add(U);const I=new Le(.35,32,32),Y=new D(I,R);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),u.add(Y);const j=new D(I,F);j.scale.set(.75,1.25,.65),j.position.set(.7,-.15,.2),u.add(j);const S=new Sn(.2,.22,.6,32),v=new D(S,w);v.position.set(-.4,-1.05,0),u.add(v);const C=new D(S,O);C.position.set(.4,-1.05,0),u.add(C);const V=new Le(.3,32,32),z=new D(V,w);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),u.add(z);const G=new D(V,O);G.scale.set(1,.72,1.5),G.position.set(.4,-1.45,.17),u.add(G);const de=new Le(.44,32,32),ce=new D(de,b);ce.position.set(-.15,-.45,-.4),u.add(ce);const me=new D(de,M);me.position.set(.15,-.45,-.4),u.add(me);const Ee=new Le(.18,32,32),fe=new D(Ee,b);fe.position.set(0,-.35,-.8),u.add(fe),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ye){const ne=new Nt("X",{font:ye,size:.2,depth:.05});new Fn({color:0});const Q=new D(ne,b);Q.position.set(-.3,.99,.53),Q.rotation.x=it.degToRad(-5),Q.rotation.y=it.degToRad(-15),u.add(Q);const Me=new Nt("O",{font:ye,size:.2,depth:.05});new Fn({color:0});const ge=new D(Me,R);ge.position.set(.14,.99,.53),ge.rotation.y=it.degToRad(12),ge.rotation.x=it.degToRad(-5),u.add(ge);const Fe=new Nt("POP",{font:ye,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),ke=new De({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new De({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const qe=new De({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Ve=new De({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),nt=new D(Fe,ke);nt.scale.set(.15,.15,.15),nt.position.set(.03,1.16,.1),nt.rotateZ(-25),u.add(nt);const rt=new D(Fe,P);rt.scale.set(.14,.14,.14),rt.rotateZ(45),rt.position.set(.2,-.7,.3),u.add(rt);const wt=new D(Fe,qe);wt.scale.set(.14,.14,.14),wt.rotateZ(45),wt.rotateY(45),wt.position.set(.3,.7,.3),u.add(wt);const Et=new D(Fe,qe);Et.scale.set(.15,.15,.15),Et.rotateZ(45),Et.rotateY(45),Et.position.set(.35,-1.5,.3),u.add(Et);const Mt=new D(Fe,Ve);Mt.scale.set(.17,.17,.17),Mt.rotateZ(45),Mt.rotateY(15),Mt.position.set(.35,1,.3),u.add(Mt)}),fe.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const Re=()=>{u.rotation.y,u.rotation.x},Ce=()=>{s.value=!0,r.value=!1,o.value=!1},be=()=>{s.value=!1,r.value=!0,o.value=!1},Be=()=>{s.value=!1,r.value=!1,Re()},Pe=ye=>{const ne=window.innerWidth/2;ye>ne?Ce():be(),Re()},ze=ye=>{clearTimeout(i),Be(),o.value=!0;const ne={x:ye.clientX/window.innerWidth*2-1,y:-(ye.clientY/window.innerHeight)*2+1};if(o.value){const Q=ne.x*Math.PI*.2,Me=ne.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=Me}i=setTimeout(()=>{o.value=!1,Pe(ye.clientX)},500)};window.addEventListener("mousemove",ze);const B=ye=>{if(o.value){const ne={x:ye.clientX/window.innerWidth*2-1,y:-(ye.clientY/window.innerHeight)*2+1},Q=ne.x*Math.PI*.2,Me=ne.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=Me}};window.addEventListener("mousemove",B),a(),Ft(()=>e.bodyPosition,ye=>{u.position.set(ye.x,ye.y,ye.z)}),Ft(()=>e.cameraPosition,ye=>{c.position.set(e.bodyPosition.x,1,ye),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(pi(),mi("div",{ref_key:"threeCanvas",ref:t,class:On(n.background?"no-bg":"three-canvas")},null,2))}}),Ww=gi(Vw,[["__scopeId","data-v-8cfea564"]]),Xw={class:"pixel-controls"},qw={class:"side-buttons"},Yw=Bn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=tt(null);let i=tt(!1),s=tt(!1),r=tt(!1),o=tt(!1);jn(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03);const Q=ye.getElapsedTime();B.forEach((Me,ge)=>{const Fe=.2+Math.sin(Q*3+ne[ge])*.1;Me.scale.set(Fe,Fe,Fe)}),x.render(p,_)};const p=new Gi,_=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),x=new zi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new $e,m=new $e;p.add(m);const b=new Wi(16777215,2);p.add(b);const M=new Vi(16777215,4);M.position.set(5,5,5),p.add(M);const w=new ki(16777215,5,50);w.position.set(0,2,4),p.add(w);const O=new Hi,P=O.load("/3d-bear-arts/assets/pop6.jpg"),R=O.load("/3d-bear-arts/assets/pop7.jpg");P.wrapS=P.wrapT=Ct,R.wrapS=R.wrapT=Ct,R.repeat.set(2,2);const F=new De({color:16738740,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),te=new De({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ot}),y=new De({color:16766720,map:P,metalness:.3,roughness:.5}),E=new De({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ot}),q=new De({color:9055202,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new De({color:65535,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new De({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ot}),re=new Le(1,32,32,0,Math.PI),H=new D(re,te),J=new D(re,F);H.scale.set(.85,.85,.8),J.scale.set(.85,.85,.8),H.position.y=-.2,J.position.y=-.2,H.rotation.y=Math.PI/2,J.rotation.y=Math.PI*1.5;const W=new _t(1,32),pe=new D(W,F);pe.scale.set(.85,.85,.8),pe.position.set(0,-.2,0),pe.rotation.y=Math.PI/2;const ve=new $e;ve.add(H),ve.add(J),ve.add(pe),d.add(ve);const _e=new Le(.6,32,32,0,Math.PI),Te=new D(_e,y);Te.scale.set(1,.95,.95),Te.position.set(0,1,0),Te.rotation.y=Math.PI*1.5;const Oe=new D(_e,E);Oe.scale.set(1,.95,.95),Oe.position.set(0,1,0),Oe.rotation.y=Math.PI/2;const ie=new _t(.6,32),he=new D(ie,y);he.position.set(0,1,0),he.rotation.y=Math.PI/2,he.scale.set(1,.95,.95);const Se=new $e;Se.add(Te),Se.add(Oe),Se.add(he),d.add(Se);const N=new Le(.25,32,32),le=new D(N,F);le.position.set(-.45,1.35,-.1),d.add(le);const se=new D(N,te);se.position.set(.45,1.35,-.1),d.add(se);const ue=new Le(.25,32,32,Math.PI/2,Math.PI),we=new D(ue,y);we.scale.set(1.1,.6,.8),we.position.set(0,.84,.5),we.rotation.y=Math.PI;const ee=new Le(.25,32,32,Math.PI/2,Math.PI),g=new D(ee,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new _t(.25,32),L=new D(T,y);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const U=new $e;U.add(we),U.add(g),U.add(L),d.add(U);const I=new gn;I.moveTo(0,0),I.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),I.bezierCurveTo(-.6,.3,0,.6,0,1),I.bezierCurveTo(0,.6,.6,.3,.6,0),I.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},j=new wn(I,Y),S=new D(j,y);S.scale.set(.5,.5,.5),S.position.set(.3,0,0),S.rotation.y=Math.PI,S.rotation.x=Math.PI,d.add(S);const v=new D(j,k);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,d.add(v);const C=new D(j,F);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,d.add(C);const V=new Le(.35,32,32),z=new D(V,k);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),d.add(z);const G=new D(V,Z);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),d.add(G);const de=new Sn(.2,.22,.6,32),ce=new D(de,y);ce.position.set(-.4,-1.05,0),d.add(ce);const me=new D(de,E);me.position.set(.4,-1.05,0),d.add(me);const Ee=new Le(.3,32,32),fe=new D(Ee,y);fe.scale.set(1,.72,1.5),fe.position.set(-.4,-1.45,.17),d.add(fe);const xe=new D(Ee,E);xe.scale.set(1,.72,1.5),xe.position.set(.4,-1.45,.17),d.add(xe);const Re=new Le(.44,32,32),Ce=new D(Re,F);Ce.position.set(-.15,-.45,-.4),d.add(Ce);const be=new D(Re,te);be.position.set(.15,-.45,-.4),d.add(be);const Be=new Le(.18,32,32),Pe=new D(Be,F);Pe.position.set(0,-.35,-.8),d.add(Pe),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const Me=new Nt("X",{font:Q,size:.2,depth:.05}),ge=new D(Me,F);ge.position.set(-.3,.99,.53),ge.rotation.x=it.degToRad(-5),ge.rotation.y=it.degToRad(-15),d.add(ge);const Fe=new Nt("O",{font:Q,size:.2,depth:.05}),ke=new D(Fe,k);ke.position.set(.14,.99,.53),ke.rotation.y=it.degToRad(12),ke.rotation.x=it.degToRad(-5),d.add(ke);const qe=new Nt("POP",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Nt("🐻",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Ve=new Nt("BAO      BEAR",{font:Q,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),nt=new De({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new De({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const rt=new De({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),wt=new De({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),Et=new D(qe,nt);Et.scale.set(.15,.15,.15),Et.position.set(.02,1.16,.1),Et.rotateZ(-25),d.add(Et);const Mt=new D(qe,q);Mt.scale.set(.14,.14,.14),Mt.rotateZ(45),Mt.position.set(.2,-.7,.3),d.add(Mt);const It=new D(qe,rt);It.scale.set(.14,.14,.14),It.rotateZ(45),It.rotateY(45),It.position.set(.3,.7,.3),d.add(It);const vt=new D(qe,rt);vt.scale.set(.15,.15,.15),vt.rotateZ(45),vt.rotateY(45),vt.position.set(.35,-1.5,.3),d.add(vt);const Vt=new D(qe,wt);Vt.scale.set(.17,.17,.17),Vt.rotateZ(45),Vt.rotateY(15),Vt.position.set(.35,1,.3),d.add(Vt);const bt=new D(Ve,nt);bt.scale.set(.7,.7,.7),bt.position.set(-6,0,-3),m.add(bt)}),Pe.renderOrder=1,d.scale.set(1.4,1.4,1.4),p.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,d.rotation.x=.1;const B=[S,v,C],ye=new Qd,ne=[0,Math.PI/2,Math.PI,0,Math.PI/3];f(),Ft(()=>e.bodyPosition,Q=>{d.position.set(Q.x,Q.y,Q.z)}),Ft(()=>e.cameraPosition,Q=>{_.position.set(e.bodyPosition.x,1,Q),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,p)=>(pi(),mi(rn,null,[Ke("div",{ref_key:"threeCanvas",ref:t,class:On(n.background?"no-bg":"three-canvas")},null,2),Ke("div",Xw,[Ke("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ke("div",qw,[Ke("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ke("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ke("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),$w=gi(Yw,[["__scopeId","data-v-cb52c927"]]),jw={class:"pixel-controls"},Kw={class:"side-buttons"},Zw=Bn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=tt(null);let i=tt(!1),s=tt(!1),r=tt(!1),o=tt(!1);jn(()=>{if(t.value){let f=function(rt,wt){const Et=new Sn(ze,ze,B,32);Et.rotateX(Math.PI/2);const Mt=new D(Et,rt),It=new $e;for(let Vt=0;Vt<ye;Vt++){const bt=Vt/ye*Math.PI*2,_n=new ps(ne,Q,Me),qt=new D(_n,rt);qt.position.set((ze+Me/26)*Math.cos(bt),(ze+Me/26)*Math.sin(bt),0),qt.rotation.z=bt,It.add(qt)}const vt=new $e;return vt.add(Mt),vt.add(It),vt.position.set(wt.x,wt.y,wt.z),vt},p=function(){requestAnimationFrame(p),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),ge.rotation.z-=.02,Fe.rotation.z+=.03,ke.rotation.z+=.02,qe.rotation.z+=.02,Ve.rotation.z-=.03,nt.rotation.y+=.04,d.render(_,x)};const _=new Gi,x=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),d=new zi({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(d.domElement);const m=new $e,b=new $e;_.add(b);const M=new Wi(16777215,2);_.add(M);const w=new Vi(16777215,4);w.position.set(5,5,5),_.add(w);const O=new ki(16777215,5,50);O.position.set(0,2,4),_.add(O);const P=new Hi,R=P.load("/3d-bear-arts/assets/metal.jpg"),F=P.load("/3d-bear-arts/assets/pop7.jpg"),te=P.load("/3d-bear-arts/assets/gear.jpg");R.wrapS=R.wrapT=Ct,F.wrapS=F.wrapT=Ct,F.repeat.set(2,2);const y=new De({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:R});te.mapping=Nr;const E=new De({color:"#d3d3d3",metalness:1,roughness:.25,map:R,envMap:te,clearcoat:.7,clearcoatRoughness:.3}),q=new De({color:"#C0C0C0",metalness:1,roughness:.25,envMap:te,clearcoat:.7,clearcoatRoughness:.3}),k=new De({color:"#C0C0C0",metalness:1,roughness:.25,map:R,envMap:te,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),Z=new De({color:"#C0C0C0",metalness:1,roughness:.5,map:R,envMap:te,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),re=new De({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:ot});new De({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const H=new De({color:"#d3d3d3",metalness:1,roughness:.2,map:te,envMap:te,clearcoat:.7,clearcoatRoughness:.3});new De({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:te}),new De({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:R,transparent:!0,opacity:.3});const J=new Le(1,32,32,0,Math.PI),W=new D(J,Z),pe=new D(J,E);W.scale.set(.85,.85,.8),pe.scale.set(.85,.85,.8),W.position.y=-.2,pe.position.y=-.2,W.rotation.y=Math.PI/2,pe.rotation.y=Math.PI*1.5;const ve=new _t(1,32),_e=new D(ve,k);_e.scale.set(.85,.85,.8),_e.position.set(0,-.2,0),_e.rotation.y=Math.PI/2;const Te=new $e;Te.add(W),Te.add(pe),Te.add(_e),m.add(Te);const Oe=new Le(.6,32,32,0,Math.PI),ie=new D(Oe,E);ie.scale.set(1,.95,.95),ie.position.set(0,1,0),ie.rotation.y=Math.PI*1.5;const he=new D(Oe,Z);he.scale.set(1,.95,.95),he.position.set(0,1,0),he.rotation.y=Math.PI/2;const Se=new _t(.6,32),N=new D(Se,k);N.position.set(0,1,0),N.rotation.y=Math.PI/2,N.scale.set(1,.95,.95);const le=new $e;le.add(ie),le.add(he),le.add(N),m.add(le);const se=new Le(.25,32,32),ue=new D(se,E);ue.position.set(-.45,1.35,-.1),m.add(ue);const we=new D(se,k);we.position.set(.45,1.35,-.1),m.add(we);const ee=new Le(.25,32,32,Math.PI/2,Math.PI),g=new D(ee,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new Le(.25,32,32,Math.PI/2,Math.PI),L=new D(T,k);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const U=new _t(.25,32),I=new D(U,re);I.scale.set(.8,.6,.8),I.position.set(0,.84,.5),I.rotation.y=Math.PI/2;const Y=new $e;Y.add(g),Y.add(L),Y.add(I),m.add(Y);const j=new gn;j.moveTo(0,0),j.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),j.bezierCurveTo(-.6,.3,0,.6,0,1),j.bezierCurveTo(0,.6,.6,.3,.6,0),j.bezierCurveTo(.6,-.3,0,-.3,0,0);const S={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new wn(j,S),C=new Le(.35,32,32),V=new D(C,E);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),m.add(V);const z=new D(C,k);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const G=new Sn(.2,.22,.6,32),de=new D(G,E);de.position.set(-.4,-1.05,0),m.add(de);const ce=new D(G,k);ce.position.set(.4,-1.05,0),m.add(ce);const me=new Le(.3,32,32),Ee=new D(me,E);Ee.scale.set(1,.72,1.5),Ee.position.set(-.4,-1.45,.17),m.add(Ee);const fe=new D(me,k);fe.scale.set(1,.72,1.5),fe.position.set(.4,-1.45,.17),m.add(fe);const xe=new Le(.44,32,32),Re=new D(xe,E);Re.position.set(-.15,-.45,-.4),m.add(Re);const Ce=new D(xe,Z);Ce.position.set(.15,-.45,-.4),m.add(Ce);const be=new Le(.18,32,32),Be=new D(be,E);Be.position.set(0,-.35,-.8),m.add(Be),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(rt){const wt=new Nt("X",{font:rt,size:.2,depth:.05});new Fn({color:0});const Et=new D(wt,y);Et.position.set(-.3,.99,.53),Et.rotation.x=it.degToRad(-5),Et.rotation.y=it.degToRad(-15),m.add(Et);const Mt=new Nt("O",{font:rt,size:.2,depth:.05});new Fn({color:0});const It=new D(Mt,y);It.position.set(.14,.99,.53),It.rotation.y=it.degToRad(12),It.rotation.x=it.degToRad(-5),m.add(It)}),Be.renderOrder=1;const ze=1.2,B=.5,ye=8,ne=.7,Q=.3,Me=.5,ge=f(H,{x:-2,y:0,z:0}),Fe=f(H,{x:0,y:0,z:0}),ke=f(H,{x:2,y:0,z:0}),qe=f(H,{x:2,y:0,z:0}),Ve=f(H,{x:2,y:-2,z:0}),nt=new D(v,q);nt.scale.set(.3,.3,.3),nt.position.set(.25,1.1,0),nt.rotation.y=Math.PI,nt.rotation.x=Math.PI,m.add(nt),ge.position.set(.35,0,0),Fe.position.set(.25,-.3,.4),ke.position.set(.3,.3,-.2),qe.position.set(.25,.17,.4),Ve.position.set(.5,-.3,.45),ge.scale.set(.2,.2,.2),Fe.scale.set(.18,.18,.18),ke.scale.set(.15,.15,.15),qe.scale.set(.17,.17,.17),Ve.scale.set(.15,.15,.15),Fe.rotation.z=Math.PI/4,ke.rotation.z=-Math.PI/4,qe.rotation.y=-Math.PI/2,Ve.rotation.y=-Math.PI/2,m.add(ge),m.add(Fe),m.add(ke),m.add(qe),m.add(Ve),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),x.position.set(e.bodyPosition.x,1,e.cameraPosition),x.lookAt(e.bodyPosition.x,0,0),x.position.z=4,p(),Ft(()=>e.bodyPosition,rt=>{m.position.set(rt.x,rt.y,rt.z)}),Ft(()=>e.cameraPosition,rt=>{x.position.set(e.bodyPosition.x,1,rt),x.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,p)=>(pi(),mi(rn,null,[Ke("div",{ref_key:"threeCanvas",ref:t,class:On(n.background?"no-bg":"three-canvas")},null,2),Ke("div",jw,[Ke("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ke("div",Kw,[Ke("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ke("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ke("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),Jw=gi(Zw,[["__scopeId","data-v-9a57b6d8"]]),Qw={class:"pixel-controls"},eE={class:"side-buttons"},tE=Bn({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=tt(null);let i=tt(!1),s=tt(!1),r=tt(!1),o=tt(!1);jn(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03),x.render(p,_)};const p=new Gi,_=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),x=new zi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new $e,m=new $e;p.add(m);const b=new Wi(16777215,2);p.add(b);const M=new Vi(16777215,4);M.position.set(5,5,5),p.add(M);const w=new ki(16777215,5,50);w.position.set(0,2,4),p.add(w);const O=new Hi,P=O.load("/3d-bear-arts/assets/sun.jpg"),R=O.load("/3d-bear-arts/assets/gear.jpg"),F=O.load("/3d-bear-arts/assets/underwater.jpg"),te=O.load("/3d-bear-arts/assets/beach.jpg");F.wrapS=F.wrapT=Ct,te.wrapS=te.wrapT=Ct,te.repeat.set(.8,1),R.mapping=Nr,P.wrapS=P.wrapT=Ct;const y=new De({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:te,envMapIntensity:.8,side:ot,transparent:!0,opacity:.9}),E=new De({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:te,envMapIntensity:.6,side:ot,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new De({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:te,side:ot,transparent:!0,opacity:.9});const q=new De({color:8374441,metalness:1,roughness:.25,envMap:R,clearcoat:.7,clearcoatRoughness:.3}),k=new De({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:ot}),Z=new De({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:te,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),re=new De({color:"#a4d0f5",metalness:0,roughness:.8,map:P,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),H=new De({color:"#a4d0f5",metalness:0,roughness:.85,map:te,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),J=new Le(1,32,32,0,Math.PI),W=new D(J,k),pe=new D(J,E);W.scale.set(.85,.85,.8),pe.scale.set(.85,.85,.8),W.position.y=-.2,pe.position.y=-.2,W.rotation.y=Math.PI/2,pe.rotation.y=Math.PI*1.5;const ve=new _t(1,32),_e=new D(ve,H);_e.scale.set(.85,.85,.8),_e.position.set(0,-.2,0),_e.rotation.y=Math.PI/2;const Te=new $e;Te.add(W),Te.add(pe),Te.add(_e);const Oe=new Le(.6,32,32,0,Math.PI*2,0,Math.PI/2),ie=new De({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),he=new D(Oe,ie);he.position.set(0,-.2,0),he.rotation.x=Math.PI,he.scale.set(1.25,1.25,1.25),Te.add(he);const Se=new De({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ot,transparent:!0,opacity:.7,depthWrite:!1}),N=new D(ve,Se);N.scale.set(.7,.7,.7),N.position.set(0,-.3,0),N.rotation.x=Math.PI/2,N.renderOrder=1,Te.add(N),d.add(Te);const le=new Le(.6,32,32,0,Math.PI),se=new D(le,y);se.scale.set(1,.95,.95),se.position.set(0,1,0),se.rotation.y=Math.PI*1.5;const ue=new D(le,Z);ue.scale.set(1,.95,.95),ue.position.set(0,1,0),ue.rotation.y=Math.PI/2;const we=new _t(.6,32),ee=new D(we,re);ee.position.set(0,1,0),ee.rotation.y=Math.PI/2,ee.scale.set(1,.95,.95);const g=new $e;g.add(se),g.add(ue),g.add(ee),d.add(g);const T=new Le(.25,32,32),L=new D(T,y);L.position.set(-.45,1.35,-.1),d.add(L);const U=new D(T,Z);U.position.set(.45,1.35,-.1),d.add(U);const I=new Le(.25,32,32,Math.PI/2,Math.PI),Y=new D(I,y);Y.scale.set(1.1,.6,.8),Y.position.set(0,.84,.5),Y.rotation.y=Math.PI;const j=new Le(.25,32,32,Math.PI/2,Math.PI),S=new D(j,Z);S.scale.set(1.1,.6,.8),S.position.set(0,.84,.5),S.rotation.y=0;const v=new _t(.25,32),C=new D(v,re);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const V=new $e;V.add(Y),V.add(S),V.add(C),d.add(V);const z=new gn;z.moveTo(0,0),z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),z.bezierCurveTo(-.6,.3,0,.6,0,1),z.bezierCurveTo(0,.6,.6,.3,.6,0),z.bezierCurveTo(.6,-.3,0,-.3,0,0);const G={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},de=new wn(z,G),ce=new Le(.35,32,32),me=new D(ce,y);me.scale.set(.75,1.25,.65),me.position.set(-.7,-.15,.2),d.add(me);const Ee=new D(ce,Z);Ee.scale.set(.75,1.25,.65),Ee.position.set(.7,-.15,.2),d.add(Ee);const fe=new Sn(.2,.22,.6,32),xe=new D(fe,y);xe.position.set(-.4,-1.05,0),d.add(xe);const Re=new D(fe,Z);Re.position.set(.4,-1.05,0),d.add(Re);const Ce=new Le(.3,32,32),be=new D(Ce,y);be.scale.set(1,.72,1.5),be.position.set(-.4,-1.45,.17),d.add(be);const Be=new D(Ce,Z);Be.scale.set(1,.72,1.5),Be.position.set(.4,-1.45,.17),d.add(Be);const Pe=new Le(.44,32,32),ze=new D(Pe,y);ze.position.set(-.15,-.45,-.4),d.add(ze);const B=new D(Pe,Z);B.position.set(.15,-.45,-.4),d.add(B);const ye=new Le(.18,32,32),ne=new D(ye,E);ne.position.set(0,-.35,-.8),d.add(ne),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ge){const Fe=new Nt("X",{font:ge,size:.2,depth:.05});new Fn({color:0});const ke=new D(Fe,y);ke.position.set(-.3,.99,.53),ke.rotation.x=it.degToRad(-5),ke.rotation.y=it.degToRad(-15),d.add(ke);const qe=new Nt("O",{font:ge,size:.2,depth:.05});new Fn({color:0});const Ve=new D(qe,E);Ve.position.set(.14,.99,.53),Ve.rotation.y=it.degToRad(12),Ve.rotation.x=it.degToRad(-5),d.add(Ve)}),ne.renderOrder=1,d.rotation.x=.1;const Me=new D(de,q);Me.scale.set(.3,.3,.3),Me.position.set(.25,1.1,0),Me.rotation.y=Math.PI,Me.rotation.x=Math.PI,d.add(Me),d.scale.set(1.4,1.4,1.4),p.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,f(),Ft(()=>e.bodyPosition,ge=>{d.position.set(ge.x,ge.y,ge.z)}),Ft(()=>e.cameraPosition,ge=>{_.position.set(e.bodyPosition.x,1,ge),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,p)=>(pi(),mi(rn,null,[Ke("div",{ref_key:"threeCanvas",ref:t,class:On(n.background?"no-bg":"three-canvas")},null,2),Ke("div",Qw,[Ke("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ke("div",eE,[Ke("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ke("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ke("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),nE=gi(tE,[["__scopeId","data-v-08c607ba"]]),iE={class:"pixel-controls"},sE={class:"side-buttons"},rE=Bn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=tt(null);let i=tt(!1),s=tt(!1),r=tt(!1),o=tt(!1);jn(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03),we.uniforms.u_time.value+=.25,ce.rotation.y+=.04,x.render(p,_)};const p=new Gi,_=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),x=new zi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new $e,m=new $e;p.add(m);const b=new Wi(16777215,2);p.add(b);const M=new Vi(16777215,4);M.position.set(5,5,5),p.add(M);const w=new ki(16777215,5,50);w.position.set(0,2,4),p.add(w);const O=new Hi,P=O.load("/3d-bear-arts/assets/beach.jpg");P.repeat.set(.8,1);const R=O.load("/3d-bear-arts/assets/sun.jpg");P.wrapS=P.wrapT=Ct,P.repeat.set(.8,1),R.wrapS=R.wrapT=Ct;const F=new De({color:11592447,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new De({color:11592447,map:P,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ot,depthWrite:!1,depthTest:!0});const te=new De({color:11592447,map:P,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:ot,ior:1.33,depthWrite:!1,depthTest:!0}),y=new De({color:11592447,map:P,metalness:.1,roughness:.6,transparent:!0,opacity:.85,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),E=new De({color:11592447,map:P,metalness:.1,roughness:.6,transparent:!0,opacity:.85,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:ot}),q=new De({color:11592447,map:P,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:ot,ior:1.33});new De({color:11592447,map:P,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.7,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1});const k=new De({color:11592447,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Le(1,32,32,0,Math.PI),re=new D(Z,E),H=new D(Z,te);re.scale.set(.85,.85,.8),H.scale.set(.85,.85,.8),re.position.y=-.2,H.position.y=-.2,re.rotation.y=Math.PI/2,H.rotation.y=Math.PI*1.5;const J=new _t(1,32),W=new D(J,F);W.scale.set(.85,.85,.8),W.position.set(0,-.2,0),W.rotation.y=Math.PI/2;const pe=new $e;pe.add(re),pe.add(H),pe.add(W),d.add(pe);const ve=new Le(.6,32,32,0,Math.PI),_e=new D(ve,F);_e.scale.set(1,.95,.95),_e.position.set(0,1,0),_e.rotation.y=Math.PI*1.5;const Te=new D(ve,y);Te.scale.set(1,.95,.95),Te.position.set(0,1,0),Te.rotation.y=Math.PI/2;const Oe=new _t(.6,32),ie=new D(Oe,F);ie.position.set(0,1,0),ie.rotation.y=Math.PI/2,ie.scale.set(1,.95,.95);const he=new $e;he.add(_e),he.add(Te),he.add(ie),d.add(he);const Se=new Le(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new De({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),le=new D(Se,N);le.position.set(0,-.2,0),le.rotation.x=Math.PI,le.scale.set(1.25,1.25,1.25),pe.add(le);const se=new De({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ot,transparent:!0,opacity:.7,depthWrite:!1}),ue=new D(J,se);ue.scale.set(.7,.7,.7),ue.position.set(0,-.3,0),ue.rotation.x=Math.PI/2,ue.renderOrder=1,pe.add(ue),d.add(pe);const we=new $n({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:1.2}},vertexShader:`
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
            `}),ee=new D(J,we);ee.position.set(0,-.3,0),ee.scale.set(.7,.7,.7),ee.rotation.x=-Math.PI/2,ee.renderOrder=1,pe.add(ee);const g=new Le(.25,32,32),T=new D(g,q);T.position.set(-.45,1.35,-.1),d.add(T);const L=new D(g,y);L.position.set(.45,1.35,-.1),d.add(L);const U=new Le(.25,32,32,Math.PI/2,Math.PI),I=new D(U,q);I.scale.set(1.1,.6,.8),I.position.set(0,.84,.5),I.rotation.y=Math.PI;const Y=new Le(.25,32,32,Math.PI/2,Math.PI),j=new D(Y,te);j.scale.set(1.1,.6,.8),j.position.set(0,.84,.5),j.rotation.y=0;const S=new _t(.25,32),v=new D(S,te);v.scale.set(.8,.6,.8),v.position.set(0,.84,.5),v.rotation.y=Math.PI/2;const C=new $e;C.add(I),C.add(j),C.add(v),d.add(C);const V=new De({color:8374441,metalness:1,roughness:.25,envMap:R,clearcoat:.7,clearcoatRoughness:.3}),z=new gn;z.moveTo(0,0),z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),z.bezierCurveTo(-.6,.3,0,.6,0,1),z.bezierCurveTo(0,.6,.6,.3,.6,0),z.bezierCurveTo(.6,-.3,0,-.3,0,0);const G={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},de=new wn(z,G),ce=new D(de,V);ce.scale.set(.3,.3,.3),ce.position.set(.25,1.1,0),ce.rotation.y=Math.PI,ce.rotation.x=Math.PI,d.add(ce);const me=new Le(.35,32,32),Ee=new D(me,te);Ee.scale.set(.75,1.25,.65),Ee.position.set(-.7,-.15,.2),d.add(Ee);const fe=new D(me,te);fe.scale.set(.75,1.25,.65),fe.position.set(.7,-.15,.2),d.add(fe);const xe=new Sn(.2,.22,.6,32),Re=new D(xe,q);Re.position.set(-.4,-1.05,0),d.add(Re);const Ce=new D(xe,q);Ce.position.set(.4,-1.05,0),d.add(Ce);const be=new Le(.3,32,32),Be=new D(be,q);Be.scale.set(1,.72,1.5),Be.position.set(-.4,-1.45,.17),d.add(Be);const Pe=new D(be,q);Pe.scale.set(1,.72,1.5),Pe.position.set(.4,-1.45,.17),d.add(Pe);const ze=new Le(.44,32,32),B=new D(ze,q);B.position.set(-.15,-.45,-.4),d.add(B);const ye=new D(ze,y);ye.position.set(.15,-.45,-.4),d.add(ye);const ne=new Le(.18,32,32),Q=new D(ne,q);Q.position.set(0,-.35,-.8),d.add(Q),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ge){const Fe=new Nt("X",{font:ge,size:.2,depth:.05}),ke=new D(Fe,k);ke.position.set(-.3,.99,.53),ke.rotation.x=it.degToRad(-5),ke.rotation.y=it.degToRad(-15),d.add(ke);const qe=new Nt("O",{font:ge,size:.2,depth:.05}),Ve=new D(qe,k);Ve.position.set(.14,.99,.53),Ve.rotation.y=it.degToRad(12),Ve.rotation.x=it.degToRad(-5),d.add(Ve)}),d.scale.set(1.4,1.4,1.4),p.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,d.rotation.x=.1,f(),Ft(()=>e.bodyPosition,ge=>{d.position.set(ge.x,ge.y,ge.z)}),Ft(()=>e.cameraPosition,ge=>{_.position.set(e.bodyPosition.x,1,ge),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,p)=>(pi(),mi(rn,null,[Ke("div",{ref_key:"threeCanvas",ref:t,class:On(n.background?"no-bg":"three-canvas")},null,2),Ke("div",iE,[Ke("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ke("div",sE,[Ke("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ke("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ke("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),oE=gi(rE,[["__scopeId","data-v-fa97f0a2"]]),aE={class:"pixel-controls"},lE={class:"side-buttons"},cE=Bn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=tt(null);let i=tt(!1),s=tt(!1),r=tt(!1),o=tt(!1);jn(()=>{if(t.value){let f=function(vt,Vt){const bt=new $e,_n=new Le(1,32,32),qt=new D(_n,re);qt.scale.set(1,.8,1),bt.add(qt);const jr=new Sn(.1,.1,.5,16),Kr=new Zd({color:9127187}),Zr=new D(jr,Kr);return Zr.position.set(0,.9,0),bt.add(Zr),bt},p=function(){requestAnimationFrame(p),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),ze.rotation.z-=.04,B.rotation.z+=.04,ye.rotation.z+=.03,ne.rotation.z+=.03,v.rotation.y+=.04,It+=Et,m.position.y=e.bodyPosition.y+Math.sin(It)*Mt;const vt=rt.getElapsedTime();nt.forEach((Vt,bt)=>{const _n=.1+Math.sin(vt*3+wt[bt])*.1;Vt.scale.set(_n,_n,_n)}),d.render(_,x)};const _=new Gi,x=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),d=new zi({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(d.domElement);const m=new $e,b=new $e;_.add(b);const M=new Wi(16777215,2);_.add(M);const w=new Vi(16777215,4);w.position.set(5,5,5),_.add(w);const O=new ki(16777215,5,50);O.position.set(0,2,4),_.add(O);const P=new Hi,R=P.load("/3d-bear-arts/assets/pumpkin.jpg");R.wrapS=R.wrapT=Ct,R.repeat.set(.8,.85);const F=P.load("/3d-bear-arts/assets/pumpkin.jpg");F.wrapS=F.wrapT=Ct,F.repeat.set(1,1);const te=P.load("/3d-bear-arts/assets/pumpkin.jpg");te.wrapS=F.wrapT=Ct,te.repeat.set(2,.8);const y=new De({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new $e,q=new De({color:16747520,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new De({color:16747520,map:F,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new De({color:16747520,map:te,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ot}),re=new De({color:16747520,map:te,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new De({color:16766720,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new De({color:9109504,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new De({color:4915330,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const H=new Le(1,32,32,0,Math.PI),J=new D(H,Z),W=new D(H,q);J.scale.set(.85,.85,.8),W.scale.set(.85,.85,.8),J.position.y=-.2,W.position.y=-.2,J.rotation.y=Math.PI/2,W.rotation.y=Math.PI*1.5;const pe=new _t(1,32),ve=new D(pe,k);ve.scale.set(.85,.85,.8),ve.position.set(0,-.2,0),ve.rotation.y=Math.PI/2;const _e=new $e;_e.add(J),_e.add(W),_e.add(ve),m.add(_e);const Te=new Le(.6,32,32,0,Math.PI),Oe=new D(Te,q);Oe.scale.set(1,.95,.95),Oe.position.set(0,1,0),Oe.rotation.y=Math.PI*1.5;const ie=new D(Te,Z);ie.scale.set(1,.95,.95),ie.position.set(0,1,0),ie.rotation.y=Math.PI/2;const he=new _t(.6,32),Se=new D(he,k);Se.position.set(0,1,0),Se.rotation.y=Math.PI/2,Se.scale.set(1,.95,.95);const N=new $e;N.add(Oe),N.add(ie),N.add(Se),m.add(N);const le=new Le(.25,32,32),se=new D(le,re);se.position.set(-.45,1.35,-.1),m.add(se);const ue=new D(le,Z);ue.position.set(.45,1.35,-.1),m.add(ue);const we=new Le(.25,32,32,Math.PI/2,Math.PI),ee=new D(we,q);ee.scale.set(1.1,.6,.8),ee.position.set(0,.84,.5),ee.rotation.y=Math.PI;const g=new Le(.25,32,32,Math.PI/2,Math.PI),T=new D(g,Z);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const L=new _t(.25,32),U=new D(L,q);U.scale.set(.8,.6,.8),U.position.set(0,.84,.5),U.rotation.y=Math.PI/2;const I=new $e;I.add(ee),I.add(T),I.add(U),m.add(I);const Y=new gn;Y.moveTo(0,0),Y.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Y.bezierCurveTo(-.6,.3,0,.6,0,1),Y.bezierCurveTo(0,.6,.6,.3,.6,0),Y.bezierCurveTo(.6,-.3,0,-.3,0,0);const j={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},S=new wn(Y,j),v=new D(S,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new Le(.35,32,32),V=new D(C,k);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),m.add(V);const z=new D(C,Z);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const G=new Sn(.2,.22,.6,32),de=new D(G,k);de.position.set(-.4,-1.05,0),m.add(de);const ce=new D(G,Z);ce.position.set(.4,-1.05,0),m.add(ce);const me=new Le(.3,32,32),Ee=new D(me,re);Ee.scale.set(1,.72,1.5),Ee.position.set(-.4,-1.45,.17),m.add(Ee);const fe=new D(me,Z);fe.scale.set(1,.72,1.5),fe.position.set(.4,-1.45,.17),m.add(fe);const xe=new Le(.44,32,32),Re=new D(xe,q);Re.position.set(-.15,-.45,-.4),m.add(Re);const Ce=new D(xe,Z);Ce.position.set(.15,-.45,-.4),m.add(Ce);const be=new Le(.18,32,32),Be=new D(be,re);Be.position.set(0,-.35,-.8),m.add(Be),Be.renderOrder=1,new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(vt){const Vt=new Nt("X",{font:vt,size:.2,depth:.05}),bt=new D(Vt,k);bt.position.set(-.3,.99,.53),bt.rotation.x=it.degToRad(-5),bt.rotation.y=it.degToRad(-15),m.add(bt);const _n=new Nt("O",{font:vt,size:.2,depth:.05}),qt=new D(_n,k);qt.position.set(.14,.99,.53),qt.rotation.y=it.degToRad(12),qt.rotation.x=it.degToRad(-5),m.add(qt)}),m.add(E);const ze=f(),B=f(),ye=f(),ne=f();ze.position.set(.35,-.35,-.3),B.position.set(.25,-.45,.3),ye.position.set(.3,.1,-.2),ne.position.set(.25,.18,.4),ze.scale.set(.3,.3,.3),B.scale.set(.28,.28,.28),ye.scale.set(.25,.25,.25),ne.scale.set(.23,.23,.23),B.rotation.z=Math.PI/4,ye.rotation.z=-Math.PI/4,ne.rotation.y=-Math.PI/2,m.add(ze),m.add(B),m.add(ye),m.add(ne);const Q=new gn;Q.moveTo(-.5,0),Q.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),Q.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),Q.bezierCurveTo(-.05,.6,.05,.6,.15,.4),Q.bezierCurveTo(.25,.5,.25,.85,.5,.8),Q.bezierCurveTo(1,.6,.75,.25,.5,0),Q.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const Me={depth:.1,bevelEnabled:!1},ge=new wn(Q,Me),Fe=new Fn({color:0}),ke=new D(ge,Fe);ke.scale.set(.3,.3,.3),ke.rotation.x=0,ke.rotation.z=0,ke.position.set(.26,.35,.25),m.add(ke);const qe=new D(ge,Fe);qe.scale.set(.5,.5,.5),qe.position.set(.4,-.1,.54),m.add(qe);const Ve=new D(ge,Fe);Ve.scale.set(.5,.5,.5),Ve.position.set(.32,-.35,.65),m.add(Ve),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),x.position.set(e.bodyPosition.x,1,e.cameraPosition),x.lookAt(e.bodyPosition.x,0,0),x.position.z=4;const nt=[ke,qe,Ve],rt=new Qd,wt=[0,Math.PI/2,Math.PI,0,Math.PI/3];let Et=.05,Mt=.25,It=0;p(),Ft(()=>e.bodyPosition,vt=>{m.position.set(vt.x,vt.y,vt.z)}),Ft(()=>e.cameraPosition,vt=>{x.position.set(e.bodyPosition.x,1,vt),x.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,p)=>(pi(),mi(rn,null,[Ke("div",{ref_key:"threeCanvas",ref:t,class:On(n.background?"no-bg":"three-canvas")},null,2),Ke("div",aE,[Ke("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ke("div",lE,[Ke("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ke("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ke("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),uE=gi(cE,[["__scopeId","data-v-f23eb564"]]),hE={class:"pixel-controls"},fE={class:"side-buttons"},dE=Bn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=tt(null);let i=tt(!1),s=tt(!1),r=tt(!1),o=tt(!1);jn(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03),j.rotation.y+=.03,Fe+=ne,ke+=Q,d.position.y=e.bodyPosition.y+Math.sin(Fe)*ge,j.position.y=e.bodyPosition.y+Math.sin(ke)*Me,ze.uniforms.u_time.value+=.25,x.render(p,_)};const p=new Gi,_=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),x=new zi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new $e,m=new $e;p.add(m);const b=new Wi(16777215,2);p.add(b);const M=new Vi(16777215,4);M.position.set(5,5,5),p.add(M);const w=new ki(16777215,5,50);w.position.set(0,2,4),p.add(w);const O=new Hi,P=O.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Ct,P.repeat.set(2,2);const R=O.load("/3d-bear-arts/assets/ghost.jpg");R.wrapS=R.wrapT=Ct,R.repeat.set(1,1);const F=new De({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:ot}),te=new De({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new De({color:9109504,map:P,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new De({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:ot}),q=new De({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:ot}),k=new De({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:ot}),Z=new Le(1,32,32,0,Math.PI),re=new D(Z,F),H=new D(Z,q);re.scale.set(.85,.85,.8),H.scale.set(.85,.85,.8),re.position.y=-.2,H.position.y=-.2,re.rotation.y=Math.PI/2,H.rotation.y=Math.PI*1.5;const J=new _t(1,32),W=new D(J,q);W.scale.set(.85,.85,.8),W.position.set(0,-.2,0),W.rotation.y=Math.PI/2;const pe=new $e;pe.add(re),pe.add(H),pe.add(W),d.add(pe);const ve=new Le(.6,32,32,0,Math.PI),_e=new D(ve,k);_e.scale.set(1,.95,.95),_e.position.set(0,1,0),_e.rotation.y=Math.PI*1.5;const Te=new D(ve,te);Te.scale.set(1,.95,.95),Te.position.set(0,1,0),Te.rotation.y=Math.PI/2;const Oe=new _t(.6,32),ie=new D(Oe,q);ie.position.set(0,1,0),ie.rotation.y=Math.PI/2,ie.scale.set(1,.95,.95);const he=new $e;he.add(_e),he.add(Te),he.add(ie),d.add(he);const Se=new Le(.25,32,32),N=new D(Se,k);N.position.set(-.45,1.35,-.1),d.add(N);const le=new D(Se,te);le.position.set(.45,1.35,-.1),d.add(le);const se=new Le(.25,32,32,Math.PI/2,Math.PI),ue=new D(se,k);ue.scale.set(1.1,.6,.8),ue.position.set(0,.84,.5),ue.rotation.y=Math.PI;const we=new Le(.25,32,32,Math.PI/2,Math.PI),ee=new D(we,te);ee.scale.set(1.1,.6,.8),ee.position.set(0,.84,.5),ee.rotation.y=0;const g=new _t(.25,32),T=new D(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new $e;L.add(ue),L.add(ee),L.add(T),d.add(L);const U=new gn;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const I={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Y=new wn(U,I),j=new D(Y,y);j.scale.set(.35,.35,.35),j.position.set(0,-.05,0),j.rotation.y=Math.PI,j.rotation.x=Math.PI,d.add(j);const S=new Le(.35,32,32),v=new D(S,q);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),d.add(v);const C=new D(S,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),d.add(C);const V=new Sn(.2,.22,.6,32),z=new D(V,q);z.position.set(-.4,-1.05,0),d.add(z);const G=new D(V,E);G.position.set(.4,-1.05,0),d.add(G);const de=new Le(.3,32,32),ce=new D(de,q);ce.scale.set(1,.72,1.5),ce.position.set(-.4,-1.45,.17),d.add(ce);const me=new D(de,E);me.scale.set(1,.72,1.5),me.position.set(.4,-1.45,.17),d.add(me);const Ee=new Le(.44,32,32),fe=new D(Ee,E);fe.position.set(-.15,-.45,-.4),d.add(fe);const xe=new D(Ee,E);xe.position.set(.15,-.45,-.4),d.add(xe);const Re=new Le(.18,32,32),Ce=new D(Re,q);Ce.position.set(0,-.35,-.8),d.add(Ce);const be=new Le(.6,32,32,0,Math.PI*2,0,Math.PI/2),Be=new De({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Pe=new D(be,Be);Pe.position.set(0,-.2,0),Pe.rotation.x=Math.PI,Pe.scale.set(1.25,1.25,1.25),pe.add(Pe);const ze=new $n({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),B=new D(J,ze);B.position.set(0,-.26,0),B.scale.set(.7,.7,.7),B.rotation.x=-Math.PI/2,B.renderOrder=1,pe.add(B),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(qe){const Ve=new Nt("X",{font:qe,size:.2,depth:.05}),nt=new D(Ve,q);nt.position.set(-.3,.99,.53),nt.rotation.x=it.degToRad(-5),nt.rotation.y=it.degToRad(-15),d.add(nt);const rt=new Nt("O",{font:qe,size:.2,depth:.05}),wt=new D(rt,q);wt.position.set(.14,.99,.53),wt.rotation.y=it.degToRad(12),wt.rotation.x=it.degToRad(-5),d.add(wt)}),Ce.renderOrder=1,d.rotation.x=.1,d.scale.set(1.4,1.4,1.4),p.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4;let ne=.05,Q=.06,Me=.2,ge=.25,Fe=0,ke=0;f(),Ft(()=>e.bodyPosition,qe=>{d.position.set(qe.x,qe.y,qe.z)}),Ft(()=>e.cameraPosition,qe=>{_.position.set(e.bodyPosition.x,1,qe),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,p)=>(pi(),mi(rn,null,[Ke("div",{ref_key:"threeCanvas",ref:t,class:On(n.background?"no-bg":"three-canvas")},null,2),Ke("div",hE,[Ke("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ke("div",fE,[Ke("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ke("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ke("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),pE=gi(dE,[["__scopeId","data-v-36772d2e"]]),mE=[{path:"/3d-bear-arts/leather",name:"Leather",component:kw},{path:"/3d-bear-arts/pop-art",name:"Pop",component:Ww},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:$w},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:Jw},{path:"/3d-bear-arts/water",name:"Water Bear",component:nE},{path:"/3d-bear-arts/",name:"Water",component:oE},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:uE},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:pE}],gE=Dg({history:cg(),routes:mE}),ep=A0(I0);ep.use(gE);ep.mount("#app");
