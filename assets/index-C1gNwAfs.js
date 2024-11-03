(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _c(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Mt={},ks=[],Yn=()=>{},op=()=>!1,ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vc=n=>n.startsWith("onUpdate:"),Kt=Object.assign,xc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ap=Object.prototype.hasOwnProperty,dt=(n,e)=>ap.call(n,e),et=Array.isArray,Mr=n=>na(n)==="[object Map]",lp=n=>na(n)==="[object Set]",Qe=n=>typeof n=="function",jt=n=>typeof n=="string",rr=n=>typeof n=="symbol",Ot=n=>n!==null&&typeof n=="object",nf=n=>(Ot(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),cp=Object.prototype.toString,na=n=>cp.call(n),up=n=>na(n).slice(8,-1),hp=n=>na(n)==="[object Object]",yc=n=>jt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Sr=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},fp=/-(\w)/g,bn=ia(n=>n.replace(fp,(e,t)=>t?t.toUpperCase():"")),dp=/\B([A-Z])/g,_s=ia(n=>n.replace(dp,"-$1").toLowerCase()),sa=ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ma=ia(n=>n?`on${sa(n)}`:""),zi=(n,e)=>!Object.is(n,e),Sa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},sf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},pp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let su;const rf=()=>su||(su=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mc(n){if(et(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=jt(i)?vp(i):Mc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(jt(n)||Ot(n))return n}const mp=/;(?![^(]*\))/g,gp=/:([^]+)/,_p=/\/\*[^]*?\*\//g;function vp(n){const e={};return n.replace(_p,"").split(mp).forEach(t=>{if(t){const i=t.split(gp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zn(n){let e="";if(jt(n))e=n;else if(et(n))for(let t=0;t<n.length;t++){const i=zn(n[t]);i&&(e+=i+" ")}else if(Ot(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const xp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yp=_c(xp);function of(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vn;class Mp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vn,!e&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=vn;try{return vn=this,e()}finally{vn=t}}}on(){vn=this}off(){vn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sp(){return vn}let bt;const wa=new WeakSet;class af{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vn&&vn.active&&vn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wa.has(this)&&(wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ru(this),uf(this);const e=bt,t=Nn;bt=this,Nn=!0;try{return this.fn()}finally{hf(this),bt=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,ru(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ml(this)&&this.run()}get dirty(){return ml(this)}}let lf=0,zs;function cf(n){n.flags|=8,n.next=zs,zs=n}function Sc(){lf++}function wc(){if(--lf>0)return;let n;for(;zs;){let e=zs,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=zs,zs=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ec(i),wp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ml(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ff(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ff(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Dr))return;n.globalVersion=Dr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ml(n)){n.flags&=-3;return}const t=bt,i=Nn;bt=n,Nn=!0;try{uf(n);const s=n.fn(n._value);(e.version===0||zi(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=t,Nn=i,hf(n),n.flags&=-3}}function Ec(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ec(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function wp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const df=[];function Hi(){df.push(Nn),Nn=!1}function ki(){const n=df.pop();Nn=n===void 0?!0:n}function ru(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=bt;bt=void 0;try{e()}finally{bt=t}}}let Dr=0;class Ep{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!bt||!Nn||bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==bt)t=this.activeLink=new Ep(bt,this),bt.deps?(t.prevDep=bt.depsTail,bt.depsTail.nextDep=t,bt.depsTail=t):bt.deps=bt.depsTail=t,pf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=bt.depsTail,t.nextDep=void 0,bt.depsTail.nextDep=t,bt.depsTail=t,bt.deps===t&&(bt.deps=i)}return t}trigger(e){this.version++,Dr++,this.notify(e)}notify(e){Sc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{wc()}}}function pf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const gl=new WeakMap,fs=Symbol(""),_l=Symbol(""),Ur=Symbol("");function sn(n,e,t){if(Nn&&bt){let i=gl.get(n);i||gl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new bc),s.target=n,s.map=i,s.key=t),s.track()}}function di(n,e,t,i,s,r){const o=gl.get(n);if(!o){Dr++;return}const a=l=>{l&&l.trigger()};if(Sc(),e==="clear")o.forEach(a);else{const l=et(n),c=l&&yc(t);if(l&&t==="length"){const h=Number(i);o.forEach((u,f)=>{(f==="length"||f===Ur||!rr(f)&&f>=h)&&a(u)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(Ur)),e){case"add":l?c&&a(o.get("length")):(a(o.get(fs)),Mr(n)&&a(o.get(_l)));break;case"delete":l||(a(o.get(fs)),Mr(n)&&a(o.get(_l)));break;case"set":Mr(n)&&a(o.get(fs));break}}wc()}function Ms(n){const e=mt(n);return e===n?e:(sn(e,"iterate",Ur),Fn(n)?e:e.map(un))}function Tc(n){return sn(n=mt(n),"iterate",Ur),n}const bp={__proto__:null,[Symbol.iterator](){return Ea(this,Symbol.iterator,un)},concat(...n){return Ms(this).concat(...n.map(e=>et(e)?Ms(e):e))},entries(){return Ea(this,"entries",n=>(n[1]=un(n[1]),n))},every(n,e){return ei(this,"every",n,e,void 0,arguments)},filter(n,e){return ei(this,"filter",n,e,t=>t.map(un),arguments)},find(n,e){return ei(this,"find",n,e,un,arguments)},findIndex(n,e){return ei(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ei(this,"findLast",n,e,un,arguments)},findLastIndex(n,e){return ei(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ei(this,"forEach",n,e,void 0,arguments)},includes(...n){return ba(this,"includes",n)},indexOf(...n){return ba(this,"indexOf",n)},join(n){return Ms(this).join(n)},lastIndexOf(...n){return ba(this,"lastIndexOf",n)},map(n,e){return ei(this,"map",n,e,void 0,arguments)},pop(){return cr(this,"pop")},push(...n){return cr(this,"push",n)},reduce(n,...e){return ou(this,"reduce",n,e)},reduceRight(n,...e){return ou(this,"reduceRight",n,e)},shift(){return cr(this,"shift")},some(n,e){return ei(this,"some",n,e,void 0,arguments)},splice(...n){return cr(this,"splice",n)},toReversed(){return Ms(this).toReversed()},toSorted(n){return Ms(this).toSorted(n)},toSpliced(...n){return Ms(this).toSpliced(...n)},unshift(...n){return cr(this,"unshift",n)},values(){return Ea(this,"values",un)}};function Ea(n,e,t){const i=Tc(n),s=i[e]();return i!==n&&!Fn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Tp=Array.prototype;function ei(n,e,t,i,s,r){const o=Tc(n),a=o!==n&&!Fn(n),l=o[e];if(l!==Tp[e]){const u=l.apply(n,r);return a?un(u):u}let c=t;o!==n&&(a?c=function(u,f){return t.call(this,un(u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function ou(n,e,t,i){const s=Tc(n);let r=t;return s!==n&&(Fn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,un(a),l,n)}),s[e](r,...i)}function ba(n,e,t){const i=mt(n);sn(i,"iterate",Ur);const s=i[e](...t);return(s===-1||s===!1)&&Pc(t[0])?(t[0]=mt(t[0]),i[e](...t)):s}function cr(n,e,t=[]){Hi(),Sc();const i=mt(n)[e].apply(n,t);return wc(),ki(),i}const Ap=_c("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(rr));function Rp(n){rr(n)||(n=String(n));const e=mt(this);return sn(e,"has",n),e.hasOwnProperty(n)}class gf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Hp:yf:r?xf:vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=et(e);if(!s){let l;if(o&&(l=bp[t]))return l;if(t==="hasOwnProperty")return Rp}const a=Reflect.get(e,t,tn(e)?e:i);return(rr(t)?mf.has(t):Ap(t))||(s||sn(e,"get",t),r)?a:tn(a)?o&&yc(t)?a:a.value:Ot(a)?s?Sf(a):oa(a):a}}class _f extends gf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=ds(r);if(!Fn(i)&&!ds(i)&&(r=mt(r),i=mt(i)),!et(e)&&tn(r)&&!tn(i))return l?!1:(r.value=i,!0)}const o=et(e)&&yc(t)?Number(t)<e.length:dt(e,t),a=Reflect.set(e,t,i,tn(e)?e:s);return e===mt(s)&&(o?zi(i,r)&&di(e,"set",t,i):di(e,"add",t,i)),a}deleteProperty(e,t){const i=dt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&di(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!rr(t)||!mf.has(t))&&sn(e,"has",t),i}ownKeys(e){return sn(e,"iterate",et(e)?"length":fs),Reflect.ownKeys(e)}}class Cp extends gf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Pp=new _f,Ip=new Cp,Lp=new _f(!0);const Ac=n=>n,ra=n=>Reflect.getPrototypeOf(n);function no(n,e,t=!1,i=!1){n=n.__v_raw;const s=mt(n),r=mt(e);t||(zi(e,r)&&sn(s,"get",e),sn(s,"get",r));const{has:o}=ra(s),a=i?Ac:t?Ic:un;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function io(n,e=!1){const t=this.__v_raw,i=mt(t),s=mt(n);return e||(zi(n,s)&&sn(i,"has",n),sn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function so(n,e=!1){return n=n.__v_raw,!e&&sn(mt(n),"iterate",fs),Reflect.get(n,"size",n)}function au(n,e=!1){!e&&!Fn(n)&&!ds(n)&&(n=mt(n));const t=mt(this);return ra(t).has.call(t,n)||(t.add(n),di(t,"add",n,n)),this}function lu(n,e,t=!1){!t&&!Fn(e)&&!ds(e)&&(e=mt(e));const i=mt(this),{has:s,get:r}=ra(i);let o=s.call(i,n);o||(n=mt(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,e),o?zi(e,a)&&di(i,"set",n,e):di(i,"add",n,e),this}function cu(n){const e=mt(this),{has:t,get:i}=ra(e);let s=t.call(e,n);s||(n=mt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&di(e,"delete",n,void 0),r}function uu(){const n=mt(this),e=n.size!==0,t=n.clear();return e&&di(n,"clear",void 0,void 0),t}function ro(n,e){return function(i,s){const r=this,o=r.__v_raw,a=mt(o),l=e?Ac:n?Ic:un;return!n&&sn(a,"iterate",fs),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function oo(n,e,t){return function(...i){const s=this.__v_raw,r=mt(s),o=Mr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Ac:e?Ic:un;return!e&&sn(r,"iterate",l?_l:fs),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function wi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Dp(){const n={get(r){return no(this,r)},get size(){return so(this)},has:io,add:au,set:lu,delete:cu,clear:uu,forEach:ro(!1,!1)},e={get(r){return no(this,r,!1,!0)},get size(){return so(this)},has:io,add(r){return au.call(this,r,!0)},set(r,o){return lu.call(this,r,o,!0)},delete:cu,clear:uu,forEach:ro(!1,!0)},t={get(r){return no(this,r,!0)},get size(){return so(this,!0)},has(r){return io.call(this,r,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:ro(!0,!1)},i={get(r){return no(this,r,!0,!0)},get size(){return so(this,!0)},has(r){return io.call(this,r,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=oo(r,!1,!1),t[r]=oo(r,!0,!1),e[r]=oo(r,!1,!0),i[r]=oo(r,!0,!0)}),[n,t,e,i]}const[Up,Np,Fp,Op]=Dp();function Rc(n,e){const t=e?n?Op:Fp:n?Np:Up;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(dt(t,s)&&s in i?t:i,s,r)}const Bp={get:Rc(!1,!1)},zp={get:Rc(!1,!0)},Gp={get:Rc(!0,!1)};const vf=new WeakMap,xf=new WeakMap,yf=new WeakMap,Hp=new WeakMap;function kp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vp(n){return n.__v_skip||!Object.isExtensible(n)?0:kp(up(n))}function oa(n){return ds(n)?n:Cc(n,!1,Pp,Bp,vf)}function Mf(n){return Cc(n,!1,Lp,zp,xf)}function Sf(n){return Cc(n,!0,Ip,Gp,yf)}function Cc(n,e,t,i,s){if(!Ot(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Vp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function wr(n){return ds(n)?wr(n.__v_raw):!!(n&&n.__v_isReactive)}function ds(n){return!!(n&&n.__v_isReadonly)}function Fn(n){return!!(n&&n.__v_isShallow)}function Pc(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function Wp(n){return!dt(n,"__v_skip")&&Object.isExtensible(n)&&sf(n,"__v_skip",!0),n}const un=n=>Ot(n)?oa(n):n,Ic=n=>Ot(n)?Sf(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function Je(n){return Ef(n,!1)}function wf(n){return Ef(n,!0)}function Ef(n,e){return tn(n)?n:new Xp(n,e)}class Xp{constructor(e,t){this.dep=new bc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:un(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Fn(e)||ds(e);e=i?e:mt(e),zi(e,t)&&(this._rawValue=e,this._value=i?e:un(e),this.dep.trigger())}}function Vs(n){return tn(n)?n.value:n}const qp={get:(n,e,t)=>e==="__v_raw"?n:Vs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return tn(s)&&!tn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function bf(n){return wr(n)?n:new Proxy(n,qp)}class Yp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new bc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return cf(this),!0}get value(){const e=this.dep.track();return ff(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $p(n,e,t=!1){let i,s;return Qe(n)?i=n:(i=n.get,s=n.set),new Yp(i,s,t)}const ao={},Wo=new WeakMap;let rs;function jp(n,e=!1,t=rs){if(t){let i=Wo.get(t);i||Wo.set(t,i=[]),i.push(n)}}function Kp(n,e,t=Mt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=w=>s?w:Fn(w)||s===!1||s===0?ui(w,1):ui(w);let h,u,f,m,_=!1,x=!1;if(tn(n)?(u=()=>n.value,_=Fn(n)):wr(n)?(u=()=>c(n),_=!0):et(n)?(x=!0,_=n.some(w=>wr(w)||Fn(w)),u=()=>n.map(w=>{if(tn(w))return w.value;if(wr(w))return c(w);if(Qe(w))return l?l(w,2):w()})):Qe(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){Hi();try{f()}finally{ki()}}const w=rs;rs=h;try{return l?l(n,3,[m]):n(m)}finally{rs=w}}:u=Yn,e&&s){const w=u,O=s===!0?1/0:s;u=()=>ui(w(),O)}const d=Sp(),p=()=>{h.stop(),d&&xc(d.effects,h)};if(r&&e){const w=e;e=(...O)=>{w(...O),p()}}let b=x?new Array(n.length).fill(ao):ao;const M=w=>{if(!(!(h.flags&1)||!h.dirty&&!w))if(e){const O=h.run();if(s||_||(x?O.some((P,R)=>zi(P,b[R])):zi(O,b))){f&&f();const P=rs;rs=h;try{const R=[O,b===ao?void 0:x&&b[0]===ao?[]:b,m];l?l(e,3,R):e(...R),b=O}finally{rs=P}}}else h.run()};return a&&a(M),h=new af(u),h.scheduler=o?()=>o(M,!1):M,m=w=>jp(w,!1,h),f=h.onStop=()=>{const w=Wo.get(h);if(w){if(l)l(w,4);else for(const O of w)O();Wo.delete(h)}},e?i?M(!0):b=h.run():o?o(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function ui(n,e=1/0,t){if(e<=0||!Ot(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,tn(n))ui(n.value,e,t);else if(et(n))for(let i=0;i<n.length;i++)ui(n[i],e,t);else if(lp(n)||Mr(n))n.forEach(i=>{ui(i,e,t)});else if(hp(n)){for(const i in n)ui(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $r(n,e,t,i){try{return i?n(...i):n()}catch(s){aa(s,e,t)}}function jn(n,e,t,i){if(Qe(n)){const s=$r(n,e,t,i);return s&&nf(s)&&s.catch(r=>{aa(r,e,t)}),s}if(et(n)){const s=[];for(let r=0;r<n.length;r++)s.push(jn(n[r],e,t,i));return s}}function aa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){Hi(),$r(r,null,10,[n,l,c]),ki();return}}Zp(n,t,s,i,o)}function Zp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}let Nr=!1,vl=!1;const hn=[];let Vn=0;const Ws=[];let Di=null,Fs=0;const Tf=Promise.resolve();let Lc=null;function Af(n){const e=Lc||Tf;return n?e.then(this?n.bind(this):n):e}function Jp(n){let e=Nr?Vn+1:0,t=hn.length;for(;e<t;){const i=e+t>>>1,s=hn[i],r=Fr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Dc(n){if(!(n.flags&1)){const e=Fr(n),t=hn[hn.length-1];!t||!(n.flags&2)&&e>=Fr(t)?hn.push(n):hn.splice(Jp(e),0,n),n.flags|=1,Rf()}}function Rf(){!Nr&&!vl&&(vl=!0,Lc=Tf.then(Pf))}function Qp(n){et(n)?Ws.push(...n):Di&&n.id===-1?Di.splice(Fs+1,0,n):n.flags&1||(Ws.push(n),n.flags|=1),Rf()}function hu(n,e,t=Nr?Vn+1:0){for(;t<hn.length;t++){const i=hn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;hn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Cf(n){if(Ws.length){const e=[...new Set(Ws)].sort((t,i)=>Fr(t)-Fr(i));if(Ws.length=0,Di){Di.push(...e);return}for(Di=e,Fs=0;Fs<Di.length;Fs++){const t=Di[Fs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Di=null,Fs=0}}const Fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Pf(n){vl=!1,Nr=!0;try{for(Vn=0;Vn<hn.length;Vn++){const e=hn[Vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$r(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vn<hn.length;Vn++){const e=hn[Vn];e&&(e.flags&=-2)}Vn=0,hn.length=0,Cf(),Nr=!1,Lc=null,(hn.length||Ws.length)&&Pf()}}let xn=null,If=null;function Xo(n){const e=xn;return xn=n,If=n&&n.type.__scopeId||null,e}function Ii(n,e=xn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Mu(-1);const r=Xo(e);let o;try{o=n(...s)}finally{Xo(r),i._d&&Mu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function em(n,e){if(xn===null)return n;const t=fa(xn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Mt]=e[s];r&&(Qe(r)&&(r={mounted:r,updated:r}),r.deep&&ui(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Zi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Hi(),jn(l,t,8,[n.el,a,n,e]),ki())}}const tm=Symbol("_vte"),nm=n=>n.__isTeleport;function Uc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Uc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Gn(n,e){return Qe(n)?Kt({name:n.name},e,{setup:n}):n}function Lf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function xl(n,e,t,i,s=!1){if(et(n)){n.forEach((_,x)=>xl(_,e&&(et(e)?e[x]:e),t,i,s));return}if(Er(i)&&!s)return;const r=i.shapeFlag&4?fa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===Mt?a.refs={}:a.refs,u=a.setupState,f=mt(u),m=u===Mt?()=>!1:_=>dt(f,_);if(c!=null&&c!==l&&(jt(c)?(h[c]=null,m(c)&&(u[c]=null)):tn(c)&&(c.value=null)),Qe(l))$r(l,a,12,[o,h]);else{const _=jt(l),x=tn(l);if(_||x){const d=()=>{if(n.f){const p=_?m(l)?u[l]:h[l]:l.value;s?et(p)&&xc(p,r):et(p)?p.includes(r)||p.push(r):_?(h[l]=[r],m(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else _?(h[l]=o,m(l)&&(u[l]=o)):x&&(l.value=o,n.k&&(h[n.k]=o))};o?(d.id=-1,_n(d,t)):d()}}}const Er=n=>!!n.type.__asyncLoader,Df=n=>n.type.__isKeepAlive;function im(n,e){Uf(n,"a",e)}function sm(n,e){Uf(n,"da",e)}function Uf(n,e,t=en){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(la(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Df(s.parent.vnode)&&rm(i,e,t,s),s=s.parent}}function rm(n,e,t,i){const s=la(e,n,i,!0);Nc(()=>{xc(i[e],s)},t)}function la(n,e,t=en,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Hi();const a=jr(t),l=jn(e,t,n,o);return a(),ki(),l});return i?s.unshift(r):s.push(r),r}}const vi=n=>(e,t=en)=>{(!ha||n==="sp")&&la(n,(...i)=>e(...i),t)},om=vi("bm"),Jn=vi("m"),am=vi("bu"),lm=vi("u"),cm=vi("bum"),Nc=vi("um"),um=vi("sp"),hm=vi("rtg"),fm=vi("rtc");function dm(n,e=en){la("ec",n,e)}const pm="components";function fu(n,e){return gm(pm,n,!0,e)||n}const mm=Symbol.for("v-ndc");function gm(n,e,t=!0,i=!1){const s=xn||en;if(s){const r=s.type;{const a=i0(r,!1);if(a&&(a===e||a===bn(e)||a===sa(bn(e))))return r}const o=du(s[n]||r[n],e)||du(s.appContext[n],e);return!o&&i?r:o}}function du(n,e){return n&&(n[e]||n[bn(e)]||n[sa(bn(e))])}const yl=n=>n?Qf(n)?fa(n):yl(n.parent):null,br=Kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yl(n.parent),$root:n=>yl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fc(n),$forceUpdate:n=>n.f||(n.f=()=>{Dc(n.update)}),$nextTick:n=>n.n||(n.n=Af.bind(n.proxy)),$watch:n=>Om.bind(n)}),Ta=(n,e)=>n!==Mt&&!n.__isScriptSetup&&dt(n,e),_m={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ta(i,e))return o[e]=1,i[e];if(s!==Mt&&dt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&dt(c,e))return o[e]=3,r[e];if(t!==Mt&&dt(t,e))return o[e]=4,t[e];Ml&&(o[e]=0)}}const h=br[e];let u,f;if(h)return e==="$attrs"&&sn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Mt&&dt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,dt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ta(s,e)?(s[e]=t,!0):i!==Mt&&dt(i,e)?(i[e]=t,!0):dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==Mt&&dt(n,o)||Ta(e,o)||(a=r[0])&&dt(a,o)||dt(i,o)||dt(br,o)||dt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function pu(n){return et(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ml=!0;function vm(n){const e=Fc(n),t=n.proxy,i=n.ctx;Ml=!1,e.beforeCreate&&mu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:m,updated:_,activated:x,deactivated:d,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:w,render:O,renderTracked:P,renderTriggered:R,errorCaptured:F,serverPrefetch:ie,expose:y,inheritAttrs:E,components:K,directives:X,filters:Z}=e;if(c&&xm(c,i,null),o)for(const J in o){const B=o[J];Qe(B)&&(i[J]=B.bind(t))}if(s){const J=s.call(t,t);Ot(J)&&(n.data=oa(J))}if(Ml=!0,r)for(const J in r){const B=r[J],me=Qe(B)?B.bind(t,t):Qe(B.get)?B.get.bind(t,t):Yn,Me=!Qe(B)&&Qe(B.set)?B.set.bind(t):Yn,ge=In({get:me,set:Me});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Re=>ge.value=Re})}if(a)for(const J in a)Nf(a[J],i,t,J);if(l){const J=Qe(l)?l.call(t):l;Reflect.ownKeys(J).forEach(B=>{Uo(B,J[B])})}h&&mu(h,n,"c");function H(J,B){et(B)?B.forEach(me=>J(me.bind(t))):B&&J(B.bind(t))}if(H(om,u),H(Jn,f),H(am,m),H(lm,_),H(im,x),H(sm,d),H(dm,F),H(fm,P),H(hm,R),H(cm,b),H(Nc,w),H(um,ie),et(y))if(y.length){const J=n.exposed||(n.exposed={});y.forEach(B=>{Object.defineProperty(J,B,{get:()=>t[B],set:me=>t[B]=me})})}else n.exposed||(n.exposed={});O&&n.render===Yn&&(n.render=O),E!=null&&(n.inheritAttrs=E),K&&(n.components=K),X&&(n.directives=X),ie&&Lf(n)}function xm(n,e,t=Yn){et(n)&&(n=Sl(n));for(const i in n){const s=n[i];let r;Ot(s)?"default"in s?r=pi(s.from||i,s.default,!0):r=pi(s.from||i):r=pi(s),tn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function mu(n,e,t){jn(et(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nf(n,e,t,i){let s=i.includes(".")?jf(t,i):()=>t[i];if(jt(n)){const r=e[n];Qe(r)&&Ht(s,r)}else if(Qe(n))Ht(s,n.bind(t));else if(Ot(n))if(et(n))n.forEach(r=>Nf(r,e,t,i));else{const r=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(r)&&Ht(s,r,n)}}function Fc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>qo(l,c,o,!0)),qo(l,e,o)),Ot(e)&&r.set(e,l),l}function qo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&qo(n,r,t,!0),s&&s.forEach(o=>qo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ym[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ym={data:gu,props:_u,emits:_u,methods:xr,computed:xr,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:xr,directives:xr,watch:Sm,provide:gu,inject:Mm};function gu(n,e){return e?n?function(){return Kt(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function Mm(n,e){return xr(Sl(n),Sl(e))}function Sl(n){if(et(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function xr(n,e){return n?Kt(Object.create(null),n,e):e}function _u(n,e){return n?et(n)&&et(e)?[...new Set([...n,...e])]:Kt(Object.create(null),pu(n),pu(e??{})):e}function Sm(n,e){if(!n)return e;if(!e)return n;const t=Kt(Object.create(null),n);for(const i in e)t[i]=an(n[i],e[i]);return t}function Ff(){return{app:null,config:{isNativeTag:op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wm=0;function Em(n,e){return function(i,s=null){Qe(i)||(i=Kt({},i)),s!=null&&!Ot(s)&&(s=null);const r=Ff(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:wm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:r0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Qe(h.install)?(o.add(h),h.install(c,...u)):Qe(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const m=c._ceVNode||kt(i,s);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(m,h):n(m,h,f),l=!0,c._container=h,h.__vue_app__=c,fa(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(jn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=Xs;Xs=c;try{return h()}finally{Xs=u}}};return c}}let Xs=null;function Uo(n,e){if(en){let t=en.provides;const i=en.parent&&en.parent.provides;i===t&&(t=en.provides=Object.create(i)),t[n]=e}}function pi(n,e,t=!1){const i=en||xn;if(i||Xs){const s=Xs?Xs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const Of={},Bf=()=>Object.create(Of),zf=n=>Object.getPrototypeOf(n)===Of;function bm(n,e,t,i=!1){const s={},r=Bf();n.propsDefaults=Object.create(null),Gf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Mf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Tm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=mt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(ca(n.emitsOptions,f))continue;const m=e[f];if(l)if(dt(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const _=bn(f);s[_]=wl(l,a,_,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{Gf(n,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!dt(e,u)&&((h=_s(u))===u||!dt(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=wl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!dt(e,u))&&(delete r[u],c=!0)}c&&di(n.attrs,"set","")}function Gf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Sr(l))continue;const c=e[l];let h;s&&dt(s,h=bn(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:ca(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=mt(t),c=a||Mt;for(let h=0;h<r.length;h++){const u=r[h];t[u]=wl(s,l,u,c[u],n,!dt(c,u))}}return o}function wl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=jr(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_s(t))&&(i=!0))}return i}const Am=new WeakMap;function Hf(n,e,t=!1){const i=t?Am:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Qe(n)){const h=u=>{l=!0;const[f,m]=Hf(u,e,!0);Kt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return Ot(n)&&i.set(n,ks),ks;if(et(r))for(let h=0;h<r.length;h++){const u=bn(r[h]);vu(u)&&(o[u]=Mt)}else if(r)for(const h in r){const u=bn(h);if(vu(u)){const f=r[h],m=o[u]=et(f)||Qe(f)?{type:f}:Kt({},f),_=m.type;let x=!1,d=!0;if(et(_))for(let p=0;p<_.length;++p){const b=_[p],M=Qe(b)&&b.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(d=!1)}else x=Qe(_)&&_.name==="Boolean";m[0]=x,m[1]=d,(x||dt(m,"default"))&&a.push(u)}}const c=[o,a];return Ot(n)&&i.set(n,c),c}function vu(n){return n[0]!=="$"&&!Sr(n)}const kf=n=>n[0]==="_"||n==="$stable",Oc=n=>et(n)?n.map(Xn):[Xn(n)],Rm=(n,e,t)=>{if(e._n)return e;const i=Ii((...s)=>Oc(e(...s)),t);return i._c=!1,i},Vf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(kf(s))continue;const r=n[s];if(Qe(r))e[s]=Rm(s,r,i);else if(r!=null){const o=Oc(r);e[s]=()=>o}}},Wf=(n,e)=>{const t=Oc(e);n.slots.default=()=>t},Xf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Cm=(n,e,t)=>{const i=n.slots=Bf();if(n.vnode.shapeFlag&32){const s=e._;s?(Xf(i,e,t),t&&sf(i,"_",s,!0)):Vf(e,i)}else e&&Wf(n,e)},Pm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Xf(s,e,t):(r=!e.$stable,Vf(e,s)),o=e}else e&&(Wf(n,e),o={default:1});if(r)for(const a in s)!kf(a)&&o[a]==null&&delete s[a]},_n=Wm;function Im(n){return Lm(n)}function Lm(n,e){const t=rf();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:m=Yn,insertStaticContent:_}=n,x=(g,T,I,U=null,D=null,Y=null,j=void 0,S=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!ur(g,T)&&(U=N(g),Re(g,D,Y,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:k,shapeFlag:G}=T;switch(C){case ua:d(g,T,I,U);break;case Or:p(g,T,I,U);break;case Ca:g==null&&b(T,I,U,j);break;case fn:K(g,T,I,U,D,Y,j,S,v);break;default:G&1?O(g,T,I,U,D,Y,j,S,v):G&6?X(g,T,I,U,D,Y,j,S,v):(G&64||G&128)&&C.process(g,T,I,U,D,Y,j,S,v,ce)}k!=null&&D&&xl(k,g&&g.ref,Y,T||g,!T)},d=(g,T,I,U)=>{if(g==null)i(T.el=a(T.children),I,U);else{const D=T.el=g.el;T.children!==g.children&&c(D,T.children)}},p=(g,T,I,U)=>{g==null?i(T.el=l(T.children||""),I,U):T.el=g.el},b=(g,T,I,U)=>{[g.el,g.anchor]=_(g.children,T,I,U,g.el,g.anchor)},M=({el:g,anchor:T},I,U)=>{let D;for(;g&&g!==T;)D=f(g),i(g,I,U),g=D;i(T,I,U)},w=({el:g,anchor:T})=>{let I;for(;g&&g!==T;)I=f(g),s(g),g=I;s(T)},O=(g,T,I,U,D,Y,j,S,v)=>{T.type==="svg"?j="svg":T.type==="math"&&(j="mathml"),g==null?P(T,I,U,D,Y,j,S,v):ie(g,T,D,Y,j,S,v)},P=(g,T,I,U,D,Y,j,S)=>{let v,C;const{props:k,shapeFlag:G,transition:V,dirs:fe}=g;if(v=g.el=o(g.type,Y,k&&k.is,k),G&8?h(v,g.children):G&16&&F(g.children,v,null,U,D,Aa(g,Y),j,S),fe&&Zi(g,null,U,"created"),R(v,g,g.scopeId,j,U),k){for(const pe in k)pe!=="value"&&!Sr(pe)&&r(v,pe,null,k[pe],Y,U);"value"in k&&r(v,"value",null,k.value,Y),(C=k.onVnodeBeforeMount)&&kn(C,U,g)}fe&&Zi(g,null,U,"beforeMount");const ue=Dm(D,V);ue&&V.beforeEnter(v),i(v,T,I),((C=k&&k.onVnodeMounted)||ue||fe)&&_n(()=>{C&&kn(C,U,g),ue&&V.enter(v),fe&&Zi(g,null,U,"mounted")},D)},R=(g,T,I,U,D)=>{if(I&&m(g,I),U)for(let Y=0;Y<U.length;Y++)m(g,U[Y]);if(D){let Y=D.subTree;if(T===Y||Zf(Y.type)&&(Y.ssContent===T||Y.ssFallback===T)){const j=D.vnode;R(g,j,j.scopeId,j.slotScopeIds,D.parent)}}},F=(g,T,I,U,D,Y,j,S,v=0)=>{for(let C=v;C<g.length;C++){const k=g[C]=S?Ui(g[C]):Xn(g[C]);x(null,k,T,I,U,D,Y,j,S)}},ie=(g,T,I,U,D,Y,j)=>{const S=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:k}=T;v|=g.patchFlag&16;const G=g.props||Mt,V=T.props||Mt;let fe;if(I&&Ji(I,!1),(fe=V.onVnodeBeforeUpdate)&&kn(fe,I,T,g),k&&Zi(T,g,I,"beforeUpdate"),I&&Ji(I,!0),(G.innerHTML&&V.innerHTML==null||G.textContent&&V.textContent==null)&&h(S,""),C?y(g.dynamicChildren,C,S,I,U,Aa(T,D),Y):j||B(g,T,S,null,I,U,Aa(T,D),Y,!1),v>0){if(v&16)E(S,G,V,I,D);else if(v&2&&G.class!==V.class&&r(S,"class",null,V.class,D),v&4&&r(S,"style",G.style,V.style,D),v&8){const ue=T.dynamicProps;for(let pe=0;pe<ue.length;pe++){const be=ue[pe],he=G[be],ye=V[be];(ye!==he||be==="value")&&r(S,be,he,ye,D,I)}}v&1&&g.children!==T.children&&h(S,T.children)}else!j&&C==null&&E(S,G,V,I,D);((fe=V.onVnodeUpdated)||k)&&_n(()=>{fe&&kn(fe,I,T,g),k&&Zi(T,g,I,"updated")},U)},y=(g,T,I,U,D,Y,j)=>{for(let S=0;S<T.length;S++){const v=g[S],C=T[S],k=v.el&&(v.type===fn||!ur(v,C)||v.shapeFlag&70)?u(v.el):I;x(v,C,k,null,U,D,Y,j,!0)}},E=(g,T,I,U,D)=>{if(T!==I){if(T!==Mt)for(const Y in T)!Sr(Y)&&!(Y in I)&&r(g,Y,T[Y],null,D,U);for(const Y in I){if(Sr(Y))continue;const j=I[Y],S=T[Y];j!==S&&Y!=="value"&&r(g,Y,S,j,D,U)}"value"in I&&r(g,"value",T.value,I.value,D)}},K=(g,T,I,U,D,Y,j,S,v)=>{const C=T.el=g?g.el:a(""),k=T.anchor=g?g.anchor:a("");let{patchFlag:G,dynamicChildren:V,slotScopeIds:fe}=T;fe&&(S=S?S.concat(fe):fe),g==null?(i(C,I,U),i(k,I,U),F(T.children||[],I,k,D,Y,j,S,v)):G>0&&G&64&&V&&g.dynamicChildren?(y(g.dynamicChildren,V,I,D,Y,j,S),(T.key!=null||D&&T===D.subTree)&&qf(g,T,!0)):B(g,T,I,k,D,Y,j,S,v)},X=(g,T,I,U,D,Y,j,S,v)=>{T.slotScopeIds=S,g==null?T.shapeFlag&512?D.ctx.activate(T,I,U,j,v):Z(T,I,U,D,Y,j,v):oe(g,T,v)},Z=(g,T,I,U,D,Y,j)=>{const S=g.component=Jm(g,U,D);if(Df(g)&&(S.ctx.renderer=ce),Qm(S,!1,j),S.asyncDep){if(D&&D.registerDep(S,H,j),!g.el){const v=S.subTree=kt(Or);p(null,v,T,I)}}else H(S,g,T,I,D,Y,j)},oe=(g,T,I)=>{const U=T.component=g.component;if(km(g,T,I))if(U.asyncDep&&!U.asyncResolved){J(U,T,I);return}else U.next=T,U.update();else T.el=g.el,U.vnode=T},H=(g,T,I,U,D,Y,j)=>{const S=()=>{if(g.isMounted){let{next:G,bu:V,u:fe,parent:ue,vnode:pe}=g;{const Pe=Yf(g);if(Pe){G&&(G.el=pe.el,J(g,G,j)),Pe.asyncDep.then(()=>{g.isUnmounted||S()});return}}let be=G,he;Ji(g,!1),G?(G.el=pe.el,J(g,G,j)):G=pe,V&&Sa(V),(he=G.props&&G.props.onVnodeBeforeUpdate)&&kn(he,ue,G,pe),Ji(g,!0);const ye=Ra(g),Ce=g.subTree;g.subTree=ye,x(Ce,ye,u(Ce.el),N(Ce),g,D,Y),G.el=ye.el,be===null&&Vm(g,ye.el),fe&&_n(fe,D),(he=G.props&&G.props.onVnodeUpdated)&&_n(()=>kn(he,ue,G,pe),D)}else{let G;const{el:V,props:fe}=T,{bm:ue,m:pe,parent:be,root:he,type:ye}=g,Ce=Er(T);if(Ji(g,!1),ue&&Sa(ue),!Ce&&(G=fe&&fe.onVnodeBeforeMount)&&kn(G,be,T),Ji(g,!0),V&&ne){const Pe=()=>{g.subTree=Ra(g),ne(V,g.subTree,g,D,null)};Ce&&ye.__asyncHydrate?ye.__asyncHydrate(V,g,Pe):Pe()}else{he.ce&&he.ce._injectChildStyle(ye);const Pe=g.subTree=Ra(g);x(null,Pe,I,U,g,D,Y),T.el=Pe.el}if(pe&&_n(pe,D),!Ce&&(G=fe&&fe.onVnodeMounted)){const Pe=T;_n(()=>kn(G,be,Pe),D)}(T.shapeFlag&256||be&&Er(be.vnode)&&be.vnode.shapeFlag&256)&&g.a&&_n(g.a,D),g.isMounted=!0,T=I=U=null}};g.scope.on();const v=g.effect=new af(S);g.scope.off();const C=g.update=v.run.bind(v),k=g.job=v.runIfDirty.bind(v);k.i=g,k.id=g.uid,v.scheduler=()=>Dc(k),Ji(g,!0),C()},J=(g,T,I)=>{T.component=g;const U=g.vnode.props;g.vnode=T,g.next=null,Tm(g,T.props,U,I),Pm(g,T.children,I),Hi(),hu(g),ki()},B=(g,T,I,U,D,Y,j,S,v=!1)=>{const C=g&&g.children,k=g?g.shapeFlag:0,G=T.children,{patchFlag:V,shapeFlag:fe}=T;if(V>0){if(V&128){Me(C,G,I,U,D,Y,j,S,v);return}else if(V&256){me(C,G,I,U,D,Y,j,S,v);return}}fe&8?(k&16&&Se(C,D,Y),G!==C&&h(I,G)):k&16?fe&16?Me(C,G,I,U,D,Y,j,S,v):Se(C,D,Y,!0):(k&8&&h(I,""),fe&16&&F(G,I,U,D,Y,j,S,v))},me=(g,T,I,U,D,Y,j,S,v)=>{g=g||ks,T=T||ks;const C=g.length,k=T.length,G=Math.min(C,k);let V;for(V=0;V<G;V++){const fe=T[V]=v?Ui(T[V]):Xn(T[V]);x(g[V],fe,I,null,D,Y,j,S,v)}C>k?Se(g,D,Y,!0,!1,G):F(T,I,U,D,Y,j,S,v,G)},Me=(g,T,I,U,D,Y,j,S,v)=>{let C=0;const k=T.length;let G=g.length-1,V=k-1;for(;C<=G&&C<=V;){const fe=g[C],ue=T[C]=v?Ui(T[C]):Xn(T[C]);if(ur(fe,ue))x(fe,ue,I,null,D,Y,j,S,v);else break;C++}for(;C<=G&&C<=V;){const fe=g[G],ue=T[V]=v?Ui(T[V]):Xn(T[V]);if(ur(fe,ue))x(fe,ue,I,null,D,Y,j,S,v);else break;G--,V--}if(C>G){if(C<=V){const fe=V+1,ue=fe<k?T[fe].el:U;for(;C<=V;)x(null,T[C]=v?Ui(T[C]):Xn(T[C]),I,ue,D,Y,j,S,v),C++}}else if(C>V)for(;C<=G;)Re(g[C],D,Y,!0),C++;else{const fe=C,ue=C,pe=new Map;for(C=ue;C<=V;C++){const Ie=T[C]=v?Ui(T[C]):Xn(T[C]);Ie.key!=null&&pe.set(Ie.key,C)}let be,he=0;const ye=V-ue+1;let Ce=!1,Pe=0;const Te=new Array(ye);for(C=0;C<ye;C++)Te[C]=0;for(C=fe;C<=G;C++){const Ie=g[C];if(he>=ye){Re(Ie,D,Y,!0);continue}let ke;if(Ie.key!=null)ke=pe.get(Ie.key);else for(be=ue;be<=V;be++)if(Te[be-ue]===0&&ur(Ie,T[be])){ke=be;break}ke===void 0?Re(Ie,D,Y,!0):(Te[ke-ue]=C+1,ke>=Pe?Pe=ke:Ce=!0,x(Ie,T[ke],I,null,D,Y,j,S,v),he++)}const Ve=Ce?Um(Te):ks;for(be=Ve.length-1,C=ye-1;C>=0;C--){const Ie=ue+C,ke=T[Ie],z=Ie+1<k?T[Ie+1].el:U;Te[C]===0?x(null,ke,I,z,D,Y,j,S,v):Ce&&(be<0||C!==Ve[be]?ge(ke,I,z,2):be--)}}},ge=(g,T,I,U,D=null)=>{const{el:Y,type:j,transition:S,children:v,shapeFlag:C}=g;if(C&6){ge(g.component.subTree,T,I,U);return}if(C&128){g.suspense.move(T,I,U);return}if(C&64){j.move(g,T,I,ce);return}if(j===fn){i(Y,T,I);for(let G=0;G<v.length;G++)ge(v[G],T,I,U);i(g.anchor,T,I);return}if(j===Ca){M(g,T,I);return}if(U!==2&&C&1&&S)if(U===0)S.beforeEnter(Y),i(Y,T,I),_n(()=>S.enter(Y),D);else{const{leave:G,delayLeave:V,afterLeave:fe}=S,ue=()=>i(Y,T,I),pe=()=>{G(Y,()=>{ue(),fe&&fe()})};V?V(Y,ue,pe):pe()}else i(Y,T,I)},Re=(g,T,I,U=!1,D=!1)=>{const{type:Y,props:j,ref:S,children:v,dynamicChildren:C,shapeFlag:k,patchFlag:G,dirs:V,cacheIndex:fe}=g;if(G===-2&&(D=!1),S!=null&&xl(S,null,I,g,!0),fe!=null&&(T.renderCache[fe]=void 0),k&256){T.ctx.deactivate(g);return}const ue=k&1&&V,pe=!Er(g);let be;if(pe&&(be=j&&j.onVnodeBeforeUnmount)&&kn(be,T,g),k&6)de(g.component,I,U);else{if(k&128){g.suspense.unmount(I,U);return}ue&&Zi(g,null,T,"beforeUnmount"),k&64?g.type.remove(g,T,I,ce,U):C&&!C.hasOnce&&(Y!==fn||G>0&&G&64)?Se(C,T,I,!1,!0):(Y===fn&&G&384||!D&&k&16)&&Se(v,T,I),U&&Be(g)}(pe&&(be=j&&j.onVnodeUnmounted)||ue)&&_n(()=>{be&&kn(be,T,g),ue&&Zi(g,null,T,"unmounted")},I)},Be=g=>{const{type:T,el:I,anchor:U,transition:D}=g;if(T===fn){se(I,U);return}if(T===Ca){w(g);return}const Y=()=>{s(I),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:j,delayLeave:S}=D,v=()=>j(I,Y);S?S(g.el,Y,v):v()}else Y()},se=(g,T)=>{let I;for(;g!==T;)I=f(g),s(g),g=I;s(T)},de=(g,T,I)=>{const{bum:U,scope:D,job:Y,subTree:j,um:S,m:v,a:C}=g;xu(v),xu(C),U&&Sa(U),D.stop(),Y&&(Y.flags|=8,Re(j,g,T,I)),S&&_n(S,T),_n(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Se=(g,T,I,U=!1,D=!1,Y=0)=>{for(let j=Y;j<g.length;j++)Re(g[j],T,I,U,D)},N=g=>{if(g.shapeFlag&6)return N(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),I=T&&T[tm];return I?f(I):T};let le=!1;const ae=(g,T,I)=>{g==null?T._vnode&&Re(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,I),T._vnode=g,le||(le=!0,hu(),Cf(),le=!1)},ce={p:x,um:Re,m:ge,r:Be,mt:Z,mc:F,pc:B,pbc:y,n:N,o:n};let we,ne;return{render:ae,hydrate:we,createApp:Em(ae,we)}}function Aa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ji({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Dm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function qf(n,e,t=!1){const i=n.children,s=e.children;if(et(i)&&et(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ui(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&qf(o,a)),a.type===ua&&(a.el=o.el)}}function Um(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Yf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yf(e)}function xu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Nm=Symbol.for("v-scx"),Fm=()=>pi(Nm);function Ht(n,e,t){return $f(n,e,t)}function $f(n,e,t=Mt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Kt({},t);let l;if(ha)if(r==="sync"){const f=Fm();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=Yn,f.resume=Yn,f.pause=Yn,f}const c=en;a.call=(f,m,_)=>jn(f,c,m,_);let h=!1;r==="post"?a.scheduler=f=>{_n(f,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,m)=>{m?f():Dc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const u=Kp(n,e,a);return l&&l.push(u),u}function Om(n,e,t){const i=this.proxy,s=jt(n)?n.includes(".")?jf(i,n):()=>i[n]:n.bind(i,i);let r;Qe(e)?r=e:(r=e.handler,t=e);const o=jr(this),a=$f(s,r.bind(i),t);return o(),a}function jf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Bm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${bn(e)}Modifiers`]||n[`${_s(e)}Modifiers`];function zm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Mt;let s=t;const r=e.startsWith("update:"),o=r&&Bm(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>jt(h)?h.trim():h)),o.number&&(s=t.map(pp)));let a,l=i[a=Ma(e)]||i[a=Ma(bn(e))];!l&&r&&(l=i[a=Ma(_s(e))]),l&&jn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,jn(c,n,6,s)}}function Kf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Qe(n)){const l=c=>{const h=Kf(c,e,!0);h&&(a=!0,Kt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Ot(n)&&i.set(n,null),null):(et(r)?r.forEach(l=>o[l]=null):Kt(o,r),Ot(n)&&i.set(n,o),o)}function ca(n,e){return!n||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(n,e[0].toLowerCase()+e.slice(1))||dt(n,_s(e))||dt(n,e))}function Ra(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:m,ctx:_,inheritAttrs:x}=n,d=Xo(n);let p,b;try{if(t.shapeFlag&4){const w=s||i,O=w;p=Xn(c.call(O,w,h,u,m,f,_)),b=a}else{const w=e;p=Xn(w.length>1?w(u,{attrs:a,slots:o,emit:l}):w(u,null)),b=e.props?a:Gm(a)}}catch(w){Tr.length=0,aa(w,n,1),p=kt(Or)}let M=p;if(b&&x!==!1){const w=Object.keys(b),{shapeFlag:O}=M;w.length&&O&7&&(r&&w.some(vc)&&(b=Hm(b,r)),M=Ks(M,b,!1,!0))}return t.dirs&&(M=Ks(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Uc(M,t.transition),p=M,Xo(d),p}const Gm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ta(t))&&((e||(e={}))[t]=n[t]);return e},Hm=(n,e)=>{const t={};for(const i in n)(!vc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function km(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?yu(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==i[f]&&!ca(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?yu(i,o,c):!0:!!o;return!1}function yu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ca(t,r))return!0}return!1}function Vm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Zf=n=>n.__isSuspense;function Wm(n,e){e&&e.pendingBranch?et(n)?e.effects.push(...n):e.effects.push(n):Qp(n)}const fn=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),Or=Symbol.for("v-cmt"),Ca=Symbol.for("v-stc"),Tr=[];let yn=null;function xi(n=!1){Tr.push(yn=n?null:[])}function Xm(){Tr.pop(),yn=Tr[Tr.length-1]||null}let Br=1;function Mu(n){Br+=n,n<0&&yn&&(yn.hasOnce=!0)}function qm(n){return n.dynamicChildren=Br>0?yn||ks:null,Xm(),Br>0&&yn&&yn.push(n),n}function yi(n,e,t,i,s,r){return qm(je(n,e,t,i,s,r,!0))}function Yo(n){return n?n.__v_isVNode===!0:!1}function ur(n,e){return n.type===e.type&&n.key===e.key}const Jf=({key:n})=>n??null,No=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?jt(n)||tn(n)||Qe(n)?{i:xn,r:n,k:e,f:!!t}:n:null);function je(n,e=null,t=null,i=0,s=null,r=n===fn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jf(e),ref:e&&No(e),scopeId:If,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xn};return a?(Bc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=jt(t)?8:16),Br>0&&!o&&yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yn.push(l),l}const kt=Ym;function Ym(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===mm)&&(n=Or),Yo(n)){const a=Ks(n,e,!0);return t&&Bc(a,t),Br>0&&!r&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag=-2,a}if(s0(n)&&(n=n.__vccOpts),e){e=$m(e);let{class:a,style:l}=e;a&&!jt(a)&&(e.class=zn(a)),Ot(l)&&(Pc(l)&&!et(l)&&(l=Kt({},l)),e.style=Mc(l))}const o=jt(n)?1:Zf(n)?128:nm(n)?64:Ot(n)?4:Qe(n)?2:0;return je(n,e,t,i,s,o,r,!0)}function $m(n){return n?Pc(n)||zf(n)?Kt({},n):n:null}function Ks(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?jm(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Jf(c),ref:e&&e.ref?t&&r?et(r)?r.concat(No(e)):[r,No(e)]:No(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==fn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ks(n.ssContent),ssFallback:n.ssFallback&&Ks(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Uc(h,l.clone(h)),h}function Li(n=" ",e=0){return kt(ua,null,n,e)}function Xn(n){return n==null||typeof n=="boolean"?kt(Or):et(n)?kt(fn,null,n.slice()):Yo(n)?Ui(n):kt(ua,null,String(n))}function Ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ks(n)}function Bc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(et(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Bc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!zf(e)?e._ctx=xn:s===3&&xn&&(xn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:xn},t=32):(e=String(e),i&64?(t=16,e=[Li(e)]):t=8);n.children=e,n.shapeFlag|=t}function jm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=zn([e.class,i.class]));else if(s==="style")e.style=Mc([e.style,i.style]);else if(ta(s)){const r=e[s],o=i[s];o&&r!==o&&!(et(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function kn(n,e,t,i=null){jn(n,e,7,[t,i])}const Km=Ff();let Zm=0;function Jm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Km,r={uid:Zm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hf(i,s),emitsOptions:Kf(i,s),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zm.bind(null,r),n.ce&&n.ce(r),r}let en=null,$o,El;{const n=rf(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};$o=e("__VUE_INSTANCE_SETTERS__",t=>en=t),El=e("__VUE_SSR_SETTERS__",t=>ha=t)}const jr=n=>{const e=en;return $o(n),n.scope.on(),()=>{n.scope.off(),$o(e)}},Su=()=>{en&&en.scope.off(),$o(null)};function Qf(n){return n.vnode.shapeFlag&4}let ha=!1;function Qm(n,e=!1,t=!1){e&&El(e);const{props:i,children:s}=n.vnode,r=Qf(n);bm(n,i,r,e),Cm(n,s,t);const o=r?e0(n,e):void 0;return e&&El(!1),o}function e0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,_m);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?n0(n):null,r=jr(n);Hi();const o=$r(i,n,0,[n.props,s]);if(ki(),r(),nf(o)){if(Er(n)||Lf(n),o.then(Su,Su),e)return o.then(a=>{wu(n,a,e)}).catch(a=>{aa(a,n,0)});n.asyncDep=o}else wu(n,o,e)}else ed(n,e)}function wu(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ot(e)&&(n.setupState=bf(e)),ed(n,t)}let Eu;function ed(n,e,t){const i=n.type;if(!n.render){if(!e&&Eu&&!i.render){const s=i.template||Fc(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Kt(Kt({isCustomElement:r,delimiters:a},o),l);i.render=Eu(s,c)}}n.render=i.render||Yn}{const s=jr(n);Hi();try{vm(n)}finally{ki(),s()}}}const t0={get(n,e){return sn(n,"get",""),n[e]}};function n0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,t0),slots:n.slots,emit:n.emit,expose:e}}function fa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bf(Wp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in br)return br[t](n)},has(e,t){return t in e||t in br}})):n.proxy}function i0(n,e=!0){return Qe(n)?n.displayName||n.name:n.name||e&&n.__name}function s0(n){return Qe(n)&&"__vccOpts"in n}const In=(n,e)=>$p(n,e,ha);function td(n,e,t){const i=arguments.length;return i===2?Ot(e)&&!et(e)?Yo(e)?kt(n,null,[e]):kt(n,e):kt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Yo(t)&&(t=[t]),kt(n,e,t))}const r0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bl;const bu=typeof window<"u"&&window.trustedTypes;if(bu)try{bl=bu.createPolicy("vue",{createHTML:n=>n})}catch{}const nd=bl?n=>bl.createHTML(n):n=>n,o0="http://www.w3.org/2000/svg",a0="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,Tu=ci&&ci.createElement("template"),l0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ci.createElementNS(o0,n):e==="mathml"?ci.createElementNS(a0,n):t?ci.createElement(n,{is:t}):ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ci.createTextNode(n),createComment:n=>ci.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ci.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Tu.innerHTML=nd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Tu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},c0=Symbol("_vtc");function u0(n,e,t){const i=n[c0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const jo=Symbol("_vod"),id=Symbol("_vsh"),h0={beforeMount(n,{value:e},{transition:t}){n[jo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):hr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),hr(n,!0),i.enter(n)):i.leave(n,()=>{hr(n,!1)}):hr(n,e))},beforeUnmount(n,{value:e}){hr(n,e)}};function hr(n,e){n.style.display=e?n[jo]:"none",n[id]=!e}const f0=Symbol(""),d0=/(^|;)\s*display\s*:/;function p0(n,e,t){const i=n.style,s=jt(t);let r=!1;if(t&&!s){if(e)if(jt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Fo(i,a,"")}else for(const o in e)t[o]==null&&Fo(i,o,"");for(const o in t)o==="display"&&(r=!0),Fo(i,o,t[o])}else if(s){if(e!==t){const o=i[f0];o&&(t+=";"+o),i.cssText=t,r=d0.test(t)}}else e&&n.removeAttribute("style");jo in n&&(n[jo]=r?i.display:"",n[id]&&(i.display="none"))}const Au=/\s*!important$/;function Fo(n,e,t){if(et(t))t.forEach(i=>Fo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=m0(n,e);Au.test(t)?n.setProperty(_s(i),t.replace(Au,""),"important"):n[i]=t}}const Ru=["Webkit","Moz","ms"],Pa={};function m0(n,e){const t=Pa[e];if(t)return t;let i=bn(e);if(i!=="filter"&&i in n)return Pa[e]=i;i=sa(i);for(let s=0;s<Ru.length;s++){const r=Ru[s]+i;if(r in n)return Pa[e]=r}return e}const Cu="http://www.w3.org/1999/xlink";function Pu(n,e,t,i,s,r=yp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cu,e.slice(6,e.length)):n.setAttributeNS(Cu,e,t):t==null||r&&!of(t)?n.removeAttribute(e):n.setAttribute(e,r?"":rr(t)?String(t):t)}function Iu(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?nd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=of(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function g0(n,e,t,i){n.addEventListener(e,t,i)}function _0(n,e,t,i){n.removeEventListener(e,t,i)}const Lu=Symbol("_vei");function v0(n,e,t,i,s=null){const r=n[Lu]||(n[Lu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=x0(e);if(i){const c=r[e]=S0(i,s);g0(n,a,c,l)}else o&&(_0(n,a,o,l),r[e]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function x0(n){let e;if(Du.test(n)){e={};let i;for(;i=n.match(Du);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_s(n.slice(2)),e]}let Ia=0;const y0=Promise.resolve(),M0=()=>Ia||(y0.then(()=>Ia=0),Ia=Date.now());function S0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;jn(w0(i,t.value),e,5,[i])};return t.value=n,t.attached=M0(),t}function w0(n,e){if(et(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Uu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,E0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?u0(n,i,o):e==="style"?p0(n,t,i):ta(e)?vc(e)||v0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):b0(n,e,i,o))?(Iu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!jt(i))?Iu(n,bn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Pu(n,e,i,o))};function b0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uu(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uu(e)&&jt(t)?!1:e in n}const T0=Kt({patchProp:E0},l0);let Nu;function A0(){return Nu||(Nu=Im(T0))}const R0=(...n)=>{const e=A0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=P0(i);if(!s)return;const r=e._component;!Qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,C0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function C0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function P0(n){return jt(n)?document.querySelector(n):n}const I0={id:"app"},L0=Gn({__name:"App",setup(n){const e=Je(!1);function t(i){i.clientY<100?e.value=!0:e.value=!1}return Jn(()=>{window.addEventListener("mousemove",t)}),Nc(()=>{window.removeEventListener("mousemove",t)}),(i,s)=>{const r=fu("router-link"),o=fu("router-view");return xi(),yi("div",I0,[em(je("nav",null,[kt(r,{to:"/3d-bear-arts/leather"},{default:Ii(()=>s[0]||(s[0]=[Li("Leather")])),_:1}),kt(r,{to:"/3d-bear-arts/pop-art"},{default:Ii(()=>s[1]||(s[1]=[Li("Pop MouseMove")])),_:1}),kt(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Ii(()=>s[2]||(s[2]=[Li("Pop3")])),_:1}),kt(r,{to:"/3d-bear-arts/machine"},{default:Ii(()=>s[3]||(s[3]=[Li("machine")])),_:1}),kt(r,{to:"/3d-bear-arts/"},{default:Ii(()=>s[4]||(s[4]=[Li("Water")])),_:1}),kt(r,{to:"/3d-bear-arts/ghost-bear"},{default:Ii(()=>s[5]||(s[5]=[Li("ghost")])),_:1}),kt(r,{to:"/3d-bear-arts/white-ghost-bear"},{default:Ii(()=>s[6]||(s[6]=[Li("white ghost")])),_:1})],512),[[h0,e.value]]),kt(o)])}}}),Mi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},D0=Mi(L0,[["__scopeId","data-v-cf9150b8"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Os=typeof document<"u";function sd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function U0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&sd(n.default)}const _t=Object.assign;function La(n,e){const t={};for(const i in e){const s=e[i];t[i]=On(s)?s.map(n):n(s)}return t}const Ar=()=>{},On=Array.isArray,rd=/#/g,N0=/&/g,F0=/\//g,O0=/=/g,B0=/\?/g,od=/\+/g,z0=/%5B/g,G0=/%5D/g,ad=/%5E/g,H0=/%60/g,ld=/%7B/g,k0=/%7C/g,cd=/%7D/g,V0=/%20/g;function zc(n){return encodeURI(""+n).replace(k0,"|").replace(z0,"[").replace(G0,"]")}function W0(n){return zc(n).replace(ld,"{").replace(cd,"}").replace(ad,"^")}function Tl(n){return zc(n).replace(od,"%2B").replace(V0,"+").replace(rd,"%23").replace(N0,"%26").replace(H0,"`").replace(ld,"{").replace(cd,"}").replace(ad,"^")}function X0(n){return Tl(n).replace(O0,"%3D")}function q0(n){return zc(n).replace(rd,"%23").replace(B0,"%3F")}function Y0(n){return n==null?"":q0(n).replace(F0,"%2F")}function zr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const $0=/\/$/,j0=n=>n.replace($0,"");function Da(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Q0(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:zr(o)}}function K0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Fu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Z0(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Zs(e.matched[i],t.matched[s])&&ud(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Zs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ud(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!J0(n[t],e[t]))return!1;return!0}function J0(n,e){return On(n)?Ou(n,e):On(e)?Ou(e,n):n===e}function Ou(n,e){return On(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Q0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Gr;(function(n){n.pop="pop",n.push="push"})(Gr||(Gr={}));var Rr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Rr||(Rr={}));function eg(n){if(!n)if(Os){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),j0(n)}const tg=/^[^#]+#/;function ng(n,e){return n.replace(tg,"#")+e}function ig(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const da=()=>({left:window.scrollX,top:window.scrollY});function sg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=ig(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bu(n,e){return(history.state?history.state.position-e:-1)+n}const Al=new Map;function rg(n,e){Al.set(n,e)}function og(n){const e=Al.get(n);return Al.delete(n),e}let ag=()=>location.protocol+"//"+location.host;function hd(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Fu(l,"")}return Fu(t,n)+i+s}function lg(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const m=hd(n,location),_=t.value,x=e.value;let d=0;if(f){if(t.value=m,e.value=f,o&&o===_){o=null;return}d=x?f.position-x.position:0}else i(m);s.forEach(p=>{p(t.value,_,{delta:d,type:Gr.pop,direction:d?d>0?Rr.forward:Rr.back:Rr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const m=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(m),m}function h(){const{history:f}=window;f.state&&f.replaceState(_t({},f.state,{scroll:da()}),"")}function u(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function zu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?da():null}}function cg(n){const{history:e,location:t}=window,i={value:hd(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=n.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:ag()+n+l;try{e[h?"replaceState":"pushState"](c,"",f),s.value=c}catch(m){console.error(m),t[h?"replace":"assign"](f)}}function o(l,c){const h=_t({},e.state,zu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=_t({},s.value,e.state,{forward:l,scroll:da()});r(h.current,h,!0);const u=_t({},zu(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function ug(n){n=eg(n);const e=cg(n),t=lg(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=_t({location:"",base:n,go:i,createHref:ng.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function hg(n){return typeof n=="string"||n&&typeof n=="object"}function fd(n){return typeof n=="string"||typeof n=="symbol"}const dd=Symbol("");var Gu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Gu||(Gu={}));function Js(n,e){return _t(new Error,{type:n,[dd]:!0},e)}function ti(n,e){return n instanceof Error&&dd in n&&(e==null||!!(n.type&e))}const Hu="[^/]+?",fg={sensitive:!1,strict:!1,start:!0,end:!0},dg=/[.+*?^${}()[\]/\\]/g;function pg(n,e){const t=_t({},fg,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const h=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const f=c[u];let m=40+(t.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(dg,"\\$&"),m+=40;else if(f.type===1){const{value:_,repeatable:x,optional:d,regexp:p}=f;r.push({name:_,repeatable:x,optional:d});const b=p||Hu;if(b!==Hu){m+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+w.message)}}let M=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(M=d&&c.length<2?`(?:/${M})`:"/"+M),d&&(M+="?"),s+=M,m+=20,d&&(m+=-8),x&&(m+=-20),b===".*"&&(m+=-50)}h.push(m)}i.push(h)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let f=1;f<h.length;f++){const m=h[f]||"",_=r[f-1];u[_.name]=m&&_.repeatable?m.split("/"):m}return u}function l(c){let h="",u=!1;for(const f of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const m of f)if(m.type===0)h+=m.value;else if(m.type===1){const{value:_,repeatable:x,optional:d}=m,p=_ in c?c[_]:"";if(On(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=On(p)?p.join("/"):p;if(!b)if(d)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function mg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function pd(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=mg(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(ku(i))return 1;if(ku(s))return-1}return s.length-i.length}function ku(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const gg={type:0,value:""},_g=/[a-zA-Z0-9_]/;function vg(n){if(!n)return[[]];if(n==="/")return[[gg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:_g.test(l)?f():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:t=3:h+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function xg(n,e,t){const i=pg(vg(n.path),t),s=_t(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function yg(n,e){const t=[],i=new Map;e=qu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,m){const _=!m,x=Wu(u);x.aliasOf=m&&m.record;const d=qu(e,u),p=[x];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of w)p.push(Wu(_t({},x,{components:m?m.record.components:x.components,path:O,aliasOf:m?m.record:x})))}let b,M;for(const w of p){const{path:O}=w;if(f&&O[0]!=="/"){const P=f.record.path,R=P[P.length-1]==="/"?"":"/";w.path=f.record.path+(O&&R+O)}if(b=xg(w,f,d),m?m.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),_&&u.name&&!Xu(b)&&o(u.name)),md(b)&&l(b),x.children){const P=x.children;for(let R=0;R<P.length;R++)r(P[R],b,m&&m.children[R])}m=m||b}return M?()=>{o(M)}:Ar}function o(u){if(fd(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){const f=wg(u,t);t.splice(f,0,u),u.record.name&&!Xu(u)&&i.set(u.record.name,u)}function c(u,f){let m,_={},x,d;if("name"in u&&u.name){if(m=i.get(u.name),!m)throw Js(1,{location:u});d=m.record.name,_=_t(Vu(f.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&Vu(u.params,m.keys.map(M=>M.name))),x=m.stringify(_)}else if(u.path!=null)x=u.path,m=t.find(M=>M.re.test(x)),m&&(_=m.parse(x),d=m.record.name);else{if(m=f.name?i.get(f.name):t.find(M=>M.re.test(f.path)),!m)throw Js(1,{location:u,currentLocation:f});d=m.record.name,_=_t({},f.params,u.params),x=m.stringify(_)}const p=[];let b=m;for(;b;)p.unshift(b.record),b=b.parent;return{name:d,path:x,params:_,matched:p,meta:Sg(p)}}n.forEach(u=>r(u));function h(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Vu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Wu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Mg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Mg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Xu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Sg(n){return n.reduce((e,t)=>_t(e,t.meta),{})}function qu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function wg(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;pd(n,e[r])<0?i=r:t=r+1}const s=Eg(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Eg(n){let e=n;for(;e=e.parent;)if(md(e)&&pd(n,e)===0)return e}function md({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function bg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(od," "),o=r.indexOf("="),a=zr(o<0?r:r.slice(0,o)),l=o<0?null:zr(r.slice(o+1));if(a in e){let c=e[a];On(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Yu(n){let e="";for(let t in n){const i=n[t];if(t=X0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(On(i)?i.map(r=>r&&Tl(r)):[i&&Tl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Tg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=On(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Ag=Symbol(""),$u=Symbol(""),Gc=Symbol(""),gd=Symbol(""),Rl=Symbol("");function fr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ni(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Js(4,{from:t,to:e})):f instanceof Error?l(f):hg(f)?l(Js(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},h=r(()=>n.call(i&&i.instances[s],e,t,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(f=>l(f))})}function Ua(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(sd(l)){const h=(l.__vccOpts||l)[e];h&&r.push(Ni(h,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=U0(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const m=(u.__vccOpts||u)[e];return m&&Ni(m,t,i,o,a,s)()}))}}return r}function ju(n){const e=pi(Gc),t=pi(gd),i=In(()=>{const l=Vs(n.to);return e.resolve(l)}),s=In(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=t.matched;if(!h||!u.length)return-1;const f=u.findIndex(Zs.bind(null,h));if(f>-1)return f;const m=Ku(l[c-2]);return c>1&&Ku(h)===m&&u[u.length-1].path!==m?u.findIndex(Zs.bind(null,l[c-2])):f}),r=In(()=>s.value>-1&&Ig(t.params,i.value.params)),o=In(()=>s.value>-1&&s.value===t.matched.length-1&&ud(t.params,i.value.params));function a(l={}){return Pg(l)?e[Vs(n.replace)?"replace":"push"](Vs(n.to)).catch(Ar):Promise.resolve()}return{route:i,href:In(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Rg=Gn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ju,setup(n,{slots:e}){const t=oa(ju(n)),{options:i}=pi(Gc),s=In(()=>({[Zu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Zu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:td("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Cg=Rg;function Pg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Ig(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!On(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ku(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Zu=(n,e,t)=>n??e??t,Lg=Gn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=pi(Rl),s=In(()=>n.route||i.value),r=pi($u,0),o=In(()=>{let c=Vs(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=In(()=>s.value.matched[o.value]);Uo($u,In(()=>o.value+1)),Uo(Ag,a),Uo(Rl,s);const l=Je();return Ht(()=>[l.value,a.value,n.name],([c,h,u],[f,m,_])=>{h&&(h.instances[u]=c,m&&m!==h&&c&&c===f&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),c&&h&&(!m||!Zs(h,m)||!f)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,f=u&&u.components[h];if(!f)return Ju(t.default,{Component:f,route:c});const m=u.props[h],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=td(f,_t({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return Ju(t.default,{Component:d,route:c})||d}}});function Ju(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Dg=Lg;function Ug(n){const e=yg(n.routes,n),t=n.parseQuery||bg,i=n.stringifyQuery||Yu,s=n.history,r=fr(),o=fr(),a=fr(),l=wf(Ei);let c=Ei;Os&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=La.bind(null,N=>""+N),u=La.bind(null,Y0),f=La.bind(null,zr);function m(N,le){let ae,ce;return fd(N)?(ae=e.getRecordMatcher(N),ce=le):ce=N,e.addRoute(ce,ae)}function _(N){const le=e.getRecordMatcher(N);le&&e.removeRoute(le)}function x(){return e.getRoutes().map(N=>N.record)}function d(N){return!!e.getRecordMatcher(N)}function p(N,le){if(le=_t({},le||l.value),typeof N=="string"){const T=Da(t,N,le.path),I=e.resolve({path:T.path},le),U=s.createHref(T.fullPath);return _t(T,I,{params:f(I.params),hash:zr(T.hash),redirectedFrom:void 0,href:U})}let ae;if(N.path!=null)ae=_t({},N,{path:Da(t,N.path,le.path).path});else{const T=_t({},N.params);for(const I in T)T[I]==null&&delete T[I];ae=_t({},N,{params:u(T)}),le.params=u(le.params)}const ce=e.resolve(ae,le),we=N.hash||"";ce.params=h(f(ce.params));const ne=K0(i,_t({},N,{hash:W0(we),path:ce.path})),g=s.createHref(ne);return _t({fullPath:ne,hash:we,query:i===Yu?Tg(N.query):N.query||{}},ce,{redirectedFrom:void 0,href:g})}function b(N){return typeof N=="string"?Da(t,N,l.value.path):_t({},N)}function M(N,le){if(c!==N)return Js(8,{from:le,to:N})}function w(N){return R(N)}function O(N){return w(_t(b(N),{replace:!0}))}function P(N){const le=N.matched[N.matched.length-1];if(le&&le.redirect){const{redirect:ae}=le;let ce=typeof ae=="function"?ae(N):ae;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=b(ce):{path:ce},ce.params={}),_t({query:N.query,hash:N.hash,params:ce.path!=null?{}:N.params},ce)}}function R(N,le){const ae=c=p(N),ce=l.value,we=N.state,ne=N.force,g=N.replace===!0,T=P(ae);if(T)return R(_t(b(T),{state:typeof T=="object"?_t({},we,T.state):we,force:ne,replace:g}),le||ae);const I=ae;I.redirectedFrom=le;let U;return!ne&&Z0(i,ce,ae)&&(U=Js(16,{to:I,from:ce}),ge(ce,ce,!0,!1)),(U?Promise.resolve(U):y(I,ce)).catch(D=>ti(D)?ti(D,2)?D:Me(D):B(D,I,ce)).then(D=>{if(D){if(ti(D,2))return R(_t({replace:g},b(D.to),{state:typeof D.to=="object"?_t({},we,D.to.state):we,force:ne}),le||I)}else D=K(I,ce,!0,g,we);return E(I,ce,D),D})}function F(N,le){const ae=M(N,le);return ae?Promise.reject(ae):Promise.resolve()}function ie(N){const le=se.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(N):N()}function y(N,le){let ae;const[ce,we,ne]=Ng(N,le);ae=Ua(ce.reverse(),"beforeRouteLeave",N,le);for(const T of ce)T.leaveGuards.forEach(I=>{ae.push(Ni(I,N,le))});const g=F.bind(null,N,le);return ae.push(g),Se(ae).then(()=>{ae=[];for(const T of r.list())ae.push(Ni(T,N,le));return ae.push(g),Se(ae)}).then(()=>{ae=Ua(we,"beforeRouteUpdate",N,le);for(const T of we)T.updateGuards.forEach(I=>{ae.push(Ni(I,N,le))});return ae.push(g),Se(ae)}).then(()=>{ae=[];for(const T of ne)if(T.beforeEnter)if(On(T.beforeEnter))for(const I of T.beforeEnter)ae.push(Ni(I,N,le));else ae.push(Ni(T.beforeEnter,N,le));return ae.push(g),Se(ae)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),ae=Ua(ne,"beforeRouteEnter",N,le,ie),ae.push(g),Se(ae))).then(()=>{ae=[];for(const T of o.list())ae.push(Ni(T,N,le));return ae.push(g),Se(ae)}).catch(T=>ti(T,8)?T:Promise.reject(T))}function E(N,le,ae){a.list().forEach(ce=>ie(()=>ce(N,le,ae)))}function K(N,le,ae,ce,we){const ne=M(N,le);if(ne)return ne;const g=le===Ei,T=Os?history.state:{};ae&&(ce||g?s.replace(N.fullPath,_t({scroll:g&&T&&T.scroll},we)):s.push(N.fullPath,we)),l.value=N,ge(N,le,ae,g),Me()}let X;function Z(){X||(X=s.listen((N,le,ae)=>{if(!de.listening)return;const ce=p(N),we=P(ce);if(we){R(_t(we,{replace:!0}),ce).catch(Ar);return}c=ce;const ne=l.value;Os&&rg(Bu(ne.fullPath,ae.delta),da()),y(ce,ne).catch(g=>ti(g,12)?g:ti(g,2)?(R(g.to,ce).then(T=>{ti(T,20)&&!ae.delta&&ae.type===Gr.pop&&s.go(-1,!1)}).catch(Ar),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),B(g,ce,ne))).then(g=>{g=g||K(ce,ne,!1),g&&(ae.delta&&!ti(g,8)?s.go(-ae.delta,!1):ae.type===Gr.pop&&ti(g,20)&&s.go(-1,!1)),E(ce,ne,g)}).catch(Ar)}))}let oe=fr(),H=fr(),J;function B(N,le,ae){Me(N);const ce=H.list();return ce.length?ce.forEach(we=>we(N,le,ae)):console.error(N),Promise.reject(N)}function me(){return J&&l.value!==Ei?Promise.resolve():new Promise((N,le)=>{oe.add([N,le])})}function Me(N){return J||(J=!N,Z(),oe.list().forEach(([le,ae])=>N?ae(N):le()),oe.reset()),N}function ge(N,le,ae,ce){const{scrollBehavior:we}=n;if(!Os||!we)return Promise.resolve();const ne=!ae&&og(Bu(N.fullPath,0))||(ce||!ae)&&history.state&&history.state.scroll||null;return Af().then(()=>we(N,le,ne)).then(g=>g&&sg(g)).catch(g=>B(g,N,le))}const Re=N=>s.go(N);let Be;const se=new Set,de={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:d,getRoutes:x,resolve:p,options:n,push:w,replace:O,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:me,install(N){const le=this;N.component("RouterLink",Cg),N.component("RouterView",Dg),N.config.globalProperties.$router=le,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Vs(l)}),Os&&!Be&&l.value===Ei&&(Be=!0,w(s.location).catch(we=>{}));const ae={};for(const we in Ei)Object.defineProperty(ae,we,{get:()=>l.value[we],enumerable:!0});N.provide(Gc,le),N.provide(gd,Mf(ae)),N.provide(Rl,l);const ce=N.unmount;se.add(N),N.unmount=function(){se.delete(N),se.size<1&&(c=Ei,X&&X(),X=null,l.value=Ei,Be=!1,J=!1),ce()}}};function Se(N){return N.reduce((le,ae)=>le.then(()=>ie(ae)),Promise.resolve())}return de}function Ng(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Zs(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Zs(c,l))||s.push(l))}return[t,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hc="169",Fg=0,Qu=1,Og=2,_d=1,Bg=2,li=3,Gi=0,pn=1,ft=2,Oi=0,qs=1,eh=2,th=3,nh=4,zg=5,ls=100,Gg=101,Hg=102,kg=103,Vg=104,Wg=200,Xg=201,qg=202,Yg=203,Cl=204,Pl=205,$g=206,jg=207,Kg=208,Zg=209,Jg=210,Qg=211,e_=212,t_=213,n_=214,Il=0,Ll=1,Dl=2,Qs=3,Ul=4,Nl=5,Fl=6,Ol=7,vd=0,i_=1,s_=2,Bi=0,r_=1,o_=2,a_=3,l_=4,c_=5,u_=6,h_=7,xd=300,er=301,tr=302,Hr=303,Bl=304,pa=306,Nt=1e3,us=1001,zl=1002,En=1003,f_=1004,lo=1005,Ln=1006,Na=1007,hs=1008,mi=1009,yd=1010,Md=1011,kr=1012,kc=1013,ps=1014,hi=1015,Kr=1016,Vc=1017,Wc=1018,nr=1020,Sd=35902,wd=1021,Ed=1022,Un=1023,bd=1024,Td=1025,Ys=1026,ir=1027,Ad=1028,Xc=1029,Rd=1030,qc=1031,Yc=1033,Oo=33776,Bo=33777,zo=33778,Go=33779,Gl=35840,Hl=35841,kl=35842,Vl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37808,$l=37809,jl=37810,Kl=37811,Zl=37812,Jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,Ho=36492,ac=36494,lc=36495,Cd=36283,cc=36284,uc=36285,hc=36286,d_=3200,p_=3201,Pd=0,m_=1,Fi="",Wn="srgb",Vi="srgb-linear",$c="display-p3",ma="display-p3-linear",Ko="linear",Rt="srgb",Zo="rec709",Jo="p3",Ss=7680,ih=519,g_=512,__=513,v_=514,Id=515,x_=516,y_=517,M_=518,S_=519,sh=35044,rh="300 es",fi=2e3,Qo=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oh=1234567;const Cr=Math.PI/180,Vr=180/Math.PI;function vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function jc(n,e){return(n%e+e)%e}function w_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function E_(n,e,t){return n!==e?(t-n)/(e-n):0}function Pr(n,e,t){return(1-t)*n+t*e}function b_(n,e,t,i){return Pr(n,e,1-Math.exp(-t*i))}function T_(n,e=1){return e-Math.abs(jc(n,e*2)-e)}function A_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function R_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function C_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function P_(n,e){return n+Math.random()*(e-n)}function I_(n){return n*(.5-Math.random())}function L_(n){n!==void 0&&(oh=n);let e=oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function D_(n){return n*Cr}function U_(n){return n*Vr}function N_(n){return(n&n-1)===0&&n!==0}function F_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function O_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function B_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ct={DEG2RAD:Cr,RAD2DEG:Vr,generateUUID:vs,clamp:$t,euclideanModulo:jc,mapLinear:w_,inverseLerp:E_,lerp:Pr,damp:b_,pingpong:T_,smoothstep:A_,smootherstep:R_,randInt:C_,randFloat:P_,randFloatSpread:I_,seededRandom:L_,degToRad:D_,radToDeg:U_,isPowerOfTwo:N_,ceilPowerOfTwo:F_,floorPowerOfTwo:O_,setQuaternionFromProperEuler:B_,normalize:ln,denormalize:Bs};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,s,r,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],_=i[8],x=s[0],d=s[3],p=s[6],b=s[1],M=s[4],w=s[7],O=s[2],P=s[5],R=s[8];return r[0]=o*x+a*b+l*O,r[3]=o*d+a*M+l*P,r[6]=o*p+a*w+l*R,r[1]=c*x+h*b+u*O,r[4]=c*d+h*M+u*P,r[7]=c*p+h*w+u*R,r[2]=f*x+m*b+_*O,r[5]=f*d+m*M+_*P,r[8]=f*p+m*w+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=t*u+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new it;function Ld(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function z_(){const n=Wr("canvas");return n.style.display="block",n}const ah={};function ko(n){n in ah||(ah[n]=!0,console.warn(n))}function G_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function H_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function k_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lh=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ch=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dr={[Vi]:{transfer:Ko,primaries:Zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Wn]:{transfer:Rt,primaries:Zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ma]:{transfer:Ko,primaries:Jo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ch),fromReference:n=>n.applyMatrix3(lh)},[$c]:{transfer:Rt,primaries:Jo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ch),fromReference:n=>n.applyMatrix3(lh).convertLinearToSRGB()}},V_=new Set([Vi,ma]),pt={enabled:!0,_workingColorSpace:Vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!V_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=dr[e].toReference,s=dr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return dr[n].primaries},getTransfer:function(n){return n===Fi?Ko:dr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(dr[e].luminanceCoefficients)}};function $s(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ws;class W_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=Wr("canvas")),ws.width=e.width,ws.height=e.height;const i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$s(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($s(t[i]/255)*255):t[i]=$s(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X_=0;class Dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?W_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let q_=0;class dn extends or{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=us,s=us,r=Ln,o=hs,a=Un,l=mi,c=dn.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=vs(),this.name="",this.source=new Dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nt:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nt:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=xd;dn.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],x=l[2],d=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(m+1)/2,O=(p+1)/2,P=(h+f)/4,R=(u+x)/4,F=(_+d)/4;return M>w&&M>O?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=R/i):w>O?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=F/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=R/r,s=F/r),this.set(i,s,r,t),this}let b=Math.sqrt((d-_)*(d-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(d-_)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y_ extends or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new dn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends Y_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ud extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==f||c!==m||h!==_){let d=1-a;const p=l*f+c*m+h*_+u*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const O=Math.sqrt(M),P=Math.atan2(O,p*b);d=Math.sin(d*P)/O,a=Math.sin(a*P)/O}const w=a*b;if(l=l*d+f*w,c=c*d+m*w,h=h*d+_*w,u=u*d+x*w,d===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*m-c*f,e[t+1]=l*_+h*f+c*u-a*m,e[t+2]=c*_+h*m+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new q,uh=new Zr;class Jr{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),uo.subVectors(this.max,pr),Es.subVectors(e.a,pr),bs.subVectors(e.b,pr),Ts.subVectors(e.c,pr),bi.subVectors(bs,Es),Ti.subVectors(Ts,bs),Qi.subVectors(Es,Ts);let t=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-Qi.z,Qi.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,Qi.z,0,-Qi.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-Qi.y,Qi.x,0];return!Ga(t,Es,bs,Ts,uo)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Es,bs,Ts,uo))?!1:(ho.crossVectors(bi,Ti),t=[ho.x,ho.y,ho.z],Ga(t,Es,bs,Ts,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new q,new q,new q,new q,new q,new q,new q,new q],Rn=new q,co=new Jr,Es=new q,bs=new q,Ts=new q,bi=new q,Ti=new q,Qi=new q,pr=new q,uo=new q,ho=new q,es=new q;function Ga(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),h=i.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const j_=new Jr,mr=new q,Ha=new q;class Kc{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):j_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Ha)),this.expandByPoint(mr.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new q,ka=new q,fo=new q,Ai=new q,Va=new q,po=new q,Wa=new q;class K_{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ka.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(ka);const r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=Ai.dot(this.direction),l=-Ai.dot(fo),c=Ai.lengthSq(),h=Math.abs(1-o*o);let u,f,m,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ka).addScaledVector(fo,f),m}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){Va.subVectors(t,e),po.subVectors(i,e),Wa.crossVectors(Va,po);let o=this.direction.dot(Wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(po.crossVectors(Ai,po));if(l<0)return null;const c=a*this.direction.dot(Va.cross(Ai));if(c<0||l+c>o)return null;const h=-a*Ai.dot(Wa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,s,r,o,a,l,c,h,u,f,m,_,x,d){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,m,_,x,d)}set(e,t,i,s,r,o,a,l,c,h,u,f,m,_,x,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=_,p[11]=x,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,_=c*h,x=c*u;t[0]=f+x*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,_=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+_,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z_,e,J_)}lookAt(e,t,i){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ri.crossVectors(i,mn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ri.crossVectors(i,mn)),Ri.normalize(),mo.crossVectors(mn,Ri),s[0]=Ri.x,s[4]=mo.x,s[8]=mn.x,s[1]=Ri.y,s[5]=mo.y,s[9]=mn.y,s[2]=Ri.z,s[6]=mo.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],_=i[2],x=i[6],d=i[10],p=i[14],b=i[3],M=i[7],w=i[11],O=i[15],P=s[0],R=s[4],F=s[8],ie=s[12],y=s[1],E=s[5],K=s[9],X=s[13],Z=s[2],oe=s[6],H=s[10],J=s[14],B=s[3],me=s[7],Me=s[11],ge=s[15];return r[0]=o*P+a*y+l*Z+c*B,r[4]=o*R+a*E+l*oe+c*me,r[8]=o*F+a*K+l*H+c*Me,r[12]=o*ie+a*X+l*J+c*ge,r[1]=h*P+u*y+f*Z+m*B,r[5]=h*R+u*E+f*oe+m*me,r[9]=h*F+u*K+f*H+m*Me,r[13]=h*ie+u*X+f*J+m*ge,r[2]=_*P+x*y+d*Z+p*B,r[6]=_*R+x*E+d*oe+p*me,r[10]=_*F+x*K+d*H+p*Me,r[14]=_*ie+x*X+d*J+p*ge,r[3]=b*P+M*y+w*Z+O*B,r[7]=b*R+M*E+w*oe+O*me,r[11]=b*F+M*K+w*H+O*Me,r[15]=b*ie+M*X+w*J+O*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],_=e[3],x=e[7],d=e[11],p=e[15];return _*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*m-i*l*m)+x*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+d*(+t*c*u-t*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],_=e[12],x=e[13],d=e[14],p=e[15],b=u*d*c-x*f*c+x*l*m-a*d*m-u*l*p+a*f*p,M=_*f*c-h*d*c-_*l*m+o*d*m+h*l*p-o*f*p,w=h*x*c-_*u*c+_*a*m-o*x*m-h*a*p+o*u*p,O=_*u*l-h*x*l-_*a*f+o*x*f+h*a*d-o*u*d,P=t*b+i*M+s*w+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=b*R,e[1]=(x*f*r-u*d*r-x*s*m+i*d*m+u*s*p-i*f*p)*R,e[2]=(a*d*r-x*l*r+x*s*c-i*d*c-a*s*p+i*l*p)*R,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*m-i*l*m)*R,e[4]=M*R,e[5]=(h*d*r-_*f*r+_*s*m-t*d*m-h*s*p+t*f*p)*R,e[6]=(_*l*r-o*d*r-_*s*c+t*d*c+o*s*p-t*l*p)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*R,e[8]=w*R,e[9]=(_*u*r-h*x*r-_*i*m+t*x*m+h*i*p-t*u*p)*R,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*m-t*a*m)*R,e[12]=O*R,e[13]=(h*x*s-_*u*s+_*i*f-t*x*f-h*i*d+t*u*d)*R,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*d-t*a*d)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,_=r*u,x=o*h,d=o*u,p=a*u,b=l*c,M=l*h,w=l*u,O=i.x,P=i.y,R=i.z;return s[0]=(1-(x+p))*O,s[1]=(m+w)*O,s[2]=(_-M)*O,s[3]=0,s[4]=(m-w)*P,s[5]=(1-(f+p))*P,s[6]=(d+b)*P,s[7]=0,s[8]=(_+M)*R,s[9]=(d-b)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const c=1/r,h=1/o,u=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=fi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(a===fi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Qo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=fi){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,m=(i+s)*h;let _,x;if(a===fi)_=(o+r)*u,x=-2*u;else if(a===Qo)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const As=new q,Cn=new It,Z_=new q(0,0,0),J_=new q(1,1,1),Ri=new q,mo=new q,mn=new q,hh=new It,fh=new Zr;class Kn{constructor(e=0,t=0,i=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q_=0;const dh=new q,Rs=new Zr,si=new It,go=new q,gr=new q,ev=new q,tv=new Zr,ph=new q(1,0,0),mh=new q(0,1,0),gh=new q(0,0,1),_h={type:"added"},nv={type:"removed"},Cs={type:"childadded",child:null},Xa={type:"childremoved",child:null};class nn extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new q,t=new Kn,i=new Zr,s=new q(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new it}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(ph,e)}rotateY(e){return this.rotateOnAxis(mh,e)}rotateZ(e){return this.rotateOnAxis(gh,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ph,e)}translateY(e){return this.translateOnAxis(mh,e)}translateZ(e){return this.translateOnAxis(gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?go.copy(e):go.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(gr,go,this.up):si.lookAt(go,gr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(si),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nv),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}nn.DEFAULT_UP=new q(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new q,ri=new q,qa=new q,oi=new q,Ps=new q,Is=new q,vh=new q,Ya=new q,$a=new q,ja=new q,Ka=new xt,Za=new xt,Ja=new xt;class Dn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),ri.subVectors(i,t),qa.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ri),l=Pn.dot(qa),c=ri.dot(ri),h=ri.dot(qa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,i),Ja.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector(Za,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),ri.subVectors(e,t),Pn.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Pn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,i),Is.subVectors(r,i),Ya.subVectors(e,i);const l=Ps.dot(Ya),c=Is.dot(Ya);if(l<=0&&c<=0)return t.copy(i);$a.subVectors(e,s);const h=Ps.dot($a),u=Is.dot($a);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ps,o);ja.subVectors(e,r);const m=Ps.dot(ja),_=Is.dot(ja);if(_>=0&&m<=_)return t.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Is,a);const d=h*_-m*u;if(d<=0&&u-h>=0&&m-_>=0)return vh.subVectors(r,s),a=(u-h)/(u-h+(m-_)),t.copy(s).addScaledVector(vh,a);const p=1/(d+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Ps,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=jc(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Qa(o,r,e+1/3),this.g=Qa(o,r,e),this.b=Qa(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const i=Fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return pt.fromWorkingColorSpace(Qt.copy(this),e),Math.round($t(Qt.r*255,0,255))*65536+Math.round($t(Qt.g*255,0,255))*256+Math.round($t(Qt.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Wn){pt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,s=Qt.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(_o);const i=Pr(Ci.h,_o.h,t),s=Pr(Ci.s,_o.s,t),r=Pr(Ci.l,_o.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ut;ut.NAMES=Fd;let iv=0;class Qr extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=qs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bn extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new q,vo=new Ue;class $n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sh,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sh&&(e.usage=this.usage),e}}class Od extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bd extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ft extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sv=0;const wn=new It,el=new nn,Ls=new q,gn=new Jr,_r=new Jr,qt=new q;class An extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Bd:Od)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(gn.min,_r.min),gn.expandByPoint(qt),qt.addVectors(gn.max,_r.max),gn.expandByPoint(qt)):(gn.expandByPoint(_r.min),gn.expandByPoint(_r.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qt.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),qt.add(Ls)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new q,l[F]=new q;const c=new q,h=new q,u=new q,f=new Ue,m=new Ue,_=new Ue,x=new q,d=new q;function p(F,ie,y){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,ie),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,ie),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(f),_.sub(f);const E=1/(m.x*_.y-_.x*m.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(E),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(E),a[F].add(x),a[ie].add(x),a[y].add(x),l[F].add(d),l[ie].add(d),l[y].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,ie=b.length;F<ie;++F){const y=b[F],E=y.start,K=y.count;for(let X=E,Z=E+K;X<Z;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const M=new q,w=new q,O=new q,P=new q;function R(F){O.fromBufferAttribute(s,F),P.copy(O);const ie=a[F];M.copy(ie),M.sub(O.multiplyScalar(O.dot(ie))).normalize(),w.crossVectors(P,ie);const E=w.dot(l[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,E)}for(let F=0,ie=b.length;F<ie;++F){const y=b[F],E=y.start,K=y.count;for(let X=E,Z=E+K;X<Z;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,d=l.length;x<d;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let p=0;p<h;p++)f[_++]=c[m++]}return new $n(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xh=new It,ts=new K_,xo=new Kc,yh=new q,yo=new q,Mo=new q,So=new q,tl=new q,wo=new q,Mh=new q,Eo=new q;class L extends nn{constructor(e=new An,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(tl.fromBufferAttribute(u,e),o?wo.addScaledVector(tl,h):wo.addScaledVector(tl.sub(t),h))}t.add(wo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(xo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(xo,yh)===null||ts.origin.distanceToSquared(yh)>(e.far-e.near)**2))&&(xh.copy(r).invert(),ts.copy(e.ray).applyMatrix4(xh),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],p=o[d.materialIndex],b=Math.max(d.start,m.start),M=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let w=b,O=M;w<O;w+=3){const P=a.getX(w),R=a.getX(w+1),F=a.getX(w+2);s=bo(this,p,e,i,c,h,u,P,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const b=a.getX(d),M=a.getX(d+1),w=a.getX(d+2);s=bo(this,o,e,i,c,h,u,b,M,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],p=o[d.materialIndex],b=Math.max(d.start,m.start),M=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let w=b,O=M;w<O;w+=3){const P=w,R=w+1,F=w+2;s=bo(this,p,e,i,c,h,u,P,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const b=d,M=d+1,w=d+2;s=bo(this,o,e,i,c,h,u,b,M,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function rv(n,e,t,i,s,r,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gi,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:n}}function bo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,yo),n.getVertexPosition(l,Mo),n.getVertexPosition(c,So);const h=rv(n,e,t,i,yo,Mo,So,Mh);if(h){const u=new q;Dn.getBarycoord(Mh,yo,Mo,So,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,l,c,u,new Ue)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,l,c,u,new Ue)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,l,c,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Dn.getNormal(yo,Mo,So,f.normal),h.face=f,h.barycoord=u}return h}class xs extends An{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function _(x,d,p,b,M,w,O,P,R,F,ie){const y=w/R,E=O/F,K=w/2,X=O/2,Z=P/2,oe=R+1,H=F+1;let J=0,B=0;const me=new q;for(let Me=0;Me<H;Me++){const ge=Me*E-X;for(let Re=0;Re<oe;Re++){const Be=Re*y-K;me[x]=Be*b,me[d]=ge*M,me[p]=Z,c.push(me.x,me.y,me.z),me[x]=0,me[d]=0,me[p]=P>0?1:-1,h.push(me.x,me.y,me.z),u.push(Re/R),u.push(1-Me/F),J+=1}}for(let Me=0;Me<F;Me++)for(let ge=0;ge<R;ge++){const Re=f+ge+oe*Me,Be=f+ge+oe*(Me+1),se=f+(ge+1)+oe*(Me+1),de=f+(ge+1)+oe*Me;l.push(Re,Be,de),l.push(Be,se,de),B+=6}a.addGroup(m,B,ie),m+=B,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function cn(n){const e={};for(let t=0;t<n.length;t++){const i=sr(n[t]);for(const s in i)e[s]=i[s]}return e}function ov(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const av={clone:sr,merge:cn};var lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lv,this.fragmentShader=cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gd extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new q,Sh=new Ue,wh=new Ue;class Ut extends Gd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Sh,wh),t.subVectors(wh,Sh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Us=1;class uv extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(Ds,Us,e,t);s.layers=this.layers,this.add(s);const r=new Ut(Ds,Us,e,t);r.layers=this.layers,this.add(r);const o=new Ut(Ds,Us,e,t);o.layers=this.layers,this.add(o);const a=new Ut(Ds,Us,e,t);a.layers=this.layers,this.add(a);const l=new Ut(Ds,Us,e,t);l.layers=this.layers,this.add(l);const c=new Ut(Ds,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hd extends dn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hv extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Hd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xs(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Oi});r.uniforms.tEquirect.value=t;const o=new L(s,r),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=Ln),new uv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const nl=new q,fv=new q,dv=new it;class os{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=nl.subVectors(i,t).cross(fv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dv.getNormalMatrix(e),s=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Kc,To=new q;class Zc{constructor(e=new os,t=new os,i=new os,s=new os,r=new os,o=new os){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],_=s[9],x=s[10],d=s[11],p=s[12],b=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,d-m,w-p).normalize(),i[1].setComponents(l+r,f+c,d+m,w+p).normalize(),i[2].setComponents(l+o,f+h,d+_,w+b).normalize(),i[3].setComponents(l-o,f-h,d-_,w-b).normalize(),i[4].setComponents(l-a,f-u,d-x,w-M).normalize(),t===fi)i[5].setComponents(l+a,f+u,d+x,w+M).normalize();else if(t===Qo)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(To.x=s.normal.x>0?e.max.x:e.min.x,To.y=s.normal.y>0?e.max.y:e.min.y,To.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pv(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],x=u[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const x=u[m];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ga extends An{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],_=[],x=[],d=[];for(let p=0;p<h;p++){const b=p*f-o;for(let M=0;M<c;M++){const w=M*u-r;_.push(w,-b,0),x.push(0,0,1),d.push(M/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,w=b+c*(p+1),O=b+1+c*(p+1),P=b+1+c*p;m.push(M,w,P),m.push(w,O,P)}this.setIndex(m),this.setAttribute("position",new Ft(_,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.widthSegments,e.heightSegments)}}var mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gv=`#ifdef USE_ALPHAHASH
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
#endif`,_v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mv=`#ifdef USE_AOMAP
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
#endif`,Sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wv=`#ifdef USE_BATCHING
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
#endif`,Ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Av=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rv=`#ifdef USE_IRIDESCENCE
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
#endif`,Cv=`#ifdef USE_BUMPMAP
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
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bv=`#define PI 3.141592653589793
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
} // validated`,zv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gv=`vec3 transformedNormal = objectNormal;
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
#endif`,Hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xv="gl_FragColor = linearToOutputTexel( gl_FragColor );",qv=`
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
}`,Yv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nx=`#ifdef USE_GRADIENTMAP
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
}`,ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ox=`uniform bool receiveShadow;
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
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fx=`PhysicalMaterial material;
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
#endif`,dx=`struct PhysicalMaterial {
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
}`,px=`
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_x=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ex=`#if defined( USE_POINTS_UV )
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
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
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
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ox=`#ifdef USE_NORMALMAP
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
#endif`,Bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qx=`float getShadowMask() {
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
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,Sy=`#define DISTANCE
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
}`,wy=`#define DISTANCE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,by=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#define LAMBERT
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
}`,Iy=`#define LAMBERT
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
}`,Dy=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,Ny=`#define NORMAL
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
}`,Fy=`#define PHONG
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
}`,Oy=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,zy=`#define STANDARD
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
}`,Gy=`#define TOON
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
}`,Hy=`#define TOON
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
}`,ky=`uniform float size;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Xy=`uniform vec3 color;
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
}`,qy=`uniform float rotation;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:mv,alphahash_pars_fragment:gv,alphamap_fragment:_v,alphamap_pars_fragment:vv,alphatest_fragment:xv,alphatest_pars_fragment:yv,aomap_fragment:Mv,aomap_pars_fragment:Sv,batching_pars_vertex:wv,batching_vertex:Ev,begin_vertex:bv,beginnormal_vertex:Tv,bsdfs:Av,iridescence_fragment:Rv,bumpmap_pars_fragment:Cv,clipping_planes_fragment:Pv,clipping_planes_pars_fragment:Iv,clipping_planes_pars_vertex:Lv,clipping_planes_vertex:Dv,color_fragment:Uv,color_pars_fragment:Nv,color_pars_vertex:Fv,color_vertex:Ov,common:Bv,cube_uv_reflection_fragment:zv,defaultnormal_vertex:Gv,displacementmap_pars_vertex:Hv,displacementmap_vertex:kv,emissivemap_fragment:Vv,emissivemap_pars_fragment:Wv,colorspace_fragment:Xv,colorspace_pars_fragment:qv,envmap_fragment:Yv,envmap_common_pars_fragment:$v,envmap_pars_fragment:jv,envmap_pars_vertex:Kv,envmap_physical_pars_fragment:ax,envmap_vertex:Zv,fog_vertex:Jv,fog_pars_vertex:Qv,fog_fragment:ex,fog_pars_fragment:tx,gradientmap_pars_fragment:nx,lightmap_pars_fragment:ix,lights_lambert_fragment:sx,lights_lambert_pars_fragment:rx,lights_pars_begin:ox,lights_toon_fragment:lx,lights_toon_pars_fragment:cx,lights_phong_fragment:ux,lights_phong_pars_fragment:hx,lights_physical_fragment:fx,lights_physical_pars_fragment:dx,lights_fragment_begin:px,lights_fragment_maps:mx,lights_fragment_end:gx,logdepthbuf_fragment:_x,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:yx,map_fragment:Mx,map_pars_fragment:Sx,map_particle_fragment:wx,map_particle_pars_fragment:Ex,metalnessmap_fragment:bx,metalnessmap_pars_fragment:Tx,morphinstance_vertex:Ax,morphcolor_vertex:Rx,morphnormal_vertex:Cx,morphtarget_pars_vertex:Px,morphtarget_vertex:Ix,normal_fragment_begin:Lx,normal_fragment_maps:Dx,normal_pars_fragment:Ux,normal_pars_vertex:Nx,normal_vertex:Fx,normalmap_pars_fragment:Ox,clearcoat_normal_fragment_begin:Bx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Hx,opaque_fragment:kx,packing:Vx,premultiplied_alpha_fragment:Wx,project_vertex:Xx,dithering_fragment:qx,dithering_pars_fragment:Yx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:Zx,shadowmap_vertex:Jx,shadowmask_pars_fragment:Qx,skinbase_vertex:ey,skinning_pars_vertex:ty,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:sy,specularmap_pars_fragment:ry,tonemapping_fragment:oy,tonemapping_pars_fragment:ay,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:uy,uv_pars_vertex:hy,uv_vertex:fy,worldpos_vertex:dy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:_y,cube_vert:vy,cube_frag:xy,depth_vert:yy,depth_frag:My,distanceRGBA_vert:Sy,distanceRGBA_frag:wy,equirect_vert:Ey,equirect_frag:by,linedashed_vert:Ty,linedashed_frag:Ay,meshbasic_vert:Ry,meshbasic_frag:Cy,meshlambert_vert:Py,meshlambert_frag:Iy,meshmatcap_vert:Ly,meshmatcap_frag:Dy,meshnormal_vert:Uy,meshnormal_frag:Ny,meshphong_vert:Fy,meshphong_frag:Oy,meshphysical_vert:By,meshphysical_frag:zy,meshtoon_vert:Gy,meshtoon_frag:Hy,points_vert:ky,points_frag:Vy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:qy,sprite_frag:Yy},De={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},qn={basic:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:cn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:cn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ut(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:cn([De.points,De.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:cn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:cn([De.common,De.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:cn([De.sprite,De.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:cn([De.common,De.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:cn([De.lights,De.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};qn.physical={uniforms:cn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ao={r:0,b:0,g:0},is=new Kn,$y=new It;function jy(n,e,t,i,s,r,o){const a=new ut(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const w=_(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(b,M){const w=_(M);w&&(w.isCubeTexture||w.mapping===pa)?(h===void 0&&(h=new L(new xs(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:sr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),is.copy(M.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($y.makeRotationFromEuler(is)),h.material.toneMapped=pt.getTransfer(w.colorSpace)!==Rt,(u!==w||f!==w.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new L(new ga(2,2),new Zn({name:"BackgroundMaterial",uniforms:sr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=pt.getTransfer(w.colorSpace)!==Rt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Ao,zd(n)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:d}}function Ky(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,E,K,X,Z){let oe=!1;const H=u(X,K,E);r!==H&&(r=H,c(r.object)),oe=m(y,X,K,Z),oe&&_(y,X,K,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,w(y,E,K,X),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,K){const X=K.wireframe===!0;let Z=i[y.id];Z===void 0&&(Z={},i[y.id]=Z);let oe=Z[E.id];oe===void 0&&(oe={},Z[E.id]=oe);let H=oe[X];return H===void 0&&(H=f(l()),oe[X]=H),H}function f(y){const E=[],K=[],X=[];for(let Z=0;Z<t;Z++)E[Z]=0,K[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:K,attributeDivisors:X,object:y,attributes:{},index:null}}function m(y,E,K,X){const Z=r.attributes,oe=E.attributes;let H=0;const J=K.getAttributes();for(const B in J)if(J[B].location>=0){const Me=Z[B];let ge=oe[B];if(ge===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),Me===void 0||Me.attribute!==ge||ge&&Me.data!==ge.data)return!0;H++}return r.attributesNum!==H||r.index!==X}function _(y,E,K,X){const Z={},oe=E.attributes;let H=0;const J=K.getAttributes();for(const B in J)if(J[B].location>=0){let Me=oe[B];Me===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor));const ge={};ge.attribute=Me,Me&&Me.data&&(ge.data=Me.data),Z[B]=ge,H++}r.attributes=Z,r.attributesNum=H,r.index=X}function x(){const y=r.newAttributes;for(let E=0,K=y.length;E<K;E++)y[E]=0}function d(y){p(y,0)}function p(y,E){const K=r.newAttributes,X=r.enabledAttributes,Z=r.attributeDivisors;K[y]=1,X[y]===0&&(n.enableVertexAttribArray(y),X[y]=1),Z[y]!==E&&(n.vertexAttribDivisor(y,E),Z[y]=E)}function b(){const y=r.newAttributes,E=r.enabledAttributes;for(let K=0,X=E.length;K<X;K++)E[K]!==y[K]&&(n.disableVertexAttribArray(K),E[K]=0)}function M(y,E,K,X,Z,oe,H){H===!0?n.vertexAttribIPointer(y,E,K,Z,oe):n.vertexAttribPointer(y,E,K,X,Z,oe)}function w(y,E,K,X){x();const Z=X.attributes,oe=K.getAttributes(),H=E.defaultAttributeValues;for(const J in oe){const B=oe[J];if(B.location>=0){let me=Z[J];if(me===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){const Me=me.normalized,ge=me.itemSize,Re=e.get(me);if(Re===void 0)continue;const Be=Re.buffer,se=Re.type,de=Re.bytesPerElement,Se=se===n.INT||se===n.UNSIGNED_INT||me.gpuType===kc;if(me.isInterleavedBufferAttribute){const N=me.data,le=N.stride,ae=me.offset;if(N.isInstancedInterleavedBuffer){for(let ce=0;ce<B.locationSize;ce++)p(B.location+ce,N.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ce=0;ce<B.locationSize;ce++)d(B.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ce=0;ce<B.locationSize;ce++)M(B.location+ce,ge/B.locationSize,se,Me,le*de,(ae+ge/B.locationSize*ce)*de,Se)}else{if(me.isInstancedBufferAttribute){for(let N=0;N<B.locationSize;N++)p(B.location+N,me.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let N=0;N<B.locationSize;N++)d(B.location+N);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let N=0;N<B.locationSize;N++)M(B.location+N,ge/B.locationSize,se,Me,ge*de,ge/B.locationSize*N*de,Se)}}else if(H!==void 0){const Me=H[J];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(B.location,Me);break;case 3:n.vertexAttrib3fv(B.location,Me);break;case 4:n.vertexAttrib4fv(B.location,Me);break;default:n.vertexAttrib1fv(B.location,Me)}}}}b()}function O(){F();for(const y in i){const E=i[y];for(const K in E){const X=E[K];for(const Z in X)h(X[Z].object),delete X[Z];delete E[K]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const K in E){const X=E[K];for(const Z in X)h(X[Z].object),delete X[Z];delete E[K]}delete i[y.id]}function R(y){for(const E in i){const K=i[E];if(K[y.id]===void 0)continue;const X=K[y.id];for(const Z in X)h(X[Z].object),delete X[Z];delete K[y.id]}}function F(){ie(),o=!0,r!==s&&(r=s,c(r.object))}function ie(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:ie,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:d,disableUnusedAttributes:b}}function Zy(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];t.update(m,i,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<f.length;x++)t.update(_,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Un&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const F=R===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hi&&!F)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:O,maxSamples:P}}function Qy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new os,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{const b=r?0:i,M=b*4;let w=p.clippingState||null;l.value=w,w=h(_,f,M,m);for(let O=0;O!==M;++O)w[O]=t[O];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,_){const x=u!==null?u.length:0;let d=null;if(x!==0){if(d=l.value,_!==!0||d===null){const p=m+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<p)&&(d=new Float32Array(p));for(let M=0,w=m;M!==x;++M,w+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(d,w),d[w+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function eM(n){let e=new WeakMap;function t(o,a){return a===Hr?o.mapping=er:a===Bl&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hr||a===Bl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Vd extends Gd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gs=4,Eh=[.125,.215,.35,.446,.526,.582],cs=20,il=new Vd,bh=new ut;let sl=null,rl=0,ol=0,al=!1;const as=(1+Math.sqrt(5))/2,Ns=1/as,Th=[new q(-as,Ns,0),new q(as,Ns,0),new q(-Ns,0,as),new q(Ns,0,as),new q(0,as,-Ns),new q(0,as,Ns),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,rl,ol),this._renderer.xr.enabled=al,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Kr,format:Un,colorSpace:Vi,depthBuffer:!1},s=Rh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tM(r)),this._blurMaterial=nM(r,e,t)}return s}_compileMaterial(e){const t=new L(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,i,s){const a=new Ut(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bh),h.toneMapping=Bi,h.autoClear=!1;const m=new Bn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new L(new xs,m);let x=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,x=!0):(m.color.copy(bh),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Ro(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new L(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ro(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,il)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Th[(s-r-1)%Th.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new L(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cs-1),x=r/_,d=isFinite(r)?1+Math.floor(h*x):cs;d>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${cs}`);const p=[];let b=0;for(let R=0;R<cs;++R){const F=R/x,ie=Math.exp(-F*F/2);p.push(ie),R===0?b+=ie:R<d&&(b+=2*ie)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const w=this._sizeLods[s],O=3*w*(s>M-Gs?s-M+Gs:0),P=4*(this._cubeSize-w);Ro(t,O,P,3*w,2*w),l.setRenderTarget(t),l.render(u,il)}}function tM(n){const e=[],t=[],i=[];let s=n;const r=n-Gs+1+Eh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Gs?l=Eh[o-n+Gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,x=3,d=2,p=1,b=new Float32Array(x*_*m),M=new Float32Array(d*_*m),w=new Float32Array(p*_*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,F=P>2?0:-1,ie=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];b.set(ie,x*_*P),M.set(f,d*_*P);const y=[P,P,P,P,P,P];w.set(y,p*_*P)}const O=new An;O.setAttribute("position",new $n(b,x)),O.setAttribute("uv",new $n(M,d)),O.setAttribute("faceIndex",new $n(w,p)),e.push(O),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rh(n,e,t){const i=new ms(n,e,t);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nM(n,e,t){const i=new Float32Array(cs),s=new q(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ch(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ph(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function iM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hr||l===Bl,h=l===er||l===tr;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ah(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Ah(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ko("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rM(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let d=0,p=x.length;d<p;d++)e.remove(x[d])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const x=m[_];for(let d=0,p=x.length;d<p;d++)e.update(x[d],n.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let M=0,w=b.length;M<w;M+=3){const O=b[M+0],P=b[M+1],R=b[M+2];f.push(O,P,P,R,R,O)}}else if(_!==void 0){const b=_.array;x=_.version;for(let M=0,w=b.length/3-1;M<w;M+=3){const O=M+0,P=M+1,R=M+2;f.push(O,P,P,R,R,O)}}else return;const d=new(Ld(f)?Bd:Od)(f,1);d.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,d)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function oM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),t.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,f*o,_),t.update(m,i,_))}function h(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,_);let d=0;for(let p=0;p<_;p++)d+=m[p];t.update(d,i,1)}function u(f,m,_,x){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/o,m[p],x[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,x,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b];for(let b=0;b<x.length;b++)t.update(p,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function aM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lM(n,e,t){const i=new WeakMap,s=new xt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),d===!0&&(w=3);let O=a.attributes.position.count*w,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const R=new Float32Array(O*P*4*u),F=new Ud(R,O,P,u);F.type=hi,F.needsUpdate=!0;const ie=w*4;for(let E=0;E<u;E++){const K=p[E],X=b[E],Z=M[E],oe=O*P*4*E;for(let H=0;H<K.count;H++){const J=H*ie;_===!0&&(s.fromBufferAttribute(K,H),R[oe+J+0]=s.x,R[oe+J+1]=s.y,R[oe+J+2]=s.z,R[oe+J+3]=0),x===!0&&(s.fromBufferAttribute(X,H),R[oe+J+4]=s.x,R[oe+J+5]=s.y,R[oe+J+6]=s.z,R[oe+J+7]=0),d===!0&&(s.fromBufferAttribute(Z,H),R[oe+J+8]=s.x,R[oe+J+9]=s.y,R[oe+J+10]=s.z,R[oe+J+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:F,size:new Ue(O,P)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function cM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Wd extends dn{constructor(e,t,i,s,r,o,a,l,c,h=Ys){if(h!==Ys&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ys&&(i=ps),i===void 0&&h===ir&&(i=nr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xd=new dn,Ih=new Wd(1,1),qd=new Ud,Yd=new $_,$d=new Hd,Lh=[],Dh=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Fh=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Fh.set(i),n.uniformMatrix2fv(this.addr,!1,Fh),Wt(t,i)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Nh.set(i),n.uniformMatrix3fv(this.addr,!1,Nh),Wt(t,i)}}function gM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Uh.set(i),n.uniformMatrix4fv(this.addr,!1,Uh),Wt(t,i)}}function _M(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function MM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function bM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ih.compareFunction=Id,r=Ih):r=Xd,t.setTexture2D(e||r,s)}function TM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yd,s)}function AM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$d,s)}function RM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qd,s)}function CM(n){switch(n){case 5126:return uM;case 35664:return hM;case 35665:return fM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return yM;case 5125:return MM;case 36294:return SM;case 36295:return wM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return RM}}function PM(n,e){n.uniform1fv(this.addr,e)}function IM(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function LM(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function DM(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function UM(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NM(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function FM(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function OM(n,e){n.uniform1iv(this.addr,e)}function BM(n,e){n.uniform2iv(this.addr,e)}function zM(n,e){n.uniform3iv(this.addr,e)}function GM(n,e){n.uniform4iv(this.addr,e)}function HM(n,e){n.uniform1uiv(this.addr,e)}function kM(n,e){n.uniform2uiv(this.addr,e)}function VM(n,e){n.uniform3uiv(this.addr,e)}function WM(n,e){n.uniform4uiv(this.addr,e)}function XM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xd,r[o])}function qM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yd,r[o])}function YM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$d,r[o])}function $M(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qd,r[o])}function jM(n){switch(n){case 5126:return PM;case 35664:return IM;case 35665:return LM;case 35666:return DM;case 35674:return UM;case 35675:return NM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return GM;case 5125:return HM;case 36294:return kM;case 36295:return VM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return $M}}class KM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CM(t.type)}}class ZM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jM(t.type)}}class JM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function Oh(n,e){n.seq.push(e),n.map[e.id]=e}function QM(n,e,t){const i=n.name,s=i.length;for(ll.lastIndex=0;;){const r=ll.exec(i),o=ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Oh(t,c===void 0?new KM(a,n,e):new ZM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new JM(a),Oh(t,u)),t=u}}}class Vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);QM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Bh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const eS=37297;let tS=0;function nS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iS(n){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(n);let i;switch(e===t?i="":e===Jo&&t===Zo?i="LinearDisplayP3ToLinearSRGB":e===Zo&&t===Jo&&(i="LinearSRGBToLinearDisplayP3"),n){case Vi:case ma:return[i,"LinearTransferOETF"];case Wn:case $c:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function zh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+nS(n.getShaderSource(e),o)}else return s}function sS(n,e){const t=iS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rS(n,e){let t;switch(e){case r_:t="Linear";break;case o_:t="Reinhard";break;case a_:t="Cineon";break;case l_:t="ACESFilmic";break;case u_:t="AgX";break;case h_:t="Neutral";break;case c_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Co=new q;function oS(){pt.getLuminanceCoefficients(Co);const n=Co.x.toFixed(4),e=Co.y.toFixed(4),t=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function lS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function yr(n){return n!==""}function Gh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uS=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(n){return n.replace(uS,fS)}const hS=new Map;function fS(n,e){let t=nt[e];if(t===void 0){const i=hS.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const dS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(n){return n.replace(dS,pS)}function pS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function mS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function gS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _S(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function vS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vd:e="ENVMAP_BLENDING_MULTIPLY";break;case i_:e="ENVMAP_BLENDING_MIX";break;case s_:e="ENVMAP_BLENDING_ADD";break}return e}function xS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mS(t),c=gS(t),h=_S(t),u=vS(t),f=xS(t),m=aS(t),_=lS(r),x=s.createProgram();let d,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(d=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?rS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,sS("linearToOutputTexel",t.outputColorSpace),oS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=fc(o),o=Gh(o,t),o=Hh(o,t),a=fc(a),a=Gh(a,t),a=Hh(a,t),o=kh(o),a=kh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+d+o,w=b+p+a,O=Bh(s,s.VERTEX_SHADER,M),P=Bh(s,s.FRAGMENT_SHADER,w);s.attachShader(x,O),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(E){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(x).trim(),X=s.getShaderInfoLog(O).trim(),Z=s.getShaderInfoLog(P).trim();let oe=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,P);else{const J=zh(s,O,"vertex"),B=zh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+K+`
`+J+`
`+B)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(X===""||Z==="")&&(H=!1);H&&(E.diagnostics={runnable:oe,programLog:K,vertexShader:{log:X,prefix:d},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(O),s.deleteShader(P),F=new Vo(s,x),ie=cS(s,x)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let ie;this.getAttributes=function(){return ie===void 0&&R(this),ie};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,eS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=P,this}let MS=0;class SS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wS(e),t.set(e,i)),i}}class wS{constructor(e){this.id=MS++,this.code=e,this.usedTimes=0}}function ES(n,e,t,i,s,r,o){const a=new Nd,l=new SS,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,E,K,X,Z){const oe=X.fog,H=Z.geometry,J=y.isMeshStandardMaterial?X.environment:null,B=(y.isMeshStandardMaterial?t:e).get(y.envMap||J),me=B&&B.mapping===pa?B.image.height:null,Me=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Re=ge!==void 0?ge.length:0;let Be=0;H.morphAttributes.position!==void 0&&(Be=1),H.morphAttributes.normal!==void 0&&(Be=2),H.morphAttributes.color!==void 0&&(Be=3);let se,de,Se,N;if(Me){const tt=qn[Me];se=tt.vertexShader,de=tt.fragmentShader}else se=y.vertexShader,de=y.fragmentShader,l.update(y),Se=l.getVertexShaderID(y),N=l.getFragmentShaderID(y);const le=n.getRenderTarget(),ae=Z.isInstancedMesh===!0,ce=Z.isBatchedMesh===!0,we=!!y.map,ne=!!y.matcap,g=!!B,T=!!y.aoMap,I=!!y.lightMap,U=!!y.bumpMap,D=!!y.normalMap,Y=!!y.displacementMap,j=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,k=y.clearcoat>0,G=y.dispersion>0,V=y.iridescence>0,fe=y.sheen>0,ue=y.transmission>0,pe=C&&!!y.anisotropyMap,be=k&&!!y.clearcoatMap,he=k&&!!y.clearcoatNormalMap,ye=k&&!!y.clearcoatRoughnessMap,Ce=V&&!!y.iridescenceMap,Pe=V&&!!y.iridescenceThicknessMap,Te=fe&&!!y.sheenColorMap,Ve=fe&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,ke=!!y.specularColorMap,z=!!y.specularIntensityMap,xe=ue&&!!y.transmissionMap,ee=ue&&!!y.thicknessMap,Q=!!y.gradientMap,_e=!!y.alphaMap,ve=y.alphaTest>0,Fe=!!y.alphaHash,We=!!y.extensions;let Ze=Bi;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const qe={shaderID:Me,shaderType:y.type,shaderName:y.name,vertexShader:se,fragmentShader:de,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ce,batchingColor:ce&&Z._colorsTexture!==null,instancing:ae,instancingColor:ae&&Z.instanceColor!==null,instancingMorph:ae&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Vi,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:ne,envMap:g,envMapMode:g&&B.mapping,envMapCubeUVHeight:me,aoMap:T,lightMap:I,bumpMap:U,normalMap:D,displacementMap:m&&Y,emissiveMap:j,normalMapObjectSpace:D&&y.normalMapType===m_,normalMapTangentSpace:D&&y.normalMapType===Pd,metalnessMap:S,roughnessMap:v,anisotropy:C,anisotropyMap:pe,clearcoat:k,clearcoatMap:be,clearcoatNormalMap:he,clearcoatRoughnessMap:ye,dispersion:G,iridescence:V,iridescenceMap:Ce,iridescenceThicknessMap:Pe,sheen:fe,sheenColorMap:Te,sheenRoughnessMap:Ve,specularMap:Ie,specularColorMap:ke,specularIntensityMap:z,transmission:ue,transmissionMap:xe,thicknessMap:ee,gradientMap:Q,opaque:y.transparent===!1&&y.blending===qs&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:ve,alphaHash:Fe,combine:y.combine,mapUv:we&&d(y.map.channel),aoMapUv:T&&d(y.aoMap.channel),lightMapUv:I&&d(y.lightMap.channel),bumpMapUv:U&&d(y.bumpMap.channel),normalMapUv:D&&d(y.normalMap.channel),displacementMapUv:Y&&d(y.displacementMap.channel),emissiveMapUv:j&&d(y.emissiveMap.channel),metalnessMapUv:S&&d(y.metalnessMap.channel),roughnessMapUv:v&&d(y.roughnessMap.channel),anisotropyMapUv:pe&&d(y.anisotropyMap.channel),clearcoatMapUv:be&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&d(y.sheenRoughnessMap.channel),specularMapUv:Ie&&d(y.specularMap.channel),specularColorMapUv:ke&&d(y.specularColorMap.channel),specularIntensityMapUv:z&&d(y.specularIntensityMap.channel),transmissionMapUv:xe&&d(y.transmissionMap.channel),thicknessMapUv:ee&&d(y.thicknessMap.channel),alphaMapUv:_e&&d(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(D||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!H.attributes.uv&&(we||_e),fog:!!oe,useFog:y.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&pt.getTransfer(y.map.colorSpace)===Rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ft,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function b(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const K in y.defines)E.push(K),E.push(y.defines[K]);return y.isRawShaderMaterial===!1&&(M(E,y),w(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function M(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function w(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function O(y){const E=x[y.type];let K;if(E){const X=qn[E];K=av.clone(X.uniforms)}else K=y.uniforms;return K}function P(y,E){let K;for(let X=0,Z=h.length;X<Z;X++){const oe=h[X];if(oe.cacheKey===E){K=oe,++K.usedTimes;break}}return K===void 0&&(K=new yS(n,E,y,r),h.push(K)),K}function R(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function F(y){l.remove(y)}function ie(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:O,acquireProgram:P,releaseProgram:R,releaseShaderCache:F,programs:h,dispose:ie}}function bS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function TS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,m,_,x,d){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:x,group:d},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=d),e++,p}function a(u,f,m,_,x,d){const p=o(u,f,m,_,x,d);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(u,f,m,_,x,d){const p=o(u,f,m,_,x,d);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||TS),i.length>1&&i.sort(f||Wh),s.length>1&&s.sort(f||Wh)}function h(){for(let u=e,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function AS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Xh,n.set(i,[o])):s>=r.length?(o=new Xh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function RS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ut};break;case"SpotLight":t={position:new q,direction:new q,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function CS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PS=0;function IS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LS(n){const e=new RS,t=CS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new It,o=new It;function a(c){let h=0,u=0,f=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let m=0,_=0,x=0,d=0,p=0,b=0,M=0,w=0,O=0,P=0,R=0;c.sort(IS);for(let ie=0,y=c.length;ie<y;ie++){const E=c[ie],K=E.color,X=E.intensity,Z=E.distance,oe=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=K.r*X,u+=K.g*X,f+=K.b*X;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],X);R++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const J=E.shadow,B=t.get(E);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=oe,i.directionalShadowMatrix[m]=E.shadow.matrix,b++}i.directional[m]=H,m++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(K).multiplyScalar(X),H.distance=Z,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[x]=H;const J=E.shadow;if(E.map&&(i.spotLightMap[O]=E.map,O++,J.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[x]=J.matrix,E.castShadow){const B=t.get(E);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=oe,w++}x++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(K).multiplyScalar(X),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[d]=H,d++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const J=E.shadow,B=t.get(E);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,B.shadowCameraNear=J.camera.near,B.shadowCameraFar=J.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=oe,i.pointShadowMatrix[_]=E.shadow.matrix,M++}i.point[_]=H,_++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(X),H.groundColor.copy(E.groundColor).multiplyScalar(X),i.hemi[p]=H,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==m||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==d||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==M||F.numSpotShadows!==w||F.numSpotMaps!==O||F.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=d,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,F.directionalLength=m,F.pointLength=_,F.spotLength=x,F.rectAreaLength=d,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=M,F.numSpotShadows=w,F.numSpotMaps=O,F.numLightProbes=R,i.version=PS++)}function l(c,h){let u=0,f=0,m=0,_=0,x=0;const d=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),u++}else if(M.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),m++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),o.identity(),r.copy(M.matrixWorld),r.premultiply(d),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(d),x++}}}return{setup:a,setupView:l,state:i}}function qh(n){const e=new LS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function DS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new qh(n),e.set(s,[a])):r>=o.length?(a=new qh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class US extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NS extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OS=`uniform sampler2D shadow_pass;
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
}`;function BS(n,e,t){let i=new Zc;const s=new Ue,r=new Ue,o=new xt,a=new US({depthPacking:p_}),l=new NS,c={},h=t.maxTextureSize,u={[Gi]:pn,[pn]:Gi,[ft]:ft},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:FS,fragmentShader:OS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new L(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_d;let p=this.type;this.render=function(P,R,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;const ie=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Oi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const X=p!==li&&this.type===li,Z=p===li&&this.type!==li;for(let oe=0,H=P.length;oe<H;oe++){const J=P[oe],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const me=B.getFrameExtents();if(s.multiply(me),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,B.mapSize.y=r.y)),B.map===null||X===!0||Z===!0){const ge=this.type!==li?{minFilter:En,magFilter:En}:{};B.map!==null&&B.map.dispose(),B.map=new ms(s.x,s.y,ge),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const Me=B.getViewportCount();for(let ge=0;ge<Me;ge++){const Re=B.getViewport(ge);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),K.viewport(o),B.updateMatrices(J,ge),i=B.getFrustum(),w(R,F,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===li&&b(B,F),B.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(ie,y,E)};function b(P,R){const F=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ms(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,F,f,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,F,m,x,null)}function M(P,R,F,ie){let y=null;const E=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)y=E;else if(y=F.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=y.uuid,X=R.uuid;let Z=c[K];Z===void 0&&(Z={},c[K]=Z);let oe=Z[X];oe===void 0&&(oe=y.clone(),Z[X]=oe,R.addEventListener("dispose",O)),y=oe}if(y.visible=R.visible,y.wireframe=R.wireframe,ie===li?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=n.properties.get(y);K.light=F}return y}function w(P,R,F,ie,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===li)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const X=e.update(P),Z=P.material;if(Array.isArray(Z)){const oe=X.groups;for(let H=0,J=oe.length;H<J;H++){const B=oe[H],me=Z[B.materialIndex];if(me&&me.visible){const Me=M(P,me,ie,y);P.onBeforeShadow(n,P,R,F,X,Me,B),n.renderBufferDirect(F,null,X,Me,P,B),P.onAfterShadow(n,P,R,F,X,Me,B)}}}else if(Z.visible){const oe=M(P,Z,ie,y);P.onBeforeShadow(n,P,R,F,X,oe,null),n.renderBufferDirect(F,null,X,oe,P,null),P.onAfterShadow(n,P,R,F,X,oe,null)}}const K=P.children;for(let X=0,Z=K.length;X<Z;X++)w(K[X],R,F,ie,y)}function O(P){P.target.removeEventListener("dispose",O);for(const F in c){const ie=c[F],y=P.target.uuid;y in ie&&(ie[y].dispose(),delete ie[y])}}}const zS={[Il]:Ll,[Dl]:Fl,[Ul]:Ol,[Qs]:Nl,[Ll]:Il,[Fl]:Dl,[Ol]:Ul,[Nl]:Qs};function GS(n){function e(){let z=!1;const xe=new xt;let ee=null;const Q=new xt(0,0,0,0);return{setMask:function(_e){ee!==_e&&!z&&(n.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){z=_e},setClear:function(_e,ve,Fe,We,Ze){Ze===!0&&(_e*=We,ve*=We,Fe*=We),xe.set(_e,ve,Fe,We),Q.equals(xe)===!1&&(n.clearColor(_e,ve,Fe,We),Q.copy(xe))},reset:function(){z=!1,ee=null,Q.set(-1,0,0,0)}}}function t(){let z=!1,xe=!1,ee=null,Q=null,_e=null;return{setReversed:function(ve){xe=ve},setTest:function(ve){ve?Se(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(ve){ee!==ve&&!z&&(n.depthMask(ve),ee=ve)},setFunc:function(ve){if(xe&&(ve=zS[ve]),Q!==ve){switch(ve){case Il:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Dl:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ve}},setLocked:function(ve){z=ve},setClear:function(ve){_e!==ve&&(n.clearDepth(ve),_e=ve)},reset:function(){z=!1,ee=null,Q=null,_e=null}}}function i(){let z=!1,xe=null,ee=null,Q=null,_e=null,ve=null,Fe=null,We=null,Ze=null;return{setTest:function(qe){z||(qe?Se(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(qe){xe!==qe&&!z&&(n.stencilMask(qe),xe=qe)},setFunc:function(qe,tt,at){(ee!==qe||Q!==tt||_e!==at)&&(n.stencilFunc(qe,tt,at),ee=qe,Q=tt,_e=at)},setOp:function(qe,tt,at){(ve!==qe||Fe!==tt||We!==at)&&(n.stencilOp(qe,tt,at),ve=qe,Fe=tt,We=at)},setLocked:function(qe){z=qe},setClear:function(qe){Ze!==qe&&(n.clearStencil(qe),Ze=qe)},reset:function(){z=!1,xe=null,ee=null,Q=null,_e=null,ve=null,Fe=null,We=null,Ze=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],m=null,_=!1,x=null,d=null,p=null,b=null,M=null,w=null,O=null,P=new ut(0,0,0),R=0,F=!1,ie=null,y=null,E=null,K=null,X=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,H=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),oe=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),oe=H>=2);let B=null,me={};const Me=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Re=new xt().fromArray(Me),Be=new xt().fromArray(ge);function se(z,xe,ee,Q){const _e=new Uint8Array(4),ve=n.createTexture();n.bindTexture(z,ve),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<ee;Fe++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(xe+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ve}const de={};de[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),r.setFunc(Qs),I(!1),U(Qu),Se(n.CULL_FACE),g(Oi);function Se(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function N(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function le(z,xe){return h[z]!==xe?(n.bindFramebuffer(z,xe),h[z]=xe,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function ae(z,xe){let ee=f,Q=!1;if(z){ee=u.get(xe),ee===void 0&&(ee=[],u.set(xe,ee));const _e=z.textures;if(ee.length!==_e.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Fe=_e.length;ve<Fe;ve++)ee[ve]=n.COLOR_ATTACHMENT0+ve;ee.length=_e.length,Q=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,Q=!0);Q&&n.drawBuffers(ee)}function ce(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const we={[ls]:n.FUNC_ADD,[Gg]:n.FUNC_SUBTRACT,[Hg]:n.FUNC_REVERSE_SUBTRACT};we[kg]=n.MIN,we[Vg]=n.MAX;const ne={[Wg]:n.ZERO,[Xg]:n.ONE,[qg]:n.SRC_COLOR,[Cl]:n.SRC_ALPHA,[Jg]:n.SRC_ALPHA_SATURATE,[Kg]:n.DST_COLOR,[$g]:n.DST_ALPHA,[Yg]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[Zg]:n.ONE_MINUS_DST_COLOR,[jg]:n.ONE_MINUS_DST_ALPHA,[Qg]:n.CONSTANT_COLOR,[e_]:n.ONE_MINUS_CONSTANT_COLOR,[t_]:n.CONSTANT_ALPHA,[n_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(z,xe,ee,Q,_e,ve,Fe,We,Ze,qe){if(z===Oi){_===!0&&(N(n.BLEND),_=!1);return}if(_===!1&&(Se(n.BLEND),_=!0),z!==zg){if(z!==x||qe!==F){if((d!==ls||M!==ls)&&(n.blendEquation(n.FUNC_ADD),d=ls,M=ls),qe)switch(z){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,b=null,w=null,O=null,P.set(0,0,0),R=0,x=z,F=qe}return}_e=_e||xe,ve=ve||ee,Fe=Fe||Q,(xe!==d||_e!==M)&&(n.blendEquationSeparate(we[xe],we[_e]),d=xe,M=_e),(ee!==p||Q!==b||ve!==w||Fe!==O)&&(n.blendFuncSeparate(ne[ee],ne[Q],ne[ve],ne[Fe]),p=ee,b=Q,w=ve,O=Fe),(We.equals(P)===!1||Ze!==R)&&(n.blendColor(We.r,We.g,We.b,Ze),P.copy(We),R=Ze),x=z,F=!1}function T(z,xe){z.side===ft?N(n.CULL_FACE):Se(n.CULL_FACE);let ee=z.side===pn;xe&&(ee=!ee),I(ee),z.blending===qs&&z.transparent===!1?g(Oi):g(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const Q=z.stencilWrite;o.setTest(Q),Q&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Y(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(z){ie!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),ie=z)}function U(z){z!==Fg?(Se(n.CULL_FACE),z!==y&&(z===Qu?n.cullFace(n.BACK):z===Og?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),y=z}function D(z){z!==E&&(oe&&n.lineWidth(z),E=z)}function Y(z,xe,ee){z?(Se(n.POLYGON_OFFSET_FILL),(K!==xe||X!==ee)&&(n.polygonOffset(xe,ee),K=xe,X=ee)):N(n.POLYGON_OFFSET_FILL)}function j(z){z?Se(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function S(z){z===void 0&&(z=n.TEXTURE0+Z-1),B!==z&&(n.activeTexture(z),B=z)}function v(z,xe,ee){ee===void 0&&(B===null?ee=n.TEXTURE0+Z-1:ee=B);let Q=me[ee];Q===void 0&&(Q={type:void 0,texture:void 0},me[ee]=Q),(Q.type!==z||Q.texture!==xe)&&(B!==ee&&(n.activeTexture(ee),B=ee),n.bindTexture(z,xe||de[z]),Q.type=z,Q.texture=xe)}function C(){const z=me[B];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(z){Re.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Re.copy(z))}function Te(z){Be.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Be.copy(z))}function Ve(z,xe){let ee=l.get(xe);ee===void 0&&(ee=new WeakMap,l.set(xe,ee));let Q=ee.get(z);Q===void 0&&(Q=n.getUniformBlockIndex(xe,z.name),ee.set(z,Q))}function Ie(z,xe){const Q=l.get(xe).get(z);a.get(xe)!==Q&&(n.uniformBlockBinding(xe,Q,z.__bindingPointIndex),a.set(xe,Q))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},B=null,me={},h={},u=new WeakMap,f=[],m=null,_=!1,x=null,d=null,p=null,b=null,M=null,w=null,O=null,P=new ut(0,0,0),R=0,F=!1,ie=null,y=null,E=null,K=null,X=null,Re.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:N,bindFramebuffer:le,drawBuffers:ae,useProgram:ce,setBlending:g,setMaterial:T,setFlipSided:I,setCullFace:U,setLineWidth:D,setPolygonOffset:Y,setScissorTest:j,activeTexture:S,bindTexture:v,unbindTexture:C,compressedTexImage2D:k,compressedTexImage3D:G,texImage2D:ye,texImage3D:Ce,updateUBOMapping:Ve,uniformBlockBinding:Ie,texStorage2D:be,texStorage3D:he,texSubImage2D:V,texSubImage3D:fe,compressedTexSubImage2D:ue,compressedTexSubImage3D:pe,scissor:Pe,viewport:Te,reset:ke}}function Yh(n,e,t,i){const s=HS(i);switch(t){case wd:return n*e;case bd:return n*e;case Td:return n*e*2;case Ad:return n*e/s.components*s.byteLength;case Xc:return n*e/s.components*s.byteLength;case Rd:return n*e*2/s.components*s.byteLength;case qc:return n*e*2/s.components*s.byteLength;case Ed:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case Yc:return n*e*4/s.components*s.byteLength;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Vl:return Math.max(n,16)*Math.max(e,8)/4;case Gl:case kl:return Math.max(n,8)*Math.max(e,8)/2;case Wl:case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ho:case ac:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cd:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function HS(n){switch(n){case mi:case yd:return{byteLength:1,components:1};case kr:case Md:case Kr:return{byteLength:2,components:1};case Vc:case Wc:return{byteLength:2,components:4};case ps:case kc:case hi:return{byteLength:4,components:1};case Sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function kS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):Wr("canvas")}function x(S,v,C){let k=1;const G=j(S);if((G.width>C||G.height>C)&&(k=C/Math.max(G.width,G.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const V=Math.floor(k*G.width),fe=Math.floor(k*G.height);u===void 0&&(u=_(V,fe));const ue=v?_(V,fe):u;return ue.width=V,ue.height=fe,ue.getContext("2d").drawImage(S,0,0,V,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+fe+")."),ue}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),S;return S}function d(S){return S.generateMipmaps&&S.minFilter!==En&&S.minFilter!==Ln}function p(S){n.generateMipmap(S)}function b(S,v,C,k,G=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V=v;if(v===n.RED&&(C===n.FLOAT&&(V=n.R32F),C===n.HALF_FLOAT&&(V=n.R16F),C===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.R8UI),C===n.UNSIGNED_SHORT&&(V=n.R16UI),C===n.UNSIGNED_INT&&(V=n.R32UI),C===n.BYTE&&(V=n.R8I),C===n.SHORT&&(V=n.R16I),C===n.INT&&(V=n.R32I)),v===n.RG&&(C===n.FLOAT&&(V=n.RG32F),C===n.HALF_FLOAT&&(V=n.RG16F),C===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RG8UI),C===n.UNSIGNED_SHORT&&(V=n.RG16UI),C===n.UNSIGNED_INT&&(V=n.RG32UI),C===n.BYTE&&(V=n.RG8I),C===n.SHORT&&(V=n.RG16I),C===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGB8UI),C===n.UNSIGNED_SHORT&&(V=n.RGB16UI),C===n.UNSIGNED_INT&&(V=n.RGB32UI),C===n.BYTE&&(V=n.RGB8I),C===n.SHORT&&(V=n.RGB16I),C===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),C===n.UNSIGNED_INT&&(V=n.RGBA32UI),C===n.BYTE&&(V=n.RGBA8I),C===n.SHORT&&(V=n.RGBA16I),C===n.INT&&(V=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),v===n.RGBA){const fe=G?Ko:pt.getTransfer(k);C===n.FLOAT&&(V=n.RGBA32F),C===n.HALF_FLOAT&&(V=n.RGBA16F),C===n.UNSIGNED_BYTE&&(V=fe===Rt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(S,v){let C;return S?v===null||v===ps||v===nr?C=n.DEPTH24_STENCIL8:v===hi?C=n.DEPTH32F_STENCIL8:v===kr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ps||v===nr?C=n.DEPTH_COMPONENT24:v===hi?C=n.DEPTH_COMPONENT32F:v===kr&&(C=n.DEPTH_COMPONENT16),C}function w(S,v){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==En&&S.minFilter!==Ln?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function O(S){const v=S.target;v.removeEventListener("dispose",O),R(v),v.isVideoTexture&&h.delete(v)}function P(S){const v=S.target;v.removeEventListener("dispose",P),ie(v)}function R(S){const v=i.get(S);if(v.__webglInit===void 0)return;const C=S.source,k=f.get(C);if(k){const G=k[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&F(S),Object.keys(k).length===0&&f.delete(C)}i.remove(S)}function F(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const C=S.source,k=f.get(C);delete k[v.__cacheKey],o.memory.textures--}function ie(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let G=0;G<v.__webglFramebuffer[k].length;G++)n.deleteFramebuffer(v.__webglFramebuffer[k][G]);else n.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)n.deleteFramebuffer(v.__webglFramebuffer[k]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=S.textures;for(let k=0,G=C.length;k<G;k++){const V=i.get(C[k]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(C[k])}i.remove(S)}let y=0;function E(){y=0}function K(){const S=y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),y+=1,S}function X(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Z(S,v){const C=i.get(S);if(S.isVideoTexture&&D(S),S.isRenderTargetTexture===!1&&S.version>0&&C.__version!==S.version){const k=S.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(C,S,v);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function oe(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Be(C,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function H(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Be(C,S,v);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function J(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){se(C,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const B={[Nt]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[zl]:n.MIRRORED_REPEAT},me={[En]:n.NEAREST,[f_]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},Me={[g_]:n.NEVER,[S_]:n.ALWAYS,[__]:n.LESS,[Id]:n.LEQUAL,[v_]:n.EQUAL,[M_]:n.GEQUAL,[x_]:n.GREATER,[y_]:n.NOTEQUAL};function ge(S,v){if(v.type===hi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ln||v.magFilter===Na||v.magFilter===lo||v.magFilter===hs||v.minFilter===Ln||v.minFilter===Na||v.minFilter===lo||v.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,B[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,B[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,B[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===En||v.minFilter!==lo&&v.minFilter!==hs||v.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Re(S,v){let C=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",O));const k=v.source;let G=f.get(k);G===void 0&&(G={},f.set(k,G));const V=X(v);if(V!==S.__cacheKey){G[V]===void 0&&(G[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),G[V].usedTimes++;const fe=G[S.__cacheKey];fe!==void 0&&(G[S.__cacheKey].usedTimes--,fe.usedTimes===0&&F(v)),S.__cacheKey=V,S.__webglTexture=G[V].texture}return C}function Be(S,v,C){let k=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=n.TEXTURE_3D);const G=Re(S,v),V=v.source;t.bindTexture(k,S.__webglTexture,n.TEXTURE0+C);const fe=i.get(V);if(V.version!==fe.__version||G===!0){t.activeTexture(n.TEXTURE0+C);const ue=pt.getPrimaries(pt.workingColorSpace),pe=v.colorSpace===Fi?null:pt.getPrimaries(v.colorSpace),be=v.colorSpace===Fi||ue===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let he=x(v.image,!1,s.maxTextureSize);he=Y(v,he);const ye=r.convert(v.format,v.colorSpace),Ce=r.convert(v.type);let Pe=b(v.internalFormat,ye,Ce,v.colorSpace,v.isVideoTexture);ge(k,v);let Te;const Ve=v.mipmaps,Ie=v.isVideoTexture!==!0,ke=fe.__version===void 0||G===!0,z=V.dataReady,xe=w(v,he);if(v.isDepthTexture)Pe=M(v.format===ir,v.type),ke&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,Pe,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Pe,he.width,he.height,0,ye,Ce,null));else if(v.isDataTexture)if(Ve.length>0){Ie&&ke&&t.texStorage2D(n.TEXTURE_2D,xe,Pe,Ve[0].width,Ve[0].height);for(let ee=0,Q=Ve.length;ee<Q;ee++)Te=Ve[ee],Ie?z&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Te.width,Te.height,ye,Ce,Te.data):t.texImage2D(n.TEXTURE_2D,ee,Pe,Te.width,Te.height,0,ye,Ce,Te.data);v.generateMipmaps=!1}else Ie?(ke&&t.texStorage2D(n.TEXTURE_2D,xe,Pe,he.width,he.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,ye,Ce,he.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,he.width,he.height,0,ye,Ce,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Pe,Ve[0].width,Ve[0].height,he.depth);for(let ee=0,Q=Ve.length;ee<Q;ee++)if(Te=Ve[ee],v.format!==Un)if(ye!==null)if(Ie){if(z)if(v.layerUpdates.size>0){const _e=Yh(Te.width,Te.height,v.format,v.type);for(const ve of v.layerUpdates){const Fe=Te.data.subarray(ve*_e/Te.data.BYTES_PER_ELEMENT,(ve+1)*_e/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ve,Te.width,Te.height,1,ye,Fe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,he.depth,ye,Te.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Pe,Te.width,Te.height,he.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,he.depth,ye,Ce,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Pe,Te.width,Te.height,he.depth,0,ye,Ce,Te.data)}else{Ie&&ke&&t.texStorage2D(n.TEXTURE_2D,xe,Pe,Ve[0].width,Ve[0].height);for(let ee=0,Q=Ve.length;ee<Q;ee++)Te=Ve[ee],v.format!==Un?ye!==null?Ie?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?z&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Te.width,Te.height,ye,Ce,Te.data):t.texImage2D(n.TEXTURE_2D,ee,Pe,Te.width,Te.height,0,ye,Ce,Te.data)}else if(v.isDataArrayTexture)if(Ie){if(ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Pe,he.width,he.height,he.depth),z)if(v.layerUpdates.size>0){const ee=Yh(he.width,he.height,v.format,v.type);for(const Q of v.layerUpdates){const _e=he.data.subarray(Q*ee/he.data.BYTES_PER_ELEMENT,(Q+1)*ee/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,he.width,he.height,1,ye,Ce,_e)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ye,Ce,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,ye,Ce,he.data);else if(v.isData3DTexture)Ie?(ke&&t.texStorage3D(n.TEXTURE_3D,xe,Pe,he.width,he.height,he.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ye,Ce,he.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,ye,Ce,he.data);else if(v.isFramebufferTexture){if(ke)if(Ie)t.texStorage2D(n.TEXTURE_2D,xe,Pe,he.width,he.height);else{let ee=he.width,Q=he.height;for(let _e=0;_e<xe;_e++)t.texImage2D(n.TEXTURE_2D,_e,Pe,ee,Q,0,ye,Ce,null),ee>>=1,Q>>=1}}else if(Ve.length>0){if(Ie&&ke){const ee=j(Ve[0]);t.texStorage2D(n.TEXTURE_2D,xe,Pe,ee.width,ee.height)}for(let ee=0,Q=Ve.length;ee<Q;ee++)Te=Ve[ee],Ie?z&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye,Ce,Te):t.texImage2D(n.TEXTURE_2D,ee,Pe,ye,Ce,Te);v.generateMipmaps=!1}else if(Ie){if(ke){const ee=j(he);t.texStorage2D(n.TEXTURE_2D,xe,Pe,ee.width,ee.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ce,he)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ye,Ce,he);d(v)&&p(k),fe.__version=V.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function se(S,v,C){if(v.image.length!==6)return;const k=Re(S,v),G=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+C);const V=i.get(G);if(G.version!==V.__version||k===!0){t.activeTexture(n.TEXTURE0+C);const fe=pt.getPrimaries(pt.workingColorSpace),ue=v.colorSpace===Fi?null:pt.getPrimaries(v.colorSpace),pe=v.colorSpace===Fi||fe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,he=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let Q=0;Q<6;Q++)!be&&!he?ye[Q]=x(v.image[Q],!0,s.maxCubemapSize):ye[Q]=he?v.image[Q].image:v.image[Q],ye[Q]=Y(v,ye[Q]);const Ce=ye[0],Pe=r.convert(v.format,v.colorSpace),Te=r.convert(v.type),Ve=b(v.internalFormat,Pe,Te,v.colorSpace),Ie=v.isVideoTexture!==!0,ke=V.__version===void 0||k===!0,z=G.dataReady;let xe=w(v,Ce);ge(n.TEXTURE_CUBE_MAP,v);let ee;if(be){Ie&&ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ve,Ce.width,Ce.height);for(let Q=0;Q<6;Q++){ee=ye[Q].mipmaps;for(let _e=0;_e<ee.length;_e++){const ve=ee[_e];v.format!==Un?Pe!==null?Ie?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ve.width,ve.height,Pe,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ve,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ve.width,ve.height,Pe,Te,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Ve,ve.width,ve.height,0,Pe,Te,ve.data)}}}else{if(ee=v.mipmaps,Ie&&ke){ee.length>0&&xe++;const Q=j(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ve,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(he){Ie?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ye[Q].width,ye[Q].height,Pe,Te,ye[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,ye[Q].width,ye[Q].height,0,Pe,Te,ye[Q].data);for(let _e=0;_e<ee.length;_e++){const Fe=ee[_e].image[Q].image;Ie?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,Fe.width,Fe.height,Pe,Te,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ve,Fe.width,Fe.height,0,Pe,Te,Fe.data)}}else{Ie?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,Te,ye[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,Pe,Te,ye[Q]);for(let _e=0;_e<ee.length;_e++){const ve=ee[_e];Ie?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,Pe,Te,ve.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Ve,Pe,Te,ve.image[Q])}}}d(v)&&p(n.TEXTURE_CUBE_MAP),V.__version=G.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function de(S,v,C,k,G,V){const fe=r.convert(C.format,C.colorSpace),ue=r.convert(C.type),pe=b(C.internalFormat,fe,ue,C.colorSpace);if(!i.get(v).__hasExternalTextures){const he=Math.max(1,v.width>>V),ye=Math.max(1,v.height>>V);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,V,pe,he,ye,v.depth,0,fe,ue,null):t.texImage2D(G,V,pe,he,ye,0,fe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,G,i.get(C).__webglTexture,0,I(v)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,G,i.get(C).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(S,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const k=v.depthTexture,G=k&&k.isDepthTexture?k.type:null,V=M(v.stencilBuffer,G),fe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=I(v);U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,V,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,S)}else{const k=v.textures;for(let G=0;G<k.length;G++){const V=k[G],fe=r.convert(V.format,V.colorSpace),ue=r.convert(V.type),pe=b(V.internalFormat,fe,ue,V.colorSpace),be=I(v);C&&U(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,pe,v.width,v.height):U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const k=i.get(v.depthTexture).__webglTexture,G=I(v);if(v.depthTexture.format===Ys)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(v.depthTexture.format===ir)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function le(S){const v=i.get(S),C=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const k=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){const G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",G)};k.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=k}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");N(v.__webglFramebuffer,S)}else if(C){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=n.createRenderbuffer(),Se(v.__webglDepthbuffer[k],S,!1);else{const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Se(v.__webglDepthbuffer,S,!1);else{const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,G)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(S,v,C){const k=i.get(S);v!==void 0&&de(k.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&le(S)}function ce(S){const v=S.texture,C=i.get(S),k=i.get(v);S.addEventListener("dispose",P);const G=S.textures,V=S.isWebGLCubeRenderTarget===!0,fe=G.length>1;if(fe||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=v.version,o.memory.textures++),V){C.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ue]=[];for(let pe=0;pe<v.mipmaps.length;pe++)C.__webglFramebuffer[ue][pe]=n.createFramebuffer()}else C.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)C.__webglFramebuffer[ue]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(fe)for(let ue=0,pe=G.length;ue<pe;ue++){const be=i.get(G[ue]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&U(S)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ue=0;ue<G.length;ue++){const pe=G[ue];C.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ue]);const be=r.convert(pe.format,pe.colorSpace),he=r.convert(pe.type),ye=b(pe.internalFormat,be,he,pe.colorSpace,S.isXRRenderTarget===!0),Ce=I(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ye,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,C.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(C.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),ge(n.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)de(C.__webglFramebuffer[ue][pe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else de(C.__webglFramebuffer[ue],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);d(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ue=0,pe=G.length;ue<pe;ue++){const be=G[ue],he=i.get(be);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),ge(n.TEXTURE_2D,be),de(C.__webglFramebuffer,S,be,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),d(be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ue=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,k.__webglTexture),ge(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)de(C.__webglFramebuffer[pe],S,v,n.COLOR_ATTACHMENT0,ue,pe);else de(C.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ue,0);d(v)&&p(ue),t.unbindTexture()}S.depthBuffer&&le(S)}function we(S){const v=S.textures;for(let C=0,k=v.length;C<k;C++){const G=v[C];if(d(G)){const V=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(G).__webglTexture;t.bindTexture(V,fe),p(V),t.unbindTexture()}}}const ne=[],g=[];function T(S){if(S.samples>0){if(U(S)===!1){const v=S.textures,C=S.width,k=S.height;let G=n.COLOR_BUFFER_BIT;const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(S),ue=v.length>1;if(ue)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const be=i.get(v[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,C,k,0,0,C,k,G,n.NEAREST),l===!0&&(ne.length=0,g.length=0,ne.push(n.COLOR_ATTACHMENT0+pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ne.push(V),g.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const be=i.get(v[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(S){return Math.min(s.maxSamples,S.samples)}function U(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(S){const v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Y(S,v){const C=S.colorSpace,k=S.format,G=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||C!==Vi&&C!==Fi&&(pt.getTransfer(C)===Rt?(k!==Un||G!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function j(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=E,this.setTexture2D=Z,this.setTexture2DArray=oe,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=ae,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=de,this.useMultisampledRTT=U}function VS(n,e){function t(i,s=Fi){let r;const o=pt.getTransfer(s);if(i===mi)return n.UNSIGNED_BYTE;if(i===Vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yd)return n.BYTE;if(i===Md)return n.SHORT;if(i===kr)return n.UNSIGNED_SHORT;if(i===kc)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===wd)return n.ALPHA;if(i===Ed)return n.RGB;if(i===Un)return n.RGBA;if(i===bd)return n.LUMINANCE;if(i===Td)return n.LUMINANCE_ALPHA;if(i===Ys)return n.DEPTH_COMPONENT;if(i===ir)return n.DEPTH_STENCIL;if(i===Ad)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===Rd)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===Yc)return n.RGBA_INTEGER;if(i===Oo||i===Bo||i===zo||i===Go)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gl||i===Hl||i===kl||i===Vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wl||i===Xl||i===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wl||i===Xl)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ql)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yl||i===$l||i===jl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ql)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ec)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===ac||i===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ho)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cd||i===cc||i===uc||i===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class WS extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ke extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XS={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),p=this._getHandJoint(c,x);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const qS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YS=`
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

}`;class $S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new dn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zn({vertexShader:qS,fragmentShader:YS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new L(new ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jS extends or{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const x=new $S,d=t.getContextAttributes();let p=null,b=null;const M=[],w=[],O=new Ue;let P=null;const R=new Ut;R.layers.enable(1),R.viewport=new xt;const F=new Ut;F.layers.enable(2),F.viewport=new xt;const ie=[R,F],y=new WS;y.layers.enable(1),y.layers.enable(2);let E=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=M[se];return de===void 0&&(de=new cl,M[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=M[se];return de===void 0&&(de=new cl,M[se]=de),de.getGripSpace()},this.getHand=function(se){let de=M[se];return de===void 0&&(de=new cl,M[se]=de),de.getHandSpace()};function X(se){const de=w.indexOf(se.inputSource);if(de===-1)return;const Se=M[de];Se!==void 0&&(Se.update(se.inputSource,se.frame,c||o),Se.dispatchEvent({type:se.type,data:se.inputSource}))}function Z(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",oe);for(let se=0;se<M.length;se++){const de=w[se];de!==null&&(w[se]=null,M[se].disconnect(de))}E=null,K=null,x.reset(),e.setRenderTarget(p),m=null,f=null,u=null,s=null,b=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",oe),d.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const de={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ms(m.framebufferWidth,m.framebufferHeight,{format:Un,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let de=null,Se=null,N=null;d.depth&&(N=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=d.stencil?ir:Ys,Se=d.stencil?nr:ps);const le={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ms(f.textureWidth,f.textureHeight,{format:Un,type:mi,depthTexture:new Wd(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function oe(se){for(let de=0;de<se.removed.length;de++){const Se=se.removed[de],N=w.indexOf(Se);N>=0&&(w[N]=null,M[N].disconnect(Se))}for(let de=0;de<se.added.length;de++){const Se=se.added[de];let N=w.indexOf(Se);if(N===-1){for(let ae=0;ae<M.length;ae++)if(ae>=w.length){w.push(Se),N=ae;break}else if(w[ae]===null){w[ae]=Se,N=ae;break}if(N===-1)break}const le=M[N];le&&le.connect(Se)}}const H=new q,J=new q;function B(se,de,Se){H.setFromMatrixPosition(de.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);const N=H.distanceTo(J),le=de.projectionMatrix.elements,ae=Se.projectionMatrix.elements,ce=le[14]/(le[10]-1),we=le[14]/(le[10]+1),ne=(le[9]+1)/le[5],g=(le[9]-1)/le[5],T=(le[8]-1)/le[0],I=(ae[8]+1)/ae[0],U=ce*T,D=ce*I,Y=N/(-T+I),j=Y*-T;if(de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(j),se.translateZ(Y),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),le[10]===-1)se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const S=ce+Y,v=we+Y,C=U-j,k=D+(N-j),G=ne*we/v*S,V=g*we/v*S;se.projectionMatrix.makePerspective(C,k,G,V,S,v),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function me(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let de=se.near,Se=se.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),y.near=F.near=R.near=de,y.far=F.far=R.far=Se,(E!==y.near||K!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,K=y.far);const N=se.parent,le=y.cameras;me(y,N);for(let ae=0;ae<le.length;ae++)me(le[ae],N);le.length===2?B(y,R,F):y.projectionMatrix.copy(R.projectionMatrix),Me(se,y,N)};function Me(se,de,Se){Se===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(Se.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Vr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ge=null;function Re(se,de){if(h=de.getViewerPose(c||o),_=de,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let N=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let ae=0;ae<Se.length;ae++){const ce=Se[ae];let we=null;if(m!==null)we=m.getViewport(ce);else{const g=u.getViewSubImage(f,ce);we=g.viewport,ae===0&&(e.setRenderTargetTextures(b,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(b))}let ne=ie[ae];ne===void 0&&(ne=new Ut,ne.layers.enable(ae),ne.viewport=new xt,ie[ae]=ne),ne.matrix.fromArray(ce.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(we.x,we.y,we.width,we.height),ae===0&&(y.matrix.copy(ne.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(ne)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const ae=u.getDepthInformation(Se[0]);ae&&ae.isValid&&ae.texture&&x.init(e,ae,s.renderState)}}for(let Se=0;Se<M.length;Se++){const N=w[Se],le=M[Se];N!==null&&le!==void 0&&le.update(N,de,c||o)}ge&&ge(se,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Be=new kd;Be.setAnimationLoop(Re),this.setAnimationLoop=function(se){ge=se},this.dispose=function(){}}}const ss=new Kn,KS=new It;function ZS(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,zd(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,b,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,w)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),x(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,b,M):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===pn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===pn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,w=b.envMapRotation;M&&(d.envMap.value=M,ss.copy(w),ss.x*=-1,ss.y*=-1,ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),d.envMapRotation.value.setFromMatrix4(KS.makeRotationFromEuler(ss)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,b,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*b,d.scale.value=M*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,b){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){const b=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const w=M.program;i.uniformBlockBinding(b,w)}function c(b,M){let w=s[b.id];w===void 0&&(_(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",d));const O=M.program;i.updateUBOMapping(b,O);const P=e.render.frame;r[b.id]!==P&&(f(b),r[b.id]=P)}function h(b){const M=u();b.__bindingPointIndex=M;const w=n.createBuffer(),O=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=s[b.id],w=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,R=w.length;P<R;P++){const F=Array.isArray(w[P])?w[P]:[w[P]];for(let ie=0,y=F.length;ie<y;ie++){const E=F[ie];if(m(E,P,ie,O)===!0){const K=E.__offset,X=Array.isArray(E.value)?E.value:[E.value];let Z=0;for(let oe=0;oe<X.length;oe++){const H=X[oe],J=x(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,K+Z,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,Z),Z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,M,w,O){const P=b.value,R=M+"_"+w;if(O[R]===void 0)return typeof P=="number"||typeof P=="boolean"?O[R]=P:O[R]=P.clone(),!0;{const F=O[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return O[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function _(b){const M=b.uniforms;let w=0;const O=16;for(let R=0,F=M.length;R<F;R++){const ie=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,E=ie.length;y<E;y++){const K=ie[y],X=Array.isArray(K.value)?K.value:[K.value];for(let Z=0,oe=X.length;Z<oe;Z++){const H=X[Z],J=x(H),B=w%O,me=B%J.boundary,Me=B+me;w+=me,Me!==0&&O-Me<J.storage&&(w+=O-Me),K.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=J.storage}}}const P=w%O;return P>0&&(w+=O-P),b.__size=w,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function d(b){const M=b.target;M.removeEventListener("dispose",d);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class gi{constructor(e={}){const{canvas:t=z_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,d=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=Bi,this.toneMappingExposure=1;const M=this;let w=!1,O=0,P=0,R=null,F=-1,ie=null;const y=new xt,E=new xt;let K=null;const X=new ut(0);let Z=0,oe=t.width,H=t.height,J=1,B=null,me=null;const Me=new xt(0,0,oe,H),ge=new xt(0,0,oe,H);let Re=!1;const Be=new Zc;let se=!1,de=!1;const Se=new It,N=new It,le=new q,ae=new xt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ne(){return R===null?J:1}let g=i;function T(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ve,!1),g===null){const W="webgl2";if(g=T(W,A),g===null)throw T(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let I,U,D,Y,j,S,v,C,k,G,V,fe,ue,pe,be,he,ye,Ce,Pe,Te,Ve,Ie,ke,z;function xe(){I=new sM(g),I.init(),Ie=new VS(g,I),U=new Jy(g,I,e,Ie),D=new GS(g),U.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),Y=new aM(g),j=new bS,S=new kS(g,I,D,j,U,Ie,Y),v=new eM(M),C=new iM(M),k=new pv(g),ke=new Ky(g,k),G=new rM(g,k,Y,ke),V=new cM(g,G,k,Y),Pe=new lM(g,U,S),he=new Qy(j),fe=new ES(M,v,C,I,U,ke,he),ue=new ZS(M,j),pe=new AS,be=new DS(I),Ce=new jy(M,v,C,D,V,f,l),ye=new BS(M,V,U),z=new JS(g,Y,U,D),Te=new Zy(g,I,Y),Ve=new oM(g,I,Y),Y.programs=fe.programs,M.capabilities=U,M.extensions=I,M.properties=j,M.renderLists=pe,M.shadowMap=ye,M.state=D,M.info=Y}xe();const ee=new jS(M,g);this.xr=ee,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=I.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=I.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(oe,H,!1))},this.getSize=function(A){return A.set(oe,H)},this.setSize=function(A,W,te=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,H=W,t.width=Math.floor(A*J),t.height=Math.floor(W*J),te===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(oe*J,H*J).floor()},this.setDrawingBufferSize=function(A,W,te){oe=A,H=W,J=te,t.width=Math.floor(A*te),t.height=Math.floor(W*te),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(Me)},this.setViewport=function(A,W,te,re){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,W,te,re),D.viewport(y.copy(Me).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,W,te,re){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,W,te,re),D.scissor(E.copy(ge).multiplyScalar(J).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(A){D.setScissorTest(Re=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(A=!0,W=!0,te=!0){let re=0;if(A){let $=!1;if(R!==null){const Ee=R.texture.format;$=Ee===Yc||Ee===qc||Ee===Xc}if($){const Ee=R.texture.type,Le=Ee===mi||Ee===ps||Ee===kr||Ee===nr||Ee===Vc||Ee===Wc,Oe=Ce.getClearColor(),ze=Ce.getClearAlpha(),Ye=Oe.r,$e=Oe.g,He=Oe.b;Le?(m[0]=Ye,m[1]=$e,m[2]=He,m[3]=ze,g.clearBufferuiv(g.COLOR,0,m)):(_[0]=Ye,_[1]=$e,_[2]=He,_[3]=ze,g.clearBufferiv(g.COLOR,0,_))}else re|=g.COLOR_BUFFER_BIT}W&&(re|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),te&&(re|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),pe.dispose(),be.dispose(),j.dispose(),v.dispose(),C.dispose(),V.dispose(),ke.dispose(),z.dispose(),fe.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",St),ee.removeEventListener("sessionend",wt),yt.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Y.autoReset,W=ye.enabled,te=ye.autoUpdate,re=ye.needsUpdate,$=ye.type;xe(),Y.autoReset=A,ye.enabled=W,ye.autoUpdate=te,ye.needsUpdate=re,ye.type=$}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fe(A){const W=A.target;W.removeEventListener("dispose",Fe),We(W)}function We(A){Ze(A),j.remove(A)}function Ze(A){const W=j.get(A).programs;W!==void 0&&(W.forEach(function(te){fe.releaseProgram(te)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,te,re,$,Ee){W===null&&(W=ce);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Oe=ys(A,W,te,re,$);D.setMaterial(re,Le);let ze=te.index,Ye=1;if(re.wireframe===!0){if(ze=G.getWireframeAttribute(te),ze===void 0)return;Ye=2}const $e=te.drawRange,He=te.attributes.position;let st=$e.start*Ye,rt=($e.start+$e.count)*Ye;Ee!==null&&(st=Math.max(st,Ee.start*Ye),rt=Math.min(rt,(Ee.start+Ee.count)*Ye)),ze!==null?(st=Math.max(st,0),rt=Math.min(rt,ze.count)):He!=null&&(st=Math.max(st,0),rt=Math.min(rt,He.count));const ht=rt-st;if(ht<0||ht===1/0)return;ke.setup($,re,Oe,te,ze);let Dt,ot=Te;if(ze!==null&&(Dt=k.get(ze),ot=Ve,ot.setIndex(Dt)),$.isMesh)re.wireframe===!0?(D.setLineWidth(re.wireframeLinewidth*ne()),ot.setMode(g.LINES)):ot.setMode(g.TRIANGLES);else if($.isLine){let Ge=re.linewidth;Ge===void 0&&(Ge=1),D.setLineWidth(Ge*ne()),$.isLineSegments?ot.setMode(g.LINES):$.isLineLoop?ot.setMode(g.LINE_LOOP):ot.setMode(g.LINE_STRIP)}else $.isPoints?ot.setMode(g.POINTS):$.isSprite&&ot.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ot.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))ot.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ge=$._multiDrawStarts,vt=$._multiDrawCounts,lt=$._multiDrawCount,on=ze?k.get(ze).bytesPerElement:1,Hn=j.get(re).currentProgram.getUniforms();for(let Zt=0;Zt<lt;Zt++)Hn.setValue(g,"_gl_DrawID",Zt),ot.render(Ge[Zt]/on,vt[Zt])}else if($.isInstancedMesh)ot.renderInstances(st,ht,$.count);else if(te.isInstancedBufferGeometry){const Ge=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,vt=Math.min(te.instanceCount,Ge);ot.renderInstances(st,ht,vt)}else ot.render(st,ht)};function qe(A,W,te){A.transparent===!0&&A.side===ft&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,Xt(A,W,te),A.side=Gi,A.needsUpdate=!0,Xt(A,W,te),A.side=ft):Xt(A,W,te)}this.compile=function(A,W,te=null){te===null&&(te=A),d=be.get(te),d.init(W),b.push(d),te.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),A!==te&&A.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),d.setupLights();const re=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Oe=Ee[Le];qe(Oe,te,$),re.add(Oe)}else qe(Ee,te,$),re.add(Ee)}),b.pop(),d=null,re},this.compileAsync=function(A,W,te=null){const re=this.compile(A,W,te);return new Promise($=>{function Ee(){if(re.forEach(function(Le){j.get(Le).currentProgram.isReady()&&re.delete(Le)}),re.size===0){$(A);return}setTimeout(Ee,10)}I.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let tt=null;function at(A){tt&&tt(A)}function St(){yt.stop()}function wt(){yt.start()}const yt=new kd;yt.setAnimationLoop(at),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(A){tt=A,ee.setAnimationLoop(A),A===null?yt.stop():yt.start()},ee.addEventListener("sessionstart",St),ee.addEventListener("sessionend",wt),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(W),W=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,W,R),d=be.get(A,b.length),d.init(W),b.push(d),N.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Be.setFromProjectionMatrix(N),de=this.localClippingEnabled,se=he.init(this.clippingPlanes,de),x=pe.get(A,p.length),x.init(),p.push(x),ee.enabled===!0&&ee.isPresenting===!0){const Ee=M.xr.getDepthSensingMesh();Ee!==null&&Pt(Ee,W,-1/0,M.sortObjects)}Pt(A,W,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(B,me),we=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,we&&Ce.addToRenderList(x,A),this.info.render.frame++,se===!0&&he.beginShadows();const te=d.state.shadowsArray;ye.render(te,A,W),se===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=x.opaque,$=x.transmissive;if(d.setupLights(),W.isArrayCamera){const Ee=W.cameras;if($.length>0)for(let Le=0,Oe=Ee.length;Le<Oe;Le++){const ze=Ee[Le];Bt(re,$,A,ze)}we&&Ce.render(A);for(let Le=0,Oe=Ee.length;Le<Oe;Le++){const ze=Ee[Le];gt(x,A,ze,ze.viewport)}}else $.length>0&&Bt(re,$,A,W),we&&Ce.render(A),gt(x,A,W);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,W),ke.resetDefaultState(),F=-1,ie=null,b.pop(),b.length>0?(d=b[b.length-1],se===!0&&he.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Pt(A,W,te,re){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){re&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Le=V.update(A),Oe=A.material;Oe.visible&&x.push(A,Le,Oe,te,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const Le=V.update(A),Oe=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ae.copy(Le.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Oe)){const ze=Le.groups;for(let Ye=0,$e=ze.length;Ye<$e;Ye++){const He=ze[Ye],st=Oe[He.materialIndex];st&&st.visible&&x.push(A,Le,st,te,ae.z,He)}}else Oe.visible&&x.push(A,Le,Oe,te,ae.z,null)}}const Ee=A.children;for(let Le=0,Oe=Ee.length;Le<Oe;Le++)Pt(Ee[Le],W,te,re)}function gt(A,W,te,re){const $=A.opaque,Ee=A.transmissive,Le=A.transparent;d.setupLightsView(te),se===!0&&he.setGlobalState(M.clippingPlanes,te),re&&D.viewport(y.copy(re)),$.length>0&&Et($,W,te),Ee.length>0&&Et(Ee,W,te),Le.length>0&&Et(Le,W,te),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Bt(A,W,te,re){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[re.id]===void 0&&(d.state.transmissionRenderTarget[re.id]=new ms(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Kr:mi,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const Ee=d.state.transmissionRenderTarget[re.id],Le=re.viewport||y;Ee.setSize(Le.z,Le.w);const Oe=M.getRenderTarget();M.setRenderTarget(Ee),M.getClearColor(X),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),we&&Ce.render(te);const ze=M.toneMapping;M.toneMapping=Bi;const Ye=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),d.setupLightsView(re),se===!0&&he.setGlobalState(M.clippingPlanes,re),Et(A,te,re),S.updateMultisampleRenderTarget(Ee),S.updateRenderTargetMipmap(Ee),I.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let He=0,st=W.length;He<st;He++){const rt=W[He],ht=rt.object,Dt=rt.geometry,ot=rt.material,Ge=rt.group;if(ot.side===ft&&ht.layers.test(re.layers)){const vt=ot.side;ot.side=pn,ot.needsUpdate=!0,rn(ht,te,re,Dt,ot,Ge),ot.side=vt,ot.needsUpdate=!0,$e=!0}}$e===!0&&(S.updateMultisampleRenderTarget(Ee),S.updateRenderTargetMipmap(Ee))}M.setRenderTarget(Oe),M.setClearColor(X,Z),Ye!==void 0&&(re.viewport=Ye),M.toneMapping=ze}function Et(A,W,te){const re=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Ee=A.length;$<Ee;$++){const Le=A[$],Oe=Le.object,ze=Le.geometry,Ye=re===null?Le.material:re,$e=Le.group;Oe.layers.test(te.layers)&&rn(Oe,W,te,ze,Ye,$e)}}function rn(A,W,te,re,$,Ee){A.onBeforeRender(M,W,te,re,$,Ee),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(M,W,te,re,A,Ee),$.transparent===!0&&$.side===ft&&$.forceSinglePass===!1?($.side=pn,$.needsUpdate=!0,M.renderBufferDirect(te,W,re,$,A,Ee),$.side=Gi,$.needsUpdate=!0,M.renderBufferDirect(te,W,re,$,A,Ee),$.side=ft):M.renderBufferDirect(te,W,re,$,A,Ee),A.onAfterRender(M,W,te,re,$,Ee)}function Xt(A,W,te){W.isScene!==!0&&(W=ce);const re=j.get(A),$=d.state.lights,Ee=d.state.shadowsArray,Le=$.state.version,Oe=fe.getParameters(A,$.state,Ee,W,te),ze=fe.getProgramCacheKey(Oe);let Ye=re.programs;re.environment=A.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",Fe),Ye=new Map,re.programs=Ye);let $e=Ye.get(ze);if($e!==void 0){if(re.currentProgram===$e&&re.lightsStateVersion===Le)return lr(A,Oe),$e}else Oe.uniforms=fe.getUniforms(A),A.onBeforeCompile(Oe,M),$e=fe.acquireProgram(Oe,ze),Ye.set(ze,$e),re.uniforms=Oe.uniforms;const He=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=he.uniform),lr(A,Oe),re.needsLights=Xe(A),re.lightsStateVersion=Le,re.needsLights&&(He.ambientLightColor.value=$.state.ambient,He.lightProbe.value=$.state.probe,He.directionalLights.value=$.state.directional,He.directionalLightShadows.value=$.state.directionalShadow,He.spotLights.value=$.state.spot,He.spotLightShadows.value=$.state.spotShadow,He.rectAreaLights.value=$.state.rectArea,He.ltc_1.value=$.state.rectAreaLTC1,He.ltc_2.value=$.state.rectAreaLTC2,He.pointLights.value=$.state.point,He.pointLightShadows.value=$.state.pointShadow,He.hemisphereLights.value=$.state.hemi,He.directionalShadowMap.value=$.state.directionalShadowMap,He.directionalShadowMatrix.value=$.state.directionalShadowMatrix,He.spotShadowMap.value=$.state.spotShadowMap,He.spotLightMatrix.value=$.state.spotLightMatrix,He.spotLightMap.value=$.state.spotLightMap,He.pointShadowMap.value=$.state.pointShadowMap,He.pointShadowMatrix.value=$.state.pointShadowMatrix),re.currentProgram=$e,re.uniformsList=null,$e}function ji(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Vo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function lr(A,W){const te=j.get(A);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function ys(A,W,te,re,$){W.isScene!==!0&&(W=ce),S.resetTextureUnits();const Ee=W.fog,Le=re.isMeshStandardMaterial?W.environment:null,Oe=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vi,ze=(re.isMeshStandardMaterial?C:v).get(re.envMap||Le),Ye=re.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,$e=!!te.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),He=!!te.morphAttributes.position,st=!!te.morphAttributes.normal,rt=!!te.morphAttributes.color;let ht=Bi;re.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ht=M.toneMapping);const Dt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ot=Dt!==void 0?Dt.length:0,Ge=j.get(re),vt=d.state.lights;if(se===!0&&(de===!0||A!==ie)){const Sn=A===ie&&re.id===F;he.setState(re,A,Sn)}let lt=!1;re.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==vt.state.version||Ge.outputColorSpace!==Oe||$.isBatchedMesh&&Ge.batching===!1||!$.isBatchedMesh&&Ge.batching===!0||$.isBatchedMesh&&Ge.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ge.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ge.instancing===!1||!$.isInstancedMesh&&Ge.instancing===!0||$.isSkinnedMesh&&Ge.skinning===!1||!$.isSkinnedMesh&&Ge.skinning===!0||$.isInstancedMesh&&Ge.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ge.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ge.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ge.instancingMorph===!1&&$.morphTexture!==null||Ge.envMap!==ze||re.fog===!0&&Ge.fog!==Ee||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==he.numPlanes||Ge.numIntersection!==he.numIntersection)||Ge.vertexAlphas!==Ye||Ge.vertexTangents!==$e||Ge.morphTargets!==He||Ge.morphNormals!==st||Ge.morphColors!==rt||Ge.toneMapping!==ht||Ge.morphTargetsCount!==ot)&&(lt=!0):(lt=!0,Ge.__version=re.version);let on=Ge.currentProgram;lt===!0&&(on=Xt(re,W,$));let Hn=!1,Zt=!1,Ki=!1;const At=on.getUniforms(),Si=Ge.uniforms;if(D.useProgram(on.program)&&(Hn=!0,Zt=!0,Ki=!0),re.id!==F&&(F=re.id,Zt=!0),Hn||ie!==A){U.reverseDepthBuffer?(Se.copy(A.projectionMatrix),H_(Se),k_(Se),At.setValue(g,"projectionMatrix",Se)):At.setValue(g,"projectionMatrix",A.projectionMatrix),At.setValue(g,"viewMatrix",A.matrixWorldInverse);const Sn=At.map.cameraPosition;Sn!==void 0&&Sn.setValue(g,le.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&At.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&At.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,Zt=!0,Ki=!0)}if($.isSkinnedMesh){At.setOptional(g,$,"bindMatrix"),At.setOptional(g,$,"bindMatrixInverse");const Sn=$.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),At.setValue(g,"boneTexture",Sn.boneTexture,S))}$.isBatchedMesh&&(At.setOptional(g,$,"batchingTexture"),At.setValue(g,"batchingTexture",$._matricesTexture,S),At.setOptional(g,$,"batchingIdTexture"),At.setValue(g,"batchingIdTexture",$._indirectTexture,S),At.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&At.setValue(g,"batchingColorTexture",$._colorsTexture,S));const xa=te.morphAttributes;if((xa.position!==void 0||xa.normal!==void 0||xa.color!==void 0)&&Pe.update($,te,on),(Zt||Ge.receiveShadow!==$.receiveShadow)&&(Ge.receiveShadow=$.receiveShadow,At.setValue(g,"receiveShadow",$.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Si.envMap.value=ze,Si.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(Si.envMapIntensity.value=W.environmentIntensity),Zt&&(At.setValue(g,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&to(Si,Ki),Ee&&re.fog===!0&&ue.refreshFogUniforms(Si,Ee),ue.refreshMaterialUniforms(Si,re,J,H,d.state.transmissionRenderTarget[A.id]),Vo.upload(g,ji(Ge),Si,S)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Vo.upload(g,ji(Ge),Si,S),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&At.setValue(g,"center",$.center),At.setValue(g,"modelViewMatrix",$.modelViewMatrix),At.setValue(g,"normalMatrix",$.normalMatrix),At.setValue(g,"modelMatrix",$.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Sn=re.uniformsGroups;for(let ya=0,rp=Sn.length;ya<rp;ya++){const iu=Sn[ya];z.update(iu,on),z.bind(iu,on)}}return on}function to(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Xe(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,W,te){j.get(A.texture).__webglTexture=W,j.get(A.depthTexture).__webglTexture=te;const re=j.get(A);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=te===void 0,re.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const te=j.get(A);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,te=0){R=A,O=W,P=te;let re=!0,$=null,Ee=!1,Le=!1;if(A){const ze=j.get(A);if(ze.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),re=!1;else if(ze.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(ze.__hasExternalTextures)S.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(ze.__boundDepthTexture!==He){if(He!==null&&j.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Le=!0);const $e=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[W])?$=$e[W][te]:$=$e[W],Ee=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?$=j.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[te]:$=$e,y.copy(A.viewport),E.copy(A.scissor),K=A.scissorTest}else y.copy(Me).multiplyScalar(J).floor(),E.copy(ge).multiplyScalar(J).floor(),K=Re;if(D.bindFramebuffer(g.FRAMEBUFFER,$)&&re&&D.drawBuffers(A,$),D.viewport(y),D.scissor(E),D.setScissorTest(K),Ee){const ze=j.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,te)}else if(Le){const ze=j.get(A.texture),Ye=W||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,ze.__webglTexture,te||0,Ye)}F=-1},this.readRenderTargetPixels=function(A,W,te,re,$,Ee,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){D.bindFramebuffer(g.FRAMEBUFFER,Oe);try{const ze=A.texture,Ye=ze.format,$e=ze.type;if(!U.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-re&&te>=0&&te<=A.height-$&&g.readPixels(W,te,re,$,Ie.convert(Ye),Ie.convert($e),Ee)}finally{const ze=R!==null?j.get(R).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,te,re,$,Ee,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){const ze=A.texture,Ye=ze.format,$e=ze.type;if(!U.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-re&&te>=0&&te<=A.height-$){D.bindFramebuffer(g.FRAMEBUFFER,Oe);const He=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,He),g.bufferData(g.PIXEL_PACK_BUFFER,Ee.byteLength,g.STREAM_READ),g.readPixels(W,te,re,$,Ie.convert(Ye),Ie.convert($e),0);const st=R!==null?j.get(R).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,st);const rt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await G_(g,rt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,He),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Ee),g.deleteBuffer(He),g.deleteSync(rt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,te=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const re=Math.pow(2,-te),$=Math.floor(A.image.width*re),Ee=Math.floor(A.image.height*re),Le=W!==null?W.x:0,Oe=W!==null?W.y:0;S.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,te,0,0,Le,Oe,$,Ee),D.unbindTexture()},this.copyTextureToTexture=function(A,W,te=null,re=null,$=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,A=arguments[1],W=arguments[2],$=arguments[3]||0,te=null);let Ee,Le,Oe,ze,Ye,$e;te!==null?(Ee=te.max.x-te.min.x,Le=te.max.y-te.min.y,Oe=te.min.x,ze=te.min.y):(Ee=A.image.width,Le=A.image.height,Oe=0,ze=0),re!==null?(Ye=re.x,$e=re.y):(Ye=0,$e=0);const He=Ie.convert(W.format),st=Ie.convert(W.type);S.setTexture2D(W,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,W.unpackAlignment);const rt=g.getParameter(g.UNPACK_ROW_LENGTH),ht=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Dt=g.getParameter(g.UNPACK_SKIP_PIXELS),ot=g.getParameter(g.UNPACK_SKIP_ROWS),Ge=g.getParameter(g.UNPACK_SKIP_IMAGES),vt=A.isCompressedTexture?A.mipmaps[$]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,vt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,vt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Oe),g.pixelStorei(g.UNPACK_SKIP_ROWS,ze),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,Ye,$e,Ee,Le,He,st,vt.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,Ye,$e,vt.width,vt.height,He,vt.data):g.texSubImage2D(g.TEXTURE_2D,$,Ye,$e,Ee,Le,He,st,vt),g.pixelStorei(g.UNPACK_ROW_LENGTH,rt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ht),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Dt),g.pixelStorei(g.UNPACK_SKIP_ROWS,ot),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ge),$===0&&W.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(A,W,te=null,re=null,$=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,re=arguments[1]||null,A=arguments[2],W=arguments[3],$=arguments[4]||0);let Ee,Le,Oe,ze,Ye,$e,He,st,rt;const ht=A.isCompressedTexture?A.mipmaps[$]:A.image;te!==null?(Ee=te.max.x-te.min.x,Le=te.max.y-te.min.y,Oe=te.max.z-te.min.z,ze=te.min.x,Ye=te.min.y,$e=te.min.z):(Ee=ht.width,Le=ht.height,Oe=ht.depth,ze=0,Ye=0,$e=0),re!==null?(He=re.x,st=re.y,rt=re.z):(He=0,st=0,rt=0);const Dt=Ie.convert(W.format),ot=Ie.convert(W.type);let Ge;if(W.isData3DTexture)S.setTexture3D(W,0),Ge=g.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)S.setTexture2DArray(W,0),Ge=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,W.unpackAlignment);const vt=g.getParameter(g.UNPACK_ROW_LENGTH),lt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),on=g.getParameter(g.UNPACK_SKIP_PIXELS),Hn=g.getParameter(g.UNPACK_SKIP_ROWS),Zt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,ht.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ht.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ze),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ye),g.pixelStorei(g.UNPACK_SKIP_IMAGES,$e),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(Ge,$,He,st,rt,Ee,Le,Oe,Dt,ot,ht.data):W.isCompressedArrayTexture?g.compressedTexSubImage3D(Ge,$,He,st,rt,Ee,Le,Oe,Dt,ht.data):g.texSubImage3D(Ge,$,He,st,rt,Ee,Le,Oe,Dt,ot,ht),g.pixelStorei(g.UNPACK_ROW_LENGTH,vt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,lt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,on),g.pixelStorei(g.UNPACK_SKIP_ROWS,Hn),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Zt),$===0&&W.generateMipmaps&&g.generateMipmap(Ge),D.unbindTexture()},this.initRenderTarget=function(A){j.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){O=0,P=0,R=null,D.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$c?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===ma?"display-p3":"srgb"}}class _i extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ue:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new q,s=[],r=[],o=[],a=new q,l=new It;for(let m=0;m<=e;m++){const _=m/e;s[m]=this.getTangentAt(_,new q)}r[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos($t(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos($t(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qc extends Qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class QS extends Qc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function eu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Po=new q,ul=new eu,hl=new eu,fl=new eu;class ew extends Qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new q){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),c=Po);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);x<1e-4&&(x=1),_<1e-4&&(_=x),d<1e-4&&(d=x),ul.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,x,d),hl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,x,d),fl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,x,d)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),hl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),fl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ul.calc(l),hl.calc(l),fl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new q().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $h(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function tw(n,e){const t=1-n;return t*t*e}function nw(n,e){return 2*(1-n)*n*e}function iw(n,e){return n*n*e}function Ir(n,e,t,i){return tw(n,e)+nw(n,t)+iw(n,i)}function sw(n,e){const t=1-n;return t*t*t*e}function rw(n,e){const t=1-n;return 3*t*t*n*e}function ow(n,e){return 3*(1-n)*n*n*e}function aw(n,e){return n*n*n*e}function Lr(n,e,t,i,s){return sw(n,e)+rw(n,t)+ow(n,i)+aw(n,s)}class jd extends Qn{constructor(e=new Ue,t=new Ue,i=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ue){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,s.x,r.x,o.x,a.x),Lr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lw extends Qn{constructor(e=new q,t=new q,i=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new q){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,s.x,r.x,o.x,a.x),Lr(e,s.y,r.y,o.y,a.y),Lr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kd extends Qn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cw extends Qn{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zd extends Qn{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ir(e,s.x,r.x,o.x),Ir(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uw extends Qn{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ir(e,s.x,r.x,o.x),Ir(e,s.y,r.y,o.y),Ir(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jd extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set($h(a,l.x,c.x,h.x,u.x),$h(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}}var dc=Object.freeze({__proto__:null,ArcCurve:QS,CatmullRomCurve3:ew,CubicBezierCurve:jd,CubicBezierCurve3:lw,EllipseCurve:Qc,LineCurve:Kd,LineCurve3:cw,QuadraticBezierCurve:Zd,QuadraticBezierCurve3:uw,SplineCurve:Jd});class hw extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new dc[s.type]().fromJSON(s))}return this}}class pc extends hw{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Kd(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Zd(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new jd(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s),new Ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Jd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Qc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Tt extends An{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new q,h=new Ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=i+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ct extends An{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let _=0;const x=[],d=i/2;let p=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(m,2));function b(){const w=new q,O=new q;let P=0;const R=(t-e)/i;for(let F=0;F<=r;F++){const ie=[],y=F/r,E=y*(t-e)+e;for(let K=0;K<=s;K++){const X=K/s,Z=X*l+a,oe=Math.sin(Z),H=Math.cos(Z);O.x=E*oe,O.y=-y*i+d,O.z=E*H,u.push(O.x,O.y,O.z),w.set(oe,R,H).normalize(),f.push(w.x,w.y,w.z),m.push(X,1-y),ie.push(_++)}x.push(ie)}for(let F=0;F<s;F++)for(let ie=0;ie<r;ie++){const y=x[ie][F],E=x[ie+1][F],K=x[ie+1][F+1],X=x[ie][F+1];e>0&&(h.push(y,E,X),P+=3),t>0&&(h.push(E,K,X),P+=3)}c.addGroup(p,P,0),p+=P}function M(w){const O=_,P=new Ue,R=new q;let F=0;const ie=w===!0?e:t,y=w===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,d*y,0),f.push(0,y,0),m.push(.5,.5),_++;const E=_;for(let K=0;K<=s;K++){const Z=K/s*l+a,oe=Math.cos(Z),H=Math.sin(Z);R.x=ie*H,R.y=d*y,R.z=ie*oe,u.push(R.x,R.y,R.z),f.push(0,y,0),P.x=oe*.5+.5,P.y=H*.5*y+.5,m.push(P.x,P.y),_++}for(let K=0;K<s;K++){const X=O+K,Z=E+K;w===!0?h.push(Z,Z+1,X):h.push(Z+1,Z,X),F+=3}c.addGroup(p,F,w===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mn extends pc{constructor(e){super(e),this.uuid=vs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new pc().fromJSON(s))}return this}}const fw={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Qd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,m;if(i&&(r=_w(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let _=t;_<s;_+=t)u=n[_],f=n[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Xr(r,o,t,a,l,m,0),o}};function Qd(n,e,t,i,s){let r,o;if(s===Rw(n,e,t,i)>0)for(r=e;r<t;r+=i)o=jh(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=jh(r,n[r],n[r+1],o);return o&&va(o,o.next)&&(Yr(o),o=o.next),o}function gs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(va(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Xr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Sw(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?pw(n,i,s,r):dw(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Yr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=mw(gs(n),e,t),Xr(n,e,t,i,s,r,2)):o===2&&gw(n,e,t,i,s,r):Xr(gs(n),e,t,i,s,r,1);break}}}function dw(n){const e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=m&&Hs(s,a,r,l,o,c,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function pw(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Lt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,d=h>u?h>f?h:f:u>f?u:f,p=mc(m,_,e,t,i),b=mc(x,d,e,t,i);let M=n.prevZ,w=n.nextZ;for(;M&&M.z>=p&&w&&w.z<=b;){if(M.x>=m&&M.x<=x&&M.y>=_&&M.y<=d&&M!==s&&M!==o&&Hs(a,h,l,u,c,f,M.x,M.y)&&Lt(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=m&&w.x<=x&&w.y>=_&&w.y<=d&&w!==s&&w!==o&&Hs(a,h,l,u,c,f,w.x,w.y)&&Lt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=p;){if(M.x>=m&&M.x<=x&&M.y>=_&&M.y<=d&&M!==s&&M!==o&&Hs(a,h,l,u,c,f,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=b;){if(w.x>=m&&w.x<=x&&w.y>=_&&w.y<=d&&w!==s&&w!==o&&Hs(a,h,l,u,c,f,w.x,w.y)&&Lt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function mw(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!va(s,r)&&ep(s,i,i.next,r)&&qr(s,r)&&qr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Yr(i),Yr(i.next),i=n=r),i=i.next}while(i!==n);return gs(i)}function gw(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bw(o,a)){let l=tp(o,a);o=gs(o,o.next),l=gs(l,l.next),Xr(o,e,t,i,s,r,0),Xr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function _w(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Qd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Ew(c));for(s.sort(vw),r=0;r<s.length;r++)t=xw(s[r],t);return t}function vw(n,e){return n.x-e.x}function xw(n,e){const t=yw(n,e);if(!t)return e;const i=tp(t,n);return gs(i,i.next),gs(t,t.next)}function yw(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Hs(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),qr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Mw(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Mw(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function Sw(n,e,t,i){let s=n;do s.z===0&&(s.z=mc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ww(s)}function ww(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function mc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ew(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function bw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Tw(n,e)&&(qr(n,e)&&qr(e,n)&&Aw(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||va(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function va(n,e){return n.x===e.x&&n.y===e.y}function ep(n,e,t,i){const s=Lo(Lt(n,e,t)),r=Lo(Lt(n,e,i)),o=Lo(Lt(t,i,n)),a=Lo(Lt(t,i,e));return!!(s!==r&&o!==a||s===0&&Io(n,t,e)||r===0&&Io(n,i,e)||o===0&&Io(t,n,i)||a===0&&Io(t,e,i))}function Io(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lo(n){return n>0?1:n<0?-1:0}function Tw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ep(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function qr(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function Aw(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function tp(n,e){const t=new gc(n.i,n.x,n.y),i=new gc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function jh(n,e,t,i){const s=new gc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Yr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function gc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rw(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class js{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return js.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Kh(e),Zh(i,e);let o=e.length;t.forEach(Kh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Zh(i,t[l]);const a=fw.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Kh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Tn extends An{constructor(e=new Mn([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ft(s,3)),this.setAttribute("uv",new Ft(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Cw;let M,w=!1,O,P,R,F;p&&(M=p.getSpacedPoints(h),w=!0,f=!1,O=p.computeFrenetFrames(h,!1),P=new q,R=new q,F=new q),f||(d=0,m=0,_=0,x=0);const ie=a.extractPoints(c);let y=ie.shape;const E=ie.holes;if(!js.isClockWise(y)){y=y.reverse();for(let ne=0,g=E.length;ne<g;ne++){const T=E[ne];js.isClockWise(T)&&(E[ne]=T.reverse())}}const X=js.triangulateShape(y,E),Z=y;for(let ne=0,g=E.length;ne<g;ne++){const T=E[ne];y=y.concat(T)}function oe(ne,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(g,T)}const H=y.length,J=X.length;function B(ne,g,T){let I,U,D;const Y=ne.x-g.x,j=ne.y-g.y,S=T.x-ne.x,v=T.y-ne.y,C=Y*Y+j*j,k=Y*v-j*S;if(Math.abs(k)>Number.EPSILON){const G=Math.sqrt(C),V=Math.sqrt(S*S+v*v),fe=g.x-j/G,ue=g.y+Y/G,pe=T.x-v/V,be=T.y+S/V,he=((pe-fe)*v-(be-ue)*S)/(Y*v-j*S);I=fe+Y*he-ne.x,U=ue+j*he-ne.y;const ye=I*I+U*U;if(ye<=2)return new Ue(I,U);D=Math.sqrt(ye/2)}else{let G=!1;Y>Number.EPSILON?S>Number.EPSILON&&(G=!0):Y<-Number.EPSILON?S<-Number.EPSILON&&(G=!0):Math.sign(j)===Math.sign(v)&&(G=!0),G?(I=-j,U=Y,D=Math.sqrt(C)):(I=Y,U=j,D=Math.sqrt(C/2))}return new Ue(I/D,U/D)}const me=[];for(let ne=0,g=Z.length,T=g-1,I=ne+1;ne<g;ne++,T++,I++)T===g&&(T=0),I===g&&(I=0),me[ne]=B(Z[ne],Z[T],Z[I]);const Me=[];let ge,Re=me.concat();for(let ne=0,g=E.length;ne<g;ne++){const T=E[ne];ge=[];for(let I=0,U=T.length,D=U-1,Y=I+1;I<U;I++,D++,Y++)D===U&&(D=0),Y===U&&(Y=0),ge[I]=B(T[I],T[D],T[Y]);Me.push(ge),Re=Re.concat(ge)}for(let ne=0;ne<d;ne++){const g=ne/d,T=m*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+x;for(let U=0,D=Z.length;U<D;U++){const Y=oe(Z[U],me[U],I);N(Y.x,Y.y,-T)}for(let U=0,D=E.length;U<D;U++){const Y=E[U];ge=Me[U];for(let j=0,S=Y.length;j<S;j++){const v=oe(Y[j],ge[j],I);N(v.x,v.y,-T)}}}const Be=_+x;for(let ne=0;ne<H;ne++){const g=f?oe(y[ne],Re[ne],Be):y[ne];w?(R.copy(O.normals[0]).multiplyScalar(g.x),P.copy(O.binormals[0]).multiplyScalar(g.y),F.copy(M[0]).add(R).add(P),N(F.x,F.y,F.z)):N(g.x,g.y,0)}for(let ne=1;ne<=h;ne++)for(let g=0;g<H;g++){const T=f?oe(y[g],Re[g],Be):y[g];w?(R.copy(O.normals[ne]).multiplyScalar(T.x),P.copy(O.binormals[ne]).multiplyScalar(T.y),F.copy(M[ne]).add(R).add(P),N(F.x,F.y,F.z)):N(T.x,T.y,u/h*ne)}for(let ne=d-1;ne>=0;ne--){const g=ne/d,T=m*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+x;for(let U=0,D=Z.length;U<D;U++){const Y=oe(Z[U],me[U],I);N(Y.x,Y.y,u+T)}for(let U=0,D=E.length;U<D;U++){const Y=E[U];ge=Me[U];for(let j=0,S=Y.length;j<S;j++){const v=oe(Y[j],ge[j],I);w?N(v.x,v.y+M[h-1].y,M[h-1].x+T):N(v.x,v.y,u+T)}}}se(),de();function se(){const ne=s.length/3;if(f){let g=0,T=H*g;for(let I=0;I<J;I++){const U=X[I];le(U[2]+T,U[1]+T,U[0]+T)}g=h+d*2,T=H*g;for(let I=0;I<J;I++){const U=X[I];le(U[0]+T,U[1]+T,U[2]+T)}}else{for(let g=0;g<J;g++){const T=X[g];le(T[2],T[1],T[0])}for(let g=0;g<J;g++){const T=X[g];le(T[0]+H*h,T[1]+H*h,T[2]+H*h)}}i.addGroup(ne,s.length/3-ne,0)}function de(){const ne=s.length/3;let g=0;Se(Z,g),g+=Z.length;for(let T=0,I=E.length;T<I;T++){const U=E[T];Se(U,g),g+=U.length}i.addGroup(ne,s.length/3-ne,1)}function Se(ne,g){let T=ne.length;for(;--T>=0;){const I=T;let U=T-1;U<0&&(U=ne.length-1);for(let D=0,Y=h+d*2;D<Y;D++){const j=H*D,S=H*(D+1),v=g+I+j,C=g+U+j,k=g+U+S,G=g+I+S;ae(v,C,k,G)}}}function N(ne,g,T){l.push(ne),l.push(g),l.push(T)}function le(ne,g,T){ce(ne),ce(g),ce(T);const I=s.length/3,U=b.generateTopUV(i,s,I-3,I-2,I-1);we(U[0]),we(U[1]),we(U[2])}function ae(ne,g,T,I){ce(ne),ce(g),ce(I),ce(g),ce(T),ce(I);const U=s.length/3,D=b.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);we(D[0]),we(D[1]),we(D[3]),we(D[1]),we(D[2]),we(D[3])}function ce(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function we(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Pw(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new dc[s.type]().fromJSON(s)),new Tn(i,e.options)}}const Cw={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Ue(r,o),new Ue(a,l),new Ue(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],m=e[s*3+1],_=e[s*3+2],x=e[r*3],d=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ue(o,1-l),new Ue(c,1-u),new Ue(f,1-_),new Ue(x,1-p)]:[new Ue(a,1-l),new Ue(h,1-u),new Ue(m,1-_),new Ue(d,1-p)]}};function Pw(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ae extends An{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new q,f=new q,m=[],_=[],x=[],d=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let w=0;p===0&&o===0?w=.5/t:p===i&&l===Math.PI&&(w=-.5/t);for(let O=0;O<=t;O++){const P=O/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),d.push(P+w,1-M),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const M=h[p][b+1],w=h[p][b],O=h[p+1][b],P=h[p+1][b+1];(p!==0||o>0)&&m.push(M,w,P),(p!==i-1||l<Math.PI)&&m.push(w,O,P)}this.setIndex(m),this.setAttribute("position",new Ft(_,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ae(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tu extends An{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new q,u=new q,f=new q;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const x=_/s*r,d=m/i*Math.PI*2;u.x=(e+t*Math.cos(d))*Math.cos(x),u.y=(e+t*Math.cos(d))*Math.sin(x),u.z=t*Math.sin(d),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const x=(s+1)*m+_-1,d=(s+1)*(m-1)+_-1,p=(s+1)*(m-1)+_,b=(s+1)*m+_;o.push(x,d,b),o.push(d,p,b)}this.setIndex(o),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yt extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ne extends Yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const ea={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Iw{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const Lw=new Iw;class eo{constructor(e){this.manager=e!==void 0?e:Lw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class Dw extends Error{constructor(e,t){super(e),this.response=t}}class Uw extends eo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ea.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:i,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ai[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,_=m!==0;let x=0;const d=new ReadableStream({start(p){b();function b(){u.read().then(({done:M,value:w})=>{if(M)p.close();else{x+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let P=0,R=h.length;P<R;P++){const F=h[P];F.onProgress&&F.onProgress(O)}p.enqueue(w),b()}},M=>{p.error(M)})}}});return new Response(d)}else throw new Dw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{ea.add(e,c);const h=ai[e];delete ai[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Nw extends eo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ea.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Wr("img");function l(){h(),ea.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Wi extends eo{constructor(e){super(e)}load(e,t,i,s){const r=new dn,o=new Nw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class nu extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const dl=new It,Jh=new q,Qh=new q;class np{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jh),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ef=new It,vr=new q,pl=new q;class Fw extends np{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(vr),pl.copy(i.position),pl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pl),i.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),ef.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef)}}class Xi extends nu{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Fw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ow extends np{constructor(){super(new Vd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qi extends nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Ow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yi extends nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ip{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tf(){return performance.now()}class Bw{constructor(){this.type="ShapePath",this.color=new ut,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new pc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let M=0,w=p.length;M<w;M++){const O=p[M],P=new Mn;P.curves=O.curves,b.push(P)}return b}function i(p,b){const M=b.length;let w=!1;for(let O=M-1,P=0;P<M;O=P++){let R=b[O],F=b[P],ie=F.x-R.x,y=F.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=b[P],ie=-ie,F=b[O],y=-y),p.y<R.y||p.y>F.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const E=y*(p.x-R.x)-ie*(p.y-R.y);if(E===0)return!0;if(E<0)continue;w=!w}}else{if(p.y!==R.y)continue;if(F.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=F.x)return!0}}return w}const s=js.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Mn,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;const u=[],f=[];let m=[],_=0,x;f[_]=void 0,m[_]=[];for(let p=0,b=r.length;p<b;p++)a=r[p],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new Mn,p:x},f[_].s.curves=a.curves,h&&_++,m[_]=[]):m[_].push({h:a,p:x[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,b=0;for(let M=0,w=f.length;M<w;M++)u[M]=[];for(let M=0,w=f.length;M<w;M++){const O=m[M];for(let P=0;P<O.length;P++){const R=O[P];let F=!0;for(let ie=0;ie<f.length;ie++)i(R.p,f[ie].p)&&(M!==ie&&b++,F?(F=!1,u[ie].push(R)):p=!0);F&&u[M].push(R)}}b>0&&p===!1&&(m=u)}let d;for(let p=0,b=f.length;p<b;p++){l=f[p].s,c.push(l),d=m[p];for(let M=0,w=d.length;M<w;M++)l.holes.push(d[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);class $i extends eo{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Uw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},i,s)}parse(e){return new zw(e)}}class zw{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=Gw(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function Gw(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=Hw(h,s,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function Hw(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new Bw;let a,l,c,h,u,f,m,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,p=x.length;d<p;)switch(x[d++]){case"m":a=x[d++]*e+t,l=x[d++]*e+i,o.moveTo(a,l);break;case"l":a=x[d++]*e+t,l=x[d++]*e+i,o.lineTo(a,l);break;case"q":c=x[d++]*e+t,h=x[d++]*e+i,u=x[d++]*e+t,f=x[d++]*e+i,o.quadraticCurveTo(u,f,c,h);break;case"b":c=x[d++]*e+t,h=x[d++]*e+i,u=x[d++]*e+t,f=x[d++]*e+i,m=x[d++]*e+t,_=x[d++]*e+i,o.bezierCurveTo(u,f,m,_,c,h);break}}return{offsetX:r.ha*e,path:o}}class Gt extends Tn{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const s=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const kw=Gn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Je(null);let i=null,s=Je(!1),r=Je(!1),o=Je(!1);return Jn(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new _i,c=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),h=new gi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new Ke,f=new Yi(16777215,2);l.add(f);const m=new qi(16777215,4);m.position.set(5,5,5),l.add(m);const _=new Xi(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Wi,d=x.load("/3d-bear-arts/assets/lv2.jpg"),p=x.load("/3d-bear-arts/assets/lv2.jpg");d.wrapS=d.wrapT=Nt,p.wrapS=p.wrapT=Nt;const b=new Ne({color:8343336,metalness:0,roughness:.8,bumpMap:d,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),M=new Ne({color:5978654,metalness:0,roughness:.8,bumpMap:d,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),w=new Ne({color:13152668,metalness:.2,roughness:.05,bumpMap:d,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:p,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:ft});new Ne({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const O=new Ae(1,32,32,0,Math.PI),P=new L(O,w),R=new L(O,b);P.scale.set(.85,.85,.8),R.scale.set(.85,.85,.8),P.position.y=-.2,R.position.y=-.2,P.rotation.y=Math.PI/2,R.rotation.y=Math.PI*1.5;const F=new Tt(1,32),ie=new L(F,b);ie.scale.set(.85,.85,.8),ie.position.set(0,-.2,0),ie.rotation.y=Math.PI/2;const y=new Ke;y.add(P),y.add(R),y.add(ie),u.add(y);const E=new Ae(.6,32,32,0,Math.PI),K=new L(E,b);K.scale.set(1,.95,.95),K.position.set(0,1,0),K.rotation.y=Math.PI*1.5;const X=new L(E,w);X.scale.set(1,.95,.95),X.position.set(0,1,0),X.rotation.y=Math.PI/2;const Z=new Tt(.6,32),oe=new L(Z,b);oe.position.set(0,1,0),oe.rotation.y=Math.PI/2,oe.scale.set(1,.95,.95);const H=new Ke;H.add(K),H.add(X),H.add(oe),u.add(H);const J=new Ae(.25,32,32),B=new L(J,b);B.position.set(-.45,1.35,-.1),u.add(B);const me=new L(J,w);me.position.set(.45,1.35,-.1),u.add(me);const Me=new Ae(.25,32,32,Math.PI/2,Math.PI),ge=new L(Me,M);ge.scale.set(1.1,.6,.8),ge.position.set(0,.84,.5),ge.rotation.y=Math.PI;const Re=new Ae(.25,32,32,Math.PI/2,Math.PI),Be=new L(Re,w);Be.scale.set(1.1,.6,.8),Be.position.set(0,.84,.5),Be.rotation.y=0;const se=new Tt(.25,32),de=new L(se,b);de.scale.set(.8,.6,.8),de.position.set(0,.84,.5),de.rotation.y=Math.PI/2;const Se=new Ke;Se.add(ge),Se.add(Be),Se.add(de),u.add(Se);const N=new Mn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const le={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ne({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ae=new Tn(N,le),ce=new L(ae,b);ce.scale.set(.1,.1,.1),ce.rotation.z=ct.degToRad(210),ce.rotation.x=ct.degToRad(5),ce.rotation.y=ct.degToRad(-45),ce.position.set(-.4,.9,.45);const we=new L(ae,M);we.scale.set(.6,.5,.5),we.position.set(.35,0,0),we.rotation.y=Math.PI,we.rotation.x=Math.PI;const ne=new L(ae,M);ne.scale.set(.2,.2,.2),ne.position.set(.5,-.1,.2),ne.rotation.y=Math.PI,ne.rotation.x=Math.PI,u.add(ne);const g=new xs(1.3,1.2,.6),T=new L(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const I=new tu(.15,.025,10,100);new Ne({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const U=new L(I,b);U.position.set(.35,.1,.1),U.rotation.z=Math.PI/2,U.rotation.x=Math.PI/8,U.rotation.y=Math.PI/14;const D=new L(I,b);D.position.set(.35,.1,.13),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/-8,D.rotation.y=Math.PI/12;const Y=new Ke;Y.add(T),Y.add(U),Y.add(D),u.add(Y);const j=new Ae(.35,32,32),S=new L(j,b);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),u.add(S);const v=new L(j,w);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new Ct(.2,.22,.6,32),k=new L(C,b);k.position.set(-.4,-1.05,0),u.add(k);const G=new L(C,w);G.position.set(.4,-1.05,0),u.add(G);const V=new Ae(.3,32,32),fe=new L(V,b);fe.scale.set(1,.72,1.5),fe.position.set(-.4,-1.45,.17),u.add(fe);const ue=new L(V,w);ue.scale.set(1,.72,1.5),ue.position.set(.4,-1.45,.17),u.add(ue);const pe=new Ae(.44,32,32),be=new L(pe,b);be.position.set(-.15,-.45,-.4),u.add(be);const he=new L(pe,w);he.position.set(.15,-.45,-.4),u.add(he);const ye=new Ae(.18,32,32),Ce=new L(ye,b);Ce.position.set(0,-.35,-.8),u.add(Ce),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const _e=new Gt("X",{font:Q,size:.2,depth:.05});new Bn({color:0});const ve=new L(_e,M);ve.position.set(-.3,.99,.53),ve.rotation.x=ct.degToRad(-5),ve.rotation.y=ct.degToRad(-15),u.add(ve);const Fe=new Gt("O",{font:Q,size:.2,depth:.05});new Bn({color:0});const We=new L(Fe,M);We.position.set(.14,.99,.53),We.rotation.y=ct.degToRad(12),We.rotation.x=ct.degToRad(-5),u.add(We)}),Ce.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const Te=()=>{u.rotation.y,u.rotation.x},Ve=()=>{s.value=!0,r.value=!1,o.value=!1},Ie=()=>{s.value=!1,r.value=!0,o.value=!1},ke=()=>{s.value=!1,r.value=!1,Te()},z=Q=>{const _e=window.innerWidth/2;Q>_e?Ve():Ie(),Te()},xe=Q=>{clearTimeout(i),ke(),o.value=!0;const _e={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1};if(o.value){const ve=_e.x*Math.PI*.2,Fe=_e.y*Math.PI*.2;u.rotation.y=ve,u.rotation.x=Fe}i=setTimeout(()=>{o.value=!1,z(Q.clientX)},500)};window.addEventListener("mousemove",xe);const ee=Q=>{if(o.value){const _e={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1},ve=_e.x*Math.PI*.2,Fe=_e.y*Math.PI*.2;u.rotation.y=ve,u.rotation.x=Fe}};window.addEventListener("mousemove",ee),a(),Ht(()=>e.bodyPosition,Q=>{u.position.set(Q.x,Q.y,Q.z)}),Ht(()=>e.cameraPosition,Q=>{c.position.set(e.bodyPosition.x,1,Q),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(xi(),yi("div",{ref_key:"threeCanvas",ref:t,class:zn(n.background?"no-bg":"three-canvas")},null,2))}}),Vw=Mi(kw,[["__scopeId","data-v-f3beb116"]]),Ww=Gn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Je(null);let i=null,s=Je(!1),r=Je(!1),o=Je(!1);return Jn(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new _i,c=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),h=new gi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new Ke,f=new Yi(16777215,2);l.add(f);const m=new qi(16777215,4);m.position.set(5,5,5),l.add(m);const _=new Xi(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Wi,d=x.load("/3d-bear-arts/assets/pop6.jpg"),p=x.load("/3d-bear-arts/assets/pop7.jpg");d.wrapS=d.wrapT=Nt,p.wrapS=p.wrapT=Nt;const b=new Ne({color:16738740,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),M=new Ne({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ft}),w=new Ne({color:16766720,map:d,metalness:.3,roughness:.5}),O=new Ne({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ft}),P=new Ne({color:9055202,map:d,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ne({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ft});const R=new Ne({color:65535,map:d,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),F=new Ne({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ft}),ie=new Ae(1,32,32,0,Math.PI),y=new L(ie,M),E=new L(ie,b);y.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),y.position.y=-.2,E.position.y=-.2,y.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const K=new Tt(1,32),X=new L(K,b);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const Z=new Ke;Z.add(y),Z.add(E),Z.add(X),u.add(Z);const oe=new Ae(.6,32,32,0,Math.PI),H=new L(oe,w);H.scale.set(1,.95,.95),H.position.set(0,1,0),H.rotation.y=Math.PI*1.5;const J=new L(oe,O);J.scale.set(1,.95,.95),J.position.set(0,1,0),J.rotation.y=Math.PI/2;const B=new Tt(.6,32),me=new L(B,w);me.position.set(0,1,0),me.rotation.y=Math.PI/2,me.scale.set(1,.95,.95);const Me=new Ke;Me.add(H),Me.add(J),Me.add(me),u.add(Me);const ge=new Ae(.25,32,32),Re=new L(ge,b);Re.position.set(-.45,1.35,-.1),u.add(Re);const Be=new L(ge,M);Be.position.set(.45,1.35,-.1),u.add(Be);const se=new Ae(.25,32,32,Math.PI/2,Math.PI),de=new L(se,w);de.scale.set(1.1,.6,.8),de.position.set(0,.84,.5),de.rotation.y=Math.PI;const Se=new Ae(.25,32,32,Math.PI/2,Math.PI),N=new L(Se,O);N.scale.set(1.1,.6,.8),N.position.set(0,.84,.5),N.rotation.y=0;const le=new Tt(.25,32),ae=new L(le,w);ae.scale.set(.8,.6,.8),ae.position.set(0,.84,.5),ae.rotation.y=Math.PI/2;const ce=new Ke;ce.add(de),ce.add(N),ce.add(ae),u.add(ce);const we=new Mn;we.moveTo(0,0),we.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),we.bezierCurveTo(-.6,.3,0,.6,0,1),we.bezierCurveTo(0,.6,.6,.3,.6,0),we.bezierCurveTo(.6,-.3,0,-.3,0,0);const ne={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Tn(we,ne),T=new L(g,w);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const I=new L(g,R);I.scale.set(.2,.2,.25),I.position.set(.5,-.3,.4),I.rotation.y=Math.PI,I.rotation.x=Math.PI,u.add(I);const U=new L(g,b);U.scale.set(.25,.25,.27),U.position.set(.4,.3,-.2),U.rotation.y=Math.PI,U.rotation.x=Math.PI,u.add(U);const D=new Ae(.35,32,32),Y=new L(D,R);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),u.add(Y);const j=new L(D,F);j.scale.set(.75,1.25,.65),j.position.set(.7,-.15,.2),u.add(j);const S=new Ct(.2,.22,.6,32),v=new L(S,w);v.position.set(-.4,-1.05,0),u.add(v);const C=new L(S,O);C.position.set(.4,-1.05,0),u.add(C);const k=new Ae(.3,32,32),G=new L(k,w);G.scale.set(1,.72,1.5),G.position.set(-.4,-1.45,.17),u.add(G);const V=new L(k,O);V.scale.set(1,.72,1.5),V.position.set(.4,-1.45,.17),u.add(V);const fe=new Ae(.44,32,32),ue=new L(fe,b);ue.position.set(-.15,-.45,-.4),u.add(ue);const pe=new L(fe,M);pe.position.set(.15,-.45,-.4),u.add(pe);const be=new Ae(.18,32,32),he=new L(be,b);he.position.set(0,-.35,-.8),u.add(he),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xe){const ee=new Gt("X",{font:xe,size:.2,depth:.05});new Bn({color:0});const Q=new L(ee,b);Q.position.set(-.3,.99,.53),Q.rotation.x=ct.degToRad(-5),Q.rotation.y=ct.degToRad(-15),u.add(Q);const _e=new Gt("O",{font:xe,size:.2,depth:.05});new Bn({color:0});const ve=new L(_e,R);ve.position.set(.14,.99,.53),ve.rotation.y=ct.degToRad(12),ve.rotation.x=ct.degToRad(-5),u.add(ve);const Fe=new Gt("POP",{font:xe,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),We=new Ne({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ne({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Ze=new Ne({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),qe=new Ne({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),tt=new L(Fe,We);tt.scale.set(.15,.15,.15),tt.position.set(.03,1.16,.1),tt.rotateZ(-25),u.add(tt);const at=new L(Fe,P);at.scale.set(.14,.14,.14),at.rotateZ(45),at.position.set(.2,-.7,.3),u.add(at);const St=new L(Fe,Ze);St.scale.set(.14,.14,.14),St.rotateZ(45),St.rotateY(45),St.position.set(.3,.7,.3),u.add(St);const wt=new L(Fe,Ze);wt.scale.set(.15,.15,.15),wt.rotateZ(45),wt.rotateY(45),wt.position.set(.35,-1.5,.3),u.add(wt);const yt=new L(Fe,qe);yt.scale.set(.17,.17,.17),yt.rotateZ(45),yt.rotateY(15),yt.position.set(.35,1,.3),u.add(yt)}),he.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const Ce=()=>{u.rotation.y,u.rotation.x},Pe=()=>{s.value=!0,r.value=!1,o.value=!1},Te=()=>{s.value=!1,r.value=!0,o.value=!1},Ve=()=>{s.value=!1,r.value=!1,Ce()},Ie=xe=>{const ee=window.innerWidth/2;xe>ee?Pe():Te(),Ce()},ke=xe=>{clearTimeout(i),Ve(),o.value=!0;const ee={x:xe.clientX/window.innerWidth*2-1,y:-(xe.clientY/window.innerHeight)*2+1};if(o.value){const Q=ee.x*Math.PI*.2,_e=ee.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=_e}i=setTimeout(()=>{o.value=!1,Ie(xe.clientX)},500)};window.addEventListener("mousemove",ke);const z=xe=>{if(o.value){const ee={x:xe.clientX/window.innerWidth*2-1,y:-(xe.clientY/window.innerHeight)*2+1},Q=ee.x*Math.PI*.2,_e=ee.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=_e}};window.addEventListener("mousemove",z),a(),Ht(()=>e.bodyPosition,xe=>{u.position.set(xe.x,xe.y,xe.z)}),Ht(()=>e.cameraPosition,xe=>{c.position.set(e.bodyPosition.x,1,xe),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(xi(),yi("div",{ref_key:"threeCanvas",ref:t,class:zn(n.background?"no-bg":"three-canvas")},null,2))}}),Xw=Mi(Ww,[["__scopeId","data-v-8cfea564"]]),qw={class:"pixel-controls"},Yw={class:"side-buttons"},$w=Gn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Je(null);let i=Je(!1),s=Je(!1),r=Je(!1),o=Je(!1);Jn(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03);const Q=xe.getElapsedTime();z.forEach((_e,ve)=>{const Fe=.2+Math.sin(Q*3+ee[ve])*.1;_e.scale.set(Fe,Fe,Fe)}),x.render(m,_)};const m=new _i,_=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),x=new gi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new Ke,p=new Ke;m.add(p);const b=new Yi(16777215,2);m.add(b);const M=new qi(16777215,4);M.position.set(5,5,5),m.add(M);const w=new Xi(16777215,5,50);w.position.set(0,2,4),m.add(w);const O=new Wi,P=O.load("/3d-bear-arts/assets/pop6.jpg"),R=O.load("/3d-bear-arts/assets/pop7.jpg");P.wrapS=P.wrapT=Nt,R.wrapS=R.wrapT=Nt,R.repeat.set(2,2);const F=new Ne({color:16738740,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),ie=new Ne({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ft}),y=new Ne({color:16766720,map:P,metalness:.3,roughness:.5}),E=new Ne({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ft}),K=new Ne({color:9055202,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),X=new Ne({color:65535,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Ne({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ft}),oe=new Ae(1,32,32,0,Math.PI),H=new L(oe,ie),J=new L(oe,F);H.scale.set(.85,.85,.8),J.scale.set(.85,.85,.8),H.position.y=-.2,J.position.y=-.2,H.rotation.y=Math.PI/2,J.rotation.y=Math.PI*1.5;const B=new Tt(1,32),me=new L(B,F);me.scale.set(.85,.85,.8),me.position.set(0,-.2,0),me.rotation.y=Math.PI/2;const Me=new Ke;Me.add(H),Me.add(J),Me.add(me),d.add(Me);const ge=new Ae(.6,32,32,0,Math.PI),Re=new L(ge,y);Re.scale.set(1,.95,.95),Re.position.set(0,1,0),Re.rotation.y=Math.PI*1.5;const Be=new L(ge,E);Be.scale.set(1,.95,.95),Be.position.set(0,1,0),Be.rotation.y=Math.PI/2;const se=new Tt(.6,32),de=new L(se,y);de.position.set(0,1,0),de.rotation.y=Math.PI/2,de.scale.set(1,.95,.95);const Se=new Ke;Se.add(Re),Se.add(Be),Se.add(de),d.add(Se);const N=new Ae(.25,32,32),le=new L(N,F);le.position.set(-.45,1.35,-.1),d.add(le);const ae=new L(N,ie);ae.position.set(.45,1.35,-.1),d.add(ae);const ce=new Ae(.25,32,32,Math.PI/2,Math.PI),we=new L(ce,y);we.scale.set(1.1,.6,.8),we.position.set(0,.84,.5),we.rotation.y=Math.PI;const ne=new Ae(.25,32,32,Math.PI/2,Math.PI),g=new L(ne,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Tt(.25,32),I=new L(T,y);I.scale.set(.8,.6,.8),I.position.set(0,.84,.5),I.rotation.y=Math.PI/2;const U=new Ke;U.add(we),U.add(g),U.add(I),d.add(U);const D=new Mn;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},j=new Tn(D,Y),S=new L(j,y);S.scale.set(.5,.5,.5),S.position.set(.3,0,0),S.rotation.y=Math.PI,S.rotation.x=Math.PI,d.add(S);const v=new L(j,X);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,d.add(v);const C=new L(j,F);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,d.add(C);const k=new Ae(.35,32,32),G=new L(k,X);G.scale.set(.75,1.25,.65),G.position.set(-.7,-.15,.2),d.add(G);const V=new L(k,Z);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),d.add(V);const fe=new Ct(.2,.22,.6,32),ue=new L(fe,y);ue.position.set(-.4,-1.05,0),d.add(ue);const pe=new L(fe,E);pe.position.set(.4,-1.05,0),d.add(pe);const be=new Ae(.3,32,32),he=new L(be,y);he.scale.set(1,.72,1.5),he.position.set(-.4,-1.45,.17),d.add(he);const ye=new L(be,E);ye.scale.set(1,.72,1.5),ye.position.set(.4,-1.45,.17),d.add(ye);const Ce=new Ae(.44,32,32),Pe=new L(Ce,F);Pe.position.set(-.15,-.45,-.4),d.add(Pe);const Te=new L(Ce,ie);Te.position.set(.15,-.45,-.4),d.add(Te);const Ve=new Ae(.18,32,32),Ie=new L(Ve,F);Ie.position.set(0,-.35,-.8),d.add(Ie),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const _e=new Gt("X",{font:Q,size:.2,depth:.05}),ve=new L(_e,F);ve.position.set(-.3,.99,.53),ve.rotation.x=ct.degToRad(-5),ve.rotation.y=ct.degToRad(-15),d.add(ve);const Fe=new Gt("O",{font:Q,size:.2,depth:.05}),We=new L(Fe,X);We.position.set(.14,.99,.53),We.rotation.y=ct.degToRad(12),We.rotation.x=ct.degToRad(-5),d.add(We);const Ze=new Gt("POP",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Gt("🐻",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const qe=new Gt("BAO      BEAR",{font:Q,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),tt=new Ne({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ne({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const at=new Ne({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),St=new Ne({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),wt=new L(Ze,tt);wt.scale.set(.15,.15,.15),wt.position.set(.02,1.16,.1),wt.rotateZ(-25),d.add(wt);const yt=new L(Ze,K);yt.scale.set(.14,.14,.14),yt.rotateZ(45),yt.position.set(.2,-.7,.3),d.add(yt);const Pt=new L(Ze,at);Pt.scale.set(.14,.14,.14),Pt.rotateZ(45),Pt.rotateY(45),Pt.position.set(.3,.7,.3),d.add(Pt);const gt=new L(Ze,at);gt.scale.set(.15,.15,.15),gt.rotateZ(45),gt.rotateY(45),gt.position.set(.35,-1.5,.3),d.add(gt);const Bt=new L(Ze,St);Bt.scale.set(.17,.17,.17),Bt.rotateZ(45),Bt.rotateY(15),Bt.position.set(.35,1,.3),d.add(Bt);const Et=new L(qe,tt);Et.scale.set(.7,.7,.7),Et.position.set(-6,0,-3),p.add(Et)}),Ie.renderOrder=1,d.scale.set(1.4,1.4,1.4),m.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,d.rotation.x=.1;const z=[S,v,C],xe=new ip,ee=[0,Math.PI/2,Math.PI,0,Math.PI/3];f(),Ht(()=>e.bodyPosition,Q=>{d.position.set(Q.x,Q.y,Q.z)}),Ht(()=>e.cameraPosition,Q=>{_.position.set(e.bodyPosition.x,1,Q),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(xi(),yi(fn,null,[je("div",{ref_key:"threeCanvas",ref:t,class:zn(n.background?"no-bg":"three-canvas")},null,2),je("div",qw,[je("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),je("div",Yw,[je("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),je("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),je("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),jw=Mi($w,[["__scopeId","data-v-cb52c927"]]),Kw={class:"pixel-controls"},Zw={class:"side-buttons"},Jw=Gn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Je(null);let i=Je(!1),s=Je(!1),r=Je(!1),o=Je(!1);Jn(()=>{if(t.value){let f=function(at,St){const wt=new Ct(ke,ke,z,32);wt.rotateX(Math.PI/2);const yt=new L(wt,at),Pt=new Ke;for(let Bt=0;Bt<xe;Bt++){const Et=Bt/xe*Math.PI*2,rn=new xs(ee,Q,_e),Xt=new L(rn,at);Xt.position.set((ke+_e/26)*Math.cos(Et),(ke+_e/26)*Math.sin(Et),0),Xt.rotation.z=Et,Pt.add(Xt)}const gt=new Ke;return gt.add(yt),gt.add(Pt),gt.position.set(St.x,St.y,St.z),gt},m=function(){requestAnimationFrame(m),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),ve.rotation.z-=.02,Fe.rotation.z+=.03,We.rotation.z+=.02,Ze.rotation.z+=.02,qe.rotation.z-=.03,tt.rotation.y+=.04,d.render(_,x)};const _=new _i,x=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),d=new gi({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(d.domElement);const p=new Ke,b=new Ke;_.add(b);const M=new Yi(16777215,2);_.add(M);const w=new qi(16777215,4);w.position.set(5,5,5),_.add(w);const O=new Xi(16777215,5,50);O.position.set(0,2,4),_.add(O);const P=new Wi,R=P.load("/3d-bear-arts/assets/metal.jpg"),F=P.load("/3d-bear-arts/assets/pop7.jpg"),ie=P.load("/3d-bear-arts/assets/gear.jpg");R.wrapS=R.wrapT=Nt,F.wrapS=F.wrapT=Nt,F.repeat.set(2,2);const y=new Ne({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:R});ie.mapping=Hr;const E=new Ne({color:"#d3d3d3",metalness:1,roughness:.25,map:R,envMap:ie,clearcoat:.7,clearcoatRoughness:.3}),K=new Ne({color:"#C0C0C0",metalness:1,roughness:.25,envMap:ie,clearcoat:.7,clearcoatRoughness:.3}),X=new Ne({color:"#C0C0C0",metalness:1,roughness:.25,map:R,envMap:ie,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),Z=new Ne({color:"#C0C0C0",metalness:1,roughness:.5,map:R,envMap:ie,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),oe=new Ne({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:ft});new Ne({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const H=new Ne({color:"#d3d3d3",metalness:1,roughness:.2,map:ie,envMap:ie,clearcoat:.7,clearcoatRoughness:.3});new Ne({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:ie}),new Ne({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:R,transparent:!0,opacity:.3});const J=new Ae(1,32,32,0,Math.PI),B=new L(J,Z),me=new L(J,E);B.scale.set(.85,.85,.8),me.scale.set(.85,.85,.8),B.position.y=-.2,me.position.y=-.2,B.rotation.y=Math.PI/2,me.rotation.y=Math.PI*1.5;const Me=new Tt(1,32),ge=new L(Me,X);ge.scale.set(.85,.85,.8),ge.position.set(0,-.2,0),ge.rotation.y=Math.PI/2;const Re=new Ke;Re.add(B),Re.add(me),Re.add(ge),p.add(Re);const Be=new Ae(.6,32,32,0,Math.PI),se=new L(Be,E);se.scale.set(1,.95,.95),se.position.set(0,1,0),se.rotation.y=Math.PI*1.5;const de=new L(Be,Z);de.scale.set(1,.95,.95),de.position.set(0,1,0),de.rotation.y=Math.PI/2;const Se=new Tt(.6,32),N=new L(Se,X);N.position.set(0,1,0),N.rotation.y=Math.PI/2,N.scale.set(1,.95,.95);const le=new Ke;le.add(se),le.add(de),le.add(N),p.add(le);const ae=new Ae(.25,32,32),ce=new L(ae,E);ce.position.set(-.45,1.35,-.1),p.add(ce);const we=new L(ae,X);we.position.set(.45,1.35,-.1),p.add(we);const ne=new Ae(.25,32,32,Math.PI/2,Math.PI),g=new L(ne,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new Ae(.25,32,32,Math.PI/2,Math.PI),I=new L(T,X);I.scale.set(1.1,.6,.8),I.position.set(0,.84,.5),I.rotation.y=0;const U=new Tt(.25,32),D=new L(U,oe);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const Y=new Ke;Y.add(g),Y.add(I),Y.add(D),p.add(Y);const j=new Mn;j.moveTo(0,0),j.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),j.bezierCurveTo(-.6,.3,0,.6,0,1),j.bezierCurveTo(0,.6,.6,.3,.6,0),j.bezierCurveTo(.6,-.3,0,-.3,0,0);const S={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Tn(j,S),C=new Ae(.35,32,32),k=new L(C,E);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),p.add(k);const G=new L(C,X);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),p.add(G);const V=new Ct(.2,.22,.6,32),fe=new L(V,E);fe.position.set(-.4,-1.05,0),p.add(fe);const ue=new L(V,X);ue.position.set(.4,-1.05,0),p.add(ue);const pe=new Ae(.3,32,32),be=new L(pe,E);be.scale.set(1,.72,1.5),be.position.set(-.4,-1.45,.17),p.add(be);const he=new L(pe,X);he.scale.set(1,.72,1.5),he.position.set(.4,-1.45,.17),p.add(he);const ye=new Ae(.44,32,32),Ce=new L(ye,E);Ce.position.set(-.15,-.45,-.4),p.add(Ce);const Pe=new L(ye,Z);Pe.position.set(.15,-.45,-.4),p.add(Pe);const Te=new Ae(.18,32,32),Ve=new L(Te,E);Ve.position.set(0,-.35,-.8),p.add(Ve),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(at){const St=new Gt("X",{font:at,size:.2,depth:.05});new Bn({color:0});const wt=new L(St,y);wt.position.set(-.3,.99,.53),wt.rotation.x=ct.degToRad(-5),wt.rotation.y=ct.degToRad(-15),p.add(wt);const yt=new Gt("O",{font:at,size:.2,depth:.05});new Bn({color:0});const Pt=new L(yt,y);Pt.position.set(.14,.99,.53),Pt.rotation.y=ct.degToRad(12),Pt.rotation.x=ct.degToRad(-5),p.add(Pt)}),Ve.renderOrder=1;const ke=1.2,z=.5,xe=8,ee=.7,Q=.3,_e=.5,ve=f(H,{x:-2,y:0,z:0}),Fe=f(H,{x:0,y:0,z:0}),We=f(H,{x:2,y:0,z:0}),Ze=f(H,{x:2,y:0,z:0}),qe=f(H,{x:2,y:-2,z:0}),tt=new L(v,K);tt.scale.set(.3,.3,.3),tt.position.set(.25,1.1,0),tt.rotation.y=Math.PI,tt.rotation.x=Math.PI,p.add(tt),ve.position.set(.35,0,0),Fe.position.set(.25,-.3,.4),We.position.set(.3,.3,-.2),Ze.position.set(.25,.17,.4),qe.position.set(.5,-.3,.45),ve.scale.set(.2,.2,.2),Fe.scale.set(.18,.18,.18),We.scale.set(.15,.15,.15),Ze.scale.set(.17,.17,.17),qe.scale.set(.15,.15,.15),Fe.rotation.z=Math.PI/4,We.rotation.z=-Math.PI/4,Ze.rotation.y=-Math.PI/2,qe.rotation.y=-Math.PI/2,p.add(ve),p.add(Fe),p.add(We),p.add(Ze),p.add(qe),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),x.position.set(e.bodyPosition.x,1,e.cameraPosition),x.lookAt(e.bodyPosition.x,0,0),x.position.z=4,m(),Ht(()=>e.bodyPosition,at=>{p.position.set(at.x,at.y,at.z)}),Ht(()=>e.cameraPosition,at=>{x.position.set(e.bodyPosition.x,1,at),x.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(xi(),yi(fn,null,[je("div",{ref_key:"threeCanvas",ref:t,class:zn(n.background?"no-bg":"three-canvas")},null,2),je("div",Kw,[je("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),je("div",Zw,[je("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),je("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),je("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),Qw=Mi(Jw,[["__scopeId","data-v-9a57b6d8"]]),eE={class:"pixel-controls"},tE={class:"side-buttons"},nE=Gn({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Je(null);let i=Je(!1),s=Je(!1),r=Je(!1),o=Je(!1);Jn(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03),x.render(m,_)};const m=new _i,_=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),x=new gi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new Ke,p=new Ke;m.add(p);const b=new Yi(16777215,2);m.add(b);const M=new qi(16777215,4);M.position.set(5,5,5),m.add(M);const w=new Xi(16777215,5,50);w.position.set(0,2,4),m.add(w);const O=new Wi,P=O.load("/3d-bear-arts/assets/sun.jpg"),R=O.load("/3d-bear-arts/assets/gear.jpg"),F=O.load("/3d-bear-arts/assets/underwater.jpg"),ie=O.load("/3d-bear-arts/assets/beach.jpg");F.wrapS=F.wrapT=Nt,ie.wrapS=ie.wrapT=Nt,ie.repeat.set(.8,1),R.mapping=Hr,P.wrapS=P.wrapT=Nt;const y=new Ne({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:ie,envMapIntensity:.8,side:ft,transparent:!0,opacity:.9}),E=new Ne({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:ie,envMapIntensity:.6,side:ft,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new Ne({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:ie,side:ft,transparent:!0,opacity:.9});const K=new Ne({color:8374441,metalness:1,roughness:.25,envMap:R,clearcoat:.7,clearcoatRoughness:.3}),X=new Ne({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:ft}),Z=new Ne({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:ie,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),oe=new Ne({color:"#a4d0f5",metalness:0,roughness:.8,map:P,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),H=new Ne({color:"#a4d0f5",metalness:0,roughness:.85,map:ie,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),J=new Ae(1,32,32,0,Math.PI),B=new L(J,X),me=new L(J,E);B.scale.set(.85,.85,.8),me.scale.set(.85,.85,.8),B.position.y=-.2,me.position.y=-.2,B.rotation.y=Math.PI/2,me.rotation.y=Math.PI*1.5;const Me=new Tt(1,32),ge=new L(Me,H);ge.scale.set(.85,.85,.8),ge.position.set(0,-.2,0),ge.rotation.y=Math.PI/2;const Re=new Ke;Re.add(B),Re.add(me),Re.add(ge);const Be=new Ae(.6,32,32,0,Math.PI*2,0,Math.PI/2),se=new Ne({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),de=new L(Be,se);de.position.set(0,-.2,0),de.rotation.x=Math.PI,de.scale.set(1.25,1.25,1.25),Re.add(de);const Se=new Ne({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ft,transparent:!0,opacity:.7,depthWrite:!1}),N=new L(Me,Se);N.scale.set(.7,.7,.7),N.position.set(0,-.3,0),N.rotation.x=Math.PI/2,N.renderOrder=1,Re.add(N),d.add(Re);const le=new Ae(.6,32,32,0,Math.PI),ae=new L(le,y);ae.scale.set(1,.95,.95),ae.position.set(0,1,0),ae.rotation.y=Math.PI*1.5;const ce=new L(le,Z);ce.scale.set(1,.95,.95),ce.position.set(0,1,0),ce.rotation.y=Math.PI/2;const we=new Tt(.6,32),ne=new L(we,oe);ne.position.set(0,1,0),ne.rotation.y=Math.PI/2,ne.scale.set(1,.95,.95);const g=new Ke;g.add(ae),g.add(ce),g.add(ne),d.add(g);const T=new Ae(.25,32,32),I=new L(T,y);I.position.set(-.45,1.35,-.1),d.add(I);const U=new L(T,Z);U.position.set(.45,1.35,-.1),d.add(U);const D=new Ae(.25,32,32,Math.PI/2,Math.PI),Y=new L(D,y);Y.scale.set(1.1,.6,.8),Y.position.set(0,.84,.5),Y.rotation.y=Math.PI;const j=new Ae(.25,32,32,Math.PI/2,Math.PI),S=new L(j,Z);S.scale.set(1.1,.6,.8),S.position.set(0,.84,.5),S.rotation.y=0;const v=new Tt(.25,32),C=new L(v,oe);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const k=new Ke;k.add(Y),k.add(S),k.add(C),d.add(k);const G=new Mn;G.moveTo(0,0),G.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),G.bezierCurveTo(-.6,.3,0,.6,0,1),G.bezierCurveTo(0,.6,.6,.3,.6,0),G.bezierCurveTo(.6,-.3,0,-.3,0,0);const V={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},fe=new Tn(G,V),ue=new Ae(.35,32,32),pe=new L(ue,y);pe.scale.set(.75,1.25,.65),pe.position.set(-.7,-.15,.2),d.add(pe);const be=new L(ue,Z);be.scale.set(.75,1.25,.65),be.position.set(.7,-.15,.2),d.add(be);const he=new Ct(.2,.22,.6,32),ye=new L(he,y);ye.position.set(-.4,-1.05,0),d.add(ye);const Ce=new L(he,Z);Ce.position.set(.4,-1.05,0),d.add(Ce);const Pe=new Ae(.3,32,32),Te=new L(Pe,y);Te.scale.set(1,.72,1.5),Te.position.set(-.4,-1.45,.17),d.add(Te);const Ve=new L(Pe,Z);Ve.scale.set(1,.72,1.5),Ve.position.set(.4,-1.45,.17),d.add(Ve);const Ie=new Ae(.44,32,32),ke=new L(Ie,y);ke.position.set(-.15,-.45,-.4),d.add(ke);const z=new L(Ie,Z);z.position.set(.15,-.45,-.4),d.add(z);const xe=new Ae(.18,32,32),ee=new L(xe,E);ee.position.set(0,-.35,-.8),d.add(ee),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ve){const Fe=new Gt("X",{font:ve,size:.2,depth:.05});new Bn({color:0});const We=new L(Fe,y);We.position.set(-.3,.99,.53),We.rotation.x=ct.degToRad(-5),We.rotation.y=ct.degToRad(-15),d.add(We);const Ze=new Gt("O",{font:ve,size:.2,depth:.05});new Bn({color:0});const qe=new L(Ze,E);qe.position.set(.14,.99,.53),qe.rotation.y=ct.degToRad(12),qe.rotation.x=ct.degToRad(-5),d.add(qe)}),ee.renderOrder=1,d.rotation.x=.1;const _e=new L(fe,K);_e.scale.set(.3,.3,.3),_e.position.set(.25,1.1,0),_e.rotation.y=Math.PI,_e.rotation.x=Math.PI,d.add(_e),d.scale.set(1.4,1.4,1.4),m.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,f(),Ht(()=>e.bodyPosition,ve=>{d.position.set(ve.x,ve.y,ve.z)}),Ht(()=>e.cameraPosition,ve=>{_.position.set(e.bodyPosition.x,1,ve),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(xi(),yi(fn,null,[je("div",{ref_key:"threeCanvas",ref:t,class:zn(n.background?"no-bg":"three-canvas")},null,2),je("div",eE,[je("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),je("div",tE,[je("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),je("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),je("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),iE=Mi(nE,[["__scopeId","data-v-08c607ba"]]),sE={class:"pixel-controls"},rE={class:"side-buttons"},oE={class:"directional-buttons"},aE={class:"horizontal-buttons"},Do=.05,lE=Gn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Je(null);let i=Je(!1),s=Je(!1),r=Je(!1),o=Je(!1);const a=wf(null);new Ke;const l=Je(!1),c=Je(!1),h=Je(!1),u=Je(!1),f=new gi({antialias:!0});f.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(f.domElement);const m=new _i,_=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3);_.position.z=5,Jn(()=>{if(t.value){let y=function(){const Xe=new Ke,A=new Ae(.2,32,32),W=new Yt({color:16767916}),te=new L(A,W);te.position.set(0,1.5,0),Xe.add(te);const re=new Ae(.21,32,32,0,Math.PI*2,0,Math.PI/2),$=new Yt({color:16711680}),Ee=new L(re,$);Ee.position.set(0,1.58,0),Xe.add(Ee);const Le=new Ct(.25,.25,.6,32),Oe=new Yt({color:16767916}),ze=new L(Le,Oe);ze.position.set(0,1,0),Xe.add(ze);const Ye=new Ct(.26,.26,.3,32),$e=new Yt({color:255}),He=new L(Ye,$e);He.position.set(0,.65,0),Xe.add(He);const st=new Ct(.1,.1,.5,32),rt=new Yt({color:16767916}),ht=new L(st,rt);ht.position.set(-.15,.25,0),Xe.add(ht);const Dt=new L(st,rt);Dt.position.set(.15,.25,0),Xe.add(Dt);const ot=new Ct(.08,.08,.5,32),Ge=new L(ot,rt);Ge.position.set(-.35,1.3,0),Ge.rotation.z=Math.PI/4,Xe.add(Ge);const vt=new L(ot,rt);return vt.position.set(.35,1.3,0),vt.rotation.z=-Math.PI/4,Xe.add(vt),Xe.scale.set(.27,.27,.27),Xe.position.set(-.2,-.1,-.15),Xe},E=function(){const Xe=new Ke,A=new Ae(.18,32,32),W=new Yt({color:16767916}),te=new L(A,W);te.position.set(0,1.2,.04),Xe.add(te);const re=new Ae(.19,32,32,.4,Math.PI*2,0,Math.PI/2),$=new Ct(.18,.18,.4,32),Ee=new Yt({color:9127187}),Le=new L(re,Ee);Le.position.set(0,1.28,0),Xe.add(Le);const Oe=new L($,Ee);Oe.position.set(0,1.1,-.01),Xe.add(Oe);const ze=new Ct(.18,.2,.5,32),Ye=new Yt({color:16767916}),$e=new L(ze,Ye);$e.position.set(0,.85,0),Xe.add($e);const He=new Ae(.08,32,32,0,Math.PI),st=new Yt({color:16738740}),rt=new L(He,st);rt.position.set(-.09,.98,.15),Xe.add(rt);const ht=new L(He,st);ht.position.set(.09,.98,.15),Xe.add(ht);const Dt=new Ct(.22,.22,.25,32),ot=new Yt({color:16738740}),Ge=new L(Dt,ot);Ge.position.set(0,.6,0),Xe.add(Ge);const vt=new Ct(.1,.1,.6,32),lt=new Yt({color:16767916}),on=new L(vt,lt);on.position.set(-.09,.5,.2),on.rotation.x=Math.PI/2,Xe.add(on);const Hn=new L(vt,lt);Hn.position.set(.09,.5,.2),Hn.rotation.x=Math.PI/2,Xe.add(Hn);const Zt=new Ct(.08,.08,.35,32),Ki=new L(Zt,lt);Ki.position.set(-.24,.95,.18),Ki.rotation.x=Math.PI/2,Xe.add(Ki);const At=new L(Zt,lt);return At.position.set(.2,.85,0),At.rotation.z=Math.PI/20,Xe.add(At),Xe.scale.set(.27,.27,.27),Xe.position.set(.2,-.15,-.32),Xe},K=function(){const Xe=new Ke,A=new Ae(.2,32,32),W=new Yt({color:16767916}),te=new L(A,W);te.position.set(0,1.5,0),Xe.add(te);const re=new Ae(.21,32,32,0,Math.PI*2,0,Math.PI/2),$=new Yt({color:25600}),Ee=new L(re,$);Ee.position.set(0,1.58,0),Xe.add(Ee);const Le=new Ct(.22,.22,.5,32),Oe=new Yt({color:16767916}),ze=new L(Le,Oe);ze.position.set(0,1,0),Xe.add(ze);const Ye=new Ct(.23,.23,.3,32),$e=new Yt({color:8388736}),He=new L(Ye,$e);He.position.set(0,.65,0),Xe.add(He);const st=new Ct(.1,.1,.5,32),rt=new Yt({color:16767916}),ht=new L(st,rt);ht.position.set(-.15,.3,-.25),ht.rotation.x=Math.PI/6,Xe.add(ht);const Dt=new L(st,rt);Dt.position.set(.15,.3,.25),Dt.rotation.x=-Math.PI/6,Xe.add(Dt);const ot=new Ct(.08,.08,.4,32),Ge=new L(ot,rt);Ge.position.set(-.28,1,-.2),Ge.rotation.x=Math.PI/6,Xe.add(Ge);const vt=new L(ot,rt);return vt.position.set(.28,1.3,.1),vt.rotation.z=-Math.PI/8,Xe.add(vt),Xe.scale.set(.15,.15,.15),Xe.position.set(.3,-.25,.25),Xe.rotation.x=Math.PI/12,Xe.rotation.y=Math.PI/2,Xe.rotation.z=-Math.PI/3,Xe},X=function(Xe){let A=1,W=0;function te(){requestAnimationFrame(te),Xe.position.x+=.01*A,Xe.position.x>=.35?(A=-1,Xe.rotation.y=Math.PI):Xe.position.x<=-.35&&(A=1,Xe.rotation.y=0),W+=.003,Xe.position.y=-.4+Math.sin(W)*.1,J.render(oe,H)}te()},Z=function(){requestAnimationFrame(Z),i.value&&(B.rotation.y+=.03),s.value&&(B.rotation.y-=.03),r.value&&(B.rotation.x-=.03),o.value&&(B.rotation.x+=.03),be.uniforms.u_time.value+=.25,We.rotation.y+=.04,J.render(oe,H)};const oe=new _i,H=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),J=new gi({antialias:!0,alpha:!0});J.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(J.domElement);const B=new Ke,me=new Ke;oe.add(me);const Me=new Yi(16777215,2);oe.add(Me);const ge=new qi(16777215,4);ge.position.set(5,5,5),oe.add(ge);const Re=new Xi(16777215,5,50);Re.position.set(0,2,4),oe.add(Re);const Be=new Wi,se=Be.load("/3d-bear-arts/assets/beach.jpg");se.repeat.set(.8,1);const de=Be.load("/3d-bear-arts/assets/sun.jpg");se.wrapS=se.wrapT=Nt,se.repeat.set(.8,1),de.wrapS=de.wrapT=Nt;const Se=new Ne({color:11592447,map:se,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),N=new Ne({color:11592447,map:se,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:ft,ior:1.33,depthWrite:!1,depthTest:!0}),le=new Ne({color:11592447,map:se,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),ae=new Ne({color:11592447,map:se,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:ft}),ce=new Ne({color:11592447,map:se,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:ft,ior:1.33}),we=new Ne({color:11592447,map:se,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),ne=new Ae(1,32,32,0,Math.PI),g=new L(ne,ae),T=new L(ne,N);g.scale.set(.85,.85,.8),T.scale.set(.85,.85,.8),g.position.y=-.2,T.position.y=-.2,g.rotation.y=Math.PI/2,T.rotation.y=Math.PI*1.5;const I=new Tt(1,32),U=new L(I,Se);U.scale.set(.85,.85,.8),U.position.set(0,-.2,0),U.rotation.y=Math.PI/2;const D=new Ke;D.add(g),D.add(T),D.add(U),B.add(D);const Y=new Ae(.6,32,32,0,Math.PI),j=new L(Y,Se);j.scale.set(1,.95,.95),j.position.set(0,1,0),j.rotation.y=Math.PI*1.5;const S=new L(Y,le);S.scale.set(1,.95,.95),S.position.set(0,1,0),S.rotation.y=Math.PI/2;const v=new Tt(.6,32),C=new L(v,Se);C.position.set(0,1,0),C.rotation.y=Math.PI/2,C.scale.set(1,.95,.95);const k=new Ke;k.add(j),k.add(S),k.add(C),B.add(k);const G=new Ae(.6,32,32,0,Math.PI*2,0,Math.PI/2),V=new Ne({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),fe=new L(G,V);fe.position.set(0,-.2,0),fe.rotation.x=Math.PI,fe.scale.set(1.25,1.25,1.25),D.add(fe);const ue=new Ne({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ft,transparent:!0,opacity:.7,depthWrite:!1}),pe=new L(I,ue);pe.scale.set(.7,.7,.7),pe.position.set(0,-.3,0),pe.rotation.x=Math.PI/2,pe.renderOrder=1,D.add(pe),B.add(D);const be=new Zn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),he=new L(I,be);he.position.set(0,-.3,0),he.scale.set(.7,.7,.7),he.rotation.x=-Math.PI/2,he.renderOrder=1,D.add(he);const ye=new Ae(.25,32,32),Ce=new L(ye,ce);Ce.position.set(-.45,1.35,-.1),B.add(Ce);const Pe=new L(ye,le);Pe.position.set(.45,1.35,-.1),B.add(Pe);const Te=new Ae(.25,32,32,Math.PI/2,Math.PI),Ve=new L(Te,ce);Ve.scale.set(1.1,.6,.8),Ve.position.set(0,.84,.5),Ve.rotation.y=Math.PI;const Ie=new Ae(.25,32,32,Math.PI/2,Math.PI),ke=new L(Ie,le);ke.scale.set(1.1,.6,.8),ke.position.set(0,.84,.5),ke.rotation.y=0;const z=new Tt(.25,32),xe=new L(z,N);xe.scale.set(.8,.6,.8),xe.position.set(0,.84,.5),xe.rotation.y=Math.PI/2;const ee=new Ke;ee.add(Ve),ee.add(ke),ee.add(xe),B.add(ee);const Q=new Ne({color:8374441,metalness:1,roughness:.25,envMap:de,clearcoat:.7,clearcoatRoughness:.3}),_e=new Mn;_e.moveTo(0,0),_e.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),_e.bezierCurveTo(-.6,.3,0,.6,0,1),_e.bezierCurveTo(0,.6,.6,.3,.6,0),_e.bezierCurveTo(.6,-.3,0,-.3,0,0);const ve={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Fe=new Tn(_e,ve),We=new L(Fe,Q);We.scale.set(.2,.2,.2),We.position.set(.25,1.2,0),We.rotation.y=Math.PI,We.rotation.x=Math.PI,B.add(We);const Ze=new Ae(.35,32,32),qe=new L(Ze,N);qe.scale.set(.75,1.25,.65),qe.position.set(-.7,-.15,.2),B.add(qe);const tt=new L(Ze,ae);tt.scale.set(.75,1.25,.65),tt.position.set(.7,-.15,.2),B.add(tt);const at=new Ct(.2,.22,.6,32),St=new L(at,ce);St.position.set(-.4,-1.05,0),B.add(St);const wt=new L(at,le);wt.position.set(.4,-1.05,0),B.add(wt);const yt=new Ae(.3,32,32),Pt=new L(yt,ce);Pt.scale.set(1,.72,1.5),Pt.position.set(-.4,-1.45,.17),B.add(Pt);const gt=new L(yt,le);gt.scale.set(1,.72,1.5),gt.position.set(.4,-1.45,.17),B.add(gt);const Bt=new Ae(.44,32,32),Et=new L(Bt,ce);Et.position.set(-.15,-.45,-.4),B.add(Et);const rn=new L(Bt,ce);rn.position.set(.15,-.45,-.4),B.add(rn);const Xt=new Ae(.18,32,32),ji=new L(Xt,ce);ji.position.set(0,-.35,-.8),B.add(ji),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Xe){const A=new Gt("X",{font:Xe,size:.2,depth:.05}),W=new L(A,we);W.position.set(-.3,.99,.53),W.rotation.x=ct.degToRad(-5),W.rotation.y=ct.degToRad(-15),B.add(W);const te=new Gt("O",{font:Xe,size:.2,depth:.05}),re=new L(te,we);re.position.set(.14,.99,.53),re.rotation.y=ct.degToRad(12),re.rotation.x=ct.degToRad(-5),B.add(re)}),a.value=y(),B.add(a.value),oe.add(B);const ys=E();B.add(ys);const to=K();B.add(to),X(to),B.scale.set(1.4,1.4,1.4),oe.add(B),B.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),H.position.set(e.bodyPosition.x,1,e.cameraPosition),H.lookAt(e.bodyPosition.x,0,0),H.position.z=4,B.rotation.x=.1,Z(),Ht(()=>e.bodyPosition,Xe=>{B.position.set(Xe.x,Xe.y,Xe.z)}),Ht(()=>e.cameraPosition,Xe=>{H.position.set(e.bodyPosition.x,1,Xe),H.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{H.aspect=window.innerWidth/window.innerHeight,H.updateProjectionMatrix(),J.setSize(window.innerWidth,window.innerHeight)})}});function x(){s.value=!0}function d(){i.value=!0}function p(){r.value=!0}function b(){o.value=!0}function M(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}const w=()=>{l.value=!0,console.log(l.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},O=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},P=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},R=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},F=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},ie=()=>{requestAnimationFrame(ie),a.value&&(l.value&&(a.value.position.z-=Do),c.value&&(a.value.position.z+=Do),h.value&&(a.value.position.x-=Do),u.value&&(a.value.position.x+=Do)),f.render(m,_)};return ie(),(y,E)=>(xi(),yi(fn,null,[je("div",{ref_key:"threeCanvas",ref:t,class:zn(n.background?"no-bg":"three-canvas")},null,2),je("div",sE,[je("button",{class:"pixel-btn up",onMousedown:p,onMouseup:M},"UP",32),je("div",rE,[je("button",{class:"pixel-btn left",onMousedown:x,onMouseup:M},"LEFT",32),je("button",{class:"pixel-btn right",onMousedown:d,onMouseup:M},"RIGHT",32)]),je("button",{class:"pixel-btn down",onMousedown:b,onMouseup:M},"DOWN",32)]),je("div",oE,[je("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:w,onMouseup:F},"UP",32),je("div",aE,[je("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:P,onMouseup:F},"LEFT",32),je("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:R,onMouseup:F},"RIGHT",32)]),je("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:O,onMouseup:F},"DOWN",32)])],64))}}),cE=Mi(lE,[["__scopeId","data-v-5d410b92"]]),uE={class:"pixel-controls"},hE={class:"side-buttons"},fE=Gn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Je(null);let i=Je(!1),s=Je(!1),r=Je(!1),o=Je(!1);Jn(()=>{if(t.value){let f=function(gt,Bt){const Et=new Ke,rn=new Ae(1,32,32),Xt=new L(rn,oe);Xt.scale.set(1,.8,1),Et.add(Xt);const ji=new Ct(.1,.1,.5,16),lr=new Yt({color:9127187}),ys=new L(ji,lr);return ys.position.set(0,.9,0),Et.add(ys),Et},m=function(){requestAnimationFrame(m),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),ke.rotation.z-=.04,z.rotation.z+=.04,xe.rotation.z+=.03,ee.rotation.z+=.03,v.rotation.y+=.04,Pt+=wt,p.position.y=e.bodyPosition.y+Math.sin(Pt)*yt;const gt=at.getElapsedTime();tt.forEach((Bt,Et)=>{const rn=.1+Math.sin(gt*3+St[Et])*.1;Bt.scale.set(rn,rn,rn)}),d.render(_,x)};const _=new _i,x=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),d=new gi({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(d.domElement);const p=new Ke,b=new Ke;_.add(b);const M=new Yi(16777215,2);_.add(M);const w=new qi(16777215,4);w.position.set(5,5,5),_.add(w);const O=new Xi(16777215,5,50);O.position.set(0,2,4),_.add(O);const P=new Wi,R=P.load("/3d-bear-arts/assets/pumpkin.jpg");R.wrapS=R.wrapT=Nt,R.repeat.set(.8,.85);const F=P.load("/3d-bear-arts/assets/pumpkin.jpg");F.wrapS=F.wrapT=Nt,F.repeat.set(1,1);const ie=P.load("/3d-bear-arts/assets/pumpkin.jpg");ie.wrapS=F.wrapT=Nt,ie.repeat.set(2,.8);const y=new Ne({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new Ke,K=new Ne({color:16747520,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),X=new Ne({color:16747520,map:F,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Ne({color:16747520,map:ie,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ft}),oe=new Ne({color:16747520,map:ie,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ne({color:16766720,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ne({color:9109504,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ne({color:4915330,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const H=new Ae(1,32,32,0,Math.PI),J=new L(H,Z),B=new L(H,K);J.scale.set(.85,.85,.8),B.scale.set(.85,.85,.8),J.position.y=-.2,B.position.y=-.2,J.rotation.y=Math.PI/2,B.rotation.y=Math.PI*1.5;const me=new Tt(1,32),Me=new L(me,X);Me.scale.set(.85,.85,.8),Me.position.set(0,-.2,0),Me.rotation.y=Math.PI/2;const ge=new Ke;ge.add(J),ge.add(B),ge.add(Me),p.add(ge);const Re=new Ae(.6,32,32,0,Math.PI),Be=new L(Re,K);Be.scale.set(1,.95,.95),Be.position.set(0,1,0),Be.rotation.y=Math.PI*1.5;const se=new L(Re,Z);se.scale.set(1,.95,.95),se.position.set(0,1,0),se.rotation.y=Math.PI/2;const de=new Tt(.6,32),Se=new L(de,X);Se.position.set(0,1,0),Se.rotation.y=Math.PI/2,Se.scale.set(1,.95,.95);const N=new Ke;N.add(Be),N.add(se),N.add(Se),p.add(N);const le=new Ae(.25,32,32),ae=new L(le,oe);ae.position.set(-.45,1.35,-.1),p.add(ae);const ce=new L(le,Z);ce.position.set(.45,1.35,-.1),p.add(ce);const we=new Ae(.25,32,32,Math.PI/2,Math.PI),ne=new L(we,K);ne.scale.set(1.1,.6,.8),ne.position.set(0,.84,.5),ne.rotation.y=Math.PI;const g=new Ae(.25,32,32,Math.PI/2,Math.PI),T=new L(g,Z);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const I=new Tt(.25,32),U=new L(I,K);U.scale.set(.8,.6,.8),U.position.set(0,.84,.5),U.rotation.y=Math.PI/2;const D=new Ke;D.add(ne),D.add(T),D.add(U),p.add(D);const Y=new Mn;Y.moveTo(0,0),Y.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Y.bezierCurveTo(-.6,.3,0,.6,0,1),Y.bezierCurveTo(0,.6,.6,.3,.6,0),Y.bezierCurveTo(.6,-.3,0,-.3,0,0);const j={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},S=new Tn(Y,j),v=new L(S,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new Ae(.35,32,32),k=new L(C,X);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),p.add(k);const G=new L(C,Z);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),p.add(G);const V=new Ct(.2,.22,.6,32),fe=new L(V,X);fe.position.set(-.4,-1.05,0),p.add(fe);const ue=new L(V,Z);ue.position.set(.4,-1.05,0),p.add(ue);const pe=new Ae(.3,32,32),be=new L(pe,oe);be.scale.set(1,.72,1.5),be.position.set(-.4,-1.45,.17),p.add(be);const he=new L(pe,Z);he.scale.set(1,.72,1.5),he.position.set(.4,-1.45,.17),p.add(he);const ye=new Ae(.44,32,32),Ce=new L(ye,K);Ce.position.set(-.15,-.45,-.4),p.add(Ce);const Pe=new L(ye,Z);Pe.position.set(.15,-.45,-.4),p.add(Pe);const Te=new Ae(.18,32,32),Ve=new L(Te,oe);Ve.position.set(0,-.35,-.8),p.add(Ve),Ve.renderOrder=1,new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(gt){const Bt=new Gt("X",{font:gt,size:.2,depth:.05}),Et=new L(Bt,X);Et.position.set(-.3,.99,.53),Et.rotation.x=ct.degToRad(-5),Et.rotation.y=ct.degToRad(-15),p.add(Et);const rn=new Gt("O",{font:gt,size:.2,depth:.05}),Xt=new L(rn,X);Xt.position.set(.14,.99,.53),Xt.rotation.y=ct.degToRad(12),Xt.rotation.x=ct.degToRad(-5),p.add(Xt)}),p.add(E);const ke=f(),z=f(),xe=f(),ee=f();ke.position.set(.35,-.35,-.3),z.position.set(.25,-.45,.3),xe.position.set(.3,.1,-.2),ee.position.set(.25,.18,.4),ke.scale.set(.3,.3,.3),z.scale.set(.28,.28,.28),xe.scale.set(.25,.25,.25),ee.scale.set(.23,.23,.23),z.rotation.z=Math.PI/4,xe.rotation.z=-Math.PI/4,ee.rotation.y=-Math.PI/2,p.add(ke),p.add(z),p.add(xe),p.add(ee);const Q=new Mn;Q.moveTo(-.5,0),Q.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),Q.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),Q.bezierCurveTo(-.05,.6,.05,.6,.15,.4),Q.bezierCurveTo(.25,.5,.25,.85,.5,.8),Q.bezierCurveTo(1,.6,.75,.25,.5,0),Q.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const _e={depth:.3,bevelEnabled:!1},ve=new Tn(Q,_e),Fe=new Bn({color:0}),We=new L(ve,Fe);We.scale.set(.3,.3,.6),We.rotation.x=0,We.rotation.z=0,We.position.set(.26,.35,.25),p.add(We);const Ze=new L(ve,Fe);Ze.scale.set(.5,.5,.5),Ze.position.set(.4,-.1,.54),p.add(Ze);const qe=new L(ve,Fe);qe.scale.set(.5,.5,.5),qe.position.set(.32,-.35,.65),p.add(qe),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),x.position.set(e.bodyPosition.x,1,e.cameraPosition),x.lookAt(e.bodyPosition.x,0,0),x.position.z=4;const tt=[We,Ze,qe],at=new ip,St=[0,Math.PI/2,Math.PI,0,Math.PI/3];let wt=.05,yt=.25,Pt=0;m(),Ht(()=>e.bodyPosition,gt=>{p.position.set(gt.x,gt.y,gt.z)}),Ht(()=>e.cameraPosition,gt=>{x.position.set(e.bodyPosition.x,1,gt),x.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(xi(),yi(fn,null,[je("div",{ref_key:"threeCanvas",ref:t,class:zn(n.background?"no-bg":"three-canvas")},null,2),je("div",uE,[je("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),je("div",hE,[je("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),je("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),je("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),dE=Mi(fE,[["__scopeId","data-v-5eff72b3"]]),pE={class:"pixel-controls"},mE={class:"side-buttons"},gE=Gn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=Je(null);let i=Je(!1),s=Je(!1),r=Je(!1),o=Je(!1);Jn(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03),j.rotation.y+=.03,Fe+=ee,We+=Q,d.position.y=e.bodyPosition.y+Math.sin(Fe)*ve,j.position.y=e.bodyPosition.y+Math.sin(We)*_e,ke.uniforms.u_time.value+=.25,x.render(m,_)};const m=new _i,_=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),x=new gi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new Ke,p=new Ke;m.add(p);const b=new Yi(16777215,2);m.add(b);const M=new qi(16777215,4);M.position.set(5,5,5),m.add(M);const w=new Xi(16777215,5,50);w.position.set(0,2,4),m.add(w);const O=new Wi,P=O.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Nt,P.repeat.set(2,2);const R=O.load("/3d-bear-arts/assets/ghost.jpg");R.wrapS=R.wrapT=Nt,R.repeat.set(1,1);const F=new Ne({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:ft}),ie=new Ne({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new Ne({color:9109504,map:P,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Ne({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:ft}),K=new Ne({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:ft}),X=new Ne({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:ft}),Z=new Ae(1,32,32,0,Math.PI),oe=new L(Z,F),H=new L(Z,K);oe.scale.set(.85,.85,.8),H.scale.set(.85,.85,.8),oe.position.y=-.2,H.position.y=-.2,oe.rotation.y=Math.PI/2,H.rotation.y=Math.PI*1.5;const J=new Tt(1,32),B=new L(J,K);B.scale.set(.85,.85,.8),B.position.set(0,-.2,0),B.rotation.y=Math.PI/2;const me=new Ke;me.add(oe),me.add(H),me.add(B),d.add(me);const Me=new Ae(.6,32,32,0,Math.PI),ge=new L(Me,X);ge.scale.set(1,.95,.95),ge.position.set(0,1,0),ge.rotation.y=Math.PI*1.5;const Re=new L(Me,ie);Re.scale.set(1,.95,.95),Re.position.set(0,1,0),Re.rotation.y=Math.PI/2;const Be=new Tt(.6,32),se=new L(Be,K);se.position.set(0,1,0),se.rotation.y=Math.PI/2,se.scale.set(1,.95,.95);const de=new Ke;de.add(ge),de.add(Re),de.add(se),d.add(de);const Se=new Ae(.25,32,32),N=new L(Se,X);N.position.set(-.45,1.35,-.1),d.add(N);const le=new L(Se,ie);le.position.set(.45,1.35,-.1),d.add(le);const ae=new Ae(.25,32,32,Math.PI/2,Math.PI),ce=new L(ae,X);ce.scale.set(1.1,.6,.8),ce.position.set(0,.84,.5),ce.rotation.y=Math.PI;const we=new Ae(.25,32,32,Math.PI/2,Math.PI),ne=new L(we,ie);ne.scale.set(1.1,.6,.8),ne.position.set(0,.84,.5),ne.rotation.y=0;const g=new Tt(.25,32),T=new L(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const I=new Ke;I.add(ce),I.add(ne),I.add(T),d.add(I);const U=new Mn;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Y=new Tn(U,D),j=new L(Y,y);j.scale.set(.35,.35,.35),j.position.set(0,-.05,0),j.rotation.y=Math.PI,j.rotation.x=Math.PI,d.add(j);const S=new Ae(.35,32,32),v=new L(S,K);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),d.add(v);const C=new L(S,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),d.add(C);const k=new Ct(.2,.22,.6,32),G=new L(k,K);G.position.set(-.4,-1.05,0),d.add(G);const V=new L(k,E);V.position.set(.4,-1.05,0),d.add(V);const fe=new Ae(.3,32,32),ue=new L(fe,K);ue.scale.set(1,.72,1.5),ue.position.set(-.4,-1.45,.17),d.add(ue);const pe=new L(fe,E);pe.scale.set(1,.72,1.5),pe.position.set(.4,-1.45,.17),d.add(pe);const be=new Ae(.44,32,32),he=new L(be,E);he.position.set(-.15,-.45,-.4),d.add(he);const ye=new L(be,E);ye.position.set(.15,-.45,-.4),d.add(ye);const Ce=new Ae(.18,32,32),Pe=new L(Ce,K);Pe.position.set(0,-.35,-.8),d.add(Pe);const Te=new Ae(.6,32,32,0,Math.PI*2,0,Math.PI/2),Ve=new Ne({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Ie=new L(Te,Ve);Ie.position.set(0,-.2,0),Ie.rotation.x=Math.PI,Ie.scale.set(1.25,1.25,1.25),me.add(Ie);const ke=new Zn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),z=new L(J,ke);z.position.set(0,-.26,0),z.scale.set(.7,.7,.7),z.rotation.x=-Math.PI/2,z.renderOrder=1,me.add(z),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ze){const qe=new Gt("X",{font:Ze,size:.2,depth:.05}),tt=new L(qe,K);tt.position.set(-.3,.99,.53),tt.rotation.x=ct.degToRad(-5),tt.rotation.y=ct.degToRad(-15),d.add(tt);const at=new Gt("O",{font:Ze,size:.2,depth:.05}),St=new L(at,K);St.position.set(.14,.99,.53),St.rotation.y=ct.degToRad(12),St.rotation.x=ct.degToRad(-5),d.add(St)}),Pe.renderOrder=1,d.rotation.x=.1,d.scale.set(1.4,1.4,1.4),m.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4;let ee=.05,Q=.06,_e=.2,ve=.25,Fe=0,We=0;f(),Ht(()=>e.bodyPosition,Ze=>{d.position.set(Ze.x,Ze.y,Ze.z)}),Ht(()=>e.cameraPosition,Ze=>{_.position.set(e.bodyPosition.x,1,Ze),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(xi(),yi(fn,null,[je("div",{ref_key:"threeCanvas",ref:t,class:zn(n.background?"no-bg":"three-canvas")},null,2),je("div",pE,[je("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),je("div",mE,[je("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),je("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),je("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),_E=Mi(gE,[["__scopeId","data-v-eb44448e"]]),vE=[{path:"/3d-bear-arts/leather",name:"Leather",component:Vw},{path:"/3d-bear-arts/pop-art",name:"Pop",component:Xw},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:jw},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:Qw},{path:"/3d-bear-arts/water",name:"Water Bear",component:iE},{path:"/3d-bear-arts/",name:"Water",component:cE},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:dE},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:_E}],xE=Ug({history:ug(),routes:vE}),sp=R0(D0);sp.use(xE);sp.mount("#app");
