(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ye={},er=[],Qn=()=>{},Sp=()=>!1,ga=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fc=n=>n.startsWith("onUpdate:"),tn=Object.assign,Oc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},wp=Object.prototype.hasOwnProperty,he=(n,t)=>wp.call(n,t),ee=Array.isArray,Dr=n=>_a(n)==="[object Map]",Ep=n=>_a(n)==="[object Set]",Qt=n=>typeof n=="function",Ze=n=>typeof n=="string",vr=n=>typeof n=="symbol",Fe=n=>n!==null&&typeof n=="object",yf=n=>(Fe(n)||Qt(n))&&Qt(n.then)&&Qt(n.catch),bp=Object.prototype.toString,_a=n=>bp.call(n),Tp=n=>_a(n).slice(8,-1),Ap=n=>_a(n)==="[object Object]",Bc=n=>Ze(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ur=Nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Rp=/-(\w)/g,Rn=va(n=>n.replace(Rp,(t,e)=>e?e.toUpperCase():"")),Cp=/\B([A-Z])/g,Cs=va(n=>n.replace(Cp,"-$1").toLowerCase()),xa=va(n=>n.charAt(0).toUpperCase()+n.slice(1)),za=va(n=>n?`on${xa(n)}`:""),Zi=(n,t)=>!Object.is(n,t),Ga=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Sf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Pp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Su;const wf=()=>Su||(Su=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zc(n){if(ee(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ze(i)?Up(i):zc(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ze(n)||Fe(n))return n}const Ip=/;(?![^(]*\))/g,Lp=/:([^]+)/,Dp=/\/\*[^]*?\*\//g;function Up(n){const t={};return n.replace(Dp,"").split(Ip).forEach(e=>{if(e){const i=e.split(Lp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Vn(n){let t="";if(Ze(n))t=n;else if(ee(n))for(let e=0;e<n.length;e++){const i=Vn(n[e]);i&&(t+=i+" ")}else if(Fe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fp=Nc(Np);function Ef(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yn;class Op{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yn,!t&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=yn;try{return yn=this,t()}finally{yn=e}}}on(){yn=this}off(){yn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bp(){return yn}let we;const Ha=new WeakSet;class bf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yn&&yn.active&&yn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ha.has(this)&&(Ha.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Af(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wu(this),Rf(this);const t=we,e=zn;we=this,zn=!0;try{return this.fn()}finally{Cf(this),we=t,zn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)kc(t);this.deps=this.depsTail=void 0,wu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ha.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Dl(this)&&this.run()}get dirty(){return Dl(this)}}let Tf=0,Js;function Af(n){n.flags|=8,n.next=Js,Js=n}function Gc(){Tf++}function Hc(){if(--Tf>0)return;let n;for(;Js;){let t=Js,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=Js,Js=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Rf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Cf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),kc(i),zp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Dl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Pf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Pf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xr))return;n.globalVersion=Xr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Dl(n)){n.flags&=-3;return}const e=we,i=zn;we=n,zn=!0;try{Rf(n);const s=n.fn(n._value);(t.version===0||Zi(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{we=e,zn=i,Cf(n),n.flags&=-3}}function kc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)kc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function zp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let zn=!0;const If=[];function Qi(){If.push(zn),zn=!1}function ts(){const n=If.pop();zn=n===void 0?!0:n}function wu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=we;we=void 0;try{t()}finally{we=e}}}let Xr=0;class Gp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!we||!zn||we===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==we)e=this.activeLink=new Gp(we,this),we.deps?(e.prevDep=we.depsTail,we.depsTail.nextDep=e,we.depsTail=e):we.deps=we.depsTail=e,Lf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=we.depsTail,e.nextDep=void 0,we.depsTail.nextDep=e,we.depsTail=e,we.deps===e&&(we.deps=i)}return e}trigger(t){this.version++,Xr++,this.notify(t)}notify(t){Gc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Hc()}}}function Lf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Lf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ul=new WeakMap,Es=Symbol(""),Nl=Symbol(""),qr=Symbol("");function ln(n,t,e){if(zn&&we){let i=Ul.get(n);i||Ul.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Vc),s.target=n,s.map=i,s.key=e),s.track()}}function wi(n,t,e,i,s,r){const o=Ul.get(n);if(!o){Xr++;return}const a=l=>{l&&l.trigger()};if(Gc(),t==="clear")o.forEach(a);else{const l=ee(n),c=l&&Bc(e);if(l&&e==="length"){const h=Number(i);o.forEach((u,f)=>{(f==="length"||f===qr||!vr(f)&&f>=h)&&a(u)})}else switch(e!==void 0&&a(o.get(e)),c&&a(o.get(qr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Es)),Dr(n)&&a(o.get(Nl)));break;case"delete":l||(a(o.get(Es)),Dr(n)&&a(o.get(Nl)));break;case"set":Dr(n)&&a(o.get(Es));break}}Hc()}function Us(n){const t=de(n);return t===n?t:(ln(t,"iterate",qr),Gn(n)?t:t.map(fn))}function Wc(n){return ln(n=de(n),"iterate",qr),n}const Hp={__proto__:null,[Symbol.iterator](){return ka(this,Symbol.iterator,fn)},concat(...n){return Us(this).concat(...n.map(t=>ee(t)?Us(t):t))},entries(){return ka(this,"entries",n=>(n[1]=fn(n[1]),n))},every(n,t){return ui(this,"every",n,t,void 0,arguments)},filter(n,t){return ui(this,"filter",n,t,e=>e.map(fn),arguments)},find(n,t){return ui(this,"find",n,t,fn,arguments)},findIndex(n,t){return ui(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ui(this,"findLast",n,t,fn,arguments)},findLastIndex(n,t){return ui(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ui(this,"forEach",n,t,void 0,arguments)},includes(...n){return Va(this,"includes",n)},indexOf(...n){return Va(this,"indexOf",n)},join(n){return Us(this).join(n)},lastIndexOf(...n){return Va(this,"lastIndexOf",n)},map(n,t){return ui(this,"map",n,t,void 0,arguments)},pop(){return yr(this,"pop")},push(...n){return yr(this,"push",n)},reduce(n,...t){return Eu(this,"reduce",n,t)},reduceRight(n,...t){return Eu(this,"reduceRight",n,t)},shift(){return yr(this,"shift")},some(n,t){return ui(this,"some",n,t,void 0,arguments)},splice(...n){return yr(this,"splice",n)},toReversed(){return Us(this).toReversed()},toSorted(n){return Us(this).toSorted(n)},toSpliced(...n){return Us(this).toSpliced(...n)},unshift(...n){return yr(this,"unshift",n)},values(){return ka(this,"values",fn)}};function ka(n,t,e){const i=Wc(n),s=i[t]();return i!==n&&!Gn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const kp=Array.prototype;function ui(n,t,e,i,s,r){const o=Wc(n),a=o!==n&&!Gn(n),l=o[t];if(l!==kp[t]){const u=l.apply(n,r);return a?fn(u):u}let c=e;o!==n&&(a?c=function(u,f){return e.call(this,fn(u),f,n)}:e.length>2&&(c=function(u,f){return e.call(this,u,f,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function Eu(n,t,e,i){const s=Wc(n);let r=e;return s!==n&&(Gn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,fn(a),l,n)}),s[t](r,...i)}function Va(n,t,e){const i=de(n);ln(i,"iterate",qr);const s=i[t](...e);return(s===-1||s===!1)&&$c(e[0])?(e[0]=de(e[0]),i[t](...e)):s}function yr(n,t,e=[]){Qi(),Gc();const i=de(n)[t].apply(n,e);return Hc(),ts(),i}const Vp=Nc("__proto__,__v_isRef,__isVue"),Df=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(vr));function Wp(n){vr(n)||(n=String(n));const t=de(this);return ln(t,"has",n),t.hasOwnProperty(n)}class Uf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?im:Bf:r?Of:Ff).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=ee(t);if(!s){let l;if(o&&(l=Hp[e]))return l;if(e==="hasOwnProperty")return Wp}const a=Reflect.get(t,e,on(t)?t:i);return(vr(e)?Df.has(e):Vp(e))||(s||ln(t,"get",e),r)?a:on(a)?o&&Bc(e)?a:a.value:Fe(a)?s?Gf(a):ya(a):a}}class Nf extends Uf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=bs(r);if(!Gn(i)&&!bs(i)&&(r=de(r),i=de(i)),!ee(t)&&on(r)&&!on(i))return l?!1:(r.value=i,!0)}const o=ee(t)&&Bc(e)?Number(e)<t.length:he(t,e),a=Reflect.set(t,e,i,on(t)?t:s);return t===de(s)&&(o?Zi(i,r)&&wi(t,"set",e,i):wi(t,"add",e,i)),a}deleteProperty(t,e){const i=he(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&wi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!vr(e)||!Df.has(e))&&ln(t,"has",e),i}ownKeys(t){return ln(t,"iterate",ee(t)?"length":Es),Reflect.ownKeys(t)}}class Xp extends Uf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const qp=new Nf,Yp=new Xp,$p=new Nf(!0);const Xc=n=>n,Ma=n=>Reflect.getPrototypeOf(n);function mo(n,t,e=!1,i=!1){n=n.__v_raw;const s=de(n),r=de(t);e||(Zi(t,r)&&ln(s,"get",t),ln(s,"get",r));const{has:o}=Ma(s),a=i?Xc:e?Kc:fn;if(o.call(s,t))return a(n.get(t));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(t)}function go(n,t=!1){const e=this.__v_raw,i=de(e),s=de(n);return t||(Zi(n,s)&&ln(i,"has",n),ln(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function _o(n,t=!1){return n=n.__v_raw,!t&&ln(de(n),"iterate",Es),Reflect.get(n,"size",n)}function bu(n,t=!1){!t&&!Gn(n)&&!bs(n)&&(n=de(n));const e=de(this);return Ma(e).has.call(e,n)||(e.add(n),wi(e,"add",n,n)),this}function Tu(n,t,e=!1){!e&&!Gn(t)&&!bs(t)&&(t=de(t));const i=de(this),{has:s,get:r}=Ma(i);let o=s.call(i,n);o||(n=de(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,t),o?Zi(t,a)&&wi(i,"set",n,t):wi(i,"add",n,t),this}function Au(n){const t=de(this),{has:e,get:i}=Ma(t);let s=e.call(t,n);s||(n=de(n),s=e.call(t,n)),i&&i.call(t,n);const r=t.delete(n);return s&&wi(t,"delete",n,void 0),r}function Ru(){const n=de(this),t=n.size!==0,e=n.clear();return t&&wi(n,"clear",void 0,void 0),e}function vo(n,t){return function(i,s){const r=this,o=r.__v_raw,a=de(o),l=t?Xc:n?Kc:fn;return!n&&ln(a,"iterate",Es),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function xo(n,t,e){return function(...i){const s=this.__v_raw,r=de(s),o=Dr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=e?Xc:t?Kc:fn;return!t&&ln(r,"iterate",l?Nl:Es),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function Ni(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Kp(){const n={get(r){return mo(this,r)},get size(){return _o(this)},has:go,add:bu,set:Tu,delete:Au,clear:Ru,forEach:vo(!1,!1)},t={get(r){return mo(this,r,!1,!0)},get size(){return _o(this)},has:go,add(r){return bu.call(this,r,!0)},set(r,o){return Tu.call(this,r,o,!0)},delete:Au,clear:Ru,forEach:vo(!1,!0)},e={get(r){return mo(this,r,!0)},get size(){return _o(this,!0)},has(r){return go.call(this,r,!0)},add:Ni("add"),set:Ni("set"),delete:Ni("delete"),clear:Ni("clear"),forEach:vo(!0,!1)},i={get(r){return mo(this,r,!0,!0)},get size(){return _o(this,!0)},has(r){return go.call(this,r,!0)},add:Ni("add"),set:Ni("set"),delete:Ni("delete"),clear:Ni("clear"),forEach:vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=xo(r,!1,!1),e[r]=xo(r,!0,!1),t[r]=xo(r,!1,!0),i[r]=xo(r,!0,!0)}),[n,e,t,i]}const[jp,Zp,Jp,Qp]=Kp();function qc(n,t){const e=t?n?Qp:Jp:n?Zp:jp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(he(e,s)&&s in i?e:i,s,r)}const tm={get:qc(!1,!1)},em={get:qc(!1,!0)},nm={get:qc(!0,!1)};const Ff=new WeakMap,Of=new WeakMap,Bf=new WeakMap,im=new WeakMap;function sm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rm(n){return n.__v_skip||!Object.isExtensible(n)?0:sm(Tp(n))}function ya(n){return bs(n)?n:Yc(n,!1,qp,tm,Ff)}function zf(n){return Yc(n,!1,$p,em,Of)}function Gf(n){return Yc(n,!0,Yp,nm,Bf)}function Yc(n,t,e,i,s){if(!Fe(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=rm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Nr(n){return bs(n)?Nr(n.__v_raw):!!(n&&n.__v_isReactive)}function bs(n){return!!(n&&n.__v_isReadonly)}function Gn(n){return!!(n&&n.__v_isShallow)}function $c(n){return n?!!n.__v_raw:!1}function de(n){const t=n&&n.__v_raw;return t?de(t):n}function om(n){return!he(n,"__v_skip")&&Object.isExtensible(n)&&Sf(n,"__v_skip",!0),n}const fn=n=>Fe(n)?ya(n):n,Kc=n=>Fe(n)?Gf(n):n;function on(n){return n?n.__v_isRef===!0:!1}function $t(n){return Hf(n,!1)}function $o(n){return Hf(n,!0)}function Hf(n,t){return on(n)?n:new am(n,t)}class am{constructor(t,e){this.dep=new Vc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:de(t),this._value=e?t:fn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Gn(t)||bs(t);t=i?t:de(t),Zi(t,e)&&(this._rawValue=t,this._value=i?t:fn(t),this.dep.trigger())}}function nr(n){return on(n)?n.value:n}const lm={get:(n,t,e)=>t==="__v_raw"?n:nr(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return on(s)&&!on(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function kf(n){return Nr(n)?n:new Proxy(n,lm)}class cm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Vc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Af(this),!0}get value(){const t=this.dep.track();return Pf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function um(n,t,e=!1){let i,s;return Qt(n)?i=n:(i=n.get,s=n.set),new cm(i,s,e)}const Mo={},ra=new WeakMap;let _s;function hm(n,t=!1,e=_s){if(e){let i=ra.get(e);i||ra.set(e,i=[]),i.push(n)}}function fm(n,t,e=ye){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=w=>s?w:Gn(w)||s===!1||s===0?Mi(w,1):Mi(w);let h,u,f,d,_=!1,x=!1;if(on(n)?(u=()=>n.value,_=Gn(n)):Nr(n)?(u=()=>c(n),_=!0):ee(n)?(x=!0,_=n.some(w=>Nr(w)||Gn(w)),u=()=>n.map(w=>{if(on(w))return w.value;if(Nr(w))return c(w);if(Qt(w))return l?l(w,2):w()})):Qt(n)?t?u=l?()=>l(n,2):n:u=()=>{if(f){Qi();try{f()}finally{ts()}}const w=_s;_s=h;try{return l?l(n,3,[d]):n(d)}finally{_s=w}}:u=Qn,t&&s){const w=u,F=s===!0?1/0:s;u=()=>Mi(w(),F)}const p=Bp(),m=()=>{h.stop(),p&&Oc(p.effects,h)};if(r&&t){const w=t;t=(...F)=>{w(...F),m()}}let b=x?new Array(n.length).fill(Mo):Mo;const S=w=>{if(!(!(h.flags&1)||!h.dirty&&!w))if(t){const F=h.run();if(s||_||(x?F.some((P,R)=>Zi(P,b[R])):Zi(F,b))){f&&f();const P=_s;_s=h;try{const R=[F,b===Mo?void 0:x&&b[0]===Mo?[]:b,d];l?l(t,3,R):t(...R),b=F}finally{_s=P}}}else h.run()};return a&&a(S),h=new bf(u),h.scheduler=o?()=>o(S,!1):S,d=w=>hm(w,!1,h),f=h.onStop=()=>{const w=ra.get(h);if(w){if(l)l(w,4);else for(const F of w)F();ra.delete(h)}},t?i?S(!0):b=h.run():o?o(S.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function Mi(n,t=1/0,e){if(t<=0||!Fe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,on(n))Mi(n.value,t,e);else if(ee(n))for(let i=0;i<n.length;i++)Mi(n[i],t,e);else if(Ep(n)||Dr(n))n.forEach(i=>{Mi(i,t,e)});else if(Ap(n)){for(const i in n)Mi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Mi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oo(n,t,e,i){try{return i?n(...i):n()}catch(s){Sa(s,t,e)}}function ei(n,t,e,i){if(Qt(n)){const s=oo(n,t,e,i);return s&&yf(s)&&s.catch(r=>{Sa(r,t,e)}),s}if(ee(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ei(n[r],t,e,i));return s}}function Sa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ye;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){Qi(),oo(r,null,10,[n,l,c]),ts();return}}dm(n,e,s,i,o)}function dm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let Yr=!1,Fl=!1;const dn=[];let Kn=0;const ir=[];let Xi=null,Ks=0;const Vf=Promise.resolve();let jc=null;function Wf(n){const t=jc||Vf;return n?t.then(this?n.bind(this):n):t}function pm(n){let t=Yr?Kn+1:0,e=dn.length;for(;t<e;){const i=t+e>>>1,s=dn[i],r=$r(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Zc(n){if(!(n.flags&1)){const t=$r(n),e=dn[dn.length-1];!e||!(n.flags&2)&&t>=$r(e)?dn.push(n):dn.splice(pm(t),0,n),n.flags|=1,Xf()}}function Xf(){!Yr&&!Fl&&(Fl=!0,jc=Vf.then(Yf))}function mm(n){ee(n)?ir.push(...n):Xi&&n.id===-1?Xi.splice(Ks+1,0,n):n.flags&1||(ir.push(n),n.flags|=1),Xf()}function Cu(n,t,e=Yr?Kn+1:0){for(;e<dn.length;e++){const i=dn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;dn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qf(n){if(ir.length){const t=[...new Set(ir)].sort((e,i)=>$r(e)-$r(i));if(ir.length=0,Xi){Xi.push(...t);return}for(Xi=t,Ks=0;Ks<Xi.length;Ks++){const e=Xi[Ks];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Xi=null,Ks=0}}const $r=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Yf(n){Fl=!1,Yr=!0;try{for(Kn=0;Kn<dn.length;Kn++){const t=dn[Kn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),oo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Kn<dn.length;Kn++){const t=dn[Kn];t&&(t.flags&=-2)}Kn=0,dn.length=0,qf(),Yr=!1,jc=null,(dn.length||ir.length)&&Yf()}}let Sn=null,$f=null;function oa(n){const t=Sn;return Sn=n,$f=n&&n.type.__scopeId||null,t}function Vi(n,t=Sn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&zu(-1);const r=oa(t);let o;try{o=n(...s)}finally{oa(r),i._d&&zu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function gm(n,t){if(Sn===null)return n;const e=Aa(Sn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ye]=t[s];r&&(Qt(r)&&(r={mounted:r,updated:r}),r.deep&&Mi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function cs(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Qi(),ei(l,e,8,[n.el,a,n,t]),ts())}}const _m=Symbol("_vte"),vm=n=>n.__isTeleport;function Jc(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Jc(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Wn(n,t){return Qt(n)?tn({name:n.name},t,{setup:n}):n}function Kf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ol(n,t,e,i,s=!1){if(ee(n)){n.forEach((_,x)=>Ol(_,t&&(ee(t)?t[x]:t),e,i,s));return}if(Fr(i)&&!s)return;const r=i.shapeFlag&4?Aa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,h=a.refs===ye?a.refs={}:a.refs,u=a.setupState,f=de(u),d=u===ye?()=>!1:_=>he(f,_);if(c!=null&&c!==l&&(Ze(c)?(h[c]=null,d(c)&&(u[c]=null)):on(c)&&(c.value=null)),Qt(l))oo(l,a,12,[o,h]);else{const _=Ze(l),x=on(l);if(_||x){const p=()=>{if(n.f){const m=_?d(l)?u[l]:h[l]:l.value;s?ee(m)&&Oc(m,r):ee(m)?m.includes(r)||m.push(r):_?(h[l]=[r],d(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else _?(h[l]=o,d(l)&&(u[l]=o)):x&&(l.value=o,n.k&&(h[n.k]=o))};o?(p.id=-1,Mn(p,e)):p()}}}const Fr=n=>!!n.type.__asyncLoader,jf=n=>n.type.__isKeepAlive;function xm(n,t){Zf(n,"a",t)}function Mm(n,t){Zf(n,"da",t)}function Zf(n,t,e=rn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(wa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)jf(s.parent.vnode)&&ym(i,t,e,s),s=s.parent}}function ym(n,t,e,i){const s=wa(t,n,i,!0);Qc(()=>{Oc(i[t],s)},e)}function wa(n,t,e=rn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Qi();const a=ao(e),l=ei(t,e,n,o);return a(),ts(),l});return i?s.unshift(r):s.push(r),r}}const Ri=n=>(t,e=rn)=>{(!Ta||n==="sp")&&wa(n,(...i)=>t(...i),e)},Sm=Ri("bm"),si=Ri("m"),wm=Ri("bu"),Em=Ri("u"),bm=Ri("bum"),Qc=Ri("um"),Tm=Ri("sp"),Am=Ri("rtg"),Rm=Ri("rtc");function Cm(n,t=rn){wa("ec",n,t)}const Pm="components";function Pu(n,t){return Lm(Pm,n,!0,t)||n}const Im=Symbol.for("v-ndc");function Lm(n,t,e=!0,i=!1){const s=Sn||rn;if(s){const r=s.type;{const a=x0(r,!1);if(a&&(a===t||a===Rn(t)||a===xa(Rn(t))))return r}const o=Iu(s[n]||r[n],t)||Iu(s.appContext[n],t);return!o&&i?r:o}}function Iu(n,t){return n&&(n[t]||n[Rn(t)]||n[xa(Rn(t))])}const Bl=n=>n?gd(n)?Aa(n):Bl(n.parent):null,Or=tn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Bl(n.parent),$root:n=>Bl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>tu(n),$forceUpdate:n=>n.f||(n.f=()=>{Zc(n.update)}),$nextTick:n=>n.n||(n.n=Wf.bind(n.proxy)),$watch:n=>Qm.bind(n)}),Wa=(n,t)=>n!==ye&&!n.__isScriptSetup&&he(n,t),Dm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Wa(i,t))return o[t]=1,i[t];if(s!==ye&&he(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&he(c,t))return o[t]=3,r[t];if(e!==ye&&he(e,t))return o[t]=4,e[t];zl&&(o[t]=0)}}const h=Or[t];let u,f;if(h)return t==="$attrs"&&ln(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ye&&he(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,he(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Wa(s,t)?(s[t]=e,!0):i!==ye&&he(i,t)?(i[t]=e,!0):he(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==ye&&he(n,o)||Wa(t,o)||(a=r[0])&&he(a,o)||he(i,o)||he(Or,o)||he(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:he(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Lu(n){return ee(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let zl=!0;function Um(n){const t=tu(n),e=n.proxy,i=n.ctx;zl=!1,t.beforeCreate&&Du(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:d,updated:_,activated:x,deactivated:p,beforeDestroy:m,beforeUnmount:b,destroyed:S,unmounted:w,render:F,renderTracked:P,renderTriggered:R,errorCaptured:O,serverPrefetch:nt,expose:M,inheritAttrs:E,components:K,directives:H,filters:Z}=t;if(c&&Nm(c,i,null),o)for(const Q in o){const X=o[Q];Qt(X)&&(i[Q]=X.bind(e))}if(s){const Q=s.call(e,e);Fe(Q)&&(n.data=ya(Q))}if(zl=!0,r)for(const Q in r){const X=r[Q],mt=Qt(X)?X.bind(e,e):Qt(X.get)?X.get.bind(e,e):Qn,yt=!Qt(X)&&Qt(X.set)?X.set.bind(e):Qn,gt=Nn({get:mt,set:yt});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>gt.value,set:Pt=>gt.value=Pt})}if(a)for(const Q in a)Jf(a[Q],i,e,Q);if(l){const Q=Qt(l)?l.call(e):l;Reflect.ownKeys(Q).forEach(X=>{Ko(X,Q[X])})}h&&Du(h,n,"c");function V(Q,X){ee(X)?X.forEach(mt=>Q(mt.bind(e))):X&&Q(X.bind(e))}if(V(Sm,u),V(si,f),V(wm,d),V(Em,_),V(xm,x),V(Mm,p),V(Cm,O),V(Rm,P),V(Am,R),V(bm,b),V(Qc,w),V(Tm,nt),ee(M))if(M.length){const Q=n.exposed||(n.exposed={});M.forEach(X=>{Object.defineProperty(Q,X,{get:()=>e[X],set:mt=>e[X]=mt})})}else n.exposed||(n.exposed={});F&&n.render===Qn&&(n.render=F),E!=null&&(n.inheritAttrs=E),K&&(n.components=K),H&&(n.directives=H),nt&&Kf(n)}function Nm(n,t,e=Qn){ee(n)&&(n=Gl(n));for(const i in n){const s=n[i];let r;Fe(s)?"default"in s?r=Ei(s.from||i,s.default,!0):r=Ei(s.from||i):r=Ei(s),on(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Du(n,t,e){ei(ee(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Jf(n,t,e,i){let s=i.includes(".")?fd(e,i):()=>e[i];if(Ze(n)){const r=t[n];Qt(r)&&He(s,r)}else if(Qt(n))He(s,n.bind(e));else if(Fe(n))if(ee(n))n.forEach(r=>Jf(r,t,e,i));else{const r=Qt(n.handler)?n.handler.bind(e):t[n.handler];Qt(r)&&He(s,r,n)}}function tu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>aa(l,c,o,!0)),aa(l,t,o)),Fe(t)&&r.set(t,l),l}function aa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&aa(n,r,e,!0),s&&s.forEach(o=>aa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Fm[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Fm={data:Uu,props:Nu,emits:Nu,methods:Ir,computed:Ir,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:Ir,directives:Ir,watch:Bm,provide:Uu,inject:Om};function Uu(n,t){return t?n?function(){return tn(Qt(n)?n.call(this,this):n,Qt(t)?t.call(this,this):t)}:t:n}function Om(n,t){return Ir(Gl(n),Gl(t))}function Gl(n){if(ee(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function cn(n,t){return n?[...new Set([].concat(n,t))]:t}function Ir(n,t){return n?tn(Object.create(null),n,t):t}function Nu(n,t){return n?ee(n)&&ee(t)?[...new Set([...n,...t])]:tn(Object.create(null),Lu(n),Lu(t??{})):t}function Bm(n,t){if(!n)return t;if(!t)return n;const e=tn(Object.create(null),n);for(const i in t)e[i]=cn(n[i],t[i]);return e}function Qf(){return{app:null,config:{isNativeTag:Sp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zm=0;function Gm(n,t){return function(i,s=null){Qt(i)||(i=tn({},i)),s!=null&&!Fe(s)&&(s=null);const r=Qf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:zm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:y0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Qt(h.install)?(o.add(h),h.install(c,...u)):Qt(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const d=c._ceVNode||Ve(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&t?t(d,h):n(d,h,f),l=!0,c._container=h,h.__vue_app__=c,Aa(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(ei(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=sr;sr=c;try{return h()}finally{sr=u}}};return c}}let sr=null;function Ko(n,t){if(rn){let e=rn.provides;const i=rn.parent&&rn.parent.provides;i===e&&(e=rn.provides=Object.create(i)),e[n]=t}}function Ei(n,t,e=!1){const i=rn||Sn;if(i||sr){const s=sr?sr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Qt(t)?t.call(i&&i.proxy):t}}const td={},ed=()=>Object.create(td),nd=n=>Object.getPrototypeOf(n)===td;function Hm(n,t,e,i=!1){const s={},r=ed();n.propsDefaults=Object.create(null),id(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:zf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function km(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=de(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Ea(n.emitsOptions,f))continue;const d=t[f];if(l)if(he(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const _=Rn(f);s[_]=Hl(l,a,_,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{id(n,t,s,r)&&(c=!0);let h;for(const u in a)(!t||!he(t,u)&&((h=Cs(u))===u||!he(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=Hl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!t||!he(t,u))&&(delete r[u],c=!0)}c&&wi(n.attrs,"set","")}function id(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ur(l))continue;const c=t[l];let h;s&&he(s,h=Rn(l))?!r||!r.includes(h)?e[h]=c:(a||(a={}))[h]=c:Ea(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=de(e),c=a||ye;for(let h=0;h<r.length;h++){const u=r[h];e[u]=Hl(s,l,u,c[u],n,!he(c,u))}}return o}function Hl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=he(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=ao(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Cs(e))&&(i=!0))}return i}const Vm=new WeakMap;function sd(n,t,e=!1){const i=e?Vm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Qt(n)){const h=u=>{l=!0;const[f,d]=sd(u,t,!0);tn(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return Fe(n)&&i.set(n,er),er;if(ee(r))for(let h=0;h<r.length;h++){const u=Rn(r[h]);Fu(u)&&(o[u]=ye)}else if(r)for(const h in r){const u=Rn(h);if(Fu(u)){const f=r[h],d=o[u]=ee(f)||Qt(f)?{type:f}:tn({},f),_=d.type;let x=!1,p=!0;if(ee(_))for(let m=0;m<_.length;++m){const b=_[m],S=Qt(b)&&b.name;if(S==="Boolean"){x=!0;break}else S==="String"&&(p=!1)}else x=Qt(_)&&_.name==="Boolean";d[0]=x,d[1]=p,(x||he(d,"default"))&&a.push(u)}}const c=[o,a];return Fe(n)&&i.set(n,c),c}function Fu(n){return n[0]!=="$"&&!Ur(n)}const rd=n=>n[0]==="_"||n==="$stable",eu=n=>ee(n)?n.map(Zn):[Zn(n)],Wm=(n,t,e)=>{if(t._n)return t;const i=Vi((...s)=>eu(t(...s)),e);return i._c=!1,i},od=(n,t,e)=>{const i=n._ctx;for(const s in n){if(rd(s))continue;const r=n[s];if(Qt(r))t[s]=Wm(s,r,i);else if(r!=null){const o=eu(r);t[s]=()=>o}}},ad=(n,t)=>{const e=eu(t);n.slots.default=()=>e},ld=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},Xm=(n,t,e)=>{const i=n.slots=ed();if(n.vnode.shapeFlag&32){const s=t._;s?(ld(i,t,e),e&&Sf(i,"_",s,!0)):od(t,i)}else t&&ad(n,t)},qm=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ye;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:ld(s,t,e):(r=!t.$stable,od(t,s)),o=t}else t&&(ad(n,t),o={default:1});if(r)for(const a in s)!rd(a)&&o[a]==null&&delete s[a]},Mn=o0;function Ym(n){return $m(n)}function $m(n,t){const e=wf();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:d=Qn,insertStaticContent:_}=n,x=(g,T,I,U=null,D=null,W=null,$=void 0,y=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Sr(g,T)&&(U=N(g),Pt(g,D,W,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:k,shapeFlag:z}=T;switch(C){case ba:p(g,T,I,U);break;case Kr:m(g,T,I,U);break;case Ya:g==null&&b(T,I,U,$);break;case pn:K(g,T,I,U,D,W,$,y,v);break;default:z&1?F(g,T,I,U,D,W,$,y,v):z&6?H(g,T,I,U,D,W,$,y,v):(z&64||z&128)&&C.process(g,T,I,U,D,W,$,y,v,ht)}k!=null&&D&&Ol(k,g&&g.ref,W,T||g,!T)},p=(g,T,I,U)=>{if(g==null)i(T.el=a(T.children),I,U);else{const D=T.el=g.el;T.children!==g.children&&c(D,T.children)}},m=(g,T,I,U)=>{g==null?i(T.el=l(T.children||""),I,U):T.el=g.el},b=(g,T,I,U)=>{[g.el,g.anchor]=_(g.children,T,I,U,g.el,g.anchor)},S=({el:g,anchor:T},I,U)=>{let D;for(;g&&g!==T;)D=f(g),i(g,I,U),g=D;i(T,I,U)},w=({el:g,anchor:T})=>{let I;for(;g&&g!==T;)I=f(g),s(g),g=I;s(T)},F=(g,T,I,U,D,W,$,y,v)=>{T.type==="svg"?$="svg":T.type==="math"&&($="mathml"),g==null?P(T,I,U,D,W,$,y,v):nt(g,T,D,W,$,y,v)},P=(g,T,I,U,D,W,$,y)=>{let v,C;const{props:k,shapeFlag:z,transition:G,dirs:ct}=g;if(v=g.el=o(g.type,W,k&&k.is,k),z&8?h(v,g.children):z&16&&O(g.children,v,null,U,D,Xa(g,W),$,y),ct&&cs(g,null,U,"created"),R(v,g,g.scopeId,$,U),k){for(const pt in k)pt!=="value"&&!Ur(pt)&&r(v,pt,null,k[pt],W,U);"value"in k&&r(v,"value",null,k.value,W),(C=k.onVnodeBeforeMount)&&$n(C,U,g)}ct&&cs(g,null,U,"beforeMount");const ut=Km(D,G);ut&&G.beforeEnter(v),i(v,T,I),((C=k&&k.onVnodeMounted)||ut||ct)&&Mn(()=>{C&&$n(C,U,g),ut&&G.enter(v),ct&&cs(g,null,U,"mounted")},D)},R=(g,T,I,U,D)=>{if(I&&d(g,I),U)for(let W=0;W<U.length;W++)d(g,U[W]);if(D){let W=D.subTree;if(T===W||pd(W.type)&&(W.ssContent===T||W.ssFallback===T)){const $=D.vnode;R(g,$,$.scopeId,$.slotScopeIds,D.parent)}}},O=(g,T,I,U,D,W,$,y,v=0)=>{for(let C=v;C<g.length;C++){const k=g[C]=y?qi(g[C]):Zn(g[C]);x(null,k,T,I,U,D,W,$,y)}},nt=(g,T,I,U,D,W,$)=>{const y=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:k}=T;v|=g.patchFlag&16;const z=g.props||ye,G=T.props||ye;let ct;if(I&&us(I,!1),(ct=G.onVnodeBeforeUpdate)&&$n(ct,I,T,g),k&&cs(T,g,I,"beforeUpdate"),I&&us(I,!0),(z.innerHTML&&G.innerHTML==null||z.textContent&&G.textContent==null)&&h(y,""),C?M(g.dynamicChildren,C,y,I,U,Xa(T,D),W):$||X(g,T,y,null,I,U,Xa(T,D),W,!1),v>0){if(v&16)E(y,z,G,I,D);else if(v&2&&z.class!==G.class&&r(y,"class",null,G.class,D),v&4&&r(y,"style",z.style,G.style,D),v&8){const ut=T.dynamicProps;for(let pt=0;pt<ut.length;pt++){const Et=ut[pt],ft=z[Et],Mt=G[Et];(Mt!==ft||Et==="value")&&r(y,Et,ft,Mt,D,I)}}v&1&&g.children!==T.children&&h(y,T.children)}else!$&&C==null&&E(y,z,G,I,D);((ct=G.onVnodeUpdated)||k)&&Mn(()=>{ct&&$n(ct,I,T,g),k&&cs(T,g,I,"updated")},U)},M=(g,T,I,U,D,W,$)=>{for(let y=0;y<T.length;y++){const v=g[y],C=T[y],k=v.el&&(v.type===pn||!Sr(v,C)||v.shapeFlag&70)?u(v.el):I;x(v,C,k,null,U,D,W,$,!0)}},E=(g,T,I,U,D)=>{if(T!==I){if(T!==ye)for(const W in T)!Ur(W)&&!(W in I)&&r(g,W,T[W],null,D,U);for(const W in I){if(Ur(W))continue;const $=I[W],y=T[W];$!==y&&W!=="value"&&r(g,W,y,$,D,U)}"value"in I&&r(g,"value",T.value,I.value,D)}},K=(g,T,I,U,D,W,$,y,v)=>{const C=T.el=g?g.el:a(""),k=T.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:G,slotScopeIds:ct}=T;ct&&(y=y?y.concat(ct):ct),g==null?(i(C,I,U),i(k,I,U),O(T.children||[],I,k,D,W,$,y,v)):z>0&&z&64&&G&&g.dynamicChildren?(M(g.dynamicChildren,G,I,D,W,$,y),(T.key!=null||D&&T===D.subTree)&&cd(g,T,!0)):X(g,T,I,k,D,W,$,y,v)},H=(g,T,I,U,D,W,$,y,v)=>{T.slotScopeIds=y,g==null?T.shapeFlag&512?D.ctx.activate(T,I,U,$,v):Z(T,I,U,D,W,$,v):at(g,T,v)},Z=(g,T,I,U,D,W,$)=>{const y=g.component=p0(g,U,D);if(jf(g)&&(y.ctx.renderer=ht),m0(y,!1,$),y.asyncDep){if(D&&D.registerDep(y,V,$),!g.el){const v=y.subTree=Ve(Kr);m(null,v,T,I)}}else V(y,g,T,I,D,W,$)},at=(g,T,I)=>{const U=T.component=g.component;if(s0(g,T,I))if(U.asyncDep&&!U.asyncResolved){Q(U,T,I);return}else U.next=T,U.update();else T.el=g.el,U.vnode=T},V=(g,T,I,U,D,W,$)=>{const y=()=>{if(g.isMounted){let{next:z,bu:G,u:ct,parent:ut,vnode:pt}=g;{const It=ud(g);if(It){z&&(z.el=pt.el,Q(g,z,$)),It.asyncDep.then(()=>{g.isUnmounted||y()});return}}let Et=z,ft;us(g,!1),z?(z.el=pt.el,Q(g,z,$)):z=pt,G&&Ga(G),(ft=z.props&&z.props.onVnodeBeforeUpdate)&&$n(ft,ut,z,pt),us(g,!0);const Mt=qa(g),Rt=g.subTree;g.subTree=Mt,x(Rt,Mt,u(Rt.el),N(Rt),g,D,W),z.el=Mt.el,Et===null&&r0(g,Mt.el),ct&&Mn(ct,D),(ft=z.props&&z.props.onVnodeUpdated)&&Mn(()=>$n(ft,ut,z,pt),D)}else{let z;const{el:G,props:ct}=T,{bm:ut,m:pt,parent:Et,root:ft,type:Mt}=g,Rt=Fr(T);if(us(g,!1),ut&&Ga(ut),!Rt&&(z=ct&&ct.onVnodeBeforeMount)&&$n(z,Et,T),us(g,!0),G&&tt){const It=()=>{g.subTree=qa(g),tt(G,g.subTree,g,D,null)};Rt&&Mt.__asyncHydrate?Mt.__asyncHydrate(G,g,It):It()}else{ft.ce&&ft.ce._injectChildStyle(Mt);const It=g.subTree=qa(g);x(null,It,I,U,g,D,W),T.el=It.el}if(pt&&Mn(pt,D),!Rt&&(z=ct&&ct.onVnodeMounted)){const It=T;Mn(()=>$n(z,Et,It),D)}(T.shapeFlag&256||Et&&Fr(Et.vnode)&&Et.vnode.shapeFlag&256)&&g.a&&Mn(g.a,D),g.isMounted=!0,T=I=U=null}};g.scope.on();const v=g.effect=new bf(y);g.scope.off();const C=g.update=v.run.bind(v),k=g.job=v.runIfDirty.bind(v);k.i=g,k.id=g.uid,v.scheduler=()=>Zc(k),us(g,!0),C()},Q=(g,T,I)=>{T.component=g;const U=g.vnode.props;g.vnode=T,g.next=null,km(g,T.props,U,I),qm(g,T.children,I),Qi(),Cu(g),ts()},X=(g,T,I,U,D,W,$,y,v=!1)=>{const C=g&&g.children,k=g?g.shapeFlag:0,z=T.children,{patchFlag:G,shapeFlag:ct}=T;if(G>0){if(G&128){yt(C,z,I,U,D,W,$,y,v);return}else if(G&256){mt(C,z,I,U,D,W,$,y,v);return}}ct&8?(k&16&&St(C,D,W),z!==C&&h(I,z)):k&16?ct&16?yt(C,z,I,U,D,W,$,y,v):St(C,D,W,!0):(k&8&&h(I,""),ct&16&&O(z,I,U,D,W,$,y,v))},mt=(g,T,I,U,D,W,$,y,v)=>{g=g||er,T=T||er;const C=g.length,k=T.length,z=Math.min(C,k);let G;for(G=0;G<z;G++){const ct=T[G]=v?qi(T[G]):Zn(T[G]);x(g[G],ct,I,null,D,W,$,y,v)}C>k?St(g,D,W,!0,!1,z):O(T,I,U,D,W,$,y,v,z)},yt=(g,T,I,U,D,W,$,y,v)=>{let C=0;const k=T.length;let z=g.length-1,G=k-1;for(;C<=z&&C<=G;){const ct=g[C],ut=T[C]=v?qi(T[C]):Zn(T[C]);if(Sr(ct,ut))x(ct,ut,I,null,D,W,$,y,v);else break;C++}for(;C<=z&&C<=G;){const ct=g[z],ut=T[G]=v?qi(T[G]):Zn(T[G]);if(Sr(ct,ut))x(ct,ut,I,null,D,W,$,y,v);else break;z--,G--}if(C>z){if(C<=G){const ct=G+1,ut=ct<k?T[ct].el:U;for(;C<=G;)x(null,T[C]=v?qi(T[C]):Zn(T[C]),I,ut,D,W,$,y,v),C++}}else if(C>G)for(;C<=z;)Pt(g[C],D,W,!0),C++;else{const ct=C,ut=C,pt=new Map;for(C=ut;C<=G;C++){const Lt=T[C]=v?qi(T[C]):Zn(T[C]);Lt.key!=null&&pt.set(Lt.key,C)}let Et,ft=0;const Mt=G-ut+1;let Rt=!1,It=0;const bt=new Array(Mt);for(C=0;C<Mt;C++)bt[C]=0;for(C=ct;C<=z;C++){const Lt=g[C];if(ft>=Mt){Pt(Lt,D,W,!0);continue}let kt;if(Lt.key!=null)kt=pt.get(Lt.key);else for(Et=ut;Et<=G;Et++)if(bt[Et-ut]===0&&Sr(Lt,T[Et])){kt=Et;break}kt===void 0?Pt(Lt,D,W,!0):(bt[kt-ut]=C+1,kt>=It?It=kt:Rt=!0,x(Lt,T[kt],I,null,D,W,$,y,v),ft++)}const Ht=Rt?jm(bt):er;for(Et=Ht.length-1,C=Mt-1;C>=0;C--){const Lt=ut+C,kt=T[Lt],B=Lt+1<k?T[Lt+1].el:U;bt[C]===0?x(null,kt,I,B,D,W,$,y,v):Rt&&(Et<0||C!==Ht[Et]?gt(kt,I,B,2):Et--)}}},gt=(g,T,I,U,D=null)=>{const{el:W,type:$,transition:y,children:v,shapeFlag:C}=g;if(C&6){gt(g.component.subTree,T,I,U);return}if(C&128){g.suspense.move(T,I,U);return}if(C&64){$.move(g,T,I,ht);return}if($===pn){i(W,T,I);for(let z=0;z<v.length;z++)gt(v[z],T,I,U);i(g.anchor,T,I);return}if($===Ya){S(g,T,I);return}if(U!==2&&C&1&&y)if(U===0)y.beforeEnter(W),i(W,T,I),Mn(()=>y.enter(W),D);else{const{leave:z,delayLeave:G,afterLeave:ct}=y,ut=()=>i(W,T,I),pt=()=>{z(W,()=>{ut(),ct&&ct()})};G?G(W,ut,pt):pt()}else i(W,T,I)},Pt=(g,T,I,U=!1,D=!1)=>{const{type:W,props:$,ref:y,children:v,dynamicChildren:C,shapeFlag:k,patchFlag:z,dirs:G,cacheIndex:ct}=g;if(z===-2&&(D=!1),y!=null&&Ol(y,null,I,g,!0),ct!=null&&(T.renderCache[ct]=void 0),k&256){T.ctx.deactivate(g);return}const ut=k&1&&G,pt=!Fr(g);let Et;if(pt&&(Et=$&&$.onVnodeBeforeUnmount)&&$n(Et,T,g),k&6)dt(g.component,I,U);else{if(k&128){g.suspense.unmount(I,U);return}ut&&cs(g,null,T,"beforeUnmount"),k&64?g.type.remove(g,T,I,ht,U):C&&!C.hasOnce&&(W!==pn||z>0&&z&64)?St(C,T,I,!1,!0):(W===pn&&z&384||!D&&k&16)&&St(v,T,I),U&&Bt(g)}(pt&&(Et=$&&$.onVnodeUnmounted)||ut)&&Mn(()=>{Et&&$n(Et,T,g),ut&&cs(g,null,T,"unmounted")},I)},Bt=g=>{const{type:T,el:I,anchor:U,transition:D}=g;if(T===pn){ot(I,U);return}if(T===Ya){w(g);return}const W=()=>{s(I),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:y}=D,v=()=>$(I,W);y?y(g.el,W,v):v()}else W()},ot=(g,T)=>{let I;for(;g!==T;)I=f(g),s(g),g=I;s(T)},dt=(g,T,I)=>{const{bum:U,scope:D,job:W,subTree:$,um:y,m:v,a:C}=g;Ou(v),Ou(C),U&&Ga(U),D.stop(),W&&(W.flags|=8,Pt($,g,T,I)),y&&Mn(y,T),Mn(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},St=(g,T,I,U=!1,D=!1,W=0)=>{for(let $=W;$<g.length;$++)Pt(g[$],T,I,U,D)},N=g=>{if(g.shapeFlag&6)return N(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=f(g.anchor||g.el),I=T&&T[_m];return I?f(I):T};let lt=!1;const st=(g,T,I)=>{g==null?T._vnode&&Pt(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,I),T._vnode=g,lt||(lt=!0,Cu(),qf(),lt=!1)},ht={p:x,um:Pt,m:gt,r:Bt,mt:Z,mc:O,pc:X,pbc:M,n:N,o:n};let wt,tt;return{render:st,hydrate:wt,createApp:Gm(st,wt)}}function Xa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function us({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Km(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function cd(n,t,e=!1){const i=n.children,s=t.children;if(ee(i)&&ee(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=qi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&cd(o,a)),a.type===ba&&(a.el=o.el)}}function jm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function ud(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ud(t)}function Ou(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Zm=Symbol.for("v-scx"),Jm=()=>Ei(Zm);function He(n,t,e){return hd(n,t,e)}function hd(n,t,e=ye){const{immediate:i,deep:s,flush:r,once:o}=e,a=tn({},e);let l;if(Ta)if(r==="sync"){const f=Jm();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const f=()=>{};return f.stop=Qn,f.resume=Qn,f.pause=Qn,f}const c=rn;a.call=(f,d,_)=>ei(f,c,d,_);let h=!1;r==="post"?a.scheduler=f=>{Mn(f,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,d)=>{d?f():Zc(f)}),a.augmentJob=f=>{t&&(f.flags|=4),h&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const u=fm(n,t,a);return l&&l.push(u),u}function Qm(n,t,e){const i=this.proxy,s=Ze(n)?n.includes(".")?fd(i,n):()=>i[n]:n.bind(i,i);let r;Qt(t)?r=t:(r=t.handler,e=t);const o=ao(this),a=hd(s,r.bind(i),e);return o(),a}function fd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const t0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Rn(t)}Modifiers`]||n[`${Cs(t)}Modifiers`];function e0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ye;let s=e;const r=t.startsWith("update:"),o=r&&t0(i,t.slice(7));o&&(o.trim&&(s=e.map(h=>Ze(h)?h.trim():h)),o.number&&(s=e.map(Pp)));let a,l=i[a=za(t)]||i[a=za(Rn(t))];!l&&r&&(l=i[a=za(Cs(t))]),l&&ei(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ei(c,n,6,s)}}function dd(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Qt(n)){const l=c=>{const h=dd(c,t,!0);h&&(a=!0,tn(o,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Fe(n)&&i.set(n,null),null):(ee(r)?r.forEach(l=>o[l]=null):tn(o,r),Fe(n)&&i.set(n,o),o)}function Ea(n,t){return!n||!ga(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(n,t[0].toLowerCase()+t.slice(1))||he(n,Cs(t))||he(n,t))}function qa(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:d,ctx:_,inheritAttrs:x}=n,p=oa(n);let m,b;try{if(e.shapeFlag&4){const w=s||i,F=w;m=Zn(c.call(F,w,h,u,d,f,_)),b=a}else{const w=t;m=Zn(w.length>1?w(u,{attrs:a,slots:o,emit:l}):w(u,null)),b=t.props?a:n0(a)}}catch(w){Br.length=0,Sa(w,n,1),m=Ve(Kr)}let S=m;if(b&&x!==!1){const w=Object.keys(b),{shapeFlag:F}=S;w.length&&F&7&&(r&&w.some(Fc)&&(b=i0(b,r)),S=cr(S,b,!1,!0))}return e.dirs&&(S=cr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&Jc(S,e.transition),m=S,oa(p),m}const n0=n=>{let t;for(const e in n)(e==="class"||e==="style"||ga(e))&&((t||(t={}))[e]=n[e]);return t},i0=(n,t)=>{const e={};for(const i in n)(!Fc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function s0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Bu(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==i[f]&&!Ea(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bu(i,o,c):!0:!!o;return!1}function Bu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Ea(e,r))return!0}return!1}function r0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const pd=n=>n.__isSuspense;function o0(n,t){t&&t.pendingBranch?ee(n)?t.effects.push(...n):t.effects.push(n):mm(n)}const pn=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),Kr=Symbol.for("v-cmt"),Ya=Symbol.for("v-stc"),Br=[];let wn=null;function Ci(n=!1){Br.push(wn=n?null:[])}function a0(){Br.pop(),wn=Br[Br.length-1]||null}let jr=1;function zu(n){jr+=n,n<0&&wn&&(wn.hasOnce=!0)}function l0(n){return n.dynamicChildren=jr>0?wn||er:null,a0(),jr>0&&wn&&wn.push(n),n}function Pi(n,t,e,i,s,r){return l0(Gt(n,t,e,i,s,r,!0))}function la(n){return n?n.__v_isVNode===!0:!1}function Sr(n,t){return n.type===t.type&&n.key===t.key}const md=({key:n})=>n??null,jo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ze(n)||on(n)||Qt(n)?{i:Sn,r:n,k:t,f:!!e}:n:null);function Gt(n,t=null,e=null,i=0,s=null,r=n===pn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&md(t),ref:t&&jo(t),scopeId:$f,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return a?(nu(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ze(e)?8:16),jr>0&&!o&&wn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&wn.push(l),l}const Ve=c0;function c0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Im)&&(n=Kr),la(n)){const a=cr(n,t,!0);return e&&nu(a,e),jr>0&&!r&&wn&&(a.shapeFlag&6?wn[wn.indexOf(n)]=a:wn.push(a)),a.patchFlag=-2,a}if(M0(n)&&(n=n.__vccOpts),t){t=u0(t);let{class:a,style:l}=t;a&&!Ze(a)&&(t.class=Vn(a)),Fe(l)&&($c(l)&&!ee(l)&&(l=tn({},l)),t.style=zc(l))}const o=Ze(n)?1:pd(n)?128:vm(n)?64:Fe(n)?4:Qt(n)?2:0;return Gt(n,t,e,i,s,o,r,!0)}function u0(n){return n?$c(n)||nd(n)?tn({},n):n:null}function cr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?h0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&md(c),ref:t&&t.ref?e&&r?ee(r)?r.concat(jo(t)):[r,jo(t)]:jo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==pn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&cr(n.ssContent),ssFallback:n.ssFallback&&cr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Jc(h,l.clone(h)),h}function Wi(n=" ",t=0){return Ve(ba,null,n,t)}function Zn(n){return n==null||typeof n=="boolean"?Ve(Kr):ee(n)?Ve(pn,null,n.slice()):la(n)?qi(n):Ve(ba,null,String(n))}function qi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:cr(n)}function nu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(ee(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),nu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!nd(t)?t._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Qt(t)?(t={default:t,_ctx:Sn},e=32):(t=String(t),i&64?(e=16,t=[Wi(t)]):e=8);n.children=t,n.shapeFlag|=e}function h0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Vn([t.class,i.class]));else if(s==="style")t.style=zc([t.style,i.style]);else if(ga(s)){const r=t[s],o=i[s];o&&r!==o&&!(ee(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function $n(n,t,e,i=null){ei(n,t,7,[e,i])}const f0=Qf();let d0=0;function p0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||f0,r={uid:d0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sd(i,s),emitsOptions:dd(i,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:i.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=e0.bind(null,r),n.ce&&n.ce(r),r}let rn=null,ca,kl;{const n=wf(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ca=t("__VUE_INSTANCE_SETTERS__",e=>rn=e),kl=t("__VUE_SSR_SETTERS__",e=>Ta=e)}const ao=n=>{const t=rn;return ca(n),n.scope.on(),()=>{n.scope.off(),ca(t)}},Gu=()=>{rn&&rn.scope.off(),ca(null)};function gd(n){return n.vnode.shapeFlag&4}let Ta=!1;function m0(n,t=!1,e=!1){t&&kl(t);const{props:i,children:s}=n.vnode,r=gd(n);Hm(n,i,r,t),Xm(n,s,e);const o=r?g0(n,t):void 0;return t&&kl(!1),o}function g0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Dm);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?v0(n):null,r=ao(n);Qi();const o=oo(i,n,0,[n.props,s]);if(ts(),r(),yf(o)){if(Fr(n)||Kf(n),o.then(Gu,Gu),t)return o.then(a=>{Hu(n,a,t)}).catch(a=>{Sa(a,n,0)});n.asyncDep=o}else Hu(n,o,t)}else _d(n,t)}function Hu(n,t,e){Qt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Fe(t)&&(n.setupState=kf(t)),_d(n,e)}let ku;function _d(n,t,e){const i=n.type;if(!n.render){if(!t&&ku&&!i.render){const s=i.template||tu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=tn(tn({isCustomElement:r,delimiters:a},o),l);i.render=ku(s,c)}}n.render=i.render||Qn}{const s=ao(n);Qi();try{Um(n)}finally{ts(),s()}}}const _0={get(n,t){return ln(n,"get",""),n[t]}};function v0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,_0),slots:n.slots,emit:n.emit,expose:t}}function Aa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(kf(om(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Or)return Or[e](n)},has(t,e){return e in t||e in Or}})):n.proxy}function x0(n,t=!0){return Qt(n)?n.displayName||n.name:n.name||t&&n.__name}function M0(n){return Qt(n)&&"__vccOpts"in n}const Nn=(n,t)=>um(n,t,Ta);function vd(n,t,e){const i=arguments.length;return i===2?Fe(t)&&!ee(t)?la(t)?Ve(n,null,[t]):Ve(n,t):Ve(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&la(e)&&(e=[e]),Ve(n,t,e))}const y0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vl;const Vu=typeof window<"u"&&window.trustedTypes;if(Vu)try{Vl=Vu.createPolicy("vue",{createHTML:n=>n})}catch{}const xd=Vl?n=>Vl.createHTML(n):n=>n,S0="http://www.w3.org/2000/svg",w0="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,Wu=xi&&xi.createElement("template"),E0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?xi.createElementNS(S0,n):t==="mathml"?xi.createElementNS(w0,n):e?xi.createElement(n,{is:e}):xi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>xi.createTextNode(n),createComment:n=>xi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>xi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Wu.innerHTML=xd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Wu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},b0=Symbol("_vtc");function T0(n,t,e){const i=n[b0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ua=Symbol("_vod"),Md=Symbol("_vsh"),A0={beforeMount(n,{value:t},{transition:e}){n[ua]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):wr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),wr(n,!0),i.enter(n)):i.leave(n,()=>{wr(n,!1)}):wr(n,t))},beforeUnmount(n,{value:t}){wr(n,t)}};function wr(n,t){n.style.display=t?n[ua]:"none",n[Md]=!t}const R0=Symbol(""),C0=/(^|;)\s*display\s*:/;function P0(n,t,e){const i=n.style,s=Ze(e);let r=!1;if(e&&!s){if(t)if(Ze(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Zo(i,a,"")}else for(const o in t)e[o]==null&&Zo(i,o,"");for(const o in e)o==="display"&&(r=!0),Zo(i,o,e[o])}else if(s){if(t!==e){const o=i[R0];o&&(e+=";"+o),i.cssText=e,r=C0.test(e)}}else t&&n.removeAttribute("style");ua in n&&(n[ua]=r?i.display:"",n[Md]&&(i.display="none"))}const Xu=/\s*!important$/;function Zo(n,t,e){if(ee(e))e.forEach(i=>Zo(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=I0(n,t);Xu.test(e)?n.setProperty(Cs(i),e.replace(Xu,""),"important"):n[i]=e}}const qu=["Webkit","Moz","ms"],$a={};function I0(n,t){const e=$a[t];if(e)return e;let i=Rn(t);if(i!=="filter"&&i in n)return $a[t]=i;i=xa(i);for(let s=0;s<qu.length;s++){const r=qu[s]+i;if(r in n)return $a[t]=r}return t}const Yu="http://www.w3.org/1999/xlink";function $u(n,t,e,i,s,r=Fp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Yu,t.slice(6,t.length)):n.setAttributeNS(Yu,t,e):e==null||r&&!Ef(e)?n.removeAttribute(t):n.setAttribute(t,r?"":vr(e)?String(e):e)}function Ku(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?xd(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(o!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let r=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=Ef(e):e==null&&o==="string"?(e="",r=!0):o==="number"&&(e=0,r=!0)}try{n[t]=e}catch{}r&&n.removeAttribute(t)}function L0(n,t,e,i){n.addEventListener(t,e,i)}function D0(n,t,e,i){n.removeEventListener(t,e,i)}const ju=Symbol("_vei");function U0(n,t,e,i,s=null){const r=n[ju]||(n[ju]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=N0(t);if(i){const c=r[t]=B0(i,s);L0(n,a,c,l)}else o&&(D0(n,a,o,l),r[t]=void 0)}}const Zu=/(?:Once|Passive|Capture)$/;function N0(n){let t;if(Zu.test(n)){t={};let i;for(;i=n.match(Zu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Cs(n.slice(2)),t]}let Ka=0;const F0=Promise.resolve(),O0=()=>Ka||(F0.then(()=>Ka=0),Ka=Date.now());function B0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;ei(z0(i,e.value),t,5,[i])};return e.value=n,e.attached=O0(),e}function z0(n,t){if(ee(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,G0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?T0(n,i,o):t==="style"?P0(n,e,i):ga(t)?Fc(t)||U0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):H0(n,t,i,o))?(Ku(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&$u(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Ze(i))?Ku(n,Rn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),$u(n,t,i,o))};function H0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Ju(t)&&Qt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ju(t)&&Ze(e)?!1:t in n}const k0=tn({patchProp:G0},E0);let Qu;function V0(){return Qu||(Qu=Ym(k0))}const W0=(...n)=>{const t=V0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=q0(i);if(!s)return;const r=t._component;!Qt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,X0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function X0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function q0(n){return Ze(n)?document.querySelector(n):n}const Y0={id:"app"},$0=Wn({__name:"App",setup(n){const t=$t(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return si(()=>{window.addEventListener("mousemove",e)}),Qc(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const r=Pu("router-link"),o=Pu("router-view");return Ci(),Pi("div",Y0,[gm(Gt("nav",null,[Ve(r,{to:"/3d-bear-arts/leather"},{default:Vi(()=>s[0]||(s[0]=[Wi("Leather")])),_:1}),Ve(r,{to:"/3d-bear-arts/pop-art"},{default:Vi(()=>s[1]||(s[1]=[Wi("Pop MouseMove")])),_:1}),Ve(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Vi(()=>s[2]||(s[2]=[Wi("Pop3")])),_:1}),Ve(r,{to:"/3d-bear-arts/machine"},{default:Vi(()=>s[3]||(s[3]=[Wi("machine")])),_:1}),Ve(r,{to:"/3d-bear-arts/"},{default:Vi(()=>s[4]||(s[4]=[Wi("Water")])),_:1}),Ve(r,{to:"/3d-bear-arts/ghost-bear"},{default:Vi(()=>s[5]||(s[5]=[Wi("ghost")])),_:1}),Ve(r,{to:"/3d-bear-arts/white-ghost-bear"},{default:Vi(()=>s[6]||(s[6]=[Wi("white ghost")])),_:1})],512),[[A0,t.value]]),Ve(o)])}}}),Ii=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},K0=Ii($0,[["__scopeId","data-v-cf9150b8"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const js=typeof document<"u";function yd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function j0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&yd(n.default)}const me=Object.assign;function ja(n,t){const e={};for(const i in t){const s=t[i];e[i]=Hn(s)?s.map(n):n(s)}return e}const zr=()=>{},Hn=Array.isArray,Sd=/#/g,Z0=/&/g,J0=/\//g,Q0=/=/g,tg=/\?/g,wd=/\+/g,eg=/%5B/g,ng=/%5D/g,Ed=/%5E/g,ig=/%60/g,bd=/%7B/g,sg=/%7C/g,Td=/%7D/g,rg=/%20/g;function iu(n){return encodeURI(""+n).replace(sg,"|").replace(eg,"[").replace(ng,"]")}function og(n){return iu(n).replace(bd,"{").replace(Td,"}").replace(Ed,"^")}function Wl(n){return iu(n).replace(wd,"%2B").replace(rg,"+").replace(Sd,"%23").replace(Z0,"%26").replace(ig,"`").replace(bd,"{").replace(Td,"}").replace(Ed,"^")}function ag(n){return Wl(n).replace(Q0,"%3D")}function lg(n){return iu(n).replace(Sd,"%23").replace(tg,"%3F")}function cg(n){return n==null?"":lg(n).replace(J0,"%2F")}function Zr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const ug=/\/$/,hg=n=>n.replace(ug,"");function Za(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=n(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=mg(i??t,e),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Zr(o)}}function fg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function th(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function dg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&ur(t.matched[i],e.matched[s])&&Ad(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function ur(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Ad(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!pg(n[e],t[e]))return!1;return!0}function pg(n,t){return Hn(n)?eh(n,t):Hn(t)?eh(t,n):n===t}function eh(n,t){return Hn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function mg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Fi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Jr;(function(n){n.pop="pop",n.push="push"})(Jr||(Jr={}));var Gr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Gr||(Gr={}));function gg(n){if(!n)if(js){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),hg(n)}const _g=/^[^#]+#/;function vg(n,t){return n.replace(_g,"#")+t}function xg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ra=()=>({left:window.scrollX,top:window.scrollY});function Mg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=xg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function nh(n,t){return(history.state?history.state.position-t:-1)+n}const Xl=new Map;function yg(n,t){Xl.set(n,t)}function Sg(n){const t=Xl.get(n);return Xl.delete(n),t}let wg=()=>location.protocol+"//"+location.host;function Rd(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),th(l,"")}return th(e,n)+i+s}function Eg(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=Rd(n,location),_=e.value,x=t.value;let p=0;if(f){if(e.value=d,t.value=f,o&&o===_){o=null;return}p=x?f.position-x.position:0}else i(d);s.forEach(m=>{m(e.value,_,{delta:p,type:Jr.pop,direction:p?p>0?Gr.forward:Gr.back:Gr.unknown})})};function l(){o=e.value}function c(f){s.push(f);const d=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(d),d}function h(){const{history:f}=window;f.state&&f.replaceState(me({},f.state,{scroll:Ra()}),"")}function u(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function ih(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ra():null}}function bg(n){const{history:t,location:e}=window,i={value:Rd(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=n.indexOf("#"),f=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+l:wg()+n+l;try{t[h?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),e[h?"replace":"assign"](f)}}function o(l,c){const h=me({},t.state,ih(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=me({},s.value,t.state,{forward:l,scroll:Ra()});r(h.current,h,!0);const u=me({},ih(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Tg(n){n=gg(n);const t=bg(n),e=Eg(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=me({location:"",base:n,go:i,createHref:vg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Ag(n){return typeof n=="string"||n&&typeof n=="object"}function Cd(n){return typeof n=="string"||typeof n=="symbol"}const Pd=Symbol("");var sh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(sh||(sh={}));function hr(n,t){return me(new Error,{type:n,[Pd]:!0},t)}function hi(n,t){return n instanceof Error&&Pd in n&&(t==null||!!(n.type&t))}const rh="[^/]+?",Rg={sensitive:!1,strict:!1,start:!0,end:!0},Cg=/[.+*?^${}()[\]/\\]/g;function Pg(n,t){const e=me({},Rg,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const h=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const f=c[u];let d=40+(e.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(Cg,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:x,optional:p,regexp:m}=f;r.push({name:_,repeatable:x,optional:p});const b=m||rh;if(b!==rh){d+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+w.message)}}let S=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(S=p&&c.length<2?`(?:/${S})`:"/"+S),p&&(S+="?"),s+=S,d+=20,p&&(d+=-8),x&&(d+=-20),b===".*"&&(d+=-50)}h.push(d)}i.push(h)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let f=1;f<h.length;f++){const d=h[f]||"",_=r[f-1];u[_.name]=d&&_.repeatable?d.split("/"):d}return u}function l(c){let h="",u=!1;for(const f of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const d of f)if(d.type===0)h+=d.value;else if(d.type===1){const{value:_,repeatable:x,optional:p}=d,m=_ in c?c[_]:"";if(Hn(m)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Hn(m)?m.join("/"):m;if(!b)if(p)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Ig(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Id(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=Ig(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(oh(i))return 1;if(oh(s))return-1}return s.length-i.length}function oh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Lg={type:0,value:""},Dg=/[a-zA-Z0-9_]/;function Ug(n){if(!n)return[[]];if(n==="/")return[[Lg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=0,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(e===0?r.push({type:0,value:c}):e===1||e===2||e===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),e=1):f();break;case 4:f(),e=i;break;case 1:l==="("?e=2:Dg.test(l)?f():(u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:e=3:h+=l;break;case 3:u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function Ng(n,t,e){const i=Pg(Ug(n.path),e),s=me(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Fg(n,t){const e=[],i=new Map;t=uh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,f,d){const _=!d,x=lh(u);x.aliasOf=d&&d.record;const p=uh(t,u),m=[x];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of w)m.push(lh(me({},x,{components:d?d.record.components:x.components,path:F,aliasOf:d?d.record:x})))}let b,S;for(const w of m){const{path:F}=w;if(f&&F[0]!=="/"){const P=f.record.path,R=P[P.length-1]==="/"?"":"/";w.path=f.record.path+(F&&R+F)}if(b=Ng(w,f,p),d?d.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),_&&u.name&&!ch(b)&&o(u.name)),Ld(b)&&l(b),x.children){const P=x.children;for(let R=0;R<P.length;R++)r(P[R],b,d&&d.children[R])}d=d||b}return S?()=>{o(S)}:zr}function o(u){if(Cd(u)){const f=i.get(u);f&&(i.delete(u),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(u);f>-1&&(e.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){const f=zg(u,e);e.splice(f,0,u),u.record.name&&!ch(u)&&i.set(u.record.name,u)}function c(u,f){let d,_={},x,p;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw hr(1,{location:u});p=d.record.name,_=me(ah(f.params,d.keys.filter(S=>!S.optional).concat(d.parent?d.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&ah(u.params,d.keys.map(S=>S.name))),x=d.stringify(_)}else if(u.path!=null)x=u.path,d=e.find(S=>S.re.test(x)),d&&(_=d.parse(x),p=d.record.name);else{if(d=f.name?i.get(f.name):e.find(S=>S.re.test(f.path)),!d)throw hr(1,{location:u,currentLocation:f});p=d.record.name,_=me({},f.params,u.params),x=d.stringify(_)}const m=[];let b=d;for(;b;)m.unshift(b.record),b=b.parent;return{name:p,path:x,params:_,matched:m,meta:Bg(m)}}n.forEach(u=>r(u));function h(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function ah(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function lh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Og(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Og(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function ch(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Bg(n){return n.reduce((t,e)=>me(t,e.meta),{})}function uh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function zg(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;Id(n,t[r])<0?i=r:e=r+1}const s=Gg(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function Gg(n){let t=n;for(;t=t.parent;)if(Ld(t)&&Id(n,t)===0)return t}function Ld({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Hg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(wd," "),o=r.indexOf("="),a=Zr(o<0?r:r.slice(0,o)),l=o<0?null:Zr(r.slice(o+1));if(a in t){let c=t[a];Hn(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function hh(n){let t="";for(let e in n){const i=n[e];if(e=ag(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Hn(i)?i.map(r=>r&&Wl(r)):[i&&Wl(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function kg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Hn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Vg=Symbol(""),fh=Symbol(""),su=Symbol(""),Dd=Symbol(""),ql=Symbol("");function Er(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Yi(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(hr(4,{from:e,to:t})):f instanceof Error?l(f):Ag(f)?l(hr(2,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},h=r(()=>n.call(i&&i.instances[s],t,e,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(f=>l(f))})}function Ja(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(yd(l)){const h=(l.__vccOpts||l)[t];h&&r.push(Yi(h,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=j0(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const d=(u.__vccOpts||u)[t];return d&&Yi(d,e,i,o,a,s)()}))}}return r}function dh(n){const t=Ei(su),e=Ei(Dd),i=Nn(()=>{const l=nr(n.to);return t.resolve(l)}),s=Nn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=e.matched;if(!h||!u.length)return-1;const f=u.findIndex(ur.bind(null,h));if(f>-1)return f;const d=ph(l[c-2]);return c>1&&ph(h)===d&&u[u.length-1].path!==d?u.findIndex(ur.bind(null,l[c-2])):f}),r=Nn(()=>s.value>-1&&Yg(e.params,i.value.params)),o=Nn(()=>s.value>-1&&s.value===e.matched.length-1&&Ad(e.params,i.value.params));function a(l={}){return qg(l)?t[nr(n.replace)?"replace":"push"](nr(n.to)).catch(zr):Promise.resolve()}return{route:i,href:Nn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Wg=Wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dh,setup(n,{slots:t}){const e=ya(dh(n)),{options:i}=Ei(su),s=Nn(()=>({[mh(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[mh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&t.default(e);return n.custom?r:vd("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Xg=Wg;function qg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Yg(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Hn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ph(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const mh=(n,t,e)=>n??t??e,$g=Wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Ei(ql),s=Nn(()=>n.route||i.value),r=Ei(fh,0),o=Nn(()=>{let c=nr(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=Nn(()=>s.value.matched[o.value]);Ko(fh,Nn(()=>o.value+1)),Ko(Vg,a),Ko(ql,s);const l=$t();return He(()=>[l.value,a.value,n.name],([c,h,u],[f,d,_])=>{h&&(h.instances[u]=c,d&&d!==h&&c&&c===f&&(h.leaveGuards.size||(h.leaveGuards=d.leaveGuards),h.updateGuards.size||(h.updateGuards=d.updateGuards))),c&&h&&(!d||!ur(h,d)||!f)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,f=u&&u.components[h];if(!f)return gh(e.default,{Component:f,route:c});const d=u.props[h],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=vd(f,me({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return gh(e.default,{Component:p,route:c})||p}}});function gh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Kg=$g;function jg(n){const t=Fg(n.routes,n),e=n.parseQuery||Hg,i=n.stringifyQuery||hh,s=n.history,r=Er(),o=Er(),a=Er(),l=$o(Fi);let c=Fi;js&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ja.bind(null,N=>""+N),u=ja.bind(null,cg),f=ja.bind(null,Zr);function d(N,lt){let st,ht;return Cd(N)?(st=t.getRecordMatcher(N),ht=lt):ht=N,t.addRoute(ht,st)}function _(N){const lt=t.getRecordMatcher(N);lt&&t.removeRoute(lt)}function x(){return t.getRoutes().map(N=>N.record)}function p(N){return!!t.getRecordMatcher(N)}function m(N,lt){if(lt=me({},lt||l.value),typeof N=="string"){const T=Za(e,N,lt.path),I=t.resolve({path:T.path},lt),U=s.createHref(T.fullPath);return me(T,I,{params:f(I.params),hash:Zr(T.hash),redirectedFrom:void 0,href:U})}let st;if(N.path!=null)st=me({},N,{path:Za(e,N.path,lt.path).path});else{const T=me({},N.params);for(const I in T)T[I]==null&&delete T[I];st=me({},N,{params:u(T)}),lt.params=u(lt.params)}const ht=t.resolve(st,lt),wt=N.hash||"";ht.params=h(f(ht.params));const tt=fg(i,me({},N,{hash:og(wt),path:ht.path})),g=s.createHref(tt);return me({fullPath:tt,hash:wt,query:i===hh?kg(N.query):N.query||{}},ht,{redirectedFrom:void 0,href:g})}function b(N){return typeof N=="string"?Za(e,N,l.value.path):me({},N)}function S(N,lt){if(c!==N)return hr(8,{from:lt,to:N})}function w(N){return R(N)}function F(N){return w(me(b(N),{replace:!0}))}function P(N){const lt=N.matched[N.matched.length-1];if(lt&&lt.redirect){const{redirect:st}=lt;let ht=typeof st=="function"?st(N):st;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=b(ht):{path:ht},ht.params={}),me({query:N.query,hash:N.hash,params:ht.path!=null?{}:N.params},ht)}}function R(N,lt){const st=c=m(N),ht=l.value,wt=N.state,tt=N.force,g=N.replace===!0,T=P(st);if(T)return R(me(b(T),{state:typeof T=="object"?me({},wt,T.state):wt,force:tt,replace:g}),lt||st);const I=st;I.redirectedFrom=lt;let U;return!tt&&dg(i,ht,st)&&(U=hr(16,{to:I,from:ht}),gt(ht,ht,!0,!1)),(U?Promise.resolve(U):M(I,ht)).catch(D=>hi(D)?hi(D,2)?D:yt(D):X(D,I,ht)).then(D=>{if(D){if(hi(D,2))return R(me({replace:g},b(D.to),{state:typeof D.to=="object"?me({},wt,D.to.state):wt,force:tt}),lt||I)}else D=K(I,ht,!0,g,wt);return E(I,ht,D),D})}function O(N,lt){const st=S(N,lt);return st?Promise.reject(st):Promise.resolve()}function nt(N){const lt=ot.values().next().value;return lt&&typeof lt.runWithContext=="function"?lt.runWithContext(N):N()}function M(N,lt){let st;const[ht,wt,tt]=Zg(N,lt);st=Ja(ht.reverse(),"beforeRouteLeave",N,lt);for(const T of ht)T.leaveGuards.forEach(I=>{st.push(Yi(I,N,lt))});const g=O.bind(null,N,lt);return st.push(g),St(st).then(()=>{st=[];for(const T of r.list())st.push(Yi(T,N,lt));return st.push(g),St(st)}).then(()=>{st=Ja(wt,"beforeRouteUpdate",N,lt);for(const T of wt)T.updateGuards.forEach(I=>{st.push(Yi(I,N,lt))});return st.push(g),St(st)}).then(()=>{st=[];for(const T of tt)if(T.beforeEnter)if(Hn(T.beforeEnter))for(const I of T.beforeEnter)st.push(Yi(I,N,lt));else st.push(Yi(T.beforeEnter,N,lt));return st.push(g),St(st)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),st=Ja(tt,"beforeRouteEnter",N,lt,nt),st.push(g),St(st))).then(()=>{st=[];for(const T of o.list())st.push(Yi(T,N,lt));return st.push(g),St(st)}).catch(T=>hi(T,8)?T:Promise.reject(T))}function E(N,lt,st){a.list().forEach(ht=>nt(()=>ht(N,lt,st)))}function K(N,lt,st,ht,wt){const tt=S(N,lt);if(tt)return tt;const g=lt===Fi,T=js?history.state:{};st&&(ht||g?s.replace(N.fullPath,me({scroll:g&&T&&T.scroll},wt)):s.push(N.fullPath,wt)),l.value=N,gt(N,lt,st,g),yt()}let H;function Z(){H||(H=s.listen((N,lt,st)=>{if(!dt.listening)return;const ht=m(N),wt=P(ht);if(wt){R(me(wt,{replace:!0}),ht).catch(zr);return}c=ht;const tt=l.value;js&&yg(nh(tt.fullPath,st.delta),Ra()),M(ht,tt).catch(g=>hi(g,12)?g:hi(g,2)?(R(g.to,ht).then(T=>{hi(T,20)&&!st.delta&&st.type===Jr.pop&&s.go(-1,!1)}).catch(zr),Promise.reject()):(st.delta&&s.go(-st.delta,!1),X(g,ht,tt))).then(g=>{g=g||K(ht,tt,!1),g&&(st.delta&&!hi(g,8)?s.go(-st.delta,!1):st.type===Jr.pop&&hi(g,20)&&s.go(-1,!1)),E(ht,tt,g)}).catch(zr)}))}let at=Er(),V=Er(),Q;function X(N,lt,st){yt(N);const ht=V.list();return ht.length?ht.forEach(wt=>wt(N,lt,st)):console.error(N),Promise.reject(N)}function mt(){return Q&&l.value!==Fi?Promise.resolve():new Promise((N,lt)=>{at.add([N,lt])})}function yt(N){return Q||(Q=!N,Z(),at.list().forEach(([lt,st])=>N?st(N):lt()),at.reset()),N}function gt(N,lt,st,ht){const{scrollBehavior:wt}=n;if(!js||!wt)return Promise.resolve();const tt=!st&&Sg(nh(N.fullPath,0))||(ht||!st)&&history.state&&history.state.scroll||null;return Wf().then(()=>wt(N,lt,tt)).then(g=>g&&Mg(g)).catch(g=>X(g,N,lt))}const Pt=N=>s.go(N);let Bt;const ot=new Set,dt={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:x,resolve:m,options:n,push:w,replace:F,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:mt,install(N){const lt=this;N.component("RouterLink",Xg),N.component("RouterView",Kg),N.config.globalProperties.$router=lt,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>nr(l)}),js&&!Bt&&l.value===Fi&&(Bt=!0,w(s.location).catch(wt=>{}));const st={};for(const wt in Fi)Object.defineProperty(st,wt,{get:()=>l.value[wt],enumerable:!0});N.provide(su,lt),N.provide(Dd,zf(st)),N.provide(ql,l);const ht=N.unmount;ot.add(N),N.unmount=function(){ot.delete(N),ot.size<1&&(c=Fi,H&&H(),H=null,l.value=Fi,Bt=!1,Q=!1),ht()}}};function St(N){return N.reduce((lt,st)=>lt.then(()=>nt(st)),Promise.resolve())}return dt}function Zg(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>ur(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>ur(c,l))||s.push(l))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ru="169",Jg=0,_h=1,Qg=2,Ud=1,t_=2,vi=3,Ji=0,_n=1,ce=2,Ki=0,rr=1,vh=2,xh=3,Mh=4,e_=5,Ms=100,n_=101,i_=102,s_=103,r_=104,o_=200,a_=201,l_=202,c_=203,Yl=204,$l=205,u_=206,h_=207,f_=208,d_=209,p_=210,m_=211,g_=212,__=213,v_=214,Kl=0,jl=1,Zl=2,fr=3,Jl=4,Ql=5,tc=6,ec=7,Nd=0,x_=1,M_=2,ji=0,y_=1,S_=2,w_=3,E_=4,b_=5,T_=6,A_=7,Fd=300,dr=301,pr=302,Qr=303,nc=304,Ca=306,Ue=1e3,Ss=1001,ic=1002,An=1003,R_=1004,yo=1005,Fn=1006,Qa=1007,ws=1008,bi=1009,Od=1010,Bd=1011,to=1012,ou=1013,Ts=1014,yi=1015,lo=1016,au=1017,lu=1018,mr=1020,zd=35902,Gd=1021,Hd=1022,Bn=1023,kd=1024,Vd=1025,or=1026,gr=1027,Wd=1028,cu=1029,Xd=1030,uu=1031,hu=1033,Jo=33776,Qo=33777,ta=33778,ea=33779,sc=35840,rc=35841,oc=35842,ac=35843,lc=36196,cc=37492,uc=37496,hc=37808,fc=37809,dc=37810,pc=37811,mc=37812,gc=37813,_c=37814,vc=37815,xc=37816,Mc=37817,yc=37818,Sc=37819,wc=37820,Ec=37821,na=36492,bc=36494,Tc=36495,qd=36283,Ac=36284,Rc=36285,Cc=36286,C_=3200,P_=3201,Yd=0,I_=1,$i="",jn="srgb",es="srgb-linear",fu="display-p3",Pa="display-p3-linear",ha="linear",Ae="srgb",fa="rec709",da="p3",Ns=7680,yh=519,L_=512,D_=513,U_=514,$d=515,N_=516,F_=517,O_=518,B_=519,Sh=35044,wh="300 es",Si=2e3,pa=2001;class xr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eh=1234567;const Hr=Math.PI/180,eo=180/Math.PI;function Ps(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function je(n,t,e){return Math.max(t,Math.min(e,n))}function du(n,t){return(n%t+t)%t}function z_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function G_(n,t,e){return n!==t?(e-n)/(t-n):0}function kr(n,t,e){return(1-e)*n+e*t}function H_(n,t,e,i){return kr(n,t,1-Math.exp(-e*i))}function k_(n,t=1){return t-Math.abs(du(n,t*2)-t)}function V_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function W_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function X_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function q_(n,t){return n+Math.random()*(t-n)}function Y_(n){return n*(.5-Math.random())}function $_(n){n!==void 0&&(Eh=n);let t=Eh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function K_(n){return n*Hr}function j_(n){return n*eo}function Z_(n){return(n&n-1)===0&&n!==0}function J_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Q_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tv(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const re={DEG2RAD:Hr,RAD2DEG:eo,generateUUID:Ps,clamp:je,euclideanModulo:du,mapLinear:z_,inverseLerp:G_,lerp:kr,damp:H_,pingpong:k_,smoothstep:V_,smootherstep:W_,randInt:X_,randFloat:q_,randFloatSpread:Y_,seededRandom:$_,degToRad:K_,radToDeg:j_,isPowerOfTwo:Z_,ceilPowerOfTwo:J_,floorPowerOfTwo:Q_,setQuaternionFromProperEuler:tv,normalize:un,denormalize:Zs};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,i,s,r,o,a,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],_=i[8],x=s[0],p=s[3],m=s[6],b=s[1],S=s[4],w=s[7],F=s[2],P=s[5],R=s[8];return r[0]=o*x+a*b+l*F,r[3]=o*p+a*S+l*P,r[6]=o*m+a*w+l*R,r[1]=c*x+h*b+u*F,r[4]=c*p+h*S+u*P,r[7]=c*m+h*w+u*R,r[2]=f*x+d*b+_*F,r[5]=f*p+d*S+_*P,r[8]=f*m+d*w+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,_=e*u+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tl.makeScale(t,e)),this}rotate(t){return this.premultiply(tl.makeRotation(-t)),this}translate(t,e){return this.premultiply(tl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new ie;function Kd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ev(){const n=no("canvas");return n.style.display="block",n}const bh={};function ia(n){n in bh||(bh[n]=!0,console.warn(n))}function nv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function iv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Th=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ah=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[es]:{transfer:ha,primaries:fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[jn]:{transfer:Ae,primaries:fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pa]:{transfer:ha,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ah),fromReference:n=>n.applyMatrix3(Th)},[fu]:{transfer:Ae,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ah),fromReference:n=>n.applyMatrix3(Th).convertLinearToSRGB()}},rv=new Set([es,Pa]),fe={enabled:!0,_workingColorSpace:es,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!rv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=br[t].toReference,s=br[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return br[n].primaries},getTransfer:function(n){return n===$i?ha:br[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(br[t].luminanceCoefficients)}};function ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function el(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fs;class ov{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fs===void 0&&(Fs=no("canvas")),Fs.width=t.width,Fs.height=t.height;const i=Fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=no("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ar(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ar(e[i]/255)*255):e[i]=ar(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let av=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function nl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ov.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lv=0;class mn extends xr{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,i=Ss,s=Ss,r=Fn,o=ws,a=Bn,l=bi,c=mn.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Ps(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ue:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ue:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Fd;mn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,w=(d+1)/2,F=(m+1)/2,P=(h+f)/4,R=(u+x)/4,O=(_+p)/4;return S>w&&S>F?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=P/i,r=R/i):w>F?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=O/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=R/r,s=O/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cv extends xr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends cv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Zd extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uv extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class co{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==_){let p=1-a;const m=l*f+c*d+h*_+u*x,b=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const F=Math.sqrt(S),P=Math.atan2(F,m*b);p=Math.sin(p*P)/F,a=Math.sin(a*P)/F}const w=a*b;if(l=l*p+f*w,c=c*p+d*w,h=h*p+_*w,u=u*p+x*w,p===1-a){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-a*d,t[e+2]=c*_+h*d+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return il.copy(this).projectOnVector(t),this.sub(il)}reflect(t){return this.sub(il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const il=new q,Rh=new co;class uo{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),wo.subVectors(this.max,Tr),Os.subVectors(t.a,Tr),Bs.subVectors(t.b,Tr),zs.subVectors(t.c,Tr),Oi.subVectors(Bs,Os),Bi.subVectors(zs,Bs),hs.subVectors(Os,zs);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-hs.z,hs.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,hs.z,0,-hs.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-hs.y,hs.x,0];return!sl(e,Os,Bs,zs,wo)||(e=[1,0,0,0,1,0,0,0,1],!sl(e,Os,Bs,zs,wo))?!1:(Eo.crossVectors(Oi,Bi),e=[Eo.x,Eo.y,Eo.z],sl(e,Os,Bs,zs,wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new q,new q,new q,new q,new q,new q,new q,new q],Ln=new q,So=new uo,Os=new q,Bs=new q,zs=new q,Oi=new q,Bi=new q,hs=new q,Tr=new q,wo=new q,Eo=new q,fs=new q;function sl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fs.fromArray(n,r);const a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),h=i.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hv=new uo,Ar=new q,rl=new q;class pu{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):hv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(rl)),this.expandByPoint(Ar.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new q,ol=new q,bo=new q,zi=new q,al=new q,To=new q,ll=new q;class fv{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ol.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(ol);const r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=zi.dot(this.direction),l=-zi.dot(bo),c=zi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ol).addScaledVector(bo,f),d}intersectSphere(t,e){di.subVectors(t.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,i,s,r){al.subVectors(e,t),To.subVectors(i,t),ll.crossVectors(al,To);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);const l=a*this.direction.dot(To.crossVectors(zi,To));if(l<0)return null;const c=a*this.direction.dot(al.cross(zi));if(c<0||l+c>o)return null;const h=-a*zi.dot(ll);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,_,x,p){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,_,x,p)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,_,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),o=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,_=c*h,x=c*u;e[0]=f+x*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,_=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,x=a*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dv,t,pv)}lookAt(t,e,i){const s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Gi.crossVectors(i,vn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Gi.crossVectors(i,vn)),Gi.normalize(),Ao.crossVectors(vn,Gi),s[0]=Gi.x,s[4]=Ao.x,s[8]=vn.x,s[1]=Gi.y,s[5]=Ao.y,s[9]=vn.y,s[2]=Gi.z,s[6]=Ao.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],_=i[2],x=i[6],p=i[10],m=i[14],b=i[3],S=i[7],w=i[11],F=i[15],P=s[0],R=s[4],O=s[8],nt=s[12],M=s[1],E=s[5],K=s[9],H=s[13],Z=s[2],at=s[6],V=s[10],Q=s[14],X=s[3],mt=s[7],yt=s[11],gt=s[15];return r[0]=o*P+a*M+l*Z+c*X,r[4]=o*R+a*E+l*at+c*mt,r[8]=o*O+a*K+l*V+c*yt,r[12]=o*nt+a*H+l*Q+c*gt,r[1]=h*P+u*M+f*Z+d*X,r[5]=h*R+u*E+f*at+d*mt,r[9]=h*O+u*K+f*V+d*yt,r[13]=h*nt+u*H+f*Q+d*gt,r[2]=_*P+x*M+p*Z+m*X,r[6]=_*R+x*E+p*at+m*mt,r[10]=_*O+x*K+p*V+m*yt,r[14]=_*nt+x*H+p*Q+m*gt,r[3]=b*P+S*M+w*Z+F*X,r[7]=b*R+S*E+w*at+F*mt,r[11]=b*O+S*K+w*V+F*yt,r[15]=b*nt+S*H+w*Q+F*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],x=t[7],p=t[11],m=t[15];return _*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],x=t[13],p=t[14],m=t[15],b=u*p*c-x*f*c+x*l*d-a*p*d-u*l*m+a*f*m,S=_*f*c-h*p*c-_*l*d+o*p*d+h*l*m-o*f*m,w=h*x*c-_*u*c+_*a*d-o*x*d-h*a*m+o*u*m,F=_*u*l-h*x*l-_*a*f+o*x*f+h*a*p-o*u*p,P=e*b+i*S+s*w+r*F;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=b*R,t[1]=(x*f*r-u*p*r-x*s*d+i*p*d+u*s*m-i*f*m)*R,t[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*m+i*l*m)*R,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*R,t[4]=S*R,t[5]=(h*p*r-_*f*r+_*s*d-e*p*d-h*s*m+e*f*m)*R,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*m-e*l*m)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=w*R,t[9]=(_*u*r-h*x*r-_*i*d+e*x*d+h*i*m-e*u*m)*R,t[10]=(o*x*r-_*a*r+_*i*c-e*x*c-o*i*m+e*a*m)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*R,t[12]=F*R,t[13]=(h*x*s-_*u*s+_*i*f-e*x*f-h*i*p+e*u*p)*R,t[14]=(_*a*s-o*x*s-_*i*l+e*x*l+o*i*p-e*a*p)*R,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,_=r*u,x=o*h,p=o*u,m=a*u,b=l*c,S=l*h,w=l*u,F=i.x,P=i.y,R=i.z;return s[0]=(1-(x+m))*F,s[1]=(d+w)*F,s[2]=(_-S)*F,s[3]=0,s[4]=(d-w)*P,s[5]=(1-(f+m))*P,s[6]=(p+b)*P,s[7]=0,s[8]=(_+S)*R,s[9]=(p-b)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Gs.set(s[0],s[1],s[2]).length();const o=Gs.set(s[4],s[5],s[6]).length(),a=Gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const c=1/r,h=1/o,u=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Si){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let d,_;if(a===Si)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===pa)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Si){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,d=(i+s)*h;let _,x;if(a===Si)_=(o+r)*u,x=-2*u;else if(a===pa)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Gs=new q,Dn=new Ce,dv=new q(0,0,0),pv=new q(1,1,1),Gi=new q,Ao=new q,vn=new q,Ch=new Ce,Ph=new co;class ni{constructor(t=0,e=0,i=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ch,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Jd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mv=0;const Ih=new q,Hs=new co,pi=new Ce,Ro=new q,Rr=new q,gv=new q,_v=new co,Lh=new q(1,0,0),Dh=new q(0,1,0),Uh=new q(0,0,1),Nh={type:"added"},vv={type:"removed"},ks={type:"childadded",child:null},cl={type:"childremoved",child:null};class an extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new q,e=new ni,i=new co,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ie}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Uh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ro.copy(t):Ro.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Rr,Ro,this.up):pi.lookAt(Ro,Rr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(pi),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nh),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vv),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nh),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,gv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,_v,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}an.DEFAULT_UP=new q(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new q,mi=new q,ul=new q,gi=new q,Vs=new q,Ws=new q,Fh=new q,hl=new q,fl=new q,dl=new q,pl=new ve,ml=new ve,gl=new ve;class On{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Un.subVectors(t,e),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Un.subVectors(s,e),mi.subVectors(i,e),ul.subVectors(t,e);const o=Un.dot(Un),a=Un.dot(mi),l=Un.dot(ul),c=mi.dot(mi),h=mi.dot(ul),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(t,e),ml.fromBufferAttribute(t,i),gl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(t,e,i,s){return Un.subVectors(i,e),mi.subVectors(t,e),Un.cross(mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Un.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return On.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Vs.subVectors(s,i),Ws.subVectors(r,i),hl.subVectors(t,i);const l=Vs.dot(hl),c=Ws.dot(hl);if(l<=0&&c<=0)return e.copy(i);fl.subVectors(t,s);const h=Vs.dot(fl),u=Ws.dot(fl);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Vs,o);dl.subVectors(t,r);const d=Vs.dot(dl),_=Ws.dot(dl);if(_>=0&&d<=_)return e.copy(r);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ws,a);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return Fh.subVectors(r,s),a=(u-h)/(u-h+(d-_)),e.copy(s).addScaledVector(Fh,a);const m=1/(p+x+f);return o=x*m,a=f*m,e.copy(i).addScaledVector(Vs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function _l(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=fe.workingColorSpace){if(t=du(t,1),e=je(e,0,1),i=je(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=_l(o,r,t+1/3),this.g=_l(o,r,t),this.b=_l(o,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=jn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jn){const i=Qd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=el(t.r),this.g=el(t.g),this.b=el(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return fe.fromWorkingColorSpace(sn.copy(this),t),Math.round(je(sn.r*255,0,255))*65536+Math.round(je(sn.g*255,0,255))*256+Math.round(je(sn.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(sn.copy(this),e);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=jn){fe.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,i=sn.g,s=sn.b;return t!==jn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Co);const i=kr(Hi.h,Co.h,e),s=kr(Hi.s,Co.s,e),r=kr(Hi.l,Co.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new oe;oe.NAMES=Qd;let xv=0;class ho extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=rr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=$l,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yl&&(i.blendSrc=this.blendSrc),this.blendDst!==$l&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kn extends ho{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new q,Po=new Ut;class ti{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=un(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),i=un(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),i=un(i,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sh&&(t.usage=this.usage),t}}class tp extends ti{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ep extends ti{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ne extends ti{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Mv=0;const Tn=new Ce,vl=new an,Xs=new q,xn=new uo,Cr=new uo,$e=new q;class Pn extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kd(t)?ep:tp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,i){return Tn.makeTranslation(t,e,i),this.applyMatrix4(Tn),this}scale(t,e,i){return Tn.makeScale(t,e,i),this.applyMatrix4(Tn),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(xn.min,Cr.min),xn.expandByPoint($e),$e.addVectors(xn.max,Cr.max),xn.expandByPoint($e)):(xn.expandByPoint(Cr.min),xn.expandByPoint(Cr.max))}xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(t,c),$e.add(Xs)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new q,l[O]=new q;const c=new q,h=new q,u=new q,f=new Ut,d=new Ut,_=new Ut,x=new q,p=new q;function m(O,nt,M){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,nt),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,O),d.fromBufferAttribute(r,nt),_.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const E=1/(d.x*_.y-_.x*d.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(E),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(E),a[O].add(x),a[nt].add(x),a[M].add(x),l[O].add(p),l[nt].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let O=0,nt=b.length;O<nt;++O){const M=b[O],E=M.start,K=M.count;for(let H=E,Z=E+K;H<Z;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const S=new q,w=new q,F=new q,P=new q;function R(O){F.fromBufferAttribute(s,O),P.copy(F);const nt=a[O];S.copy(nt),S.sub(F.multiplyScalar(F.dot(nt))).normalize(),w.crossVectors(P,nt);const E=w.dot(l[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,E)}for(let O=0,nt=b.length;O<nt;++O){const M=b[O],E=M.start,K=M.count;for(let H=E,Z=E+K;H<Z;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[_++]=c[d++]}return new ti(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oh=new Ce,ds=new fv,Io=new pu,Bh=new q,Lo=new q,Do=new q,Uo=new q,xl=new q,No=new q,zh=new q,Fo=new q;class L extends an{constructor(t=new Pn,e=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(xl.fromBufferAttribute(u,t),o?No.addScaledVector(xl,h):No.addScaledVector(xl.sub(e),h))}e.add(No)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),ds.copy(t.ray).recast(t.near),!(Io.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Io,Bh)===null||ds.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(Oh.copy(r).invert(),ds.copy(t.ray).applyMatrix4(Oh),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],m=o[p.materialIndex],b=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let w=b,F=S;w<F;w+=3){const P=a.getX(w),R=a.getX(w+1),O=a.getX(w+2);s=Oo(this,m,t,i,c,h,u,P,R,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=_,m=x;p<m;p+=3){const b=a.getX(p),S=a.getX(p+1),w=a.getX(p+2);s=Oo(this,o,t,i,c,h,u,b,S,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],m=o[p.materialIndex],b=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let w=b,F=S;w<F;w+=3){const P=w,R=w+1,O=w+2;s=Oo(this,m,t,i,c,h,u,P,R,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=_,m=x;p<m;p+=3){const b=p,S=p+1,w=p+2;s=Oo(this,o,t,i,c,h,u,b,S,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function yv(n,t,e,i,s,r,o,a){let l;if(t.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ji,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:n}}function Oo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Lo),n.getVertexPosition(l,Do),n.getVertexPosition(c,Uo);const h=yv(n,t,e,i,Lo,Do,Uo,zh);if(h){const u=new q;On.getBarycoord(zh,Lo,Do,Uo,u),s&&(h.uv=On.getInterpolatedAttribute(s,a,l,c,u,new Ut)),r&&(h.uv1=On.getInterpolatedAttribute(r,a,l,c,u,new Ut)),o&&(h.normal=On.getInterpolatedAttribute(o,a,l,c,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};On.getNormal(Lo,Do,Uo,f.normal),h.face=f,h.barycoord=u}return h}class Is extends Pn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function _(x,p,m,b,S,w,F,P,R,O,nt){const M=w/R,E=F/O,K=w/2,H=F/2,Z=P/2,at=R+1,V=O+1;let Q=0,X=0;const mt=new q;for(let yt=0;yt<V;yt++){const gt=yt*E-H;for(let Pt=0;Pt<at;Pt++){const Bt=Pt*M-K;mt[x]=Bt*b,mt[p]=gt*S,mt[m]=Z,c.push(mt.x,mt.y,mt.z),mt[x]=0,mt[p]=0,mt[m]=P>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Pt/R),u.push(1-yt/O),Q+=1}}for(let yt=0;yt<O;yt++)for(let gt=0;gt<R;gt++){const Pt=f+gt+at*yt,Bt=f+gt+at*(yt+1),ot=f+(gt+1)+at*(yt+1),dt=f+(gt+1)+at*yt;l.push(Pt,Bt,dt),l.push(Bt,ot,dt),X+=6}a.addGroup(d,X,nt),d+=X,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _r(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function hn(n){const t={};for(let e=0;e<n.length;e++){const i=_r(n[e]);for(const s in i)t[s]=i[s]}return t}function Sv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function np(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const wv={clone:_r,merge:hn};var Ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends ho{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ev,this.fragmentShader=bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=Sv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ip extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new q,Gh=new Ut,Hh=new Ut;class De extends ip{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Gh,Hh),e.subVectors(Hh,Gh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qs=-90,Ys=1;class Tv extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new De(qs,Ys,t,e);s.layers=this.layers,this.add(s);const r=new De(qs,Ys,t,e);r.layers=this.layers,this.add(r);const o=new De(qs,Ys,t,e);o.layers=this.layers,this.add(o);const a=new De(qs,Ys,t,e);a.layers=this.layers,this.add(a);const l=new De(qs,Ys,t,e);l.layers=this.layers,this.add(l);const c=new De(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class sp extends mn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Av extends As{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new sp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Is(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ki});r.uniforms.tEquirect.value=e;const o=new L(s,r),a=e.minFilter;return e.minFilter===ws&&(e.minFilter=Fn),new Tv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Ml=new q,Rv=new q,Cv=new ie;class vs{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ml.subVectors(i,e).cross(Rv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Cv.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new pu,Bo=new q;class mu{constructor(t=new vs,e=new vs,i=new vs,s=new vs,r=new vs,o=new vs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Si){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],x=s[10],p=s[11],m=s[12],b=s[13],S=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,p-d,w-m).normalize(),i[1].setComponents(l+r,f+c,p+d,w+m).normalize(),i[2].setComponents(l+o,f+h,p+_,w+b).normalize(),i[3].setComponents(l-o,f-h,p-_,w-b).normalize(),i[4].setComponents(l-a,f-u,p-x,w-S).normalize(),e===Si)i[5].setComponents(l+a,f+u,p+x,w+S).normalize();else if(e===pa)i[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Pv(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],x=u[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ia extends Pn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],_=[],x=[],p=[];for(let m=0;m<h;m++){const b=m*f-o;for(let S=0;S<c;S++){const w=S*u-r;_.push(w,-b,0),x.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const S=b+c*m,w=b+c*(m+1),F=b+1+c*(m+1),P=b+1+c*m;d.push(S,w,P),d.push(w,F,P)}this.setIndex(d),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.widthSegments,t.heightSegments)}}var Iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lv=`#ifdef USE_ALPHAHASH
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
#endif`,Dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
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
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zv=`#ifdef USE_BATCHING
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
#endif`,Gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
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
#endif`,Xv=`#ifdef USE_BUMPMAP
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tx=`#define PI 3.141592653589793
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
} // validated`,ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nx=`vec3 transformedNormal = objectNormal;
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
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`
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
}`,cx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
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
#endif`,wx=`#ifdef USE_ENVMAP
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
#endif`,Ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rx=`PhysicalMaterial material;
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
#endif`,Cx=`struct PhysicalMaterial {
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
}`,Px=`
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gx=`#if defined( USE_POINTS_UV )
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
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
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
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mM=`float getShadowMask() {
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
}`,gM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_M=`#ifdef USE_SKINNING
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
#endif`,vM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xM=`#ifdef USE_SKINNING
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
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
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
#endif`,bM=`#ifdef USE_TRANSMISSION
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
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IM=`uniform sampler2D t2D;
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
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
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
}`,OM=`#if DEPTH_PACKING == 3200
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
}`,BM=`#define DISTANCE
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
}`,zM=`#define DISTANCE
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`uniform float scale;
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
}`,VM=`uniform vec3 diffuse;
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
}`,WM=`#include <common>
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
}`,XM=`uniform vec3 diffuse;
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
}`,qM=`#define LAMBERT
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
}`,YM=`#define LAMBERT
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
}`,$M=`#define MATCAP
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
}`,KM=`#define MATCAP
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
}`,jM=`#define NORMAL
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
}`,ZM=`#define NORMAL
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
}`,JM=`#define PHONG
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
}`,QM=`#define PHONG
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
}`,ty=`#define STANDARD
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
}`,ey=`#define STANDARD
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
}`,ny=`#define TOON
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
}`,iy=`#define TOON
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
}`,sy=`uniform float size;
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
}`,ry=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,ay=`uniform vec3 color;
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
}`,ly=`uniform float rotation;
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
}`,cy=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Iv,alphahash_pars_fragment:Lv,alphamap_fragment:Dv,alphamap_pars_fragment:Uv,alphatest_fragment:Nv,alphatest_pars_fragment:Fv,aomap_fragment:Ov,aomap_pars_fragment:Bv,batching_pars_vertex:zv,batching_vertex:Gv,begin_vertex:Hv,beginnormal_vertex:kv,bsdfs:Vv,iridescence_fragment:Wv,bumpmap_pars_fragment:Xv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:$v,clipping_planes_vertex:Kv,color_fragment:jv,color_pars_fragment:Zv,color_pars_vertex:Jv,color_vertex:Qv,common:tx,cube_uv_reflection_fragment:ex,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:sx,emissivemap_fragment:rx,emissivemap_pars_fragment:ox,colorspace_fragment:ax,colorspace_pars_fragment:lx,envmap_fragment:cx,envmap_common_pars_fragment:ux,envmap_pars_fragment:hx,envmap_pars_vertex:fx,envmap_physical_pars_fragment:wx,envmap_vertex:dx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:_x,gradientmap_pars_fragment:vx,lightmap_pars_fragment:xx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:yx,lights_pars_begin:Sx,lights_toon_fragment:Ex,lights_toon_pars_fragment:bx,lights_phong_fragment:Tx,lights_phong_pars_fragment:Ax,lights_physical_fragment:Rx,lights_physical_pars_fragment:Cx,lights_fragment_begin:Px,lights_fragment_maps:Ix,lights_fragment_end:Lx,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Ux,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Fx,map_fragment:Ox,map_pars_fragment:Bx,map_particle_fragment:zx,map_particle_pars_fragment:Gx,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:kx,morphinstance_vertex:Vx,morphcolor_vertex:Wx,morphnormal_vertex:Xx,morphtarget_pars_vertex:qx,morphtarget_vertex:Yx,normal_fragment_begin:$x,normal_fragment_maps:Kx,normal_pars_fragment:jx,normal_pars_vertex:Zx,normal_vertex:Jx,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:eM,clearcoat_pars_fragment:nM,iridescence_pars_fragment:iM,opaque_fragment:sM,packing:rM,premultiplied_alpha_fragment:oM,project_vertex:aM,dithering_fragment:lM,dithering_pars_fragment:cM,roughnessmap_fragment:uM,roughnessmap_pars_fragment:hM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:dM,shadowmap_vertex:pM,shadowmask_pars_fragment:mM,skinbase_vertex:gM,skinning_pars_vertex:_M,skinning_vertex:vM,skinnormal_vertex:xM,specularmap_fragment:MM,specularmap_pars_fragment:yM,tonemapping_fragment:SM,tonemapping_pars_fragment:wM,transmission_fragment:EM,transmission_pars_fragment:bM,uv_pars_fragment:TM,uv_pars_vertex:AM,uv_vertex:RM,worldpos_vertex:CM,background_vert:PM,background_frag:IM,backgroundCube_vert:LM,backgroundCube_frag:DM,cube_vert:UM,cube_frag:NM,depth_vert:FM,depth_frag:OM,distanceRGBA_vert:BM,distanceRGBA_frag:zM,equirect_vert:GM,equirect_frag:HM,linedashed_vert:kM,linedashed_frag:VM,meshbasic_vert:WM,meshbasic_frag:XM,meshlambert_vert:qM,meshlambert_frag:YM,meshmatcap_vert:$M,meshmatcap_frag:KM,meshnormal_vert:jM,meshnormal_frag:ZM,meshphong_vert:JM,meshphong_frag:QM,meshphysical_vert:ty,meshphysical_frag:ey,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:sy,points_frag:ry,shadow_vert:oy,shadow_frag:ay,sprite_vert:ly,sprite_frag:cy},Dt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Jn={basic:{uniforms:hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:hn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:hn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:hn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:hn([Dt.points,Dt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:hn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:hn([Dt.common,Dt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:hn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:hn([Dt.sprite,Dt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:hn([Dt.common,Dt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:hn([Dt.lights,Dt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Jn.physical={uniforms:hn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const zo={r:0,b:0,g:0},ms=new ni,uy=new Ce;function hy(n,t,e,i,s,r,o){const a=new oe(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const w=_(b);w===null?m(a,l):w&&w.isColor&&(m(w,1),S=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===Ca)?(h===void 0&&(h=new L(new Is(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:_r(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ms.copy(S.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(ms)),h.material.toneMapped=fe.getTransfer(w.colorSpace)!==Ae,(u!==w||f!==w.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new L(new Ia(2,2),new ii({name:"BackgroundMaterial",uniforms:_r(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=fe.getTransfer(w.colorSpace)!==Ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,S){b.getRGB(zo,np(n)),i.buffers.color.setClear(zo.r,zo.g,zo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:p}}function fy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,E,K,H,Z){let at=!1;const V=u(H,K,E);r!==V&&(r=V,c(r.object)),at=d(M,H,K,Z),at&&_(M,H,K,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,w(M,E,K,H),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,E,K){const H=K.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let at=Z[E.id];at===void 0&&(at={},Z[E.id]=at);let V=at[H];return V===void 0&&(V=f(l()),at[H]=V),V}function f(M){const E=[],K=[],H=[];for(let Z=0;Z<e;Z++)E[Z]=0,K[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:K,attributeDivisors:H,object:M,attributes:{},index:null}}function d(M,E,K,H){const Z=r.attributes,at=E.attributes;let V=0;const Q=K.getAttributes();for(const X in Q)if(Q[X].location>=0){const yt=Z[X];let gt=at[X];if(gt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),yt===void 0||yt.attribute!==gt||gt&&yt.data!==gt.data)return!0;V++}return r.attributesNum!==V||r.index!==H}function _(M,E,K,H){const Z={},at=E.attributes;let V=0;const Q=K.getAttributes();for(const X in Q)if(Q[X].location>=0){let yt=at[X];yt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));const gt={};gt.attribute=yt,yt&&yt.data&&(gt.data=yt.data),Z[X]=gt,V++}r.attributes=Z,r.attributesNum=V,r.index=H}function x(){const M=r.newAttributes;for(let E=0,K=M.length;E<K;E++)M[E]=0}function p(M){m(M,0)}function m(M,E){const K=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;K[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),Z[M]!==E&&(n.vertexAttribDivisor(M,E),Z[M]=E)}function b(){const M=r.newAttributes,E=r.enabledAttributes;for(let K=0,H=E.length;K<H;K++)E[K]!==M[K]&&(n.disableVertexAttribArray(K),E[K]=0)}function S(M,E,K,H,Z,at,V){V===!0?n.vertexAttribIPointer(M,E,K,Z,at):n.vertexAttribPointer(M,E,K,H,Z,at)}function w(M,E,K,H){x();const Z=H.attributes,at=K.getAttributes(),V=E.defaultAttributeValues;for(const Q in at){const X=at[Q];if(X.location>=0){let mt=Z[Q];if(mt===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),mt!==void 0){const yt=mt.normalized,gt=mt.itemSize,Pt=t.get(mt);if(Pt===void 0)continue;const Bt=Pt.buffer,ot=Pt.type,dt=Pt.bytesPerElement,St=ot===n.INT||ot===n.UNSIGNED_INT||mt.gpuType===ou;if(mt.isInterleavedBufferAttribute){const N=mt.data,lt=N.stride,st=mt.offset;if(N.isInstancedInterleavedBuffer){for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht,N.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ht=0;ht<X.locationSize;ht++)p(X.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let ht=0;ht<X.locationSize;ht++)S(X.location+ht,gt/X.locationSize,ot,yt,lt*dt,(st+gt/X.locationSize*ht)*dt,St)}else{if(mt.isInstancedBufferAttribute){for(let N=0;N<X.locationSize;N++)m(X.location+N,mt.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let N=0;N<X.locationSize;N++)p(X.location+N);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let N=0;N<X.locationSize;N++)S(X.location+N,gt/X.locationSize,ot,yt,gt*dt,gt/X.locationSize*N*dt,St)}}else if(V!==void 0){const yt=V[Q];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(X.location,yt);break;case 3:n.vertexAttrib3fv(X.location,yt);break;case 4:n.vertexAttrib4fv(X.location,yt);break;default:n.vertexAttrib1fv(X.location,yt)}}}}b()}function F(){O();for(const M in i){const E=i[M];for(const K in E){const H=E[K];for(const Z in H)h(H[Z].object),delete H[Z];delete E[K]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const E=i[M.id];for(const K in E){const H=E[K];for(const Z in H)h(H[Z].object),delete H[Z];delete E[K]}delete i[M.id]}function R(M){for(const E in i){const K=i[E];if(K[M.id]===void 0)continue;const H=K[M.id];for(const Z in H)h(H[Z].object),delete H[Z];delete K[M.id]}}function O(){nt(),o=!0,r!==s&&(r=s,c(r.object))}function nt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:nt,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function dy(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<f.length;x++)e.update(_,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function py(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const O=R===lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==bi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yi&&!O)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:F,maxSamples:P}}function my(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new vs,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,S=b*4;let w=m.clippingState||null;l.value=w,w=h(_,f,S,d);for(let F=0;F!==S;++F)w[F]=e[F];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,_){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const m=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,w=d;S!==x;++S,w+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function gy(n){let t=new WeakMap;function e(o,a){return a===Qr?o.mapping=dr:a===nc&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qr||a===nc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Av(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class op extends ip{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qs=4,kh=[.125,.215,.35,.446,.526,.582],ys=20,yl=new op,Vh=new oe;let Sl=null,wl=0,El=0,bl=!1;const xs=(1+Math.sqrt(5))/2,$s=1/xs,Wh=[new q(-xs,$s,0),new q(xs,$s,0),new q(-$s,0,xs),new q($s,0,xs),new q(0,xs,-$s),new q(0,xs,$s),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Xh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Sl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sl,wl,El),this._renderer.xr.enabled=bl,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:lo,format:Bn,colorSpace:es,depthBuffer:!1},s=qh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_y(r)),this._blurMaterial=vy(r,t,e)}return s}_compileMaterial(t){const e=new L(this._lodPlanes[0],t);this._renderer.compile(e,yl)}_sceneToCubeUV(t,e,i,s){const a=new De(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Vh),h.toneMapping=ji,h.autoClear=!1;const d=new kn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new L(new Is,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(Vh),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;Go(s,b*S,m>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===dr||t.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new L(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Go(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,yl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wh[(s-r-1)%Wh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new L(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ys-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):ys;p>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ys}`);const m=[];let b=0;for(let R=0;R<ys;++R){const O=R/x,nt=Math.exp(-O*O/2);m.push(nt),R===0?b+=nt:R<p&&(b+=2*nt)}for(let R=0;R<m.length;R++)m[R]=m[R]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const w=this._sizeLods[s],F=3*w*(s>S-Qs?s-S+Qs:0),P=4*(this._cubeSize-w);Go(e,F,P,3*w,2*w),l.setRenderTarget(e),l.render(u,yl)}}function _y(n){const t=[],e=[],i=[];let s=n;const r=n-Qs+1+kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Qs?l=kh[o-n+Qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,x=3,p=2,m=1,b=new Float32Array(x*_*d),S=new Float32Array(p*_*d),w=new Float32Array(m*_*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,O=P>2?0:-1,nt=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];b.set(nt,x*_*P),S.set(f,p*_*P);const M=[P,P,P,P,P,P];w.set(M,m*_*P)}const F=new Pn;F.setAttribute("position",new ti(b,x)),F.setAttribute("uv",new ti(S,p)),F.setAttribute("faceIndex",new ti(w,m)),t.push(F),s>Qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function qh(n,t,e){const i=new As(n,t,e);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function vy(n,t,e){const i=new Float32Array(ys),s=new q(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Yh(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function $h(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function xy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qr||l===nc,h=l===dr||l===pr;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Xh(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Xh(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function My(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ia("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function yy(n,t,e,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const x=d[_];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,_=u.attributes.position;let x=0;if(d!==null){const b=d.array;x=d.version;for(let S=0,w=b.length;S<w;S+=3){const F=b[S+0],P=b[S+1],R=b[S+2];f.push(F,P,P,R,R,F)}}else if(_!==void 0){const b=_.array;x=_.version;for(let S=0,w=b.length/3-1;S<w;S+=3){const F=S+0,P=S+1,R=S+2;f.push(F,P,P,R,R,F)}}else return;const p=new(Kd(f)?ep:tp)(f,1);p.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Sy(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),e.update(d,i,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,i,1)}function u(f,d,_,x){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,_);let m=0;for(let b=0;b<_;b++)m+=d[b];for(let b=0;b<x.length;b++)e.update(m,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ey(n,t,e){const i=new WeakMap,s=new ve;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let M=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),p===!0&&(w=3);let F=a.attributes.position.count*w,P=1;F>t.maxTextureSize&&(P=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const R=new Float32Array(F*P*4*u),O=new Zd(R,F,P,u);O.type=yi,O.needsUpdate=!0;const nt=w*4;for(let E=0;E<u;E++){const K=m[E],H=b[E],Z=S[E],at=F*P*4*E;for(let V=0;V<K.count;V++){const Q=V*nt;_===!0&&(s.fromBufferAttribute(K,V),R[at+Q+0]=s.x,R[at+Q+1]=s.y,R[at+Q+2]=s.z,R[at+Q+3]=0),x===!0&&(s.fromBufferAttribute(H,V),R[at+Q+4]=s.x,R[at+Q+5]=s.y,R[at+Q+6]=s.z,R[at+Q+7]=0),p===!0&&(s.fromBufferAttribute(Z,V),R[at+Q+8]=s.x,R[at+Q+9]=s.y,R[at+Q+10]=s.z,R[at+Q+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:O,size:new Ut(F,P)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function by(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ap extends mn{constructor(t,e,i,s,r,o,a,l,c,h=or){if(h!==or&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===or&&(i=Ts),i===void 0&&h===gr&&(i=mr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lp=new mn,Kh=new ap(1,1),cp=new Zd,up=new uv,hp=new sp,jh=[],Zh=[],Jh=new Float32Array(16),Qh=new Float32Array(9),tf=new Float32Array(4);function Mr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=jh[s];if(r===void 0&&(r=new Float32Array(s),jh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function We(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function La(n,t){let e=Zh[t];e===void 0&&(e=new Int32Array(t),Zh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ty(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2fv(this.addr,t),Xe(e,t)}}function Ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;n.uniform3fv(this.addr,t),Xe(e,t)}}function Cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4fv(this.addr,t),Xe(e,t)}}function Py(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;tf.set(i),n.uniformMatrix2fv(this.addr,!1,tf),Xe(e,i)}}function Iy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Qh.set(i),n.uniformMatrix3fv(this.addr,!1,Qh),Xe(e,i)}}function Ly(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Jh.set(i),n.uniformMatrix4fv(this.addr,!1,Jh),Xe(e,i)}}function Dy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Uy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2iv(this.addr,t),Xe(e,t)}}function Ny(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3iv(this.addr,t),Xe(e,t)}}function Fy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4iv(this.addr,t),Xe(e,t)}}function Oy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function By(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2uiv(this.addr,t),Xe(e,t)}}function zy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3uiv(this.addr,t),Xe(e,t)}}function Gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4uiv(this.addr,t),Xe(e,t)}}function Hy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kh.compareFunction=$d,r=Kh):r=lp,e.setTexture2D(t||r,s)}function ky(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||up,s)}function Vy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||hp,s)}function Wy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cp,s)}function Xy(n){switch(n){case 5126:return Ty;case 35664:return Ay;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Iy;case 35676:return Ly;case 5124:case 35670:return Dy;case 35667:case 35671:return Uy;case 35668:case 35672:return Ny;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return By;case 36295:return zy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Wy}}function qy(n,t){n.uniform1fv(this.addr,t)}function Yy(n,t){const e=Mr(t,this.size,2);n.uniform2fv(this.addr,e)}function $y(n,t){const e=Mr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ky(n,t){const e=Mr(t,this.size,4);n.uniform4fv(this.addr,e)}function jy(n,t){const e=Mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Zy(n,t){const e=Mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Jy(n,t){const e=Mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Qy(n,t){n.uniform1iv(this.addr,t)}function tS(n,t){n.uniform2iv(this.addr,t)}function eS(n,t){n.uniform3iv(this.addr,t)}function nS(n,t){n.uniform4iv(this.addr,t)}function iS(n,t){n.uniform1uiv(this.addr,t)}function sS(n,t){n.uniform2uiv(this.addr,t)}function rS(n,t){n.uniform3uiv(this.addr,t)}function oS(n,t){n.uniform4uiv(this.addr,t)}function aS(n,t,e){const i=this.cache,s=t.length,r=La(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lp,r[o])}function lS(n,t,e){const i=this.cache,s=t.length,r=La(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||up,r[o])}function cS(n,t,e){const i=this.cache,s=t.length,r=La(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||hp,r[o])}function uS(n,t,e){const i=this.cache,s=t.length,r=La(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cp,r[o])}function hS(n){switch(n){case 5126:return qy;case 35664:return Yy;case 35665:return $y;case 35666:return Ky;case 35674:return jy;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return tS;case 35668:case 35672:return eS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return sS;case 36295:return rS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}class fS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Xy(e.type)}}class dS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hS(e.type)}}class pS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function ef(n,t){n.seq.push(t),n.map[t.id]=t}function mS(n,t,e){const i=n.name,s=i.length;for(Tl.lastIndex=0;;){const r=Tl.exec(i),o=Tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ef(e,c===void 0?new fS(a,n,t):new dS(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new pS(a),ef(e,u)),e=u}}}class sa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);mS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function nf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const gS=37297;let _S=0;function vS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function xS(n){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(n);let i;switch(t===e?i="":t===da&&e===fa?i="LinearDisplayP3ToLinearSRGB":t===fa&&e===da&&(i="LinearSRGBToLinearDisplayP3"),n){case es:case Pa:return[i,"LinearTransferOETF"];case jn:case fu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function sf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+vS(n.getShaderSource(t),o)}else return s}function MS(n,t){const e=xS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function yS(n,t){let e;switch(t){case y_:e="Linear";break;case S_:e="Reinhard";break;case w_:e="Cineon";break;case E_:e="ACESFilmic";break;case T_:e="AgX";break;case A_:e="Neutral";break;case b_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ho=new q;function SS(){fe.getLuminanceCoefficients(Ho);const n=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function ES(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function bS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lr(n){return n!==""}function rf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function of(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const TS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(TS,RS)}const AS=new Map;function RS(n,t){let e=ne[t];if(e===void 0){const i=AS.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}const CS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(n){return n.replace(CS,PS)}function PS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function IS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ud?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===t_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function LS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function DS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function US(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nd:t="ENVMAP_BLENDING_MULTIPLY";break;case x_:t="ENVMAP_BLENDING_MIX";break;case M_:t="ENVMAP_BLENDING_ADD";break}return t}function NS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function FS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=IS(e),c=LS(e),h=DS(e),u=US(e),f=NS(e),d=wS(e),_=ES(r),x=s.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Lr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Lr).join(`
`),m.length>0&&(m+=`
`)):(p=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),m=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ji?"#define TONE_MAPPING":"",e.toneMapping!==ji?ne.tonemapping_pars_fragment:"",e.toneMapping!==ji?yS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,MS("linearToOutputTexel",e.outputColorSpace),SS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Pc(o),o=rf(o,e),o=of(o,e),a=Pc(a),a=rf(a,e),a=of(a,e),o=af(o),a=af(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=b+p+o,w=b+m+a,F=nf(s,s.VERTEX_SHADER,S),P=nf(s,s.FRAGMENT_SHADER,w);s.attachShader(x,F),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(E){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(F).trim(),Z=s.getShaderInfoLog(P).trim();let at=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,P);else{const Q=sf(s,F,"vertex"),X=sf(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+K+`
`+Q+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(H===""||Z==="")&&(V=!1);V&&(E.diagnostics={runnable:at,programLog:K,vertexShader:{log:H,prefix:p},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(F),s.deleteShader(P),O=new sa(s,x),nt=bS(s,x)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let nt;this.getAttributes=function(){return nt===void 0&&R(this),nt};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,gS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_S++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=P,this}let OS=0;class BS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new zS(t),e.set(t,i)),i}}class zS{constructor(t){this.id=OS++,this.code=t,this.usedTimes=0}}function GS(n,t,e,i,s,r,o){const a=new Jd,l=new BS,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,K,H,Z){const at=H.fog,V=Z.geometry,Q=M.isMeshStandardMaterial?H.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||Q),mt=X&&X.mapping===Ca?X.image.height:null,yt=x[M.type];M.precision!==null&&(_=s.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Pt=gt!==void 0?gt.length:0;let Bt=0;V.morphAttributes.position!==void 0&&(Bt=1),V.morphAttributes.normal!==void 0&&(Bt=2),V.morphAttributes.color!==void 0&&(Bt=3);let ot,dt,St,N;if(yt){const te=Jn[yt];ot=te.vertexShader,dt=te.fragmentShader}else ot=M.vertexShader,dt=M.fragmentShader,l.update(M),St=l.getVertexShaderID(M),N=l.getFragmentShaderID(M);const lt=n.getRenderTarget(),st=Z.isInstancedMesh===!0,ht=Z.isBatchedMesh===!0,wt=!!M.map,tt=!!M.matcap,g=!!X,T=!!M.aoMap,I=!!M.lightMap,U=!!M.bumpMap,D=!!M.normalMap,W=!!M.displacementMap,$=!!M.emissiveMap,y=!!M.metalnessMap,v=!!M.roughnessMap,C=M.anisotropy>0,k=M.clearcoat>0,z=M.dispersion>0,G=M.iridescence>0,ct=M.sheen>0,ut=M.transmission>0,pt=C&&!!M.anisotropyMap,Et=k&&!!M.clearcoatMap,ft=k&&!!M.clearcoatNormalMap,Mt=k&&!!M.clearcoatRoughnessMap,Rt=G&&!!M.iridescenceMap,It=G&&!!M.iridescenceThicknessMap,bt=ct&&!!M.sheenColorMap,Ht=ct&&!!M.sheenRoughnessMap,Lt=!!M.specularMap,kt=!!M.specularColorMap,B=!!M.specularIntensityMap,_t=ut&&!!M.transmissionMap,et=ut&&!!M.thicknessMap,J=!!M.gradientMap,xt=!!M.alphaMap,vt=M.alphaTest>0,Ot=!!M.alphaHash,Xt=!!M.extensions;let Jt=ji;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Jt=n.toneMapping);const Yt={shaderID:yt,shaderType:M.type,shaderName:M.name,vertexShader:ot,fragmentShader:dt,defines:M.defines,customVertexShaderID:St,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:ht,batchingColor:ht&&Z._colorsTexture!==null,instancing:st,instancingColor:st&&Z.instanceColor!==null,instancingMorph:st&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:es,alphaToCoverage:!!M.alphaToCoverage,map:wt,matcap:tt,envMap:g,envMapMode:g&&X.mapping,envMapCubeUVHeight:mt,aoMap:T,lightMap:I,bumpMap:U,normalMap:D,displacementMap:d&&W,emissiveMap:$,normalMapObjectSpace:D&&M.normalMapType===I_,normalMapTangentSpace:D&&M.normalMapType===Yd,metalnessMap:y,roughnessMap:v,anisotropy:C,anisotropyMap:pt,clearcoat:k,clearcoatMap:Et,clearcoatNormalMap:ft,clearcoatRoughnessMap:Mt,dispersion:z,iridescence:G,iridescenceMap:Rt,iridescenceThicknessMap:It,sheen:ct,sheenColorMap:bt,sheenRoughnessMap:Ht,specularMap:Lt,specularColorMap:kt,specularIntensityMap:B,transmission:ut,transmissionMap:_t,thicknessMap:et,gradientMap:J,opaque:M.transparent===!1&&M.blending===rr&&M.alphaToCoverage===!1,alphaMap:xt,alphaTest:vt,alphaHash:Ot,combine:M.combine,mapUv:wt&&p(M.map.channel),aoMapUv:T&&p(M.aoMap.channel),lightMapUv:I&&p(M.lightMap.channel),bumpMapUv:U&&p(M.bumpMap.channel),normalMapUv:D&&p(M.normalMap.channel),displacementMapUv:W&&p(M.displacementMap.channel),emissiveMapUv:$&&p(M.emissiveMap.channel),metalnessMapUv:y&&p(M.metalnessMap.channel),roughnessMapUv:v&&p(M.roughnessMap.channel),anisotropyMapUv:pt&&p(M.anisotropyMap.channel),clearcoatMapUv:Et&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&p(M.sheenRoughnessMap.channel),specularMapUv:Lt&&p(M.specularMap.channel),specularColorMapUv:kt&&p(M.specularColorMap.channel),specularIntensityMapUv:B&&p(M.specularIntensityMap.channel),transmissionMapUv:_t&&p(M.transmissionMap.channel),thicknessMapUv:et&&p(M.thicknessMap.channel),alphaMapUv:xt&&p(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(D||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!V.attributes.uv&&(wt||xt),fog:!!at,useFog:M.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Bt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:wt&&M.map.isVideoTexture===!0&&fe.getTransfer(M.map.colorSpace)===Ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ce,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&M.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function b(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)E.push(K),E.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(S(E,M),w(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function S(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function w(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),M.push(a.mask)}function F(M){const E=x[M.type];let K;if(E){const H=Jn[E];K=wv.clone(H.uniforms)}else K=M.uniforms;return K}function P(M,E){let K;for(let H=0,Z=h.length;H<Z;H++){const at=h[H];if(at.cacheKey===E){K=at,++K.usedTimes;break}}return K===void 0&&(K=new FS(n,E,M,r),h.push(K)),K}function R(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function O(M){l.remove(M)}function nt(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:F,acquireProgram:P,releaseProgram:R,releaseShaderCache:O,programs:h,dispose:nt}}function HS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function kS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function cf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function uf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,_,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,f,d,_,x,p){const m=o(u,f,d,_,x,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,_,x,p){const m=o(u,f,d,_,x,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||kS),i.length>1&&i.sort(f||cf),s.length>1&&s.sort(f||cf)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function VS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new uf,n.set(i,[o])):s>=r.length?(o=new uf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function WS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new oe};break;case"SpotLight":e={position:new q,direction:new q,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function XS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let qS=0;function YS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $S(n){const t=new WS,e=XS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new Ce,o=new Ce;function a(c){let h=0,u=0,f=0;for(let nt=0;nt<9;nt++)i.probe[nt].set(0,0,0);let d=0,_=0,x=0,p=0,m=0,b=0,S=0,w=0,F=0,P=0,R=0;c.sort(YS);for(let nt=0,M=c.length;nt<M;nt++){const E=c[nt],K=E.color,H=E.intensity,Z=E.distance,at=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=K.r*H,u+=K.g*H,f+=K.b*H;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],H);R++}else if(E.isDirectionalLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,X=e.get(E);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=at,i.directionalShadowMatrix[d]=E.shadow.matrix,b++}i.directional[d]=V,d++}else if(E.isSpotLight){const V=t.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(K).multiplyScalar(H),V.distance=Z,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[x]=V;const Q=E.shadow;if(E.map&&(i.spotLightMap[F]=E.map,F++,Q.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[x]=Q.matrix,E.castShadow){const X=e.get(E);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=at,w++}x++}else if(E.isRectAreaLight){const V=t.get(E);V.color.copy(K).multiplyScalar(H),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=V,p++}else if(E.isPointLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const Q=E.shadow,X=e.get(E);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=at,i.pointShadowMatrix[_]=E.shadow.matrix,S++}i.point[_]=V,_++}else if(E.isHemisphereLight){const V=t.get(E);V.skyColor.copy(E.color).multiplyScalar(H),V.groundColor.copy(E.groundColor).multiplyScalar(H),i.hemi[m]=V,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==d||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==p||O.hemiLength!==m||O.numDirectionalShadows!==b||O.numPointShadows!==S||O.numSpotShadows!==w||O.numSpotMaps!==F||O.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+F-P,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,O.directionalLength=d,O.pointLength=_,O.spotLength=x,O.rectAreaLength=p,O.hemiLength=m,O.numDirectionalShadows=b,O.numPointShadows=S,O.numSpotShadows=w,O.numSpotMaps=F,O.numLightProbes=R,i.version=qS++)}function l(c,h){let u=0,f=0,d=0,_=0,x=0;const p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const S=c[m];if(S.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(S.isSpotLight){const w=i.spot[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function hf(n){const t=new $S(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function KS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new hf(n),t.set(s,[a])):r>=o.length?(a=new hf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class jS extends ho{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZS extends ho{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const JS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QS=`uniform sampler2D shadow_pass;
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
}`;function tw(n,t,e){let i=new mu;const s=new Ut,r=new Ut,o=new ve,a=new jS({depthPacking:P_}),l=new ZS,c={},h=e.maxTextureSize,u={[Ji]:_n,[_n]:Ji,[ce]:ce},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:JS,fragmentShader:QS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Pn;_.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new L(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let m=this.type;this.render=function(P,R,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const nt=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Ki),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const H=m!==vi&&this.type===vi,Z=m===vi&&this.type!==vi;for(let at=0,V=P.length;at<V;at++){const Q=P[at],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const mt=X.getFrameExtents();if(s.multiply(mt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,X.mapSize.y=r.y)),X.map===null||H===!0||Z===!0){const gt=this.type!==vi?{minFilter:An,magFilter:An}:{};X.map!==null&&X.map.dispose(),X.map=new As(s.x,s.y,gt),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const yt=X.getViewportCount();for(let gt=0;gt<yt;gt++){const Pt=X.getViewport(gt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),K.viewport(o),X.updateMatrices(Q,gt),i=X.getFrustum(),w(R,O,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===vi&&b(X,O),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(nt,M,E)};function b(P,R){const O=t.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new As(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,O,f,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,O,d,x,null)}function S(P,R,O,nt){let M=null;const E=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)M=E;else if(M=O.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=M.uuid,H=R.uuid;let Z=c[K];Z===void 0&&(Z={},c[K]=Z);let at=Z[H];at===void 0&&(at=M.clone(),Z[H]=at,R.addEventListener("dispose",F)),M=at}if(M.visible=R.visible,M.wireframe=R.wireframe,nt===vi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const K=n.properties.get(M);K.light=O}return M}function w(P,R,O,nt,M){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===vi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const H=t.update(P),Z=P.material;if(Array.isArray(Z)){const at=H.groups;for(let V=0,Q=at.length;V<Q;V++){const X=at[V],mt=Z[X.materialIndex];if(mt&&mt.visible){const yt=S(P,mt,nt,M);P.onBeforeShadow(n,P,R,O,H,yt,X),n.renderBufferDirect(O,null,H,yt,P,X),P.onAfterShadow(n,P,R,O,H,yt,X)}}}else if(Z.visible){const at=S(P,Z,nt,M);P.onBeforeShadow(n,P,R,O,H,at,null),n.renderBufferDirect(O,null,H,at,P,null),P.onAfterShadow(n,P,R,O,H,at,null)}}const K=P.children;for(let H=0,Z=K.length;H<Z;H++)w(K[H],R,O,nt,M)}function F(P){P.target.removeEventListener("dispose",F);for(const O in c){const nt=c[O],M=P.target.uuid;M in nt&&(nt[M].dispose(),delete nt[M])}}}const ew={[Kl]:jl,[Zl]:tc,[Jl]:ec,[fr]:Ql,[jl]:Kl,[tc]:Zl,[ec]:Jl,[Ql]:fr};function nw(n){function t(){let B=!1;const _t=new ve;let et=null;const J=new ve(0,0,0,0);return{setMask:function(xt){et!==xt&&!B&&(n.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){B=xt},setClear:function(xt,vt,Ot,Xt,Jt){Jt===!0&&(xt*=Xt,vt*=Xt,Ot*=Xt),_t.set(xt,vt,Ot,Xt),J.equals(_t)===!1&&(n.clearColor(xt,vt,Ot,Xt),J.copy(_t))},reset:function(){B=!1,et=null,J.set(-1,0,0,0)}}}function e(){let B=!1,_t=!1,et=null,J=null,xt=null;return{setReversed:function(vt){_t=vt},setTest:function(vt){vt?St(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(vt){et!==vt&&!B&&(n.depthMask(vt),et=vt)},setFunc:function(vt){if(_t&&(vt=ew[vt]),J!==vt){switch(vt){case Kl:n.depthFunc(n.NEVER);break;case jl:n.depthFunc(n.ALWAYS);break;case Zl:n.depthFunc(n.LESS);break;case fr:n.depthFunc(n.LEQUAL);break;case Jl:n.depthFunc(n.EQUAL);break;case Ql:n.depthFunc(n.GEQUAL);break;case tc:n.depthFunc(n.GREATER);break;case ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=vt}},setLocked:function(vt){B=vt},setClear:function(vt){xt!==vt&&(n.clearDepth(vt),xt=vt)},reset:function(){B=!1,et=null,J=null,xt=null}}}function i(){let B=!1,_t=null,et=null,J=null,xt=null,vt=null,Ot=null,Xt=null,Jt=null;return{setTest:function(Yt){B||(Yt?St(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(Yt){_t!==Yt&&!B&&(n.stencilMask(Yt),_t=Yt)},setFunc:function(Yt,te,se){(et!==Yt||J!==te||xt!==se)&&(n.stencilFunc(Yt,te,se),et=Yt,J=te,xt=se)},setOp:function(Yt,te,se){(vt!==Yt||Ot!==te||Xt!==se)&&(n.stencilOp(Yt,te,se),vt=Yt,Ot=te,Xt=se)},setLocked:function(Yt){B=Yt},setClear:function(Yt){Jt!==Yt&&(n.clearStencil(Yt),Jt=Yt)},reset:function(){B=!1,_t=null,et=null,J=null,xt=null,vt=null,Ot=null,Xt=null,Jt=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,_=!1,x=null,p=null,m=null,b=null,S=null,w=null,F=null,P=new oe(0,0,0),R=0,O=!1,nt=null,M=null,E=null,K=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,V=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),at=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),at=V>=2);let X=null,mt={};const yt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Pt=new ve().fromArray(yt),Bt=new ve().fromArray(gt);function ot(B,_t,et,J){const xt=new Uint8Array(4),vt=n.createTexture();n.bindTexture(B,vt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<et;Ot++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(_t+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return vt}const dt={};dt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),St(n.DEPTH_TEST),r.setFunc(fr),I(!1),U(_h),St(n.CULL_FACE),g(Ki);function St(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function N(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function lt(B,_t){return h[B]!==_t?(n.bindFramebuffer(B,_t),h[B]=_t,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_t),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function st(B,_t){let et=f,J=!1;if(B){et=u.get(_t),et===void 0&&(et=[],u.set(_t,et));const xt=B.textures;if(et.length!==xt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Ot=xt.length;vt<Ot;vt++)et[vt]=n.COLOR_ATTACHMENT0+vt;et.length=xt.length,J=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,J=!0);J&&n.drawBuffers(et)}function ht(B){return d!==B?(n.useProgram(B),d=B,!0):!1}const wt={[Ms]:n.FUNC_ADD,[n_]:n.FUNC_SUBTRACT,[i_]:n.FUNC_REVERSE_SUBTRACT};wt[s_]=n.MIN,wt[r_]=n.MAX;const tt={[o_]:n.ZERO,[a_]:n.ONE,[l_]:n.SRC_COLOR,[Yl]:n.SRC_ALPHA,[p_]:n.SRC_ALPHA_SATURATE,[f_]:n.DST_COLOR,[u_]:n.DST_ALPHA,[c_]:n.ONE_MINUS_SRC_COLOR,[$l]:n.ONE_MINUS_SRC_ALPHA,[d_]:n.ONE_MINUS_DST_COLOR,[h_]:n.ONE_MINUS_DST_ALPHA,[m_]:n.CONSTANT_COLOR,[g_]:n.ONE_MINUS_CONSTANT_COLOR,[__]:n.CONSTANT_ALPHA,[v_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,_t,et,J,xt,vt,Ot,Xt,Jt,Yt){if(B===Ki){_===!0&&(N(n.BLEND),_=!1);return}if(_===!1&&(St(n.BLEND),_=!0),B!==e_){if(B!==x||Yt!==O){if((p!==Ms||S!==Ms)&&(n.blendEquation(n.FUNC_ADD),p=Ms,S=Ms),Yt)switch(B){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vh:n.blendFunc(n.ONE,n.ONE);break;case xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,b=null,w=null,F=null,P.set(0,0,0),R=0,x=B,O=Yt}return}xt=xt||_t,vt=vt||et,Ot=Ot||J,(_t!==p||xt!==S)&&(n.blendEquationSeparate(wt[_t],wt[xt]),p=_t,S=xt),(et!==m||J!==b||vt!==w||Ot!==F)&&(n.blendFuncSeparate(tt[et],tt[J],tt[vt],tt[Ot]),m=et,b=J,w=vt,F=Ot),(Xt.equals(P)===!1||Jt!==R)&&(n.blendColor(Xt.r,Xt.g,Xt.b,Jt),P.copy(Xt),R=Jt),x=B,O=!1}function T(B,_t){B.side===ce?N(n.CULL_FACE):St(n.CULL_FACE);let et=B.side===_n;_t&&(et=!et),I(et),B.blending===rr&&B.transparent===!1?g(Ki):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const J=B.stencilWrite;o.setTest(J),J&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),W(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?St(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(B){nt!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),nt=B)}function U(B){B!==Jg?(St(n.CULL_FACE),B!==M&&(B===_h?n.cullFace(n.BACK):B===Qg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),M=B}function D(B){B!==E&&(at&&n.lineWidth(B),E=B)}function W(B,_t,et){B?(St(n.POLYGON_OFFSET_FILL),(K!==_t||H!==et)&&(n.polygonOffset(_t,et),K=_t,H=et)):N(n.POLYGON_OFFSET_FILL)}function $(B){B?St(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function y(B){B===void 0&&(B=n.TEXTURE0+Z-1),X!==B&&(n.activeTexture(B),X=B)}function v(B,_t,et){et===void 0&&(X===null?et=n.TEXTURE0+Z-1:et=X);let J=mt[et];J===void 0&&(J={type:void 0,texture:void 0},mt[et]=J),(J.type!==B||J.texture!==_t)&&(X!==et&&(n.activeTexture(et),X=et),n.bindTexture(B,_t||dt[B]),J.type=B,J.texture=_t)}function C(){const B=mt[X];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function It(B){Pt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Pt.copy(B))}function bt(B){Bt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Bt.copy(B))}function Ht(B,_t){let et=l.get(_t);et===void 0&&(et=new WeakMap,l.set(_t,et));let J=et.get(B);J===void 0&&(J=n.getUniformBlockIndex(_t,B.name),et.set(B,J))}function Lt(B,_t){const J=l.get(_t).get(B);a.get(_t)!==J&&(n.uniformBlockBinding(_t,J,B.__bindingPointIndex),a.set(_t,J))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,mt={},h={},u=new WeakMap,f=[],d=null,_=!1,x=null,p=null,m=null,b=null,S=null,w=null,F=null,P=new oe(0,0,0),R=0,O=!1,nt=null,M=null,E=null,K=null,H=null,Pt.set(0,0,n.canvas.width,n.canvas.height),Bt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:St,disable:N,bindFramebuffer:lt,drawBuffers:st,useProgram:ht,setBlending:g,setMaterial:T,setFlipSided:I,setCullFace:U,setLineWidth:D,setPolygonOffset:W,setScissorTest:$,activeTexture:y,bindTexture:v,unbindTexture:C,compressedTexImage2D:k,compressedTexImage3D:z,texImage2D:Mt,texImage3D:Rt,updateUBOMapping:Ht,uniformBlockBinding:Lt,texStorage2D:Et,texStorage3D:ft,texSubImage2D:G,texSubImage3D:ct,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:It,viewport:bt,reset:kt}}function ff(n,t,e,i){const s=iw(i);switch(e){case Gd:return n*t;case kd:return n*t;case Vd:return n*t*2;case Wd:return n*t/s.components*s.byteLength;case cu:return n*t/s.components*s.byteLength;case Xd:return n*t*2/s.components*s.byteLength;case uu:return n*t*2/s.components*s.byteLength;case Hd:return n*t*3/s.components*s.byteLength;case Bn:return n*t*4/s.components*s.byteLength;case hu:return n*t*4/s.components*s.byteLength;case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:case ac:return Math.max(n,16)*Math.max(t,8)/4;case sc:case oc:return Math.max(n,8)*Math.max(t,8)/2;case lc:case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case na:case bc:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case qd:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function iw(n){switch(n){case bi:case Od:return{byteLength:1,components:1};case to:case Bd:case lo:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case Ts:case ou:case yi:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function sw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return d?new OffscreenCanvas(y,v):no("canvas")}function x(y,v,C){let k=1;const z=$(y);if((z.width>C||z.height>C)&&(k=C/Math.max(z.width,z.height)),k<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const G=Math.floor(k*z.width),ct=Math.floor(k*z.height);u===void 0&&(u=_(G,ct));const ut=v?_(G,ct):u;return ut.width=G,ut.height=ct,ut.getContext("2d").drawImage(y,0,0,G,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+G+"x"+ct+")."),ut}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),y;return y}function p(y){return y.generateMipmaps&&y.minFilter!==An&&y.minFilter!==Fn}function m(y){n.generateMipmap(y)}function b(y,v,C,k,z=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let G=v;if(v===n.RED&&(C===n.FLOAT&&(G=n.R32F),C===n.HALF_FLOAT&&(G=n.R16F),C===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.R8UI),C===n.UNSIGNED_SHORT&&(G=n.R16UI),C===n.UNSIGNED_INT&&(G=n.R32UI),C===n.BYTE&&(G=n.R8I),C===n.SHORT&&(G=n.R16I),C===n.INT&&(G=n.R32I)),v===n.RG&&(C===n.FLOAT&&(G=n.RG32F),C===n.HALF_FLOAT&&(G=n.RG16F),C===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RG8UI),C===n.UNSIGNED_SHORT&&(G=n.RG16UI),C===n.UNSIGNED_INT&&(G=n.RG32UI),C===n.BYTE&&(G=n.RG8I),C===n.SHORT&&(G=n.RG16I),C===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGB8UI),C===n.UNSIGNED_SHORT&&(G=n.RGB16UI),C===n.UNSIGNED_INT&&(G=n.RGB32UI),C===n.BYTE&&(G=n.RGB8I),C===n.SHORT&&(G=n.RGB16I),C===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),C===n.UNSIGNED_INT&&(G=n.RGBA32UI),C===n.BYTE&&(G=n.RGBA8I),C===n.SHORT&&(G=n.RGBA16I),C===n.INT&&(G=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){const ct=z?ha:fe.getTransfer(k);C===n.FLOAT&&(G=n.RGBA32F),C===n.HALF_FLOAT&&(G=n.RGBA16F),C===n.UNSIGNED_BYTE&&(G=ct===Ae?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function S(y,v){let C;return y?v===null||v===Ts||v===mr?C=n.DEPTH24_STENCIL8:v===yi?C=n.DEPTH32F_STENCIL8:v===to&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ts||v===mr?C=n.DEPTH_COMPONENT24:v===yi?C=n.DEPTH_COMPONENT32F:v===to&&(C=n.DEPTH_COMPONENT16),C}function w(y,v){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==An&&y.minFilter!==Fn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function F(y){const v=y.target;v.removeEventListener("dispose",F),R(v),v.isVideoTexture&&h.delete(v)}function P(y){const v=y.target;v.removeEventListener("dispose",P),nt(v)}function R(y){const v=i.get(y);if(v.__webglInit===void 0)return;const C=y.source,k=f.get(C);if(k){const z=k[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&O(y),Object.keys(k).length===0&&f.delete(C)}i.remove(y)}function O(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const C=y.source,k=f.get(C);delete k[v.__cacheKey],o.memory.textures--}function nt(y){const v=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let z=0;z<v.__webglFramebuffer[k].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[k][z]);else n.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)n.deleteFramebuffer(v.__webglFramebuffer[k]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=y.textures;for(let k=0,z=C.length;k<z;k++){const G=i.get(C[k]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(C[k])}i.remove(y)}let M=0;function E(){M=0}function K(){const y=M;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),M+=1,y}function H(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function Z(y,v){const C=i.get(y);if(y.isVideoTexture&&D(y),y.isRenderTargetTexture===!1&&y.version>0&&C.__version!==y.version){const k=y.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(C,y,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function at(y,v){const C=i.get(y);if(y.version>0&&C.__version!==y.version){Bt(C,y,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function V(y,v){const C=i.get(y);if(y.version>0&&C.__version!==y.version){Bt(C,y,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function Q(y,v){const C=i.get(y);if(y.version>0&&C.__version!==y.version){ot(C,y,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const X={[Ue]:n.REPEAT,[Ss]:n.CLAMP_TO_EDGE,[ic]:n.MIRRORED_REPEAT},mt={[An]:n.NEAREST,[R_]:n.NEAREST_MIPMAP_NEAREST,[yo]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[Qa]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},yt={[L_]:n.NEVER,[B_]:n.ALWAYS,[D_]:n.LESS,[$d]:n.LEQUAL,[U_]:n.EQUAL,[O_]:n.GEQUAL,[N_]:n.GREATER,[F_]:n.NOTEQUAL};function gt(y,v){if(v.type===yi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Fn||v.magFilter===Qa||v.magFilter===yo||v.magFilter===ws||v.minFilter===Fn||v.minFilter===Qa||v.minFilter===yo||v.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,X[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,X[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,X[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==yo&&v.minFilter!==ws||v.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Pt(y,v){let C=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",F));const k=v.source;let z=f.get(k);z===void 0&&(z={},f.set(k,z));const G=H(v);if(G!==y.__cacheKey){z[G]===void 0&&(z[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),z[G].usedTimes++;const ct=z[y.__cacheKey];ct!==void 0&&(z[y.__cacheKey].usedTimes--,ct.usedTimes===0&&O(v)),y.__cacheKey=G,y.__webglTexture=z[G].texture}return C}function Bt(y,v,C){let k=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=n.TEXTURE_3D);const z=Pt(y,v),G=v.source;e.bindTexture(k,y.__webglTexture,n.TEXTURE0+C);const ct=i.get(G);if(G.version!==ct.__version||z===!0){e.activeTexture(n.TEXTURE0+C);const ut=fe.getPrimaries(fe.workingColorSpace),pt=v.colorSpace===$i?null:fe.getPrimaries(v.colorSpace),Et=v.colorSpace===$i||ut===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ft=x(v.image,!1,s.maxTextureSize);ft=W(v,ft);const Mt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type);let It=b(v.internalFormat,Mt,Rt,v.colorSpace,v.isVideoTexture);gt(k,v);let bt;const Ht=v.mipmaps,Lt=v.isVideoTexture!==!0,kt=ct.__version===void 0||z===!0,B=G.dataReady,_t=w(v,ft);if(v.isDepthTexture)It=S(v.format===gr,v.type),kt&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,It,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,It,ft.width,ft.height,0,Mt,Rt,null));else if(v.isDataTexture)if(Ht.length>0){Lt&&kt&&e.texStorage2D(n.TEXTURE_2D,_t,It,Ht[0].width,Ht[0].height);for(let et=0,J=Ht.length;et<J;et++)bt=Ht[et],Lt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,bt.width,bt.height,Mt,Rt,bt.data):e.texImage2D(n.TEXTURE_2D,et,It,bt.width,bt.height,0,Mt,Rt,bt.data);v.generateMipmaps=!1}else Lt?(kt&&e.texStorage2D(n.TEXTURE_2D,_t,It,ft.width,ft.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,Mt,Rt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,It,ft.width,ft.height,0,Mt,Rt,ft.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,It,Ht[0].width,Ht[0].height,ft.depth);for(let et=0,J=Ht.length;et<J;et++)if(bt=Ht[et],v.format!==Bn)if(Mt!==null)if(Lt){if(B)if(v.layerUpdates.size>0){const xt=ff(bt.width,bt.height,v.format,v.type);for(const vt of v.layerUpdates){const Ot=bt.data.subarray(vt*xt/bt.data.BYTES_PER_ELEMENT,(vt+1)*xt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,vt,bt.width,bt.height,1,Mt,Ot,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,bt.width,bt.height,ft.depth,Mt,bt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,It,bt.width,bt.height,ft.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,bt.width,bt.height,ft.depth,Mt,Rt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,It,bt.width,bt.height,ft.depth,0,Mt,Rt,bt.data)}else{Lt&&kt&&e.texStorage2D(n.TEXTURE_2D,_t,It,Ht[0].width,Ht[0].height);for(let et=0,J=Ht.length;et<J;et++)bt=Ht[et],v.format!==Bn?Mt!==null?Lt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,It,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,bt.width,bt.height,Mt,Rt,bt.data):e.texImage2D(n.TEXTURE_2D,et,It,bt.width,bt.height,0,Mt,Rt,bt.data)}else if(v.isDataArrayTexture)if(Lt){if(kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,It,ft.width,ft.height,ft.depth),B)if(v.layerUpdates.size>0){const et=ff(ft.width,ft.height,v.format,v.type);for(const J of v.layerUpdates){const xt=ft.data.subarray(J*et/ft.data.BYTES_PER_ELEMENT,(J+1)*et/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ft.width,ft.height,1,Mt,Rt,xt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Mt,Rt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,ft.width,ft.height,ft.depth,0,Mt,Rt,ft.data);else if(v.isData3DTexture)Lt?(kt&&e.texStorage3D(n.TEXTURE_3D,_t,It,ft.width,ft.height,ft.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Mt,Rt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,It,ft.width,ft.height,ft.depth,0,Mt,Rt,ft.data);else if(v.isFramebufferTexture){if(kt)if(Lt)e.texStorage2D(n.TEXTURE_2D,_t,It,ft.width,ft.height);else{let et=ft.width,J=ft.height;for(let xt=0;xt<_t;xt++)e.texImage2D(n.TEXTURE_2D,xt,It,et,J,0,Mt,Rt,null),et>>=1,J>>=1}}else if(Ht.length>0){if(Lt&&kt){const et=$(Ht[0]);e.texStorage2D(n.TEXTURE_2D,_t,It,et.width,et.height)}for(let et=0,J=Ht.length;et<J;et++)bt=Ht[et],Lt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Mt,Rt,bt):e.texImage2D(n.TEXTURE_2D,et,It,Mt,Rt,bt);v.generateMipmaps=!1}else if(Lt){if(kt){const et=$(ft);e.texStorage2D(n.TEXTURE_2D,_t,It,et.width,et.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Rt,ft)}else e.texImage2D(n.TEXTURE_2D,0,It,Mt,Rt,ft);p(v)&&m(k),ct.__version=G.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ot(y,v,C){if(v.image.length!==6)return;const k=Pt(y,v),z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+C);const G=i.get(z);if(z.version!==G.__version||k===!0){e.activeTexture(n.TEXTURE0+C);const ct=fe.getPrimaries(fe.workingColorSpace),ut=v.colorSpace===$i?null:fe.getPrimaries(v.colorSpace),pt=v.colorSpace===$i||ct===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Et=v.isCompressedTexture||v.image[0].isCompressedTexture,ft=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let J=0;J<6;J++)!Et&&!ft?Mt[J]=x(v.image[J],!0,s.maxCubemapSize):Mt[J]=ft?v.image[J].image:v.image[J],Mt[J]=W(v,Mt[J]);const Rt=Mt[0],It=r.convert(v.format,v.colorSpace),bt=r.convert(v.type),Ht=b(v.internalFormat,It,bt,v.colorSpace),Lt=v.isVideoTexture!==!0,kt=G.__version===void 0||k===!0,B=z.dataReady;let _t=w(v,Rt);gt(n.TEXTURE_CUBE_MAP,v);let et;if(Et){Lt&&kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ht,Rt.width,Rt.height);for(let J=0;J<6;J++){et=Mt[J].mipmaps;for(let xt=0;xt<et.length;xt++){const vt=et[xt];v.format!==Bn?It!==null?Lt?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,0,0,vt.width,vt.height,It,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,Ht,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,0,0,vt.width,vt.height,It,bt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,Ht,vt.width,vt.height,0,It,bt,vt.data)}}}else{if(et=v.mipmaps,Lt&&kt){et.length>0&&_t++;const J=$(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ht,J.width,J.height)}for(let J=0;J<6;J++)if(ft){Lt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Mt[J].width,Mt[J].height,It,bt,Mt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,Mt[J].width,Mt[J].height,0,It,bt,Mt[J].data);for(let xt=0;xt<et.length;xt++){const Ot=et[xt].image[J].image;Lt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,0,0,Ot.width,Ot.height,It,bt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,Ht,Ot.width,Ot.height,0,It,bt,Ot.data)}}else{Lt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,bt,Mt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,It,bt,Mt[J]);for(let xt=0;xt<et.length;xt++){const vt=et[xt];Lt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,0,0,It,bt,vt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,Ht,It,bt,vt.image[J])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),G.__version=z.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function dt(y,v,C,k,z,G){const ct=r.convert(C.format,C.colorSpace),ut=r.convert(C.type),pt=b(C.internalFormat,ct,ut,C.colorSpace);if(!i.get(v).__hasExternalTextures){const ft=Math.max(1,v.width>>G),Mt=Math.max(1,v.height>>G);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,G,pt,ft,Mt,v.depth,0,ct,ut,null):e.texImage2D(z,G,pt,ft,Mt,0,ct,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,z,i.get(C).__webglTexture,0,I(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,z,i.get(C).__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(y,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const k=v.depthTexture,z=k&&k.isDepthTexture?k.type:null,G=S(v.stencilBuffer,z),ct=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=I(v);U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,G,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,y)}else{const k=v.textures;for(let z=0;z<k.length;z++){const G=k[z],ct=r.convert(G.format,G.colorSpace),ut=r.convert(G.type),pt=b(G.internalFormat,ct,ut,G.colorSpace),Et=I(v);C&&U(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,pt,v.width,v.height):U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const k=i.get(v.depthTexture).__webglTexture,z=I(v);if(v.depthTexture.format===or)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(v.depthTexture.format===gr)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function lt(y){const v=i.get(y),C=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const k=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",z)};k.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=k}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");N(v.__webglFramebuffer,y)}else if(C){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=n.createRenderbuffer(),St(v.__webglDepthbuffer[k],y,!1);else{const z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,G)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),St(v.__webglDepthbuffer,y,!1);else{const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(y,v,C){const k=i.get(y);v!==void 0&&dt(k.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&lt(y)}function ht(y){const v=y.texture,C=i.get(y),k=i.get(v);y.addEventListener("dispose",P);const z=y.textures,G=y.isWebGLCubeRenderTarget===!0,ct=z.length>1;if(ct||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=v.version,o.memory.textures++),G){C.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ut]=[];for(let pt=0;pt<v.mipmaps.length;pt++)C.__webglFramebuffer[ut][pt]=n.createFramebuffer()}else C.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)C.__webglFramebuffer[ut]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ct)for(let ut=0,pt=z.length;ut<pt;ut++){const Et=i.get(z[ut]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&U(y)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ut=0;ut<z.length;ut++){const pt=z[ut];C.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ut]);const Et=r.convert(pt.format,pt.colorSpace),ft=r.convert(pt.type),Mt=b(pt.internalFormat,Et,ft,pt.colorSpace,y.isXRRenderTarget===!0),Rt=I(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,Mt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,C.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),St(C.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),gt(n.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)dt(C.__webglFramebuffer[ut][pt],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else dt(C.__webglFramebuffer[ut],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let ut=0,pt=z.length;ut<pt;ut++){const Et=z[ut],ft=i.get(Et);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),gt(n.TEXTURE_2D,Et),dt(C.__webglFramebuffer,y,Et,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),p(Et)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ut=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,k.__webglTexture),gt(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)dt(C.__webglFramebuffer[pt],y,v,n.COLOR_ATTACHMENT0,ut,pt);else dt(C.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,ut,0);p(v)&&m(ut),e.unbindTexture()}y.depthBuffer&&lt(y)}function wt(y){const v=y.textures;for(let C=0,k=v.length;C<k;C++){const z=v[C];if(p(z)){const G=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ct=i.get(z).__webglTexture;e.bindTexture(G,ct),m(G),e.unbindTexture()}}}const tt=[],g=[];function T(y){if(y.samples>0){if(U(y)===!1){const v=y.textures,C=y.width,k=y.height;let z=n.COLOR_BUFFER_BIT;const G=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(y),ut=v.length>1;if(ut)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[pt]);const Et=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Et,0)}n.blitFramebuffer(0,0,C,k,0,0,C,k,z,n.NEAREST),l===!0&&(tt.length=0,g.length=0,tt.push(n.COLOR_ATTACHMENT0+pt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(tt.push(G),g.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ct.__webglColorRenderbuffer[pt]);const Et=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(y){return Math.min(s.maxSamples,y.samples)}function U(y){const v=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(y){const v=o.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function W(y,v){const C=y.colorSpace,k=y.format,z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||C!==es&&C!==$i&&(fe.getTransfer(C)===Ae?(k!==Bn||z!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function $(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=E,this.setTexture2D=Z,this.setTexture2DArray=at,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=st,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=U}function rw(n,t){function e(i,s=$i){let r;const o=fe.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Od)return n.BYTE;if(i===Bd)return n.SHORT;if(i===to)return n.UNSIGNED_SHORT;if(i===ou)return n.INT;if(i===Ts)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===lo)return n.HALF_FLOAT;if(i===Gd)return n.ALPHA;if(i===Hd)return n.RGB;if(i===Bn)return n.RGBA;if(i===kd)return n.LUMINANCE;if(i===Vd)return n.LUMINANCE_ALPHA;if(i===or)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===Wd)return n.RED;if(i===cu)return n.RED_INTEGER;if(i===Xd)return n.RG;if(i===uu)return n.RG_INTEGER;if(i===hu)return n.RGBA_INTEGER;if(i===Jo||i===Qo||i===ta||i===ea)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sc||i===rc||i===oc||i===ac)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lc||i===cc||i===uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===lc||i===cc)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hc||i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===Mc||i===yc||i===Sc||i===wc||i===Ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_c)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===bc||i===Tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===na)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qd||i===Ac||i===Rc||i===Cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class ow extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aw={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
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

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ii({vertexShader:lw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new L(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hw extends xr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const x=new uw,p=e.getContextAttributes();let m=null,b=null;const S=[],w=[],F=new Ut;let P=null;const R=new De;R.layers.enable(1),R.viewport=new ve;const O=new De;O.layers.enable(2),O.viewport=new ve;const nt=[R,O],M=new ow;M.layers.enable(1),M.layers.enable(2);let E=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let dt=S[ot];return dt===void 0&&(dt=new Al,S[ot]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(ot){let dt=S[ot];return dt===void 0&&(dt=new Al,S[ot]=dt),dt.getGripSpace()},this.getHand=function(ot){let dt=S[ot];return dt===void 0&&(dt=new Al,S[ot]=dt),dt.getHandSpace()};function H(ot){const dt=w.indexOf(ot.inputSource);if(dt===-1)return;const St=S[dt];St!==void 0&&(St.update(ot.inputSource,ot.frame,c||o),St.dispatchEvent({type:ot.type,data:ot.inputSource}))}function Z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",at);for(let ot=0;ot<S.length;ot++){const dt=w[ot];dt!==null&&(w[ot]=null,S[ot].disconnect(dt))}E=null,K=null,x.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,b=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",at),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const dt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new As(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let dt=null,St=null,N=null;p.depth&&(N=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=p.stencil?gr:or,St=p.stencil?mr:Ts);const lt={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new As(f.textureWidth,f.textureHeight,{format:Bn,type:bi,depthTexture:new ap(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Bt.setContext(s),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(ot){for(let dt=0;dt<ot.removed.length;dt++){const St=ot.removed[dt],N=w.indexOf(St);N>=0&&(w[N]=null,S[N].disconnect(St))}for(let dt=0;dt<ot.added.length;dt++){const St=ot.added[dt];let N=w.indexOf(St);if(N===-1){for(let st=0;st<S.length;st++)if(st>=w.length){w.push(St),N=st;break}else if(w[st]===null){w[st]=St,N=st;break}if(N===-1)break}const lt=S[N];lt&&lt.connect(St)}}const V=new q,Q=new q;function X(ot,dt,St){V.setFromMatrixPosition(dt.matrixWorld),Q.setFromMatrixPosition(St.matrixWorld);const N=V.distanceTo(Q),lt=dt.projectionMatrix.elements,st=St.projectionMatrix.elements,ht=lt[14]/(lt[10]-1),wt=lt[14]/(lt[10]+1),tt=(lt[9]+1)/lt[5],g=(lt[9]-1)/lt[5],T=(lt[8]-1)/lt[0],I=(st[8]+1)/st[0],U=ht*T,D=ht*I,W=N/(-T+I),$=W*-T;if(dt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX($),ot.translateZ(W),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),lt[10]===-1)ot.projectionMatrix.copy(dt.projectionMatrix),ot.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const y=ht+W,v=wt+W,C=U-$,k=D+(N-$),z=tt*wt/v*y,G=g*wt/v*y;ot.projectionMatrix.makePerspective(C,k,z,G,y,v),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function mt(ot,dt){dt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(dt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let dt=ot.near,St=ot.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(St=x.depthFar)),M.near=O.near=R.near=dt,M.far=O.far=R.far=St,(E!==M.near||K!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,K=M.far);const N=ot.parent,lt=M.cameras;mt(M,N);for(let st=0;st<lt.length;st++)mt(lt[st],N);lt.length===2?X(M,R,O):M.projectionMatrix.copy(R.projectionMatrix),yt(ot,M,N)};function yt(ot,dt,St){St===null?ot.matrix.copy(dt.matrixWorld):(ot.matrix.copy(St.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(dt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(dt.projectionMatrix),ot.projectionMatrixInverse.copy(dt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=eo*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ot){l=ot,f!==null&&(f.fixedFoveation=ot),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ot)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let gt=null;function Pt(ot,dt){if(h=dt.getViewerPose(c||o),_=dt,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let N=!1;St.length!==M.cameras.length&&(M.cameras.length=0,N=!0);for(let st=0;st<St.length;st++){const ht=St[st];let wt=null;if(d!==null)wt=d.getViewport(ht);else{const g=u.getViewSubImage(f,ht);wt=g.viewport,st===0&&(t.setRenderTargetTextures(b,g.colorTexture,f.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(b))}let tt=nt[st];tt===void 0&&(tt=new De,tt.layers.enable(st),tt.viewport=new ve,nt[st]=tt),tt.matrix.fromArray(ht.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ht.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(wt.x,wt.y,wt.width,wt.height),st===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),N===!0&&M.cameras.push(tt)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const st=u.getDepthInformation(St[0]);st&&st.isValid&&st.texture&&x.init(t,st,s.renderState)}}for(let St=0;St<S.length;St++){const N=w[St],lt=S[St];N!==null&&lt!==void 0&&lt.update(N,dt,c||o)}gt&&gt(ot,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),_=null}const Bt=new rp;Bt.setAnimationLoop(Pt),this.setAnimationLoop=function(ot){gt=ot},this.dispose=function(){}}}const gs=new ni,fw=new Ce;function dw(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,np(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),S=b.envMap,w=b.envMapRotation;S&&(p.envMap.value=S,gs.copy(w),gs.x*=-1,gs.y*=-1,gs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),p.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(gs)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const w=S.program;i.uniformBlockBinding(b,w)}function c(b,S){let w=s[b.id];w===void 0&&(_(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",p));const F=S.program;i.updateUBOMapping(b,F);const P=t.render.frame;r[b.id]!==P&&(f(b),r[b.id]=P)}function h(b){const S=u();b.__bindingPointIndex=S;const w=n.createBuffer(),F=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,F,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=s[b.id],w=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,R=w.length;P<R;P++){const O=Array.isArray(w[P])?w[P]:[w[P]];for(let nt=0,M=O.length;nt<M;nt++){const E=O[nt];if(d(E,P,nt,F)===!0){const K=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let Z=0;for(let at=0;at<H.length;at++){const V=H[at],Q=x(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,K+Z,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,Z),Z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,S,w,F){const P=b.value,R=S+"_"+w;if(F[R]===void 0)return typeof P=="number"||typeof P=="boolean"?F[R]=P:F[R]=P.clone(),!0;{const O=F[R];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return F[R]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function _(b){const S=b.uniforms;let w=0;const F=16;for(let R=0,O=S.length;R<O;R++){const nt=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,E=nt.length;M<E;M++){const K=nt[M],H=Array.isArray(K.value)?K.value:[K.value];for(let Z=0,at=H.length;Z<at;Z++){const V=H[Z],Q=x(V),X=w%F,mt=X%Q.boundary,yt=X+mt;w+=mt,yt!==0&&F-yt<Q.storage&&(w+=F-yt),K.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=Q.storage}}}const P=w%F;return P>0&&(w+=F-P),b.__size=w,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Ti{constructor(t={}){const{canvas:e=ev(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=ji,this.toneMappingExposure=1;const S=this;let w=!1,F=0,P=0,R=null,O=-1,nt=null;const M=new ve,E=new ve;let K=null;const H=new oe(0);let Z=0,at=e.width,V=e.height,Q=1,X=null,mt=null;const yt=new ve(0,0,at,V),gt=new ve(0,0,at,V);let Pt=!1;const Bt=new mu;let ot=!1,dt=!1;const St=new Ce,N=new Ce,lt=new q,st=new ve,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function tt(){return R===null?Q:1}let g=i;function T(A,Y){return e.getContext(A,Y)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ru}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),g===null){const Y="webgl2";if(g=T(Y,A),g===null)throw T(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let I,U,D,W,$,y,v,C,k,z,G,ct,ut,pt,Et,ft,Mt,Rt,It,bt,Ht,Lt,kt,B;function _t(){I=new My(g),I.init(),Lt=new rw(g,I),U=new py(g,I,t,Lt),D=new nw(g),U.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),W=new wy(g),$=new HS,y=new sw(g,I,D,$,U,Lt,W),v=new gy(S),C=new xy(S),k=new Pv(g),kt=new fy(g,k),z=new yy(g,k,W,kt),G=new by(g,z,k,W),It=new Ey(g,U,y),ft=new my($),ct=new GS(S,v,C,I,U,kt,ft),ut=new dw(S,$),pt=new VS,Et=new KS(I),Rt=new hy(S,v,C,D,G,f,l),Mt=new tw(S,G,U),B=new pw(g,W,U,D),bt=new dy(g,I,W),Ht=new Sy(g,I,W),W.programs=ct.programs,S.capabilities=U,S.extensions=I,S.properties=$,S.renderLists=pt,S.shadowMap=Mt,S.state=D,S.info=W}_t();const et=new hw(S,g);this.xr=et,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=I.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=I.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(at,V,!1))},this.getSize=function(A){return A.set(at,V)},this.setSize=function(A,Y,rt=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=A,V=Y,e.width=Math.floor(A*Q),e.height=Math.floor(Y*Q),rt===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(at*Q,V*Q).floor()},this.setDrawingBufferSize=function(A,Y,rt){at=A,V=Y,Q=rt,e.width=Math.floor(A*rt),e.height=Math.floor(Y*rt),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,Y,rt,it){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,Y,rt,it),D.viewport(M.copy(yt).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(gt)},this.setScissor=function(A,Y,rt,it){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,Y,rt,it),D.scissor(E.copy(gt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(A){D.setScissorTest(Pt=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){mt=A},this.getClearColor=function(A){return A.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(A=!0,Y=!0,rt=!0){let it=0;if(A){let j=!1;if(R!==null){const Tt=R.texture.format;j=Tt===hu||Tt===uu||Tt===cu}if(j){const Tt=R.texture.type,Nt=Tt===bi||Tt===Ts||Tt===to||Tt===mr||Tt===au||Tt===lu,zt=Rt.getClearColor(),Vt=Rt.getClearAlpha(),Kt=zt.r,Zt=zt.g,Wt=zt.b;Nt?(d[0]=Kt,d[1]=Zt,d[2]=Wt,d[3]=Vt,g.clearBufferuiv(g.COLOR,0,d)):(_[0]=Kt,_[1]=Zt,_[2]=Wt,_[3]=Vt,g.clearBufferiv(g.COLOR,0,_))}else it|=g.COLOR_BUFFER_BIT}Y&&(it|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),rt&&(it|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),pt.dispose(),Et.dispose(),$.dispose(),v.dispose(),C.dispose(),G.dispose(),kt.dispose(),B.dispose(),ct.dispose(),et.dispose(),et.removeEventListener("sessionstart",pe),et.removeEventListener("sessionend",Se),ue.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=W.autoReset,Y=Mt.enabled,rt=Mt.autoUpdate,it=Mt.needsUpdate,j=Mt.type;_t(),W.autoReset=A,Mt.enabled=Y,Mt.autoUpdate=rt,Mt.needsUpdate=it,Mt.type=j}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ot(A){const Y=A.target;Y.removeEventListener("dispose",Ot),Xt(Y)}function Xt(A){Jt(A),$.remove(A)}function Jt(A){const Y=$.get(A).programs;Y!==void 0&&(Y.forEach(function(rt){ct.releaseProgram(rt)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,rt,it,j,Tt){Y===null&&(Y=ht);const Nt=j.isMesh&&j.matrixWorld.determinant()<0,zt=ai(A,Y,rt,it,j);D.setMaterial(it,Nt);let Vt=rt.index,Kt=1;if(it.wireframe===!0){if(Vt=z.getWireframeAttribute(rt),Vt===void 0)return;Kt=2}const Zt=rt.drawRange,Wt=rt.attributes.position;let ae=Zt.start*Kt,_e=(Zt.start+Zt.count)*Kt;Tt!==null&&(ae=Math.max(ae,Tt.start*Kt),_e=Math.min(_e,(Tt.start+Tt.count)*Kt)),Vt!==null?(ae=Math.max(ae,0),_e=Math.min(_e,Vt.count)):Wt!=null&&(ae=Math.max(ae,0),_e=Math.min(_e,Wt.count));const Te=_e-ae;if(Te<0||Te===1/0)return;kt.setup(j,it,zt,rt,Vt);let en,le=bt;if(Vt!==null&&(en=k.get(Vt),le=Ht,le.setIndex(en)),j.isMesh)it.wireframe===!0?(D.setLineWidth(it.wireframeLinewidth*tt()),le.setMode(g.LINES)):le.setMode(g.TRIANGLES);else if(j.isLine){let qt=it.linewidth;qt===void 0&&(qt=1),D.setLineWidth(qt*tt()),j.isLineSegments?le.setMode(g.LINES):j.isLineLoop?le.setMode(g.LINE_LOOP):le.setMode(g.LINE_STRIP)}else j.isPoints?le.setMode(g.POINTS):j.isSprite&&le.setMode(g.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)le.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))le.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,Ye=j._multiDrawCounts,At=j._multiDrawCount,Ie=Vt?k.get(Vt).bytesPerElement:1,Be=$.get(it).currentProgram.getUniforms();for(let xe=0;xe<At;xe++)Be.setValue(g,"_gl_DrawID",xe),le.render(qt[xe]/Ie,Ye[xe])}else if(j.isInstancedMesh)le.renderInstances(ae,Te,j.count);else if(rt.isInstancedBufferGeometry){const qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,qt);le.renderInstances(ae,Te,Ye)}else le.render(ae,Te)};function Yt(A,Y,rt){A.transparent===!0&&A.side===ce&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,qe(A,Y,rt),A.side=Ji,A.needsUpdate=!0,qe(A,Y,rt),A.side=ce):qe(A,Y,rt)}this.compile=function(A,Y,rt=null){rt===null&&(rt=A),p=Et.get(rt),p.init(Y),b.push(p),rt.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),A!==rt&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const it=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Nt=0;Nt<Tt.length;Nt++){const zt=Tt[Nt];Yt(zt,rt,j),it.add(zt)}else Yt(Tt,rt,j),it.add(Tt)}),b.pop(),p=null,it},this.compileAsync=function(A,Y,rt=null){const it=this.compile(A,Y,rt);return new Promise(j=>{function Tt(){if(it.forEach(function(Nt){$.get(Nt).currentProgram.isReady()&&it.delete(Nt)}),it.size===0){j(A);return}setTimeout(Tt,10)}I.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let te=null;function se(A){te&&te(A)}function pe(){ue.stop()}function Se(){ue.start()}const ue=new rp;ue.setAnimationLoop(se),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(A){te=A,et.setAnimationLoop(A),A===null?ue.stop():ue.start()},et.addEventListener("sessionstart",pe),et.addEventListener("sessionend",Se),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(Y),Y=et.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,Y,R),p=Et.get(A,b.length),p.init(Y),b.push(p),N.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Bt.setFromProjectionMatrix(N),dt=this.localClippingEnabled,ot=ft.init(this.clippingPlanes,dt),x=pt.get(A,m.length),x.init(),m.push(x),et.enabled===!0&&et.isPresenting===!0){const Tt=S.xr.getDepthSensingMesh();Tt!==null&&Pe(Tt,Y,-1/0,S.sortObjects)}Pe(A,Y,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(X,mt),wt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,wt&&Rt.addToRenderList(x,A),this.info.render.frame++,ot===!0&&ft.beginShadows();const rt=p.state.shadowsArray;Mt.render(rt,A,Y),ot===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=x.opaque,j=x.transmissive;if(p.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(j.length>0)for(let Nt=0,zt=Tt.length;Nt<zt;Nt++){const Vt=Tt[Nt];Oe(it,j,A,Vt)}wt&&Rt.render(A);for(let Nt=0,zt=Tt.length;Nt<zt;Nt++){const Vt=Tt[Nt];ge(x,A,Vt,Vt.viewport)}}else j.length>0&&Oe(it,j,A,Y),wt&&Rt.render(A),ge(x,A,Y);R!==null&&(y.updateMultisampleRenderTarget(R),y.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(S,A,Y),kt.resetDefaultState(),O=-1,nt=null,b.pop(),b.length>0?(p=b[b.length-1],ot===!0&&ft.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Pe(A,Y,rt,it){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Bt.intersectsSprite(A)){it&&st.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Nt=G.update(A),zt=A.material;zt.visible&&x.push(A,Nt,zt,rt,st.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Bt.intersectsObject(A))){const Nt=G.update(A),zt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),st.copy(A.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),st.copy(Nt.boundingSphere.center)),st.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(zt)){const Vt=Nt.groups;for(let Kt=0,Zt=Vt.length;Kt<Zt;Kt++){const Wt=Vt[Kt],ae=zt[Wt.materialIndex];ae&&ae.visible&&x.push(A,Nt,ae,rt,st.z,Wt)}}else zt.visible&&x.push(A,Nt,zt,rt,st.z,null)}}const Tt=A.children;for(let Nt=0,zt=Tt.length;Nt<zt;Nt++)Pe(Tt[Nt],Y,rt,it)}function ge(A,Y,rt,it){const j=A.opaque,Tt=A.transmissive,Nt=A.transparent;p.setupLightsView(rt),ot===!0&&ft.setGlobalState(S.clippingPlanes,rt),it&&D.viewport(M.copy(it)),j.length>0&&be(j,Y,rt),Tt.length>0&&be(Tt,Y,rt),Nt.length>0&&be(Nt,Y,rt),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Oe(A,Y,rt,it){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[it.id]===void 0&&(p.state.transmissionRenderTarget[it.id]=new As(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?lo:bi,minFilter:ws,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const Tt=p.state.transmissionRenderTarget[it.id],Nt=it.viewport||M;Tt.setSize(Nt.z,Nt.w);const zt=S.getRenderTarget();S.setRenderTarget(Tt),S.getClearColor(H),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),wt&&Rt.render(rt);const Vt=S.toneMapping;S.toneMapping=ji;const Kt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),p.setupLightsView(it),ot===!0&&ft.setGlobalState(S.clippingPlanes,it),be(A,rt,it),y.updateMultisampleRenderTarget(Tt),y.updateRenderTargetMipmap(Tt),I.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Wt=0,ae=Y.length;Wt<ae;Wt++){const _e=Y[Wt],Te=_e.object,en=_e.geometry,le=_e.material,qt=_e.group;if(le.side===ce&&Te.layers.test(it.layers)){const Ye=le.side;le.side=_n,le.needsUpdate=!0,Je(Te,rt,it,en,le,qt),le.side=Ye,le.needsUpdate=!0,Zt=!0}}Zt===!0&&(y.updateMultisampleRenderTarget(Tt),y.updateRenderTargetMipmap(Tt))}S.setRenderTarget(zt),S.setClearColor(H,Z),Kt!==void 0&&(it.viewport=Kt),S.toneMapping=Vt}function be(A,Y,rt){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const Nt=A[j],zt=Nt.object,Vt=Nt.geometry,Kt=it===null?Nt.material:it,Zt=Nt.group;zt.layers.test(rt.layers)&&Je(zt,Y,rt,Vt,Kt,Zt)}}function Je(A,Y,rt,it,j,Tt){A.onBeforeRender(S,Y,rt,it,j,Tt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(S,Y,rt,it,A,Tt),j.transparent===!0&&j.side===ce&&j.forceSinglePass===!1?(j.side=_n,j.needsUpdate=!0,S.renderBufferDirect(rt,Y,it,j,A,Tt),j.side=Ji,j.needsUpdate=!0,S.renderBufferDirect(rt,Y,it,j,A,Tt),j.side=ce):S.renderBufferDirect(rt,Y,it,j,A,Tt),A.onAfterRender(S,Y,rt,it,j,Tt)}function qe(A,Y,rt){Y.isScene!==!0&&(Y=ht);const it=$.get(A),j=p.state.lights,Tt=p.state.shadowsArray,Nt=j.state.version,zt=ct.getParameters(A,j.state,Tt,Y,rt),Vt=ct.getProgramCacheKey(zt);let Kt=it.programs;it.environment=A.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",Ot),Kt=new Map,it.programs=Kt);let Zt=Kt.get(Vt);if(Zt!==void 0){if(it.currentProgram===Zt&&it.lightsStateVersion===Nt)return Ls(A,zt),Zt}else zt.uniforms=ct.getUniforms(A),A.onBeforeCompile(zt,S),Zt=ct.acquireProgram(zt,Vt),Kt.set(Vt,Zt),it.uniforms=zt.uniforms;const Wt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=ft.uniform),Ls(A,zt),it.needsLights=Ua(A),it.lightsStateVersion=Nt,it.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),it.currentProgram=Zt,it.uniformsList=null,Zt}function oi(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=sa.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ls(A,Y){const rt=$.get(A);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function ai(A,Y,rt,it,j){Y.isScene!==!0&&(Y=ht),y.resetTextureUnits();const Tt=Y.fog,Nt=it.isMeshStandardMaterial?Y.environment:null,zt=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:es,Vt=(it.isMeshStandardMaterial?C:v).get(it.envMap||Nt),Kt=it.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Zt=!!rt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Wt=!!rt.morphAttributes.position,ae=!!rt.morphAttributes.normal,_e=!!rt.morphAttributes.color;let Te=ji;it.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Te=S.toneMapping);const en=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,le=en!==void 0?en.length:0,qt=$.get(it),Ye=p.state.lights;if(ot===!0&&(dt===!0||A!==nt)){const ke=A===nt&&it.id===O;ft.setState(it,A,ke)}let At=!1;it.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ye.state.version||qt.outputColorSpace!==zt||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==Vt||it.fog===!0&&qt.fog!==Tt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==ft.numPlanes||qt.numIntersection!==ft.numIntersection)||qt.vertexAlphas!==Kt||qt.vertexTangents!==Zt||qt.morphTargets!==Wt||qt.morphNormals!==ae||qt.morphColors!==_e||qt.toneMapping!==Te||qt.morphTargetsCount!==le)&&(At=!0):(At=!0,qt.__version=it.version);let Ie=qt.currentProgram;At===!0&&(Ie=qe(it,Y,j));let Be=!1,xe=!1,gn=!1;const Me=Ie.getUniforms(),Qe=qt.uniforms;if(D.useProgram(Ie.program)&&(Be=!0,xe=!0,gn=!0),it.id!==O&&(O=it.id,xe=!0),Be||nt!==A){U.reverseDepthBuffer?(St.copy(A.projectionMatrix),iv(St),sv(St),Me.setValue(g,"projectionMatrix",St)):Me.setValue(g,"projectionMatrix",A.projectionMatrix),Me.setValue(g,"viewMatrix",A.matrixWorldInverse);const ke=Me.map.cameraPosition;ke!==void 0&&ke.setValue(g,lt.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Me.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Me.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),nt!==A&&(nt=A,xe=!0,gn=!0)}if(j.isSkinnedMesh){Me.setOptional(g,j,"bindMatrix"),Me.setOptional(g,j,"bindMatrixInverse");const ke=j.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Me.setValue(g,"boneTexture",ke.boneTexture,y))}j.isBatchedMesh&&(Me.setOptional(g,j,"batchingTexture"),Me.setValue(g,"batchingTexture",j._matricesTexture,y),Me.setOptional(g,j,"batchingIdTexture"),Me.setValue(g,"batchingIdTexture",j._indirectTexture,y),Me.setOptional(g,j,"batchingColorTexture"),j._colorsTexture!==null&&Me.setValue(g,"batchingColorTexture",j._colorsTexture,y));const Xn=rt.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&It.update(j,rt,Ie),(xe||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Me.setValue(g,"receiveShadow",j.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Qe.envMap.value=Vt,Qe.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Y.environment!==null&&(Qe.envMapIntensity.value=Y.environmentIntensity),xe&&(Me.setValue(g,"toneMappingExposure",S.toneMappingExposure),qt.needsLights&&Ds(Qe,gn),Tt&&it.fog===!0&&ut.refreshFogUniforms(Qe,Tt),ut.refreshMaterialUniforms(Qe,it,Q,V,p.state.transmissionRenderTarget[A.id]),sa.upload(g,oi(qt),Qe,y)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(sa.upload(g,oi(qt),Qe,y),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Me.setValue(g,"center",j.center),Me.setValue(g,"modelViewMatrix",j.modelViewMatrix),Me.setValue(g,"normalMatrix",j.normalMatrix),Me.setValue(g,"modelMatrix",j.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const ke=it.uniformsGroups;for(let In=0,as=ke.length;In<as;In++){const li=ke[In];B.update(li,Ie),B.bind(li,Ie)}}return Ie}function Ds(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Ua(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,Y,rt){$.get(A.texture).__webglTexture=Y,$.get(A.depthTexture).__webglTexture=rt;const it=$.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=rt===void 0,it.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){const rt=$.get(A);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,rt=0){R=A,F=Y,P=rt;let it=!0,j=null,Tt=!1,Nt=!1;if(A){const Vt=$.get(A);if(Vt.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),it=!1;else if(Vt.__webglFramebuffer===void 0)y.setupRenderTarget(A);else if(Vt.__hasExternalTextures)y.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Vt.__boundDepthTexture!==Wt){if(Wt!==null&&$.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Nt=!0);const Zt=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[Y])?j=Zt[Y][rt]:j=Zt[Y],Tt=!0):A.samples>0&&y.useMultisampledRTT(A)===!1?j=$.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?j=Zt[rt]:j=Zt,M.copy(A.viewport),E.copy(A.scissor),K=A.scissorTest}else M.copy(yt).multiplyScalar(Q).floor(),E.copy(gt).multiplyScalar(Q).floor(),K=Pt;if(D.bindFramebuffer(g.FRAMEBUFFER,j)&&it&&D.drawBuffers(A,j),D.viewport(M),D.scissor(E),D.setScissorTest(K),Tt){const Vt=$.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Vt.__webglTexture,rt)}else if(Nt){const Vt=$.get(A.texture),Kt=Y||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Vt.__webglTexture,rt||0,Kt)}O=-1},this.readRenderTargetPixels=function(A,Y,rt,it,j,Tt,Nt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){D.bindFramebuffer(g.FRAMEBUFFER,zt);try{const Vt=A.texture,Kt=Vt.format,Zt=Vt.type;if(!U.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-it&&rt>=0&&rt<=A.height-j&&g.readPixels(Y,rt,it,j,Lt.convert(Kt),Lt.convert(Zt),Tt)}finally{const Vt=R!==null?$.get(R).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,rt,it,j,Tt,Nt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){const Vt=A.texture,Kt=Vt.format,Zt=Vt.type;if(!U.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-it&&rt>=0&&rt<=A.height-j){D.bindFramebuffer(g.FRAMEBUFFER,zt);const Wt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Wt),g.bufferData(g.PIXEL_PACK_BUFFER,Tt.byteLength,g.STREAM_READ),g.readPixels(Y,rt,it,j,Lt.convert(Kt),Lt.convert(Zt),0);const ae=R!==null?$.get(R).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,ae);const _e=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await nv(g,_e,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Wt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Tt),g.deleteBuffer(Wt),g.deleteSync(_e),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,rt=0){A.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);const it=Math.pow(2,-rt),j=Math.floor(A.image.width*it),Tt=Math.floor(A.image.height*it),Nt=Y!==null?Y.x:0,zt=Y!==null?Y.y:0;y.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,rt,0,0,Nt,zt,j,Tt),D.unbindTexture()},this.copyTextureToTexture=function(A,Y,rt=null,it=null,j=0){A.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],Y=arguments[2],j=arguments[3]||0,rt=null);let Tt,Nt,zt,Vt,Kt,Zt;rt!==null?(Tt=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,zt=rt.min.x,Vt=rt.min.y):(Tt=A.image.width,Nt=A.image.height,zt=0,Vt=0),it!==null?(Kt=it.x,Zt=it.y):(Kt=0,Zt=0);const Wt=Lt.convert(Y.format),ae=Lt.convert(Y.type);y.setTexture2D(Y,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const _e=g.getParameter(g.UNPACK_ROW_LENGTH),Te=g.getParameter(g.UNPACK_IMAGE_HEIGHT),en=g.getParameter(g.UNPACK_SKIP_PIXELS),le=g.getParameter(g.UNPACK_SKIP_ROWS),qt=g.getParameter(g.UNPACK_SKIP_IMAGES),Ye=A.isCompressedTexture?A.mipmaps[j]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Ye.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ye.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,zt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Vt),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,j,Kt,Zt,Tt,Nt,Wt,ae,Ye.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,j,Kt,Zt,Ye.width,Ye.height,Wt,Ye.data):g.texSubImage2D(g.TEXTURE_2D,j,Kt,Zt,Tt,Nt,Wt,ae,Ye),g.pixelStorei(g.UNPACK_ROW_LENGTH,_e),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Te),g.pixelStorei(g.UNPACK_SKIP_PIXELS,en),g.pixelStorei(g.UNPACK_SKIP_ROWS,le),g.pixelStorei(g.UNPACK_SKIP_IMAGES,qt),j===0&&Y.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,rt=null,it=null,j=0){A.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,it=arguments[1]||null,A=arguments[2],Y=arguments[3],j=arguments[4]||0);let Tt,Nt,zt,Vt,Kt,Zt,Wt,ae,_e;const Te=A.isCompressedTexture?A.mipmaps[j]:A.image;rt!==null?(Tt=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,zt=rt.max.z-rt.min.z,Vt=rt.min.x,Kt=rt.min.y,Zt=rt.min.z):(Tt=Te.width,Nt=Te.height,zt=Te.depth,Vt=0,Kt=0,Zt=0),it!==null?(Wt=it.x,ae=it.y,_e=it.z):(Wt=0,ae=0,_e=0);const en=Lt.convert(Y.format),le=Lt.convert(Y.type);let qt;if(Y.isData3DTexture)y.setTexture3D(Y,0),qt=g.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)y.setTexture2DArray(Y,0),qt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ye=g.getParameter(g.UNPACK_ROW_LENGTH),At=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ie=g.getParameter(g.UNPACK_SKIP_PIXELS),Be=g.getParameter(g.UNPACK_SKIP_ROWS),xe=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,Te.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Te.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Vt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Kt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Zt),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(qt,j,Wt,ae,_e,Tt,Nt,zt,en,le,Te.data):Y.isCompressedArrayTexture?g.compressedTexSubImage3D(qt,j,Wt,ae,_e,Tt,Nt,zt,en,Te.data):g.texSubImage3D(qt,j,Wt,ae,_e,Tt,Nt,zt,en,le,Te),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ye),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,At),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ie),g.pixelStorei(g.UNPACK_SKIP_ROWS,Be),g.pixelStorei(g.UNPACK_SKIP_IMAGES,xe),j===0&&Y.generateMipmaps&&g.generateMipmap(qt),D.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?y.setTextureCube(A,0):A.isData3DTexture?y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?y.setTexture2DArray(A,0):y.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){F=0,P=0,R=null,D.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===fu?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Pa?"display-p3":"srgb"}}class Ai extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ut:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new q,s=[],r=[],o=[],a=new q,l=new Ce;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new q)}r[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(je(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(je(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _u extends ri{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ut){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mw extends _u{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const ko=new q,Rl=new vu,Cl=new vu,Pl=new vu;class gw extends ri{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new q){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ko.subVectors(s[0],s[1]).add(s[0]),c=ko);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ko.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ko),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),Rl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,x,p),Cl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,x,p),Pl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,x,p)}else this.curveType==="catmullrom"&&(Rl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Cl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Pl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Rl.calc(l),Cl.calc(l),Pl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function df(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function _w(n,t){const e=1-n;return e*e*t}function vw(n,t){return 2*(1-n)*n*t}function xw(n,t){return n*n*t}function Vr(n,t,e,i){return _w(n,t)+vw(n,e)+xw(n,i)}function Mw(n,t){const e=1-n;return e*e*e*t}function yw(n,t){const e=1-n;return 3*e*e*n*t}function Sw(n,t){return 3*(1-n)*n*n*t}function ww(n,t){return n*n*n*t}function Wr(n,t,e,i,s){return Mw(n,t)+yw(n,e)+Sw(n,i)+ww(n,s)}class fp extends ri{constructor(t=new Ut,e=new Ut,i=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ut){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(t,s.x,r.x,o.x,a.x),Wr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ew extends ri{constructor(t=new q,e=new q,i=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new q){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(t,s.x,r.x,o.x,a.x),Wr(t,s.y,r.y,o.y,a.y),Wr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dp extends ri{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bw extends ri{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pp extends ri{constructor(t=new Ut,e=new Ut,i=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ut){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tw extends ri{constructor(t=new q,e=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new q){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y),Vr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mp extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(df(a,l.x,c.x,h.x,u.x),df(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ut().fromArray(s))}return this}}var Ic=Object.freeze({__proto__:null,ArcCurve:mw,CatmullRomCurve3:gw,CubicBezierCurve:fp,CubicBezierCurve3:Ew,EllipseCurve:_u,LineCurve:dp,LineCurve3:bw,QuadraticBezierCurve:pp,QuadraticBezierCurve3:Tw,SplineCurve:mp});class Aw extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ic[s.type]().fromJSON(s))}return this}}class Lc extends Aw{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new dp(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new pp(this.currentPoint.clone(),new Ut(t,e),new Ut(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new fp(this.currentPoint.clone(),new Ut(t,e),new Ut(i,s),new Ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new mp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new _u(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ee extends Pn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new q,h=new Ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Re extends Pn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const x=[],p=i/2;let m=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(d,2));function b(){const w=new q,F=new q;let P=0;const R=(e-t)/i;for(let O=0;O<=r;O++){const nt=[],M=O/r,E=M*(e-t)+t;for(let K=0;K<=s;K++){const H=K/s,Z=H*l+a,at=Math.sin(Z),V=Math.cos(Z);F.x=E*at,F.y=-M*i+p,F.z=E*V,u.push(F.x,F.y,F.z),w.set(at,R,V).normalize(),f.push(w.x,w.y,w.z),d.push(H,1-M),nt.push(_++)}x.push(nt)}for(let O=0;O<s;O++)for(let nt=0;nt<r;nt++){const M=x[nt][O],E=x[nt+1][O],K=x[nt+1][O+1],H=x[nt][O+1];t>0&&(h.push(M,E,H),P+=3),e>0&&(h.push(E,K,H),P+=3)}c.addGroup(m,P,0),m+=P}function S(w){const F=_,P=new Ut,R=new q;let O=0;const nt=w===!0?t:e,M=w===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,p*M,0),f.push(0,M,0),d.push(.5,.5),_++;const E=_;for(let K=0;K<=s;K++){const Z=K/s*l+a,at=Math.cos(Z),V=Math.sin(Z);R.x=nt*V,R.y=p*M,R.z=nt*at,u.push(R.x,R.y,R.z),f.push(0,M,0),P.x=at*.5+.5,P.y=V*.5*M+.5,d.push(P.x,P.y),_++}for(let K=0;K<s;K++){const H=F+K,Z=E+K;w===!0?h.push(Z,Z+1,H):h.push(Z+1,Z,H),O+=3}c.addGroup(m,O,w===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class En extends Lc{constructor(t){super(t),this.uuid=Ps(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Lc().fromJSON(s))}return this}}const Rw={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=gp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=Dw(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let _=e;_<s;_+=e)u=n[_],f=n[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return io(r,o,e,a,l,d,0),o}};function gp(n,t,e,i,s){let r,o;if(s===Ww(n,t,e,i)>0)for(r=t;r<e;r+=i)o=pf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=pf(r,n[r],n[r+1],o);return o&&Da(o,o.next)&&(ro(o),o=o.next),o}function Rs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Da(e,e.next)||Le(e.prev,e,e.next)===0)){if(ro(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function io(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Bw(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Pw(n,i,s,r):Cw(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ro(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Iw(Rs(n),t,e),io(n,t,e,i,s,r,2)):o===2&&Lw(n,t,e,i,s,r):io(Rs(n),t,e,i,s,r,1);break}}}function Cw(n){const t=n.prev,e=n,i=n.next;if(Le(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=d&&tr(s,a,r,l,o,c,_.x,_.y)&&Le(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Pw(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Le(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Dc(d,_,t,e,i),b=Dc(x,p,t,e,i);let S=n.prevZ,w=n.nextZ;for(;S&&S.z>=m&&w&&w.z<=b;){if(S.x>=d&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&tr(a,h,l,u,c,f,S.x,S.y)&&Le(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=d&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&tr(a,h,l,u,c,f,w.x,w.y)&&Le(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&tr(a,h,l,u,c,f,S.x,S.y)&&Le(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=b;){if(w.x>=d&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&tr(a,h,l,u,c,f,w.x,w.y)&&Le(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Iw(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Da(s,r)&&_p(s,i,i.next,r)&&so(s,r)&&so(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ro(i),ro(i.next),i=n=r),i=i.next}while(i!==n);return Rs(i)}function Lw(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hw(o,a)){let l=vp(o,a);o=Rs(o,o.next),l=Rs(l,l.next),io(o,t,e,i,s,r,0),io(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Dw(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=gp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Gw(c));for(s.sort(Uw),r=0;r<s.length;r++)e=Nw(s[r],e);return e}function Uw(n,t){return n.x-t.x}function Nw(n,t){const e=Fw(n,t);if(!e)return t;const i=vp(e,n);return Rs(i,i.next),Rs(e,e.next)}function Fw(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&tr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),so(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Ow(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Ow(n,t){return Le(n.prev,n,t.prev)<0&&Le(t.next,n,n.next)<0}function Bw(n,t,e,i){let s=n;do s.z===0&&(s.z=Dc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,zw(s)}function zw(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Dc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Gw(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function tr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Hw(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!kw(n,t)&&(so(n,t)&&so(t,n)&&Vw(n,t)&&(Le(n.prev,n,t.prev)||Le(n,t.prev,t))||Da(n,t)&&Le(n.prev,n,n.next)>0&&Le(t.prev,t,t.next)>0)}function Le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Da(n,t){return n.x===t.x&&n.y===t.y}function _p(n,t,e,i){const s=Wo(Le(n,t,e)),r=Wo(Le(n,t,i)),o=Wo(Le(e,i,n)),a=Wo(Le(e,i,t));return!!(s!==r&&o!==a||s===0&&Vo(n,e,t)||r===0&&Vo(n,i,t)||o===0&&Vo(e,n,i)||a===0&&Vo(e,t,i))}function Vo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Wo(n){return n>0?1:n<0?-1:0}function kw(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&_p(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function so(n,t){return Le(n.prev,n,n.next)<0?Le(n,t,n.next)>=0&&Le(n,n.prev,t)>=0:Le(n,t,n.prev)<0||Le(n,n.next,t)<0}function Vw(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function vp(n,t){const e=new Uc(n.i,n.x,n.y),i=new Uc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function pf(n,t,e,i){const s=new Uc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ro(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Uc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ww(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class lr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return lr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];mf(t),gf(i,t);let o=t.length;e.forEach(mf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,gf(i,e[l]);const a=Rw.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function mf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function gf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Cn extends Pn{constructor(t=new En([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Xw;let S,w=!1,F,P,R,O;m&&(S=m.getSpacedPoints(h),w=!0,f=!1,F=m.computeFrenetFrames(h,!1),P=new q,R=new q,O=new q),f||(p=0,d=0,_=0,x=0);const nt=a.extractPoints(c);let M=nt.shape;const E=nt.holes;if(!lr.isClockWise(M)){M=M.reverse();for(let tt=0,g=E.length;tt<g;tt++){const T=E[tt];lr.isClockWise(T)&&(E[tt]=T.reverse())}}const H=lr.triangulateShape(M,E),Z=M;for(let tt=0,g=E.length;tt<g;tt++){const T=E[tt];M=M.concat(T)}function at(tt,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(g,T)}const V=M.length,Q=H.length;function X(tt,g,T){let I,U,D;const W=tt.x-g.x,$=tt.y-g.y,y=T.x-tt.x,v=T.y-tt.y,C=W*W+$*$,k=W*v-$*y;if(Math.abs(k)>Number.EPSILON){const z=Math.sqrt(C),G=Math.sqrt(y*y+v*v),ct=g.x-$/z,ut=g.y+W/z,pt=T.x-v/G,Et=T.y+y/G,ft=((pt-ct)*v-(Et-ut)*y)/(W*v-$*y);I=ct+W*ft-tt.x,U=ut+$*ft-tt.y;const Mt=I*I+U*U;if(Mt<=2)return new Ut(I,U);D=Math.sqrt(Mt/2)}else{let z=!1;W>Number.EPSILON?y>Number.EPSILON&&(z=!0):W<-Number.EPSILON?y<-Number.EPSILON&&(z=!0):Math.sign($)===Math.sign(v)&&(z=!0),z?(I=-$,U=W,D=Math.sqrt(C)):(I=W,U=$,D=Math.sqrt(C/2))}return new Ut(I/D,U/D)}const mt=[];for(let tt=0,g=Z.length,T=g-1,I=tt+1;tt<g;tt++,T++,I++)T===g&&(T=0),I===g&&(I=0),mt[tt]=X(Z[tt],Z[T],Z[I]);const yt=[];let gt,Pt=mt.concat();for(let tt=0,g=E.length;tt<g;tt++){const T=E[tt];gt=[];for(let I=0,U=T.length,D=U-1,W=I+1;I<U;I++,D++,W++)D===U&&(D=0),W===U&&(W=0),gt[I]=X(T[I],T[D],T[W]);yt.push(gt),Pt=Pt.concat(gt)}for(let tt=0;tt<p;tt++){const g=tt/p,T=d*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+x;for(let U=0,D=Z.length;U<D;U++){const W=at(Z[U],mt[U],I);N(W.x,W.y,-T)}for(let U=0,D=E.length;U<D;U++){const W=E[U];gt=yt[U];for(let $=0,y=W.length;$<y;$++){const v=at(W[$],gt[$],I);N(v.x,v.y,-T)}}}const Bt=_+x;for(let tt=0;tt<V;tt++){const g=f?at(M[tt],Pt[tt],Bt):M[tt];w?(R.copy(F.normals[0]).multiplyScalar(g.x),P.copy(F.binormals[0]).multiplyScalar(g.y),O.copy(S[0]).add(R).add(P),N(O.x,O.y,O.z)):N(g.x,g.y,0)}for(let tt=1;tt<=h;tt++)for(let g=0;g<V;g++){const T=f?at(M[g],Pt[g],Bt):M[g];w?(R.copy(F.normals[tt]).multiplyScalar(T.x),P.copy(F.binormals[tt]).multiplyScalar(T.y),O.copy(S[tt]).add(R).add(P),N(O.x,O.y,O.z)):N(T.x,T.y,u/h*tt)}for(let tt=p-1;tt>=0;tt--){const g=tt/p,T=d*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+x;for(let U=0,D=Z.length;U<D;U++){const W=at(Z[U],mt[U],I);N(W.x,W.y,u+T)}for(let U=0,D=E.length;U<D;U++){const W=E[U];gt=yt[U];for(let $=0,y=W.length;$<y;$++){const v=at(W[$],gt[$],I);w?N(v.x,v.y+S[h-1].y,S[h-1].x+T):N(v.x,v.y,u+T)}}}ot(),dt();function ot(){const tt=s.length/3;if(f){let g=0,T=V*g;for(let I=0;I<Q;I++){const U=H[I];lt(U[2]+T,U[1]+T,U[0]+T)}g=h+p*2,T=V*g;for(let I=0;I<Q;I++){const U=H[I];lt(U[0]+T,U[1]+T,U[2]+T)}}else{for(let g=0;g<Q;g++){const T=H[g];lt(T[2],T[1],T[0])}for(let g=0;g<Q;g++){const T=H[g];lt(T[0]+V*h,T[1]+V*h,T[2]+V*h)}}i.addGroup(tt,s.length/3-tt,0)}function dt(){const tt=s.length/3;let g=0;St(Z,g),g+=Z.length;for(let T=0,I=E.length;T<I;T++){const U=E[T];St(U,g),g+=U.length}i.addGroup(tt,s.length/3-tt,1)}function St(tt,g){let T=tt.length;for(;--T>=0;){const I=T;let U=T-1;U<0&&(U=tt.length-1);for(let D=0,W=h+p*2;D<W;D++){const $=V*D,y=V*(D+1),v=g+I+$,C=g+U+$,k=g+U+y,z=g+I+y;st(v,C,k,z)}}}function N(tt,g,T){l.push(tt),l.push(g),l.push(T)}function lt(tt,g,T){ht(tt),ht(g),ht(T);const I=s.length/3,U=b.generateTopUV(i,s,I-3,I-2,I-1);wt(U[0]),wt(U[1]),wt(U[2])}function st(tt,g,T,I){ht(tt),ht(g),ht(I),ht(g),ht(T),ht(I);const U=s.length/3,D=b.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);wt(D[0]),wt(D[1]),wt(D[3]),wt(D[1]),wt(D[2]),wt(D[3])}function ht(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function wt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return qw(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ic[s.type]().fromJSON(s)),new Cn(i,t.options)}}const Xw={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new Ut(r,o),new Ut(a,l),new Ut(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],_=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ut(o,1-l),new Ut(c,1-u),new Ut(f,1-_),new Ut(x,1-m)]:[new Ut(a,1-l),new Ut(h,1-u),new Ut(d,1-_),new Ut(p,1-m)]}};function qw(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ct extends Pn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new q,f=new q,d=[],_=[],x=[],p=[];for(let m=0;m<=i;m++){const b=[],S=m/i;let w=0;m===0&&o===0?w=.5/e:m===i&&l===Math.PI&&(w=-.5/e);for(let F=0;F<=e;F++){const P=F/e;u.x=-t*Math.cos(s+P*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+P*r)*Math.sin(o+S*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(P+w,1-S),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){const S=h[m][b+1],w=h[m][b],F=h[m+1][b],P=h[m+1][b+1];(m!==0||o>0)&&d.push(S,w,P),(m!==i-1||l<Math.PI)&&d.push(w,F,P)}this.setIndex(d),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xu extends Pn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new q,u=new q,f=new q;for(let d=0;d<=i;d++)for(let _=0;_<=s;_++){const x=_/s*r,p=d/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=s;_++){const x=(s+1)*d+_-1,p=(s+1)*(d-1)+_-1,m=(s+1)*(d-1)+_,b=(s+1)*d+_;o.push(x,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ke extends ho{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yd,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ft extends Ke{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const ma={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Yw{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const $w=new Yw;class fo{constructor(t){this.manager=t!==void 0?t:$w,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class Kw extends Error{constructor(t,e){super(t),this.response=e}}class jw extends fo{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ma.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(_i[t]!==void 0){_i[t].push({onLoad:e,onProgress:i,onError:s});return}_i[t]=[],_i[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=_i[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let x=0;const p=new ReadableStream({start(m){b();function b(){u.read().then(({done:S,value:w})=>{if(S)m.close();else{x+=w.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:d});for(let P=0,R=h.length;P<R;P++){const O=h[P];O.onProgress&&O.onProgress(F)}m.enqueue(w),b()}},S=>{m.error(S)})}}});return new Response(p)}else throw new Kw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{ma.add(t,c);const h=_i[t];delete _i[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=_i[t];if(h===void 0)throw this.manager.itemError(t),c;delete _i[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Zw extends fo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ma.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=no("img");function l(){h(),ma.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class ns extends fo{constructor(t){super(t)}load(t,e,i,s){const r=new mn,o=new Zw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Mu extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Il=new Ce,_f=new q,vf=new q;class xp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mu,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;_f.setFromMatrixPosition(t.matrixWorld),e.position.copy(_f),vf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vf),e.updateMatrixWorld(),Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xf=new Ce,Pr=new q,Ll=new q;class Jw extends xp{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Pr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Pr),Ll.copy(i.position),Ll.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ll),i.updateMatrixWorld(),s.makeTranslation(-Pr.x,-Pr.y,-Pr.z),xf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf)}}class is extends Mu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jw}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Qw extends xp{constructor(){super(new op(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ss extends Mu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Qw}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rs extends Mu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Mf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Mf(){return performance.now()}class tE{constructor(){this.type="ShapePath",this.color=new oe,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Lc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,o){return this.currentPath.bezierCurveTo(t,e,i,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const b=[];for(let S=0,w=m.length;S<w;S++){const F=m[S],P=new En;P.curves=F.curves,b.push(P)}return b}function i(m,b){const S=b.length;let w=!1;for(let F=S-1,P=0;P<S;F=P++){let R=b[F],O=b[P],nt=O.x-R.x,M=O.y-R.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(R=b[P],nt=-nt,O=b[F],M=-M),m.y<R.y||m.y>O.y)continue;if(m.y===R.y){if(m.x===R.x)return!0}else{const E=M*(m.x-R.x)-nt*(m.y-R.y);if(E===0)return!0;if(E<0)continue;w=!w}}else{if(m.y!==R.y)continue;if(O.x<=m.x&&m.x<=R.x||R.x<=m.x&&m.x<=O.x)return!0}}return w}const s=lr.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new En,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;const u=[],f=[];let d=[],_=0,x;f[_]=void 0,d[_]=[];for(let m=0,b=r.length;m<b;m++)a=r[m],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new En,p:x},f[_].s.curves=a.curves,h&&_++,d[_]=[]):d[_].push({h:a,p:x[0]});if(!f[0])return e(r);if(f.length>1){let m=!1,b=0;for(let S=0,w=f.length;S<w;S++)u[S]=[];for(let S=0,w=f.length;S<w;S++){const F=d[S];for(let P=0;P<F.length;P++){const R=F[P];let O=!0;for(let nt=0;nt<f.length;nt++)i(R.p,f[nt].p)&&(S!==nt&&b++,O?(O=!1,u[nt].push(R)):m=!0);O&&u[S].push(R)}}b>0&&m===!1&&(d=u)}let p;for(let m=0,b=f.length;m<b;m++){l=f[m].s,c.push(l),p=d[m];for(let S=0,w=p.length;S<w;S++)l.holes.push(p[S].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ru);class os extends fo{constructor(t){super(t)}load(t,e,i,s){const r=this,o=new jw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},i,s)}parse(t){return new eE(t)}}class eE{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=nE(t,e,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function nE(n,t,e){const i=Array.from(n),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=iE(h,s,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function iE(n,t,e,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new tE;let a,l,c,h,u,f,d,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=x.length;p<m;)switch(x[p++]){case"m":a=x[p++]*t+e,l=x[p++]*t+i,o.moveTo(a,l);break;case"l":a=x[p++]*t+e,l=x[p++]*t+i,o.lineTo(a,l);break;case"q":c=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,f=x[p++]*t+i,o.quadraticCurveTo(u,f,c,h);break;case"b":c=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,f=x[p++]*t+i,d=x[p++]*t+e,_=x[p++]*t+i,o.bezierCurveTo(u,f,d,_,c,h);break}}return{offsetX:r.ha*t,path:o}}class Ge extends Cn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const sE=Wn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=$t(null);let i=null,s=$t(!1),r=$t(!1),o=$t(!1);return si(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new Ai,c=new De(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Ti({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new jt,f=new rs(16777215,2);l.add(f);const d=new ss(16777215,4);d.position.set(5,5,5),l.add(d);const _=new is(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new ns,p=x.load("/3d-bear-arts/assets/lv2.jpg"),m=x.load("/3d-bear-arts/assets/lv2.jpg");p.wrapS=p.wrapT=Ue,m.wrapS=m.wrapT=Ue;const b=new Ft({color:8343336,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),S=new Ft({color:5978654,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),w=new Ft({color:13152668,metalness:.2,roughness:.05,bumpMap:p,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:ce});new Ft({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const F=new Ct(1,32,32,0,Math.PI),P=new L(F,w),R=new L(F,b);P.scale.set(.85,.85,.8),R.scale.set(.85,.85,.8),P.position.y=-.2,R.position.y=-.2,P.rotation.y=Math.PI/2,R.rotation.y=Math.PI*1.5;const O=new Ee(1,32),nt=new L(O,b);nt.scale.set(.85,.85,.8),nt.position.set(0,-.2,0),nt.rotation.y=Math.PI/2;const M=new jt;M.add(P),M.add(R),M.add(nt),u.add(M);const E=new Ct(.6,32,32,0,Math.PI),K=new L(E,b);K.scale.set(1,.95,.95),K.position.set(0,1,0),K.rotation.y=Math.PI*1.5;const H=new L(E,w);H.scale.set(1,.95,.95),H.position.set(0,1,0),H.rotation.y=Math.PI/2;const Z=new Ee(.6,32),at=new L(Z,b);at.position.set(0,1,0),at.rotation.y=Math.PI/2,at.scale.set(1,.95,.95);const V=new jt;V.add(K),V.add(H),V.add(at),u.add(V);const Q=new Ct(.25,32,32),X=new L(Q,b);X.position.set(-.45,1.35,-.1),u.add(X);const mt=new L(Q,w);mt.position.set(.45,1.35,-.1),u.add(mt);const yt=new Ct(.25,32,32,Math.PI/2,Math.PI),gt=new L(yt,S);gt.scale.set(1.1,.6,.8),gt.position.set(0,.84,.5),gt.rotation.y=Math.PI;const Pt=new Ct(.25,32,32,Math.PI/2,Math.PI),Bt=new L(Pt,w);Bt.scale.set(1.1,.6,.8),Bt.position.set(0,.84,.5),Bt.rotation.y=0;const ot=new Ee(.25,32),dt=new L(ot,b);dt.scale.set(.8,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI/2;const St=new jt;St.add(gt),St.add(Bt),St.add(dt),u.add(St);const N=new En;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const lt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ft({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const st=new Cn(N,lt),ht=new L(st,b);ht.scale.set(.1,.1,.1),ht.rotation.z=re.degToRad(210),ht.rotation.x=re.degToRad(5),ht.rotation.y=re.degToRad(-45),ht.position.set(-.4,.9,.45);const wt=new L(st,S);wt.scale.set(.6,.5,.5),wt.position.set(.35,0,0),wt.rotation.y=Math.PI,wt.rotation.x=Math.PI;const tt=new L(st,S);tt.scale.set(.2,.2,.2),tt.position.set(.5,-.1,.2),tt.rotation.y=Math.PI,tt.rotation.x=Math.PI,u.add(tt);const g=new Is(1.3,1.2,.6),T=new L(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const I=new xu(.15,.025,10,100);new Ft({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const U=new L(I,b);U.position.set(.35,.1,.1),U.rotation.z=Math.PI/2,U.rotation.x=Math.PI/8,U.rotation.y=Math.PI/14;const D=new L(I,b);D.position.set(.35,.1,.13),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/-8,D.rotation.y=Math.PI/12;const W=new jt;W.add(T),W.add(U),W.add(D),u.add(W);const $=new Ct(.35,32,32),y=new L($,b);y.scale.set(.75,1.25,.65),y.position.set(-.7,-.15,.2),u.add(y);const v=new L($,w);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new Re(.2,.22,.6,32),k=new L(C,b);k.position.set(-.4,-1.05,0),u.add(k);const z=new L(C,w);z.position.set(.4,-1.05,0),u.add(z);const G=new Ct(.3,32,32),ct=new L(G,b);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),u.add(ct);const ut=new L(G,w);ut.scale.set(1,.72,1.5),ut.position.set(.4,-1.45,.17),u.add(ut);const pt=new Ct(.44,32,32),Et=new L(pt,b);Et.position.set(-.15,-.45,-.4),u.add(Et);const ft=new L(pt,w);ft.position.set(.15,-.45,-.4),u.add(ft);const Mt=new Ct(.18,32,32),Rt=new L(Mt,b);Rt.position.set(0,-.35,-.8),u.add(Rt),new os().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(J){const xt=new Ge("X",{font:J,size:.2,depth:.05});new kn({color:0});const vt=new L(xt,S);vt.position.set(-.3,.99,.53),vt.rotation.x=re.degToRad(-5),vt.rotation.y=re.degToRad(-15),u.add(vt);const Ot=new Ge("O",{font:J,size:.2,depth:.05});new kn({color:0});const Xt=new L(Ot,S);Xt.position.set(.14,.99,.53),Xt.rotation.y=re.degToRad(12),Xt.rotation.x=re.degToRad(-5),u.add(Xt)}),Rt.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const bt=()=>{u.rotation.y,u.rotation.x},Ht=()=>{s.value=!0,r.value=!1,o.value=!1},Lt=()=>{s.value=!1,r.value=!0,o.value=!1},kt=()=>{s.value=!1,r.value=!1,bt()},B=J=>{const xt=window.innerWidth/2;J>xt?Ht():Lt(),bt()},_t=J=>{clearTimeout(i),kt(),o.value=!0;const xt={x:J.clientX/window.innerWidth*2-1,y:-(J.clientY/window.innerHeight)*2+1};if(o.value){const vt=xt.x*Math.PI*.2,Ot=xt.y*Math.PI*.2;u.rotation.y=vt,u.rotation.x=Ot}i=setTimeout(()=>{o.value=!1,B(J.clientX)},500)};window.addEventListener("mousemove",_t);const et=J=>{if(o.value){const xt={x:J.clientX/window.innerWidth*2-1,y:-(J.clientY/window.innerHeight)*2+1},vt=xt.x*Math.PI*.2,Ot=xt.y*Math.PI*.2;u.rotation.y=vt,u.rotation.x=Ot}};window.addEventListener("mousemove",et),a(),He(()=>t.bodyPosition,J=>{u.position.set(J.x,J.y,J.z)}),He(()=>t.cameraPosition,J=>{c.position.set(t.bodyPosition.x,1,J),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Ci(),Pi("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2))}}),rE=Ii(sE,[["__scopeId","data-v-f3beb116"]]),oE=Wn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=$t(null);let i=null,s=$t(!1),r=$t(!1),o=$t(!1);return si(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new Ai,c=new De(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Ti({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new jt,f=new rs(16777215,2);l.add(f);const d=new ss(16777215,4);d.position.set(5,5,5),l.add(d);const _=new is(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new ns,p=x.load("/3d-bear-arts/assets/pop6.jpg"),m=x.load("/3d-bear-arts/assets/pop7.jpg");p.wrapS=p.wrapT=Ue,m.wrapS=m.wrapT=Ue;const b=new Ft({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),S=new Ft({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),w=new Ft({color:16766720,map:p,metalness:.3,roughness:.5}),F=new Ft({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),P=new Ft({color:9055202,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ft({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce});const R=new Ft({color:65535,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),O=new Ft({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),nt=new Ct(1,32,32,0,Math.PI),M=new L(nt,S),E=new L(nt,b);M.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),M.position.y=-.2,E.position.y=-.2,M.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const K=new Ee(1,32),H=new L(K,b);H.scale.set(.85,.85,.8),H.position.set(0,-.2,0),H.rotation.y=Math.PI/2;const Z=new jt;Z.add(M),Z.add(E),Z.add(H),u.add(Z);const at=new Ct(.6,32,32,0,Math.PI),V=new L(at,w);V.scale.set(1,.95,.95),V.position.set(0,1,0),V.rotation.y=Math.PI*1.5;const Q=new L(at,F);Q.scale.set(1,.95,.95),Q.position.set(0,1,0),Q.rotation.y=Math.PI/2;const X=new Ee(.6,32),mt=new L(X,w);mt.position.set(0,1,0),mt.rotation.y=Math.PI/2,mt.scale.set(1,.95,.95);const yt=new jt;yt.add(V),yt.add(Q),yt.add(mt),u.add(yt);const gt=new Ct(.25,32,32),Pt=new L(gt,b);Pt.position.set(-.45,1.35,-.1),u.add(Pt);const Bt=new L(gt,S);Bt.position.set(.45,1.35,-.1),u.add(Bt);const ot=new Ct(.25,32,32,Math.PI/2,Math.PI),dt=new L(ot,w);dt.scale.set(1.1,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI;const St=new Ct(.25,32,32,Math.PI/2,Math.PI),N=new L(St,F);N.scale.set(1.1,.6,.8),N.position.set(0,.84,.5),N.rotation.y=0;const lt=new Ee(.25,32),st=new L(lt,w);st.scale.set(.8,.6,.8),st.position.set(0,.84,.5),st.rotation.y=Math.PI/2;const ht=new jt;ht.add(dt),ht.add(N),ht.add(st),u.add(ht);const wt=new En;wt.moveTo(0,0),wt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),wt.bezierCurveTo(-.6,.3,0,.6,0,1),wt.bezierCurveTo(0,.6,.6,.3,.6,0),wt.bezierCurveTo(.6,-.3,0,-.3,0,0);const tt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Cn(wt,tt),T=new L(g,w);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const I=new L(g,R);I.scale.set(.2,.2,.25),I.position.set(.5,-.3,.4),I.rotation.y=Math.PI,I.rotation.x=Math.PI,u.add(I);const U=new L(g,b);U.scale.set(.25,.25,.27),U.position.set(.4,.3,-.2),U.rotation.y=Math.PI,U.rotation.x=Math.PI,u.add(U);const D=new Ct(.35,32,32),W=new L(D,R);W.scale.set(.75,1.25,.65),W.position.set(-.7,-.15,.2),u.add(W);const $=new L(D,O);$.scale.set(.75,1.25,.65),$.position.set(.7,-.15,.2),u.add($);const y=new Re(.2,.22,.6,32),v=new L(y,w);v.position.set(-.4,-1.05,0),u.add(v);const C=new L(y,F);C.position.set(.4,-1.05,0),u.add(C);const k=new Ct(.3,32,32),z=new L(k,w);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),u.add(z);const G=new L(k,F);G.scale.set(1,.72,1.5),G.position.set(.4,-1.45,.17),u.add(G);const ct=new Ct(.44,32,32),ut=new L(ct,b);ut.position.set(-.15,-.45,-.4),u.add(ut);const pt=new L(ct,S);pt.position.set(.15,-.45,-.4),u.add(pt);const Et=new Ct(.18,32,32),ft=new L(Et,b);ft.position.set(0,-.35,-.8),u.add(ft),new os().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(_t){const et=new Ge("X",{font:_t,size:.2,depth:.05});new kn({color:0});const J=new L(et,b);J.position.set(-.3,.99,.53),J.rotation.x=re.degToRad(-5),J.rotation.y=re.degToRad(-15),u.add(J);const xt=new Ge("O",{font:_t,size:.2,depth:.05});new kn({color:0});const vt=new L(xt,R);vt.position.set(.14,.99,.53),vt.rotation.y=re.degToRad(12),vt.rotation.x=re.degToRad(-5),u.add(vt);const Ot=new Ge("POP",{font:_t,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Xt=new Ft({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ft({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Jt=new Ft({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Yt=new Ft({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),te=new L(Ot,Xt);te.scale.set(.15,.15,.15),te.position.set(.03,1.16,.1),te.rotateZ(-25),u.add(te);const se=new L(Ot,P);se.scale.set(.14,.14,.14),se.rotateZ(45),se.position.set(.2,-.7,.3),u.add(se);const pe=new L(Ot,Jt);pe.scale.set(.14,.14,.14),pe.rotateZ(45),pe.rotateY(45),pe.position.set(.3,.7,.3),u.add(pe);const Se=new L(Ot,Jt);Se.scale.set(.15,.15,.15),Se.rotateZ(45),Se.rotateY(45),Se.position.set(.35,-1.5,.3),u.add(Se);const ue=new L(Ot,Yt);ue.scale.set(.17,.17,.17),ue.rotateZ(45),ue.rotateY(15),ue.position.set(.35,1,.3),u.add(ue)}),ft.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Rt=()=>{u.rotation.y,u.rotation.x},It=()=>{s.value=!0,r.value=!1,o.value=!1},bt=()=>{s.value=!1,r.value=!0,o.value=!1},Ht=()=>{s.value=!1,r.value=!1,Rt()},Lt=_t=>{const et=window.innerWidth/2;_t>et?It():bt(),Rt()},kt=_t=>{clearTimeout(i),Ht(),o.value=!0;const et={x:_t.clientX/window.innerWidth*2-1,y:-(_t.clientY/window.innerHeight)*2+1};if(o.value){const J=et.x*Math.PI*.2,xt=et.y*Math.PI*.2;u.rotation.y=J,u.rotation.x=xt}i=setTimeout(()=>{o.value=!1,Lt(_t.clientX)},500)};window.addEventListener("mousemove",kt);const B=_t=>{if(o.value){const et={x:_t.clientX/window.innerWidth*2-1,y:-(_t.clientY/window.innerHeight)*2+1},J=et.x*Math.PI*.2,xt=et.y*Math.PI*.2;u.rotation.y=J,u.rotation.x=xt}};window.addEventListener("mousemove",B),a(),He(()=>t.bodyPosition,_t=>{u.position.set(_t.x,_t.y,_t.z)}),He(()=>t.cameraPosition,_t=>{c.position.set(t.bodyPosition.x,1,_t),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Ci(),Pi("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2))}}),aE=Ii(oE,[["__scopeId","data-v-8cfea564"]]),lE={class:"pixel-controls"},cE={class:"side-buttons"},uE=Wn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=$t(null);let i=$t(!1),s=$t(!1),r=$t(!1),o=$t(!1);si(()=>{if(e.value){let f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03);const J=_t.getElapsedTime();B.forEach((xt,vt)=>{const Ot=.2+Math.sin(J*3+et[vt])*.1;xt.scale.set(Ot,Ot,Ot)}),x.render(d,_)};const d=new Ai,_=new De(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Ti({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new jt,m=new jt;d.add(m);const b=new rs(16777215,2);d.add(b);const S=new ss(16777215,4);S.position.set(5,5,5),d.add(S);const w=new is(16777215,5,50);w.position.set(0,2,4),d.add(w);const F=new ns,P=F.load("/3d-bear-arts/assets/pop6.jpg"),R=F.load("/3d-bear-arts/assets/pop7.jpg");P.wrapS=P.wrapT=Ue,R.wrapS=R.wrapT=Ue,R.repeat.set(2,2);const O=new Ft({color:16738740,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),nt=new Ft({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),M=new Ft({color:16766720,map:P,metalness:.3,roughness:.5}),E=new Ft({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),K=new Ft({color:9055202,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),H=new Ft({color:65535,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Ft({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),at=new Ct(1,32,32,0,Math.PI),V=new L(at,nt),Q=new L(at,O);V.scale.set(.85,.85,.8),Q.scale.set(.85,.85,.8),V.position.y=-.2,Q.position.y=-.2,V.rotation.y=Math.PI/2,Q.rotation.y=Math.PI*1.5;const X=new Ee(1,32),mt=new L(X,O);mt.scale.set(.85,.85,.8),mt.position.set(0,-.2,0),mt.rotation.y=Math.PI/2;const yt=new jt;yt.add(V),yt.add(Q),yt.add(mt),p.add(yt);const gt=new Ct(.6,32,32,0,Math.PI),Pt=new L(gt,M);Pt.scale.set(1,.95,.95),Pt.position.set(0,1,0),Pt.rotation.y=Math.PI*1.5;const Bt=new L(gt,E);Bt.scale.set(1,.95,.95),Bt.position.set(0,1,0),Bt.rotation.y=Math.PI/2;const ot=new Ee(.6,32),dt=new L(ot,M);dt.position.set(0,1,0),dt.rotation.y=Math.PI/2,dt.scale.set(1,.95,.95);const St=new jt;St.add(Pt),St.add(Bt),St.add(dt),p.add(St);const N=new Ct(.25,32,32),lt=new L(N,O);lt.position.set(-.45,1.35,-.1),p.add(lt);const st=new L(N,nt);st.position.set(.45,1.35,-.1),p.add(st);const ht=new Ct(.25,32,32,Math.PI/2,Math.PI),wt=new L(ht,M);wt.scale.set(1.1,.6,.8),wt.position.set(0,.84,.5),wt.rotation.y=Math.PI;const tt=new Ct(.25,32,32,Math.PI/2,Math.PI),g=new L(tt,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Ee(.25,32),I=new L(T,M);I.scale.set(.8,.6,.8),I.position.set(0,.84,.5),I.rotation.y=Math.PI/2;const U=new jt;U.add(wt),U.add(g),U.add(I),p.add(U);const D=new En;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const W={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},$=new Cn(D,W),y=new L($,M);y.scale.set(.5,.5,.5),y.position.set(.3,0,0),y.rotation.y=Math.PI,y.rotation.x=Math.PI,p.add(y);const v=new L($,H);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new L($,O);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,p.add(C);const k=new Ct(.35,32,32),z=new L(k,H);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),p.add(z);const G=new L(k,Z);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),p.add(G);const ct=new Re(.2,.22,.6,32),ut=new L(ct,M);ut.position.set(-.4,-1.05,0),p.add(ut);const pt=new L(ct,E);pt.position.set(.4,-1.05,0),p.add(pt);const Et=new Ct(.3,32,32),ft=new L(Et,M);ft.scale.set(1,.72,1.5),ft.position.set(-.4,-1.45,.17),p.add(ft);const Mt=new L(Et,E);Mt.scale.set(1,.72,1.5),Mt.position.set(.4,-1.45,.17),p.add(Mt);const Rt=new Ct(.44,32,32),It=new L(Rt,O);It.position.set(-.15,-.45,-.4),p.add(It);const bt=new L(Rt,nt);bt.position.set(.15,-.45,-.4),p.add(bt);const Ht=new Ct(.18,32,32),Lt=new L(Ht,O);Lt.position.set(0,-.35,-.8),p.add(Lt),new os().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(J){const xt=new Ge("X",{font:J,size:.2,depth:.05}),vt=new L(xt,O);vt.position.set(-.3,.99,.53),vt.rotation.x=re.degToRad(-5),vt.rotation.y=re.degToRad(-15),p.add(vt);const Ot=new Ge("O",{font:J,size:.2,depth:.05}),Xt=new L(Ot,H);Xt.position.set(.14,.99,.53),Xt.rotation.y=re.degToRad(12),Xt.rotation.x=re.degToRad(-5),p.add(Xt);const Jt=new Ge("POP",{font:J,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Ge("🐻",{font:J,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Yt=new Ge("BAO      BEAR",{font:J,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),te=new Ft({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ft({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const se=new Ft({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),pe=new Ft({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),Se=new L(Jt,te);Se.scale.set(.15,.15,.15),Se.position.set(.02,1.16,.1),Se.rotateZ(-25),p.add(Se);const ue=new L(Jt,K);ue.scale.set(.14,.14,.14),ue.rotateZ(45),ue.position.set(.2,-.7,.3),p.add(ue);const Pe=new L(Jt,se);Pe.scale.set(.14,.14,.14),Pe.rotateZ(45),Pe.rotateY(45),Pe.position.set(.3,.7,.3),p.add(Pe);const ge=new L(Jt,se);ge.scale.set(.15,.15,.15),ge.rotateZ(45),ge.rotateY(45),ge.position.set(.35,-1.5,.3),p.add(ge);const Oe=new L(Jt,pe);Oe.scale.set(.17,.17,.17),Oe.rotateZ(45),Oe.rotateY(15),Oe.position.set(.35,1,.3),p.add(Oe);const be=new L(Yt,te);be.scale.set(.7,.7,.7),be.position.set(-6,0,-3),m.add(be)}),Lt.renderOrder=1,p.scale.set(1.4,1.4,1.4),d.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,p.rotation.x=.1;const B=[y,v,C],_t=new Mp,et=[0,Math.PI/2,Math.PI,0,Math.PI/3];f(),He(()=>t.bodyPosition,J=>{p.position.set(J.x,J.y,J.z)}),He(()=>t.cameraPosition,J=>{_.position.set(t.bodyPosition.x,1,J),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,d)=>(Ci(),Pi(pn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",lE,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",cE,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),hE=Ii(uE,[["__scopeId","data-v-cb52c927"]]),fE={class:"pixel-controls"},dE={class:"side-buttons"},pE=Wn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=$t(null);let i=$t(!1),s=$t(!1),r=$t(!1),o=$t(!1);si(()=>{if(e.value){let f=function(se,pe){const Se=new Re(kt,kt,B,32);Se.rotateX(Math.PI/2);const ue=new L(Se,se),Pe=new jt;for(let Oe=0;Oe<_t;Oe++){const be=Oe/_t*Math.PI*2,Je=new Is(et,J,xt),qe=new L(Je,se);qe.position.set((kt+xt/26)*Math.cos(be),(kt+xt/26)*Math.sin(be),0),qe.rotation.z=be,Pe.add(qe)}const ge=new jt;return ge.add(ue),ge.add(Pe),ge.position.set(pe.x,pe.y,pe.z),ge},d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),vt.rotation.z-=.02,Ot.rotation.z+=.03,Xt.rotation.z+=.02,Jt.rotation.z+=.02,Yt.rotation.z-=.03,te.rotation.y+=.04,p.render(_,x)};const _=new Ai,x=new De(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Ti({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new jt,b=new jt;_.add(b);const S=new rs(16777215,2);_.add(S);const w=new ss(16777215,4);w.position.set(5,5,5),_.add(w);const F=new is(16777215,5,50);F.position.set(0,2,4),_.add(F);const P=new ns,R=P.load("/3d-bear-arts/assets/metal.jpg"),O=P.load("/3d-bear-arts/assets/pop7.jpg"),nt=P.load("/3d-bear-arts/assets/gear.jpg");R.wrapS=R.wrapT=Ue,O.wrapS=O.wrapT=Ue,O.repeat.set(2,2);const M=new Ft({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:R});nt.mapping=Qr;const E=new Ft({color:"#d3d3d3",metalness:1,roughness:.25,map:R,envMap:nt,clearcoat:.7,clearcoatRoughness:.3}),K=new Ft({color:"#C0C0C0",metalness:1,roughness:.25,envMap:nt,clearcoat:.7,clearcoatRoughness:.3}),H=new Ft({color:"#C0C0C0",metalness:1,roughness:.25,map:R,envMap:nt,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),Z=new Ft({color:"#C0C0C0",metalness:1,roughness:.5,map:R,envMap:nt,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),at=new Ft({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:ce});new Ft({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const V=new Ft({color:"#d3d3d3",metalness:1,roughness:.2,map:nt,envMap:nt,clearcoat:.7,clearcoatRoughness:.3});new Ft({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:nt}),new Ft({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:R,transparent:!0,opacity:.3});const Q=new Ct(1,32,32,0,Math.PI),X=new L(Q,Z),mt=new L(Q,E);X.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),X.position.y=-.2,mt.position.y=-.2,X.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const yt=new Ee(1,32),gt=new L(yt,H);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const Pt=new jt;Pt.add(X),Pt.add(mt),Pt.add(gt),m.add(Pt);const Bt=new Ct(.6,32,32,0,Math.PI),ot=new L(Bt,E);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI*1.5;const dt=new L(Bt,Z);dt.scale.set(1,.95,.95),dt.position.set(0,1,0),dt.rotation.y=Math.PI/2;const St=new Ee(.6,32),N=new L(St,H);N.position.set(0,1,0),N.rotation.y=Math.PI/2,N.scale.set(1,.95,.95);const lt=new jt;lt.add(ot),lt.add(dt),lt.add(N),m.add(lt);const st=new Ct(.25,32,32),ht=new L(st,E);ht.position.set(-.45,1.35,-.1),m.add(ht);const wt=new L(st,H);wt.position.set(.45,1.35,-.1),m.add(wt);const tt=new Ct(.25,32,32,Math.PI/2,Math.PI),g=new L(tt,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new Ct(.25,32,32,Math.PI/2,Math.PI),I=new L(T,H);I.scale.set(1.1,.6,.8),I.position.set(0,.84,.5),I.rotation.y=0;const U=new Ee(.25,32),D=new L(U,at);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const W=new jt;W.add(g),W.add(I),W.add(D),m.add(W);const $=new En;$.moveTo(0,0),$.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),$.bezierCurveTo(-.6,.3,0,.6,0,1),$.bezierCurveTo(0,.6,.6,.3,.6,0),$.bezierCurveTo(.6,-.3,0,-.3,0,0);const y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Cn($,y),C=new Ct(.35,32,32),k=new L(C,E);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),m.add(k);const z=new L(C,H);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const G=new Re(.2,.22,.6,32),ct=new L(G,E);ct.position.set(-.4,-1.05,0),m.add(ct);const ut=new L(G,H);ut.position.set(.4,-1.05,0),m.add(ut);const pt=new Ct(.3,32,32),Et=new L(pt,E);Et.scale.set(1,.72,1.5),Et.position.set(-.4,-1.45,.17),m.add(Et);const ft=new L(pt,H);ft.scale.set(1,.72,1.5),ft.position.set(.4,-1.45,.17),m.add(ft);const Mt=new Ct(.44,32,32),Rt=new L(Mt,E);Rt.position.set(-.15,-.45,-.4),m.add(Rt);const It=new L(Mt,Z);It.position.set(.15,-.45,-.4),m.add(It);const bt=new Ct(.18,32,32),Ht=new L(bt,E);Ht.position.set(0,-.35,-.8),m.add(Ht),new os().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(se){const pe=new Ge("X",{font:se,size:.2,depth:.05});new kn({color:0});const Se=new L(pe,M);Se.position.set(-.3,.99,.53),Se.rotation.x=re.degToRad(-5),Se.rotation.y=re.degToRad(-15),m.add(Se);const ue=new Ge("O",{font:se,size:.2,depth:.05});new kn({color:0});const Pe=new L(ue,M);Pe.position.set(.14,.99,.53),Pe.rotation.y=re.degToRad(12),Pe.rotation.x=re.degToRad(-5),m.add(Pe)}),Ht.renderOrder=1;const kt=1.2,B=.5,_t=8,et=.7,J=.3,xt=.5,vt=f(V,{x:-2,y:0,z:0}),Ot=f(V,{x:0,y:0,z:0}),Xt=f(V,{x:2,y:0,z:0}),Jt=f(V,{x:2,y:0,z:0}),Yt=f(V,{x:2,y:-2,z:0}),te=new L(v,K);te.scale.set(.3,.3,.3),te.position.set(.25,1.1,0),te.rotation.y=Math.PI,te.rotation.x=Math.PI,m.add(te),vt.position.set(.35,0,0),Ot.position.set(.25,-.3,.4),Xt.position.set(.3,.3,-.2),Jt.position.set(.25,.17,.4),Yt.position.set(.5,-.3,.45),vt.scale.set(.2,.2,.2),Ot.scale.set(.18,.18,.18),Xt.scale.set(.15,.15,.15),Jt.scale.set(.17,.17,.17),Yt.scale.set(.15,.15,.15),Ot.rotation.z=Math.PI/4,Xt.rotation.z=-Math.PI/4,Jt.rotation.y=-Math.PI/2,Yt.rotation.y=-Math.PI/2,m.add(vt),m.add(Ot),m.add(Xt),m.add(Jt),m.add(Yt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,d(),He(()=>t.bodyPosition,se=>{m.position.set(se.x,se.y,se.z)}),He(()=>t.cameraPosition,se=>{x.position.set(t.bodyPosition.x,1,se),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,d)=>(Ci(),Pi(pn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",fE,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",dE,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),mE=Ii(pE,[["__scopeId","data-v-9a57b6d8"]]),gE={class:"pixel-controls"},_E={class:"side-buttons"},vE=Wn({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=$t(null);let i=$t(!1),s=$t(!1),r=$t(!1),o=$t(!1);si(()=>{if(e.value){let f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),x.render(d,_)};const d=new Ai,_=new De(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Ti({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new jt,m=new jt;d.add(m);const b=new rs(16777215,2);d.add(b);const S=new ss(16777215,4);S.position.set(5,5,5),d.add(S);const w=new is(16777215,5,50);w.position.set(0,2,4),d.add(w);const F=new ns,P=F.load("/3d-bear-arts/assets/sun.jpg"),R=F.load("/3d-bear-arts/assets/gear.jpg"),O=F.load("/3d-bear-arts/assets/underwater.jpg"),nt=F.load("/3d-bear-arts/assets/beach.jpg");O.wrapS=O.wrapT=Ue,nt.wrapS=nt.wrapT=Ue,nt.repeat.set(.8,1),R.mapping=Qr,P.wrapS=P.wrapT=Ue;const M=new Ft({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:nt,envMapIntensity:.8,side:ce,transparent:!0,opacity:.9}),E=new Ft({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:nt,envMapIntensity:.6,side:ce,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new Ft({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:nt,side:ce,transparent:!0,opacity:.9});const K=new Ft({color:8374441,metalness:1,roughness:.25,envMap:R,clearcoat:.7,clearcoatRoughness:.3}),H=new Ft({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:ce}),Z=new Ft({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:nt,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),at=new Ft({color:"#a4d0f5",metalness:0,roughness:.8,map:P,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),V=new Ft({color:"#a4d0f5",metalness:0,roughness:.85,map:nt,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),Q=new Ct(1,32,32,0,Math.PI),X=new L(Q,H),mt=new L(Q,E);X.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),X.position.y=-.2,mt.position.y=-.2,X.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const yt=new Ee(1,32),gt=new L(yt,V);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const Pt=new jt;Pt.add(X),Pt.add(mt),Pt.add(gt);const Bt=new Ct(.6,32,32,0,Math.PI*2,0,Math.PI/2),ot=new Ft({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),dt=new L(Bt,ot);dt.position.set(0,-.2,0),dt.rotation.x=Math.PI,dt.scale.set(1.25,1.25,1.25),Pt.add(dt);const St=new Ft({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ce,transparent:!0,opacity:.7,depthWrite:!1}),N=new L(yt,St);N.scale.set(.7,.7,.7),N.position.set(0,-.3,0),N.rotation.x=Math.PI/2,N.renderOrder=1,Pt.add(N),p.add(Pt);const lt=new Ct(.6,32,32,0,Math.PI),st=new L(lt,M);st.scale.set(1,.95,.95),st.position.set(0,1,0),st.rotation.y=Math.PI*1.5;const ht=new L(lt,Z);ht.scale.set(1,.95,.95),ht.position.set(0,1,0),ht.rotation.y=Math.PI/2;const wt=new Ee(.6,32),tt=new L(wt,at);tt.position.set(0,1,0),tt.rotation.y=Math.PI/2,tt.scale.set(1,.95,.95);const g=new jt;g.add(st),g.add(ht),g.add(tt),p.add(g);const T=new Ct(.25,32,32),I=new L(T,M);I.position.set(-.45,1.35,-.1),p.add(I);const U=new L(T,Z);U.position.set(.45,1.35,-.1),p.add(U);const D=new Ct(.25,32,32,Math.PI/2,Math.PI),W=new L(D,M);W.scale.set(1.1,.6,.8),W.position.set(0,.84,.5),W.rotation.y=Math.PI;const $=new Ct(.25,32,32,Math.PI/2,Math.PI),y=new L($,Z);y.scale.set(1.1,.6,.8),y.position.set(0,.84,.5),y.rotation.y=0;const v=new Ee(.25,32),C=new L(v,at);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const k=new jt;k.add(W),k.add(y),k.add(C),p.add(k);const z=new En;z.moveTo(0,0),z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),z.bezierCurveTo(-.6,.3,0,.6,0,1),z.bezierCurveTo(0,.6,.6,.3,.6,0),z.bezierCurveTo(.6,-.3,0,-.3,0,0);const G={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ct=new Cn(z,G),ut=new Ct(.35,32,32),pt=new L(ut,M);pt.scale.set(.75,1.25,.65),pt.position.set(-.7,-.15,.2),p.add(pt);const Et=new L(ut,Z);Et.scale.set(.75,1.25,.65),Et.position.set(.7,-.15,.2),p.add(Et);const ft=new Re(.2,.22,.6,32),Mt=new L(ft,M);Mt.position.set(-.4,-1.05,0),p.add(Mt);const Rt=new L(ft,Z);Rt.position.set(.4,-1.05,0),p.add(Rt);const It=new Ct(.3,32,32),bt=new L(It,M);bt.scale.set(1,.72,1.5),bt.position.set(-.4,-1.45,.17),p.add(bt);const Ht=new L(It,Z);Ht.scale.set(1,.72,1.5),Ht.position.set(.4,-1.45,.17),p.add(Ht);const Lt=new Ct(.44,32,32),kt=new L(Lt,M);kt.position.set(-.15,-.45,-.4),p.add(kt);const B=new L(Lt,Z);B.position.set(.15,-.45,-.4),p.add(B);const _t=new Ct(.18,32,32),et=new L(_t,E);et.position.set(0,-.35,-.8),p.add(et),new os().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(vt){const Ot=new Ge("X",{font:vt,size:.2,depth:.05});new kn({color:0});const Xt=new L(Ot,M);Xt.position.set(-.3,.99,.53),Xt.rotation.x=re.degToRad(-5),Xt.rotation.y=re.degToRad(-15),p.add(Xt);const Jt=new Ge("O",{font:vt,size:.2,depth:.05});new kn({color:0});const Yt=new L(Jt,E);Yt.position.set(.14,.99,.53),Yt.rotation.y=re.degToRad(12),Yt.rotation.x=re.degToRad(-5),p.add(Yt)}),et.renderOrder=1,p.rotation.x=.1;const xt=new L(ct,K);xt.scale.set(.3,.3,.3),xt.position.set(.25,1.1,0),xt.rotation.y=Math.PI,xt.rotation.x=Math.PI,p.add(xt),p.scale.set(1.4,1.4,1.4),d.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,f(),He(()=>t.bodyPosition,vt=>{p.position.set(vt.x,vt.y,vt.z)}),He(()=>t.cameraPosition,vt=>{_.position.set(t.bodyPosition.x,1,vt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,d)=>(Ci(),Pi(pn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",gE,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",_E,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),xE=Ii(vE,[["__scopeId","data-v-08c607ba"]]),ME={class:"pixel-controls"},yE={class:"side-buttons"},SE={class:"directional-buttons"},wE={class:"horizontal-buttons"},EE={class:"directional-buttons-woman"},bE={class:"horizontal-buttons-woman"},TE={class:"directional-buttons-kid"},AE={class:"horizontal-buttons-kid"},Xo=.05,qo=.02,Yo=.08,RE=Wn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=$t(null);let i=$t(!1),s=$t(!1),r=$t(!1),o=$t(!1);const a=$o(null),l=$t(!1),c=$t(!1),h=$t(!1),u=$t(!1),f=$o(null),d=$o(null),_=$t(!1),x=$t(!1),p=$t(!1),m=$t(!1),b=$t(!1),S=$t(!1),w=$t(!1),F=$t(!1),P=new Ti({antialias:!0});P.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(P.domElement);const R=new Ai,O=new De(75,window.innerWidth/window.innerHeight,.1,1e3);O.position.z=5,si(()=>{if(e.value){let tt=function(){const At=new jt,Ie=new Ct(.2,32,32),Be=new Ke({color:16767916}),xe=new L(Ie,Be);xe.position.set(0,1.5,0),At.add(xe);const gn=new Ct(.21,32,32,0,Math.PI*2,0,Math.PI/2),Me=new Ke({color:16711680}),Qe=new L(gn,Me);Qe.position.set(0,1.58,0),At.add(Qe);const Xn=new Re(.25,.25,.6,32),ke=new Ke({color:16767916}),In=new L(Xn,ke);In.position.set(0,1,0),At.add(In);const as=new Re(.26,.26,.3,32),li=new Ke({color:255}),Li=new L(as,li);Li.position.set(0,.65,0),At.add(Li);const Di=new Re(.1,.1,.5,32),bn=new Ke({color:16767916}),ci=new L(Di,bn);ci.position.set(-.15,.25,0),At.add(ci);const Ui=new L(Di,bn);Ui.position.set(.15,.25,0),At.add(Ui);const ls=new Re(.08,.08,.5,32),qn=new L(ls,bn);qn.position.set(-.35,1.3,0),qn.rotation.z=Math.PI/4,At.add(qn);const Yn=new L(ls,bn);return Yn.position.set(.35,1.3,0),Yn.rotation.z=-Math.PI/4,At.add(Yn),At.scale.set(.27,.27,.27),At.position.set(-.2,-.1,-.15),At},g=function(){const At=new jt,Ie=new Ct(.18,32,32),Be=new Ke({color:16767916}),xe=new L(Ie,Be);xe.position.set(0,1.2,.04),At.add(xe);const gn=new Ct(.19,32,32,.4,Math.PI*2,0,Math.PI/2),Me=new Re(.18,.18,.4,32),Qe=new Ke({color:9127187}),Xn=new L(gn,Qe);Xn.position.set(0,1.28,0),At.add(Xn);const ke=new L(Me,Qe);ke.position.set(0,1.1,-.01),At.add(ke);const In=new Re(.18,.2,.5,32),as=new Ke({color:16767916}),li=new L(In,as);li.position.set(0,.85,0),At.add(li);const Li=new Ct(.08,32,32,0,Math.PI),Di=new Ke({color:16738740}),bn=new L(Li,Di);bn.position.set(-.09,.98,.15),At.add(bn);const ci=new L(Li,Di);ci.position.set(.09,.98,.15),At.add(ci);const Ui=new Re(.22,.22,.25,32),ls=new Ke({color:16738740}),qn=new L(Ui,ls);qn.position.set(0,.6,0),At.add(qn);const Yn=new Re(.1,.1,.6,32),po=new Ke({color:16767916}),Na=new L(Yn,po);Na.position.set(-.09,.5,.2),Na.rotation.x=Math.PI/2,At.add(Na);const Fa=new L(Yn,po);Fa.position.set(.09,.5,.2),Fa.rotation.x=Math.PI/2,At.add(Fa);const yu=new Re(.08,.08,.35,32),Oa=new L(yu,po);Oa.position.set(-.24,.95,.18),Oa.rotation.x=Math.PI/2,At.add(Oa);const Ba=new L(yu,po);return Ba.position.set(.2,.85,0),Ba.rotation.z=Math.PI/20,At.add(Ba),At.scale.set(.27,.27,.27),At.position.set(.2,-.15,-.32),At},T=function(){const At=new jt,Ie=new Ct(.2,32,32),Be=new Ke({color:16767916}),xe=new L(Ie,Be);xe.position.set(0,1.5,0),At.add(xe);const gn=new Ct(.21,32,32,0,Math.PI*2,0,Math.PI/2),Me=new Ke({color:25600}),Qe=new L(gn,Me);Qe.position.set(0,1.58,0),At.add(Qe);const Xn=new Re(.22,.22,.5,32),ke=new Ke({color:16767916}),In=new L(Xn,ke);In.position.set(0,1,0),At.add(In);const as=new Re(.23,.23,.3,32),li=new Ke({color:8388736}),Li=new L(as,li);Li.position.set(0,.65,0),At.add(Li);const Di=new Re(.1,.1,.5,32),bn=new Ke({color:16767916}),ci=new L(Di,bn);ci.position.set(-.15,.3,-.25),ci.rotation.x=Math.PI/6,At.add(ci);const Ui=new L(Di,bn);Ui.position.set(.15,.3,.25),Ui.rotation.x=-Math.PI/6,At.add(Ui);const ls=new Re(.08,.08,.4,32),qn=new L(ls,bn);qn.position.set(-.28,1,-.2),qn.rotation.x=Math.PI/6,At.add(qn);const Yn=new L(ls,bn);return Yn.position.set(.28,1.3,.1),Yn.rotation.z=-Math.PI/8,At.add(Yn),At.scale.set(.15,.15,.15),At.position.set(.3,-.25,.25),At.rotation.x=Math.PI/12,At.rotation.y=Math.PI/2,At.rotation.z=-Math.PI/3,At},I=function(At){let Ie=1,Be=0;function xe(){requestAnimationFrame(xe),At.position.x+=.01*Ie,At.position.x>=.35?(Ie=-1,At.rotation.y=Math.PI):At.position.x<=-.35&&(Ie=1,At.rotation.y=0),Be+=.003,At.position.y=-.4+Math.sin(Be)*.1,$.render(D,W)}xe()},U=function(){requestAnimationFrame(U),i.value&&(y.rotation.y+=.03),s.value&&(y.rotation.y-=.03),r.value&&(y.rotation.x-=.03),o.value&&(y.rotation.x+=.03),Se.uniforms.u_time.value+=.25,it.rotation.y+=.04,$.render(D,W)};const D=new Ai,W=new De(75,window.innerWidth/window.innerHeight,.1,1e3),$=new Ti({antialias:!0,alpha:!0});$.setSize(window.innerWidth,window.innerHeight),e.value.appendChild($.domElement);const y=new jt,v=new jt;D.add(v);const C=new rs(16777215,2);D.add(C);const k=new ss(16777215,4);k.position.set(5,5,5),D.add(k);const z=new is(16777215,5,50);z.position.set(0,2,4),D.add(z);const G=new ns,ct=G.load("/3d-bear-arts/assets/beach.jpg");ct.repeat.set(.8,1);const ut=G.load("/3d-bear-arts/assets/sun.jpg");ct.wrapS=ct.wrapT=Ue,ct.repeat.set(.8,1),ut.wrapS=ut.wrapT=Ue;const pt=new Ft({color:11592447,map:ct,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Et=new Ft({color:11592447,map:ct,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:ce,ior:1.33,depthWrite:!1,depthTest:!0}),ft=new Ft({color:11592447,map:ct,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),Mt=new Ft({color:11592447,map:ct,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:ce}),Rt=new Ft({color:11592447,map:ct,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:ce,ior:1.33}),It=new Ft({color:11592447,map:ct,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),bt=new Ct(1,32,32,0,Math.PI),Ht=new L(bt,Mt),Lt=new L(bt,Et);Ht.scale.set(.85,.85,.8),Lt.scale.set(.85,.85,.8),Ht.position.y=-.2,Lt.position.y=-.2,Ht.rotation.y=Math.PI/2,Lt.rotation.y=Math.PI*1.5;const kt=new Ee(1,32),B=new L(kt,pt);B.scale.set(.85,.85,.8),B.position.set(0,-.2,0),B.rotation.y=Math.PI/2;const _t=new jt;_t.add(Ht),_t.add(Lt),_t.add(B),y.add(_t);const et=new Ct(.6,32,32,0,Math.PI),J=new L(et,pt);J.scale.set(1,.95,.95),J.position.set(0,1,0),J.rotation.y=Math.PI*1.5;const xt=new L(et,ft);xt.scale.set(1,.95,.95),xt.position.set(0,1,0),xt.rotation.y=Math.PI/2;const vt=new Ee(.6,32),Ot=new L(vt,pt);Ot.position.set(0,1,0),Ot.rotation.y=Math.PI/2,Ot.scale.set(1,.95,.95);const Xt=new jt;Xt.add(J),Xt.add(xt),Xt.add(Ot),y.add(Xt);const Jt=new Ct(.6,32,32,0,Math.PI*2,0,Math.PI/2),Yt=new Ft({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),te=new L(Jt,Yt);te.position.set(0,-.2,0),te.rotation.x=Math.PI,te.scale.set(1.25,1.25,1.25),_t.add(te);const se=new Ft({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ce,transparent:!0,opacity:.7,depthWrite:!1}),pe=new L(kt,se);pe.scale.set(.7,.7,.7),pe.position.set(0,-.3,0),pe.rotation.x=Math.PI/2,pe.renderOrder=1,_t.add(pe),y.add(_t);const Se=new ii({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),ue=new L(kt,Se);ue.position.set(0,-.3,0),ue.scale.set(.7,.7,.7),ue.rotation.x=-Math.PI/2,ue.renderOrder=1,_t.add(ue);const Pe=new Ct(.25,32,32),ge=new L(Pe,Rt);ge.position.set(-.45,1.35,-.1),y.add(ge);const Oe=new L(Pe,ft);Oe.position.set(.45,1.35,-.1),y.add(Oe);const be=new Ct(.25,32,32,Math.PI/2,Math.PI),Je=new L(be,Rt);Je.scale.set(1.1,.6,.8),Je.position.set(0,.84,.5),Je.rotation.y=Math.PI;const qe=new Ct(.25,32,32,Math.PI/2,Math.PI),oi=new L(qe,ft);oi.scale.set(1.1,.6,.8),oi.position.set(0,.84,.5),oi.rotation.y=0;const Ls=new Ee(.25,32),ai=new L(Ls,Et);ai.scale.set(.8,.6,.8),ai.position.set(0,.84,.5),ai.rotation.y=Math.PI/2;const Ds=new jt;Ds.add(Je),Ds.add(oi),Ds.add(ai),y.add(Ds);const Ua=new Ft({color:8374441,metalness:1,roughness:.25,envMap:ut,clearcoat:.7,clearcoatRoughness:.3}),A=new En;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},rt=new Cn(A,Y),it=new L(rt,Ua);it.scale.set(.2,.2,.2),it.position.set(.25,1.2,0),it.rotation.y=Math.PI,it.rotation.x=Math.PI,y.add(it);const j=new Ct(.35,32,32),Tt=new L(j,Et);Tt.scale.set(.75,1.25,.65),Tt.position.set(-.7,-.15,.2),y.add(Tt);const Nt=new L(j,Mt);Nt.scale.set(.75,1.25,.65),Nt.position.set(.7,-.15,.2),y.add(Nt);const zt=new Re(.2,.22,.6,32),Vt=new L(zt,Rt);Vt.position.set(-.4,-1.05,0),y.add(Vt);const Kt=new L(zt,ft);Kt.position.set(.4,-1.05,0),y.add(Kt);const Zt=new Ct(.3,32,32),Wt=new L(Zt,Rt);Wt.scale.set(1,.72,1.5),Wt.position.set(-.4,-1.45,.17),y.add(Wt);const ae=new L(Zt,ft);ae.scale.set(1,.72,1.5),ae.position.set(.4,-1.45,.17),y.add(ae);const _e=new Ct(.44,32,32),Te=new L(_e,Rt);Te.position.set(-.15,-.45,-.4),y.add(Te);const en=new L(_e,Rt);en.position.set(.15,-.45,-.4),y.add(en);const le=new Ct(.18,32,32),qt=new L(le,Rt);qt.position.set(0,-.35,-.8),y.add(qt),new os().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(At){const Ie=new Ge("X",{font:At,size:.2,depth:.05}),Be=new L(Ie,It);Be.position.set(-.3,.99,.53),Be.rotation.x=re.degToRad(-5),Be.rotation.y=re.degToRad(-15),y.add(Be);const xe=new Ge("O",{font:At,size:.2,depth:.05}),gn=new L(xe,It);gn.position.set(.14,.99,.53),gn.rotation.y=re.degToRad(12),gn.rotation.x=re.degToRad(-5),y.add(gn)}),a.value=tt(),y.add(a.value),D.add(y),f.value=g(),y.add(f.value),d.value=T(),y.add(d.value),I(d.value),y.scale.set(1.4,1.4,1.4),D.add(y),y.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),W.position.set(t.bodyPosition.x,1,t.cameraPosition),W.lookAt(t.bodyPosition.x,0,0),W.position.z=4,y.rotation.x=.1,U(),He(()=>t.bodyPosition,At=>{y.position.set(At.x,At.y,At.z)}),He(()=>t.cameraPosition,At=>{W.position.set(t.bodyPosition.x,1,At),W.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{W.aspect=window.innerWidth/window.innerHeight,W.updateProjectionMatrix(),$.setSize(window.innerWidth,window.innerHeight)})}});function nt(){s.value=!0}function M(){i.value=!0}function E(){r.value=!0}function K(){o.value=!0}function H(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}const Z=()=>{l.value=!0,console.log(l.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},at=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},V=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},Q=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},X=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},mt=()=>{_.value=!0,f.value&&(f.value.rotation.y=Math.PI)},yt=()=>{x.value=!0,f.value&&(f.value.rotation.y=0)},gt=()=>{p.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},Pt=()=>{m.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},Bt=()=>{_.value=!1,x.value=!1,p.value=!1,m.value=!1},ot=()=>{requestAnimationFrame(ot),a.value&&(l.value&&(a.value.position.z-=Xo),c.value&&(a.value.position.z+=Xo),h.value&&(a.value.position.x-=Xo),u.value&&(a.value.position.x+=Xo)),P.render(R,O)},dt=()=>{requestAnimationFrame(dt),f.value&&(_.value&&(f.value.position.z-=qo),x.value&&(f.value.position.z+=qo),p.value&&(f.value.position.x-=qo),m.value&&(f.value.position.x+=qo))};dt(),ot();const St=()=>{b.value=!0,d.value&&(d.value.rotation.y=0)},N=()=>{S.value=!0,d.value&&(d.value.rotation.y=Math.PI)},lt=()=>{w.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},st=()=>{F.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},ht=()=>{b.value=!1,S.value=!1,w.value=!1,F.value=!1},wt=()=>{requestAnimationFrame(wt),d.value&&(b.value&&(d.value.position.z-=Yo),S.value&&(d.value.position.z+=Yo),w.value&&(d.value.position.x-=Yo),F.value&&(d.value.position.x+=Yo))};return wt(),(tt,g)=>(Ci(),Pi(pn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",ME,[Gt("button",{class:"pixel-btn up",onMousedown:E,onMouseup:H},"UP",32),Gt("div",yE,[Gt("button",{class:"pixel-btn left",onMousedown:nt,onMouseup:H},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:M,onMouseup:H},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:K,onMouseup:H},"DOWN",32)]),Gt("div",SE,[Gt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:Z,onMouseup:X},"UP",32),Gt("div",wE,[Gt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:V,onMouseup:X},"LEFT",32),Gt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:Q,onMouseup:X},"RIGHT",32)]),Gt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:at,onMouseup:X},"DOWN",32)]),Gt("div",EE,[Gt("button",{class:"directional-btn-woman north-btn",onMousedown:mt,onMouseup:Bt},"UP",32),Gt("div",bE,[Gt("button",{class:"directional-btn-woman west-btn",onMousedown:gt,onMouseup:Bt},"LEFT",32),Gt("button",{class:"directional-btn-woman east-btn",onMousedown:Pt,onMouseup:Bt},"RIGHT",32)]),Gt("button",{class:"directional-btn-woman south-btn",onMousedown:yt,onMouseup:Bt},"DOWN",32)]),Gt("div",TE,[Gt("button",{class:"directional-btn-kid north-btn",onMousedown:St,onMouseup:ht},"UP",32),Gt("div",AE,[Gt("button",{class:"directional-btn-kid west-btn",onMousedown:lt,onMouseup:ht},"LEFT",32),Gt("button",{class:"directional-btn-kid east-btn",onMousedown:st,onMouseup:ht},"RIGHT",32)]),Gt("button",{class:"directional-btn-kid south-btn",onMousedown:N,onMouseup:ht},"DOWN",32)])],64))}}),CE=Ii(RE,[["__scopeId","data-v-d5b60f05"]]),PE={class:"pixel-controls"},IE={class:"side-buttons"},LE=Wn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=$t(null);let i=$t(!1),s=$t(!1),r=$t(!1),o=$t(!1);si(()=>{if(e.value){let f=function(ge,Oe){const be=new jt,Je=new Ct(1,32,32),qe=new L(Je,at);qe.scale.set(1,.8,1),be.add(qe);const oi=new Re(.1,.1,.5,16),Ls=new Ke({color:9127187}),ai=new L(oi,Ls);return ai.position.set(0,.9,0),be.add(ai),be},d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),kt.rotation.z-=.04,B.rotation.z+=.04,_t.rotation.z+=.03,et.rotation.z+=.03,v.rotation.y+=.04,Pe+=Se,m.position.y=t.bodyPosition.y+Math.sin(Pe)*ue;const ge=se.getElapsedTime();te.forEach((Oe,be)=>{const Je=.1+Math.sin(ge*3+pe[be])*.1;Oe.scale.set(Je,Je,Je)}),p.render(_,x)};const _=new Ai,x=new De(75,window.innerWidth/window.innerHeight,.1,1e3),p=new Ti({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new jt,b=new jt;_.add(b);const S=new rs(16777215,2);_.add(S);const w=new ss(16777215,4);w.position.set(5,5,5),_.add(w);const F=new is(16777215,5,50);F.position.set(0,2,4),_.add(F);const P=new ns,R=P.load("/3d-bear-arts/assets/pumpkin.jpg");R.wrapS=R.wrapT=Ue,R.repeat.set(.8,.85);const O=P.load("/3d-bear-arts/assets/pumpkin.jpg");O.wrapS=O.wrapT=Ue,O.repeat.set(1,1);const nt=P.load("/3d-bear-arts/assets/pumpkin.jpg");nt.wrapS=O.wrapT=Ue,nt.repeat.set(2,.8);const M=new Ft({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new jt,K=new Ft({color:16747520,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),H=new Ft({color:16747520,map:O,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Ft({color:16747520,map:nt,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),at=new Ft({color:16747520,map:nt,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ft({color:16766720,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ft({color:9109504,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ft({color:4915330,map:R,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const V=new Ct(1,32,32,0,Math.PI),Q=new L(V,Z),X=new L(V,K);Q.scale.set(.85,.85,.8),X.scale.set(.85,.85,.8),Q.position.y=-.2,X.position.y=-.2,Q.rotation.y=Math.PI/2,X.rotation.y=Math.PI*1.5;const mt=new Ee(1,32),yt=new L(mt,H);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const gt=new jt;gt.add(Q),gt.add(X),gt.add(yt),m.add(gt);const Pt=new Ct(.6,32,32,0,Math.PI),Bt=new L(Pt,K);Bt.scale.set(1,.95,.95),Bt.position.set(0,1,0),Bt.rotation.y=Math.PI*1.5;const ot=new L(Pt,Z);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI/2;const dt=new Ee(.6,32),St=new L(dt,H);St.position.set(0,1,0),St.rotation.y=Math.PI/2,St.scale.set(1,.95,.95);const N=new jt;N.add(Bt),N.add(ot),N.add(St),m.add(N);const lt=new Ct(.25,32,32),st=new L(lt,at);st.position.set(-.45,1.35,-.1),m.add(st);const ht=new L(lt,Z);ht.position.set(.45,1.35,-.1),m.add(ht);const wt=new Ct(.25,32,32,Math.PI/2,Math.PI),tt=new L(wt,K);tt.scale.set(1.1,.6,.8),tt.position.set(0,.84,.5),tt.rotation.y=Math.PI;const g=new Ct(.25,32,32,Math.PI/2,Math.PI),T=new L(g,Z);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const I=new Ee(.25,32),U=new L(I,K);U.scale.set(.8,.6,.8),U.position.set(0,.84,.5),U.rotation.y=Math.PI/2;const D=new jt;D.add(tt),D.add(T),D.add(U),m.add(D);const W=new En;W.moveTo(0,0),W.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),W.bezierCurveTo(-.6,.3,0,.6,0,1),W.bezierCurveTo(0,.6,.6,.3,.6,0),W.bezierCurveTo(.6,-.3,0,-.3,0,0);const $={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},y=new Cn(W,$),v=new L(y,M);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new Ct(.35,32,32),k=new L(C,H);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),m.add(k);const z=new L(C,Z);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const G=new Re(.2,.22,.6,32),ct=new L(G,H);ct.position.set(-.4,-1.05,0),m.add(ct);const ut=new L(G,Z);ut.position.set(.4,-1.05,0),m.add(ut);const pt=new Ct(.3,32,32),Et=new L(pt,at);Et.scale.set(1,.72,1.5),Et.position.set(-.4,-1.45,.17),m.add(Et);const ft=new L(pt,Z);ft.scale.set(1,.72,1.5),ft.position.set(.4,-1.45,.17),m.add(ft);const Mt=new Ct(.44,32,32),Rt=new L(Mt,K);Rt.position.set(-.15,-.45,-.4),m.add(Rt);const It=new L(Mt,Z);It.position.set(.15,-.45,-.4),m.add(It);const bt=new Ct(.18,32,32),Ht=new L(bt,at);Ht.position.set(0,-.35,-.8),m.add(Ht),Ht.renderOrder=1,new os().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ge){const Oe=new Ge("X",{font:ge,size:.2,depth:.05}),be=new L(Oe,H);be.position.set(-.3,.99,.53),be.rotation.x=re.degToRad(-5),be.rotation.y=re.degToRad(-15),m.add(be);const Je=new Ge("O",{font:ge,size:.2,depth:.05}),qe=new L(Je,H);qe.position.set(.14,.99,.53),qe.rotation.y=re.degToRad(12),qe.rotation.x=re.degToRad(-5),m.add(qe)}),m.add(E);const kt=f(),B=f(),_t=f(),et=f();kt.position.set(.35,-.35,-.3),B.position.set(.25,-.45,.3),_t.position.set(.3,.1,-.2),et.position.set(.25,.18,.4),kt.scale.set(.3,.3,.3),B.scale.set(.28,.28,.28),_t.scale.set(.25,.25,.25),et.scale.set(.23,.23,.23),B.rotation.z=Math.PI/4,_t.rotation.z=-Math.PI/4,et.rotation.y=-Math.PI/2,m.add(kt),m.add(B),m.add(_t),m.add(et);const J=new En;J.moveTo(-.5,0),J.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),J.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),J.bezierCurveTo(-.05,.6,.05,.6,.15,.4),J.bezierCurveTo(.25,.5,.25,.85,.5,.8),J.bezierCurveTo(1,.6,.75,.25,.5,0),J.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const xt={depth:.3,bevelEnabled:!1},vt=new Cn(J,xt),Ot=new kn({color:0}),Xt=new L(vt,Ot);Xt.scale.set(.3,.3,.6),Xt.rotation.x=0,Xt.rotation.z=0,Xt.position.set(.26,.35,.25),m.add(Xt);const Jt=new L(vt,Ot);Jt.scale.set(.5,.5,.5),Jt.position.set(.4,-.1,.54),m.add(Jt);const Yt=new L(vt,Ot);Yt.scale.set(.5,.5,.5),Yt.position.set(.32,-.35,.65),m.add(Yt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const te=[Xt,Jt,Yt],se=new Mp,pe=[0,Math.PI/2,Math.PI,0,Math.PI/3];let Se=.05,ue=.25,Pe=0;d(),He(()=>t.bodyPosition,ge=>{m.position.set(ge.x,ge.y,ge.z)}),He(()=>t.cameraPosition,ge=>{x.position.set(t.bodyPosition.x,1,ge),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,d)=>(Ci(),Pi(pn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",PE,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",IE,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),DE=Ii(LE,[["__scopeId","data-v-5eff72b3"]]),UE={class:"pixel-controls"},NE={class:"side-buttons"},FE=Wn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=$t(null);let i=$t(!1),s=$t(!1),r=$t(!1),o=$t(!1);si(()=>{if(e.value){let f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),$.rotation.y+=.03,Ot+=et,Xt+=J,p.position.y=t.bodyPosition.y+Math.sin(Ot)*vt,$.position.y=t.bodyPosition.y+Math.sin(Xt)*xt,kt.uniforms.u_time.value+=.25,x.render(d,_)};const d=new Ai,_=new De(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Ti({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new jt,m=new jt;d.add(m);const b=new rs(16777215,2);d.add(b);const S=new ss(16777215,4);S.position.set(5,5,5),d.add(S);const w=new is(16777215,5,50);w.position.set(0,2,4),d.add(w);const F=new ns,P=F.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Ue,P.repeat.set(2,2);const R=F.load("/3d-bear-arts/assets/ghost.jpg");R.wrapS=R.wrapT=Ue,R.repeat.set(1,1);const O=new Ft({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:ce}),nt=new Ft({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),M=new Ft({color:9109504,map:P,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Ft({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:ce}),K=new Ft({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:ce}),H=new Ft({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:ce}),Z=new Ct(1,32,32,0,Math.PI),at=new L(Z,O),V=new L(Z,K);at.scale.set(.85,.85,.8),V.scale.set(.85,.85,.8),at.position.y=-.2,V.position.y=-.2,at.rotation.y=Math.PI/2,V.rotation.y=Math.PI*1.5;const Q=new Ee(1,32),X=new L(Q,K);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const mt=new jt;mt.add(at),mt.add(V),mt.add(X),p.add(mt);const yt=new Ct(.6,32,32,0,Math.PI),gt=new L(yt,H);gt.scale.set(1,.95,.95),gt.position.set(0,1,0),gt.rotation.y=Math.PI*1.5;const Pt=new L(yt,nt);Pt.scale.set(1,.95,.95),Pt.position.set(0,1,0),Pt.rotation.y=Math.PI/2;const Bt=new Ee(.6,32),ot=new L(Bt,K);ot.position.set(0,1,0),ot.rotation.y=Math.PI/2,ot.scale.set(1,.95,.95);const dt=new jt;dt.add(gt),dt.add(Pt),dt.add(ot),p.add(dt);const St=new Ct(.25,32,32),N=new L(St,H);N.position.set(-.45,1.35,-.1),p.add(N);const lt=new L(St,nt);lt.position.set(.45,1.35,-.1),p.add(lt);const st=new Ct(.25,32,32,Math.PI/2,Math.PI),ht=new L(st,H);ht.scale.set(1.1,.6,.8),ht.position.set(0,.84,.5),ht.rotation.y=Math.PI;const wt=new Ct(.25,32,32,Math.PI/2,Math.PI),tt=new L(wt,nt);tt.scale.set(1.1,.6,.8),tt.position.set(0,.84,.5),tt.rotation.y=0;const g=new Ee(.25,32),T=new L(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const I=new jt;I.add(ht),I.add(tt),I.add(T),p.add(I);const U=new En;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},W=new Cn(U,D),$=new L(W,M);$.scale.set(.35,.35,.35),$.position.set(0,-.05,0),$.rotation.y=Math.PI,$.rotation.x=Math.PI,p.add($);const y=new Ct(.35,32,32),v=new L(y,K);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),p.add(v);const C=new L(y,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),p.add(C);const k=new Re(.2,.22,.6,32),z=new L(k,K);z.position.set(-.4,-1.05,0),p.add(z);const G=new L(k,E);G.position.set(.4,-1.05,0),p.add(G);const ct=new Ct(.3,32,32),ut=new L(ct,K);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),p.add(ut);const pt=new L(ct,E);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),p.add(pt);const Et=new Ct(.44,32,32),ft=new L(Et,E);ft.position.set(-.15,-.45,-.4),p.add(ft);const Mt=new L(Et,E);Mt.position.set(.15,-.45,-.4),p.add(Mt);const Rt=new Ct(.18,32,32),It=new L(Rt,K);It.position.set(0,-.35,-.8),p.add(It);const bt=new Ct(.6,32,32,0,Math.PI*2,0,Math.PI/2),Ht=new Ft({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Lt=new L(bt,Ht);Lt.position.set(0,-.2,0),Lt.rotation.x=Math.PI,Lt.scale.set(1.25,1.25,1.25),mt.add(Lt);const kt=new ii({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),B=new L(Q,kt);B.position.set(0,-.26,0),B.scale.set(.7,.7,.7),B.rotation.x=-Math.PI/2,B.renderOrder=1,mt.add(B),new os().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Jt){const Yt=new Ge("X",{font:Jt,size:.2,depth:.05}),te=new L(Yt,K);te.position.set(-.3,.99,.53),te.rotation.x=re.degToRad(-5),te.rotation.y=re.degToRad(-15),p.add(te);const se=new Ge("O",{font:Jt,size:.2,depth:.05}),pe=new L(se,K);pe.position.set(.14,.99,.53),pe.rotation.y=re.degToRad(12),pe.rotation.x=re.degToRad(-5),p.add(pe)}),It.renderOrder=1,p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),d.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let et=.05,J=.06,xt=.2,vt=.25,Ot=0,Xt=0;f(),He(()=>t.bodyPosition,Jt=>{p.position.set(Jt.x,Jt.y,Jt.z)}),He(()=>t.cameraPosition,Jt=>{_.position.set(t.bodyPosition.x,1,Jt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(f,d)=>(Ci(),Pi(pn,null,[Gt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),Gt("div",UE,[Gt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Gt("div",NE,[Gt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Gt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Gt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),OE=Ii(FE,[["__scopeId","data-v-eb44448e"]]),BE=[{path:"/3d-bear-arts/leather",name:"Leather",component:rE},{path:"/3d-bear-arts/pop-art",name:"Pop",component:aE},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:hE},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:mE},{path:"/3d-bear-arts/water",name:"Water Bear",component:xE},{path:"/3d-bear-arts/",name:"Water",component:CE},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:DE},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:OE}],zE=jg({history:Tg(),routes:BE}),yp=W0(K0);yp.use(zE);yp.mount("#app");
