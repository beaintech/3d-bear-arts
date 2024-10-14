(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function rl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Rs=[],Bn=()=>{},_p=()=>!1,zo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ol=n=>n.startsWith("onUpdate:"),Ut=Object.assign,al=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vp=Object.prototype.hasOwnProperty,tt=(n,e)=>vp.call(n,e),qe=Array.isArray,rr=n=>Ho(n)==="[object Map]",xp=n=>Ho(n)==="[object Set]",Xe=n=>typeof n=="function",Lt=n=>typeof n=="string",Ws=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",ef=n=>(Mt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),yp=Object.prototype.toString,Ho=n=>yp.call(n),Mp=n=>Ho(n).slice(8,-1),Sp=n=>Ho(n)==="[object Object]",cl=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,or=rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},wp=/-(\w)/g,xn=Go(n=>n.replace(wp,(e,t)=>t?t.toUpperCase():"")),Ep=/\B([A-Z])/g,is=Go(n=>n.replace(Ep,"-$1").toLowerCase()),ko=Go(n=>n.charAt(0).toUpperCase()+n.slice(1)),oa=Go(n=>n?`on${ko(n)}`:""),Ci=(n,e)=>!Object.is(n,e),aa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},tf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},bp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let eu;const nf=()=>eu||(eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Lt(i)?Cp(i):ll(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(n)||Mt(n))return n}const Tp=/;(?![^(]*\))/g,Ap=/:([^]+)/,Rp=/\/\*[^]*?\*\//g;function Cp(n){const e={};return n.replace(Rp,"").split(Tp).forEach(t=>{if(t){const i=t.split(Ap);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function kn(n){let e="";if(Lt(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=kn(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Pp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lp=rl(Pp);function sf(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let an;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=an;try{return an=this,e()}finally{an=t}}}on(){an=this}off(){an=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Dp(){return an}let lt;const ca=new WeakSet;class rf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,an&&an.active&&an.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ca.has(this)&&(ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||af(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tu(this),cf(this);const e=lt,t=Cn;lt=this,Cn=!0;try{return this.fn()}finally{lf(this),lt=e,Cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fl(e);this.deps=this.depsTail=void 0,tu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nc(this)&&this.run()}get dirty(){return nc(this)}}let of=0,bs;function af(n){n.flags|=8,n.next=bs,bs=n}function ul(){of++}function hl(){if(--of>0)return;let n;for(;bs;){let e=bs,t;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=bs,bs=void 0;e;){if(t=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function lf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),fl(i),Up(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function nc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(uf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function uf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===_r))return;n.globalVersion=_r;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!nc(n)){n.flags&=-3;return}const t=lt,i=Cn;lt=n,Cn=!0;try{cf(n);const s=n.fn(n._value);(e.version===0||Ci(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{lt=t,Cn=i,lf(n),n.flags&=-3}}function fl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)fl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Up(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Cn=!0;const hf=[];function Li(){hf.push(Cn),Cn=!1}function Ii(){const n=hf.pop();Cn=n===void 0?!0:n}function tu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=lt;lt=void 0;try{e()}finally{lt=t}}}let _r=0;class Np{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!lt||!Cn||lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==lt)t=this.activeLink=new Np(lt,this),lt.deps?(t.prevDep=lt.depsTail,lt.depsTail.nextDep=t,lt.depsTail=t):lt.deps=lt.depsTail=t,ff(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=lt.depsTail,t.nextDep=void 0,lt.depsTail.nextDep=t,lt.depsTail=t,lt.deps===t&&(lt.deps=i)}return t}trigger(e){this.version++,_r++,this.notify(e)}notify(e){ul();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hl()}}}function ff(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ff(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ic=new WeakMap,Zi=Symbol(""),sc=Symbol(""),vr=Symbol("");function Gt(n,e,t){if(Cn&&lt){let i=ic.get(n);i||ic.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new dl),s.target=n,s.map=i,s.key=t),s.track()}}function ci(n,e,t,i,s,r){const o=ic.get(n);if(!o){_r++;return}const a=c=>{c&&c.trigger()};if(ul(),e==="clear")o.forEach(a);else{const c=qe(n),l=c&&cl(t);if(c&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===vr||!Ws(f)&&f>=u)&&a(h)})}else switch(t!==void 0&&a(o.get(t)),l&&a(o.get(vr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Zi)),rr(n)&&a(o.get(sc)));break;case"delete":c||(a(o.get(Zi)),rr(n)&&a(o.get(sc)));break;case"set":rr(n)&&a(o.get(Zi));break}}hl()}function as(n){const e=it(n);return e===n?e:(Gt(e,"iterate",vr),Pn(n)?e:e.map(Xt))}function pl(n){return Gt(n=it(n),"iterate",vr),n}const Fp={__proto__:null,[Symbol.iterator](){return la(this,Symbol.iterator,Xt)},concat(...n){return as(this).concat(...n.map(e=>qe(e)?as(e):e))},entries(){return la(this,"entries",n=>(n[1]=Xt(n[1]),n))},every(n,e){return jn(this,"every",n,e,void 0,arguments)},filter(n,e){return jn(this,"filter",n,e,t=>t.map(Xt),arguments)},find(n,e){return jn(this,"find",n,e,Xt,arguments)},findIndex(n,e){return jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return jn(this,"findLast",n,e,Xt,arguments)},findLastIndex(n,e){return jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ua(this,"includes",n)},indexOf(...n){return ua(this,"indexOf",n)},join(n){return as(this).join(n)},lastIndexOf(...n){return ua(this,"lastIndexOf",n)},map(n,e){return jn(this,"map",n,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...n){return $s(this,"push",n)},reduce(n,...e){return nu(this,"reduce",n,e)},reduceRight(n,...e){return nu(this,"reduceRight",n,e)},shift(){return $s(this,"shift")},some(n,e){return jn(this,"some",n,e,void 0,arguments)},splice(...n){return $s(this,"splice",n)},toReversed(){return as(this).toReversed()},toSorted(n){return as(this).toSorted(n)},toSpliced(...n){return as(this).toSpliced(...n)},unshift(...n){return $s(this,"unshift",n)},values(){return la(this,"values",Xt)}};function la(n,e,t){const i=pl(n),s=i[e]();return i!==n&&!Pn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Op=Array.prototype;function jn(n,e,t,i,s,r){const o=pl(n),a=o!==n&&!Pn(n),c=o[e];if(c!==Op[e]){const h=c.apply(n,r);return a?Xt(h):h}let l=t;o!==n&&(a?l=function(h,f){return t.call(this,Xt(h),f,n)}:t.length>2&&(l=function(h,f){return t.call(this,h,f,n)}));const u=c.call(o,l,i);return a&&s?s(u):u}function nu(n,e,t,i){const s=pl(n);let r=t;return s!==n&&(Pn(n)?t.length>3&&(r=function(o,a,c){return t.call(this,o,a,c,n)}):r=function(o,a,c){return t.call(this,o,Xt(a),c,n)}),s[e](r,...i)}function ua(n,e,t){const i=it(n);Gt(i,"iterate",vr);const s=i[e](...t);return(s===-1||s===!1)&&vl(t[0])?(t[0]=it(t[0]),i[e](...t)):s}function $s(n,e,t=[]){Li(),ul();const i=it(n)[e].apply(n,t);return hl(),Ii(),i}const Bp=rl("__proto__,__v_isRef,__isVue"),df=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ws));function zp(n){Ws(n)||(n=String(n));const e=it(this);return Gt(e,"has",n),e.hasOwnProperty(n)}class pf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Jp:vf:r?_f:gf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!s){let c;if(o&&(c=Fp[t]))return c;if(t==="hasOwnProperty")return zp}const a=Reflect.get(e,t,Bt(e)?e:i);return(Ws(t)?df.has(t):Bp(t))||(s||Gt(e,"get",t),r)?a:Bt(a)?o&&cl(t)?a:a.value:Mt(a)?s?yf(a):Wo(a):a}}class mf extends pf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const c=Ji(r);if(!Pn(i)&&!Ji(i)&&(r=it(r),i=it(i)),!qe(e)&&Bt(r)&&!Bt(i))return c?!1:(r.value=i,!0)}const o=qe(e)&&cl(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,Bt(e)?e:s);return e===it(s)&&(o?Ci(i,r)&&ci(e,"set",t,i):ci(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Ws(t)||!df.has(t))&&Gt(e,"has",t),i}ownKeys(e){return Gt(e,"iterate",qe(e)?"length":Zi),Reflect.ownKeys(e)}}class Hp extends pf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Gp=new mf,kp=new Hp,Vp=new mf(!0);const ml=n=>n,Vo=n=>Reflect.getPrototypeOf(n);function kr(n,e,t=!1,i=!1){n=n.__v_raw;const s=it(n),r=it(e);t||(Ci(e,r)&&Gt(s,"get",e),Gt(s,"get",r));const{has:o}=Vo(s),a=i?ml:t?xl:Xt;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Vr(n,e=!1){const t=this.__v_raw,i=it(t),s=it(n);return e||(Ci(n,s)&&Gt(i,"has",n),Gt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Wr(n,e=!1){return n=n.__v_raw,!e&&Gt(it(n),"iterate",Zi),Reflect.get(n,"size",n)}function iu(n,e=!1){!e&&!Pn(n)&&!Ji(n)&&(n=it(n));const t=it(this);return Vo(t).has.call(t,n)||(t.add(n),ci(t,"add",n,n)),this}function su(n,e,t=!1){!t&&!Pn(e)&&!Ji(e)&&(e=it(e));const i=it(this),{has:s,get:r}=Vo(i);let o=s.call(i,n);o||(n=it(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,e),o?Ci(e,a)&&ci(i,"set",n,e):ci(i,"add",n,e),this}function ru(n){const e=it(this),{has:t,get:i}=Vo(e);let s=t.call(e,n);s||(n=it(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ci(e,"delete",n,void 0),r}function ou(){const n=it(this),e=n.size!==0,t=n.clear();return e&&ci(n,"clear",void 0,void 0),t}function Xr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=it(o),c=e?ml:n?xl:Xt;return!n&&Gt(a,"iterate",Zi),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function qr(n,e,t){return function(...i){const s=this.__v_raw,r=it(s),o=rr(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...i),u=t?ml:e?xl:Xt;return!e&&Gt(r,"iterate",c?sc:Zi),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function di(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Wp(){const n={get(r){return kr(this,r)},get size(){return Wr(this)},has:Vr,add:iu,set:su,delete:ru,clear:ou,forEach:Xr(!1,!1)},e={get(r){return kr(this,r,!1,!0)},get size(){return Wr(this)},has:Vr,add(r){return iu.call(this,r,!0)},set(r,o){return su.call(this,r,o,!0)},delete:ru,clear:ou,forEach:Xr(!1,!0)},t={get(r){return kr(this,r,!0)},get size(){return Wr(this,!0)},has(r){return Vr.call(this,r,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Xr(!0,!1)},i={get(r){return kr(this,r,!0,!0)},get size(){return Wr(this,!0)},has(r){return Vr.call(this,r,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:Xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=qr(r,!1,!1),t[r]=qr(r,!0,!1),e[r]=qr(r,!1,!0),i[r]=qr(r,!0,!0)}),[n,t,e,i]}const[Xp,qp,Yp,$p]=Wp();function gl(n,e){const t=e?n?$p:Yp:n?qp:Xp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}const jp={get:gl(!1,!1)},Kp={get:gl(!1,!0)},Zp={get:gl(!0,!1)};const gf=new WeakMap,_f=new WeakMap,vf=new WeakMap,Jp=new WeakMap;function Qp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function em(n){return n.__v_skip||!Object.isExtensible(n)?0:Qp(Mp(n))}function Wo(n){return Ji(n)?n:_l(n,!1,Gp,jp,gf)}function xf(n){return _l(n,!1,Vp,Kp,_f)}function yf(n){return _l(n,!0,kp,Zp,vf)}function _l(n,e,t,i,s){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=em(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function ar(n){return Ji(n)?ar(n.__v_raw):!!(n&&n.__v_isReactive)}function Ji(n){return!!(n&&n.__v_isReadonly)}function Pn(n){return!!(n&&n.__v_isShallow)}function vl(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function tm(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&tf(n,"__v_skip",!0),n}const Xt=n=>Mt(n)?Wo(n):n,xl=n=>Mt(n)?yf(n):n;function Bt(n){return n?n.__v_isRef===!0:!1}function wt(n){return Mf(n,!1)}function nm(n){return Mf(n,!0)}function Mf(n,e){return Bt(n)?n:new im(n,e)}class im{constructor(e,t){this.dep=new dl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:Xt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Pn(e)||Ji(e);e=i?e:it(e),Ci(e,t)&&(this._rawValue=e,this._value=i?e:Xt(e),this.dep.trigger())}}function gn(n){return Bt(n)?n.value:n}const sm={get:(n,e,t)=>e==="__v_raw"?n:gn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Bt(s)&&!Bt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Sf(n){return ar(n)?n:new Proxy(n,sm)}class rm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new dl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return af(this),!0}get value(){const e=this.dep.track();return uf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function om(n,e,t=!1){let i,s;return Xe(n)?i=n:(i=n.get,s=n.set),new rm(i,s,t)}const Yr={},Co=new WeakMap;let Xi;function am(n,e=!1,t=Xi){if(t){let i=Co.get(t);i||Co.set(t,i=[]),i.push(n)}}function cm(n,e,t=ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=t,l=S=>s?S:Pn(S)||s===!1||s===0?Ei(S,1):Ei(S);let u,h,f,d,_=!1,y=!1;if(Bt(n)?(h=()=>n.value,_=Pn(n)):ar(n)?(h=()=>l(n),_=!0):qe(n)?(y=!0,_=n.some(S=>ar(S)||Pn(S)),h=()=>n.map(S=>{if(Bt(S))return S.value;if(ar(S))return l(S);if(Xe(S))return c?c(S,2):S()})):Xe(n)?e?h=c?()=>c(n,2):n:h=()=>{if(f){Li();try{f()}finally{Ii()}}const S=Xi;Xi=u;try{return c?c(n,3,[d]):n(d)}finally{Xi=S}}:h=Bn,e&&s){const S=h,I=s===!0?1/0:s;h=()=>Ei(S(),I)}const m=Dp(),p=()=>{u.stop(),m&&al(m.effects,u)};if(r&&e){const S=e;e=(...I)=>{S(...I),p()}}let b=y?new Array(n.length).fill(Yr):Yr;const x=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const I=u.run();if(s||_||(y?I.some((C,R)=>Ci(C,b[R])):Ci(I,b))){f&&f();const C=Xi;Xi=u;try{const R=[I,b===Yr?void 0:y&&b[0]===Yr?[]:b,d];c?c(e,3,R):e(...R),b=I}finally{Xi=C}}}else u.run()};return a&&a(x),u=new rf(h),u.scheduler=o?()=>o(x,!1):x,d=S=>am(S,!1,u),f=u.onStop=()=>{const S=Co.get(u);if(S){if(c)c(S,4);else for(const I of S)I();Co.delete(u)}},e?i?x(!0):b=u.run():o?o(x.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ei(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Bt(n))Ei(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)Ei(n[i],e,t);else if(xp(n)||rr(n))n.forEach(i=>{Ei(i,e,t)});else if(Sp(n)){for(const i in n)Ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ei(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dr(n,e,t,i){try{return i?n(...i):n()}catch(s){Xo(s,e,t)}}function Hn(n,e,t,i){if(Xe(n)){const s=Dr(n,e,t,i);return s&&ef(s)&&s.catch(r=>{Xo(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Hn(n[r],e,t,i));return s}}function Xo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,c,l)===!1)return}a=a.parent}if(r){Li(),Dr(r,null,10,[n,c,l]),Ii();return}}lm(n,t,s,i,o)}function lm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}let xr=!1,rc=!1;const qt=[];let Un=0;const Cs=[];let Mi=null,Ss=0;const wf=Promise.resolve();let yl=null;function Ef(n){const e=yl||wf;return n?e.then(this?n.bind(this):n):e}function um(n){let e=xr?Un+1:0,t=qt.length;for(;e<t;){const i=e+t>>>1,s=qt[i],r=yr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Ml(n){if(!(n.flags&1)){const e=yr(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=yr(t)?qt.push(n):qt.splice(um(e),0,n),n.flags|=1,bf()}}function bf(){!xr&&!rc&&(rc=!0,yl=wf.then(Af))}function hm(n){qe(n)?Cs.push(...n):Mi&&n.id===-1?Mi.splice(Ss+1,0,n):n.flags&1||(Cs.push(n),n.flags|=1),bf()}function au(n,e,t=xr?Un+1:0){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Tf(n){if(Cs.length){const e=[...new Set(Cs)].sort((t,i)=>yr(t)-yr(i));if(Cs.length=0,Mi){Mi.push(...e);return}for(Mi=e,Ss=0;Ss<Mi.length;Ss++){const t=Mi[Ss];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Mi=null,Ss=0}}const yr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Af(n){rc=!1,xr=!0;try{for(Un=0;Un<qt.length;Un++){const e=qt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Dr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<qt.length;Un++){const e=qt[Un];e&&(e.flags&=-2)}Un=0,qt.length=0,Tf(),xr=!1,yl=null,(qt.length||Cs.length)&&Af()}}let Rn=null,Rf=null;function Po(n){const e=Rn;return Rn=n,Rf=n&&n.type.__scopeId||null,e}function pn(n,e=Rn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&_u(-1);const r=Po(e);let o;try{o=n(...s)}finally{Po(r),i._d&&_u(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Oi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Li(),Hn(c,t,8,[n.el,a,n,e]),Ii())}}const fm=Symbol("_vte"),dm=n=>n.__isTeleport;function Sl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Sl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Kt(n,e){return Xe(n)?Ut({name:n.name},e,{setup:n}):n}function Cf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function oc(n,e,t,i,s=!1){if(qe(n)){n.forEach((_,y)=>oc(_,e&&(qe(e)?e[y]:e),t,i,s));return}if(cr(i)&&!s)return;const r=i.shapeFlag&4?Al(i.component):i.el,o=s?null:r,{i:a,r:c}=n,l=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,h=a.setupState,f=it(h),d=h===ut?()=>!1:_=>tt(f,_);if(l!=null&&l!==c&&(Lt(l)?(u[l]=null,d(l)&&(h[l]=null)):Bt(l)&&(l.value=null)),Xe(c))Dr(c,a,12,[o,u]);else{const _=Lt(c),y=Bt(c);if(_||y){const m=()=>{if(n.f){const p=_?d(c)?h[c]:u[c]:c.value;s?qe(p)&&al(p,r):qe(p)?p.includes(r)||p.push(r):_?(u[c]=[r],d(c)&&(h[c]=u[c])):(c.value=[r],n.k&&(u[n.k]=c.value))}else _?(u[c]=o,d(c)&&(h[c]=o)):y&&(c.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,on(m,t)):m()}}}const cr=n=>!!n.type.__asyncLoader,Pf=n=>n.type.__isKeepAlive;function pm(n,e){Lf(n,"a",e)}function mm(n,e){Lf(n,"da",e)}function Lf(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(qo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Pf(s.parent.vnode)&&gm(i,e,t,s),s=s.parent}}function gm(n,e,t,i){const s=qo(e,n,i,!0);wl(()=>{al(i[e],s)},t)}function qo(n,e,t=Ot,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Li();const a=Ur(t),c=Hn(e,t,n,o);return a(),Ii(),c});return i?s.unshift(r):s.push(r),r}}const hi=n=>(e,t=Ot)=>{(!jo||n==="sp")&&qo(n,(...i)=>e(...i),t)},_m=hi("bm"),ln=hi("m"),vm=hi("bu"),xm=hi("u"),ym=hi("bum"),wl=hi("um"),Mm=hi("sp"),Sm=hi("rtg"),wm=hi("rtc");function Em(n,e=Ot){qo("ec",n,e)}const bm="components";function cu(n,e){return Am(bm,n,!0,e)||n}const Tm=Symbol.for("v-ndc");function Am(n,e,t=!0,i=!1){const s=Rn||Ot;if(s){const r=s.type;{const a=m0(r,!1);if(a&&(a===e||a===xn(e)||a===ko(xn(e))))return r}const o=lu(s[n]||r[n],e)||lu(s.appContext[n],e);return!o&&i?r:o}}function lu(n,e){return n&&(n[e]||n[xn(e)]||n[ko(xn(e))])}const ac=n=>n?Zf(n)?Al(n):ac(n.parent):null,lr=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ac(n.parent),$root:n=>ac(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>El(n),$forceUpdate:n=>n.f||(n.f=()=>{Ml(n.update)}),$nextTick:n=>n.n||(n.n=Ef.bind(n.proxy)),$watch:n=>$m.bind(n)}),ha=(n,e)=>n!==ut&&!n.__isScriptSetup&&tt(n,e),Rm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ha(i,e))return o[e]=1,i[e];if(s!==ut&&tt(s,e))return o[e]=2,s[e];if((l=n.propsOptions[0])&&tt(l,e))return o[e]=3,r[e];if(t!==ut&&tt(t,e))return o[e]=4,t[e];cc&&(o[e]=0)}}const u=lr[e];let h,f;if(u)return e==="$attrs"&&Gt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ut&&tt(t,e))return o[e]=4,t[e];if(f=c.config.globalProperties,tt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ha(s,e)?(s[e]=t,!0):i!==ut&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ut&&tt(n,o)||ha(e,o)||(a=r[0])&&tt(a,o)||tt(i,o)||tt(lr,o)||tt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function uu(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let cc=!0;function Cm(n){const e=El(n),t=n.proxy,i=n.ctx;cc=!1,e.beforeCreate&&hu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:y,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:x,unmounted:S,render:I,renderTracked:C,renderTriggered:R,errorCaptured:U,serverPrefetch:ie,expose:M,inheritAttrs:E,components:q,directives:H,filters:j}=e;if(l&&Pm(l,i,null),o)for(const Z in o){const z=o[Z];Xe(z)&&(i[Z]=z.bind(t))}if(s){const Z=s.call(t,t);Mt(Z)&&(n.data=Wo(Z))}if(cc=!0,r)for(const Z in r){const z=r[Z],me=Xe(z)?z.bind(t,t):Xe(z.get)?z.get.bind(t,t):Bn,ue=!Xe(z)&&Xe(z.set)?z.set.bind(t):Bn,ve=Dt({get:me,set:ue});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Se=>ve.value=Se})}if(a)for(const Z in a)If(a[Z],i,t,Z);if(c){const Z=Xe(c)?c.call(t):c;Reflect.ownKeys(Z).forEach(z=>{xo(z,Z[z])})}u&&hu(u,n,"c");function G(Z,z){qe(z)?z.forEach(me=>Z(me.bind(t))):z&&Z(z.bind(t))}if(G(_m,h),G(ln,f),G(vm,d),G(xm,_),G(pm,y),G(mm,m),G(Em,U),G(wm,C),G(Sm,R),G(ym,b),G(wl,S),G(Mm,ie),qe(M))if(M.length){const Z=n.exposed||(n.exposed={});M.forEach(z=>{Object.defineProperty(Z,z,{get:()=>t[z],set:me=>t[z]=me})})}else n.exposed||(n.exposed={});I&&n.render===Bn&&(n.render=I),E!=null&&(n.inheritAttrs=E),q&&(n.components=q),H&&(n.directives=H),ie&&Cf(n)}function Pm(n,e,t=Bn){qe(n)&&(n=lc(n));for(const i in n){const s=n[i];let r;Mt(s)?"default"in s?r=li(s.from||i,s.default,!0):r=li(s.from||i):r=li(s),Bt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function hu(n,e,t){Hn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function If(n,e,t,i){let s=i.includes(".")?qf(t,i):()=>t[i];if(Lt(n)){const r=e[n];Xe(r)&&Ct(s,r)}else if(Xe(n))Ct(s,n.bind(t));else if(Mt(n))if(qe(n))n.forEach(r=>If(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&Ct(s,r,n)}}function El(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!t&&!i?c=e:(c={},s.length&&s.forEach(l=>Lo(c,l,o,!0)),Lo(c,e,o)),Mt(e)&&r.set(e,c),c}function Lo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Lo(n,r,t,!0),s&&s.forEach(o=>Lo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Lm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Lm={data:fu,props:du,emits:du,methods:ir,computed:ir,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:ir,directives:ir,watch:Dm,provide:fu,inject:Im};function fu(n,e){return e?n?function(){return Ut(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Im(n,e){return ir(lc(n),lc(e))}function lc(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function ir(n,e){return n?Ut(Object.create(null),n,e):e}function du(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:Ut(Object.create(null),uu(n),uu(e??{})):e}function Dm(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=kt(n[i],e[i]);return t}function Df(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Um=0;function Nm(n,e){return function(i,s=null){Xe(i)||(i=Ut({},i)),s!=null&&!Mt(s)&&(s=null);const r=Df(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:Um++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:_0,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(l,...h)):Xe(u)&&(o.add(u),u(l,...h))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,h){return h?(r.components[u]=h,l):r.components[u]},directive(u,h){return h?(r.directives[u]=h,l):r.directives[u]},mount(u,h,f){if(!c){const d=l._ceVNode||ot(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):n(d,u,f),c=!0,l._container=u,u.__vue_app__=l,Al(d.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Hn(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,h){return r.provides[u]=h,l},runWithContext(u){const h=Ps;Ps=l;try{return u()}finally{Ps=h}}};return l}}let Ps=null;function xo(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function li(n,e,t=!1){const i=Ot||Rn;if(i||Ps){const s=Ps?Ps._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const Uf={},Nf=()=>Object.create(Uf),Ff=n=>Object.getPrototypeOf(n)===Uf;function Fm(n,e,t,i=!1){const s={},r=Nf();n.propsDefaults=Object.create(null),Of(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:xf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Om(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=it(s),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Yo(n.emitsOptions,f))continue;const d=e[f];if(c)if(tt(r,f))d!==r[f]&&(r[f]=d,l=!0);else{const _=xn(f);s[_]=uc(c,a,_,d,n,!1)}else d!==r[f]&&(r[f]=d,l=!0)}}}else{Of(n,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!tt(e,h)&&((u=is(h))===h||!tt(e,u)))&&(c?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=uc(c,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!tt(e,h))&&(delete r[h],l=!0)}l&&ci(n.attrs,"set","")}function Of(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(or(c))continue;const l=e[c];let u;s&&tt(s,u=xn(c))?!r||!r.includes(u)?t[u]=l:(a||(a={}))[u]=l:Yo(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=it(t),l=a||ut;for(let u=0;u<r.length;u++){const h=r[u];t[h]=uc(s,c,h,l[h],n,!tt(l,h))}}return o}function uc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(c)){const{propsDefaults:l}=s;if(t in l)i=l[t];else{const u=Ur(s);i=l[t]=c.call(null,e),u()}}else i=c;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===is(t))&&(i=!0))}return i}const Bm=new WeakMap;function Bf(n,e,t=!1){const i=t?Bm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let c=!1;if(!Xe(n)){const u=h=>{c=!0;const[f,d]=Bf(h,e,!0);Ut(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!c)return Mt(n)&&i.set(n,Rs),Rs;if(qe(r))for(let u=0;u<r.length;u++){const h=xn(r[u]);pu(h)&&(o[h]=ut)}else if(r)for(const u in r){const h=xn(u);if(pu(h)){const f=r[u],d=o[h]=qe(f)||Xe(f)?{type:f}:Ut({},f),_=d.type;let y=!1,m=!0;if(qe(_))for(let p=0;p<_.length;++p){const b=_[p],x=Xe(b)&&b.name;if(x==="Boolean"){y=!0;break}else x==="String"&&(m=!1)}else y=Xe(_)&&_.name==="Boolean";d[0]=y,d[1]=m,(y||tt(d,"default"))&&a.push(h)}}const l=[o,a];return Mt(n)&&i.set(n,l),l}function pu(n){return n[0]!=="$"&&!or(n)}const zf=n=>n[0]==="_"||n==="$stable",bl=n=>qe(n)?n.map(Nn):[Nn(n)],zm=(n,e,t)=>{if(e._n)return e;const i=pn((...s)=>bl(e(...s)),t);return i._c=!1,i},Hf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(zf(s))continue;const r=n[s];if(Xe(r))e[s]=zm(s,r,i);else if(r!=null){const o=bl(r);e[s]=()=>o}}},Gf=(n,e)=>{const t=bl(e);n.slots.default=()=>t},kf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Hm=(n,e,t)=>{const i=n.slots=Nf();if(n.vnode.shapeFlag&32){const s=e._;s?(kf(i,e,t),t&&tf(i,"_",s,!0)):Hf(e,i)}else e&&Gf(n,e)},Gm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:kf(s,e,t):(r=!e.$stable,Hf(e,s)),o=e}else e&&(Gf(n,e),o={default:1});if(r)for(const a in s)!zf(a)&&o[a]==null&&delete s[a]},on=t0;function km(n){return Vm(n)}function Vm(n,e){const t=nf();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Bn,insertStaticContent:_}=n,y=(g,T,L,F=null,N=null,J=null,te=void 0,w=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!js(g,T)&&(F=O(g),Se(g,N,J,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:P,ref:V,shapeFlag:k}=T;switch(P){case $o:m(g,T,L,F);break;case Qi:p(g,T,L,F);break;case pa:g==null&&b(T,L,F,te);break;case ri:q(g,T,L,F,N,J,te,w,v);break;default:k&1?I(g,T,L,F,N,J,te,w,v):k&6?H(g,T,L,F,N,J,te,w,v):(k&64||k&128)&&P.process(g,T,L,F,N,J,te,w,v,ce)}V!=null&&N&&oc(V,g&&g.ref,J,T||g,!T)},m=(g,T,L,F)=>{if(g==null)i(T.el=a(T.children),L,F);else{const N=T.el=g.el;T.children!==g.children&&l(N,T.children)}},p=(g,T,L,F)=>{g==null?i(T.el=c(T.children||""),L,F):T.el=g.el},b=(g,T,L,F)=>{[g.el,g.anchor]=_(g.children,T,L,F,g.el,g.anchor)},x=({el:g,anchor:T},L,F)=>{let N;for(;g&&g!==T;)N=f(g),i(g,L,F),g=N;i(T,L,F)},S=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=f(g),s(g),g=L;s(T)},I=(g,T,L,F,N,J,te,w,v)=>{T.type==="svg"?te="svg":T.type==="math"&&(te="mathml"),g==null?C(T,L,F,N,J,te,w,v):ie(g,T,N,J,te,w,v)},C=(g,T,L,F,N,J,te,w)=>{let v,P;const{props:V,shapeFlag:k,transition:X,dirs:he}=g;if(v=g.el=o(g.type,J,V&&V.is,V),k&8?u(v,g.children):k&16&&U(g.children,v,null,F,N,fa(g,J),te,w),he&&Oi(g,null,F,"created"),R(v,g,g.scopeId,te,F),V){for(const ge in V)ge!=="value"&&!or(ge)&&r(v,ge,null,V[ge],J,F);"value"in V&&r(v,"value",null,V.value,J),(P=V.onVnodeBeforeMount)&&Dn(P,F,g)}he&&Oi(g,null,F,"beforeMount");const fe=Wm(N,X);fe&&X.beforeEnter(v),i(v,T,L),((P=V&&V.onVnodeMounted)||fe||he)&&on(()=>{P&&Dn(P,F,g),fe&&X.enter(v),he&&Oi(g,null,F,"mounted")},N)},R=(g,T,L,F,N)=>{if(L&&d(g,L),F)for(let J=0;J<F.length;J++)d(g,F[J]);if(N){let J=N.subTree;if(T===J||$f(J.type)&&(J.ssContent===T||J.ssFallback===T)){const te=N.vnode;R(g,te,te.scopeId,te.slotScopeIds,N.parent)}}},U=(g,T,L,F,N,J,te,w,v=0)=>{for(let P=v;P<g.length;P++){const V=g[P]=w?Si(g[P]):Nn(g[P]);y(null,V,T,L,F,N,J,te,w)}},ie=(g,T,L,F,N,J,te)=>{const w=T.el=g.el;let{patchFlag:v,dynamicChildren:P,dirs:V}=T;v|=g.patchFlag&16;const k=g.props||ut,X=T.props||ut;let he;if(L&&Bi(L,!1),(he=X.onVnodeBeforeUpdate)&&Dn(he,L,T,g),V&&Oi(T,g,L,"beforeUpdate"),L&&Bi(L,!0),(k.innerHTML&&X.innerHTML==null||k.textContent&&X.textContent==null)&&u(w,""),P?M(g.dynamicChildren,P,w,L,F,fa(T,N),J):te||z(g,T,w,null,L,F,fa(T,N),J,!1),v>0){if(v&16)E(w,k,X,L,N);else if(v&2&&k.class!==X.class&&r(w,"class",null,X.class,N),v&4&&r(w,"style",k.style,X.style,N),v&8){const fe=T.dynamicProps;for(let ge=0;ge<fe.length;ge++){const Re=fe[ge],pe=k[Re],ye=X[Re];(ye!==pe||Re==="value")&&r(w,Re,pe,ye,N,L)}}v&1&&g.children!==T.children&&u(w,T.children)}else!te&&P==null&&E(w,k,X,L,N);((he=X.onVnodeUpdated)||V)&&on(()=>{he&&Dn(he,L,T,g),V&&Oi(T,g,L,"updated")},F)},M=(g,T,L,F,N,J,te)=>{for(let w=0;w<T.length;w++){const v=g[w],P=T[w],V=v.el&&(v.type===ri||!js(v,P)||v.shapeFlag&70)?h(v.el):L;y(v,P,V,null,F,N,J,te,!0)}},E=(g,T,L,F,N)=>{if(T!==L){if(T!==ut)for(const J in T)!or(J)&&!(J in L)&&r(g,J,T[J],null,N,F);for(const J in L){if(or(J))continue;const te=L[J],w=T[J];te!==w&&J!=="value"&&r(g,J,w,te,N,F)}"value"in L&&r(g,"value",T.value,L.value,N)}},q=(g,T,L,F,N,J,te,w,v)=>{const P=T.el=g?g.el:a(""),V=T.anchor=g?g.anchor:a("");let{patchFlag:k,dynamicChildren:X,slotScopeIds:he}=T;he&&(w=w?w.concat(he):he),g==null?(i(P,L,F),i(V,L,F),U(T.children||[],L,V,N,J,te,w,v)):k>0&&k&64&&X&&g.dynamicChildren?(M(g.dynamicChildren,X,L,N,J,te,w),(T.key!=null||N&&T===N.subTree)&&Vf(g,T,!0)):z(g,T,L,V,N,J,te,w,v)},H=(g,T,L,F,N,J,te,w,v)=>{T.slotScopeIds=w,g==null?T.shapeFlag&512?N.ctx.activate(T,L,F,te,v):j(T,L,F,N,J,te,v):se(g,T,v)},j=(g,T,L,F,N,J,te)=>{const w=g.component=u0(g,F,N);if(Pf(g)&&(w.ctx.renderer=ce),h0(w,!1,te),w.asyncDep){if(N&&N.registerDep(w,G,te),!g.el){const v=w.subTree=ot(Qi);p(null,v,T,L)}}else G(w,g,T,L,N,J,te)},se=(g,T,L)=>{const F=T.component=g.component;if(Qm(g,T,L))if(F.asyncDep&&!F.asyncResolved){Z(F,T,L);return}else F.next=T,F.update();else T.el=g.el,F.vnode=T},G=(g,T,L,F,N,J,te)=>{const w=()=>{if(g.isMounted){let{next:k,bu:X,u:he,parent:fe,vnode:ge}=g;{const Ne=Wf(g);if(Ne){k&&(k.el=ge.el,Z(g,k,te)),Ne.asyncDep.then(()=>{g.isUnmounted||w()});return}}let Re=k,pe;Bi(g,!1),k?(k.el=ge.el,Z(g,k,te)):k=ge,X&&aa(X),(pe=k.props&&k.props.onVnodeBeforeUpdate)&&Dn(pe,fe,k,ge),Bi(g,!0);const ye=da(g),Ue=g.subTree;g.subTree=ye,y(Ue,ye,h(Ue.el),O(Ue),g,N,J),k.el=ye.el,Re===null&&e0(g,ye.el),he&&on(he,N),(pe=k.props&&k.props.onVnodeUpdated)&&on(()=>Dn(pe,fe,k,ge),N)}else{let k;const{el:X,props:he}=T,{bm:fe,m:ge,parent:Re,root:pe,type:ye}=g,Ue=cr(T);if(Bi(g,!1),fe&&aa(fe),!Ue&&(k=he&&he.onVnodeBeforeMount)&&Dn(k,Re,T),Bi(g,!0),X&&Q){const Ne=()=>{g.subTree=da(g),Q(X,g.subTree,g,N,null)};Ue&&ye.__asyncHydrate?ye.__asyncHydrate(X,g,Ne):Ne()}else{pe.ce&&pe.ce._injectChildStyle(ye);const Ne=g.subTree=da(g);y(null,Ne,L,F,g,N,J),T.el=Ne.el}if(ge&&on(ge,N),!Ue&&(k=he&&he.onVnodeMounted)){const Ne=T;on(()=>Dn(k,Re,Ne),N)}(T.shapeFlag&256||Re&&cr(Re.vnode)&&Re.vnode.shapeFlag&256)&&g.a&&on(g.a,N),g.isMounted=!0,T=L=F=null}};g.scope.on();const v=g.effect=new rf(w);g.scope.off();const P=g.update=v.run.bind(v),V=g.job=v.runIfDirty.bind(v);V.i=g,V.id=g.uid,v.scheduler=()=>Ml(V),Bi(g,!0),P()},Z=(g,T,L)=>{T.component=g;const F=g.vnode.props;g.vnode=T,g.next=null,Om(g,T.props,F,L),Gm(g,T.children,L),Li(),au(g),Ii()},z=(g,T,L,F,N,J,te,w,v=!1)=>{const P=g&&g.children,V=g?g.shapeFlag:0,k=T.children,{patchFlag:X,shapeFlag:he}=T;if(X>0){if(X&128){ue(P,k,L,F,N,J,te,w,v);return}else if(X&256){me(P,k,L,F,N,J,te,w,v);return}}he&8?(V&16&&le(P,N,J),k!==P&&u(L,k)):V&16?he&16?ue(P,k,L,F,N,J,te,w,v):le(P,N,J,!0):(V&8&&u(L,""),he&16&&U(k,L,F,N,J,te,w,v))},me=(g,T,L,F,N,J,te,w,v)=>{g=g||Rs,T=T||Rs;const P=g.length,V=T.length,k=Math.min(P,V);let X;for(X=0;X<k;X++){const he=T[X]=v?Si(T[X]):Nn(T[X]);y(g[X],he,L,null,N,J,te,w,v)}P>V?le(g,N,J,!0,!1,k):U(T,L,F,N,J,te,w,v,k)},ue=(g,T,L,F,N,J,te,w,v)=>{let P=0;const V=T.length;let k=g.length-1,X=V-1;for(;P<=k&&P<=X;){const he=g[P],fe=T[P]=v?Si(T[P]):Nn(T[P]);if(js(he,fe))y(he,fe,L,null,N,J,te,w,v);else break;P++}for(;P<=k&&P<=X;){const he=g[k],fe=T[X]=v?Si(T[X]):Nn(T[X]);if(js(he,fe))y(he,fe,L,null,N,J,te,w,v);else break;k--,X--}if(P>k){if(P<=X){const he=X+1,fe=he<V?T[he].el:F;for(;P<=X;)y(null,T[P]=v?Si(T[P]):Nn(T[P]),L,fe,N,J,te,w,v),P++}}else if(P>X)for(;P<=k;)Se(g[P],N,J,!0),P++;else{const he=P,fe=P,ge=new Map;for(P=fe;P<=X;P++){const Pe=T[P]=v?Si(T[P]):Nn(T[P]);Pe.key!=null&&ge.set(Pe.key,P)}let Re,pe=0;const ye=X-fe+1;let Ue=!1,Ne=0;const xe=new Array(ye);for(P=0;P<ye;P++)xe[P]=0;for(P=he;P<=k;P++){const Pe=g[P];if(pe>=ye){Se(Pe,N,J,!0);continue}let We;if(Pe.key!=null)We=ge.get(Pe.key);else for(Re=fe;Re<=X;Re++)if(xe[Re-fe]===0&&js(Pe,T[Re])){We=Re;break}We===void 0?Se(Pe,N,J,!0):(xe[We-fe]=P+1,We>=Ne?Ne=We:Ue=!0,y(Pe,T[We],L,null,N,J,te,w,v),pe++)}const Ge=Ue?Xm(xe):Rs;for(Re=Ge.length-1,P=ye-1;P>=0;P--){const Pe=fe+P,We=T[Pe],B=Pe+1<V?T[Pe+1].el:F;xe[P]===0?y(null,We,L,B,N,J,te,w,v):Ue&&(Re<0||P!==Ge[Re]?ve(We,L,B,2):Re--)}}},ve=(g,T,L,F,N=null)=>{const{el:J,type:te,transition:w,children:v,shapeFlag:P}=g;if(P&6){ve(g.component.subTree,T,L,F);return}if(P&128){g.suspense.move(T,L,F);return}if(P&64){te.move(g,T,L,ce);return}if(te===ri){i(J,T,L);for(let k=0;k<v.length;k++)ve(v[k],T,L,F);i(g.anchor,T,L);return}if(te===pa){x(g,T,L);return}if(F!==2&&P&1&&w)if(F===0)w.beforeEnter(J),i(J,T,L),on(()=>w.enter(J),N);else{const{leave:k,delayLeave:X,afterLeave:he}=w,fe=()=>i(J,T,L),ge=()=>{k(J,()=>{fe(),he&&he()})};X?X(J,fe,ge):ge()}else i(J,T,L)},Se=(g,T,L,F=!1,N=!1)=>{const{type:J,props:te,ref:w,children:v,dynamicChildren:P,shapeFlag:V,patchFlag:k,dirs:X,cacheIndex:he}=g;if(k===-2&&(N=!1),w!=null&&oc(w,null,L,g,!0),he!=null&&(T.renderCache[he]=void 0),V&256){T.ctx.deactivate(g);return}const fe=V&1&&X,ge=!cr(g);let Re;if(ge&&(Re=te&&te.onVnodeBeforeUnmount)&&Dn(Re,T,g),V&6)de(g.component,L,F);else{if(V&128){g.suspense.unmount(L,F);return}fe&&Oi(g,null,T,"beforeUnmount"),V&64?g.type.remove(g,T,L,ce,F):P&&!P.hasOnce&&(J!==ri||k>0&&k&64)?le(P,T,L,!1,!0):(J===ri&&k&384||!N&&V&16)&&le(v,T,L),F&&Ie(g)}(ge&&(Re=te&&te.onVnodeUnmounted)||fe)&&on(()=>{Re&&Dn(Re,T,g),fe&&Oi(g,null,T,"unmounted")},L)},Ie=g=>{const{type:T,el:L,anchor:F,transition:N}=g;if(T===ri){ee(L,F);return}if(T===pa){S(g);return}const J=()=>{s(L),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:te,delayLeave:w}=N,v=()=>te(L,J);w?w(g.el,J,v):v()}else J()},ee=(g,T)=>{let L;for(;g!==T;)L=f(g),s(g),g=L;s(T)},de=(g,T,L)=>{const{bum:F,scope:N,job:J,subTree:te,um:w,m:v,a:P}=g;mu(v),mu(P),F&&aa(F),N.stop(),J&&(J.flags|=8,Se(te,g,T,L)),w&&on(w,T),on(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},le=(g,T,L,F=!1,N=!1,J=0)=>{for(let te=J;te<g.length;te++)Se(g[te],T,L,F,N)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),L=T&&T[fm];return L?f(L):T};let ne=!1;const K=(g,T,L)=>{g==null?T._vnode&&Se(T._vnode,null,null,!0):y(T._vnode||null,g,T,null,null,null,L),T._vnode=g,ne||(ne=!0,au(),Tf(),ne=!1)},ce={p:y,um:Se,m:ve,r:Ie,mt:j,mc:U,pc:z,pbc:M,n:O,o:n};let Me,Q;return{render:K,hydrate:Me,createApp:Nm(K,Me)}}function fa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Bi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Wm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Vf(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Si(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Vf(o,a)),a.type===$o&&(a.el=o.el)}}function Xm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=t[t.length-1],n[s]<l){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<l?r=a+1:o=a;l<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wf(e)}function mu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const qm=Symbol.for("v-scx"),Ym=()=>li(qm);function Ct(n,e,t){return Xf(n,e,t)}function Xf(n,e,t=ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ut({},t);let c;if(jo)if(r==="sync"){const f=Ym();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=Bn,f.resume=Bn,f.pause=Bn,f}const l=Ot;a.call=(f,d,_)=>Hn(f,l,d,_);let u=!1;r==="post"?a.scheduler=f=>{on(f,l&&l.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(f,d)=>{d?f():Ml(f)}),a.augmentJob=f=>{e&&(f.flags|=4),u&&(f.flags|=2,l&&(f.id=l.uid,f.i=l))};const h=cm(n,e,a);return c&&c.push(h),h}function $m(n,e,t){const i=this.proxy,s=Lt(n)?n.includes(".")?qf(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=Ur(this),a=Xf(s,r.bind(i),t);return o(),a}function qf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const jm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${xn(e)}Modifiers`]||n[`${is(e)}Modifiers`];function Km(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),o=r&&jm(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Lt(u)?u.trim():u)),o.number&&(s=t.map(bp)));let a,c=i[a=oa(e)]||i[a=oa(xn(e))];!c&&r&&(c=i[a=oa(is(e))]),c&&Hn(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Hn(l,n,6,s)}}function Yf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const c=l=>{const u=Yf(l,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?(Mt(n)&&i.set(n,null),null):(qe(r)?r.forEach(c=>o[c]=null):Ut(o,r),Mt(n)&&i.set(n,o),o)}function Yo(n,e){return!n||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,is(e))||tt(n,e))}function da(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:y}=n,m=Po(n);let p,b;try{if(t.shapeFlag&4){const S=s||i,I=S;p=Nn(l.call(I,S,u,h,d,f,_)),b=a}else{const S=e;p=Nn(S.length>1?S(h,{attrs:a,slots:o,emit:c}):S(h,null)),b=e.props?a:Zm(a)}}catch(S){ur.length=0,Xo(S,n,1),p=ot(Qi)}let x=p;if(b&&y!==!1){const S=Object.keys(b),{shapeFlag:I}=x;S.length&&I&7&&(r&&S.some(ol)&&(b=Jm(b,r)),x=Ns(x,b,!1,!0))}return t.dirs&&(x=Ns(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Sl(x,t.transition),p=x,Po(m),p}const Zm=n=>{let e;for(const t in n)(t==="class"||t==="style"||zo(t))&&((e||(e={}))[t]=n[t]);return e},Jm=(n,e)=>{const t={};for(const i in n)(!ol(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Qm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?gu(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Yo(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gu(i,o,l):!0:!!o;return!1}function gu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Yo(t,r))return!0}return!1}function e0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $f=n=>n.__isSuspense;function t0(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):hm(n)}const ri=Symbol.for("v-fgt"),$o=Symbol.for("v-txt"),Qi=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),ur=[];let cn=null;function en(n=!1){ur.push(cn=n?null:[])}function n0(){ur.pop(),cn=ur[ur.length-1]||null}let Mr=1;function _u(n){Mr+=n,n<0&&cn&&(cn.hasOnce=!0)}function jf(n){return n.dynamicChildren=Mr>0?cn||Rs:null,n0(),Mr>0&&cn&&cn.push(n),n}function un(n,e,t,i,s,r){return jf(Sr(n,e,t,i,s,r,!0))}function i0(n,e,t,i,s){return jf(ot(n,e,t,i,s,!0))}function Io(n){return n?n.__v_isVNode===!0:!1}function js(n,e){return n.type===e.type&&n.key===e.key}const Kf=({key:n})=>n??null,yo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Lt(n)||Bt(n)||Xe(n)?{i:Rn,r:n,k:e,f:!!t}:n:null);function Sr(n,e=null,t=null,i=0,s=null,r=n===ri?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kf(e),ref:e&&yo(e),scopeId:Rf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rn};return a?(Tl(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=Lt(t)?8:16),Mr>0&&!o&&cn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&cn.push(c),c}const ot=s0;function s0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Tm)&&(n=Qi),Io(n)){const a=Ns(n,e,!0);return t&&Tl(a,t),Mr>0&&!r&&cn&&(a.shapeFlag&6?cn[cn.indexOf(n)]=a:cn.push(a)),a.patchFlag=-2,a}if(g0(n)&&(n=n.__vccOpts),e){e=r0(e);let{class:a,style:c}=e;a&&!Lt(a)&&(e.class=kn(a)),Mt(c)&&(vl(c)&&!qe(c)&&(c=Ut({},c)),e.style=ll(c))}const o=Lt(n)?1:$f(n)?128:dm(n)?64:Mt(n)?4:Xe(n)?2:0;return Sr(n,e,t,i,s,o,r,!0)}function r0(n){return n?vl(n)||Ff(n)?Ut({},n):n:null}function Ns(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=n,l=e?a0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Kf(l),ref:e&&e.ref?t&&r?qe(r)?r.concat(yo(e)):[r,yo(e)]:yo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ri?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ns(n.ssContent),ssFallback:n.ssFallback&&Ns(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Sl(u,c.clone(u)),u}function mn(n=" ",e=0){return ot($o,null,n,e)}function o0(n="",e=!1){return e?(en(),i0(Qi,null,n)):ot(Qi,null,n)}function Nn(n){return n==null||typeof n=="boolean"?ot(Qi):qe(n)?ot(ri,null,n.slice()):Io(n)?Si(n):ot($o,null,String(n))}function Si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ns(n)}function Tl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Tl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ff(e)?e._ctx=Rn:s===3&&Rn&&(Rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Rn},t=32):(e=String(e),i&64?(t=16,e=[mn(e)]):t=8);n.children=e,n.shapeFlag|=t}function a0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=kn([e.class,i.class]));else if(s==="style")e.style=ll([e.style,i.style]);else if(zo(s)){const r=e[s],o=i[s];o&&r!==o&&!(qe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Dn(n,e,t,i=null){Hn(n,e,7,[t,i])}const c0=Df();let l0=0;function u0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||c0,r={uid:l0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bf(i,s),emitsOptions:Yf(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Km.bind(null,r),n.ce&&n.ce(r),r}let Ot=null,Do,hc;{const n=nf(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Do=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),hc=e("__VUE_SSR_SETTERS__",t=>jo=t)}const Ur=n=>{const e=Ot;return Do(n),n.scope.on(),()=>{n.scope.off(),Do(e)}},vu=()=>{Ot&&Ot.scope.off(),Do(null)};function Zf(n){return n.vnode.shapeFlag&4}let jo=!1;function h0(n,e=!1,t=!1){e&&hc(e);const{props:i,children:s}=n.vnode,r=Zf(n);Fm(n,i,r,e),Hm(n,s,t);const o=r?f0(n,e):void 0;return e&&hc(!1),o}function f0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Rm);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?p0(n):null,r=Ur(n);Li();const o=Dr(i,n,0,[n.props,s]);if(Ii(),r(),ef(o)){if(cr(n)||Cf(n),o.then(vu,vu),e)return o.then(a=>{xu(n,a,e)}).catch(a=>{Xo(a,n,0)});n.asyncDep=o}else xu(n,o,e)}else Jf(n,e)}function xu(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=Sf(e)),Jf(n,t)}let yu;function Jf(n,e,t){const i=n.type;if(!n.render){if(!e&&yu&&!i.render){const s=i.template||El(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Ut(Ut({isCustomElement:r,delimiters:a},o),c);i.render=yu(s,l)}}n.render=i.render||Bn}{const s=Ur(n);Li();try{Cm(n)}finally{Ii(),s()}}}const d0={get(n,e){return Gt(n,"get",""),n[e]}};function p0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,d0),slots:n.slots,emit:n.emit,expose:e}}function Al(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Sf(tm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in lr)return lr[t](n)},has(e,t){return t in e||t in lr}})):n.proxy}function m0(n,e=!0){return Xe(n)?n.displayName||n.name:n.name||e&&n.__name}function g0(n){return Xe(n)&&"__vccOpts"in n}const Dt=(n,e)=>om(n,e,jo);function Qf(n,e,t){const i=arguments.length;return i===2?Mt(e)&&!qe(e)?Io(e)?ot(n,null,[e]):ot(n,e):ot(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Io(t)&&(t=[t]),ot(n,e,t))}const _0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fc;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{fc=Mu.createPolicy("vue",{createHTML:n=>n})}catch{}const ed=fc?n=>fc.createHTML(n):n=>n,v0="http://www.w3.org/2000/svg",x0="http://www.w3.org/1998/Math/MathML",si=typeof document<"u"?document:null,Su=si&&si.createElement("template"),y0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?si.createElementNS(v0,n):e==="mathml"?si.createElementNS(x0,n):t?si.createElement(n,{is:t}):si.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>si.createTextNode(n),createComment:n=>si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Su.innerHTML=ed(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Su.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},M0=Symbol("_vtc");function S0(n,e,t){const i=n[M0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const wu=Symbol("_vod"),w0=Symbol("_vsh"),E0=Symbol(""),b0=/(^|;)\s*display\s*:/;function T0(n,e,t){const i=n.style,s=Lt(t);let r=!1;if(t&&!s){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Mo(i,a,"")}else for(const o in e)t[o]==null&&Mo(i,o,"");for(const o in t)o==="display"&&(r=!0),Mo(i,o,t[o])}else if(s){if(e!==t){const o=i[E0];o&&(t+=";"+o),i.cssText=t,r=b0.test(t)}}else e&&n.removeAttribute("style");wu in n&&(n[wu]=r?i.display:"",n[w0]&&(i.display="none"))}const Eu=/\s*!important$/;function Mo(n,e,t){if(qe(t))t.forEach(i=>Mo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=A0(n,e);Eu.test(t)?n.setProperty(is(i),t.replace(Eu,""),"important"):n[i]=t}}const bu=["Webkit","Moz","ms"],ma={};function A0(n,e){const t=ma[e];if(t)return t;let i=xn(e);if(i!=="filter"&&i in n)return ma[e]=i;i=ko(i);for(let s=0;s<bu.length;s++){const r=bu[s]+i;if(r in n)return ma[e]=r}return e}const Tu="http://www.w3.org/1999/xlink";function Au(n,e,t,i,s,r=Lp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Tu,e.slice(6,e.length)):n.setAttributeNS(Tu,e,t):t==null||r&&!sf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Ws(t)?String(t):t)}function Ru(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ed(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=sf(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function R0(n,e,t,i){n.addEventListener(e,t,i)}function C0(n,e,t,i){n.removeEventListener(e,t,i)}const Cu=Symbol("_vei");function P0(n,e,t,i,s=null){const r=n[Cu]||(n[Cu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=L0(e);if(i){const l=r[e]=U0(i,s);R0(n,a,l,c)}else o&&(C0(n,a,o,c),r[e]=void 0)}}const Pu=/(?:Once|Passive|Capture)$/;function L0(n){let e;if(Pu.test(n)){e={};let i;for(;i=n.match(Pu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):is(n.slice(2)),e]}let ga=0;const I0=Promise.resolve(),D0=()=>ga||(I0.then(()=>ga=0),ga=Date.now());function U0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Hn(N0(i,t.value),e,5,[i])};return t.value=n,t.attached=D0(),t}function N0(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Lu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,F0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?S0(n,i,o):e==="style"?T0(n,t,i):zo(e)?ol(e)||P0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O0(n,e,i,o))?(Ru(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Au(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Lt(i))?Ru(n,xn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Au(n,e,i,o))};function O0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Lu(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lu(e)&&Lt(t)?!1:e in n}const B0=Ut({patchProp:F0},y0);let Iu;function z0(){return Iu||(Iu=km(B0))}const H0=(...n)=>{const e=z0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=k0(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,G0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function G0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function k0(n){return Lt(n)?document.querySelector(n):n}const V0={id:"app"},W0=Kt({__name:"App",setup(n){return(e,t)=>{const i=cu("router-link"),s=cu("router-view");return en(),un("div",V0,[Sr("nav",null,[ot(i,{to:"/3d-bear-arts"},{default:pn(()=>t[0]||(t[0]=[mn("Home")])),_:1}),ot(i,{to:"/3d-bear-arts/half"},{default:pn(()=>t[1]||(t[1]=[mn("New")])),_:1}),ot(i,{to:"/3d-bear-arts/sliver"},{default:pn(()=>t[2]||(t[2]=[mn("Sliver")])),_:1}),ot(i,{to:"/3d-bear-arts/metal"},{default:pn(()=>t[3]||(t[3]=[mn("Metal")])),_:1}),ot(i,{to:"/3d-bear-arts/halfTransparent"},{default:pn(()=>t[4]||(t[4]=[mn("HalfTranparent")])),_:1}),ot(i,{to:"/3d-bear-arts/bluePink"},{default:pn(()=>t[5]||(t[5]=[mn("BluePink")])),_:1}),ot(i,{to:"/3d-bear-arts/diamond"},{default:pn(()=>t[6]||(t[6]=[mn("Diamond")])),_:1}),ot(i,{to:"/3d-bear-arts/pink"},{default:pn(()=>t[7]||(t[7]=[mn("Pink")])),_:1}),ot(i,{to:"/3d-bear-arts/purple"},{default:pn(()=>t[8]||(t[8]=[mn("Purple")])),_:1}),ot(i,{to:"/3d-bear-arts/blue"},{default:pn(()=>t[9]||(t[9]=[mn("Blue")])),_:1}),ot(i,{to:"/3d-bear-arts/glass"},{default:pn(()=>t[10]||(t[10]=[mn("Glass")])),_:1})]),ot(s)])}}}),hn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},X0=hn(W0,[["__scopeId","data-v-474f3b60"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ws=typeof document<"u";function td(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function q0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&td(n.default)}const rt=Object.assign;function _a(n,e){const t={};for(const i in e){const s=e[i];t[i]=Ln(s)?s.map(n):n(s)}return t}const hr=()=>{},Ln=Array.isArray,nd=/#/g,Y0=/&/g,$0=/\//g,j0=/=/g,K0=/\?/g,id=/\+/g,Z0=/%5B/g,J0=/%5D/g,sd=/%5E/g,Q0=/%60/g,rd=/%7B/g,eg=/%7C/g,od=/%7D/g,tg=/%20/g;function Rl(n){return encodeURI(""+n).replace(eg,"|").replace(Z0,"[").replace(J0,"]")}function ng(n){return Rl(n).replace(rd,"{").replace(od,"}").replace(sd,"^")}function dc(n){return Rl(n).replace(id,"%2B").replace(tg,"+").replace(nd,"%23").replace(Y0,"%26").replace(Q0,"`").replace(rd,"{").replace(od,"}").replace(sd,"^")}function ig(n){return dc(n).replace(j0,"%3D")}function sg(n){return Rl(n).replace(nd,"%23").replace(K0,"%3F")}function rg(n){return n==null?"":sg(n).replace($0,"%2F")}function wr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const og=/\/$/,ag=n=>n.replace(og,"");function va(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=hg(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:wr(o)}}function cg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Du(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function lg(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Fs(e.matched[i],t.matched[s])&&ad(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Fs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ad(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!ug(n[t],e[t]))return!1;return!0}function ug(n,e){return Ln(n)?Uu(n,e):Ln(e)?Uu(e,n):n===e}function Uu(n,e){return Ln(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function hg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Er;(function(n){n.pop="pop",n.push="push"})(Er||(Er={}));var fr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(fr||(fr={}));function fg(n){if(!n)if(ws){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ag(n)}const dg=/^[^#]+#/;function pg(n,e){return n.replace(dg,"#")+e}function mg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ko=()=>({left:window.scrollX,top:window.scrollY});function gg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=mg(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nu(n,e){return(history.state?history.state.position-e:-1)+n}const pc=new Map;function _g(n,e){pc.set(n,e)}function vg(n){const e=pc.get(n);return pc.delete(n),e}let xg=()=>location.protocol+"//"+location.host;function cd(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Du(c,"")}return Du(t,n)+i+s}function yg(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=cd(n,location),_=t.value,y=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===_){o=null;return}m=y?f.position-y.position:0}else i(d);s.forEach(p=>{p(t.value,_,{delta:m,type:Er.pop,direction:m?m>0?fr.forward:fr.back:fr.unknown})})};function c(){o=t.value}function l(f){s.push(f);const d=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(rt({},f.state,{scroll:Ko()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Fu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Ko():null}}function Mg(n){const{history:e,location:t}=window,i={value:cd(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:xg()+n+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(c,l){const u=rt({},e.state,Fu(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,u,!0),i.value=c}function a(c,l){const u=rt({},s.value,e.state,{forward:c,scroll:Ko()});r(u.current,u,!0);const h=rt({},Fu(i.value,c,null),{position:u.position+1},l);r(c,h,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function Sg(n){n=fg(n);const e=Mg(n),t=yg(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=rt({location:"",base:n,go:i,createHref:pg.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function wg(n){return typeof n=="string"||n&&typeof n=="object"}function ld(n){return typeof n=="string"||typeof n=="symbol"}const ud=Symbol("");var Ou;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ou||(Ou={}));function Os(n,e){return rt(new Error,{type:n,[ud]:!0},e)}function Kn(n,e){return n instanceof Error&&ud in n&&(e==null||!!(n.type&e))}const Bu="[^/]+?",Eg={sensitive:!1,strict:!1,start:!0,end:!0},bg=/[.+*?^${}()[\]/\\]/g;function Tg(n,e){const t=rt({},Eg,e),i=[];let s=t.start?"^":"";const r=[];for(const l of n){const u=l.length?[]:[90];t.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(bg,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:y,optional:m,regexp:p}=f;r.push({name:_,repeatable:y,optional:m});const b=p||Bu;if(b!==Bu){d+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+S.message)}}let x=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(x=m&&l.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),s+=x,d+=20,m&&(d+=-8),y&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=r[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:y,optional:m}=d,p=_ in l?l[_]:"";if(Ln(p)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Ln(p)?p.join("/"):p;if(!b)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function Ag(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function hd(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Ag(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(zu(i))return 1;if(zu(s))return-1}return s.length-i.length}function zu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Rg={type:0,value:""},Cg=/[a-zA-Z0-9_]/;function Pg(n){if(!n)return[[]];if(n==="/")return[[Rg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${l}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(t===0?r.push({type:0,value:l}):t===1||t===2||t===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:c==="("?t=2:Cg.test(c)?f():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Lg(n,e,t){const i=Tg(Pg(n.path),t),s=rt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ig(n,e){const t=[],i=new Map;e=Vu({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,f,d){const _=!d,y=Gu(h);y.aliasOf=d&&d.record;const m=Vu(e,h),p=[y];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const I of S)p.push(Gu(rt({},y,{components:d?d.record.components:y.components,path:I,aliasOf:d?d.record:y})))}let b,x;for(const S of p){const{path:I}=S;if(f&&I[0]!=="/"){const C=f.record.path,R=C[C.length-1]==="/"?"":"/";S.path=f.record.path+(I&&R+I)}if(b=Lg(S,f,m),d?d.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),_&&h.name&&!ku(b)&&o(h.name)),fd(b)&&c(b),y.children){const C=y.children;for(let R=0;R<C.length;R++)r(C[R],b,d&&d.children[R])}d=d||b}return x?()=>{o(x)}:hr}function o(h){if(ld(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function c(h){const f=Ng(h,t);t.splice(f,0,h),h.record.name&&!ku(h)&&i.set(h.record.name,h)}function l(h,f){let d,_={},y,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Os(1,{location:h});m=d.record.name,_=rt(Hu(f.params,d.keys.filter(x=>!x.optional).concat(d.parent?d.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),h.params&&Hu(h.params,d.keys.map(x=>x.name))),y=d.stringify(_)}else if(h.path!=null)y=h.path,d=t.find(x=>x.re.test(y)),d&&(_=d.parse(y),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(x=>x.re.test(f.path)),!d)throw Os(1,{location:h,currentLocation:f});m=d.record.name,_=rt({},f.params,h.params),y=d.stringify(_)}const p=[];let b=d;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:y,params:_,matched:p,meta:Ug(p)}}n.forEach(h=>r(h));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Hu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Gu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Dg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Dg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function ku(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ug(n){return n.reduce((e,t)=>rt(e,t.meta),{})}function Vu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Ng(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;hd(n,e[r])<0?i=r:t=r+1}const s=Fg(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Fg(n){let e=n;for(;e=e.parent;)if(fd(e)&&hd(n,e)===0)return e}function fd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Og(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(id," "),o=r.indexOf("="),a=wr(o<0?r:r.slice(0,o)),c=o<0?null:wr(r.slice(o+1));if(a in e){let l=e[a];Ln(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Wu(n){let e="";for(let t in n){const i=n[t];if(t=ig(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ln(i)?i.map(r=>r&&dc(r)):[i&&dc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Bg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Ln(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const zg=Symbol(""),Xu=Symbol(""),Cl=Symbol(""),dd=Symbol(""),mc=Symbol("");function Ks(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function wi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(Os(4,{from:t,to:e})):f instanceof Error?c(f):wg(f)?c(Os(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,l));let h=Promise.resolve(u);n.length<3&&(h=h.then(l)),h.catch(f=>c(f))})}function xa(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(td(c)){const u=(c.__vccOpts||c)[e];u&&r.push(wi(u,t,i,o,a,s))}else{let l=c();r.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=q0(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&wi(d,t,i,o,a,s)()}))}}return r}function qu(n){const e=li(Cl),t=li(dd),i=Dt(()=>{const c=gn(n.to);return e.resolve(c)}),s=Dt(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Fs.bind(null,u));if(f>-1)return f;const d=Yu(c[l-2]);return l>1&&Yu(u)===d&&h[h.length-1].path!==d?h.findIndex(Fs.bind(null,c[l-2])):f}),r=Dt(()=>s.value>-1&&Vg(t.params,i.value.params)),o=Dt(()=>s.value>-1&&s.value===t.matched.length-1&&ad(t.params,i.value.params));function a(c={}){return kg(c)?e[gn(n.replace)?"replace":"push"](gn(n.to)).catch(hr):Promise.resolve()}return{route:i,href:Dt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Hg=Kt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qu,setup(n,{slots:e}){const t=Wo(qu(n)),{options:i}=li(Cl),s=Dt(()=>({[$u(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[$u(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Qf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Gg=Hg;function kg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Vg(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Ln(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Yu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const $u=(n,e,t)=>n??e??t,Wg=Kt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=li(mc),s=Dt(()=>n.route||i.value),r=li(Xu,0),o=Dt(()=>{let l=gn(r);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Dt(()=>s.value.matched[o.value]);xo(Xu,Dt(()=>o.value+1)),xo(zg,a),xo(mc,s);const c=wt();return Ct(()=>[c.value,a.value,n.name],([l,u,h],[f,d,_])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Fs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return ju(t.default,{Component:f,route:l});const d=h.props[u],_=d?d===!0?l.params:typeof d=="function"?d(l):d:null,m=Qf(f,rt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ju(t.default,{Component:m,route:l})||m}}});function ju(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Xg=Wg;function qg(n){const e=Ig(n.routes,n),t=n.parseQuery||Og,i=n.stringifyQuery||Wu,s=n.history,r=Ks(),o=Ks(),a=Ks(),c=nm(pi);let l=pi;ws&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_a.bind(null,O=>""+O),h=_a.bind(null,rg),f=_a.bind(null,wr);function d(O,ne){let K,ce;return ld(O)?(K=e.getRecordMatcher(O),ce=ne):ce=O,e.addRoute(ce,K)}function _(O){const ne=e.getRecordMatcher(O);ne&&e.removeRoute(ne)}function y(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,ne){if(ne=rt({},ne||c.value),typeof O=="string"){const T=va(t,O,ne.path),L=e.resolve({path:T.path},ne),F=s.createHref(T.fullPath);return rt(T,L,{params:f(L.params),hash:wr(T.hash),redirectedFrom:void 0,href:F})}let K;if(O.path!=null)K=rt({},O,{path:va(t,O.path,ne.path).path});else{const T=rt({},O.params);for(const L in T)T[L]==null&&delete T[L];K=rt({},O,{params:h(T)}),ne.params=h(ne.params)}const ce=e.resolve(K,ne),Me=O.hash||"";ce.params=u(f(ce.params));const Q=cg(i,rt({},O,{hash:ng(Me),path:ce.path})),g=s.createHref(Q);return rt({fullPath:Q,hash:Me,query:i===Wu?Bg(O.query):O.query||{}},ce,{redirectedFrom:void 0,href:g})}function b(O){return typeof O=="string"?va(t,O,c.value.path):rt({},O)}function x(O,ne){if(l!==O)return Os(8,{from:ne,to:O})}function S(O){return R(O)}function I(O){return S(rt(b(O),{replace:!0}))}function C(O){const ne=O.matched[O.matched.length-1];if(ne&&ne.redirect){const{redirect:K}=ne;let ce=typeof K=="function"?K(O):K;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=b(ce):{path:ce},ce.params={}),rt({query:O.query,hash:O.hash,params:ce.path!=null?{}:O.params},ce)}}function R(O,ne){const K=l=p(O),ce=c.value,Me=O.state,Q=O.force,g=O.replace===!0,T=C(K);if(T)return R(rt(b(T),{state:typeof T=="object"?rt({},Me,T.state):Me,force:Q,replace:g}),ne||K);const L=K;L.redirectedFrom=ne;let F;return!Q&&lg(i,ce,K)&&(F=Os(16,{to:L,from:ce}),ve(ce,ce,!0,!1)),(F?Promise.resolve(F):M(L,ce)).catch(N=>Kn(N)?Kn(N,2)?N:ue(N):z(N,L,ce)).then(N=>{if(N){if(Kn(N,2))return R(rt({replace:g},b(N.to),{state:typeof N.to=="object"?rt({},Me,N.to.state):Me,force:Q}),ne||L)}else N=q(L,ce,!0,g,Me);return E(L,ce,N),N})}function U(O,ne){const K=x(O,ne);return K?Promise.reject(K):Promise.resolve()}function ie(O){const ne=ee.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(O):O()}function M(O,ne){let K;const[ce,Me,Q]=Yg(O,ne);K=xa(ce.reverse(),"beforeRouteLeave",O,ne);for(const T of ce)T.leaveGuards.forEach(L=>{K.push(wi(L,O,ne))});const g=U.bind(null,O,ne);return K.push(g),le(K).then(()=>{K=[];for(const T of r.list())K.push(wi(T,O,ne));return K.push(g),le(K)}).then(()=>{K=xa(Me,"beforeRouteUpdate",O,ne);for(const T of Me)T.updateGuards.forEach(L=>{K.push(wi(L,O,ne))});return K.push(g),le(K)}).then(()=>{K=[];for(const T of Q)if(T.beforeEnter)if(Ln(T.beforeEnter))for(const L of T.beforeEnter)K.push(wi(L,O,ne));else K.push(wi(T.beforeEnter,O,ne));return K.push(g),le(K)}).then(()=>(O.matched.forEach(T=>T.enterCallbacks={}),K=xa(Q,"beforeRouteEnter",O,ne,ie),K.push(g),le(K))).then(()=>{K=[];for(const T of o.list())K.push(wi(T,O,ne));return K.push(g),le(K)}).catch(T=>Kn(T,8)?T:Promise.reject(T))}function E(O,ne,K){a.list().forEach(ce=>ie(()=>ce(O,ne,K)))}function q(O,ne,K,ce,Me){const Q=x(O,ne);if(Q)return Q;const g=ne===pi,T=ws?history.state:{};K&&(ce||g?s.replace(O.fullPath,rt({scroll:g&&T&&T.scroll},Me)):s.push(O.fullPath,Me)),c.value=O,ve(O,ne,K,g),ue()}let H;function j(){H||(H=s.listen((O,ne,K)=>{if(!de.listening)return;const ce=p(O),Me=C(ce);if(Me){R(rt(Me,{replace:!0}),ce).catch(hr);return}l=ce;const Q=c.value;ws&&_g(Nu(Q.fullPath,K.delta),Ko()),M(ce,Q).catch(g=>Kn(g,12)?g:Kn(g,2)?(R(g.to,ce).then(T=>{Kn(T,20)&&!K.delta&&K.type===Er.pop&&s.go(-1,!1)}).catch(hr),Promise.reject()):(K.delta&&s.go(-K.delta,!1),z(g,ce,Q))).then(g=>{g=g||q(ce,Q,!1),g&&(K.delta&&!Kn(g,8)?s.go(-K.delta,!1):K.type===Er.pop&&Kn(g,20)&&s.go(-1,!1)),E(ce,Q,g)}).catch(hr)}))}let se=Ks(),G=Ks(),Z;function z(O,ne,K){ue(O);const ce=G.list();return ce.length?ce.forEach(Me=>Me(O,ne,K)):console.error(O),Promise.reject(O)}function me(){return Z&&c.value!==pi?Promise.resolve():new Promise((O,ne)=>{se.add([O,ne])})}function ue(O){return Z||(Z=!O,j(),se.list().forEach(([ne,K])=>O?K(O):ne()),se.reset()),O}function ve(O,ne,K,ce){const{scrollBehavior:Me}=n;if(!ws||!Me)return Promise.resolve();const Q=!K&&vg(Nu(O.fullPath,0))||(ce||!K)&&history.state&&history.state.scroll||null;return Ef().then(()=>Me(O,ne,Q)).then(g=>g&&gg(g)).catch(g=>z(g,O,ne))}const Se=O=>s.go(O);let Ie;const ee=new Set,de={currentRoute:c,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:y,resolve:p,options:n,push:S,replace:I,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:me,install(O){const ne=this;O.component("RouterLink",Gg),O.component("RouterView",Xg),O.config.globalProperties.$router=ne,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(c)}),ws&&!Ie&&c.value===pi&&(Ie=!0,S(s.location).catch(Me=>{}));const K={};for(const Me in pi)Object.defineProperty(K,Me,{get:()=>c.value[Me],enumerable:!0});O.provide(Cl,ne),O.provide(dd,xf(K)),O.provide(mc,c);const ce=O.unmount;ee.add(O),O.unmount=function(){ee.delete(O),ee.size<1&&(l=pi,H&&H(),H=null,c.value=pi,Ie=!1,Z=!1),ce()}}};function le(O){return O.reduce((ne,K)=>ne.then(()=>ie(K)),Promise.resolve())}return de}function Yg(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(l=>Fs(l,a))?i.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>Fs(l,c))||s.push(c))}return[t,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pl="169",$g=0,Ku=1,jg=2,pd=1,Kg=2,ii=3,Pi=0,Jt=1,On=2,Ai=0,Ls=1,Zu=2,Ju=3,Qu=4,Zg=5,$i=100,Jg=101,Qg=102,e_=103,t_=104,n_=200,i_=201,s_=202,r_=203,gc=204,_c=205,o_=206,a_=207,c_=208,l_=209,u_=210,h_=211,f_=212,d_=213,p_=214,vc=0,xc=1,yc=2,Bs=3,Mc=4,Sc=5,wc=6,Ec=7,md=0,m_=1,g_=2,Ri=0,__=1,v_=2,x_=3,ss=4,y_=5,M_=6,S_=7,gd=300,zs=301,Hs=302,bc=303,Tc=304,Zo=306,br=1e3,Ki=1001,Ac=1002,_n=1003,w_=1004,$r=1005,Tn=1006,ya=1007,Ti=1008,ui=1009,_d=1010,vd=1011,Tr=1012,Ll=1013,es=1014,oi=1015,Nr=1016,Il=1017,Dl=1018,Gs=1020,xd=35902,yd=1021,Md=1022,vn=1023,Sd=1024,wd=1025,Is=1026,ks=1027,Ed=1028,Ul=1029,bd=1030,Nl=1031,Fl=1033,So=33776,wo=33777,Eo=33778,bo=33779,Rc=35840,Cc=35841,Pc=35842,Lc=35843,Ic=36196,Dc=37492,Uc=37496,Nc=37808,Fc=37809,Oc=37810,Bc=37811,zc=37812,Hc=37813,Gc=37814,kc=37815,Vc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,$c=37821,To=36492,jc=36494,Kc=36495,Td=36283,Zc=36284,Jc=36285,Qc=36286,E_=3200,b_=3201,Ad=0,T_=1,bi="",bn="srgb",Di="srgb-linear",Ol="display-p3",Jo="display-p3-linear",Uo="linear",ft="srgb",No="rec709",Fo="p3",cs=7680,eh=519,A_=512,R_=513,C_=514,Rd=515,P_=516,L_=517,I_=518,D_=519,th=35044,nh="300 es",ai=2e3,Oo=2001;class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const dr=Math.PI/180,Ar=180/Math.PI;function rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Bl(n,e){return(n%e+e)%e}function U_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function N_(n,e,t){return n!==e?(t-n)/(e-n):0}function pr(n,e,t){return(1-t)*n+t*e}function F_(n,e,t,i){return pr(n,e,1-Math.exp(-t*i))}function O_(n,e=1){return e-Math.abs(Bl(n,e*2)-e)}function B_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function z_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function H_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function G_(n,e){return n+Math.random()*(e-n)}function k_(n){return n*(.5-Math.random())}function V_(n){n!==void 0&&(ih=n);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W_(n){return n*dr}function X_(n){return n*Ar}function q_(n){return(n&n-1)===0&&n!==0}function Y_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function j_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*_,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*_,a*l);break;case"ZYZ":n.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ze={DEG2RAD:dr,RAD2DEG:Ar,generateUUID:rs,clamp:Rt,euclideanModulo:Bl,mapLinear:U_,inverseLerp:N_,lerp:pr,damp:F_,pingpong:O_,smoothstep:B_,smootherstep:z_,randInt:H_,randFloat:G_,randFloatSpread:k_,seededRandom:V_,degToRad:W_,radToDeg:X_,isPowerOfTwo:q_,ceilPowerOfTwo:Y_,floorPowerOfTwo:$_,setQuaternionFromProperEuler:j_,normalize:Vt,denormalize:Es};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,s,r,o,a,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],y=s[0],m=s[3],p=s[6],b=s[1],x=s[4],S=s[7],I=s[2],C=s[5],R=s[8];return r[0]=o*y+a*b+c*I,r[3]=o*m+a*x+c*C,r[6]=o*p+a*S+c*R,r[1]=l*y+u*b+h*I,r[4]=l*m+u*x+h*C,r[7]=l*p+u*S+h*R,r[2]=f*y+d*b+_*I,r[5]=f*m+d*x+_*C,r[8]=f*p+d*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,_=t*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(s*l-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=f*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new je;function Cd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function K_(){const n=Rr("canvas");return n.style.display="block",n}const sh={};function Ao(n){n in sh||(sh[n]=!0,console.warn(n))}function Z_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function J_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Q_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rh=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oh=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[Di]:{transfer:Uo,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[bn]:{transfer:ft,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Jo]:{transfer:Uo,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(oh),fromReference:n=>n.applyMatrix3(rh)},[Ol]:{transfer:ft,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(oh),fromReference:n=>n.applyMatrix3(rh).convertLinearToSRGB()}},ev=new Set([Di,Jo]),nt={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ev.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zs[e].toReference,s=Zs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zs[n].primaries},getTransfer:function(n){return n===bi?Uo:Zs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Zs[e].luminanceCoefficients)}};function Ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class tv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Rr("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ds(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ds(t[i]/255)*255):t[i]=Ds(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nv=0;class Pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wa(s[o].image)):r.push(wa(s[o]))}else r=wa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iv=0;class Yt extends Xs{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Ki,s=Ki,r=Tn,o=Ti,a=vn,c=ui,l=Yt.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=rs(),this.name="",this.source=new Pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=gd;Yt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(d+1)/2,I=(p+1)/2,C=(u+f)/4,R=(h+y)/4,U=(_+m)/4;return x>S&&x>I?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=C/i,r=R/i):S>I?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=C/s,r=U/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=R/r,s=U/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-y)/b,this.z=(f-u)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sv extends Xs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Yt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends sv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ld extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rv extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=y;return}if(h!==y||c!==f||l!==d||u!==_){let m=1-a;const p=c*f+l*d+u*_+h*y,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),C=Math.atan2(I,p*b);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const S=a*b;if(c=c*m+f*S,l=l*m+d*S,u=u*m+_*S,h=h*m+y*S,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-a*d,e[t+2]=l*_+u*d+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new W,ah=new Fr;class Or{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Kr.subVectors(this.max,Js),us.subVectors(e.a,Js),hs.subVectors(e.b,Js),fs.subVectors(e.c,Js),mi.subVectors(hs,us),gi.subVectors(fs,hs),zi.subVectors(us,fs);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-zi.z,zi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,zi.z,0,-zi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-zi.y,zi.x,0];return!ba(t,us,hs,fs,Kr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,us,hs,fs,Kr))?!1:(Zr.crossVectors(mi,gi),t=[Zr.x,Zr.y,Zr.z],ba(t,us,hs,fs,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new W,new W,new W,new W,new W,new W,new W,new W],Sn=new W,jr=new Or,us=new W,hs=new W,fs=new W,mi=new W,gi=new W,zi=new W,Js=new W,Kr=new W,Zr=new W,Hi=new W;function ba(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hi.fromArray(n,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ov=new Or,Qs=new W,Ta=new W;class zl{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ov.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Ta)),this.expandByPoint(Qs.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new W,Aa=new W,Jr=new W,_i=new W,Ra=new W,Qr=new W,Ca=new W;class av{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Aa.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Aa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=_i.dot(this.direction),c=-_i.dot(Jr),l=_i.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Aa).addScaledVector(Jr,f),d}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){Ra.subVectors(t,e),Qr.subVectors(i,e),Ca.crossVectors(Ra,Qr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const c=a*this.direction.dot(Qr.crossVectors(_i,Qr));if(c<0)return null;const l=a*this.direction.dot(Ra.cross(_i));if(l<0||c+l>o)return null;const u=-a*_i.dot(Ca);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,s,r,o,a,c,l,u,h,f,d,_,y,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,f,d,_,y,m)}set(e,t,i,s,r,o,a,c,l,u,h,f,d,_,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,y=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,_=l*u,y=l*h;t[0]=f+y*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,_=l*u,y=l*h;t[0]=f-y*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,y=a*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+y,t[1]=c*h,t[5]=y*l+f,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,_=a*c,y=a*l;t[0]=c*u,t[4]=y-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-y*h}else if(e.order==="XZY"){const f=o*c,d=o*l,_=a*c,y=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+y,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cv,e,lv)}lookAt(e,t,i){const s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),vi.crossVectors(i,sn),vi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),vi.crossVectors(i,sn)),vi.normalize(),eo.crossVectors(sn,vi),s[0]=vi.x,s[4]=eo.x,s[8]=sn.x,s[1]=vi.y,s[5]=eo.y,s[9]=sn.y,s[2]=vi.z,s[6]=eo.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],y=i[6],m=i[10],p=i[14],b=i[3],x=i[7],S=i[11],I=i[15],C=s[0],R=s[4],U=s[8],ie=s[12],M=s[1],E=s[5],q=s[9],H=s[13],j=s[2],se=s[6],G=s[10],Z=s[14],z=s[3],me=s[7],ue=s[11],ve=s[15];return r[0]=o*C+a*M+c*j+l*z,r[4]=o*R+a*E+c*se+l*me,r[8]=o*U+a*q+c*G+l*ue,r[12]=o*ie+a*H+c*Z+l*ve,r[1]=u*C+h*M+f*j+d*z,r[5]=u*R+h*E+f*se+d*me,r[9]=u*U+h*q+f*G+d*ue,r[13]=u*ie+h*H+f*Z+d*ve,r[2]=_*C+y*M+m*j+p*z,r[6]=_*R+y*E+m*se+p*me,r[10]=_*U+y*q+m*G+p*ue,r[14]=_*ie+y*H+m*Z+p*ve,r[3]=b*C+x*M+S*j+I*z,r[7]=b*R+x*E+S*se+I*me,r[11]=b*U+x*q+S*G+I*ue,r[15]=b*ie+x*H+S*Z+I*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],y=e[7],m=e[11],p=e[15];return _*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*d-i*c*d)+y*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+t*l*h-t*a*d-r*o*h+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-t*c*h+t*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],y=e[13],m=e[14],p=e[15],b=h*m*l-y*f*l+y*c*d-a*m*d-h*c*p+a*f*p,x=_*f*l-u*m*l-_*c*d+o*m*d+u*c*p-o*f*p,S=u*y*l-_*h*l+_*a*d-o*y*d-u*a*p+o*h*p,I=_*h*c-u*y*c-_*a*f+o*y*f+u*a*m-o*h*m,C=t*b+i*x+s*S+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(y*f*r-h*m*r-y*s*d+i*m*d+h*s*p-i*f*p)*R,e[2]=(a*m*r-y*c*r+y*s*l-i*m*l-a*s*p+i*c*p)*R,e[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*d-i*c*d)*R,e[4]=x*R,e[5]=(u*m*r-_*f*r+_*s*d-t*m*d-u*s*p+t*f*p)*R,e[6]=(_*c*r-o*m*r-_*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*d+t*c*d)*R,e[8]=S*R,e[9]=(_*h*r-u*y*r-_*i*d+t*y*d+u*i*p-t*h*p)*R,e[10]=(o*y*r-_*a*r+_*i*l-t*y*l-o*i*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*d-t*a*d)*R,e[12]=I*R,e[13]=(u*y*s-_*h*s+_*i*f-t*y*f-u*i*m+t*h*m)*R,e[14]=(_*a*s-o*y*s-_*i*c+t*y*c+o*i*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,_=r*h,y=o*u,m=o*h,p=a*h,b=c*l,x=c*u,S=c*h,I=i.x,C=i.y,R=i.z;return s[0]=(1-(y+p))*I,s[1]=(d+S)*I,s[2]=(_-x)*I,s[3]=0,s[4]=(d-S)*C,s[5]=(1-(f+p))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(_+x)*R,s[9]=(m-b)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);const l=1/r,u=1/o,h=1/a;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ai){const c=this.elements,l=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,_;if(a===ai)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Oo)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ai){const c=this.elements,l=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*l,d=(i+s)*u;let _,y;if(a===ai)_=(o+r)*h,y=-2*h;else if(a===Oo)_=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ds=new W,wn=new dt,cv=new W(0,0,0),lv=new W(1,1,1),vi=new W,eo=new W,sn=new W,ch=new dt,lh=new Fr;class Gn{constructor(e=0,t=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uv=0;const uh=new W,ps=new Fr,Qn=new dt,to=new W,er=new W,hv=new W,fv=new Fr,hh=new W(1,0,0),fh=new W(0,1,0),dh=new W(0,0,1),ph={type:"added"},dv={type:"removed"},ms={type:"childadded",child:null},Pa={type:"childremoved",child:null};class zt extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new W,t=new Gn,i=new Fr,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new je}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?to.copy(e):to.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(er,to,this.up):Qn.lookAt(to,er,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Qn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dv),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}zt.DEFAULT_UP=new W(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new W,ei=new W,La=new W,ti=new W,gs=new W,_s=new W,mh=new W,Ia=new W,Da=new W,Ua=new W,Na=new at,Fa=new at,Oa=new at;class An{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),En.subVectors(e,t),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){En.subVectors(s,t),ei.subVectors(i,t),La.subVectors(e,t);const o=En.dot(En),a=En.dot(ei),c=En.dot(La),l=ei.dot(ei),u=ei.dot(La),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Na.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,i),Oa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Na,r.x),o.addScaledVector(Fa,r.y),o.addScaledVector(Oa,r.z),o}static isFrontFacing(e,t,i,s){return En.subVectors(i,t),ei.subVectors(e,t),En.cross(ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),En.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,i),_s.subVectors(r,i),Ia.subVectors(e,i);const c=gs.dot(Ia),l=_s.dot(Ia);if(c<=0&&l<=0)return t.copy(i);Da.subVectors(e,s);const u=gs.dot(Da),h=_s.dot(Da);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(gs,o);Ua.subVectors(e,r);const d=gs.dot(Ua),_=_s.dot(Ua);if(_>=0&&d<=_)return t.copy(r);const y=d*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(_s,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return mh.subVectors(r,s),a=(h-u)/(h-u+(d-_)),t.copy(s).addScaledVector(mh,a);const p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ba(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Bl(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ba(o,r,e+1/3),this.g=Ba(o,r,e),this.b=Ba(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=bn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=Dd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return nt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Rt(Ft.r*255,0,255))*65536+Math.round(Rt(Ft.g*255,0,255))*256+Math.round(Rt(Ft.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=bn){nt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,s=Ft.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(no);const i=pr(xi.h,no.h,t),s=pr(xi.s,no.s,t),r=pr(xi.l,no.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new He;He.NAMES=Dd;let pv=0;class Br extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Ls,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gc&&(i.blendSrc=this.blendSrc),this.blendDst!==_c&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xt extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new W,io=new Ae;class zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}}class Ud extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nd extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mv=0;const dn=new dt,za=new zt,vs=new W,rn=new Or,tr=new Or,At=new W;class In extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?Nd:Ud)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(rn.min,tr.min),rn.expandByPoint(At),At.addVectors(rn.max,tr.max),rn.expandByPoint(At)):(rn.expandByPoint(tr.min),rn.expandByPoint(tr.max))}rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)At.fromBufferAttribute(a,l),c&&(vs.fromBufferAttribute(e,l),At.add(vs)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new W,c[U]=new W;const l=new W,u=new W,h=new W,f=new Ae,d=new Ae,_=new Ae,y=new W,m=new W;function p(U,ie,M){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,ie),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,ie),_.fromBufferAttribute(r,M),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const E=1/(d.x*_.y-_.x*d.y);isFinite(E)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(E),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(E),a[U].add(y),a[ie].add(y),a[M].add(y),c[U].add(m),c[ie].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,ie=b.length;U<ie;++U){const M=b[U],E=M.start,q=M.count;for(let H=E,j=E+q;H<j;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new W,S=new W,I=new W,C=new W;function R(U){I.fromBufferAttribute(s,U),C.copy(I);const ie=a[U];x.copy(ie),x.sub(I.multiplyScalar(I.dot(ie))).normalize(),S.crossVectors(C,ie);const E=S.dot(c[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,E)}for(let U=0,ie=b.length;U<ie;++U){const M=b[U],E=M.start,q=M.count;for(let H=E,j=E+q;H<j;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new W,r=new W,o=new W,a=new W,c=new W,l=new W,u=new W,h=new W;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new zn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new dt,Gi=new av,so=new zl,_h=new W,ro=new W,oo=new W,ao=new W,Ha=new W,co=new W,vh=new W,lo=new W;class D extends zt{constructor(e=new In,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ha.fromBufferAttribute(h,e),o?co.addScaledVector(Ha,u):co.addScaledVector(Ha.sub(t),u))}t.add(co)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(so.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(so,_h)===null||Gi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(gh.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(gh),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,I=x;S<I;S+=3){const C=a.getX(S),R=a.getX(S+1),U=a.getX(S+2);s=uo(this,p,e,i,l,u,h,C,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const b=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);s=uo(this,o,e,i,l,u,h,b,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,I=x;S<I;S+=3){const C=S,R=S+1,U=S+2;s=uo(this,p,e,i,l,u,h,C,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const b=m,x=m+1,S=m+2;s=uo(this,o,e,i,l,u,h,b,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function gv(n,e,t,i,s,r,o,a){let c;if(e.side===Jt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Pi,a),c===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:n}}function uo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ro),n.getVertexPosition(c,oo),n.getVertexPosition(l,ao);const u=gv(n,e,t,i,ro,oo,ao,vh);if(u){const h=new W;An.getBarycoord(vh,ro,oo,ao,h),s&&(u.uv=An.getInterpolatedAttribute(s,a,c,l,h,new Ae)),r&&(u.uv1=An.getInterpolatedAttribute(r,a,c,l,h,new Ae)),o&&(u.normal=An.getInterpolatedAttribute(o,a,c,l,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new W,materialIndex:0};An.getNormal(ro,oo,ao,f.normal),u.face=f,u.barycoord=h}return u}class zr extends In{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function _(y,m,p,b,x,S,I,C,R,U,ie){const M=S/R,E=I/U,q=S/2,H=I/2,j=C/2,se=R+1,G=U+1;let Z=0,z=0;const me=new W;for(let ue=0;ue<G;ue++){const ve=ue*E-H;for(let Se=0;Se<se;Se++){const Ie=Se*M-q;me[y]=Ie*b,me[m]=ve*x,me[p]=j,l.push(me.x,me.y,me.z),me[y]=0,me[m]=0,me[p]=C>0?1:-1,u.push(me.x,me.y,me.z),h.push(Se/R),h.push(1-ue/U),Z+=1}}for(let ue=0;ue<U;ue++)for(let ve=0;ve<R;ve++){const Se=f+ve+se*ue,Ie=f+ve+se*(ue+1),ee=f+(ve+1)+se*(ue+1),de=f+(ve+1)+se*ue;c.push(Se,Ie,de),c.push(Ie,ee,de),z+=6}a.addGroup(d,z,ie),d+=z,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const s in i)e[s]=i[s]}return e}function _v(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const vv={clone:Vs,merge:Wt};var xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mt extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Od extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new W,xh=new Ae,yh=new Ae;class vt extends Od{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,xh,yh),t.subVectors(yh,xh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,ys=1;class Bd extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vt(xs,ys,e,t);s.layers=this.layers,this.add(s);const r=new vt(xs,ys,e,t);r.layers=this.layers,this.add(r);const o=new vt(xs,ys,e,t);o.layers=this.layers,this.add(o);const a=new vt(xs,ys,e,t);a.layers=this.layers,this.add(a);const c=new vt(xs,ys,e,t);c.layers=this.layers,this.add(c);const l=new vt(xs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hl extends Yt{constructor(e,t,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zd extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Hl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zr(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Ai});r.uniforms.tEquirect.value=t;const o=new D(s,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Tn),new Bd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ga=new W,Mv=new W,Sv=new je;class qi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ga.subVectors(i,t).cross(Mv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ga),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sv.getNormalMatrix(e),s=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new zl,ho=new W;class Gl{constructor(e=new qi,t=new qi,i=new qi,s=new qi,r=new qi,o=new qi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],_=s[9],y=s[10],m=s[11],p=s[12],b=s[13],x=s[14],S=s[15];if(i[0].setComponents(c-r,f-l,m-d,S-p).normalize(),i[1].setComponents(c+r,f+l,m+d,S+p).normalize(),i[2].setComponents(c+o,f+u,m+_,S+b).normalize(),i[3].setComponents(c-o,f-u,m-_,S-b).normalize(),i[4].setComponents(c-a,f-h,m-y,S-x).normalize(),t===ai)i[5].setComponents(c+a,f+h,m+y,S+x).normalize();else if(t===Oo)i[5].setComponents(a,h,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wv(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],y=h[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const y=h[d];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Qo extends In{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,d=[],_=[],y=[],m=[];for(let p=0;p<u;p++){const b=p*f-o;for(let x=0;x<l;x++){const S=x*h-r;_.push(S,-b,0),y.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const x=b+l*p,S=b+l*(p+1),I=b+1+l*(p+1),C=b+1+l*p;d.push(x,S,C),d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
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
#endif`,Tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pv=`#ifdef USE_AOMAP
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
#endif`,Lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iv=`#ifdef USE_BATCHING
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
#endif`,Dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ov=`#ifdef USE_IRIDESCENCE
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
#endif`,Bv=`#ifdef USE_BUMPMAP
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
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yv=`#define PI 3.141592653589793
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
} // validated`,$v=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jv=`vec3 transformedNormal = objectNormal;
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
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`
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
}`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
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
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
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
#endif`,Sx=`struct PhysicalMaterial {
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
}`,wx=`
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dx=`#if defined( USE_POINTS_UV )
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
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
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
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sy=`#ifdef USE_ROUGHNESSMAP
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
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cy=`float getShadowMask() {
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
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,my=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wy=`varying vec2 vUv;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
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
}`,Py=`#if DEPTH_PACKING == 3200
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
}`,Ly=`#define DISTANCE
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
}`,Iy=`#define DISTANCE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,By=`uniform vec3 diffuse;
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
}`,zy=`#define LAMBERT
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
}`,Hy=`#define LAMBERT
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
}`,Gy=`#define MATCAP
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
}`,ky=`#define MATCAP
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
}`,Vy=`#define NORMAL
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
}`,Wy=`#define NORMAL
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
}`,Xy=`#define PHONG
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
}`,qy=`#define PHONG
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
}`,Yy=`#define STANDARD
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
}`,$y=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,Ky=`#define TOON
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
}`,Zy=`uniform float size;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,eM=`uniform vec3 color;
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
}`,tM=`uniform float rotation;
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
}`,nM=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Ev,alphahash_pars_fragment:bv,alphamap_fragment:Tv,alphamap_pars_fragment:Av,alphatest_fragment:Rv,alphatest_pars_fragment:Cv,aomap_fragment:Pv,aomap_pars_fragment:Lv,batching_pars_vertex:Iv,batching_vertex:Dv,begin_vertex:Uv,beginnormal_vertex:Nv,bsdfs:Fv,iridescence_fragment:Ov,bumpmap_pars_fragment:Bv,clipping_planes_fragment:zv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Gv,clipping_planes_vertex:kv,color_fragment:Vv,color_pars_fragment:Wv,color_pars_vertex:Xv,color_vertex:qv,common:Yv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:jv,displacementmap_pars_vertex:Kv,displacementmap_vertex:Zv,emissivemap_fragment:Jv,emissivemap_pars_fragment:Qv,colorspace_fragment:ex,colorspace_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:sx,envmap_pars_vertex:rx,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:cx,fog_fragment:lx,fog_pars_fragment:ux,gradientmap_pars_fragment:hx,lightmap_pars_fragment:fx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:_x,lights_toon_pars_fragment:vx,lights_phong_fragment:xx,lights_phong_pars_fragment:yx,lights_physical_fragment:Mx,lights_physical_pars_fragment:Sx,lights_fragment_begin:wx,lights_fragment_maps:Ex,lights_fragment_end:bx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:Lx,map_particle_fragment:Ix,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Fx,morphcolor_vertex:Ox,morphnormal_vertex:Bx,morphtarget_pars_vertex:zx,morphtarget_vertex:Hx,normal_fragment_begin:Gx,normal_fragment_maps:kx,normal_pars_fragment:Vx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Kx,opaque_fragment:Zx,packing:Jx,premultiplied_alpha_fragment:Qx,project_vertex:ey,dithering_fragment:ty,dithering_pars_fragment:ny,roughnessmap_fragment:iy,roughnessmap_pars_fragment:sy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:oy,shadowmap_vertex:ay,shadowmask_pars_fragment:cy,skinbase_vertex:ly,skinning_pars_vertex:uy,skinning_vertex:hy,skinnormal_vertex:fy,specularmap_fragment:dy,specularmap_pars_fragment:py,tonemapping_fragment:my,tonemapping_pars_fragment:gy,transmission_fragment:_y,transmission_pars_fragment:vy,uv_pars_fragment:xy,uv_pars_vertex:yy,uv_vertex:My,worldpos_vertex:Sy,background_vert:wy,background_frag:Ey,backgroundCube_vert:by,backgroundCube_frag:Ty,cube_vert:Ay,cube_frag:Ry,depth_vert:Cy,depth_frag:Py,distanceRGBA_vert:Ly,distanceRGBA_frag:Iy,equirect_vert:Dy,equirect_frag:Uy,linedashed_vert:Ny,linedashed_frag:Fy,meshbasic_vert:Oy,meshbasic_frag:By,meshlambert_vert:zy,meshlambert_frag:Hy,meshmatcap_vert:Gy,meshmatcap_frag:ky,meshnormal_vert:Vy,meshnormal_frag:Wy,meshphong_vert:Xy,meshphong_frag:qy,meshphysical_vert:Yy,meshphysical_frag:$y,meshtoon_vert:jy,meshtoon_frag:Ky,points_vert:Zy,points_frag:Jy,shadow_vert:Qy,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},Te={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Fn={basic:{uniforms:Wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Wt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Wt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Wt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Wt([Te.points,Te.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Wt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Wt([Te.common,Te.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Wt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Wt([Te.sprite,Te.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Wt([Te.common,Te.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Wt([Te.lights,Te.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Fn.physical={uniforms:Wt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const fo={r:0,b:0,g:0},Vi=new Gn,iM=new dt;function sM(n,e,t,i,s,r,o){const a=new He(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function _(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function y(b){let x=!1;const S=_(b);S===null?p(a,c):S&&S.isColor&&(p(S,1),x=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Zo)?(u===void 0&&(u=new D(new zr(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Vs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vi.copy(x.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Vi)),u.material.toneMapped=nt.getTransfer(S.colorSpace)!==ft,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new D(new Qo(2,2),new mt({name:"BackgroundMaterial",uniforms:Vs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=nt.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,x){b.getRGB(fo,Fd(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:y,addToRenderList:m}}function rM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,E,q,H,j){let se=!1;const G=h(H,q,E);r!==G&&(r=G,l(r.object)),se=d(M,H,q,j),se&&_(M,H,q,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,S(M,E,q,H),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,E,q){const H=q.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let se=j[E.id];se===void 0&&(se={},j[E.id]=se);let G=se[H];return G===void 0&&(G=f(c()),se[H]=G),G}function f(M){const E=[],q=[],H=[];for(let j=0;j<t;j++)E[j]=0,q[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:q,attributeDivisors:H,object:M,attributes:{},index:null}}function d(M,E,q,H){const j=r.attributes,se=E.attributes;let G=0;const Z=q.getAttributes();for(const z in Z)if(Z[z].location>=0){const ue=j[z];let ve=se[z];if(ve===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;G++}return r.attributesNum!==G||r.index!==H}function _(M,E,q,H){const j={},se=E.attributes;let G=0;const Z=q.getAttributes();for(const z in Z)if(Z[z].location>=0){let ue=se[z];ue===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),j[z]=ve,G++}r.attributes=j,r.attributesNum=G,r.index=H}function y(){const M=r.newAttributes;for(let E=0,q=M.length;E<q;E++)M[E]=0}function m(M){p(M,0)}function p(M,E){const q=r.newAttributes,H=r.enabledAttributes,j=r.attributeDivisors;q[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),j[M]!==E&&(n.vertexAttribDivisor(M,E),j[M]=E)}function b(){const M=r.newAttributes,E=r.enabledAttributes;for(let q=0,H=E.length;q<H;q++)E[q]!==M[q]&&(n.disableVertexAttribArray(q),E[q]=0)}function x(M,E,q,H,j,se,G){G===!0?n.vertexAttribIPointer(M,E,q,j,se):n.vertexAttribPointer(M,E,q,H,j,se)}function S(M,E,q,H){y();const j=H.attributes,se=q.getAttributes(),G=E.defaultAttributeValues;for(const Z in se){const z=se[Z];if(z.location>=0){let me=j[Z];if(me===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const ue=me.normalized,ve=me.itemSize,Se=e.get(me);if(Se===void 0)continue;const Ie=Se.buffer,ee=Se.type,de=Se.bytesPerElement,le=ee===n.INT||ee===n.UNSIGNED_INT||me.gpuType===Ll;if(me.isInterleavedBufferAttribute){const O=me.data,ne=O.stride,K=me.offset;if(O.isInstancedInterleavedBuffer){for(let ce=0;ce<z.locationSize;ce++)p(z.location+ce,O.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ce=0;ce<z.locationSize;ce++)m(z.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ce=0;ce<z.locationSize;ce++)x(z.location+ce,ve/z.locationSize,ee,ue,ne*de,(K+ve/z.locationSize*ce)*de,le)}else{if(me.isInstancedBufferAttribute){for(let O=0;O<z.locationSize;O++)p(z.location+O,me.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let O=0;O<z.locationSize;O++)m(z.location+O);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let O=0;O<z.locationSize;O++)x(z.location+O,ve/z.locationSize,ee,ue,ve*de,ve/z.locationSize*O*de,le)}}else if(G!==void 0){const ue=G[Z];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(z.location,ue);break;case 3:n.vertexAttrib3fv(z.location,ue);break;case 4:n.vertexAttrib4fv(z.location,ue);break;default:n.vertexAttrib1fv(z.location,ue)}}}}b()}function I(){U();for(const M in i){const E=i[M];for(const q in E){const H=E[q];for(const j in H)u(H[j].object),delete H[j];delete E[q]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const E=i[M.id];for(const q in E){const H=E[q];for(const j in H)u(H[j].object),delete H[j];delete E[q]}delete i[M.id]}function R(M){for(const E in i){const q=i[E];if(q[M.id]===void 0)continue;const H=q[M.id];for(const j in H)u(H[j].object),delete H[j];delete q[M.id]}}function U(){ie(),o=!0,r!==s&&(r=s,l(r.object))}function ie(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:ie,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function oM(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y];for(let y=0;y<f.length;y++)t.update(_,i,f[y])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function aM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==vn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===Nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ui&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==oi&&!U)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:I,maxSamples:C}}function cM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new qi,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const b=r?0:i,x=b*4;let S=p.clippingState||null;c.value=S,S=u(_,f,x,d);for(let I=0;I!==x;++I)S[I]=t[I];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=c.value,_!==!0||m===null){const p=d+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=d;x!==y;++x,S+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function lM(n){let e=new WeakMap;function t(o,a){return a===bc?o.mapping=zs:a===Tc&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bc||a===Tc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new zd(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Gd extends Od{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Mh=[.125,.215,.35,.446,.526,.582],ji=20,ka=new Gd,Sh=new He;let Va=null,Wa=0,Xa=0,qa=!1;const Yi=(1+Math.sqrt(5))/2,Ms=1/Yi,wh=[new W(-Yi,Ms,0),new W(Yi,Ms,0),new W(-Ms,0,Yi),new W(Ms,0,Yi),new W(0,Yi,-Ms),new W(0,Yi,Ms),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Wa,Xa),this._renderer.xr.enabled=qa,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Nr,format:vn,colorSpace:Di,depthBuffer:!1},s=bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uM(r)),this._blurMaterial=hM(r,e,t)}return s}_compileMaterial(e){const t=new D(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,i,s){const a=new vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Sh),u.toneMapping=Ri,u.autoClear=!1;const d=new xt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new D(new zr,d);let y=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,y=!0):(d.color.copy(Sh),y=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;po(s,b*x,p>2?x:0,x,x),u.setRenderTarget(s),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===zs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new D(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;po(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wh[(s-r-1)%wh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new D(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ji-1),y=r/_,m=isFinite(r)?1+Math.floor(u*y):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let b=0;for(let R=0;R<ji;++R){const U=R/y,ie=Math.exp(-U*U/2);p.push(ie),R===0?b+=ie:R<m&&(b+=2*ie)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[s],I=3*S*(s>x-Ts?s-x+Ts:0),C=4*(this._cubeSize-S);po(t,I,C,3*S,2*S),c.setRenderTarget(t),c.render(h,ka)}}function uM(n){const e=[],t=[],i=[];let s=n;const r=n-Ts+1+Mh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ts?c=Mh[o-n+Ts-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,y=3,m=2,p=1,b=new Float32Array(y*_*d),x=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,U=C>2?0:-1,ie=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];b.set(ie,y*_*C),x.set(f,m*_*C);const M=[C,C,C,C,C,C];S.set(M,p*_*C)}const I=new In;I.setAttribute("position",new zn(b,y)),I.setAttribute("uv",new zn(x,m)),I.setAttribute("faceIndex",new zn(S,p)),e.push(I),s>Ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bh(n,e,t){const i=new ts(n,e,t);return i.texture.mapping=Zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hM(n,e,t){const i=new Float32Array(ji),s=new W(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Th(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ah(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function fM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===bc||c===Tc,u=c===zs||c===Hs;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Eh(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Eh(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ao("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function pM(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const y=d[_];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let y=0;if(d!==null){const b=d.array;y=d.version;for(let x=0,S=b.length;x<S;x+=3){const I=b[x+0],C=b[x+1],R=b[x+2];f.push(I,C,C,R,R,I)}}else if(_!==void 0){const b=_.array;y=_.version;for(let x=0,S=b.length/3-1;x<S;x+=3){const I=x+0,C=x+1,R=x+2;f.push(I,C,C,R,R,I)}}else return;const m=new(Cd(f)?Nd:Ud)(f,1);m.version=y;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function mM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function h(f,d,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,y,0,_);let p=0;for(let b=0;b<_;b++)p+=d[b];for(let b=0;b<y.length;b++)t.update(p,i,y[b])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function gM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _M(n,e,t){const i=new WeakMap,s=new at;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let I=a.attributes.position.count*S,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*C*4*h),U=new Ld(R,I,C,h);U.type=oi,U.needsUpdate=!0;const ie=S*4;for(let E=0;E<h;E++){const q=p[E],H=b[E],j=x[E],se=I*C*4*E;for(let G=0;G<q.count;G++){const Z=G*ie;_===!0&&(s.fromBufferAttribute(q,G),R[se+Z+0]=s.x,R[se+Z+1]=s.y,R[se+Z+2]=s.z,R[se+Z+3]=0),y===!0&&(s.fromBufferAttribute(H,G),R[se+Z+4]=s.x,R[se+Z+5]=s.y,R[se+Z+6]=s.z,R[se+Z+7]=0),m===!0&&(s.fromBufferAttribute(j,G),R[se+Z+8]=s.x,R[se+Z+9]=s.y,R[se+Z+10]=s.z,R[se+Z+11]=j.itemSize===4?s.w:1)}}f={count:h,texture:U,size:new Ae(I,C)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const y=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function vM(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class kd extends Yt{constructor(e,t,i,s,r,o,a,c,l,u=Is){if(u!==Is&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Is&&(i=es),i===void 0&&u===ks&&(i=Gs),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vd=new Yt,Rh=new kd(1,1),Wd=new Ld,Xd=new rv,qd=new Hl,Ch=[],Ph=[],Lh=new Float32Array(16),Ih=new Float32Array(9),Dh=new Float32Array(4);function qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=Ph[e];t===void 0&&(t=new Int32Array(e),Ph[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function wM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Dh.set(i),n.uniformMatrix2fv(this.addr,!1,Dh),Tt(t,i)}}function EM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Ih.set(i),n.uniformMatrix3fv(this.addr,!1,Ih),Tt(t,i)}}function bM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Lh.set(i),n.uniformMatrix4fv(this.addr,!1,Lh),Tt(t,i)}}function TM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function UM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rh.compareFunction=Rd,r=Rh):r=Vd,t.setTexture2D(e||r,s)}function NM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xd,s)}function FM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qd,s)}function OM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wd,s)}function BM(n){switch(n){case 5126:return xM;case 35664:return yM;case 35665:return MM;case 35666:return SM;case 35674:return wM;case 35675:return EM;case 35676:return bM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return RM;case 35669:case 35673:return CM;case 5125:return PM;case 36294:return LM;case 36295:return IM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}function zM(n,e){n.uniform1fv(this.addr,e)}function HM(n,e){const t=qs(e,this.size,2);n.uniform2fv(this.addr,t)}function GM(n,e){const t=qs(e,this.size,3);n.uniform3fv(this.addr,t)}function kM(n,e){const t=qs(e,this.size,4);n.uniform4fv(this.addr,t)}function VM(n,e){const t=qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WM(n,e){const t=qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function XM(n,e){const t=qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qM(n,e){n.uniform1iv(this.addr,e)}function YM(n,e){n.uniform2iv(this.addr,e)}function $M(n,e){n.uniform3iv(this.addr,e)}function jM(n,e){n.uniform4iv(this.addr,e)}function KM(n,e){n.uniform1uiv(this.addr,e)}function ZM(n,e){n.uniform2uiv(this.addr,e)}function JM(n,e){n.uniform3uiv(this.addr,e)}function QM(n,e){n.uniform4uiv(this.addr,e)}function eS(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vd,r[o])}function tS(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xd,r[o])}function nS(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qd,r[o])}function iS(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wd,r[o])}function sS(n){switch(n){case 5126:return zM;case 35664:return HM;case 35665:return GM;case 35666:return kM;case 35674:return VM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return jM;case 5125:return KM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}class rS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BM(t.type)}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}}class aS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function Uh(n,e){n.seq.push(e),n.map[e.id]=e}function cS(n,e,t){const i=n.name,s=i.length;for(Ya.lastIndex=0;;){const r=Ya.exec(i),o=Ya.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Uh(t,l===void 0?new rS(a,n,e):new oS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new aS(a),Uh(t,h)),t=h}}}class Ro{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);cS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Nh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lS=37297;let uS=0;function hS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function fS(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Fo&&t===No?i="LinearDisplayP3ToLinearSRGB":e===No&&t===Fo&&(i="LinearSRGBToLinearDisplayP3"),n){case Di:case Jo:return[i,"LinearTransferOETF"];case bn:case Ol:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Fh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hS(n.getShaderSource(e),o)}else return s}function dS(n,e){const t=fS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pS(n,e){let t;switch(e){case __:t="Linear";break;case v_:t="Reinhard";break;case x_:t="Cineon";break;case ss:t="ACESFilmic";break;case M_:t="AgX";break;case S_:t="Neutral";break;case y_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mo=new W;function mS(){nt.getLuminanceCoefficients(mo);const n=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function _S(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sr(n){return n!==""}function Oh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xS=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(xS,MS)}const yS=new Map;function MS(n,e){let t=$e[e];if(t===void 0){const i=yS.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const SS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(n){return n.replace(SS,wS)}function wS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ES(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function bS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function AS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case md:e="ENVMAP_BLENDING_MULTIPLY";break;case m_:e="ENVMAP_BLENDING_MIX";break;case g_:e="ENVMAP_BLENDING_ADD";break}return e}function RS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function CS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ES(t),l=bS(t),u=TS(t),h=AS(t),f=RS(t),d=gS(t),_=_S(r),y=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ri?pS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,dS("linearToOutputTexel",t.outputColorSpace),mS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=el(o),o=Oh(o,t),o=Bh(o,t),a=el(a),a=Oh(a,t),a=Bh(a,t),o=zh(o),a=zh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+m+o,S=b+p+a,I=Nh(s,s.VERTEX_SHADER,x),C=Nh(s,s.FRAGMENT_SHADER,S);s.attachShader(y,I),s.attachShader(y,C),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(E){if(n.debug.checkShaderErrors){const q=s.getProgramInfoLog(y).trim(),H=s.getShaderInfoLog(I).trim(),j=s.getShaderInfoLog(C).trim();let se=!0,G=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,I,C);else{const Z=Fh(s,I,"vertex"),z=Fh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+q+`
`+Z+`
`+z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||j==="")&&(G=!1);G&&(E.diagnostics={runnable:se,programLog:q,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(I),s.deleteShader(C),U=new Ro(s,y),ie=vS(s,y)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let ie;this.getAttributes=function(){return ie===void 0&&R(this),ie};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,lS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=C,this}let PS=0;class LS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new IS(e),t.set(e,i)),i}}class IS{constructor(e){this.id=PS++,this.code=e,this.usedTimes=0}}function DS(n,e,t,i,s,r,o){const a=new Id,c=new LS,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,E,q,H,j){const se=H.fog,G=j.geometry,Z=M.isMeshStandardMaterial?H.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),me=z&&z.mapping===Zo?z.image.height:null,ue=y[M.type];M.precision!==null&&(_=s.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const ve=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Se=ve!==void 0?ve.length:0;let Ie=0;G.morphAttributes.position!==void 0&&(Ie=1),G.morphAttributes.normal!==void 0&&(Ie=2),G.morphAttributes.color!==void 0&&(Ie=3);let ee,de,le,O;if(ue){const Zt=Fn[ue];ee=Zt.vertexShader,de=Zt.fragmentShader}else ee=M.vertexShader,de=M.fragmentShader,c.update(M),le=c.getVertexShaderID(M),O=c.getFragmentShaderID(M);const ne=n.getRenderTarget(),K=j.isInstancedMesh===!0,ce=j.isBatchedMesh===!0,Me=!!M.map,Q=!!M.matcap,g=!!z,T=!!M.aoMap,L=!!M.lightMap,F=!!M.bumpMap,N=!!M.normalMap,J=!!M.displacementMap,te=!!M.emissiveMap,w=!!M.metalnessMap,v=!!M.roughnessMap,P=M.anisotropy>0,V=M.clearcoat>0,k=M.dispersion>0,X=M.iridescence>0,he=M.sheen>0,fe=M.transmission>0,ge=P&&!!M.anisotropyMap,Re=V&&!!M.clearcoatMap,pe=V&&!!M.clearcoatNormalMap,ye=V&&!!M.clearcoatRoughnessMap,Ue=X&&!!M.iridescenceMap,Ne=X&&!!M.iridescenceThicknessMap,xe=he&&!!M.sheenColorMap,Ge=he&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,We=!!M.specularColorMap,B=!!M.specularIntensityMap,Ce=fe&&!!M.transmissionMap,ae=fe&&!!M.thicknessMap,_e=!!M.gradientMap,be=!!M.alphaMap,Le=M.alphaTest>0,Ye=!!M.alphaHash,gt=!!M.extensions;let Et=Ri;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Et=n.toneMapping);const Je={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:de,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:O,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:ce,batchingColor:ce&&j._colorsTexture!==null,instancing:K,instancingColor:K&&j.instanceColor!==null,instancingMorph:K&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Di,alphaToCoverage:!!M.alphaToCoverage,map:Me,matcap:Q,envMap:g,envMapMode:g&&z.mapping,envMapCubeUVHeight:me,aoMap:T,lightMap:L,bumpMap:F,normalMap:N,displacementMap:d&&J,emissiveMap:te,normalMapObjectSpace:N&&M.normalMapType===T_,normalMapTangentSpace:N&&M.normalMapType===Ad,metalnessMap:w,roughnessMap:v,anisotropy:P,anisotropyMap:ge,clearcoat:V,clearcoatMap:Re,clearcoatNormalMap:pe,clearcoatRoughnessMap:ye,dispersion:k,iridescence:X,iridescenceMap:Ue,iridescenceThicknessMap:Ne,sheen:he,sheenColorMap:xe,sheenRoughnessMap:Ge,specularMap:Pe,specularColorMap:We,specularIntensityMap:B,transmission:fe,transmissionMap:Ce,thicknessMap:ae,gradientMap:_e,opaque:M.transparent===!1&&M.blending===Ls&&M.alphaToCoverage===!1,alphaMap:be,alphaTest:Le,alphaHash:Ye,combine:M.combine,mapUv:Me&&m(M.map.channel),aoMapUv:T&&m(M.aoMap.channel),lightMapUv:L&&m(M.lightMap.channel),bumpMapUv:F&&m(M.bumpMap.channel),normalMapUv:N&&m(M.normalMap.channel),displacementMapUv:J&&m(M.displacementMap.channel),emissiveMapUv:te&&m(M.emissiveMap.channel),metalnessMapUv:w&&m(M.metalnessMap.channel),roughnessMapUv:v&&m(M.roughnessMap.channel),anisotropyMapUv:ge&&m(M.anisotropyMap.channel),clearcoatMapUv:Re&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&m(M.sheenRoughnessMap.channel),specularMapUv:Pe&&m(M.specularMap.channel),specularColorMapUv:We&&m(M.specularColorMap.channel),specularIntensityMapUv:B&&m(M.specularIntensityMap.channel),transmissionMapUv:Ce&&m(M.transmissionMap.channel),thicknessMapUv:ae&&m(M.thicknessMap.channel),alphaMapUv:be&&m(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(N||P),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!G.attributes.uv&&(Me||be),fog:!!se,useFog:M.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===On,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:gt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&M.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function b(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)E.push(q),E.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(x(E,M),S(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function S(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),M.push(a.mask)}function I(M){const E=y[M.type];let q;if(E){const H=Fn[E];q=vv.clone(H.uniforms)}else q=M.uniforms;return q}function C(M,E){let q;for(let H=0,j=u.length;H<j;H++){const se=u[H];if(se.cacheKey===E){q=se,++q.usedTimes;break}}return q===void 0&&(q=new CS(n,E,M,r),u.push(q)),q}function R(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function U(M){c.remove(M)}function ie(){c.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:I,acquireProgram:C,releaseProgram:R,releaseShaderCache:U,programs:u,dispose:ie}}function US(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function NS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,_,y,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=y,p.group=m),e++,p}function a(h,f,d,_,y,m){const p=o(h,f,d,_,y,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(h,f,d,_,y,m){const p=o(h,f,d,_,y,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||NS),i.length>1&&i.sort(f||Gh),s.length>1&&s.sort(f||Gh)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function FS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new kh,n.set(i,[o])):s>=r.length?(o=new kh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function OS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new He};break;case"SpotLight":t={position:new W,direction:new W,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function BS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zS=0;function HS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GS(n){const e=new OS,t=BS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const s=new W,r=new dt,o=new dt;function a(l){let u=0,h=0,f=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let d=0,_=0,y=0,m=0,p=0,b=0,x=0,S=0,I=0,C=0,R=0;l.sort(HS);for(let ie=0,M=l.length;ie<M;ie++){const E=l[ie],q=E.color,H=E.intensity,j=E.distance,se=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=q.r*H,h+=q.g*H,f+=q.b*H;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],H);R++}else if(E.isDirectionalLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Z=E.shadow,z=t.get(E);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,i.directionalShadow[d]=z,i.directionalShadowMap[d]=se,i.directionalShadowMatrix[d]=E.shadow.matrix,b++}i.directional[d]=G,d++}else if(E.isSpotLight){const G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(q).multiplyScalar(H),G.distance=j,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[y]=G;const Z=E.shadow;if(E.map&&(i.spotLightMap[I]=E.map,I++,Z.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[y]=Z.matrix,E.castShadow){const z=t.get(E);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=se,S++}y++}else if(E.isRectAreaLight){const G=e.get(E);G.color.copy(q).multiplyScalar(H),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const Z=E.shadow,z=t.get(E);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=E.shadow.matrix,x++}i.point[_]=G,_++}else if(E.isHemisphereLight){const G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(H),G.groundColor.copy(E.groundColor).multiplyScalar(H),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==d||U.pointLength!==_||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==b||U.numPointShadows!==x||U.numSpotShadows!==S||U.numSpotMaps!==I||U.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,U.directionalLength=d,U.pointLength=_,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=b,U.numPointShadows=x,U.numSpotShadows=S,U.numSpotMaps=I,U.numLightProbes=R,i.version=zS++)}function c(l,u){let h=0,f=0,d=0,_=0,y=0;const m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const x=l[p];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function Vh(n){const e=new GS(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function kS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Vh(n),e.set(s,[a])):r>=o.length?(a=new Vh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class VS extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WS extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qS=`uniform sampler2D shadow_pass;
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
}`;function YS(n,e,t){let i=new Gl;const s=new Ae,r=new Ae,o=new at,a=new VS({depthPacking:b_}),c=new WS,l={},u=t.maxTextureSize,h={[Pi]:Jt,[Jt]:Pi,[On]:On},f=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:XS,fragmentShader:qS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new In;_.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new D(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let p=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const ie=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Ai),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const H=p!==ii&&this.type===ii,j=p===ii&&this.type!==ii;for(let se=0,G=C.length;se<G;se++){const Z=C[se],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const me=z.getFrameExtents();if(s.multiply(me),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,z.mapSize.y=r.y)),z.map===null||H===!0||j===!0){const ve=this.type!==ii?{minFilter:_n,magFilter:_n}:{};z.map!==null&&z.map.dispose(),z.map=new ts(s.x,s.y,ve),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ue=z.getViewportCount();for(let ve=0;ve<ue;ve++){const Se=z.getViewport(ve);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),q.viewport(o),z.updateMatrices(Z,ve),i=z.getFrustum(),S(R,U,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===ii&&b(z,U),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ie,M,E)};function b(C,R){const U=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ts(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,y,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,U,d,y,null)}function x(C,R,U,ie){let M=null;const E=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)M=E;else if(M=U.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=M.uuid,H=R.uuid;let j=l[q];j===void 0&&(j={},l[q]=j);let se=j[H];se===void 0&&(se=M.clone(),j[H]=se,R.addEventListener("dispose",I)),M=se}if(M.visible=R.visible,M.wireframe=R.wireframe,ie===ii?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=n.properties.get(M);q.light=U}return M}function S(C,R,U,ie,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const H=e.update(C),j=C.material;if(Array.isArray(j)){const se=H.groups;for(let G=0,Z=se.length;G<Z;G++){const z=se[G],me=j[z.materialIndex];if(me&&me.visible){const ue=x(C,me,ie,M);C.onBeforeShadow(n,C,R,U,H,ue,z),n.renderBufferDirect(U,null,H,ue,C,z),C.onAfterShadow(n,C,R,U,H,ue,z)}}}else if(j.visible){const se=x(C,j,ie,M);C.onBeforeShadow(n,C,R,U,H,se,null),n.renderBufferDirect(U,null,H,se,C,null),C.onAfterShadow(n,C,R,U,H,se,null)}}const q=C.children;for(let H=0,j=q.length;H<j;H++)S(q[H],R,U,ie,M)}function I(C){C.target.removeEventListener("dispose",I);for(const U in l){const ie=l[U],M=C.target.uuid;M in ie&&(ie[M].dispose(),delete ie[M])}}}const $S={[vc]:xc,[yc]:wc,[Mc]:Ec,[Bs]:Sc,[xc]:vc,[wc]:yc,[Ec]:Mc,[Sc]:Bs};function jS(n){function e(){let B=!1;const Ce=new at;let ae=null;const _e=new at(0,0,0,0);return{setMask:function(be){ae!==be&&!B&&(n.colorMask(be,be,be,be),ae=be)},setLocked:function(be){B=be},setClear:function(be,Le,Ye,gt,Et){Et===!0&&(be*=gt,Le*=gt,Ye*=gt),Ce.set(be,Le,Ye,gt),_e.equals(Ce)===!1&&(n.clearColor(be,Le,Ye,gt),_e.copy(Ce))},reset:function(){B=!1,ae=null,_e.set(-1,0,0,0)}}}function t(){let B=!1,Ce=!1,ae=null,_e=null,be=null;return{setReversed:function(Le){Ce=Le},setTest:function(Le){Le?le(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(Le){ae!==Le&&!B&&(n.depthMask(Le),ae=Le)},setFunc:function(Le){if(Ce&&(Le=$S[Le]),_e!==Le){switch(Le){case vc:n.depthFunc(n.NEVER);break;case xc:n.depthFunc(n.ALWAYS);break;case yc:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case Sc:n.depthFunc(n.GEQUAL);break;case wc:n.depthFunc(n.GREATER);break;case Ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=Le}},setLocked:function(Le){B=Le},setClear:function(Le){be!==Le&&(n.clearDepth(Le),be=Le)},reset:function(){B=!1,ae=null,_e=null,be=null}}}function i(){let B=!1,Ce=null,ae=null,_e=null,be=null,Le=null,Ye=null,gt=null,Et=null;return{setTest:function(Je){B||(Je?le(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(Je){Ce!==Je&&!B&&(n.stencilMask(Je),Ce=Je)},setFunc:function(Je,Zt,$n){(ae!==Je||_e!==Zt||be!==$n)&&(n.stencilFunc(Je,Zt,$n),ae=Je,_e=Zt,be=$n)},setOp:function(Je,Zt,$n){(Le!==Je||Ye!==Zt||gt!==$n)&&(n.stencilOp(Je,Zt,$n),Le=Je,Ye=Zt,gt=$n)},setLocked:function(Je){B=Je},setClear:function(Je){Et!==Je&&(n.clearStencil(Je),Et=Je)},reset:function(){B=!1,Ce=null,ae=null,_e=null,be=null,Le=null,Ye=null,gt=null,Et=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,_=!1,y=null,m=null,p=null,b=null,x=null,S=null,I=null,C=new He(0,0,0),R=0,U=!1,ie=null,M=null,E=null,q=null,H=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,G=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),se=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),se=G>=2);let z=null,me={};const ue=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Se=new at().fromArray(ue),Ie=new at().fromArray(ve);function ee(B,Ce,ae,_e){const be=new Uint8Array(4),Le=n.createTexture();n.bindTexture(B,Le),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<ae;Ye++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ce+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Le}const de={};de[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),le(n.DEPTH_TEST),r.setFunc(Bs),L(!1),F(Ku),le(n.CULL_FACE),g(Ai);function le(B){l[B]!==!0&&(n.enable(B),l[B]=!0)}function O(B){l[B]!==!1&&(n.disable(B),l[B]=!1)}function ne(B,Ce){return u[B]!==Ce?(n.bindFramebuffer(B,Ce),u[B]=Ce,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ce),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function K(B,Ce){let ae=f,_e=!1;if(B){ae=h.get(Ce),ae===void 0&&(ae=[],h.set(Ce,ae));const be=B.textures;if(ae.length!==be.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,Ye=be.length;Le<Ye;Le++)ae[Le]=n.COLOR_ATTACHMENT0+Le;ae.length=be.length,_e=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,_e=!0);_e&&n.drawBuffers(ae)}function ce(B){return d!==B?(n.useProgram(B),d=B,!0):!1}const Me={[$i]:n.FUNC_ADD,[Jg]:n.FUNC_SUBTRACT,[Qg]:n.FUNC_REVERSE_SUBTRACT};Me[e_]=n.MIN,Me[t_]=n.MAX;const Q={[n_]:n.ZERO,[i_]:n.ONE,[s_]:n.SRC_COLOR,[gc]:n.SRC_ALPHA,[u_]:n.SRC_ALPHA_SATURATE,[c_]:n.DST_COLOR,[o_]:n.DST_ALPHA,[r_]:n.ONE_MINUS_SRC_COLOR,[_c]:n.ONE_MINUS_SRC_ALPHA,[l_]:n.ONE_MINUS_DST_COLOR,[a_]:n.ONE_MINUS_DST_ALPHA,[h_]:n.CONSTANT_COLOR,[f_]:n.ONE_MINUS_CONSTANT_COLOR,[d_]:n.CONSTANT_ALPHA,[p_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,Ce,ae,_e,be,Le,Ye,gt,Et,Je){if(B===Ai){_===!0&&(O(n.BLEND),_=!1);return}if(_===!1&&(le(n.BLEND),_=!0),B!==Zg){if(B!==y||Je!==U){if((m!==$i||x!==$i)&&(n.blendEquation(n.FUNC_ADD),m=$i,x=$i),Je)switch(B){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zu:n.blendFunc(n.ONE,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,b=null,S=null,I=null,C.set(0,0,0),R=0,y=B,U=Je}return}be=be||Ce,Le=Le||ae,Ye=Ye||_e,(Ce!==m||be!==x)&&(n.blendEquationSeparate(Me[Ce],Me[be]),m=Ce,x=be),(ae!==p||_e!==b||Le!==S||Ye!==I)&&(n.blendFuncSeparate(Q[ae],Q[_e],Q[Le],Q[Ye]),p=ae,b=_e,S=Le,I=Ye),(gt.equals(C)===!1||Et!==R)&&(n.blendColor(gt.r,gt.g,gt.b,Et),C.copy(gt),R=Et),y=B,U=!1}function T(B,Ce){B.side===On?O(n.CULL_FACE):le(n.CULL_FACE);let ae=B.side===Jt;Ce&&(ae=!ae),L(ae),B.blending===Ls&&B.transparent===!1?g(Ai):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const _e=B.stencilWrite;o.setTest(_e),_e&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),J(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){ie!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),ie=B)}function F(B){B!==$g?(le(n.CULL_FACE),B!==M&&(B===Ku?n.cullFace(n.BACK):B===jg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),M=B}function N(B){B!==E&&(se&&n.lineWidth(B),E=B)}function J(B,Ce,ae){B?(le(n.POLYGON_OFFSET_FILL),(q!==Ce||H!==ae)&&(n.polygonOffset(Ce,ae),q=Ce,H=ae)):O(n.POLYGON_OFFSET_FILL)}function te(B){B?le(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function w(B){B===void 0&&(B=n.TEXTURE0+j-1),z!==B&&(n.activeTexture(B),z=B)}function v(B,Ce,ae){ae===void 0&&(z===null?ae=n.TEXTURE0+j-1:ae=z);let _e=me[ae];_e===void 0&&(_e={type:void 0,texture:void 0},me[ae]=_e),(_e.type!==B||_e.texture!==Ce)&&(z!==ae&&(n.activeTexture(ae),z=ae),n.bindTexture(B,Ce||de[B]),_e.type=B,_e.texture=Ce)}function P(){const B=me[z];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(B){Se.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Se.copy(B))}function xe(B){Ie.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ie.copy(B))}function Ge(B,Ce){let ae=c.get(Ce);ae===void 0&&(ae=new WeakMap,c.set(Ce,ae));let _e=ae.get(B);_e===void 0&&(_e=n.getUniformBlockIndex(Ce,B.name),ae.set(B,_e))}function Pe(B,Ce){const _e=c.get(Ce).get(B);a.get(Ce)!==_e&&(n.uniformBlockBinding(Ce,_e,B.__bindingPointIndex),a.set(Ce,_e))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},z=null,me={},u={},h=new WeakMap,f=[],d=null,_=!1,y=null,m=null,p=null,b=null,x=null,S=null,I=null,C=new He(0,0,0),R=0,U=!1,ie=null,M=null,E=null,q=null,H=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:le,disable:O,bindFramebuffer:ne,drawBuffers:K,useProgram:ce,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:F,setLineWidth:N,setPolygonOffset:J,setScissorTest:te,activeTexture:w,bindTexture:v,unbindTexture:P,compressedTexImage2D:V,compressedTexImage3D:k,texImage2D:ye,texImage3D:Ue,updateUBOMapping:Ge,uniformBlockBinding:Pe,texStorage2D:Re,texStorage3D:pe,texSubImage2D:X,texSubImage3D:he,compressedTexSubImage2D:fe,compressedTexSubImage3D:ge,scissor:Ne,viewport:xe,reset:We}}function Wh(n,e,t,i){const s=KS(i);switch(t){case yd:return n*e;case Sd:return n*e;case wd:return n*e*2;case Ed:return n*e/s.components*s.byteLength;case Ul:return n*e/s.components*s.byteLength;case bd:return n*e*2/s.components*s.byteLength;case Nl:return n*e*2/s.components*s.byteLength;case Md:return n*e*3/s.components*s.byteLength;case vn:return n*e*4/s.components*s.byteLength;case Fl:return n*e*4/s.components*s.byteLength;case So:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Lc:return Math.max(n,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(n,8)*Math.max(e,8)/2;case Ic:case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case To:case jc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Td:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jc:case Qc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KS(n){switch(n){case ui:case _d:return{byteLength:1,components:1};case Tr:case vd:case Nr:return{byteLength:2,components:1};case Il:case Dl:return{byteLength:2,components:4};case es:case Ll:case oi:return{byteLength:4,components:1};case xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ZS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return d?new OffscreenCanvas(w,v):Rr("canvas")}function y(w,v,P){let V=1;const k=te(w);if((k.width>P||k.height>P)&&(V=P/Math.max(k.width,k.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(V*k.width),he=Math.floor(V*k.height);h===void 0&&(h=_(X,he));const fe=v?_(X,he):h;return fe.width=X,fe.height=he,fe.getContext("2d").drawImage(w,0,0,X,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+X+"x"+he+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==_n&&w.minFilter!==Tn}function p(w){n.generateMipmap(w)}function b(w,v,P,V,k=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=v;if(v===n.RED&&(P===n.FLOAT&&(X=n.R32F),P===n.HALF_FLOAT&&(X=n.R16F),P===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.R8UI),P===n.UNSIGNED_SHORT&&(X=n.R16UI),P===n.UNSIGNED_INT&&(X=n.R32UI),P===n.BYTE&&(X=n.R8I),P===n.SHORT&&(X=n.R16I),P===n.INT&&(X=n.R32I)),v===n.RG&&(P===n.FLOAT&&(X=n.RG32F),P===n.HALF_FLOAT&&(X=n.RG16F),P===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RG8UI),P===n.UNSIGNED_SHORT&&(X=n.RG16UI),P===n.UNSIGNED_INT&&(X=n.RG32UI),P===n.BYTE&&(X=n.RG8I),P===n.SHORT&&(X=n.RG16I),P===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGB8UI),P===n.UNSIGNED_SHORT&&(X=n.RGB16UI),P===n.UNSIGNED_INT&&(X=n.RGB32UI),P===n.BYTE&&(X=n.RGB8I),P===n.SHORT&&(X=n.RGB16I),P===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),P===n.UNSIGNED_INT&&(X=n.RGBA32UI),P===n.BYTE&&(X=n.RGBA8I),P===n.SHORT&&(X=n.RGBA16I),P===n.INT&&(X=n.RGBA32I)),v===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),v===n.RGBA){const he=k?Uo:nt.getTransfer(V);P===n.FLOAT&&(X=n.RGBA32F),P===n.HALF_FLOAT&&(X=n.RGBA16F),P===n.UNSIGNED_BYTE&&(X=he===ft?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(w,v){let P;return w?v===null||v===es||v===Gs?P=n.DEPTH24_STENCIL8:v===oi?P=n.DEPTH32F_STENCIL8:v===Tr&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===es||v===Gs?P=n.DEPTH_COMPONENT24:v===oi?P=n.DEPTH_COMPONENT32F:v===Tr&&(P=n.DEPTH_COMPONENT16),P}function S(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==_n&&w.minFilter!==Tn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function I(w){const v=w.target;v.removeEventListener("dispose",I),R(v),v.isVideoTexture&&u.delete(v)}function C(w){const v=w.target;v.removeEventListener("dispose",C),ie(v)}function R(w){const v=i.get(w);if(v.__webglInit===void 0)return;const P=w.source,V=f.get(P);if(V){const k=V[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&U(w),Object.keys(V).length===0&&f.delete(P)}i.remove(w)}function U(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const P=w.source,V=f.get(P);delete V[v.__cacheKey],o.memory.textures--}function ie(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let k=0;k<v.__webglFramebuffer[V].length;k++)n.deleteFramebuffer(v.__webglFramebuffer[V][k]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=w.textures;for(let V=0,k=P.length;V<k;V++){const X=i.get(P[V]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(P[V])}i.remove(w)}let M=0;function E(){M=0}function q(){const w=M;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),M+=1,w}function H(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function j(w,v){const P=i.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(P,w,v);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+v)}function se(w,v){const P=i.get(w);if(w.version>0&&P.__version!==w.version){Ie(P,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+v)}function G(w,v){const P=i.get(w);if(w.version>0&&P.__version!==w.version){Ie(P,w,v);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+v)}function Z(w,v){const P=i.get(w);if(w.version>0&&P.__version!==w.version){ee(P,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+v)}const z={[br]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},me={[_n]:n.NEAREST,[w_]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[ya]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},ue={[A_]:n.NEVER,[D_]:n.ALWAYS,[R_]:n.LESS,[Rd]:n.LEQUAL,[C_]:n.EQUAL,[I_]:n.GEQUAL,[P_]:n.GREATER,[L_]:n.NOTEQUAL};function ve(w,v){if(v.type===oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tn||v.magFilter===ya||v.magFilter===$r||v.magFilter===Ti||v.minFilter===Tn||v.minFilter===ya||v.minFilter===$r||v.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,z[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,z[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,z[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===_n||v.minFilter!==$r&&v.minFilter!==Ti||v.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Se(w,v){let P=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",I));const V=v.source;let k=f.get(V);k===void 0&&(k={},f.set(V,k));const X=H(v);if(X!==w.__cacheKey){k[X]===void 0&&(k[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),k[X].usedTimes++;const he=k[w.__cacheKey];he!==void 0&&(k[w.__cacheKey].usedTimes--,he.usedTimes===0&&U(v)),w.__cacheKey=X,w.__webglTexture=k[X].texture}return P}function Ie(w,v,P){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const k=Se(w,v),X=v.source;t.bindTexture(V,w.__webglTexture,n.TEXTURE0+P);const he=i.get(X);if(X.version!==he.__version||k===!0){t.activeTexture(n.TEXTURE0+P);const fe=nt.getPrimaries(nt.workingColorSpace),ge=v.colorSpace===bi?null:nt.getPrimaries(v.colorSpace),Re=v.colorSpace===bi||fe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let pe=y(v.image,!1,s.maxTextureSize);pe=J(v,pe);const ye=r.convert(v.format,v.colorSpace),Ue=r.convert(v.type);let Ne=b(v.internalFormat,ye,Ue,v.colorSpace,v.isVideoTexture);ve(V,v);let xe;const Ge=v.mipmaps,Pe=v.isVideoTexture!==!0,We=he.__version===void 0||k===!0,B=X.dataReady,Ce=S(v,pe);if(v.isDepthTexture)Ne=x(v.format===ks,v.type),We&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Ne,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,pe.width,pe.height,0,ye,Ue,null));else if(v.isDataTexture)if(Ge.length>0){Pe&&We&&t.texStorage2D(n.TEXTURE_2D,Ce,Ne,Ge[0].width,Ge[0].height);for(let ae=0,_e=Ge.length;ae<_e;ae++)xe=Ge[ae],Pe?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Ne,xe.width,xe.height,0,ye,Ue,xe.data);v.generateMipmaps=!1}else Pe?(We&&t.texStorage2D(n.TEXTURE_2D,Ce,Ne,pe.width,pe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,ye,Ue,pe.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,pe.width,pe.height,0,ye,Ue,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ne,Ge[0].width,Ge[0].height,pe.depth);for(let ae=0,_e=Ge.length;ae<_e;ae++)if(xe=Ge[ae],v.format!==vn)if(ye!==null)if(Pe){if(B)if(v.layerUpdates.size>0){const be=Wh(xe.width,xe.height,v.format,v.type);for(const Le of v.layerUpdates){const Ye=xe.data.subarray(Le*be/xe.data.BYTES_PER_ELEMENT,(Le+1)*be/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Le,xe.width,xe.height,1,ye,Ye,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,pe.depth,ye,xe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ne,xe.width,xe.height,pe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,pe.depth,ye,Ue,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ne,xe.width,xe.height,pe.depth,0,ye,Ue,xe.data)}else{Pe&&We&&t.texStorage2D(n.TEXTURE_2D,Ce,Ne,Ge[0].width,Ge[0].height);for(let ae=0,_e=Ge.length;ae<_e;ae++)xe=Ge[ae],v.format!==vn?ye!==null?Pe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Ne,xe.width,xe.height,0,ye,Ue,xe.data)}else if(v.isDataArrayTexture)if(Pe){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ne,pe.width,pe.height,pe.depth),B)if(v.layerUpdates.size>0){const ae=Wh(pe.width,pe.height,v.format,v.type);for(const _e of v.layerUpdates){const be=pe.data.subarray(_e*ae/pe.data.BYTES_PER_ELEMENT,(_e+1)*ae/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,pe.width,pe.height,1,ye,Ue,be)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ye,Ue,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,pe.width,pe.height,pe.depth,0,ye,Ue,pe.data);else if(v.isData3DTexture)Pe?(We&&t.texStorage3D(n.TEXTURE_3D,Ce,Ne,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ye,Ue,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,pe.width,pe.height,pe.depth,0,ye,Ue,pe.data);else if(v.isFramebufferTexture){if(We)if(Pe)t.texStorage2D(n.TEXTURE_2D,Ce,Ne,pe.width,pe.height);else{let ae=pe.width,_e=pe.height;for(let be=0;be<Ce;be++)t.texImage2D(n.TEXTURE_2D,be,Ne,ae,_e,0,ye,Ue,null),ae>>=1,_e>>=1}}else if(Ge.length>0){if(Pe&&We){const ae=te(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Ne,ae.width,ae.height)}for(let ae=0,_e=Ge.length;ae<_e;ae++)xe=Ge[ae],Pe?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye,Ue,xe):t.texImage2D(n.TEXTURE_2D,ae,Ne,ye,Ue,xe);v.generateMipmaps=!1}else if(Pe){if(We){const ae=te(pe);t.texStorage2D(n.TEXTURE_2D,Ce,Ne,ae.width,ae.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ue,pe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ye,Ue,pe);m(v)&&p(V),he.__version=X.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ee(w,v,P){if(v.image.length!==6)return;const V=Se(w,v),k=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+P);const X=i.get(k);if(k.version!==X.__version||V===!0){t.activeTexture(n.TEXTURE0+P);const he=nt.getPrimaries(nt.workingColorSpace),fe=v.colorSpace===bi?null:nt.getPrimaries(v.colorSpace),ge=v.colorSpace===bi||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let _e=0;_e<6;_e++)!Re&&!pe?ye[_e]=y(v.image[_e],!0,s.maxCubemapSize):ye[_e]=pe?v.image[_e].image:v.image[_e],ye[_e]=J(v,ye[_e]);const Ue=ye[0],Ne=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),Ge=b(v.internalFormat,Ne,xe,v.colorSpace),Pe=v.isVideoTexture!==!0,We=X.__version===void 0||V===!0,B=k.dataReady;let Ce=S(v,Ue);ve(n.TEXTURE_CUBE_MAP,v);let ae;if(Re){Pe&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ge,Ue.width,Ue.height);for(let _e=0;_e<6;_e++){ae=ye[_e].mipmaps;for(let be=0;be<ae.length;be++){const Le=ae[be];v.format!==vn?Ne!==null?Pe?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,0,0,Le.width,Le.height,Ne,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,Ge,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,0,0,Le.width,Le.height,Ne,xe,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,Ge,Le.width,Le.height,0,Ne,xe,Le.data)}}}else{if(ae=v.mipmaps,Pe&&We){ae.length>0&&Ce++;const _e=te(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ge,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(pe){Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ye[_e].width,ye[_e].height,Ne,xe,ye[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ge,ye[_e].width,ye[_e].height,0,Ne,xe,ye[_e].data);for(let be=0;be<ae.length;be++){const Ye=ae[be].image[_e].image;Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,0,0,Ye.width,Ye.height,Ne,xe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,Ge,Ye.width,Ye.height,0,Ne,xe,Ye.data)}}else{Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ne,xe,ye[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ge,Ne,xe,ye[_e]);for(let be=0;be<ae.length;be++){const Le=ae[be];Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,0,0,Ne,xe,Le.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,Ge,Ne,xe,Le.image[_e])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),X.__version=k.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function de(w,v,P,V,k,X){const he=r.convert(P.format,P.colorSpace),fe=r.convert(P.type),ge=b(P.internalFormat,he,fe,P.colorSpace);if(!i.get(v).__hasExternalTextures){const pe=Math.max(1,v.width>>X),ye=Math.max(1,v.height>>X);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,X,ge,pe,ye,v.depth,0,he,fe,null):t.texImage2D(k,X,ge,pe,ye,0,he,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,k,i.get(P).__webglTexture,0,L(v)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,k,i.get(P).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(w,v,P){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const V=v.depthTexture,k=V&&V.isDepthTexture?V.type:null,X=x(v.stencilBuffer,k),he=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=L(v);F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,X,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,w)}else{const V=v.textures;for(let k=0;k<V.length;k++){const X=V[k],he=r.convert(X.format,X.colorSpace),fe=r.convert(X.type),ge=b(X.internalFormat,he,fe,X.colorSpace),Re=L(v);P&&F(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ge,v.width,v.height):F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,ge,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ge,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,k=L(v);if(v.depthTexture.format===Is)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===ks)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function ne(w){const v=i.get(w),P=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const V=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",k)};V.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=V}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");O(v.__webglFramebuffer,w)}else if(P){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),le(v.__webglDepthbuffer[V],w,!1);else{const k=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),le(v.__webglDepthbuffer,w,!1);else{const V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(w,v,P){const V=i.get(w);v!==void 0&&de(V.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&ne(w)}function ce(w){const v=w.texture,P=i.get(w),V=i.get(v);w.addEventListener("dispose",C);const k=w.textures,X=w.isWebGLCubeRenderTarget===!0,he=k.length>1;if(he||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),X){P.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[fe]=[];for(let ge=0;ge<v.mipmaps.length;ge++)P.__webglFramebuffer[fe][ge]=n.createFramebuffer()}else P.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)P.__webglFramebuffer[fe]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(he)for(let fe=0,ge=k.length;fe<ge;fe++){const Re=i.get(k[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&F(w)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let fe=0;fe<k.length;fe++){const ge=k[fe];P.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[fe]);const Re=r.convert(ge.format,ge.colorSpace),pe=r.convert(ge.type),ye=b(ge.internalFormat,Re,pe,ge.colorSpace,w.isXRRenderTarget===!0),Ue=L(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ye,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,P.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),le(P.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ve(n.TEXTURE_CUBE_MAP,v);for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)de(P.__webglFramebuffer[fe][ge],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else de(P.__webglFramebuffer[fe],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let fe=0,ge=k.length;fe<ge;fe++){const Re=k[fe],pe=i.get(Re);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),ve(n.TEXTURE_2D,Re),de(P.__webglFramebuffer,w,Re,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(Re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,V.__webglTexture),ve(fe,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)de(P.__webglFramebuffer[ge],w,v,n.COLOR_ATTACHMENT0,fe,ge);else de(P.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,fe,0);m(v)&&p(fe),t.unbindTexture()}w.depthBuffer&&ne(w)}function Me(w){const v=w.textures;for(let P=0,V=v.length;P<V;P++){const k=v[P];if(m(k)){const X=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(k).__webglTexture;t.bindTexture(X,he),p(X),t.unbindTexture()}}}const Q=[],g=[];function T(w){if(w.samples>0){if(F(w)===!1){const v=w.textures,P=w.width,V=w.height;let k=n.COLOR_BUFFER_BIT;const X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(w),fe=v.length>1;if(fe)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const Re=i.get(v[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,P,V,0,0,P,V,k,n.NEAREST),c===!0&&(Q.length=0,g.length=0,Q.push(n.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Q.push(X),g.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const Re=i.get(v[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function F(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(w){const v=o.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function J(w,v){const P=w.colorSpace,V=w.format,k=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||P!==Di&&P!==bi&&(nt.getTransfer(P)===ft?(V!==vn||k!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function te(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=E,this.setTexture2D=j,this.setTexture2DArray=se,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=K,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=de,this.useMultisampledRTT=F}function JS(n,e){function t(i,s=bi){let r;const o=nt.getTransfer(s);if(i===ui)return n.UNSIGNED_BYTE;if(i===Il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.BYTE;if(i===vd)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===Ll)return n.INT;if(i===es)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Nr)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===Md)return n.RGB;if(i===vn)return n.RGBA;if(i===Sd)return n.LUMINANCE;if(i===wd)return n.LUMINANCE_ALPHA;if(i===Is)return n.DEPTH_COMPONENT;if(i===ks)return n.DEPTH_STENCIL;if(i===Ed)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===bd)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Fl)return n.RGBA_INTEGER;if(i===So||i===wo||i===Eo||i===bo)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Cc||i===Pc||i===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Dc||i===Uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ic||i===Dc)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Uc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===Hc||i===Gc||i===kc||i===Vc||i===Wc||i===Xc||i===qc||i===Yc||i===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$c)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===jc||i===Kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===To)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Td||i===Zc||i===Jc||i===Qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===To)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class QS extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ct extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ew={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ew)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nw=`
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

}`;class iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Yt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mt({vertexShader:tw,fragmentShader:nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new D(new Qo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sw extends Xs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const y=new iw,m=t.getContextAttributes();let p=null,b=null;const x=[],S=[],I=new Ae;let C=null;const R=new vt;R.layers.enable(1),R.viewport=new at;const U=new vt;U.layers.enable(2),U.viewport=new at;const ie=[R,U],M=new QS;M.layers.enable(1),M.layers.enable(2);let E=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=x[ee];return de===void 0&&(de=new $a,x[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=x[ee];return de===void 0&&(de=new $a,x[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=x[ee];return de===void 0&&(de=new $a,x[ee]=de),de.getHandSpace()};function H(ee){const de=S.indexOf(ee.inputSource);if(de===-1)return;const le=x[de];le!==void 0&&(le.update(ee.inputSource,ee.frame,l||o),le.dispatchEvent({type:ee.type,data:ee.inputSource}))}function j(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",se);for(let ee=0;ee<x.length;ee++){const de=S[ee];de!==null&&(S[ee]=null,x[ee].disconnect(de))}E=null,q=null,y.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,b=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",j),s.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ts(d.framebufferWidth,d.framebufferHeight,{format:vn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,le=null,O=null;m.depth&&(O=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?ks:Is,le=m.stencil?Gs:es);const ne={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ts(f.textureWidth,f.textureHeight,{format:vn,type:ui,depthTexture:new kd(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function se(ee){for(let de=0;de<ee.removed.length;de++){const le=ee.removed[de],O=S.indexOf(le);O>=0&&(S[O]=null,x[O].disconnect(le))}for(let de=0;de<ee.added.length;de++){const le=ee.added[de];let O=S.indexOf(le);if(O===-1){for(let K=0;K<x.length;K++)if(K>=S.length){S.push(le),O=K;break}else if(S[K]===null){S[K]=le,O=K;break}if(O===-1)break}const ne=x[O];ne&&ne.connect(le)}}const G=new W,Z=new W;function z(ee,de,le){G.setFromMatrixPosition(de.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);const O=G.distanceTo(Z),ne=de.projectionMatrix.elements,K=le.projectionMatrix.elements,ce=ne[14]/(ne[10]-1),Me=ne[14]/(ne[10]+1),Q=(ne[9]+1)/ne[5],g=(ne[9]-1)/ne[5],T=(ne[8]-1)/ne[0],L=(K[8]+1)/K[0],F=ce*T,N=ce*L,J=O/(-T+L),te=J*-T;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(te),ee.translateZ(J),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ne[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const w=ce+J,v=Me+J,P=F-te,V=N+(O-te),k=Q*Me/v*w,X=g*Me/v*w;ee.projectionMatrix.makePerspective(P,V,k,X,w,v),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function me(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let de=ee.near,le=ee.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(le=y.depthFar)),M.near=U.near=R.near=de,M.far=U.far=R.far=le,(E!==M.near||q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,q=M.far);const O=ee.parent,ne=M.cameras;me(M,O);for(let K=0;K<ne.length;K++)me(ne[K],O);ne.length===2?z(M,R,U):M.projectionMatrix.copy(R.projectionMatrix),ue(ee,M,O)};function ue(ee,de,le){le===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(le.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ar*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let ve=null;function Se(ee,de){if(u=de.getViewerPose(l||o),_=de,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let O=!1;le.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let K=0;K<le.length;K++){const ce=le[K];let Me=null;if(d!==null)Me=d.getViewport(ce);else{const g=h.getViewSubImage(f,ce);Me=g.viewport,K===0&&(e.setRenderTargetTextures(b,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(b))}let Q=ie[K];Q===void 0&&(Q=new vt,Q.layers.enable(K),Q.viewport=new at,ie[K]=Q),Q.matrix.fromArray(ce.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ce.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Me.x,Me.y,Me.width,Me.height),K===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(Q)}const ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const K=h.getDepthInformation(le[0]);K&&K.isValid&&K.texture&&y.init(e,K,s.renderState)}}for(let le=0;le<x.length;le++){const O=S[le],ne=x[le];O!==null&&ne!==void 0&&ne.update(O,de,l||o)}ve&&ve(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ie=new Hd;Ie.setAnimationLoop(Se),this.setAnimationLoop=function(ee){ve=ee},this.dispose=function(){}}}const Wi=new Gn,rw=new dt;function ow(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),x=b.envMap,S=b.envMapRotation;x&&(m.envMap.value=x,Wi.copy(S),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(Wi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aw(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){const S=x.program;i.uniformBlockBinding(b,S)}function l(b,x){let S=s[b.id];S===void 0&&(_(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",m));const I=x.program;i.updateUBOMapping(b,I);const C=e.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function u(b){const x=h();b.__bindingPointIndex=x;const S=n.createBuffer(),I=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],S=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,R=S.length;C<R;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let ie=0,M=U.length;ie<M;ie++){const E=U[ie];if(d(E,C,ie,I)===!0){const q=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let j=0;for(let se=0;se<H.length;se++){const G=H[se],Z=y(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,q+j,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,x,S,I){const C=b.value,R=x+"_"+S;if(I[R]===void 0)return typeof C=="number"||typeof C=="boolean"?I[R]=C:I[R]=C.clone(),!0;{const U=I[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return I[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(b){const x=b.uniforms;let S=0;const I=16;for(let R=0,U=x.length;R<U;R++){const ie=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,E=ie.length;M<E;M++){const q=ie[M],H=Array.isArray(q.value)?q.value:[q.value];for(let j=0,se=H.length;j<se;j++){const G=H[j],Z=y(G),z=S%I,me=z%Z.boundary,ue=z+me;S+=me,ue!==0&&I-ue<Z.storage&&(S+=I-ue),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=Z.storage}}}const C=S%I;return C>0&&(S+=I-C),b.__size=S,b.__cache={},this}function y(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Vn{constructor(e={}){const{canvas:t=K_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let S=!1,I=0,C=0,R=null,U=-1,ie=null;const M=new at,E=new at;let q=null;const H=new He(0);let j=0,se=t.width,G=t.height,Z=1,z=null,me=null;const ue=new at(0,0,se,G),ve=new at(0,0,se,G);let Se=!1;const Ie=new Gl;let ee=!1,de=!1;const le=new dt,O=new dt,ne=new W,K=new at,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Q(){return R===null?Z:1}let g=i;function T(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pl}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Le,!1),g===null){const Y="webgl2";if(g=T(Y,A),g===null)throw T(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,F,N,J,te,w,v,P,V,k,X,he,fe,ge,Re,pe,ye,Ue,Ne,xe,Ge,Pe,We,B;function Ce(){L=new dM(g),L.init(),Pe=new JS(g,L),F=new aM(g,L,e,Pe),N=new jS(g),F.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),J=new gM(g),te=new US,w=new ZS(g,L,N,te,F,Pe,J),v=new lM(x),P=new fM(x),V=new wv(g),We=new rM(g,V),k=new pM(g,V,J,We),X=new vM(g,k,V,J),Ne=new _M(g,F,w),pe=new cM(te),he=new DS(x,v,P,L,F,We,pe),fe=new ow(x,te),ge=new FS,Re=new kS(L),Ue=new sM(x,v,P,N,X,f,c),ye=new YS(x,X,F),B=new aw(g,J,F,N),xe=new oM(g,L,J),Ge=new mM(g,L,J),J.programs=he.programs,x.capabilities=F,x.extensions=L,x.properties=te,x.renderLists=ge,x.shadowMap=ye,x.state=N,x.info=J}Ce();const ae=new sw(x,g);this.xr=ae,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(se,G,!1))},this.getSize=function(A){return A.set(se,G)},this.setSize=function(A,Y,re=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,G=Y,t.width=Math.floor(A*Z),t.height=Math.floor(Y*Z),re===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(se*Z,G*Z).floor()},this.setDrawingBufferSize=function(A,Y,re){se=A,G=Y,Z=re,t.width=Math.floor(A*re),t.height=Math.floor(Y*re),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(ue)},this.setViewport=function(A,Y,re,oe){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,Y,re,oe),N.viewport(M.copy(ue).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,Y,re,oe){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,Y,re,oe),N.scissor(E.copy(ve).multiplyScalar(Z).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){N.setScissorTest(Se=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(A=!0,Y=!0,re=!0){let oe=0;if(A){let $=!1;if(R!==null){const Ee=R.texture.format;$=Ee===Fl||Ee===Nl||Ee===Ul}if($){const Ee=R.texture.type,De=Ee===ui||Ee===es||Ee===Tr||Ee===Gs||Ee===Il||Ee===Dl,Fe=Ue.getClearColor(),Oe=Ue.getClearAlpha(),ke=Fe.r,Ve=Fe.g,Be=Fe.b;De?(d[0]=ke,d[1]=Ve,d[2]=Be,d[3]=Oe,g.clearBufferuiv(g.COLOR,0,d)):(_[0]=ke,_[1]=Ve,_[2]=Be,_[3]=Oe,g.clearBufferiv(g.COLOR,0,_))}else oe|=g.COLOR_BUFFER_BIT}Y&&(oe|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),re&&(oe|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ge.dispose(),Re.dispose(),te.dispose(),v.dispose(),P.dispose(),X.dispose(),We.dispose(),B.dispose(),he.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ql),ae.removeEventListener("sessionend",Yl),Fi.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=J.autoReset,Y=ye.enabled,re=ye.autoUpdate,oe=ye.needsUpdate,$=ye.type;Ce(),J.autoReset=A,ye.enabled=Y,ye.autoUpdate=re,ye.needsUpdate=oe,ye.type=$}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const Y=A.target;Y.removeEventListener("dispose",Ye),gt(Y)}function gt(A){Et(A),te.remove(A)}function Et(A){const Y=te.get(A).programs;Y!==void 0&&(Y.forEach(function(re){he.releaseProgram(re)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,re,oe,$,Ee){Y===null&&(Y=ce);const De=$.isMesh&&$.matrixWorld.determinant()<0,Fe=dp(A,Y,re,oe,$);N.setMaterial(oe,De);let Oe=re.index,ke=1;if(oe.wireframe===!0){if(Oe=k.getWireframeAttribute(re),Oe===void 0)return;ke=2}const Ve=re.drawRange,Be=re.attributes.position;let st=Ve.start*ke,ht=(Ve.start+Ve.count)*ke;Ee!==null&&(st=Math.max(st,Ee.start*ke),ht=Math.min(ht,(Ee.start+Ee.count)*ke)),Oe!==null?(st=Math.max(st,0),ht=Math.min(ht,Oe.count)):Be!=null&&(st=Math.max(st,0),ht=Math.min(ht,Be.count));const _t=ht-st;if(_t<0||_t===1/0)return;We.setup($,oe,Fe,re,Oe);let tn,Qe=xe;if(Oe!==null&&(tn=V.get(Oe),Qe=Ge,Qe.setIndex(tn)),$.isMesh)oe.wireframe===!0?(N.setLineWidth(oe.wireframeLinewidth*Q()),Qe.setMode(g.LINES)):Qe.setMode(g.TRIANGLES);else if($.isLine){let ze=oe.linewidth;ze===void 0&&(ze=1),N.setLineWidth(ze*Q()),$.isLineSegments?Qe.setMode(g.LINES):$.isLineLoop?Qe.setMode(g.LINE_LOOP):Qe.setMode(g.LINE_STRIP)}else $.isPoints?Qe.setMode(g.POINTS):$.isSprite&&Qe.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Qe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))Qe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ze=$._multiDrawStarts,It=$._multiDrawCounts,et=$._multiDrawCount,Mn=Oe?V.get(Oe).bytesPerElement:1,os=te.get(oe).currentProgram.getUniforms();for(let nn=0;nn<et;nn++)os.setValue(g,"_gl_DrawID",nn),Qe.render(ze[nn]/Mn,It[nn])}else if($.isInstancedMesh)Qe.renderInstances(st,_t,$.count);else if(re.isInstancedBufferGeometry){const ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,It=Math.min(re.instanceCount,ze);Qe.renderInstances(st,_t,It)}else Qe.render(st,_t)};function Je(A,Y,re){A.transparent===!0&&A.side===On&&A.forceSinglePass===!1?(A.side=Jt,A.needsUpdate=!0,Gr(A,Y,re),A.side=Pi,A.needsUpdate=!0,Gr(A,Y,re),A.side=On):Gr(A,Y,re)}this.compile=function(A,Y,re=null){re===null&&(re=A),m=Re.get(re),m.init(Y),b.push(m),re.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),A!==re&&A.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();const oe=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Fe=Ee[De];Je(Fe,re,$),oe.add(Fe)}else Je(Ee,re,$),oe.add(Ee)}),b.pop(),m=null,oe},this.compileAsync=function(A,Y,re=null){const oe=this.compile(A,Y,re);return new Promise($=>{function Ee(){if(oe.forEach(function(De){te.get(De).currentProgram.isReady()&&oe.delete(De)}),oe.size===0){$(A);return}setTimeout(Ee,10)}L.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Zt=null;function $n(A){Zt&&Zt(A)}function ql(){Fi.stop()}function Yl(){Fi.start()}const Fi=new Hd;Fi.setAnimationLoop($n),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(A){Zt=A,ae.setAnimationLoop(A),A===null?Fi.stop():Fi.start()},ae.addEventListener("sessionstart",ql),ae.addEventListener("sessionend",Yl),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,Y,R),m=Re.get(A,b.length),m.init(Y),b.push(m),O.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ie.setFromProjectionMatrix(O),de=this.localClippingEnabled,ee=pe.init(this.clippingPlanes,de),y=ge.get(A,p.length),y.init(),p.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Ee=x.xr.getDepthSensingMesh();Ee!==null&&na(Ee,Y,-1/0,x.sortObjects)}na(A,Y,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(z,me),Me=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Me&&Ue.addToRenderList(y,A),this.info.render.frame++,ee===!0&&pe.beginShadows();const re=m.state.shadowsArray;ye.render(re,A,Y),ee===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=y.opaque,$=y.transmissive;if(m.setupLights(),Y.isArrayCamera){const Ee=Y.cameras;if($.length>0)for(let De=0,Fe=Ee.length;De<Fe;De++){const Oe=Ee[De];jl(oe,$,A,Oe)}Me&&Ue.render(A);for(let De=0,Fe=Ee.length;De<Fe;De++){const Oe=Ee[De];$l(y,A,Oe,Oe.viewport)}}else $.length>0&&jl(oe,$,A,Y),Me&&Ue.render(A),$l(y,A,Y);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,Y),We.resetDefaultState(),U=-1,ie=null,b.pop(),b.length>0?(m=b[b.length-1],ee===!0&&pe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function na(A,Y,re,oe){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){oe&&K.setFromMatrixPosition(A.matrixWorld).applyMatrix4(O);const De=X.update(A),Fe=A.material;Fe.visible&&y.push(A,De,Fe,re,K.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const De=X.update(A),Fe=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),K.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),K.copy(De.boundingSphere.center)),K.applyMatrix4(A.matrixWorld).applyMatrix4(O)),Array.isArray(Fe)){const Oe=De.groups;for(let ke=0,Ve=Oe.length;ke<Ve;ke++){const Be=Oe[ke],st=Fe[Be.materialIndex];st&&st.visible&&y.push(A,De,st,re,K.z,Be)}}else Fe.visible&&y.push(A,De,Fe,re,K.z,null)}}const Ee=A.children;for(let De=0,Fe=Ee.length;De<Fe;De++)na(Ee[De],Y,re,oe)}function $l(A,Y,re,oe){const $=A.opaque,Ee=A.transmissive,De=A.transparent;m.setupLightsView(re),ee===!0&&pe.setGlobalState(x.clippingPlanes,re),oe&&N.viewport(M.copy(oe)),$.length>0&&Hr($,Y,re),Ee.length>0&&Hr(Ee,Y,re),De.length>0&&Hr(De,Y,re),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function jl(A,Y,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[oe.id]===void 0&&(m.state.transmissionRenderTarget[oe.id]=new ts(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Nr:ui,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Ee=m.state.transmissionRenderTarget[oe.id],De=oe.viewport||M;Ee.setSize(De.z,De.w);const Fe=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(H),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Me&&Ue.render(re);const Oe=x.toneMapping;x.toneMapping=Ri;const ke=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),m.setupLightsView(oe),ee===!0&&pe.setGlobalState(x.clippingPlanes,oe),Hr(A,re,oe),w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee),L.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Be=0,st=Y.length;Be<st;Be++){const ht=Y[Be],_t=ht.object,tn=ht.geometry,Qe=ht.material,ze=ht.group;if(Qe.side===On&&_t.layers.test(oe.layers)){const It=Qe.side;Qe.side=Jt,Qe.needsUpdate=!0,Kl(_t,re,oe,tn,Qe,ze),Qe.side=It,Qe.needsUpdate=!0,Ve=!0}}Ve===!0&&(w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee))}x.setRenderTarget(Fe),x.setClearColor(H,j),ke!==void 0&&(oe.viewport=ke),x.toneMapping=Oe}function Hr(A,Y,re){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ee=A.length;$<Ee;$++){const De=A[$],Fe=De.object,Oe=De.geometry,ke=oe===null?De.material:oe,Ve=De.group;Fe.layers.test(re.layers)&&Kl(Fe,Y,re,Oe,ke,Ve)}}function Kl(A,Y,re,oe,$,Ee){A.onBeforeRender(x,Y,re,oe,$,Ee),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(x,Y,re,oe,A,Ee),$.transparent===!0&&$.side===On&&$.forceSinglePass===!1?($.side=Jt,$.needsUpdate=!0,x.renderBufferDirect(re,Y,oe,$,A,Ee),$.side=Pi,$.needsUpdate=!0,x.renderBufferDirect(re,Y,oe,$,A,Ee),$.side=On):x.renderBufferDirect(re,Y,oe,$,A,Ee),A.onAfterRender(x,Y,re,oe,$,Ee)}function Gr(A,Y,re){Y.isScene!==!0&&(Y=ce);const oe=te.get(A),$=m.state.lights,Ee=m.state.shadowsArray,De=$.state.version,Fe=he.getParameters(A,$.state,Ee,Y,re),Oe=he.getProgramCacheKey(Fe);let ke=oe.programs;oe.environment=A.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(A.isMeshStandardMaterial?P:v).get(A.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Ye),ke=new Map,oe.programs=ke);let Ve=ke.get(Oe);if(Ve!==void 0){if(oe.currentProgram===Ve&&oe.lightsStateVersion===De)return Jl(A,Fe),Ve}else Fe.uniforms=he.getUniforms(A),A.onBeforeCompile(Fe,x),Ve=he.acquireProgram(Fe,Oe),ke.set(Oe,Ve),oe.uniforms=Fe.uniforms;const Be=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=pe.uniform),Jl(A,Fe),oe.needsLights=mp(A),oe.lightsStateVersion=De,oe.needsLights&&(Be.ambientLightColor.value=$.state.ambient,Be.lightProbe.value=$.state.probe,Be.directionalLights.value=$.state.directional,Be.directionalLightShadows.value=$.state.directionalShadow,Be.spotLights.value=$.state.spot,Be.spotLightShadows.value=$.state.spotShadow,Be.rectAreaLights.value=$.state.rectArea,Be.ltc_1.value=$.state.rectAreaLTC1,Be.ltc_2.value=$.state.rectAreaLTC2,Be.pointLights.value=$.state.point,Be.pointLightShadows.value=$.state.pointShadow,Be.hemisphereLights.value=$.state.hemi,Be.directionalShadowMap.value=$.state.directionalShadowMap,Be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Be.spotShadowMap.value=$.state.spotShadowMap,Be.spotLightMatrix.value=$.state.spotLightMatrix,Be.spotLightMap.value=$.state.spotLightMap,Be.pointShadowMap.value=$.state.pointShadowMap,Be.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=Ve,oe.uniformsList=null,Ve}function Zl(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Ro.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Jl(A,Y){const re=te.get(A);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function dp(A,Y,re,oe,$){Y.isScene!==!0&&(Y=ce),w.resetTextureUnits();const Ee=Y.fog,De=oe.isMeshStandardMaterial?Y.environment:null,Fe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Di,Oe=(oe.isMeshStandardMaterial?P:v).get(oe.envMap||De),ke=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ve=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Be=!!re.morphAttributes.position,st=!!re.morphAttributes.normal,ht=!!re.morphAttributes.color;let _t=Ri;oe.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=x.toneMapping);const tn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Qe=tn!==void 0?tn.length:0,ze=te.get(oe),It=m.state.lights;if(ee===!0&&(de===!0||A!==ie)){const fn=A===ie&&oe.id===U;pe.setState(oe,A,fn)}let et=!1;oe.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==It.state.version||ze.outputColorSpace!==Fe||$.isBatchedMesh&&ze.batching===!1||!$.isBatchedMesh&&ze.batching===!0||$.isBatchedMesh&&ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ze.instancing===!1||!$.isInstancedMesh&&ze.instancing===!0||$.isSkinnedMesh&&ze.skinning===!1||!$.isSkinnedMesh&&ze.skinning===!0||$.isInstancedMesh&&ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ze.instancingMorph===!1&&$.morphTexture!==null||ze.envMap!==Oe||oe.fog===!0&&ze.fog!==Ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==Ve||ze.morphTargets!==Be||ze.morphNormals!==st||ze.morphColors!==ht||ze.toneMapping!==_t||ze.morphTargetsCount!==Qe)&&(et=!0):(et=!0,ze.__version=oe.version);let Mn=ze.currentProgram;et===!0&&(Mn=Gr(oe,Y,$));let os=!1,nn=!1,ia=!1;const yt=Mn.getUniforms(),fi=ze.uniforms;if(N.useProgram(Mn.program)&&(os=!0,nn=!0,ia=!0),oe.id!==U&&(U=oe.id,nn=!0),os||ie!==A){F.reverseDepthBuffer?(le.copy(A.projectionMatrix),J_(le),Q_(le),yt.setValue(g,"projectionMatrix",le)):yt.setValue(g,"projectionMatrix",A.projectionMatrix),yt.setValue(g,"viewMatrix",A.matrixWorldInverse);const fn=yt.map.cameraPosition;fn!==void 0&&fn.setValue(g,ne.setFromMatrixPosition(A.matrixWorld)),F.logarithmicDepthBuffer&&yt.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&yt.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,nn=!0,ia=!0)}if($.isSkinnedMesh){yt.setOptional(g,$,"bindMatrix"),yt.setOptional(g,$,"bindMatrixInverse");const fn=$.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),yt.setValue(g,"boneTexture",fn.boneTexture,w))}$.isBatchedMesh&&(yt.setOptional(g,$,"batchingTexture"),yt.setValue(g,"batchingTexture",$._matricesTexture,w),yt.setOptional(g,$,"batchingIdTexture"),yt.setValue(g,"batchingIdTexture",$._indirectTexture,w),yt.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&yt.setValue(g,"batchingColorTexture",$._colorsTexture,w));const sa=re.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&Ne.update($,re,Mn),(nn||ze.receiveShadow!==$.receiveShadow)&&(ze.receiveShadow=$.receiveShadow,yt.setValue(g,"receiveShadow",$.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(fi.envMap.value=Oe,fi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Y.environment!==null&&(fi.envMapIntensity.value=Y.environmentIntensity),nn&&(yt.setValue(g,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&pp(fi,ia),Ee&&oe.fog===!0&&fe.refreshFogUniforms(fi,Ee),fe.refreshMaterialUniforms(fi,oe,Z,G,m.state.transmissionRenderTarget[A.id]),Ro.upload(g,Zl(ze),fi,w)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ro.upload(g,Zl(ze),fi,w),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&yt.setValue(g,"center",$.center),yt.setValue(g,"modelViewMatrix",$.modelViewMatrix),yt.setValue(g,"normalMatrix",$.normalMatrix),yt.setValue(g,"modelMatrix",$.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const fn=oe.uniformsGroups;for(let ra=0,gp=fn.length;ra<gp;ra++){const Ql=fn[ra];B.update(Ql,Mn),B.bind(Ql,Mn)}}return Mn}function pp(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function mp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,Y,re){te.get(A.texture).__webglTexture=Y,te.get(A.depthTexture).__webglTexture=re;const oe=te.get(A);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=re===void 0,oe.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){const re=te.get(A);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,re=0){R=A,I=Y,C=re;let oe=!0,$=null,Ee=!1,De=!1;if(A){const Oe=te.get(A);if(Oe.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),oe=!1;else if(Oe.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(Oe.__hasExternalTextures)w.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(Oe.__boundDepthTexture!==Be){if(Be!==null&&te.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(De=!0);const Ve=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[Y])?$=Ve[Y][re]:$=Ve[Y],Ee=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?$=te.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?$=Ve[re]:$=Ve,M.copy(A.viewport),E.copy(A.scissor),q=A.scissorTest}else M.copy(ue).multiplyScalar(Z).floor(),E.copy(ve).multiplyScalar(Z).floor(),q=Se;if(N.bindFramebuffer(g.FRAMEBUFFER,$)&&oe&&N.drawBuffers(A,$),N.viewport(M),N.scissor(E),N.setScissorTest(q),Ee){const Oe=te.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,re)}else if(De){const Oe=te.get(A.texture),ke=Y||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Oe.__webglTexture,re||0,ke)}U=-1},this.readRenderTargetPixels=function(A,Y,re,oe,$,Ee,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){N.bindFramebuffer(g.FRAMEBUFFER,Fe);try{const Oe=A.texture,ke=Oe.format,Ve=Oe.type;if(!F.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-oe&&re>=0&&re<=A.height-$&&g.readPixels(Y,re,oe,$,Pe.convert(ke),Pe.convert(Ve),Ee)}finally{const Oe=R!==null?te.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,Y,re,oe,$,Ee,De){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){const Oe=A.texture,ke=Oe.format,Ve=Oe.type;if(!F.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-oe&&re>=0&&re<=A.height-$){N.bindFramebuffer(g.FRAMEBUFFER,Fe);const Be=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Be),g.bufferData(g.PIXEL_PACK_BUFFER,Ee.byteLength,g.STREAM_READ),g.readPixels(Y,re,oe,$,Pe.convert(ke),Pe.convert(Ve),0);const st=R!==null?te.get(R).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,st);const ht=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await Z_(g,ht,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Be),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Ee),g.deleteBuffer(Be),g.deleteSync(ht),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,re=0){A.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);const oe=Math.pow(2,-re),$=Math.floor(A.image.width*oe),Ee=Math.floor(A.image.height*oe),De=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;w.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,re,0,0,De,Fe,$,Ee),N.unbindTexture()},this.copyTextureToTexture=function(A,Y,re=null,oe=null,$=0){A.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,A=arguments[1],Y=arguments[2],$=arguments[3]||0,re=null);let Ee,De,Fe,Oe,ke,Ve;re!==null?(Ee=re.max.x-re.min.x,De=re.max.y-re.min.y,Fe=re.min.x,Oe=re.min.y):(Ee=A.image.width,De=A.image.height,Fe=0,Oe=0),oe!==null?(ke=oe.x,Ve=oe.y):(ke=0,Ve=0);const Be=Pe.convert(Y.format),st=Pe.convert(Y.type);w.setTexture2D(Y,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const ht=g.getParameter(g.UNPACK_ROW_LENGTH),_t=g.getParameter(g.UNPACK_IMAGE_HEIGHT),tn=g.getParameter(g.UNPACK_SKIP_PIXELS),Qe=g.getParameter(g.UNPACK_SKIP_ROWS),ze=g.getParameter(g.UNPACK_SKIP_IMAGES),It=A.isCompressedTexture?A.mipmaps[$]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,It.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,It.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Fe),g.pixelStorei(g.UNPACK_SKIP_ROWS,Oe),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,ke,Ve,Ee,De,Be,st,It.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,ke,Ve,It.width,It.height,Be,It.data):g.texSubImage2D(g.TEXTURE_2D,$,ke,Ve,Ee,De,Be,st,It),g.pixelStorei(g.UNPACK_ROW_LENGTH,ht),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,_t),g.pixelStorei(g.UNPACK_SKIP_PIXELS,tn),g.pixelStorei(g.UNPACK_SKIP_ROWS,Qe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ze),$===0&&Y.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,re=null,oe=null,$=0){A.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,oe=arguments[1]||null,A=arguments[2],Y=arguments[3],$=arguments[4]||0);let Ee,De,Fe,Oe,ke,Ve,Be,st,ht;const _t=A.isCompressedTexture?A.mipmaps[$]:A.image;re!==null?(Ee=re.max.x-re.min.x,De=re.max.y-re.min.y,Fe=re.max.z-re.min.z,Oe=re.min.x,ke=re.min.y,Ve=re.min.z):(Ee=_t.width,De=_t.height,Fe=_t.depth,Oe=0,ke=0,Ve=0),oe!==null?(Be=oe.x,st=oe.y,ht=oe.z):(Be=0,st=0,ht=0);const tn=Pe.convert(Y.format),Qe=Pe.convert(Y.type);let ze;if(Y.isData3DTexture)w.setTexture3D(Y,0),ze=g.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)w.setTexture2DArray(Y,0),ze=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const It=g.getParameter(g.UNPACK_ROW_LENGTH),et=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Mn=g.getParameter(g.UNPACK_SKIP_PIXELS),os=g.getParameter(g.UNPACK_SKIP_ROWS),nn=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,_t.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,_t.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Oe),g.pixelStorei(g.UNPACK_SKIP_ROWS,ke),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ve),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(ze,$,Be,st,ht,Ee,De,Fe,tn,Qe,_t.data):Y.isCompressedArrayTexture?g.compressedTexSubImage3D(ze,$,Be,st,ht,Ee,De,Fe,tn,_t.data):g.texSubImage3D(ze,$,Be,st,ht,Ee,De,Fe,tn,Qe,_t),g.pixelStorei(g.UNPACK_ROW_LENGTH,It),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,et),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Mn),g.pixelStorei(g.UNPACK_SKIP_ROWS,os),g.pixelStorei(g.UNPACK_SKIP_IMAGES,nn),$===0&&Y.generateMipmaps&&g.generateMipmap(ze),N.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),N.unbindTexture()},this.resetState=function(){I=0,C=0,R=null,N.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ol?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Jo?"display-p3":"srgb"}}class Wn extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ae:new W);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new W,s=[],r=[],o=[],a=new W,c=new dt;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new W)}r[0]=new W,o[0]=new W;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vl extends Xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ae){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cw extends Vl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wl(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const go=new W,ja=new Wl,Ka=new Wl,Za=new Wl;class lw extends Xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new W){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),l=go);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=go),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),ja.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,_,y,m),Ka.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,_,y,m),Za.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ka.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Za.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(ja.calc(c),Ka.calc(c),Za.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function uw(n,e){const t=1-n;return t*t*e}function hw(n,e){return 2*(1-n)*n*e}function fw(n,e){return n*n*e}function mr(n,e,t,i){return uw(n,e)+hw(n,t)+fw(n,i)}function dw(n,e){const t=1-n;return t*t*t*e}function pw(n,e){const t=1-n;return 3*t*t*n*e}function mw(n,e){return 3*(1-n)*n*n*e}function gw(n,e){return n*n*n*e}function gr(n,e,t,i,s){return dw(n,e)+pw(n,t)+mw(n,i)+gw(n,s)}class Yd extends Xn{constructor(e=new Ae,t=new Ae,i=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ae){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(e,s.x,r.x,o.x,a.x),gr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _w extends Xn{constructor(e=new W,t=new W,i=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new W){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(e,s.x,r.x,o.x,a.x),gr(e,s.y,r.y,o.y,a.y),gr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $d extends Xn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vw extends Xn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jd extends Xn{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(e,s.x,r.x,o.x),mr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xw extends Xn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(e,s.x,r.x,o.x),mr(e,s.y,r.y,o.y),mr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Xh(a,c.x,l.x,u.x,h.x),Xh(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:cw,CatmullRomCurve3:lw,CubicBezierCurve:Yd,CubicBezierCurve3:_w,EllipseCurve:Vl,LineCurve:$d,LineCurve3:vw,QuadraticBezierCurve:jd,QuadraticBezierCurve3:xw,SplineCurve:Kd});class yw extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new tl[s.type]().fromJSON(s))}return this}}class nl extends yw{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new $d(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new jd(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Yd(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Kd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new Vl(e,t,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qt extends In{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new W,u=new Ae;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yn extends In{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const y=[],m=i/2;let p=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(d,2));function b(){const S=new W,I=new W;let C=0;const R=(t-e)/i;for(let U=0;U<=r;U++){const ie=[],M=U/r,E=M*(t-e)+e;for(let q=0;q<=s;q++){const H=q/s,j=H*c+a,se=Math.sin(j),G=Math.cos(j);I.x=E*se,I.y=-M*i+m,I.z=E*G,h.push(I.x,I.y,I.z),S.set(se,R,G).normalize(),f.push(S.x,S.y,S.z),d.push(H,1-M),ie.push(_++)}y.push(ie)}for(let U=0;U<s;U++)for(let ie=0;ie<r;ie++){const M=y[ie][U],E=y[ie+1][U],q=y[ie+1][U+1],H=y[ie][U+1];e>0&&(u.push(M,E,H),C+=3),t>0&&(u.push(E,q,H),C+=3)}l.addGroup(p,C,0),p+=C}function x(S){const I=_,C=new Ae,R=new W;let U=0;const ie=S===!0?e:t,M=S===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),_++;const E=_;for(let q=0;q<=s;q++){const j=q/s*c+a,se=Math.cos(j),G=Math.sin(j);R.x=ie*G,R.y=m*M,R.z=ie*se,h.push(R.x,R.y,R.z),f.push(0,M,0),C.x=se*.5+.5,C.y=G*.5*M+.5,d.push(C.x,C.y),_++}for(let q=0;q<s;q++){const H=I+q,j=E+q;S===!0?u.push(j,j+1,H):u.push(j+1,j,H),U+=3}l.addGroup(p,U,S===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ht extends nl{constructor(e){super(e),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new nl().fromJSON(s))}return this}}const Mw={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Zd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(i&&(r=Tw(n,e,r,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let _=t;_<s;_+=t)h=n[_],f=n[_+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Cr(r,o,t,a,c,d,0),o}};function Zd(n,e,t,i,s){let r,o;if(s===Ow(n,e,t,i)>0)for(r=e;r<t;r+=i)o=qh(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=qh(r,n[r],n[r+1],o);return o&&ta(o,o.next)&&(Lr(o),o=o.next),o}function ns(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ta(t,t.next)||pt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Cr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Lw(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?ww(n,i,s,r):Sw(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Lr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Ew(ns(n),e,t),Cr(n,e,t,i,s,r,2)):o===2&&bw(n,e,t,i,s,r):Cr(ns(n),e,t,i,s,r,1);break}}}function Sw(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&As(s,a,r,c,o,l,_.x,_.y)&&pt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ww(n,e,t,i){const s=n.prev,r=n,o=n.next;if(pt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,_=u<h?u<f?u:f:h<f?h:f,y=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=il(d,_,e,t,i),b=il(y,m,e,t,i);let x=n.prevZ,S=n.nextZ;for(;x&&x.z>=p&&S&&S.z<=b;){if(x.x>=d&&x.x<=y&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&As(a,u,c,h,l,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=d&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&As(a,u,c,h,l,f,S.x,S.y)&&pt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=y&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&As(a,u,c,h,l,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=b;){if(S.x>=d&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&As(a,u,c,h,l,f,S.x,S.y)&&pt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ew(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!ta(s,r)&&Jd(s,i,i.next,r)&&Pr(s,r)&&Pr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Lr(i),Lr(i.next),i=n=r),i=i.next}while(i!==n);return ns(i)}function bw(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Uw(o,a)){let c=Qd(o,a);o=ns(o,o.next),c=ns(c,c.next),Cr(o,e,t,i,s,r,0),Cr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Tw(n,e,t,i){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Zd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Dw(l));for(s.sort(Aw),r=0;r<s.length;r++)t=Rw(s[r],t);return t}function Aw(n,e){return n.x-e.x}function Rw(n,e){const t=Cw(n,e);if(!t)return e;const i=Qd(t,n);return ns(i,i.next),ns(t,t.next)}function Cw(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&As(o<l?r:i,o,c,l,o<l?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Pr(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Pw(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Pw(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function Lw(n,e,t,i){let s=n;do s.z===0&&(s.z=il(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Iw(s)}function Iw(n){let e,t,i,s,r,o,a,c,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function il(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Dw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function As(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Uw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Nw(n,e)&&(Pr(n,e)&&Pr(e,n)&&Fw(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||ta(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ta(n,e){return n.x===e.x&&n.y===e.y}function Jd(n,e,t,i){const s=vo(pt(n,e,t)),r=vo(pt(n,e,i)),o=vo(pt(t,i,n)),a=vo(pt(t,i,e));return!!(s!==r&&o!==a||s===0&&_o(n,t,e)||r===0&&_o(n,i,e)||o===0&&_o(t,n,i)||a===0&&_o(t,e,i))}function _o(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function vo(n){return n>0?1:n<0?-1:0}function Nw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Jd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Pr(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function Fw(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Qd(n,e){const t=new sl(n.i,n.x,n.y),i=new sl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function qh(n,e,t,i){const s=new sl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ow(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Us{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Us.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Yh(e),$h(i,e);let o=e.length;t.forEach(Yh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,$h(i,t[c]);const a=Mw.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Yh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $h(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class $t extends In{constructor(e=new Ht([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Pt(s,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Bw;let x,S=!1,I,C,R,U;p&&(x=p.getSpacedPoints(u),S=!0,f=!1,I=p.computeFrenetFrames(u,!1),C=new W,R=new W,U=new W),f||(m=0,d=0,_=0,y=0);const ie=a.extractPoints(l);let M=ie.shape;const E=ie.holes;if(!Us.isClockWise(M)){M=M.reverse();for(let Q=0,g=E.length;Q<g;Q++){const T=E[Q];Us.isClockWise(T)&&(E[Q]=T.reverse())}}const H=Us.triangulateShape(M,E),j=M;for(let Q=0,g=E.length;Q<g;Q++){const T=E[Q];M=M.concat(T)}function se(Q,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(g,T)}const G=M.length,Z=H.length;function z(Q,g,T){let L,F,N;const J=Q.x-g.x,te=Q.y-g.y,w=T.x-Q.x,v=T.y-Q.y,P=J*J+te*te,V=J*v-te*w;if(Math.abs(V)>Number.EPSILON){const k=Math.sqrt(P),X=Math.sqrt(w*w+v*v),he=g.x-te/k,fe=g.y+J/k,ge=T.x-v/X,Re=T.y+w/X,pe=((ge-he)*v-(Re-fe)*w)/(J*v-te*w);L=he+J*pe-Q.x,F=fe+te*pe-Q.y;const ye=L*L+F*F;if(ye<=2)return new Ae(L,F);N=Math.sqrt(ye/2)}else{let k=!1;J>Number.EPSILON?w>Number.EPSILON&&(k=!0):J<-Number.EPSILON?w<-Number.EPSILON&&(k=!0):Math.sign(te)===Math.sign(v)&&(k=!0),k?(L=-te,F=J,N=Math.sqrt(P)):(L=J,F=te,N=Math.sqrt(P/2))}return new Ae(L/N,F/N)}const me=[];for(let Q=0,g=j.length,T=g-1,L=Q+1;Q<g;Q++,T++,L++)T===g&&(T=0),L===g&&(L=0),me[Q]=z(j[Q],j[T],j[L]);const ue=[];let ve,Se=me.concat();for(let Q=0,g=E.length;Q<g;Q++){const T=E[Q];ve=[];for(let L=0,F=T.length,N=F-1,J=L+1;L<F;L++,N++,J++)N===F&&(N=0),J===F&&(J=0),ve[L]=z(T[L],T[N],T[J]);ue.push(ve),Se=Se.concat(ve)}for(let Q=0;Q<m;Q++){const g=Q/m,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+y;for(let F=0,N=j.length;F<N;F++){const J=se(j[F],me[F],L);O(J.x,J.y,-T)}for(let F=0,N=E.length;F<N;F++){const J=E[F];ve=ue[F];for(let te=0,w=J.length;te<w;te++){const v=se(J[te],ve[te],L);O(v.x,v.y,-T)}}}const Ie=_+y;for(let Q=0;Q<G;Q++){const g=f?se(M[Q],Se[Q],Ie):M[Q];S?(R.copy(I.normals[0]).multiplyScalar(g.x),C.copy(I.binormals[0]).multiplyScalar(g.y),U.copy(x[0]).add(R).add(C),O(U.x,U.y,U.z)):O(g.x,g.y,0)}for(let Q=1;Q<=u;Q++)for(let g=0;g<G;g++){const T=f?se(M[g],Se[g],Ie):M[g];S?(R.copy(I.normals[Q]).multiplyScalar(T.x),C.copy(I.binormals[Q]).multiplyScalar(T.y),U.copy(x[Q]).add(R).add(C),O(U.x,U.y,U.z)):O(T.x,T.y,h/u*Q)}for(let Q=m-1;Q>=0;Q--){const g=Q/m,T=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+y;for(let F=0,N=j.length;F<N;F++){const J=se(j[F],me[F],L);O(J.x,J.y,h+T)}for(let F=0,N=E.length;F<N;F++){const J=E[F];ve=ue[F];for(let te=0,w=J.length;te<w;te++){const v=se(J[te],ve[te],L);S?O(v.x,v.y+x[u-1].y,x[u-1].x+T):O(v.x,v.y,h+T)}}}ee(),de();function ee(){const Q=s.length/3;if(f){let g=0,T=G*g;for(let L=0;L<Z;L++){const F=H[L];ne(F[2]+T,F[1]+T,F[0]+T)}g=u+m*2,T=G*g;for(let L=0;L<Z;L++){const F=H[L];ne(F[0]+T,F[1]+T,F[2]+T)}}else{for(let g=0;g<Z;g++){const T=H[g];ne(T[2],T[1],T[0])}for(let g=0;g<Z;g++){const T=H[g];ne(T[0]+G*u,T[1]+G*u,T[2]+G*u)}}i.addGroup(Q,s.length/3-Q,0)}function de(){const Q=s.length/3;let g=0;le(j,g),g+=j.length;for(let T=0,L=E.length;T<L;T++){const F=E[T];le(F,g),g+=F.length}i.addGroup(Q,s.length/3-Q,1)}function le(Q,g){let T=Q.length;for(;--T>=0;){const L=T;let F=T-1;F<0&&(F=Q.length-1);for(let N=0,J=u+m*2;N<J;N++){const te=G*N,w=G*(N+1),v=g+L+te,P=g+F+te,V=g+F+w,k=g+L+w;K(v,P,V,k)}}}function O(Q,g,T){c.push(Q),c.push(g),c.push(T)}function ne(Q,g,T){ce(Q),ce(g),ce(T);const L=s.length/3,F=b.generateTopUV(i,s,L-3,L-2,L-1);Me(F[0]),Me(F[1]),Me(F[2])}function K(Q,g,T,L){ce(Q),ce(g),ce(L),ce(g),ce(T),ce(L);const F=s.length/3,N=b.generateSideWallUV(i,s,F-6,F-3,F-2,F-1);Me(N[0]),Me(N[1]),Me(N[3]),Me(N[1]),Me(N[2]),Me(N[3])}function ce(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function Me(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return zw(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new tl[s.type]().fromJSON(s)),new $t(i,e.options)}}const Bw={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,c),new Ae(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],_=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ae(o,1-c),new Ae(l,1-h),new Ae(f,1-_),new Ae(y,1-p)]:[new Ae(a,1-c),new Ae(u,1-h),new Ae(d,1-_),new Ae(m,1-p)]}};function zw(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class we extends In{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new W,f=new W,d=[],_=[],y=[],m=[];for(let p=0;p<=i;p++){const b=[],x=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const C=I/t;h.x=-e*Math.cos(s+C*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+C*r)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(C+S,1-x),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const x=u[p][b+1],S=u[p][b],I=u[p+1][b],C=u[p+1][b+1];(p!==0||o>0)&&d.push(x,S,C),(p!==i-1||c<Math.PI)&&d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new we(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ir extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ke extends Ir{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Bo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Hw{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Gw=new Hw;class Ys{constructor(e){this.manager=e!==void 0?e:Gw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class kw extends Error{constructor(e,t){super(e),this.response=t}}class Vw extends Ys{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Bo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:i,onError:s});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ni[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let y=0;const m=new ReadableStream({start(p){b();function b(){h.read().then(({done:x,value:S})=>{if(x)p.close();else{y+=S.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:d});for(let C=0,R=u.length;C<R;C++){const U=u[C];U.onProgress&&U.onProgress(I)}p.enqueue(S),b()}},x=>{p.error(x)})}}});return new Response(m)}else throw new kw(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{Bo.add(e,l);const u=ni[e];delete ni[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ep extends Ys{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Rr("img");function c(){u(),Bo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ww extends Ys{constructor(e){super(e)}load(e,t,i,s){const r=new Hl;r.colorSpace=bn;const o=new ep(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){r.images[l]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let l=0;l<e.length;++l)c(l);return r}}class tp extends Ys{constructor(e){super(e)}load(e,t,i,s){const r=new Yt,o=new ep(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Xl extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ja=new dt,jh=new W,Kh=new W;class np{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(jh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zh=new dt,nr=new W,Qa=new W;class Xw extends np{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),i.position.copy(nr),Qa.copy(i.position),Qa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qa),i.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}}class Ui extends Xl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qw extends np{constructor(){super(new Gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qn extends Xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new qw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yn extends Xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yw{constructor(){this.type="ShapePath",this.color=new He,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new nl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let x=0,S=p.length;x<S;x++){const I=p[x],C=new Ht;C.curves=I.curves,b.push(C)}return b}function i(p,b){const x=b.length;let S=!1;for(let I=x-1,C=0;C<x;I=C++){let R=b[I],U=b[C],ie=U.x-R.x,M=U.y-R.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(R=b[C],ie=-ie,U=b[I],M=-M),p.y<R.y||p.y>U.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const E=M*(p.x-R.x)-ie*(p.y-R.y);if(E===0)return!0;if(E<0)continue;S=!S}}else{if(p.y!==R.y)continue;if(U.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=U.x)return!0}}return S}const s=Us.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Ht,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],_=0,y;f[_]=void 0,d[_]=[];for(let p=0,b=r.length;p<b;p++)a=r[p],y=a.getPoints(),o=s(y),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new Ht,p:y},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:y[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,b=0;for(let x=0,S=f.length;x<S;x++)h[x]=[];for(let x=0,S=f.length;x<S;x++){const I=d[x];for(let C=0;C<I.length;C++){const R=I[C];let U=!0;for(let ie=0;ie<f.length;ie++)i(R.p,f[ie].p)&&(x!==ie&&b++,U?(U=!1,h[ie].push(R)):p=!0);U&&h[x].push(R)}}b>0&&p===!1&&(d=h)}let m;for(let p=0,b=f.length;p<b;p++){c=f[p].s,l.push(c),m=d[p];for(let x=0,S=m.length;x<S;x++)c.holes.push(m[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);class Ni extends Ys{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Vw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=r.parse(JSON.parse(a));t&&t(c)},i,s)}parse(e){return new $w(e)}}class $w{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=jw(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function jw(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)a=0,c-=r;else{const h=Kw(u,s,a,c,t);a+=h.offsetX,o.push(h.path)}}return o}function Kw(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new Yw;let a,c,l,u,h,f,d,_;if(r.o){const y=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=y.length;m<p;)switch(y[m++]){case"m":a=y[m++]*e+t,c=y[m++]*e+i,o.moveTo(a,c);break;case"l":a=y[m++]*e+t,c=y[m++]*e+i,o.lineTo(a,c);break;case"q":l=y[m++]*e+t,u=y[m++]*e+i,h=y[m++]*e+t,f=y[m++]*e+i,o.quadraticCurveTo(h,f,l,u);break;case"b":l=y[m++]*e+t,u=y[m++]*e+i,h=y[m++]*e+t,f=y[m++]*e+i,d=y[m++]*e+t,_=y[m++]*e+i,o.bezierCurveTo(h,f,d,_,l,u);break}}return{offsetX:r.ha*e,path:o}}class jt extends $t{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const s=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const Zw=Kt({__name:"PinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.03,o.render(s,r)};const s=new Wn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Vn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=ss,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Yn(16777215,.6);s.add(a);const c=new qn(16777215,1.5);c.position.set(5,5,5),s.add(c);const l=new Ui(16777215,2,50);l.position.set(0,2,4),s.add(l);const u=new mt({uniforms:{time:{value:0},color1:{value:new He(16766720)},color2:{value:new He(16007990)}},vertexShader:`
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
        `}),h=new Ke({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new Ke({color:13369344,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99}),d=new ct,_=new we(1,32,32),y=new D(_,h);y.scale.set(.85,.85,.8),y.position.y=-.2,d.add(y);const m=new we(.6,32,32),p=new D(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const b=new we(.25,32,32),x=new D(b,h);x.position.set(-.45,1.35,-.1),d.add(x);const S=new D(b,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new we(.25,32,32),C=new D(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new Ht;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const U={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ie=new $t(R,U),M=new D(ie,f);M.scale.set(.5,.5,.5),M.position.set(0,.34,.8),M.rotation.y=Math.PI,M.rotation.x=Math.PI,d.add(M);const E=new we(.35,32,32),q=new D(E,h);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),d.add(q);const H=new D(E,h);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),d.add(H);const j=new yn(.2,.22,.6,32),se=new D(j,h);se.position.set(-.4,-1.05,0),d.add(se);const G=new D(j,h);G.position.set(.4,-1.05,0),d.add(G);const Z=new we(.3,32,32),z=new D(Z,h);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),d.add(z);const me=new D(Z,h);me.scale.set(1,.72,1.5),me.position.set(.4,-1.45,.17),d.add(me);const ue=new we(.44,32,32),ve=new D(ue,h);ve.position.set(-.15,-.45,-.4),d.add(ve);const Se=new D(ue,h);Se.position.set(.15,-.45,-.4),d.add(Se);const Ie=new we(.18,32,32),ee=new D(Ie,f);ee.position.set(0,-.35,-.8),d.add(ee),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(K){const ce=new jt("X",{font:K,size:.2,depth:.05}),Me=new xt({color:0}),Q=new D(ce,Me);Q.position.set(-.34,1,.5),d.add(Q)});const le=new we(.1,32,32),O=new xt({color:0}),ne=new D(le,O);ne.position.set(.2,1.1,.54),d.add(ne),s.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),Ct(()=>e.bodyPosition,K=>{d.position.set(K.x,K.y,K.z)}),Ct(()=>e.cameraPosition,K=>{r.position.set(e.bodyPosition.x,1,K),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(en(),un("div",{ref_key:"threeCanvas",ref:t,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),ip=hn(Zw,[["__scopeId","data-v-d0efbfd4"]]),Jw=Kt({__name:"PurpleBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.03,o.render(s,r)};const s=new Wn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Vn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=ss,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Yn(16777215,.6);s.add(a);const c=new qn(16777215,1.5);c.position.set(5,5,5),s.add(c);const l=new Ui(16777215,2,50);l.position.set(0,2,4),s.add(l);const u=new mt({uniforms:{time:{value:0},color1:{value:new He(16766720)},color2:{value:new He(16007990)}},vertexShader:`
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
            `}),h=new Ke({color:10573288,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});new Ke({color:16766720,metalness:.4,roughness:.3,clearcoat:.3,clearcoatRoughness:.2,transparent:!0,opacity:.99});const f=new Ke({color:16766720,metalness:.05,roughness:10,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new ct,_=new we(1,32,32),y=new D(_,h);y.scale.set(.85,.85,.8),y.position.y=-.2,d.add(y);const m=new we(.6,32,32),p=new D(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const b=new we(.25,32,32),x=new D(b,h);x.position.set(-.45,1.35,-.1),d.add(x);const S=new D(b,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new we(.25,32,32),C=new D(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new Ht;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const U={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ie=new $t(R,U),M=new D(ie,u);M.scale.set(.5,.5,.5),M.position.set(0,.34,.8),M.rotation.y=Math.PI,M.rotation.x=Math.PI,d.add(M);const E=new we(.35,32,32),q=new D(E,h);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),d.add(q);const H=new D(E,h);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),d.add(H);const j=new yn(.2,.22,.6,32),se=new D(j,h);se.position.set(-.4,-1.05,0),d.add(se);const G=new D(j,h);G.position.set(.4,-1.05,0),d.add(G);const Z=new we(.3,32,32),z=new D(Z,h);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),d.add(z);const me=new D(Z,h);me.scale.set(1,.72,1.5),me.position.set(.4,-1.45,.17),d.add(me);const ue=new we(.44,32,32),ve=new D(ue,h);ve.position.set(-.15,-.45,-.4),d.add(ve);const Se=new D(ue,h);Se.position.set(.15,-.45,-.4),d.add(Se);const Ie=new we(.18,32,32),ee=new D(Ie,f);ee.position.set(0,-.35,-.8),d.add(ee),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(le){const O=new jt("X",{font:le,size:.2,depth:.05}),ne=new xt({color:0}),K=new D(O,ne);K.position.set(-.34,1,.5),d.add(K);const ce=new jt("O",{font:le,size:.2,depth:.05}),Me=new xt({color:0}),Q=new D(ce,Me);Q.position.set(.16,1,.53),Q.rotation.y=Ze.degToRad(32),d.add(Q)}),s.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),Ct(()=>e.bodyPosition,le=>{d.position.set(le.x,le.y,le.z)}),Ct(()=>e.cameraPosition,le=>{r.position.set(e.bodyPosition.x,1,le),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(en(),un("div",{ref_key:"threeCanvas",ref:t,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),sp=hn(Jw,[["__scopeId","data-v-46de1bfd"]]),Qw=Kt({__name:"BlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.03,u.uniforms.time.value+=.04,o.render(s,r)};const s=new Wn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Vn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=ss,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Yn(16777215,.6);s.add(a);const c=new qn(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new Ui(16777215,2,50);l.position.set(0,2,4),s.add(l);const u=new mt({uniforms:{time:{value:0},color1:{value:new He(16766720)},color2:{value:new He(16007990)}},vertexShader:`
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
        `}),h=new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new Ke({color:16745921,metalness:.5,roughness:30,clearcoat:.6,clearcoatRoughness:.1,opacity:1,transparent:!1}),d=new ct,_=new we(1,32,32),y=new D(_,h);y.scale.set(.85,.85,.8),y.position.y=-.2,d.add(y);const m=new we(.6,32,32),p=new D(m,h);p.scale.set(1,.95,.95),p.position.set(0,1,0),d.add(p);const b=new we(.25,32,32),x=new D(b,h);x.position.set(-.45,1.35,-.1),d.add(x);const S=new D(b,h);S.position.set(.45,1.35,-.1),d.add(S);const I=new we(.25,32,32),C=new D(I,h);C.scale.set(1,.6,.8),C.position.set(0,.85,.5),d.add(C);const R=new Ht;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const U={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ie=new $t(R,U),M=new D(ie,f);M.scale.set(.5,.5,.5),M.position.set(0,.34,.8),M.rotation.y=Math.PI,M.rotation.x=Math.PI,d.add(M);const E=new we(.35,32,32),q=new D(E,h);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),d.add(q);const H=new D(E,h);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),d.add(H);const j=new yn(.2,.22,.6,32),se=new D(j,h);se.position.set(-.4,-1.05,0),d.add(se);const G=new D(j,h);G.position.set(.4,-1.05,0),d.add(G);const Z=new we(.3,32,32),z=new D(Z,h);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),d.add(z);const me=new D(Z,h);me.scale.set(1,.72,1.5),me.position.set(.4,-1.45,.17),d.add(me);const ue=new we(.44,32,32),ve=new D(ue,h);ve.position.set(-.15,-.45,-.4),d.add(ve);const Se=new D(ue,h);Se.position.set(.15,-.45,-.4),d.add(Se);const Ie=new we(.18,32,32),ee=new D(Ie,f);ee.position.set(0,-.35,-.8),d.add(ee),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(le){const O=new jt("X",{font:le,size:.2,depth:.05}),ne=new xt({color:0}),K=new D(O,ne);K.position.set(-.34,1,.5),d.add(K);const ce=new jt("X",{font:le,size:.2,depth:.05}),Me=new xt({color:0}),Q=new D(ce,Me);Q.position.set(.16,1,.53),Q.rotation.y=Ze.degToRad(32),d.add(Q)}),s.add(d),i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),Ct(()=>e.bodyPosition,le=>{d.position.set(le.x,le.y,le.z)}),Ct(()=>e.cameraPosition,le=>{r.position.set(e.bodyPosition.x,1,le),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(en(),un("div",{ref_key:"threeCanvas",ref:t,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),rp=hn(Qw,[["__scopeId","data-v-369ed91d"]]),eE={key:0,class:"bear-face-container"},tE=Kt({__name:"BearFace",setup(n){const e=wt(null),t=wt(!1),i=()=>{t.value=!0};return ln(()=>{const s=e.value;if(s){s.width=window.innerWidth,s.height=window.innerHeight*.6;const r=s.getContext("2d");r&&(()=>{const a=s.width/2,c=s.height/1.9,l=s.height/2.5,u=s.height/2.58,h=l*.45,f=l*.18,d=l*.3,_=l*.275,y=d*.35,m=d*.32;r.save(),r.beginPath(),r.rect(0,0,s.width/2,s.height),r.clip(),r.lineWidth=15,r.strokeStyle="#000000",r.beginPath(),r.arc(a-l*.85,c-u*.8,h,0,Math.PI*2,!0),r.stroke(),r.beginPath(),r.arc(a+l*.85,c-l*.8,h,0,Math.PI*2,!0),r.stroke(),r.lineWidth=15,r.beginPath(),r.arc(a,c,u,0,Math.PI*2,!0),r.stroke(),r.lineWidth=15,r.beginPath(),r.arc(a-l*.4,c-l*.2,f,0,Math.PI*2,!0),r.stroke(),r.beginPath(),r.moveTo(a+l*.2,c-l*.3),r.lineTo(a+l*.5,c-l*.05),r.moveTo(a+l*.5,c-l*.3),r.lineTo(a+l*.2,c-l*.05),r.stroke(),r.beginPath(),r.ellipse(a,c+l*.4,_*1.5,_,0,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(a,c+l*.3,m,0,Math.PI*2,!0),r.stroke(),r.restore(),r.save(),r.beginPath(),r.rect(s.width/2,0,s.width/2,s.height),r.clip(),r.fillStyle="#FF69B4",r.beginPath(),r.arc(a-l*.85,c-l*.8,h,0,Math.PI*2,!0),r.fill(),r.beginPath(),r.arc(a+l*.85,c-l*.8,h,0,Math.PI*2,!0),r.fill(),r.beginPath(),r.arc(a,c,l,0,Math.PI*2,!0),r.fill(),r.fillStyle="#000000",r.beginPath(),r.arc(a-l*.4,c-l*.2,f,0,Math.PI*2,!0),r.fill(),r.lineWidth=15,r.beginPath(),r.moveTo(a+l*.2,c-l*.3),r.lineTo(a+l*.5,c-l*.05),r.moveTo(a+l*.5,c-l*.3),r.lineTo(a+l*.2,c-l*.05),r.strokeStyle="#000000",r.stroke(),r.fillStyle="#F0E68C",r.beginPath(),r.ellipse(a,c+l*.4,d*1.5,d,0,0,Math.PI*2),r.fill(),r.fillStyle="#000000",r.beginPath(),r.arc(a,c+l*.3,y*1.2,0,Math.PI*2,!0),r.fill(),r.restore()})()}}),(s,r)=>t.value?o0("",!0):(en(),un("div",eE,[Sr("canvas",{ref_key:"bearCanvas",ref:e},null,512),Sr("button",{onClick:i,class:"pixel-button"},"Enter")]))}}),nE=hn(tE,[["__scopeId","data-v-9cd3b2cf"]]),op=wt(window.matchMedia("only screen and (max-width: 475px)").matches),ap=wt(window.matchMedia("only screen and (max-width: 580px)").matches),cp=wt(window.matchMedia("only screen and (max-width: 670px)").matches),lp=wt(window.matchMedia("only screen and (max-width: 768px)").matches),up=wt(window.matchMedia("only screen and (max-width: 850px)").matches),hp=wt(window.matchMedia("only screen and (max-width: 1024px)").matches),iE=new ResizeObserver(()=>{op.value=window.matchMedia("only screen and (max-width: 475px)").matches,ap.value=window.matchMedia("only screen and (max-width: 580px)").matches,cp.value=window.matchMedia("only screen and (max-width: 670px)").matches,lp.value=window.matchMedia("only screen and (max-width: 768px)").matches,up.value=window.matchMedia("only screen and (max-width: 850px)").matches,hp.value=window.matchMedia("only screen and (max-width: 1024px)").matches});iE.observe(document.documentElement);Dt(()=>op.value);const ec=Dt(()=>ap.value);Dt(()=>lp.value);Dt(()=>hp.value);Dt(()=>cp.value);const tc=Dt(()=>up.value),sE={class:"flex"},rE=Kt({__name:"ThreeScene",setup(n){const e=wt(!0);let t;const i=()=>{e.value=!e.value};return ln(()=>{t=setInterval(()=>{i()},3e3)}),wl(()=>{clearInterval(t)}),(s,r)=>(en(),un("div",sE,[ot(nE,{class:"bear-background"}),ot(ip,{background:!0,cameraPosition:gn(ec)?13:gn(tc)?8:6,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),ot(sp,{background:!0,cameraPosition:gn(ec)?10:gn(tc)?6:4,bodyPosition:{x:-15,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"]),ot(rp,{background:!0,cameraPosition:gn(ec)?13:gn(tc)?8:6,bodyPosition:{x:-18,y:0,z:0},class:"bear-page"},null,8,["cameraPosition"])]))}}),oE=hn(rE,[["__scopeId","data-v-d3ef8993"]]),aE=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,cE=`
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
`,lE=Kt({__name:"DiamondBear",setup(n){const e=wt(null);return ln(()=>{const t=new Wn,i=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Vn({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(s.domElement);const r=new Yn(16777215,5);t.add(r);const o=new qn(16777215,20);o.position.set(5,5,5),t.add(o);const a=new mt({uniforms:{time:{value:0}},vertexShader:aE,fragmentShader:cE,transparent:!0,opacity:.1}),c=new ct,l=new we(1,32,32),u=new D(l,a);u.scale.set(.85,.85,.8),u.position.y=-.2,c.add(u);const h=new we(.6,32,32),f=new D(h,a);f.scale.set(1,.95,.95),f.position.set(0,1,0),c.add(f);const d=new we(.25,32,32),_=new D(d,a);_.position.set(-.45,1.35,-.1),c.add(_);const y=new D(d,a);y.position.set(.45,1.35,-.1),c.add(y);const m=new we(.25,32,32),p=new D(m,a);p.scale.set(1,.6,.8),p.position.set(0,.85,.5),c.add(p);const b=new we(.35,32,32),x=new D(b,a);x.scale.set(.75,1.25,.65),x.position.set(-.7,-.15,.2),c.add(x);const S=new D(b,a);S.scale.set(.75,1.25,.65),S.position.set(.7,-.15,.2),c.add(S);const I=new we(.3,32,32),C=new D(I,a);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),c.add(C);const R=new D(I,a);R.scale.set(1,.72,1.5),R.position.set(.4,-1.45,.17),c.add(R);const U=new yn(.2,.22,.6,32),ie=new D(U,a);ie.position.set(-.4,-1.05,0),c.add(ie);const M=new D(U,a);M.position.set(.4,-1.05,0),c.add(M);const E=new we(.44,32,32),q=new D(E,a);q.position.set(-.15,-.45,-.4),c.add(q);const H=new D(E,a);H.position.set(.15,-.45,-.4),c.add(H);const j=new we(.18,32,32),se=new D(j,a);se.position.set(0,-.35,-.75),c.add(se);const G=new Ir({color:16738740,metalness:1,roughness:.44}),Z=new Ir({color:16776960,metalness:1,roughness:.44}),z=new Ht;z.moveTo(0,.15),z.lineTo(.1,0),z.lineTo(0,-.15),z.lineTo(-.1,0),z.lineTo(0,.15);const me={depth:.07,bevelEnabled:!1},ue=new $t(z,me),ve=new D(ue,G);ve.position.set(-.25,1,.5),ve.rotation.y=Math.PI/30,c.add(ve);const Se=new D(ue,Z);Se.position.set(.25,1,.5),Se.rotation.y=Math.PI/30,c.add(Se),t.add(c),i.position.set(0,1,4),i.lookAt(0,0,0);function Ie(){requestAnimationFrame(Ie),a.uniforms.time.value+=.1,c.rotation.y+=.02,s.render(t,i)}Ie(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(en(),un("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),uE=hn(lE,[["__scopeId","data-v-a7796925"]]),Jh=`
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
  `,hE=Kt({__name:"GlassBear",setup(n){const e=wt(null);return ln(()=>{const t=new Wn,i=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Vn({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),e.value&&e.value.appendChild(s.domElement);const r=new Yn(16777215,.5);t.add(r);const o=new qn(16777215,10);o.position.set(5,5,5),t.add(o);const a=new mt({uniforms:{time:{value:0},opacity:{value:.8}},vertexShader:Jh,fragmentShader:Qh,transparent:!0}),c=new mt({uniforms:{time:{value:0},opacity:{value:.6}},vertexShader:Jh,fragmentShader:Qh,transparent:!0,depthWrite:!1}),l=new ct,u=new we(1,32,32),h=new D(u,c);h.scale.set(.85,.85,.8),h.position.y=-.2,l.add(h);const f=new we(.6,32,32),d=new D(f,c);d.scale.set(1,.95,.95),d.position.set(0,1,0),l.add(d);const _=new we(.25,32,32),y=new D(_,a);y.position.set(-.45,1.35,-.1),l.add(y);const m=new D(_,c);m.position.set(.45,1.35,-.1),l.add(m);const p=new we(.25,32,32),b=new D(p,a);b.scale.set(1,.6,.8),b.position.set(0,.85,.5),l.add(b);const x=new we(.35,32,32),S=new D(x,a);S.scale.set(.75,1.25,.65),S.position.set(-.7,-.15,.2),l.add(S);const I=new D(x,a);I.scale.set(.75,1.25,.65),I.position.set(.7,-.15,.2),l.add(I);const C=new we(.3,32,32),R=new D(C,a);R.scale.set(1,.72,1.5),R.position.set(-.4,-1.45,.17),l.add(R);const U=new D(C,a);U.scale.set(1,.72,1.5),U.position.set(.4,-1.45,.17),l.add(U);const ie=new yn(.2,.22,.6,32),M=new D(ie,a);M.position.set(-.4,-1.05,0),l.add(M);const E=new D(ie,a);E.position.set(.4,-1.05,0),l.add(E);const q=new we(.44,32,32);new D(q,a).position.set(-.15,-.45,-.4),new D(q,a).position.set(.15,-.45,-.4);const se=new we(.18,32,32),G=new D(se,a);G.position.set(0,-.35,-.75),l.add(G);const Z=new Ht;Z.moveTo(0,0),Z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Z.bezierCurveTo(-.6,.3,0,.6,0,1),Z.bezierCurveTo(0,.6,.6,.3,.6,0),Z.bezierCurveTo(.6,-.3,0,-.3,0,0);const z=new Ir({color:8900331,metalness:1,roughness:.44}),me=new Ir({color:16776960,metalness:1,roughness:.44}),ue=new Ht;ue.moveTo(0,.15),ue.lineTo(.1,0),ue.lineTo(0,-.15),ue.lineTo(-.1,0),ue.lineTo(0,.15);const ve={depth:.07,bevelEnabled:!1},Se=new $t(ue,ve),Ie=new D(Se,z);Ie.position.set(-.25,1,.5),Ie.rotation.y=Math.PI/30,l.add(Ie);const ee=new D(Se,me);ee.position.set(.25,1,.5),ee.rotation.y=Math.PI/30,l.add(ee),new Ke({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99});const de={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},le=new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),O=new $t(Z,de),ne=new D(O,le);ne.scale.set(.5,.5,.5),ne.position.set(0,0,0),ne.rotation.y=Math.PI,ne.rotation.x=Math.PI,l.add(ne);const K=new Ht;K.moveTo(0,.6),K.lineTo(.3,.3),K.lineTo(.6,0),K.lineTo(.3,-.3),K.lineTo(0,-.6),K.lineTo(-.3,-.3),K.lineTo(-.6,0),K.lineTo(-.3,.3),K.lineTo(0,.6);const ce={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Me=new $t(K,ce),Q=new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1}),g=new D(Me,Q);g.scale.set(.5,.5,.5),g.position.set(0,0,0),t.add(l),i.position.set(0,1,4),i.lookAt(0,0,0);const T=()=>{requestAnimationFrame(T),a.uniforms.time.value+=.03,l.rotation.y+=.03,s.render(t,i)};T(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)})}),(t,i)=>(en(),un("div",{ref_key:"threeCanvas",ref:e,class:"three-container"},null,512))}}),fE=hn(hE,[["__scopeId","data-v-fa1425bf"]]),dE=Kt({__name:"BluePinkBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),d.rotation.y+=.02,o.render(s,r)};const s=new Wn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Vn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=ss,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Yn(16777215,.6);s.add(a);const c=new qn(16777215,1.5);c.position.set(5,5,5),s.add(c);const l=new Ui(16777215,2,50);l.position.set(0,2,4),s.add(l);const u=new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),h=new Ke({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=m=>{const p=new ct,b=new we(1,32,32),x=new D(b,m);x.scale.set(.85,.85,.8),x.position.y=-.2,p.add(x);const S=new we(.6,32,32),I=new D(S,m);I.scale.set(1,.95,.95),I.position.set(0,1,0),p.add(I);const C=new we(.25,32,32),R=new D(C,m);R.scale.set(1,.6,.8),R.position.set(0,.85,.5),p.add(R),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Me){const Q=new jt("X",{font:Me,size:.18,depth:.05}),g=new xt({color:0}),T=new D(Q,g);T.position.set(-.3,.99,.53),T.rotation.x=Ze.degToRad(-5),T.rotation.y=Ze.degToRad(-15),p.add(T);const L=new jt("+",{font:Me,size:.25,depth:.1}),F=new xt({color:0}),N=new D(L,F);N.position.set(.14,.99,.53),N.rotation.y=Ze.degToRad(12),N.rotation.x=Ze.degToRad(-5),p.add(N)});const ie=new Ht;ie.moveTo(0,0),ie.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ie.bezierCurveTo(-.6,.3,0,.6,0,1),ie.bezierCurveTo(0,.6,.6,.3,.6,0),ie.bezierCurveTo(.6,-.3,0,-.3,0,0);const M={depth:.05,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.05,bevelThickness:.05},E=new $t(ie,M),q=new xt({color:0}),H=new D(E,q);H.scale.set(.1,.1,.1),H.rotation.z=Ze.degToRad(210),H.rotation.x=Ze.degToRad(5),H.rotation.y=Ze.degToRad(-45),H.position.set(-.4,.9,.45),p.add(H);const j=new we(.25,32,32),se=new D(j,u);se.position.set(-.45,1.35,-.1),p.add(se);const G=new D(j,h);G.position.set(.45,1.35,-.1),p.add(G);const Z=new we(.35,32,32),z=new D(Z,u);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),p.add(z);const me=new D(Z,h);me.scale.set(.75,1.25,.65),me.position.set(.7,-.15,.2),p.add(me);const ue=new yn(.2,.22,.6,32),ve=new D(ue,u);ve.position.set(-.4,-1.05,0),p.add(ve);const Se=new D(ue,h);Se.position.set(.4,-1.05,0),p.add(Se);const Ie=new we(.3,32,32),ee=new D(Ie,u);ee.scale.set(1,.72,1.5),ee.position.set(-.4,-1.45,.17),p.add(ee);const de=new D(Ie,h);de.scale.set(1,.72,1.5),de.position.set(.4,-1.45,.17),p.add(de);const le=new we(.44,32,32),O=new D(le,u);O.position.set(-.15,-.45,-.4),p.add(O);const ne=new D(le,h);ne.position.set(.15,-.45,-.4),p.add(ne);const K=new we(.18,32,32),ce=new D(K,m);return ce.position.set(0,-.35,-.8),p.add(ce),p},d=new ct,_=f(u),y=f(h);_.position.x=-.01,y.position.x=.01,d.add(_),d.add(y),s.add(d),r.position.z=4,i(),d.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0)}}),(i,s)=>(en(),un("div",{ref_key:"threeCanvas",ref:t,class:"three-canvas"},null,512))}}),pE=hn(dE,[["__scopeId","data-v-9e6b205d"]]),mE=Kt({__name:"HalfTransparentBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:4},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),p.rotation.y+=.03,u.uniforms.time.value+=.04,o.render(s,r)};const s=new Wn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Vn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=ss,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Yn(16777215,.6);s.add(a);const c=new qn(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new Ui(16777215,2,50);l.position.set(0,2,4),s.add(l);const u=new mt({uniforms:{time:{value:0},color1:{value:new He(16766720)},color2:{value:new He(16007990)}},vertexShader:`
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
    `,y=new mt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:d,fragmentShader:_,transparent:!0,depthWrite:!1}),m=new mt({uniforms:{time:{value:0},opacity:{value:.4}},vertexShader:d,fragmentShader:_,transparent:!0,depthWrite:!1}),p=new ct,b=new we(1,32,32,0,Math.PI),x=new D(b,m),S=new D(b,y);x.scale.set(.85,.85,.8),S.scale.set(.85,.85,.8),x.position.y=-.2,S.position.y=-.2,x.rotation.y=Math.PI/2,S.rotation.y=Math.PI*1.5;const I=new Qt(1,32),C=new D(I,y);C.scale.set(.85,.85,.8),C.position.set(0,-.2,0),C.rotation.y=Math.PI/2;const R=new ct;R.add(x),R.add(S),R.add(C),p.add(R);const U=new we(.6,32,32,0,Math.PI),ie=new D(U,y);ie.scale.set(1,.95,.95),ie.position.set(0,1,0),ie.rotation.y=Math.PI*1.5;const M=new D(U,m);M.scale.set(1,.95,.95),M.position.set(0,1,0),M.rotation.y=Math.PI/2;const E=new Qt(.6,32),q=new D(E,y);q.position.set(0,.97,0),q.rotation.y=Math.PI/2;const H=new ct;H.add(ie),H.add(M),H.add(q),p.add(H);const j=new we(.25,32,32),se=new D(j,y);se.position.set(-.45,1.35,-.1),p.add(se);const G=new D(j,m);G.position.set(.45,1.35,-.1),p.add(G);const Z=new we(.25,32,32,Math.PI/2,Math.PI),z=new D(Z,y);z.scale.set(1,.6,.8),z.position.set(0,.82,.5),z.rotation.y=Math.PI;const me=new we(.25,32,32,Math.PI/2,Math.PI),ue=new D(me,m);ue.scale.set(1,.6,.8),ue.position.set(0,.82,.5),ue.rotation.y=0;const ve=new Qt(.25,32),Se=new D(ve,y);Se.scale.set(1.25,.6,.8),Se.position.set(0,.85,.5),Se.rotation.x=Math.PI/2;const Ie=new ct;Ie.add(z),Ie.add(ue),Ie.add(Se),p.add(Ie);const ee=new Ht;ee.moveTo(0,0),ee.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),ee.bezierCurveTo(-.6,.3,0,.6,0,1),ee.bezierCurveTo(0,.6,.6,.3,.6,0),ee.bezierCurveTo(.6,-.3,0,-.3,0,0);const de={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const le=new $t(ee,de),O=new D(le,f);O.scale.set(.5,.5,.5),O.position.set(0,0,0),O.rotation.y=Math.PI,O.rotation.x=Math.PI,p.add(O);const ne=new we(.35,32,32),K=new D(ne,y);K.scale.set(.75,1.25,.65),K.position.set(-.7,-.15,.2),p.add(K);const ce=new D(ne,m);ce.scale.set(.75,1.25,.65),ce.position.set(.7,-.15,.2),p.add(ce);const Me=new yn(.2,.22,.6,32),Q=new D(Me,y);Q.position.set(-.4,-1.05,0),p.add(Q);const g=new D(Me,m);g.position.set(.4,-1.05,0),p.add(g);const T=new we(.3,32,32),L=new D(T,y);L.scale.set(1,.72,1.5),L.position.set(-.4,-1.45,.17),p.add(L);const F=new D(T,m);F.scale.set(1,.72,1.5),F.position.set(.4,-1.45,.17),p.add(F);const N=new we(.44,32,32),J=new D(N,y);J.position.set(-.15,-.45,-.4),p.add(J);const te=new D(N,h);te.position.set(.15,-.45,-.4),p.add(te);const w=new we(.18,32,32),v=new D(w,f);v.position.set(0,-.35,-.8),p.add(v),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(V){const k=new jt("X",{font:V,size:.18,depth:.05}),X=new xt({color:0}),he=new D(k,X);he.position.set(-.3,.99,.53),he.rotation.x=Ze.degToRad(-5),he.rotation.y=Ze.degToRad(-15),p.add(he);const fe=new jt("+",{font:V,size:.25,depth:.1}),ge=new xt({color:0}),Re=new D(fe,ge);Re.position.set(.14,.99,.53),Re.rotation.y=Ze.degToRad(12),Re.rotation.x=Ze.degToRad(-5),p.add(Re)}),s.add(p),i(),p.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),Ct(()=>e.bodyPosition,V=>{p.position.set(V.x,V.y,V.z)}),Ct(()=>e.cameraPosition,V=>{r.position.set(e.bodyPosition.x,1,V),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(en(),un("div",{ref_key:"threeCanvas",ref:t,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),gE=hn(mE,[["__scopeId","data-v-7fbce4ad"]]),_E=Kt({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),ye&&(x.rotation.y+=.03),o.render(s,r)};const s=new Wn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Vn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.toneMapping=ss,o.toneMappingExposure=1.25,t.value.appendChild(o.domElement);const a=new Yn(16777215,.6);s.add(a);const c=new qn(16777215,1.2);c.position.set(5,5,5),s.add(c);const l=new Ui(16777215,2,50);l.position.set(0,2,4),s.add(l);const u=new mt({uniforms:{time:{value:0},color1:{value:new He(16766720)},color2:{value:new He(16007990)}},vertexShader:`
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
        `}),h=new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),f=new Ke({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.35});new Ke({color:13882323,metalness:.7,roughness:.25,clearcoat:.4,clearcoatRoughness:.1,transparent:!1,opacity:1}),new Ke({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.35});const d=new Ke({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.79}),_=new Ke({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),y=new Ke({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),m=`
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
    `,b=new mt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:m,fragmentShader:p,transparent:!1,depthWrite:!0}),x=new ct,S=new we(1,32,32,0,Math.PI),I=new D(S,f),C=new D(S,h);I.scale.set(.85,.85,.8),C.scale.set(.85,.85,.8),I.position.y=-.2,C.position.y=-.2,I.rotation.y=Math.PI/2,C.rotation.y=Math.PI*1.5;const R=new Qt(1,32),U=new D(R,h);U.scale.set(.85,.85,.8),U.position.set(0,-.2,0),U.rotation.y=Math.PI/2;const ie=new ct;ie.add(I),ie.add(C),ie.add(U),x.add(ie);const M=new we(.6,32,32,0,Math.PI),E=new D(M,h);E.scale.set(1,.95,.95),E.position.set(0,1,0),E.rotation.y=Math.PI*1.5;const q=new D(M,f);q.scale.set(1,.95,.95),q.position.set(0,1,0),q.rotation.y=Math.PI/2;const H=new Qt(.6,32),j=new D(H,h);j.position.set(0,1,0),j.rotation.y=Math.PI/2,j.scale.set(1,.95,.95);const se=new ct;se.add(E),se.add(q),se.add(j),x.add(se);const G=new we(.25,32,32),Z=new D(G,h);Z.position.set(-.45,1.35,-.1),x.add(Z);const z=new D(G,f);z.position.set(.45,1.35,-.1),x.add(z);const me=new we(.25,32,32,Math.PI/2,Math.PI),ue=new D(me,h);ue.scale.set(1.1,.6,.8),ue.position.set(0,.84,.5),ue.rotation.y=Math.PI;const ve=new we(.25,32,32,Math.PI/2,Math.PI),Se=new D(ve,f);Se.scale.set(1.1,.6,.8),Se.position.set(0,.84,.5),Se.rotation.y=0;const Ie=new Qt(.25,32),ee=new D(Ie,h);ee.scale.set(.8,.6,.8),ee.position.set(0,.84,.5),ee.rotation.y=Math.PI/2;const de=new ct;de.add(ue),de.add(Se),de.add(ee),x.add(de);const le=new Ht;le.moveTo(0,0),le.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),le.bezierCurveTo(-.6,.3,0,.6,0,1),le.bezierCurveTo(0,.6,.6,.3,.6,0),le.bezierCurveTo(.6,-.3,0,-.3,0,0);const O={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ne=new $t(le,O);new xt({color:0});const K=new D(ne,d);K.scale.set(.1,.1,.1),K.rotation.z=Ze.degToRad(210),K.rotation.x=Ze.degToRad(5),K.rotation.y=Ze.degToRad(-45),K.position.set(-.4,.9,.45);const ce=new D(ne,b);ce.scale.set(.5,.5,.5),ce.position.set(.35,0,0),ce.rotation.y=Math.PI,ce.rotation.x=Math.PI,x.add(ce);const Me=new D(ne,u);Me.scale.set(.35,.35,.35),Me.position.set(.3,0,0),Me.rotation.y=Math.PI,Me.rotation.x=Math.PI;const Q=new D(ne,y);Q.scale.set(.25,.25,.25),Q.position.set(.27,.2,0),Q.rotation.y=Math.PI,Q.rotation.x=Math.PI;const g=new D(ne,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const T=new D(ne,b);T.scale.set(.4,.4,.4),T.position.set(.27,0,.35),T.rotation.y=Math.PI,T.rotation.x=Math.PI;const L=new we(.35,32,32),F=new D(L,h);F.scale.set(.75,1.25,.65),F.position.set(-.7,-.15,.2),x.add(F);const N=new D(L,f);N.scale.set(.75,1.25,.65),N.position.set(.7,-.15,.2),x.add(N);const J=new yn(.2,.22,.6,32),te=new D(J,h);te.position.set(-.4,-1.05,0),x.add(te);const w=new D(J,f);w.position.set(.4,-1.05,0),x.add(w);const v=new we(.3,32,32),P=new D(v,h);P.scale.set(1,.72,1.5),P.position.set(-.4,-1.45,.17),x.add(P);const V=new D(v,f);V.scale.set(1,.72,1.5),V.position.set(.4,-1.45,.17),x.add(V);const k=new we(.44,32,32),X=new D(k,h);X.position.set(-.15,-.45,-.4),x.add(X);const he=new D(k,f);he.position.set(.15,-.45,-.4),x.add(he);const fe=new we(.18,32,32),ge=new D(fe,d);ge.position.set(0,-.35,-.8),x.add(ge),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xe){const Ge=new jt("X",{font:xe,size:.18,depth:.05}),Pe=new xt({color:0}),We=new D(Ge,Pe);We.position.set(-.3,.99,.53),We.rotation.x=Ze.degToRad(-5),We.rotation.y=Ze.degToRad(-15),x.add(We);const B=new jt("+",{font:xe,size:.25,depth:.1}),Ce=new xt({color:0}),ae=new D(B,Ce);ae.position.set(.14,.99,.53),ae.rotation.y=Ze.degToRad(12),ae.rotation.x=Ze.degToRad(-5),x.add(ae)}),ge.renderOrder=1,x.scale.set(1.2,1.2,1.2),s.add(x),x.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),r.position.z=4;const pe={x:0,y:0};let ye=!0,Ue=null;const Ne=xe=>{ye=!1,pe.x=xe.clientX/window.innerWidth*2-1,pe.y=-(xe.clientY/window.innerHeight)*2+1;const Ge=pe.x*Math.PI*.2,Pe=pe.y*Math.PI*.2;x.rotation.y=Ge,x.rotation.x=Pe,clearTimeout(Ue),Ue=setTimeout(()=>{ye=!0},500)};window.addEventListener("mousemove",Ne),u.uniforms.time.value+=.04,i(),Ct(()=>e.bodyPosition,xe=>{x.position.set(xe.x,xe.y,xe.z)}),Ct(()=>e.cameraPosition,xe=>{r.position.set(e.bodyPosition.x,1,xe),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(en(),un("div",{ref_key:"threeCanvas",ref:t,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),vE=hn(_E,[["__scopeId","data-v-5bf83852"]]),xE=Kt({__name:"SliverBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return ln(()=>{if(t.value){let i=function(){c.visible=!1,y.update(a,r),c.visible=!0,requestAnimationFrame(i)},s=function(){requestAnimationFrame(s),Ce&&(c.rotation.y+=.03),a.render(r,o)};const r=new Wn,o=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),a=new Vn({antialias:!0,alpha:!0});a.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(a.domElement);const c=new ct,l=new Yn(16777215,2);r.add(l);const u=new qn(16777215,4);u.position.set(5,5,5),r.add(u);const h=new Ui(16777215,5,50);h.position.set(0,2,4),r.add(h);const d=new tp().load("3d-bear-arts/src/assets/gradient_texture.jpg"),_=new zd(256,{format:vn,generateMipmaps:!0,minFilter:Ti}),y=new Bd(1,1e3,_);new Ke({color:16738740,metalness:1,roughness:.1,clearcoat:1,clearcoatRoughness:.1,envMap:d,envMapIntensity:1.5}),new Ke({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.35,envMap:_.texture,envMapIntensity:1.5}),r.add(y),r.environment=_.texture,i();const m=new Ww,p=m.load(["https://threejs.org/examples/textures/cube/Park2/posx.jpg","https://threejs.org/examples/textures/cube/Park2/negx.jpg","https://threejs.org/examples/textures/cube/Park2/posy.jpg","https://threejs.org/examples/textures/cube/Park2/negy.jpg","https://threejs.org/examples/textures/cube/Park2/posz.jpg","https://threejs.org/examples/textures/cube/Park2/negz.jpg"]),b=m.load(["path_to_universe_posx.jpg","path_to_universe_negx.jpg","path_to_universe_posy.jpg","path_to_universe_negy.jpg","path_to_universe_posz.jpg","path_to_universe_negz.jpg"]);r.environment=b,r.environment=p;const x=new Ke({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:p,reflectivity:1}),S=new Ke({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,envMap:p,reflectivity:1}),I=new mt({uniforms:{time:{value:0},color1:{value:new He(16766720)},color2:{value:new He(16007990)}},vertexShader:`
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
          `}),C=new Ke({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.89}),R=new Ke({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),U=new Ke({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),ie=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,M=`
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
      `,E=new mt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:ie,fragmentShader:M,transparent:!1,depthWrite:!0}),q=new we(1,32,32,0,Math.PI),H=new D(q,S),j=new D(q,x);H.scale.set(.85,.85,.8),j.scale.set(.85,.85,.8),H.position.y=-.2,j.position.y=-.2,H.rotation.y=Math.PI/2,j.rotation.y=Math.PI*1.5;const se=new Qt(1,32),G=new D(se,x);G.scale.set(.85,.85,.8),G.position.set(0,-.2,0),G.rotation.y=Math.PI/2;const Z=new ct;Z.add(H),Z.add(j),Z.add(G),c.add(Z);const z=new we(.6,32,32,0,Math.PI),me=new D(z,x);me.scale.set(1,.95,.95),me.position.set(0,1,0),me.rotation.y=Math.PI*1.5;const ue=new D(z,S);ue.scale.set(1,.95,.95),ue.position.set(0,1,0),ue.rotation.y=Math.PI/2;const ve=new Qt(.6,32),Se=new D(ve,x);Se.position.set(0,1,0),Se.rotation.y=Math.PI/2,Se.scale.set(1,.95,.95);const Ie=new ct;Ie.add(me),Ie.add(ue),Ie.add(Se),c.add(Ie);const ee=new we(.25,32,32),de=new D(ee,x);de.position.set(-.45,1.35,-.1),c.add(de);const le=new D(ee,S);le.position.set(.45,1.35,-.1),c.add(le);const O=new we(.25,32,32,Math.PI/2,Math.PI),ne=new D(O,x);ne.scale.set(1.1,.6,.8),ne.position.set(0,.84,.5),ne.rotation.y=Math.PI;const K=new we(.25,32,32,Math.PI/2,Math.PI),ce=new D(K,S);ce.scale.set(1.1,.6,.8),ce.position.set(0,.84,.5),ce.rotation.y=0;const Me=new Qt(.25,32),Q=new D(Me,x);Q.scale.set(.8,.6,.8),Q.position.set(0,.84,.5),Q.rotation.y=Math.PI/2;const g=new ct;g.add(ne),g.add(ce),g.add(Q),c.add(g);const T=new Ht;T.moveTo(0,0),T.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),T.bezierCurveTo(-.6,.3,0,.6,0,1),T.bezierCurveTo(0,.6,.6,.3,.6,0),T.bezierCurveTo(.6,-.3,0,-.3,0,0);const L={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const F=new $t(T,L);new xt({color:0});const N=new D(F,C);N.scale.set(.1,.1,.1),N.rotation.z=Ze.degToRad(210),N.rotation.x=Ze.degToRad(5),N.rotation.y=Ze.degToRad(-45),N.position.set(-.4,.9,.45);const J=new D(F,E);J.scale.set(.5,.5,.5),J.position.set(.35,0,0),J.rotation.y=Math.PI,J.rotation.x=Math.PI,c.add(J);const te=new D(F,I);te.scale.set(.35,.35,.35),te.position.set(.3,0,0),te.rotation.y=Math.PI,te.rotation.x=Math.PI;const w=new D(F,U);w.scale.set(.25,.25,.25),w.position.set(.27,.2,0),w.rotation.y=Math.PI,w.rotation.x=Math.PI;const v=new D(F,R);v.scale.set(.3,.3,.3),v.position.set(.23,-.5,.3),v.rotation.y=Math.PI,v.rotation.x=Math.PI;const P=new D(F,E);P.scale.set(.4,.4,.4),P.position.set(.27,0,.35),P.rotation.y=Math.PI,P.rotation.x=Math.PI;const V=new we(.35,32,32),k=new D(V,x);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),c.add(k);const X=new D(V,S);X.scale.set(.75,1.25,.65),X.position.set(.7,-.15,.2),c.add(X);const he=new yn(.2,.22,.6,32),fe=new D(he,x);fe.position.set(-.4,-1.05,0),c.add(fe);const ge=new D(he,S);ge.position.set(.4,-1.05,0),c.add(ge);const Re=new we(.3,32,32),pe=new D(Re,x);pe.scale.set(1,.72,1.5),pe.position.set(-.4,-1.45,.17),c.add(pe);const ye=new D(Re,S);ye.scale.set(1,.72,1.5),ye.position.set(.4,-1.45,.17),c.add(ye);const Ue=new we(.44,32,32),Ne=new D(Ue,x);Ne.position.set(-.15,-.45,-.4),c.add(Ne);const xe=new D(Ue,S);xe.position.set(.15,-.45,-.4),c.add(xe);const Ge=new we(.18,32,32),Pe=new D(Ge,E);Pe.position.set(0,-.35,-.8),c.add(Pe),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(be){const Le=new jt("X",{font:be,size:.18,depth:.05});new xt({color:0});const Ye=new D(Le,E);Ye.position.set(-.3,.99,.53),Ye.rotation.x=Ze.degToRad(-5),Ye.rotation.y=Ze.degToRad(-15),c.add(Ye);const gt=new jt("+",{font:be,size:.25,depth:.1});new xt({color:0});const Et=new D(gt,E);Et.position.set(.14,.99,.53),Et.rotation.y=Ze.degToRad(12),Et.rotation.x=Ze.degToRad(-5),c.add(Et)}),Pe.renderOrder=1,c.scale.set(1.2,1.2,1.2),r.add(c),c.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),o.position.set(e.bodyPosition.x,1,e.cameraPosition),o.lookAt(e.bodyPosition.x,0,0),o.position.z=4;const B={x:0,y:0};let Ce=!0,ae=null;const _e=be=>{Ce=!1,B.x=be.clientX/window.innerWidth*2-1,B.y=-(be.clientY/window.innerHeight)*2+1;const Le=B.x*Math.PI*.2,Ye=B.y*Math.PI*.2;c.rotation.y=Le,c.rotation.x=Ye,clearTimeout(ae),ae=setTimeout(()=>{Ce=!0},500)};window.addEventListener("mousemove",_e),I.uniforms.time.value+=.04,s(),Ct(()=>e.bodyPosition,be=>{c.position.set(be.x,be.y,be.z)}),Ct(()=>e.cameraPosition,be=>{o.position.set(e.bodyPosition.x,1,be),o.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(en(),un("div",{ref_key:"threeCanvas",ref:t,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),yE=hn(xE,[["__scopeId","data-v-07775732"]]),ME=Kt({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const e=n,t=wt(null);return ln(()=>{if(t.value){let i=function(){requestAnimationFrame(i),ye&&(a.rotation.y+=.03),o.render(s,r)};const s=new Wn,r=new vt(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Vn({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(o.domElement);const a=new ct,c=new Yn(16777215,2);s.add(c);const l=new qn(16777215,4);l.position.set(5,5,5),s.add(l);const u=new Ui(16777215,5,50);u.position.set(0,2,4),s.add(u);const h=new tp,f=h.load("src/assets/lv2.jpg"),d=h.load("src/assets/lv2.jpg");f.wrapS=f.wrapT=br,d.wrapS=d.wrapT=br;const _=new Ke({color:8343336,metalness:0,roughness:.8,bumpMap:f,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:d,envMapIntensity:.7}),y=new Ke({color:12632256,metalness:.2,roughness:.05,bumpMap:f,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:d,transparent:!0,opacity:.5,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:On});new Ke({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const m=new mt({uniforms:{time:{value:0},color1:{value:new He(16766720)},color2:{value:new He(16007990)}},vertexShader:`
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
          `}),p=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,b=`
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
      `,x=new mt({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:p,fragmentShader:b,transparent:!1,depthWrite:!0}),S=new we(1,32,32,0,Math.PI),I=new D(S,y),C=new D(S,_);I.scale.set(.85,.85,.8),C.scale.set(.85,.85,.8),I.position.y=-.2,C.position.y=-.2,I.rotation.y=Math.PI/2,C.rotation.y=Math.PI*1.5;const R=new Qt(1,32),U=new D(R,_);U.scale.set(.85,.85,.8),U.position.set(0,-.2,0),U.rotation.y=Math.PI/2;const ie=new ct;ie.add(I),ie.add(C),ie.add(U),a.add(ie);const M=new we(.6,32,32,0,Math.PI),E=new D(M,_);E.scale.set(1,.95,.95),E.position.set(0,1,0),E.rotation.y=Math.PI*1.5;const q=new D(M,y);q.scale.set(1,.95,.95),q.position.set(0,1,0),q.rotation.y=Math.PI/2;const H=new Qt(.6,32),j=new D(H,_);j.position.set(0,1,0),j.rotation.y=Math.PI/2,j.scale.set(1,.95,.95);const se=new ct;se.add(E),se.add(q),se.add(j),a.add(se);const G=new we(.25,32,32),Z=new D(G,_);Z.position.set(-.45,1.35,-.1),a.add(Z);const z=new D(G,y);z.position.set(.45,1.35,-.1),a.add(z);const me=new we(.25,32,32,Math.PI/2,Math.PI),ue=new D(me,_);ue.scale.set(1.1,.6,.8),ue.position.set(0,.84,.5),ue.rotation.y=Math.PI;const ve=new we(.25,32,32,Math.PI/2,Math.PI),Se=new D(ve,y);Se.scale.set(1.1,.6,.8),Se.position.set(0,.84,.5),Se.rotation.y=0;const Ie=new Qt(.25,32),ee=new D(Ie,_);ee.scale.set(.8,.6,.8),ee.position.set(0,.84,.5),ee.rotation.y=Math.PI/2;const de=new ct;de.add(ue),de.add(Se),de.add(ee),a.add(de);const le=new Ht;le.moveTo(0,0),le.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),le.bezierCurveTo(-.6,.3,0,.6,0,1),le.bezierCurveTo(0,.6,.6,.3,.6,0),le.bezierCurveTo(.6,-.3,0,-.3,0,0);const O={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ke({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ne=new $t(le,O);new xt({color:0});const K=new D(ne,_);K.scale.set(.1,.1,.1),K.rotation.z=Ze.degToRad(210),K.rotation.x=Ze.degToRad(5),K.rotation.y=Ze.degToRad(-45),K.position.set(-.4,.9,.45);const ce=new D(ne,x);ce.scale.set(.5,.5,.5),ce.position.set(.35,0,0),ce.rotation.y=Math.PI,ce.rotation.x=Math.PI,a.add(ce);const Me=new D(ne,m);Me.scale.set(.35,.35,.35),Me.position.set(.3,0,0),Me.rotation.y=Math.PI,Me.rotation.x=Math.PI;const Q=new D(ne,_);Q.scale.set(.25,.25,.25),Q.position.set(.27,.2,0),Q.rotation.y=Math.PI,Q.rotation.x=Math.PI;const g=new D(ne,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const T=new D(ne,x);T.scale.set(.4,.4,.4),T.position.set(.27,0,.35),T.rotation.y=Math.PI,T.rotation.x=Math.PI;const L=new we(.35,32,32),F=new D(L,_);F.scale.set(.75,1.25,.65),F.position.set(-.7,-.15,.2),a.add(F);const N=new D(L,y);N.scale.set(.75,1.25,.65),N.position.set(.7,-.15,.2),a.add(N);const J=new yn(.2,.22,.6,32),te=new D(J,_);te.position.set(-.4,-1.05,0),a.add(te);const w=new D(J,y);w.position.set(.4,-1.05,0),a.add(w);const v=new we(.3,32,32),P=new D(v,_);P.scale.set(1,.72,1.5),P.position.set(-.4,-1.45,.17),a.add(P);const V=new D(v,y);V.scale.set(1,.72,1.5),V.position.set(.4,-1.45,.17),a.add(V);const k=new we(.44,32,32),X=new D(k,_);X.position.set(-.15,-.45,-.4),a.add(X);const he=new D(k,y);he.position.set(.15,-.45,-.4),a.add(he);const fe=new we(.18,32,32),ge=new D(fe,x);ge.position.set(0,-.35,-.8),a.add(ge),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(xe){const Ge=new jt("X",{font:xe,size:.2,depth:.05});new xt({color:0});const Pe=new D(Ge,x);Pe.position.set(-.3,.99,.53),Pe.rotation.x=Ze.degToRad(-5),Pe.rotation.y=Ze.degToRad(-15),a.add(Pe);const We=new jt("O",{font:xe,size:.2,depth:.05});new xt({color:0});const B=new D(We,x);B.position.set(.14,.99,.53),B.rotation.y=Ze.degToRad(12),B.rotation.x=Ze.degToRad(-5),a.add(B)}),ge.renderOrder=1,a.scale.set(1.2,1.2,1.2),s.add(a),a.position.set(e.bodyPosition.x,e.bodyPosition.y,e.bodyPosition.z),r.position.set(e.bodyPosition.x,1,e.cameraPosition),r.lookAt(e.bodyPosition.x,0,0),r.position.z=4;const pe={x:0,y:0};let ye=!0,Ue=null;const Ne=xe=>{ye=!1,pe.x=xe.clientX/window.innerWidth*2-1,pe.y=-(xe.clientY/window.innerHeight)*2+1;const Ge=pe.x*Math.PI*.2,Pe=pe.y*Math.PI*.2;a.rotation.y=Ge,a.rotation.x=Pe,clearTimeout(Ue),Ue=setTimeout(()=>{ye=!0},500)};window.addEventListener("mousemove",Ne),m.uniforms.time.value+=.04,i(),Ct(()=>e.bodyPosition,xe=>{a.position.set(xe.x,xe.y,xe.z)}),Ct(()=>e.cameraPosition,xe=>{r.position.set(e.bodyPosition.x,1,xe),r.lookAt(e.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(en(),un("div",{ref_key:"threeCanvas",ref:t,class:kn(n.background?"no-bg":"three-canvas")},null,2))}}),SE=hn(ME,[["__scopeId","data-v-ccc3248b"]]),wE=[{path:"/3d-bear-arts",name:"ThreeScene",component:oE},{path:"/3d-bear-arts/half",name:"NewBear",component:vE},{path:"/3d-bear-arts/sliver",name:"SliverBear",component:yE},{path:"/3d-bear-arts/metal",name:"MetalBear",component:SE},{path:"/3d-bear-arts/halfTransparent",name:"Transparent",component:gE},{path:"/3d-bear-arts/bluePink",name:"BluePinkBear",component:pE},{path:"/3d-bear-arts/diamond",name:"DiamondBear",component:uE},{path:"/3d-bear-arts/pink",name:"PinkBear",component:ip},{path:"/3d-bear-arts/purple",name:"PurpleBear",component:sp},{path:"/3d-bear-arts/blue",name:"BlueBear",component:rp},{path:"/3d-bear-arts/glass",name:"GlassBear",component:fE}],EE=qg({history:Sg(),routes:wE}),fp=H0(X0);fp.use(EE);fp.mount("#app");
