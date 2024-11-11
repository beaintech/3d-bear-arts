(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Re={},lr=[],fi=()=>{},Op=()=>!1,Aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Xc=n=>n.startsWith("onUpdate:"),sn=Object.assign,qc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Bp=Object.prototype.hasOwnProperty,Me=(n,t)=>Bp.call(n,t),ee=Array.isArray,Hr=n=>Ra(n)==="[object Map]",zp=n=>Ra(n)==="[object Set]",te=n=>typeof n=="function",en=n=>typeof n=="string",br=n=>typeof n=="symbol",Ye=n=>n!==null&&typeof n=="object",Ud=n=>(Ye(n)||te(n))&&te(n.then)&&te(n.catch),Gp=Object.prototype.toString,Ra=n=>Gp.call(n),Hp=n=>Ra(n).slice(8,-1),kp=n=>Ra(n)==="[object Object]",Yc=n=>en(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Vp=/-(\w)/g,On=Pa(n=>n.replace(Vp,(t,e)=>e?e.toUpperCase():"")),Wp=/\B([A-Z])/g,Us=Pa(n=>n.replace(Wp,"-$1").toLowerCase()),Ca=Pa(n=>n.charAt(0).toUpperCase()+n.slice(1)),$a=Pa(n=>n?`on${Ca(n)}`:""),os=(n,t)=>!Object.is(n,t),Ka=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Nd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Xp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Fu;const Fd=()=>Fu||(Fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $c(n){if(ee(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=en(i)?Kp(i):$c(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(en(n)||Ye(n))return n}const qp=/;(?![^(]*\))/g,Yp=/:([^]+)/,$p=/\/\*[^]*?\*\//g;function Kp(n){const t={};return n.replace($p,"").split(qp).forEach(e=>{if(e){const i=e.split(Yp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Bn(n){let t="";if(en(n))t=n;else if(ee(n))for(let e=0;e<n.length;e++){const i=Bn(n[e]);i&&(t+=i+" ")}else if(Ye(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zp=Wc(jp);function Od(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let An;class Jp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=An,!t&&An&&(this.index=(An.scopes||(An.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=An;try{return An=this,t()}finally{An=e}}}on(){An=this}off(){An=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Qp(){return An}let Pe;const ja=new WeakSet;class Bd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,An&&An.active&&An.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ja.has(this)&&(ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),Hd(this);const t=Pe,e=Zn;Pe=this,Zn=!0;try{return this.fn()}finally{kd(this),Pe=t,Zn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Zc(t);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kl(this)&&this.run()}get dirty(){return kl(this)}}let zd=0,rr;function Gd(n){n.flags|=8,n.next=rr,rr=n}function Kc(){zd++}function jc(){if(--zd>0)return;let n;for(;rr;){let t=rr,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=rr,rr=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Hd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function kd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Zc(i),tm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function kl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Vd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Qr))return;n.globalVersion=Qr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!kl(n)){n.flags&=-3;return}const e=Pe,i=Zn;Pe=n,Zn=!0;try{Hd(n);const s=n.fn(n._value);(t.version===0||os(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Pe=e,Zn=i,kd(n),n.flags&=-3}}function Zc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Zc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function tm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Zn=!0;const Wd=[];function ls(){Wd.push(Zn),Zn=!1}function cs(){const n=Wd.pop();Zn=n===void 0?!0:n}function Ou(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Pe;Pe=void 0;try{t()}finally{Pe=e}}}let Qr=0;class em{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Pe||!Zn||Pe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Pe)e=this.activeLink=new em(Pe,this),Pe.deps?(e.prevDep=Pe.depsTail,Pe.depsTail.nextDep=e,Pe.depsTail=e):Pe.deps=Pe.depsTail=e,Xd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Pe.depsTail,e.nextDep=void 0,Pe.depsTail.nextDep=e,Pe.depsTail=e,Pe.deps===e&&(Pe.deps=i)}return e}trigger(t){this.version++,Qr++,this.notify(t)}notify(t){Kc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{jc()}}}function Xd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Xd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Vl=new WeakMap,Rs=Symbol(""),Wl=Symbol(""),to=Symbol("");function hn(n,t,e){if(Zn&&Pe){let i=Vl.get(n);i||Vl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Jc),s.target=n,s.map=i,s.key=e),s.track()}}function Oi(n,t,e,i,s,r){const o=Vl.get(n);if(!o){Qr++;return}const a=l=>{l&&l.trigger()};if(Kc(),t==="clear")o.forEach(a);else{const l=ee(n),c=l&&Yc(e);if(l&&e==="length"){const h=Number(i);o.forEach((u,d)=>{(d==="length"||d===to||!br(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(o.get(e)),c&&a(o.get(to)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Rs)),Hr(n)&&a(o.get(Wl)));break;case"delete":l||(a(o.get(Rs)),Hr(n)&&a(o.get(Wl)));break;case"set":Hr(n)&&a(o.get(Rs));break}}jc()}function Hs(n){const t=we(n);return t===n?t:(hn(t,"iterate",to),Jn(n)?t:t.map(_n))}function Qc(n){return hn(n=we(n),"iterate",to),n}const nm={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,_n)},concat(...n){return Hs(this).concat(...n.map(t=>ee(t)?Hs(t):t))},entries(){return Za(this,"entries",n=>(n[1]=_n(n[1]),n))},every(n,t){return Si(this,"every",n,t,void 0,arguments)},filter(n,t){return Si(this,"filter",n,t,e=>e.map(_n),arguments)},find(n,t){return Si(this,"find",n,t,_n,arguments)},findIndex(n,t){return Si(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Si(this,"findLast",n,t,_n,arguments)},findLastIndex(n,t){return Si(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Si(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ja(this,"includes",n)},indexOf(...n){return Ja(this,"indexOf",n)},join(n){return Hs(this).join(n)},lastIndexOf(...n){return Ja(this,"lastIndexOf",n)},map(n,t){return Si(this,"map",n,t,void 0,arguments)},pop(){return Pr(this,"pop")},push(...n){return Pr(this,"push",n)},reduce(n,...t){return Bu(this,"reduce",n,t)},reduceRight(n,...t){return Bu(this,"reduceRight",n,t)},shift(){return Pr(this,"shift")},some(n,t){return Si(this,"some",n,t,void 0,arguments)},splice(...n){return Pr(this,"splice",n)},toReversed(){return Hs(this).toReversed()},toSorted(n){return Hs(this).toSorted(n)},toSpliced(...n){return Hs(this).toSpliced(...n)},unshift(...n){return Pr(this,"unshift",n)},values(){return Za(this,"values",_n)}};function Za(n,t,e){const i=Qc(n),s=i[t]();return i!==n&&!Jn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const im=Array.prototype;function Si(n,t,e,i,s,r){const o=Qc(n),a=o!==n&&!Jn(n),l=o[t];if(l!==im[t]){const u=l.apply(n,r);return a?_n(u):u}let c=e;o!==n&&(a?c=function(u,d){return e.call(this,_n(u),d,n)}:e.length>2&&(c=function(u,d){return e.call(this,u,d,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function Bu(n,t,e,i){const s=Qc(n);let r=e;return s!==n&&(Jn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,_n(a),l,n)}),s[t](r,...i)}function Ja(n,t,e){const i=we(n);hn(i,"iterate",to);const s=i[t](...e);return(s===-1||s===!1)&&iu(e[0])?(e[0]=we(e[0]),i[t](...e)):s}function Pr(n,t,e=[]){ls(),Kc();const i=we(n)[t].apply(n,e);return jc(),cs(),i}const sm=Wc("__proto__,__v_isRef,__isVue"),qd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(br));function rm(n){br(n)||(n=String(n));const t=we(this);return hn(t,"has",n),t.hasOwnProperty(n)}class Yd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?vm:Zd:r?jd:Kd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=ee(t);if(!s){let l;if(o&&(l=nm[e]))return l;if(e==="hasOwnProperty")return rm}const a=Reflect.get(t,e,cn(t)?t:i);return(br(e)?qd.has(e):sm(e))||(s||hn(t,"get",e),r)?a:cn(a)?o&&Yc(e)?a:a.value:Ye(a)?s?Qd(a):La(a):a}}class $d extends Yd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Cs(r);if(!Jn(i)&&!Cs(i)&&(r=we(r),i=we(i)),!ee(t)&&cn(r)&&!cn(i))return l?!1:(r.value=i,!0)}const o=ee(t)&&Yc(e)?Number(e)<t.length:Me(t,e),a=Reflect.set(t,e,i,cn(t)?t:s);return t===we(s)&&(o?os(i,r)&&Oi(t,"set",e,i):Oi(t,"add",e,i)),a}deleteProperty(t,e){const i=Me(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Oi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!br(e)||!qd.has(e))&&hn(t,"has",e),i}ownKeys(t){return hn(t,"iterate",ee(t)?"length":Rs),Reflect.ownKeys(t)}}class om extends Yd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const am=new $d,lm=new om,cm=new $d(!0);const tu=n=>n,Ia=n=>Reflect.getPrototypeOf(n);function wo(n,t,e=!1,i=!1){n=n.__v_raw;const s=we(n),r=we(t);e||(os(t,r)&&hn(s,"get",t),hn(s,"get",r));const{has:o}=Ia(s),a=i?tu:e?su:_n;if(o.call(s,t))return a(n.get(t));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(t)}function Eo(n,t=!1){const e=this.__v_raw,i=we(e),s=we(n);return t||(os(n,s)&&hn(i,"has",n),hn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function bo(n,t=!1){return n=n.__v_raw,!t&&hn(we(n),"iterate",Rs),Reflect.get(n,"size",n)}function zu(n,t=!1){!t&&!Jn(n)&&!Cs(n)&&(n=we(n));const e=we(this);return Ia(e).has.call(e,n)||(e.add(n),Oi(e,"add",n,n)),this}function Gu(n,t,e=!1){!e&&!Jn(t)&&!Cs(t)&&(t=we(t));const i=we(this),{has:s,get:r}=Ia(i);let o=s.call(i,n);o||(n=we(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,t),o?os(t,a)&&Oi(i,"set",n,t):Oi(i,"add",n,t),this}function Hu(n){const t=we(this),{has:e,get:i}=Ia(t);let s=e.call(t,n);s||(n=we(n),s=e.call(t,n)),i&&i.call(t,n);const r=t.delete(n);return s&&Oi(t,"delete",n,void 0),r}function ku(){const n=we(this),t=n.size!==0,e=n.clear();return t&&Oi(n,"clear",void 0,void 0),e}function To(n,t){return function(i,s){const r=this,o=r.__v_raw,a=we(o),l=t?tu:n?su:_n;return!n&&hn(a,"iterate",Rs),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function Ao(n,t,e){return function(...i){const s=this.__v_raw,r=we(s),o=Hr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=e?tu:t?su:_n;return!t&&hn(r,"iterate",l?Wl:Rs),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function qi(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function um(){const n={get(r){return wo(this,r)},get size(){return bo(this)},has:Eo,add:zu,set:Gu,delete:Hu,clear:ku,forEach:To(!1,!1)},t={get(r){return wo(this,r,!1,!0)},get size(){return bo(this)},has:Eo,add(r){return zu.call(this,r,!0)},set(r,o){return Gu.call(this,r,o,!0)},delete:Hu,clear:ku,forEach:To(!1,!0)},e={get(r){return wo(this,r,!0)},get size(){return bo(this,!0)},has(r){return Eo.call(this,r,!0)},add:qi("add"),set:qi("set"),delete:qi("delete"),clear:qi("clear"),forEach:To(!0,!1)},i={get(r){return wo(this,r,!0,!0)},get size(){return bo(this,!0)},has(r){return Eo.call(this,r,!0)},add:qi("add"),set:qi("set"),delete:qi("delete"),clear:qi("clear"),forEach:To(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ao(r,!1,!1),e[r]=Ao(r,!0,!1),t[r]=Ao(r,!1,!0),i[r]=Ao(r,!0,!0)}),[n,e,t,i]}const[hm,dm,fm,pm]=um();function eu(n,t){const e=t?n?pm:fm:n?dm:hm;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Me(e,s)&&s in i?e:i,s,r)}const mm={get:eu(!1,!1)},gm={get:eu(!1,!0)},_m={get:eu(!0,!1)};const Kd=new WeakMap,jd=new WeakMap,Zd=new WeakMap,vm=new WeakMap;function xm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ym(n){return n.__v_skip||!Object.isExtensible(n)?0:xm(Hp(n))}function La(n){return Cs(n)?n:nu(n,!1,am,mm,Kd)}function Jd(n){return nu(n,!1,cm,gm,jd)}function Qd(n){return nu(n,!0,lm,_m,Zd)}function nu(n,t,e,i,s){if(!Ye(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=ym(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Vr(n){return Cs(n)?Vr(n.__v_raw):!!(n&&n.__v_isReactive)}function Cs(n){return!!(n&&n.__v_isReadonly)}function Jn(n){return!!(n&&n.__v_isShallow)}function iu(n){return n?!!n.__v_raw:!1}function we(n){const t=n&&n.__v_raw;return t?we(t):n}function Mm(n){return!Me(n,"__v_skip")&&Object.isExtensible(n)&&Nd(n,"__v_skip",!0),n}const _n=n=>Ye(n)?La(n):n,su=n=>Ye(n)?Qd(n):n;function cn(n){return n?n.__v_isRef===!0:!1}function kt(n){return tf(n,!1)}function Ps(n){return tf(n,!0)}function tf(n,t){return cn(n)?n:new Sm(n,t)}class Sm{constructor(t,e){this.dep=new Jc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:we(t),this._value=e?t:_n(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Jn(t)||Cs(t);t=i?t:we(t),os(t,e)&&(this._rawValue=t,this._value=i?t:_n(t),this.dep.trigger())}}function cr(n){return cn(n)?n.value:n}const wm={get:(n,t,e)=>t==="__v_raw"?n:cr(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return cn(s)&&!cn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function ef(n){return Vr(n)?n:new Proxy(n,wm)}class Em{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Jc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Pe!==this)return Gd(this),!0}get value(){const t=this.dep.track();return Vd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function bm(n,t,e=!1){let i,s;return te(n)?i=n:(i=n.get,s=n.set),new Em(i,s,e)}const Ro={},ma=new WeakMap;let Ms;function Tm(n,t=!1,e=Ms){if(e){let i=ma.get(e);i||ma.set(e,i=[]),i.push(n)}}function Am(n,t,e=Re){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=w=>s?w:Jn(w)||s===!1||s===0?Ui(w,1):Ui(w);let h,u,d,f,_=!1,x=!1;if(cn(n)?(u=()=>n.value,_=Jn(n)):Vr(n)?(u=()=>c(n),_=!0):ee(n)?(x=!0,_=n.some(w=>Vr(w)||Jn(w)),u=()=>n.map(w=>{if(cn(w))return w.value;if(Vr(w))return c(w);if(te(w))return l?l(w,2):w()})):te(n)?t?u=l?()=>l(n,2):n:u=()=>{if(d){ls();try{d()}finally{cs()}}const w=Ms;Ms=h;try{return l?l(n,3,[f]):n(f)}finally{Ms=w}}:u=fi,t&&s){const w=u,F=s===!0?1/0:s;u=()=>Ui(w(),F)}const p=Qp(),m=()=>{h.stop(),p&&qc(p.effects,h)};if(r&&t){const w=t;t=(...F)=>{w(...F),m()}}let b=x?new Array(n.length).fill(Ro):Ro;const S=w=>{if(!(!(h.flags&1)||!h.dirty&&!w))if(t){const F=h.run();if(s||_||(x?F.some((I,P)=>os(I,b[P])):os(F,b))){d&&d();const I=Ms;Ms=h;try{const P=[F,b===Ro?void 0:x&&b[0]===Ro?[]:b,f];l?l(t,3,P):t(...P),b=F}finally{Ms=I}}}else h.run()};return a&&a(S),h=new Bd(u),h.scheduler=o?()=>o(S,!1):S,f=w=>Tm(w,!1,h),d=h.onStop=()=>{const w=ma.get(h);if(w){if(l)l(w,4);else for(const F of w)F();ma.delete(h)}},t?i?S(!0):b=h.run():o?o(S.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function Ui(n,t=1/0,e){if(t<=0||!Ye(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,cn(n))Ui(n.value,t,e);else if(ee(n))for(let i=0;i<n.length;i++)Ui(n[i],t,e);else if(zp(n)||Hr(n))n.forEach(i=>{Ui(i,t,e)});else if(kp(n)){for(const i in n)Ui(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ui(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mo(n,t,e,i){try{return i?n(...i):n()}catch(s){Da(s,t,e)}}function mi(n,t,e,i){if(te(n)){const s=mo(n,t,e,i);return s&&Ud(s)&&s.catch(r=>{Da(r,t,e)}),s}if(ee(n)){const s=[];for(let r=0;r<n.length;r++)s.push(mi(n[r],t,e,i));return s}}function Da(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Re;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){ls(),mo(r,null,10,[n,l,c]),cs();return}}Rm(n,e,s,i,o)}function Rm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let eo=!1,Xl=!1;const vn=[];let ci=0;const ur=[];let ts=null,nr=0;const nf=Promise.resolve();let ru=null;function sf(n){const t=ru||nf;return n?t.then(this?n.bind(this):n):t}function Pm(n){let t=eo?ci+1:0,e=vn.length;for(;t<e;){const i=t+e>>>1,s=vn[i],r=no(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function ou(n){if(!(n.flags&1)){const t=no(n),e=vn[vn.length-1];!e||!(n.flags&2)&&t>=no(e)?vn.push(n):vn.splice(Pm(t),0,n),n.flags|=1,rf()}}function rf(){!eo&&!Xl&&(Xl=!0,ru=nf.then(af))}function Cm(n){ee(n)?ur.push(...n):ts&&n.id===-1?ts.splice(nr+1,0,n):n.flags&1||(ur.push(n),n.flags|=1),rf()}function Vu(n,t,e=eo?ci+1:0){for(;e<vn.length;e++){const i=vn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;vn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function of(n){if(ur.length){const t=[...new Set(ur)].sort((e,i)=>no(e)-no(i));if(ur.length=0,ts){ts.push(...t);return}for(ts=t,nr=0;nr<ts.length;nr++){const e=ts[nr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ts=null,nr=0}}const no=n=>n.id==null?n.flags&2?-1:1/0:n.id;function af(n){Xl=!1,eo=!0;try{for(ci=0;ci<vn.length;ci++){const t=vn[ci];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ci<vn.length;ci++){const t=vn[ci];t&&(t.flags&=-2)}ci=0,vn.length=0,of(),eo=!1,ru=null,(vn.length||ur.length)&&af()}}let Rn=null,lf=null;function ga(n){const t=Rn;return Rn=n,lf=n&&n.type.__scopeId||null,t}function Ci(n,t=Rn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Qu(-1);const r=ga(t);let o;try{o=n(...s)}finally{ga(r),i._d&&Qu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Im(n,t){if(Rn===null)return n;const e=Ba(Rn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Re]=t[s];r&&(te(r)&&(r={mounted:r,updated:r}),r.deep&&Ui(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function fs(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ls(),mi(l,e,8,[n.el,a,n,t]),cs())}}const Lm=Symbol("_vte"),Dm=n=>n.__isTeleport;function au(n,t){n.shapeFlag&6&&n.component?(n.transition=t,au(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function zn(n,t){return te(n)?sn({name:n.name},t,{setup:n}):n}function cf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ql(n,t,e,i,s=!1){if(ee(n)){n.forEach((_,x)=>ql(_,t&&(ee(t)?t[x]:t),e,i,s));return}if(Wr(i)&&!s)return;const r=i.shapeFlag&4?Ba(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,h=a.refs===Re?a.refs={}:a.refs,u=a.setupState,d=we(u),f=u===Re?()=>!1:_=>Me(d,_);if(c!=null&&c!==l&&(en(c)?(h[c]=null,f(c)&&(u[c]=null)):cn(c)&&(c.value=null)),te(l))mo(l,a,12,[o,h]);else{const _=en(l),x=cn(l);if(_||x){const p=()=>{if(n.f){const m=_?f(l)?u[l]:h[l]:l.value;s?ee(m)&&qc(m,r):ee(m)?m.includes(r)||m.push(r):_?(h[l]=[r],f(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else _?(h[l]=o,f(l)&&(u[l]=o)):x&&(l.value=o,n.k&&(h[n.k]=o))};o?(p.id=-1,Tn(p,e)):p()}}}const Wr=n=>!!n.type.__asyncLoader,uf=n=>n.type.__isKeepAlive;function Um(n,t){hf(n,"a",t)}function Nm(n,t){hf(n,"da",t)}function hf(n,t,e=ln){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ua(t,i,e),e){let s=e.parent;for(;s&&s.parent;)uf(s.parent.vnode)&&Fm(i,t,e,s),s=s.parent}}function Fm(n,t,e,i){const s=Ua(t,n,i,!0);lu(()=>{qc(i[t],s)},e)}function Ua(n,t,e=ln,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{ls();const a=go(e),l=mi(t,e,n,o);return a(),cs(),l});return i?s.unshift(r):s.push(r),r}}const Gi=n=>(t,e=ln)=>{(!Oa||n==="sp")&&Ua(n,(...i)=>t(...i),e)},Om=Gi("bm"),si=Gi("m"),Bm=Gi("bu"),zm=Gi("u"),Gm=Gi("bum"),lu=Gi("um"),Hm=Gi("sp"),km=Gi("rtg"),Vm=Gi("rtc");function Wm(n,t=ln){Ua("ec",n,t)}const Xm="components";function Wu(n,t){return Ym(Xm,n,!0,t)||n}const qm=Symbol.for("v-ndc");function Ym(n,t,e=!0,i=!1){const s=Rn||ln;if(s){const r=s.type;{const a=U0(r,!1);if(a&&(a===t||a===On(t)||a===Ca(On(t))))return r}const o=Xu(s[n]||r[n],t)||Xu(s.appContext[n],t);return!o&&i?r:o}}function Xu(n,t){return n&&(n[t]||n[On(t)]||n[Ca(On(t))])}const Yl=n=>n?Cf(n)?Ba(n):Yl(n.parent):null,Xr=sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yl(n.parent),$root:n=>Yl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>cu(n),$forceUpdate:n=>n.f||(n.f=()=>{ou(n.update)}),$nextTick:n=>n.n||(n.n=sf.bind(n.proxy)),$watch:n=>p0.bind(n)}),Qa=(n,t)=>n!==Re&&!n.__isScriptSetup&&Me(n,t),$m={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Qa(i,t))return o[t]=1,i[t];if(s!==Re&&Me(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&Me(c,t))return o[t]=3,r[t];if(e!==Re&&Me(e,t))return o[t]=4,e[t];$l&&(o[t]=0)}}const h=Xr[t];let u,d;if(h)return t==="$attrs"&&hn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Re&&Me(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,Me(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Qa(s,t)?(s[t]=e,!0):i!==Re&&Me(i,t)?(i[t]=e,!0):Me(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==Re&&Me(n,o)||Qa(t,o)||(a=r[0])&&Me(a,o)||Me(i,o)||Me(Xr,o)||Me(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Me(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function qu(n){return ee(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let $l=!0;function Km(n){const t=cu(n),e=n.proxy,i=n.ctx;$l=!1,t.beforeCreate&&Yu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:p,beforeDestroy:m,beforeUnmount:b,destroyed:S,unmounted:w,render:F,renderTracked:I,renderTriggered:P,errorCaptured:O,serverPrefetch:it,expose:y,inheritAttrs:E,components:j,directives:H,filters:Z}=t;if(c&&jm(c,i,null),o)for(const tt in o){const V=o[tt];te(V)&&(i[tt]=V.bind(e))}if(s){const tt=s.call(e,e);Ye(tt)&&(n.data=La(tt))}if($l=!0,r)for(const tt in r){const V=r[tt],gt=te(V)?V.bind(e,e):te(V.get)?V.get.bind(e,e):fi,St=!te(V)&&te(V.set)?V.set.bind(e):fi,_t=Yn({get:gt,set:St});Object.defineProperty(i,tt,{enumerable:!0,configurable:!0,get:()=>_t.value,set:It=>_t.value=It})}if(a)for(const tt in a)df(a[tt],i,e,tt);if(l){const tt=te(l)?l.call(e):l;Reflect.ownKeys(tt).forEach(V=>{ra(V,tt[V])})}h&&Yu(h,n,"c");function W(tt,V){ee(V)?V.forEach(gt=>tt(gt.bind(e))):V&&tt(V.bind(e))}if(W(Om,u),W(si,d),W(Bm,f),W(zm,_),W(Um,x),W(Nm,p),W(Wm,O),W(Vm,I),W(km,P),W(Gm,b),W(lu,w),W(Hm,it),ee(y))if(y.length){const tt=n.exposed||(n.exposed={});y.forEach(V=>{Object.defineProperty(tt,V,{get:()=>e[V],set:gt=>e[V]=gt})})}else n.exposed||(n.exposed={});F&&n.render===fi&&(n.render=F),E!=null&&(n.inheritAttrs=E),j&&(n.components=j),H&&(n.directives=H),it&&cf(n)}function jm(n,t,e=fi){ee(n)&&(n=Kl(n));for(const i in n){const s=n[i];let r;Ye(s)?"default"in s?r=Bi(s.from||i,s.default,!0):r=Bi(s.from||i):r=Bi(s),cn(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Yu(n,t,e){mi(ee(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function df(n,t,e,i){let s=i.includes(".")?Tf(e,i):()=>e[i];if(en(n)){const r=t[n];te(r)&&ke(s,r)}else if(te(n))ke(s,n.bind(e));else if(Ye(n))if(ee(n))n.forEach(r=>df(r,t,e,i));else{const r=te(n.handler)?n.handler.bind(e):t[n.handler];te(r)&&ke(s,r,n)}}function cu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>_a(l,c,o,!0)),_a(l,t,o)),Ye(t)&&r.set(t,l),l}function _a(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&_a(n,r,e,!0),s&&s.forEach(o=>_a(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Zm[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Zm={data:$u,props:Ku,emits:Ku,methods:zr,computed:zr,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:zr,directives:zr,watch:Qm,provide:$u,inject:Jm};function $u(n,t){return t?n?function(){return sn(te(n)?n.call(this,this):n,te(t)?t.call(this,this):t)}:t:n}function Jm(n,t){return zr(Kl(n),Kl(t))}function Kl(n){if(ee(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function pn(n,t){return n?[...new Set([].concat(n,t))]:t}function zr(n,t){return n?sn(Object.create(null),n,t):t}function Ku(n,t){return n?ee(n)&&ee(t)?[...new Set([...n,...t])]:sn(Object.create(null),qu(n),qu(t??{})):t}function Qm(n,t){if(!n)return t;if(!t)return n;const e=sn(Object.create(null),n);for(const i in t)e[i]=pn(n[i],t[i]);return e}function ff(){return{app:null,config:{isNativeTag:Op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let t0=0;function e0(n,t){return function(i,s=null){te(i)||(i=sn({},i)),s!=null&&!Ye(s)&&(s=null);const r=ff(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:t0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:F0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&te(h.install)?(o.add(h),h.install(c,...u)):te(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,d){if(!l){const f=c._ceVNode||Ke(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(f,h):n(f,h,d),l=!0,c._container=h,h.__vue_app__=c,Ba(f.component)}},onUnmount(h){a.push(h)},unmount(){l&&(mi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=hr;hr=c;try{return h()}finally{hr=u}}};return c}}let hr=null;function ra(n,t){if(ln){let e=ln.provides;const i=ln.parent&&ln.parent.provides;i===e&&(e=ln.provides=Object.create(i)),e[n]=t}}function Bi(n,t,e=!1){const i=ln||Rn;if(i||hr){const s=hr?hr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&te(t)?t.call(i&&i.proxy):t}}const pf={},mf=()=>Object.create(pf),gf=n=>Object.getPrototypeOf(n)===pf;function n0(n,t,e,i=!1){const s={},r=mf();n.propsDefaults=Object.create(null),_f(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Jd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function i0(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=we(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Na(n.emitsOptions,d))continue;const f=t[d];if(l)if(Me(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const _=On(d);s[_]=jl(l,a,_,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{_f(n,t,s,r)&&(c=!0);let h;for(const u in a)(!t||!Me(t,u)&&((h=Us(u))===u||!Me(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=jl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!t||!Me(t,u))&&(delete r[u],c=!0)}c&&Oi(n.attrs,"set","")}function _f(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(kr(l))continue;const c=t[l];let h;s&&Me(s,h=On(l))?!r||!r.includes(h)?e[h]=c:(a||(a={}))[h]=c:Na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=we(e),c=a||Re;for(let h=0;h<r.length;h++){const u=r[h];e[u]=jl(s,l,u,c[u],n,!Me(c,u))}}return o}function jl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Me(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=go(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Us(e))&&(i=!0))}return i}const s0=new WeakMap;function vf(n,t,e=!1){const i=e?s0:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!te(n)){const h=u=>{l=!0;const[d,f]=vf(u,t,!0);sn(o,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return Ye(n)&&i.set(n,lr),lr;if(ee(r))for(let h=0;h<r.length;h++){const u=On(r[h]);ju(u)&&(o[u]=Re)}else if(r)for(const h in r){const u=On(h);if(ju(u)){const d=r[h],f=o[u]=ee(d)||te(d)?{type:d}:sn({},d),_=f.type;let x=!1,p=!0;if(ee(_))for(let m=0;m<_.length;++m){const b=_[m],S=te(b)&&b.name;if(S==="Boolean"){x=!0;break}else S==="String"&&(p=!1)}else x=te(_)&&_.name==="Boolean";f[0]=x,f[1]=p,(x||Me(f,"default"))&&a.push(u)}}const c=[o,a];return Ye(n)&&i.set(n,c),c}function ju(n){return n[0]!=="$"&&!kr(n)}const xf=n=>n[0]==="_"||n==="$stable",uu=n=>ee(n)?n.map(hi):[hi(n)],r0=(n,t,e)=>{if(t._n)return t;const i=Ci((...s)=>uu(t(...s)),e);return i._c=!1,i},yf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(xf(s))continue;const r=n[s];if(te(r))t[s]=r0(s,r,i);else if(r!=null){const o=uu(r);t[s]=()=>o}}},Mf=(n,t)=>{const e=uu(t);n.slots.default=()=>e},Sf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},o0=(n,t,e)=>{const i=n.slots=mf();if(n.vnode.shapeFlag&32){const s=t._;s?(Sf(i,t,e),e&&Nd(i,"_",s,!0)):yf(t,i)}else t&&Mf(n,t)},a0=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Re;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Sf(s,t,e):(r=!t.$stable,yf(t,s)),o=t}else t&&(Mf(n,t),o={default:1});if(r)for(const a in s)!xf(a)&&o[a]==null&&delete s[a]},Tn=M0;function l0(n){return c0(n)}function c0(n,t){const e=Fd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=fi,insertStaticContent:_}=n,x=(g,T,L,U=null,D=null,X=null,q=void 0,M=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Cr(g,T)&&(U=N(g),It(g,D,X,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:k,shapeFlag:z}=T;switch(C){case Fa:p(g,T,L,U);break;case io:m(g,T,L,U);break;case nl:g==null&&b(T,L,U,q);break;case an:j(g,T,L,U,D,X,q,M,v);break;default:z&1?F(g,T,L,U,D,X,q,M,v):z&6?H(g,T,L,U,D,X,q,M,v):(z&64||z&128)&&C.process(g,T,L,U,D,X,q,M,v,ht)}k!=null&&D&&ql(k,g&&g.ref,X,T||g,!T)},p=(g,T,L,U)=>{if(g==null)i(T.el=a(T.children),L,U);else{const D=T.el=g.el;T.children!==g.children&&c(D,T.children)}},m=(g,T,L,U)=>{g==null?i(T.el=l(T.children||""),L,U):T.el=g.el},b=(g,T,L,U)=>{[g.el,g.anchor]=_(g.children,T,L,U,g.el,g.anchor)},S=({el:g,anchor:T},L,U)=>{let D;for(;g&&g!==T;)D=d(g),i(g,L,U),g=D;i(T,L,U)},w=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=d(g),s(g),g=L;s(T)},F=(g,T,L,U,D,X,q,M,v)=>{T.type==="svg"?q="svg":T.type==="math"&&(q="mathml"),g==null?I(T,L,U,D,X,q,M,v):it(g,T,D,X,q,M,v)},I=(g,T,L,U,D,X,q,M)=>{let v,C;const{props:k,shapeFlag:z,transition:G,dirs:ct}=g;if(v=g.el=o(g.type,X,k&&k.is,k),z&8?h(v,g.children):z&16&&O(g.children,v,null,U,D,tl(g,X),q,M),ct&&fs(g,null,U,"created"),P(v,g,g.scopeId,q,U),k){for(const pt in k)pt!=="value"&&!kr(pt)&&r(v,pt,null,k[pt],X,U);"value"in k&&r(v,"value",null,k.value,X),(C=k.onVnodeBeforeMount)&&li(C,U,g)}ct&&fs(g,null,U,"beforeMount");const ut=u0(D,G);ut&&G.beforeEnter(v),i(v,T,L),((C=k&&k.onVnodeMounted)||ut||ct)&&Tn(()=>{C&&li(C,U,g),ut&&G.enter(v),ct&&fs(g,null,U,"mounted")},D)},P=(g,T,L,U,D)=>{if(L&&f(g,L),U)for(let X=0;X<U.length;X++)f(g,U[X]);if(D){let X=D.subTree;if(T===X||Rf(X.type)&&(X.ssContent===T||X.ssFallback===T)){const q=D.vnode;P(g,q,q.scopeId,q.slotScopeIds,D.parent)}}},O=(g,T,L,U,D,X,q,M,v=0)=>{for(let C=v;C<g.length;C++){const k=g[C]=M?es(g[C]):hi(g[C]);x(null,k,T,L,U,D,X,q,M)}},it=(g,T,L,U,D,X,q)=>{const M=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:k}=T;v|=g.patchFlag&16;const z=g.props||Re,G=T.props||Re;let ct;if(L&&ps(L,!1),(ct=G.onVnodeBeforeUpdate)&&li(ct,L,T,g),k&&fs(T,g,L,"beforeUpdate"),L&&ps(L,!0),(z.innerHTML&&G.innerHTML==null||z.textContent&&G.textContent==null)&&h(M,""),C?y(g.dynamicChildren,C,M,L,U,tl(T,D),X):q||V(g,T,M,null,L,U,tl(T,D),X,!1),v>0){if(v&16)E(M,z,G,L,D);else if(v&2&&z.class!==G.class&&r(M,"class",null,G.class,D),v&4&&r(M,"style",z.style,G.style,D),v&8){const ut=T.dynamicProps;for(let pt=0;pt<ut.length;pt++){const Tt=ut[pt],ft=z[Tt],Mt=G[Tt];(Mt!==ft||Tt==="value")&&r(M,Tt,ft,Mt,D,L)}}v&1&&g.children!==T.children&&h(M,T.children)}else!q&&C==null&&E(M,z,G,L,D);((ct=G.onVnodeUpdated)||k)&&Tn(()=>{ct&&li(ct,L,T,g),k&&fs(T,g,L,"updated")},U)},y=(g,T,L,U,D,X,q)=>{for(let M=0;M<T.length;M++){const v=g[M],C=T[M],k=v.el&&(v.type===an||!Cr(v,C)||v.shapeFlag&70)?u(v.el):L;x(v,C,k,null,U,D,X,q,!0)}},E=(g,T,L,U,D)=>{if(T!==L){if(T!==Re)for(const X in T)!kr(X)&&!(X in L)&&r(g,X,T[X],null,D,U);for(const X in L){if(kr(X))continue;const q=L[X],M=T[X];q!==M&&X!=="value"&&r(g,X,M,q,D,U)}"value"in L&&r(g,"value",T.value,L.value,D)}},j=(g,T,L,U,D,X,q,M,v)=>{const C=T.el=g?g.el:a(""),k=T.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:G,slotScopeIds:ct}=T;ct&&(M=M?M.concat(ct):ct),g==null?(i(C,L,U),i(k,L,U),O(T.children||[],L,k,D,X,q,M,v)):z>0&&z&64&&G&&g.dynamicChildren?(y(g.dynamicChildren,G,L,D,X,q,M),(T.key!=null||D&&T===D.subTree)&&wf(g,T,!0)):V(g,T,L,k,D,X,q,M,v)},H=(g,T,L,U,D,X,q,M,v)=>{T.slotScopeIds=M,g==null?T.shapeFlag&512?D.ctx.activate(T,L,U,q,v):Z(T,L,U,D,X,q,v):lt(g,T,v)},Z=(g,T,L,U,D,X,q)=>{const M=g.component=P0(g,U,D);if(uf(g)&&(M.ctx.renderer=ht),C0(M,!1,q),M.asyncDep){if(D&&D.registerDep(M,W,q),!g.el){const v=M.subTree=Ke(io);m(null,v,T,L)}}else W(M,g,T,L,D,X,q)},lt=(g,T,L)=>{const U=T.component=g.component;if(x0(g,T,L))if(U.asyncDep&&!U.asyncResolved){tt(U,T,L);return}else U.next=T,U.update();else T.el=g.el,U.vnode=T},W=(g,T,L,U,D,X,q)=>{const M=()=>{if(g.isMounted){let{next:z,bu:G,u:ct,parent:ut,vnode:pt}=g;{const Dt=Ef(g);if(Dt){z&&(z.el=pt.el,tt(g,z,q)),Dt.asyncDep.then(()=>{g.isUnmounted||M()});return}}let Tt=z,ft;ps(g,!1),z?(z.el=pt.el,tt(g,z,q)):z=pt,G&&Ka(G),(ft=z.props&&z.props.onVnodeBeforeUpdate)&&li(ft,ut,z,pt),ps(g,!0);const Mt=el(g),Pt=g.subTree;g.subTree=Mt,x(Pt,Mt,u(Pt.el),N(Pt),g,D,X),z.el=Mt.el,Tt===null&&y0(g,Mt.el),ct&&Tn(ct,D),(ft=z.props&&z.props.onVnodeUpdated)&&Tn(()=>li(ft,ut,z,pt),D)}else{let z;const{el:G,props:ct}=T,{bm:ut,m:pt,parent:Tt,root:ft,type:Mt}=g,Pt=Wr(T);if(ps(g,!1),ut&&Ka(ut),!Pt&&(z=ct&&ct.onVnodeBeforeMount)&&li(z,Tt,T),ps(g,!0),G&&et){const Dt=()=>{g.subTree=el(g),et(G,g.subTree,g,D,null)};Pt&&Mt.__asyncHydrate?Mt.__asyncHydrate(G,g,Dt):Dt()}else{ft.ce&&ft.ce._injectChildStyle(Mt);const Dt=g.subTree=el(g);x(null,Dt,L,U,g,D,X),T.el=Dt.el}if(pt&&Tn(pt,D),!Pt&&(z=ct&&ct.onVnodeMounted)){const Dt=T;Tn(()=>li(z,Tt,Dt),D)}(T.shapeFlag&256||Tt&&Wr(Tt.vnode)&&Tt.vnode.shapeFlag&256)&&g.a&&Tn(g.a,D),g.isMounted=!0,T=L=U=null}};g.scope.on();const v=g.effect=new Bd(M);g.scope.off();const C=g.update=v.run.bind(v),k=g.job=v.runIfDirty.bind(v);k.i=g,k.id=g.uid,v.scheduler=()=>ou(k),ps(g,!0),C()},tt=(g,T,L)=>{T.component=g;const U=g.vnode.props;g.vnode=T,g.next=null,i0(g,T.props,U,L),a0(g,T.children,L),ls(),Vu(g),cs()},V=(g,T,L,U,D,X,q,M,v=!1)=>{const C=g&&g.children,k=g?g.shapeFlag:0,z=T.children,{patchFlag:G,shapeFlag:ct}=T;if(G>0){if(G&128){St(C,z,L,U,D,X,q,M,v);return}else if(G&256){gt(C,z,L,U,D,X,q,M,v);return}}ct&8?(k&16&&xt(C,D,X),z!==C&&h(L,z)):k&16?ct&16?St(C,z,L,U,D,X,q,M,v):xt(C,D,X,!0):(k&8&&h(L,""),ct&16&&O(z,L,U,D,X,q,M,v))},gt=(g,T,L,U,D,X,q,M,v)=>{g=g||lr,T=T||lr;const C=g.length,k=T.length,z=Math.min(C,k);let G;for(G=0;G<z;G++){const ct=T[G]=v?es(T[G]):hi(T[G]);x(g[G],ct,L,null,D,X,q,M,v)}C>k?xt(g,D,X,!0,!1,z):O(T,L,U,D,X,q,M,v,z)},St=(g,T,L,U,D,X,q,M,v)=>{let C=0;const k=T.length;let z=g.length-1,G=k-1;for(;C<=z&&C<=G;){const ct=g[C],ut=T[C]=v?es(T[C]):hi(T[C]);if(Cr(ct,ut))x(ct,ut,L,null,D,X,q,M,v);else break;C++}for(;C<=z&&C<=G;){const ct=g[z],ut=T[G]=v?es(T[G]):hi(T[G]);if(Cr(ct,ut))x(ct,ut,L,null,D,X,q,M,v);else break;z--,G--}if(C>z){if(C<=G){const ct=G+1,ut=ct<k?T[ct].el:U;for(;C<=G;)x(null,T[C]=v?es(T[C]):hi(T[C]),L,ut,D,X,q,M,v),C++}}else if(C>G)for(;C<=z;)It(g[C],D,X,!0),C++;else{const ct=C,ut=C,pt=new Map;for(C=ut;C<=G;C++){const Ut=T[C]=v?es(T[C]):hi(T[C]);Ut.key!=null&&pt.set(Ut.key,C)}let Tt,ft=0;const Mt=G-ut+1;let Pt=!1,Dt=0;const Rt=new Array(Mt);for(C=0;C<Mt;C++)Rt[C]=0;for(C=ct;C<=z;C++){const Ut=g[C];if(ft>=Mt){It(Ut,D,X,!0);continue}let Vt;if(Ut.key!=null)Vt=pt.get(Ut.key);else for(Tt=ut;Tt<=G;Tt++)if(Rt[Tt-ut]===0&&Cr(Ut,T[Tt])){Vt=Tt;break}Vt===void 0?It(Ut,D,X,!0):(Rt[Vt-ut]=C+1,Vt>=Dt?Dt=Vt:Pt=!0,x(Ut,T[Vt],L,null,D,X,q,M,v),ft++)}const Xt=Pt?h0(Rt):lr;for(Tt=Xt.length-1,C=Mt-1;C>=0;C--){const Ut=ut+C,Vt=T[Ut],B=Ut+1<k?T[Ut+1].el:U;Rt[C]===0?x(null,Vt,L,B,D,X,q,M,v):Pt&&(Tt<0||C!==Xt[Tt]?_t(Vt,L,B,2):Tt--)}}},_t=(g,T,L,U,D=null)=>{const{el:X,type:q,transition:M,children:v,shapeFlag:C}=g;if(C&6){_t(g.component.subTree,T,L,U);return}if(C&128){g.suspense.move(T,L,U);return}if(C&64){q.move(g,T,L,ht);return}if(q===an){i(X,T,L);for(let z=0;z<v.length;z++)_t(v[z],T,L,U);i(g.anchor,T,L);return}if(q===nl){S(g,T,L);return}if(U!==2&&C&1&&M)if(U===0)M.beforeEnter(X),i(X,T,L),Tn(()=>M.enter(X),D);else{const{leave:z,delayLeave:G,afterLeave:ct}=M,ut=()=>i(X,T,L),pt=()=>{z(X,()=>{ut(),ct&&ct()})};G?G(X,ut,pt):pt()}else i(X,T,L)},It=(g,T,L,U=!1,D=!1)=>{const{type:X,props:q,ref:M,children:v,dynamicChildren:C,shapeFlag:k,patchFlag:z,dirs:G,cacheIndex:ct}=g;if(z===-2&&(D=!1),M!=null&&ql(M,null,L,g,!0),ct!=null&&(T.renderCache[ct]=void 0),k&256){T.ctx.deactivate(g);return}const ut=k&1&&G,pt=!Wr(g);let Tt;if(pt&&(Tt=q&&q.onVnodeBeforeUnmount)&&li(Tt,T,g),k&6)dt(g.component,L,U);else{if(k&128){g.suspense.unmount(L,U);return}ut&&fs(g,null,T,"beforeUnmount"),k&64?g.type.remove(g,T,L,ht,U):C&&!C.hasOnce&&(X!==an||z>0&&z&64)?xt(C,T,L,!1,!0):(X===an&&z&384||!D&&k&16)&&xt(v,T,L),U&&Gt(g)}(pt&&(Tt=q&&q.onVnodeUnmounted)||ut)&&Tn(()=>{Tt&&li(Tt,T,g),ut&&fs(g,null,T,"unmounted")},L)},Gt=g=>{const{type:T,el:L,anchor:U,transition:D}=g;if(T===an){ot(L,U);return}if(T===nl){w(g);return}const X=()=>{s(L),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:q,delayLeave:M}=D,v=()=>q(L,X);M?M(g.el,X,v):v()}else X()},ot=(g,T)=>{let L;for(;g!==T;)L=d(g),s(g),g=L;s(T)},dt=(g,T,L)=>{const{bum:U,scope:D,job:X,subTree:q,um:M,m:v,a:C}=g;Zu(v),Zu(C),U&&Ka(U),D.stop(),X&&(X.flags|=8,It(q,g,T,L)),M&&Tn(M,T),Tn(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},xt=(g,T,L,U=!1,D=!1,X=0)=>{for(let q=X;q<g.length;q++)It(g[q],T,L,U,D)},N=g=>{if(g.shapeFlag&6)return N(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=d(g.anchor||g.el),L=T&&T[Lm];return L?d(L):T};let Q=!1;const at=(g,T,L)=>{g==null?T._vnode&&It(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,L),T._vnode=g,Q||(Q=!0,Vu(),of(),Q=!1)},ht={p:x,um:It,m:_t,r:Gt,mt:Z,mc:O,pc:V,pbc:y,n:N,o:n};let bt,et;return{render:at,hydrate:bt,createApp:e0(at,bt)}}function tl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ps({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function u0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function wf(n,t,e=!1){const i=n.children,s=t.children;if(ee(i)&&ee(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=es(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&wf(o,a)),a.type===Fa&&(a.el=o.el)}}function h0(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Ef(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ef(t)}function Zu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const d0=Symbol.for("v-scx"),f0=()=>Bi(d0);function ke(n,t,e){return bf(n,t,e)}function bf(n,t,e=Re){const{immediate:i,deep:s,flush:r,once:o}=e,a=sn({},e);let l;if(Oa)if(r==="sync"){const d=f0();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=fi,d.resume=fi,d.pause=fi,d}const c=ln;a.call=(d,f,_)=>mi(d,c,f,_);let h=!1;r==="post"?a.scheduler=d=>{Tn(d,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():ou(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const u=Am(n,t,a);return l&&l.push(u),u}function p0(n,t,e){const i=this.proxy,s=en(n)?n.includes(".")?Tf(i,n):()=>i[n]:n.bind(i,i);let r;te(t)?r=t:(r=t.handler,e=t);const o=go(this),a=bf(s,r.bind(i),e);return o(),a}function Tf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const m0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${On(t)}Modifiers`]||n[`${Us(t)}Modifiers`];function g0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Re;let s=e;const r=t.startsWith("update:"),o=r&&m0(i,t.slice(7));o&&(o.trim&&(s=e.map(h=>en(h)?h.trim():h)),o.number&&(s=e.map(Xp)));let a,l=i[a=$a(t)]||i[a=$a(On(t))];!l&&r&&(l=i[a=$a(Us(t))]),l&&mi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,mi(c,n,6,s)}}function Af(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!te(n)){const l=c=>{const h=Af(c,t,!0);h&&(a=!0,sn(o,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Ye(n)&&i.set(n,null),null):(ee(r)?r.forEach(l=>o[l]=null):sn(o,r),Ye(n)&&i.set(n,o),o)}function Na(n,t){return!n||!Aa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Me(n,t[0].toLowerCase()+t.slice(1))||Me(n,Us(t))||Me(n,t))}function el(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,p=ga(n);let m,b;try{if(e.shapeFlag&4){const w=s||i,F=w;m=hi(c.call(F,w,h,u,f,d,_)),b=a}else{const w=t;m=hi(w.length>1?w(u,{attrs:a,slots:o,emit:l}):w(u,null)),b=t.props?a:_0(a)}}catch(w){qr.length=0,Da(w,n,1),m=Ke(io)}let S=m;if(b&&x!==!1){const w=Object.keys(b),{shapeFlag:F}=S;w.length&&F&7&&(r&&w.some(Xc)&&(b=v0(b,r)),S=gr(S,b,!1,!0))}return e.dirs&&(S=gr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&au(S,e.transition),m=S,ga(p),m}const _0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Aa(e))&&((t||(t={}))[e]=n[e]);return t},v0=(n,t)=>{const e={};for(const i in n)(!Xc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function x0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Ju(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==i[d]&&!Na(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ju(i,o,c):!0:!!o;return!1}function Ju(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Na(e,r))return!0}return!1}function y0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Rf=n=>n.__isSuspense;function M0(n,t){t&&t.pendingBranch?ee(n)?t.effects.push(...n):t.effects.push(n):Cm(n)}const an=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),io=Symbol.for("v-cmt"),nl=Symbol.for("v-stc"),qr=[];let Pn=null;function _i(n=!1){qr.push(Pn=n?null:[])}function S0(){qr.pop(),Pn=qr[qr.length-1]||null}let so=1;function Qu(n){so+=n,n<0&&Pn&&(Pn.hasOnce=!0)}function w0(n){return n.dynamicChildren=so>0?Pn||lr:null,S0(),so>0&&Pn&&Pn.push(n),n}function vi(n,t,e,i,s,r){return w0(Ft(n,t,e,i,s,r,!0))}function va(n){return n?n.__v_isVNode===!0:!1}function Cr(n,t){return n.type===t.type&&n.key===t.key}const Pf=({key:n})=>n??null,oa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?en(n)||cn(n)||te(n)?{i:Rn,r:n,k:t,f:!!e}:n:null);function Ft(n,t=null,e=null,i=0,s=null,r=n===an?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Pf(t),ref:t&&oa(t),scopeId:lf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rn};return a?(hu(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=en(e)?8:16),so>0&&!o&&Pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Pn.push(l),l}const Ke=E0;function E0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===qm)&&(n=io),va(n)){const a=gr(n,t,!0);return e&&hu(a,e),so>0&&!r&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(n)]=a:Pn.push(a)),a.patchFlag=-2,a}if(N0(n)&&(n=n.__vccOpts),t){t=b0(t);let{class:a,style:l}=t;a&&!en(a)&&(t.class=Bn(a)),Ye(l)&&(iu(l)&&!ee(l)&&(l=sn({},l)),t.style=$c(l))}const o=en(n)?1:Rf(n)?128:Dm(n)?64:Ye(n)?4:te(n)?2:0;return Ft(n,t,e,i,s,o,r,!0)}function b0(n){return n?iu(n)||gf(n)?sn({},n):n:null}function gr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?T0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Pf(c),ref:t&&t.ref?e&&r?ee(r)?r.concat(oa(t)):[r,oa(t)]:oa(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==an?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gr(n.ssContent),ssFallback:n.ssFallback&&gr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&au(h,l.clone(h)),h}function Ii(n=" ",t=0){return Ke(Fa,null,n,t)}function hi(n){return n==null||typeof n=="boolean"?Ke(io):ee(n)?Ke(an,null,n.slice()):va(n)?es(n):Ke(Fa,null,String(n))}function es(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gr(n)}function hu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(ee(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),hu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!gf(t)?t._ctx=Rn:s===3&&Rn&&(Rn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else te(t)?(t={default:t,_ctx:Rn},e=32):(t=String(t),i&64?(e=16,t=[Ii(t)]):e=8);n.children=t,n.shapeFlag|=e}function T0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Bn([t.class,i.class]));else if(s==="style")t.style=$c([t.style,i.style]);else if(Aa(s)){const r=t[s],o=i[s];o&&r!==o&&!(ee(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function li(n,t,e,i=null){mi(n,t,7,[e,i])}const A0=ff();let R0=0;function P0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||A0,r={uid:R0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vf(i,s),emitsOptions:Af(i,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:i.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=g0.bind(null,r),n.ce&&n.ce(r),r}let ln=null,xa,Zl;{const n=Fd(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};xa=t("__VUE_INSTANCE_SETTERS__",e=>ln=e),Zl=t("__VUE_SSR_SETTERS__",e=>Oa=e)}const go=n=>{const t=ln;return xa(n),n.scope.on(),()=>{n.scope.off(),xa(t)}},th=()=>{ln&&ln.scope.off(),xa(null)};function Cf(n){return n.vnode.shapeFlag&4}let Oa=!1;function C0(n,t=!1,e=!1){t&&Zl(t);const{props:i,children:s}=n.vnode,r=Cf(n);n0(n,i,r,t),o0(n,s,e);const o=r?I0(n,t):void 0;return t&&Zl(!1),o}function I0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,$m);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?D0(n):null,r=go(n);ls();const o=mo(i,n,0,[n.props,s]);if(cs(),r(),Ud(o)){if(Wr(n)||cf(n),o.then(th,th),t)return o.then(a=>{eh(n,a,t)}).catch(a=>{Da(a,n,0)});n.asyncDep=o}else eh(n,o,t)}else If(n,t)}function eh(n,t,e){te(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ye(t)&&(n.setupState=ef(t)),If(n,e)}let nh;function If(n,t,e){const i=n.type;if(!n.render){if(!t&&nh&&!i.render){const s=i.template||cu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=sn(sn({isCustomElement:r,delimiters:a},o),l);i.render=nh(s,c)}}n.render=i.render||fi}{const s=go(n);ls();try{Km(n)}finally{cs(),s()}}}const L0={get(n,t){return hn(n,"get",""),n[t]}};function D0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,L0),slots:n.slots,emit:n.emit,expose:t}}function Ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ef(Mm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Xr)return Xr[e](n)},has(t,e){return e in t||e in Xr}})):n.proxy}function U0(n,t=!0){return te(n)?n.displayName||n.name:n.name||t&&n.__name}function N0(n){return te(n)&&"__vccOpts"in n}const Yn=(n,t)=>bm(n,t,Oa);function Lf(n,t,e){const i=arguments.length;return i===2?Ye(t)&&!ee(t)?va(t)?Ke(n,null,[t]):Ke(n,t):Ke(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&va(e)&&(e=[e]),Ke(n,t,e))}const F0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jl;const ih=typeof window<"u"&&window.trustedTypes;if(ih)try{Jl=ih.createPolicy("vue",{createHTML:n=>n})}catch{}const Df=Jl?n=>Jl.createHTML(n):n=>n,O0="http://www.w3.org/2000/svg",B0="http://www.w3.org/1998/Math/MathML",Di=typeof document<"u"?document:null,sh=Di&&Di.createElement("template"),z0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Di.createElementNS(O0,n):t==="mathml"?Di.createElementNS(B0,n):e?Di.createElement(n,{is:e}):Di.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Di.createTextNode(n),createComment:n=>Di.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Di.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{sh.innerHTML=Df(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=sh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},G0=Symbol("_vtc");function H0(n,t,e){const i=n[G0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ya=Symbol("_vod"),Uf=Symbol("_vsh"),k0={beforeMount(n,{value:t},{transition:e}){n[ya]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Ir(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Ir(n,!0),i.enter(n)):i.leave(n,()=>{Ir(n,!1)}):Ir(n,t))},beforeUnmount(n,{value:t}){Ir(n,t)}};function Ir(n,t){n.style.display=t?n[ya]:"none",n[Uf]=!t}const V0=Symbol(""),W0=/(^|;)\s*display\s*:/;function X0(n,t,e){const i=n.style,s=en(e);let r=!1;if(e&&!s){if(t)if(en(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&aa(i,a,"")}else for(const o in t)e[o]==null&&aa(i,o,"");for(const o in e)o==="display"&&(r=!0),aa(i,o,e[o])}else if(s){if(t!==e){const o=i[V0];o&&(e+=";"+o),i.cssText=e,r=W0.test(e)}}else t&&n.removeAttribute("style");ya in n&&(n[ya]=r?i.display:"",n[Uf]&&(i.display="none"))}const rh=/\s*!important$/;function aa(n,t,e){if(ee(e))e.forEach(i=>aa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=q0(n,t);rh.test(e)?n.setProperty(Us(i),e.replace(rh,""),"important"):n[i]=e}}const oh=["Webkit","Moz","ms"],il={};function q0(n,t){const e=il[t];if(e)return e;let i=On(t);if(i!=="filter"&&i in n)return il[t]=i;i=Ca(i);for(let s=0;s<oh.length;s++){const r=oh[s]+i;if(r in n)return il[t]=r}return t}const ah="http://www.w3.org/1999/xlink";function lh(n,t,e,i,s,r=Zp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ah,t.slice(6,t.length)):n.setAttributeNS(ah,t,e):e==null||r&&!Od(e)?n.removeAttribute(t):n.setAttribute(t,r?"":br(e)?String(e):e)}function ch(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Df(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(o!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let r=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=Od(e):e==null&&o==="string"?(e="",r=!0):o==="number"&&(e=0,r=!0)}try{n[t]=e}catch{}r&&n.removeAttribute(t)}function Y0(n,t,e,i){n.addEventListener(t,e,i)}function $0(n,t,e,i){n.removeEventListener(t,e,i)}const uh=Symbol("_vei");function K0(n,t,e,i,s=null){const r=n[uh]||(n[uh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=j0(t);if(i){const c=r[t]=Q0(i,s);Y0(n,a,c,l)}else o&&($0(n,a,o,l),r[t]=void 0)}}const hh=/(?:Once|Passive|Capture)$/;function j0(n){let t;if(hh.test(n)){t={};let i;for(;i=n.match(hh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Us(n.slice(2)),t]}let sl=0;const Z0=Promise.resolve(),J0=()=>sl||(Z0.then(()=>sl=0),sl=Date.now());function Q0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;mi(tg(i,e.value),t,5,[i])};return e.value=n,e.attached=J0(),e}function tg(n,t){if(ee(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const dh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,eg=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?H0(n,i,o):t==="style"?X0(n,e,i):Aa(t)?Xc(t)||K0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ng(n,t,i,o))?(ch(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&lh(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!en(i))?ch(n,On(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),lh(n,t,i,o))};function ng(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&dh(t)&&te(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dh(t)&&en(e)?!1:t in n}const ig=sn({patchProp:eg},z0);let fh;function sg(){return fh||(fh=l0(ig))}const rg=(...n)=>{const t=sg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=ag(i);if(!s)return;const r=t._component;!te(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,og(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function og(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ag(n){return en(n)?document.querySelector(n):n}const lg={id:"app"},cg=zn({__name:"App",setup(n){const t=kt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return si(()=>{window.addEventListener("mousemove",e)}),lu(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const r=Wu("router-link"),o=Wu("router-view");return _i(),vi("div",lg,[Im(Ft("nav",null,[Ke(r,{to:"/3d-bear-arts/leather"},{default:Ci(()=>s[0]||(s[0]=[Ii("Leather")])),_:1}),Ke(r,{to:"/3d-bear-arts/pop-art"},{default:Ci(()=>s[1]||(s[1]=[Ii("Pop MouseMove")])),_:1}),Ke(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Ci(()=>s[2]||(s[2]=[Ii("Pop3")])),_:1}),Ke(r,{to:"/3d-bear-arts/machine"},{default:Ci(()=>s[3]||(s[3]=[Ii("machine")])),_:1}),Ke(r,{to:"/3d-bear-arts/"},{default:Ci(()=>s[4]||(s[4]=[Ii("Water")])),_:1}),Ke(r,{to:"/3d-bear-arts/ghost-bear"},{default:Ci(()=>s[5]||(s[5]=[Ii("ghost")])),_:1}),Ke(r,{to:"/3d-bear-arts/white-ghost-bear"},{default:Ci(()=>s[6]||(s[6]=[Ii("white ghost")])),_:1}),Ke(r,{to:"/3d-bear-arts/aquar"},{default:Ci(()=>s[7]||(s[7]=[Ii("Aquar")])),_:1})],512),[[k0,t.value]]),Ke(o)])}}}),xi=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},ug=xi(cg,[["__scopeId","data-v-5c558729"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ir=typeof document<"u";function Nf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function hg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Nf(n.default)}const be=Object.assign;function rl(n,t){const e={};for(const i in t){const s=t[i];e[i]=Qn(s)?s.map(n):n(s)}return e}const Yr=()=>{},Qn=Array.isArray,Ff=/#/g,dg=/&/g,fg=/\//g,pg=/=/g,mg=/\?/g,Of=/\+/g,gg=/%5B/g,_g=/%5D/g,Bf=/%5E/g,vg=/%60/g,zf=/%7B/g,xg=/%7C/g,Gf=/%7D/g,yg=/%20/g;function du(n){return encodeURI(""+n).replace(xg,"|").replace(gg,"[").replace(_g,"]")}function Mg(n){return du(n).replace(zf,"{").replace(Gf,"}").replace(Bf,"^")}function Ql(n){return du(n).replace(Of,"%2B").replace(yg,"+").replace(Ff,"%23").replace(dg,"%26").replace(vg,"`").replace(zf,"{").replace(Gf,"}").replace(Bf,"^")}function Sg(n){return Ql(n).replace(pg,"%3D")}function wg(n){return du(n).replace(Ff,"%23").replace(mg,"%3F")}function Eg(n){return n==null?"":wg(n).replace(fg,"%2F")}function ro(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const bg=/\/$/,Tg=n=>n.replace(bg,"");function ol(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=n(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Cg(i??t,e),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:ro(o)}}function Ag(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function ph(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Rg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&_r(t.matched[i],e.matched[s])&&Hf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function _r(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Hf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Pg(n[e],t[e]))return!1;return!0}function Pg(n,t){return Qn(n)?mh(n,t):Qn(t)?mh(t,n):n===t}function mh(n,t){return Qn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Cg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var oo;(function(n){n.pop="pop",n.push="push"})(oo||(oo={}));var $r;(function(n){n.back="back",n.forward="forward",n.unknown=""})($r||($r={}));function Ig(n){if(!n)if(ir){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Tg(n)}const Lg=/^[^#]+#/;function Dg(n,t){return n.replace(Lg,"#")+t}function Ug(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function Ng(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Ug(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function gh(n,t){return(history.state?history.state.position-t:-1)+n}const tc=new Map;function Fg(n,t){tc.set(n,t)}function Og(n){const t=tc.get(n);return tc.delete(n),t}let Bg=()=>location.protocol+"//"+location.host;function kf(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ph(l,"")}return ph(e,n)+i+s}function zg(n,t,e,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=kf(n,location),_=e.value,x=t.value;let p=0;if(d){if(e.value=f,t.value=d,o&&o===_){o=null;return}p=x?d.position-x.position:0}else i(f);s.forEach(m=>{m(e.value,_,{delta:p,type:oo.pop,direction:p?p>0?$r.forward:$r.back:$r.unknown})})};function l(){o=e.value}function c(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(be({},d.state,{scroll:za()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function _h(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?za():null}}function Gg(n){const{history:t,location:e}=window,i={value:kf(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+l:Bg()+n+l;try{t[h?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),e[h?"replace":"assign"](d)}}function o(l,c){const h=be({},t.state,_h(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=be({},s.value,t.state,{forward:l,scroll:za()});r(h.current,h,!0);const u=be({},_h(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Hg(n){n=Ig(n);const t=Gg(n),e=zg(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=be({location:"",base:n,go:i,createHref:Dg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function kg(n){return typeof n=="string"||n&&typeof n=="object"}function Vf(n){return typeof n=="string"||typeof n=="symbol"}const Wf=Symbol("");var vh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(vh||(vh={}));function vr(n,t){return be(new Error,{type:n,[Wf]:!0},t)}function wi(n,t){return n instanceof Error&&Wf in n&&(t==null||!!(n.type&t))}const xh="[^/]+?",Vg={sensitive:!1,strict:!1,start:!0,end:!0},Wg=/[.+*?^${}()[\]/\\]/g;function Xg(n,t){const e=be({},Vg,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const h=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const d=c[u];let f=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(Wg,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:x,optional:p,regexp:m}=d;r.push({name:_,repeatable:x,optional:p});const b=m||xh;if(b!==xh){f+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+w.message)}}let S=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(S=p&&c.length<2?`(?:/${S})`:"/"+S),p&&(S+="?"),s+=S,f+=20,p&&(f+=-8),x&&(f+=-20),b===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=r[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function l(c){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:x,optional:p}=f,m=_ in c?c[_]:"";if(Qn(m)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Qn(m)?m.join("/"):m;if(!b)if(p)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function qg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Xf(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=qg(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(yh(i))return 1;if(yh(s))return-1}return s.length-i.length}function yh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Yg={type:0,value:""},$g=/[a-zA-Z0-9_]/;function Kg(n){if(!n)return[[]];if(n==="/")return[[Yg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${c}": ${f}`)}let e=0,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(e===0?r.push({type:0,value:c}):e===1||e===2||e===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:l==="("?e=2:$g.test(l)?d():(u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:e=3:h+=l;break;case 3:u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function jg(n,t,e){const i=Xg(Kg(n.path),e),s=be(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Zg(n,t){const e=[],i=new Map;t=Eh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,d,f){const _=!f,x=Sh(u);x.aliasOf=f&&f.record;const p=Eh(t,u),m=[x];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of w)m.push(Sh(be({},x,{components:f?f.record.components:x.components,path:F,aliasOf:f?f.record:x})))}let b,S;for(const w of m){const{path:F}=w;if(d&&F[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";w.path=d.record.path+(F&&P+F)}if(b=jg(w,d,p),f?f.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),_&&u.name&&!wh(b)&&o(u.name)),qf(b)&&l(b),x.children){const I=x.children;for(let P=0;P<I.length;P++)r(I[P],b,f&&f.children[P])}f=f||b}return S?()=>{o(S)}:Yr}function o(u){if(Vf(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){const d=t_(u,e);e.splice(d,0,u),u.record.name&&!wh(u)&&i.set(u.record.name,u)}function c(u,d){let f,_={},x,p;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw vr(1,{location:u});p=f.record.name,_=be(Mh(d.params,f.keys.filter(S=>!S.optional).concat(f.parent?f.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&Mh(u.params,f.keys.map(S=>S.name))),x=f.stringify(_)}else if(u.path!=null)x=u.path,f=e.find(S=>S.re.test(x)),f&&(_=f.parse(x),p=f.record.name);else{if(f=d.name?i.get(d.name):e.find(S=>S.re.test(d.path)),!f)throw vr(1,{location:u,currentLocation:d});p=f.record.name,_=be({},d.params,u.params),x=f.stringify(_)}const m=[];let b=f;for(;b;)m.unshift(b.record),b=b.parent;return{name:p,path:x,params:_,matched:m,meta:Qg(m)}}n.forEach(u=>r(u));function h(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Mh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Sh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Jg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Jg(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function wh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Qg(n){return n.reduce((t,e)=>be(t,e.meta),{})}function Eh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function t_(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;Xf(n,t[r])<0?i=r:e=r+1}const s=e_(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function e_(n){let t=n;for(;t=t.parent;)if(qf(t)&&Xf(n,t)===0)return t}function qf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function n_(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Of," "),o=r.indexOf("="),a=ro(o<0?r:r.slice(0,o)),l=o<0?null:ro(r.slice(o+1));if(a in t){let c=t[a];Qn(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function bh(n){let t="";for(let e in n){const i=n[e];if(e=Sg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Qn(i)?i.map(r=>r&&Ql(r)):[i&&Ql(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function i_(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Qn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const s_=Symbol(""),Th=Symbol(""),fu=Symbol(""),Yf=Symbol(""),ec=Symbol("");function Lr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ns(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(vr(4,{from:e,to:t})):d instanceof Error?l(d):kg(d)?l(vr(2,{from:t,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},h=r(()=>n.call(i&&i.instances[s],t,e,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(d=>l(d))})}function al(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Nf(l)){const h=(l.__vccOpts||l)[t];h&&r.push(ns(h,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=hg(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&ns(f,e,i,o,a,s)()}))}}return r}function Ah(n){const t=Bi(fu),e=Bi(Yf),i=Yn(()=>{const l=cr(n.to);return t.resolve(l)}),s=Yn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(_r.bind(null,h));if(d>-1)return d;const f=Rh(l[c-2]);return c>1&&Rh(h)===f&&u[u.length-1].path!==f?u.findIndex(_r.bind(null,l[c-2])):d}),r=Yn(()=>s.value>-1&&l_(e.params,i.value.params)),o=Yn(()=>s.value>-1&&s.value===e.matched.length-1&&Hf(e.params,i.value.params));function a(l={}){return a_(l)?t[cr(n.replace)?"replace":"push"](cr(n.to)).catch(Yr):Promise.resolve()}return{route:i,href:Yn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const r_=zn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ah,setup(n,{slots:t}){const e=La(Ah(n)),{options:i}=Bi(fu),s=Yn(()=>({[Ph(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Ph(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&t.default(e);return n.custom?r:Lf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),o_=r_;function a_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function l_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Qn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Rh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ph=(n,t,e)=>n??t??e,c_=zn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Bi(ec),s=Yn(()=>n.route||i.value),r=Bi(Th,0),o=Yn(()=>{let c=cr(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=Yn(()=>s.value.matched[o.value]);ra(Th,Yn(()=>o.value+1)),ra(s_,a),ra(ec,s);const l=kt();return ke(()=>[l.value,a.value,n.name],([c,h,u],[d,f,_])=>{h&&(h.instances[u]=c,f&&f!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),c&&h&&(!f||!_r(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return Ch(e.default,{Component:d,route:c});const f=u.props[h],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,p=Lf(d,be({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return Ch(e.default,{Component:p,route:c})||p}}});function Ch(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const u_=c_;function h_(n){const t=Zg(n.routes,n),e=n.parseQuery||n_,i=n.stringifyQuery||bh,s=n.history,r=Lr(),o=Lr(),a=Lr(),l=Ps(Yi);let c=Yi;ir&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=rl.bind(null,N=>""+N),u=rl.bind(null,Eg),d=rl.bind(null,ro);function f(N,Q){let at,ht;return Vf(N)?(at=t.getRecordMatcher(N),ht=Q):ht=N,t.addRoute(ht,at)}function _(N){const Q=t.getRecordMatcher(N);Q&&t.removeRoute(Q)}function x(){return t.getRoutes().map(N=>N.record)}function p(N){return!!t.getRecordMatcher(N)}function m(N,Q){if(Q=be({},Q||l.value),typeof N=="string"){const T=ol(e,N,Q.path),L=t.resolve({path:T.path},Q),U=s.createHref(T.fullPath);return be(T,L,{params:d(L.params),hash:ro(T.hash),redirectedFrom:void 0,href:U})}let at;if(N.path!=null)at=be({},N,{path:ol(e,N.path,Q.path).path});else{const T=be({},N.params);for(const L in T)T[L]==null&&delete T[L];at=be({},N,{params:u(T)}),Q.params=u(Q.params)}const ht=t.resolve(at,Q),bt=N.hash||"";ht.params=h(d(ht.params));const et=Ag(i,be({},N,{hash:Mg(bt),path:ht.path})),g=s.createHref(et);return be({fullPath:et,hash:bt,query:i===bh?i_(N.query):N.query||{}},ht,{redirectedFrom:void 0,href:g})}function b(N){return typeof N=="string"?ol(e,N,l.value.path):be({},N)}function S(N,Q){if(c!==N)return vr(8,{from:Q,to:N})}function w(N){return P(N)}function F(N){return w(be(b(N),{replace:!0}))}function I(N){const Q=N.matched[N.matched.length-1];if(Q&&Q.redirect){const{redirect:at}=Q;let ht=typeof at=="function"?at(N):at;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=b(ht):{path:ht},ht.params={}),be({query:N.query,hash:N.hash,params:ht.path!=null?{}:N.params},ht)}}function P(N,Q){const at=c=m(N),ht=l.value,bt=N.state,et=N.force,g=N.replace===!0,T=I(at);if(T)return P(be(b(T),{state:typeof T=="object"?be({},bt,T.state):bt,force:et,replace:g}),Q||at);const L=at;L.redirectedFrom=Q;let U;return!et&&Rg(i,ht,at)&&(U=vr(16,{to:L,from:ht}),_t(ht,ht,!0,!1)),(U?Promise.resolve(U):y(L,ht)).catch(D=>wi(D)?wi(D,2)?D:St(D):V(D,L,ht)).then(D=>{if(D){if(wi(D,2))return P(be({replace:g},b(D.to),{state:typeof D.to=="object"?be({},bt,D.to.state):bt,force:et}),Q||L)}else D=j(L,ht,!0,g,bt);return E(L,ht,D),D})}function O(N,Q){const at=S(N,Q);return at?Promise.reject(at):Promise.resolve()}function it(N){const Q=ot.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(N):N()}function y(N,Q){let at;const[ht,bt,et]=d_(N,Q);at=al(ht.reverse(),"beforeRouteLeave",N,Q);for(const T of ht)T.leaveGuards.forEach(L=>{at.push(ns(L,N,Q))});const g=O.bind(null,N,Q);return at.push(g),xt(at).then(()=>{at=[];for(const T of r.list())at.push(ns(T,N,Q));return at.push(g),xt(at)}).then(()=>{at=al(bt,"beforeRouteUpdate",N,Q);for(const T of bt)T.updateGuards.forEach(L=>{at.push(ns(L,N,Q))});return at.push(g),xt(at)}).then(()=>{at=[];for(const T of et)if(T.beforeEnter)if(Qn(T.beforeEnter))for(const L of T.beforeEnter)at.push(ns(L,N,Q));else at.push(ns(T.beforeEnter,N,Q));return at.push(g),xt(at)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),at=al(et,"beforeRouteEnter",N,Q,it),at.push(g),xt(at))).then(()=>{at=[];for(const T of o.list())at.push(ns(T,N,Q));return at.push(g),xt(at)}).catch(T=>wi(T,8)?T:Promise.reject(T))}function E(N,Q,at){a.list().forEach(ht=>it(()=>ht(N,Q,at)))}function j(N,Q,at,ht,bt){const et=S(N,Q);if(et)return et;const g=Q===Yi,T=ir?history.state:{};at&&(ht||g?s.replace(N.fullPath,be({scroll:g&&T&&T.scroll},bt)):s.push(N.fullPath,bt)),l.value=N,_t(N,Q,at,g),St()}let H;function Z(){H||(H=s.listen((N,Q,at)=>{if(!dt.listening)return;const ht=m(N),bt=I(ht);if(bt){P(be(bt,{replace:!0}),ht).catch(Yr);return}c=ht;const et=l.value;ir&&Fg(gh(et.fullPath,at.delta),za()),y(ht,et).catch(g=>wi(g,12)?g:wi(g,2)?(P(g.to,ht).then(T=>{wi(T,20)&&!at.delta&&at.type===oo.pop&&s.go(-1,!1)}).catch(Yr),Promise.reject()):(at.delta&&s.go(-at.delta,!1),V(g,ht,et))).then(g=>{g=g||j(ht,et,!1),g&&(at.delta&&!wi(g,8)?s.go(-at.delta,!1):at.type===oo.pop&&wi(g,20)&&s.go(-1,!1)),E(ht,et,g)}).catch(Yr)}))}let lt=Lr(),W=Lr(),tt;function V(N,Q,at){St(N);const ht=W.list();return ht.length?ht.forEach(bt=>bt(N,Q,at)):console.error(N),Promise.reject(N)}function gt(){return tt&&l.value!==Yi?Promise.resolve():new Promise((N,Q)=>{lt.add([N,Q])})}function St(N){return tt||(tt=!N,Z(),lt.list().forEach(([Q,at])=>N?at(N):Q()),lt.reset()),N}function _t(N,Q,at,ht){const{scrollBehavior:bt}=n;if(!ir||!bt)return Promise.resolve();const et=!at&&Og(gh(N.fullPath,0))||(ht||!at)&&history.state&&history.state.scroll||null;return sf().then(()=>bt(N,Q,et)).then(g=>g&&Ng(g)).catch(g=>V(g,N,Q))}const It=N=>s.go(N);let Gt;const ot=new Set,dt={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:x,resolve:m,options:n,push:w,replace:F,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:gt,install(N){const Q=this;N.component("RouterLink",o_),N.component("RouterView",u_),N.config.globalProperties.$router=Q,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>cr(l)}),ir&&!Gt&&l.value===Yi&&(Gt=!0,w(s.location).catch(bt=>{}));const at={};for(const bt in Yi)Object.defineProperty(at,bt,{get:()=>l.value[bt],enumerable:!0});N.provide(fu,Q),N.provide(Yf,Jd(at)),N.provide(ec,l);const ht=N.unmount;ot.add(N),N.unmount=function(){ot.delete(N),ot.size<1&&(c=Yi,H&&H(),H=null,l.value=Yi,Gt=!1,tt=!1),ht()}}};function xt(N){return N.reduce((Q,at)=>Q.then(()=>it(at)),Promise.resolve())}return dt}function d_(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>_r(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>_r(c,l))||s.push(l))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pu="169",f_=0,Ih=1,p_=2,$f=1,m_=2,Li=3,as=0,yn=1,ce=2,ss=0,dr=1,Lh=2,Dh=3,Uh=4,g_=5,Es=100,__=101,v_=102,x_=103,y_=104,M_=200,S_=201,w_=202,E_=203,nc=204,ic=205,b_=206,T_=207,A_=208,R_=209,P_=210,C_=211,I_=212,L_=213,D_=214,sc=0,rc=1,oc=2,xr=3,ac=4,lc=5,cc=6,uc=7,Kf=0,U_=1,N_=2,rs=0,F_=1,O_=2,B_=3,z_=4,G_=5,H_=6,k_=7,jf=300,yr=301,Mr=302,ao=303,hc=304,Ga=306,Ge=1e3,Ts=1001,dc=1002,Fn=1003,V_=1004,Po=1005,$n=1006,ll=1007,As=1008,zi=1009,Zf=1010,Jf=1011,lo=1012,mu=1013,Is=1014,Ni=1015,_o=1016,gu=1017,_u=1018,Sr=1020,Qf=35902,tp=1021,ep=1022,jn=1023,np=1024,ip=1025,fr=1026,wr=1027,sp=1028,vu=1029,rp=1030,xu=1031,yu=1033,la=33776,ca=33777,ua=33778,ha=33779,fc=35840,pc=35841,mc=35842,gc=35843,_c=36196,vc=37492,xc=37496,yc=37808,Mc=37809,Sc=37810,wc=37811,Ec=37812,bc=37813,Tc=37814,Ac=37815,Rc=37816,Pc=37817,Cc=37818,Ic=37819,Lc=37820,Dc=37821,da=36492,Uc=36494,Nc=36495,op=36283,Fc=36284,Oc=36285,Bc=36286,W_=3200,X_=3201,ap=0,q_=1,is="",ui="srgb",us="srgb-linear",Mu="display-p3",Ha="display-p3-linear",Ma="linear",Le="srgb",Sa="rec709",wa="p3",ks=7680,Nh=519,Y_=512,$_=513,K_=514,lp=515,j_=516,Z_=517,J_=518,Q_=519,Fh=35044,Oh="300 es",Fi=2e3,Ea=2001;class Tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bh=1234567;const Kr=Math.PI/180,co=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function Su(n,t){return(n%t+t)%t}function tv(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ev(n,t,e){return n!==t?(e-n)/(t-n):0}function jr(n,t,e){return(1-e)*n+e*t}function nv(n,t,e,i){return jr(n,t,1-Math.exp(-e*i))}function iv(n,t=1){return t-Math.abs(Su(n,t*2)-t)}function sv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function rv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ov(n,t){return n+Math.floor(Math.random()*(t-n+1))}function av(n,t){return n+Math.random()*(t-n)}function lv(n){return n*(.5-Math.random())}function cv(n){n!==void 0&&(Bh=n);let t=Bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uv(n){return n*Kr}function hv(n){return n*co}function dv(n){return(n&n-1)===0&&n!==0}function fv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mv(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const re={DEG2RAD:Kr,RAD2DEG:co,generateUUID:Ns,clamp:tn,euclideanModulo:Su,mapLinear:tv,inverseLerp:ev,lerp:jr,damp:nv,pingpong:iv,smoothstep:sv,smootherstep:rv,randInt:ov,randFloat:av,randFloatSpread:lv,seededRandom:cv,degToRad:uv,radToDeg:hv,isPowerOfTwo:dv,ceilPowerOfTwo:fv,floorPowerOfTwo:pv,setQuaternionFromProperEuler:mv,normalize:mn,denormalize:sr};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,i,s,r,o,a,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],x=s[0],p=s[3],m=s[6],b=s[1],S=s[4],w=s[7],F=s[2],I=s[5],P=s[8];return r[0]=o*x+a*b+l*F,r[3]=o*p+a*S+l*I,r[6]=o*m+a*w+l*P,r[1]=c*x+h*b+u*F,r[4]=c*p+h*S+u*I,r[7]=c*m+h*w+u*P,r[2]=d*x+f*b+_*F,r[5]=d*p+f*S+_*I,r[8]=d*m+f*w+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=e*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cl.makeScale(t,e)),this}rotate(t){return this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cl=new se;function cp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gv(){const n=uo("canvas");return n.style.display="block",n}const zh={};function fa(n){n in zh||(zh[n]=!0,console.warn(n))}function _v(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function vv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Gh=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hh=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[us]:{transfer:Ma,primaries:Sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ui]:{transfer:Le,primaries:Sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ha]:{transfer:Ma,primaries:wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Hh),fromReference:n=>n.applyMatrix3(Gh)},[Mu]:{transfer:Le,primaries:wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Hh),fromReference:n=>n.applyMatrix3(Gh).convertLinearToSRGB()}},yv=new Set([us,Ha]),Se={enabled:!0,_workingColorSpace:us,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Dr[t].toReference,s=Dr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Dr[n].primaries},getTransfer:function(n){return n===is?Ma:Dr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Dr[t].luminanceCoefficients)}};function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ul(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vs;class Mv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vs===void 0&&(Vs=uo("canvas")),Vs.width=t.width,Vs.height=t.height;const i=Vs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=uo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pr(e[i]/255)*255):e[i]=pr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sv=0;class up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hl(s[o].image)):r.push(hl(s[o]))}else r=hl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wv=0;class xn extends Tr{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,i=Ts,s=Ts,r=$n,o=As,a=jn,l=zi,c=xn.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Ns(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ge:t.x=t.x-Math.floor(t.x);break;case Ts:t.x=t.x<0?0:1;break;case dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ge:t.y=t.y-Math.floor(t.y);break;case Ts:t.y=t.y<0?0:1;break;case dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=jf;xn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,w=(f+1)/2,F=(m+1)/2,I=(h+d)/4,P=(u+x)/4,O=(_+p)/4;return S>w&&S>F?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=I/i,r=P/i):w>F?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=I/s,r=O/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=P/r,s=O/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ev extends Tr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new up(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends Ev{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class hp extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bv extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==_){let p=1-a;const m=l*d+c*f+h*_+u*x,b=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const F=Math.sqrt(S),I=Math.atan2(F,m*b);p=Math.sin(p*I)/F,a=Math.sin(a*I)/F}const w=a*b;if(l=l*p+d*w,c=c*p+f*w,h=h*p+_*w,u=u*p+x*w,p===1-a){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,i=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new Y,kh=new vo;class xo{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),Io.subVectors(this.max,Ur),Ws.subVectors(t.a,Ur),Xs.subVectors(t.b,Ur),qs.subVectors(t.c,Ur),$i.subVectors(Xs,Ws),Ki.subVectors(qs,Xs),ms.subVectors(Ws,qs);let e=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-ms.z,ms.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,ms.z,0,-ms.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-ms.y,ms.x,0];return!fl(e,Ws,Xs,qs,Io)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Ws,Xs,qs,Io))?!1:(Lo.crossVectors($i,Ki),e=[Lo.x,Lo.y,Lo.z],fl(e,Ws,Xs,qs,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Wn=new Y,Co=new xo,Ws=new Y,Xs=new Y,qs=new Y,$i=new Y,Ki=new Y,ms=new Y,Ur=new Y,Io=new Y,Lo=new Y,gs=new Y;function fl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gs.fromArray(n,r);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=t.dot(gs),c=e.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Tv=new xo,Nr=new Y,pl=new Y;class wu{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Tv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);const e=Nr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Nr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(pl)),this.expandByPoint(Nr.copy(t.center).sub(pl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new Y,ml=new Y,Do=new Y,ji=new Y,gl=new Y,Uo=new Y,_l=new Y;class Av{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ml.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),ji.copy(this.origin).sub(ml);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Do),a=ji.dot(this.direction),l=-ji.dot(Do),c=ji.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ml).addScaledVector(Do,d),f}intersectSphere(t,e){bi.subVectors(t.center,this.origin);const i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,i,s,r){gl.subVectors(e,t),Uo.subVectors(i,t),_l.crossVectors(gl,Uo);let o=this.direction.dot(_l),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,t);const l=a*this.direction.dot(Uo.crossVectors(ji,Uo));if(l<0)return null;const c=a*this.direction.dot(gl.cross(ji));if(c<0||l+c>o)return null;const h=-a*ji.dot(_l);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,_,x,p){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,_,x,p)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,_,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,_=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d+x*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,_=a*h,x=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rv,t,Pv)}lookAt(t,e,i){const s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Zi.crossVectors(i,En),Zi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Zi.crossVectors(i,En)),Zi.normalize(),No.crossVectors(En,Zi),s[0]=Zi.x,s[4]=No.x,s[8]=En.x,s[1]=Zi.y,s[5]=No.y,s[9]=En.y,s[2]=Zi.z,s[6]=No.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],x=i[6],p=i[10],m=i[14],b=i[3],S=i[7],w=i[11],F=i[15],I=s[0],P=s[4],O=s[8],it=s[12],y=s[1],E=s[5],j=s[9],H=s[13],Z=s[2],lt=s[6],W=s[10],tt=s[14],V=s[3],gt=s[7],St=s[11],_t=s[15];return r[0]=o*I+a*y+l*Z+c*V,r[4]=o*P+a*E+l*lt+c*gt,r[8]=o*O+a*j+l*W+c*St,r[12]=o*it+a*H+l*tt+c*_t,r[1]=h*I+u*y+d*Z+f*V,r[5]=h*P+u*E+d*lt+f*gt,r[9]=h*O+u*j+d*W+f*St,r[13]=h*it+u*H+d*tt+f*_t,r[2]=_*I+x*y+p*Z+m*V,r[6]=_*P+x*E+p*lt+m*gt,r[10]=_*O+x*j+p*W+m*St,r[14]=_*it+x*H+p*tt+m*_t,r[3]=b*I+S*y+w*Z+F*V,r[7]=b*P+S*E+w*lt+F*gt,r[11]=b*O+S*j+w*W+F*St,r[15]=b*it+S*H+w*tt+F*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],x=t[7],p=t[11],m=t[15];return _*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],x=t[13],p=t[14],m=t[15],b=u*p*c-x*d*c+x*l*f-a*p*f-u*l*m+a*d*m,S=_*d*c-h*p*c-_*l*f+o*p*f+h*l*m-o*d*m,w=h*x*c-_*u*c+_*a*f-o*x*f-h*a*m+o*u*m,F=_*u*l-h*x*l-_*a*d+o*x*d+h*a*p-o*u*p,I=e*b+i*S+s*w+r*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=b*P,t[1]=(x*d*r-u*p*r-x*s*f+i*p*f+u*s*m-i*d*m)*P,t[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*m+i*l*m)*P,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=S*P,t[5]=(h*p*r-_*d*r+_*s*f-e*p*f-h*s*m+e*d*m)*P,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*m-e*l*m)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=w*P,t[9]=(_*u*r-h*x*r-_*i*f+e*x*f+h*i*m-e*u*m)*P,t[10]=(o*x*r-_*a*r+_*i*c-e*x*c-o*i*m+e*a*m)*P,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*P,t[12]=F*P,t[13]=(h*x*s-_*u*s+_*i*d-e*x*d-h*i*p+e*u*p)*P,t[14]=(_*a*s-o*x*s-_*i*l+e*x*l+o*i*p-e*a*p)*P,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,x=o*h,p=o*u,m=a*u,b=l*c,S=l*h,w=l*u,F=i.x,I=i.y,P=i.z;return s[0]=(1-(x+m))*F,s[1]=(f+w)*F,s[2]=(_-S)*F,s[3]=0,s[4]=(f-w)*I,s[5]=(1-(d+m))*I,s[6]=(p+b)*I,s[7]=0,s[8]=(_+S)*P,s[9]=(p-b)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ys.set(s[0],s[1],s[2]).length();const o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xn.copy(this);const c=1/r,h=1/o,u=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Fi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===Fi)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ea)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Fi){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h;let _,x;if(a===Fi)_=(o+r)*u,x=-2*u;else if(a===Ea)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ys=new Y,Xn=new De,Rv=new Y(0,0,0),Pv=new Y(1,1,1),Zi=new Y,No=new Y,En=new Y,Vh=new De,Wh=new vo;class gi{constructor(t=0,e=0,i=0,s=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cv=0;const Xh=new Y,$s=new vo,Ti=new De,Fo=new Y,Fr=new Y,Iv=new Y,Lv=new vo,qh=new Y(1,0,0),Yh=new Y(0,1,0),$h=new Y(0,0,1),Kh={type:"added"},Dv={type:"removed"},Ks={type:"childadded",child:null},vl={type:"childremoved",child:null};class un extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const t=new Y,e=new gi,i=new vo,s=new Y(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new se}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(qh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return Xh.copy(t).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fo.copy(t):Fo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Fr,Fo,this.up):Ti.lookAt(Fo,Fr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ti),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dv),vl.child=t,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,Iv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Lv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}un.DEFAULT_UP=new Y(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new Y,Ai=new Y,xl=new Y,Ri=new Y,js=new Y,Zs=new Y,jh=new Y,yl=new Y,Ml=new Y,Sl=new Y,wl=new Ae,El=new Ae,bl=new Ae;class Kn{constructor(t=new Y,e=new Y,i=new Y){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),qn.subVectors(t,e),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){qn.subVectors(s,e),Ai.subVectors(i,e),xl.subVectors(t,e);const o=qn.dot(qn),a=qn.dot(Ai),l=qn.dot(xl),c=Ai.dot(Ai),h=Ai.dot(xl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return wl.setScalar(0),El.setScalar(0),bl.setScalar(0),wl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(El,r.y),o.addScaledVector(bl,r.z),o}static isFrontFacing(t,e,i,s){return qn.subVectors(i,e),Ai.subVectors(t,e),qn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),qn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Kn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),Zs.subVectors(r,i),yl.subVectors(t,i);const l=js.dot(yl),c=Zs.dot(yl);if(l<=0&&c<=0)return e.copy(i);Ml.subVectors(t,s);const h=js.dot(Ml),u=Zs.dot(Ml);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(js,o);Sl.subVectors(t,r);const f=js.dot(Sl),_=Zs.dot(Sl);if(_>=0&&f<=_)return e.copy(r);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Zs,a);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return jh.subVectors(r,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(jh,a);const m=1/(p+x+d);return o=x*m,a=d*m,e.copy(i).addScaledVector(js,o).addScaledVector(Zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Tl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class fe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Se.workingColorSpace){if(t=Su(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Tl(o,r,t+1/3),this.g=Tl(o,r,t),this.b=Tl(o,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=ui){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ui){const i=fp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}copyLinearToSRGB(t){return this.r=ul(t.r),this.g=ul(t.g),this.b=ul(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Se.fromWorkingColorSpace(on.copy(this),t),Math.round(tn(on.r*255,0,255))*65536+Math.round(tn(on.g*255,0,255))*256+Math.round(tn(on.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(on.copy(this),e);const i=on.r,s=on.g,r=on.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=ui){Se.fromWorkingColorSpace(on.copy(this),t);const e=on.r,i=on.g,s=on.b;return t!==ui?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(Oo);const i=jr(Ji.h,Oo.h,e),s=jr(Ji.s,Oo.s,e),r=jr(Ji.l,Oo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new fe;fe.NAMES=fp;let Uv=0;class yo extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=dr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nc&&(i.blendSrc=this.blendSrc),this.blendDst!==ic&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ti extends yo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new Y,Bo=new zt;class pi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=sr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fh&&(t.usage=this.usage),t}}class pp extends pi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class mp extends pi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qe extends pi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Nv=0;const Nn=new De,Al=new un,Js=new Y,bn=new xo,Or=new xo,Qe=new Y;class Gn extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cp(t)?mp:pp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new se().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,i){return Nn.makeTranslation(t,e,i),this.applyMatrix4(Nn),this}scale(t,e,i){return Nn.makeScale(t,e,i),this.applyMatrix4(Nn),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(bn.min,Or.min),bn.expandByPoint(Qe),Qe.addVectors(bn.max,Or.max),bn.expandByPoint(Qe)):(bn.expandByPoint(Or.min),bn.expandByPoint(Or.max))}bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(t,c),Qe.add(Js)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new Y,l[O]=new Y;const c=new Y,h=new Y,u=new Y,d=new zt,f=new zt,_=new zt,x=new Y,p=new Y;function m(O,it,y){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,it),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,it),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const E=1/(f.x*_.y-_.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(E),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(E),a[O].add(x),a[it].add(x),a[y].add(x),l[O].add(p),l[it].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let O=0,it=b.length;O<it;++O){const y=b[O],E=y.start,j=y.count;for(let H=E,Z=E+j;H<Z;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const S=new Y,w=new Y,F=new Y,I=new Y;function P(O){F.fromBufferAttribute(s,O),I.copy(F);const it=a[O];S.copy(it),S.sub(F.multiplyScalar(F.dot(it))).normalize(),w.crossVectors(I,it);const E=w.dot(l[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,E)}for(let O=0,it=b.length;O<it;++O){const y=b[O],E=y.start,j=y.count;for(let H=E,Z=E+j;H<Z;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,u=new Y;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new pi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new De,_s=new Av,zo=new wu,Jh=new Y,Go=new Y,Ho=new Y,ko=new Y,Rl=new Y,Vo=new Y,Qh=new Y,Wo=new Y;class R extends un{constructor(t=new Gn,e=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Rl.fromBufferAttribute(u,t),o?Vo.addScaledVector(Rl,h):Vo.addScaledVector(Rl.sub(e),h))}e.add(Vo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(zo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(zo,Jh)===null||_s.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&(Zh.copy(r).invert(),_s.copy(t.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=o[p.materialIndex],b=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let w=b,F=S;w<F;w+=3){const I=a.getX(w),P=a.getX(w+1),O=a.getX(w+2);s=Xo(this,m,t,i,c,h,u,I,P,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const b=a.getX(p),S=a.getX(p+1),w=a.getX(p+2);s=Xo(this,o,t,i,c,h,u,b,S,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=o[p.materialIndex],b=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=b,F=S;w<F;w+=3){const I=w,P=w+1,O=w+2;s=Xo(this,m,t,i,c,h,u,I,P,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const b=p,S=p+1,w=p+2;s=Xo(this,o,t,i,c,h,u,b,S,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Fv(n,t,e,i,s,r,o,a){let l;if(t.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===as,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Wo);return c<e.near||c>e.far?null:{distance:c,point:Wo.clone(),object:n}}function Xo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Go),n.getVertexPosition(l,Ho),n.getVertexPosition(c,ko);const h=Fv(n,t,e,i,Go,Ho,ko,Qh);if(h){const u=new Y;Kn.getBarycoord(Qh,Go,Ho,ko,u),s&&(h.uv=Kn.getInterpolatedAttribute(s,a,l,c,u,new zt)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,a,l,c,u,new zt)),o&&(h.normal=Kn.getInterpolatedAttribute(o,a,l,c,u,new Y),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};Kn.getNormal(Go,Ho,ko,d.normal),h.face=d,h.barycoord=u}return h}class Fs extends Gn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function _(x,p,m,b,S,w,F,I,P,O,it){const y=w/P,E=F/O,j=w/2,H=F/2,Z=I/2,lt=P+1,W=O+1;let tt=0,V=0;const gt=new Y;for(let St=0;St<W;St++){const _t=St*E-H;for(let It=0;It<lt;It++){const Gt=It*y-j;gt[x]=Gt*b,gt[p]=_t*S,gt[m]=Z,c.push(gt.x,gt.y,gt.z),gt[x]=0,gt[p]=0,gt[m]=I>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(It/P),u.push(1-St/O),tt+=1}}for(let St=0;St<O;St++)for(let _t=0;_t<P;_t++){const It=d+_t+lt*St,Gt=d+_t+lt*(St+1),ot=d+(_t+1)+lt*(St+1),dt=d+(_t+1)+lt*St;l.push(It,Gt,dt),l.push(Gt,ot,dt),V+=6}a.addGroup(f,V,it),f+=V,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function gn(n){const t={};for(let e=0;e<n.length;e++){const i=Er(n[e]);for(const s in i)t[s]=i[s]}return t}function Ov(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const Bv={clone:Er,merge:gn};var zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends yo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Ov(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class _p extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new Y,td=new zt,ed=new zt;class Be extends _p{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,td,ed),e.subVectors(ed,td)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qs=-90,tr=1;class Hv extends un{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(Qs,tr,t,e);s.layers=this.layers,this.add(s);const r=new Be(Qs,tr,t,e);r.layers=this.layers,this.add(r);const o=new Be(Qs,tr,t,e);o.layers=this.layers,this.add(o);const a=new Be(Qs,tr,t,e);a.layers=this.layers,this.add(a);const l=new Be(Qs,tr,t,e);l.layers=this.layers,this.add(l);const c=new Be(Qs,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class vp extends xn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kv extends Ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new vp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fs(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:ss});r.uniforms.tEquirect.value=e;const o=new R(s,r),a=e.minFilter;return e.minFilter===As&&(e.minFilter=$n),new Hv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Pl=new Y,Vv=new Y,Wv=new se;class Ss{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Pl.subVectors(i,e).cross(Vv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Wv.getNormalMatrix(t),s=this.coplanarPoint(Pl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new wu,qo=new Y;class Eu{constructor(t=new Ss,e=new Ss,i=new Ss,s=new Ss,r=new Ss,o=new Ss){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],x=s[10],p=s[11],m=s[12],b=s[13],S=s[14],w=s[15];if(i[0].setComponents(l-r,d-c,p-f,w-m).normalize(),i[1].setComponents(l+r,d+c,p+f,w+m).normalize(),i[2].setComponents(l+o,d+h,p+_,w+b).normalize(),i[3].setComponents(l-o,d-h,p-_,w-b).normalize(),i[4].setComponents(l-a,d-u,p-x,w-S).normalize(),e===Fi)i[5].setComponents(l+a,d+u,p+x,w+S).normalize();else if(e===Ea)i[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Xv(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],x=u[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ka extends Gn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],x=[],p=[];for(let m=0;m<h;m++){const b=m*d-o;for(let S=0;S<c;S++){const w=S*u-r;_.push(w,-b,0),x.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const S=b+c*m,w=b+c*(m+1),F=b+1+c*(m+1),I=b+1+c*m;f.push(S,w,I),f.push(w,F,I)}this.setIndex(f),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.width,t.height,t.widthSegments,t.heightSegments)}}var qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yv=`#ifdef USE_ALPHAHASH
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
#endif`,$v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jv=`#ifdef USE_AOMAP
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
#endif`,Qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
#endif`,ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rx=`#ifdef USE_IRIDESCENCE
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
#endif`,ox=`#ifdef USE_BUMPMAP
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mx=`#define PI 3.141592653589793
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
} // validated`,gx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_x=`vec3 transformedNormal = objectNormal;
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
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",wx=`
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
}`,Ex=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
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
}`,Ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ox=`uniform bool receiveShadow;
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
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vx=`PhysicalMaterial material;
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
#endif`,Wx=`struct PhysicalMaterial {
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
}`,Xx=`
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ey=`#if defined( USE_POINTS_UV )
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
#endif`,ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
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
#endif`,ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,py=`#ifdef USE_NORMALMAP
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
#endif`,my=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,by=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cy=`float getShadowMask() {
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
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,By=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zy=`#ifdef USE_TRANSMISSION
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
#endif`,Gy=`#ifdef USE_TRANSMISSION
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qy=`uniform sampler2D t2D;
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`#include <common>
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
}`,Jy=`#if DEPTH_PACKING == 3200
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
}`,Qy=`#define DISTANCE
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
}`,tM=`#define DISTANCE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`uniform float scale;
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
}`,sM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#define LAMBERT
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
}`,lM=`#define LAMBERT
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
}`,cM=`#define MATCAP
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
}`,uM=`#define MATCAP
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
}`,hM=`#define NORMAL
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
}`,dM=`#define NORMAL
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
}`,fM=`#define PHONG
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
}`,pM=`#define PHONG
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
}`,mM=`#define STANDARD
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
}`,gM=`#define STANDARD
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
}`,_M=`#define TOON
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
}`,vM=`#define TOON
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
}`,xM=`uniform float size;
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
}`,yM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,SM=`uniform vec3 color;
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
}`,wM=`uniform float rotation;
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
}`,EM=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:qv,alphahash_pars_fragment:Yv,alphamap_fragment:$v,alphamap_pars_fragment:Kv,alphatest_fragment:jv,alphatest_pars_fragment:Zv,aomap_fragment:Jv,aomap_pars_fragment:Qv,batching_pars_vertex:tx,batching_vertex:ex,begin_vertex:nx,beginnormal_vertex:ix,bsdfs:sx,iridescence_fragment:rx,bumpmap_pars_fragment:ox,clipping_planes_fragment:ax,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:cx,clipping_planes_vertex:ux,color_fragment:hx,color_pars_fragment:dx,color_pars_vertex:fx,color_vertex:px,common:mx,cube_uv_reflection_fragment:gx,defaultnormal_vertex:_x,displacementmap_pars_vertex:vx,displacementmap_vertex:xx,emissivemap_fragment:yx,emissivemap_pars_fragment:Mx,colorspace_fragment:Sx,colorspace_pars_fragment:wx,envmap_fragment:Ex,envmap_common_pars_fragment:bx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Bx,envmap_vertex:Rx,fog_vertex:Px,fog_pars_vertex:Cx,fog_fragment:Ix,fog_pars_fragment:Lx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Ux,lights_lambert_fragment:Nx,lights_lambert_pars_fragment:Fx,lights_pars_begin:Ox,lights_toon_fragment:zx,lights_toon_pars_fragment:Gx,lights_phong_fragment:Hx,lights_phong_pars_fragment:kx,lights_physical_fragment:Vx,lights_physical_pars_fragment:Wx,lights_fragment_begin:Xx,lights_fragment_maps:qx,lights_fragment_end:Yx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:jx,logdepthbuf_vertex:Zx,map_fragment:Jx,map_pars_fragment:Qx,map_particle_fragment:ty,map_particle_pars_fragment:ey,metalnessmap_fragment:ny,metalnessmap_pars_fragment:iy,morphinstance_vertex:sy,morphcolor_vertex:ry,morphnormal_vertex:oy,morphtarget_pars_vertex:ay,morphtarget_vertex:ly,normal_fragment_begin:cy,normal_fragment_maps:uy,normal_pars_fragment:hy,normal_pars_vertex:dy,normal_vertex:fy,normalmap_pars_fragment:py,clearcoat_normal_fragment_begin:my,clearcoat_normal_fragment_maps:gy,clearcoat_pars_fragment:_y,iridescence_pars_fragment:vy,opaque_fragment:xy,packing:yy,premultiplied_alpha_fragment:My,project_vertex:Sy,dithering_fragment:wy,dithering_pars_fragment:Ey,roughnessmap_fragment:by,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Ry,shadowmap_vertex:Py,shadowmask_pars_fragment:Cy,skinbase_vertex:Iy,skinning_pars_vertex:Ly,skinning_vertex:Dy,skinnormal_vertex:Uy,specularmap_fragment:Ny,specularmap_pars_fragment:Fy,tonemapping_fragment:Oy,tonemapping_pars_fragment:By,transmission_fragment:zy,transmission_pars_fragment:Gy,uv_pars_fragment:Hy,uv_pars_vertex:ky,uv_vertex:Vy,worldpos_vertex:Wy,background_vert:Xy,background_frag:qy,backgroundCube_vert:Yy,backgroundCube_frag:$y,cube_vert:Ky,cube_frag:jy,depth_vert:Zy,depth_frag:Jy,distanceRGBA_vert:Qy,distanceRGBA_frag:tM,equirect_vert:eM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:sM,meshbasic_vert:rM,meshbasic_frag:oM,meshlambert_vert:aM,meshlambert_frag:lM,meshmatcap_vert:cM,meshmatcap_frag:uM,meshnormal_vert:hM,meshnormal_frag:dM,meshphong_vert:fM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:_M,meshtoon_frag:vM,points_vert:xM,points_frag:yM,shadow_vert:MM,shadow_frag:SM,sprite_vert:wM,sprite_frag:EM},Bt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},di={basic:{uniforms:gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:gn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:gn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:gn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:gn([Bt.points,Bt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:gn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:gn([Bt.common,Bt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:gn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:gn([Bt.sprite,Bt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:gn([Bt.common,Bt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:gn([Bt.lights,Bt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};di.physical={uniforms:gn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Yo={r:0,b:0,g:0},xs=new gi,bM=new De;function TM(n,t,e,i,s,r,o){const a=new fe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const w=_(b);w===null?m(a,l):w&&w.isColor&&(m(w,1),S=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===Ga)?(h===void 0&&(h=new R(new Fs(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Er(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xs.copy(S.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(xs)),h.material.toneMapped=Se.getTransfer(w.colorSpace)!==Le,(u!==w||d!==w.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new R(new ka(2,2),new ei({name:"BackgroundMaterial",uniforms:Er(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Se.getTransfer(w.colorSpace)!==Le,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,S){b.getRGB(Yo,gp(n)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:p}}function AM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,E,j,H,Z){let lt=!1;const W=u(H,j,E);r!==W&&(r=W,c(r.object)),lt=f(y,H,j,Z),lt&&_(y,H,j,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,w(y,E,j,H),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,j){const H=j.wireframe===!0;let Z=i[y.id];Z===void 0&&(Z={},i[y.id]=Z);let lt=Z[E.id];lt===void 0&&(lt={},Z[E.id]=lt);let W=lt[H];return W===void 0&&(W=d(l()),lt[H]=W),W}function d(y){const E=[],j=[],H=[];for(let Z=0;Z<e;Z++)E[Z]=0,j[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:j,attributeDivisors:H,object:y,attributes:{},index:null}}function f(y,E,j,H){const Z=r.attributes,lt=E.attributes;let W=0;const tt=j.getAttributes();for(const V in tt)if(tt[V].location>=0){const St=Z[V];let _t=lt[V];if(_t===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),St===void 0||St.attribute!==_t||_t&&St.data!==_t.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function _(y,E,j,H){const Z={},lt=E.attributes;let W=0;const tt=j.getAttributes();for(const V in tt)if(tt[V].location>=0){let St=lt[V];St===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(St=y.instanceColor));const _t={};_t.attribute=St,St&&St.data&&(_t.data=St.data),Z[V]=_t,W++}r.attributes=Z,r.attributesNum=W,r.index=H}function x(){const y=r.newAttributes;for(let E=0,j=y.length;E<j;E++)y[E]=0}function p(y){m(y,0)}function m(y,E){const j=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;j[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),Z[y]!==E&&(n.vertexAttribDivisor(y,E),Z[y]=E)}function b(){const y=r.newAttributes,E=r.enabledAttributes;for(let j=0,H=E.length;j<H;j++)E[j]!==y[j]&&(n.disableVertexAttribArray(j),E[j]=0)}function S(y,E,j,H,Z,lt,W){W===!0?n.vertexAttribIPointer(y,E,j,Z,lt):n.vertexAttribPointer(y,E,j,H,Z,lt)}function w(y,E,j,H){x();const Z=H.attributes,lt=j.getAttributes(),W=E.defaultAttributeValues;for(const tt in lt){const V=lt[tt];if(V.location>=0){let gt=Z[tt];if(gt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),gt!==void 0){const St=gt.normalized,_t=gt.itemSize,It=t.get(gt);if(It===void 0)continue;const Gt=It.buffer,ot=It.type,dt=It.bytesPerElement,xt=ot===n.INT||ot===n.UNSIGNED_INT||gt.gpuType===mu;if(gt.isInterleavedBufferAttribute){const N=gt.data,Q=N.stride,at=gt.offset;if(N.isInstancedInterleavedBuffer){for(let ht=0;ht<V.locationSize;ht++)m(V.location+ht,N.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let ht=0;ht<V.locationSize;ht++)S(V.location+ht,_t/V.locationSize,ot,St,Q*dt,(at+_t/V.locationSize*ht)*dt,xt)}else{if(gt.isInstancedBufferAttribute){for(let N=0;N<V.locationSize;N++)m(V.location+N,gt.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let N=0;N<V.locationSize;N++)p(V.location+N);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let N=0;N<V.locationSize;N++)S(V.location+N,_t/V.locationSize,ot,St,_t*dt,_t/V.locationSize*N*dt,xt)}}else if(W!==void 0){const St=W[tt];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv(V.location,St);break;case 3:n.vertexAttrib3fv(V.location,St);break;case 4:n.vertexAttrib4fv(V.location,St);break;default:n.vertexAttrib1fv(V.location,St)}}}}b()}function F(){O();for(const y in i){const E=i[y];for(const j in E){const H=E[j];for(const Z in H)h(H[Z].object),delete H[Z];delete E[j]}delete i[y]}}function I(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const j in E){const H=E[j];for(const Z in H)h(H[Z].object),delete H[Z];delete E[j]}delete i[y.id]}function P(y){for(const E in i){const j=i[E];if(j[y.id]===void 0)continue;const H=j[y.id];for(const Z in H)h(H[Z].object),delete H[Z];delete j[y.id]}}function O(){it(),o=!0,r!==s&&(r=s,c(r.object))}function it(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:it,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function RM(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<d.length;x++)e.update(_,i,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==jn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===_o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==zi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ni&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:F,maxSamples:I}}function CM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ss,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,S=b*4;let w=m.clippingState||null;l.value=w,w=h(_,d,S,f);for(let F=0;F!==S;++F)w[F]=e[F];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,w=f;S!==x;++S,w+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function IM(n){let t=new WeakMap;function e(o,a){return a===ao?o.mapping=yr:a===hc&&(o.mapping=Mr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ao||a===hc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class yp extends _p{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const or=4,nd=[.125,.215,.35,.446,.526,.582],bs=20,Cl=new yp,id=new fe;let Il=null,Ll=0,Dl=0,Ul=!1;const ws=(1+Math.sqrt(5))/2,er=1/ws,sd=[new Y(-ws,er,0),new Y(ws,er,0),new Y(-er,0,ws),new Y(er,0,ws),new Y(0,ws,-er),new Y(0,ws,er),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class rd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Il=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Il,Ll,Dl),this._renderer.xr.enabled=Ul,t.scissorTest=!1,$o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Il=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:_o,format:jn,colorSpace:us,depthBuffer:!1},s=od(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(r)),this._blurMaterial=DM(r,t,e)}return s}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,i,s){const a=new Be(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(id),h.toneMapping=rs,h.autoClear=!1;const f=new ti({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),_=new R(new Fs,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(id),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;$o(s,b*S,m>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===yr||t.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new R(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;$o(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Cl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sd[(s-r-1)%sd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new R(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bs-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):bs;p>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bs}`);const m=[];let b=0;for(let P=0;P<bs;++P){const O=P/x,it=Math.exp(-O*O/2);m.push(it),P===0?b+=it:P<p&&(b+=2*it)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const w=this._sizeLods[s],F=3*w*(s>S-or?s-S+or:0),I=4*(this._cubeSize-w);$o(e,F,I,3*w,2*w),l.setRenderTarget(e),l.render(u,Cl)}}function LM(n){const t=[],e=[],i=[];let s=n;const r=n-or+1+nd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-or?l=nd[o-n+or-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,x=3,p=2,m=1,b=new Float32Array(x*_*f),S=new Float32Array(p*_*f),w=new Float32Array(m*_*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,O=I>2?0:-1,it=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];b.set(it,x*_*I),S.set(d,p*_*I);const y=[I,I,I,I,I,I];w.set(y,m*_*I)}const F=new Gn;F.setAttribute("position",new pi(b,x)),F.setAttribute("uv",new pi(S,p)),F.setAttribute("faceIndex",new pi(w,m)),t.push(F),s>or&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function od(n,t,e){const i=new Ls(n,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function DM(n,t,e){const i=new Float32Array(bs),s=new Y(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bu(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function ad(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function ld(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}function UM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ao||l===hc,h=l===yr||l===Mr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rd(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new rd(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function NM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function FM(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const x=f[_];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let S=0,w=b.length;S<w;S+=3){const F=b[S+0],I=b[S+1],P=b[S+2];d.push(F,I,I,P,P,F)}}else if(_!==void 0){const b=_.array;x=_.version;for(let S=0,w=b.length/3-1;S<w;S+=3){const F=S+0,I=S+1,P=S+2;d.push(F,I,I,P,P,F)}}else return;const p=new(cp(d)?mp:pp)(d,1);p.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function OM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,d*o,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,i,1)}function u(d,f,_,x){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,_);let m=0;for(let b=0;b<_;b++)m+=f[b];for(let b=0;b<x.length;b++)e.update(m,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function BM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function zM(n,t,e){const i=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),p===!0&&(w=3);let F=a.attributes.position.count*w,I=1;F>t.maxTextureSize&&(I=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const P=new Float32Array(F*I*4*u),O=new hp(P,F,I,u);O.type=Ni,O.needsUpdate=!0;const it=w*4;for(let E=0;E<u;E++){const j=m[E],H=b[E],Z=S[E],lt=F*I*4*E;for(let W=0;W<j.count;W++){const tt=W*it;_===!0&&(s.fromBufferAttribute(j,W),P[lt+tt+0]=s.x,P[lt+tt+1]=s.y,P[lt+tt+2]=s.z,P[lt+tt+3]=0),x===!0&&(s.fromBufferAttribute(H,W),P[lt+tt+4]=s.x,P[lt+tt+5]=s.y,P[lt+tt+6]=s.z,P[lt+tt+7]=0),p===!0&&(s.fromBufferAttribute(Z,W),P[lt+tt+8]=s.x,P[lt+tt+9]=s.y,P[lt+tt+10]=s.z,P[lt+tt+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:O,size:new zt(F,I)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function GM(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Mp extends xn{constructor(t,e,i,s,r,o,a,l,c,h=fr){if(h!==fr&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fr&&(i=Is),i===void 0&&h===wr&&(i=Sr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sp=new xn,cd=new Mp(1,1),wp=new hp,Ep=new bv,bp=new vp,ud=[],hd=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function Ar(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ud[s];if(r===void 0&&(r=new Float32Array(s),ud[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Va(n,t){let e=hd[t];e===void 0&&(e=new Int32Array(t),hd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function HM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function kM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),Je(e,t)}}function VM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),Je(e,t)}}function WM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),Je(e,t)}}function XM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;pd.set(i),n.uniformMatrix2fv(this.addr,!1,pd),Je(e,i)}}function qM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),Je(e,i)}}function YM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;dd.set(i),n.uniformMatrix4fv(this.addr,!1,dd),Je(e,i)}}function $M(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function KM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),Je(e,t)}}function jM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),Je(e,t)}}function ZM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),Je(e,t)}}function JM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function QM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),Je(e,t)}}function tS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),Je(e,t)}}function eS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),Je(e,t)}}function nS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(cd.compareFunction=lp,r=cd):r=Sp,e.setTexture2D(t||r,s)}function iS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ep,s)}function sS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||bp,s)}function rS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wp,s)}function oS(n){switch(n){case 5126:return HM;case 35664:return kM;case 35665:return VM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return $M;case 35667:case 35671:return KM;case 35668:case 35672:return jM;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return QM;case 36295:return tS;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return rS}}function aS(n,t){n.uniform1fv(this.addr,t)}function lS(n,t){const e=Ar(t,this.size,2);n.uniform2fv(this.addr,e)}function cS(n,t){const e=Ar(t,this.size,3);n.uniform3fv(this.addr,e)}function uS(n,t){const e=Ar(t,this.size,4);n.uniform4fv(this.addr,e)}function hS(n,t){const e=Ar(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function dS(n,t){const e=Ar(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function fS(n,t){const e=Ar(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function pS(n,t){n.uniform1iv(this.addr,t)}function mS(n,t){n.uniform2iv(this.addr,t)}function gS(n,t){n.uniform3iv(this.addr,t)}function _S(n,t){n.uniform4iv(this.addr,t)}function vS(n,t){n.uniform1uiv(this.addr,t)}function xS(n,t){n.uniform2uiv(this.addr,t)}function yS(n,t){n.uniform3uiv(this.addr,t)}function MS(n,t){n.uniform4uiv(this.addr,t)}function SS(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sp,r[o])}function wS(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ep,r[o])}function ES(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bp,r[o])}function bS(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wp,r[o])}function TS(n){switch(n){case 5126:return aS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return hS;case 35675:return dS;case 35676:return fS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return _S;case 5125:return vS;case 36294:return xS;case 36295:return yS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return bS}}class AS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=oS(e.type)}}class RS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=TS(e.type)}}class PS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function md(n,t){n.seq.push(t),n.map[t.id]=t}function CS(n,t,e){const i=n.name,s=i.length;for(Nl.lastIndex=0;;){const r=Nl.exec(i),o=Nl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){md(e,c===void 0?new AS(a,n,t):new RS(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new PS(a),md(e,u)),e=u}}}class pa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);CS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function gd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const IS=37297;let LS=0;function DS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function US(n){const t=Se.getPrimaries(Se.workingColorSpace),e=Se.getPrimaries(n);let i;switch(t===e?i="":t===wa&&e===Sa?i="LinearDisplayP3ToLinearSRGB":t===Sa&&e===wa&&(i="LinearSRGBToLinearDisplayP3"),n){case us:case Ha:return[i,"LinearTransferOETF"];case ui:case Mu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function _d(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+DS(n.getShaderSource(t),o)}else return s}function NS(n,t){const e=US(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function FS(n,t){let e;switch(t){case F_:e="Linear";break;case O_:e="Reinhard";break;case B_:e="Cineon";break;case z_:e="ACESFilmic";break;case H_:e="AgX";break;case k_:e="Neutral";break;case G_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ko=new Y;function OS(){Se.getLuminanceCoefficients(Ko);const n=Ko.x.toFixed(4),t=Ko.y.toFixed(4),e=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function zS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function GS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Gr(n){return n!==""}function vd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HS=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(HS,VS)}const kS=new Map;function VS(n,t){let e=ie[t];if(e===void 0){const i=kS.get(t);if(i!==void 0)e=ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zc(e)}const WS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(n){return n.replace(WS,XS)}function XS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function qS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===m_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function YS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Mr:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $S(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function KS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kf:t="ENVMAP_BLENDING_MULTIPLY";break;case U_:t="ENVMAP_BLENDING_MIX";break;case N_:t="ENVMAP_BLENDING_ADD";break}return t}function jS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ZS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=qS(e),c=YS(e),h=$S(e),u=KS(e),d=jS(e),f=BS(e),_=zS(r),x=s.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gr).join(`
`),m.length>0&&(m+=`
`)):(p=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),m=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rs?"#define TONE_MAPPING":"",e.toneMapping!==rs?ie.tonemapping_pars_fragment:"",e.toneMapping!==rs?FS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,NS("linearToOutputTexel",e.outputColorSpace),OS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),o=zc(o),o=vd(o,e),o=xd(o,e),a=zc(a),a=vd(a,e),a=xd(a,e),o=yd(o),a=yd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=b+p+o,w=b+m+a,F=gd(s,s.VERTEX_SHADER,S),I=gd(s,s.FRAGMENT_SHADER,w);s.attachShader(x,F),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(E){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(F).trim(),Z=s.getShaderInfoLog(I).trim();let lt=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,I);else{const tt=_d(s,F,"vertex"),V=_d(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+j+`
`+tt+`
`+V)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(H===""||Z==="")&&(W=!1);W&&(E.diagnostics={runnable:lt,programLog:j,vertexShader:{log:H,prefix:p},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(F),s.deleteShader(I),O=new pa(s,x),it=GS(s,x)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let it;this.getAttributes=function(){return it===void 0&&P(this),it};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,IS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=LS++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=I,this}let JS=0;class QS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new tw(t),e.set(t,i)),i}}class tw{constructor(t){this.id=JS++,this.code=t,this.usedTimes=0}}function ew(n,t,e,i,s,r,o){const a=new dp,l=new QS,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,j,H,Z){const lt=H.fog,W=Z.geometry,tt=y.isMeshStandardMaterial?H.environment:null,V=(y.isMeshStandardMaterial?e:t).get(y.envMap||tt),gt=V&&V.mapping===Ga?V.image.height:null,St=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const _t=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,It=_t!==void 0?_t.length:0;let Gt=0;W.morphAttributes.position!==void 0&&(Gt=1),W.morphAttributes.normal!==void 0&&(Gt=2),W.morphAttributes.color!==void 0&&(Gt=3);let ot,dt,xt,N;if(St){const Qt=di[St];ot=Qt.vertexShader,dt=Qt.fragmentShader}else ot=y.vertexShader,dt=y.fragmentShader,l.update(y),xt=l.getVertexShaderID(y),N=l.getFragmentShaderID(y);const Q=n.getRenderTarget(),at=Z.isInstancedMesh===!0,ht=Z.isBatchedMesh===!0,bt=!!y.map,et=!!y.matcap,g=!!V,T=!!y.aoMap,L=!!y.lightMap,U=!!y.bumpMap,D=!!y.normalMap,X=!!y.displacementMap,q=!!y.emissiveMap,M=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,k=y.clearcoat>0,z=y.dispersion>0,G=y.iridescence>0,ct=y.sheen>0,ut=y.transmission>0,pt=C&&!!y.anisotropyMap,Tt=k&&!!y.clearcoatMap,ft=k&&!!y.clearcoatNormalMap,Mt=k&&!!y.clearcoatRoughnessMap,Pt=G&&!!y.iridescenceMap,Dt=G&&!!y.iridescenceThicknessMap,Rt=ct&&!!y.sheenColorMap,Xt=ct&&!!y.sheenRoughnessMap,Ut=!!y.specularMap,Vt=!!y.specularColorMap,B=!!y.specularIntensityMap,mt=ut&&!!y.transmissionMap,nt=ut&&!!y.thicknessMap,J=!!y.gradientMap,yt=!!y.alphaMap,vt=y.alphaTest>0,Nt=!!y.alphaHash,Yt=!!y.extensions;let Jt=rs;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Jt=n.toneMapping);const Kt={shaderID:St,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:dt,defines:y.defines,customVertexShaderID:xt,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ht,batchingColor:ht&&Z._colorsTexture!==null,instancing:at,instancingColor:at&&Z.instanceColor!==null,instancingMorph:at&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:us,alphaToCoverage:!!y.alphaToCoverage,map:bt,matcap:et,envMap:g,envMapMode:g&&V.mapping,envMapCubeUVHeight:gt,aoMap:T,lightMap:L,bumpMap:U,normalMap:D,displacementMap:f&&X,emissiveMap:q,normalMapObjectSpace:D&&y.normalMapType===q_,normalMapTangentSpace:D&&y.normalMapType===ap,metalnessMap:M,roughnessMap:v,anisotropy:C,anisotropyMap:pt,clearcoat:k,clearcoatMap:Tt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Mt,dispersion:z,iridescence:G,iridescenceMap:Pt,iridescenceThicknessMap:Dt,sheen:ct,sheenColorMap:Rt,sheenRoughnessMap:Xt,specularMap:Ut,specularColorMap:Vt,specularIntensityMap:B,transmission:ut,transmissionMap:mt,thicknessMap:nt,gradientMap:J,opaque:y.transparent===!1&&y.blending===dr&&y.alphaToCoverage===!1,alphaMap:yt,alphaTest:vt,alphaHash:Nt,combine:y.combine,mapUv:bt&&p(y.map.channel),aoMapUv:T&&p(y.aoMap.channel),lightMapUv:L&&p(y.lightMap.channel),bumpMapUv:U&&p(y.bumpMap.channel),normalMapUv:D&&p(y.normalMap.channel),displacementMapUv:X&&p(y.displacementMap.channel),emissiveMapUv:q&&p(y.emissiveMap.channel),metalnessMapUv:M&&p(y.metalnessMap.channel),roughnessMapUv:v&&p(y.roughnessMap.channel),anisotropyMapUv:pt&&p(y.anisotropyMap.channel),clearcoatMapUv:Tt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&p(y.sheenRoughnessMap.channel),specularMapUv:Ut&&p(y.specularMap.channel),specularColorMapUv:Vt&&p(y.specularColorMap.channel),specularIntensityMapUv:B&&p(y.specularIntensityMap.channel),transmissionMapUv:mt&&p(y.transmissionMap.channel),thicknessMapUv:nt&&p(y.thicknessMap.channel),alphaMapUv:yt&&p(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(D||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!W.attributes.uv&&(bt||yt),fog:!!lt,useFog:y.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:bt&&y.map.isVideoTexture===!0&&Se.getTransfer(y.map.colorSpace)===Le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ce,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Yt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&y.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function b(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const j in y.defines)E.push(j),E.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(S(E,y),w(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function S(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function w(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function F(y){const E=x[y.type];let j;if(E){const H=di[E];j=Bv.clone(H.uniforms)}else j=y.uniforms;return j}function I(y,E){let j;for(let H=0,Z=h.length;H<Z;H++){const lt=h[H];if(lt.cacheKey===E){j=lt,++j.usedTimes;break}}return j===void 0&&(j=new ZS(n,E,y,r),h.push(j)),j}function P(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function O(y){l.remove(y)}function it(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:F,acquireProgram:I,releaseProgram:P,releaseShaderCache:O,programs:h,dispose:it}}function nw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function iw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,_,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,_,x,p){const m=o(u,d,f,_,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,_,x,p){const m=o(u,d,f,_,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||iw),i.length>1&&i.sort(d||Sd),s.length>1&&s.sort(d||Sd)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function sw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new wd,n.set(i,[o])):s>=r.length?(o=new wd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function rw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new fe};break;case"SpotLight":e={position:new Y,direction:new Y,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[t.id]=e,e}}}function ow(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let aw=0;function lw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function cw(n){const t=new rw,e=ow(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new De,o=new De;function a(c){let h=0,u=0,d=0;for(let it=0;it<9;it++)i.probe[it].set(0,0,0);let f=0,_=0,x=0,p=0,m=0,b=0,S=0,w=0,F=0,I=0,P=0;c.sort(lw);for(let it=0,y=c.length;it<y;it++){const E=c[it],j=E.color,H=E.intensity,Z=E.distance,lt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=j.r*H,u+=j.g*H,d+=j.b*H;else if(E.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(E.sh.coefficients[W],H);P++}else if(E.isDirectionalLight){const W=t.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const tt=E.shadow,V=e.get(E);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=lt,i.directionalShadowMatrix[f]=E.shadow.matrix,b++}i.directional[f]=W,f++}else if(E.isSpotLight){const W=t.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(j).multiplyScalar(H),W.distance=Z,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,i.spot[x]=W;const tt=E.shadow;if(E.map&&(i.spotLightMap[F]=E.map,F++,tt.updateMatrices(E),E.castShadow&&I++),i.spotLightMatrix[x]=tt.matrix,E.castShadow){const V=e.get(E);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=lt,w++}x++}else if(E.isRectAreaLight){const W=t.get(E);W.color.copy(j).multiplyScalar(H),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=W,p++}else if(E.isPointLight){const W=t.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){const tt=E.shadow,V=e.get(E);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=lt,i.pointShadowMatrix[_]=E.shadow.matrix,S++}i.point[_]=W,_++}else if(E.isHemisphereLight){const W=t.get(E);W.skyColor.copy(E.color).multiplyScalar(H),W.groundColor.copy(E.groundColor).multiplyScalar(H),i.hemi[m]=W,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Bt.LTC_FLOAT_1,i.rectAreaLTC2=Bt.LTC_FLOAT_2):(i.rectAreaLTC1=Bt.LTC_HALF_1,i.rectAreaLTC2=Bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==f||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==p||O.hemiLength!==m||O.numDirectionalShadows!==b||O.numPointShadows!==S||O.numSpotShadows!==w||O.numSpotMaps!==F||O.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+F-I,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,O.directionalLength=f,O.pointLength=_,O.spotLength=x,O.rectAreaLength=p,O.hemiLength=m,O.numDirectionalShadows=b,O.numPointShadows=S,O.numSpotShadows=w,O.numSpotMaps=F,O.numLightProbes=P,i.version=aw++)}function l(c,h){let u=0,d=0,f=0,_=0,x=0;const p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const S=c[m];if(S.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(S.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Ed(n){const t=new cw(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function uw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ed(n),t.set(s,[a])):r>=o.length?(a=new Ed(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class hw extends yo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dw extends yo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pw=`uniform sampler2D shadow_pass;
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
}`;function mw(n,t,e){let i=new Eu;const s=new zt,r=new zt,o=new Ae,a=new hw({depthPacking:X_}),l=new dw,c={},h=e.maxTextureSize,u={[as]:yn,[yn]:as,[ce]:ce},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:fw,fragmentShader:pw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new R(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let m=this.type;this.render=function(I,P,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const it=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),j=n.state;j.setBlending(ss),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const H=m!==Li&&this.type===Li,Z=m===Li&&this.type!==Li;for(let lt=0,W=I.length;lt<W;lt++){const tt=I[lt],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const gt=V.getFrameExtents();if(s.multiply(gt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,V.mapSize.y=r.y)),V.map===null||H===!0||Z===!0){const _t=this.type!==Li?{minFilter:Fn,magFilter:Fn}:{};V.map!==null&&V.map.dispose(),V.map=new Ls(s.x,s.y,_t),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const St=V.getViewportCount();for(let _t=0;_t<St;_t++){const It=V.getViewport(_t);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),j.viewport(o),V.updateMatrices(tt,_t),i=V.getFrustum(),w(P,O,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Li&&b(V,O),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(it,y,E)};function b(I,P){const O=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ls(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,O,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,O,f,x,null)}function S(I,P,O,it){let y=null;const E=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)y=E;else if(y=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const j=y.uuid,H=P.uuid;let Z=c[j];Z===void 0&&(Z={},c[j]=Z);let lt=Z[H];lt===void 0&&(lt=y.clone(),Z[H]=lt,P.addEventListener("dispose",F)),y=lt}if(y.visible=P.visible,y.wireframe=P.wireframe,it===Li?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=n.properties.get(y);j.light=O}return y}function w(I,P,O,it,y){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===Li)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const H=t.update(I),Z=I.material;if(Array.isArray(Z)){const lt=H.groups;for(let W=0,tt=lt.length;W<tt;W++){const V=lt[W],gt=Z[V.materialIndex];if(gt&&gt.visible){const St=S(I,gt,it,y);I.onBeforeShadow(n,I,P,O,H,St,V),n.renderBufferDirect(O,null,H,St,I,V),I.onAfterShadow(n,I,P,O,H,St,V)}}}else if(Z.visible){const lt=S(I,Z,it,y);I.onBeforeShadow(n,I,P,O,H,lt,null),n.renderBufferDirect(O,null,H,lt,I,null),I.onAfterShadow(n,I,P,O,H,lt,null)}}const j=I.children;for(let H=0,Z=j.length;H<Z;H++)w(j[H],P,O,it,y)}function F(I){I.target.removeEventListener("dispose",F);for(const O in c){const it=c[O],y=I.target.uuid;y in it&&(it[y].dispose(),delete it[y])}}}const gw={[sc]:rc,[oc]:cc,[ac]:uc,[xr]:lc,[rc]:sc,[cc]:oc,[uc]:ac,[lc]:xr};function _w(n){function t(){let B=!1;const mt=new Ae;let nt=null;const J=new Ae(0,0,0,0);return{setMask:function(yt){nt!==yt&&!B&&(n.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){B=yt},setClear:function(yt,vt,Nt,Yt,Jt){Jt===!0&&(yt*=Yt,vt*=Yt,Nt*=Yt),mt.set(yt,vt,Nt,Yt),J.equals(mt)===!1&&(n.clearColor(yt,vt,Nt,Yt),J.copy(mt))},reset:function(){B=!1,nt=null,J.set(-1,0,0,0)}}}function e(){let B=!1,mt=!1,nt=null,J=null,yt=null;return{setReversed:function(vt){mt=vt},setTest:function(vt){vt?xt(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(vt){nt!==vt&&!B&&(n.depthMask(vt),nt=vt)},setFunc:function(vt){if(mt&&(vt=gw[vt]),J!==vt){switch(vt){case sc:n.depthFunc(n.NEVER);break;case rc:n.depthFunc(n.ALWAYS);break;case oc:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case ac:n.depthFunc(n.EQUAL);break;case lc:n.depthFunc(n.GEQUAL);break;case cc:n.depthFunc(n.GREATER);break;case uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=vt}},setLocked:function(vt){B=vt},setClear:function(vt){yt!==vt&&(n.clearDepth(vt),yt=vt)},reset:function(){B=!1,nt=null,J=null,yt=null}}}function i(){let B=!1,mt=null,nt=null,J=null,yt=null,vt=null,Nt=null,Yt=null,Jt=null;return{setTest:function(Kt){B||(Kt?xt(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(Kt){mt!==Kt&&!B&&(n.stencilMask(Kt),mt=Kt)},setFunc:function(Kt,Qt,ne){(nt!==Kt||J!==Qt||yt!==ne)&&(n.stencilFunc(Kt,Qt,ne),nt=Kt,J=Qt,yt=ne)},setOp:function(Kt,Qt,ne){(vt!==Kt||Nt!==Qt||Yt!==ne)&&(n.stencilOp(Kt,Qt,ne),vt=Kt,Nt=Qt,Yt=ne)},setLocked:function(Kt){B=Kt},setClear:function(Kt){Jt!==Kt&&(n.clearStencil(Kt),Jt=Kt)},reset:function(){B=!1,mt=null,nt=null,J=null,yt=null,vt=null,Nt=null,Yt=null,Jt=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,b=null,S=null,w=null,F=null,I=new fe(0,0,0),P=0,O=!1,it=null,y=null,E=null,j=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,W=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(tt)[1]),lt=W>=1):tt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),lt=W>=2);let V=null,gt={};const St=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),It=new Ae().fromArray(St),Gt=new Ae().fromArray(_t);function ot(B,mt,nt,J){const yt=new Uint8Array(4),vt=n.createTexture();n.bindTexture(B,vt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<nt;Nt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(mt+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return vt}const dt={};dt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),xt(n.DEPTH_TEST),r.setFunc(xr),L(!1),U(Ih),xt(n.CULL_FACE),g(ss);function xt(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function N(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function Q(B,mt){return h[B]!==mt?(n.bindFramebuffer(B,mt),h[B]=mt,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=mt),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function at(B,mt){let nt=d,J=!1;if(B){nt=u.get(mt),nt===void 0&&(nt=[],u.set(mt,nt));const yt=B.textures;if(nt.length!==yt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Nt=yt.length;vt<Nt;vt++)nt[vt]=n.COLOR_ATTACHMENT0+vt;nt.length=yt.length,J=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,J=!0);J&&n.drawBuffers(nt)}function ht(B){return f!==B?(n.useProgram(B),f=B,!0):!1}const bt={[Es]:n.FUNC_ADD,[__]:n.FUNC_SUBTRACT,[v_]:n.FUNC_REVERSE_SUBTRACT};bt[x_]=n.MIN,bt[y_]=n.MAX;const et={[M_]:n.ZERO,[S_]:n.ONE,[w_]:n.SRC_COLOR,[nc]:n.SRC_ALPHA,[P_]:n.SRC_ALPHA_SATURATE,[A_]:n.DST_COLOR,[b_]:n.DST_ALPHA,[E_]:n.ONE_MINUS_SRC_COLOR,[ic]:n.ONE_MINUS_SRC_ALPHA,[R_]:n.ONE_MINUS_DST_COLOR,[T_]:n.ONE_MINUS_DST_ALPHA,[C_]:n.CONSTANT_COLOR,[I_]:n.ONE_MINUS_CONSTANT_COLOR,[L_]:n.CONSTANT_ALPHA,[D_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,mt,nt,J,yt,vt,Nt,Yt,Jt,Kt){if(B===ss){_===!0&&(N(n.BLEND),_=!1);return}if(_===!1&&(xt(n.BLEND),_=!0),B!==g_){if(B!==x||Kt!==O){if((p!==Es||S!==Es)&&(n.blendEquation(n.FUNC_ADD),p=Es,S=Es),Kt)switch(B){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFunc(n.ONE,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,b=null,w=null,F=null,I.set(0,0,0),P=0,x=B,O=Kt}return}yt=yt||mt,vt=vt||nt,Nt=Nt||J,(mt!==p||yt!==S)&&(n.blendEquationSeparate(bt[mt],bt[yt]),p=mt,S=yt),(nt!==m||J!==b||vt!==w||Nt!==F)&&(n.blendFuncSeparate(et[nt],et[J],et[vt],et[Nt]),m=nt,b=J,w=vt,F=Nt),(Yt.equals(I)===!1||Jt!==P)&&(n.blendColor(Yt.r,Yt.g,Yt.b,Jt),I.copy(Yt),P=Jt),x=B,O=!1}function T(B,mt){B.side===ce?N(n.CULL_FACE):xt(n.CULL_FACE);let nt=B.side===yn;mt&&(nt=!nt),L(nt),B.blending===dr&&B.transparent===!1?g(ss):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const J=B.stencilWrite;o.setTest(J),J&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),X(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?xt(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){it!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),it=B)}function U(B){B!==f_?(xt(n.CULL_FACE),B!==y&&(B===Ih?n.cullFace(n.BACK):B===p_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),y=B}function D(B){B!==E&&(lt&&n.lineWidth(B),E=B)}function X(B,mt,nt){B?(xt(n.POLYGON_OFFSET_FILL),(j!==mt||H!==nt)&&(n.polygonOffset(mt,nt),j=mt,H=nt)):N(n.POLYGON_OFFSET_FILL)}function q(B){B?xt(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function M(B){B===void 0&&(B=n.TEXTURE0+Z-1),V!==B&&(n.activeTexture(B),V=B)}function v(B,mt,nt){nt===void 0&&(V===null?nt=n.TEXTURE0+Z-1:nt=V);let J=gt[nt];J===void 0&&(J={type:void 0,texture:void 0},gt[nt]=J),(J.type!==B||J.texture!==mt)&&(V!==nt&&(n.activeTexture(nt),V=nt),n.bindTexture(B,mt||dt[B]),J.type=B,J.texture=mt)}function C(){const B=gt[V];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(B){It.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),It.copy(B))}function Rt(B){Gt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Gt.copy(B))}function Xt(B,mt){let nt=l.get(mt);nt===void 0&&(nt=new WeakMap,l.set(mt,nt));let J=nt.get(B);J===void 0&&(J=n.getUniformBlockIndex(mt,B.name),nt.set(B,J))}function Ut(B,mt){const J=l.get(mt).get(B);a.get(mt)!==J&&(n.uniformBlockBinding(mt,J,B.__bindingPointIndex),a.set(mt,J))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,gt={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,b=null,S=null,w=null,F=null,I=new fe(0,0,0),P=0,O=!1,it=null,y=null,E=null,j=null,H=null,It.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:xt,disable:N,bindFramebuffer:Q,drawBuffers:at,useProgram:ht,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:U,setLineWidth:D,setPolygonOffset:X,setScissorTest:q,activeTexture:M,bindTexture:v,unbindTexture:C,compressedTexImage2D:k,compressedTexImage3D:z,texImage2D:Mt,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:Ut,texStorage2D:Tt,texStorage3D:ft,texSubImage2D:G,texSubImage3D:ct,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:Dt,viewport:Rt,reset:Vt}}function bd(n,t,e,i){const s=vw(i);switch(e){case tp:return n*t;case np:return n*t;case ip:return n*t*2;case sp:return n*t/s.components*s.byteLength;case vu:return n*t/s.components*s.byteLength;case rp:return n*t*2/s.components*s.byteLength;case xu:return n*t*2/s.components*s.byteLength;case ep:return n*t*3/s.components*s.byteLength;case jn:return n*t*4/s.components*s.byteLength;case yu:return n*t*4/s.components*s.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pc:case gc:return Math.max(n,16)*Math.max(t,8)/4;case fc:case mc:return Math.max(n,8)*Math.max(t,8)/2;case _c:case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case da:case Uc:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case op:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oc:case Bc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vw(n){switch(n){case zi:case Zf:return{byteLength:1,components:1};case lo:case Jf:case _o:return{byteLength:2,components:1};case gu:case _u:return{byteLength:2,components:4};case Is:case mu:case Ni:return{byteLength:4,components:1};case Qf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,v){return f?new OffscreenCanvas(M,v):uo("canvas")}function x(M,v,C){let k=1;const z=q(M);if((z.width>C||z.height>C)&&(k=C/Math.max(z.width,z.height)),k<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const G=Math.floor(k*z.width),ct=Math.floor(k*z.height);u===void 0&&(u=_(G,ct));const ut=v?_(G,ct):u;return ut.width=G,ut.height=ct,ut.getContext("2d").drawImage(M,0,0,G,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+G+"x"+ct+")."),ut}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),M;return M}function p(M){return M.generateMipmaps&&M.minFilter!==Fn&&M.minFilter!==$n}function m(M){n.generateMipmap(M)}function b(M,v,C,k,z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=v;if(v===n.RED&&(C===n.FLOAT&&(G=n.R32F),C===n.HALF_FLOAT&&(G=n.R16F),C===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.R8UI),C===n.UNSIGNED_SHORT&&(G=n.R16UI),C===n.UNSIGNED_INT&&(G=n.R32UI),C===n.BYTE&&(G=n.R8I),C===n.SHORT&&(G=n.R16I),C===n.INT&&(G=n.R32I)),v===n.RG&&(C===n.FLOAT&&(G=n.RG32F),C===n.HALF_FLOAT&&(G=n.RG16F),C===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RG8UI),C===n.UNSIGNED_SHORT&&(G=n.RG16UI),C===n.UNSIGNED_INT&&(G=n.RG32UI),C===n.BYTE&&(G=n.RG8I),C===n.SHORT&&(G=n.RG16I),C===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGB8UI),C===n.UNSIGNED_SHORT&&(G=n.RGB16UI),C===n.UNSIGNED_INT&&(G=n.RGB32UI),C===n.BYTE&&(G=n.RGB8I),C===n.SHORT&&(G=n.RGB16I),C===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),C===n.UNSIGNED_INT&&(G=n.RGBA32UI),C===n.BYTE&&(G=n.RGBA8I),C===n.SHORT&&(G=n.RGBA16I),C===n.INT&&(G=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){const ct=z?Ma:Se.getTransfer(k);C===n.FLOAT&&(G=n.RGBA32F),C===n.HALF_FLOAT&&(G=n.RGBA16F),C===n.UNSIGNED_BYTE&&(G=ct===Le?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function S(M,v){let C;return M?v===null||v===Is||v===Sr?C=n.DEPTH24_STENCIL8:v===Ni?C=n.DEPTH32F_STENCIL8:v===lo&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Is||v===Sr?C=n.DEPTH_COMPONENT24:v===Ni?C=n.DEPTH_COMPONENT32F:v===lo&&(C=n.DEPTH_COMPONENT16),C}function w(M,v){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Fn&&M.minFilter!==$n?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function F(M){const v=M.target;v.removeEventListener("dispose",F),P(v),v.isVideoTexture&&h.delete(v)}function I(M){const v=M.target;v.removeEventListener("dispose",I),it(v)}function P(M){const v=i.get(M);if(v.__webglInit===void 0)return;const C=M.source,k=d.get(C);if(k){const z=k[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&O(M),Object.keys(k).length===0&&d.delete(C)}i.remove(M)}function O(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const C=M.source,k=d.get(C);delete k[v.__cacheKey],o.memory.textures--}function it(M){const v=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let z=0;z<v.__webglFramebuffer[k].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[k][z]);else n.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)n.deleteFramebuffer(v.__webglFramebuffer[k]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=M.textures;for(let k=0,z=C.length;k<z;k++){const G=i.get(C[k]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(C[k])}i.remove(M)}let y=0;function E(){y=0}function j(){const M=y;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),y+=1,M}function H(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Z(M,v){const C=i.get(M);if(M.isVideoTexture&&D(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const k=M.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(C,M,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function lt(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Gt(C,M,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function W(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Gt(C,M,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function tt(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){ot(C,M,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const V={[Ge]:n.REPEAT,[Ts]:n.CLAMP_TO_EDGE,[dc]:n.MIRRORED_REPEAT},gt={[Fn]:n.NEAREST,[V_]:n.NEAREST_MIPMAP_NEAREST,[Po]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[ll]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},St={[Y_]:n.NEVER,[Q_]:n.ALWAYS,[$_]:n.LESS,[lp]:n.LEQUAL,[K_]:n.EQUAL,[J_]:n.GEQUAL,[j_]:n.GREATER,[Z_]:n.NOTEQUAL};function _t(M,v){if(v.type===Ni&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===$n||v.magFilter===ll||v.magFilter===Po||v.magFilter===As||v.minFilter===$n||v.minFilter===ll||v.minFilter===Po||v.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,V[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,V[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,V[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,gt[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Fn||v.minFilter!==Po&&v.minFilter!==As||v.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function It(M,v){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",F));const k=v.source;let z=d.get(k);z===void 0&&(z={},d.set(k,z));const G=H(v);if(G!==M.__cacheKey){z[G]===void 0&&(z[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),z[G].usedTimes++;const ct=z[M.__cacheKey];ct!==void 0&&(z[M.__cacheKey].usedTimes--,ct.usedTimes===0&&O(v)),M.__cacheKey=G,M.__webglTexture=z[G].texture}return C}function Gt(M,v,C){let k=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=n.TEXTURE_3D);const z=It(M,v),G=v.source;e.bindTexture(k,M.__webglTexture,n.TEXTURE0+C);const ct=i.get(G);if(G.version!==ct.__version||z===!0){e.activeTexture(n.TEXTURE0+C);const ut=Se.getPrimaries(Se.workingColorSpace),pt=v.colorSpace===is?null:Se.getPrimaries(v.colorSpace),Tt=v.colorSpace===is||ut===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ft=x(v.image,!1,s.maxTextureSize);ft=X(v,ft);const Mt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type);let Dt=b(v.internalFormat,Mt,Pt,v.colorSpace,v.isVideoTexture);_t(k,v);let Rt;const Xt=v.mipmaps,Ut=v.isVideoTexture!==!0,Vt=ct.__version===void 0||z===!0,B=G.dataReady,mt=w(v,ft);if(v.isDepthTexture)Dt=S(v.format===wr,v.type),Vt&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Dt,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Mt,Pt,null));else if(v.isDataTexture)if(Xt.length>0){Ut&&Vt&&e.texStorage2D(n.TEXTURE_2D,mt,Dt,Xt[0].width,Xt[0].height);for(let nt=0,J=Xt.length;nt<J;nt++)Rt=Xt[nt],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Mt,Pt,Rt.data):e.texImage2D(n.TEXTURE_2D,nt,Dt,Rt.width,Rt.height,0,Mt,Pt,Rt.data);v.generateMipmaps=!1}else Ut?(Vt&&e.texStorage2D(n.TEXTURE_2D,mt,Dt,ft.width,ft.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,Mt,Pt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Mt,Pt,ft.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Dt,Xt[0].width,Xt[0].height,ft.depth);for(let nt=0,J=Xt.length;nt<J;nt++)if(Rt=Xt[nt],v.format!==jn)if(Mt!==null)if(Ut){if(B)if(v.layerUpdates.size>0){const yt=bd(Rt.width,Rt.height,v.format,v.type);for(const vt of v.layerUpdates){const Nt=Rt.data.subarray(vt*yt/Rt.data.BYTES_PER_ELEMENT,(vt+1)*yt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,vt,Rt.width,Rt.height,1,Mt,Nt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,ft.depth,Mt,Rt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Dt,Rt.width,Rt.height,ft.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,ft.depth,Mt,Pt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Dt,Rt.width,Rt.height,ft.depth,0,Mt,Pt,Rt.data)}else{Ut&&Vt&&e.texStorage2D(n.TEXTURE_2D,mt,Dt,Xt[0].width,Xt[0].height);for(let nt=0,J=Xt.length;nt<J;nt++)Rt=Xt[nt],v.format!==jn?Mt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Mt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Dt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Mt,Pt,Rt.data):e.texImage2D(n.TEXTURE_2D,nt,Dt,Rt.width,Rt.height,0,Mt,Pt,Rt.data)}else if(v.isDataArrayTexture)if(Ut){if(Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Dt,ft.width,ft.height,ft.depth),B)if(v.layerUpdates.size>0){const nt=bd(ft.width,ft.height,v.format,v.type);for(const J of v.layerUpdates){const yt=ft.data.subarray(J*nt/ft.data.BYTES_PER_ELEMENT,(J+1)*nt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ft.width,ft.height,1,Mt,Pt,yt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Mt,Pt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,ft.width,ft.height,ft.depth,0,Mt,Pt,ft.data);else if(v.isData3DTexture)Ut?(Vt&&e.texStorage3D(n.TEXTURE_3D,mt,Dt,ft.width,ft.height,ft.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Mt,Pt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,ft.width,ft.height,ft.depth,0,Mt,Pt,ft.data);else if(v.isFramebufferTexture){if(Vt)if(Ut)e.texStorage2D(n.TEXTURE_2D,mt,Dt,ft.width,ft.height);else{let nt=ft.width,J=ft.height;for(let yt=0;yt<mt;yt++)e.texImage2D(n.TEXTURE_2D,yt,Dt,nt,J,0,Mt,Pt,null),nt>>=1,J>>=1}}else if(Xt.length>0){if(Ut&&Vt){const nt=q(Xt[0]);e.texStorage2D(n.TEXTURE_2D,mt,Dt,nt.width,nt.height)}for(let nt=0,J=Xt.length;nt<J;nt++)Rt=Xt[nt],Ut?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Mt,Pt,Rt):e.texImage2D(n.TEXTURE_2D,nt,Dt,Mt,Pt,Rt);v.generateMipmaps=!1}else if(Ut){if(Vt){const nt=q(ft);e.texStorage2D(n.TEXTURE_2D,mt,Dt,nt.width,nt.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Pt,ft)}else e.texImage2D(n.TEXTURE_2D,0,Dt,Mt,Pt,ft);p(v)&&m(k),ct.__version=G.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ot(M,v,C){if(v.image.length!==6)return;const k=It(M,v),z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const G=i.get(z);if(z.version!==G.__version||k===!0){e.activeTexture(n.TEXTURE0+C);const ct=Se.getPrimaries(Se.workingColorSpace),ut=v.colorSpace===is?null:Se.getPrimaries(v.colorSpace),pt=v.colorSpace===is||ct===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,ft=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let J=0;J<6;J++)!Tt&&!ft?Mt[J]=x(v.image[J],!0,s.maxCubemapSize):Mt[J]=ft?v.image[J].image:v.image[J],Mt[J]=X(v,Mt[J]);const Pt=Mt[0],Dt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type),Xt=b(v.internalFormat,Dt,Rt,v.colorSpace),Ut=v.isVideoTexture!==!0,Vt=G.__version===void 0||k===!0,B=z.dataReady;let mt=w(v,Pt);_t(n.TEXTURE_CUBE_MAP,v);let nt;if(Tt){Ut&&Vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Xt,Pt.width,Pt.height);for(let J=0;J<6;J++){nt=Mt[J].mipmaps;for(let yt=0;yt<nt.length;yt++){const vt=nt[yt];v.format!==jn?Dt!==null?Ut?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,vt.width,vt.height,Dt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,Xt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,vt.width,vt.height,Dt,Rt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,Xt,vt.width,vt.height,0,Dt,Rt,vt.data)}}}else{if(nt=v.mipmaps,Ut&&Vt){nt.length>0&&mt++;const J=q(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(ft){Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Mt[J].width,Mt[J].height,Dt,Rt,Mt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Mt[J].width,Mt[J].height,0,Dt,Rt,Mt[J].data);for(let yt=0;yt<nt.length;yt++){const Nt=nt[yt].image[J].image;Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,Nt.width,Nt.height,Dt,Rt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,Xt,Nt.width,Nt.height,0,Dt,Rt,Nt.data)}}else{Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,Rt,Mt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Dt,Rt,Mt[J]);for(let yt=0;yt<nt.length;yt++){const vt=nt[yt];Ut?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,Dt,Rt,vt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,Xt,Dt,Rt,vt.image[J])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),G.__version=z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function dt(M,v,C,k,z,G){const ct=r.convert(C.format,C.colorSpace),ut=r.convert(C.type),pt=b(C.internalFormat,ct,ut,C.colorSpace);if(!i.get(v).__hasExternalTextures){const ft=Math.max(1,v.width>>G),Mt=Math.max(1,v.height>>G);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,G,pt,ft,Mt,v.depth,0,ct,ut,null):e.texImage2D(z,G,pt,ft,Mt,0,ct,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,z,i.get(C).__webglTexture,0,L(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,z,i.get(C).__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(M,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const k=v.depthTexture,z=k&&k.isDepthTexture?k.type:null,G=S(v.stencilBuffer,z),ct=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=L(v);U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,G,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,M)}else{const k=v.textures;for(let z=0;z<k.length;z++){const G=k[z],ct=r.convert(G.format,G.colorSpace),ut=r.convert(G.type),pt=b(G.internalFormat,ct,ut,G.colorSpace),Tt=L(v);C&&U(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,pt,v.width,v.height):U(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const k=i.get(v.depthTexture).__webglTexture,z=L(v);if(v.depthTexture.format===fr)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(v.depthTexture.format===wr)U(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Q(M){const v=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const k=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",z)};k.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=k}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");N(v.__webglFramebuffer,M)}else if(C){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=n.createRenderbuffer(),xt(v.__webglDepthbuffer[k],M,!1);else{const z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,G)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),xt(v.__webglDepthbuffer,M,!1);else{const k=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(M,v,C){const k=i.get(M);v!==void 0&&dt(k.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Q(M)}function ht(M){const v=M.texture,C=i.get(M),k=i.get(v);M.addEventListener("dispose",I);const z=M.textures,G=M.isWebGLCubeRenderTarget===!0,ct=z.length>1;if(ct||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=v.version,o.memory.textures++),G){C.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ut]=[];for(let pt=0;pt<v.mipmaps.length;pt++)C.__webglFramebuffer[ut][pt]=n.createFramebuffer()}else C.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)C.__webglFramebuffer[ut]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ct)for(let ut=0,pt=z.length;ut<pt;ut++){const Tt=i.get(z[ut]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&U(M)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ut=0;ut<z.length;ut++){const pt=z[ut];C.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ut]);const Tt=r.convert(pt.format,pt.colorSpace),ft=r.convert(pt.type),Mt=b(pt.internalFormat,Tt,ft,pt.colorSpace,M.isXRRenderTarget===!0),Pt=L(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,Mt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,C.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),xt(C.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),_t(n.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)dt(C.__webglFramebuffer[ut][pt],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else dt(C.__webglFramebuffer[ut],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let ut=0,pt=z.length;ut<pt;ut++){const Tt=z[ut],ft=i.get(Tt);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),_t(n.TEXTURE_2D,Tt),dt(C.__webglFramebuffer,M,Tt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),p(Tt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ut=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,k.__webglTexture),_t(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)dt(C.__webglFramebuffer[pt],M,v,n.COLOR_ATTACHMENT0,ut,pt);else dt(C.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ut,0);p(v)&&m(ut),e.unbindTexture()}M.depthBuffer&&Q(M)}function bt(M){const v=M.textures;for(let C=0,k=v.length;C<k;C++){const z=v[C];if(p(z)){const G=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ct=i.get(z).__webglTexture;e.bindTexture(G,ct),m(G),e.unbindTexture()}}}const et=[],g=[];function T(M){if(M.samples>0){if(U(M)===!1){const v=M.textures,C=M.width,k=M.height;let z=n.COLOR_BUFFER_BIT;const G=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(M),ut=v.length>1;if(ut)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[pt]);const Tt=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,C,k,0,0,C,k,z,n.NEAREST),l===!0&&(et.length=0,g.length=0,et.push(n.COLOR_ATTACHMENT0+pt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(et.push(G),g.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ct.__webglColorRenderbuffer[pt]);const Tt=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(M){return Math.min(s.maxSamples,M.samples)}function U(M){const v=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(M){const v=o.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function X(M,v){const C=M.colorSpace,k=M.format,z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==us&&C!==is&&(Se.getTransfer(C)===Le?(k!==jn||z!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function q(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=E,this.setTexture2D=Z,this.setTexture2DArray=lt,this.setTexture3D=W,this.setTextureCube=tt,this.rebindTextures=at,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=U}function yw(n,t){function e(i,s=is){let r;const o=Se.getTransfer(s);if(i===zi)return n.UNSIGNED_BYTE;if(i===gu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_u)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zf)return n.BYTE;if(i===Jf)return n.SHORT;if(i===lo)return n.UNSIGNED_SHORT;if(i===mu)return n.INT;if(i===Is)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===_o)return n.HALF_FLOAT;if(i===tp)return n.ALPHA;if(i===ep)return n.RGB;if(i===jn)return n.RGBA;if(i===np)return n.LUMINANCE;if(i===ip)return n.LUMINANCE_ALPHA;if(i===fr)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===sp)return n.RED;if(i===vu)return n.RED_INTEGER;if(i===rp)return n.RG;if(i===xu)return n.RG_INTEGER;if(i===yu)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===ha)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fc||i===pc||i===mc||i===gc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_c||i===vc||i===xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_c||i===vc)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yc||i===Mc||i===Sc||i===wc||i===Ec||i===bc||i===Tc||i===Ac||i===Rc||i===Pc||i===Cc||i===Ic||i===Lc||i===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ac)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===da||i===Uc||i===Nc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===da)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===op||i===Fc||i===Oc||i===Bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Mw extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sw={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ew=`
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

}`;class bw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new xn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ei({vertexShader:ww,fragmentShader:Ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tw extends Tr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const x=new bw,p=e.getContextAttributes();let m=null,b=null;const S=[],w=[],F=new zt;let I=null;const P=new Be;P.layers.enable(1),P.viewport=new Ae;const O=new Be;O.layers.enable(2),O.viewport=new Ae;const it=[P,O],y=new Mw;y.layers.enable(1),y.layers.enable(2);let E=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let dt=S[ot];return dt===void 0&&(dt=new Fl,S[ot]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(ot){let dt=S[ot];return dt===void 0&&(dt=new Fl,S[ot]=dt),dt.getGripSpace()},this.getHand=function(ot){let dt=S[ot];return dt===void 0&&(dt=new Fl,S[ot]=dt),dt.getHandSpace()};function H(ot){const dt=w.indexOf(ot.inputSource);if(dt===-1)return;const xt=S[dt];xt!==void 0&&(xt.update(ot.inputSource,ot.frame,c||o),xt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function Z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",lt);for(let ot=0;ot<S.length;ot++){const dt=w[ot];dt!==null&&(w[ot]=null,S[ot].disconnect(dt))}E=null,j=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,b=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",lt),p.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const dt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ls(f.framebufferWidth,f.framebufferHeight,{format:jn,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let dt=null,xt=null,N=null;p.depth&&(N=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=p.stencil?wr:fr,xt=p.stencil?Sr:Is);const Q={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Q),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ls(d.textureWidth,d.textureHeight,{format:jn,type:zi,depthTexture:new Mp(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function lt(ot){for(let dt=0;dt<ot.removed.length;dt++){const xt=ot.removed[dt],N=w.indexOf(xt);N>=0&&(w[N]=null,S[N].disconnect(xt))}for(let dt=0;dt<ot.added.length;dt++){const xt=ot.added[dt];let N=w.indexOf(xt);if(N===-1){for(let at=0;at<S.length;at++)if(at>=w.length){w.push(xt),N=at;break}else if(w[at]===null){w[at]=xt,N=at;break}if(N===-1)break}const Q=S[N];Q&&Q.connect(xt)}}const W=new Y,tt=new Y;function V(ot,dt,xt){W.setFromMatrixPosition(dt.matrixWorld),tt.setFromMatrixPosition(xt.matrixWorld);const N=W.distanceTo(tt),Q=dt.projectionMatrix.elements,at=xt.projectionMatrix.elements,ht=Q[14]/(Q[10]-1),bt=Q[14]/(Q[10]+1),et=(Q[9]+1)/Q[5],g=(Q[9]-1)/Q[5],T=(Q[8]-1)/Q[0],L=(at[8]+1)/at[0],U=ht*T,D=ht*L,X=N/(-T+L),q=X*-T;if(dt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(q),ot.translateZ(X),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Q[10]===-1)ot.projectionMatrix.copy(dt.projectionMatrix),ot.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const M=ht+X,v=bt+X,C=U-q,k=D+(N-q),z=et*bt/v*M,G=g*bt/v*M;ot.projectionMatrix.makePerspective(C,k,z,G,M,v),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function gt(ot,dt){dt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(dt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let dt=ot.near,xt=ot.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),y.near=O.near=P.near=dt,y.far=O.far=P.far=xt,(E!==y.near||j!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,j=y.far);const N=ot.parent,Q=y.cameras;gt(y,N);for(let at=0;at<Q.length;at++)gt(Q[at],N);Q.length===2?V(y,P,O):y.projectionMatrix.copy(P.projectionMatrix),St(ot,y,N)};function St(ot,dt,xt){xt===null?ot.matrix.copy(dt.matrixWorld):(ot.matrix.copy(xt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(dt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(dt.projectionMatrix),ot.projectionMatrixInverse.copy(dt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=co*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ot){l=ot,d!==null&&(d.fixedFoveation=ot),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ot)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _t=null;function It(ot,dt){if(h=dt.getViewerPose(c||o),_=dt,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let N=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let at=0;at<xt.length;at++){const ht=xt[at];let bt=null;if(f!==null)bt=f.getViewport(ht);else{const g=u.getViewSubImage(d,ht);bt=g.viewport,at===0&&(t.setRenderTargetTextures(b,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(b))}let et=it[at];et===void 0&&(et=new Be,et.layers.enable(at),et.viewport=new Ae,it[at]=et),et.matrix.fromArray(ht.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ht.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(bt.x,bt.y,bt.width,bt.height),at===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(et)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const at=u.getDepthInformation(xt[0]);at&&at.isValid&&at.texture&&x.init(t,at,s.renderState)}}for(let xt=0;xt<S.length;xt++){const N=w[xt],Q=S[xt];N!==null&&Q!==void 0&&Q.update(N,dt,c||o)}_t&&_t(ot,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),_=null}const Gt=new xp;Gt.setAnimationLoop(It),this.setAnimationLoop=function(ot){_t=ot},this.dispose=function(){}}}const ys=new gi,Aw=new De;function Rw(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,gp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===yn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===yn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),S=b.envMap,w=b.envMapRotation;S&&(p.envMap.value=S,ys.copy(w),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),p.envMapRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(ys)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Pw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const w=S.program;i.uniformBlockBinding(b,w)}function c(b,S){let w=s[b.id];w===void 0&&(_(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",p));const F=S.program;i.updateUBOMapping(b,F);const I=t.render.frame;r[b.id]!==I&&(d(b),r[b.id]=I)}function h(b){const S=u();b.__bindingPointIndex=S;const w=n.createBuffer(),F=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,F,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],w=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let I=0,P=w.length;I<P;I++){const O=Array.isArray(w[I])?w[I]:[w[I]];for(let it=0,y=O.length;it<y;it++){const E=O[it];if(f(E,I,it,F)===!0){const j=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let Z=0;for(let lt=0;lt<H.length;lt++){const W=H[lt],tt=x(W);typeof W=="number"||typeof W=="boolean"?(E.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,j+Z,E.__data)):W.isMatrix3?(E.__data[0]=W.elements[0],E.__data[1]=W.elements[1],E.__data[2]=W.elements[2],E.__data[3]=0,E.__data[4]=W.elements[3],E.__data[5]=W.elements[4],E.__data[6]=W.elements[5],E.__data[7]=0,E.__data[8]=W.elements[6],E.__data[9]=W.elements[7],E.__data[10]=W.elements[8],E.__data[11]=0):(W.toArray(E.__data,Z),Z+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,S,w,F){const I=b.value,P=S+"_"+w;if(F[P]===void 0)return typeof I=="number"||typeof I=="boolean"?F[P]=I:F[P]=I.clone(),!0;{const O=F[P];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return F[P]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function _(b){const S=b.uniforms;let w=0;const F=16;for(let P=0,O=S.length;P<O;P++){const it=Array.isArray(S[P])?S[P]:[S[P]];for(let y=0,E=it.length;y<E;y++){const j=it[y],H=Array.isArray(j.value)?j.value:[j.value];for(let Z=0,lt=H.length;Z<lt;Z++){const W=H[Z],tt=x(W),V=w%F,gt=V%tt.boundary,St=V+gt;w+=gt,St!==0&&F-St<tt.storage&&(w+=F-St),j.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=tt.storage}}}const I=w%F;return I>0&&(w+=F-I),b.__size=w,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class ni{constructor(t={}){const{canvas:e=gv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=rs,this.toneMappingExposure=1;const S=this;let w=!1,F=0,I=0,P=null,O=-1,it=null;const y=new Ae,E=new Ae;let j=null;const H=new fe(0);let Z=0,lt=e.width,W=e.height,tt=1,V=null,gt=null;const St=new Ae(0,0,lt,W),_t=new Ae(0,0,lt,W);let It=!1;const Gt=new Eu;let ot=!1,dt=!1;const xt=new De,N=new De,Q=new Y,at=new Ae,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function et(){return P===null?tt:1}let g=i;function T(A,$){return e.getContext(A,$)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pu}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),g===null){const $="webgl2";if(g=T($,A),g===null)throw T($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,U,D,X,q,M,v,C,k,z,G,ct,ut,pt,Tt,ft,Mt,Pt,Dt,Rt,Xt,Ut,Vt,B;function mt(){L=new NM(g),L.init(),Ut=new yw(g,L),U=new PM(g,L,t,Ut),D=new _w(g),U.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),X=new BM(g),q=new nw,M=new xw(g,L,D,q,U,Ut,X),v=new IM(S),C=new UM(S),k=new Xv(g),Vt=new AM(g,k),z=new FM(g,k,X,Vt),G=new GM(g,z,k,X),Dt=new zM(g,U,M),ft=new CM(q),ct=new ew(S,v,C,L,U,Vt,ft),ut=new Rw(S,q),pt=new sw,Tt=new uw(L),Pt=new TM(S,v,C,D,G,d,l),Mt=new mw(S,G,U),B=new Pw(g,X,U,D),Rt=new RM(g,L,X),Xt=new OM(g,L,X),X.programs=ct.programs,S.capabilities=U,S.extensions=L,S.properties=q,S.renderLists=pt,S.shadowMap=Mt,S.state=D,S.info=X}mt();const nt=new Tw(S,g);this.xr=nt,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(A){A!==void 0&&(tt=A,this.setSize(lt,W,!1))},this.getSize=function(A){return A.set(lt,W)},this.setSize=function(A,$,rt=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=A,W=$,e.width=Math.floor(A*tt),e.height=Math.floor($*tt),rt===!0&&(e.style.width=A+"px",e.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(lt*tt,W*tt).floor()},this.setDrawingBufferSize=function(A,$,rt){lt=A,W=$,tt=rt,e.width=Math.floor(A*rt),e.height=Math.floor($*rt),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(St)},this.setViewport=function(A,$,rt,st){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,$,rt,st),D.viewport(y.copy(St).multiplyScalar(tt).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,$,rt,st){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,$,rt,st),D.scissor(E.copy(_t).multiplyScalar(tt).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(A){D.setScissorTest(It=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(A=!0,$=!0,rt=!0){let st=0;if(A){let K=!1;if(P!==null){const Ct=P.texture.format;K=Ct===yu||Ct===xu||Ct===vu}if(K){const Ct=P.texture.type,Ot=Ct===zi||Ct===Is||Ct===lo||Ct===Sr||Ct===gu||Ct===_u,wt=Pt.getClearColor(),Wt=Pt.getClearAlpha(),$t=wt.r,jt=wt.g,Ht=wt.b;Ot?(f[0]=$t,f[1]=jt,f[2]=Ht,f[3]=Wt,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=$t,_[1]=jt,_[2]=Ht,_[3]=Wt,g.clearBufferiv(g.COLOR,0,_))}else st|=g.COLOR_BUFFER_BIT}$&&(st|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),rt&&(st|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),pt.dispose(),Tt.dispose(),q.dispose(),v.dispose(),C.dispose(),G.dispose(),Vt.dispose(),B.dispose(),ct.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",ve),nt.removeEventListener("sessionend",pe),ge.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=X.autoReset,$=Mt.enabled,rt=Mt.autoUpdate,st=Mt.needsUpdate,K=Mt.type;mt(),X.autoReset=A,Mt.enabled=$,Mt.autoUpdate=rt,Mt.needsUpdate=st,Mt.type=K}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nt(A){const $=A.target;$.removeEventListener("dispose",Nt),Yt($)}function Yt(A){Jt(A),q.remove(A)}function Jt(A){const $=q.get(A).programs;$!==void 0&&($.forEach(function(rt){ct.releaseProgram(rt)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,rt,st,K,Ct){$===null&&($=ht);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,wt=Ln(A,$,rt,st,K);D.setMaterial(st,Ot);let Wt=rt.index,$t=1;if(st.wireframe===!0){if(Wt=z.getWireframeAttribute(rt),Wt===void 0)return;$t=2}const jt=rt.drawRange,Ht=rt.attributes.position;let oe=jt.start*$t,de=(jt.start+jt.count)*$t;Ct!==null&&(oe=Math.max(oe,Ct.start*$t),de=Math.min(de,(Ct.start+Ct.count)*$t)),Wt!==null?(oe=Math.max(oe,0),de=Math.min(de,Wt.count)):Ht!=null&&(oe=Math.max(oe,0),de=Math.min(de,Ht.count));const xe=de-oe;if(xe<0||xe===1/0)return;Vt.setup(K,st,wt,rt,Wt);let Xe,ue=Rt;if(Wt!==null&&(Xe=k.get(Wt),ue=Xt,ue.setIndex(Xe)),K.isMesh)st.wireframe===!0?(D.setLineWidth(st.wireframeLinewidth*et()),ue.setMode(g.LINES)):ue.setMode(g.TRIANGLES);else if(K.isLine){let qt=st.linewidth;qt===void 0&&(qt=1),D.setLineWidth(qt*et()),K.isLineSegments?ue.setMode(g.LINES):K.isLineLoop?ue.setMode(g.LINE_LOOP):ue.setMode(g.LINE_STRIP)}else K.isPoints?ue.setMode(g.POINTS):K.isSprite&&ue.setMode(g.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ue.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))ue.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qt=K._multiDrawStarts,Ne=K._multiDrawCounts,At=K._multiDrawCount,ye=Wt?k.get(Wt).bytesPerElement:1,Ie=q.get(st).currentProgram.getUniforms();for(let _e=0;_e<At;_e++)Ie.setValue(g,"_gl_DrawID",_e),ue.render(qt[_e]/ye,Ne[_e])}else if(K.isInstancedMesh)ue.renderInstances(oe,xe,K.count);else if(rt.isInstancedBufferGeometry){const qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ne=Math.min(rt.instanceCount,qt);ue.renderInstances(oe,xe,Ne)}else ue.render(oe,xe)};function Kt(A,$,rt){A.transparent===!0&&A.side===ce&&A.forceSinglePass===!1?(A.side=yn,A.needsUpdate=!0,We(A,$,rt),A.side=as,A.needsUpdate=!0,We(A,$,rt),A.side=ce):We(A,$,rt)}this.compile=function(A,$,rt=null){rt===null&&(rt=A),p=Tt.get(rt),p.init($),b.push(p),rt.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),A!==rt&&A.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();const st=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ct=K.material;if(Ct)if(Array.isArray(Ct))for(let Ot=0;Ot<Ct.length;Ot++){const wt=Ct[Ot];Kt(wt,rt,K),st.add(wt)}else Kt(Ct,rt,K),st.add(Ct)}),b.pop(),p=null,st},this.compileAsync=function(A,$,rt=null){const st=this.compile(A,$,rt);return new Promise(K=>{function Ct(){if(st.forEach(function(Ot){q.get(Ot).currentProgram.isReady()&&st.delete(Ot)}),st.size===0){K(A);return}setTimeout(Ct,10)}L.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Qt=null;function ne(A){Qt&&Qt(A)}function ve(){ge.stop()}function pe(){ge.start()}const ge=new xp;ge.setAnimationLoop(ne),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(A){Qt=A,nt.setAnimationLoop(A),A===null?ge.stop():ge.start()},nt.addEventListener("sessionstart",ve),nt.addEventListener("sessionend",pe),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera($),$=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,$,P),p=Tt.get(A,b.length),p.init($),b.push(p),N.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Gt.setFromProjectionMatrix(N),dt=this.localClippingEnabled,ot=ft.init(this.clippingPlanes,dt),x=pt.get(A,m.length),x.init(),m.push(x),nt.enabled===!0&&nt.isPresenting===!0){const Ct=S.xr.getDepthSensingMesh();Ct!==null&&Ce(Ct,$,-1/0,S.sortObjects)}Ce(A,$,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(V,gt),bt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,bt&&Pt.addToRenderList(x,A),this.info.render.frame++,ot===!0&&ft.beginShadows();const rt=p.state.shadowsArray;Mt.render(rt,A,$),ot===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=x.opaque,K=x.transmissive;if(p.setupLights(),$.isArrayCamera){const Ct=$.cameras;if(K.length>0)for(let Ot=0,wt=Ct.length;Ot<wt;Ot++){const Wt=Ct[Ot];Ue(st,K,A,Wt)}bt&&Pt.render(A);for(let Ot=0,wt=Ct.length;Ot<wt;Ot++){const Wt=Ct[Ot];he(x,A,Wt,Wt.viewport)}}else K.length>0&&Ue(st,K,A,$),bt&&Pt.render(A),he(x,A,$);P!==null&&(M.updateMultisampleRenderTarget(P),M.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(S,A,$),Vt.resetDefaultState(),O=-1,it=null,b.pop(),b.length>0?(p=b[b.length-1],ot===!0&&ft.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Ce(A,$,rt,st){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Gt.intersectsSprite(A)){st&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Ot=G.update(A),wt=A.material;wt.visible&&x.push(A,Ot,wt,rt,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Gt.intersectsObject(A))){const Ot=G.update(A),wt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),at.copy(Ot.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(wt)){const Wt=Ot.groups;for(let $t=0,jt=Wt.length;$t<jt;$t++){const Ht=Wt[$t],oe=wt[Ht.materialIndex];oe&&oe.visible&&x.push(A,Ot,oe,rt,at.z,Ht)}}else wt.visible&&x.push(A,Ot,wt,rt,at.z,null)}}const Ct=A.children;for(let Ot=0,wt=Ct.length;Ot<wt;Ot++)Ce(Ct[Ot],$,rt,st)}function he(A,$,rt,st){const K=A.opaque,Ct=A.transmissive,Ot=A.transparent;p.setupLightsView(rt),ot===!0&&ft.setGlobalState(S.clippingPlanes,rt),st&&D.viewport(y.copy(st)),K.length>0&&Ee(K,$,rt),Ct.length>0&&Ee(Ct,$,rt),Ot.length>0&&Ee(Ot,$,rt),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Ue(A,$,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[st.id]===void 0&&(p.state.transmissionRenderTarget[st.id]=new Ls(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?_o:zi,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const Ct=p.state.transmissionRenderTarget[st.id],Ot=st.viewport||y;Ct.setSize(Ot.z,Ot.w);const wt=S.getRenderTarget();S.setRenderTarget(Ct),S.getClearColor(H),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),bt&&Pt.render(rt);const Wt=S.toneMapping;S.toneMapping=rs;const $t=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),p.setupLightsView(st),ot===!0&&ft.setGlobalState(S.clippingPlanes,st),Ee(A,rt,st),M.updateMultisampleRenderTarget(Ct),M.updateRenderTargetMipmap(Ct),L.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ht=0,oe=$.length;Ht<oe;Ht++){const de=$[Ht],xe=de.object,Xe=de.geometry,ue=de.material,qt=de.group;if(ue.side===ce&&xe.layers.test(st.layers)){const Ne=ue.side;ue.side=yn,ue.needsUpdate=!0,Ve(xe,rt,st,Xe,ue,qt),ue.side=Ne,ue.needsUpdate=!0,jt=!0}}jt===!0&&(M.updateMultisampleRenderTarget(Ct),M.updateRenderTargetMipmap(Ct))}S.setRenderTarget(wt),S.setClearColor(H,Z),$t!==void 0&&(st.viewport=$t),S.toneMapping=Wt}function Ee(A,$,rt){const st=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Ct=A.length;K<Ct;K++){const Ot=A[K],wt=Ot.object,Wt=Ot.geometry,$t=st===null?Ot.material:st,jt=Ot.group;wt.layers.test(rt.layers)&&Ve(wt,$,rt,Wt,$t,jt)}}function Ve(A,$,rt,st,K,Ct){A.onBeforeRender(S,$,rt,st,K,Ct),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(S,$,rt,st,A,Ct),K.transparent===!0&&K.side===ce&&K.forceSinglePass===!1?(K.side=yn,K.needsUpdate=!0,S.renderBufferDirect(rt,$,st,K,A,Ct),K.side=as,K.needsUpdate=!0,S.renderBufferDirect(rt,$,st,K,A,Ct),K.side=ce):S.renderBufferDirect(rt,$,st,K,A,Ct),A.onAfterRender(S,$,rt,st,K,Ct)}function We(A,$,rt){$.isScene!==!0&&($=ht);const st=q.get(A),K=p.state.lights,Ct=p.state.shadowsArray,Ot=K.state.version,wt=ct.getParameters(A,K.state,Ct,$,rt),Wt=ct.getProgramCacheKey(wt);let $t=st.programs;st.environment=A.isMeshStandardMaterial?$.environment:null,st.fog=$.fog,st.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Nt),$t=new Map,st.programs=$t);let jt=$t.get(Wt);if(jt!==void 0){if(st.currentProgram===jt&&st.lightsStateVersion===Ot)return Mi(A,wt),jt}else wt.uniforms=ct.getUniforms(A),A.onBeforeCompile(wt,S),jt=ct.acquireProgram(wt,Wt),$t.set(Wt,jt),st.uniforms=wt.uniforms;const Ht=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=ft.uniform),Mi(A,wt),st.needsLights=hs(A),st.lightsStateVersion=Ot,st.needsLights&&(Ht.ambientLightColor.value=K.state.ambient,Ht.lightProbe.value=K.state.probe,Ht.directionalLights.value=K.state.directional,Ht.directionalLightShadows.value=K.state.directionalShadow,Ht.spotLights.value=K.state.spot,Ht.spotLightShadows.value=K.state.spotShadow,Ht.rectAreaLights.value=K.state.rectArea,Ht.ltc_1.value=K.state.rectAreaLTC1,Ht.ltc_2.value=K.state.rectAreaLTC2,Ht.pointLights.value=K.state.point,Ht.pointLightShadows.value=K.state.pointShadow,Ht.hemisphereLights.value=K.state.hemi,Ht.directionalShadowMap.value=K.state.directionalShadowMap,Ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ht.spotShadowMap.value=K.state.spotShadowMap,Ht.spotLightMatrix.value=K.state.spotLightMatrix,Ht.spotLightMap.value=K.state.spotLightMap,Ht.pointShadowMap.value=K.state.pointShadowMap,Ht.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=jt,st.uniformsList=null,jt}function In(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=pa.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function Mi(A,$){const rt=q.get(A);rt.outputColorSpace=$.outputColorSpace,rt.batching=$.batching,rt.batchingColor=$.batchingColor,rt.instancing=$.instancing,rt.instancingColor=$.instancingColor,rt.instancingMorph=$.instancingMorph,rt.skinning=$.skinning,rt.morphTargets=$.morphTargets,rt.morphNormals=$.morphNormals,rt.morphColors=$.morphColors,rt.morphTargetsCount=$.morphTargetsCount,rt.numClippingPlanes=$.numClippingPlanes,rt.numIntersection=$.numClipIntersection,rt.vertexAlphas=$.vertexAlphas,rt.vertexTangents=$.vertexTangents,rt.toneMapping=$.toneMapping}function Ln(A,$,rt,st,K){$.isScene!==!0&&($=ht),M.resetTextureUnits();const Ct=$.fog,Ot=st.isMeshStandardMaterial?$.environment:null,wt=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:us,Wt=(st.isMeshStandardMaterial?C:v).get(st.envMap||Ot),$t=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,jt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Ht=!!rt.morphAttributes.position,oe=!!rt.morphAttributes.normal,de=!!rt.morphAttributes.color;let xe=rs;st.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=S.toneMapping);const Xe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ue=Xe!==void 0?Xe.length:0,qt=q.get(st),Ne=p.state.lights;if(ot===!0&&(dt===!0||A!==it)){const Oe=A===it&&st.id===O;ft.setState(st,A,Oe)}let At=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ne.state.version||qt.outputColorSpace!==wt||K.isBatchedMesh&&qt.batching===!1||!K.isBatchedMesh&&qt.batching===!0||K.isBatchedMesh&&qt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qt.instancing===!1||!K.isInstancedMesh&&qt.instancing===!0||K.isSkinnedMesh&&qt.skinning===!1||!K.isSkinnedMesh&&qt.skinning===!0||K.isInstancedMesh&&qt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qt.instancingMorph===!1&&K.morphTexture!==null||qt.envMap!==Wt||st.fog===!0&&qt.fog!==Ct||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==ft.numPlanes||qt.numIntersection!==ft.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==jt||qt.morphTargets!==Ht||qt.morphNormals!==oe||qt.morphColors!==de||qt.toneMapping!==xe||qt.morphTargetsCount!==ue)&&(At=!0):(At=!0,qt.__version=st.version);let ye=qt.currentProgram;At===!0&&(ye=We(st,$,K));let Ie=!1,_e=!1,je=!1;const me=ye.getUniforms(),Fe=qt.uniforms;if(D.useProgram(ye.program)&&(Ie=!0,_e=!0,je=!0),st.id!==O&&(O=st.id,_e=!0),Ie||it!==A){U.reverseDepthBuffer?(xt.copy(A.projectionMatrix),vv(xt),xv(xt),me.setValue(g,"projectionMatrix",xt)):me.setValue(g,"projectionMatrix",A.projectionMatrix),me.setValue(g,"viewMatrix",A.matrixWorldInverse);const Oe=me.map.cameraPosition;Oe!==void 0&&Oe.setValue(g,Q.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&me.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&me.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),it!==A&&(it=A,_e=!0,je=!0)}if(K.isSkinnedMesh){me.setOptional(g,K,"bindMatrix"),me.setOptional(g,K,"bindMatrixInverse");const Oe=K.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),me.setValue(g,"boneTexture",Oe.boneTexture,M))}K.isBatchedMesh&&(me.setOptional(g,K,"batchingTexture"),me.setValue(g,"batchingTexture",K._matricesTexture,M),me.setOptional(g,K,"batchingIdTexture"),me.setValue(g,"batchingIdTexture",K._indirectTexture,M),me.setOptional(g,K,"batchingColorTexture"),K._colorsTexture!==null&&me.setValue(g,"batchingColorTexture",K._colorsTexture,M));const dn=rt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Dt.update(K,rt,ye),(_e||qt.receiveShadow!==K.receiveShadow)&&(qt.receiveShadow=K.receiveShadow,me.setValue(g,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Fe.envMap.value=Wt,Fe.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&$.environment!==null&&(Fe.envMapIntensity.value=$.environmentIntensity),_e&&(me.setValue(g,"toneMappingExposure",S.toneMappingExposure),qt.needsLights&&ri(Fe,je),Ct&&st.fog===!0&&ut.refreshFogUniforms(Fe,Ct),ut.refreshMaterialUniforms(Fe,st,tt,W,p.state.transmissionRenderTarget[A.id]),pa.upload(g,In(qt),Fe,M)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(pa.upload(g,In(qt),Fe,M),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&me.setValue(g,"center",K.center),me.setValue(g,"modelViewMatrix",K.modelViewMatrix),me.setValue(g,"normalMatrix",K.normalMatrix),me.setValue(g,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Oe=st.uniformsGroups;for(let nn=0,oi=Oe.length;nn<oi;nn++){const Hn=Oe[nn];B.update(Hn,ye),B.bind(Hn,ye)}}return ye}function ri(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function hs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,$,rt){q.get(A.texture).__webglTexture=$,q.get(A.depthTexture).__webglTexture=rt;const st=q.get(A);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=rt===void 0,st.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,$){const rt=q.get(A);rt.__webglFramebuffer=$,rt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,rt=0){P=A,F=$,I=rt;let st=!0,K=null,Ct=!1,Ot=!1;if(A){const Wt=q.get(A);if(Wt.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),st=!1;else if(Wt.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Wt.__hasExternalTextures)M.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ht=A.depthTexture;if(Wt.__boundDepthTexture!==Ht){if(Ht!==null&&q.has(Ht)&&(A.width!==Ht.image.width||A.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ot=!0);const jt=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[$])?K=jt[$][rt]:K=jt[$],Ct=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?K=q.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?K=jt[rt]:K=jt,y.copy(A.viewport),E.copy(A.scissor),j=A.scissorTest}else y.copy(St).multiplyScalar(tt).floor(),E.copy(_t).multiplyScalar(tt).floor(),j=It;if(D.bindFramebuffer(g.FRAMEBUFFER,K)&&st&&D.drawBuffers(A,K),D.viewport(y),D.scissor(E),D.setScissorTest(j),Ct){const Wt=q.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+$,Wt.__webglTexture,rt)}else if(Ot){const Wt=q.get(A.texture),$t=$||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Wt.__webglTexture,rt||0,$t)}O=-1},this.readRenderTargetPixels=function(A,$,rt,st,K,Ct,Ot){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(wt=wt[Ot]),wt){D.bindFramebuffer(g.FRAMEBUFFER,wt);try{const Wt=A.texture,$t=Wt.format,jt=Wt.type;if(!U.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-st&&rt>=0&&rt<=A.height-K&&g.readPixels($,rt,st,K,Ut.convert($t),Ut.convert(jt),Ct)}finally{const Wt=P!==null?q.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,$,rt,st,K,Ct,Ot){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(wt=wt[Ot]),wt){const Wt=A.texture,$t=Wt.format,jt=Wt.type;if(!U.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=A.width-st&&rt>=0&&rt<=A.height-K){D.bindFramebuffer(g.FRAMEBUFFER,wt);const Ht=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Ht),g.bufferData(g.PIXEL_PACK_BUFFER,Ct.byteLength,g.STREAM_READ),g.readPixels($,rt,st,K,Ut.convert($t),Ut.convert(jt),0);const oe=P!==null?q.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,oe);const de=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await _v(g,de,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Ht),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Ct),g.deleteBuffer(Ht),g.deleteSync(de),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,$=null,rt=0){A.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1]);const st=Math.pow(2,-rt),K=Math.floor(A.image.width*st),Ct=Math.floor(A.image.height*st),Ot=$!==null?$.x:0,wt=$!==null?$.y:0;M.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,rt,0,0,Ot,wt,K,Ct),D.unbindTexture()},this.copyTextureToTexture=function(A,$,rt=null,st=null,K=0){A.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,A=arguments[1],$=arguments[2],K=arguments[3]||0,rt=null);let Ct,Ot,wt,Wt,$t,jt;rt!==null?(Ct=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,wt=rt.min.x,Wt=rt.min.y):(Ct=A.image.width,Ot=A.image.height,wt=0,Wt=0),st!==null?($t=st.x,jt=st.y):($t=0,jt=0);const Ht=Ut.convert($.format),oe=Ut.convert($.type);M.setTexture2D($,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,$.unpackAlignment);const de=g.getParameter(g.UNPACK_ROW_LENGTH),xe=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Xe=g.getParameter(g.UNPACK_SKIP_PIXELS),ue=g.getParameter(g.UNPACK_SKIP_ROWS),qt=g.getParameter(g.UNPACK_SKIP_IMAGES),Ne=A.isCompressedTexture?A.mipmaps[K]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Ne.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ne.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,wt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Wt),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,K,$t,jt,Ct,Ot,Ht,oe,Ne.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,K,$t,jt,Ne.width,Ne.height,Ht,Ne.data):g.texSubImage2D(g.TEXTURE_2D,K,$t,jt,Ct,Ot,Ht,oe,Ne),g.pixelStorei(g.UNPACK_ROW_LENGTH,de),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,xe),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Xe),g.pixelStorei(g.UNPACK_SKIP_ROWS,ue),g.pixelStorei(g.UNPACK_SKIP_IMAGES,qt),K===0&&$.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(A,$,rt=null,st=null,K=0){A.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,st=arguments[1]||null,A=arguments[2],$=arguments[3],K=arguments[4]||0);let Ct,Ot,wt,Wt,$t,jt,Ht,oe,de;const xe=A.isCompressedTexture?A.mipmaps[K]:A.image;rt!==null?(Ct=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,wt=rt.max.z-rt.min.z,Wt=rt.min.x,$t=rt.min.y,jt=rt.min.z):(Ct=xe.width,Ot=xe.height,wt=xe.depth,Wt=0,$t=0,jt=0),st!==null?(Ht=st.x,oe=st.y,de=st.z):(Ht=0,oe=0,de=0);const Xe=Ut.convert($.format),ue=Ut.convert($.type);let qt;if($.isData3DTexture)M.setTexture3D($,0),qt=g.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)M.setTexture2DArray($,0),qt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,$.unpackAlignment);const Ne=g.getParameter(g.UNPACK_ROW_LENGTH),At=g.getParameter(g.UNPACK_IMAGE_HEIGHT),ye=g.getParameter(g.UNPACK_SKIP_PIXELS),Ie=g.getParameter(g.UNPACK_SKIP_ROWS),_e=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,xe.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,xe.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Wt),g.pixelStorei(g.UNPACK_SKIP_ROWS,$t),g.pixelStorei(g.UNPACK_SKIP_IMAGES,jt),A.isDataTexture||A.isData3DTexture?g.texSubImage3D(qt,K,Ht,oe,de,Ct,Ot,wt,Xe,ue,xe.data):$.isCompressedArrayTexture?g.compressedTexSubImage3D(qt,K,Ht,oe,de,Ct,Ot,wt,Xe,xe.data):g.texSubImage3D(qt,K,Ht,oe,de,Ct,Ot,wt,Xe,ue,xe),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ne),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,At),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ye),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ie),g.pixelStorei(g.UNPACK_SKIP_IMAGES,_e),K===0&&$.generateMipmaps&&g.generateMipmap(qt),D.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){F=0,I=0,P=null,D.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Mu?"display-p3":"srgb",e.unpackColorSpace=Se.workingColorSpace===Ha?"display-p3":"srgb"}}class ii extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new zt:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new Y,s=[],r=[],o=[],a=new Y,l=new De;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new Y)}r[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(tn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(tn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tu extends yi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cw extends Tu{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Au(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const jo=new Y,Ol=new Au,Bl=new Au,zl=new Au;class Iw extends yi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new Y){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(jo.subVectors(s[0],s[1]).add(s[0]),c=jo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),Ol.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,x,p),Bl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,x,p),zl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,x,p)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Bl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),zl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Ol.calc(l),Bl.calc(l),zl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Td(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Lw(n,t){const e=1-n;return e*e*t}function Dw(n,t){return 2*(1-n)*n*t}function Uw(n,t){return n*n*t}function Zr(n,t,e,i){return Lw(n,t)+Dw(n,e)+Uw(n,i)}function Nw(n,t){const e=1-n;return e*e*e*t}function Fw(n,t){const e=1-n;return 3*e*e*n*t}function Ow(n,t){return 3*(1-n)*n*n*t}function Bw(n,t){return n*n*n*t}function Jr(n,t,e,i,s){return Nw(n,t)+Fw(n,e)+Ow(n,i)+Bw(n,s)}class Tp extends yi{constructor(t=new zt,e=new zt,i=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new zt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zw extends yi{constructor(t=new Y,e=new Y,i=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Y){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y),Jr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ap extends yi{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gw extends yi{constructor(t=new Y,e=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Y){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rp extends yi{constructor(t=new zt,e=new zt,i=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new zt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hw extends yi{constructor(t=new Y,e=new Y,i=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Y){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y),Zr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pp extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Td(a,l.x,c.x,h.x,u.x),Td(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new zt().fromArray(s))}return this}}var Gc=Object.freeze({__proto__:null,ArcCurve:Cw,CatmullRomCurve3:Iw,CubicBezierCurve:Tp,CubicBezierCurve3:zw,EllipseCurve:Tu,LineCurve:Ap,LineCurve3:Gw,QuadraticBezierCurve:Rp,QuadraticBezierCurve3:Hw,SplineCurve:Pp});class kw extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Gc[s.type]().fromJSON(s))}return this}}class Hc extends kw{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ap(this.currentPoint.clone(),new zt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Rp(this.currentPoint.clone(),new zt(t,e),new zt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Tp(this.currentPoint.clone(),new zt(t,e),new zt(i,s),new zt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Pp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Tu(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Te extends Gn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new Y,h=new zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(a,3)),this.setAttribute("uv",new qe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ae extends Gn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const x=[],p=i/2;let m=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(f,2));function b(){const w=new Y,F=new Y;let I=0;const P=(e-t)/i;for(let O=0;O<=r;O++){const it=[],y=O/r,E=y*(e-t)+t;for(let j=0;j<=s;j++){const H=j/s,Z=H*l+a,lt=Math.sin(Z),W=Math.cos(Z);F.x=E*lt,F.y=-y*i+p,F.z=E*W,u.push(F.x,F.y,F.z),w.set(lt,P,W).normalize(),d.push(w.x,w.y,w.z),f.push(H,1-y),it.push(_++)}x.push(it)}for(let O=0;O<s;O++)for(let it=0;it<r;it++){const y=x[it][O],E=x[it+1][O],j=x[it+1][O+1],H=x[it][O+1];t>0&&(h.push(y,E,H),I+=3),e>0&&(h.push(E,j,H),I+=3)}c.addGroup(m,I,0),m+=I}function S(w){const F=_,I=new zt,P=new Y;let O=0;const it=w===!0?t:e,y=w===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),_++;const E=_;for(let j=0;j<=s;j++){const Z=j/s*l+a,lt=Math.cos(Z),W=Math.sin(Z);P.x=it*W,P.y=p*y,P.z=it*lt,u.push(P.x,P.y,P.z),d.push(0,y,0),I.x=lt*.5+.5,I.y=W*.5*y+.5,f.push(I.x,I.y),_++}for(let j=0;j<s;j++){const H=F+j,Z=E+j;w===!0?h.push(Z,Z+1,H):h.push(Z+1,Z,H),O+=3}c.addGroup(m,O,w===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba extends ae{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ba(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mn extends Hc{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Hc().fromJSON(s))}return this}}const Vw={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Cp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=$w(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return ho(r,o,e,a,l,f,0),o}};function Cp(n,t,e,i,s){let r,o;if(s===r1(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Ad(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Ad(r,n[r],n[r+1],o);return o&&Wa(o,o.next)&&(po(o),o=o.next),o}function Ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Wa(e,e.next)||ze(e.prev,e,e.next)===0)){if(po(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ho(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Qw(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Xw(n,i,s,r):Ww(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),po(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=qw(Ds(n),t,e),ho(n,t,e,i,s,r,2)):o===2&&Yw(n,t,e,i,s,r):ho(Ds(n),t,e,i,s,r,1);break}}}function Ww(n){const t=n.prev,e=n,i=n.next;if(ze(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&ar(s,a,r,l,o,c,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Xw(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ze(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=kc(f,_,t,e,i),b=kc(x,p,t,e,i);let S=n.prevZ,w=n.nextZ;for(;S&&S.z>=m&&w&&w.z<=b;){if(S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&ar(a,h,l,u,c,d,S.x,S.y)&&ze(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&ar(a,h,l,u,c,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&ar(a,h,l,u,c,d,S.x,S.y)&&ze(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=b;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&ar(a,h,l,u,c,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function qw(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Wa(s,r)&&Ip(s,i,i.next,r)&&fo(s,r)&&fo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),po(i),po(i.next),i=n=r),i=i.next}while(i!==n);return Ds(i)}function Yw(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&n1(o,a)){let l=Lp(o,a);o=Ds(o,o.next),l=Ds(l,l.next),ho(o,t,e,i,s,r,0),ho(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function $w(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Cp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(e1(c));for(s.sort(Kw),r=0;r<s.length;r++)e=jw(s[r],e);return e}function Kw(n,t){return n.x-t.x}function jw(n,t){const e=Zw(n,t);if(!e)return t;const i=Lp(e,n);return Ds(i,i.next),Ds(e,e.next)}function Zw(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ar(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),fo(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Jw(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Jw(n,t){return ze(n.prev,n,t.prev)<0&&ze(t.next,n,n.next)<0}function Qw(n,t,e,i){let s=n;do s.z===0&&(s.z=kc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,t1(s)}function t1(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function kc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function e1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ar(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function n1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!i1(n,t)&&(fo(n,t)&&fo(t,n)&&s1(n,t)&&(ze(n.prev,n,t.prev)||ze(n,t.prev,t))||Wa(n,t)&&ze(n.prev,n,n.next)>0&&ze(t.prev,t,t.next)>0)}function ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Wa(n,t){return n.x===t.x&&n.y===t.y}function Ip(n,t,e,i){const s=Jo(ze(n,t,e)),r=Jo(ze(n,t,i)),o=Jo(ze(e,i,n)),a=Jo(ze(e,i,t));return!!(s!==r&&o!==a||s===0&&Zo(n,e,t)||r===0&&Zo(n,i,t)||o===0&&Zo(e,n,i)||a===0&&Zo(e,t,i))}function Zo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Jo(n){return n>0?1:n<0?-1:0}function i1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ip(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function fo(n,t){return ze(n.prev,n,n.next)<0?ze(n,t,n.next)>=0&&ze(n,n.prev,t)>=0:ze(n,t,n.prev)<0||ze(n,n.next,t)<0}function s1(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Lp(n,t){const e=new Vc(n.i,n.x,n.y),i=new Vc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ad(n,t,e,i){const s=new Vc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function po(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function r1(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class mr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return mr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Rd(t),Pd(i,t);let o=t.length;e.forEach(Rd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Pd(i,e[l]);const a=Vw.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Rd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Pd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Cn extends Gn{constructor(t=new Mn([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new qe(s,3)),this.setAttribute("uv",new qe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:o1;let S,w=!1,F,I,P,O;m&&(S=m.getSpacedPoints(h),w=!0,d=!1,F=m.computeFrenetFrames(h,!1),I=new Y,P=new Y,O=new Y),d||(p=0,f=0,_=0,x=0);const it=a.extractPoints(c);let y=it.shape;const E=it.holes;if(!mr.isClockWise(y)){y=y.reverse();for(let et=0,g=E.length;et<g;et++){const T=E[et];mr.isClockWise(T)&&(E[et]=T.reverse())}}const H=mr.triangulateShape(y,E),Z=y;for(let et=0,g=E.length;et<g;et++){const T=E[et];y=y.concat(T)}function lt(et,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(g,T)}const W=y.length,tt=H.length;function V(et,g,T){let L,U,D;const X=et.x-g.x,q=et.y-g.y,M=T.x-et.x,v=T.y-et.y,C=X*X+q*q,k=X*v-q*M;if(Math.abs(k)>Number.EPSILON){const z=Math.sqrt(C),G=Math.sqrt(M*M+v*v),ct=g.x-q/z,ut=g.y+X/z,pt=T.x-v/G,Tt=T.y+M/G,ft=((pt-ct)*v-(Tt-ut)*M)/(X*v-q*M);L=ct+X*ft-et.x,U=ut+q*ft-et.y;const Mt=L*L+U*U;if(Mt<=2)return new zt(L,U);D=Math.sqrt(Mt/2)}else{let z=!1;X>Number.EPSILON?M>Number.EPSILON&&(z=!0):X<-Number.EPSILON?M<-Number.EPSILON&&(z=!0):Math.sign(q)===Math.sign(v)&&(z=!0),z?(L=-q,U=X,D=Math.sqrt(C)):(L=X,U=q,D=Math.sqrt(C/2))}return new zt(L/D,U/D)}const gt=[];for(let et=0,g=Z.length,T=g-1,L=et+1;et<g;et++,T++,L++)T===g&&(T=0),L===g&&(L=0),gt[et]=V(Z[et],Z[T],Z[L]);const St=[];let _t,It=gt.concat();for(let et=0,g=E.length;et<g;et++){const T=E[et];_t=[];for(let L=0,U=T.length,D=U-1,X=L+1;L<U;L++,D++,X++)D===U&&(D=0),X===U&&(X=0),_t[L]=V(T[L],T[D],T[X]);St.push(_t),It=It.concat(_t)}for(let et=0;et<p;et++){const g=et/p,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let U=0,D=Z.length;U<D;U++){const X=lt(Z[U],gt[U],L);N(X.x,X.y,-T)}for(let U=0,D=E.length;U<D;U++){const X=E[U];_t=St[U];for(let q=0,M=X.length;q<M;q++){const v=lt(X[q],_t[q],L);N(v.x,v.y,-T)}}}const Gt=_+x;for(let et=0;et<W;et++){const g=d?lt(y[et],It[et],Gt):y[et];w?(P.copy(F.normals[0]).multiplyScalar(g.x),I.copy(F.binormals[0]).multiplyScalar(g.y),O.copy(S[0]).add(P).add(I),N(O.x,O.y,O.z)):N(g.x,g.y,0)}for(let et=1;et<=h;et++)for(let g=0;g<W;g++){const T=d?lt(y[g],It[g],Gt):y[g];w?(P.copy(F.normals[et]).multiplyScalar(T.x),I.copy(F.binormals[et]).multiplyScalar(T.y),O.copy(S[et]).add(P).add(I),N(O.x,O.y,O.z)):N(T.x,T.y,u/h*et)}for(let et=p-1;et>=0;et--){const g=et/p,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let U=0,D=Z.length;U<D;U++){const X=lt(Z[U],gt[U],L);N(X.x,X.y,u+T)}for(let U=0,D=E.length;U<D;U++){const X=E[U];_t=St[U];for(let q=0,M=X.length;q<M;q++){const v=lt(X[q],_t[q],L);w?N(v.x,v.y+S[h-1].y,S[h-1].x+T):N(v.x,v.y,u+T)}}}ot(),dt();function ot(){const et=s.length/3;if(d){let g=0,T=W*g;for(let L=0;L<tt;L++){const U=H[L];Q(U[2]+T,U[1]+T,U[0]+T)}g=h+p*2,T=W*g;for(let L=0;L<tt;L++){const U=H[L];Q(U[0]+T,U[1]+T,U[2]+T)}}else{for(let g=0;g<tt;g++){const T=H[g];Q(T[2],T[1],T[0])}for(let g=0;g<tt;g++){const T=H[g];Q(T[0]+W*h,T[1]+W*h,T[2]+W*h)}}i.addGroup(et,s.length/3-et,0)}function dt(){const et=s.length/3;let g=0;xt(Z,g),g+=Z.length;for(let T=0,L=E.length;T<L;T++){const U=E[T];xt(U,g),g+=U.length}i.addGroup(et,s.length/3-et,1)}function xt(et,g){let T=et.length;for(;--T>=0;){const L=T;let U=T-1;U<0&&(U=et.length-1);for(let D=0,X=h+p*2;D<X;D++){const q=W*D,M=W*(D+1),v=g+L+q,C=g+U+q,k=g+U+M,z=g+L+M;at(v,C,k,z)}}}function N(et,g,T){l.push(et),l.push(g),l.push(T)}function Q(et,g,T){ht(et),ht(g),ht(T);const L=s.length/3,U=b.generateTopUV(i,s,L-3,L-2,L-1);bt(U[0]),bt(U[1]),bt(U[2])}function at(et,g,T,L){ht(et),ht(g),ht(L),ht(g),ht(T),ht(L);const U=s.length/3,D=b.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);bt(D[0]),bt(D[1]),bt(D[3]),bt(D[1]),bt(D[2]),bt(D[3])}function ht(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function bt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return a1(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gc[s.type]().fromJSON(s)),new Cn(i,t.options)}}const o1={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new zt(r,o),new zt(a,l),new zt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new zt(o,1-l),new zt(c,1-u),new zt(d,1-_),new zt(x,1-m)]:[new zt(a,1-l),new zt(h,1-u),new zt(f,1-_),new zt(p,1-m)]}};function a1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Et extends Gn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new Y,d=new Y,f=[],_=[],x=[],p=[];for(let m=0;m<=i;m++){const b=[],S=m/i;let w=0;m===0&&o===0?w=.5/e:m===i&&l===Math.PI&&(w=-.5/e);for(let F=0;F<=e;F++){const I=F/e;u.x=-t*Math.cos(s+I*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+I*r)*Math.sin(o+S*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(I+w,1-S),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){const S=h[m][b+1],w=h[m][b],F=h[m+1][b],I=h[m+1][b+1];(m!==0||o>0)&&f.push(S,w,I),(m!==i-1||l<Math.PI)&&f.push(w,F,I)}this.setIndex(f),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xa extends Gn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new Y,u=new Y,d=new Y;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const x=_/s*r,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,p=(s+1)*(f-1)+_-1,m=(s+1)*(f-1)+_,b=(s+1)*f+_;o.push(x,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class le extends yo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ap,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lt extends le{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Ta={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class l1{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const c1=new l1;class Mo{constructor(t){this.manager=t!==void 0?t:c1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class u1 extends Error{constructor(t,e){super(t),this.response=e}}class h1 extends Mo{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ta.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Pi[t]!==void 0){Pi[t].push({onLoad:e,onProgress:i,onError:s});return}Pi[t]=[],Pi[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Pi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let x=0;const p=new ReadableStream({start(m){b();function b(){u.read().then(({done:S,value:w})=>{if(S)m.close();else{x+=w.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let I=0,P=h.length;I<P;I++){const O=h[I];O.onProgress&&O.onProgress(F)}m.enqueue(w),b()}},S=>{m.error(S)})}}});return new Response(p)}else throw new u1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Ta.add(t,c);const h=Pi[t];delete Pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Pi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class d1 extends Mo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ta.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=uo("img");function l(){h(),Ta.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Hi extends Mo{constructor(t){super(t)}load(t,e,i,s){const r=new xn,o=new d1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Ru extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Gl=new De,Cd=new Y,Id=new Y;class Dp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eu,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cd),Id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Id),e.updateMatrixWorld(),Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ld=new De,Br=new Y,Hl=new Y;class f1 extends Dp{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Br.setFromMatrixPosition(t.matrixWorld),i.position.copy(Br),Hl.copy(i.position),Hl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Hl),i.updateMatrixWorld(),s.makeTranslation(-Br.x,-Br.y,-Br.z),Ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}}class ki extends Ru{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new f1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class p1 extends Dp{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vi extends Ru{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new p1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wi extends Ru{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Up{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dd(){return performance.now()}class m1{constructor(){this.type="ShapePath",this.color=new fe,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Hc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,o){return this.currentPath.bezierCurveTo(t,e,i,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const b=[];for(let S=0,w=m.length;S<w;S++){const F=m[S],I=new Mn;I.curves=F.curves,b.push(I)}return b}function i(m,b){const S=b.length;let w=!1;for(let F=S-1,I=0;I<S;F=I++){let P=b[F],O=b[I],it=O.x-P.x,y=O.y-P.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(P=b[I],it=-it,O=b[F],y=-y),m.y<P.y||m.y>O.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{const E=y*(m.x-P.x)-it*(m.y-P.y);if(E===0)return!0;if(E<0)continue;w=!w}}else{if(m.y!==P.y)continue;if(O.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=O.x)return!0}}return w}const s=mr.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Mn,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,x;d[_]=void 0,f[_]=[];for(let m=0,b=r.length;m<b;m++)a=r[m],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!h&&d[_]&&_++,d[_]={s:new Mn,p:x},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:x[0]});if(!d[0])return e(r);if(d.length>1){let m=!1,b=0;for(let S=0,w=d.length;S<w;S++)u[S]=[];for(let S=0,w=d.length;S<w;S++){const F=f[S];for(let I=0;I<F.length;I++){const P=F[I];let O=!0;for(let it=0;it<d.length;it++)i(P.p,d[it].p)&&(S!==it&&b++,O?(O=!1,u[it].push(P)):m=!0);O&&u[S].push(P)}}b>0&&m===!1&&(f=u)}let p;for(let m=0,b=d.length;m<b;m++){l=d[m].s,c.push(l),p=f[m];for(let S=0,w=p.length;S<w;S++)l.holes.push(p[S].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pu);class Xi extends Mo{constructor(t){super(t)}load(t,e,i,s){const r=this,o=new h1(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},i,s)}parse(t){return new g1(t)}}class g1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=_1(t,e,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function _1(n,t,e){const i=Array.from(n),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=v1(h,s,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function v1(n,t,e,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new m1;let a,l,c,h,u,d,f,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=x.length;p<m;)switch(x[p++]){case"m":a=x[p++]*t+e,l=x[p++]*t+i,o.moveTo(a,l);break;case"l":a=x[p++]*t+e,l=x[p++]*t+i,o.lineTo(a,l);break;case"q":c=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,o.quadraticCurveTo(u,d,c,h);break;case"b":c=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,f=x[p++]*t+e,_=x[p++]*t+i,o.bezierCurveTo(u,d,f,_,c,h);break}}return{offsetX:r.ha*t,path:o}}class He extends Cn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const x1=zn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=kt(null);let i=null,s=kt(!1),r=kt(!1),o=kt(!1);return si(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ii,c=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),h=new ni({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Zt,d=new Wi(16777215,2);l.add(d);const f=new Vi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new ki(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Hi,p=x.load("/3d-bear-arts/assets/lv2.jpg"),m=x.load("/3d-bear-arts/assets/lv2.jpg");p.wrapS=p.wrapT=Ge,m.wrapS=m.wrapT=Ge;const b=new Lt({color:8343336,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),S=new Lt({color:5978654,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),w=new Lt({color:13152668,metalness:.2,roughness:.05,bumpMap:p,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:ce});new Lt({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const F=new Et(1,32,32,0,Math.PI),I=new R(F,w),P=new R(F,b);I.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),I.position.y=-.2,P.position.y=-.2,I.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const O=new Te(1,32),it=new R(O,b);it.scale.set(.85,.85,.8),it.position.set(0,-.2,0),it.rotation.y=Math.PI/2;const y=new Zt;y.add(I),y.add(P),y.add(it),u.add(y);const E=new Et(.6,32,32,0,Math.PI),j=new R(E,b);j.scale.set(1,.95,.95),j.position.set(0,1,0),j.rotation.y=Math.PI*1.5;const H=new R(E,w);H.scale.set(1,.95,.95),H.position.set(0,1,0),H.rotation.y=Math.PI/2;const Z=new Te(.6,32),lt=new R(Z,b);lt.position.set(0,1,0),lt.rotation.y=Math.PI/2,lt.scale.set(1,.95,.95);const W=new Zt;W.add(j),W.add(H),W.add(lt),u.add(W);const tt=new Et(.25,32,32),V=new R(tt,b);V.position.set(-.45,1.35,-.1),u.add(V);const gt=new R(tt,w);gt.position.set(.45,1.35,-.1),u.add(gt);const St=new Et(.25,32,32,Math.PI/2,Math.PI),_t=new R(St,S);_t.scale.set(1.1,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=Math.PI;const It=new Et(.25,32,32,Math.PI/2,Math.PI),Gt=new R(It,w);Gt.scale.set(1.1,.6,.8),Gt.position.set(0,.84,.5),Gt.rotation.y=0;const ot=new Te(.25,32),dt=new R(ot,b);dt.scale.set(.8,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI/2;const xt=new Zt;xt.add(_t),xt.add(Gt),xt.add(dt),u.add(xt);const N=new Mn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const Q={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Lt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const at=new Cn(N,Q),ht=new R(at,b);ht.scale.set(.1,.1,.1),ht.rotation.z=re.degToRad(210),ht.rotation.x=re.degToRad(5),ht.rotation.y=re.degToRad(-45),ht.position.set(-.4,.9,.45);const bt=new R(at,S);bt.scale.set(.6,.5,.5),bt.position.set(.35,0,0),bt.rotation.y=Math.PI,bt.rotation.x=Math.PI;const et=new R(at,S);et.scale.set(.2,.2,.2),et.position.set(.5,-.1,.2),et.rotation.y=Math.PI,et.rotation.x=Math.PI,u.add(et);const g=new Fs(1.3,1.2,.6),T=new R(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new Xa(.15,.025,10,100);new Lt({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const U=new R(L,b);U.position.set(.35,.1,.1),U.rotation.z=Math.PI/2,U.rotation.x=Math.PI/8,U.rotation.y=Math.PI/14;const D=new R(L,b);D.position.set(.35,.1,.13),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/-8,D.rotation.y=Math.PI/12;const X=new Zt;X.add(T),X.add(U),X.add(D),u.add(X);const q=new Et(.35,32,32),M=new R(q,b);M.scale.set(.75,1.25,.65),M.position.set(-.7,-.15,.2),u.add(M);const v=new R(q,w);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new ae(.2,.22,.6,32),k=new R(C,b);k.position.set(-.4,-1.05,0),u.add(k);const z=new R(C,w);z.position.set(.4,-1.05,0),u.add(z);const G=new Et(.3,32,32),ct=new R(G,b);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),u.add(ct);const ut=new R(G,w);ut.scale.set(1,.72,1.5),ut.position.set(.4,-1.45,.17),u.add(ut);const pt=new Et(.44,32,32),Tt=new R(pt,b);Tt.position.set(-.15,-.45,-.4),u.add(Tt);const ft=new R(pt,w);ft.position.set(.15,-.45,-.4),u.add(ft);const Mt=new Et(.18,32,32),Pt=new R(Mt,b);Pt.position.set(0,-.35,-.8),u.add(Pt),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(J){const yt=new He("X",{font:J,size:.2,depth:.05});new ti({color:0});const vt=new R(yt,S);vt.position.set(-.3,.99,.53),vt.rotation.x=re.degToRad(-5),vt.rotation.y=re.degToRad(-15),u.add(vt);const Nt=new He("O",{font:J,size:.2,depth:.05});new ti({color:0});const Yt=new R(Nt,S);Yt.position.set(.14,.99,.53),Yt.rotation.y=re.degToRad(12),Yt.rotation.x=re.degToRad(-5),u.add(Yt)}),Pt.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Rt=()=>{u.rotation.y,u.rotation.x},Xt=()=>{s.value=!0,r.value=!1,o.value=!1},Ut=()=>{s.value=!1,r.value=!0,o.value=!1},Vt=()=>{s.value=!1,r.value=!1,Rt()},B=J=>{const yt=window.innerWidth/2;J>yt?Xt():Ut(),Rt()},mt=J=>{clearTimeout(i),Vt(),o.value=!0;const yt={x:J.clientX/window.innerWidth*2-1,y:-(J.clientY/window.innerHeight)*2+1};if(o.value){const vt=yt.x*Math.PI*.2,Nt=yt.y*Math.PI*.2;u.rotation.y=vt,u.rotation.x=Nt}i=setTimeout(()=>{o.value=!1,B(J.clientX)},500)};window.addEventListener("mousemove",mt);const nt=J=>{if(o.value){const yt={x:J.clientX/window.innerWidth*2-1,y:-(J.clientY/window.innerHeight)*2+1},vt=yt.x*Math.PI*.2,Nt=yt.y*Math.PI*.2;u.rotation.y=vt,u.rotation.x=Nt}};window.addEventListener("mousemove",nt),a(),ke(()=>t.bodyPosition,J=>{u.position.set(J.x,J.y,J.z)}),ke(()=>t.cameraPosition,J=>{c.position.set(t.bodyPosition.x,1,J),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(_i(),vi("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2))}}),y1=xi(x1,[["__scopeId","data-v-f3beb116"]]),M1=zn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=kt(null);let i=null,s=kt(!1),r=kt(!1),o=kt(!1);return si(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ii,c=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),h=new ni({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Zt,d=new Wi(16777215,2);l.add(d);const f=new Vi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new ki(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Hi,p=x.load("/3d-bear-arts/assets/pop6.jpg"),m=x.load("/3d-bear-arts/assets/pop7.jpg");p.wrapS=p.wrapT=Ge,m.wrapS=m.wrapT=Ge;const b=new Lt({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),S=new Lt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),w=new Lt({color:16766720,map:p,metalness:.3,roughness:.5}),F=new Lt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),I=new Lt({color:9055202,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Lt({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce});const P=new Lt({color:65535,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),O=new Lt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),it=new Et(1,32,32,0,Math.PI),y=new R(it,S),E=new R(it,b);y.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),y.position.y=-.2,E.position.y=-.2,y.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const j=new Te(1,32),H=new R(j,b);H.scale.set(.85,.85,.8),H.position.set(0,-.2,0),H.rotation.y=Math.PI/2;const Z=new Zt;Z.add(y),Z.add(E),Z.add(H),u.add(Z);const lt=new Et(.6,32,32,0,Math.PI),W=new R(lt,w);W.scale.set(1,.95,.95),W.position.set(0,1,0),W.rotation.y=Math.PI*1.5;const tt=new R(lt,F);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI/2;const V=new Te(.6,32),gt=new R(V,w);gt.position.set(0,1,0),gt.rotation.y=Math.PI/2,gt.scale.set(1,.95,.95);const St=new Zt;St.add(W),St.add(tt),St.add(gt),u.add(St);const _t=new Et(.25,32,32),It=new R(_t,b);It.position.set(-.45,1.35,-.1),u.add(It);const Gt=new R(_t,S);Gt.position.set(.45,1.35,-.1),u.add(Gt);const ot=new Et(.25,32,32,Math.PI/2,Math.PI),dt=new R(ot,w);dt.scale.set(1.1,.6,.8),dt.position.set(0,.84,.5),dt.rotation.y=Math.PI;const xt=new Et(.25,32,32,Math.PI/2,Math.PI),N=new R(xt,F);N.scale.set(1.1,.6,.8),N.position.set(0,.84,.5),N.rotation.y=0;const Q=new Te(.25,32),at=new R(Q,w);at.scale.set(.8,.6,.8),at.position.set(0,.84,.5),at.rotation.y=Math.PI/2;const ht=new Zt;ht.add(dt),ht.add(N),ht.add(at),u.add(ht);const bt=new Mn;bt.moveTo(0,0),bt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),bt.bezierCurveTo(-.6,.3,0,.6,0,1),bt.bezierCurveTo(0,.6,.6,.3,.6,0),bt.bezierCurveTo(.6,-.3,0,-.3,0,0);const et={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Cn(bt,et),T=new R(g,w);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new R(g,P);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const U=new R(g,b);U.scale.set(.25,.25,.27),U.position.set(.4,.3,-.2),U.rotation.y=Math.PI,U.rotation.x=Math.PI,u.add(U);const D=new Et(.35,32,32),X=new R(D,P);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),u.add(X);const q=new R(D,O);q.scale.set(.75,1.25,.65),q.position.set(.7,-.15,.2),u.add(q);const M=new ae(.2,.22,.6,32),v=new R(M,w);v.position.set(-.4,-1.05,0),u.add(v);const C=new R(M,F);C.position.set(.4,-1.05,0),u.add(C);const k=new Et(.3,32,32),z=new R(k,w);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),u.add(z);const G=new R(k,F);G.scale.set(1,.72,1.5),G.position.set(.4,-1.45,.17),u.add(G);const ct=new Et(.44,32,32),ut=new R(ct,b);ut.position.set(-.15,-.45,-.4),u.add(ut);const pt=new R(ct,S);pt.position.set(.15,-.45,-.4),u.add(pt);const Tt=new Et(.18,32,32),ft=new R(Tt,b);ft.position.set(0,-.35,-.8),u.add(ft),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(mt){const nt=new He("X",{font:mt,size:.2,depth:.05});new ti({color:0});const J=new R(nt,b);J.position.set(-.3,.99,.53),J.rotation.x=re.degToRad(-5),J.rotation.y=re.degToRad(-15),u.add(J);const yt=new He("O",{font:mt,size:.2,depth:.05});new ti({color:0});const vt=new R(yt,P);vt.position.set(.14,.99,.53),vt.rotation.y=re.degToRad(12),vt.rotation.x=re.degToRad(-5),u.add(vt);const Nt=new He("POP",{font:mt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Yt=new Lt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Lt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Jt=new Lt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Kt=new Lt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),Qt=new R(Nt,Yt);Qt.scale.set(.15,.15,.15),Qt.position.set(.03,1.16,.1),Qt.rotateZ(-25),u.add(Qt);const ne=new R(Nt,I);ne.scale.set(.14,.14,.14),ne.rotateZ(45),ne.position.set(.2,-.7,.3),u.add(ne);const ve=new R(Nt,Jt);ve.scale.set(.14,.14,.14),ve.rotateZ(45),ve.rotateY(45),ve.position.set(.3,.7,.3),u.add(ve);const pe=new R(Nt,Jt);pe.scale.set(.15,.15,.15),pe.rotateZ(45),pe.rotateY(45),pe.position.set(.35,-1.5,.3),u.add(pe);const ge=new R(Nt,Kt);ge.scale.set(.17,.17,.17),ge.rotateZ(45),ge.rotateY(15),ge.position.set(.35,1,.3),u.add(ge)}),ft.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Pt=()=>{u.rotation.y,u.rotation.x},Dt=()=>{s.value=!0,r.value=!1,o.value=!1},Rt=()=>{s.value=!1,r.value=!0,o.value=!1},Xt=()=>{s.value=!1,r.value=!1,Pt()},Ut=mt=>{const nt=window.innerWidth/2;mt>nt?Dt():Rt(),Pt()},Vt=mt=>{clearTimeout(i),Xt(),o.value=!0;const nt={x:mt.clientX/window.innerWidth*2-1,y:-(mt.clientY/window.innerHeight)*2+1};if(o.value){const J=nt.x*Math.PI*.2,yt=nt.y*Math.PI*.2;u.rotation.y=J,u.rotation.x=yt}i=setTimeout(()=>{o.value=!1,Ut(mt.clientX)},500)};window.addEventListener("mousemove",Vt);const B=mt=>{if(o.value){const nt={x:mt.clientX/window.innerWidth*2-1,y:-(mt.clientY/window.innerHeight)*2+1},J=nt.x*Math.PI*.2,yt=nt.y*Math.PI*.2;u.rotation.y=J,u.rotation.x=yt}};window.addEventListener("mousemove",B),a(),ke(()=>t.bodyPosition,mt=>{u.position.set(mt.x,mt.y,mt.z)}),ke(()=>t.cameraPosition,mt=>{c.position.set(t.bodyPosition.x,1,mt),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(_i(),vi("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2))}}),S1=xi(M1,[["__scopeId","data-v-8cfea564"]]),w1={class:"pixel-controls"},E1={class:"side-buttons"},b1=zn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=kt(null);let i=kt(!1),s=kt(!1),r=kt(!1),o=kt(!1);si(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03);const J=mt.getElapsedTime();B.forEach((yt,vt)=>{const Nt=.2+Math.sin(J*3+nt[vt])*.1;yt.scale.set(Nt,Nt,Nt)}),x.render(f,_)};const f=new ii,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),x=new ni({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Zt,m=new Zt;f.add(m);const b=new Wi(16777215,2);f.add(b);const S=new Vi(16777215,4);S.position.set(5,5,5),f.add(S);const w=new ki(16777215,5,50);w.position.set(0,2,4),f.add(w);const F=new Hi,I=F.load("/3d-bear-arts/assets/pop6.jpg"),P=F.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=Ge,P.wrapS=P.wrapT=Ge,P.repeat.set(2,2);const O=new Lt({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),it=new Lt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),y=new Lt({color:16766720,map:I,metalness:.3,roughness:.5}),E=new Lt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),j=new Lt({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),H=new Lt({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Lt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),lt=new Et(1,32,32,0,Math.PI),W=new R(lt,it),tt=new R(lt,O);W.scale.set(.85,.85,.8),tt.scale.set(.85,.85,.8),W.position.y=-.2,tt.position.y=-.2,W.rotation.y=Math.PI/2,tt.rotation.y=Math.PI*1.5;const V=new Te(1,32),gt=new R(V,O);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const St=new Zt;St.add(W),St.add(tt),St.add(gt),p.add(St);const _t=new Et(.6,32,32,0,Math.PI),It=new R(_t,y);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI*1.5;const Gt=new R(_t,E);Gt.scale.set(1,.95,.95),Gt.position.set(0,1,0),Gt.rotation.y=Math.PI/2;const ot=new Te(.6,32),dt=new R(ot,y);dt.position.set(0,1,0),dt.rotation.y=Math.PI/2,dt.scale.set(1,.95,.95);const xt=new Zt;xt.add(It),xt.add(Gt),xt.add(dt),p.add(xt);const N=new Et(.25,32,32),Q=new R(N,O);Q.position.set(-.45,1.35,-.1),p.add(Q);const at=new R(N,it);at.position.set(.45,1.35,-.1),p.add(at);const ht=new Et(.25,32,32,Math.PI/2,Math.PI),bt=new R(ht,y);bt.scale.set(1.1,.6,.8),bt.position.set(0,.84,.5),bt.rotation.y=Math.PI;const et=new Et(.25,32,32,Math.PI/2,Math.PI),g=new R(et,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Te(.25,32),L=new R(T,y);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const U=new Zt;U.add(bt),U.add(g),U.add(L),p.add(U);const D=new Mn;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const X={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},q=new Cn(D,X),M=new R(q,y);M.scale.set(.5,.5,.5),M.position.set(.3,0,0),M.rotation.y=Math.PI,M.rotation.x=Math.PI,p.add(M);const v=new R(q,H);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new R(q,O);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,p.add(C);const k=new Et(.35,32,32),z=new R(k,H);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),p.add(z);const G=new R(k,Z);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),p.add(G);const ct=new ae(.2,.22,.6,32),ut=new R(ct,y);ut.position.set(-.4,-1.05,0),p.add(ut);const pt=new R(ct,E);pt.position.set(.4,-1.05,0),p.add(pt);const Tt=new Et(.3,32,32),ft=new R(Tt,y);ft.scale.set(1,.72,1.5),ft.position.set(-.4,-1.45,.17),p.add(ft);const Mt=new R(Tt,E);Mt.scale.set(1,.72,1.5),Mt.position.set(.4,-1.45,.17),p.add(Mt);const Pt=new Et(.44,32,32),Dt=new R(Pt,O);Dt.position.set(-.15,-.45,-.4),p.add(Dt);const Rt=new R(Pt,it);Rt.position.set(.15,-.45,-.4),p.add(Rt);const Xt=new Et(.18,32,32),Ut=new R(Xt,O);Ut.position.set(0,-.35,-.8),p.add(Ut),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(J){const yt=new He("X",{font:J,size:.2,depth:.05}),vt=new R(yt,O);vt.position.set(-.3,.99,.53),vt.rotation.x=re.degToRad(-5),vt.rotation.y=re.degToRad(-15),p.add(vt);const Nt=new He("O",{font:J,size:.2,depth:.05}),Yt=new R(Nt,H);Yt.position.set(.14,.99,.53),Yt.rotation.y=re.degToRad(12),Yt.rotation.x=re.degToRad(-5),p.add(Yt);const Jt=new He("POP",{font:J,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new He("🐻",{font:J,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Kt=new He("BAO      BEAR",{font:J,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),Qt=new Lt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Lt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ne=new Lt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ve=new Lt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),pe=new R(Jt,Qt);pe.scale.set(.15,.15,.15),pe.position.set(.02,1.16,.1),pe.rotateZ(-25),p.add(pe);const ge=new R(Jt,j);ge.scale.set(.14,.14,.14),ge.rotateZ(45),ge.position.set(.2,-.7,.3),p.add(ge);const Ce=new R(Jt,ne);Ce.scale.set(.14,.14,.14),Ce.rotateZ(45),Ce.rotateY(45),Ce.position.set(.3,.7,.3),p.add(Ce);const he=new R(Jt,ne);he.scale.set(.15,.15,.15),he.rotateZ(45),he.rotateY(45),he.position.set(.35,-1.5,.3),p.add(he);const Ue=new R(Jt,ve);Ue.scale.set(.17,.17,.17),Ue.rotateZ(45),Ue.rotateY(15),Ue.position.set(.35,1,.3),p.add(Ue);const Ee=new R(Kt,Qt);Ee.scale.set(.7,.7,.7),Ee.position.set(-6,0,-3),m.add(Ee)}),Ut.renderOrder=1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,p.rotation.x=.1;const B=[M,v,C],mt=new Up,nt=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),ke(()=>t.bodyPosition,J=>{p.position.set(J.x,J.y,J.z)}),ke(()=>t.cameraPosition,J=>{_.position.set(t.bodyPosition.x,1,J),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(an,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",w1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",E1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),T1=xi(b1,[["__scopeId","data-v-cb52c927"]]),A1={class:"pixel-controls"},R1={class:"side-buttons"},P1=zn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=kt(null);let i=kt(!1),s=kt(!1),r=kt(!1),o=kt(!1);si(()=>{if(e.value){let d=function(ne,ve){const pe=new ae(Vt,Vt,B,32);pe.rotateX(Math.PI/2);const ge=new R(pe,ne),Ce=new Zt;for(let Ue=0;Ue<mt;Ue++){const Ee=Ue/mt*Math.PI*2,Ve=new Fs(nt,J,yt),We=new R(Ve,ne);We.position.set((Vt+yt/26)*Math.cos(Ee),(Vt+yt/26)*Math.sin(Ee),0),We.rotation.z=Ee,Ce.add(We)}const he=new Zt;return he.add(ge),he.add(Ce),he.position.set(ve.x,ve.y,ve.z),he},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),vt.rotation.z-=.02,Nt.rotation.z+=.03,Yt.rotation.z+=.02,Jt.rotation.z+=.02,Kt.rotation.z-=.03,Qt.rotation.y+=.04,p.render(_,x)};const _=new ii,x=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),p=new ni({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Zt,b=new Zt;_.add(b);const S=new Wi(16777215,2);_.add(S);const w=new Vi(16777215,4);w.position.set(5,5,5),_.add(w);const F=new ki(16777215,5,50);F.position.set(0,2,4),_.add(F);const I=new Hi,P=I.load("/3d-bear-arts/assets/metal.jpg"),O=I.load("/3d-bear-arts/assets/pop7.jpg"),it=I.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=Ge,O.wrapS=O.wrapT=Ge,O.repeat.set(2,2);const y=new Lt({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});it.mapping=ao;const E=new Lt({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:it,clearcoat:.7,clearcoatRoughness:.3}),j=new Lt({color:"#C0C0C0",metalness:1,roughness:.25,envMap:it,clearcoat:.7,clearcoatRoughness:.3}),H=new Lt({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:it,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),Z=new Lt({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:it,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),lt=new Lt({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:ce});new Lt({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const W=new Lt({color:"#d3d3d3",metalness:1,roughness:.2,map:it,envMap:it,clearcoat:.7,clearcoatRoughness:.3});new Lt({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:it}),new Lt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const tt=new Et(1,32,32,0,Math.PI),V=new R(tt,Z),gt=new R(tt,E);V.scale.set(.85,.85,.8),gt.scale.set(.85,.85,.8),V.position.y=-.2,gt.position.y=-.2,V.rotation.y=Math.PI/2,gt.rotation.y=Math.PI*1.5;const St=new Te(1,32),_t=new R(St,H);_t.scale.set(.85,.85,.8),_t.position.set(0,-.2,0),_t.rotation.y=Math.PI/2;const It=new Zt;It.add(V),It.add(gt),It.add(_t),m.add(It);const Gt=new Et(.6,32,32,0,Math.PI),ot=new R(Gt,E);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI*1.5;const dt=new R(Gt,Z);dt.scale.set(1,.95,.95),dt.position.set(0,1,0),dt.rotation.y=Math.PI/2;const xt=new Te(.6,32),N=new R(xt,H);N.position.set(0,1,0),N.rotation.y=Math.PI/2,N.scale.set(1,.95,.95);const Q=new Zt;Q.add(ot),Q.add(dt),Q.add(N),m.add(Q);const at=new Et(.25,32,32),ht=new R(at,E);ht.position.set(-.45,1.35,-.1),m.add(ht);const bt=new R(at,H);bt.position.set(.45,1.35,-.1),m.add(bt);const et=new Et(.25,32,32,Math.PI/2,Math.PI),g=new R(et,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new Et(.25,32,32,Math.PI/2,Math.PI),L=new R(T,H);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const U=new Te(.25,32),D=new R(U,lt);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const X=new Zt;X.add(g),X.add(L),X.add(D),m.add(X);const q=new Mn;q.moveTo(0,0),q.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),q.bezierCurveTo(-.6,.3,0,.6,0,1),q.bezierCurveTo(0,.6,.6,.3,.6,0),q.bezierCurveTo(.6,-.3,0,-.3,0,0);const M={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Cn(q,M),C=new Et(.35,32,32),k=new R(C,E);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),m.add(k);const z=new R(C,H);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const G=new ae(.2,.22,.6,32),ct=new R(G,E);ct.position.set(-.4,-1.05,0),m.add(ct);const ut=new R(G,H);ut.position.set(.4,-1.05,0),m.add(ut);const pt=new Et(.3,32,32),Tt=new R(pt,E);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),m.add(Tt);const ft=new R(pt,H);ft.scale.set(1,.72,1.5),ft.position.set(.4,-1.45,.17),m.add(ft);const Mt=new Et(.44,32,32),Pt=new R(Mt,E);Pt.position.set(-.15,-.45,-.4),m.add(Pt);const Dt=new R(Mt,Z);Dt.position.set(.15,-.45,-.4),m.add(Dt);const Rt=new Et(.18,32,32),Xt=new R(Rt,E);Xt.position.set(0,-.35,-.8),m.add(Xt),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ne){const ve=new He("X",{font:ne,size:.2,depth:.05});new ti({color:0});const pe=new R(ve,y);pe.position.set(-.3,.99,.53),pe.rotation.x=re.degToRad(-5),pe.rotation.y=re.degToRad(-15),m.add(pe);const ge=new He("O",{font:ne,size:.2,depth:.05});new ti({color:0});const Ce=new R(ge,y);Ce.position.set(.14,.99,.53),Ce.rotation.y=re.degToRad(12),Ce.rotation.x=re.degToRad(-5),m.add(Ce)}),Xt.renderOrder=1;const Vt=1.2,B=.5,mt=8,nt=.7,J=.3,yt=.5,vt=d(W,{x:-2,y:0,z:0}),Nt=d(W,{x:0,y:0,z:0}),Yt=d(W,{x:2,y:0,z:0}),Jt=d(W,{x:2,y:0,z:0}),Kt=d(W,{x:2,y:-2,z:0}),Qt=new R(v,j);Qt.scale.set(.3,.3,.3),Qt.position.set(.25,1.1,0),Qt.rotation.y=Math.PI,Qt.rotation.x=Math.PI,m.add(Qt),vt.position.set(.35,0,0),Nt.position.set(.25,-.3,.4),Yt.position.set(.3,.3,-.2),Jt.position.set(.25,.17,.4),Kt.position.set(.5,-.3,.45),vt.scale.set(.2,.2,.2),Nt.scale.set(.18,.18,.18),Yt.scale.set(.15,.15,.15),Jt.scale.set(.17,.17,.17),Kt.scale.set(.15,.15,.15),Nt.rotation.z=Math.PI/4,Yt.rotation.z=-Math.PI/4,Jt.rotation.y=-Math.PI/2,Kt.rotation.y=-Math.PI/2,m.add(vt),m.add(Nt),m.add(Yt),m.add(Jt),m.add(Kt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,f(),ke(()=>t.bodyPosition,ne=>{m.position.set(ne.x,ne.y,ne.z)}),ke(()=>t.cameraPosition,ne=>{x.position.set(t.bodyPosition.x,1,ne),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(an,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",A1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",R1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),C1=xi(P1,[["__scopeId","data-v-9a57b6d8"]]),I1={class:"pixel-controls"},L1={class:"side-buttons"},D1=zn({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=kt(null);let i=kt(!1),s=kt(!1),r=kt(!1),o=kt(!1);si(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),x.render(f,_)};const f=new ii,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),x=new ni({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Zt,m=new Zt;f.add(m);const b=new Wi(16777215,2);f.add(b);const S=new Vi(16777215,4);S.position.set(5,5,5),f.add(S);const w=new ki(16777215,5,50);w.position.set(0,2,4),f.add(w);const F=new Hi,I=F.load("/3d-bear-arts/assets/sun.jpg"),P=F.load("/3d-bear-arts/assets/gear.jpg"),O=F.load("/3d-bear-arts/assets/underwater.jpg"),it=F.load("/3d-bear-arts/assets/beach.jpg");O.wrapS=O.wrapT=Ge,it.wrapS=it.wrapT=Ge,it.repeat.set(.8,1),P.mapping=ao,I.wrapS=I.wrapT=Ge;const y=new Lt({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:it,envMapIntensity:.8,side:ce,transparent:!0,opacity:.9}),E=new Lt({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:it,envMapIntensity:.6,side:ce,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new Lt({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:it,side:ce,transparent:!0,opacity:.9});const j=new Lt({color:8374441,metalness:1,roughness:.25,envMap:P,clearcoat:.7,clearcoatRoughness:.3}),H=new Lt({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:ce}),Z=new Lt({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:it,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),lt=new Lt({color:"#a4d0f5",metalness:0,roughness:.8,map:I,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),W=new Lt({color:"#a4d0f5",metalness:0,roughness:.85,map:it,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),tt=new Et(1,32,32,0,Math.PI),V=new R(tt,H),gt=new R(tt,E);V.scale.set(.85,.85,.8),gt.scale.set(.85,.85,.8),V.position.y=-.2,gt.position.y=-.2,V.rotation.y=Math.PI/2,gt.rotation.y=Math.PI*1.5;const St=new Te(1,32),_t=new R(St,W);_t.scale.set(.85,.85,.8),_t.position.set(0,-.2,0),_t.rotation.y=Math.PI/2;const It=new Zt;It.add(V),It.add(gt),It.add(_t);const Gt=new Et(.6,32,32,0,Math.PI*2,0,Math.PI/2),ot=new Lt({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),dt=new R(Gt,ot);dt.position.set(0,-.2,0),dt.rotation.x=Math.PI,dt.scale.set(1.25,1.25,1.25),It.add(dt);const xt=new Lt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ce,transparent:!0,opacity:.7,depthWrite:!1}),N=new R(St,xt);N.scale.set(.7,.7,.7),N.position.set(0,-.3,0),N.rotation.x=Math.PI/2,N.renderOrder=1,It.add(N),p.add(It);const Q=new Et(.6,32,32,0,Math.PI),at=new R(Q,y);at.scale.set(1,.95,.95),at.position.set(0,1,0),at.rotation.y=Math.PI*1.5;const ht=new R(Q,Z);ht.scale.set(1,.95,.95),ht.position.set(0,1,0),ht.rotation.y=Math.PI/2;const bt=new Te(.6,32),et=new R(bt,lt);et.position.set(0,1,0),et.rotation.y=Math.PI/2,et.scale.set(1,.95,.95);const g=new Zt;g.add(at),g.add(ht),g.add(et),p.add(g);const T=new Et(.25,32,32),L=new R(T,y);L.position.set(-.45,1.35,-.1),p.add(L);const U=new R(T,Z);U.position.set(.45,1.35,-.1),p.add(U);const D=new Et(.25,32,32,Math.PI/2,Math.PI),X=new R(D,y);X.scale.set(1.1,.6,.8),X.position.set(0,.84,.5),X.rotation.y=Math.PI;const q=new Et(.25,32,32,Math.PI/2,Math.PI),M=new R(q,Z);M.scale.set(1.1,.6,.8),M.position.set(0,.84,.5),M.rotation.y=0;const v=new Te(.25,32),C=new R(v,lt);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const k=new Zt;k.add(X),k.add(M),k.add(C),p.add(k);const z=new Mn;z.moveTo(0,0),z.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),z.bezierCurveTo(-.6,.3,0,.6,0,1),z.bezierCurveTo(0,.6,.6,.3,.6,0),z.bezierCurveTo(.6,-.3,0,-.3,0,0);const G={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ct=new Cn(z,G),ut=new Et(.35,32,32),pt=new R(ut,y);pt.scale.set(.75,1.25,.65),pt.position.set(-.7,-.15,.2),p.add(pt);const Tt=new R(ut,Z);Tt.scale.set(.75,1.25,.65),Tt.position.set(.7,-.15,.2),p.add(Tt);const ft=new ae(.2,.22,.6,32),Mt=new R(ft,y);Mt.position.set(-.4,-1.05,0),p.add(Mt);const Pt=new R(ft,Z);Pt.position.set(.4,-1.05,0),p.add(Pt);const Dt=new Et(.3,32,32),Rt=new R(Dt,y);Rt.scale.set(1,.72,1.5),Rt.position.set(-.4,-1.45,.17),p.add(Rt);const Xt=new R(Dt,Z);Xt.scale.set(1,.72,1.5),Xt.position.set(.4,-1.45,.17),p.add(Xt);const Ut=new Et(.44,32,32),Vt=new R(Ut,y);Vt.position.set(-.15,-.45,-.4),p.add(Vt);const B=new R(Ut,Z);B.position.set(.15,-.45,-.4),p.add(B);const mt=new Et(.18,32,32),nt=new R(mt,E);nt.position.set(0,-.35,-.8),p.add(nt),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(vt){const Nt=new He("X",{font:vt,size:.2,depth:.05});new ti({color:0});const Yt=new R(Nt,y);Yt.position.set(-.3,.99,.53),Yt.rotation.x=re.degToRad(-5),Yt.rotation.y=re.degToRad(-15),p.add(Yt);const Jt=new He("O",{font:vt,size:.2,depth:.05});new ti({color:0});const Kt=new R(Jt,E);Kt.position.set(.14,.99,.53),Kt.rotation.y=re.degToRad(12),Kt.rotation.x=re.degToRad(-5),p.add(Kt)}),nt.renderOrder=1,p.rotation.x=.1;const yt=new R(ct,j);yt.scale.set(.3,.3,.3),yt.position.set(.25,1.1,0),yt.rotation.y=Math.PI,yt.rotation.x=Math.PI,p.add(yt),p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,d(),ke(()=>t.bodyPosition,vt=>{p.position.set(vt.x,vt.y,vt.z)}),ke(()=>t.cameraPosition,vt=>{_.position.set(t.bodyPosition.x,1,vt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(an,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",I1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",L1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),U1=xi(D1,[["__scopeId","data-v-08c607ba"]]),N1={class:"pixel-controls"},F1={class:"side-buttons"},O1={class:"directional-buttons"},B1={class:"horizontal-buttons"},z1={class:"directional-buttons-woman"},G1={class:"horizontal-buttons-woman"},H1={class:"directional-buttons-kid"},k1={class:"horizontal-buttons-kid"},Qo=.1,ta=.05,ea=.08,V1=zn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=kt(null);let i=kt(!1),s=kt(!1),r=kt(!1),o=kt(!1);const a=Ps(null),l=kt(!1),c=kt(!1),h=kt(!1),u=kt(!1),d=Ps(null),f=Ps(null),_=kt(!1),x=kt(!1),p=kt(!1),m=kt(!1),b=kt(!1),S=kt(!1),w=kt(!1),F=kt(!1),I=new ni({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new ii,O=new Be(75,window.innerWidth/window.innerHeight,.1,1e3);O.position.z=5,si(()=>{if(e.value){let et=function(){const At=new Zt,ye=new Et(.2,32,32),Ie=new le({color:16767916}),_e=new R(ye,Ie);_e.position.set(0,1.5,0),At.add(_e);const je=new Et(.21,32,32,0,Math.PI*2,0,Math.PI/2),me=new le({color:16711680}),Fe=new R(je,me);Fe.position.set(0,1.58,0),At.add(Fe);const dn=new ae(.25,.25,.6,32),Oe=new le({color:16767916}),nn=new R(dn,Oe);nn.position.set(0,1,0),At.add(nn);const oi=new ae(.26,.26,.3,32),Hn=new le({color:255}),ai=new R(oi,Hn);ai.position.set(0,.65,0),At.add(ai);const kn=new ae(.1,.1,.5,32),fn=new le({color:16767916}),Dn=new R(kn,fn);Dn.position.set(-.15,.25,0),At.add(Dn);const Un=new R(kn,fn);Un.position.set(.15,.25,0),At.add(Un);const Vn=new ae(.08,.08,.5,32),Sn=new R(Vn,fn);Sn.position.set(-.35,1.3,0),Sn.rotation.z=Math.PI/4,At.add(Sn);const wn=new R(Vn,fn);return wn.position.set(.35,1.3,0),wn.rotation.z=-Math.PI/4,At.add(wn),At.scale.set(.27,.27,.27),At.position.set(-.2,-.1,-.15),At},g=function(){const At=new Zt,ye=new Et(.18,32,32),Ie=new le({color:16767916}),_e=new R(ye,Ie);_e.position.set(0,1.2,.04),At.add(_e);const je=new Et(.19,32,32,.4,Math.PI*2,0,Math.PI/2),me=new ae(.18,.18,.4,32),Fe=new le({color:9127187}),dn=new R(je,Fe);dn.position.set(0,1.28,0),At.add(dn);const Oe=new R(me,Fe);Oe.position.set(0,1.1,-.01),At.add(Oe);const nn=new ae(.18,.2,.5,32),oi=new le({color:16767916}),Hn=new R(nn,oi);Hn.position.set(0,.85,0),At.add(Hn);const ai=new Et(.08,32,32,0,Math.PI),kn=new le({color:16738740}),fn=new R(ai,kn);fn.position.set(-.09,.98,.15),At.add(fn);const Dn=new R(ai,kn);Dn.position.set(.09,.98,.15),At.add(Dn);const Un=new ae(.22,.22,.25,32),Vn=new le({color:16738740}),Sn=new R(Un,Vn);Sn.position.set(0,.6,0),At.add(Sn);const wn=new ae(.1,.1,.6,32),ds=new le({color:16767916}),Os=new R(wn,ds);Os.position.set(-.09,.5,.2),Os.rotation.x=Math.PI/2,At.add(Os);const Bs=new R(wn,ds);Bs.position.set(.09,.5,.2),Bs.rotation.x=Math.PI/2,At.add(Bs);const Rr=new ae(.08,.08,.35,32),zs=new R(Rr,ds);zs.position.set(-.24,.95,.18),zs.rotation.x=Math.PI/2,At.add(zs);const Gs=new R(Rr,ds);return Gs.position.set(.2,.85,0),Gs.rotation.z=Math.PI/20,At.add(Gs),At.scale.set(.27,.27,.27),At.position.set(.2,-.15,-.32),At},T=function(){const At=new Zt,ye=new Et(.2,32,32),Ie=new le({color:16767916}),_e=new R(ye,Ie);_e.position.set(0,1.5,0),At.add(_e);const je=new Et(.21,32,32,0,Math.PI*2,0,Math.PI/2),me=new le({color:25600}),Fe=new R(je,me);Fe.position.set(0,1.58,0),At.add(Fe);const dn=new ae(.22,.22,.5,32),Oe=new le({color:16767916}),nn=new R(dn,Oe);nn.position.set(0,1,0),At.add(nn);const oi=new ae(.23,.23,.3,32),Hn=new le({color:8388736}),ai=new R(oi,Hn);ai.position.set(0,.65,0),At.add(ai);const kn=new ae(.1,.1,.5,32),fn=new le({color:16767916}),Dn=new R(kn,fn);Dn.position.set(-.15,.3,-.25),Dn.rotation.x=Math.PI/6,At.add(Dn);const Un=new R(kn,fn);Un.position.set(.15,.3,.25),Un.rotation.x=-Math.PI/6,At.add(Un);const Vn=new ae(.08,.08,.4,32),Sn=new R(Vn,fn);Sn.position.set(-.28,1,-.2),Sn.rotation.x=Math.PI/6,At.add(Sn);const wn=new R(Vn,fn);return wn.position.set(.28,1.3,.1),wn.rotation.z=-Math.PI/8,At.add(wn),At.scale.set(.15,.15,.15),At.position.set(.3,-.25,.25),At.rotation.x=Math.PI/12,At.rotation.y=Math.PI/2,At.rotation.z=-Math.PI/3,At},L=function(At){let ye=1,Ie=0;function _e(){requestAnimationFrame(_e),At.position.x+=.01*ye,At.position.x>=.35?(ye=-1,At.rotation.y=Math.PI):At.position.x<=-.35&&(ye=1,At.rotation.y=0),Ie+=.003,At.position.y=-.4+Math.sin(Ie)*.1,q.render(D,X)}_e()},U=function(){requestAnimationFrame(U),i.value&&(M.rotation.y+=.03),s.value&&(M.rotation.y-=.03),r.value&&(M.rotation.x-=.03),o.value&&(M.rotation.x+=.03),pe.uniforms.u_time.value+=.25,st.rotation.y+=.04,q.render(D,X)};const D=new ii,X=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),q=new ni({antialias:!0,alpha:!0});q.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(q.domElement);const M=new Zt,v=new Zt;D.add(v);const C=new Wi(16777215,2);D.add(C);const k=new Vi(16777215,4);k.position.set(5,5,5),D.add(k);const z=new ki(16777215,5,50);z.position.set(0,2,4),D.add(z);const G=new Hi,ct=G.load("/3d-bear-arts/assets/beach.jpg");ct.repeat.set(.8,1);const ut=G.load("/3d-bear-arts/assets/sun.jpg");ct.wrapS=ct.wrapT=Ge,ct.repeat.set(.8,1),ut.wrapS=ut.wrapT=Ge;const pt=new Lt({color:11592447,map:ct,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Tt=new Lt({color:11592447,map:ct,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:ce,ior:1.33,depthWrite:!1,depthTest:!0}),ft=new Lt({color:11592447,map:ct,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),Mt=new Lt({color:11592447,map:ct,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:ce}),Pt=new Lt({color:11592447,map:ct,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:ce,ior:1.33}),Dt=new Lt({color:11592447,map:ct,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Rt=new Et(1,32,32,0,Math.PI),Xt=new R(Rt,Mt),Ut=new R(Rt,Tt);Xt.scale.set(.85,.85,.8),Ut.scale.set(.85,.85,.8),Xt.position.y=-.2,Ut.position.y=-.2,Xt.rotation.y=Math.PI/2,Ut.rotation.y=Math.PI*1.5;const Vt=new Te(1,32),B=new R(Vt,pt);B.scale.set(.85,.85,.8),B.position.set(0,-.2,0),B.rotation.y=Math.PI/2;const mt=new Zt;mt.add(Xt),mt.add(Ut),mt.add(B),M.add(mt);const nt=new Et(.6,32,32,0,Math.PI),J=new R(nt,pt);J.scale.set(1,.95,.95),J.position.set(0,1,0),J.rotation.y=Math.PI*1.5;const yt=new R(nt,ft);yt.scale.set(1,.95,.95),yt.position.set(0,1,0),yt.rotation.y=Math.PI/2;const vt=new Te(.6,32),Nt=new R(vt,pt);Nt.position.set(0,1,0),Nt.rotation.y=Math.PI/2,Nt.scale.set(1,.95,.95);const Yt=new Zt;Yt.add(J),Yt.add(yt),Yt.add(Nt),M.add(Yt);const Jt=new Et(.6,32,32,0,Math.PI*2,0,Math.PI/2),Kt=new Lt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),Qt=new R(Jt,Kt);Qt.position.set(0,-.2,0),Qt.rotation.x=Math.PI,Qt.scale.set(1.25,1.25,1.25),mt.add(Qt);const ne=new Lt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ce,transparent:!0,opacity:.7,depthWrite:!1}),ve=new R(Vt,ne);ve.scale.set(.7,.7,.7),ve.position.set(0,-.3,0),ve.rotation.x=Math.PI/2,ve.renderOrder=1,mt.add(ve),M.add(mt);const pe=new ei({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),ge=new R(Vt,pe);ge.position.set(0,-.3,0),ge.scale.set(.7,.7,.7),ge.rotation.x=-Math.PI/2,ge.renderOrder=1,mt.add(ge);const Ce=new Et(.25,32,32),he=new R(Ce,Pt);he.position.set(-.45,1.35,-.1),M.add(he);const Ue=new R(Ce,ft);Ue.position.set(.45,1.35,-.1),M.add(Ue);const Ee=new Et(.25,32,32,Math.PI/2,Math.PI),Ve=new R(Ee,Pt);Ve.scale.set(1.1,.6,.8),Ve.position.set(0,.84,.5),Ve.rotation.y=Math.PI;const We=new Et(.25,32,32,Math.PI/2,Math.PI),In=new R(We,ft);In.scale.set(1.1,.6,.8),In.position.set(0,.84,.5),In.rotation.y=0;const Mi=new Te(.25,32),Ln=new R(Mi,Tt);Ln.scale.set(.8,.6,.8),Ln.position.set(0,.84,.5),Ln.rotation.y=Math.PI/2;const ri=new Zt;ri.add(Ve),ri.add(In),ri.add(Ln),M.add(ri);const hs=new Lt({color:8374441,metalness:1,roughness:.25,envMap:ut,clearcoat:.7,clearcoatRoughness:.3}),A=new Mn;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const $={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},rt=new Cn(A,$),st=new R(rt,hs);st.scale.set(.2,.2,.2),st.position.set(.25,1.2,0),st.rotation.y=Math.PI,st.rotation.x=Math.PI,M.add(st);const K=new Et(.35,32,32),Ct=new R(K,Tt);Ct.scale.set(.75,1.25,.65),Ct.position.set(-.7,-.15,.2),M.add(Ct);const Ot=new R(K,Mt);Ot.scale.set(.75,1.25,.65),Ot.position.set(.7,-.15,.2),M.add(Ot);const wt=new ae(.2,.22,.6,32),Wt=new R(wt,Pt);Wt.position.set(-.4,-1.05,0),M.add(Wt);const $t=new R(wt,ft);$t.position.set(.4,-1.05,0),M.add($t);const jt=new Et(.3,32,32),Ht=new R(jt,Pt);Ht.scale.set(1,.72,1.5),Ht.position.set(-.4,-1.45,.17),M.add(Ht);const oe=new R(jt,ft);oe.scale.set(1,.72,1.5),oe.position.set(.4,-1.45,.17),M.add(oe);const de=new Et(.44,32,32),xe=new R(de,Pt);xe.position.set(-.15,-.45,-.4),M.add(xe);const Xe=new R(de,Pt);Xe.position.set(.15,-.45,-.4),M.add(Xe);const ue=new Et(.18,32,32),qt=new R(ue,Pt);qt.position.set(0,-.35,-.8),M.add(qt),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(At){const ye=new He("X",{font:At,size:.2,depth:.05}),Ie=new R(ye,Dt);Ie.position.set(-.3,.99,.53),Ie.rotation.x=re.degToRad(-5),Ie.rotation.y=re.degToRad(-15),M.add(Ie);const _e=new He("O",{font:At,size:.2,depth:.05}),je=new R(_e,Dt);je.position.set(.14,.99,.53),je.rotation.y=re.degToRad(12),je.rotation.x=re.degToRad(-5),M.add(je)}),a.value=et(),M.add(a.value),D.add(M),d.value=g(),M.add(d.value),f.value=T(),M.add(f.value),L(f.value),M.scale.set(1.4,1.4,1.4),D.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),X.position.set(t.bodyPosition.x,1,t.cameraPosition),X.lookAt(t.bodyPosition.x,0,0),X.position.z=4,M.rotation.x=.1,U(),ke(()=>t.bodyPosition,At=>{M.position.set(At.x,At.y,At.z)}),ke(()=>t.cameraPosition,At=>{X.position.set(t.bodyPosition.x,1,At),X.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix(),q.setSize(window.innerWidth,window.innerHeight)})}});function it(){s.value=!0}function y(){i.value=!0}function E(){r.value=!0}function j(){o.value=!0}function H(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}const Z=()=>{l.value=!0,console.log(l.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},lt=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},W=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},tt=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},V=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},gt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},St=()=>{x.value=!0,d.value&&(d.value.rotation.y=0)},_t=()=>{p.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},It=()=>{m.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},Gt=()=>{_.value=!1,x.value=!1,p.value=!1,m.value=!1},ot=()=>{requestAnimationFrame(ot),a.value&&(l.value&&(a.value.position.z-=Qo),c.value&&(a.value.position.z+=Qo),h.value&&(a.value.position.x-=Qo),u.value&&(a.value.position.x+=Qo)),I.render(P,O)},dt=()=>{requestAnimationFrame(dt),d.value&&(_.value&&(d.value.position.z-=ta),x.value&&(d.value.position.z+=ta),p.value&&(d.value.position.x-=ta),m.value&&(d.value.position.x+=ta))};dt(),ot();const xt=()=>{b.value=!0,f.value&&(f.value.rotation.y=0)},N=()=>{S.value=!0,f.value&&(f.value.rotation.y=Math.PI)},Q=()=>{w.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},at=()=>{F.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},ht=()=>{b.value=!1,S.value=!1,w.value=!1,F.value=!1},bt=()=>{requestAnimationFrame(bt),f.value&&(b.value&&(f.value.position.z-=ea),S.value&&(f.value.position.z+=ea),w.value&&(f.value.position.x-=ea),F.value&&(f.value.position.x+=ea))};return bt(),(et,g)=>(_i(),vi(an,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",N1,[Ft("button",{class:"pixel-btn up",onMousedown:E,onMouseup:H},"UP",32),Ft("div",F1,[Ft("button",{class:"pixel-btn left",onMousedown:it,onMouseup:H},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:y,onMouseup:H},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:j,onMouseup:H},"DOWN",32)]),Ft("div",O1,[Ft("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:Z,onMouseup:V},"UP",32),Ft("div",B1,[Ft("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:W,onMouseup:V},"LEFT",32),Ft("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:tt,onMouseup:V},"RIGHT",32)]),Ft("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:lt,onMouseup:V},"DOWN",32)]),Ft("div",z1,[Ft("button",{class:"directional-btn-woman north-btn",onMousedown:gt,onMouseup:Gt},"UP",32),Ft("div",G1,[Ft("button",{class:"directional-btn-woman west-btn",onMousedown:_t,onMouseup:Gt},"LEFT",32),Ft("button",{class:"directional-btn-woman east-btn",onMousedown:It,onMouseup:Gt},"RIGHT",32)]),Ft("button",{class:"directional-btn-woman south-btn",onMousedown:St,onMouseup:Gt},"DOWN",32)]),Ft("div",H1,[Ft("button",{class:"directional-btn-kid north-btn",onMousedown:xt,onMouseup:ht},"UP",32),Ft("div",k1,[Ft("button",{class:"directional-btn-kid west-btn",onMousedown:Q,onMouseup:ht},"LEFT",32),Ft("button",{class:"directional-btn-kid east-btn",onMousedown:at,onMouseup:ht},"RIGHT",32)]),Ft("button",{class:"directional-btn-kid south-btn",onMousedown:N,onMouseup:ht},"DOWN",32)])],64))}}),W1=xi(V1,[["__scopeId","data-v-354294c6"]]),X1={class:"pixel-controls"},q1={class:"side-buttons"},Y1=zn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=kt(null);let i=kt(!1),s=kt(!1),r=kt(!1),o=kt(!1);si(()=>{if(e.value){let d=function(he,Ue){const Ee=new Zt,Ve=new Et(1,32,32),We=new R(Ve,lt);We.scale.set(1,.8,1),Ee.add(We);const In=new ae(.1,.1,.5,16),Mi=new le({color:9127187}),Ln=new R(In,Mi);return Ln.position.set(0,.9,0),Ee.add(Ln),Ee},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),Vt.rotation.z-=.04,B.rotation.z+=.04,mt.rotation.z+=.03,nt.rotation.z+=.03,v.rotation.y+=.04,Ce+=pe,m.position.y=t.bodyPosition.y+Math.sin(Ce)*ge;const he=ne.getElapsedTime();Qt.forEach((Ue,Ee)=>{const Ve=.1+Math.sin(he*3+ve[Ee])*.1;Ue.scale.set(Ve,Ve,Ve)}),p.render(_,x)};const _=new ii,x=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),p=new ni({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Zt,b=new Zt;_.add(b);const S=new Wi(16777215,2);_.add(S);const w=new Vi(16777215,4);w.position.set(5,5,5),_.add(w);const F=new ki(16777215,5,50);F.position.set(0,2,4),_.add(F);const I=new Hi,P=I.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=Ge,P.repeat.set(.8,.85);const O=I.load("/3d-bear-arts/assets/pumpkin.jpg");O.wrapS=O.wrapT=Ge,O.repeat.set(1,1);const it=I.load("/3d-bear-arts/assets/pumpkin.jpg");it.wrapS=O.wrapT=Ge,it.repeat.set(2,.8);const y=new Lt({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new Zt,j=new Lt({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),H=new Lt({color:16747520,map:O,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Lt({color:16747520,map:it,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ce}),lt=new Lt({color:16747520,map:it,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Lt({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Lt({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Lt({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const W=new Et(1,32,32,0,Math.PI),tt=new R(W,Z),V=new R(W,j);tt.scale.set(.85,.85,.8),V.scale.set(.85,.85,.8),tt.position.y=-.2,V.position.y=-.2,tt.rotation.y=Math.PI/2,V.rotation.y=Math.PI*1.5;const gt=new Te(1,32),St=new R(gt,H);St.scale.set(.85,.85,.8),St.position.set(0,-.2,0),St.rotation.y=Math.PI/2;const _t=new Zt;_t.add(tt),_t.add(V),_t.add(St),m.add(_t);const It=new Et(.6,32,32,0,Math.PI),Gt=new R(It,j);Gt.scale.set(1,.95,.95),Gt.position.set(0,1,0),Gt.rotation.y=Math.PI*1.5;const ot=new R(It,Z);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI/2;const dt=new Te(.6,32),xt=new R(dt,H);xt.position.set(0,1,0),xt.rotation.y=Math.PI/2,xt.scale.set(1,.95,.95);const N=new Zt;N.add(Gt),N.add(ot),N.add(xt),m.add(N);const Q=new Et(.25,32,32),at=new R(Q,lt);at.position.set(-.45,1.35,-.1),m.add(at);const ht=new R(Q,Z);ht.position.set(.45,1.35,-.1),m.add(ht);const bt=new Et(.25,32,32,Math.PI/2,Math.PI),et=new R(bt,j);et.scale.set(1.1,.6,.8),et.position.set(0,.84,.5),et.rotation.y=Math.PI;const g=new Et(.25,32,32,Math.PI/2,Math.PI),T=new R(g,Z);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const L=new Te(.25,32),U=new R(L,j);U.scale.set(.8,.6,.8),U.position.set(0,.84,.5),U.rotation.y=Math.PI/2;const D=new Zt;D.add(et),D.add(T),D.add(U),m.add(D);const X=new Mn;X.moveTo(0,0),X.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),X.bezierCurveTo(-.6,.3,0,.6,0,1),X.bezierCurveTo(0,.6,.6,.3,.6,0),X.bezierCurveTo(.6,-.3,0,-.3,0,0);const q={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},M=new Cn(X,q),v=new R(M,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new Et(.35,32,32),k=new R(C,H);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),m.add(k);const z=new R(C,Z);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),m.add(z);const G=new ae(.2,.22,.6,32),ct=new R(G,H);ct.position.set(-.4,-1.05,0),m.add(ct);const ut=new R(G,Z);ut.position.set(.4,-1.05,0),m.add(ut);const pt=new Et(.3,32,32),Tt=new R(pt,lt);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),m.add(Tt);const ft=new R(pt,Z);ft.scale.set(1,.72,1.5),ft.position.set(.4,-1.45,.17),m.add(ft);const Mt=new Et(.44,32,32),Pt=new R(Mt,j);Pt.position.set(-.15,-.45,-.4),m.add(Pt);const Dt=new R(Mt,Z);Dt.position.set(.15,-.45,-.4),m.add(Dt);const Rt=new Et(.18,32,32),Xt=new R(Rt,lt);Xt.position.set(0,-.35,-.8),m.add(Xt),Xt.renderOrder=1,new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(he){const Ue=new He("X",{font:he,size:.2,depth:.05}),Ee=new R(Ue,H);Ee.position.set(-.3,.99,.53),Ee.rotation.x=re.degToRad(-5),Ee.rotation.y=re.degToRad(-15),m.add(Ee);const Ve=new He("O",{font:he,size:.2,depth:.05}),We=new R(Ve,H);We.position.set(.14,.99,.53),We.rotation.y=re.degToRad(12),We.rotation.x=re.degToRad(-5),m.add(We)}),m.add(E);const Vt=d(),B=d(),mt=d(),nt=d();Vt.position.set(.35,-.35,-.3),B.position.set(.25,-.45,.3),mt.position.set(.3,.1,-.2),nt.position.set(.25,.18,.4),Vt.scale.set(.3,.3,.3),B.scale.set(.28,.28,.28),mt.scale.set(.25,.25,.25),nt.scale.set(.23,.23,.23),B.rotation.z=Math.PI/4,mt.rotation.z=-Math.PI/4,nt.rotation.y=-Math.PI/2,m.add(Vt),m.add(B),m.add(mt),m.add(nt);const J=new Mn;J.moveTo(-.5,0),J.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),J.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),J.bezierCurveTo(-.05,.6,.05,.6,.15,.4),J.bezierCurveTo(.25,.5,.25,.85,.5,.8),J.bezierCurveTo(1,.6,.75,.25,.5,0),J.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const yt={depth:.3,bevelEnabled:!1},vt=new Cn(J,yt),Nt=new ti({color:0}),Yt=new R(vt,Nt);Yt.scale.set(.3,.3,.6),Yt.rotation.x=0,Yt.rotation.z=0,Yt.position.set(.26,.35,.25),m.add(Yt);const Jt=new R(vt,Nt);Jt.scale.set(.5,.5,.5),Jt.position.set(.4,-.1,.54),m.add(Jt);const Kt=new R(vt,Nt);Kt.scale.set(.5,.5,.5),Kt.position.set(.32,-.35,.65),m.add(Kt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const Qt=[Yt,Jt,Kt],ne=new Up,ve=[0,Math.PI/2,Math.PI,0,Math.PI/3];let pe=.05,ge=.25,Ce=0;f(),ke(()=>t.bodyPosition,he=>{m.position.set(he.x,he.y,he.z)}),ke(()=>t.cameraPosition,he=>{x.position.set(t.bodyPosition.x,1,he),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(an,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",X1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",q1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),$1=xi(Y1,[["__scopeId","data-v-5eff72b3"]]),K1={class:"pixel-controls"},j1={class:"side-buttons"},Z1=zn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=kt(null);let i=kt(!1),s=kt(!1),r=kt(!1),o=kt(!1);si(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),q.rotation.y+=.03,Nt+=nt,Yt+=J,p.position.y=t.bodyPosition.y+Math.sin(Nt)*vt,q.position.y=t.bodyPosition.y+Math.sin(Yt)*yt,Vt.uniforms.u_time.value+=.25,x.render(f,_)};const f=new ii,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),x=new ni({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Zt,m=new Zt;f.add(m);const b=new Wi(16777215,2);f.add(b);const S=new Vi(16777215,4);S.position.set(5,5,5),f.add(S);const w=new ki(16777215,5,50);w.position.set(0,2,4),f.add(w);const F=new Hi,I=F.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=Ge,I.repeat.set(2,2);const P=F.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Ge,P.repeat.set(1,1);const O=new Lt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:ce}),it=new Lt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new Lt({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Lt({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:ce}),j=new Lt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:ce}),H=new Lt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:ce}),Z=new Et(1,32,32,0,Math.PI),lt=new R(Z,O),W=new R(Z,j);lt.scale.set(.85,.85,.8),W.scale.set(.85,.85,.8),lt.position.y=-.2,W.position.y=-.2,lt.rotation.y=Math.PI/2,W.rotation.y=Math.PI*1.5;const tt=new Te(1,32),V=new R(tt,j);V.scale.set(.85,.85,.8),V.position.set(0,-.2,0),V.rotation.y=Math.PI/2;const gt=new Zt;gt.add(lt),gt.add(W),gt.add(V),p.add(gt);const St=new Et(.6,32,32,0,Math.PI),_t=new R(St,H);_t.scale.set(1,.95,.95),_t.position.set(0,1,0),_t.rotation.y=Math.PI*1.5;const It=new R(St,it);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI/2;const Gt=new Te(.6,32),ot=new R(Gt,j);ot.position.set(0,1,0),ot.rotation.y=Math.PI/2,ot.scale.set(1,.95,.95);const dt=new Zt;dt.add(_t),dt.add(It),dt.add(ot),p.add(dt);const xt=new Et(.25,32,32),N=new R(xt,H);N.position.set(-.45,1.35,-.1),p.add(N);const Q=new R(xt,it);Q.position.set(.45,1.35,-.1),p.add(Q);const at=new Et(.25,32,32,Math.PI/2,Math.PI),ht=new R(at,H);ht.scale.set(1.1,.6,.8),ht.position.set(0,.84,.5),ht.rotation.y=Math.PI;const bt=new Et(.25,32,32,Math.PI/2,Math.PI),et=new R(bt,it);et.scale.set(1.1,.6,.8),et.position.set(0,.84,.5),et.rotation.y=0;const g=new Te(.25,32),T=new R(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new Zt;L.add(ht),L.add(et),L.add(T),p.add(L);const U=new Mn;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},X=new Cn(U,D),q=new R(X,y);q.scale.set(.35,.35,.35),q.position.set(0,-.05,0),q.rotation.y=Math.PI,q.rotation.x=Math.PI,p.add(q);const M=new Et(.35,32,32),v=new R(M,j);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),p.add(v);const C=new R(M,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),p.add(C);const k=new ae(.2,.22,.6,32),z=new R(k,j);z.position.set(-.4,-1.05,0),p.add(z);const G=new R(k,E);G.position.set(.4,-1.05,0),p.add(G);const ct=new Et(.3,32,32),ut=new R(ct,j);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),p.add(ut);const pt=new R(ct,E);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),p.add(pt);const Tt=new Et(.44,32,32),ft=new R(Tt,E);ft.position.set(-.15,-.45,-.4),p.add(ft);const Mt=new R(Tt,E);Mt.position.set(.15,-.45,-.4),p.add(Mt);const Pt=new Et(.18,32,32),Dt=new R(Pt,j);Dt.position.set(0,-.35,-.8),p.add(Dt);const Rt=new Et(.6,32,32,0,Math.PI*2,0,Math.PI/2),Xt=new Lt({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Ut=new R(Rt,Xt);Ut.position.set(0,-.2,0),Ut.rotation.x=Math.PI,Ut.scale.set(1.25,1.25,1.25),gt.add(Ut);const Vt=new ei({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),B=new R(tt,Vt);B.position.set(0,-.26,0),B.scale.set(.7,.7,.7),B.rotation.x=-Math.PI/2,B.renderOrder=1,gt.add(B),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Jt){const Kt=new He("X",{font:Jt,size:.2,depth:.05}),Qt=new R(Kt,j);Qt.position.set(-.3,.99,.53),Qt.rotation.x=re.degToRad(-5),Qt.rotation.y=re.degToRad(-15),p.add(Qt);const ne=new He("O",{font:Jt,size:.2,depth:.05}),ve=new R(ne,j);ve.position.set(.14,.99,.53),ve.rotation.y=re.degToRad(12),ve.rotation.x=re.degToRad(-5),p.add(ve)}),Dt.renderOrder=1,p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let nt=.05,J=.06,yt=.2,vt=.25,Nt=0,Yt=0;d(),ke(()=>t.bodyPosition,Jt=>{p.position.set(Jt.x,Jt.y,Jt.z)}),ke(()=>t.cameraPosition,Jt=>{_.position.set(t.bodyPosition.x,1,Jt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(_i(),vi(an,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",K1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",j1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),J1=xi(Z1,[["__scopeId","data-v-eb44448e"]]),Q1={class:"pixel-controls"},tE={class:"side-buttons"},eE={class:"directional-buttons"},nE={class:"horizontal-buttons"},na=.1,ia=.05,sa=.08,iE=zn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=kt(null);let i=kt(!1),s=kt(!1),r=kt(!1),o=kt(!1);const a=Ps(null),l=kt(!1),c=kt(!1),h=kt(!1),u=kt(!1),d=Ps(null),f=Ps(null),_=kt(!1),x=kt(!1),p=kt(!1),m=kt(!1),b=kt(!1),S=kt(!1),w=kt(!1),F=kt(!1),I=new ni({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new ii,O=new Be(75,window.innerWidth/window.innerHeight,.1,1e3);O.position.z=5,si(()=>{if(e.value){let It=function(){const wt=new Zt,Wt=new Et(.15,32,32),$t=new le({color:16764057}),jt=new R(Wt,$t);jt.position.set(0,.4,0),wt.add(jt);const Ht=new ba(.08,.15,32),oe=new le({color:16764057}),de=new R(Ht,oe);de.position.set(-.1,.55,0),de.rotation.z=Math.PI/6,wt.add(de);const xe=new R(Ht,oe);xe.position.set(.1,.55,0),xe.rotation.z=-Math.PI/6,wt.add(xe);const Xe=new ae(.12,.15,.3,32),ue=new le({color:16764057}),qt=new R(Xe,ue);qt.position.set(0,.2,0),wt.add(qt);const Ne=new ae(.05,.05,.2,32),At=new le({color:16764057}),ye=new R(Ne,At);ye.position.set(-.07,-.05,.05),wt.add(ye);const Ie=new R(Ne,At);Ie.position.set(.07,-.05,.05),wt.add(Ie);const _e=new ae(.04,.04,.2,32),je=new le({color:16764057}),me=new R(_e,q);me.position.set(-.15,.25,0),me.rotation.z=Math.PI/4,wt.add(me);const Fe=new R(_e,je);Fe.position.set(.15,.25,0),Fe.rotation.z=-Math.PI/4,wt.add(Fe);const dn=new ae(.03,.03,.25,32),Oe=new le({color:16764057}),nn=new R(dn,Oe);return nn.position.set(0,.1,-.2),nn.rotation.x=Math.PI/4,wt.add(nn),wt.scale.set(.75,.75,.75),wt.position.set(.2,0,.2),wt},Gt=function(){const wt=new Zt,Wt=new Et(.2,32,32),$t=new le({color:16764057}),jt=new R(Wt,$t);jt.position.set(0,1,0),wt.add(jt);const Ht=new le({color:16777215}),oe=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const So of oe){const Fp=new Et(So.size,16,16),Nu=new R(Fp,Ht);Nu.position.set(So.x,So.y-.06,So.z-.01),wt.add(Nu)}const de=new le({color:16777215}),xe=new ae(.05,.06,.1,32),Xe=new R(xe,de);Xe.position.set(-.06,.93,.18),Xe.rotation.z=Math.PI/4;const ue=new ae(.05,.06,.1,32),qt=new R(ue,de);qt.position.set(.06,.93,.18),qt.rotation.z=-Math.PI/4;const Ne=new Xa(.12,.05,16,100),At=new le({color:16777215}),ye=new R(Ne,At);ye.position.set(0,1.15,0),ye.rotation.x=Math.PI/2,wt.add(ye);const Ie=new ba(.15,.3,32),_e=new le({color:16711680}),je=new R(Ie,_e);je.position.set(0,1.3,0),wt.add(je);const me=new Et(.05,32,32),Fe=new le({color:16777215}),dn=new R(me,Fe);dn.position.set(0,1.43,0),wt.add(dn);const Oe=new ae(.2,.25,.6,32),nn=new le({color:16711680}),oi=new R(Oe,nn);oi.position.set(0,.5,0),wt.add(oi);const Hn=new ae(.25,.25,.1,32),ai=new le({color:0}),kn=new R(Hn,ai);kn.position.set(0,.4,.005),wt.add(kn);const fn=new ae(.06,.06,.3,32),Dn=new le({color:16711680}),Un=new R(fn,Dn);Un.position.set(-.25,.75,0),Un.rotation.z=Math.PI/4,wt.add(Un);const Vn=new R(fn,Dn);Vn.position.set(.25,.75,0),Vn.rotation.z=-Math.PI/4,wt.add(Vn);const Sn=new Et(.07,32,32),wn=new le({color:16777215}),ds=new R(Sn,wn);ds.position.set(-.35,.85,0),wt.add(ds);const Os=new R(Sn,wn);Os.position.set(.35,.85,0),wt.add(Os);const Bs=new ae(.1,.1,.15,32),Rr=new le({color:16711680}),zs=new ae(.08,.08,.4,32),Gs=new le({color:0}),Pu=new R(zs,Gs);Pu.position.set(-.1,.1,0),wt.add(Pu);const Cu=new R(Bs,Rr);Cu.position.set(-.1,-.05,0),wt.add(Cu);const Iu=new R(zs,Gs);Iu.position.set(.1,.1,0),wt.add(Iu);const Lu=new R(Bs,Rr);Lu.position.set(.1,-.05,0),wt.add(Lu),wt.scale.set(.4,.4,.4),wt.position.set(.2,-.1,0);const Du=new Et(.12,32,32),Uu=new le({color:16711680}),qa=new R(Du,Uu);qa.scale.set(1,.7,1.5),qa.position.set(-.1,-.12,.12),wt.add(qa);const Ya=new R(Du,Uu);return Ya.scale.set(1,.7,1.5),Ya.position.set(.1,-.1,.12),wt.add(Ya),wt},ot=function(){requestAnimationFrame(ot),i.value&&(Q.rotation.y+=.03),s.value&&(Q.rotation.y-=.03),r.value&&(Q.rotation.x-=.03),o.value&&(Q.rotation.x+=.03),he.rotation.y+=.04,N.render(dt,xt)};const dt=new ii,xt=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),N=new ni({antialias:!0,alpha:!0});N.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(N.domElement);const Q=new Zt,at=new Zt;dt.add(at);const ht=new Wi(16777215,2);dt.add(ht);const bt=new Vi(16777215,4);bt.position.set(5,5,5),dt.add(bt);const et=new ki(16777215,5,50);et.position.set(0,2,4),dt.add(et);const g=new Hi,T=g.load("/3d-bear-arts/assets/house.jpg");T.repeat.set(1,1);const L=g.load("/3d-bear-arts/assets/house.jpg"),U=g.load("/3d-bear-arts/assets/sun.jpg");T.wrapS=T.wrapT=Ge,T.repeat.set(.5,1),U.wrapS=U.wrapT=Ge,new Lt({color:11592447,metalness:.05,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transmission:.9,ior:1.5,opacity:.85,transparent:!0,envMapIntensity:1}),new Lt({color:11592447,metalness:.05,roughness:.1,transparent:!0,opacity:.5,transmission:.95,ior:1.5,depthWrite:!1,depthTest:!0,side:ce});const D=new Lt({color:16777215,metalness:0,roughness:.05,transparent:!0,opacity:.5,clearcoat:1,clearcoatRoughness:.2,transmission:1,ior:1.5,envMapIntensity:1,depthTest:!0}),X=new Lt({color:16777215,metalness:.05,roughness:.05,transparent:!0,opacity:.3,transmission:.95,ior:1.5,depthWrite:!1,depthTest:!0,envMapIntensity:.8,side:ce}),q=new Lt({color:16777215,metalness:.05,map:L,roughness:.2,transparent:!0,opacity:.7,transmission:.4,ior:1.5,depthWrite:!0,envMapIntensity:1,side:ce});new Lt({color:16777215,metalness:.05,roughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.5,depthWrite:!0,envMapIntensity:1,side:ce});const M=new Lt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),v=new Et(1,32,32,0,Math.PI),C=new R(v,D),k=new R(v,q);C.scale.set(.85,.85,.8),k.scale.set(.85,.85,.8),C.position.y=-.2,k.position.y=-.2,C.rotation.y=Math.PI/2,k.rotation.y=Math.PI*1.5;const z=new Te(1,32),G=new R(z,q);G.scale.set(.85,.85,.8),G.position.set(0,-.2,0),G.rotation.y=Math.PI/2;const ct=new Zt;ct.add(C),ct.add(k),ct.add(G),Q.add(ct);const ut=new Et(.6,32,32,0,Math.PI),pt=new R(ut,q);pt.scale.set(1,.95,.95),pt.position.set(0,1,0),pt.rotation.y=Math.PI*1.5;const Tt=new R(ut,D);Tt.scale.set(1,.95,.95),Tt.position.set(0,1,0),Tt.rotation.y=Math.PI/2;const ft=new Te(.6,32),Mt=new R(ft,q);Mt.position.set(0,1,0),Mt.rotation.y=Math.PI/2,Mt.scale.set(1,.95,.95);const Pt=new Zt;Pt.add(pt),Pt.add(Tt),Pt.add(Mt),Q.add(Pt);const Dt=new Et(.6,32,32,0,Math.PI*2,0,Math.PI/2);new Lt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1});const Rt=new Lt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7}),Xt=new R(Dt,Rt);Xt.position.set(0,-.2,0),Xt.rotation.x=Math.PI,Xt.scale.set(1.25,1.25,1.25),ct.add(Xt);const Ut=new Lt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:ce,transparent:!1}),Vt=new R(z,Ut);Vt.scale.set(.7,.7,.7),Vt.position.set(0,-.3,0),Vt.rotation.x=Math.PI/2,Vt.renderOrder=1,ct.add(Vt),Q.add(ct);const B=new ei({transparent:!1,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),mt=new R(z,B);mt.position.set(0,-.2,0),mt.scale.set(.7,.7,.7),mt.rotation.x=-Math.PI/2,mt.renderOrder=2,ct.add(mt);const nt=new Et(.25,32,32),J=new R(nt,q);J.position.set(-.45,1.35,-.1),Q.add(J);const yt=new R(nt,D);yt.position.set(.45,1.35,-.1),Q.add(yt);const vt=new Et(.25,32,32,Math.PI/2,Math.PI),Nt=new R(vt,M);Nt.scale.set(1.1,.6,.8),Nt.position.set(0,.84,.5),Nt.rotation.y=Math.PI;const Yt=new Et(.25,32,32,Math.PI/2,Math.PI),Jt=new R(Yt,D);Jt.scale.set(1.1,.6,.8),Jt.position.set(0,.84,.5),Jt.rotation.y=0;const Kt=new Te(.25,32),Qt=new R(Kt,q);Qt.scale.set(.8,.6,.8),Qt.position.set(0,.84,.5),Qt.rotation.y=Math.PI/2;const ne=new Zt;ne.add(Nt),ne.add(Jt),ne.add(Qt),Q.add(ne);const ve=new Lt({color:8374441,metalness:1,roughness:.25,envMap:U,clearcoat:.7,clearcoatRoughness:.3}),pe=new Mn;pe.moveTo(0,0),pe.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),pe.bezierCurveTo(-.6,.3,0,.6,0,1),pe.bezierCurveTo(0,.6,.6,.3,.6,0),pe.bezierCurveTo(.6,-.3,0,-.3,0,0);const ge={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Ce=new Cn(pe,ge),he=new R(Ce,ve);he.scale.set(.2,.2,.2),he.position.set(.25,1.2,0),he.rotation.y=Math.PI,he.rotation.x=Math.PI,Q.add(he);const Ue=new Et(.35,32,32),Ee=new R(Ue,q);Ee.scale.set(.75,1.25,.65),Ee.position.set(-.7,-.15,.2),Q.add(Ee);const Ve=new R(Ue,X);Ve.scale.set(.75,1.25,.65),Ve.position.set(.7,-.15,.2),Q.add(Ve);const We=new ae(.2,.22,.6,32),In=new R(We,q);In.position.set(-.4,-1.05,0),Q.add(In);const Mi=new R(We,D);Mi.position.set(.4,-1.05,0),Q.add(Mi);const Ln=new Et(.3,32,32),ri=new R(Ln,q);ri.scale.set(1,.72,1.5),ri.position.set(-.4,-1.45,.17),Q.add(ri);const hs=new R(Ln,D);hs.scale.set(1,.72,1.5),hs.position.set(.4,-1.45,.17),Q.add(hs);const A=new Et(.44,32,32),$=new R(A,q);$.position.set(-.15,-.45,-.4),Q.add($);const rt=new R(A,M);rt.position.set(.15,-.45,-.4),Q.add(rt);const st=new Et(.18,32,32),K=new R(st,M);K.position.set(0,-.35,-.8),Q.add(K),new Xi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(wt){const Wt=new He("X",{font:wt,size:.2,depth:.05}),$t=new R(Wt,M);$t.position.set(-.3,.99,.53),$t.rotation.x=re.degToRad(-5),$t.rotation.y=re.degToRad(-15),Q.add($t);const jt=new He("O",{font:wt,size:.2,depth:.05}),Ht=new R(jt,M);Ht.position.set(.14,.99,.53),Ht.rotation.y=re.degToRad(12),Ht.rotation.x=re.degToRad(-5),Q.add(Ht)}),It();const Ot=Gt();Q.add(Ot),Q.scale.set(1.4,1.4,1.4),dt.add(Q),Q.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),xt.position.set(t.bodyPosition.x,1,t.cameraPosition),xt.lookAt(t.bodyPosition.x,0,0),xt.position.z=4,Q.rotation.x=.1,ot(),ke(()=>t.bodyPosition,wt=>{Q.position.set(wt.x,wt.y,wt.z)}),ke(()=>t.cameraPosition,wt=>{xt.position.set(t.bodyPosition.x,1,wt),xt.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{xt.aspect=window.innerWidth/window.innerHeight,xt.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight)})}});function it(){s.value=!0}function y(){i.value=!0}function E(){r.value=!0}function j(){o.value=!0}function H(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}const Z=()=>{l.value=!0,console.log(l.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},lt=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},W=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},tt=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},V=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},gt=()=>{requestAnimationFrame(gt),a.value&&(l.value&&(a.value.position.z-=na),c.value&&(a.value.position.z+=na),h.value&&(a.value.position.x-=na),u.value&&(a.value.position.x+=na)),I.render(P,O)},St=()=>{requestAnimationFrame(St),d.value&&(_.value&&(d.value.position.z-=ia),x.value&&(d.value.position.z+=ia),p.value&&(d.value.position.x-=ia),m.value&&(d.value.position.x+=ia))};St(),gt();const _t=()=>{requestAnimationFrame(_t),f.value&&(b.value&&(f.value.position.z-=sa),S.value&&(f.value.position.z+=sa),w.value&&(f.value.position.x-=sa),F.value&&(f.value.position.x+=sa))};return _t(),(It,Gt)=>(_i(),vi(an,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Bn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",Q1,[Ft("button",{class:"pixel-btn up",onMousedown:E,onMouseup:H},"UP",32),Ft("div",tE,[Ft("button",{class:"pixel-btn left",onMousedown:it,onMouseup:H},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:y,onMouseup:H},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:j,onMouseup:H},"DOWN",32)]),Ft("div",eE,[Ft("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:Z,onMouseup:V},"UP",32),Ft("div",nE,[Ft("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:W,onMouseup:V},"LEFT",32),Ft("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:tt,onMouseup:V},"RIGHT",32)]),Ft("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:lt,onMouseup:V},"DOWN",32)])],64))}}),sE=xi(iE,[["__scopeId","data-v-55f08240"]]),rE=[{path:"/3d-bear-arts/leather",name:"Leather",component:y1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:S1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:T1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:C1},{path:"/3d-bear-arts/water",name:"Water Bear",component:U1},{path:"/3d-bear-arts/",name:"Water",component:W1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:$1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:J1},{path:"/3d-bear-arts/aquar",name:"Aquar",component:sE}],oE=h_({history:Hg(),routes:rE}),Np=rg(ug);Np.use(oE);Np.mount("#app");
