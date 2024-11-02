(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Mt={},Vs=[],Kn=()=>{},sp=()=>!1,Qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),_c=n=>n.startsWith("onUpdate:"),jt=Object.assign,vc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},rp=Object.prototype.hasOwnProperty,mt=(n,e)=>rp.call(n,e),Qe=Array.isArray,Mr=n=>ea(n)==="[object Map]",op=n=>ea(n)==="[object Set]",Je=n=>typeof n=="function",Yt=n=>typeof n=="string",or=n=>typeof n=="symbol",Nt=n=>n!==null&&typeof n=="object",tf=n=>(Nt(n)||Je(n))&&Je(n.then)&&Je(n.catch),ap=Object.prototype.toString,ea=n=>ap.call(n),lp=n=>ea(n).slice(8,-1),cp=n=>ea(n)==="[object Object]",xc=n=>Yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Sr=gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ta=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},up=/-(\w)/g,bn=ta(n=>n.replace(up,(e,t)=>t?t.toUpperCase():"")),hp=/\B([A-Z])/g,vs=ta(n=>n.replace(hp,"-$1").toLowerCase()),na=ta(n=>n.charAt(0).toUpperCase()+n.slice(1)),ya=ta(n=>n?`on${na(n)}`:""),Gi=(n,e)=>!Object.is(n,e),Ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},nf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},fp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let iu;const sf=()=>iu||(iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yc(n){if(Qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Yt(i)?gp(i):yc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Yt(n)||Nt(n))return n}const dp=/;(?![^(]*\))/g,pp=/:([^]+)/,mp=/\/\*[^]*?\*\//g;function gp(n){const e={};return n.replace(mp,"").split(dp).forEach(t=>{if(t){const i=t.split(pp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Hn(n){let e="";if(Yt(n))e=n;else if(Qe(n))for(let t=0;t<n.length;t++){const i=Hn(n[t]);i&&(e+=i+" ")}else if(Nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const _p="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vp=gc(_p);function rf(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vn;class xp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vn,!e&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=vn;try{return vn=this,e()}finally{vn=t}}}on(){vn=this}off(){vn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function yp(){return vn}let wt;const Sa=new WeakSet;class of{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vn&&vn.active&&vn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sa.has(this)&&(Sa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,su(this),cf(this);const e=wt,t=On;wt=this,On=!0;try{return this.fn()}finally{uf(this),wt=e,On=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wc(e);this.deps=this.depsTail=void 0,su(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pl(this)&&this.run()}get dirty(){return pl(this)}}let af=0,Gs;function lf(n){n.flags|=8,n.next=Gs,Gs=n}function Mc(){af++}function Sc(){if(--af>0)return;let n;for(;Gs;){let e=Gs,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Gs,Gs=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function uf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),wc(i),Mp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function pl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function hf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Dr))return;n.globalVersion=Dr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!pl(n)){n.flags&=-3;return}const t=wt,i=On;wt=n,On=!0;try{cf(n);const s=n.fn(n._value);(e.version===0||Gi(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{wt=t,On=i,uf(n),n.flags&=-3}}function wc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)wc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Mp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let On=!0;const ff=[];function ki(){ff.push(On),On=!1}function Vi(){const n=ff.pop();On=n===void 0?!0:n}function su(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=wt;wt=void 0;try{e()}finally{wt=t}}}let Dr=0;class Sp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ec{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!wt||!On||wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==wt)t=this.activeLink=new Sp(wt,this),wt.deps?(t.prevDep=wt.depsTail,wt.depsTail.nextDep=t,wt.depsTail=t):wt.deps=wt.depsTail=t,df(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=wt.depsTail,t.nextDep=void 0,wt.depsTail.nextDep=t,wt.depsTail=t,wt.deps===t&&(wt.deps=i)}return t}trigger(e){this.version++,Dr++,this.notify(e)}notify(e){Mc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Sc()}}}function df(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)df(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ml=new WeakMap,ds=Symbol(""),gl=Symbol(""),Ur=Symbol("");function tn(n,e,t){if(On&&wt){let i=ml.get(n);i||ml.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Ec),s.target=n,s.map=i,s.key=t),s.track()}}function gi(n,e,t,i,s,r){const o=ml.get(n);if(!o){Dr++;return}const a=l=>{l&&l.trigger()};if(Mc(),e==="clear")o.forEach(a);else{const l=Qe(n),c=l&&xc(t);if(l&&t==="length"){const h=Number(i);o.forEach((u,f)=>{(f==="length"||f===Ur||!or(f)&&f>=h)&&a(u)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(Ur)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ds)),Mr(n)&&a(o.get(gl)));break;case"delete":l||(a(o.get(ds)),Mr(n)&&a(o.get(gl)));break;case"set":Mr(n)&&a(o.get(ds));break}}Sc()}function Ss(n){const e=_t(n);return e===n?e:(tn(e,"iterate",Ur),Bn(n)?e:e.map(on))}function bc(n){return tn(n=_t(n),"iterate",Ur),n}const wp={__proto__:null,[Symbol.iterator](){return wa(this,Symbol.iterator,on)},concat(...n){return Ss(this).concat(...n.map(e=>Qe(e)?Ss(e):e))},entries(){return wa(this,"entries",n=>(n[1]=on(n[1]),n))},every(n,e){return ii(this,"every",n,e,void 0,arguments)},filter(n,e){return ii(this,"filter",n,e,t=>t.map(on),arguments)},find(n,e){return ii(this,"find",n,e,on,arguments)},findIndex(n,e){return ii(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ii(this,"findLast",n,e,on,arguments)},findLastIndex(n,e){return ii(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ii(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ea(this,"includes",n)},indexOf(...n){return Ea(this,"indexOf",n)},join(n){return Ss(this).join(n)},lastIndexOf(...n){return Ea(this,"lastIndexOf",n)},map(n,e){return ii(this,"map",n,e,void 0,arguments)},pop(){return cr(this,"pop")},push(...n){return cr(this,"push",n)},reduce(n,...e){return ru(this,"reduce",n,e)},reduceRight(n,...e){return ru(this,"reduceRight",n,e)},shift(){return cr(this,"shift")},some(n,e){return ii(this,"some",n,e,void 0,arguments)},splice(...n){return cr(this,"splice",n)},toReversed(){return Ss(this).toReversed()},toSorted(n){return Ss(this).toSorted(n)},toSpliced(...n){return Ss(this).toSpliced(...n)},unshift(...n){return cr(this,"unshift",n)},values(){return wa(this,"values",on)}};function wa(n,e,t){const i=bc(n),s=i[e]();return i!==n&&!Bn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Ep=Array.prototype;function ii(n,e,t,i,s,r){const o=bc(n),a=o!==n&&!Bn(n),l=o[e];if(l!==Ep[e]){const u=l.apply(n,r);return a?on(u):u}let c=t;o!==n&&(a?c=function(u,f){return t.call(this,on(u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function ru(n,e,t,i){const s=bc(n);let r=t;return s!==n&&(Bn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,on(a),l,n)}),s[e](r,...i)}function Ea(n,e,t){const i=_t(n);tn(i,"iterate",Ur);const s=i[e](...t);return(s===-1||s===!1)&&Cc(t[0])?(t[0]=_t(t[0]),i[e](...t)):s}function cr(n,e,t=[]){ki(),Mc();const i=_t(n)[e].apply(n,t);return Sc(),Vi(),i}const bp=gc("__proto__,__v_isRef,__isVue"),pf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(or));function Tp(n){or(n)||(n=String(n));const e=_t(this);return tn(e,"has",n),e.hasOwnProperty(n)}class mf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?zp:xf:r?vf:_f).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Qe(e);if(!s){let l;if(o&&(l=wp[t]))return l;if(t==="hasOwnProperty")return Tp}const a=Reflect.get(e,t,Qt(e)?e:i);return(or(t)?pf.has(t):bp(t))||(s||tn(e,"get",t),r)?a:Qt(a)?o&&xc(t)?a:a.value:Nt(a)?s?Mf(a):sa(a):a}}class gf extends mf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=ps(r);if(!Bn(i)&&!ps(i)&&(r=_t(r),i=_t(i)),!Qe(e)&&Qt(r)&&!Qt(i))return l?!1:(r.value=i,!0)}const o=Qe(e)&&xc(t)?Number(t)<e.length:mt(e,t),a=Reflect.set(e,t,i,Qt(e)?e:s);return e===_t(s)&&(o?Gi(i,r)&&gi(e,"set",t,i):gi(e,"add",t,i)),a}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&gi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!or(t)||!pf.has(t))&&tn(e,"has",t),i}ownKeys(e){return tn(e,"iterate",Qe(e)?"length":ds),Reflect.ownKeys(e)}}class Ap extends mf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Rp=new gf,Cp=new Ap,Pp=new gf(!0);const Tc=n=>n,ia=n=>Reflect.getPrototypeOf(n);function to(n,e,t=!1,i=!1){n=n.__v_raw;const s=_t(n),r=_t(e);t||(Gi(e,r)&&tn(s,"get",e),tn(s,"get",r));const{has:o}=ia(s),a=i?Tc:t?Pc:on;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function no(n,e=!1){const t=this.__v_raw,i=_t(t),s=_t(n);return e||(Gi(n,s)&&tn(i,"has",n),tn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function io(n,e=!1){return n=n.__v_raw,!e&&tn(_t(n),"iterate",ds),Reflect.get(n,"size",n)}function ou(n,e=!1){!e&&!Bn(n)&&!ps(n)&&(n=_t(n));const t=_t(this);return ia(t).has.call(t,n)||(t.add(n),gi(t,"add",n,n)),this}function au(n,e,t=!1){!t&&!Bn(e)&&!ps(e)&&(e=_t(e));const i=_t(this),{has:s,get:r}=ia(i);let o=s.call(i,n);o||(n=_t(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,e),o?Gi(e,a)&&gi(i,"set",n,e):gi(i,"add",n,e),this}function lu(n){const e=_t(this),{has:t,get:i}=ia(e);let s=t.call(e,n);s||(n=_t(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&gi(e,"delete",n,void 0),r}function cu(){const n=_t(this),e=n.size!==0,t=n.clear();return e&&gi(n,"clear",void 0,void 0),t}function so(n,e){return function(i,s){const r=this,o=r.__v_raw,a=_t(o),l=e?Tc:n?Pc:on;return!n&&tn(a,"iterate",ds),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function ro(n,e,t){return function(...i){const s=this.__v_raw,r=_t(s),o=Mr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Tc:e?Pc:on;return!e&&tn(r,"iterate",l?gl:ds),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function Ei(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ip(){const n={get(r){return to(this,r)},get size(){return io(this)},has:no,add:ou,set:au,delete:lu,clear:cu,forEach:so(!1,!1)},e={get(r){return to(this,r,!1,!0)},get size(){return io(this)},has:no,add(r){return ou.call(this,r,!0)},set(r,o){return au.call(this,r,o,!0)},delete:lu,clear:cu,forEach:so(!1,!0)},t={get(r){return to(this,r,!0)},get size(){return io(this,!0)},has(r){return no.call(this,r,!0)},add:Ei("add"),set:Ei("set"),delete:Ei("delete"),clear:Ei("clear"),forEach:so(!0,!1)},i={get(r){return to(this,r,!0,!0)},get size(){return io(this,!0)},has(r){return no.call(this,r,!0)},add:Ei("add"),set:Ei("set"),delete:Ei("delete"),clear:Ei("clear"),forEach:so(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ro(r,!1,!1),t[r]=ro(r,!0,!1),e[r]=ro(r,!1,!0),i[r]=ro(r,!0,!0)}),[n,t,e,i]}const[Lp,Dp,Up,Np]=Ip();function Ac(n,e){const t=e?n?Np:Up:n?Dp:Lp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const Fp={get:Ac(!1,!1)},Op={get:Ac(!1,!0)},Bp={get:Ac(!0,!1)};const _f=new WeakMap,vf=new WeakMap,xf=new WeakMap,zp=new WeakMap;function Gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hp(n){return n.__v_skip||!Object.isExtensible(n)?0:Gp(lp(n))}function sa(n){return ps(n)?n:Rc(n,!1,Rp,Fp,_f)}function yf(n){return Rc(n,!1,Pp,Op,vf)}function Mf(n){return Rc(n,!0,Cp,Bp,xf)}function Rc(n,e,t,i,s){if(!Nt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Hp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function wr(n){return ps(n)?wr(n.__v_raw):!!(n&&n.__v_isReactive)}function ps(n){return!!(n&&n.__v_isReadonly)}function Bn(n){return!!(n&&n.__v_isShallow)}function Cc(n){return n?!!n.__v_raw:!1}function _t(n){const e=n&&n.__v_raw;return e?_t(e):n}function kp(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&nf(n,"__v_skip",!0),n}const on=n=>Nt(n)?sa(n):n,Pc=n=>Nt(n)?Mf(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function nt(n){return Sf(n,!1)}function Vp(n){return Sf(n,!0)}function Sf(n,e){return Qt(n)?n:new Wp(n,e)}class Wp{constructor(e,t){this.dep=new Ec,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_t(e),this._value=t?e:on(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Bn(e)||ps(e);e=i?e:_t(e),Gi(e,t)&&(this._rawValue=e,this._value=i?e:on(e),this.dep.trigger())}}function Ws(n){return Qt(n)?n.value:n}const Xp={get:(n,e,t)=>e==="__v_raw"?n:Ws(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Qt(s)&&!Qt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function wf(n){return wr(n)?n:new Proxy(n,Xp)}class qp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ec(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return lf(this),!0}get value(){const e=this.dep.track();return hf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yp(n,e,t=!1){let i,s;return Je(n)?i=n:(i=n.get,s=n.set),new qp(i,s,t)}const oo={},ko=new WeakMap;let os;function $p(n,e=!1,t=os){if(t){let i=ko.get(t);i||ko.set(t,i=[]),i.push(n)}}function jp(n,e,t=Mt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=w=>s?w:Bn(w)||s===!1||s===0?di(w,1):di(w);let h,u,f,m,_=!1,x=!1;if(Qt(n)?(u=()=>n.value,_=Bn(n)):wr(n)?(u=()=>c(n),_=!0):Qe(n)?(x=!0,_=n.some(w=>wr(w)||Bn(w)),u=()=>n.map(w=>{if(Qt(w))return w.value;if(wr(w))return c(w);if(Je(w))return l?l(w,2):w()})):Je(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){ki();try{f()}finally{Vi()}}const w=os;os=h;try{return l?l(n,3,[m]):n(m)}finally{os=w}}:u=Kn,e&&s){const w=u,O=s===!0?1/0:s;u=()=>di(w(),O)}const d=yp(),p=()=>{h.stop(),d&&vc(d.effects,h)};if(r&&e){const w=e;e=(...O)=>{w(...O),p()}}let b=x?new Array(n.length).fill(oo):oo;const M=w=>{if(!(!(h.flags&1)||!h.dirty&&!w))if(e){const O=h.run();if(s||_||(x?O.some((P,R)=>Gi(P,b[R])):Gi(O,b))){f&&f();const P=os;os=h;try{const R=[O,b===oo?void 0:x&&b[0]===oo?[]:b,m];l?l(e,3,R):e(...R),b=O}finally{os=P}}}else h.run()};return a&&a(M),h=new of(u),h.scheduler=o?()=>o(M,!1):M,m=w=>$p(w,!1,h),f=h.onStop=()=>{const w=ko.get(h);if(w){if(l)l(w,4);else for(const O of w)O();ko.delete(h)}},e?i?M(!0):b=h.run():o?o(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function di(n,e=1/0,t){if(e<=0||!Nt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Qt(n))di(n.value,e,t);else if(Qe(n))for(let i=0;i<n.length;i++)di(n[i],e,t);else if(op(n)||Mr(n))n.forEach(i=>{di(i,e,t)});else if(cp(n)){for(const i in n)di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&di(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $r(n,e,t,i){try{return i?n(...i):n()}catch(s){ra(s,e,t)}}function Jn(n,e,t,i){if(Je(n)){const s=$r(n,e,t,i);return s&&tf(s)&&s.catch(r=>{ra(r,e,t)}),s}if(Qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Jn(n[r],e,t,i));return s}}function ra(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){ki(),$r(r,null,10,[n,l,c]),Vi();return}}Kp(n,t,s,i,o)}function Kp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}let Nr=!1,_l=!1;const an=[];let qn=0;const Xs=[];let Ui=null,Os=0;const Ef=Promise.resolve();let Ic=null;function bf(n){const e=Ic||Ef;return n?e.then(this?n.bind(this):n):e}function Zp(n){let e=Nr?qn+1:0,t=an.length;for(;e<t;){const i=e+t>>>1,s=an[i],r=Fr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Lc(n){if(!(n.flags&1)){const e=Fr(n),t=an[an.length-1];!t||!(n.flags&2)&&e>=Fr(t)?an.push(n):an.splice(Zp(e),0,n),n.flags|=1,Tf()}}function Tf(){!Nr&&!_l&&(_l=!0,Ic=Ef.then(Rf))}function Jp(n){Qe(n)?Xs.push(...n):Ui&&n.id===-1?Ui.splice(Os+1,0,n):n.flags&1||(Xs.push(n),n.flags|=1),Tf()}function uu(n,e,t=Nr?qn+1:0){for(;t<an.length;t++){const i=an[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;an.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Af(n){if(Xs.length){const e=[...new Set(Xs)].sort((t,i)=>Fr(t)-Fr(i));if(Xs.length=0,Ui){Ui.push(...e);return}for(Ui=e,Os=0;Os<Ui.length;Os++){const t=Ui[Os];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ui=null,Os=0}}const Fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Rf(n){_l=!1,Nr=!0;try{for(qn=0;qn<an.length;qn++){const e=an[qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$r(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qn<an.length;qn++){const e=an[qn];e&&(e.flags&=-2)}qn=0,an.length=0,Af(),Nr=!1,Ic=null,(an.length||Xs.length)&&Rf()}}let xn=null,Cf=null;function Vo(n){const e=xn;return xn=n,Cf=n&&n.type.__scopeId||null,e}function Li(n,e=xn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&yu(-1);const r=Vo(e);let o;try{o=n(...s)}finally{Vo(r),i._d&&yu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Qp(n,e){if(xn===null)return n;const t=ua(xn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Mt]=e[s];r&&(Je(r)&&(r={mounted:r,updated:r}),r.deep&&di(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ji(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ki(),Jn(l,t,8,[n.el,a,n,e]),Vi())}}const em=Symbol("_vte"),tm=n=>n.__isTeleport;function Dc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Dc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function kn(n,e){return Je(n)?jt({name:n.name},e,{setup:n}):n}function Pf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function vl(n,e,t,i,s=!1){if(Qe(n)){n.forEach((_,x)=>vl(_,e&&(Qe(e)?e[x]:e),t,i,s));return}if(Er(i)&&!s)return;const r=i.shapeFlag&4?ua(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===Mt?a.refs={}:a.refs,u=a.setupState,f=_t(u),m=u===Mt?()=>!1:_=>mt(f,_);if(c!=null&&c!==l&&(Yt(c)?(h[c]=null,m(c)&&(u[c]=null)):Qt(c)&&(c.value=null)),Je(l))$r(l,a,12,[o,h]);else{const _=Yt(l),x=Qt(l);if(_||x){const d=()=>{if(n.f){const p=_?m(l)?u[l]:h[l]:l.value;s?Qe(p)&&vc(p,r):Qe(p)?p.includes(r)||p.push(r):_?(h[l]=[r],m(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else _?(h[l]=o,m(l)&&(u[l]=o)):x&&(l.value=o,n.k&&(h[n.k]=o))};o?(d.id=-1,_n(d,t)):d()}}}const Er=n=>!!n.type.__asyncLoader,If=n=>n.type.__isKeepAlive;function nm(n,e){Lf(n,"a",e)}function im(n,e){Lf(n,"da",e)}function Lf(n,e,t=Jt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(oa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)If(s.parent.vnode)&&sm(i,e,t,s),s=s.parent}}function sm(n,e,t,i){const s=oa(e,n,i,!0);Uc(()=>{vc(i[e],s)},t)}function oa(n,e,t=Jt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ki();const a=jr(t),l=Jn(e,t,n,o);return a(),Vi(),l});return i?s.unshift(r):s.push(r),r}}const xi=n=>(e,t=Jt)=>{(!ca||n==="sp")&&oa(n,(...i)=>e(...i),t)},rm=xi("bm"),ti=xi("m"),om=xi("bu"),am=xi("u"),lm=xi("bum"),Uc=xi("um"),cm=xi("sp"),um=xi("rtg"),hm=xi("rtc");function fm(n,e=Jt){oa("ec",n,e)}const dm="components";function hu(n,e){return mm(dm,n,!0,e)||n}const pm=Symbol.for("v-ndc");function mm(n,e,t=!0,i=!1){const s=xn||Jt;if(s){const r=s.type;{const a=n0(r,!1);if(a&&(a===e||a===bn(e)||a===na(bn(e))))return r}const o=fu(s[n]||r[n],e)||fu(s.appContext[n],e);return!o&&i?r:o}}function fu(n,e){return n&&(n[e]||n[bn(e)]||n[na(bn(e))])}const xl=n=>n?Zf(n)?ua(n):xl(n.parent):null,br=jt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xl(n.parent),$root:n=>xl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Nc(n),$forceUpdate:n=>n.f||(n.f=()=>{Lc(n.update)}),$nextTick:n=>n.n||(n.n=bf.bind(n.proxy)),$watch:n=>Fm.bind(n)}),ba=(n,e)=>n!==Mt&&!n.__isScriptSetup&&mt(n,e),gm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ba(i,e))return o[e]=1,i[e];if(s!==Mt&&mt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&mt(c,e))return o[e]=3,r[e];if(t!==Mt&&mt(t,e))return o[e]=4,t[e];yl&&(o[e]=0)}}const h=br[e];let u,f;if(h)return e==="$attrs"&&tn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Mt&&mt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ba(s,e)?(s[e]=t,!0):i!==Mt&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==Mt&&mt(n,o)||ba(e,o)||(a=r[0])&&mt(a,o)||mt(i,o)||mt(br,o)||mt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function du(n){return Qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let yl=!0;function _m(n){const e=Nc(n),t=n.proxy,i=n.ctx;yl=!1,e.beforeCreate&&pu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:m,updated:_,activated:x,deactivated:d,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:w,render:O,renderTracked:P,renderTriggered:R,errorCaptured:F,serverPrefetch:J,expose:y,inheritAttrs:E,components:j,directives:H,filters:Z}=e;if(c&&vm(c,i,null),o)for(const ee in o){const W=o[ee];Je(W)&&(i[ee]=W.bind(t))}if(s){const ee=s.call(t,t);Nt(ee)&&(n.data=sa(ee))}if(yl=!0,r)for(const ee in r){const W=r[ee],me=Je(W)?W.bind(t,t):Je(W.get)?W.get.bind(t,t):Kn,ve=!Je(W)&&Je(W.set)?W.set.bind(t):Kn,ge=Dn({get:me,set:ve});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Ee=>ge.value=Ee})}if(a)for(const ee in a)Df(a[ee],i,t,ee);if(l){const ee=Je(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(W=>{Lo(W,ee[W])})}h&&pu(h,n,"c");function k(ee,W){Qe(W)?W.forEach(me=>ee(me.bind(t))):W&&ee(W.bind(t))}if(k(rm,u),k(ti,f),k(om,m),k(am,_),k(nm,x),k(im,d),k(fm,F),k(hm,P),k(um,R),k(lm,b),k(Uc,w),k(cm,J),Qe(y))if(y.length){const ee=n.exposed||(n.exposed={});y.forEach(W=>{Object.defineProperty(ee,W,{get:()=>t[W],set:me=>t[W]=me})})}else n.exposed||(n.exposed={});O&&n.render===Kn&&(n.render=O),E!=null&&(n.inheritAttrs=E),j&&(n.components=j),H&&(n.directives=H),J&&Pf(n)}function vm(n,e,t=Kn){Qe(n)&&(n=Ml(n));for(const i in n){const s=n[i];let r;Nt(s)?"default"in s?r=_i(s.from||i,s.default,!0):r=_i(s.from||i):r=_i(s),Qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function pu(n,e,t){Jn(Qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Df(n,e,t,i){let s=i.includes(".")?Yf(t,i):()=>t[i];if(Yt(n)){const r=e[n];Je(r)&&zt(s,r)}else if(Je(n))zt(s,n.bind(t));else if(Nt(n))if(Qe(n))n.forEach(r=>Df(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&zt(s,r,n)}}function Nc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Wo(l,c,o,!0)),Wo(l,e,o)),Nt(e)&&r.set(e,l),l}function Wo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Wo(n,r,t,!0),s&&s.forEach(o=>Wo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=xm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const xm={data:mu,props:gu,emits:gu,methods:xr,computed:xr,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:xr,directives:xr,watch:Mm,provide:mu,inject:ym};function mu(n,e){return e?n?function(){return jt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function ym(n,e){return xr(Ml(n),Ml(e))}function Ml(n){if(Qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function nn(n,e){return n?[...new Set([].concat(n,e))]:e}function xr(n,e){return n?jt(Object.create(null),n,e):e}function gu(n,e){return n?Qe(n)&&Qe(e)?[...new Set([...n,...e])]:jt(Object.create(null),du(n),du(e??{})):e}function Mm(n,e){if(!n)return e;if(!e)return n;const t=jt(Object.create(null),n);for(const i in e)t[i]=nn(n[i],e[i]);return t}function Uf(){return{app:null,config:{isNativeTag:sp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sm=0;function wm(n,e){return function(i,s=null){Je(i)||(i=jt({},i)),s!=null&&!Nt(s)&&(s=null);const r=Uf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Sm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:s0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Je(h.install)?(o.add(h),h.install(c,...u)):Je(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const m=c._ceVNode||Ht(i,s);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(m,h):n(m,h,f),l=!0,c._container=h,h.__vue_app__=c,ua(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Jn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=qs;qs=c;try{return h()}finally{qs=u}}};return c}}let qs=null;function Lo(n,e){if(Jt){let t=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===t&&(t=Jt.provides=Object.create(i)),t[n]=e}}function _i(n,e,t=!1){const i=Jt||xn;if(i||qs){const s=qs?qs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const Nf={},Ff=()=>Object.create(Nf),Of=n=>Object.getPrototypeOf(n)===Nf;function Em(n,e,t,i=!1){const s={},r=Ff();n.propsDefaults=Object.create(null),Bf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:yf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function bm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=_t(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(aa(n.emitsOptions,f))continue;const m=e[f];if(l)if(mt(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const _=bn(f);s[_]=Sl(l,a,_,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{Bf(n,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!mt(e,u)&&((h=vs(u))===u||!mt(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=Sl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!mt(e,u))&&(delete r[u],c=!0)}c&&gi(n.attrs,"set","")}function Bf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Sr(l))continue;const c=e[l];let h;s&&mt(s,h=bn(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:aa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=_t(t),c=a||Mt;for(let h=0;h<r.length;h++){const u=r[h];t[u]=Sl(s,l,u,c[u],n,!mt(c,u))}}return o}function Sl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=jr(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===vs(t))&&(i=!0))}return i}const Tm=new WeakMap;function zf(n,e,t=!1){const i=t?Tm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Je(n)){const h=u=>{l=!0;const[f,m]=zf(u,e,!0);jt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return Nt(n)&&i.set(n,Vs),Vs;if(Qe(r))for(let h=0;h<r.length;h++){const u=bn(r[h]);_u(u)&&(o[u]=Mt)}else if(r)for(const h in r){const u=bn(h);if(_u(u)){const f=r[h],m=o[u]=Qe(f)||Je(f)?{type:f}:jt({},f),_=m.type;let x=!1,d=!0;if(Qe(_))for(let p=0;p<_.length;++p){const b=_[p],M=Je(b)&&b.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(d=!1)}else x=Je(_)&&_.name==="Boolean";m[0]=x,m[1]=d,(x||mt(m,"default"))&&a.push(u)}}const c=[o,a];return Nt(n)&&i.set(n,c),c}function _u(n){return n[0]!=="$"&&!Sr(n)}const Gf=n=>n[0]==="_"||n==="$stable",Fc=n=>Qe(n)?n.map($n):[$n(n)],Am=(n,e,t)=>{if(e._n)return e;const i=Li((...s)=>Fc(e(...s)),t);return i._c=!1,i},Hf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Gf(s))continue;const r=n[s];if(Je(r))e[s]=Am(s,r,i);else if(r!=null){const o=Fc(r);e[s]=()=>o}}},kf=(n,e)=>{const t=Fc(e);n.slots.default=()=>t},Vf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Rm=(n,e,t)=>{const i=n.slots=Ff();if(n.vnode.shapeFlag&32){const s=e._;s?(Vf(i,e,t),t&&nf(i,"_",s,!0)):Hf(e,i)}else e&&kf(n,e)},Cm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Vf(s,e,t):(r=!e.$stable,Hf(e,s)),o=e}else e&&(kf(n,e),o={default:1});if(r)for(const a in s)!Gf(a)&&o[a]==null&&delete s[a]},_n=Vm;function Pm(n){return Im(n)}function Im(n,e){const t=sf();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:m=Kn,insertStaticContent:_}=n,x=(g,T,I,D=null,N=null,Y=null,K=void 0,S=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!ur(g,T)&&(D=U(g),Ee(g,N,Y,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:V,shapeFlag:z}=T;switch(C){case la:d(g,T,I,D);break;case Or:p(g,T,I,D);break;case Ra:g==null&&b(T,I,D,K);break;case ln:j(g,T,I,D,N,Y,K,S,v);break;default:z&1?O(g,T,I,D,N,Y,K,S,v):z&6?H(g,T,I,D,N,Y,K,S,v):(z&64||z&128)&&C.process(g,T,I,D,N,Y,K,S,v,he)}V!=null&&N&&vl(V,g&&g.ref,Y,T||g,!T)},d=(g,T,I,D)=>{if(g==null)i(T.el=a(T.children),I,D);else{const N=T.el=g.el;T.children!==g.children&&c(N,T.children)}},p=(g,T,I,D)=>{g==null?i(T.el=l(T.children||""),I,D):T.el=g.el},b=(g,T,I,D)=>{[g.el,g.anchor]=_(g.children,T,I,D,g.el,g.anchor)},M=({el:g,anchor:T},I,D)=>{let N;for(;g&&g!==T;)N=f(g),i(g,I,D),g=N;i(T,I,D)},w=({el:g,anchor:T})=>{let I;for(;g&&g!==T;)I=f(g),s(g),g=I;s(T)},O=(g,T,I,D,N,Y,K,S,v)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),g==null?P(T,I,D,N,Y,K,S,v):J(g,T,N,Y,K,S,v)},P=(g,T,I,D,N,Y,K,S)=>{let v,C;const{props:V,shapeFlag:z,transition:G,dirs:de}=g;if(v=g.el=o(g.type,Y,V&&V.is,V),z&8?h(v,g.children):z&16&&F(g.children,v,null,D,N,Ta(g,Y),K,S),de&&Ji(g,null,D,"created"),R(v,g,g.scopeId,K,D),V){for(const pe in V)pe!=="value"&&!Sr(pe)&&r(v,pe,null,V[pe],Y,D);"value"in V&&r(v,"value",null,V.value,Y),(C=V.onVnodeBeforeMount)&&Xn(C,D,g)}de&&Ji(g,null,D,"beforeMount");const ce=Lm(N,G);ce&&G.beforeEnter(v),i(v,T,I),((C=V&&V.onVnodeMounted)||ce||de)&&_n(()=>{C&&Xn(C,D,g),ce&&G.enter(v),de&&Ji(g,null,D,"mounted")},N)},R=(g,T,I,D,N)=>{if(I&&m(g,I),D)for(let Y=0;Y<D.length;Y++)m(g,D[Y]);if(N){let Y=N.subTree;if(T===Y||jf(Y.type)&&(Y.ssContent===T||Y.ssFallback===T)){const K=N.vnode;R(g,K,K.scopeId,K.slotScopeIds,N.parent)}}},F=(g,T,I,D,N,Y,K,S,v=0)=>{for(let C=v;C<g.length;C++){const V=g[C]=S?Ni(g[C]):$n(g[C]);x(null,V,T,I,D,N,Y,K,S)}},J=(g,T,I,D,N,Y,K)=>{const S=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:V}=T;v|=g.patchFlag&16;const z=g.props||Mt,G=T.props||Mt;let de;if(I&&Qi(I,!1),(de=G.onVnodeBeforeUpdate)&&Xn(de,I,T,g),V&&Ji(T,g,I,"beforeUpdate"),I&&Qi(I,!0),(z.innerHTML&&G.innerHTML==null||z.textContent&&G.textContent==null)&&h(S,""),C?y(g.dynamicChildren,C,S,I,D,Ta(T,N),Y):K||W(g,T,S,null,I,D,Ta(T,N),Y,!1),v>0){if(v&16)E(S,z,G,I,N);else if(v&2&&z.class!==G.class&&r(S,"class",null,G.class,N),v&4&&r(S,"style",z.style,G.style,N),v&8){const ce=T.dynamicProps;for(let pe=0;pe<ce.length;pe++){const Te=ce[pe],ue=z[Te],Me=G[Te];(Me!==ue||Te==="value")&&r(S,Te,ue,Me,N,I)}}v&1&&g.children!==T.children&&h(S,T.children)}else!K&&C==null&&E(S,z,G,I,N);((de=G.onVnodeUpdated)||V)&&_n(()=>{de&&Xn(de,I,T,g),V&&Ji(T,g,I,"updated")},D)},y=(g,T,I,D,N,Y,K)=>{for(let S=0;S<T.length;S++){const v=g[S],C=T[S],V=v.el&&(v.type===ln||!ur(v,C)||v.shapeFlag&70)?u(v.el):I;x(v,C,V,null,D,N,Y,K,!0)}},E=(g,T,I,D,N)=>{if(T!==I){if(T!==Mt)for(const Y in T)!Sr(Y)&&!(Y in I)&&r(g,Y,T[Y],null,N,D);for(const Y in I){if(Sr(Y))continue;const K=I[Y],S=T[Y];K!==S&&Y!=="value"&&r(g,Y,S,K,N,D)}"value"in I&&r(g,"value",T.value,I.value,N)}},j=(g,T,I,D,N,Y,K,S,v)=>{const C=T.el=g?g.el:a(""),V=T.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:G,slotScopeIds:de}=T;de&&(S=S?S.concat(de):de),g==null?(i(C,I,D),i(V,I,D),F(T.children||[],I,V,N,Y,K,S,v)):z>0&&z&64&&G&&g.dynamicChildren?(y(g.dynamicChildren,G,I,N,Y,K,S),(T.key!=null||N&&T===N.subTree)&&Wf(g,T,!0)):W(g,T,I,V,N,Y,K,S,v)},H=(g,T,I,D,N,Y,K,S,v)=>{T.slotScopeIds=S,g==null?T.shapeFlag&512?N.ctx.activate(T,I,D,K,v):Z(T,I,D,N,Y,K,v):re(g,T,v)},Z=(g,T,I,D,N,Y,K)=>{const S=g.component=Zm(g,D,N);if(If(g)&&(S.ctx.renderer=he),Jm(S,!1,K),S.asyncDep){if(N&&N.registerDep(S,k,K),!g.el){const v=S.subTree=Ht(Or);p(null,v,T,I)}}else k(S,g,T,I,N,Y,K)},re=(g,T,I)=>{const D=T.component=g.component;if(Hm(g,T,I))if(D.asyncDep&&!D.asyncResolved){ee(D,T,I);return}else D.next=T,D.update();else T.el=g.el,D.vnode=T},k=(g,T,I,D,N,Y,K)=>{const S=()=>{if(g.isMounted){let{next:z,bu:G,u:de,parent:ce,vnode:pe}=g;{const Ie=Xf(g);if(Ie){z&&(z.el=pe.el,ee(g,z,K)),Ie.asyncDep.then(()=>{g.isUnmounted||S()});return}}let Te=z,ue;Qi(g,!1),z?(z.el=pe.el,ee(g,z,K)):z=pe,G&&Ma(G),(ue=z.props&&z.props.onVnodeBeforeUpdate)&&Xn(ue,ce,z,pe),Qi(g,!0);const Me=Aa(g),Pe=g.subTree;g.subTree=Me,x(Pe,Me,u(Pe.el),U(Pe),g,N,Y),z.el=Me.el,Te===null&&km(g,Me.el),de&&_n(de,N),(ue=z.props&&z.props.onVnodeUpdated)&&_n(()=>Xn(ue,ce,z,pe),N)}else{let z;const{el:G,props:de}=T,{bm:ce,m:pe,parent:Te,root:ue,type:Me}=g,Pe=Er(T);if(Qi(g,!1),ce&&Ma(ce),!Pe&&(z=de&&de.onVnodeBeforeMount)&&Xn(z,Te,T),Qi(g,!0),G&&ne){const Ie=()=>{g.subTree=Aa(g),ne(G,g.subTree,g,N,null)};Pe&&Me.__asyncHydrate?Me.__asyncHydrate(G,g,Ie):Ie()}else{ue.ce&&ue.ce._injectChildStyle(Me);const Ie=g.subTree=Aa(g);x(null,Ie,I,D,g,N,Y),T.el=Ie.el}if(pe&&_n(pe,N),!Pe&&(z=de&&de.onVnodeMounted)){const Ie=T;_n(()=>Xn(z,Te,Ie),N)}(T.shapeFlag&256||Te&&Er(Te.vnode)&&Te.vnode.shapeFlag&256)&&g.a&&_n(g.a,N),g.isMounted=!0,T=I=D=null}};g.scope.on();const v=g.effect=new of(S);g.scope.off();const C=g.update=v.run.bind(v),V=g.job=v.runIfDirty.bind(v);V.i=g,V.id=g.uid,v.scheduler=()=>Lc(V),Qi(g,!0),C()},ee=(g,T,I)=>{T.component=g;const D=g.vnode.props;g.vnode=T,g.next=null,bm(g,T.props,D,I),Cm(g,T.children,I),ki(),uu(g),Vi()},W=(g,T,I,D,N,Y,K,S,v=!1)=>{const C=g&&g.children,V=g?g.shapeFlag:0,z=T.children,{patchFlag:G,shapeFlag:de}=T;if(G>0){if(G&128){ve(C,z,I,D,N,Y,K,S,v);return}else if(G&256){me(C,z,I,D,N,Y,K,S,v);return}}de&8?(V&16&&Se(C,N,Y),z!==C&&h(I,z)):V&16?de&16?ve(C,z,I,D,N,Y,K,S,v):Se(C,N,Y,!0):(V&8&&h(I,""),de&16&&F(z,I,D,N,Y,K,S,v))},me=(g,T,I,D,N,Y,K,S,v)=>{g=g||Vs,T=T||Vs;const C=g.length,V=T.length,z=Math.min(C,V);let G;for(G=0;G<z;G++){const de=T[G]=v?Ni(T[G]):$n(T[G]);x(g[G],de,I,null,N,Y,K,S,v)}C>V?Se(g,N,Y,!0,!1,z):F(T,I,D,N,Y,K,S,v,z)},ve=(g,T,I,D,N,Y,K,S,v)=>{let C=0;const V=T.length;let z=g.length-1,G=V-1;for(;C<=z&&C<=G;){const de=g[C],ce=T[C]=v?Ni(T[C]):$n(T[C]);if(ur(de,ce))x(de,ce,I,null,N,Y,K,S,v);else break;C++}for(;C<=z&&C<=G;){const de=g[z],ce=T[G]=v?Ni(T[G]):$n(T[G]);if(ur(de,ce))x(de,ce,I,null,N,Y,K,S,v);else break;z--,G--}if(C>z){if(C<=G){const de=G+1,ce=de<V?T[de].el:D;for(;C<=G;)x(null,T[C]=v?Ni(T[C]):$n(T[C]),I,ce,N,Y,K,S,v),C++}}else if(C>G)for(;C<=z;)Ee(g[C],N,Y,!0),C++;else{const de=C,ce=C,pe=new Map;for(C=ce;C<=G;C++){const Le=T[C]=v?Ni(T[C]):$n(T[C]);Le.key!=null&&pe.set(Le.key,C)}let Te,ue=0;const Me=G-ce+1;let Pe=!1,Ie=0;const be=new Array(Me);for(C=0;C<Me;C++)be[C]=0;for(C=de;C<=z;C++){const Le=g[C];if(ue>=Me){Ee(Le,N,Y,!0);continue}let He;if(Le.key!=null)He=pe.get(Le.key);else for(Te=ce;Te<=G;Te++)if(be[Te-ce]===0&&ur(Le,T[Te])){He=Te;break}He===void 0?Ee(Le,N,Y,!0):(be[He-ce]=C+1,He>=Ie?Ie=He:Pe=!0,x(Le,T[He],I,null,N,Y,K,S,v),ue++)}const ke=Pe?Dm(be):Vs;for(Te=ke.length-1,C=Me-1;C>=0;C--){const Le=ce+C,He=T[Le],B=Le+1<V?T[Le+1].el:D;be[C]===0?x(null,He,I,B,N,Y,K,S,v):Pe&&(Te<0||C!==ke[Te]?ge(He,I,B,2):Te--)}}},ge=(g,T,I,D,N=null)=>{const{el:Y,type:K,transition:S,children:v,shapeFlag:C}=g;if(C&6){ge(g.component.subTree,T,I,D);return}if(C&128){g.suspense.move(T,I,D);return}if(C&64){K.move(g,T,I,he);return}if(K===ln){i(Y,T,I);for(let z=0;z<v.length;z++)ge(v[z],T,I,D);i(g.anchor,T,I);return}if(K===Ra){M(g,T,I);return}if(D!==2&&C&1&&S)if(D===0)S.beforeEnter(Y),i(Y,T,I),_n(()=>S.enter(Y),N);else{const{leave:z,delayLeave:G,afterLeave:de}=S,ce=()=>i(Y,T,I),pe=()=>{z(Y,()=>{ce(),de&&de()})};G?G(Y,ce,pe):pe()}else i(Y,T,I)},Ee=(g,T,I,D=!1,N=!1)=>{const{type:Y,props:K,ref:S,children:v,dynamicChildren:C,shapeFlag:V,patchFlag:z,dirs:G,cacheIndex:de}=g;if(z===-2&&(N=!1),S!=null&&vl(S,null,I,g,!0),de!=null&&(T.renderCache[de]=void 0),V&256){T.ctx.deactivate(g);return}const ce=V&1&&G,pe=!Er(g);let Te;if(pe&&(Te=K&&K.onVnodeBeforeUnmount)&&Xn(Te,T,g),V&6)fe(g.component,I,D);else{if(V&128){g.suspense.unmount(I,D);return}ce&&Ji(g,null,T,"beforeUnmount"),V&64?g.type.remove(g,T,I,he,D):C&&!C.hasOnce&&(Y!==ln||z>0&&z&64)?Se(C,T,I,!1,!0):(Y===ln&&z&384||!N&&V&16)&&Se(v,T,I),D&&Be(g)}(pe&&(Te=K&&K.onVnodeUnmounted)||ce)&&_n(()=>{Te&&Xn(Te,T,g),ce&&Ji(g,null,T,"unmounted")},I)},Be=g=>{const{type:T,el:I,anchor:D,transition:N}=g;if(T===ln){oe(I,D);return}if(T===Ra){w(g);return}const Y=()=>{s(I),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:K,delayLeave:S}=N,v=()=>K(I,Y);S?S(g.el,Y,v):v()}else Y()},oe=(g,T)=>{let I;for(;g!==T;)I=f(g),s(g),g=I;s(T)},fe=(g,T,I)=>{const{bum:D,scope:N,job:Y,subTree:K,um:S,m:v,a:C}=g;vu(v),vu(C),D&&Ma(D),N.stop(),Y&&(Y.flags|=8,Ee(K,g,T,I)),S&&_n(S,T),_n(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Se=(g,T,I,D=!1,N=!1,Y=0)=>{for(let K=Y;K<g.length;K++)Ee(g[K],T,I,D,N)},U=g=>{if(g.shapeFlag&6)return U(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),I=T&&T[em];return I?f(I):T};let le=!1;const ae=(g,T,I)=>{g==null?T._vnode&&Ee(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,I),T._vnode=g,le||(le=!0,uu(),Af(),le=!1)},he={p:x,um:Ee,m:ge,r:Be,mt:Z,mc:F,pc:W,pbc:y,n:U,o:n};let we,ne;return{render:ae,hydrate:we,createApp:wm(ae,we)}}function Ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Lm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Wf(n,e,t=!1){const i=n.children,s=e.children;if(Qe(i)&&Qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ni(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Wf(o,a)),a.type===la&&(a.el=o.el)}}function Dm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Xf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xf(e)}function vu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Um=Symbol.for("v-scx"),Nm=()=>_i(Um);function zt(n,e,t){return qf(n,e,t)}function qf(n,e,t=Mt){const{immediate:i,deep:s,flush:r,once:o}=t,a=jt({},t);let l;if(ca)if(r==="sync"){const f=Nm();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=Kn,f.resume=Kn,f.pause=Kn,f}const c=Jt;a.call=(f,m,_)=>Jn(f,c,m,_);let h=!1;r==="post"?a.scheduler=f=>{_n(f,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,m)=>{m?f():Lc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const u=jp(n,e,a);return l&&l.push(u),u}function Fm(n,e,t){const i=this.proxy,s=Yt(n)?n.includes(".")?Yf(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const o=jr(this),a=qf(s,r.bind(i),t);return o(),a}function Yf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Om=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${bn(e)}Modifiers`]||n[`${vs(e)}Modifiers`];function Bm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Mt;let s=t;const r=e.startsWith("update:"),o=r&&Om(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Yt(h)?h.trim():h)),o.number&&(s=t.map(fp)));let a,l=i[a=ya(e)]||i[a=ya(bn(e))];!l&&r&&(l=i[a=ya(vs(e))]),l&&Jn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Jn(c,n,6,s)}}function $f(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Je(n)){const l=c=>{const h=$f(c,e,!0);h&&(a=!0,jt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Nt(n)&&i.set(n,null),null):(Qe(r)?r.forEach(l=>o[l]=null):jt(o,r),Nt(n)&&i.set(n,o),o)}function aa(n,e){return!n||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,vs(e))||mt(n,e))}function Aa(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:m,ctx:_,inheritAttrs:x}=n,d=Vo(n);let p,b;try{if(t.shapeFlag&4){const w=s||i,O=w;p=$n(c.call(O,w,h,u,m,f,_)),b=a}else{const w=e;p=$n(w.length>1?w(u,{attrs:a,slots:o,emit:l}):w(u,null)),b=e.props?a:zm(a)}}catch(w){Tr.length=0,ra(w,n,1),p=Ht(Or)}let M=p;if(b&&x!==!1){const w=Object.keys(b),{shapeFlag:O}=M;w.length&&O&7&&(r&&w.some(_c)&&(b=Gm(b,r)),M=Zs(M,b,!1,!0))}return t.dirs&&(M=Zs(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Dc(M,t.transition),p=M,Vo(d),p}const zm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qo(t))&&((e||(e={}))[t]=n[t]);return e},Gm=(n,e)=>{const t={};for(const i in n)(!_c(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Hm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?xu(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==i[f]&&!aa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?xu(i,o,c):!0:!!o;return!1}function xu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!aa(t,r))return!0}return!1}function km({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const jf=n=>n.__isSuspense;function Vm(n,e){e&&e.pendingBranch?Qe(n)?e.effects.push(...n):e.effects.push(n):Jp(n)}const ln=Symbol.for("v-fgt"),la=Symbol.for("v-txt"),Or=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),Tr=[];let yn=null;function yi(n=!1){Tr.push(yn=n?null:[])}function Wm(){Tr.pop(),yn=Tr[Tr.length-1]||null}let Br=1;function yu(n){Br+=n,n<0&&yn&&(yn.hasOnce=!0)}function Xm(n){return n.dynamicChildren=Br>0?yn||Vs:null,Wm(),Br>0&&yn&&yn.push(n),n}function Mi(n,e,t,i,s,r){return Xm(Ze(n,e,t,i,s,r,!0))}function Xo(n){return n?n.__v_isVNode===!0:!1}function ur(n,e){return n.type===e.type&&n.key===e.key}const Kf=({key:n})=>n??null,Do=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Yt(n)||Qt(n)||Je(n)?{i:xn,r:n,k:e,f:!!t}:n:null);function Ze(n,e=null,t=null,i=0,s=null,r=n===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kf(e),ref:e&&Do(e),scopeId:Cf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xn};return a?(Oc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Yt(t)?8:16),Br>0&&!o&&yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yn.push(l),l}const Ht=qm;function qm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===pm)&&(n=Or),Xo(n)){const a=Zs(n,e,!0);return t&&Oc(a,t),Br>0&&!r&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag=-2,a}if(i0(n)&&(n=n.__vccOpts),e){e=Ym(e);let{class:a,style:l}=e;a&&!Yt(a)&&(e.class=Hn(a)),Nt(l)&&(Cc(l)&&!Qe(l)&&(l=jt({},l)),e.style=yc(l))}const o=Yt(n)?1:jf(n)?128:tm(n)?64:Nt(n)?4:Je(n)?2:0;return Ze(n,e,t,i,s,o,r,!0)}function Ym(n){return n?Cc(n)||Of(n)?jt({},n):n:null}function Zs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?$m(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Kf(c),ref:e&&e.ref?t&&r?Qe(r)?r.concat(Do(e)):[r,Do(e)]:Do(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ln?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zs(n.ssContent),ssFallback:n.ssFallback&&Zs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Dc(h,l.clone(h)),h}function Di(n=" ",e=0){return Ht(la,null,n,e)}function $n(n){return n==null||typeof n=="boolean"?Ht(Or):Qe(n)?Ht(ln,null,n.slice()):Xo(n)?Ni(n):Ht(la,null,String(n))}function Ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zs(n)}function Oc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Oc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Of(e)?e._ctx=xn:s===3&&xn&&(xn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:xn},t=32):(e=String(e),i&64?(t=16,e=[Di(e)]):t=8);n.children=e,n.shapeFlag|=t}function $m(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Hn([e.class,i.class]));else if(s==="style")e.style=yc([e.style,i.style]);else if(Qo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Qe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Xn(n,e,t,i=null){Jn(n,e,7,[t,i])}const jm=Uf();let Km=0;function Zm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||jm,r={uid:Km++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(i,s),emitsOptions:$f(i,s),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Bm.bind(null,r),n.ce&&n.ce(r),r}let Jt=null,qo,wl;{const n=sf(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qo=e("__VUE_INSTANCE_SETTERS__",t=>Jt=t),wl=e("__VUE_SSR_SETTERS__",t=>ca=t)}const jr=n=>{const e=Jt;return qo(n),n.scope.on(),()=>{n.scope.off(),qo(e)}},Mu=()=>{Jt&&Jt.scope.off(),qo(null)};function Zf(n){return n.vnode.shapeFlag&4}let ca=!1;function Jm(n,e=!1,t=!1){e&&wl(e);const{props:i,children:s}=n.vnode,r=Zf(n);Em(n,i,r,e),Rm(n,s,t);const o=r?Qm(n,e):void 0;return e&&wl(!1),o}function Qm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gm);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?t0(n):null,r=jr(n);ki();const o=$r(i,n,0,[n.props,s]);if(Vi(),r(),tf(o)){if(Er(n)||Pf(n),o.then(Mu,Mu),e)return o.then(a=>{Su(n,a,e)}).catch(a=>{ra(a,n,0)});n.asyncDep=o}else Su(n,o,e)}else Jf(n,e)}function Su(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Nt(e)&&(n.setupState=wf(e)),Jf(n,t)}let wu;function Jf(n,e,t){const i=n.type;if(!n.render){if(!e&&wu&&!i.render){const s=i.template||Nc(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=jt(jt({isCustomElement:r,delimiters:a},o),l);i.render=wu(s,c)}}n.render=i.render||Kn}{const s=jr(n);ki();try{_m(n)}finally{Vi(),s()}}}const e0={get(n,e){return tn(n,"get",""),n[e]}};function t0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,e0),slots:n.slots,emit:n.emit,expose:e}}function ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(wf(kp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in br)return br[t](n)},has(e,t){return t in e||t in br}})):n.proxy}function n0(n,e=!0){return Je(n)?n.displayName||n.name:n.name||e&&n.__name}function i0(n){return Je(n)&&"__vccOpts"in n}const Dn=(n,e)=>Yp(n,e,ca);function Qf(n,e,t){const i=arguments.length;return i===2?Nt(e)&&!Qe(e)?Xo(e)?Ht(n,null,[e]):Ht(n,e):Ht(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Xo(t)&&(t=[t]),Ht(n,e,t))}const s0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let El;const Eu=typeof window<"u"&&window.trustedTypes;if(Eu)try{El=Eu.createPolicy("vue",{createHTML:n=>n})}catch{}const ed=El?n=>El.createHTML(n):n=>n,r0="http://www.w3.org/2000/svg",o0="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,bu=fi&&fi.createElement("template"),a0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?fi.createElementNS(r0,n):e==="mathml"?fi.createElementNS(o0,n):t?fi.createElement(n,{is:t}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{bu.innerHTML=ed(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=bu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},l0=Symbol("_vtc");function c0(n,e,t){const i=n[l0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Yo=Symbol("_vod"),td=Symbol("_vsh"),u0={beforeMount(n,{value:e},{transition:t}){n[Yo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):hr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),hr(n,!0),i.enter(n)):i.leave(n,()=>{hr(n,!1)}):hr(n,e))},beforeUnmount(n,{value:e}){hr(n,e)}};function hr(n,e){n.style.display=e?n[Yo]:"none",n[td]=!e}const h0=Symbol(""),f0=/(^|;)\s*display\s*:/;function d0(n,e,t){const i=n.style,s=Yt(t);let r=!1;if(t&&!s){if(e)if(Yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Uo(i,a,"")}else for(const o in e)t[o]==null&&Uo(i,o,"");for(const o in t)o==="display"&&(r=!0),Uo(i,o,t[o])}else if(s){if(e!==t){const o=i[h0];o&&(t+=";"+o),i.cssText=t,r=f0.test(t)}}else e&&n.removeAttribute("style");Yo in n&&(n[Yo]=r?i.display:"",n[td]&&(i.display="none"))}const Tu=/\s*!important$/;function Uo(n,e,t){if(Qe(t))t.forEach(i=>Uo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=p0(n,e);Tu.test(t)?n.setProperty(vs(i),t.replace(Tu,""),"important"):n[i]=t}}const Au=["Webkit","Moz","ms"],Ca={};function p0(n,e){const t=Ca[e];if(t)return t;let i=bn(e);if(i!=="filter"&&i in n)return Ca[e]=i;i=na(i);for(let s=0;s<Au.length;s++){const r=Au[s]+i;if(r in n)return Ca[e]=r}return e}const Ru="http://www.w3.org/1999/xlink";function Cu(n,e,t,i,s,r=vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ru,e.slice(6,e.length)):n.setAttributeNS(Ru,e,t):t==null||r&&!rf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":or(t)?String(t):t)}function Pu(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ed(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=rf(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function m0(n,e,t,i){n.addEventListener(e,t,i)}function g0(n,e,t,i){n.removeEventListener(e,t,i)}const Iu=Symbol("_vei");function _0(n,e,t,i,s=null){const r=n[Iu]||(n[Iu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=v0(e);if(i){const c=r[e]=M0(i,s);m0(n,a,c,l)}else o&&(g0(n,a,o,l),r[e]=void 0)}}const Lu=/(?:Once|Passive|Capture)$/;function v0(n){let e;if(Lu.test(n)){e={};let i;for(;i=n.match(Lu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vs(n.slice(2)),e]}let Pa=0;const x0=Promise.resolve(),y0=()=>Pa||(x0.then(()=>Pa=0),Pa=Date.now());function M0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Jn(S0(i,t.value),e,5,[i])};return t.value=n,t.attached=y0(),t}function S0(n,e){if(Qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Du=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,w0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?c0(n,i,o):e==="style"?d0(n,t,i):Qo(e)?_c(e)||_0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):E0(n,e,i,o))?(Pu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Yt(i))?Pu(n,bn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Cu(n,e,i,o))};function E0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Du(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Du(e)&&Yt(t)?!1:e in n}const b0=jt({patchProp:w0},a0);let Uu;function T0(){return Uu||(Uu=Pm(b0))}const A0=(...n)=>{const e=T0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=C0(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,R0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function R0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function C0(n){return Yt(n)?document.querySelector(n):n}const P0={id:"app"},I0=kn({__name:"App",setup(n){const e=nt(!1);function t(i){i.clientY<100?e.value=!0:e.value=!1}return ti(()=>{window.addEventListener("mousemove",t)}),Uc(()=>{window.removeEventListener("mousemove",t)}),(i,s)=>{const r=hu("router-link"),o=hu("router-view");return yi(),Mi("div",P0,[Qp(Ze("nav",null,[Ht(r,{to:"/3d-bear-arts/leather"},{default:Li(()=>s[0]||(s[0]=[Di("Leather")])),_:1}),Ht(r,{to:"/3d-bear-arts/pop-art"},{default:Li(()=>s[1]||(s[1]=[Di("Pop MouseMove")])),_:1}),Ht(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Li(()=>s[2]||(s[2]=[Di("Pop3")])),_:1}),Ht(r,{to:"/3d-bear-arts/machine"},{default:Li(()=>s[3]||(s[3]=[Di("machine")])),_:1}),Ht(r,{to:"/3d-bear-arts/"},{default:Li(()=>s[4]||(s[4]=[Di("Water")])),_:1}),Ht(r,{to:"/3d-bear-arts/ghost-bear"},{default:Li(()=>s[5]||(s[5]=[Di("ghost")])),_:1}),Ht(r,{to:"/3d-bear-arts/white-ghost-bear"},{default:Li(()=>s[6]||(s[6]=[Di("white ghost")])),_:1})],512),[[u0,e.value]]),Ht(o)])}}}),Si=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},L0=Si(I0,[["__scopeId","data-v-cf9150b8"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Bs=typeof document<"u";function nd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function D0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&nd(n.default)}const xt=Object.assign;function Ia(n,e){const t={};for(const i in e){const s=e[i];t[i]=zn(s)?s.map(n):n(s)}return t}const Ar=()=>{},zn=Array.isArray,id=/#/g,U0=/&/g,N0=/\//g,F0=/=/g,O0=/\?/g,sd=/\+/g,B0=/%5B/g,z0=/%5D/g,rd=/%5E/g,G0=/%60/g,od=/%7B/g,H0=/%7C/g,ad=/%7D/g,k0=/%20/g;function Bc(n){return encodeURI(""+n).replace(H0,"|").replace(B0,"[").replace(z0,"]")}function V0(n){return Bc(n).replace(od,"{").replace(ad,"}").replace(rd,"^")}function bl(n){return Bc(n).replace(sd,"%2B").replace(k0,"+").replace(id,"%23").replace(U0,"%26").replace(G0,"`").replace(od,"{").replace(ad,"}").replace(rd,"^")}function W0(n){return bl(n).replace(F0,"%3D")}function X0(n){return Bc(n).replace(id,"%23").replace(O0,"%3F")}function q0(n){return n==null?"":X0(n).replace(N0,"%2F")}function zr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Y0=/\/$/,$0=n=>n.replace(Y0,"");function La(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=J0(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:zr(o)}}function j0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Nu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function K0(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Js(e.matched[i],t.matched[s])&&ld(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Js(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ld(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Z0(n[t],e[t]))return!1;return!0}function Z0(n,e){return zn(n)?Fu(n,e):zn(e)?Fu(e,n):n===e}function Fu(n,e){return zn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function J0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const bi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Gr;(function(n){n.pop="pop",n.push="push"})(Gr||(Gr={}));var Rr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Rr||(Rr={}));function Q0(n){if(!n)if(Bs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),$0(n)}const eg=/^[^#]+#/;function tg(n,e){return n.replace(eg,"#")+e}function ng(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ha=()=>({left:window.scrollX,top:window.scrollY});function ig(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=ng(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ou(n,e){return(history.state?history.state.position-e:-1)+n}const Tl=new Map;function sg(n,e){Tl.set(n,e)}function rg(n){const e=Tl.get(n);return Tl.delete(n),e}let og=()=>location.protocol+"//"+location.host;function cd(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Nu(l,"")}return Nu(t,n)+i+s}function ag(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const m=cd(n,location),_=t.value,x=e.value;let d=0;if(f){if(t.value=m,e.value=f,o&&o===_){o=null;return}d=x?f.position-x.position:0}else i(m);s.forEach(p=>{p(t.value,_,{delta:d,type:Gr.pop,direction:d?d>0?Rr.forward:Rr.back:Rr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const m=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(m),m}function h(){const{history:f}=window;f.state&&f.replaceState(xt({},f.state,{scroll:ha()}),"")}function u(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Bu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?ha():null}}function lg(n){const{history:e,location:t}=window,i={value:cd(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=n.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:og()+n+l;try{e[h?"replaceState":"pushState"](c,"",f),s.value=c}catch(m){console.error(m),t[h?"replace":"assign"](f)}}function o(l,c){const h=xt({},e.state,Bu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=xt({},s.value,e.state,{forward:l,scroll:ha()});r(h.current,h,!0);const u=xt({},Bu(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function cg(n){n=Q0(n);const e=lg(n),t=ag(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=xt({location:"",base:n,go:i,createHref:tg.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ug(n){return typeof n=="string"||n&&typeof n=="object"}function ud(n){return typeof n=="string"||typeof n=="symbol"}const hd=Symbol("");var zu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(zu||(zu={}));function Qs(n,e){return xt(new Error,{type:n,[hd]:!0},e)}function si(n,e){return n instanceof Error&&hd in n&&(e==null||!!(n.type&e))}const Gu="[^/]+?",hg={sensitive:!1,strict:!1,start:!0,end:!0},fg=/[.+*?^${}()[\]/\\]/g;function dg(n,e){const t=xt({},hg,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const h=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const f=c[u];let m=40+(t.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(fg,"\\$&"),m+=40;else if(f.type===1){const{value:_,repeatable:x,optional:d,regexp:p}=f;r.push({name:_,repeatable:x,optional:d});const b=p||Gu;if(b!==Gu){m+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+w.message)}}let M=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(M=d&&c.length<2?`(?:/${M})`:"/"+M),d&&(M+="?"),s+=M,m+=20,d&&(m+=-8),x&&(m+=-20),b===".*"&&(m+=-50)}h.push(m)}i.push(h)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let f=1;f<h.length;f++){const m=h[f]||"",_=r[f-1];u[_.name]=m&&_.repeatable?m.split("/"):m}return u}function l(c){let h="",u=!1;for(const f of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const m of f)if(m.type===0)h+=m.value;else if(m.type===1){const{value:_,repeatable:x,optional:d}=m,p=_ in c?c[_]:"";if(zn(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=zn(p)?p.join("/"):p;if(!b)if(d)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function pg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fd(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=pg(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Hu(i))return 1;if(Hu(s))return-1}return s.length-i.length}function Hu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const mg={type:0,value:""},gg=/[a-zA-Z0-9_]/;function _g(n){if(!n)return[[]];if(n==="/")return[[mg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:gg.test(l)?f():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:t=3:h+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function vg(n,e,t){const i=dg(_g(n.path),t),s=xt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xg(n,e){const t=[],i=new Map;e=Xu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,m){const _=!m,x=Vu(u);x.aliasOf=m&&m.record;const d=Xu(e,u),p=[x];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of w)p.push(Vu(xt({},x,{components:m?m.record.components:x.components,path:O,aliasOf:m?m.record:x})))}let b,M;for(const w of p){const{path:O}=w;if(f&&O[0]!=="/"){const P=f.record.path,R=P[P.length-1]==="/"?"":"/";w.path=f.record.path+(O&&R+O)}if(b=vg(w,f,d),m?m.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),_&&u.name&&!Wu(b)&&o(u.name)),dd(b)&&l(b),x.children){const P=x.children;for(let R=0;R<P.length;R++)r(P[R],b,m&&m.children[R])}m=m||b}return M?()=>{o(M)}:Ar}function o(u){if(ud(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){const f=Sg(u,t);t.splice(f,0,u),u.record.name&&!Wu(u)&&i.set(u.record.name,u)}function c(u,f){let m,_={},x,d;if("name"in u&&u.name){if(m=i.get(u.name),!m)throw Qs(1,{location:u});d=m.record.name,_=xt(ku(f.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&ku(u.params,m.keys.map(M=>M.name))),x=m.stringify(_)}else if(u.path!=null)x=u.path,m=t.find(M=>M.re.test(x)),m&&(_=m.parse(x),d=m.record.name);else{if(m=f.name?i.get(f.name):t.find(M=>M.re.test(f.path)),!m)throw Qs(1,{location:u,currentLocation:f});d=m.record.name,_=xt({},f.params,u.params),x=m.stringify(_)}const p=[];let b=m;for(;b;)p.unshift(b.record),b=b.parent;return{name:d,path:x,params:_,matched:p,meta:Mg(p)}}n.forEach(u=>r(u));function h(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function ku(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Vu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:yg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function yg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Wu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Mg(n){return n.reduce((e,t)=>xt(e,t.meta),{})}function Xu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Sg(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;fd(n,e[r])<0?i=r:t=r+1}const s=wg(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function wg(n){let e=n;for(;e=e.parent;)if(dd(e)&&fd(n,e)===0)return e}function dd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Eg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(sd," "),o=r.indexOf("="),a=zr(o<0?r:r.slice(0,o)),l=o<0?null:zr(r.slice(o+1));if(a in e){let c=e[a];zn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function qu(n){let e="";for(let t in n){const i=n[t];if(t=W0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(zn(i)?i.map(r=>r&&bl(r)):[i&&bl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function bg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=zn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Tg=Symbol(""),Yu=Symbol(""),zc=Symbol(""),pd=Symbol(""),Al=Symbol("");function fr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Fi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Qs(4,{from:t,to:e})):f instanceof Error?l(f):ug(f)?l(Qs(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},h=r(()=>n.call(i&&i.instances[s],e,t,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(f=>l(f))})}function Da(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(nd(l)){const h=(l.__vccOpts||l)[e];h&&r.push(Fi(h,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=D0(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const m=(u.__vccOpts||u)[e];return m&&Fi(m,t,i,o,a,s)()}))}}return r}function $u(n){const e=_i(zc),t=_i(pd),i=Dn(()=>{const l=Ws(n.to);return e.resolve(l)}),s=Dn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=t.matched;if(!h||!u.length)return-1;const f=u.findIndex(Js.bind(null,h));if(f>-1)return f;const m=ju(l[c-2]);return c>1&&ju(h)===m&&u[u.length-1].path!==m?u.findIndex(Js.bind(null,l[c-2])):f}),r=Dn(()=>s.value>-1&&Pg(t.params,i.value.params)),o=Dn(()=>s.value>-1&&s.value===t.matched.length-1&&ld(t.params,i.value.params));function a(l={}){return Cg(l)?e[Ws(n.replace)?"replace":"push"](Ws(n.to)).catch(Ar):Promise.resolve()}return{route:i,href:Dn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Ag=kn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$u,setup(n,{slots:e}){const t=sa($u(n)),{options:i}=_i(zc),s=Dn(()=>({[Ku(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ku(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Qf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Rg=Ag;function Cg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Pg(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!zn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ju(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ku=(n,e,t)=>n??e??t,Ig=kn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=_i(Al),s=Dn(()=>n.route||i.value),r=_i(Yu,0),o=Dn(()=>{let c=Ws(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=Dn(()=>s.value.matched[o.value]);Lo(Yu,Dn(()=>o.value+1)),Lo(Tg,a),Lo(Al,s);const l=nt();return zt(()=>[l.value,a.value,n.name],([c,h,u],[f,m,_])=>{h&&(h.instances[u]=c,m&&m!==h&&c&&c===f&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),c&&h&&(!m||!Js(h,m)||!f)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,f=u&&u.components[h];if(!f)return Zu(t.default,{Component:f,route:c});const m=u.props[h],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=Qf(f,xt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return Zu(t.default,{Component:d,route:c})||d}}});function Zu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Lg=Ig;function Dg(n){const e=xg(n.routes,n),t=n.parseQuery||Eg,i=n.stringifyQuery||qu,s=n.history,r=fr(),o=fr(),a=fr(),l=Vp(bi);let c=bi;Bs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ia.bind(null,U=>""+U),u=Ia.bind(null,q0),f=Ia.bind(null,zr);function m(U,le){let ae,he;return ud(U)?(ae=e.getRecordMatcher(U),he=le):he=U,e.addRoute(he,ae)}function _(U){const le=e.getRecordMatcher(U);le&&e.removeRoute(le)}function x(){return e.getRoutes().map(U=>U.record)}function d(U){return!!e.getRecordMatcher(U)}function p(U,le){if(le=xt({},le||l.value),typeof U=="string"){const T=La(t,U,le.path),I=e.resolve({path:T.path},le),D=s.createHref(T.fullPath);return xt(T,I,{params:f(I.params),hash:zr(T.hash),redirectedFrom:void 0,href:D})}let ae;if(U.path!=null)ae=xt({},U,{path:La(t,U.path,le.path).path});else{const T=xt({},U.params);for(const I in T)T[I]==null&&delete T[I];ae=xt({},U,{params:u(T)}),le.params=u(le.params)}const he=e.resolve(ae,le),we=U.hash||"";he.params=h(f(he.params));const ne=j0(i,xt({},U,{hash:V0(we),path:he.path})),g=s.createHref(ne);return xt({fullPath:ne,hash:we,query:i===qu?bg(U.query):U.query||{}},he,{redirectedFrom:void 0,href:g})}function b(U){return typeof U=="string"?La(t,U,l.value.path):xt({},U)}function M(U,le){if(c!==U)return Qs(8,{from:le,to:U})}function w(U){return R(U)}function O(U){return w(xt(b(U),{replace:!0}))}function P(U){const le=U.matched[U.matched.length-1];if(le&&le.redirect){const{redirect:ae}=le;let he=typeof ae=="function"?ae(U):ae;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=b(he):{path:he},he.params={}),xt({query:U.query,hash:U.hash,params:he.path!=null?{}:U.params},he)}}function R(U,le){const ae=c=p(U),he=l.value,we=U.state,ne=U.force,g=U.replace===!0,T=P(ae);if(T)return R(xt(b(T),{state:typeof T=="object"?xt({},we,T.state):we,force:ne,replace:g}),le||ae);const I=ae;I.redirectedFrom=le;let D;return!ne&&K0(i,he,ae)&&(D=Qs(16,{to:I,from:he}),ge(he,he,!0,!1)),(D?Promise.resolve(D):y(I,he)).catch(N=>si(N)?si(N,2)?N:ve(N):W(N,I,he)).then(N=>{if(N){if(si(N,2))return R(xt({replace:g},b(N.to),{state:typeof N.to=="object"?xt({},we,N.to.state):we,force:ne}),le||I)}else N=j(I,he,!0,g,we);return E(I,he,N),N})}function F(U,le){const ae=M(U,le);return ae?Promise.reject(ae):Promise.resolve()}function J(U){const le=oe.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(U):U()}function y(U,le){let ae;const[he,we,ne]=Ug(U,le);ae=Da(he.reverse(),"beforeRouteLeave",U,le);for(const T of he)T.leaveGuards.forEach(I=>{ae.push(Fi(I,U,le))});const g=F.bind(null,U,le);return ae.push(g),Se(ae).then(()=>{ae=[];for(const T of r.list())ae.push(Fi(T,U,le));return ae.push(g),Se(ae)}).then(()=>{ae=Da(we,"beforeRouteUpdate",U,le);for(const T of we)T.updateGuards.forEach(I=>{ae.push(Fi(I,U,le))});return ae.push(g),Se(ae)}).then(()=>{ae=[];for(const T of ne)if(T.beforeEnter)if(zn(T.beforeEnter))for(const I of T.beforeEnter)ae.push(Fi(I,U,le));else ae.push(Fi(T.beforeEnter,U,le));return ae.push(g),Se(ae)}).then(()=>(U.matched.forEach(T=>T.enterCallbacks={}),ae=Da(ne,"beforeRouteEnter",U,le,J),ae.push(g),Se(ae))).then(()=>{ae=[];for(const T of o.list())ae.push(Fi(T,U,le));return ae.push(g),Se(ae)}).catch(T=>si(T,8)?T:Promise.reject(T))}function E(U,le,ae){a.list().forEach(he=>J(()=>he(U,le,ae)))}function j(U,le,ae,he,we){const ne=M(U,le);if(ne)return ne;const g=le===bi,T=Bs?history.state:{};ae&&(he||g?s.replace(U.fullPath,xt({scroll:g&&T&&T.scroll},we)):s.push(U.fullPath,we)),l.value=U,ge(U,le,ae,g),ve()}let H;function Z(){H||(H=s.listen((U,le,ae)=>{if(!fe.listening)return;const he=p(U),we=P(he);if(we){R(xt(we,{replace:!0}),he).catch(Ar);return}c=he;const ne=l.value;Bs&&sg(Ou(ne.fullPath,ae.delta),ha()),y(he,ne).catch(g=>si(g,12)?g:si(g,2)?(R(g.to,he).then(T=>{si(T,20)&&!ae.delta&&ae.type===Gr.pop&&s.go(-1,!1)}).catch(Ar),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),W(g,he,ne))).then(g=>{g=g||j(he,ne,!1),g&&(ae.delta&&!si(g,8)?s.go(-ae.delta,!1):ae.type===Gr.pop&&si(g,20)&&s.go(-1,!1)),E(he,ne,g)}).catch(Ar)}))}let re=fr(),k=fr(),ee;function W(U,le,ae){ve(U);const he=k.list();return he.length?he.forEach(we=>we(U,le,ae)):console.error(U),Promise.reject(U)}function me(){return ee&&l.value!==bi?Promise.resolve():new Promise((U,le)=>{re.add([U,le])})}function ve(U){return ee||(ee=!U,Z(),re.list().forEach(([le,ae])=>U?ae(U):le()),re.reset()),U}function ge(U,le,ae,he){const{scrollBehavior:we}=n;if(!Bs||!we)return Promise.resolve();const ne=!ae&&rg(Ou(U.fullPath,0))||(he||!ae)&&history.state&&history.state.scroll||null;return bf().then(()=>we(U,le,ne)).then(g=>g&&ig(g)).catch(g=>W(g,U,le))}const Ee=U=>s.go(U);let Be;const oe=new Set,fe={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:d,getRoutes:x,resolve:p,options:n,push:w,replace:O,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:k.add,isReady:me,install(U){const le=this;U.component("RouterLink",Rg),U.component("RouterView",Lg),U.config.globalProperties.$router=le,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Ws(l)}),Bs&&!Be&&l.value===bi&&(Be=!0,w(s.location).catch(we=>{}));const ae={};for(const we in bi)Object.defineProperty(ae,we,{get:()=>l.value[we],enumerable:!0});U.provide(zc,le),U.provide(pd,yf(ae)),U.provide(Al,l);const he=U.unmount;oe.add(U),U.unmount=function(){oe.delete(U),oe.size<1&&(c=bi,H&&H(),H=null,l.value=bi,Be=!1,ee=!1),he()}}};function Se(U){return U.reduce((le,ae)=>le.then(()=>J(ae)),Promise.resolve())}return fe}function Ug(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Js(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Js(c,l))||s.push(l))}return[t,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="169",Ng=0,Ju=1,Fg=2,md=1,Og=2,hi=3,Hi=0,hn=1,lt=2,Bi=0,Ys=1,Qu=2,eh=3,th=4,Bg=5,cs=100,zg=101,Gg=102,Hg=103,kg=104,Vg=200,Wg=201,Xg=202,qg=203,Rl=204,Cl=205,Yg=206,$g=207,jg=208,Kg=209,Zg=210,Jg=211,Qg=212,e_=213,t_=214,Pl=0,Il=1,Ll=2,er=3,Dl=4,Ul=5,Nl=6,Fl=7,gd=0,n_=1,i_=2,zi=0,s_=1,r_=2,o_=3,a_=4,l_=5,c_=6,u_=7,_d=300,tr=301,nr=302,Hr=303,Ol=304,fa=306,Dt=1e3,hs=1001,Bl=1002,En=1003,h_=1004,ao=1005,Un=1006,Ua=1007,fs=1008,vi=1009,vd=1010,xd=1011,kr=1012,Hc=1013,ms=1014,pi=1015,Kr=1016,kc=1017,Vc=1018,ir=1020,yd=35902,Md=1021,Sd=1022,Fn=1023,wd=1024,Ed=1025,$s=1026,sr=1027,bd=1028,Wc=1029,Td=1030,Xc=1031,qc=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,zl=35840,Gl=35841,Hl=35842,kl=35843,Vl=36196,Wl=37492,Xl=37496,ql=37808,Yl=37809,$l=37810,jl=37811,Kl=37812,Zl=37813,Jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,zo=36492,oc=36494,ac=36495,Ad=36283,lc=36284,cc=36285,uc=36286,f_=3200,d_=3201,Rd=0,p_=1,Oi="",Yn="srgb",Wi="srgb-linear",Yc="display-p3",da="display-p3-linear",$o="linear",Tt="srgb",jo="rec709",Ko="p3",ws=7680,nh=519,m_=512,g_=513,__=514,Cd=515,v_=516,x_=517,y_=518,M_=519,ih=35044,sh="300 es",mi=2e3,Zo=2001;class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rh=1234567;const Cr=Math.PI/180,Vr=180/Math.PI;function xs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function $c(n,e){return(n%e+e)%e}function S_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function w_(n,e,t){return n!==e?(t-n)/(e-n):0}function Pr(n,e,t){return(1-t)*n+t*e}function E_(n,e,t,i){return Pr(n,e,1-Math.exp(-t*i))}function b_(n,e=1){return e-Math.abs($c(n,e*2)-e)}function T_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function A_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function R_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function C_(n,e){return n+Math.random()*(e-n)}function P_(n){return n*(.5-Math.random())}function I_(n){n!==void 0&&(rh=n);let e=rh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L_(n){return n*Cr}function D_(n){return n*Vr}function U_(n){return(n&n-1)===0&&n!==0}function N_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function F_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function O_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rt={DEG2RAD:Cr,RAD2DEG:Vr,generateUUID:xs,clamp:qt,euclideanModulo:$c,mapLinear:S_,inverseLerp:w_,lerp:Pr,damp:E_,pingpong:b_,smoothstep:T_,smootherstep:A_,randInt:R_,randFloat:C_,randFloatSpread:P_,seededRandom:I_,degToRad:L_,radToDeg:D_,isPowerOfTwo:U_,ceilPowerOfTwo:N_,floorPowerOfTwo:F_,setQuaternionFromProperEuler:O_,normalize:sn,denormalize:zs};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,s,r,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],_=i[8],x=s[0],d=s[3],p=s[6],b=s[1],M=s[4],w=s[7],O=s[2],P=s[5],R=s[8];return r[0]=o*x+a*b+l*O,r[3]=o*d+a*M+l*P,r[6]=o*p+a*w+l*R,r[1]=c*x+h*b+u*O,r[4]=c*d+h*M+u*P,r[7]=c*p+h*w+u*R,r[2]=f*x+m*b+_*O,r[5]=f*d+m*M+_*P,r[8]=f*p+m*w+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=t*u+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new tt;function Pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B_(){const n=Wr("canvas");return n.style.display="block",n}const oh={};function Go(n){n in oh||(oh[n]=!0,console.warn(n))}function z_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function G_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function H_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ah=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lh=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dr={[Wi]:{transfer:$o,primaries:jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Yn]:{transfer:Tt,primaries:jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[da]:{transfer:$o,primaries:Ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(lh),fromReference:n=>n.applyMatrix3(ah)},[Yc]:{transfer:Tt,primaries:Ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(lh),fromReference:n=>n.applyMatrix3(ah).convertLinearToSRGB()}},k_=new Set([Wi,da]),gt={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!k_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=dr[e].toReference,s=dr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return dr[n].primaries},getTransfer:function(n){return n===Oi?$o:dr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(dr[e].luminanceCoefficients)}};function js(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Es;class V_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Wr("canvas")),Es.width=e.width,Es.height=e.height;const i=Es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=js(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(js(t[i]/255)*255):t[i]=js(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W_=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oa(s[o].image)):r.push(Oa(s[o]))}else r=Oa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?V_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X_=0;class cn extends ar{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=hs,s=hs,r=Un,o=fs,a=Fn,l=vi,c=cn.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=xs(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dt:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dt:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=_d;cn.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],x=l[2],d=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(m+1)/2,O=(p+1)/2,P=(h+f)/4,R=(u+x)/4,F=(_+d)/4;return M>w&&M>O?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=R/i):w>O?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=F/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=R/r,s=F/r),this.set(i,s,r,t),this}let b=Math.sqrt((d-_)*(d-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(d-_)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q_ extends ar{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends q_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ld extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y_ extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==f||c!==m||h!==_){let d=1-a;const p=l*f+c*m+h*_+u*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const O=Math.sqrt(M),P=Math.atan2(O,p*b);d=Math.sin(d*P)/O,a=Math.sin(a*P)/O}const w=a*b;if(l=l*d+f*w,c=c*d+m*w,h=h*d+_*w,u=u*d+x*w,d===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*m-c*f,e[t+1]=l*_+h*f+c*u-a*m,e[t+2]=c*_+h*m+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new X,ch=new Zr;class Jr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),co.subVectors(this.max,pr),bs.subVectors(e.a,pr),Ts.subVectors(e.b,pr),As.subVectors(e.c,pr),Ti.subVectors(Ts,bs),Ai.subVectors(As,Ts),es.subVectors(bs,As);let t=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-es.z,es.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,es.z,0,-es.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-es.y,es.x,0];return!za(t,bs,Ts,As,co)||(t=[1,0,0,0,1,0,0,0,1],!za(t,bs,Ts,As,co))?!1:(uo.crossVectors(Ti,Ai),t=[uo.x,uo.y,uo.z],za(t,bs,Ts,As,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new X,new X,new X,new X,new X,new X,new X,new X],Pn=new X,lo=new Jr,bs=new X,Ts=new X,As=new X,Ti=new X,Ai=new X,es=new X,pr=new X,co=new X,uo=new X,ts=new X;function za(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ts.fromArray(n,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),h=i.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $_=new Jr,mr=new X,Ga=new X;class jc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Ga)),this.expandByPoint(mr.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new X,Ha=new X,ho=new X,Ri=new X,ka=new X,fo=new X,Va=new X;class j_{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ha.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Ha);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=Ri.dot(this.direction),l=-Ri.dot(ho),c=Ri.lengthSq(),h=Math.abs(1-o*o);let u,f,m,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ha).addScaledVector(ho,f),m}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,s,r){ka.subVectors(t,e),fo.subVectors(i,e),Va.crossVectors(ka,fo);let o=this.direction.dot(Va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(fo.crossVectors(Ri,fo));if(l<0)return null;const c=a*this.direction.dot(ka.cross(Ri));if(c<0||l+c>o)return null;const h=-a*Ri.dot(Va);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,s,r,o,a,l,c,h,u,f,m,_,x,d){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,m,_,x,d)}set(e,t,i,s,r,o,a,l,c,h,u,f,m,_,x,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=_,p[11]=x,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,_=c*h,x=c*u;t[0]=f+x*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,_=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+_,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K_,e,Z_)}lookAt(e,t,i){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ci.crossVectors(i,mn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ci.crossVectors(i,mn)),Ci.normalize(),po.crossVectors(mn,Ci),s[0]=Ci.x,s[4]=po.x,s[8]=mn.x,s[1]=Ci.y,s[5]=po.y,s[9]=mn.y,s[2]=Ci.z,s[6]=po.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],_=i[2],x=i[6],d=i[10],p=i[14],b=i[3],M=i[7],w=i[11],O=i[15],P=s[0],R=s[4],F=s[8],J=s[12],y=s[1],E=s[5],j=s[9],H=s[13],Z=s[2],re=s[6],k=s[10],ee=s[14],W=s[3],me=s[7],ve=s[11],ge=s[15];return r[0]=o*P+a*y+l*Z+c*W,r[4]=o*R+a*E+l*re+c*me,r[8]=o*F+a*j+l*k+c*ve,r[12]=o*J+a*H+l*ee+c*ge,r[1]=h*P+u*y+f*Z+m*W,r[5]=h*R+u*E+f*re+m*me,r[9]=h*F+u*j+f*k+m*ve,r[13]=h*J+u*H+f*ee+m*ge,r[2]=_*P+x*y+d*Z+p*W,r[6]=_*R+x*E+d*re+p*me,r[10]=_*F+x*j+d*k+p*ve,r[14]=_*J+x*H+d*ee+p*ge,r[3]=b*P+M*y+w*Z+O*W,r[7]=b*R+M*E+w*re+O*me,r[11]=b*F+M*j+w*k+O*ve,r[15]=b*J+M*H+w*ee+O*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],_=e[3],x=e[7],d=e[11],p=e[15];return _*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*m-i*l*m)+x*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+d*(+t*c*u-t*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],_=e[12],x=e[13],d=e[14],p=e[15],b=u*d*c-x*f*c+x*l*m-a*d*m-u*l*p+a*f*p,M=_*f*c-h*d*c-_*l*m+o*d*m+h*l*p-o*f*p,w=h*x*c-_*u*c+_*a*m-o*x*m-h*a*p+o*u*p,O=_*u*l-h*x*l-_*a*f+o*x*f+h*a*d-o*u*d,P=t*b+i*M+s*w+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=b*R,e[1]=(x*f*r-u*d*r-x*s*m+i*d*m+u*s*p-i*f*p)*R,e[2]=(a*d*r-x*l*r+x*s*c-i*d*c-a*s*p+i*l*p)*R,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*m-i*l*m)*R,e[4]=M*R,e[5]=(h*d*r-_*f*r+_*s*m-t*d*m-h*s*p+t*f*p)*R,e[6]=(_*l*r-o*d*r-_*s*c+t*d*c+o*s*p-t*l*p)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*R,e[8]=w*R,e[9]=(_*u*r-h*x*r-_*i*m+t*x*m+h*i*p-t*u*p)*R,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*m-t*a*m)*R,e[12]=O*R,e[13]=(h*x*s-_*u*s+_*i*f-t*x*f-h*i*d+t*u*d)*R,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*d-t*a*d)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,_=r*u,x=o*h,d=o*u,p=a*u,b=l*c,M=l*h,w=l*u,O=i.x,P=i.y,R=i.z;return s[0]=(1-(x+p))*O,s[1]=(m+w)*O,s[2]=(_-M)*O,s[3]=0,s[4]=(m-w)*P,s[5]=(1-(f+p))*P,s[6]=(d+b)*P,s[7]=0,s[8]=(_+M)*R,s[9]=(d-b)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const c=1/r,h=1/o,u=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=mi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(a===mi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Zo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=mi){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,m=(i+s)*h;let _,x;if(a===mi)_=(o+r)*u,x=-2*u;else if(a===Zo)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rs=new X,In=new Ct,K_=new X(0,0,0),Z_=new X(1,1,1),Ci=new X,po=new X,mn=new X,uh=new Ct,hh=new Zr;class Qn{constructor(e=0,t=0,i=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J_=0;const fh=new X,Cs=new Zr,ai=new Ct,mo=new X,gr=new X,Q_=new X,ev=new Zr,dh=new X(1,0,0),ph=new X(0,1,0),mh=new X(0,0,1),gh={type:"added"},tv={type:"removed"},Ps={type:"childadded",child:null},Wa={type:"childremoved",child:null};class en extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new X,t=new Qn,i=new Zr,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new tt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mo.copy(e):mo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(gr,mo,this.up):ai.lookAt(mo,gr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ai),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tv),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,ev,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}en.DEFAULT_UP=new X(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new X,li=new X,Xa=new X,ci=new X,Is=new X,Ls=new X,_h=new X,qa=new X,Ya=new X,$a=new X,ja=new yt,Ka=new yt,Za=new yt;class Nn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ln.subVectors(s,t),li.subVectors(i,t),Xa.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(li),l=Ln.dot(Xa),c=li.dot(li),h=li.dot(Xa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ja.setScalar(0),Ka.setScalar(0),Za.setScalar(0),ja.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,i),Za.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ja,r.x),o.addScaledVector(Ka,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(e,t,i,s){return Ln.subVectors(i,t),li.subVectors(e,t),Ln.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Ln.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Nn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,i),Ls.subVectors(r,i),qa.subVectors(e,i);const l=Is.dot(qa),c=Ls.dot(qa);if(l<=0&&c<=0)return t.copy(i);Ya.subVectors(e,s);const h=Is.dot(Ya),u=Ls.dot(Ya);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Is,o);$a.subVectors(e,r);const m=Is.dot($a),_=Ls.dot($a);if(_>=0&&m<=_)return t.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ls,a);const d=h*_-m*u;if(d<=0&&u-h>=0&&m-_>=0)return _h.subVectors(r,s),a=(u-h)/(u-h+(m-_)),t.copy(s).addScaledVector(_h,a);const p=1/(d+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Is,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=$c(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ja(o,r,e+1/3),this.g=Ja(o,r,e),this.b=Ja(o,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=Yn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){const i=Ud[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return gt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(qt(Zt.r*255,0,255))*65536+Math.round(qt(Zt.g*255,0,255))*256+Math.round(qt(Zt.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Yn){gt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==Yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(go);const i=Pr(Pi.h,go.h,t),s=Pr(Pi.s,go.s,t),r=Pr(Pi.l,go.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ot;ot.NAMES=Ud;let nv=0;class Qr extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Ys,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gn extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new X,_o=new Ue;class Zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ih,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ih&&(e.usage=this.usage),e}}class Nd extends Zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fd extends Zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ut extends Zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let iv=0;const wn=new Ct,Qa=new en,Ds=new X,gn=new Jr,_r=new Jr,Wt=new X;class An extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?Fd:Nd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(gn.min,_r.min),gn.expandByPoint(Wt),Wt.addVectors(gn.max,_r.max),gn.expandByPoint(Wt)):(gn.expandByPoint(_r.min),gn.expandByPoint(_r.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Wt.add(Ds)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new X,l[F]=new X;const c=new X,h=new X,u=new X,f=new Ue,m=new Ue,_=new Ue,x=new X,d=new X;function p(F,J,y){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,J),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,J),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(f),_.sub(f);const E=1/(m.x*_.y-_.x*m.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(E),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(E),a[F].add(x),a[J].add(x),a[y].add(x),l[F].add(d),l[J].add(d),l[y].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,J=b.length;F<J;++F){const y=b[F],E=y.start,j=y.count;for(let H=E,Z=E+j;H<Z;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new X,w=new X,O=new X,P=new X;function R(F){O.fromBufferAttribute(s,F),P.copy(O);const J=a[F];M.copy(J),M.sub(O.multiplyScalar(O.dot(J))).normalize(),w.crossVectors(P,J);const E=w.dot(l[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,E)}for(let F=0,J=b.length;F<J;++F){const y=b[F],E=y.start,j=y.count;for(let H=E,Z=E+j;H<Z;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,h=new X,u=new X;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,d=l.length;x<d;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let p=0;p<h;p++)f[_++]=c[m++]}return new Zn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vh=new Ct,ns=new j_,vo=new jc,xh=new X,xo=new X,yo=new X,Mo=new X,el=new X,So=new X,yh=new X,wo=new X;class L extends en{constructor(e=new An,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(el.fromBufferAttribute(u,e),o?So.addScaledVector(el,h):So.addScaledVector(el.sub(t),h))}t.add(So)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(vo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(vo,xh)===null||ns.origin.distanceToSquared(xh)>(e.far-e.near)**2))&&(vh.copy(r).invert(),ns.copy(e.ray).applyMatrix4(vh),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],p=o[d.materialIndex],b=Math.max(d.start,m.start),M=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let w=b,O=M;w<O;w+=3){const P=a.getX(w),R=a.getX(w+1),F=a.getX(w+2);s=Eo(this,p,e,i,c,h,u,P,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const b=a.getX(d),M=a.getX(d+1),w=a.getX(d+2);s=Eo(this,o,e,i,c,h,u,b,M,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],p=o[d.materialIndex],b=Math.max(d.start,m.start),M=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let w=b,O=M;w<O;w+=3){const P=w,R=w+1,F=w+2;s=Eo(this,p,e,i,c,h,u,P,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const b=d,M=d+1,w=d+2;s=Eo(this,o,e,i,c,h,u,b,M,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function sv(n,e,t,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Hi,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:n}}function Eo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,xo),n.getVertexPosition(l,yo),n.getVertexPosition(c,Mo);const h=sv(n,e,t,i,xo,yo,Mo,yh);if(h){const u=new X;Nn.getBarycoord(yh,xo,yo,Mo,u),s&&(h.uv=Nn.getInterpolatedAttribute(s,a,l,c,u,new Ue)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,a,l,c,u,new Ue)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,l,c,u,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};Nn.getNormal(xo,yo,Mo,f.normal),h.face=f,h.barycoord=u}return h}class ys extends An{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(u,2));function _(x,d,p,b,M,w,O,P,R,F,J){const y=w/R,E=O/F,j=w/2,H=O/2,Z=P/2,re=R+1,k=F+1;let ee=0,W=0;const me=new X;for(let ve=0;ve<k;ve++){const ge=ve*E-H;for(let Ee=0;Ee<re;Ee++){const Be=Ee*y-j;me[x]=Be*b,me[d]=ge*M,me[p]=Z,c.push(me.x,me.y,me.z),me[x]=0,me[d]=0,me[p]=P>0?1:-1,h.push(me.x,me.y,me.z),u.push(Ee/R),u.push(1-ve/F),ee+=1}}for(let ve=0;ve<F;ve++)for(let ge=0;ge<R;ge++){const Ee=f+ge+re*ve,Be=f+ge+re*(ve+1),oe=f+(ge+1)+re*(ve+1),fe=f+(ge+1)+re*ve;l.push(Ee,Be,fe),l.push(Be,oe,fe),W+=6}a.addGroup(m,W,J),m+=W,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=rr(n[t]);for(const s in i)e[s]=i[s]}return e}function rv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Od(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const ov={clone:rr,merge:rn};var av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bd extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new X,Mh=new Ue,Sh=new Ue;class Ot extends Bd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Mh,Sh),t.subVectors(Sh,Mh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Ns=1;class cv extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ot(Us,Ns,e,t);s.layers=this.layers,this.add(s);const r=new Ot(Us,Ns,e,t);r.layers=this.layers,this.add(r);const o=new Ot(Us,Ns,e,t);o.layers=this.layers,this.add(o);const a=new Ot(Us,Ns,e,t);a.layers=this.layers,this.add(a);const l=new Ot(Us,Ns,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Us,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zd extends cn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uv extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new zd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ys(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Bi});r.uniforms.tEquirect.value=t;const o=new L(s,r),a=t.minFilter;return t.minFilter===fs&&(t.minFilter=Un),new cv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const tl=new X,hv=new X,fv=new tt;class as{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=tl.subVectors(i,t).cross(hv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fv.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new jc,bo=new X;class Kc{constructor(e=new as,t=new as,i=new as,s=new as,r=new as,o=new as){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],_=s[9],x=s[10],d=s[11],p=s[12],b=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,d-m,w-p).normalize(),i[1].setComponents(l+r,f+c,d+m,w+p).normalize(),i[2].setComponents(l+o,f+h,d+_,w+b).normalize(),i[3].setComponents(l-o,f-h,d-_,w-b).normalize(),i[4].setComponents(l-a,f-u,d-x,w-M).normalize(),t===mi)i[5].setComponents(l+a,f+u,d+x,w+M).normalize();else if(t===Zo)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dv(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],x=u[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const x=u[m];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class pa extends An{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],_=[],x=[],d=[];for(let p=0;p<h;p++){const b=p*f-o;for(let M=0;M<c;M++){const w=M*u-r;_.push(w,-b,0),x.push(0,0,1),d.push(M/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,w=b+c*(p+1),O=b+1+c*(p+1),P=b+1+c*p;m.push(M,w,P),m.push(w,O,P)}this.setIndex(m),this.setAttribute("position",new Ut(_,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var pv=`#ifdef USE_ALPHAHASH
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
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
}`,Iy=`#define MATCAP
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
}`,et={alphahash_fragment:pv,alphahash_pars_fragment:mv,alphamap_fragment:gv,alphamap_pars_fragment:_v,alphatest_fragment:vv,alphatest_pars_fragment:xv,aomap_fragment:yv,aomap_pars_fragment:Mv,batching_pars_vertex:Sv,batching_vertex:wv,begin_vertex:Ev,beginnormal_vertex:bv,bsdfs:Tv,iridescence_fragment:Av,bumpmap_pars_fragment:Rv,clipping_planes_fragment:Cv,clipping_planes_pars_fragment:Pv,clipping_planes_pars_vertex:Iv,clipping_planes_vertex:Lv,color_fragment:Dv,color_pars_fragment:Uv,color_pars_vertex:Nv,color_vertex:Fv,common:Ov,cube_uv_reflection_fragment:Bv,defaultnormal_vertex:zv,displacementmap_pars_vertex:Gv,displacementmap_vertex:Hv,emissivemap_fragment:kv,emissivemap_pars_fragment:Vv,colorspace_fragment:Wv,colorspace_pars_fragment:Xv,envmap_fragment:qv,envmap_common_pars_fragment:Yv,envmap_pars_fragment:$v,envmap_pars_vertex:jv,envmap_physical_pars_fragment:ox,envmap_vertex:Kv,fog_vertex:Zv,fog_pars_vertex:Jv,fog_fragment:Qv,fog_pars_fragment:ex,gradientmap_pars_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:ux,lights_physical_fragment:hx,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:xx,map_fragment:yx,map_pars_fragment:Mx,map_particle_fragment:Sx,map_particle_pars_fragment:wx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:bx,morphinstance_vertex:Tx,morphcolor_vertex:Ax,morphnormal_vertex:Rx,morphtarget_pars_vertex:Cx,morphtarget_vertex:Px,normal_fragment_begin:Ix,normal_fragment_maps:Lx,normal_pars_fragment:Dx,normal_pars_vertex:Ux,normal_vertex:Nx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Bx,clearcoat_pars_fragment:zx,iridescence_pars_fragment:Gx,opaque_fragment:Hx,packing:kx,premultiplied_alpha_fragment:Vx,project_vertex:Wx,dithering_fragment:Xx,dithering_pars_fragment:qx,roughnessmap_fragment:Yx,roughnessmap_pars_fragment:$x,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:Kx,shadowmap_vertex:Zx,shadowmask_pars_fragment:Jx,skinbase_vertex:Qx,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:sy,tonemapping_fragment:ry,tonemapping_pars_fragment:oy,transmission_fragment:ay,transmission_pars_fragment:ly,uv_pars_fragment:cy,uv_pars_vertex:uy,uv_vertex:hy,worldpos_vertex:fy,background_vert:dy,background_frag:py,backgroundCube_vert:my,backgroundCube_frag:gy,cube_vert:_y,cube_frag:vy,depth_vert:xy,depth_frag:yy,distanceRGBA_vert:My,distanceRGBA_frag:Sy,equirect_vert:wy,equirect_frag:Ey,linedashed_vert:by,linedashed_frag:Ty,meshbasic_vert:Ay,meshbasic_frag:Ry,meshlambert_vert:Cy,meshlambert_frag:Py,meshmatcap_vert:Iy,meshmatcap_frag:Ly,meshnormal_vert:Dy,meshnormal_frag:Uy,meshphong_vert:Ny,meshphong_frag:Fy,meshphysical_vert:Oy,meshphysical_frag:By,meshtoon_vert:zy,meshtoon_frag:Gy,points_vert:Hy,points_frag:ky,shadow_vert:Vy,shadow_frag:Wy,sprite_vert:Xy,sprite_frag:qy},De={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},jn={basic:{uniforms:rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:rn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:rn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:rn([De.points,De.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:rn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:rn([De.common,De.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:rn([De.sprite,De.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:rn([De.common,De.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:rn([De.lights,De.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};jn.physical={uniforms:rn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const To={r:0,b:0,g:0},ss=new Qn,Yy=new Ct;function $y(n,e,t,i,s,r,o){const a=new ot(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const w=_(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(b,M){const w=_(M);w&&(w.isCubeTexture||w.mapping===fa)?(h===void 0&&(h=new L(new ys(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:rr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ss.copy(M.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(ss)),h.material.toneMapped=gt.getTransfer(w.colorSpace)!==Tt,(u!==w||f!==w.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new L(new pa(2,2),new ei({name:"BackgroundMaterial",uniforms:rr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=gt.getTransfer(w.colorSpace)!==Tt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(To,Od(n)),i.buffers.color.setClear(To.r,To.g,To.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:d}}function jy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,E,j,H,Z){let re=!1;const k=u(H,j,E);r!==k&&(r=k,c(r.object)),re=m(y,H,j,Z),re&&_(y,H,j,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,w(y,E,j,H),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,j){const H=j.wireframe===!0;let Z=i[y.id];Z===void 0&&(Z={},i[y.id]=Z);let re=Z[E.id];re===void 0&&(re={},Z[E.id]=re);let k=re[H];return k===void 0&&(k=f(l()),re[H]=k),k}function f(y){const E=[],j=[],H=[];for(let Z=0;Z<t;Z++)E[Z]=0,j[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:j,attributeDivisors:H,object:y,attributes:{},index:null}}function m(y,E,j,H){const Z=r.attributes,re=E.attributes;let k=0;const ee=j.getAttributes();for(const W in ee)if(ee[W].location>=0){const ve=Z[W];let ge=re[W];if(ge===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ve===void 0||ve.attribute!==ge||ge&&ve.data!==ge.data)return!0;k++}return r.attributesNum!==k||r.index!==H}function _(y,E,j,H){const Z={},re=E.attributes;let k=0;const ee=j.getAttributes();for(const W in ee)if(ee[W].location>=0){let ve=re[W];ve===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));const ge={};ge.attribute=ve,ve&&ve.data&&(ge.data=ve.data),Z[W]=ge,k++}r.attributes=Z,r.attributesNum=k,r.index=H}function x(){const y=r.newAttributes;for(let E=0,j=y.length;E<j;E++)y[E]=0}function d(y){p(y,0)}function p(y,E){const j=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;j[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),Z[y]!==E&&(n.vertexAttribDivisor(y,E),Z[y]=E)}function b(){const y=r.newAttributes,E=r.enabledAttributes;for(let j=0,H=E.length;j<H;j++)E[j]!==y[j]&&(n.disableVertexAttribArray(j),E[j]=0)}function M(y,E,j,H,Z,re,k){k===!0?n.vertexAttribIPointer(y,E,j,Z,re):n.vertexAttribPointer(y,E,j,H,Z,re)}function w(y,E,j,H){x();const Z=H.attributes,re=j.getAttributes(),k=E.defaultAttributeValues;for(const ee in re){const W=re[ee];if(W.location>=0){let me=Z[ee];if(me===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){const ve=me.normalized,ge=me.itemSize,Ee=e.get(me);if(Ee===void 0)continue;const Be=Ee.buffer,oe=Ee.type,fe=Ee.bytesPerElement,Se=oe===n.INT||oe===n.UNSIGNED_INT||me.gpuType===Hc;if(me.isInterleavedBufferAttribute){const U=me.data,le=U.stride,ae=me.offset;if(U.isInstancedInterleavedBuffer){for(let he=0;he<W.locationSize;he++)p(W.location+he,U.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let he=0;he<W.locationSize;he++)d(W.location+he);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let he=0;he<W.locationSize;he++)M(W.location+he,ge/W.locationSize,oe,ve,le*fe,(ae+ge/W.locationSize*he)*fe,Se)}else{if(me.isInstancedBufferAttribute){for(let U=0;U<W.locationSize;U++)p(W.location+U,me.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let U=0;U<W.locationSize;U++)d(W.location+U);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let U=0;U<W.locationSize;U++)M(W.location+U,ge/W.locationSize,oe,ve,ge*fe,ge/W.locationSize*U*fe,Se)}}else if(k!==void 0){const ve=k[ee];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(W.location,ve);break;case 3:n.vertexAttrib3fv(W.location,ve);break;case 4:n.vertexAttrib4fv(W.location,ve);break;default:n.vertexAttrib1fv(W.location,ve)}}}}b()}function O(){F();for(const y in i){const E=i[y];for(const j in E){const H=E[j];for(const Z in H)h(H[Z].object),delete H[Z];delete E[j]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const j in E){const H=E[j];for(const Z in H)h(H[Z].object),delete H[Z];delete E[j]}delete i[y.id]}function R(y){for(const E in i){const j=i[E];if(j[y.id]===void 0)continue;const H=j[y.id];for(const Z in H)h(H[Z].object),delete H[Z];delete j[y.id]}}function F(){J(),o=!0,r!==s&&(r=s,c(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:J,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:d,disableUnusedAttributes:b}}function Ky(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];t.update(m,i,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<f.length;x++)t.update(_,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const F=R===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pi&&!F)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:O,maxSamples:P}}function Jy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new as,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{const b=r?0:i,M=b*4;let w=p.clippingState||null;l.value=w,w=h(_,f,M,m);for(let O=0;O!==M;++O)w[O]=t[O];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,_){const x=u!==null?u.length:0;let d=null;if(x!==0){if(d=l.value,_!==!0||d===null){const p=m+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<p)&&(d=new Float32Array(p));for(let M=0,w=m;M!==x;++M,w+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(d,w),d[w+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function Qy(n){let e=new WeakMap;function t(o,a){return a===Hr?o.mapping=tr:a===Ol&&(o.mapping=nr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hr||a===Ol)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Hd extends Bd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,wh=[.125,.215,.35,.446,.526,.582],us=20,nl=new Hd,Eh=new ot;let il=null,sl=0,rl=0,ol=!1;const ls=(1+Math.sqrt(5))/2,Fs=1/ls,bh=[new X(-ls,Fs,0),new X(ls,Fs,0),new X(-Fs,0,ls),new X(Fs,0,ls),new X(0,ls,-Fs),new X(0,ls,Fs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=ol,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Kr,format:Fn,colorSpace:Wi,depthBuffer:!1},s=Ah(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eM(r)),this._blurMaterial=tM(r,e,t)}return s}_compileMaterial(e){const t=new L(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,s){const a=new Ot(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Eh),h.toneMapping=zi,h.autoClear=!1;const m=new Gn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new L(new ys,m);let x=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,x=!0):(m.color.copy(Eh),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Ao(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===tr||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new L(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ao(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(s-r-1)%bh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new L(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*us-1),x=r/_,d=isFinite(r)?1+Math.floor(h*x):us;d>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${us}`);const p=[];let b=0;for(let R=0;R<us;++R){const F=R/x,J=Math.exp(-F*F/2);p.push(J),R===0?b+=J:R<d&&(b+=2*J)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const w=this._sizeLods[s],O=3*w*(s>M-Hs?s-M+Hs:0),P=4*(this._cubeSize-w);Ao(t,O,P,3*w,2*w),l.setRenderTarget(t),l.render(u,nl)}}function eM(n){const e=[],t=[],i=[];let s=n;const r=n-Hs+1+wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Hs?l=wh[o-n+Hs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,x=3,d=2,p=1,b=new Float32Array(x*_*m),M=new Float32Array(d*_*m),w=new Float32Array(p*_*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,F=P>2?0:-1,J=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];b.set(J,x*_*P),M.set(f,d*_*P);const y=[P,P,P,P,P,P];w.set(y,p*_*P)}const O=new An;O.setAttribute("position",new Zn(b,x)),O.setAttribute("uv",new Zn(M,d)),O.setAttribute("faceIndex",new Zn(w,p)),e.push(O),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ah(n,e,t){const i=new gs(n,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tM(n,e,t){const i=new Float32Array(us),s=new X(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Rh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ch(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function nM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hr||l===Ol,h=l===tr||l===nr;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Th(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Th(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Go("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sM(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let d=0,p=x.length;d<p;d++)e.remove(x[d])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const x=m[_];for(let d=0,p=x.length;d<p;d++)e.update(x[d],n.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let M=0,w=b.length;M<w;M+=3){const O=b[M+0],P=b[M+1],R=b[M+2];f.push(O,P,P,R,R,O)}}else if(_!==void 0){const b=_.array;x=_.version;for(let M=0,w=b.length/3-1;M<w;M+=3){const O=M+0,P=M+1,R=M+2;f.push(O,P,P,R,R,O)}}else return;const d=new(Pd(f)?Fd:Nd)(f,1);d.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,d)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),t.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,f*o,_),t.update(m,i,_))}function h(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,_);let d=0;for(let p=0;p<_;p++)d+=m[p];t.update(d,i,1)}function u(f,m,_,x){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/o,m[p],x[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,x,0,_);let p=0;for(let b=0;b<_;b++)p+=m[b];for(let b=0;b<x.length;b++)t.update(p,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function oM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function aM(n,e,t){const i=new WeakMap,s=new yt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),d===!0&&(w=3);let O=a.attributes.position.count*w,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const R=new Float32Array(O*P*4*u),F=new Ld(R,O,P,u);F.type=pi,F.needsUpdate=!0;const J=w*4;for(let E=0;E<u;E++){const j=p[E],H=b[E],Z=M[E],re=O*P*4*E;for(let k=0;k<j.count;k++){const ee=k*J;_===!0&&(s.fromBufferAttribute(j,k),R[re+ee+0]=s.x,R[re+ee+1]=s.y,R[re+ee+2]=s.z,R[re+ee+3]=0),x===!0&&(s.fromBufferAttribute(H,k),R[re+ee+4]=s.x,R[re+ee+5]=s.y,R[re+ee+6]=s.z,R[re+ee+7]=0),d===!0&&(s.fromBufferAttribute(Z,k),R[re+ee+8]=s.x,R[re+ee+9]=s.y,R[re+ee+10]=s.z,R[re+ee+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:F,size:new Ue(O,P)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function lM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class kd extends cn{constructor(e,t,i,s,r,o,a,l,c,h=$s){if(h!==$s&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$s&&(i=ms),i===void 0&&h===sr&&(i=ir),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vd=new cn,Ph=new kd(1,1),Wd=new Ld,Xd=new Y_,qd=new zd,Ih=[],Lh=[],Dh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ih[s];if(r===void 0&&(r=new Float32Array(s),Ih[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ma(n,e){let t=Lh[e];t===void 0&&(t=new Int32Array(e),Lh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function dM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),Vt(t,i)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;Uh.set(i),n.uniformMatrix3fv(this.addr,!1,Uh),Vt(t,i)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;Dh.set(i),n.uniformMatrix4fv(this.addr,!1,Dh),Vt(t,i)}}function gM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function EM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ph.compareFunction=Cd,r=Ph):r=Vd,t.setTexture2D(e||r,s)}function bM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xd,s)}function TM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qd,s)}function AM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wd,s)}function RM(n){switch(n){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return MM;case 36295:return SM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function CM(n,e){n.uniform1fv(this.addr,e)}function PM(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function IM(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function LM(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function DM(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UM(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NM(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FM(n,e){n.uniform1iv(this.addr,e)}function OM(n,e){n.uniform2iv(this.addr,e)}function BM(n,e){n.uniform3iv(this.addr,e)}function zM(n,e){n.uniform4iv(this.addr,e)}function GM(n,e){n.uniform1uiv(this.addr,e)}function HM(n,e){n.uniform2uiv(this.addr,e)}function kM(n,e){n.uniform3uiv(this.addr,e)}function VM(n,e){n.uniform4uiv(this.addr,e)}function WM(n,e,t){const i=this.cache,s=e.length,r=ma(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vd,r[o])}function XM(n,e,t){const i=this.cache,s=e.length,r=ma(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xd,r[o])}function qM(n,e,t){const i=this.cache,s=e.length,r=ma(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qd,r[o])}function YM(n,e,t){const i=this.cache,s=e.length,r=ma(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wd,r[o])}function $M(n){switch(n){case 5126:return CM;case 35664:return PM;case 35665:return IM;case 35666:return LM;case 35674:return DM;case 35675:return UM;case 35676:return NM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return GM;case 36294:return HM;case 36295:return kM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class jM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class KM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}}class ZM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const al=/(\w+)(\])?(\[|\.)?/g;function Fh(n,e){n.seq.push(e),n.map[e.id]=e}function JM(n,e,t){const i=n.name,s=i.length;for(al.lastIndex=0;;){const r=al.exec(i),o=al.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fh(t,c===void 0?new jM(a,n,e):new KM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new ZM(a),Fh(t,u)),t=u}}}class Ho{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);JM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Oh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QM=37297;let eS=0;function tS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function nS(n){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n);let i;switch(e===t?i="":e===Ko&&t===jo?i="LinearDisplayP3ToLinearSRGB":e===jo&&t===Ko&&(i="LinearSRGBToLinearDisplayP3"),n){case Wi:case da:return[i,"LinearTransferOETF"];case Yn:case Yc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Bh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tS(n.getShaderSource(e),o)}else return s}function iS(n,e){const t=nS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sS(n,e){let t;switch(e){case s_:t="Linear";break;case r_:t="Reinhard";break;case o_:t="Cineon";break;case a_:t="ACESFilmic";break;case c_:t="AgX";break;case u_:t="Neutral";break;case l_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ro=new X;function rS(){gt.getLuminanceCoefficients(Ro);const n=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function aS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function yr(n){return n!==""}function zh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cS=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(n){return n.replace(cS,hS)}const uS=new Map;function hS(n,e){let t=et[e];if(t===void 0){const i=uS.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hc(t)}const fS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(n){return n.replace(fS,dS)}function dS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===md?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function mS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function _S(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gd:e="ENVMAP_BLENDING_MULTIPLY";break;case n_:e="ENVMAP_BLENDING_MIX";break;case i_:e="ENVMAP_BLENDING_ADD";break}return e}function vS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pS(t),c=mS(t),h=gS(t),u=_S(t),f=vS(t),m=oS(t),_=aS(r),x=s.createProgram();let d,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(d=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?et.tonemapping_pars_fragment:"",t.toneMapping!==zi?sS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,iS("linearToOutputTexel",t.outputColorSpace),rS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=hc(o),o=zh(o,t),o=Gh(o,t),a=hc(a),a=zh(a,t),a=Gh(a,t),o=Hh(o),a=Hh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+d+o,w=b+p+a,O=Oh(s,s.VERTEX_SHADER,M),P=Oh(s,s.FRAGMENT_SHADER,w);s.attachShader(x,O),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(E){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(O).trim(),Z=s.getShaderInfoLog(P).trim();let re=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,P);else{const ee=Bh(s,O,"vertex"),W=Bh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+j+`
`+ee+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(H===""||Z==="")&&(k=!1);k&&(E.diagnostics={runnable:re,programLog:j,vertexShader:{log:H,prefix:d},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(O),s.deleteShader(P),F=new Ho(s,x),J=lS(s,x)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let J;this.getAttributes=function(){return J===void 0&&R(this),J};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,QM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=P,this}let yS=0;class MS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new SS(e),t.set(e,i)),i}}class SS{constructor(e){this.id=yS++,this.code=e,this.usedTimes=0}}function wS(n,e,t,i,s,r,o){const a=new Dd,l=new MS,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,E,j,H,Z){const re=H.fog,k=Z.geometry,ee=y.isMeshStandardMaterial?H.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||ee),me=W&&W.mapping===fa?W.image.height:null,ve=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ee=ge!==void 0?ge.length:0;let Be=0;k.morphAttributes.position!==void 0&&(Be=1),k.morphAttributes.normal!==void 0&&(Be=2),k.morphAttributes.color!==void 0&&(Be=3);let oe,fe,Se,U;if(ve){const it=jn[ve];oe=it.vertexShader,fe=it.fragmentShader}else oe=y.vertexShader,fe=y.fragmentShader,l.update(y),Se=l.getVertexShaderID(y),U=l.getFragmentShaderID(y);const le=n.getRenderTarget(),ae=Z.isInstancedMesh===!0,he=Z.isBatchedMesh===!0,we=!!y.map,ne=!!y.matcap,g=!!W,T=!!y.aoMap,I=!!y.lightMap,D=!!y.bumpMap,N=!!y.normalMap,Y=!!y.displacementMap,K=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,V=y.clearcoat>0,z=y.dispersion>0,G=y.iridescence>0,de=y.sheen>0,ce=y.transmission>0,pe=C&&!!y.anisotropyMap,Te=V&&!!y.clearcoatMap,ue=V&&!!y.clearcoatNormalMap,Me=V&&!!y.clearcoatRoughnessMap,Pe=G&&!!y.iridescenceMap,Ie=G&&!!y.iridescenceThicknessMap,be=de&&!!y.sheenColorMap,ke=de&&!!y.sheenRoughnessMap,Le=!!y.specularMap,He=!!y.specularColorMap,B=!!y.specularIntensityMap,xe=ce&&!!y.transmissionMap,te=ce&&!!y.thicknessMap,Q=!!y.gradientMap,ye=!!y.alphaMap,_e=y.alphaTest>0,Oe=!!y.alphaHash,qe=!!y.extensions;let Ke=zi;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const We={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:oe,fragmentShader:fe,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:U,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:he,batchingColor:he&&Z._colorsTexture!==null,instancing:ae,instancingColor:ae&&Z.instanceColor!==null,instancingMorph:ae&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Wi,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:ne,envMap:g,envMapMode:g&&W.mapping,envMapCubeUVHeight:me,aoMap:T,lightMap:I,bumpMap:D,normalMap:N,displacementMap:m&&Y,emissiveMap:K,normalMapObjectSpace:N&&y.normalMapType===p_,normalMapTangentSpace:N&&y.normalMapType===Rd,metalnessMap:S,roughnessMap:v,anisotropy:C,anisotropyMap:pe,clearcoat:V,clearcoatMap:Te,clearcoatNormalMap:ue,clearcoatRoughnessMap:Me,dispersion:z,iridescence:G,iridescenceMap:Pe,iridescenceThicknessMap:Ie,sheen:de,sheenColorMap:be,sheenRoughnessMap:ke,specularMap:Le,specularColorMap:He,specularIntensityMap:B,transmission:ce,transmissionMap:xe,thicknessMap:te,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Ys&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:_e,alphaHash:Oe,combine:y.combine,mapUv:we&&d(y.map.channel),aoMapUv:T&&d(y.aoMap.channel),lightMapUv:I&&d(y.lightMap.channel),bumpMapUv:D&&d(y.bumpMap.channel),normalMapUv:N&&d(y.normalMap.channel),displacementMapUv:Y&&d(y.displacementMap.channel),emissiveMapUv:K&&d(y.emissiveMap.channel),metalnessMapUv:S&&d(y.metalnessMap.channel),roughnessMapUv:v&&d(y.roughnessMap.channel),anisotropyMapUv:pe&&d(y.anisotropyMap.channel),clearcoatMapUv:Te&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:ke&&d(y.sheenRoughnessMap.channel),specularMapUv:Le&&d(y.specularMap.channel),specularColorMapUv:He&&d(y.specularColorMap.channel),specularIntensityMapUv:B&&d(y.specularIntensityMap.channel),transmissionMapUv:xe&&d(y.transmissionMap.channel),thicknessMapUv:te&&d(y.thicknessMap.channel),alphaMapUv:ye&&d(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(N||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!k.attributes.uv&&(we||ye),fog:!!re,useFog:y.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===lt,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&y.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function b(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const j in y.defines)E.push(j),E.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(M(E,y),w(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function M(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function w(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function O(y){const E=x[y.type];let j;if(E){const H=jn[E];j=ov.clone(H.uniforms)}else j=y.uniforms;return j}function P(y,E){let j;for(let H=0,Z=h.length;H<Z;H++){const re=h[H];if(re.cacheKey===E){j=re,++j.usedTimes;break}}return j===void 0&&(j=new xS(n,E,y,r),h.push(j)),j}function R(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function F(y){l.remove(y)}function J(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:O,acquireProgram:P,releaseProgram:R,releaseShaderCache:F,programs:h,dispose:J}}function ES(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function bS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,m,_,x,d){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:x,group:d},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=d),e++,p}function a(u,f,m,_,x,d){const p=o(u,f,m,_,x,d);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(u,f,m,_,x,d){const p=o(u,f,m,_,x,d);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||bS),i.length>1&&i.sort(f||Vh),s.length>1&&s.sort(f||Vh)}function h(){for(let u=e,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function TS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Wh,n.set(i,[o])):s>=r.length?(o=new Wh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ot};break;case"SpotLight":t={position:new X,direction:new X,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function RS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CS=0;function PS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IS(n){const e=new AS,t=RS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new Ct,o=new Ct;function a(c){let h=0,u=0,f=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let m=0,_=0,x=0,d=0,p=0,b=0,M=0,w=0,O=0,P=0,R=0;c.sort(PS);for(let J=0,y=c.length;J<y;J++){const E=c[J],j=E.color,H=E.intensity,Z=E.distance,re=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=j.r*H,u+=j.g*H,f+=j.b*H;else if(E.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(E.sh.coefficients[k],H);R++}else if(E.isDirectionalLight){const k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ee=E.shadow,W=t.get(E);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=E.shadow.matrix,b++}i.directional[m]=k,m++}else if(E.isSpotLight){const k=e.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(j).multiplyScalar(H),k.distance=Z,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,i.spot[x]=k;const ee=E.shadow;if(E.map&&(i.spotLightMap[O]=E.map,O++,ee.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[x]=ee.matrix,E.castShadow){const W=t.get(E);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=re,w++}x++}else if(E.isRectAreaLight){const k=e.get(E);k.color.copy(j).multiplyScalar(H),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),i.rectArea[d]=k,d++}else if(E.isPointLight){const k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){const ee=E.shadow,W=t.get(E);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=E.shadow.matrix,M++}i.point[_]=k,_++}else if(E.isHemisphereLight){const k=e.get(E);k.skyColor.copy(E.color).multiplyScalar(H),k.groundColor.copy(E.groundColor).multiplyScalar(H),i.hemi[p]=k,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==m||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==d||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==M||F.numSpotShadows!==w||F.numSpotMaps!==O||F.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=d,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,F.directionalLength=m,F.pointLength=_,F.spotLength=x,F.rectAreaLength=d,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=M,F.numSpotShadows=w,F.numSpotMaps=O,F.numLightProbes=R,i.version=CS++)}function l(c,h){let u=0,f=0,m=0,_=0,x=0;const d=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),u++}else if(M.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),m++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),o.identity(),r.copy(M.matrixWorld),r.premultiply(d),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(d),x++}}}return{setup:a,setupView:l,state:i}}function Xh(n){const e=new IS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xh(n),e.set(s,[a])):r>=o.length?(a=new Xh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class DS extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class US extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NS=`void main() {
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
}`;function OS(n,e,t){let i=new Kc;const s=new Ue,r=new Ue,o=new yt,a=new DS({depthPacking:d_}),l=new US,c={},h=t.maxTextureSize,u={[Hi]:hn,[hn]:Hi,[lt]:lt},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:NS,fragmentShader:FS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new L(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md;let p=this.type;this.render=function(P,R,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;const J=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Bi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const H=p!==hi&&this.type===hi,Z=p===hi&&this.type!==hi;for(let re=0,k=P.length;re<k;re++){const ee=P[re],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const me=W.getFrameExtents();if(s.multiply(me),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,W.mapSize.y=r.y)),W.map===null||H===!0||Z===!0){const ge=this.type!==hi?{minFilter:En,magFilter:En}:{};W.map!==null&&W.map.dispose(),W.map=new gs(s.x,s.y,ge),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ve=W.getViewportCount();for(let ge=0;ge<ve;ge++){const Ee=W.getViewport(ge);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),j.viewport(o),W.updateMatrices(ee,ge),i=W.getFrustum(),w(R,F,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===hi&&b(W,F),W.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(J,y,E)};function b(P,R){const F=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gs(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,F,f,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,F,m,x,null)}function M(P,R,F,J){let y=null;const E=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)y=E;else if(y=F.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const j=y.uuid,H=R.uuid;let Z=c[j];Z===void 0&&(Z={},c[j]=Z);let re=Z[H];re===void 0&&(re=y.clone(),Z[H]=re,R.addEventListener("dispose",O)),y=re}if(y.visible=R.visible,y.wireframe=R.wireframe,J===hi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=n.properties.get(y);j.light=F}return y}function w(P,R,F,J,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===hi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const H=e.update(P),Z=P.material;if(Array.isArray(Z)){const re=H.groups;for(let k=0,ee=re.length;k<ee;k++){const W=re[k],me=Z[W.materialIndex];if(me&&me.visible){const ve=M(P,me,J,y);P.onBeforeShadow(n,P,R,F,H,ve,W),n.renderBufferDirect(F,null,H,ve,P,W),P.onAfterShadow(n,P,R,F,H,ve,W)}}}else if(Z.visible){const re=M(P,Z,J,y);P.onBeforeShadow(n,P,R,F,H,re,null),n.renderBufferDirect(F,null,H,re,P,null),P.onAfterShadow(n,P,R,F,H,re,null)}}const j=P.children;for(let H=0,Z=j.length;H<Z;H++)w(j[H],R,F,J,y)}function O(P){P.target.removeEventListener("dispose",O);for(const F in c){const J=c[F],y=P.target.uuid;y in J&&(J[y].dispose(),delete J[y])}}}const BS={[Pl]:Il,[Ll]:Nl,[Dl]:Fl,[er]:Ul,[Il]:Pl,[Nl]:Ll,[Fl]:Dl,[Ul]:er};function zS(n){function e(){let B=!1;const xe=new yt;let te=null;const Q=new yt(0,0,0,0);return{setMask:function(ye){te!==ye&&!B&&(n.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){B=ye},setClear:function(ye,_e,Oe,qe,Ke){Ke===!0&&(ye*=qe,_e*=qe,Oe*=qe),xe.set(ye,_e,Oe,qe),Q.equals(xe)===!1&&(n.clearColor(ye,_e,Oe,qe),Q.copy(xe))},reset:function(){B=!1,te=null,Q.set(-1,0,0,0)}}}function t(){let B=!1,xe=!1,te=null,Q=null,ye=null;return{setReversed:function(_e){xe=_e},setTest:function(_e){_e?Se(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(_e){te!==_e&&!B&&(n.depthMask(_e),te=_e)},setFunc:function(_e){if(xe&&(_e=BS[_e]),Q!==_e){switch(_e){case Pl:n.depthFunc(n.NEVER);break;case Il:n.depthFunc(n.ALWAYS);break;case Ll:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Dl:n.depthFunc(n.EQUAL);break;case Ul:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=_e}},setLocked:function(_e){B=_e},setClear:function(_e){ye!==_e&&(n.clearDepth(_e),ye=_e)},reset:function(){B=!1,te=null,Q=null,ye=null}}}function i(){let B=!1,xe=null,te=null,Q=null,ye=null,_e=null,Oe=null,qe=null,Ke=null;return{setTest:function(We){B||(We?Se(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(We){xe!==We&&!B&&(n.stencilMask(We),xe=We)},setFunc:function(We,it,Ce){(te!==We||Q!==it||ye!==Ce)&&(n.stencilFunc(We,it,Ce),te=We,Q=it,ye=Ce)},setOp:function(We,it,Ce){(_e!==We||Oe!==it||qe!==Ce)&&(n.stencilOp(We,it,Ce),_e=We,Oe=it,qe=Ce)},setLocked:function(We){B=We},setClear:function(We){Ke!==We&&(n.clearStencil(We),Ke=We)},reset:function(){B=!1,xe=null,te=null,Q=null,ye=null,_e=null,Oe=null,qe=null,Ke=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],m=null,_=!1,x=null,d=null,p=null,b=null,M=null,w=null,O=null,P=new ot(0,0,0),R=0,F=!1,J=null,y=null,E=null,j=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,k=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ee)[1]),re=k>=1):ee.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),re=k>=2);let W=null,me={};const ve=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Ee=new yt().fromArray(ve),Be=new yt().fromArray(ge);function oe(B,xe,te,Q){const ye=new Uint8Array(4),_e=n.createTexture();n.bindTexture(B,_e),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<te;Oe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(xe+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return _e}const fe={};fe[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),r.setFunc(er),I(!1),D(Ju),Se(n.CULL_FACE),g(Bi);function Se(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function U(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function le(B,xe){return h[B]!==xe?(n.bindFramebuffer(B,xe),h[B]=xe,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function ae(B,xe){let te=f,Q=!1;if(B){te=u.get(xe),te===void 0&&(te=[],u.set(xe,te));const ye=B.textures;if(te.length!==ye.length||te[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Oe=ye.length;_e<Oe;_e++)te[_e]=n.COLOR_ATTACHMENT0+_e;te.length=ye.length,Q=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,Q=!0);Q&&n.drawBuffers(te)}function he(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const we={[cs]:n.FUNC_ADD,[zg]:n.FUNC_SUBTRACT,[Gg]:n.FUNC_REVERSE_SUBTRACT};we[Hg]=n.MIN,we[kg]=n.MAX;const ne={[Vg]:n.ZERO,[Wg]:n.ONE,[Xg]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[Zg]:n.SRC_ALPHA_SATURATE,[jg]:n.DST_COLOR,[Yg]:n.DST_ALPHA,[qg]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[Kg]:n.ONE_MINUS_DST_COLOR,[$g]:n.ONE_MINUS_DST_ALPHA,[Jg]:n.CONSTANT_COLOR,[Qg]:n.ONE_MINUS_CONSTANT_COLOR,[e_]:n.CONSTANT_ALPHA,[t_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,xe,te,Q,ye,_e,Oe,qe,Ke,We){if(B===Bi){_===!0&&(U(n.BLEND),_=!1);return}if(_===!1&&(Se(n.BLEND),_=!0),B!==Bg){if(B!==x||We!==F){if((d!==cs||M!==cs)&&(n.blendEquation(n.FUNC_ADD),d=cs,M=cs),We)switch(B){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qu:n.blendFunc(n.ONE,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case th:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,b=null,w=null,O=null,P.set(0,0,0),R=0,x=B,F=We}return}ye=ye||xe,_e=_e||te,Oe=Oe||Q,(xe!==d||ye!==M)&&(n.blendEquationSeparate(we[xe],we[ye]),d=xe,M=ye),(te!==p||Q!==b||_e!==w||Oe!==O)&&(n.blendFuncSeparate(ne[te],ne[Q],ne[_e],ne[Oe]),p=te,b=Q,w=_e,O=Oe),(qe.equals(P)===!1||Ke!==R)&&(n.blendColor(qe.r,qe.g,qe.b,Ke),P.copy(qe),R=Ke),x=B,F=!1}function T(B,xe){B.side===lt?U(n.CULL_FACE):Se(n.CULL_FACE);let te=B.side===hn;xe&&(te=!te),I(te),B.blending===Ys&&B.transparent===!1?g(Bi):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const Q=B.stencilWrite;o.setTest(Q),Q&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Y(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(B){J!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),J=B)}function D(B){B!==Ng?(Se(n.CULL_FACE),B!==y&&(B===Ju?n.cullFace(n.BACK):B===Fg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),y=B}function N(B){B!==E&&(re&&n.lineWidth(B),E=B)}function Y(B,xe,te){B?(Se(n.POLYGON_OFFSET_FILL),(j!==xe||H!==te)&&(n.polygonOffset(xe,te),j=xe,H=te)):U(n.POLYGON_OFFSET_FILL)}function K(B){B?Se(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function S(B){B===void 0&&(B=n.TEXTURE0+Z-1),W!==B&&(n.activeTexture(B),W=B)}function v(B,xe,te){te===void 0&&(W===null?te=n.TEXTURE0+Z-1:te=W);let Q=me[te];Q===void 0&&(Q={type:void 0,texture:void 0},me[te]=Q),(Q.type!==B||Q.texture!==xe)&&(W!==te&&(n.activeTexture(te),W=te),n.bindTexture(B,xe||fe[B]),Q.type=B,Q.texture=xe)}function C(){const B=me[W];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(B){Ee.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ee.copy(B))}function be(B){Be.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Be.copy(B))}function ke(B,xe){let te=l.get(xe);te===void 0&&(te=new WeakMap,l.set(xe,te));let Q=te.get(B);Q===void 0&&(Q=n.getUniformBlockIndex(xe,B.name),te.set(B,Q))}function Le(B,xe){const Q=l.get(xe).get(B);a.get(xe)!==Q&&(n.uniformBlockBinding(xe,Q,B.__bindingPointIndex),a.set(xe,Q))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,me={},h={},u=new WeakMap,f=[],m=null,_=!1,x=null,d=null,p=null,b=null,M=null,w=null,O=null,P=new ot(0,0,0),R=0,F=!1,J=null,y=null,E=null,j=null,H=null,Ee.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:U,bindFramebuffer:le,drawBuffers:ae,useProgram:he,setBlending:g,setMaterial:T,setFlipSided:I,setCullFace:D,setLineWidth:N,setPolygonOffset:Y,setScissorTest:K,activeTexture:S,bindTexture:v,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:z,texImage2D:Me,texImage3D:Pe,updateUBOMapping:ke,uniformBlockBinding:Le,texStorage2D:Te,texStorage3D:ue,texSubImage2D:G,texSubImage3D:de,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:Ie,viewport:be,reset:He}}function qh(n,e,t,i){const s=GS(i);switch(t){case Md:return n*e;case wd:return n*e;case Ed:return n*e*2;case bd:return n*e/s.components*s.byteLength;case Wc:return n*e/s.components*s.byteLength;case Td:return n*e*2/s.components*s.byteLength;case Xc:return n*e*2/s.components*s.byteLength;case Sd:return n*e*3/s.components*s.byteLength;case Fn:return n*e*4/s.components*s.byteLength;case qc:return n*e*4/s.components*s.byteLength;case No:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case kl:return Math.max(n,16)*Math.max(e,8)/4;case zl:case Hl:return Math.max(n,8)*Math.max(e,8)/2;case Vl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zo:case oc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ad:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function GS(n){switch(n){case vi:case vd:return{byteLength:1,components:1};case kr:case xd:case Kr:return{byteLength:2,components:1};case kc:case Vc:return{byteLength:2,components:4};case ms:case Hc:case pi:return{byteLength:4,components:1};case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function HS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):Wr("canvas")}function x(S,v,C){let V=1;const z=K(S);if((z.width>C||z.height>C)&&(V=C/Math.max(z.width,z.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(V*z.width),de=Math.floor(V*z.height);u===void 0&&(u=_(G,de));const ce=v?_(G,de):u;return ce.width=G,ce.height=de,ce.getContext("2d").drawImage(S,0,0,G,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+G+"x"+de+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),S;return S}function d(S){return S.generateMipmaps&&S.minFilter!==En&&S.minFilter!==Un}function p(S){n.generateMipmap(S)}function b(S,v,C,V,z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=v;if(v===n.RED&&(C===n.FLOAT&&(G=n.R32F),C===n.HALF_FLOAT&&(G=n.R16F),C===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.R8UI),C===n.UNSIGNED_SHORT&&(G=n.R16UI),C===n.UNSIGNED_INT&&(G=n.R32UI),C===n.BYTE&&(G=n.R8I),C===n.SHORT&&(G=n.R16I),C===n.INT&&(G=n.R32I)),v===n.RG&&(C===n.FLOAT&&(G=n.RG32F),C===n.HALF_FLOAT&&(G=n.RG16F),C===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RG8UI),C===n.UNSIGNED_SHORT&&(G=n.RG16UI),C===n.UNSIGNED_INT&&(G=n.RG32UI),C===n.BYTE&&(G=n.RG8I),C===n.SHORT&&(G=n.RG16I),C===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGB8UI),C===n.UNSIGNED_SHORT&&(G=n.RGB16UI),C===n.UNSIGNED_INT&&(G=n.RGB32UI),C===n.BYTE&&(G=n.RGB8I),C===n.SHORT&&(G=n.RGB16I),C===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),C===n.UNSIGNED_INT&&(G=n.RGBA32UI),C===n.BYTE&&(G=n.RGBA8I),C===n.SHORT&&(G=n.RGBA16I),C===n.INT&&(G=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){const de=z?$o:gt.getTransfer(V);C===n.FLOAT&&(G=n.RGBA32F),C===n.HALF_FLOAT&&(G=n.RGBA16F),C===n.UNSIGNED_BYTE&&(G=de===Tt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function M(S,v){let C;return S?v===null||v===ms||v===ir?C=n.DEPTH24_STENCIL8:v===pi?C=n.DEPTH32F_STENCIL8:v===kr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ms||v===ir?C=n.DEPTH_COMPONENT24:v===pi?C=n.DEPTH_COMPONENT32F:v===kr&&(C=n.DEPTH_COMPONENT16),C}function w(S,v){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==En&&S.minFilter!==Un?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function O(S){const v=S.target;v.removeEventListener("dispose",O),R(v),v.isVideoTexture&&h.delete(v)}function P(S){const v=S.target;v.removeEventListener("dispose",P),J(v)}function R(S){const v=i.get(S);if(v.__webglInit===void 0)return;const C=S.source,V=f.get(C);if(V){const z=V[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&F(S),Object.keys(V).length===0&&f.delete(C)}i.remove(S)}function F(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const C=S.source,V=f.get(C);delete V[v.__cacheKey],o.memory.textures--}function J(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let z=0;z<v.__webglFramebuffer[V].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[V][z]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=S.textures;for(let V=0,z=C.length;V<z;V++){const G=i.get(C[V]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(C[V])}i.remove(S)}let y=0;function E(){y=0}function j(){const S=y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),y+=1,S}function H(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Z(S,v){const C=i.get(S);if(S.isVideoTexture&&N(S),S.isRenderTargetTexture===!1&&S.version>0&&C.__version!==S.version){const V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(C,S,v);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function re(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Be(C,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function k(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){Be(C,S,v);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function ee(S,v){const C=i.get(S);if(S.version>0&&C.__version!==S.version){oe(C,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const W={[Dt]:n.REPEAT,[hs]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},me={[En]:n.NEAREST,[h_]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},ve={[m_]:n.NEVER,[M_]:n.ALWAYS,[g_]:n.LESS,[Cd]:n.LEQUAL,[__]:n.EQUAL,[y_]:n.GEQUAL,[v_]:n.GREATER,[x_]:n.NOTEQUAL};function ge(S,v){if(v.type===pi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Un||v.magFilter===Ua||v.magFilter===ao||v.magFilter===fs||v.minFilter===Un||v.minFilter===Ua||v.minFilter===ao||v.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,W[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,W[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,W[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===En||v.minFilter!==ao&&v.minFilter!==fs||v.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ee(S,v){let C=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",O));const V=v.source;let z=f.get(V);z===void 0&&(z={},f.set(V,z));const G=H(v);if(G!==S.__cacheKey){z[G]===void 0&&(z[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),z[G].usedTimes++;const de=z[S.__cacheKey];de!==void 0&&(z[S.__cacheKey].usedTimes--,de.usedTimes===0&&F(v)),S.__cacheKey=G,S.__webglTexture=z[G].texture}return C}function Be(S,v,C){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const z=Ee(S,v),G=v.source;t.bindTexture(V,S.__webglTexture,n.TEXTURE0+C);const de=i.get(G);if(G.version!==de.__version||z===!0){t.activeTexture(n.TEXTURE0+C);const ce=gt.getPrimaries(gt.workingColorSpace),pe=v.colorSpace===Oi?null:gt.getPrimaries(v.colorSpace),Te=v.colorSpace===Oi||ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ue=x(v.image,!1,s.maxTextureSize);ue=Y(v,ue);const Me=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type);let Ie=b(v.internalFormat,Me,Pe,v.colorSpace,v.isVideoTexture);ge(V,v);let be;const ke=v.mipmaps,Le=v.isVideoTexture!==!0,He=de.__version===void 0||z===!0,B=G.dataReady,xe=w(v,ue);if(v.isDepthTexture)Ie=M(v.format===sr,v.type),He&&(Le?t.texStorage2D(n.TEXTURE_2D,1,Ie,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Me,Pe,null));else if(v.isDataTexture)if(ke.length>0){Le&&He&&t.texStorage2D(n.TEXTURE_2D,xe,Ie,ke[0].width,ke[0].height);for(let te=0,Q=ke.length;te<Q;te++)be=ke[te],Le?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,be.width,be.height,Me,Pe,be.data):t.texImage2D(n.TEXTURE_2D,te,Ie,be.width,be.height,0,Me,Pe,be.data);v.generateMipmaps=!1}else Le?(He&&t.texStorage2D(n.TEXTURE_2D,xe,Ie,ue.width,ue.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Me,Pe,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Me,Pe,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Le&&He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ie,ke[0].width,ke[0].height,ue.depth);for(let te=0,Q=ke.length;te<Q;te++)if(be=ke[te],v.format!==Fn)if(Me!==null)if(Le){if(B)if(v.layerUpdates.size>0){const ye=qh(be.width,be.height,v.format,v.type);for(const _e of v.layerUpdates){const Oe=be.data.subarray(_e*ye/be.data.BYTES_PER_ELEMENT,(_e+1)*ye/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,_e,be.width,be.height,1,Me,Oe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,ue.depth,Me,be.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ie,be.width,be.height,ue.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,ue.depth,Me,Pe,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ie,be.width,be.height,ue.depth,0,Me,Pe,be.data)}else{Le&&He&&t.texStorage2D(n.TEXTURE_2D,xe,Ie,ke[0].width,ke[0].height);for(let te=0,Q=ke.length;te<Q;te++)be=ke[te],v.format!==Fn?Me!==null?Le?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,be.width,be.height,Me,be.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ie,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,be.width,be.height,Me,Pe,be.data):t.texImage2D(n.TEXTURE_2D,te,Ie,be.width,be.height,0,Me,Pe,be.data)}else if(v.isDataArrayTexture)if(Le){if(He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ie,ue.width,ue.height,ue.depth),B)if(v.layerUpdates.size>0){const te=qh(ue.width,ue.height,v.format,v.type);for(const Q of v.layerUpdates){const ye=ue.data.subarray(Q*te/ue.data.BYTES_PER_ELEMENT,(Q+1)*te/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ue.width,ue.height,1,Me,Pe,ye)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,Pe,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,Me,Pe,ue.data);else if(v.isData3DTexture)Le?(He&&t.texStorage3D(n.TEXTURE_3D,xe,Ie,ue.width,ue.height,ue.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,Pe,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,Me,Pe,ue.data);else if(v.isFramebufferTexture){if(He)if(Le)t.texStorage2D(n.TEXTURE_2D,xe,Ie,ue.width,ue.height);else{let te=ue.width,Q=ue.height;for(let ye=0;ye<xe;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ie,te,Q,0,Me,Pe,null),te>>=1,Q>>=1}}else if(ke.length>0){if(Le&&He){const te=K(ke[0]);t.texStorage2D(n.TEXTURE_2D,xe,Ie,te.width,te.height)}for(let te=0,Q=ke.length;te<Q;te++)be=ke[te],Le?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Me,Pe,be):t.texImage2D(n.TEXTURE_2D,te,Ie,Me,Pe,be);v.generateMipmaps=!1}else if(Le){if(He){const te=K(ue);t.texStorage2D(n.TEXTURE_2D,xe,Ie,te.width,te.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Pe,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Me,Pe,ue);d(v)&&p(V),de.__version=G.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function oe(S,v,C){if(v.image.length!==6)return;const V=Ee(S,v),z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+C);const G=i.get(z);if(z.version!==G.__version||V===!0){t.activeTexture(n.TEXTURE0+C);const de=gt.getPrimaries(gt.workingColorSpace),ce=v.colorSpace===Oi?null:gt.getPrimaries(v.colorSpace),pe=v.colorSpace===Oi||de===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let Q=0;Q<6;Q++)!Te&&!ue?Me[Q]=x(v.image[Q],!0,s.maxCubemapSize):Me[Q]=ue?v.image[Q].image:v.image[Q],Me[Q]=Y(v,Me[Q]);const Pe=Me[0],Ie=r.convert(v.format,v.colorSpace),be=r.convert(v.type),ke=b(v.internalFormat,Ie,be,v.colorSpace),Le=v.isVideoTexture!==!0,He=G.__version===void 0||V===!0,B=z.dataReady;let xe=w(v,Pe);ge(n.TEXTURE_CUBE_MAP,v);let te;if(Te){Le&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ke,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){te=Me[Q].mipmaps;for(let ye=0;ye<te.length;ye++){const _e=te[ye];v.format!==Fn?Ie!==null?Le?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,_e.width,_e.height,Ie,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,ke,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,_e.width,_e.height,Ie,be,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,ke,_e.width,_e.height,0,Ie,be,_e.data)}}}else{if(te=v.mipmaps,Le&&He){te.length>0&&xe++;const Q=K(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ke,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ue){Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Me[Q].width,Me[Q].height,Ie,be,Me[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ke,Me[Q].width,Me[Q].height,0,Ie,be,Me[Q].data);for(let ye=0;ye<te.length;ye++){const Oe=te[ye].image[Q].image;Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Oe.width,Oe.height,Ie,be,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,ke,Oe.width,Oe.height,0,Ie,be,Oe.data)}}else{Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,be,Me[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ke,Ie,be,Me[Q]);for(let ye=0;ye<te.length;ye++){const _e=te[ye];Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Ie,be,_e.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,ke,Ie,be,_e.image[Q])}}}d(v)&&p(n.TEXTURE_CUBE_MAP),G.__version=z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function fe(S,v,C,V,z,G){const de=r.convert(C.format,C.colorSpace),ce=r.convert(C.type),pe=b(C.internalFormat,de,ce,C.colorSpace);if(!i.get(v).__hasExternalTextures){const ue=Math.max(1,v.width>>G),Me=Math.max(1,v.height>>G);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?t.texImage3D(z,G,pe,ue,Me,v.depth,0,de,ce,null):t.texImage2D(z,G,pe,ue,Me,0,de,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),D(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,z,i.get(C).__webglTexture,0,I(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,z,i.get(C).__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(S,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const V=v.depthTexture,z=V&&V.isDepthTexture?V.type:null,G=M(v.stencilBuffer,z),de=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=I(v);D(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,G,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,S)}else{const V=v.textures;for(let z=0;z<V.length;z++){const G=V[z],de=r.convert(G.format,G.colorSpace),ce=r.convert(G.type),pe=b(G.internalFormat,de,ce,G.colorSpace),Te=I(v);C&&D(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,pe,v.width,v.height):D(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,z=I(v);if(v.depthTexture.format===$s)D(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===sr)D(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function le(S){const v=i.get(S),C=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const V=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",z)};V.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=V}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");U(v.__webglFramebuffer,S)}else if(C){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),Se(v.__webglDepthbuffer[V],S,!1);else{const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Se(v.__webglDepthbuffer,S,!1);else{const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(S,v,C){const V=i.get(S);v!==void 0&&fe(V.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&le(S)}function he(S){const v=S.texture,C=i.get(S),V=i.get(v);S.addEventListener("dispose",P);const z=S.textures,G=S.isWebGLCubeRenderTarget===!0,de=z.length>1;if(de||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),G){C.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ce]=[];for(let pe=0;pe<v.mipmaps.length;pe++)C.__webglFramebuffer[ce][pe]=n.createFramebuffer()}else C.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)C.__webglFramebuffer[ce]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(de)for(let ce=0,pe=z.length;ce<pe;ce++){const Te=i.get(z[ce]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&D(S)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ce=0;ce<z.length;ce++){const pe=z[ce];C.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ce]);const Te=r.convert(pe.format,pe.colorSpace),ue=r.convert(pe.type),Me=b(pe.internalFormat,Te,ue,pe.colorSpace,S.isXRRenderTarget===!0),Pe=I(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Me,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,C.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(C.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ge(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)fe(C.__webglFramebuffer[ce][pe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else fe(C.__webglFramebuffer[ce],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);d(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ce=0,pe=z.length;ce<pe;ce++){const Te=z[ce],ue=i.get(Te);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),ge(n.TEXTURE_2D,Te),fe(C.__webglFramebuffer,S,Te,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),d(Te)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,V.__webglTexture),ge(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)fe(C.__webglFramebuffer[pe],S,v,n.COLOR_ATTACHMENT0,ce,pe);else fe(C.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ce,0);d(v)&&p(ce),t.unbindTexture()}S.depthBuffer&&le(S)}function we(S){const v=S.textures;for(let C=0,V=v.length;C<V;C++){const z=v[C];if(d(z)){const G=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(z).__webglTexture;t.bindTexture(G,de),p(G),t.unbindTexture()}}}const ne=[],g=[];function T(S){if(S.samples>0){if(D(S)===!1){const v=S.textures,C=S.width,V=S.height;let z=n.COLOR_BUFFER_BIT;const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(S),ce=v.length>1;if(ce)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);const Te=i.get(v[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,C,V,0,0,C,V,z,n.NEAREST),l===!0&&(ne.length=0,g.length=0,ne.push(n.COLOR_ATTACHMENT0+pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ne.push(G),g.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);const Te=i.get(v[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(S){return Math.min(s.maxSamples,S.samples)}function D(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(S){const v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Y(S,v){const C=S.colorSpace,V=S.format,z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||C!==Wi&&C!==Oi&&(gt.getTransfer(C)===Tt?(V!==Fn||z!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function K(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=E,this.setTexture2D=Z,this.setTexture2DArray=re,this.setTexture3D=k,this.setTextureCube=ee,this.rebindTextures=ae,this.setupRenderTarget=he,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=D}function kS(n,e){function t(i,s=Oi){let r;const o=gt.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vd)return n.BYTE;if(i===xd)return n.SHORT;if(i===kr)return n.UNSIGNED_SHORT;if(i===Hc)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===Md)return n.ALPHA;if(i===Sd)return n.RGB;if(i===Fn)return n.RGBA;if(i===wd)return n.LUMINANCE;if(i===Ed)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===bd)return n.RED;if(i===Wc)return n.RED_INTEGER;if(i===Td)return n.RG;if(i===Xc)return n.RG_INTEGER;if(i===qc)return n.RGBA_INTEGER;if(i===No||i===Fo||i===Oo||i===Bo)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zl||i===Gl||i===Hl||i===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Wl||i===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vl||i===Wl)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ql||i===Yl||i===$l||i===jl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ql)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===oc||i===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===zo)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ad||i===lc||i===cc||i===uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class VS extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class je extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WS={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),p=this._getHandJoint(c,x);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const XS=`
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

}`;class YS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new cn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:XS,fragmentShader:qS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new L(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $S extends ar{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const x=new YS,d=t.getContextAttributes();let p=null,b=null;const M=[],w=[],O=new Ue;let P=null;const R=new Ot;R.layers.enable(1),R.viewport=new yt;const F=new Ot;F.layers.enable(2),F.viewport=new yt;const J=[R,F],y=new VS;y.layers.enable(1),y.layers.enable(2);let E=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let fe=M[oe];return fe===void 0&&(fe=new ll,M[oe]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(oe){let fe=M[oe];return fe===void 0&&(fe=new ll,M[oe]=fe),fe.getGripSpace()},this.getHand=function(oe){let fe=M[oe];return fe===void 0&&(fe=new ll,M[oe]=fe),fe.getHandSpace()};function H(oe){const fe=w.indexOf(oe.inputSource);if(fe===-1)return;const Se=M[fe];Se!==void 0&&(Se.update(oe.inputSource,oe.frame,c||o),Se.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",re);for(let oe=0;oe<M.length;oe++){const fe=w[oe];fe!==null&&(w[oe]=null,M[oe].disconnect(fe))}E=null,j=null,x.reset(),e.setRenderTarget(p),m=null,f=null,u=null,s=null,b=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",re),d.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const fe={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new gs(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let fe=null,Se=null,U=null;d.depth&&(U=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=d.stencil?sr:$s,Se=d.stencil?ir:ms);const le={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new gs(f.textureWidth,f.textureHeight,{format:Fn,type:vi,depthTexture:new kd(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(oe){for(let fe=0;fe<oe.removed.length;fe++){const Se=oe.removed[fe],U=w.indexOf(Se);U>=0&&(w[U]=null,M[U].disconnect(Se))}for(let fe=0;fe<oe.added.length;fe++){const Se=oe.added[fe];let U=w.indexOf(Se);if(U===-1){for(let ae=0;ae<M.length;ae++)if(ae>=w.length){w.push(Se),U=ae;break}else if(w[ae]===null){w[ae]=Se,U=ae;break}if(U===-1)break}const le=M[U];le&&le.connect(Se)}}const k=new X,ee=new X;function W(oe,fe,Se){k.setFromMatrixPosition(fe.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);const U=k.distanceTo(ee),le=fe.projectionMatrix.elements,ae=Se.projectionMatrix.elements,he=le[14]/(le[10]-1),we=le[14]/(le[10]+1),ne=(le[9]+1)/le[5],g=(le[9]-1)/le[5],T=(le[8]-1)/le[0],I=(ae[8]+1)/ae[0],D=he*T,N=he*I,Y=U/(-T+I),K=Y*-T;if(fe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(K),oe.translateZ(Y),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),le[10]===-1)oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const S=he+Y,v=we+Y,C=D-K,V=N+(U-K),z=ne*we/v*S,G=g*we/v*S;oe.projectionMatrix.makePerspective(C,V,z,G,S,v),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function me(oe,fe){fe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(fe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let fe=oe.near,Se=oe.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),y.near=F.near=R.near=fe,y.far=F.far=R.far=Se,(E!==y.near||j!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,j=y.far);const U=oe.parent,le=y.cameras;me(y,U);for(let ae=0;ae<le.length;ae++)me(le[ae],U);le.length===2?W(y,R,F):y.projectionMatrix.copy(R.projectionMatrix),ve(oe,y,U)};function ve(oe,fe,Se){Se===null?oe.matrix.copy(fe.matrixWorld):(oe.matrix.copy(Se.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(fe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Vr*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ge=null;function Ee(oe,fe){if(h=fe.getViewerPose(c||o),_=fe,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let U=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,U=!0);for(let ae=0;ae<Se.length;ae++){const he=Se[ae];let we=null;if(m!==null)we=m.getViewport(he);else{const g=u.getViewSubImage(f,he);we=g.viewport,ae===0&&(e.setRenderTargetTextures(b,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(b))}let ne=J[ae];ne===void 0&&(ne=new Ot,ne.layers.enable(ae),ne.viewport=new yt,J[ae]=ne),ne.matrix.fromArray(he.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(he.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(we.x,we.y,we.width,we.height),ae===0&&(y.matrix.copy(ne.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),U===!0&&y.cameras.push(ne)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const ae=u.getDepthInformation(Se[0]);ae&&ae.isValid&&ae.texture&&x.init(e,ae,s.renderState)}}for(let Se=0;Se<M.length;Se++){const U=w[Se],le=M[Se];U!==null&&le!==void 0&&le.update(U,fe,c||o)}ge&&ge(oe,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Be=new Gd;Be.setAnimationLoop(Ee),this.setAnimationLoop=function(oe){ge=oe},this.dispose=function(){}}}const rs=new Qn,jS=new Ct;function KS(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Od(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,b,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,w)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),x(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,b,M):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===hn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===hn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,w=b.envMapRotation;M&&(d.envMap.value=M,rs.copy(w),rs.x*=-1,rs.y*=-1,rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),d.envMapRotation.value.setFromMatrix4(jS.makeRotationFromEuler(rs)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,b,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*b,d.scale.value=M*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,b){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){const b=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const w=M.program;i.uniformBlockBinding(b,w)}function c(b,M){let w=s[b.id];w===void 0&&(_(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",d));const O=M.program;i.updateUBOMapping(b,O);const P=e.render.frame;r[b.id]!==P&&(f(b),r[b.id]=P)}function h(b){const M=u();b.__bindingPointIndex=M;const w=n.createBuffer(),O=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=s[b.id],w=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,R=w.length;P<R;P++){const F=Array.isArray(w[P])?w[P]:[w[P]];for(let J=0,y=F.length;J<y;J++){const E=F[J];if(m(E,P,J,O)===!0){const j=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let Z=0;for(let re=0;re<H.length;re++){const k=H[re],ee=x(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,j+Z,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,Z),Z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,M,w,O){const P=b.value,R=M+"_"+w;if(O[R]===void 0)return typeof P=="number"||typeof P=="boolean"?O[R]=P:O[R]=P.clone(),!0;{const F=O[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return O[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function _(b){const M=b.uniforms;let w=0;const O=16;for(let R=0,F=M.length;R<F;R++){const J=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,E=J.length;y<E;y++){const j=J[y],H=Array.isArray(j.value)?j.value:[j.value];for(let Z=0,re=H.length;Z<re;Z++){const k=H[Z],ee=x(k),W=w%O,me=W%ee.boundary,ve=W+me;w+=me,ve!==0&&O-ve<ee.storage&&(w+=O-ve),j.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=ee.storage}}}const P=w%O;return P>0&&(w+=O-P),b.__size=w,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function d(b){const M=b.target;M.removeEventListener("dispose",d);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Xi{constructor(e={}){const{canvas:t=B_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,d=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=zi,this.toneMappingExposure=1;const M=this;let w=!1,O=0,P=0,R=null,F=-1,J=null;const y=new yt,E=new yt;let j=null;const H=new ot(0);let Z=0,re=t.width,k=t.height,ee=1,W=null,me=null;const ve=new yt(0,0,re,k),ge=new yt(0,0,re,k);let Ee=!1;const Be=new Kc;let oe=!1,fe=!1;const Se=new Ct,U=new Ct,le=new X,ae=new yt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ne(){return R===null?ee:1}let g=i;function T(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),g===null){const q="webgl2";if(g=T(q,A),g===null)throw T(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let I,D,N,Y,K,S,v,C,V,z,G,de,ce,pe,Te,ue,Me,Pe,Ie,be,ke,Le,He,B;function xe(){I=new iM(g),I.init(),Le=new kS(g,I),D=new Zy(g,I,e,Le),N=new zS(g),D.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),Y=new oM(g),K=new ES,S=new HS(g,I,N,K,D,Le,Y),v=new Qy(M),C=new nM(M),V=new dv(g),He=new jy(g,V),z=new sM(g,V,Y,He),G=new lM(g,z,V,Y),Ie=new aM(g,D,S),ue=new Jy(K),de=new wS(M,v,C,I,D,He,ue),ce=new KS(M,K),pe=new TS,Te=new LS(I),Pe=new $y(M,v,C,N,G,f,l),Me=new OS(M,G,D),B=new ZS(g,Y,D,N),be=new Ky(g,I,Y),ke=new rM(g,I,Y),Y.programs=de.programs,M.capabilities=D,M.extensions=I,M.properties=K,M.renderLists=pe,M.shadowMap=Me,M.state=N,M.info=Y}xe();const te=new $S(M,g);this.xr=te,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=I.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=I.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(re,k,!1))},this.getSize=function(A){return A.set(re,k)},this.setSize=function(A,q,ie=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,k=q,t.width=Math.floor(A*ee),t.height=Math.floor(q*ee),ie===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(re*ee,k*ee).floor()},this.setDrawingBufferSize=function(A,q,ie){re=A,k=q,ee=ie,t.width=Math.floor(A*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,q,ie,se){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,q,ie,se),N.viewport(y.copy(ve).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,q,ie,se){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,q,ie,se),N.scissor(E.copy(ge).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(A){N.setScissorTest(Ee=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(A=!0,q=!0,ie=!0){let se=0;if(A){let $=!1;if(R!==null){const Ae=R.texture.format;$=Ae===qc||Ae===Xc||Ae===Wc}if($){const Ae=R.texture.type,Ne=Ae===vi||Ae===ms||Ae===kr||Ae===ir||Ae===kc||Ae===Vc,ze=Pe.getClearColor(),Ge=Pe.getClearAlpha(),Ye=ze.r,$e=ze.g,Ve=ze.b;Ne?(m[0]=Ye,m[1]=$e,m[2]=Ve,m[3]=Ge,g.clearBufferuiv(g.COLOR,0,m)):(_[0]=Ye,_[1]=$e,_[2]=Ve,_[3]=Ge,g.clearBufferiv(g.COLOR,0,_))}else se|=g.COLOR_BUFFER_BIT}q&&(se|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ie&&(se|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),pe.dispose(),Te.dispose(),K.dispose(),v.dispose(),C.dispose(),G.dispose(),He.dispose(),B.dispose(),de.dispose(),te.dispose(),te.removeEventListener("sessionstart",ct),te.removeEventListener("sessionend",at),st.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Y.autoReset,q=Me.enabled,ie=Me.autoUpdate,se=Me.needsUpdate,$=Me.type;xe(),Y.autoReset=A,Me.enabled=q,Me.autoUpdate=ie,Me.needsUpdate=se,Me.type=$}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oe(A){const q=A.target;q.removeEventListener("dispose",Oe),qe(q)}function qe(A){Ke(A),K.remove(A)}function Ke(A){const q=K.get(A).programs;q!==void 0&&(q.forEach(function(ie){de.releaseProgram(ie)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ie,se,$,Ae){q===null&&(q=he);const Ne=$.isMesh&&$.matrixWorld.determinant()<0,ze=fn(A,q,ie,se,$);N.setMaterial(se,Ne);let Ge=ie.index,Ye=1;if(se.wireframe===!0){if(Ge=z.getWireframeAttribute(ie),Ge===void 0)return;Ye=2}const $e=ie.drawRange,Ve=ie.attributes.position;let vt=$e.start*Ye,bt=($e.start+$e.count)*Ye;Ae!==null&&(vt=Math.max(vt,Ae.start*Ye),bt=Math.min(bt,(Ae.start+Ae.count)*Ye)),Ge!==null?(vt=Math.max(vt,0),bt=Math.min(bt,Ge.count)):Ve!=null&&(vt=Math.max(vt,0),bt=Math.min(bt,Ve.count));const It=bt-vt;if(It<0||It===1/0)return;He.setup($,se,ze,ie,Ge);let dn,dt=be;if(Ge!==null&&(dn=V.get(Ge),dt=ke,dt.setIndex(dn)),$.isMesh)se.wireframe===!0?(N.setLineWidth(se.wireframeLinewidth*ne()),dt.setMode(g.LINES)):dt.setMode(g.TRIANGLES);else if($.isLine){let Xe=se.linewidth;Xe===void 0&&(Xe=1),N.setLineWidth(Xe*ne()),$.isLineSegments?dt.setMode(g.LINES):$.isLineLoop?dt.setMode(g.LINE_LOOP):dt.setMode(g.LINE_STRIP)}else $.isPoints?dt.setMode(g.POINTS):$.isSprite&&dt.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)dt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Xe=$._multiDrawStarts,$t=$._multiDrawCounts,pt=$._multiDrawCount,Cn=Ge?V.get(Ge).bytesPerElement:1,Ms=K.get(se).currentProgram.getUniforms();for(let pn=0;pn<pt;pn++)Ms.setValue(g,"_gl_DrawID",pn),dt.render(Xe[pn]/Cn,$t[pn])}else if($.isInstancedMesh)dt.renderInstances(vt,It,$.count);else if(ie.isInstancedBufferGeometry){const Xe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,$t=Math.min(ie.instanceCount,Xe);dt.renderInstances(vt,It,$t)}else dt.render(vt,It)};function We(A,q,ie){A.transparent===!0&&A.side===lt&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,Rt(A,q,ie),A.side=Hi,A.needsUpdate=!0,Rt(A,q,ie),A.side=lt):Rt(A,q,ie)}this.compile=function(A,q,ie=null){ie===null&&(ie=A),d=Te.get(ie),d.init(q),b.push(d),ie.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),A!==ie&&A.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),d.setupLights();const se=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const ze=Ae[Ne];We(ze,ie,$),se.add(ze)}else We(Ae,ie,$),se.add(Ae)}),b.pop(),d=null,se},this.compileAsync=function(A,q,ie=null){const se=this.compile(A,q,ie);return new Promise($=>{function Ae(){if(se.forEach(function(Ne){K.get(Ne).currentProgram.isReady()&&se.delete(Ne)}),se.size===0){$(A);return}setTimeout(Ae,10)}I.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let it=null;function Ce(A){it&&it(A)}function ct(){st.stop()}function at(){st.start()}const st=new Gd;st.setAnimationLoop(Ce),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(A){it=A,te.setAnimationLoop(A),A===null?st.stop():st.start()},te.addEventListener("sessionstart",ct),te.addEventListener("sessionend",at),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(q),q=te.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,q,R),d=Te.get(A,b.length),d.init(q),b.push(d),U.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Be.setFromProjectionMatrix(U),fe=this.localClippingEnabled,oe=ue.init(this.clippingPlanes,fe),x=pe.get(A,p.length),x.init(),p.push(x),te.enabled===!0&&te.isPresenting===!0){const Ae=M.xr.getDepthSensingMesh();Ae!==null&&ut(Ae,q,-1/0,M.sortObjects)}ut(A,q,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(W,me),we=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,we&&Pe.addToRenderList(x,A),this.info.render.frame++,oe===!0&&ue.beginShadows();const ie=d.state.shadowsArray;Me.render(ie,A,q),oe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=x.opaque,$=x.transmissive;if(d.setupLights(),q.isArrayCamera){const Ae=q.cameras;if($.length>0)for(let Ne=0,ze=Ae.length;Ne<ze;Ne++){const Ge=Ae[Ne];St(se,$,A,Ge)}we&&Pe.render(A);for(let Ne=0,ze=Ae.length;Ne<ze;Ne++){const Ge=Ae[Ne];ht(x,A,Ge,Ge.viewport)}}else $.length>0&&St(se,$,A,q),we&&Pe.render(A),ht(x,A,q);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,q),He.resetDefaultState(),F=-1,J=null,b.pop(),b.length>0?(d=b[b.length-1],oe===!0&&ue.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function ut(A,q,ie,se){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){se&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);const Ne=G.update(A),ze=A.material;ze.visible&&x.push(A,Ne,ze,ie,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const Ne=G.update(A),ze=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ae.copy(Ne.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(U)),Array.isArray(ze)){const Ge=Ne.groups;for(let Ye=0,$e=Ge.length;Ye<$e;Ye++){const Ve=Ge[Ye],vt=ze[Ve.materialIndex];vt&&vt.visible&&x.push(A,Ne,vt,ie,ae.z,Ve)}}else ze.visible&&x.push(A,Ne,ze,ie,ae.z,null)}}const Ae=A.children;for(let Ne=0,ze=Ae.length;Ne<ze;Ne++)ut(Ae[Ne],q,ie,se)}function ht(A,q,ie,se){const $=A.opaque,Ae=A.transmissive,Ne=A.transparent;d.setupLightsView(ie),oe===!0&&ue.setGlobalState(M.clippingPlanes,ie),se&&N.viewport(y.copy(se)),$.length>0&&ft($,q,ie),Ae.length>0&&ft(Ae,q,ie),Ne.length>0&&ft(Ne,q,ie),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function St(A,q,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[se.id]===void 0&&(d.state.transmissionRenderTarget[se.id]=new gs(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Kr:vi,minFilter:fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const Ae=d.state.transmissionRenderTarget[se.id],Ne=se.viewport||y;Ae.setSize(Ne.z,Ne.w);const ze=M.getRenderTarget();M.setRenderTarget(Ae),M.getClearColor(H),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),we&&Pe.render(ie);const Ge=M.toneMapping;M.toneMapping=zi;const Ye=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),d.setupLightsView(se),oe===!0&&ue.setGlobalState(M.clippingPlanes,se),ft(A,ie,se),S.updateMultisampleRenderTarget(Ae),S.updateRenderTargetMipmap(Ae),I.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ve=0,vt=q.length;Ve<vt;Ve++){const bt=q[Ve],It=bt.object,dn=bt.geometry,dt=bt.material,Xe=bt.group;if(dt.side===lt&&It.layers.test(se.layers)){const $t=dt.side;dt.side=hn,dt.needsUpdate=!0,Gt(It,ie,se,dn,dt,Xe),dt.side=$t,dt.needsUpdate=!0,$e=!0}}$e===!0&&(S.updateMultisampleRenderTarget(Ae),S.updateRenderTargetMipmap(Ae))}M.setRenderTarget(ze),M.setClearColor(H,Z),Ye!==void 0&&(se.viewport=Ye),M.toneMapping=Ge}function ft(A,q,ie){const se=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Ae=A.length;$<Ae;$++){const Ne=A[$],ze=Ne.object,Ge=Ne.geometry,Ye=se===null?Ne.material:se,$e=Ne.group;ze.layers.test(ie.layers)&&Gt(ze,q,ie,Ge,Ye,$e)}}function Gt(A,q,ie,se,$,Ae){A.onBeforeRender(M,q,ie,se,$,Ae),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(M,q,ie,se,A,Ae),$.transparent===!0&&$.side===lt&&$.forceSinglePass===!1?($.side=hn,$.needsUpdate=!0,M.renderBufferDirect(ie,q,se,$,A,Ae),$.side=Hi,$.needsUpdate=!0,M.renderBufferDirect(ie,q,se,$,A,Ae),$.side=lt):M.renderBufferDirect(ie,q,se,$,A,Ae),A.onAfterRender(M,q,ie,se,$,Ae)}function Rt(A,q,ie){q.isScene!==!0&&(q=he);const se=K.get(A),$=d.state.lights,Ae=d.state.shadowsArray,Ne=$.state.version,ze=de.getParameters(A,$.state,Ae,q,ie),Ge=de.getProgramCacheKey(ze);let Ye=se.programs;se.environment=A.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",Oe),Ye=new Map,se.programs=Ye);let $e=Ye.get(Ge);if($e!==void 0){if(se.currentProgram===$e&&se.lightsStateVersion===Ne)return Rn(A,ze),$e}else ze.uniforms=de.getUniforms(A),A.onBeforeCompile(ze,M),$e=de.acquireProgram(ze,Ge),Ye.set(Ge,$e),se.uniforms=ze.uniforms;const Ve=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=ue.uniform),Rn(A,ze),se.needsLights=un(A),se.lightsStateVersion=Ne,se.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=$e,se.uniformsList=null,$e}function Vn(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Ho.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Rn(A,q){const ie=K.get(A);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function fn(A,q,ie,se,$){q.isScene!==!0&&(q=he),S.resetTextureUnits();const Ae=q.fog,Ne=se.isMeshStandardMaterial?q.environment:null,ze=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wi,Ge=(se.isMeshStandardMaterial?C:v).get(se.envMap||Ne),Ye=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,$e=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ve=!!ie.morphAttributes.position,vt=!!ie.morphAttributes.normal,bt=!!ie.morphAttributes.color;let It=zi;se.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(It=M.toneMapping);const dn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,dt=dn!==void 0?dn.length:0,Xe=K.get(se),$t=d.state.lights;if(oe===!0&&(fe===!0||A!==J)){const Sn=A===J&&se.id===F;ue.setState(se,A,Sn)}let pt=!1;se.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==$t.state.version||Xe.outputColorSpace!==ze||$.isBatchedMesh&&Xe.batching===!1||!$.isBatchedMesh&&Xe.batching===!0||$.isBatchedMesh&&Xe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Xe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Xe.instancing===!1||!$.isInstancedMesh&&Xe.instancing===!0||$.isSkinnedMesh&&Xe.skinning===!1||!$.isSkinnedMesh&&Xe.skinning===!0||$.isInstancedMesh&&Xe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xe.instancingMorph===!1&&$.morphTexture!==null||Xe.envMap!==Ge||se.fog===!0&&Xe.fog!==Ae||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ue.numPlanes||Xe.numIntersection!==ue.numIntersection)||Xe.vertexAlphas!==Ye||Xe.vertexTangents!==$e||Xe.morphTargets!==Ve||Xe.morphNormals!==vt||Xe.morphColors!==bt||Xe.toneMapping!==It||Xe.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,Xe.__version=se.version);let Cn=Xe.currentProgram;pt===!0&&(Cn=Rt(se,q,$));let Ms=!1,pn=!1,_a=!1;const Lt=Cn.getUniforms(),wi=Xe.uniforms;if(N.useProgram(Cn.program)&&(Ms=!0,pn=!0,_a=!0),se.id!==F&&(F=se.id,pn=!0),Ms||J!==A){D.reverseDepthBuffer?(Se.copy(A.projectionMatrix),G_(Se),H_(Se),Lt.setValue(g,"projectionMatrix",Se)):Lt.setValue(g,"projectionMatrix",A.projectionMatrix),Lt.setValue(g,"viewMatrix",A.matrixWorldInverse);const Sn=Lt.map.cameraPosition;Sn!==void 0&&Sn.setValue(g,le.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Lt.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Lt.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,pn=!0,_a=!0)}if($.isSkinnedMesh){Lt.setOptional(g,$,"bindMatrix"),Lt.setOptional(g,$,"bindMatrixInverse");const Sn=$.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Lt.setValue(g,"boneTexture",Sn.boneTexture,S))}$.isBatchedMesh&&(Lt.setOptional(g,$,"batchingTexture"),Lt.setValue(g,"batchingTexture",$._matricesTexture,S),Lt.setOptional(g,$,"batchingIdTexture"),Lt.setValue(g,"batchingIdTexture",$._indirectTexture,S),Lt.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&Lt.setValue(g,"batchingColorTexture",$._colorsTexture,S));const va=ie.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0)&&Ie.update($,ie,Cn),(pn||Xe.receiveShadow!==$.receiveShadow)&&(Xe.receiveShadow=$.receiveShadow,Lt.setValue(g,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(wi.envMap.value=Ge,wi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(wi.envMapIntensity.value=q.environmentIntensity),pn&&(Lt.setValue(g,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&Wn(wi,_a),Ae&&se.fog===!0&&ce.refreshFogUniforms(wi,Ae),ce.refreshMaterialUniforms(wi,se,ee,k,d.state.transmissionRenderTarget[A.id]),Ho.upload(g,Vn(Xe),wi,S)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ho.upload(g,Vn(Xe),wi,S),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Lt.setValue(g,"center",$.center),Lt.setValue(g,"modelViewMatrix",$.modelViewMatrix),Lt.setValue(g,"normalMatrix",$.normalMatrix),Lt.setValue(g,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Sn=se.uniformsGroups;for(let xa=0,ip=Sn.length;xa<ip;xa++){const nu=Sn[xa];B.update(nu,Cn),B.bind(nu,Cn)}}return Cn}function Wn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function un(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,q,ie){K.get(A.texture).__webglTexture=q,K.get(A.depthTexture).__webglTexture=ie;const se=K.get(A);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const ie=K.get(A);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ie=0){R=A,O=q,P=ie;let se=!0,$=null,Ae=!1,Ne=!1;if(A){const Ge=K.get(A);if(Ge.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),se=!1;else if(Ge.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(Ge.__hasExternalTextures)S.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(Ge.__boundDepthTexture!==Ve){if(Ve!==null&&K.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ne=!0);const $e=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[q])?$=$e[q][ie]:$=$e[q],Ae=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?$=K.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[ie]:$=$e,y.copy(A.viewport),E.copy(A.scissor),j=A.scissorTest}else y.copy(ve).multiplyScalar(ee).floor(),E.copy(ge).multiplyScalar(ee).floor(),j=Ee;if(N.bindFramebuffer(g.FRAMEBUFFER,$)&&se&&N.drawBuffers(A,$),N.viewport(y),N.scissor(E),N.setScissorTest(j),Ae){const Ge=K.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ge.__webglTexture,ie)}else if(Ne){const Ge=K.get(A.texture),Ye=q||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ge.__webglTexture,ie||0,Ye)}F=-1},this.readRenderTargetPixels=function(A,q,ie,se,$,Ae,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){N.bindFramebuffer(g.FRAMEBUFFER,ze);try{const Ge=A.texture,Ye=Ge.format,$e=Ge.type;if(!D.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-se&&ie>=0&&ie<=A.height-$&&g.readPixels(q,ie,se,$,Le.convert(Ye),Le.convert($e),Ae)}finally{const Ge=R!==null?K.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,q,ie,se,$,Ae,Ne){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){const Ge=A.texture,Ye=Ge.format,$e=Ge.type;if(!D.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-se&&ie>=0&&ie<=A.height-$){N.bindFramebuffer(g.FRAMEBUFFER,ze);const Ve=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Ve),g.bufferData(g.PIXEL_PACK_BUFFER,Ae.byteLength,g.STREAM_READ),g.readPixels(q,ie,se,$,Le.convert(Ye),Le.convert($e),0);const vt=R!==null?K.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,vt);const bt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await z_(g,bt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Ve),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Ae),g.deleteBuffer(Ve),g.deleteSync(bt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,ie=0){A.isTexture!==!0&&(Go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const se=Math.pow(2,-ie),$=Math.floor(A.image.width*se),Ae=Math.floor(A.image.height*se),Ne=q!==null?q.x:0,ze=q!==null?q.y:0;S.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,ie,0,0,Ne,ze,$,Ae),N.unbindTexture()},this.copyTextureToTexture=function(A,q,ie=null,se=null,$=0){A.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,A=arguments[1],q=arguments[2],$=arguments[3]||0,ie=null);let Ae,Ne,ze,Ge,Ye,$e;ie!==null?(Ae=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,ze=ie.min.x,Ge=ie.min.y):(Ae=A.image.width,Ne=A.image.height,ze=0,Ge=0),se!==null?(Ye=se.x,$e=se.y):(Ye=0,$e=0);const Ve=Le.convert(q.format),vt=Le.convert(q.type);S.setTexture2D(q,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment);const bt=g.getParameter(g.UNPACK_ROW_LENGTH),It=g.getParameter(g.UNPACK_IMAGE_HEIGHT),dn=g.getParameter(g.UNPACK_SKIP_PIXELS),dt=g.getParameter(g.UNPACK_SKIP_ROWS),Xe=g.getParameter(g.UNPACK_SKIP_IMAGES),$t=A.isCompressedTexture?A.mipmaps[$]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,$t.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,$t.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ze),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ge),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,Ye,$e,Ae,Ne,Ve,vt,$t.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,Ye,$e,$t.width,$t.height,Ve,$t.data):g.texSubImage2D(g.TEXTURE_2D,$,Ye,$e,Ae,Ne,Ve,vt,$t),g.pixelStorei(g.UNPACK_ROW_LENGTH,bt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,It),g.pixelStorei(g.UNPACK_SKIP_PIXELS,dn),g.pixelStorei(g.UNPACK_SKIP_ROWS,dt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Xe),$===0&&q.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(A,q,ie=null,se=null,$=0){A.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,se=arguments[1]||null,A=arguments[2],q=arguments[3],$=arguments[4]||0);let Ae,Ne,ze,Ge,Ye,$e,Ve,vt,bt;const It=A.isCompressedTexture?A.mipmaps[$]:A.image;ie!==null?(Ae=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,ze=ie.max.z-ie.min.z,Ge=ie.min.x,Ye=ie.min.y,$e=ie.min.z):(Ae=It.width,Ne=It.height,ze=It.depth,Ge=0,Ye=0,$e=0),se!==null?(Ve=se.x,vt=se.y,bt=se.z):(Ve=0,vt=0,bt=0);const dn=Le.convert(q.format),dt=Le.convert(q.type);let Xe;if(q.isData3DTexture)S.setTexture3D(q,0),Xe=g.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)S.setTexture2DArray(q,0),Xe=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment);const $t=g.getParameter(g.UNPACK_ROW_LENGTH),pt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Cn=g.getParameter(g.UNPACK_SKIP_PIXELS),Ms=g.getParameter(g.UNPACK_SKIP_ROWS),pn=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,It.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,It.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ge),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ye),g.pixelStorei(g.UNPACK_SKIP_IMAGES,$e),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(Xe,$,Ve,vt,bt,Ae,Ne,ze,dn,dt,It.data):q.isCompressedArrayTexture?g.compressedTexSubImage3D(Xe,$,Ve,vt,bt,Ae,Ne,ze,dn,It.data):g.texSubImage3D(Xe,$,Ve,vt,bt,Ae,Ne,ze,dn,dt,It),g.pixelStorei(g.UNPACK_ROW_LENGTH,$t),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,pt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Cn),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ms),g.pixelStorei(g.UNPACK_SKIP_IMAGES,pn),$===0&&q.generateMipmaps&&g.generateMipmap(Xe),N.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),N.unbindTexture()},this.resetState=function(){O=0,P=0,R=null,N.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yc?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===da?"display-p3":"srgb"}}class qi extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ue:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new X,s=[],r=[],o=[],a=new X,l=new Ct;for(let m=0;m<=e;m++){const _=m/e;s[m]=this.getTangentAt(_,new X)}r[0]=new X,o[0]=new X;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(qt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(qt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jc extends ni{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class JS extends Jc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Co=new X,cl=new Qc,ul=new Qc,hl=new Qc;class QS extends ni{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new X){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Co.subVectors(s[0],s[1]).add(s[0]),c=Co);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);x<1e-4&&(x=1),_<1e-4&&(_=x),d<1e-4&&(d=x),cl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,x,d),ul.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,x,d),hl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,x,d)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ul.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),hl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(cl.calc(l),ul.calc(l),hl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new X().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function ew(n,e){const t=1-n;return t*t*e}function tw(n,e){return 2*(1-n)*n*e}function nw(n,e){return n*n*e}function Ir(n,e,t,i){return ew(n,e)+tw(n,t)+nw(n,i)}function iw(n,e){const t=1-n;return t*t*t*e}function sw(n,e){const t=1-n;return 3*t*t*n*e}function rw(n,e){return 3*(1-n)*n*n*e}function ow(n,e){return n*n*n*e}function Lr(n,e,t,i,s){return iw(n,e)+sw(n,t)+rw(n,i)+ow(n,s)}class Yd extends ni{constructor(e=new Ue,t=new Ue,i=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ue){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,s.x,r.x,o.x,a.x),Lr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aw extends ni{constructor(e=new X,t=new X,i=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,s.x,r.x,o.x,a.x),Lr(e,s.y,r.y,o.y,a.y),Lr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $d extends ni{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lw extends ni{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jd extends ni{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ir(e,s.x,r.x,o.x),Ir(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cw extends ni{constructor(e=new X,t=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ir(e,s.x,r.x,o.x),Ir(e,s.y,r.y,o.y),Ir(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Yh(a,l.x,c.x,h.x,u.x),Yh(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}}var fc=Object.freeze({__proto__:null,ArcCurve:JS,CatmullRomCurve3:QS,CubicBezierCurve:Yd,CubicBezierCurve3:aw,EllipseCurve:Jc,LineCurve:$d,LineCurve3:lw,QuadraticBezierCurve:jd,QuadraticBezierCurve3:cw,SplineCurve:Kd});class uw extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new fc[s.type]().fromJSON(s))}return this}}class dc extends uw{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new $d(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new jd(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Yd(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s),new Ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Kd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Jc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Et extends An{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new X,h=new Ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=i+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ut(o,3)),this.setAttribute("normal",new Ut(a,3)),this.setAttribute("uv",new Ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class At extends An{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let _=0;const x=[],d=i/2;let p=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(f,3)),this.setAttribute("uv",new Ut(m,2));function b(){const w=new X,O=new X;let P=0;const R=(t-e)/i;for(let F=0;F<=r;F++){const J=[],y=F/r,E=y*(t-e)+e;for(let j=0;j<=s;j++){const H=j/s,Z=H*l+a,re=Math.sin(Z),k=Math.cos(Z);O.x=E*re,O.y=-y*i+d,O.z=E*k,u.push(O.x,O.y,O.z),w.set(re,R,k).normalize(),f.push(w.x,w.y,w.z),m.push(H,1-y),J.push(_++)}x.push(J)}for(let F=0;F<s;F++)for(let J=0;J<r;J++){const y=x[J][F],E=x[J+1][F],j=x[J+1][F+1],H=x[J][F+1];e>0&&(h.push(y,E,H),P+=3),t>0&&(h.push(E,j,H),P+=3)}c.addGroup(p,P,0),p+=P}function M(w){const O=_,P=new Ue,R=new X;let F=0;const J=w===!0?e:t,y=w===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,d*y,0),f.push(0,y,0),m.push(.5,.5),_++;const E=_;for(let j=0;j<=s;j++){const Z=j/s*l+a,re=Math.cos(Z),k=Math.sin(Z);R.x=J*k,R.y=d*y,R.z=J*re,u.push(R.x,R.y,R.z),f.push(0,y,0),P.x=re*.5+.5,P.y=k*.5*y+.5,m.push(P.x,P.y),_++}for(let j=0;j<s;j++){const H=O+j,Z=E+j;w===!0?h.push(Z,Z+1,H):h.push(Z+1,Z,H),F+=3}c.addGroup(p,F,w===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mn extends dc{constructor(e){super(e),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new dc().fromJSON(s))}return this}}const hw={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Zd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,m;if(i&&(r=gw(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let _=t;_<s;_+=t)u=n[_],f=n[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Xr(r,o,t,a,l,m,0),o}};function Zd(n,e,t,i,s){let r,o;if(s===Aw(n,e,t,i)>0)for(r=e;r<t;r+=i)o=$h(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=$h(r,n[r],n[r+1],o);return o&&ga(o,o.next)&&(Yr(o),o=o.next),o}function _s(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ga(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Xr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Mw(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?dw(n,i,s,r):fw(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Yr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=pw(_s(n),e,t),Xr(n,e,t,i,s,r,2)):o===2&&mw(n,e,t,i,s,r):Xr(_s(n),e,t,i,s,r,1);break}}}function fw(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=m&&ks(s,a,r,l,o,c,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function dw(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Pt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,d=h>u?h>f?h:f:u>f?u:f,p=pc(m,_,e,t,i),b=pc(x,d,e,t,i);let M=n.prevZ,w=n.nextZ;for(;M&&M.z>=p&&w&&w.z<=b;){if(M.x>=m&&M.x<=x&&M.y>=_&&M.y<=d&&M!==s&&M!==o&&ks(a,h,l,u,c,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=m&&w.x<=x&&w.y>=_&&w.y<=d&&w!==s&&w!==o&&ks(a,h,l,u,c,f,w.x,w.y)&&Pt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=p;){if(M.x>=m&&M.x<=x&&M.y>=_&&M.y<=d&&M!==s&&M!==o&&ks(a,h,l,u,c,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=b;){if(w.x>=m&&w.x<=x&&w.y>=_&&w.y<=d&&w!==s&&w!==o&&ks(a,h,l,u,c,f,w.x,w.y)&&Pt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function pw(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!ga(s,r)&&Jd(s,i,i.next,r)&&qr(s,r)&&qr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Yr(i),Yr(i.next),i=n=r),i=i.next}while(i!==n);return _s(i)}function mw(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ew(o,a)){let l=Qd(o,a);o=_s(o,o.next),l=_s(l,l.next),Xr(o,e,t,i,s,r,0),Xr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function gw(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Zd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ww(c));for(s.sort(_w),r=0;r<s.length;r++)t=vw(s[r],t);return t}function _w(n,e){return n.x-e.x}function vw(n,e){const t=xw(n,e);if(!t)return e;const i=Qd(t,n);return _s(i,i.next),_s(t,t.next)}function xw(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ks(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),qr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&yw(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function yw(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function Mw(n,e,t,i){let s=n;do s.z===0&&(s.z=pc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Sw(s)}function Sw(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function pc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ww(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ks(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ew(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!bw(n,e)&&(qr(n,e)&&qr(e,n)&&Tw(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||ga(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ga(n,e){return n.x===e.x&&n.y===e.y}function Jd(n,e,t,i){const s=Io(Pt(n,e,t)),r=Io(Pt(n,e,i)),o=Io(Pt(t,i,n)),a=Io(Pt(t,i,e));return!!(s!==r&&o!==a||s===0&&Po(n,t,e)||r===0&&Po(n,i,e)||o===0&&Po(t,n,i)||a===0&&Po(t,e,i))}function Po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Io(n){return n>0?1:n<0?-1:0}function bw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Jd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function qr(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function Tw(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Qd(n,e){const t=new mc(n.i,n.x,n.y),i=new mc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function $h(n,e,t,i){const s=new mc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Yr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function mc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Aw(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ks{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ks.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];jh(e),Kh(i,e);let o=e.length;t.forEach(jh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Kh(i,t[l]);const a=hw.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function jh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Kh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Tn extends An{constructor(e=new Mn([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ut(s,3)),this.setAttribute("uv",new Ut(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Rw;let M,w=!1,O,P,R,F;p&&(M=p.getSpacedPoints(h),w=!0,f=!1,O=p.computeFrenetFrames(h,!1),P=new X,R=new X,F=new X),f||(d=0,m=0,_=0,x=0);const J=a.extractPoints(c);let y=J.shape;const E=J.holes;if(!Ks.isClockWise(y)){y=y.reverse();for(let ne=0,g=E.length;ne<g;ne++){const T=E[ne];Ks.isClockWise(T)&&(E[ne]=T.reverse())}}const H=Ks.triangulateShape(y,E),Z=y;for(let ne=0,g=E.length;ne<g;ne++){const T=E[ne];y=y.concat(T)}function re(ne,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(g,T)}const k=y.length,ee=H.length;function W(ne,g,T){let I,D,N;const Y=ne.x-g.x,K=ne.y-g.y,S=T.x-ne.x,v=T.y-ne.y,C=Y*Y+K*K,V=Y*v-K*S;if(Math.abs(V)>Number.EPSILON){const z=Math.sqrt(C),G=Math.sqrt(S*S+v*v),de=g.x-K/z,ce=g.y+Y/z,pe=T.x-v/G,Te=T.y+S/G,ue=((pe-de)*v-(Te-ce)*S)/(Y*v-K*S);I=de+Y*ue-ne.x,D=ce+K*ue-ne.y;const Me=I*I+D*D;if(Me<=2)return new Ue(I,D);N=Math.sqrt(Me/2)}else{let z=!1;Y>Number.EPSILON?S>Number.EPSILON&&(z=!0):Y<-Number.EPSILON?S<-Number.EPSILON&&(z=!0):Math.sign(K)===Math.sign(v)&&(z=!0),z?(I=-K,D=Y,N=Math.sqrt(C)):(I=Y,D=K,N=Math.sqrt(C/2))}return new Ue(I/N,D/N)}const me=[];for(let ne=0,g=Z.length,T=g-1,I=ne+1;ne<g;ne++,T++,I++)T===g&&(T=0),I===g&&(I=0),me[ne]=W(Z[ne],Z[T],Z[I]);const ve=[];let ge,Ee=me.concat();for(let ne=0,g=E.length;ne<g;ne++){const T=E[ne];ge=[];for(let I=0,D=T.length,N=D-1,Y=I+1;I<D;I++,N++,Y++)N===D&&(N=0),Y===D&&(Y=0),ge[I]=W(T[I],T[N],T[Y]);ve.push(ge),Ee=Ee.concat(ge)}for(let ne=0;ne<d;ne++){const g=ne/d,T=m*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+x;for(let D=0,N=Z.length;D<N;D++){const Y=re(Z[D],me[D],I);U(Y.x,Y.y,-T)}for(let D=0,N=E.length;D<N;D++){const Y=E[D];ge=ve[D];for(let K=0,S=Y.length;K<S;K++){const v=re(Y[K],ge[K],I);U(v.x,v.y,-T)}}}const Be=_+x;for(let ne=0;ne<k;ne++){const g=f?re(y[ne],Ee[ne],Be):y[ne];w?(R.copy(O.normals[0]).multiplyScalar(g.x),P.copy(O.binormals[0]).multiplyScalar(g.y),F.copy(M[0]).add(R).add(P),U(F.x,F.y,F.z)):U(g.x,g.y,0)}for(let ne=1;ne<=h;ne++)for(let g=0;g<k;g++){const T=f?re(y[g],Ee[g],Be):y[g];w?(R.copy(O.normals[ne]).multiplyScalar(T.x),P.copy(O.binormals[ne]).multiplyScalar(T.y),F.copy(M[ne]).add(R).add(P),U(F.x,F.y,F.z)):U(T.x,T.y,u/h*ne)}for(let ne=d-1;ne>=0;ne--){const g=ne/d,T=m*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+x;for(let D=0,N=Z.length;D<N;D++){const Y=re(Z[D],me[D],I);U(Y.x,Y.y,u+T)}for(let D=0,N=E.length;D<N;D++){const Y=E[D];ge=ve[D];for(let K=0,S=Y.length;K<S;K++){const v=re(Y[K],ge[K],I);w?U(v.x,v.y+M[h-1].y,M[h-1].x+T):U(v.x,v.y,u+T)}}}oe(),fe();function oe(){const ne=s.length/3;if(f){let g=0,T=k*g;for(let I=0;I<ee;I++){const D=H[I];le(D[2]+T,D[1]+T,D[0]+T)}g=h+d*2,T=k*g;for(let I=0;I<ee;I++){const D=H[I];le(D[0]+T,D[1]+T,D[2]+T)}}else{for(let g=0;g<ee;g++){const T=H[g];le(T[2],T[1],T[0])}for(let g=0;g<ee;g++){const T=H[g];le(T[0]+k*h,T[1]+k*h,T[2]+k*h)}}i.addGroup(ne,s.length/3-ne,0)}function fe(){const ne=s.length/3;let g=0;Se(Z,g),g+=Z.length;for(let T=0,I=E.length;T<I;T++){const D=E[T];Se(D,g),g+=D.length}i.addGroup(ne,s.length/3-ne,1)}function Se(ne,g){let T=ne.length;for(;--T>=0;){const I=T;let D=T-1;D<0&&(D=ne.length-1);for(let N=0,Y=h+d*2;N<Y;N++){const K=k*N,S=k*(N+1),v=g+I+K,C=g+D+K,V=g+D+S,z=g+I+S;ae(v,C,V,z)}}}function U(ne,g,T){l.push(ne),l.push(g),l.push(T)}function le(ne,g,T){he(ne),he(g),he(T);const I=s.length/3,D=b.generateTopUV(i,s,I-3,I-2,I-1);we(D[0]),we(D[1]),we(D[2])}function ae(ne,g,T,I){he(ne),he(g),he(I),he(g),he(T),he(I);const D=s.length/3,N=b.generateSideWallUV(i,s,D-6,D-3,D-2,D-1);we(N[0]),we(N[1]),we(N[3]),we(N[1]),we(N[2]),we(N[3])}function he(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function we(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Cw(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new fc[s.type]().fromJSON(s)),new Tn(i,e.options)}}const Rw={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Ue(r,o),new Ue(a,l),new Ue(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],m=e[s*3+1],_=e[s*3+2],x=e[r*3],d=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ue(o,1-l),new Ue(c,1-u),new Ue(f,1-_),new Ue(x,1-p)]:[new Ue(a,1-l),new Ue(h,1-u),new Ue(m,1-_),new Ue(d,1-p)]}};function Cw(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Re extends An{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new X,f=new X,m=[],_=[],x=[],d=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let w=0;p===0&&o===0?w=.5/t:p===i&&l===Math.PI&&(w=-.5/t);for(let O=0;O<=t;O++){const P=O/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),d.push(P+w,1-M),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const M=h[p][b+1],w=h[p][b],O=h[p+1][b],P=h[p+1][b+1];(p!==0||o>0)&&m.push(M,w,P),(p!==i-1||l<Math.PI)&&m.push(w,O,P)}this.setIndex(m),this.setAttribute("position",new Ut(_,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Re(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class eu extends An{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new X,u=new X,f=new X;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const x=_/s*r,d=m/i*Math.PI*2;u.x=(e+t*Math.cos(d))*Math.cos(x),u.y=(e+t*Math.cos(d))*Math.sin(x),u.z=t*Math.sin(d),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const x=(s+1)*m+_-1,d=(s+1)*(m-1)+_-1,p=(s+1)*(m-1)+_,b=(s+1)*m+_;o.push(x,d,b),o.push(d,p,b)}this.setIndex(o),this.setAttribute("position",new Ut(a,3)),this.setAttribute("normal",new Ut(l,3)),this.setAttribute("uv",new Ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xt extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fe extends Xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Jo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Pw{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const Iw=new Pw;class eo{constructor(e){this.manager=e!==void 0?e:Iw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class Lw extends Error{constructor(e,t){super(e),this.response=t}}class Dw extends eo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Jo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:i,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ui[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,_=m!==0;let x=0;const d=new ReadableStream({start(p){b();function b(){u.read().then(({done:M,value:w})=>{if(M)p.close();else{x+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let P=0,R=h.length;P<R;P++){const F=h[P];F.onProgress&&F.onProgress(O)}p.enqueue(w),b()}},M=>{p.error(M)})}}});return new Response(d)}else throw new Lw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Jo.add(e,c);const h=ui[e];delete ui[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=ui[e];if(h===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Uw extends eo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Jo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Wr("img");function l(){h(),Jo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Yi extends eo{constructor(e){super(e)}load(e,t,i,s){const r=new cn,o=new Uw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class tu extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const fl=new Ct,Zh=new X,Jh=new X;class ep{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qh=new Ct,vr=new X,dl=new X;class Nw extends ep{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(vr),dl.copy(i.position),dl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dl),i.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),Qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}}class $i extends tu{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fw extends ep{constructor(){super(new Hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ji extends tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Fw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ki extends tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ef(){return performance.now()}class Ow{constructor(){this.type="ShapePath",this.color=new ot,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new dc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let M=0,w=p.length;M<w;M++){const O=p[M],P=new Mn;P.curves=O.curves,b.push(P)}return b}function i(p,b){const M=b.length;let w=!1;for(let O=M-1,P=0;P<M;O=P++){let R=b[O],F=b[P],J=F.x-R.x,y=F.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=b[P],J=-J,F=b[O],y=-y),p.y<R.y||p.y>F.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const E=y*(p.x-R.x)-J*(p.y-R.y);if(E===0)return!0;if(E<0)continue;w=!w}}else{if(p.y!==R.y)continue;if(F.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=F.x)return!0}}return w}const s=Ks.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Mn,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;const u=[],f=[];let m=[],_=0,x;f[_]=void 0,m[_]=[];for(let p=0,b=r.length;p<b;p++)a=r[p],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new Mn,p:x},f[_].s.curves=a.curves,h&&_++,m[_]=[]):m[_].push({h:a,p:x[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,b=0;for(let M=0,w=f.length;M<w;M++)u[M]=[];for(let M=0,w=f.length;M<w;M++){const O=m[M];for(let P=0;P<O.length;P++){const R=O[P];let F=!0;for(let J=0;J<f.length;J++)i(R.p,f[J].p)&&(M!==J&&b++,F?(F=!1,u[J].push(R)):p=!0);F&&u[M].push(R)}}b>0&&p===!1&&(m=u)}let d;for(let p=0,b=f.length;p<b;p++){l=f[p].s,c.push(l),d=m[p];for(let M=0,w=d.length;M<w;M++)l.holes.push(d[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);class Zi extends eo{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Dw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},i,s)}parse(e){return new Bw(e)}}class Bw{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=zw(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function zw(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=Gw(h,s,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function Gw(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new Ow;let a,l,c,h,u,f,m,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,p=x.length;d<p;)switch(x[d++]){case"m":a=x[d++]*e+t,l=x[d++]*e+i,o.moveTo(a,l);break;case"l":a=x[d++]*e+t,l=x[d++]*e+i,o.lineTo(a,l);break;case"q":c=x[d++]*e+t,h=x[d++]*e+i,u=x[d++]*e+t,f=x[d++]*e+i,o.quadraticCurveTo(u,f,c,h);break;case"b":c=x[d++]*e+t,h=x[d++]*e+i,u=x[d++]*e+t,f=x[d++]*e+i,m=x[d++]*e+t,_=x[d++]*e+i,o.bezierCurveTo(u,f,m,_,c,h);break}}return{offsetX:r.ha*e,path:o}}class Bt extends Tn{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const s=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const Hw=kn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=null,s=nt(!1),r=nt(!1),o=nt(!1);return ti(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new qi,c=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Xi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new je,f=new Ki(16777215,2);l.add(f);const m=new ji(16777215,4);m.position.set(5,5,5),l.add(m);const _=new $i(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Yi,d=x.load("/3d-bear-arts/assets/lv2.jpg"),p=x.load("/3d-bear-arts/assets/lv2.jpg");d.wrapS=d.wrapT=Dt,p.wrapS=p.wrapT=Dt;const b=new Fe({color:8343336,metalness:0,roughness:.8,bumpMap:d,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),M=new Fe({color:5978654,metalness:0,roughness:.8,bumpMap:d,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),w=new Fe({color:13152668,metalness:.2,roughness:.05,bumpMap:d,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:p,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:lt});new Fe({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const O=new Re(1,32,32,0,Math.PI),P=new L(O,w),R=new L(O,b);P.scale.set(.85,.85,.8),R.scale.set(.85,.85,.8),P.position.y=-.2,R.position.y=-.2,P.rotation.y=Math.PI/2,R.rotation.y=Math.PI*1.5;const F=new Et(1,32),J=new L(F,b);J.scale.set(.85,.85,.8),J.position.set(0,-.2,0),J.rotation.y=Math.PI/2;const y=new je;y.add(P),y.add(R),y.add(J),u.add(y);const E=new Re(.6,32,32,0,Math.PI),j=new L(E,b);j.scale.set(1,.95,.95),j.position.set(0,1,0),j.rotation.y=Math.PI*1.5;const H=new L(E,w);H.scale.set(1,.95,.95),H.position.set(0,1,0),H.rotation.y=Math.PI/2;const Z=new Et(.6,32),re=new L(Z,b);re.position.set(0,1,0),re.rotation.y=Math.PI/2,re.scale.set(1,.95,.95);const k=new je;k.add(j),k.add(H),k.add(re),u.add(k);const ee=new Re(.25,32,32),W=new L(ee,b);W.position.set(-.45,1.35,-.1),u.add(W);const me=new L(ee,w);me.position.set(.45,1.35,-.1),u.add(me);const ve=new Re(.25,32,32,Math.PI/2,Math.PI),ge=new L(ve,M);ge.scale.set(1.1,.6,.8),ge.position.set(0,.84,.5),ge.rotation.y=Math.PI;const Ee=new Re(.25,32,32,Math.PI/2,Math.PI),Be=new L(Ee,w);Be.scale.set(1.1,.6,.8),Be.position.set(0,.84,.5),Be.rotation.y=0;const oe=new Et(.25,32),fe=new L(oe,b);fe.scale.set(.8,.6,.8),fe.position.set(0,.84,.5),fe.rotation.y=Math.PI/2;const Se=new je;Se.add(ge),Se.add(Be),Se.add(fe),u.add(Se);const U=new Mn;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const le={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Fe({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ae=new Tn(U,le),he=new L(ae,b);he.scale.set(.1,.1,.1),he.rotation.z=rt.degToRad(210),he.rotation.x=rt.degToRad(5),he.rotation.y=rt.degToRad(-45),he.position.set(-.4,.9,.45);const we=new L(ae,M);we.scale.set(.6,.5,.5),we.position.set(.35,0,0),we.rotation.y=Math.PI,we.rotation.x=Math.PI;const ne=new L(ae,M);ne.scale.set(.2,.2,.2),ne.position.set(.5,-.1,.2),ne.rotation.y=Math.PI,ne.rotation.x=Math.PI,u.add(ne);const g=new ys(1.3,1.2,.6),T=new L(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const I=new eu(.15,.025,10,100);new Fe({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const D=new L(I,b);D.position.set(.35,.1,.1),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/8,D.rotation.y=Math.PI/14;const N=new L(I,b);N.position.set(.35,.1,.13),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/-8,N.rotation.y=Math.PI/12;const Y=new je;Y.add(T),Y.add(D),Y.add(N),u.add(Y);const K=new Re(.35,32,32),S=new L(K,b);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),u.add(S);const v=new L(K,w);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new At(.2,.22,.6,32),V=new L(C,b);V.position.set(-.4,-1.05,0),u.add(V);const z=new L(C,w);z.position.set(.4,-1.05,0),u.add(z);const G=new Re(.3,32,32),de=new L(G,b);de.scale.set(1,.72,1.5),de.position.set(-.4,-1.45,.17),u.add(de);const ce=new L(G,w);ce.scale.set(1,.72,1.5),ce.position.set(.4,-1.45,.17),u.add(ce);const pe=new Re(.44,32,32),Te=new L(pe,b);Te.position.set(-.15,-.45,-.4),u.add(Te);const ue=new L(pe,w);ue.position.set(.15,-.45,-.4),u.add(ue);const Me=new Re(.18,32,32),Pe=new L(Me,b);Pe.position.set(0,-.35,-.8),u.add(Pe),new Zi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const ye=new Bt("X",{font:Q,size:.2,depth:.05});new Gn({color:0});const _e=new L(ye,M);_e.position.set(-.3,.99,.53),_e.rotation.x=rt.degToRad(-5),_e.rotation.y=rt.degToRad(-15),u.add(_e);const Oe=new Bt("O",{font:Q,size:.2,depth:.05});new Gn({color:0});const qe=new L(Oe,M);qe.position.set(.14,.99,.53),qe.rotation.y=rt.degToRad(12),qe.rotation.x=rt.degToRad(-5),u.add(qe)}),Pe.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const be=()=>{u.rotation.y,u.rotation.x},ke=()=>{s.value=!0,r.value=!1,o.value=!1},Le=()=>{s.value=!1,r.value=!0,o.value=!1},He=()=>{s.value=!1,r.value=!1,be()},B=Q=>{const ye=window.innerWidth/2;Q>ye?ke():Le(),be()},xe=Q=>{clearTimeout(i),He(),o.value=!0;const ye={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1};if(o.value){const _e=ye.x*Math.PI*.2,Oe=ye.y*Math.PI*.2;u.rotation.y=_e,u.rotation.x=Oe}i=setTimeout(()=>{o.value=!1,B(Q.clientX)},500)};window.addEventListener("mousemove",xe);const te=Q=>{if(o.value){const ye={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1},_e=ye.x*Math.PI*.2,Oe=ye.y*Math.PI*.2;u.rotation.y=_e,u.rotation.x=Oe}};window.addEventListener("mousemove",te),a(),zt(()=>e.bodyPosition,Q=>{u.position.set(Q.x,Q.y,Q.z)}),zt(()=>e.cameraPosition,Q=>{c.position.set(e.bodyPosition.x,1,Q),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(yi(),Mi("div",{ref_key:"threeCanvas",ref:t,class:Hn(n.background?"no-bg":"three-canvas")},null,2))}}),kw=Si(Hw,[["__scopeId","data-v-f3beb116"]]),Vw=kn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=null,s=nt(!1),r=nt(!1),o=nt(!1);return ti(()=>{if(t.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new qi,c=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Xi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(h.domElement);const u=new je,f=new Ki(16777215,2);l.add(f);const m=new ji(16777215,4);m.position.set(5,5,5),l.add(m);const _=new $i(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Yi,d=x.load("/3d-bear-arts/assets/pop6.jpg"),p=x.load("/3d-bear-arts/assets/pop7.jpg");d.wrapS=d.wrapT=Dt,p.wrapS=p.wrapT=Dt;const b=new Fe({color:16738740,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),M=new Fe({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:lt}),w=new Fe({color:16766720,map:d,metalness:.3,roughness:.5}),O=new Fe({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:lt}),P=new Fe({color:9055202,map:d,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Fe({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:lt});const R=new Fe({color:65535,map:d,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),F=new Fe({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:lt}),J=new Re(1,32,32,0,Math.PI),y=new L(J,M),E=new L(J,b);y.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),y.position.y=-.2,E.position.y=-.2,y.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const j=new Et(1,32),H=new L(j,b);H.scale.set(.85,.85,.8),H.position.set(0,-.2,0),H.rotation.y=Math.PI/2;const Z=new je;Z.add(y),Z.add(E),Z.add(H),u.add(Z);const re=new Re(.6,32,32,0,Math.PI),k=new L(re,w);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI*1.5;const ee=new L(re,O);ee.scale.set(1,.95,.95),ee.position.set(0,1,0),ee.rotation.y=Math.PI/2;const W=new Et(.6,32),me=new L(W,w);me.position.set(0,1,0),me.rotation.y=Math.PI/2,me.scale.set(1,.95,.95);const ve=new je;ve.add(k),ve.add(ee),ve.add(me),u.add(ve);const ge=new Re(.25,32,32),Ee=new L(ge,b);Ee.position.set(-.45,1.35,-.1),u.add(Ee);const Be=new L(ge,M);Be.position.set(.45,1.35,-.1),u.add(Be);const oe=new Re(.25,32,32,Math.PI/2,Math.PI),fe=new L(oe,w);fe.scale.set(1.1,.6,.8),fe.position.set(0,.84,.5),fe.rotation.y=Math.PI;const Se=new Re(.25,32,32,Math.PI/2,Math.PI),U=new L(Se,O);U.scale.set(1.1,.6,.8),U.position.set(0,.84,.5),U.rotation.y=0;const le=new Et(.25,32),ae=new L(le,w);ae.scale.set(.8,.6,.8),ae.position.set(0,.84,.5),ae.rotation.y=Math.PI/2;const he=new je;he.add(fe),he.add(U),he.add(ae),u.add(he);const we=new Mn;we.moveTo(0,0),we.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),we.bezierCurveTo(-.6,.3,0,.6,0,1),we.bezierCurveTo(0,.6,.6,.3,.6,0),we.bezierCurveTo(.6,-.3,0,-.3,0,0);const ne={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Tn(we,ne),T=new L(g,w);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const I=new L(g,R);I.scale.set(.2,.2,.25),I.position.set(.5,-.3,.4),I.rotation.y=Math.PI,I.rotation.x=Math.PI,u.add(I);const D=new L(g,b);D.scale.set(.25,.25,.27),D.position.set(.4,.3,-.2),D.rotation.y=Math.PI,D.rotation.x=Math.PI,u.add(D);const N=new Re(.35,32,32),Y=new L(N,R);Y.scale.set(.75,1.25,.65),Y.position.set(-.7,-.15,.2),u.add(Y);const K=new L(N,F);K.scale.set(.75,1.25,.65),K.position.set(.7,-.15,.2),u.add(K);const S=new At(.2,.22,.6,32),v=new L(S,w);v.position.set(-.4,-1.05,0),u.add(v);const C=new L(S,O);C.position.set(.4,-1.05,0),u.add(C);const V=new Re(.3,32,32),z=new L(V,w);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),u.add(z);const G=new L(V,O);G.scale.set(1,.72,1.5),G.position.set(.4,-1.45,.17),u.add(G);const de=new Re(.44,32,32),ce=new L(de,b);ce.position.set(-.15,-.45,-.4),u.add(ce);const pe=new L(de,M);pe.position.set(.15,-.45,-.4),u.add(pe);const Te=new Re(.18,32,32),ue=new L(Te,b);ue.position.set(0,-.35,-.8),u.add(ue),new Zi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xe){const te=new Bt("X",{font:xe,size:.2,depth:.05});new Gn({color:0});const Q=new L(te,b);Q.position.set(-.3,.99,.53),Q.rotation.x=rt.degToRad(-5),Q.rotation.y=rt.degToRad(-15),u.add(Q);const ye=new Bt("O",{font:xe,size:.2,depth:.05});new Gn({color:0});const _e=new L(ye,R);_e.position.set(.14,.99,.53),_e.rotation.y=rt.degToRad(12),_e.rotation.x=rt.degToRad(-5),u.add(_e);const Oe=new Bt("POP",{font:xe,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),qe=new Fe({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Fe({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Ke=new Fe({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),We=new Fe({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),it=new L(Oe,qe);it.scale.set(.15,.15,.15),it.position.set(.03,1.16,.1),it.rotateZ(-25),u.add(it);const Ce=new L(Oe,P);Ce.scale.set(.14,.14,.14),Ce.rotateZ(45),Ce.position.set(.2,-.7,.3),u.add(Ce);const ct=new L(Oe,Ke);ct.scale.set(.14,.14,.14),ct.rotateZ(45),ct.rotateY(45),ct.position.set(.3,.7,.3),u.add(ct);const at=new L(Oe,Ke);at.scale.set(.15,.15,.15),at.rotateZ(45),at.rotateY(45),at.position.set(.35,-1.5,.3),u.add(at);const st=new L(Oe,We);st.scale.set(.17,.17,.17),st.rotateZ(45),st.rotateY(15),st.position.set(.35,1,.3),u.add(st)}),ue.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),c.position.set(e.bodyPosition.x,1,e.cameraPosition),c.lookAt(e.bodyPosition.x,0,0),c.position.z=4;const Pe=()=>{u.rotation.y,u.rotation.x},Ie=()=>{s.value=!0,r.value=!1,o.value=!1},be=()=>{s.value=!1,r.value=!0,o.value=!1},ke=()=>{s.value=!1,r.value=!1,Pe()},Le=xe=>{const te=window.innerWidth/2;xe>te?Ie():be(),Pe()},He=xe=>{clearTimeout(i),ke(),o.value=!0;const te={x:xe.clientX/window.innerWidth*2-1,y:-(xe.clientY/window.innerHeight)*2+1};if(o.value){const Q=te.x*Math.PI*.2,ye=te.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=ye}i=setTimeout(()=>{o.value=!1,Le(xe.clientX)},500)};window.addEventListener("mousemove",He);const B=xe=>{if(o.value){const te={x:xe.clientX/window.innerWidth*2-1,y:-(xe.clientY/window.innerHeight)*2+1},Q=te.x*Math.PI*.2,ye=te.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=ye}};window.addEventListener("mousemove",B),a(),zt(()=>e.bodyPosition,xe=>{u.position.set(xe.x,xe.y,xe.z)}),zt(()=>e.cameraPosition,xe=>{c.position.set(e.bodyPosition.x,1,xe),c.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(yi(),Mi("div",{ref_key:"threeCanvas",ref:t,class:Hn(n.background?"no-bg":"three-canvas")},null,2))}}),Ww=Si(Vw,[["__scopeId","data-v-8cfea564"]]),Xw={class:"pixel-controls"},qw={class:"side-buttons"},Yw=kn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);ti(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03);const Q=xe.getElapsedTime();B.forEach((ye,_e)=>{const Oe=.2+Math.sin(Q*3+te[_e])*.1;ye.scale.set(Oe,Oe,Oe)}),x.render(m,_)};const m=new qi,_=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Xi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new je,p=new je;m.add(p);const b=new Ki(16777215,2);m.add(b);const M=new ji(16777215,4);M.position.set(5,5,5),m.add(M);const w=new $i(16777215,5,50);w.position.set(0,2,4),m.add(w);const O=new Yi,P=O.load("/3d-bear-arts/assets/pop6.jpg"),R=O.load("/3d-bear-arts/assets/pop7.jpg");P.wrapS=P.wrapT=Dt,R.wrapS=R.wrapT=Dt,R.repeat.set(2,2);const F=new Fe({color:16738740,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Fe({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:lt}),y=new Fe({color:16766720,map:P,metalness:.3,roughness:.5}),E=new Fe({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:lt}),j=new Fe({color:9055202,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),H=new Fe({color:65535,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Fe({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:lt}),re=new Re(1,32,32,0,Math.PI),k=new L(re,J),ee=new L(re,F);k.scale.set(.85,.85,.8),ee.scale.set(.85,.85,.8),k.position.y=-.2,ee.position.y=-.2,k.rotation.y=Math.PI/2,ee.rotation.y=Math.PI*1.5;const W=new Et(1,32),me=new L(W,F);me.scale.set(.85,.85,.8),me.position.set(0,-.2,0),me.rotation.y=Math.PI/2;const ve=new je;ve.add(k),ve.add(ee),ve.add(me),d.add(ve);const ge=new Re(.6,32,32,0,Math.PI),Ee=new L(ge,y);Ee.scale.set(1,.95,.95),Ee.position.set(0,1,0),Ee.rotation.y=Math.PI*1.5;const Be=new L(ge,E);Be.scale.set(1,.95,.95),Be.position.set(0,1,0),Be.rotation.y=Math.PI/2;const oe=new Et(.6,32),fe=new L(oe,y);fe.position.set(0,1,0),fe.rotation.y=Math.PI/2,fe.scale.set(1,.95,.95);const Se=new je;Se.add(Ee),Se.add(Be),Se.add(fe),d.add(Se);const U=new Re(.25,32,32),le=new L(U,F);le.position.set(-.45,1.35,-.1),d.add(le);const ae=new L(U,J);ae.position.set(.45,1.35,-.1),d.add(ae);const he=new Re(.25,32,32,Math.PI/2,Math.PI),we=new L(he,y);we.scale.set(1.1,.6,.8),we.position.set(0,.84,.5),we.rotation.y=Math.PI;const ne=new Re(.25,32,32,Math.PI/2,Math.PI),g=new L(ne,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Et(.25,32),I=new L(T,y);I.scale.set(.8,.6,.8),I.position.set(0,.84,.5),I.rotation.y=Math.PI/2;const D=new je;D.add(we),D.add(g),D.add(I),d.add(D);const N=new Mn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},K=new Tn(N,Y),S=new L(K,y);S.scale.set(.5,.5,.5),S.position.set(.3,0,0),S.rotation.y=Math.PI,S.rotation.x=Math.PI,d.add(S);const v=new L(K,H);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,d.add(v);const C=new L(K,F);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,d.add(C);const V=new Re(.35,32,32),z=new L(V,H);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),d.add(z);const G=new L(V,Z);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),d.add(G);const de=new At(.2,.22,.6,32),ce=new L(de,y);ce.position.set(-.4,-1.05,0),d.add(ce);const pe=new L(de,E);pe.position.set(.4,-1.05,0),d.add(pe);const Te=new Re(.3,32,32),ue=new L(Te,y);ue.scale.set(1,.72,1.5),ue.position.set(-.4,-1.45,.17),d.add(ue);const Me=new L(Te,E);Me.scale.set(1,.72,1.5),Me.position.set(.4,-1.45,.17),d.add(Me);const Pe=new Re(.44,32,32),Ie=new L(Pe,F);Ie.position.set(-.15,-.45,-.4),d.add(Ie);const be=new L(Pe,J);be.position.set(.15,-.45,-.4),d.add(be);const ke=new Re(.18,32,32),Le=new L(ke,F);Le.position.set(0,-.35,-.8),d.add(Le),new Zi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const ye=new Bt("X",{font:Q,size:.2,depth:.05}),_e=new L(ye,F);_e.position.set(-.3,.99,.53),_e.rotation.x=rt.degToRad(-5),_e.rotation.y=rt.degToRad(-15),d.add(_e);const Oe=new Bt("O",{font:Q,size:.2,depth:.05}),qe=new L(Oe,H);qe.position.set(.14,.99,.53),qe.rotation.y=rt.degToRad(12),qe.rotation.x=rt.degToRad(-5),d.add(qe);const Ke=new Bt("POP",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Bt("🐻",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const We=new Bt("BAO      BEAR",{font:Q,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),it=new Fe({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Fe({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Ce=new Fe({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ct=new Fe({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),at=new L(Ke,it);at.scale.set(.15,.15,.15),at.position.set(.02,1.16,.1),at.rotateZ(-25),d.add(at);const st=new L(Ke,j);st.scale.set(.14,.14,.14),st.rotateZ(45),st.position.set(.2,-.7,.3),d.add(st);const ut=new L(Ke,Ce);ut.scale.set(.14,.14,.14),ut.rotateZ(45),ut.rotateY(45),ut.position.set(.3,.7,.3),d.add(ut);const ht=new L(Ke,Ce);ht.scale.set(.15,.15,.15),ht.rotateZ(45),ht.rotateY(45),ht.position.set(.35,-1.5,.3),d.add(ht);const St=new L(Ke,ct);St.scale.set(.17,.17,.17),St.rotateZ(45),St.rotateY(15),St.position.set(.35,1,.3),d.add(St);const ft=new L(We,it);ft.scale.set(.7,.7,.7),ft.position.set(-6,0,-3),p.add(ft)}),Le.renderOrder=1,d.scale.set(1.4,1.4,1.4),m.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,d.rotation.x=.1;const B=[S,v,C],xe=new tp,te=[0,Math.PI/2,Math.PI,0,Math.PI/3];f(),zt(()=>e.bodyPosition,Q=>{d.position.set(Q.x,Q.y,Q.z)}),zt(()=>e.cameraPosition,Q=>{_.position.set(e.bodyPosition.x,1,Q),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(yi(),Mi(ln,null,[Ze("div",{ref_key:"threeCanvas",ref:t,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ze("div",Xw,[Ze("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ze("div",qw,[Ze("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ze("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ze("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),$w=Si(Yw,[["__scopeId","data-v-cb52c927"]]),jw={class:"pixel-controls"},Kw={class:"side-buttons"},Zw=kn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);ti(()=>{if(t.value){let f=function(Ce,ct){const at=new At(He,He,B,32);at.rotateX(Math.PI/2);const st=new L(at,Ce),ut=new je;for(let St=0;St<xe;St++){const ft=St/xe*Math.PI*2,Gt=new ys(te,Q,ye),Rt=new L(Gt,Ce);Rt.position.set((He+ye/26)*Math.cos(ft),(He+ye/26)*Math.sin(ft),0),Rt.rotation.z=ft,ut.add(Rt)}const ht=new je;return ht.add(st),ht.add(ut),ht.position.set(ct.x,ct.y,ct.z),ht},m=function(){requestAnimationFrame(m),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),_e.rotation.z-=.02,Oe.rotation.z+=.03,qe.rotation.z+=.02,Ke.rotation.z+=.02,We.rotation.z-=.03,it.rotation.y+=.04,d.render(_,x)};const _=new qi,x=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),d=new Xi({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(d.domElement);const p=new je,b=new je;_.add(b);const M=new Ki(16777215,2);_.add(M);const w=new ji(16777215,4);w.position.set(5,5,5),_.add(w);const O=new $i(16777215,5,50);O.position.set(0,2,4),_.add(O);const P=new Yi,R=P.load("/3d-bear-arts/assets/metal.jpg"),F=P.load("/3d-bear-arts/assets/pop7.jpg"),J=P.load("/3d-bear-arts/assets/gear.jpg");R.wrapS=R.wrapT=Dt,F.wrapS=F.wrapT=Dt,F.repeat.set(2,2);const y=new Fe({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:R});J.mapping=Hr;const E=new Fe({color:"#d3d3d3",metalness:1,roughness:.25,map:R,envMap:J,clearcoat:.7,clearcoatRoughness:.3}),j=new Fe({color:"#C0C0C0",metalness:1,roughness:.25,envMap:J,clearcoat:.7,clearcoatRoughness:.3}),H=new Fe({color:"#C0C0C0",metalness:1,roughness:.25,map:R,envMap:J,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),Z=new Fe({color:"#C0C0C0",metalness:1,roughness:.5,map:R,envMap:J,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),re=new Fe({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:lt});new Fe({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const k=new Fe({color:"#d3d3d3",metalness:1,roughness:.2,map:J,envMap:J,clearcoat:.7,clearcoatRoughness:.3});new Fe({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:J}),new Fe({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:R,transparent:!0,opacity:.3});const ee=new Re(1,32,32,0,Math.PI),W=new L(ee,Z),me=new L(ee,E);W.scale.set(.85,.85,.8),me.scale.set(.85,.85,.8),W.position.y=-.2,me.position.y=-.2,W.rotation.y=Math.PI/2,me.rotation.y=Math.PI*1.5;const ve=new Et(1,32),ge=new L(ve,H);ge.scale.set(.85,.85,.8),ge.position.set(0,-.2,0),ge.rotation.y=Math.PI/2;const Ee=new je;Ee.add(W),Ee.add(me),Ee.add(ge),p.add(Ee);const Be=new Re(.6,32,32,0,Math.PI),oe=new L(Be,E);oe.scale.set(1,.95,.95),oe.position.set(0,1,0),oe.rotation.y=Math.PI*1.5;const fe=new L(Be,Z);fe.scale.set(1,.95,.95),fe.position.set(0,1,0),fe.rotation.y=Math.PI/2;const Se=new Et(.6,32),U=new L(Se,H);U.position.set(0,1,0),U.rotation.y=Math.PI/2,U.scale.set(1,.95,.95);const le=new je;le.add(oe),le.add(fe),le.add(U),p.add(le);const ae=new Re(.25,32,32),he=new L(ae,E);he.position.set(-.45,1.35,-.1),p.add(he);const we=new L(ae,H);we.position.set(.45,1.35,-.1),p.add(we);const ne=new Re(.25,32,32,Math.PI/2,Math.PI),g=new L(ne,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new Re(.25,32,32,Math.PI/2,Math.PI),I=new L(T,H);I.scale.set(1.1,.6,.8),I.position.set(0,.84,.5),I.rotation.y=0;const D=new Et(.25,32),N=new L(D,re);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const Y=new je;Y.add(g),Y.add(I),Y.add(N),p.add(Y);const K=new Mn;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const S={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Tn(K,S),C=new Re(.35,32,32),V=new L(C,E);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),p.add(V);const z=new L(C,H);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),p.add(z);const G=new At(.2,.22,.6,32),de=new L(G,E);de.position.set(-.4,-1.05,0),p.add(de);const ce=new L(G,H);ce.position.set(.4,-1.05,0),p.add(ce);const pe=new Re(.3,32,32),Te=new L(pe,E);Te.scale.set(1,.72,1.5),Te.position.set(-.4,-1.45,.17),p.add(Te);const ue=new L(pe,H);ue.scale.set(1,.72,1.5),ue.position.set(.4,-1.45,.17),p.add(ue);const Me=new Re(.44,32,32),Pe=new L(Me,E);Pe.position.set(-.15,-.45,-.4),p.add(Pe);const Ie=new L(Me,Z);Ie.position.set(.15,-.45,-.4),p.add(Ie);const be=new Re(.18,32,32),ke=new L(be,E);ke.position.set(0,-.35,-.8),p.add(ke),new Zi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ce){const ct=new Bt("X",{font:Ce,size:.2,depth:.05});new Gn({color:0});const at=new L(ct,y);at.position.set(-.3,.99,.53),at.rotation.x=rt.degToRad(-5),at.rotation.y=rt.degToRad(-15),p.add(at);const st=new Bt("O",{font:Ce,size:.2,depth:.05});new Gn({color:0});const ut=new L(st,y);ut.position.set(.14,.99,.53),ut.rotation.y=rt.degToRad(12),ut.rotation.x=rt.degToRad(-5),p.add(ut)}),ke.renderOrder=1;const He=1.2,B=.5,xe=8,te=.7,Q=.3,ye=.5,_e=f(k,{x:-2,y:0,z:0}),Oe=f(k,{x:0,y:0,z:0}),qe=f(k,{x:2,y:0,z:0}),Ke=f(k,{x:2,y:0,z:0}),We=f(k,{x:2,y:-2,z:0}),it=new L(v,j);it.scale.set(.3,.3,.3),it.position.set(.25,1.1,0),it.rotation.y=Math.PI,it.rotation.x=Math.PI,p.add(it),_e.position.set(.35,0,0),Oe.position.set(.25,-.3,.4),qe.position.set(.3,.3,-.2),Ke.position.set(.25,.17,.4),We.position.set(.5,-.3,.45),_e.scale.set(.2,.2,.2),Oe.scale.set(.18,.18,.18),qe.scale.set(.15,.15,.15),Ke.scale.set(.17,.17,.17),We.scale.set(.15,.15,.15),Oe.rotation.z=Math.PI/4,qe.rotation.z=-Math.PI/4,Ke.rotation.y=-Math.PI/2,We.rotation.y=-Math.PI/2,p.add(_e),p.add(Oe),p.add(qe),p.add(Ke),p.add(We),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),x.position.set(e.bodyPosition.x,1,e.cameraPosition),x.lookAt(e.bodyPosition.x,0,0),x.position.z=4,m(),zt(()=>e.bodyPosition,Ce=>{p.position.set(Ce.x,Ce.y,Ce.z)}),zt(()=>e.cameraPosition,Ce=>{x.position.set(e.bodyPosition.x,1,Ce),x.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(yi(),Mi(ln,null,[Ze("div",{ref_key:"threeCanvas",ref:t,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ze("div",jw,[Ze("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ze("div",Kw,[Ze("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ze("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ze("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),Jw=Si(Zw,[["__scopeId","data-v-9a57b6d8"]]),Qw={class:"pixel-controls"},eE={class:"side-buttons"},tE=kn({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);ti(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03),x.render(m,_)};const m=new qi,_=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Xi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new je,p=new je;m.add(p);const b=new Ki(16777215,2);m.add(b);const M=new ji(16777215,4);M.position.set(5,5,5),m.add(M);const w=new $i(16777215,5,50);w.position.set(0,2,4),m.add(w);const O=new Yi,P=O.load("/3d-bear-arts/assets/sun.jpg"),R=O.load("/3d-bear-arts/assets/gear.jpg"),F=O.load("/3d-bear-arts/assets/underwater.jpg"),J=O.load("/3d-bear-arts/assets/beach.jpg");F.wrapS=F.wrapT=Dt,J.wrapS=J.wrapT=Dt,J.repeat.set(.8,1),R.mapping=Hr,P.wrapS=P.wrapT=Dt;const y=new Fe({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:J,envMapIntensity:.8,side:lt,transparent:!0,opacity:.9}),E=new Fe({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:J,envMapIntensity:.6,side:lt,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new Fe({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:J,side:lt,transparent:!0,opacity:.9});const j=new Fe({color:8374441,metalness:1,roughness:.25,envMap:R,clearcoat:.7,clearcoatRoughness:.3}),H=new Fe({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:lt}),Z=new Fe({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:J,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),re=new Fe({color:"#a4d0f5",metalness:0,roughness:.8,map:P,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),k=new Fe({color:"#a4d0f5",metalness:0,roughness:.85,map:J,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),ee=new Re(1,32,32,0,Math.PI),W=new L(ee,H),me=new L(ee,E);W.scale.set(.85,.85,.8),me.scale.set(.85,.85,.8),W.position.y=-.2,me.position.y=-.2,W.rotation.y=Math.PI/2,me.rotation.y=Math.PI*1.5;const ve=new Et(1,32),ge=new L(ve,k);ge.scale.set(.85,.85,.8),ge.position.set(0,-.2,0),ge.rotation.y=Math.PI/2;const Ee=new je;Ee.add(W),Ee.add(me),Ee.add(ge);const Be=new Re(.6,32,32,0,Math.PI*2,0,Math.PI/2),oe=new Fe({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),fe=new L(Be,oe);fe.position.set(0,-.2,0),fe.rotation.x=Math.PI,fe.scale.set(1.25,1.25,1.25),Ee.add(fe);const Se=new Fe({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:lt,transparent:!0,opacity:.7,depthWrite:!1}),U=new L(ve,Se);U.scale.set(.7,.7,.7),U.position.set(0,-.3,0),U.rotation.x=Math.PI/2,U.renderOrder=1,Ee.add(U),d.add(Ee);const le=new Re(.6,32,32,0,Math.PI),ae=new L(le,y);ae.scale.set(1,.95,.95),ae.position.set(0,1,0),ae.rotation.y=Math.PI*1.5;const he=new L(le,Z);he.scale.set(1,.95,.95),he.position.set(0,1,0),he.rotation.y=Math.PI/2;const we=new Et(.6,32),ne=new L(we,re);ne.position.set(0,1,0),ne.rotation.y=Math.PI/2,ne.scale.set(1,.95,.95);const g=new je;g.add(ae),g.add(he),g.add(ne),d.add(g);const T=new Re(.25,32,32),I=new L(T,y);I.position.set(-.45,1.35,-.1),d.add(I);const D=new L(T,Z);D.position.set(.45,1.35,-.1),d.add(D);const N=new Re(.25,32,32,Math.PI/2,Math.PI),Y=new L(N,y);Y.scale.set(1.1,.6,.8),Y.position.set(0,.84,.5),Y.rotation.y=Math.PI;const K=new Re(.25,32,32,Math.PI/2,Math.PI),S=new L(K,Z);S.scale.set(1.1,.6,.8),S.position.set(0,.84,.5),S.rotation.y=0;const v=new Et(.25,32),C=new L(v,re);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const V=new je;V.add(Y),V.add(S),V.add(C),d.add(V);const z=new Mn;z.moveTo(0,0),z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),z.bezierCurveTo(-.6,.3,0,.6,0,1),z.bezierCurveTo(0,.6,.6,.3,.6,0),z.bezierCurveTo(.6,-.3,0,-.3,0,0);const G={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},de=new Tn(z,G),ce=new Re(.35,32,32),pe=new L(ce,y);pe.scale.set(.75,1.25,.65),pe.position.set(-.7,-.15,.2),d.add(pe);const Te=new L(ce,Z);Te.scale.set(.75,1.25,.65),Te.position.set(.7,-.15,.2),d.add(Te);const ue=new At(.2,.22,.6,32),Me=new L(ue,y);Me.position.set(-.4,-1.05,0),d.add(Me);const Pe=new L(ue,Z);Pe.position.set(.4,-1.05,0),d.add(Pe);const Ie=new Re(.3,32,32),be=new L(Ie,y);be.scale.set(1,.72,1.5),be.position.set(-.4,-1.45,.17),d.add(be);const ke=new L(Ie,Z);ke.scale.set(1,.72,1.5),ke.position.set(.4,-1.45,.17),d.add(ke);const Le=new Re(.44,32,32),He=new L(Le,y);He.position.set(-.15,-.45,-.4),d.add(He);const B=new L(Le,Z);B.position.set(.15,-.45,-.4),d.add(B);const xe=new Re(.18,32,32),te=new L(xe,E);te.position.set(0,-.35,-.8),d.add(te),new Zi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(_e){const Oe=new Bt("X",{font:_e,size:.2,depth:.05});new Gn({color:0});const qe=new L(Oe,y);qe.position.set(-.3,.99,.53),qe.rotation.x=rt.degToRad(-5),qe.rotation.y=rt.degToRad(-15),d.add(qe);const Ke=new Bt("O",{font:_e,size:.2,depth:.05});new Gn({color:0});const We=new L(Ke,E);We.position.set(.14,.99,.53),We.rotation.y=rt.degToRad(12),We.rotation.x=rt.degToRad(-5),d.add(We)}),te.renderOrder=1,d.rotation.x=.1;const ye=new L(de,j);ye.scale.set(.3,.3,.3),ye.position.set(.25,1.1,0),ye.rotation.y=Math.PI,ye.rotation.x=Math.PI,d.add(ye),d.scale.set(1.4,1.4,1.4),m.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4,f(),zt(()=>e.bodyPosition,_e=>{d.position.set(_e.x,_e.y,_e.z)}),zt(()=>e.cameraPosition,_e=>{_.position.set(e.bodyPosition.x,1,_e),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(yi(),Mi(ln,null,[Ze("div",{ref_key:"threeCanvas",ref:t,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ze("div",Qw,[Ze("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ze("div",eE,[Ze("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ze("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ze("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),nE=Si(tE,[["__scopeId","data-v-08c607ba"]]),iE={class:"pixel-controls"},sE={class:"side-buttons"},rE=kn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);ti(()=>{if(t.value){let f=function(){const Ce=new je,ct=new Re(.2,32,32),at=new Xt({color:16767916}),st=new L(ct,at);st.position.set(0,1.5,0),Ce.add(st);const ut=new Re(.21,32,32,0,Math.PI*2,0,Math.PI/2),ht=new Xt({color:16711680}),St=new L(ut,ht);St.position.set(0,1.58,0),Ce.add(St);const ft=new At(.25,.25,.6,32),Gt=new Xt({color:16767916}),Rt=new L(ft,Gt);Rt.position.set(0,1,0),Ce.add(Rt);const Vn=new At(.26,.26,.3,32),Rn=new Xt({color:255}),fn=new L(Vn,Rn);fn.position.set(0,.65,0),Ce.add(fn);const Wn=new At(.1,.1,.5,32),un=new Xt({color:16767916}),A=new L(Wn,un);A.position.set(-.15,.25,0),Ce.add(A);const q=new L(Wn,un);q.position.set(.15,.25,0),Ce.add(q);const ie=new At(.08,.08,.5,32),se=new L(ie,un);se.position.set(-.35,1.3,0),se.rotation.z=Math.PI/4,Ce.add(se);const $=new L(ie,un);return $.position.set(.35,1.3,0),$.rotation.z=-Math.PI/4,Ce.add($),Ce.scale.set(.27,.27,.27),Ce.position.set(-.2,-.1,-.15),Ce},m=function(){const Ce=new je,ct=new Re(.18,32,32),at=new Xt({color:16767916}),st=new L(ct,at);st.position.set(0,1.2,.04),Ce.add(st);const ut=new Re(.19,32,32,.4,Math.PI*2,0,Math.PI/2),ht=new At(.18,.18,.4,32),St=new Xt({color:9127187}),ft=new L(ut,St);ft.position.set(0,1.28,0),Ce.add(ft);const Gt=new L(ht,St);Gt.position.set(0,1.1,-.01),Ce.add(Gt);const Rt=new At(.18,.2,.5,32),Vn=new Xt({color:16767916}),Rn=new L(Rt,Vn);Rn.position.set(0,.85,0),Ce.add(Rn);const fn=new Re(.08,32,32,0,Math.PI),Wn=new Xt({color:16738740}),un=new L(fn,Wn);un.position.set(-.09,.98,.15),Ce.add(un);const A=new L(fn,Wn);A.position.set(.09,.98,.15),Ce.add(A);const q=new At(.22,.22,.25,32),ie=new Xt({color:16738740}),se=new L(q,ie);se.position.set(0,.6,0),Ce.add(se);const $=new At(.1,.1,.6,32),Ae=new Xt({color:16767916}),Ne=new L($,Ae);Ne.position.set(-.09,.5,.2),Ne.rotation.x=Math.PI/2,Ce.add(Ne);const ze=new L($,Ae);ze.position.set(.09,.5,.2),ze.rotation.x=Math.PI/2,Ce.add(ze);const Ge=new At(.08,.08,.35,32),Ye=new L(Ge,Ae);Ye.position.set(-.24,.95,.18),Ye.rotation.x=Math.PI/2,Ce.add(Ye);const $e=new L(Ge,Ae);return $e.position.set(.2,.85,0),$e.rotation.z=Math.PI/20,Ce.add($e),Ce.scale.set(.27,.27,.27),Ce.position.set(.2,-.1,-.15),Ce},_=function(){const Ce=new je,ct=new Re(.2,32,32),at=new Xt({color:16767916}),st=new L(ct,at);st.position.set(0,1.5,0),Ce.add(st);const ut=new Re(.21,32,32,0,Math.PI*2,0,Math.PI/2),ht=new Xt({color:25600}),St=new L(ut,ht);St.position.set(0,1.58,0),Ce.add(St);const ft=new At(.22,.22,.5,32),Gt=new Xt({color:16767916}),Rt=new L(ft,Gt);Rt.position.set(0,1,0),Ce.add(Rt);const Vn=new At(.23,.23,.3,32),Rn=new Xt({color:8388736}),fn=new L(Vn,Rn);fn.position.set(0,.65,0),Ce.add(fn);const Wn=new At(.1,.1,.5,32),un=new Xt({color:16767916}),A=new L(Wn,un);A.position.set(-.15,.3,-.25),A.rotation.x=Math.PI/6,Ce.add(A);const q=new L(Wn,un);q.position.set(.15,.3,.25),q.rotation.x=-Math.PI/6,Ce.add(q);const ie=new At(.08,.08,.4,32),se=new L(ie,un);se.position.set(-.28,1,-.2),se.rotation.x=Math.PI/6,Ce.add(se);const $=new L(ie,un);return $.position.set(.28,1.3,.1),$.rotation.z=-Math.PI/8,Ce.add($),Ce.scale.set(.15,.15,.15),Ce.position.set(.3,-.4,.35),Ce.rotation.x=Math.PI/2,Ce.rotation.y=-Math.PI/4,Ce.rotation.z=Math.PI/2,Ce},x=function(){requestAnimationFrame(x),i.value&&(M.rotation.y+=.03),s.value&&(M.rotation.y-=.03),r.value&&(M.rotation.x-=.03),o.value&&(M.rotation.x+=.03),T.uniforms.u_time.value+=.25,ue.rotation.y+=.04,Ke.rotation.y+=.07,b.render(d,p)};const d=new qi,p=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),b=new Xi({antialias:!0,alpha:!0});b.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(b.domElement);const M=new je,w=new je;d.add(w);const O=new Ki(16777215,2);d.add(O);const P=new ji(16777215,4);P.position.set(5,5,5),d.add(P);const R=new $i(16777215,5,50);R.position.set(0,2,4),d.add(R);const F=new Yi,J=F.load("/3d-bear-arts/assets/beach.jpg");J.repeat.set(.8,1);const y=F.load("/3d-bear-arts/assets/sun.jpg");J.wrapS=J.wrapT=Dt,J.repeat.set(.8,1),y.wrapS=y.wrapT=Dt;const E=new Fe({color:11592447,map:J,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),j=new Fe({color:11592447,map:J,metalness:.3,roughness:.5,transparent:!0,opacity:.5,side:lt,ior:1.33,depthWrite:!1,depthTest:!0}),H=new Fe({color:11592447,map:J,metalness:.1,roughness:.6,transparent:!0,opacity:.85,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),Z=new Fe({color:11592447,map:J,metalness:.1,roughness:.6,transparent:!0,opacity:.2,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:lt}),re=new Fe({color:11592447,map:J,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:lt,ior:1.33}),k=new Fe({color:11592447,map:J,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),ee=new Re(1,32,32,0,Math.PI),W=new L(ee,Z),me=new L(ee,j);W.scale.set(.85,.85,.8),me.scale.set(.85,.85,.8),W.position.y=-.2,me.position.y=-.2,W.rotation.y=Math.PI/2,me.rotation.y=Math.PI*1.5;const ve=new Et(1,32),ge=new L(ve,E);ge.scale.set(.85,.85,.8),ge.position.set(0,-.2,0),ge.rotation.y=Math.PI/2;const Ee=new je;Ee.add(W),Ee.add(me),Ee.add(ge),M.add(Ee);const Be=new Re(.6,32,32,0,Math.PI),oe=new L(Be,E);oe.scale.set(1,.95,.95),oe.position.set(0,1,0),oe.rotation.y=Math.PI*1.5;const fe=new L(Be,H);fe.scale.set(1,.95,.95),fe.position.set(0,1,0),fe.rotation.y=Math.PI/2;const Se=new Et(.6,32),U=new L(Se,E);U.position.set(0,1,0),U.rotation.y=Math.PI/2,U.scale.set(1,.95,.95);const le=new je;le.add(oe),le.add(fe),le.add(U),M.add(le);const ae=new Re(.6,32,32,0,Math.PI*2,0,Math.PI/2),he=new Fe({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),we=new L(ae,he);we.position.set(0,-.2,0),we.rotation.x=Math.PI,we.scale.set(1.25,1.25,1.25),Ee.add(we);const ne=new Fe({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:lt,transparent:!0,opacity:.7,depthWrite:!1}),g=new L(ve,ne);g.scale.set(.7,.7,.7),g.position.set(0,-.3,0),g.rotation.x=Math.PI/2,g.renderOrder=1,Ee.add(g),M.add(Ee);const T=new ei({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),I=new L(ve,T);I.position.set(0,-.3,0),I.scale.set(.7,.7,.7),I.rotation.x=-Math.PI/2,I.renderOrder=1,Ee.add(I);const D=new Re(.25,32,32),N=new L(D,re);N.position.set(-.45,1.35,-.1),M.add(N);const Y=new L(D,H);Y.position.set(.45,1.35,-.1),M.add(Y);const K=new Re(.25,32,32,Math.PI/2,Math.PI),S=new L(K,re);S.scale.set(1.1,.6,.8),S.position.set(0,.84,.5),S.rotation.y=Math.PI;const v=new Re(.25,32,32,Math.PI/2,Math.PI),C=new L(v,j);C.scale.set(1.1,.6,.8),C.position.set(0,.84,.5),C.rotation.y=0;const V=new Et(.25,32),z=new L(V,j);z.scale.set(.8,.6,.8),z.position.set(0,.84,.5),z.rotation.y=Math.PI/2;const G=new je;G.add(S),G.add(C),G.add(z),M.add(G);const de=new Fe({color:8374441,metalness:1,roughness:.25,envMap:y,clearcoat:.7,clearcoatRoughness:.3}),ce=new Mn;ce.moveTo(0,0),ce.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ce.bezierCurveTo(-.6,.3,0,.6,0,1),ce.bezierCurveTo(0,.6,.6,.3,.6,0),ce.bezierCurveTo(.6,-.3,0,-.3,0,0);const pe={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Te=new Tn(ce,pe),ue=new L(Te,de);ue.scale.set(.2,.2,.2),ue.position.set(.25,1.2,0),ue.rotation.y=Math.PI,ue.rotation.x=Math.PI,M.add(ue);const Me=new Re(.35,32,32),Pe=new L(Me,j);Pe.scale.set(.75,1.25,.65),Pe.position.set(-.7,-.15,.2),M.add(Pe);const Ie=new L(Me,j);Ie.scale.set(.75,1.25,.65),Ie.position.set(.7,-.15,.2),M.add(Ie);const be=new At(.2,.22,.6,32),ke=new L(be,re);ke.position.set(-.4,-1.05,0),M.add(ke);const Le=new L(be,re);Le.position.set(.4,-1.05,0),M.add(Le);const He=new Re(.3,32,32),B=new L(He,re);B.scale.set(1,.72,1.5),B.position.set(-.4,-1.45,.17),M.add(B);const xe=new L(He,re);xe.scale.set(1,.72,1.5),xe.position.set(.4,-1.45,.17),M.add(xe);const te=new Re(.44,32,32),Q=new L(te,re);Q.position.set(-.15,-.45,-.4),M.add(Q);const ye=new L(te,re);ye.position.set(.15,-.45,-.4),M.add(ye);const _e=new Re(.18,32,32),Oe=new L(_e,re);Oe.position.set(0,-.35,-.8),M.add(Oe),new Zi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ce){const ct=new Bt("X",{font:Ce,size:.2,depth:.05}),at=new L(ct,k);at.position.set(-.3,.99,.53),at.rotation.x=rt.degToRad(-5),at.rotation.y=rt.degToRad(-15),M.add(at);const st=new Bt("O",{font:Ce,size:.2,depth:.05}),ut=new L(st,k);ut.position.set(.14,.99,.53),ut.rotation.y=rt.degToRad(12),ut.rotation.x=rt.degToRad(-5),M.add(ut)});const Ke=f();M.add(Ke);const We=m();M.add(We);const it=_();M.add(it),M.scale.set(1.4,1.4,1.4),d.add(M),M.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),p.position.set(e.bodyPosition.x,1,e.cameraPosition),p.lookAt(e.bodyPosition.x,0,0),p.position.z=4,M.rotation.x=.1,x(),zt(()=>e.bodyPosition,Ce=>{M.position.set(Ce.x,Ce.y,Ce.z)}),zt(()=>e.cameraPosition,Ce=>{p.position.set(e.bodyPosition.x,1,Ce),p.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),b.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(yi(),Mi(ln,null,[Ze("div",{ref_key:"threeCanvas",ref:t,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ze("div",iE,[Ze("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ze("div",sE,[Ze("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ze("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ze("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),oE=Si(rE,[["__scopeId","data-v-9ace1891"]]),aE={class:"pixel-controls"},lE={class:"side-buttons"},cE=kn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);ti(()=>{if(t.value){let f=function(ht,St){const ft=new je,Gt=new Re(1,32,32),Rt=new L(Gt,re);Rt.scale.set(1,.8,1),ft.add(Rt);const Vn=new At(.1,.1,.5,16),Rn=new Xt({color:9127187}),fn=new L(Vn,Rn);return fn.position.set(0,.9,0),ft.add(fn),ft},m=function(){requestAnimationFrame(m),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),He.rotation.z-=.04,B.rotation.z+=.04,xe.rotation.z+=.03,te.rotation.z+=.03,v.rotation.y+=.04,ut+=at,p.position.y=e.bodyPosition.y+Math.sin(ut)*st;const ht=Ce.getElapsedTime();it.forEach((St,ft)=>{const Gt=.1+Math.sin(ht*3+ct[ft])*.1;St.scale.set(Gt,Gt,Gt)}),d.render(_,x)};const _=new qi,x=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),d=new Xi({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(d.domElement);const p=new je,b=new je;_.add(b);const M=new Ki(16777215,2);_.add(M);const w=new ji(16777215,4);w.position.set(5,5,5),_.add(w);const O=new $i(16777215,5,50);O.position.set(0,2,4),_.add(O);const P=new Yi,R=P.load("/3d-bear-arts/assets/pumpkin.jpg");R.wrapS=R.wrapT=Dt,R.repeat.set(.8,.85);const F=P.load("/3d-bear-arts/assets/pumpkin.jpg");F.wrapS=F.wrapT=Dt,F.repeat.set(1,1);const J=P.load("/3d-bear-arts/assets/pumpkin.jpg");J.wrapS=F.wrapT=Dt,J.repeat.set(2,.8);const y=new Fe({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new je,j=new Fe({color:16747520,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),H=new Fe({color:16747520,map:F,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Fe({color:16747520,map:J,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:lt}),re=new Fe({color:16747520,map:J,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Fe({color:16766720,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Fe({color:9109504,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Fe({color:4915330,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const k=new Re(1,32,32,0,Math.PI),ee=new L(k,Z),W=new L(k,j);ee.scale.set(.85,.85,.8),W.scale.set(.85,.85,.8),ee.position.y=-.2,W.position.y=-.2,ee.rotation.y=Math.PI/2,W.rotation.y=Math.PI*1.5;const me=new Et(1,32),ve=new L(me,H);ve.scale.set(.85,.85,.8),ve.position.set(0,-.2,0),ve.rotation.y=Math.PI/2;const ge=new je;ge.add(ee),ge.add(W),ge.add(ve),p.add(ge);const Ee=new Re(.6,32,32,0,Math.PI),Be=new L(Ee,j);Be.scale.set(1,.95,.95),Be.position.set(0,1,0),Be.rotation.y=Math.PI*1.5;const oe=new L(Ee,Z);oe.scale.set(1,.95,.95),oe.position.set(0,1,0),oe.rotation.y=Math.PI/2;const fe=new Et(.6,32),Se=new L(fe,H);Se.position.set(0,1,0),Se.rotation.y=Math.PI/2,Se.scale.set(1,.95,.95);const U=new je;U.add(Be),U.add(oe),U.add(Se),p.add(U);const le=new Re(.25,32,32),ae=new L(le,re);ae.position.set(-.45,1.35,-.1),p.add(ae);const he=new L(le,Z);he.position.set(.45,1.35,-.1),p.add(he);const we=new Re(.25,32,32,Math.PI/2,Math.PI),ne=new L(we,j);ne.scale.set(1.1,.6,.8),ne.position.set(0,.84,.5),ne.rotation.y=Math.PI;const g=new Re(.25,32,32,Math.PI/2,Math.PI),T=new L(g,Z);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const I=new Et(.25,32),D=new L(I,j);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const N=new je;N.add(ne),N.add(T),N.add(D),p.add(N);const Y=new Mn;Y.moveTo(0,0),Y.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Y.bezierCurveTo(-.6,.3,0,.6,0,1),Y.bezierCurveTo(0,.6,.6,.3,.6,0),Y.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},S=new Tn(Y,K),v=new L(S,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new Re(.35,32,32),V=new L(C,H);V.scale.set(.75,1.25,.65),V.position.set(-.7,-.15,.2),p.add(V);const z=new L(C,Z);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),p.add(z);const G=new At(.2,.22,.6,32),de=new L(G,H);de.position.set(-.4,-1.05,0),p.add(de);const ce=new L(G,Z);ce.position.set(.4,-1.05,0),p.add(ce);const pe=new Re(.3,32,32),Te=new L(pe,re);Te.scale.set(1,.72,1.5),Te.position.set(-.4,-1.45,.17),p.add(Te);const ue=new L(pe,Z);ue.scale.set(1,.72,1.5),ue.position.set(.4,-1.45,.17),p.add(ue);const Me=new Re(.44,32,32),Pe=new L(Me,j);Pe.position.set(-.15,-.45,-.4),p.add(Pe);const Ie=new L(Me,Z);Ie.position.set(.15,-.45,-.4),p.add(Ie);const be=new Re(.18,32,32),ke=new L(be,re);ke.position.set(0,-.35,-.8),p.add(ke),ke.renderOrder=1,new Zi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ht){const St=new Bt("X",{font:ht,size:.2,depth:.05}),ft=new L(St,H);ft.position.set(-.3,.99,.53),ft.rotation.x=rt.degToRad(-5),ft.rotation.y=rt.degToRad(-15),p.add(ft);const Gt=new Bt("O",{font:ht,size:.2,depth:.05}),Rt=new L(Gt,H);Rt.position.set(.14,.99,.53),Rt.rotation.y=rt.degToRad(12),Rt.rotation.x=rt.degToRad(-5),p.add(Rt)}),p.add(E);const He=f(),B=f(),xe=f(),te=f();He.position.set(.35,-.35,-.3),B.position.set(.25,-.45,.3),xe.position.set(.3,.1,-.2),te.position.set(.25,.18,.4),He.scale.set(.3,.3,.3),B.scale.set(.28,.28,.28),xe.scale.set(.25,.25,.25),te.scale.set(.23,.23,.23),B.rotation.z=Math.PI/4,xe.rotation.z=-Math.PI/4,te.rotation.y=-Math.PI/2,p.add(He),p.add(B),p.add(xe),p.add(te);const Q=new Mn;Q.moveTo(-.5,0),Q.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),Q.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),Q.bezierCurveTo(-.05,.6,.05,.6,.15,.4),Q.bezierCurveTo(.25,.5,.25,.85,.5,.8),Q.bezierCurveTo(1,.6,.75,.25,.5,0),Q.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const ye={depth:.3,bevelEnabled:!1},_e=new Tn(Q,ye),Oe=new Gn({color:0}),qe=new L(_e,Oe);qe.scale.set(.3,.3,.6),qe.rotation.x=0,qe.rotation.z=0,qe.position.set(.26,.35,.25),p.add(qe);const Ke=new L(_e,Oe);Ke.scale.set(.5,.5,.5),Ke.position.set(.4,-.1,.54),p.add(Ke);const We=new L(_e,Oe);We.scale.set(.5,.5,.5),We.position.set(.32,-.35,.65),p.add(We),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),x.position.set(e.bodyPosition.x,1,e.cameraPosition),x.lookAt(e.bodyPosition.x,0,0),x.position.z=4;const it=[qe,Ke,We],Ce=new tp,ct=[0,Math.PI/2,Math.PI,0,Math.PI/3];let at=.05,st=.25,ut=0;m(),zt(()=>e.bodyPosition,ht=>{p.position.set(ht.x,ht.y,ht.z)}),zt(()=>e.cameraPosition,ht=>{x.position.set(e.bodyPosition.x,1,ht),x.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(yi(),Mi(ln,null,[Ze("div",{ref_key:"threeCanvas",ref:t,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ze("div",aE,[Ze("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ze("div",lE,[Ze("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ze("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ze("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),uE=Si(cE,[["__scopeId","data-v-5eff72b3"]]),hE={class:"pixel-controls"},fE={class:"side-buttons"},dE=kn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=nt(null);let i=nt(!1),s=nt(!1),r=nt(!1),o=nt(!1);ti(()=>{if(t.value){let f=function(){requestAnimationFrame(f),i.value&&(d.rotation.y+=.03),s.value&&(d.rotation.y-=.03),r.value&&(d.rotation.x-=.03),o.value&&(d.rotation.x+=.03),K.rotation.y+=.03,Oe+=te,qe+=Q,d.position.y=e.bodyPosition.y+Math.sin(Oe)*_e,K.position.y=e.bodyPosition.y+Math.sin(qe)*ye,He.uniforms.u_time.value+=.25,x.render(m,_)};const m=new qi,_=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Xi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(x.domElement);const d=new je,p=new je;m.add(p);const b=new Ki(16777215,2);m.add(b);const M=new ji(16777215,4);M.position.set(5,5,5),m.add(M);const w=new $i(16777215,5,50);w.position.set(0,2,4),m.add(w);const O=new Yi,P=O.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Dt,P.repeat.set(2,2);const R=O.load("/3d-bear-arts/assets/ghost.jpg");R.wrapS=R.wrapT=Dt,R.repeat.set(1,1);const F=new Fe({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:lt}),J=new Fe({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new Fe({color:9109504,map:P,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Fe({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:lt}),j=new Fe({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:lt}),H=new Fe({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:lt}),Z=new Re(1,32,32,0,Math.PI),re=new L(Z,F),k=new L(Z,j);re.scale.set(.85,.85,.8),k.scale.set(.85,.85,.8),re.position.y=-.2,k.position.y=-.2,re.rotation.y=Math.PI/2,k.rotation.y=Math.PI*1.5;const ee=new Et(1,32),W=new L(ee,j);W.scale.set(.85,.85,.8),W.position.set(0,-.2,0),W.rotation.y=Math.PI/2;const me=new je;me.add(re),me.add(k),me.add(W),d.add(me);const ve=new Re(.6,32,32,0,Math.PI),ge=new L(ve,H);ge.scale.set(1,.95,.95),ge.position.set(0,1,0),ge.rotation.y=Math.PI*1.5;const Ee=new L(ve,J);Ee.scale.set(1,.95,.95),Ee.position.set(0,1,0),Ee.rotation.y=Math.PI/2;const Be=new Et(.6,32),oe=new L(Be,j);oe.position.set(0,1,0),oe.rotation.y=Math.PI/2,oe.scale.set(1,.95,.95);const fe=new je;fe.add(ge),fe.add(Ee),fe.add(oe),d.add(fe);const Se=new Re(.25,32,32),U=new L(Se,H);U.position.set(-.45,1.35,-.1),d.add(U);const le=new L(Se,J);le.position.set(.45,1.35,-.1),d.add(le);const ae=new Re(.25,32,32,Math.PI/2,Math.PI),he=new L(ae,H);he.scale.set(1.1,.6,.8),he.position.set(0,.84,.5),he.rotation.y=Math.PI;const we=new Re(.25,32,32,Math.PI/2,Math.PI),ne=new L(we,J);ne.scale.set(1.1,.6,.8),ne.position.set(0,.84,.5),ne.rotation.y=0;const g=new Et(.25,32),T=new L(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const I=new je;I.add(he),I.add(ne),I.add(T),d.add(I);const D=new Mn;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Y=new Tn(D,N),K=new L(Y,y);K.scale.set(.35,.35,.35),K.position.set(0,-.05,0),K.rotation.y=Math.PI,K.rotation.x=Math.PI,d.add(K);const S=new Re(.35,32,32),v=new L(S,j);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),d.add(v);const C=new L(S,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),d.add(C);const V=new At(.2,.22,.6,32),z=new L(V,j);z.position.set(-.4,-1.05,0),d.add(z);const G=new L(V,E);G.position.set(.4,-1.05,0),d.add(G);const de=new Re(.3,32,32),ce=new L(de,j);ce.scale.set(1,.72,1.5),ce.position.set(-.4,-1.45,.17),d.add(ce);const pe=new L(de,E);pe.scale.set(1,.72,1.5),pe.position.set(.4,-1.45,.17),d.add(pe);const Te=new Re(.44,32,32),ue=new L(Te,E);ue.position.set(-.15,-.45,-.4),d.add(ue);const Me=new L(Te,E);Me.position.set(.15,-.45,-.4),d.add(Me);const Pe=new Re(.18,32,32),Ie=new L(Pe,j);Ie.position.set(0,-.35,-.8),d.add(Ie);const be=new Re(.6,32,32,0,Math.PI*2,0,Math.PI/2),ke=new Fe({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Le=new L(be,ke);Le.position.set(0,-.2,0),Le.rotation.x=Math.PI,Le.scale.set(1.25,1.25,1.25),me.add(Le);const He=new ei({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),B=new L(ee,He);B.position.set(0,-.26,0),B.scale.set(.7,.7,.7),B.rotation.x=-Math.PI/2,B.renderOrder=1,me.add(B),new Zi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ke){const We=new Bt("X",{font:Ke,size:.2,depth:.05}),it=new L(We,j);it.position.set(-.3,.99,.53),it.rotation.x=rt.degToRad(-5),it.rotation.y=rt.degToRad(-15),d.add(it);const Ce=new Bt("O",{font:Ke,size:.2,depth:.05}),ct=new L(Ce,j);ct.position.set(.14,.99,.53),ct.rotation.y=rt.degToRad(12),ct.rotation.x=rt.degToRad(-5),d.add(ct)}),Ie.renderOrder=1,d.rotation.x=.1,d.scale.set(1.4,1.4,1.4),m.add(d),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),_.position.set(e.bodyPosition.x,1,e.cameraPosition),_.lookAt(e.bodyPosition.x,0,0),_.position.z=4;let te=.05,Q=.06,ye=.2,_e=.25,Oe=0,qe=0;f(),zt(()=>e.bodyPosition,Ke=>{d.position.set(Ke.x,Ke.y,Ke.z)}),zt(()=>e.cameraPosition,Ke=>{_.position.set(e.bodyPosition.x,1,Ke),_.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,m)=>(yi(),Mi(ln,null,[Ze("div",{ref_key:"threeCanvas",ref:t,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ze("div",hE,[Ze("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ze("div",fE,[Ze("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ze("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ze("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),pE=Si(dE,[["__scopeId","data-v-eb44448e"]]),mE=[{path:"/3d-bear-arts/leather",name:"Leather",component:kw},{path:"/3d-bear-arts/pop-art",name:"Pop",component:Ww},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:$w},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:Jw},{path:"/3d-bear-arts/water",name:"Water Bear",component:nE},{path:"/3d-bear-arts/",name:"Water",component:oE},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:uE},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:pE}],gE=Dg({history:cg(),routes:mE}),np=A0(L0);np.use(gE);np.mount("#app");
