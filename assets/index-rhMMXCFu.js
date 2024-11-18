(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Fe={},uo=[],Ai=()=>{},Hp=()=>!1,Pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),jl=n=>n.startsWith("onUpdate:"),un=Object.assign,$l=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},kp=Object.prototype.hasOwnProperty,Ce=(n,t)=>kp.call(n,t),fe=Array.isArray,qo=n=>Ca(n)==="[object Map]",Vp=n=>Ca(n)==="[object Set]",he=n=>typeof n=="function",an=n=>typeof n=="string",Po=n=>typeof n=="symbol",Je=n=>n!==null&&typeof n=="object",Nd=n=>(Je(n)||he(n))&&he(n.then)&&he(n.catch),Wp=Object.prototype.toString,Ca=n=>Wp.call(n),Xp=n=>Ca(n).slice(8,-1),qp=n=>Ca(n)==="[object Object]",Kl=n=>an(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Yo=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Yp=/-(\w)/g,Qn=Ia(n=>n.replace(Yp,(t,e)=>e?e.toUpperCase():"")),jp=/\B([A-Z])/g,Hs=Ia(n=>n.replace(jp,"-$1").toLowerCase()),La=Ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ka=Ia(n=>n?`on${La(n)}`:""),_s=(n,t)=>!Object.is(n,t),Za=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Fd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},$p=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Nu;const Od=()=>Nu||(Nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(n){if(fe(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=an(i)?Qp(i):Zl(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(an(n)||Je(n))return n}const Kp=/;(?![^(]*\))/g,Zp=/:([^]+)/,Jp=/\/\*[^]*?\*\//g;function Qp(n){const t={};return n.replace(Jp,"").split(Kp).forEach(e=>{if(e){const i=e.split(Zp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Yn(n){let t="";if(an(n))t=n;else if(fe(n))for(let e=0;e<n.length;e++){const i=Yn(n[e]);i&&(t+=i+" ")}else if(Je(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const tm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",em=Yl(tm);function Bd(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hn;class nm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Hn,!t&&Hn&&(this.index=(Hn.scopes||(Hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Hn;try{return Hn=this,t()}finally{Hn=e}}}on(){Hn=this}off(){Hn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function im(){return Hn}let Oe;const Ja=new WeakSet;class zd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Hn&&Hn.active&&Hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fu(this),kd(this);const t=Oe,e=di;Oe=this,di=!0;try{return this.fn()}finally{Vd(this),Oe=t,di=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)tu(t);this.deps=this.depsTail=void 0,Fu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let Gd=0,ao;function Hd(n){n.flags|=8,n.next=ao,ao=n}function Jl(){Gd++}function Ql(){if(--Gd>0)return;let n;for(;ao;){let t=ao,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=ao,ao=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function kd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Vd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),tu(i),sm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Wc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Wd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Wd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===sr))return;n.globalVersion=sr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Wc(n)){n.flags&=-3;return}const e=Oe,i=di;Oe=n,di=!0;try{kd(n);const s=n.fn(n._value);(t.version===0||_s(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Oe=e,di=i,Vd(n),n.flags&=-3}}function tu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)tu(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function sm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let di=!0;const Xd=[];function xs(){Xd.push(di),di=!1}function ys(){const n=Xd.pop();di=n===void 0?!0:n}function Fu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Oe;Oe=void 0;try{t()}finally{Oe=e}}}let sr=0;class om{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Oe||!di||Oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Oe)e=this.activeLink=new om(Oe,this),Oe.deps?(e.prevDep=Oe.depsTail,Oe.depsTail.nextDep=e,Oe.depsTail=e):Oe.deps=Oe.depsTail=e,qd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Oe.depsTail,e.nextDep=void 0,Oe.depsTail.nextDep=e,Oe.depsTail=e,Oe.deps===e&&(Oe.deps=i)}return e}trigger(t){this.version++,sr++,this.notify(t)}notify(t){Jl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ql()}}}function qd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)qd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Xc=new WeakMap,Fs=Symbol(""),qc=Symbol(""),or=Symbol("");function xn(n,t,e){if(di&&Oe){let i=Xc.get(n);i||Xc.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new eu),s.target=n,s.map=i,s.key=e),s.track()}}function Ki(n,t,e,i,s,o){const r=Xc.get(n);if(!r){sr++;return}const a=c=>{c&&c.trigger()};if(Jl(),t==="clear")r.forEach(a);else{const c=fe(n),l=c&&Kl(e);if(c&&e==="length"){const h=Number(i);r.forEach((u,d)=>{(d==="length"||d===or||!Po(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),l&&a(r.get(or)),t){case"add":c?l&&a(r.get("length")):(a(r.get(Fs)),qo(n)&&a(r.get(qc)));break;case"delete":c||(a(r.get(Fs)),qo(n)&&a(r.get(qc)));break;case"set":qo(n)&&a(r.get(Fs));break}}Ql()}function Vs(n){const t=Le(n);return t===n?t:(xn(t,"iterate",or),fi(n)?t:t.map(An))}function nu(n){return xn(n=Le(n),"iterate",or),n}const rm={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,An)},concat(...n){return Vs(this).concat(...n.map(t=>fe(t)?Vs(t):t))},entries(){return Qa(this,"entries",n=>(n[1]=An(n[1]),n))},every(n,t){return Oi(this,"every",n,t,void 0,arguments)},filter(n,t){return Oi(this,"filter",n,t,e=>e.map(An),arguments)},find(n,t){return Oi(this,"find",n,t,An,arguments)},findIndex(n,t){return Oi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Oi(this,"findLast",n,t,An,arguments)},findLastIndex(n,t){return Oi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Oi(this,"forEach",n,t,void 0,arguments)},includes(...n){return tc(this,"includes",n)},indexOf(...n){return tc(this,"indexOf",n)},join(n){return Vs(this).join(n)},lastIndexOf(...n){return tc(this,"lastIndexOf",n)},map(n,t){return Oi(this,"map",n,t,void 0,arguments)},pop(){return Uo(this,"pop")},push(...n){return Uo(this,"push",n)},reduce(n,...t){return Ou(this,"reduce",n,t)},reduceRight(n,...t){return Ou(this,"reduceRight",n,t)},shift(){return Uo(this,"shift")},some(n,t){return Oi(this,"some",n,t,void 0,arguments)},splice(...n){return Uo(this,"splice",n)},toReversed(){return Vs(this).toReversed()},toSorted(n){return Vs(this).toSorted(n)},toSpliced(...n){return Vs(this).toSpliced(...n)},unshift(...n){return Uo(this,"unshift",n)},values(){return Qa(this,"values",An)}};function Qa(n,t,e){const i=nu(n),s=i[t]();return i!==n&&!fi(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const am=Array.prototype;function Oi(n,t,e,i,s,o){const r=nu(n),a=r!==n&&!fi(n),c=r[t];if(c!==am[t]){const u=c.apply(n,o);return a?An(u):u}let l=e;r!==n&&(a?l=function(u,d){return e.call(this,An(u),d,n)}:e.length>2&&(l=function(u,d){return e.call(this,u,d,n)}));const h=c.call(r,l,i);return a&&s?s(h):h}function Ou(n,t,e,i){const s=nu(n);let o=e;return s!==n&&(fi(n)?e.length>3&&(o=function(r,a,c){return e.call(this,r,a,c,n)}):o=function(r,a,c){return e.call(this,r,An(a),c,n)}),s[t](o,...i)}function tc(n,t,e){const i=Le(n);xn(i,"iterate",or);const s=i[t](...e);return(s===-1||s===!1)&&ru(e[0])?(e[0]=Le(e[0]),i[t](...e)):s}function Uo(n,t,e=[]){xs(),Jl();const i=Le(n)[t].apply(n,e);return Ql(),ys(),i}const cm=Yl("__proto__,__v_isRef,__isVue"),Yd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Po));function lm(n){Po(n)||(n=String(n));const t=Le(this);return xn(t,"has",n),t.hasOwnProperty(n)}class jd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?wm:Jd:o?Zd:Kd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=fe(t);if(!s){let c;if(r&&(c=rm[e]))return c;if(e==="hasOwnProperty")return lm}const a=Reflect.get(t,e,vn(t)?t:i);return(Po(e)?Yd.has(e):cm(e))||(s||xn(t,"get",e),o)?a:vn(a)?r&&Kl(e)?a:a.value:Je(a)?s?tf(a):Ua(a):a}}class $d extends jd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const c=Os(o);if(!fi(i)&&!Os(i)&&(o=Le(o),i=Le(i)),!fe(t)&&vn(o)&&!vn(i))return c?!1:(o.value=i,!0)}const r=fe(t)&&Kl(e)?Number(e)<t.length:Ce(t,e),a=Reflect.set(t,e,i,vn(t)?t:s);return t===Le(s)&&(r?_s(i,o)&&Ki(t,"set",e,i):Ki(t,"add",e,i)),a}deleteProperty(t,e){const i=Ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Ki(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Po(e)||!Yd.has(e))&&xn(t,"has",e),i}ownKeys(t){return xn(t,"iterate",fe(t)?"length":Fs),Reflect.ownKeys(t)}}class um extends jd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const hm=new $d,dm=new um,fm=new $d(!0);const iu=n=>n,Da=n=>Reflect.getPrototypeOf(n);function br(n,t,e=!1,i=!1){n=n.__v_raw;const s=Le(n),o=Le(t);e||(_s(t,o)&&xn(s,"get",t),xn(s,"get",o));const{has:r}=Da(s),a=i?iu:e?au:An;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function Er(n,t=!1){const e=this.__v_raw,i=Le(e),s=Le(n);return t||(_s(n,s)&&xn(i,"has",n),xn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Tr(n,t=!1){return n=n.__v_raw,!t&&xn(Le(n),"iterate",Fs),Reflect.get(n,"size",n)}function Bu(n,t=!1){!t&&!fi(n)&&!Os(n)&&(n=Le(n));const e=Le(this);return Da(e).has.call(e,n)||(e.add(n),Ki(e,"add",n,n)),this}function zu(n,t,e=!1){!e&&!fi(t)&&!Os(t)&&(t=Le(t));const i=Le(this),{has:s,get:o}=Da(i);let r=s.call(i,n);r||(n=Le(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?_s(t,a)&&Ki(i,"set",n,t):Ki(i,"add",n,t),this}function Gu(n){const t=Le(this),{has:e,get:i}=Da(t);let s=e.call(t,n);s||(n=Le(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&Ki(t,"delete",n,void 0),o}function Hu(){const n=Le(this),t=n.size!==0,e=n.clear();return t&&Ki(n,"clear",void 0,void 0),e}function Ar(n,t){return function(i,s){const o=this,r=o.__v_raw,a=Le(r),c=t?iu:n?au:An;return!n&&xn(a,"iterate",Fs),r.forEach((l,h)=>i.call(s,c(l),c(h),o))}}function Rr(n,t,e){return function(...i){const s=this.__v_raw,o=Le(s),r=qo(o),a=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,l=s[n](...i),h=e?iu:t?au:An;return!t&&xn(o,"iterate",c?qc:Fs),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function ns(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function pm(){const n={get(o){return br(this,o)},get size(){return Tr(this)},has:Er,add:Bu,set:zu,delete:Gu,clear:Hu,forEach:Ar(!1,!1)},t={get(o){return br(this,o,!1,!0)},get size(){return Tr(this)},has:Er,add(o){return Bu.call(this,o,!0)},set(o,r){return zu.call(this,o,r,!0)},delete:Gu,clear:Hu,forEach:Ar(!1,!0)},e={get(o){return br(this,o,!0)},get size(){return Tr(this,!0)},has(o){return Er.call(this,o,!0)},add:ns("add"),set:ns("set"),delete:ns("delete"),clear:ns("clear"),forEach:Ar(!0,!1)},i={get(o){return br(this,o,!0,!0)},get size(){return Tr(this,!0)},has(o){return Er.call(this,o,!0)},add:ns("add"),set:ns("set"),delete:ns("delete"),clear:ns("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Rr(o,!1,!1),e[o]=Rr(o,!0,!1),t[o]=Rr(o,!1,!0),i[o]=Rr(o,!0,!0)}),[n,e,t,i]}const[mm,gm,_m,vm]=pm();function su(n,t){const e=t?n?vm:_m:n?gm:mm;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Ce(e,s)&&s in i?e:i,s,o)}const xm={get:su(!1,!1)},ym={get:su(!1,!0)},Mm={get:su(!0,!1)};const Kd=new WeakMap,Zd=new WeakMap,Jd=new WeakMap,wm=new WeakMap;function Sm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bm(n){return n.__v_skip||!Object.isExtensible(n)?0:Sm(Xp(n))}function Ua(n){return Os(n)?n:ou(n,!1,hm,xm,Kd)}function Qd(n){return ou(n,!1,fm,ym,Zd)}function tf(n){return ou(n,!0,dm,Mm,Jd)}function ou(n,t,e,i,s){if(!Je(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=bm(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function jo(n){return Os(n)?jo(n.__v_raw):!!(n&&n.__v_isReactive)}function Os(n){return!!(n&&n.__v_isReadonly)}function fi(n){return!!(n&&n.__v_isShallow)}function ru(n){return n?!!n.__v_raw:!1}function Le(n){const t=n&&n.__v_raw;return t?Le(t):n}function Em(n){return!Ce(n,"__v_skip")&&Object.isExtensible(n)&&Fd(n,"__v_skip",!0),n}const An=n=>Je(n)?Ua(n):n,au=n=>Je(n)?tf(n):n;function vn(n){return n?n.__v_isRef===!0:!1}function Jt(n){return ef(n,!1)}function ho(n){return ef(n,!0)}function ef(n,t){return vn(n)?n:new Tm(n,t)}class Tm{constructor(t,e){this.dep=new eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Le(t),this._value=e?t:An(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||fi(t)||Os(t);t=i?t:Le(t),_s(t,e)&&(this._rawValue=t,this._value=i?t:An(t),this.dep.trigger())}}function fo(n){return vn(n)?n.value:n}const Am={get:(n,t,e)=>t==="__v_raw"?n:fo(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return vn(s)&&!vn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function nf(n){return jo(n)?n:new Proxy(n,Am)}class Rm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Hd(this),!0}get value(){const t=this.dep.track();return Wd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pm(n,t,e=!1){let i,s;return he(n)?i=n:(i=n.get,s=n.set),new Rm(i,s,e)}const Pr={},ga=new WeakMap;let Cs;function Cm(n,t=!1,e=Cs){if(e){let i=ga.get(e);i||ga.set(e,i=[]),i.push(n)}}function Im(n,t,e=Fe){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:c}=e,l=b=>s?b:fi(b)||s===!1||s===0?Yi(b,1):Yi(b);let h,u,d,f,_=!1,x=!1;if(vn(n)?(u=()=>n.value,_=fi(n)):jo(n)?(u=()=>l(n),_=!0):fe(n)?(x=!0,_=n.some(b=>jo(b)||fi(b)),u=()=>n.map(b=>{if(vn(b))return b.value;if(jo(b))return l(b);if(he(b))return c?c(b,2):b()})):he(n)?t?u=c?()=>c(n,2):n:u=()=>{if(d){xs();try{d()}finally{ys()}}const b=Cs;Cs=h;try{return c?c(n,3,[f]):n(f)}finally{Cs=b}}:u=Ai,t&&s){const b=u,z=s===!0?1/0:s;u=()=>Yi(b(),z)}const m=im(),p=()=>{h.stop(),m&&$l(m.effects,h)};if(o&&t){const b=t;t=(...z)=>{b(...z),p()}}let T=x?new Array(n.length).fill(Pr):Pr;const w=b=>{if(!(!(h.flags&1)||!h.dirty&&!b))if(t){const z=h.run();if(s||_||(x?z.some((L,P)=>_s(L,T[P])):_s(z,T))){d&&d();const L=Cs;Cs=h;try{const P=[z,T===Pr?void 0:x&&T[0]===Pr?[]:T,f];c?c(t,3,P):t(...P),T=z}finally{Cs=L}}}else h.run()};return a&&a(w),h=new zd(u),h.scheduler=r?()=>r(w,!1):w,f=b=>Cm(b,!1,h),d=h.onStop=()=>{const b=ga.get(h);if(b){if(c)c(b,4);else for(const z of b)z();ga.delete(h)}},t?i?w(!0):T=h.run():r?r(w.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function Yi(n,t=1/0,e){if(t<=0||!Je(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,vn(n))Yi(n.value,t,e);else if(fe(n))for(let i=0;i<n.length;i++)Yi(n[i],t,e);else if(Vp(n)||qo(n))n.forEach(i=>{Yi(i,t,e)});else if(qp(n)){for(const i in n)Yi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Yi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vr(n,t,e,i){try{return i?n(...i):n()}catch(s){Na(s,t,e)}}function Pi(n,t,e,i){if(he(n)){const s=vr(n,t,e,i);return s&&Nd(s)&&s.catch(o=>{Na(o,t,e)}),s}if(fe(n)){const s=[];for(let o=0;o<n.length;o++)s.push(Pi(n[o],t,e,i));return s}}function Na(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Fe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,c,l)===!1)return}a=a.parent}if(o){xs(),vr(o,null,10,[n,c,l]),ys();return}}Lm(n,e,s,i,r)}function Lm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let rr=!1,Yc=!1;const Rn=[];let Si=0;const po=[];let us=null,so=0;const sf=Promise.resolve();let cu=null;function of(n){const t=cu||sf;return n?t.then(this?n.bind(this):n):t}function Dm(n){let t=rr?Si+1:0,e=Rn.length;for(;t<e;){const i=t+e>>>1,s=Rn[i],o=ar(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function lu(n){if(!(n.flags&1)){const t=ar(n),e=Rn[Rn.length-1];!e||!(n.flags&2)&&t>=ar(e)?Rn.push(n):Rn.splice(Dm(t),0,n),n.flags|=1,rf()}}function rf(){!rr&&!Yc&&(Yc=!0,cu=sf.then(cf))}function Um(n){fe(n)?po.push(...n):us&&n.id===-1?us.splice(so+1,0,n):n.flags&1||(po.push(n),n.flags|=1),rf()}function ku(n,t,e=rr?Si+1:0){for(;e<Rn.length;e++){const i=Rn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Rn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function af(n){if(po.length){const t=[...new Set(po)].sort((e,i)=>ar(e)-ar(i));if(po.length=0,us){us.push(...t);return}for(us=t,so=0;so<us.length;so++){const e=us[so];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}us=null,so=0}}const ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function cf(n){Yc=!1,rr=!0;try{for(Si=0;Si<Rn.length;Si++){const t=Rn[Si];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),vr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Si<Rn.length;Si++){const t=Rn[Si];t&&(t.flags&=-2)}Si=0,Rn.length=0,af(),rr=!1,cu=null,(Rn.length||po.length)&&cf()}}let kn=null,lf=null;function _a(n){const t=kn;return kn=n,lf=n&&n.type.__scopeId||null,t}function ri(n,t=kn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Ju(-1);const o=_a(t);let r;try{r=n(...s)}finally{_a(o),i._d&&Ju(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Nm(n,t){if(kn===null)return n;const e=Ga(kn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,c=Fe]=t[s];o&&(he(o)&&(o={mounted:o,updated:o}),o.deep&&Yi(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:c}))}return n}function ws(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let c=a.dir[i];c&&(xs(),Pi(c,e,8,[n.el,a,n,t]),ys())}}const Fm=Symbol("_vte"),Om=n=>n.__isTeleport;function uu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,uu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function jn(n,t){return he(n)?un({name:n.name},t,{setup:n}):n}function uf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function jc(n,t,e,i,s=!1){if(fe(n)){n.forEach((_,x)=>jc(_,t&&(fe(t)?t[x]:t),e,i,s));return}if($o(i)&&!s)return;const o=i.shapeFlag&4?Ga(i.component):i.el,r=s?null:o,{i:a,r:c}=n,l=t&&t.r,h=a.refs===Fe?a.refs={}:a.refs,u=a.setupState,d=Le(u),f=u===Fe?()=>!1:_=>Ce(d,_);if(l!=null&&l!==c&&(an(l)?(h[l]=null,f(l)&&(u[l]=null)):vn(l)&&(l.value=null)),he(c))vr(c,a,12,[r,h]);else{const _=an(c),x=vn(c);if(_||x){const m=()=>{if(n.f){const p=_?f(c)?u[c]:h[c]:c.value;s?fe(p)&&$l(p,o):fe(p)?p.includes(o)||p.push(o):_?(h[c]=[o],f(c)&&(u[c]=h[c])):(c.value=[o],n.k&&(h[n.k]=c.value))}else _?(h[c]=r,f(c)&&(u[c]=r)):x&&(c.value=r,n.k&&(h[n.k]=r))};r?(m.id=-1,Gn(m,e)):m()}}}const $o=n=>!!n.type.__asyncLoader,hf=n=>n.type.__isKeepAlive;function Bm(n,t){df(n,"a",t)}function zm(n,t){df(n,"da",t)}function df(n,t,e=_n){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Fa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)hf(s.parent.vnode)&&Gm(i,t,e,s),s=s.parent}}function Gm(n,t,e,i){const s=Fa(t,n,i,!0);hu(()=>{$l(i[t],s)},e)}function Fa(n,t,e=_n,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{xs();const a=xr(e),c=Pi(t,e,n,r);return a(),ys(),c});return i?s.unshift(o):s.push(o),o}}const ts=n=>(t,e=_n)=>{(!za||n==="sp")&&Fa(n,(...i)=>t(...i),e)},Hm=ts("bm"),ni=ts("m"),km=ts("bu"),Vm=ts("u"),Wm=ts("bum"),hu=ts("um"),Xm=ts("sp"),qm=ts("rtg"),Ym=ts("rtc");function jm(n,t=_n){Fa("ec",n,t)}const $m="components";function Vu(n,t){return Zm($m,n,!0,t)||n}const Km=Symbol.for("v-ndc");function Zm(n,t,e=!0,i=!1){const s=kn||_n;if(s){const o=s.type;{const a=B0(o,!1);if(a&&(a===t||a===Qn(t)||a===La(Qn(t))))return o}const r=Wu(s[n]||o[n],t)||Wu(s.appContext[n],t);return!r&&i?o:r}}function Wu(n,t){return n&&(n[t]||n[Qn(t)]||n[La(Qn(t))])}const $c=n=>n?If(n)?Ga(n):$c(n.parent):null,Ko=un(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$c(n.parent),$root:n=>$c(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>du(n),$forceUpdate:n=>n.f||(n.f=()=>{lu(n.update)}),$nextTick:n=>n.n||(n.n=of.bind(n.proxy)),$watch:n=>v0.bind(n)}),ec=(n,t)=>n!==Fe&&!n.__isScriptSetup&&Ce(n,t),Jm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:c}=n;let l;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(ec(i,t))return r[t]=1,i[t];if(s!==Fe&&Ce(s,t))return r[t]=2,s[t];if((l=n.propsOptions[0])&&Ce(l,t))return r[t]=3,o[t];if(e!==Fe&&Ce(e,t))return r[t]=4,e[t];Kc&&(r[t]=0)}}const h=Ko[t];let u,d;if(h)return t==="$attrs"&&xn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Fe&&Ce(e,t))return r[t]=4,e[t];if(d=c.config.globalProperties,Ce(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return ec(s,t)?(s[t]=e,!0):i!==Fe&&Ce(i,t)?(i[t]=e,!0):Ce(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Fe&&Ce(n,r)||ec(t,r)||(a=o[0])&&Ce(a,r)||Ce(i,r)||Ce(Ko,r)||Ce(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Ce(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Xu(n){return fe(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Kc=!0;function Qm(n){const t=du(n),e=n.proxy,i=n.ctx;Kc=!1,t.beforeCreate&&qu(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:c,inject:l,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:w,unmounted:b,render:z,renderTracked:L,renderTriggered:P,errorCaptured:B,serverPrefetch:Q,expose:y,inheritAttrs:E,components:U,directives:X,filters:it}=t;if(l&&t0(l,i,null),r)for(const st in r){const Y=r[st];he(Y)&&(i[st]=Y.bind(e))}if(s){const st=s.call(e,e);Je(st)&&(n.data=Ua(st))}if(Kc=!0,o)for(const st in o){const Y=o[st],mt=he(Y)?Y.bind(e,e):he(Y.get)?Y.get.bind(e,e):Ai,pt=!he(Y)&&he(Y.set)?Y.set.bind(e):Ai,yt=li({get:mt,set:pt});Object.defineProperty(i,st,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Lt=>yt.value=Lt})}if(a)for(const st in a)ff(a[st],i,e,st);if(c){const st=he(c)?c.call(e):c;Reflect.ownKeys(st).forEach(Y=>{oa(Y,st[Y])})}h&&qu(h,n,"c");function q(st,Y){fe(Y)?Y.forEach(mt=>st(mt.bind(e))):Y&&st(Y.bind(e))}if(q(Hm,u),q(ni,d),q(km,f),q(Vm,_),q(Bm,x),q(zm,m),q(jm,B),q(Ym,L),q(qm,P),q(Wm,T),q(hu,b),q(Xm,Q),fe(y))if(y.length){const st=n.exposed||(n.exposed={});y.forEach(Y=>{Object.defineProperty(st,Y,{get:()=>e[Y],set:mt=>e[Y]=mt})})}else n.exposed||(n.exposed={});z&&n.render===Ai&&(n.render=z),E!=null&&(n.inheritAttrs=E),U&&(n.components=U),X&&(n.directives=X),Q&&uf(n)}function t0(n,t,e=Ai){fe(n)&&(n=Zc(n));for(const i in n){const s=n[i];let o;Je(s)?"default"in s?o=Zi(s.from||i,s.default,!0):o=Zi(s.from||i):o=Zi(s),vn(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function qu(n,t,e){Pi(fe(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ff(n,t,e,i){let s=i.includes(".")?Af(e,i):()=>e[i];if(an(n)){const o=t[n];he(o)&&We(s,o)}else if(he(n))We(s,n.bind(e));else if(Je(n))if(fe(n))n.forEach(o=>ff(o,t,e,i));else{const o=he(n.handler)?n.handler.bind(e):t[n.handler];he(o)&&We(s,o,n)}}function du(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!e&&!i?c=t:(c={},s.length&&s.forEach(l=>va(c,l,r,!0)),va(c,t,r)),Je(t)&&o.set(t,c),c}function va(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&va(n,o,e,!0),s&&s.forEach(r=>va(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=e0[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const e0={data:Yu,props:ju,emits:ju,methods:Wo,computed:Wo,beforeCreate:bn,created:bn,beforeMount:bn,mounted:bn,beforeUpdate:bn,updated:bn,beforeDestroy:bn,beforeUnmount:bn,destroyed:bn,unmounted:bn,activated:bn,deactivated:bn,errorCaptured:bn,serverPrefetch:bn,components:Wo,directives:Wo,watch:i0,provide:Yu,inject:n0};function Yu(n,t){return t?n?function(){return un(he(n)?n.call(this,this):n,he(t)?t.call(this,this):t)}:t:n}function n0(n,t){return Wo(Zc(n),Zc(t))}function Zc(n){if(fe(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function bn(n,t){return n?[...new Set([].concat(n,t))]:t}function Wo(n,t){return n?un(Object.create(null),n,t):t}function ju(n,t){return n?fe(n)&&fe(t)?[...new Set([...n,...t])]:un(Object.create(null),Xu(n),Xu(t??{})):t}function i0(n,t){if(!n)return t;if(!t)return n;const e=un(Object.create(null),n);for(const i in t)e[i]=bn(n[i],t[i]);return e}function pf(){return{app:null,config:{isNativeTag:Hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let s0=0;function o0(n,t){return function(i,s=null){he(i)||(i=un({},i)),s!=null&&!Je(s)&&(s=null);const o=pf(),r=new WeakSet,a=[];let c=!1;const l=o.app={_uid:s0++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:G0,get config(){return o.config},set config(h){},use(h,...u){return r.has(h)||(h&&he(h.install)?(r.add(h),h.install(l,...u)):he(h)&&(r.add(h),h(l,...u))),l},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),l},component(h,u){return u?(o.components[h]=u,l):o.components[h]},directive(h,u){return u?(o.directives[h]=u,l):o.directives[h]},mount(h,u,d){if(!c){const f=l._ceVNode||Ze(i,s);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(f,h):n(f,h,d),c=!0,l._container=h,h.__vue_app__=l,Ga(f.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Pi(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,u){return o.provides[h]=u,l},runWithContext(h){const u=mo;mo=l;try{return h()}finally{mo=u}}};return l}}let mo=null;function oa(n,t){if(_n){let e=_n.provides;const i=_n.parent&&_n.parent.provides;i===e&&(e=_n.provides=Object.create(i)),e[n]=t}}function Zi(n,t,e=!1){const i=_n||kn;if(i||mo){const s=mo?mo._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&he(t)?t.call(i&&i.proxy):t}}const mf={},gf=()=>Object.create(mf),_f=n=>Object.getPrototypeOf(n)===mf;function r0(n,t,e,i=!1){const s={},o=gf();n.propsDefaults=Object.create(null),vf(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:Qd(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function a0(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=Le(s),[c]=n.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Oa(n.emitsOptions,d))continue;const f=t[d];if(c)if(Ce(o,d))f!==o[d]&&(o[d]=f,l=!0);else{const _=Qn(d);s[_]=Jc(c,a,_,f,n,!1)}else f!==o[d]&&(o[d]=f,l=!0)}}}else{vf(n,t,s,o)&&(l=!0);let h;for(const u in a)(!t||!Ce(t,u)&&((h=Hs(u))===u||!Ce(t,h)))&&(c?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=Jc(c,a,u,void 0,n,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!Ce(t,u))&&(delete o[u],l=!0)}l&&Ki(n.attrs,"set","")}function vf(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let c in t){if(Yo(c))continue;const l=t[c];let h;s&&Ce(s,h=Qn(c))?!o||!o.includes(h)?e[h]=l:(a||(a={}))[h]=l:Oa(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,r=!0)}if(o){const c=Le(e),l=a||Fe;for(let h=0;h<o.length;h++){const u=o[h];e[u]=Jc(s,c,u,l[u],n,!Ce(l,u))}}return r}function Jc(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=Ce(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&he(c)){const{propsDefaults:l}=s;if(e in l)i=l[e];else{const h=xr(s);i=l[e]=c.call(null,t),h()}}else i=c;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Hs(e))&&(i=!0))}return i}const c0=new WeakMap;function xf(n,t,e=!1){const i=e?c0:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let c=!1;if(!he(n)){const h=u=>{c=!0;const[d,f]=xf(u,t,!0);un(r,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!o&&!c)return Je(n)&&i.set(n,uo),uo;if(fe(o))for(let h=0;h<o.length;h++){const u=Qn(o[h]);$u(u)&&(r[u]=Fe)}else if(o)for(const h in o){const u=Qn(h);if($u(u)){const d=o[h],f=r[u]=fe(d)||he(d)?{type:d}:un({},d),_=f.type;let x=!1,m=!0;if(fe(_))for(let p=0;p<_.length;++p){const T=_[p],w=he(T)&&T.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(m=!1)}else x=he(_)&&_.name==="Boolean";f[0]=x,f[1]=m,(x||Ce(f,"default"))&&a.push(u)}}const l=[r,a];return Je(n)&&i.set(n,l),l}function $u(n){return n[0]!=="$"&&!Yo(n)}const yf=n=>n[0]==="_"||n==="$stable",fu=n=>fe(n)?n.map(bi):[bi(n)],l0=(n,t,e)=>{if(t._n)return t;const i=ri((...s)=>fu(t(...s)),e);return i._c=!1,i},Mf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(yf(s))continue;const o=n[s];if(he(o))t[s]=l0(s,o,i);else if(o!=null){const r=fu(o);t[s]=()=>r}}},wf=(n,t)=>{const e=fu(t);n.slots.default=()=>e},Sf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},u0=(n,t,e)=>{const i=n.slots=gf();if(n.vnode.shapeFlag&32){const s=t._;s?(Sf(i,t,e),e&&Fd(i,"_",s,!0)):Mf(t,i)}else t&&wf(n,t)},h0=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Fe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:Sf(s,t,e):(o=!t.$stable,Mf(t,s)),r=t}else t&&(wf(n,t),r={default:1});if(o)for(const a in s)!yf(a)&&r[a]==null&&delete s[a]},Gn=E0;function d0(n){return f0(n)}function f0(n,t){const e=Od();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:c,setText:l,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=Ai,insertStaticContent:_}=n,x=(g,A,I,F=null,N=null,W=null,J=void 0,M=null,v=!!A.dynamicChildren)=>{if(g===A)return;g&&!No(g,A)&&(F=O(g),Lt(g,N,W,!0),g=null),A.patchFlag===-2&&(v=!1,A.dynamicChildren=null);const{type:C,ref:$,shapeFlag:k}=A;switch(C){case Ba:m(g,A,I,F);break;case cr:p(g,A,I,F);break;case sc:g==null&&T(A,I,F,J);break;case gn:U(g,A,I,F,N,W,J,M,v);break;default:k&1?z(g,A,I,F,N,W,J,M,v):k&6?X(g,A,I,F,N,W,J,M,v):(k&64||k&128)&&C.process(g,A,I,F,N,W,J,M,v,ht)}$!=null&&N&&jc($,g&&g.ref,W,A||g,!A)},m=(g,A,I,F)=>{if(g==null)i(A.el=a(A.children),I,F);else{const N=A.el=g.el;A.children!==g.children&&l(N,A.children)}},p=(g,A,I,F)=>{g==null?i(A.el=c(A.children||""),I,F):A.el=g.el},T=(g,A,I,F)=>{[g.el,g.anchor]=_(g.children,A,I,F,g.el,g.anchor)},w=({el:g,anchor:A},I,F)=>{let N;for(;g&&g!==A;)N=d(g),i(g,I,F),g=N;i(A,I,F)},b=({el:g,anchor:A})=>{let I;for(;g&&g!==A;)I=d(g),s(g),g=I;s(A)},z=(g,A,I,F,N,W,J,M,v)=>{A.type==="svg"?J="svg":A.type==="math"&&(J="mathml"),g==null?L(A,I,F,N,W,J,M,v):Q(g,A,N,W,J,M,v)},L=(g,A,I,F,N,W,J,M)=>{let v,C;const{props:$,shapeFlag:k,transition:V,dirs:ut}=g;if(v=g.el=r(g.type,W,$&&$.is,$),k&8?h(v,g.children):k&16&&B(g.children,v,null,F,N,nc(g,W),J,M),ut&&ws(g,null,F,"created"),P(v,g,g.scopeId,J,F),$){for(const _t in $)_t!=="value"&&!Yo(_t)&&o(v,_t,null,$[_t],W,F);"value"in $&&o(v,"value",null,$.value,W),(C=$.onVnodeBeforeMount)&&wi(C,F,g)}ut&&ws(g,null,F,"beforeMount");const ct=p0(N,V);ct&&V.beforeEnter(v),i(v,A,I),((C=$&&$.onVnodeMounted)||ct||ut)&&Gn(()=>{C&&wi(C,F,g),ct&&V.enter(v),ut&&ws(g,null,F,"mounted")},N)},P=(g,A,I,F,N)=>{if(I&&f(g,I),F)for(let W=0;W<F.length;W++)f(g,F[W]);if(N){let W=N.subTree;if(A===W||Pf(W.type)&&(W.ssContent===A||W.ssFallback===A)){const J=N.vnode;P(g,J,J.scopeId,J.slotScopeIds,N.parent)}}},B=(g,A,I,F,N,W,J,M,v=0)=>{for(let C=v;C<g.length;C++){const $=g[C]=M?hs(g[C]):bi(g[C]);x(null,$,A,I,F,N,W,J,M)}},Q=(g,A,I,F,N,W,J)=>{const M=A.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:$}=A;v|=g.patchFlag&16;const k=g.props||Fe,V=A.props||Fe;let ut;if(I&&Ss(I,!1),(ut=V.onVnodeBeforeUpdate)&&wi(ut,I,A,g),$&&ws(A,g,I,"beforeUpdate"),I&&Ss(I,!0),(k.innerHTML&&V.innerHTML==null||k.textContent&&V.textContent==null)&&h(M,""),C?y(g.dynamicChildren,C,M,I,F,nc(A,N),W):J||Y(g,A,M,null,I,F,nc(A,N),W,!1),v>0){if(v&16)E(M,k,V,I,N);else if(v&2&&k.class!==V.class&&o(M,"class",null,V.class,N),v&4&&o(M,"style",k.style,V.style,N),v&8){const ct=A.dynamicProps;for(let _t=0;_t<ct.length;_t++){const Tt=ct[_t],dt=k[Tt],Mt=V[Tt];(Mt!==dt||Tt==="value")&&o(M,Tt,dt,Mt,N,I)}}v&1&&g.children!==A.children&&h(M,A.children)}else!J&&C==null&&E(M,k,V,I,N);((ut=V.onVnodeUpdated)||$)&&Gn(()=>{ut&&wi(ut,I,A,g),$&&ws(A,g,I,"updated")},F)},y=(g,A,I,F,N,W,J)=>{for(let M=0;M<A.length;M++){const v=g[M],C=A[M],$=v.el&&(v.type===gn||!No(v,C)||v.shapeFlag&70)?u(v.el):I;x(v,C,$,null,F,N,W,J,!0)}},E=(g,A,I,F,N)=>{if(A!==I){if(A!==Fe)for(const W in A)!Yo(W)&&!(W in I)&&o(g,W,A[W],null,N,F);for(const W in I){if(Yo(W))continue;const J=I[W],M=A[W];J!==M&&W!=="value"&&o(g,W,M,J,N,F)}"value"in I&&o(g,"value",A.value,I.value,N)}},U=(g,A,I,F,N,W,J,M,v)=>{const C=A.el=g?g.el:a(""),$=A.anchor=g?g.anchor:a("");let{patchFlag:k,dynamicChildren:V,slotScopeIds:ut}=A;ut&&(M=M?M.concat(ut):ut),g==null?(i(C,I,F),i($,I,F),B(A.children||[],I,$,N,W,J,M,v)):k>0&&k&64&&V&&g.dynamicChildren?(y(g.dynamicChildren,V,I,N,W,J,M),(A.key!=null||N&&A===N.subTree)&&bf(g,A,!0)):Y(g,A,I,$,N,W,J,M,v)},X=(g,A,I,F,N,W,J,M,v)=>{A.slotScopeIds=M,g==null?A.shapeFlag&512?N.ctx.activate(A,I,F,J,v):it(A,I,F,N,W,J,v):at(g,A,v)},it=(g,A,I,F,N,W,J)=>{const M=g.component=D0(g,F,N);if(hf(g)&&(M.ctx.renderer=ht),U0(M,!1,J),M.asyncDep){if(N&&N.registerDep(M,q,J),!g.el){const v=M.subTree=Ze(cr);p(null,v,A,I)}}else q(M,g,A,I,N,W,J)},at=(g,A,I)=>{const F=A.component=g.component;if(S0(g,A,I))if(F.asyncDep&&!F.asyncResolved){st(F,A,I);return}else F.next=A,F.update();else A.el=g.el,F.vnode=A},q=(g,A,I,F,N,W,J)=>{const M=()=>{if(g.isMounted){let{next:k,bu:V,u:ut,parent:ct,vnode:_t}=g;{const Ut=Ef(g);if(Ut){k&&(k.el=_t.el,st(g,k,J)),Ut.asyncDep.then(()=>{g.isUnmounted||M()});return}}let Tt=k,dt;Ss(g,!1),k?(k.el=_t.el,st(g,k,J)):k=_t,V&&Za(V),(dt=k.props&&k.props.onVnodeBeforeUpdate)&&wi(dt,ct,k,_t),Ss(g,!0);const Mt=ic(g),Pt=g.subTree;g.subTree=Mt,x(Pt,Mt,u(Pt.el),O(Pt),g,N,W),k.el=Mt.el,Tt===null&&b0(g,Mt.el),ut&&Gn(ut,N),(dt=k.props&&k.props.onVnodeUpdated)&&Gn(()=>wi(dt,ct,k,_t),N)}else{let k;const{el:V,props:ut}=A,{bm:ct,m:_t,parent:Tt,root:dt,type:Mt}=g,Pt=$o(A);if(Ss(g,!1),ct&&Za(ct),!Pt&&(k=ut&&ut.onVnodeBeforeMount)&&wi(k,Tt,A),Ss(g,!0),V&&nt){const Ut=()=>{g.subTree=ic(g),nt(V,g.subTree,g,N,null)};Pt&&Mt.__asyncHydrate?Mt.__asyncHydrate(V,g,Ut):Ut()}else{dt.ce&&dt.ce._injectChildStyle(Mt);const Ut=g.subTree=ic(g);x(null,Ut,I,F,g,N,W),A.el=Ut.el}if(_t&&Gn(_t,N),!Pt&&(k=ut&&ut.onVnodeMounted)){const Ut=A;Gn(()=>wi(k,Tt,Ut),N)}(A.shapeFlag&256||Tt&&$o(Tt.vnode)&&Tt.vnode.shapeFlag&256)&&g.a&&Gn(g.a,N),g.isMounted=!0,A=I=F=null}};g.scope.on();const v=g.effect=new zd(M);g.scope.off();const C=g.update=v.run.bind(v),$=g.job=v.runIfDirty.bind(v);$.i=g,$.id=g.uid,v.scheduler=()=>lu($),Ss(g,!0),C()},st=(g,A,I)=>{A.component=g;const F=g.vnode.props;g.vnode=A,g.next=null,a0(g,A.props,F,I),h0(g,A.children,I),xs(),ku(g),ys()},Y=(g,A,I,F,N,W,J,M,v=!1)=>{const C=g&&g.children,$=g?g.shapeFlag:0,k=A.children,{patchFlag:V,shapeFlag:ut}=A;if(V>0){if(V&128){pt(C,k,I,F,N,W,J,M,v);return}else if(V&256){mt(C,k,I,F,N,W,J,M,v);return}}ut&8?($&16&&wt(C,N,W),k!==C&&h(I,k)):$&16?ut&16?pt(C,k,I,F,N,W,J,M,v):wt(C,N,W,!0):($&8&&h(I,""),ut&16&&B(k,I,F,N,W,J,M,v))},mt=(g,A,I,F,N,W,J,M,v)=>{g=g||uo,A=A||uo;const C=g.length,$=A.length,k=Math.min(C,$);let V;for(V=0;V<k;V++){const ut=A[V]=v?hs(A[V]):bi(A[V]);x(g[V],ut,I,null,N,W,J,M,v)}C>$?wt(g,N,W,!0,!1,k):B(A,I,F,N,W,J,M,v,k)},pt=(g,A,I,F,N,W,J,M,v)=>{let C=0;const $=A.length;let k=g.length-1,V=$-1;for(;C<=k&&C<=V;){const ut=g[C],ct=A[C]=v?hs(A[C]):bi(A[C]);if(No(ut,ct))x(ut,ct,I,null,N,W,J,M,v);else break;C++}for(;C<=k&&C<=V;){const ut=g[k],ct=A[V]=v?hs(A[V]):bi(A[V]);if(No(ut,ct))x(ut,ct,I,null,N,W,J,M,v);else break;k--,V--}if(C>k){if(C<=V){const ut=V+1,ct=ut<$?A[ut].el:F;for(;C<=V;)x(null,A[C]=v?hs(A[C]):bi(A[C]),I,ct,N,W,J,M,v),C++}}else if(C>V)for(;C<=k;)Lt(g[C],N,W,!0),C++;else{const ut=C,ct=C,_t=new Map;for(C=ct;C<=V;C++){const Ot=A[C]=v?hs(A[C]):bi(A[C]);Ot.key!=null&&_t.set(Ot.key,C)}let Tt,dt=0;const Mt=V-ct+1;let Pt=!1,Ut=0;const Ct=new Array(Mt);for(C=0;C<Mt;C++)Ct[C]=0;for(C=ut;C<=k;C++){const Ot=g[C];if(dt>=Mt){Lt(Ot,N,W,!0);continue}let $t;if(Ot.key!=null)$t=_t.get(Ot.key);else for(Tt=ct;Tt<=V;Tt++)if(Ct[Tt-ct]===0&&No(Ot,A[Tt])){$t=Tt;break}$t===void 0?Lt(Ot,N,W,!0):(Ct[$t-ct]=C+1,$t>=Ut?Ut=$t:Pt=!0,x(Ot,A[$t],I,null,N,W,J,M,v),dt++)}const qt=Pt?m0(Ct):uo;for(Tt=qt.length-1,C=Mt-1;C>=0;C--){const Ot=ct+C,$t=A[Ot],G=Ot+1<$?A[Ot+1].el:F;Ct[C]===0?x(null,$t,I,G,N,W,J,M,v):Pt&&(Tt<0||C!==qt[Tt]?yt($t,I,G,2):Tt--)}}},yt=(g,A,I,F,N=null)=>{const{el:W,type:J,transition:M,children:v,shapeFlag:C}=g;if(C&6){yt(g.component.subTree,A,I,F);return}if(C&128){g.suspense.move(A,I,F);return}if(C&64){J.move(g,A,I,ht);return}if(J===gn){i(W,A,I);for(let k=0;k<v.length;k++)yt(v[k],A,I,F);i(g.anchor,A,I);return}if(J===sc){w(g,A,I);return}if(F!==2&&C&1&&M)if(F===0)M.beforeEnter(W),i(W,A,I),Gn(()=>M.enter(W),N);else{const{leave:k,delayLeave:V,afterLeave:ut}=M,ct=()=>i(W,A,I),_t=()=>{k(W,()=>{ct(),ut&&ut()})};V?V(W,ct,_t):_t()}else i(W,A,I)},Lt=(g,A,I,F=!1,N=!1)=>{const{type:W,props:J,ref:M,children:v,dynamicChildren:C,shapeFlag:$,patchFlag:k,dirs:V,cacheIndex:ut}=g;if(k===-2&&(N=!1),M!=null&&jc(M,null,I,g,!0),ut!=null&&(A.renderCache[ut]=void 0),$&256){A.ctx.deactivate(g);return}const ct=$&1&&V,_t=!$o(g);let Tt;if(_t&&(Tt=J&&J.onVnodeBeforeUnmount)&&wi(Tt,A,g),$&6)ft(g.component,I,F);else{if($&128){g.suspense.unmount(I,F);return}ct&&ws(g,null,A,"beforeUnmount"),$&64?g.type.remove(g,A,I,ht,F):C&&!C.hasOnce&&(W!==gn||k>0&&k&64)?wt(C,A,I,!1,!0):(W===gn&&k&384||!N&&$&16)&&wt(v,A,I),F&&Gt(g)}(_t&&(Tt=J&&J.onVnodeUnmounted)||ct)&&Gn(()=>{Tt&&wi(Tt,A,g),ct&&ws(g,null,A,"unmounted")},I)},Gt=g=>{const{type:A,el:I,anchor:F,transition:N}=g;if(A===gn){rt(I,F);return}if(A===sc){b(g);return}const W=()=>{s(I),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:J,delayLeave:M}=N,v=()=>J(I,W);M?M(g.el,W,v):v()}else W()},rt=(g,A)=>{let I;for(;g!==A;)I=d(g),s(g),g=I;s(A)},ft=(g,A,I)=>{const{bum:F,scope:N,job:W,subTree:J,um:M,m:v,a:C}=g;Ku(v),Ku(C),F&&Za(F),N.stop(),W&&(W.flags|=8,Lt(J,g,A,I)),M&&Gn(M,A),Gn(()=>{g.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},wt=(g,A,I,F=!1,N=!1,W=0)=>{for(let J=W;J<g.length;J++)Lt(g[J],A,I,F,N)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const A=d(g.anchor||g.el),I=A&&A[Fm];return I?d(I):A};let lt=!1;const ot=(g,A,I)=>{g==null?A._vnode&&Lt(A._vnode,null,null,!0):x(A._vnode||null,g,A,null,null,null,I),A._vnode=g,lt||(lt=!0,ku(),af(),lt=!1)},ht={p:x,um:Lt,m:yt,r:Gt,mt:it,mc:B,pc:Y,pbc:y,n:O,o:n};let St,nt;return{render:ot,hydrate:St,createApp:o0(ot,St)}}function nc({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ss({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function p0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function bf(n,t,e=!1){const i=n.children,s=t.children;if(fe(i)&&fe(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=hs(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&bf(r,a)),a.type===Ba&&(a.el=r.el)}}function m0(n){const t=n.slice(),e=[0];let i,s,o,r,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=e[e.length-1],n[s]<l){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<l?o=a+1:r=a;l<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function Ef(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ef(t)}function Ku(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const g0=Symbol.for("v-scx"),_0=()=>Zi(g0);function We(n,t,e){return Tf(n,t,e)}function Tf(n,t,e=Fe){const{immediate:i,deep:s,flush:o,once:r}=e,a=un({},e);let c;if(za)if(o==="sync"){const d=_0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=Ai,d.resume=Ai,d.pause=Ai,d}const l=_n;a.call=(d,f,_)=>Pi(d,l,f,_);let h=!1;o==="post"?a.scheduler=d=>{Gn(d,l&&l.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():lu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const u=Im(n,t,a);return c&&c.push(u),u}function v0(n,t,e){const i=this.proxy,s=an(n)?n.includes(".")?Af(i,n):()=>i[n]:n.bind(i,i);let o;he(t)?o=t:(o=t.handler,e=t);const r=xr(this),a=Tf(s,o.bind(i),e);return r(),a}function Af(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const x0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qn(t)}Modifiers`]||n[`${Hs(t)}Modifiers`];function y0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Fe;let s=e;const o=t.startsWith("update:"),r=o&&x0(i,t.slice(7));r&&(r.trim&&(s=e.map(h=>an(h)?h.trim():h)),r.number&&(s=e.map($p)));let a,c=i[a=Ka(t)]||i[a=Ka(Qn(t))];!c&&o&&(c=i[a=Ka(Hs(t))]),c&&Pi(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pi(l,n,6,s)}}function Rf(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!he(n)){const c=l=>{const h=Rf(l,t,!0);h&&(a=!0,un(r,h))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!a?(Je(n)&&i.set(n,null),null):(fe(o)?o.forEach(c=>r[c]=null):un(r,o),Je(n)&&i.set(n,r),r)}function Oa(n,t){return!n||!Pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ce(n,t[0].toLowerCase()+t.slice(1))||Ce(n,Hs(t))||Ce(n,t))}function ic(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:c,render:l,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,m=_a(n);let p,T;try{if(e.shapeFlag&4){const b=s||i,z=b;p=bi(l.call(z,b,h,u,f,d,_)),T=a}else{const b=t;p=bi(b.length>1?b(u,{attrs:a,slots:r,emit:c}):b(u,null)),T=t.props?a:M0(a)}}catch(b){Zo.length=0,Na(b,n,1),p=Ze(cr)}let w=p;if(T&&x!==!1){const b=Object.keys(T),{shapeFlag:z}=w;b.length&&z&7&&(o&&b.some(jl)&&(T=w0(T,o)),w=yo(w,T,!1,!0))}return e.dirs&&(w=yo(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(e.dirs):e.dirs),e.transition&&uu(w,e.transition),p=w,_a(m),p}const M0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Pa(e))&&((t||(t={}))[e]=n[e]);return t},w0=(n,t)=>{const e={};for(const i in n)(!jl(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function S0(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return i?Zu(i,r,l):!!r;if(c&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(r[d]!==i[d]&&!Oa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Zu(i,r,l):!0:!!r;return!1}function Zu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Oa(e,o))return!0}return!1}function b0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Pf=n=>n.__isSuspense;function E0(n,t){t&&t.pendingBranch?fe(n)?t.effects.push(...n):t.effects.push(n):Um(n)}const gn=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),sc=Symbol.for("v-stc"),Zo=[];let Vn=null;function mi(n=!1){Zo.push(Vn=n?null:[])}function T0(){Zo.pop(),Vn=Zo[Zo.length-1]||null}let lr=1;function Ju(n){lr+=n,n<0&&Vn&&(Vn.hasOnce=!0)}function A0(n){return n.dynamicChildren=lr>0?Vn||uo:null,T0(),lr>0&&Vn&&Vn.push(n),n}function gi(n,t,e,i,s,o){return A0(Yt(n,t,e,i,s,o,!0))}function xa(n){return n?n.__v_isVNode===!0:!1}function No(n,t){return n.type===t.type&&n.key===t.key}const Cf=({key:n})=>n??null,ra=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?an(n)||vn(n)||he(n)?{i:kn,r:n,k:t,f:!!e}:n:null);function Yt(n,t=null,e=null,i=0,s=null,o=n===gn?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Cf(t),ref:t&&ra(t),scopeId:lf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kn};return a?(pu(c,e),o&128&&n.normalize(c)):e&&(c.shapeFlag|=an(e)?8:16),lr>0&&!r&&Vn&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Vn.push(c),c}const Ze=R0;function R0(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===Km)&&(n=cr),xa(n)){const a=yo(n,t,!0);return e&&pu(a,e),lr>0&&!o&&Vn&&(a.shapeFlag&6?Vn[Vn.indexOf(n)]=a:Vn.push(a)),a.patchFlag=-2,a}if(z0(n)&&(n=n.__vccOpts),t){t=P0(t);let{class:a,style:c}=t;a&&!an(a)&&(t.class=Yn(a)),Je(c)&&(ru(c)&&!fe(c)&&(c=un({},c)),t.style=Zl(c))}const r=an(n)?1:Pf(n)?128:Om(n)?64:Je(n)?4:he(n)?2:0;return Yt(n,t,e,i,s,r,o,!0)}function P0(n){return n?ru(n)||_f(n)?un({},n):n:null}function yo(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:c}=n,l=t?C0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Cf(l),ref:t&&t.ref?e&&o?fe(o)?o.concat(ra(t)):[o,ra(t)]:ra(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==gn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yo(n.ssContent),ssFallback:n.ssFallback&&yo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&uu(h,c.clone(h)),h}function ai(n=" ",t=0){return Ze(Ba,null,n,t)}function bi(n){return n==null||typeof n=="boolean"?Ze(cr):fe(n)?Ze(gn,null,n.slice()):xa(n)?hs(n):Ze(Ba,null,String(n))}function hs(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yo(n)}function pu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(fe(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),pu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!_f(t)?t._ctx=kn:s===3&&kn&&(kn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:kn},e=32):(t=String(t),i&64?(e=16,t=[ai(t)]):e=8);n.children=t,n.shapeFlag|=e}function C0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Yn([t.class,i.class]));else if(s==="style")t.style=Zl([t.style,i.style]);else if(Pa(s)){const o=t[s],r=i[s];r&&o!==r&&!(fe(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function wi(n,t,e,i=null){Pi(n,t,7,[e,i])}const I0=pf();let L0=0;function D0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||I0,o={uid:L0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xf(i,s),emitsOptions:Rf(i,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:i.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=y0.bind(null,o),n.ce&&n.ce(o),o}let _n=null,ya,Qc;{const n=Od(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};ya=t("__VUE_INSTANCE_SETTERS__",e=>_n=e),Qc=t("__VUE_SSR_SETTERS__",e=>za=e)}const xr=n=>{const t=_n;return ya(n),n.scope.on(),()=>{n.scope.off(),ya(t)}},Qu=()=>{_n&&_n.scope.off(),ya(null)};function If(n){return n.vnode.shapeFlag&4}let za=!1;function U0(n,t=!1,e=!1){t&&Qc(t);const{props:i,children:s}=n.vnode,o=If(n);r0(n,i,o,t),u0(n,s,e);const r=o?N0(n,t):void 0;return t&&Qc(!1),r}function N0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Jm);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?O0(n):null,o=xr(n);xs();const r=vr(i,n,0,[n.props,s]);if(ys(),o(),Nd(r)){if($o(n)||uf(n),r.then(Qu,Qu),t)return r.then(a=>{th(n,a,t)}).catch(a=>{Na(a,n,0)});n.asyncDep=r}else th(n,r,t)}else Lf(n,t)}function th(n,t,e){he(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Je(t)&&(n.setupState=nf(t)),Lf(n,e)}let eh;function Lf(n,t,e){const i=n.type;if(!n.render){if(!t&&eh&&!i.render){const s=i.template||du(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=un(un({isCustomElement:o,delimiters:a},r),c);i.render=eh(s,l)}}n.render=i.render||Ai}{const s=xr(n);xs();try{Qm(n)}finally{ys(),s()}}}const F0={get(n,t){return xn(n,"get",""),n[t]}};function O0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,F0),slots:n.slots,emit:n.emit,expose:t}}function Ga(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(nf(Em(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ko)return Ko[e](n)},has(t,e){return e in t||e in Ko}})):n.proxy}function B0(n,t=!0){return he(n)?n.displayName||n.name:n.name||t&&n.__name}function z0(n){return he(n)&&"__vccOpts"in n}const li=(n,t)=>Pm(n,t,za);function Df(n,t,e){const i=arguments.length;return i===2?Je(t)&&!fe(t)?xa(t)?Ze(n,null,[t]):Ze(n,t):Ze(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&xa(e)&&(e=[e]),Ze(n,t,e))}const G0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const nh=typeof window<"u"&&window.trustedTypes;if(nh)try{tl=nh.createPolicy("vue",{createHTML:n=>n})}catch{}const Uf=tl?n=>tl.createHTML(n):n=>n,H0="http://www.w3.org/2000/svg",k0="http://www.w3.org/1998/Math/MathML",qi=typeof document<"u"?document:null,ih=qi&&qi.createElement("template"),V0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?qi.createElementNS(H0,n):t==="mathml"?qi.createElementNS(k0,n):e?qi.createElement(n,{is:e}):qi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>qi.createTextNode(n),createComment:n=>qi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>qi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{ih.innerHTML=Uf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ih.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},W0=Symbol("_vtc");function X0(n,t,e){const i=n[W0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Ma=Symbol("_vod"),Nf=Symbol("_vsh"),q0={beforeMount(n,{value:t},{transition:e}){n[Ma]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Fo(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Fo(n,!0),i.enter(n)):i.leave(n,()=>{Fo(n,!1)}):Fo(n,t))},beforeUnmount(n,{value:t}){Fo(n,t)}};function Fo(n,t){n.style.display=t?n[Ma]:"none",n[Nf]=!t}const Y0=Symbol(""),j0=/(^|;)\s*display\s*:/;function $0(n,t,e){const i=n.style,s=an(e);let o=!1;if(e&&!s){if(t)if(an(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&aa(i,a,"")}else for(const r in t)e[r]==null&&aa(i,r,"");for(const r in e)r==="display"&&(o=!0),aa(i,r,e[r])}else if(s){if(t!==e){const r=i[Y0];r&&(e+=";"+r),i.cssText=e,o=j0.test(e)}}else t&&n.removeAttribute("style");Ma in n&&(n[Ma]=o?i.display:"",n[Nf]&&(i.display="none"))}const sh=/\s*!important$/;function aa(n,t,e){if(fe(e))e.forEach(i=>aa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=K0(n,t);sh.test(e)?n.setProperty(Hs(i),e.replace(sh,""),"important"):n[i]=e}}const oh=["Webkit","Moz","ms"],oc={};function K0(n,t){const e=oc[t];if(e)return e;let i=Qn(t);if(i!=="filter"&&i in n)return oc[t]=i;i=La(i);for(let s=0;s<oh.length;s++){const o=oh[s]+i;if(o in n)return oc[t]=o}return t}const rh="http://www.w3.org/1999/xlink";function ah(n,t,e,i,s,o=em(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(rh,t.slice(6,t.length)):n.setAttributeNS(rh,t,e):e==null||o&&!Bd(e)?n.removeAttribute(t):n.setAttribute(t,o?"":Po(e)?String(e):e)}function ch(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Uf(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=Bd(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function Z0(n,t,e,i){n.addEventListener(t,e,i)}function J0(n,t,e,i){n.removeEventListener(t,e,i)}const lh=Symbol("_vei");function Q0(n,t,e,i,s=null){const o=n[lh]||(n[lh]={}),r=o[t];if(i&&r)r.value=i;else{const[a,c]=tg(t);if(i){const l=o[t]=ig(i,s);Z0(n,a,l,c)}else r&&(J0(n,a,r,c),o[t]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function tg(n){let t;if(uh.test(n)){t={};let i;for(;i=n.match(uh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Hs(n.slice(2)),t]}let rc=0;const eg=Promise.resolve(),ng=()=>rc||(eg.then(()=>rc=0),rc=Date.now());function ig(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Pi(sg(i,e.value),t,5,[i])};return e.value=n,e.attached=ng(),e}function sg(n,t){if(fe(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const hh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,og=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?X0(n,i,r):t==="style"?$0(n,e,i):Pa(t)?jl(t)||Q0(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rg(n,t,i,r))?(ch(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ah(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!an(i))?ch(n,Qn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ah(n,t,i,r))};function rg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&hh(t)&&he(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hh(t)&&an(e)?!1:t in n}const ag=un({patchProp:og},V0);let dh;function cg(){return dh||(dh=d0(ag))}const lg=(...n)=>{const t=cg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=hg(i);if(!s)return;const o=t._component;!he(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,ug(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function ug(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function hg(n){return an(n)?document.querySelector(n):n}const dg={id:"app"},fg=jn({__name:"App",setup(n){const t=Jt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return ni(()=>{window.addEventListener("mousemove",e)}),hu(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=Vu("router-link"),r=Vu("router-view");return mi(),gi("div",dg,[Nm(Yt("nav",null,[Ze(o,{to:"/3d-bear-arts/leather"},{default:ri(()=>s[0]||(s[0]=[ai("LV")])),_:1}),Ze(o,{to:"/3d-bear-arts/pop-art"},{default:ri(()=>s[1]||(s[1]=[ai("Pop MouseMove")])),_:1}),Ze(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:ri(()=>s[2]||(s[2]=[ai("Pop Art")])),_:1}),Ze(o,{to:"/3d-bear-arts/machine"},{default:ri(()=>s[3]||(s[3]=[ai("Machine")])),_:1}),Ze(o,{to:"/3d-bear-arts/water"},{default:ri(()=>s[4]||(s[4]=[ai("Water")])),_:1}),Ze(o,{to:"/3d-bear-arts/ghost-bear"},{default:ri(()=>s[5]||(s[5]=[ai("Pumpkin")])),_:1}),Ze(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:ri(()=>s[6]||(s[6]=[ai("Ghost")])),_:1}),Ze(o,{to:"/3d-bear-arts/"},{default:ri(()=>s[7]||(s[7]=[ai("Santa")])),_:1}),Ze(o,{to:"/3d-bear-arts/coffee"},{default:ri(()=>s[8]||(s[8]=[ai("Coffee")])),_:1}),Ze(o,{to:"/3d-bear-arts/christmas-ball-pink"},{default:ri(()=>s[9]||(s[9]=[ai("Christmas Pink")])),_:1})],512),[[q0,t.value]]),Ze(r)])}}}),_i=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},pg=_i(fg,[["__scopeId","data-v-872689e9"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const oo=typeof document<"u";function Ff(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function mg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Ff(n.default)}const De=Object.assign;function ac(n,t){const e={};for(const i in t){const s=t[i];e[i]=pi(s)?s.map(n):n(s)}return e}const Jo=()=>{},pi=Array.isArray,Of=/#/g,gg=/&/g,_g=/\//g,vg=/=/g,xg=/\?/g,Bf=/\+/g,yg=/%5B/g,Mg=/%5D/g,zf=/%5E/g,wg=/%60/g,Gf=/%7B/g,Sg=/%7C/g,Hf=/%7D/g,bg=/%20/g;function mu(n){return encodeURI(""+n).replace(Sg,"|").replace(yg,"[").replace(Mg,"]")}function Eg(n){return mu(n).replace(Gf,"{").replace(Hf,"}").replace(zf,"^")}function el(n){return mu(n).replace(Bf,"%2B").replace(bg,"+").replace(Of,"%23").replace(gg,"%26").replace(wg,"`").replace(Gf,"{").replace(Hf,"}").replace(zf,"^")}function Tg(n){return el(n).replace(vg,"%3D")}function Ag(n){return mu(n).replace(Of,"%23").replace(xg,"%3F")}function Rg(n){return n==null?"":Ag(n).replace(_g,"%2F")}function ur(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Pg=/\/$/,Cg=n=>n.replace(Pg,"");function cc(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Ug(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:ur(r)}}function Ig(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function fh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Lg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Mo(t.matched[i],e.matched[s])&&kf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Mo(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function kf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Dg(n[e],t[e]))return!1;return!0}function Dg(n,t){return pi(n)?ph(n,t):pi(t)?ph(t,n):n===t}function ph(n,t){return pi(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Ug(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const is={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var hr;(function(n){n.pop="pop",n.push="push"})(hr||(hr={}));var Qo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qo||(Qo={}));function Ng(n){if(!n)if(oo){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Cg(n)}const Fg=/^[^#]+#/;function Og(n,t){return n.replace(Fg,"#")+t}function Bg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ha=()=>({left:window.scrollX,top:window.scrollY});function zg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Bg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function mh(n,t){return(history.state?history.state.position-t:-1)+n}const nl=new Map;function Gg(n,t){nl.set(n,t)}function Hg(n){const t=nl.get(n);return nl.delete(n),t}let kg=()=>location.protocol+"//"+location.host;function Vf(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),fh(c,"")}return fh(e,n)+i+s}function Vg(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const f=Vf(n,location),_=e.value,x=t.value;let m=0;if(d){if(e.value=f,t.value=d,r&&r===_){r=null;return}m=x?d.position-x.position:0}else i(f);s.forEach(p=>{p(e.value,_,{delta:m,type:hr.pop,direction:m?m>0?Qo.forward:Qo.back:Qo.unknown})})};function c(){r=e.value}function l(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return o.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(De({},d.state,{scroll:Ha()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function gh(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ha():null}}function Wg(n){const{history:t,location:e}=window,i={value:Vf(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+c:kg()+n+c;try{t[h?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),e[h?"replace":"assign"](d)}}function r(c,l){const h=De({},t.state,gh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});o(c,h,!0),i.value=c}function a(c,l){const h=De({},s.value,t.state,{forward:c,scroll:Ha()});o(h.current,h,!0);const u=De({},gh(i.value,c,null),{position:h.position+1},l);o(c,u,!1),i.value=c}return{location:i,state:s,push:a,replace:r}}function Xg(n){n=Ng(n);const t=Wg(n),e=Vg(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=De({location:"",base:n,go:i,createHref:Og.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function qg(n){return typeof n=="string"||n&&typeof n=="object"}function Wf(n){return typeof n=="string"||typeof n=="symbol"}const Xf=Symbol("");var _h;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(_h||(_h={}));function wo(n,t){return De(new Error,{type:n,[Xf]:!0},t)}function Bi(n,t){return n instanceof Error&&Xf in n&&(t==null||!!(n.type&t))}const vh="[^/]+?",Yg={sensitive:!1,strict:!1,start:!0,end:!0},jg=/[.+*?^${}()[\]/\\]/g;function $g(n,t){const e=De({},Yg,t),i=[];let s=e.start?"^":"";const o=[];for(const l of n){const h=l.length?[]:[90];e.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const d=l[u];let f=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(jg,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:x,optional:m,regexp:p}=d;o.push({name:_,repeatable:x,optional:m});const T=p||vh;if(T!==vh){f+=10;try{new RegExp(`(${T})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${T}): `+b.message)}}let w=x?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;u||(w=m&&l.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),s+=w,f+=20,m&&(f+=-8),x&&(f+=-20),T===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(e.strict&&e.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(l){const h=l.match(r),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=o[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function c(l){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:x,optional:m}=f,p=_ in l?l[_]:"";if(pi(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const T=pi(p)?p.join("/"):p;if(!T)if(m)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=T}}return h||"/"}return{re:r,score:i,keys:o,parse:a,stringify:c}}function Kg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function qf(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=Kg(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(xh(i))return 1;if(xh(s))return-1}return s.length-i.length}function xh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Zg={type:0,value:""},Jg=/[a-zA-Z0-9_]/;function Qg(n){if(!n)return[[]];if(n==="/")return[[Zg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${l}": ${f}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,c,l="",h="";function u(){l&&(e===0?o.push({type:0,value:l}):e===1||e===2||e===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:c==="/"?(l&&u(),r()):c===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:c==="("?e=2:Jg.test(c)?d():(u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:e=3:h+=c;break;case 3:u(),e=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),r(),s}function t_(n,t,e){const i=$g(Qg(n.path),e),s=De(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function e_(n,t){const e=[],i=new Map;t=Sh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function o(u,d,f){const _=!f,x=Mh(u);x.aliasOf=f&&f.record;const m=Sh(t,u),p=[x];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of b)p.push(Mh(De({},x,{components:f?f.record.components:x.components,path:z,aliasOf:f?f.record:x})))}let T,w;for(const b of p){const{path:z}=b;if(d&&z[0]!=="/"){const L=d.record.path,P=L[L.length-1]==="/"?"":"/";b.path=d.record.path+(z&&P+z)}if(T=t_(b,d,m),f?f.alias.push(T):(w=w||T,w!==T&&w.alias.push(T),_&&u.name&&!wh(T)&&r(u.name)),Yf(T)&&c(T),x.children){const L=x.children;for(let P=0;P<L.length;P++)o(L[P],T,f&&f.children[P])}f=f||T}return w?()=>{r(w)}:Jo}function r(u){if(Wf(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function c(u){const d=s_(u,e);e.splice(d,0,u),u.record.name&&!wh(u)&&i.set(u.record.name,u)}function l(u,d){let f,_={},x,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw wo(1,{location:u});m=f.record.name,_=De(yh(d.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),u.params&&yh(u.params,f.keys.map(w=>w.name))),x=f.stringify(_)}else if(u.path!=null)x=u.path,f=e.find(w=>w.re.test(x)),f&&(_=f.parse(x),m=f.record.name);else{if(f=d.name?i.get(d.name):e.find(w=>w.re.test(d.path)),!f)throw wo(1,{location:u,currentLocation:d});m=f.record.name,_=De({},d.params,u.params),x=f.stringify(_)}const p=[];let T=f;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:x,params:_,matched:p,meta:i_(p)}}n.forEach(u=>o(u));function h(){e.length=0,i.clear()}return{addRoute:o,resolve:l,removeRoute:r,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function yh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Mh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:n_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function n_(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function wh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function i_(n){return n.reduce((t,e)=>De(t,e.meta),{})}function Sh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function s_(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;qf(n,t[o])<0?i=o:e=o+1}const s=o_(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function o_(n){let t=n;for(;t=t.parent;)if(Yf(t)&&qf(n,t)===0)return t}function Yf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function r_(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Bf," "),r=o.indexOf("="),a=ur(r<0?o:o.slice(0,r)),c=r<0?null:ur(o.slice(r+1));if(a in t){let l=t[a];pi(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function bh(n){let t="";for(let e in n){const i=n[e];if(e=Tg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(pi(i)?i.map(o=>o&&el(o)):[i&&el(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function a_(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=pi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const c_=Symbol(""),Eh=Symbol(""),gu=Symbol(""),jf=Symbol(""),il=Symbol("");function Oo(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ds(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(wo(4,{from:e,to:t})):d instanceof Error?c(d):qg(d)?c(wo(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},h=o(()=>n.call(i&&i.instances[s],t,e,l));let u=Promise.resolve(h);n.length<3&&(u=u.then(l)),u.catch(d=>c(d))})}function lc(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let c=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Ff(c)){const h=(c.__vccOpts||c)[t];h&&o.push(ds(h,e,i,r,a,s))}else{let l=c();o.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=mg(h)?h.default:h;r.mods[a]=h,r.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&ds(f,e,i,r,a,s)()}))}}return o}function Th(n){const t=Zi(gu),e=Zi(jf),i=li(()=>{const c=fo(n.to);return t.resolve(c)}),s=li(()=>{const{matched:c}=i.value,{length:l}=c,h=c[l-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(Mo.bind(null,h));if(d>-1)return d;const f=Ah(c[l-2]);return l>1&&Ah(h)===f&&u[u.length-1].path!==f?u.findIndex(Mo.bind(null,c[l-2])):d}),o=li(()=>s.value>-1&&d_(e.params,i.value.params)),r=li(()=>s.value>-1&&s.value===e.matched.length-1&&kf(e.params,i.value.params));function a(c={}){return h_(c)?t[fo(n.replace)?"replace":"push"](fo(n.to)).catch(Jo):Promise.resolve()}return{route:i,href:li(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const l_=jn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Th,setup(n,{slots:t}){const e=Ua(Th(n)),{options:i}=Zi(gu),s=li(()=>({[Rh(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Rh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:Df("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),u_=l_;function h_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function d_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!pi(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function Ah(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Rh=(n,t,e)=>n??t??e,f_=jn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Zi(il),s=li(()=>n.route||i.value),o=Zi(Eh,0),r=li(()=>{let l=fo(o);const{matched:h}=s.value;let u;for(;(u=h[l])&&!u.components;)l++;return l}),a=li(()=>s.value.matched[r.value]);oa(Eh,li(()=>r.value+1)),oa(c_,a),oa(il,s);const c=Jt();return We(()=>[c.value,a.value,n.name],([l,h,u],[d,f,_])=>{h&&(h.instances[u]=l,f&&f!==h&&l&&l===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),l&&h&&(!f||!Mo(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(x=>x(l))},{flush:"post"}),()=>{const l=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return Ph(e.default,{Component:d,route:l});const f=u.props[h],_=f?f===!0?l.params:typeof f=="function"?f(l):f:null,m=Df(d,De({},_,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[h]=null)},ref:c}));return Ph(e.default,{Component:m,route:l})||m}}});function Ph(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const p_=f_;function m_(n){const t=e_(n.routes,n),e=n.parseQuery||r_,i=n.stringifyQuery||bh,s=n.history,o=Oo(),r=Oo(),a=Oo(),c=ho(is);let l=is;oo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ac.bind(null,O=>""+O),u=ac.bind(null,Rg),d=ac.bind(null,ur);function f(O,lt){let ot,ht;return Wf(O)?(ot=t.getRecordMatcher(O),ht=lt):ht=O,t.addRoute(ht,ot)}function _(O){const lt=t.getRecordMatcher(O);lt&&t.removeRoute(lt)}function x(){return t.getRoutes().map(O=>O.record)}function m(O){return!!t.getRecordMatcher(O)}function p(O,lt){if(lt=De({},lt||c.value),typeof O=="string"){const A=cc(e,O,lt.path),I=t.resolve({path:A.path},lt),F=s.createHref(A.fullPath);return De(A,I,{params:d(I.params),hash:ur(A.hash),redirectedFrom:void 0,href:F})}let ot;if(O.path!=null)ot=De({},O,{path:cc(e,O.path,lt.path).path});else{const A=De({},O.params);for(const I in A)A[I]==null&&delete A[I];ot=De({},O,{params:u(A)}),lt.params=u(lt.params)}const ht=t.resolve(ot,lt),St=O.hash||"";ht.params=h(d(ht.params));const nt=Ig(i,De({},O,{hash:Eg(St),path:ht.path})),g=s.createHref(nt);return De({fullPath:nt,hash:St,query:i===bh?a_(O.query):O.query||{}},ht,{redirectedFrom:void 0,href:g})}function T(O){return typeof O=="string"?cc(e,O,c.value.path):De({},O)}function w(O,lt){if(l!==O)return wo(8,{from:lt,to:O})}function b(O){return P(O)}function z(O){return b(De(T(O),{replace:!0}))}function L(O){const lt=O.matched[O.matched.length-1];if(lt&&lt.redirect){const{redirect:ot}=lt;let ht=typeof ot=="function"?ot(O):ot;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=T(ht):{path:ht},ht.params={}),De({query:O.query,hash:O.hash,params:ht.path!=null?{}:O.params},ht)}}function P(O,lt){const ot=l=p(O),ht=c.value,St=O.state,nt=O.force,g=O.replace===!0,A=L(ot);if(A)return P(De(T(A),{state:typeof A=="object"?De({},St,A.state):St,force:nt,replace:g}),lt||ot);const I=ot;I.redirectedFrom=lt;let F;return!nt&&Lg(i,ht,ot)&&(F=wo(16,{to:I,from:ht}),yt(ht,ht,!0,!1)),(F?Promise.resolve(F):y(I,ht)).catch(N=>Bi(N)?Bi(N,2)?N:pt(N):Y(N,I,ht)).then(N=>{if(N){if(Bi(N,2))return P(De({replace:g},T(N.to),{state:typeof N.to=="object"?De({},St,N.to.state):St,force:nt}),lt||I)}else N=U(I,ht,!0,g,St);return E(I,ht,N),N})}function B(O,lt){const ot=w(O,lt);return ot?Promise.reject(ot):Promise.resolve()}function Q(O){const lt=rt.values().next().value;return lt&&typeof lt.runWithContext=="function"?lt.runWithContext(O):O()}function y(O,lt){let ot;const[ht,St,nt]=g_(O,lt);ot=lc(ht.reverse(),"beforeRouteLeave",O,lt);for(const A of ht)A.leaveGuards.forEach(I=>{ot.push(ds(I,O,lt))});const g=B.bind(null,O,lt);return ot.push(g),wt(ot).then(()=>{ot=[];for(const A of o.list())ot.push(ds(A,O,lt));return ot.push(g),wt(ot)}).then(()=>{ot=lc(St,"beforeRouteUpdate",O,lt);for(const A of St)A.updateGuards.forEach(I=>{ot.push(ds(I,O,lt))});return ot.push(g),wt(ot)}).then(()=>{ot=[];for(const A of nt)if(A.beforeEnter)if(pi(A.beforeEnter))for(const I of A.beforeEnter)ot.push(ds(I,O,lt));else ot.push(ds(A.beforeEnter,O,lt));return ot.push(g),wt(ot)}).then(()=>(O.matched.forEach(A=>A.enterCallbacks={}),ot=lc(nt,"beforeRouteEnter",O,lt,Q),ot.push(g),wt(ot))).then(()=>{ot=[];for(const A of r.list())ot.push(ds(A,O,lt));return ot.push(g),wt(ot)}).catch(A=>Bi(A,8)?A:Promise.reject(A))}function E(O,lt,ot){a.list().forEach(ht=>Q(()=>ht(O,lt,ot)))}function U(O,lt,ot,ht,St){const nt=w(O,lt);if(nt)return nt;const g=lt===is,A=oo?history.state:{};ot&&(ht||g?s.replace(O.fullPath,De({scroll:g&&A&&A.scroll},St)):s.push(O.fullPath,St)),c.value=O,yt(O,lt,ot,g),pt()}let X;function it(){X||(X=s.listen((O,lt,ot)=>{if(!ft.listening)return;const ht=p(O),St=L(ht);if(St){P(De(St,{replace:!0}),ht).catch(Jo);return}l=ht;const nt=c.value;oo&&Gg(mh(nt.fullPath,ot.delta),Ha()),y(ht,nt).catch(g=>Bi(g,12)?g:Bi(g,2)?(P(g.to,ht).then(A=>{Bi(A,20)&&!ot.delta&&ot.type===hr.pop&&s.go(-1,!1)}).catch(Jo),Promise.reject()):(ot.delta&&s.go(-ot.delta,!1),Y(g,ht,nt))).then(g=>{g=g||U(ht,nt,!1),g&&(ot.delta&&!Bi(g,8)?s.go(-ot.delta,!1):ot.type===hr.pop&&Bi(g,20)&&s.go(-1,!1)),E(ht,nt,g)}).catch(Jo)}))}let at=Oo(),q=Oo(),st;function Y(O,lt,ot){pt(O);const ht=q.list();return ht.length?ht.forEach(St=>St(O,lt,ot)):console.error(O),Promise.reject(O)}function mt(){return st&&c.value!==is?Promise.resolve():new Promise((O,lt)=>{at.add([O,lt])})}function pt(O){return st||(st=!O,it(),at.list().forEach(([lt,ot])=>O?ot(O):lt()),at.reset()),O}function yt(O,lt,ot,ht){const{scrollBehavior:St}=n;if(!oo||!St)return Promise.resolve();const nt=!ot&&Hg(mh(O.fullPath,0))||(ht||!ot)&&history.state&&history.state.scroll||null;return of().then(()=>St(O,lt,nt)).then(g=>g&&zg(g)).catch(g=>Y(g,O,lt))}const Lt=O=>s.go(O);let Gt;const rt=new Set,ft={currentRoute:c,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:b,replace:z,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:q.add,isReady:mt,install(O){const lt=this;O.component("RouterLink",u_),O.component("RouterView",p_),O.config.globalProperties.$router=lt,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>fo(c)}),oo&&!Gt&&c.value===is&&(Gt=!0,b(s.location).catch(St=>{}));const ot={};for(const St in is)Object.defineProperty(ot,St,{get:()=>c.value[St],enumerable:!0});O.provide(gu,lt),O.provide(jf,Qd(ot)),O.provide(il,c);const ht=O.unmount;rt.add(O),O.unmount=function(){rt.delete(O),rt.size<1&&(l=is,X&&X(),X=null,c.value=is,Gt=!1,st=!1),ht()}}};function wt(O){return O.reduce((lt,ot)=>lt.then(()=>Q(ot)),Promise.resolve())}return ft}function g_(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(l=>Mo(l,a))?i.push(a):e.push(a));const c=n.matched[r];c&&(t.matched.find(l=>Mo(l,c))||s.push(c))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="169",__=0,Ch=1,v_=2,$f=1,x_=2,Xi=3,vs=0,Dn=1,xe=2,ms=0,go=1,Ih=2,Lh=3,Dh=4,y_=5,Ds=100,M_=101,w_=102,S_=103,b_=104,E_=200,T_=201,A_=202,R_=203,sl=204,ol=205,P_=206,C_=207,I_=208,L_=209,D_=210,U_=211,N_=212,F_=213,O_=214,rl=0,al=1,cl=2,So=3,ll=4,ul=5,hl=6,dl=7,Kf=0,B_=1,z_=2,gs=0,G_=1,H_=2,k_=3,V_=4,W_=5,X_=6,q_=7,Zf=300,bo=301,Eo=302,wa=303,fl=304,ka=306,Xe=1e3,Ns=1001,pl=1002,Kn=1003,Y_=1004,Cr=1005,ui=1006,uc=1007,ps=1008,Qi=1009,Jf=1010,Qf=1011,dr=1012,vu=1013,Bs=1014,ji=1015,yr=1016,xu=1017,yu=1018,To=1020,tp=35902,ep=1021,np=1022,Zn=1023,ip=1024,sp=1025,_o=1026,Ao=1027,op=1028,Mu=1029,rp=1030,wu=1031,Su=1033,ca=33776,la=33777,ua=33778,ha=33779,ml=35840,gl=35841,_l=35842,vl=35843,xl=36196,yl=37492,Ml=37496,wl=37808,Sl=37809,bl=37810,El=37811,Tl=37812,Al=37813,Rl=37814,Pl=37815,Cl=37816,Il=37817,Ll=37818,Dl=37819,Ul=37820,Nl=37821,da=36492,Fl=36494,Ol=36495,ap=36283,Bl=36284,zl=36285,Gl=36286,j_=3200,$_=3201,cp=0,K_=1,fs="",ci="srgb",Ms="srgb-linear",bu="display-p3",Va="display-p3-linear",Sa="linear",ze="srgb",ba="rec709",Ea="p3",Ws=7680,Uh=519,Z_=512,J_=513,Q_=514,lp=515,tv=516,ev=517,nv=518,iv=519,Nh=35044,Fh="300 es",$i=2e3,Ta=2001;class Co{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oh=1234567;const tr=Math.PI/180,fr=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function rn(n,t,e){return Math.max(t,Math.min(e,n))}function Eu(n,t){return(n%t+t)%t}function sv(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ov(n,t,e){return n!==t?(e-n)/(t-n):0}function er(n,t,e){return(1-e)*n+e*t}function rv(n,t,e,i){return er(n,t,1-Math.exp(-e*i))}function av(n,t=1){return t-Math.abs(Eu(n,t*2)-t)}function cv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function lv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function uv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function hv(n,t){return n+Math.random()*(t-n)}function dv(n){return n*(.5-Math.random())}function fv(n){n!==void 0&&(Oh=n);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pv(n){return n*tr}function mv(n){return n*fr}function gv(n){return(n&n-1)===0&&n!==0}function _v(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xv(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),f=o((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ro(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ae={DEG2RAD:tr,RAD2DEG:fr,generateUUID:ks,clamp:rn,euclideanModulo:Eu,mapLinear:sv,inverseLerp:ov,lerp:er,damp:rv,pingpong:av,smoothstep:cv,smootherstep:lv,randInt:uv,randFloat:hv,randFloatSpread:dv,seededRandom:fv,degToRad:pv,radToDeg:mv,isPowerOfTwo:gv,ceilPowerOfTwo:_v,floorPowerOfTwo:vv,setQuaternionFromProperEuler:xv,normalize:En,denormalize:ro};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t,e,i,s,o,r,a,c,l){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],x=s[0],m=s[3],p=s[6],T=s[1],w=s[4],b=s[7],z=s[2],L=s[5],P=s[8];return o[0]=r*x+a*T+c*z,o[3]=r*m+a*w+c*L,o[6]=r*p+a*b+c*P,o[1]=l*x+h*T+u*z,o[4]=l*m+h*w+u*L,o[7]=l*p+h*b+u*P,o[2]=d*x+f*T+_*z,o[5]=d*m+f*w+_*L,o[8]=d*p+f*b+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,_=e*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*r)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hc.makeScale(t,e)),this}rotate(t){return this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new me;function up(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yv(){const n=pr("canvas");return n.style.display="block",n}const Bh={};function fa(n){n in Bh||(Bh[n]=!0,console.warn(n))}function Mv(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function wv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zh=new me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gh=new me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bo={[Ms]:{transfer:Sa,primaries:ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ci]:{transfer:ze,primaries:ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Va]:{transfer:Sa,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Gh),fromReference:n=>n.applyMatrix3(zh)},[bu]:{transfer:ze,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gh),fromReference:n=>n.applyMatrix3(zh).convertLinearToSRGB()}},bv=new Set([Ms,Va]),Ie={enabled:!0,_workingColorSpace:Ms,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Bo[t].toReference,s=Bo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Bo[n].primaries},getTransfer:function(n){return n===fs?Sa:Bo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Bo[t].luminanceCoefficients)}};function vo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xs;class Ev{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xs===void 0&&(Xs=pr("canvas")),Xs.width=t.width,Xs.height=t.height;const i=Xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=vo(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vo(e[i]/255)*255):e[i]=vo(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tv=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(fc(s[r].image)):o.push(fc(s[r]))}else o=fc(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function fc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ev.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Av=0;class Cn extends Co{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,i=Ns,s=Ns,o=ui,r=ps,a=Zn,c=Qi,l=Cn.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=ks(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xe:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xe:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Zf;Cn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,i=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,b=(f+1)/2,z=(p+1)/2,L=(h+d)/4,P=(u+x)/4,B=(_+m)/4;return w>b&&w>z?w<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(w),s=L/i,o=P/i):b>z?b<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(b),i=L/s,o=B/s):z<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(z),i=P/o,s=B/o),this.set(i,s,o,e),this}let T=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rv extends Co{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends Rv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class dp extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pv extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],f=o[r+1],_=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==_){let m=1-a;const p=c*d+l*f+h*_+u*x,T=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const z=Math.sqrt(w),L=Math.atan2(z,p*T);m=Math.sin(m*L)/z,a=Math.sin(a*L)/z}const b=a*T;if(c=c*m+d*b,l=l*m+f*b,h=h*m+_*b,u=u*m+x*b,m===1-a){const z=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=z,l*=z,h*=z,u*=z}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],_=o[r+3];return t[e]=a*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-a*f,t[e+2]=l*_+h*f+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(o/2),d=c(i/2),f=c(s/2),_=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,i=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new Z,Hh=new Mr;class wr{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ii):ii.fromBufferAttribute(o,r),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),Lr.subVectors(this.max,zo),qs.subVectors(t.a,zo),Ys.subVectors(t.b,zo),js.subVectors(t.c,zo),ss.subVectors(Ys,qs),os.subVectors(js,Ys),bs.subVectors(qs,js);let e=[0,-ss.z,ss.y,0,-os.z,os.y,0,-bs.z,bs.y,ss.z,0,-ss.x,os.z,0,-os.x,bs.z,0,-bs.x,-ss.y,ss.x,0,-os.y,os.x,0,-bs.y,bs.x,0];return!mc(e,qs,Ys,js,Lr)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,qs,Ys,js,Lr))?!1:(Dr.crossVectors(ss,os),e=[Dr.x,Dr.y,Dr.z],mc(e,qs,Ys,js,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ii=new Z,Ir=new wr,qs=new Z,Ys=new Z,js=new Z,ss=new Z,os=new Z,bs=new Z,zo=new Z,Lr=new Z,Dr=new Z,Es=new Z;function mc(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Es.fromArray(n,o);const a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=t.dot(Es),l=e.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Cv=new wr,Go=new Z,gc=new Z;class Wa{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Cv.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const e=Go.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Go,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(gc)),this.expandByPoint(Go.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new Z,_c=new Z,Ur=new Z,rs=new Z,vc=new Z,Nr=new Z,xc=new Z;class fp{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_c.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),rs.copy(this.origin).sub(_c);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ur),a=rs.dot(this.direction),c=-rs.dot(Ur),l=rs.lengthSq(),h=Math.abs(1-r*r);let u,d,f,_;if(h>0)if(u=r*c-a,d=r*a-c,_=o*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_c).addScaledVector(Ur,d),f}intersectSphere(t,e){Gi.subVectors(t.center,this.origin);const i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,i,s,o){vc.subVectors(e,t),Nr.subVectors(i,t),xc.crossVectors(vc,Nr);let r=this.direction.dot(xc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;rs.subVectors(this.origin,t);const c=a*this.direction.dot(Nr.crossVectors(rs,Nr));if(c<0)return null;const l=a*this.direction.dot(vc.cross(rs));if(l<0||c+l>r)return null;const h=-a*rs.dot(xc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(t,e,i,s,o,r,a,c,l,h,u,d,f,_,x,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,u,d,f,_,x,m)}set(t,e,i,s,o,r,a,c,l,h,u,d,f,_,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),o=1/$s.setFromMatrixColumn(t,1).length(),r=1/$s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=_+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,_=l*h,x=l*u;e[0]=d+x*a,e[4]=_*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-_,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,_=l*h,x=l*u;e[0]=d-x*a,e[4]=-r*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*c,f=r*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iv,t,Lv)}lookAt(t,e,i){const s=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),as.crossVectors(i,Bn),as.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),as.crossVectors(i,Bn)),as.normalize(),Fr.crossVectors(Bn,as),s[0]=as.x,s[4]=Fr.x,s[8]=Bn.x,s[1]=as.y,s[5]=Fr.y,s[9]=Bn.y,s[2]=as.z,s[6]=Fr.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],x=i[6],m=i[10],p=i[14],T=i[3],w=i[7],b=i[11],z=i[15],L=s[0],P=s[4],B=s[8],Q=s[12],y=s[1],E=s[5],U=s[9],X=s[13],it=s[2],at=s[6],q=s[10],st=s[14],Y=s[3],mt=s[7],pt=s[11],yt=s[15];return o[0]=r*L+a*y+c*it+l*Y,o[4]=r*P+a*E+c*at+l*mt,o[8]=r*B+a*U+c*q+l*pt,o[12]=r*Q+a*X+c*st+l*yt,o[1]=h*L+u*y+d*it+f*Y,o[5]=h*P+u*E+d*at+f*mt,o[9]=h*B+u*U+d*q+f*pt,o[13]=h*Q+u*X+d*st+f*yt,o[2]=_*L+x*y+m*it+p*Y,o[6]=_*P+x*E+m*at+p*mt,o[10]=_*B+x*U+m*q+p*pt,o[14]=_*Q+x*X+m*st+p*yt,o[3]=T*L+w*y+b*it+z*Y,o[7]=T*P+w*E+b*at+z*mt,o[11]=T*B+w*U+b*q+z*pt,o[15]=T*Q+w*X+b*st+z*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],x=t[7],m=t[11],p=t[15];return _*(+o*c*u-s*l*u-o*a*d+i*l*d+s*a*f-i*c*f)+x*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*h-o*c*h)+m*(+e*l*u-e*a*f-o*r*u+i*r*f+o*a*h-i*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*r*u-i*r*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],x=t[13],m=t[14],p=t[15],T=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,w=_*d*l-h*m*l-_*c*f+r*m*f+h*c*p-r*d*p,b=h*x*l-_*u*l+_*a*f-r*x*f-h*a*p+r*u*p,z=_*u*c-h*x*c-_*a*d+r*x*d+h*a*m-r*u*m,L=e*T+i*w+s*b+o*z;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=T*P,t[1]=(x*d*o-u*m*o-x*s*f+i*m*f+u*s*p-i*d*p)*P,t[2]=(a*m*o-x*c*o+x*s*l-i*m*l-a*s*p+i*c*p)*P,t[3]=(u*c*o-a*d*o-u*s*l+i*d*l+a*s*f-i*c*f)*P,t[4]=w*P,t[5]=(h*m*o-_*d*o+_*s*f-e*m*f-h*s*p+e*d*p)*P,t[6]=(_*c*o-r*m*o-_*s*l+e*m*l+r*s*p-e*c*p)*P,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*f+e*c*f)*P,t[8]=b*P,t[9]=(_*u*o-h*x*o-_*i*f+e*x*f+h*i*p-e*u*p)*P,t[10]=(r*x*o-_*a*o+_*i*l-e*x*l-r*i*p+e*a*p)*P,t[11]=(h*a*o-r*u*o-h*i*l+e*u*l+r*i*f-e*a*f)*P,t[12]=z*P,t[13]=(h*x*s-_*u*s+_*i*d-e*x*d-h*i*m+e*u*m)*P,t[14]=(_*a*s-r*x*s-_*i*c+e*x*c+r*i*m-e*a*m)*P,t[15]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,_=o*u,x=r*h,m=r*u,p=a*u,T=c*l,w=c*h,b=c*u,z=i.x,L=i.y,P=i.z;return s[0]=(1-(x+p))*z,s[1]=(f+b)*z,s[2]=(_-w)*z,s[3]=0,s[4]=(f-b)*L,s[5]=(1-(d+p))*L,s[6]=(m+T)*L,s[7]=0,s[8]=(_+w)*P,s[9]=(m-T)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=$s.set(s[0],s[1],s[2]).length();const r=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],si.copy(this);const l=1/o,h=1/r,u=1/a;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,e.setFromRotationMatrix(si),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=$i){const c=this.elements,l=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===$i)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Ta)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=$i){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*l,f=(i+s)*h;let _,x;if(a===$i)_=(r+o)*u,x=-2*u;else if(a===Ta)_=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const $s=new Z,si=new He,Iv=new Z(0,0,0),Lv=new Z(1,1,1),as=new Z,Fr=new Z,Bn=new Z,kh=new He,Vh=new Mr;class Ci{constructor(t=0,e=0,i=0,s=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dv=0;const Wh=new Z,Ks=new Mr,Hi=new He,Or=new Z,Ho=new Z,Uv=new Z,Nv=new Mr,Xh=new Z(1,0,0),qh=new Z(0,1,0),Yh=new Z(0,0,1),jh={type:"added"},Fv={type:"removed"},Zs={type:"childadded",child:null},yc={type:"childremoved",child:null};class ln extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new Z,e=new Ci,i=new Mr,s=new Z(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new me}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(Xh,t)}rotateY(t){return this.rotateOnAxis(qh,t)}rotateZ(t){return this.rotateOnAxis(Yh,t)}translateOnAxis(t,e){return Wh.copy(t).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xh,t)}translateY(t){return this.translateOnAxis(qh,t)}translateZ(t){return this.translateOnAxis(Yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Or.copy(t):Or.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Ho,Or,this.up):Hi.lookAt(Or,Ho,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Hi),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fv),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,Uv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,Nv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ln.DEFAULT_UP=new Z(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Z,ki=new Z,Mc=new Z,Vi=new Z,Js=new Z,Qs=new Z,$h=new Z,wc=new Z,Sc=new Z,bc=new Z,Ec=new Ue,Tc=new Ue,Ac=new Ue;class hi{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),oi.subVectors(t,e),s.cross(oi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){oi.subVectors(s,e),ki.subVectors(i,e),Mc.subVectors(t,e);const r=oi.dot(oi),a=oi.dot(ki),c=oi.dot(Mc),l=ki.dot(ki),h=ki.dot(Mc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,_=(r*h-a*c)*d;return o.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Vi.x),c.addScaledVector(r,Vi.y),c.addScaledVector(a,Vi.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return Ec.setScalar(0),Tc.setScalar(0),Ac.setScalar(0),Ec.fromBufferAttribute(t,e),Tc.fromBufferAttribute(t,i),Ac.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ec,o.x),r.addScaledVector(Tc,o.y),r.addScaledVector(Ac,o.z),r}static isFrontFacing(t,e,i,s){return oi.subVectors(i,e),ki.subVectors(t,e),oi.cross(ki).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),oi.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return hi.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Js.subVectors(s,i),Qs.subVectors(o,i),wc.subVectors(t,i);const c=Js.dot(wc),l=Qs.dot(wc);if(c<=0&&l<=0)return e.copy(i);Sc.subVectors(t,s);const h=Js.dot(Sc),u=Qs.dot(Sc);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Js,r);bc.subVectors(t,o);const f=Js.dot(bc),_=Qs.dot(bc);if(_>=0&&f<=_)return e.copy(o);const x=f*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Qs,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return $h.subVectors(o,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector($h,a);const p=1/(m+x+d);return r=x*p,a=d*p,e.copy(i).addScaledVector(Js,r).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class _e{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ie.workingColorSpace){if(t=Eu(t,1),e=rn(e,0,1),i=rn(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Rc(r,o,t+1/3),this.g=Rc(r,o,t),this.b=Rc(r,o,t-1/3)}return Ie.toWorkingColorSpace(this,s),this}setStyle(t,e=ci){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){const i=mp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}copyLinearToSRGB(t){return this.r=dc(t.r),this.g=dc(t.g),this.b=dc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ie.fromWorkingColorSpace(mn.copy(this),t),Math.round(rn(mn.r*255,0,255))*65536+Math.round(rn(mn.g*255,0,255))*256+Math.round(rn(mn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(mn.copy(this),e);const i=mn.r,s=mn.g,o=mn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=ci){Ie.fromWorkingColorSpace(mn.copy(this),t);const e=mn.r,i=mn.g,s=mn.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(Br);const i=er(cs.h,Br.h,e),s=er(cs.s,Br.s,e),o=er(cs.l,Br.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new _e;_e.NAMES=mp;let Ov=0;class Io extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=go,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=ol,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==Ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jn extends Io{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new Z,zr=new Vt;class Ri{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nh,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ro(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=En(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ro(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ro(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ro(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ro(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),i=En(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),i=En(i,this.array),s=En(s,this.array),o=En(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nh&&(t.usage=this.usage),t}}class gp extends Ri{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class _p extends Ri{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qe extends Ri{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Bv=0;const $n=new He,Pc=new ln,to=new Z,zn=new wr,ko=new wr,on=new Z;class yn extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(up(t)?_p:gp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new me().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];zn.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(zn.min,ko.min),zn.expandByPoint(on),on.addVectors(zn.max,ko.max),zn.expandByPoint(on)):(zn.expandByPoint(ko.min),zn.expandByPoint(ko.max))}zn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)on.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(on));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(to.fromBufferAttribute(t,l),on.add(to)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<i.count;B++)a[B]=new Z,c[B]=new Z;const l=new Z,h=new Z,u=new Z,d=new Vt,f=new Vt,_=new Vt,x=new Z,m=new Z;function p(B,Q,y){l.fromBufferAttribute(i,B),h.fromBufferAttribute(i,Q),u.fromBufferAttribute(i,y),d.fromBufferAttribute(o,B),f.fromBufferAttribute(o,Q),_.fromBufferAttribute(o,y),h.sub(l),u.sub(l),f.sub(d),_.sub(d);const E=1/(f.x*_.y-_.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(E),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(E),a[B].add(x),a[Q].add(x),a[y].add(x),c[B].add(m),c[Q].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let B=0,Q=T.length;B<Q;++B){const y=T[B],E=y.start,U=y.count;for(let X=E,it=E+U;X<it;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const w=new Z,b=new Z,z=new Z,L=new Z;function P(B){z.fromBufferAttribute(s,B),L.copy(z);const Q=a[B];w.copy(Q),w.sub(z.multiplyScalar(z.dot(Q))).normalize(),b.crossVectors(L,Q);const E=b.dot(c[B])<0?-1:1;r.setXYZW(B,w.x,w.y,w.z,E)}for(let B=0,Q=T.length;B<Q;++B){const y=T[B],E=y.start,U=y.count;for(let X=E,it=E+U;X<it;X+=3)P(t.getX(X+0)),P(t.getX(X+1)),P(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ri(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new Z,o=new Z,r=new Z,a=new Z,c=new Z,l=new Z,h=new Z,u=new Z;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new Ri(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kh=new He,Ts=new fp,Gr=new Wa,Zh=new Z,Hr=new Z,kr=new Z,Vr=new Z,Cc=new Z,Wr=new Z,Jh=new Z,Xr=new Z;class S extends ln{constructor(t=new yn,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Wr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Cc.fromBufferAttribute(u,t),r?Wr.addScaledVector(Cc,h):Wr.addScaledVector(Cc.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(o),Ts.copy(t.ray).recast(t.near),!(Gr.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Gr,Zh)===null||Ts.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&(Kh.copy(o).invert(),Ts.copy(t.ray).applyMatrix4(Kh),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=r[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=T,z=w;b<z;b+=3){const L=a.getX(b),P=a.getX(b+1),B=a.getX(b+2);s=qr(this,p,t,i,l,h,u,L,P,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const T=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=qr(this,r,t,i,l,h,u,T,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=r[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=T,z=w;b<z;b+=3){const L=b,P=b+1,B=b+2;s=qr(this,p,t,i,l,h,u,L,P,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const T=m,w=m+1,b=m+2;s=qr(this,r,t,i,l,h,u,T,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function zv(n,t,e,i,s,o,r,a){let c;if(t.side===Dn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===vs,a),c===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Xr);return l<e.near||l>e.far?null:{distance:l,point:Xr.clone(),object:n}}function qr(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Hr),n.getVertexPosition(c,kr),n.getVertexPosition(l,Vr);const h=zv(n,t,e,i,Hr,kr,Vr,Jh);if(h){const u=new Z;hi.getBarycoord(Jh,Hr,kr,Vr,u),s&&(h.uv=hi.getInterpolatedAttribute(s,a,c,l,u,new Vt)),o&&(h.uv1=hi.getInterpolatedAttribute(o,a,c,l,u,new Vt)),r&&(h.normal=hi.getInterpolatedAttribute(r,a,c,l,u,new Z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new Z,materialIndex:0};hi.getNormal(Hr,kr,Vr,d.normal),h.face=d,h.barycoord=u}return h}class Pn extends yn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,r,o,0),_("z","y","x",1,-1,i,e,-t,r,o,1),_("x","z","y",1,1,t,i,e,s,r,2),_("x","z","y",1,-1,t,i,-e,s,r,3),_("x","y","z",1,-1,t,e,i,s,o,4),_("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function _(x,m,p,T,w,b,z,L,P,B,Q){const y=b/P,E=z/B,U=b/2,X=z/2,it=L/2,at=P+1,q=B+1;let st=0,Y=0;const mt=new Z;for(let pt=0;pt<q;pt++){const yt=pt*E-X;for(let Lt=0;Lt<at;Lt++){const Gt=Lt*y-U;mt[x]=Gt*T,mt[m]=yt*w,mt[p]=it,l.push(mt.x,mt.y,mt.z),mt[x]=0,mt[m]=0,mt[p]=L>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Lt/P),u.push(1-pt/B),st+=1}}for(let pt=0;pt<B;pt++)for(let yt=0;yt<P;yt++){const Lt=d+yt+at*pt,Gt=d+yt+at*(pt+1),rt=d+(yt+1)+at*(pt+1),ft=d+(yt+1)+at*pt;c.push(Lt,Gt,ft),c.push(Gt,rt,ft),Y+=6}a.addGroup(f,Y,Q),f+=Y,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ro(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Tn(n){const t={};for(let e=0;e<n.length;e++){const i=Ro(n[e]);for(const s in i)t[s]=i[s]}return t}function Gv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const Hv={clone:Ro,merge:Tn};var kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Io{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kv,this.fragmentShader=Vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ro(t.uniforms),this.uniformsGroups=Gv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xp extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=$i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new Z,Qh=new Vt,td=new Vt;class Ge extends xp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,Qh,td),e.subVectors(td,Qh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const eo=-90,no=1;class yp extends ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(eo,no,t,e);s.layers=this.layers,this.add(s);const o=new Ge(eo,no,t,e);o.layers=this.layers,this.add(o);const r=new Ge(eo,no,t,e);r.layers=this.layers,this.add(r);const a=new Ge(eo,no,t,e);a.layers=this.layers,this.add(a);const c=new Ge(eo,no,t,e);c.layers=this.layers,this.add(c);const l=new Ge(eo,no,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===$i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Tu extends Cn{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:bo,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mp extends zs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Tu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pn(5,5,5),o=new Un({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:ms});o.uniforms.tEquirect.value=e;const r=new S(s,o),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=ui),new yp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Ic=new Z,Wv=new Z,Xv=new me;class Is{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ic.subVectors(i,e).cross(Wv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ic),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Xv.getNormalMatrix(t),s=this.coplanarPoint(Ic).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new Wa,Yr=new Z;class Au{constructor(t=new Is,e=new Is,i=new Is,s=new Is,o=new Is,r=new Is){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=$i){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],x=s[10],m=s[11],p=s[12],T=s[13],w=s[14],b=s[15];if(i[0].setComponents(c-o,d-l,m-f,b-p).normalize(),i[1].setComponents(c+o,d+l,m+f,b+p).normalize(),i[2].setComponents(c+r,d+h,m+_,b+T).normalize(),i[3].setComponents(c-r,d-h,m-_,b-T).normalize(),i[4].setComponents(c-a,d-u,m-x,b-w).normalize(),e===$i)i[5].setComponents(c+a,d+u,m+x,b+w).normalize();else if(e===Ta)i[5].setComponents(a,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wp(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function qv(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],x=u[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const x=u[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Xa extends yn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],_=[],x=[],m=[];for(let p=0;p<h;p++){const T=p*d-r;for(let w=0;w<l;w++){const b=w*u-o;_.push(b,-T,0),x.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const w=T+l*p,b=T+l*(p+1),z=T+1+l*(p+1),L=T+1+l*p;f.push(w,b,L),f.push(b,z,L)}this.setIndex(f),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jv=`#ifdef USE_ALPHAHASH
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
#endif`,Zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qv=`#ifdef USE_AOMAP
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
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ex=`#ifdef USE_BATCHING
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
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ox=`float G_BlinnPhong_Implicit( ) {
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
#endif`,ax=`#ifdef USE_BUMPMAP
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gx=`#define PI 3.141592653589793
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
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vx=`vec3 transformedNormal = objectNormal;
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
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",bx=`
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
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
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
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
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
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
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
#endif`,Xx=`struct PhysicalMaterial {
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
}`,qx=`
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ny=`#if defined( USE_POINTS_UV )
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
#endif`,iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
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
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
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
#endif`,uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
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
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,My=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iy=`float getShadowMask() {
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
}`,Ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
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
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,By=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
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
#endif`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yy=`uniform sampler2D t2D;
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
}`,jy=`varying vec3 vWorldDirection;
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
}`,Zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`#include <common>
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
}`,Qy=`#if DEPTH_PACKING == 3200
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
}`,tM=`#define DISTANCE
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
}`,eM=`#define DISTANCE
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`uniform float scale;
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`uniform vec3 diffuse;
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
}`,cM=`#define LAMBERT
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
}`,uM=`#define MATCAP
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
}`,hM=`#define MATCAP
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
}`,dM=`#define NORMAL
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
}`,fM=`#define NORMAL
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
}`,pM=`#define PHONG
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
}`,mM=`#define PHONG
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
}`,gM=`#define STANDARD
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
}`,_M=`#define STANDARD
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
}`,vM=`#define TOON
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
}`,xM=`#define TOON
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
}`,yM=`uniform float size;
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
}`,MM=`uniform vec3 diffuse;
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
}`,wM=`#include <common>
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
}`,bM=`uniform float rotation;
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
}`,pe={alphahash_fragment:Yv,alphahash_pars_fragment:jv,alphamap_fragment:$v,alphamap_pars_fragment:Kv,alphatest_fragment:Zv,alphatest_pars_fragment:Jv,aomap_fragment:Qv,aomap_pars_fragment:tx,batching_pars_vertex:ex,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:sx,bsdfs:ox,iridescence_fragment:rx,bumpmap_pars_fragment:ax,clipping_planes_fragment:cx,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:hx,color_fragment:dx,color_pars_fragment:fx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:vx,displacementmap_pars_vertex:xx,displacementmap_vertex:yx,emissivemap_fragment:Mx,emissivemap_pars_fragment:wx,colorspace_fragment:Sx,colorspace_pars_fragment:bx,envmap_fragment:Ex,envmap_common_pars_fragment:Tx,envmap_pars_fragment:Ax,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:zx,envmap_vertex:Px,fog_vertex:Cx,fog_pars_vertex:Ix,fog_fragment:Lx,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:Nx,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:Ox,lights_pars_begin:Bx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Hx,lights_phong_fragment:kx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:qx,lights_fragment_maps:Yx,lights_fragment_end:jx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:Jx,map_fragment:Qx,map_pars_fragment:ty,map_particle_fragment:ey,map_particle_pars_fragment:ny,metalnessmap_fragment:iy,metalnessmap_pars_fragment:sy,morphinstance_vertex:oy,morphcolor_vertex:ry,morphnormal_vertex:ay,morphtarget_pars_vertex:cy,morphtarget_vertex:ly,normal_fragment_begin:uy,normal_fragment_maps:hy,normal_pars_fragment:dy,normal_pars_vertex:fy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:vy,iridescence_pars_fragment:xy,opaque_fragment:yy,packing:My,premultiplied_alpha_fragment:wy,project_vertex:Sy,dithering_fragment:by,dithering_pars_fragment:Ey,roughnessmap_fragment:Ty,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Py,shadowmap_vertex:Cy,shadowmask_pars_fragment:Iy,skinbase_vertex:Ly,skinning_pars_vertex:Dy,skinning_vertex:Uy,skinnormal_vertex:Ny,specularmap_fragment:Fy,specularmap_pars_fragment:Oy,tonemapping_fragment:By,tonemapping_pars_fragment:zy,transmission_fragment:Gy,transmission_pars_fragment:Hy,uv_pars_fragment:ky,uv_pars_vertex:Vy,uv_vertex:Wy,worldpos_vertex:Xy,background_vert:qy,background_frag:Yy,backgroundCube_vert:jy,backgroundCube_frag:$y,cube_vert:Ky,cube_frag:Zy,depth_vert:Jy,depth_frag:Qy,distanceRGBA_vert:tM,distanceRGBA_frag:eM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:sM,linedashed_frag:oM,meshbasic_vert:rM,meshbasic_frag:aM,meshlambert_vert:cM,meshlambert_frag:lM,meshmatcap_vert:uM,meshmatcap_frag:hM,meshnormal_vert:dM,meshnormal_frag:fM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:gM,meshphysical_frag:_M,meshtoon_vert:vM,meshtoon_frag:xM,points_vert:yM,points_frag:MM,shadow_vert:wM,shadow_frag:SM,sprite_vert:bM,sprite_frag:EM},kt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ei={basic:{uniforms:Tn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Tn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new _e(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Tn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Tn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Tn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new _e(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Tn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Tn([kt.points,kt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Tn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Tn([kt.common,kt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Tn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Tn([kt.sprite,kt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Tn([kt.common,kt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Tn([kt.lights,kt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Ei.physical={uniforms:Tn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const jr={r:0,b:0,g:0},Rs=new Ci,TM=new He;function AM(n,t,e,i,s,o,r){const a=new _e(0);let c=o===!0?0:1,l,h,u=null,d=0,f=null;function _(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?e:t).get(w)),w}function x(T){let w=!1;const b=_(T);b===null?p(a,c):b&&b.isColor&&(p(b,1),w=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,r):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,w){const b=_(w);b&&(b.isCubeTexture||b.mapping===ka)?(h===void 0&&(h=new S(new Pn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ro(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Rs.copy(w.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(TM.makeRotationFromEuler(Rs)),h.material.toneMapped=Ie.getTransfer(b.colorSpace)!==ze,(u!==b||d!==b.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new S(new Xa(2,2),new Un({name:"BackgroundMaterial",uniforms:Ro(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ie.getTransfer(b.colorSpace)!==ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,w){T.getRGB(jr,vp(n)),i.buffers.color.setClear(jr.r,jr.g,jr.b,w,r)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),c=w,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:x,addToRenderList:m}}function RM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(y,E,U,X,it){let at=!1;const q=u(X,U,E);o!==q&&(o=q,l(o.object)),at=f(y,X,U,it),at&&_(y,X,U,it),it!==null&&t.update(it,n.ELEMENT_ARRAY_BUFFER),(at||r)&&(r=!1,b(y,E,U,X),it!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,U){const X=U.wireframe===!0;let it=i[y.id];it===void 0&&(it={},i[y.id]=it);let at=it[E.id];at===void 0&&(at={},it[E.id]=at);let q=at[X];return q===void 0&&(q=d(c()),at[X]=q),q}function d(y){const E=[],U=[],X=[];for(let it=0;it<e;it++)E[it]=0,U[it]=0,X[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:X,object:y,attributes:{},index:null}}function f(y,E,U,X){const it=o.attributes,at=E.attributes;let q=0;const st=U.getAttributes();for(const Y in st)if(st[Y].location>=0){const pt=it[Y];let yt=at[Y];if(yt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;q++}return o.attributesNum!==q||o.index!==X}function _(y,E,U,X){const it={},at=E.attributes;let q=0;const st=U.getAttributes();for(const Y in st)if(st[Y].location>=0){let pt=at[Y];pt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));const yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),it[Y]=yt,q++}o.attributes=it,o.attributesNum=q,o.index=X}function x(){const y=o.newAttributes;for(let E=0,U=y.length;E<U;E++)y[E]=0}function m(y){p(y,0)}function p(y,E){const U=o.newAttributes,X=o.enabledAttributes,it=o.attributeDivisors;U[y]=1,X[y]===0&&(n.enableVertexAttribArray(y),X[y]=1),it[y]!==E&&(n.vertexAttribDivisor(y,E),it[y]=E)}function T(){const y=o.newAttributes,E=o.enabledAttributes;for(let U=0,X=E.length;U<X;U++)E[U]!==y[U]&&(n.disableVertexAttribArray(U),E[U]=0)}function w(y,E,U,X,it,at,q){q===!0?n.vertexAttribIPointer(y,E,U,it,at):n.vertexAttribPointer(y,E,U,X,it,at)}function b(y,E,U,X){x();const it=X.attributes,at=U.getAttributes(),q=E.defaultAttributeValues;for(const st in at){const Y=at[st];if(Y.location>=0){let mt=it[st];if(mt===void 0&&(st==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),st==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const pt=mt.normalized,yt=mt.itemSize,Lt=t.get(mt);if(Lt===void 0)continue;const Gt=Lt.buffer,rt=Lt.type,ft=Lt.bytesPerElement,wt=rt===n.INT||rt===n.UNSIGNED_INT||mt.gpuType===vu;if(mt.isInterleavedBufferAttribute){const O=mt.data,lt=O.stride,ot=mt.offset;if(O.isInstancedInterleavedBuffer){for(let ht=0;ht<Y.locationSize;ht++)p(Y.location+ht,O.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ht=0;ht<Y.locationSize;ht++)m(Y.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let ht=0;ht<Y.locationSize;ht++)w(Y.location+ht,yt/Y.locationSize,rt,pt,lt*ft,(ot+yt/Y.locationSize*ht)*ft,wt)}else{if(mt.isInstancedBufferAttribute){for(let O=0;O<Y.locationSize;O++)p(Y.location+O,mt.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let O=0;O<Y.locationSize;O++)m(Y.location+O);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let O=0;O<Y.locationSize;O++)w(Y.location+O,yt/Y.locationSize,rt,pt,yt*ft,yt/Y.locationSize*O*ft,wt)}}else if(q!==void 0){const pt=q[st];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(Y.location,pt);break;case 3:n.vertexAttrib3fv(Y.location,pt);break;case 4:n.vertexAttrib4fv(Y.location,pt);break;default:n.vertexAttrib1fv(Y.location,pt)}}}}T()}function z(){B();for(const y in i){const E=i[y];for(const U in E){const X=E[U];for(const it in X)h(X[it].object),delete X[it];delete E[U]}delete i[y]}}function L(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const U in E){const X=E[U];for(const it in X)h(X[it].object),delete X[it];delete E[U]}delete i[y.id]}function P(y){for(const E in i){const U=i[E];if(U[y.id]===void 0)continue;const X=U[y.id];for(const it in X)h(X[it].object),delete X[it];delete U[y.id]}}function B(){Q(),r=!0,o!==s&&(o=s,l(o.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:Q,dispose:z,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function PM(n,t,e){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)r(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<d.length;x++)e.update(_,i,d[x])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function CM(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==Zn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const B=P===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Qi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ji&&!B)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),z=_>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:z,maxSamples:L}}function IM(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Is,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||o&&!m)o?h(null):l();else{const T=o?0:i,w=T*4;let b=p.clippingState||null;c.value=b,b=h(_,d,w,f);for(let z=0;z!==w;++z)b[z]=e[z];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const p=f+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=f;w!==x;++w,b+=4)r.copy(u[w]).applyMatrix4(T,a),r.normal.toArray(m,b),m[b+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function LM(n){let t=new WeakMap;function e(r,a){return a===wa?r.mapping=bo:a===fl&&(r.mapping=Eo),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===wa||a===fl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Mp(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Sp extends xp{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const co=4,ed=[.125,.215,.35,.446,.526,.582],Us=20,Lc=new Sp,nd=new _e;let Dc=null,Uc=0,Nc=0,Fc=!1;const Ls=(1+Math.sqrt(5))/2,io=1/Ls,id=[new Z(-Ls,io,0),new Z(Ls,io,0),new Z(-io,0,Ls),new Z(io,0,Ls),new Z(0,Ls,-io),new Z(0,Ls,io),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class sd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dc,Uc,Nc),this._renderer.xr.enabled=Fc,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bo||t.mapping===Eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:yr,format:Zn,colorSpace:Ms,depthBuffer:!1},s=od(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DM(o)),this._blurMaterial=UM(o,t,e)}return s}_compileMaterial(t){const e=new S(this._lodPlanes[0],t);this._renderer.compile(e,Lc)}_sceneToCubeUV(t,e,i,s){const a=new Ge(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nd),h.toneMapping=gs,h.autoClear=!1;const f=new Jn({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),_=new S(new Pn,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(nd),x=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const w=this._cubeSize;$r(s,T*w,p>2?w:0,w,w),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===bo||t.mapping===Eo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new S(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;$r(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Lc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=id[(s-o-1)%id.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new S(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Us-1),x=o/_,m=isFinite(o)?1+Math.floor(h*x):Us;m>Us&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);const p=[];let T=0;for(let P=0;P<Us;++P){const B=P/x,Q=Math.exp(-B*B/2);p.push(Q),P===0?T+=Q:P<m&&(T+=2*Q)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const b=this._sizeLods[s],z=3*b*(s>w-co?s-w+co:0),L=4*(this._cubeSize-b);$r(e,z,L,3*b,2*b),c.setRenderTarget(e),c.render(u,Lc)}}function DM(n){const t=[],e=[],i=[];let s=n;const o=n-co+1+ed.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-co?c=ed[r-n+co-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,x=3,m=2,p=1,T=new Float32Array(x*_*f),w=new Float32Array(m*_*f),b=new Float32Array(p*_*f);for(let L=0;L<f;L++){const P=L%3*2/3-1,B=L>2?0:-1,Q=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];T.set(Q,x*_*L),w.set(d,m*_*L);const y=[L,L,L,L,L,L];b.set(y,p*_*L)}const z=new yn;z.setAttribute("position",new Ri(T,x)),z.setAttribute("uv",new Ri(w,m)),z.setAttribute("faceIndex",new Ri(b,p)),t.push(z),s>co&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function od(n,t,e){const i=new zs(n,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function UM(n,t,e){const i=new Float32Array(Us),s=new Z(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function rd(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function ad(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function NM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===wa||c===fl,h=c===bo||c===Eo;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new sd(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new sd(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function FM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function OM(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const x=f[_];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let x=0;if(f!==null){const T=f.array;x=f.version;for(let w=0,b=T.length;w<b;w+=3){const z=T[w+0],L=T[w+1],P=T[w+2];d.push(z,L,L,P,P,z)}}else if(_!==void 0){const T=_.array;x=_.version;for(let w=0,b=T.length/3-1;w<b;w+=3){const z=w+0,L=w+1,P=w+2;d.push(z,L,L,P,P,z)}}else return;const m=new(up(d)?_p:gp)(d,1);m.version=x;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function BM(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function l(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,o,d*r,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,i,1)}function u(d,f,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,x,0,_);let p=0;for(let T=0;T<_;T++)p+=f[T];for(let T=0;T<x.length;T++)e.update(p,i,x[T])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function GM(n,t,e){const i=new WeakMap,s=new Ue;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let z=a.attributes.position.count*b,L=1;z>t.maxTextureSize&&(L=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const P=new Float32Array(z*L*4*u),B=new dp(P,z,L,u);B.type=ji,B.needsUpdate=!0;const Q=b*4;for(let E=0;E<u;E++){const U=p[E],X=T[E],it=w[E],at=z*L*4*E;for(let q=0;q<U.count;q++){const st=q*Q;_===!0&&(s.fromBufferAttribute(U,q),P[at+st+0]=s.x,P[at+st+1]=s.y,P[at+st+2]=s.z,P[at+st+3]=0),x===!0&&(s.fromBufferAttribute(X,q),P[at+st+4]=s.x,P[at+st+5]=s.y,P[at+st+6]=s.z,P[at+st+7]=0),m===!0&&(s.fromBufferAttribute(it,q),P[at+st+8]=s.x,P[at+st+9]=s.y,P[at+st+10]=s.z,P[at+st+11]=it.itemSize===4?s.w:1)}}d={count:u,texture:B,size:new Vt(z,L)},i.set(a,d),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function HM(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class bp extends Cn{constructor(t,e,i,s,o,r,a,c,l,h=_o){if(h!==_o&&h!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_o&&(i=Bs),i===void 0&&h===Ao&&(i=To),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Kn,this.minFilter=c!==void 0?c:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ep=new Cn,cd=new bp(1,1),Tp=new dp,Ap=new Pv,Rp=new Tu,ld=[],ud=[],hd=new Float32Array(16),dd=new Float32Array(9),fd=new Float32Array(4);function Lo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=ld[s];if(o===void 0&&(o=new Float32Array(s),ld[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function en(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=ud[t];e===void 0&&(e=new Int32Array(t),ud[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function kM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function VM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2fv(this.addr,t),nn(e,t)}}function WM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;n.uniform3fv(this.addr,t),nn(e,t)}}function XM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4fv(this.addr,t),nn(e,t)}}function qM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;fd.set(i),n.uniformMatrix2fv(this.addr,!1,fd),nn(e,i)}}function YM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;dd.set(i),n.uniformMatrix3fv(this.addr,!1,dd),nn(e,i)}}function jM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;hd.set(i),n.uniformMatrix4fv(this.addr,!1,hd),nn(e,i)}}function $M(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function KM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2iv(this.addr,t),nn(e,t)}}function ZM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3iv(this.addr,t),nn(e,t)}}function JM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4iv(this.addr,t),nn(e,t)}}function QM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function tw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2uiv(this.addr,t),nn(e,t)}}function ew(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3uiv(this.addr,t),nn(e,t)}}function nw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4uiv(this.addr,t),nn(e,t)}}function iw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(cd.compareFunction=lp,o=cd):o=Ep,e.setTexture2D(t||o,s)}function sw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ap,s)}function ow(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rp,s)}function rw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Tp,s)}function aw(n){switch(n){case 5126:return kM;case 35664:return VM;case 35665:return WM;case 35666:return XM;case 35674:return qM;case 35675:return YM;case 35676:return jM;case 5124:case 35670:return $M;case 35667:case 35671:return KM;case 35668:case 35672:return ZM;case 35669:case 35673:return JM;case 5125:return QM;case 36294:return tw;case 36295:return ew;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return rw}}function cw(n,t){n.uniform1fv(this.addr,t)}function lw(n,t){const e=Lo(t,this.size,2);n.uniform2fv(this.addr,e)}function uw(n,t){const e=Lo(t,this.size,3);n.uniform3fv(this.addr,e)}function hw(n,t){const e=Lo(t,this.size,4);n.uniform4fv(this.addr,e)}function dw(n,t){const e=Lo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function fw(n,t){const e=Lo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function pw(n,t){const e=Lo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function mw(n,t){n.uniform1iv(this.addr,t)}function gw(n,t){n.uniform2iv(this.addr,t)}function _w(n,t){n.uniform3iv(this.addr,t)}function vw(n,t){n.uniform4iv(this.addr,t)}function xw(n,t){n.uniform1uiv(this.addr,t)}function yw(n,t){n.uniform2uiv(this.addr,t)}function Mw(n,t){n.uniform3uiv(this.addr,t)}function ww(n,t){n.uniform4uiv(this.addr,t)}function Sw(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Ep,o[r])}function bw(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Ap,o[r])}function Ew(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Rp,o[r])}function Tw(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);en(i,o)||(n.uniform1iv(this.addr,o),nn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Tp,o[r])}function Aw(n){switch(n){case 5126:return cw;case 35664:return lw;case 35665:return uw;case 35666:return hw;case 35674:return dw;case 35675:return fw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return _w;case 35669:case 35673:return vw;case 5125:return xw;case 36294:return yw;case 36295:return Mw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}class Rw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=aw(e.type)}}class Pw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Aw(e.type)}}class Cw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Oc=/(\w+)(\])?(\[|\.)?/g;function pd(n,t){n.seq.push(t),n.map[t.id]=t}function Iw(n,t,e){const i=n.name,s=i.length;for(Oc.lastIndex=0;;){const o=Oc.exec(i),r=Oc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){pd(e,l===void 0?new Rw(a,n,t):new Pw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Cw(a),pd(e,u)),e=u}}}class pa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Iw(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function md(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Lw=37297;let Dw=0;function Uw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Nw(n){const t=Ie.getPrimaries(Ie.workingColorSpace),e=Ie.getPrimaries(n);let i;switch(t===e?i="":t===Ea&&e===ba?i="LinearDisplayP3ToLinearSRGB":t===ba&&e===Ea&&(i="LinearSRGBToLinearDisplayP3"),n){case Ms:case Va:return[i,"LinearTransferOETF"];case ci:case bu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Uw(n.getShaderSource(t),r)}else return s}function Fw(n,t){const e=Nw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ow(n,t){let e;switch(t){case G_:e="Linear";break;case H_:e="Reinhard";break;case k_:e="Cineon";break;case V_:e="ACESFilmic";break;case X_:e="AgX";break;case q_:e="Neutral";break;case W_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new Z;function Bw(){Ie.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function Gw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Xo(n){return n!==""}function _d(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(kw,Ww)}const Vw=new Map;function Ww(n,t){let e=pe[t];if(e===void 0){const i=Vw.get(t);if(i!==void 0)e=pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(n){return n.replace(Xw,qw)}function qw(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function yd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Yw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===x_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function jw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bo:case Eo:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $w(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Eo:t="ENVMAP_MODE_REFRACTION";break}return t}function Kw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kf:t="ENVMAP_BLENDING_MULTIPLY";break;case B_:t="ENVMAP_BLENDING_MIX";break;case z_:t="ENVMAP_BLENDING_ADD";break}return t}function Zw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Jw(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Yw(e),l=jw(e),h=$w(e),u=Kw(e),d=Zw(e),f=zw(e),_=Gw(o),x=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Xo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Xo).join(`
`),p.length>0&&(p+=`
`)):(m=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),p=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gs?"#define TONE_MAPPING":"",e.toneMapping!==gs?pe.tonemapping_pars_fragment:"",e.toneMapping!==gs?Ow("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Fw("linearToOutputTexel",e.outputColorSpace),Bw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xo).join(`
`)),r=Hl(r),r=_d(r,e),r=vd(r,e),a=Hl(a),a=_d(a,e),a=vd(a,e),r=xd(r),a=xd(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+m+r,b=T+p+a,z=md(s,s.VERTEX_SHADER,w),L=md(s,s.FRAGMENT_SHADER,b);s.attachShader(x,z),s.attachShader(x,L),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(E){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),X=s.getShaderInfoLog(z).trim(),it=s.getShaderInfoLog(L).trim();let at=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,z,L);else{const st=gd(s,z,"vertex"),Y=gd(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+st+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(X===""||it==="")&&(q=!1);q&&(E.diagnostics={runnable:at,programLog:U,vertexShader:{log:X,prefix:m},fragmentShader:{log:it,prefix:p}})}s.deleteShader(z),s.deleteShader(L),B=new pa(s,x),Q=Hw(s,x)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let Q;this.getAttributes=function(){return Q===void 0&&P(this),Q};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Lw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=L,this}let Qw=0;class tS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new eS(t),e.set(t,i)),i}}class eS{constructor(t){this.id=Qw++,this.code=t,this.usedTimes=0}}function nS(n,t,e,i,s,o,r){const a=new pp,c=new tS,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,E,U,X,it){const at=X.fog,q=it.geometry,st=y.isMeshStandardMaterial?X.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||st),mt=Y&&Y.mapping===ka?Y.image.height:null,pt=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Lt=yt!==void 0?yt.length:0;let Gt=0;q.morphAttributes.position!==void 0&&(Gt=1),q.morphAttributes.normal!==void 0&&(Gt=2),q.morphAttributes.color!==void 0&&(Gt=3);let rt,ft,wt,O;if(pt){const Zt=Ei[pt];rt=Zt.vertexShader,ft=Zt.fragmentShader}else rt=y.vertexShader,ft=y.fragmentShader,c.update(y),wt=c.getVertexShaderID(y),O=c.getFragmentShaderID(y);const lt=n.getRenderTarget(),ot=it.isInstancedMesh===!0,ht=it.isBatchedMesh===!0,St=!!y.map,nt=!!y.matcap,g=!!Y,A=!!y.aoMap,I=!!y.lightMap,F=!!y.bumpMap,N=!!y.normalMap,W=!!y.displacementMap,J=!!y.emissiveMap,M=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,$=y.clearcoat>0,k=y.dispersion>0,V=y.iridescence>0,ut=y.sheen>0,ct=y.transmission>0,_t=C&&!!y.anisotropyMap,Tt=$&&!!y.clearcoatMap,dt=$&&!!y.clearcoatNormalMap,Mt=$&&!!y.clearcoatRoughnessMap,Pt=V&&!!y.iridescenceMap,Ut=V&&!!y.iridescenceThicknessMap,Ct=ut&&!!y.sheenColorMap,qt=ut&&!!y.sheenRoughnessMap,Ot=!!y.specularMap,$t=!!y.specularColorMap,G=!!y.specularIntensityMap,vt=ct&&!!y.transmissionMap,et=ct&&!!y.thicknessMap,tt=!!y.gradientMap,bt=!!y.alphaMap,Et=y.alphaTest>0,Ht=!!y.alphaHash,te=!!y.extensions;let ie=gs;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ie=n.toneMapping);const ne={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:ft,defines:y.defines,customVertexShaderID:wt,customFragmentShaderID:O,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ht,batchingColor:ht&&it._colorsTexture!==null,instancing:ot,instancingColor:ot&&it.instanceColor!==null,instancingMorph:ot&&it.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ms,alphaToCoverage:!!y.alphaToCoverage,map:St,matcap:nt,envMap:g,envMapMode:g&&Y.mapping,envMapCubeUVHeight:mt,aoMap:A,lightMap:I,bumpMap:F,normalMap:N,displacementMap:f&&W,emissiveMap:J,normalMapObjectSpace:N&&y.normalMapType===K_,normalMapTangentSpace:N&&y.normalMapType===cp,metalnessMap:M,roughnessMap:v,anisotropy:C,anisotropyMap:_t,clearcoat:$,clearcoatMap:Tt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Mt,dispersion:k,iridescence:V,iridescenceMap:Pt,iridescenceThicknessMap:Ut,sheen:ut,sheenColorMap:Ct,sheenRoughnessMap:qt,specularMap:Ot,specularColorMap:$t,specularIntensityMap:G,transmission:ct,transmissionMap:vt,thicknessMap:et,gradientMap:tt,opaque:y.transparent===!1&&y.blending===go&&y.alphaToCoverage===!1,alphaMap:bt,alphaTest:Et,alphaHash:Ht,combine:y.combine,mapUv:St&&m(y.map.channel),aoMapUv:A&&m(y.aoMap.channel),lightMapUv:I&&m(y.lightMap.channel),bumpMapUv:F&&m(y.bumpMap.channel),normalMapUv:N&&m(y.normalMap.channel),displacementMapUv:W&&m(y.displacementMap.channel),emissiveMapUv:J&&m(y.emissiveMap.channel),metalnessMapUv:M&&m(y.metalnessMap.channel),roughnessMapUv:v&&m(y.roughnessMap.channel),anisotropyMapUv:_t&&m(y.anisotropyMap.channel),clearcoatMapUv:Tt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:qt&&m(y.sheenRoughnessMap.channel),specularMapUv:Ot&&m(y.specularMap.channel),specularColorMapUv:$t&&m(y.specularColorMap.channel),specularIntensityMapUv:G&&m(y.specularIntensityMap.channel),transmissionMapUv:vt&&m(y.transmissionMap.channel),thicknessMapUv:et&&m(y.thicknessMap.channel),alphaMapUv:bt&&m(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(N||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!q.attributes.uv&&(St||bt),fog:!!at,useFog:y.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:it.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&Ie.getTransfer(y.map.colorSpace)===ze,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xe,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:te&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&y.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function T(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)E.push(U),E.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(w(E,y),b(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function w(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function z(y){const E=x[y.type];let U;if(E){const X=Ei[E];U=Hv.clone(X.uniforms)}else U=y.uniforms;return U}function L(y,E){let U;for(let X=0,it=h.length;X<it;X++){const at=h[X];if(at.cacheKey===E){U=at,++U.usedTimes;break}}return U===void 0&&(U=new Jw(n,E,y,o),h.push(U)),U}function P(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function B(y){c.remove(y)}function Q(){c.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:z,acquireProgram:L,releaseProgram:P,releaseShaderCache:B,programs:h,dispose:Q}}function iS(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function sS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Md(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wd(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,_,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,_,x,m){const p=r(u,d,f,_,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,_,x,m){const p=r(u,d,f,_,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||sS),i.length>1&&i.sort(d||Md),s.length>1&&s.sort(d||Md)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function oS(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new wd,n.set(i,[r])):s>=o.length?(r=new wd,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function rS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new _e};break;case"SpotLight":e={position:new Z,direction:new Z,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function aS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let cS=0;function lS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function uS(n){const t=new rS,e=aS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Z);const s=new Z,o=new He,r=new He;function a(l){let h=0,u=0,d=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,T=0,w=0,b=0,z=0,L=0,P=0;l.sort(lS);for(let Q=0,y=l.length;Q<y;Q++){const E=l[Q],U=E.color,X=E.intensity,it=E.distance,at=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=U.r*X,u+=U.g*X,d+=U.b*X;else if(E.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(E.sh.coefficients[q],X);P++}else if(E.isDirectionalLight){const q=t.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const st=E.shadow,Y=e.get(E);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=at,i.directionalShadowMatrix[f]=E.shadow.matrix,T++}i.directional[f]=q,f++}else if(E.isSpotLight){const q=t.get(E);q.position.setFromMatrixPosition(E.matrixWorld),q.color.copy(U).multiplyScalar(X),q.distance=it,q.coneCos=Math.cos(E.angle),q.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),q.decay=E.decay,i.spot[x]=q;const st=E.shadow;if(E.map&&(i.spotLightMap[z]=E.map,z++,st.updateMatrices(E),E.castShadow&&L++),i.spotLightMatrix[x]=st.matrix,E.castShadow){const Y=e.get(E);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=at,b++}x++}else if(E.isRectAreaLight){const q=t.get(E);q.color.copy(U).multiplyScalar(X),q.halfWidth.set(E.width*.5,0,0),q.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=q,m++}else if(E.isPointLight){const q=t.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),q.distance=E.distance,q.decay=E.decay,E.castShadow){const st=E.shadow,Y=e.get(E);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,Y.shadowCameraNear=st.camera.near,Y.shadowCameraFar=st.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=at,i.pointShadowMatrix[_]=E.shadow.matrix,w++}i.point[_]=q,_++}else if(E.isHemisphereLight){const q=t.get(E);q.skyColor.copy(E.color).multiplyScalar(X),q.groundColor.copy(E.groundColor).multiplyScalar(X),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==f||B.pointLength!==_||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==T||B.numPointShadows!==w||B.numSpotShadows!==b||B.numSpotMaps!==z||B.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+z-L,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,B.directionalLength=f,B.pointLength=_,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=T,B.numPointShadows=w,B.numSpotShadows=b,B.numSpotMaps=z,B.numLightProbes=P,i.version=cS++)}function c(l,h){let u=0,d=0,f=0,_=0,x=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const w=l[p];if(w.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(w.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),r.identity(),o.copy(w.matrixWorld),o.premultiply(m),r.extractRotation(o),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),_++}else if(w.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Sd(n){const t=new uS(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function hS(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Sd(n),t.set(s,[a])):o>=r.length?(a=new Sd(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class dS extends Io{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fS extends Io{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mS=`uniform sampler2D shadow_pass;
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
}`;function gS(n,t,e){let i=new Au;const s=new Vt,o=new Vt,r=new Ue,a=new dS({depthPacking:$_}),c=new fS,l={},h=e.maxTextureSize,u={[vs]:Dn,[Dn]:vs,[xe]:xe},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:pS,fragmentShader:mS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new yn;_.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new S(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let p=this.type;this.render=function(L,P,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const Q=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ms),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const X=p!==Xi&&this.type===Xi,it=p===Xi&&this.type!==Xi;for(let at=0,q=L.length;at<q;at++){const st=L[at],Y=st.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const mt=Y.getFrameExtents();if(s.multiply(mt),o.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/mt.x),s.x=o.x*mt.x,Y.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/mt.y),s.y=o.y*mt.y,Y.mapSize.y=o.y)),Y.map===null||X===!0||it===!0){const yt=this.type!==Xi?{minFilter:Kn,magFilter:Kn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new zs(s.x,s.y,yt),Y.map.texture.name=st.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const pt=Y.getViewportCount();for(let yt=0;yt<pt;yt++){const Lt=Y.getViewport(yt);r.set(o.x*Lt.x,o.y*Lt.y,o.x*Lt.z,o.y*Lt.w),U.viewport(r),Y.updateMatrices(st,yt),i=Y.getFrustum(),b(P,B,Y.camera,st,this.type)}Y.isPointLightShadow!==!0&&this.type===Xi&&T(Y,B),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(Q,y,E)};function T(L,P){const B=t.update(x);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new zs(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,B,d,x,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,B,f,x,null)}function w(L,P,B,Q){let y=null;const E=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(E!==void 0)y=E;else if(y=B.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const U=y.uuid,X=P.uuid;let it=l[U];it===void 0&&(it={},l[U]=it);let at=it[X];at===void 0&&(at=y.clone(),it[X]=at,P.addEventListener("dispose",z)),y=at}if(y.visible=P.visible,y.wireframe=P.wireframe,Q===Xi?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=B}return y}function b(L,P,B,Q,y){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===Xi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const X=t.update(L),it=L.material;if(Array.isArray(it)){const at=X.groups;for(let q=0,st=at.length;q<st;q++){const Y=at[q],mt=it[Y.materialIndex];if(mt&&mt.visible){const pt=w(L,mt,Q,y);L.onBeforeShadow(n,L,P,B,X,pt,Y),n.renderBufferDirect(B,null,X,pt,L,Y),L.onAfterShadow(n,L,P,B,X,pt,Y)}}}else if(it.visible){const at=w(L,it,Q,y);L.onBeforeShadow(n,L,P,B,X,at,null),n.renderBufferDirect(B,null,X,at,L,null),L.onAfterShadow(n,L,P,B,X,at,null)}}const U=L.children;for(let X=0,it=U.length;X<it;X++)b(U[X],P,B,Q,y)}function z(L){L.target.removeEventListener("dispose",z);for(const B in l){const Q=l[B],y=L.target.uuid;y in Q&&(Q[y].dispose(),delete Q[y])}}}const _S={[rl]:al,[cl]:hl,[ll]:dl,[So]:ul,[al]:rl,[hl]:cl,[dl]:ll,[ul]:So};function vS(n){function t(){let G=!1;const vt=new Ue;let et=null;const tt=new Ue(0,0,0,0);return{setMask:function(bt){et!==bt&&!G&&(n.colorMask(bt,bt,bt,bt),et=bt)},setLocked:function(bt){G=bt},setClear:function(bt,Et,Ht,te,ie){ie===!0&&(bt*=te,Et*=te,Ht*=te),vt.set(bt,Et,Ht,te),tt.equals(vt)===!1&&(n.clearColor(bt,Et,Ht,te),tt.copy(vt))},reset:function(){G=!1,et=null,tt.set(-1,0,0,0)}}}function e(){let G=!1,vt=!1,et=null,tt=null,bt=null;return{setReversed:function(Et){vt=Et},setTest:function(Et){Et?wt(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(Et){et!==Et&&!G&&(n.depthMask(Et),et=Et)},setFunc:function(Et){if(vt&&(Et=_S[Et]),tt!==Et){switch(Et){case rl:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case cl:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case ul:n.depthFunc(n.GEQUAL);break;case hl:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=Et}},setLocked:function(Et){G=Et},setClear:function(Et){bt!==Et&&(n.clearDepth(Et),bt=Et)},reset:function(){G=!1,et=null,tt=null,bt=null}}}function i(){let G=!1,vt=null,et=null,tt=null,bt=null,Et=null,Ht=null,te=null,ie=null;return{setTest:function(ne){G||(ne?wt(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(ne){vt!==ne&&!G&&(n.stencilMask(ne),vt=ne)},setFunc:function(ne,Zt,se){(et!==ne||tt!==Zt||bt!==se)&&(n.stencilFunc(ne,Zt,se),et=ne,tt=Zt,bt=se)},setOp:function(ne,Zt,se){(Et!==ne||Ht!==Zt||te!==se)&&(n.stencilOp(ne,Zt,se),Et=ne,Ht=Zt,te=se)},setLocked:function(ne){G=ne},setClear:function(ne){ie!==ne&&(n.clearStencil(ne),ie=ne)},reset:function(){G=!1,vt=null,et=null,tt=null,bt=null,Et=null,Ht=null,te=null,ie=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,m=null,p=null,T=null,w=null,b=null,z=null,L=new _e(0,0,0),P=0,B=!1,Q=null,y=null,E=null,U=null,X=null;const it=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,q=0;const st=n.getParameter(n.VERSION);st.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(st)[1]),at=q>=1):st.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),at=q>=2);let Y=null,mt={};const pt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),Lt=new Ue().fromArray(pt),Gt=new Ue().fromArray(yt);function rt(G,vt,et,tt){const bt=new Uint8Array(4),Et=n.createTexture();n.bindTexture(G,Et),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<et;Ht++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(vt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return Et}const ft={};ft[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),wt(n.DEPTH_TEST),o.setFunc(So),I(!1),F(Ch),wt(n.CULL_FACE),g(ms);function wt(G){l[G]!==!0&&(n.enable(G),l[G]=!0)}function O(G){l[G]!==!1&&(n.disable(G),l[G]=!1)}function lt(G,vt){return h[G]!==vt?(n.bindFramebuffer(G,vt),h[G]=vt,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function ot(G,vt){let et=d,tt=!1;if(G){et=u.get(vt),et===void 0&&(et=[],u.set(vt,et));const bt=G.textures;if(et.length!==bt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,Ht=bt.length;Et<Ht;Et++)et[Et]=n.COLOR_ATTACHMENT0+Et;et.length=bt.length,tt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,tt=!0);tt&&n.drawBuffers(et)}function ht(G){return f!==G?(n.useProgram(G),f=G,!0):!1}const St={[Ds]:n.FUNC_ADD,[M_]:n.FUNC_SUBTRACT,[w_]:n.FUNC_REVERSE_SUBTRACT};St[S_]=n.MIN,St[b_]=n.MAX;const nt={[E_]:n.ZERO,[T_]:n.ONE,[A_]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[D_]:n.SRC_ALPHA_SATURATE,[I_]:n.DST_COLOR,[P_]:n.DST_ALPHA,[R_]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[L_]:n.ONE_MINUS_DST_COLOR,[C_]:n.ONE_MINUS_DST_ALPHA,[U_]:n.CONSTANT_COLOR,[N_]:n.ONE_MINUS_CONSTANT_COLOR,[F_]:n.CONSTANT_ALPHA,[O_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(G,vt,et,tt,bt,Et,Ht,te,ie,ne){if(G===ms){_===!0&&(O(n.BLEND),_=!1);return}if(_===!1&&(wt(n.BLEND),_=!0),G!==y_){if(G!==x||ne!==B){if((m!==Ds||w!==Ds)&&(n.blendEquation(n.FUNC_ADD),m=Ds,w=Ds),ne)switch(G){case go:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ih:n.blendFunc(n.ONE,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case go:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ih:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,T=null,b=null,z=null,L.set(0,0,0),P=0,x=G,B=ne}return}bt=bt||vt,Et=Et||et,Ht=Ht||tt,(vt!==m||bt!==w)&&(n.blendEquationSeparate(St[vt],St[bt]),m=vt,w=bt),(et!==p||tt!==T||Et!==b||Ht!==z)&&(n.blendFuncSeparate(nt[et],nt[tt],nt[Et],nt[Ht]),p=et,T=tt,b=Et,z=Ht),(te.equals(L)===!1||ie!==P)&&(n.blendColor(te.r,te.g,te.b,ie),L.copy(te),P=ie),x=G,B=!1}function A(G,vt){G.side===xe?O(n.CULL_FACE):wt(n.CULL_FACE);let et=G.side===Dn;vt&&(et=!et),I(et),G.blending===go&&G.transparent===!1?g(ms):g(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const tt=G.stencilWrite;r.setTest(tt),tt&&(r.setMask(G.stencilWriteMask),r.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),r.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),W(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?wt(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(G){Q!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),Q=G)}function F(G){G!==__?(wt(n.CULL_FACE),G!==y&&(G===Ch?n.cullFace(n.BACK):G===v_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),y=G}function N(G){G!==E&&(at&&n.lineWidth(G),E=G)}function W(G,vt,et){G?(wt(n.POLYGON_OFFSET_FILL),(U!==vt||X!==et)&&(n.polygonOffset(vt,et),U=vt,X=et)):O(n.POLYGON_OFFSET_FILL)}function J(G){G?wt(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function M(G){G===void 0&&(G=n.TEXTURE0+it-1),Y!==G&&(n.activeTexture(G),Y=G)}function v(G,vt,et){et===void 0&&(Y===null?et=n.TEXTURE0+it-1:et=Y);let tt=mt[et];tt===void 0&&(tt={type:void 0,texture:void 0},mt[et]=tt),(tt.type!==G||tt.texture!==vt)&&(Y!==et&&(n.activeTexture(et),Y=et),n.bindTexture(G,vt||ft[G]),tt.type=G,tt.texture=vt)}function C(){const G=mt[Y];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(G){Lt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Lt.copy(G))}function Ct(G){Gt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Gt.copy(G))}function qt(G,vt){let et=c.get(vt);et===void 0&&(et=new WeakMap,c.set(vt,et));let tt=et.get(G);tt===void 0&&(tt=n.getUniformBlockIndex(vt,G.name),et.set(G,tt))}function Ot(G,vt){const tt=c.get(vt).get(G);a.get(vt)!==tt&&(n.uniformBlockBinding(vt,tt,G.__bindingPointIndex),a.set(vt,tt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},Y=null,mt={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,m=null,p=null,T=null,w=null,b=null,z=null,L=new _e(0,0,0),P=0,B=!1,Q=null,y=null,E=null,U=null,X=null,Lt.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:wt,disable:O,bindFramebuffer:lt,drawBuffers:ot,useProgram:ht,setBlending:g,setMaterial:A,setFlipSided:I,setCullFace:F,setLineWidth:N,setPolygonOffset:W,setScissorTest:J,activeTexture:M,bindTexture:v,unbindTexture:C,compressedTexImage2D:$,compressedTexImage3D:k,texImage2D:Mt,texImage3D:Pt,updateUBOMapping:qt,uniformBlockBinding:Ot,texStorage2D:Tt,texStorage3D:dt,texSubImage2D:V,texSubImage3D:ut,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Ut,viewport:Ct,reset:$t}}function bd(n,t,e,i){const s=xS(i);switch(e){case ep:return n*t;case ip:return n*t;case sp:return n*t*2;case op:return n*t/s.components*s.byteLength;case Mu:return n*t/s.components*s.byteLength;case rp:return n*t*2/s.components*s.byteLength;case wu:return n*t*2/s.components*s.byteLength;case np:return n*t*3/s.components*s.byteLength;case Zn:return n*t*4/s.components*s.byteLength;case Su:return n*t*4/s.components*s.byteLength;case ca:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:case vl:return Math.max(n,16)*Math.max(t,8)/4;case ml:case _l:return Math.max(n,8)*Math.max(t,8)/2;case xl:case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case da:case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ap:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case zl:case Gl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xS(n){switch(n){case Qi:case Jf:return{byteLength:1,components:1};case dr:case Qf:case yr:return{byteLength:2,components:1};case xu:case yu:return{byteLength:2,components:4};case Bs:case vu:case ji:return{byteLength:4,components:1};case tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function yS(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,v){return f?new OffscreenCanvas(M,v):pr("canvas")}function x(M,v,C){let $=1;const k=J(M);if((k.width>C||k.height>C)&&($=C/Math.max(k.width,k.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const V=Math.floor($*k.width),ut=Math.floor($*k.height);u===void 0&&(u=_(V,ut));const ct=v?_(V,ut):u;return ct.width=V,ct.height=ut,ct.getContext("2d").drawImage(M,0,0,V,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+V+"x"+ut+")."),ct}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==Kn&&M.minFilter!==ui}function p(M){n.generateMipmap(M)}function T(M,v,C,$,k=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=v;if(v===n.RED&&(C===n.FLOAT&&(V=n.R32F),C===n.HALF_FLOAT&&(V=n.R16F),C===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.R8UI),C===n.UNSIGNED_SHORT&&(V=n.R16UI),C===n.UNSIGNED_INT&&(V=n.R32UI),C===n.BYTE&&(V=n.R8I),C===n.SHORT&&(V=n.R16I),C===n.INT&&(V=n.R32I)),v===n.RG&&(C===n.FLOAT&&(V=n.RG32F),C===n.HALF_FLOAT&&(V=n.RG16F),C===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RG8UI),C===n.UNSIGNED_SHORT&&(V=n.RG16UI),C===n.UNSIGNED_INT&&(V=n.RG32UI),C===n.BYTE&&(V=n.RG8I),C===n.SHORT&&(V=n.RG16I),C===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGB8UI),C===n.UNSIGNED_SHORT&&(V=n.RGB16UI),C===n.UNSIGNED_INT&&(V=n.RGB32UI),C===n.BYTE&&(V=n.RGB8I),C===n.SHORT&&(V=n.RGB16I),C===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),C===n.UNSIGNED_INT&&(V=n.RGBA32UI),C===n.BYTE&&(V=n.RGBA8I),C===n.SHORT&&(V=n.RGBA16I),C===n.INT&&(V=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),v===n.RGBA){const ut=k?Sa:Ie.getTransfer($);C===n.FLOAT&&(V=n.RGBA32F),C===n.HALF_FLOAT&&(V=n.RGBA16F),C===n.UNSIGNED_BYTE&&(V=ut===ze?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function w(M,v){let C;return M?v===null||v===Bs||v===To?C=n.DEPTH24_STENCIL8:v===ji?C=n.DEPTH32F_STENCIL8:v===dr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bs||v===To?C=n.DEPTH_COMPONENT24:v===ji?C=n.DEPTH_COMPONENT32F:v===dr&&(C=n.DEPTH_COMPONENT16),C}function b(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Kn&&M.minFilter!==ui?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function z(M){const v=M.target;v.removeEventListener("dispose",z),P(v),v.isVideoTexture&&h.delete(v)}function L(M){const v=M.target;v.removeEventListener("dispose",L),Q(v)}function P(M){const v=i.get(M);if(v.__webglInit===void 0)return;const C=M.source,$=d.get(C);if($){const k=$[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&B(M),Object.keys($).length===0&&d.delete(C)}i.remove(M)}function B(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const C=M.source,$=d.get(C);delete $[v.__cacheKey],r.memory.textures--}function Q(M){const v=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let k=0;k<v.__webglFramebuffer[$].length;k++)n.deleteFramebuffer(v.__webglFramebuffer[$][k]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=M.textures;for(let $=0,k=C.length;$<k;$++){const V=i.get(C[$]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),r.memory.textures--),i.remove(C[$])}i.remove(M)}let y=0;function E(){y=0}function U(){const M=y;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),y+=1,M}function X(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function it(M,v){const C=i.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(C,M,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function at(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Gt(C,M,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function q(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Gt(C,M,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function st(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){rt(C,M,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const Y={[Xe]:n.REPEAT,[Ns]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},mt={[Kn]:n.NEAREST,[Y_]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[uc]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},pt={[Z_]:n.NEVER,[iv]:n.ALWAYS,[J_]:n.LESS,[lp]:n.LEQUAL,[Q_]:n.EQUAL,[nv]:n.GEQUAL,[tv]:n.GREATER,[ev]:n.NOTEQUAL};function yt(M,v){if(v.type===ji&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ui||v.magFilter===uc||v.magFilter===Cr||v.magFilter===ps||v.minFilter===ui||v.minFilter===uc||v.minFilter===Cr||v.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Y[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Y[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Y[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Kn||v.minFilter!==Cr&&v.minFilter!==ps||v.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Lt(M,v){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",z));const $=v.source;let k=d.get($);k===void 0&&(k={},d.set($,k));const V=X(v);if(V!==M.__cacheKey){k[V]===void 0&&(k[V]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),k[V].usedTimes++;const ut=k[M.__cacheKey];ut!==void 0&&(k[M.__cacheKey].usedTimes--,ut.usedTimes===0&&B(v)),M.__cacheKey=V,M.__webglTexture=k[V].texture}return C}function Gt(M,v,C){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const k=Lt(M,v),V=v.source;e.bindTexture($,M.__webglTexture,n.TEXTURE0+C);const ut=i.get(V);if(V.version!==ut.__version||k===!0){e.activeTexture(n.TEXTURE0+C);const ct=Ie.getPrimaries(Ie.workingColorSpace),_t=v.colorSpace===fs?null:Ie.getPrimaries(v.colorSpace),Tt=v.colorSpace===fs||ct===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let dt=x(v.image,!1,s.maxTextureSize);dt=W(v,dt);const Mt=o.convert(v.format,v.colorSpace),Pt=o.convert(v.type);let Ut=T(v.internalFormat,Mt,Pt,v.colorSpace,v.isVideoTexture);yt($,v);let Ct;const qt=v.mipmaps,Ot=v.isVideoTexture!==!0,$t=ut.__version===void 0||k===!0,G=V.dataReady,vt=b(v,dt);if(v.isDepthTexture)Ut=w(v.format===Ao,v.type),$t&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,Ut,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Ut,dt.width,dt.height,0,Mt,Pt,null));else if(v.isDataTexture)if(qt.length>0){Ot&&$t&&e.texStorage2D(n.TEXTURE_2D,vt,Ut,qt[0].width,qt[0].height);for(let et=0,tt=qt.length;et<tt;et++)Ct=qt[et],Ot?G&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Ct.width,Ct.height,Mt,Pt,Ct.data):e.texImage2D(n.TEXTURE_2D,et,Ut,Ct.width,Ct.height,0,Mt,Pt,Ct.data);v.generateMipmaps=!1}else Ot?($t&&e.texStorage2D(n.TEXTURE_2D,vt,Ut,dt.width,dt.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,Mt,Pt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,dt.width,dt.height,0,Mt,Pt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ot&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Ut,qt[0].width,qt[0].height,dt.depth);for(let et=0,tt=qt.length;et<tt;et++)if(Ct=qt[et],v.format!==Zn)if(Mt!==null)if(Ot){if(G)if(v.layerUpdates.size>0){const bt=bd(Ct.width,Ct.height,v.format,v.type);for(const Et of v.layerUpdates){const Ht=Ct.data.subarray(Et*bt/Ct.data.BYTES_PER_ELEMENT,(Et+1)*bt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,Et,Ct.width,Ct.height,1,Mt,Ht,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Ct.width,Ct.height,dt.depth,Mt,Ct.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Ut,Ct.width,Ct.height,dt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Ct.width,Ct.height,dt.depth,Mt,Pt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Ut,Ct.width,Ct.height,dt.depth,0,Mt,Pt,Ct.data)}else{Ot&&$t&&e.texStorage2D(n.TEXTURE_2D,vt,Ut,qt[0].width,qt[0].height);for(let et=0,tt=qt.length;et<tt;et++)Ct=qt[et],v.format!==Zn?Mt!==null?Ot?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,Ct.width,Ct.height,Mt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Ut,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?G&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Ct.width,Ct.height,Mt,Pt,Ct.data):e.texImage2D(n.TEXTURE_2D,et,Ut,Ct.width,Ct.height,0,Mt,Pt,Ct.data)}else if(v.isDataArrayTexture)if(Ot){if($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Ut,dt.width,dt.height,dt.depth),G)if(v.layerUpdates.size>0){const et=bd(dt.width,dt.height,v.format,v.type);for(const tt of v.layerUpdates){const bt=dt.data.subarray(tt*et/dt.data.BYTES_PER_ELEMENT,(tt+1)*et/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,dt.width,dt.height,1,Mt,Pt,bt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Pt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,dt.width,dt.height,dt.depth,0,Mt,Pt,dt.data);else if(v.isData3DTexture)Ot?($t&&e.texStorage3D(n.TEXTURE_3D,vt,Ut,dt.width,dt.height,dt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Pt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,dt.width,dt.height,dt.depth,0,Mt,Pt,dt.data);else if(v.isFramebufferTexture){if($t)if(Ot)e.texStorage2D(n.TEXTURE_2D,vt,Ut,dt.width,dt.height);else{let et=dt.width,tt=dt.height;for(let bt=0;bt<vt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Ut,et,tt,0,Mt,Pt,null),et>>=1,tt>>=1}}else if(qt.length>0){if(Ot&&$t){const et=J(qt[0]);e.texStorage2D(n.TEXTURE_2D,vt,Ut,et.width,et.height)}for(let et=0,tt=qt.length;et<tt;et++)Ct=qt[et],Ot?G&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Mt,Pt,Ct):e.texImage2D(n.TEXTURE_2D,et,Ut,Mt,Pt,Ct);v.generateMipmaps=!1}else if(Ot){if($t){const et=J(dt);e.texStorage2D(n.TEXTURE_2D,vt,Ut,et.width,et.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Pt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Ut,Mt,Pt,dt);m(v)&&p($),ut.__version=V.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function rt(M,v,C){if(v.image.length!==6)return;const $=Lt(M,v),k=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const V=i.get(k);if(k.version!==V.__version||$===!0){e.activeTexture(n.TEXTURE0+C);const ut=Ie.getPrimaries(Ie.workingColorSpace),ct=v.colorSpace===fs?null:Ie.getPrimaries(v.colorSpace),_t=v.colorSpace===fs||ut===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let tt=0;tt<6;tt++)!Tt&&!dt?Mt[tt]=x(v.image[tt],!0,s.maxCubemapSize):Mt[tt]=dt?v.image[tt].image:v.image[tt],Mt[tt]=W(v,Mt[tt]);const Pt=Mt[0],Ut=o.convert(v.format,v.colorSpace),Ct=o.convert(v.type),qt=T(v.internalFormat,Ut,Ct,v.colorSpace),Ot=v.isVideoTexture!==!0,$t=V.__version===void 0||$===!0,G=k.dataReady;let vt=b(v,Pt);yt(n.TEXTURE_CUBE_MAP,v);let et;if(Tt){Ot&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,qt,Pt.width,Pt.height);for(let tt=0;tt<6;tt++){et=Mt[tt].mipmaps;for(let bt=0;bt<et.length;bt++){const Et=et[bt];v.format!==Zn?Ut!==null?Ot?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,Et.width,Et.height,Ut,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,qt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,Et.width,Et.height,Ut,Ct,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,qt,Et.width,Et.height,0,Ut,Ct,Et.data)}}}else{if(et=v.mipmaps,Ot&&$t){et.length>0&&vt++;const tt=J(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(dt){Ot?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Mt[tt].width,Mt[tt].height,Ut,Ct,Mt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,Mt[tt].width,Mt[tt].height,0,Ut,Ct,Mt[tt].data);for(let bt=0;bt<et.length;bt++){const Ht=et[bt].image[tt].image;Ot?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Ht.width,Ht.height,Ut,Ct,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,qt,Ht.width,Ht.height,0,Ut,Ct,Ht.data)}}else{Ot?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ut,Ct,Mt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,Ut,Ct,Mt[tt]);for(let bt=0;bt<et.length;bt++){const Et=et[bt];Ot?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Ut,Ct,Et.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,qt,Ut,Ct,Et.image[tt])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),V.__version=k.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ft(M,v,C,$,k,V){const ut=o.convert(C.format,C.colorSpace),ct=o.convert(C.type),_t=T(C.internalFormat,ut,ct,C.colorSpace);if(!i.get(v).__hasExternalTextures){const dt=Math.max(1,v.width>>V),Mt=Math.max(1,v.height>>V);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,V,_t,dt,Mt,v.depth,0,ut,ct,null):e.texImage2D(k,V,_t,dt,Mt,0,ut,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,k,i.get(C).__webglTexture,0,I(v)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,k,i.get(C).__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(M,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const $=v.depthTexture,k=$&&$.isDepthTexture?$.type:null,V=w(v.stencilBuffer,k),ut=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=I(v);F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,V,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,M)}else{const $=v.textures;for(let k=0;k<$.length;k++){const V=$[k],ut=o.convert(V.format,V.colorSpace),ct=o.convert(V.type),_t=T(V.internalFormat,ut,ct,V.colorSpace),Tt=I(v);C&&F(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,_t,v.width,v.height):F(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,_t,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_t,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),it(v.depthTexture,0);const $=i.get(v.depthTexture).__webglTexture,k=I(v);if(v.depthTexture.format===_o)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(v.depthTexture.format===Ao)F(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function lt(M){const v=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const $=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",k)};$.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=$}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");O(v.__webglFramebuffer,M)}else if(C){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),wt(v.__webglDepthbuffer[$],M,!1);else{const k=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),wt(v.__webglDepthbuffer,M,!1);else{const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,k)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(M,v,C){const $=i.get(M);v!==void 0&&ft($.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&lt(M)}function ht(M){const v=M.texture,C=i.get(M),$=i.get(v);M.addEventListener("dispose",L);const k=M.textures,V=M.isWebGLCubeRenderTarget===!0,ut=k.length>1;if(ut||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,r.memory.textures++),V){C.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ct]=[];for(let _t=0;_t<v.mipmaps.length;_t++)C.__webglFramebuffer[ct][_t]=n.createFramebuffer()}else C.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)C.__webglFramebuffer[ct]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ut)for(let ct=0,_t=k.length;ct<_t;ct++){const Tt=i.get(k[ct]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),r.memory.textures++)}if(M.samples>0&&F(M)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ct=0;ct<k.length;ct++){const _t=k[ct];C.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ct]);const Tt=o.convert(_t.format,_t.colorSpace),dt=o.convert(_t.type),Mt=T(_t.internalFormat,Tt,dt,_t.colorSpace,M.isXRRenderTarget===!0),Pt=I(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,Mt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,C.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),wt(C.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),yt(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)ft(C.__webglFramebuffer[ct][_t],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else ft(C.__webglFramebuffer[ct],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ct=0,_t=k.length;ct<_t;ct++){const Tt=k[ct],dt=i.get(Tt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),yt(n.TEXTURE_2D,Tt),ft(C.__webglFramebuffer,M,Tt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Tt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ct=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),yt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)ft(C.__webglFramebuffer[_t],M,v,n.COLOR_ATTACHMENT0,ct,_t);else ft(C.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}M.depthBuffer&&lt(M)}function St(M){const v=M.textures;for(let C=0,$=v.length;C<$;C++){const k=v[C];if(m(k)){const V=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ut=i.get(k).__webglTexture;e.bindTexture(V,ut),p(V),e.unbindTexture()}}}const nt=[],g=[];function A(M){if(M.samples>0){if(F(M)===!1){const v=M.textures,C=M.width,$=M.height;let k=n.COLOR_BUFFER_BIT;const V=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(M),ct=v.length>1;if(ct)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[_t]);const Tt=i.get(v[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,C,$,0,0,C,$,k,n.NEAREST),c===!0&&(nt.length=0,g.length=0,nt.push(n.COLOR_ATTACHMENT0+_t),M.depthBuffer&&M.resolveDepthBuffer===!1&&(nt.push(V),g.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,ut.__webglColorRenderbuffer[_t]);const Tt=i.get(v[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(M){return Math.min(s.maxSamples,M.samples)}function F(M){const v=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(M){const v=r.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function W(M,v){const C=M.colorSpace,$=M.format,k=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==Ms&&C!==fs&&(Ie.getTransfer(C)===ze?($!==Zn||k!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function J(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=it,this.setTexture2DArray=at,this.setTexture3D=q,this.setTextureCube=st,this.rebindTextures=ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=F}function MS(n,t){function e(i,s=fs){let o;const r=Ie.getTransfer(s);if(i===Qi)return n.UNSIGNED_BYTE;if(i===xu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jf)return n.BYTE;if(i===Qf)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===vu)return n.INT;if(i===Bs)return n.UNSIGNED_INT;if(i===ji)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===ep)return n.ALPHA;if(i===np)return n.RGB;if(i===Zn)return n.RGBA;if(i===ip)return n.LUMINANCE;if(i===sp)return n.LUMINANCE_ALPHA;if(i===_o)return n.DEPTH_COMPONENT;if(i===Ao)return n.DEPTH_STENCIL;if(i===op)return n.RED;if(i===Mu)return n.RED_INTEGER;if(i===rp)return n.RG;if(i===wu)return n.RG_INTEGER;if(i===Su)return n.RGBA_INTEGER;if(i===ca||i===la||i===ua||i===ha)if(r===ze)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===_l||i===vl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===yl||i===Ml)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xl||i===yl)return r===ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ml)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wl||i===Sl||i===bl||i===El||i===Tl||i===Al||i===Rl||i===Pl||i===Cl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===wl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===da||i===Fl||i===Ol)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===da)return r===ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ol)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ap||i===Bl||i===zl||i===Gl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===da)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class wS extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SS={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SS)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const bS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ES=`
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

}`;class TS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Cn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Un({vertexShader:bS,fragmentShader:ES,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new S(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AS extends Co{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const x=new TS,m=e.getContextAttributes();let p=null,T=null;const w=[],b=[],z=new Vt;let L=null;const P=new Ge;P.layers.enable(1),P.viewport=new Ue;const B=new Ge;B.layers.enable(2),B.viewport=new Ue;const Q=[P,B],y=new wS;y.layers.enable(1),y.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ft=w[rt];return ft===void 0&&(ft=new Bc,w[rt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(rt){let ft=w[rt];return ft===void 0&&(ft=new Bc,w[rt]=ft),ft.getGripSpace()},this.getHand=function(rt){let ft=w[rt];return ft===void 0&&(ft=new Bc,w[rt]=ft),ft.getHandSpace()};function X(rt){const ft=b.indexOf(rt.inputSource);if(ft===-1)return;const wt=w[ft];wt!==void 0&&(wt.update(rt.inputSource,rt.frame,l||r),wt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function it(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",at);for(let rt=0;rt<w.length;rt++){const ft=b[rt];ft!==null&&(b[rt]=null,w[rt].disconnect(ft))}E=null,U=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,T=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){o=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(rt){l=rt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",it),s.addEventListener("inputsourceschange",at),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new zs(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,wt=null,O=null;m.depth&&(O=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?Ao:_o,wt=m.stencil?To:Bs);const lt={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new zs(d.textureWidth,d.textureHeight,{format:Zn,type:Qi,depthTexture:new bp(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(rt){for(let ft=0;ft<rt.removed.length;ft++){const wt=rt.removed[ft],O=b.indexOf(wt);O>=0&&(b[O]=null,w[O].disconnect(wt))}for(let ft=0;ft<rt.added.length;ft++){const wt=rt.added[ft];let O=b.indexOf(wt);if(O===-1){for(let ot=0;ot<w.length;ot++)if(ot>=b.length){b.push(wt),O=ot;break}else if(b[ot]===null){b[ot]=wt,O=ot;break}if(O===-1)break}const lt=w[O];lt&&lt.connect(wt)}}const q=new Z,st=new Z;function Y(rt,ft,wt){q.setFromMatrixPosition(ft.matrixWorld),st.setFromMatrixPosition(wt.matrixWorld);const O=q.distanceTo(st),lt=ft.projectionMatrix.elements,ot=wt.projectionMatrix.elements,ht=lt[14]/(lt[10]-1),St=lt[14]/(lt[10]+1),nt=(lt[9]+1)/lt[5],g=(lt[9]-1)/lt[5],A=(lt[8]-1)/lt[0],I=(ot[8]+1)/ot[0],F=ht*A,N=ht*I,W=O/(-A+I),J=W*-A;if(ft.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(J),rt.translateZ(W),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),lt[10]===-1)rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const M=ht+W,v=St+W,C=F-J,$=N+(O-J),k=nt*St/v*M,V=g*St/v*M;rt.projectionMatrix.makePerspective(C,$,k,V,M,v),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function mt(rt,ft){ft===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ft.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let ft=rt.near,wt=rt.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),y.near=B.near=P.near=ft,y.far=B.far=P.far=wt,(E!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,U=y.far);const O=rt.parent,lt=y.cameras;mt(y,O);for(let ot=0;ot<lt.length;ot++)mt(lt[ot],O);lt.length===2?Y(y,P,B):y.projectionMatrix.copy(P.projectionMatrix),pt(rt,y,O)};function pt(rt,ft,wt){wt===null?rt.matrix.copy(ft.matrixWorld):(rt.matrix.copy(wt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ft.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=fr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(rt){c=rt,d!==null&&(d.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let yt=null;function Lt(rt,ft){if(h=ft.getViewerPose(l||r),_=ft,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let O=!1;wt.length!==y.cameras.length&&(y.cameras.length=0,O=!0);for(let ot=0;ot<wt.length;ot++){const ht=wt[ot];let St=null;if(f!==null)St=f.getViewport(ht);else{const g=u.getViewSubImage(d,ht);St=g.viewport,ot===0&&(t.setRenderTargetTextures(T,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(T))}let nt=Q[ot];nt===void 0&&(nt=new Ge,nt.layers.enable(ot),nt.viewport=new Ue,Q[ot]=nt),nt.matrix.fromArray(ht.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ht.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(St.x,St.y,St.width,St.height),ot===0&&(y.matrix.copy(nt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),O===!0&&y.cameras.push(nt)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const ot=u.getDepthInformation(wt[0]);ot&&ot.isValid&&ot.texture&&x.init(t,ot,s.renderState)}}for(let wt=0;wt<w.length;wt++){const O=b[wt],lt=w[wt];O!==null&&lt!==void 0&&lt.update(O,ft,l||r)}yt&&yt(rt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const Gt=new wp;Gt.setAnimationLoop(Lt),this.setAnimationLoop=function(rt){yt=rt},this.dispose=function(){}}}const Ps=new Ci,RS=new He;function PS(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,w,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(o(m,p),_(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),w=T.envMap,b=T.envMapRotation;w&&(m.envMap.value=w,Ps.copy(b),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),m.envMapRotation.value.setFromMatrix4(RS.makeRotationFromEuler(Ps)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function CS(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){const b=w.program;i.uniformBlockBinding(T,b)}function l(T,w){let b=s[T.id];b===void 0&&(_(T),b=h(T),s[T.id]=b,T.addEventListener("dispose",m));const z=w.program;i.updateUBOMapping(T,z);const L=t.render.frame;o[T.id]!==L&&(d(T),o[T.id]=L)}function h(T){const w=u();T.__bindingPointIndex=w;const b=n.createBuffer(),z=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,z,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function u(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const w=s[T.id],b=T.uniforms,z=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,P=b.length;L<P;L++){const B=Array.isArray(b[L])?b[L]:[b[L]];for(let Q=0,y=B.length;Q<y;Q++){const E=B[Q];if(f(E,L,Q,z)===!0){const U=E.__offset,X=Array.isArray(E.value)?E.value:[E.value];let it=0;for(let at=0;at<X.length;at++){const q=X[at],st=x(q);typeof q=="number"||typeof q=="boolean"?(E.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,U+it,E.__data)):q.isMatrix3?(E.__data[0]=q.elements[0],E.__data[1]=q.elements[1],E.__data[2]=q.elements[2],E.__data[3]=0,E.__data[4]=q.elements[3],E.__data[5]=q.elements[4],E.__data[6]=q.elements[5],E.__data[7]=0,E.__data[8]=q.elements[6],E.__data[9]=q.elements[7],E.__data[10]=q.elements[8],E.__data[11]=0):(q.toArray(E.__data,it),it+=st.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,w,b,z){const L=T.value,P=w+"_"+b;if(z[P]===void 0)return typeof L=="number"||typeof L=="boolean"?z[P]=L:z[P]=L.clone(),!0;{const B=z[P];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return z[P]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function _(T){const w=T.uniforms;let b=0;const z=16;for(let P=0,B=w.length;P<B;P++){const Q=Array.isArray(w[P])?w[P]:[w[P]];for(let y=0,E=Q.length;y<E;y++){const U=Q[y],X=Array.isArray(U.value)?U.value:[U.value];for(let it=0,at=X.length;it<at;it++){const q=X[it],st=x(q),Y=b%z,mt=Y%st.boundary,pt=Y+mt;b+=mt,pt!==0&&z-pt<st.storage&&(b+=z-pt),U.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=st.storage}}}const L=b%z;return L>0&&(b+=z-L),T.__size=b,T.__cache={},this}function x(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const b=r.indexOf(w.__bindingPointIndex);r.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class Xn{constructor(t={}){const{canvas:e=yv(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=gs,this.toneMappingExposure=1;const w=this;let b=!1,z=0,L=0,P=null,B=-1,Q=null;const y=new Ue,E=new Ue;let U=null;const X=new _e(0);let it=0,at=e.width,q=e.height,st=1,Y=null,mt=null;const pt=new Ue(0,0,at,q),yt=new Ue(0,0,at,q);let Lt=!1;const Gt=new Au;let rt=!1,ft=!1;const wt=new He,O=new He,lt=new Z,ot=new Ue,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function nt(){return P===null?st:1}let g=i;function A(R,K){return e.getContext(R,K)}try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_u}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),g===null){const K="webgl2";if(g=A(K,R),g===null)throw A(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let I,F,N,W,J,M,v,C,$,k,V,ut,ct,_t,Tt,dt,Mt,Pt,Ut,Ct,qt,Ot,$t,G;function vt(){I=new FM(g),I.init(),Ot=new MS(g,I),F=new CM(g,I,t,Ot),N=new vS(g),F.reverseDepthBuffer&&N.buffers.depth.setReversed(!0),W=new zM(g),J=new iS,M=new yS(g,I,N,J,F,Ot,W),v=new LM(w),C=new NM(w),$=new qv(g),$t=new RM(g,$),k=new OM(g,$,W,$t),V=new HM(g,k,$,W),Ut=new GM(g,F,M),dt=new IM(J),ut=new nS(w,v,C,I,F,$t,dt),ct=new PS(w,J),_t=new oS,Tt=new hS(I),Pt=new AM(w,v,C,N,V,d,c),Mt=new gS(w,V,F),G=new CS(g,W,F,N),Ct=new PM(g,I,W),qt=new BM(g,I,W),W.programs=ut.programs,w.capabilities=F,w.extensions=I,w.properties=J,w.renderLists=_t,w.shadowMap=Mt,w.state=N,w.info=W}vt();const et=new AS(w,g);this.xr=et,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const R=I.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=I.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(R){R!==void 0&&(st=R,this.setSize(at,q,!1))},this.getSize=function(R){return R.set(at,q)},this.setSize=function(R,K,D=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=R,q=K,e.width=Math.floor(R*st),e.height=Math.floor(K*st),D===!0&&(e.style.width=R+"px",e.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(at*st,q*st).floor()},this.setDrawingBufferSize=function(R,K,D){at=R,q=K,st=D,e.width=Math.floor(R*D),e.height=Math.floor(K*D),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,K,D,j){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,K,D,j),N.viewport(y.copy(pt).multiplyScalar(st).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,K,D,j){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,K,D,j),N.scissor(E.copy(yt).multiplyScalar(st).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(R){N.setScissorTest(Lt=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){mt=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(R=!0,K=!0,D=!0){let j=0;if(R){let H=!1;if(P!==null){const gt=P.texture.format;H=gt===Su||gt===wu||gt===Mu}if(H){const gt=P.texture.type,At=gt===Qi||gt===Bs||gt===dr||gt===To||gt===xu||gt===yu,Nt=Pt.getClearColor(),Dt=Pt.getClearAlpha(),Xt=Nt.r,Wt=Nt.g,zt=Nt.b;At?(f[0]=Xt,f[1]=Wt,f[2]=zt,f[3]=Dt,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=Xt,_[1]=Wt,_[2]=zt,_[3]=Dt,g.clearBufferiv(g.COLOR,0,_))}else j|=g.COLOR_BUFFER_BIT}K&&(j|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(j|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),_t.dispose(),Tt.dispose(),J.dispose(),v.dispose(),C.dispose(),V.dispose(),$t.dispose(),G.dispose(),ut.dispose(),et.dispose(),et.removeEventListener("sessionstart",re),et.removeEventListener("sessionend",ye),ue.stop()};function tt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=W.autoReset,K=Mt.enabled,D=Mt.autoUpdate,j=Mt.needsUpdate,H=Mt.type;vt(),W.autoReset=R,Mt.enabled=K,Mt.autoUpdate=D,Mt.needsUpdate=j,Mt.type=H}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){const K=R.target;K.removeEventListener("dispose",Ht),te(K)}function te(R){ie(R),J.remove(R)}function ie(R){const K=J.get(R).programs;K!==void 0&&(K.forEach(function(D){ut.releaseProgram(D)}),R.isShaderMaterial&&ut.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,D,j,H,gt){K===null&&(K=ht);const At=H.isMesh&&H.matrixWorld.determinant()<0,Nt=le(R,K,D,j,H);N.setMaterial(j,At);let Dt=D.index,Xt=1;if(j.wireframe===!0){if(Dt=k.getWireframeAttribute(D),Dt===void 0)return;Xt=2}const Wt=D.drawRange,zt=D.attributes.position;let Qt=Wt.start*Xt,oe=(Wt.start+Wt.count)*Xt;gt!==null&&(Qt=Math.max(Qt,gt.start*Xt),oe=Math.min(oe,(gt.start+gt.count)*Xt)),Dt!==null?(Qt=Math.max(Qt,0),oe=Math.min(oe,Dt.count)):zt!=null&&(Qt=Math.max(Qt,0),oe=Math.min(oe,zt.count));const de=oe-Qt;if(de<0||de===1/0)return;$t.setup(H,j,Nt,D,Dt);let ve,ce=Ct;if(Dt!==null&&(ve=$.get(Dt),ce=qt,ce.setIndex(ve)),H.isMesh)j.wireframe===!0?(N.setLineWidth(j.wireframeLinewidth*nt()),ce.setMode(g.LINES)):ce.setMode(g.TRIANGLES);else if(H.isLine){let Kt=j.linewidth;Kt===void 0&&(Kt=1),N.setLineWidth(Kt*nt()),H.isLineSegments?ce.setMode(g.LINES):H.isLineLoop?ce.setMode(g.LINE_LOOP):ce.setMode(g.LINE_STRIP)}else H.isPoints?ce.setMode(g.POINTS):H.isSprite&&ce.setMode(g.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ce.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))ce.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Kt=H._multiDrawStarts,Ae=H._multiDrawCounts,Rt=H._multiDrawCount,Re=Dt?$.get(Dt).bytesPerElement:1,Pe=J.get(j).currentProgram.getUniforms();for(let Me=0;Me<Rt;Me++)Pe.setValue(g,"_gl_DrawID",Me),ce.render(Kt[Me]/Re,Ae[Me])}else if(H.isInstancedMesh)ce.renderInstances(Qt,de,H.count);else if(D.isInstancedBufferGeometry){const Kt=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,Ae=Math.min(D.instanceCount,Kt);ce.renderInstances(Qt,de,Ae)}else ce.render(Qt,de)};function ne(R,K,D){R.transparent===!0&&R.side===xe&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,Ke(R,K,D),R.side=vs,R.needsUpdate=!0,Ke(R,K,D),R.side=xe):Ke(R,K,D)}this.compile=function(R,K,D=null){D===null&&(D=R),m=Tt.get(D),m.init(K),T.push(m),D.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==D&&R.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const j=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){const Nt=gt[At];ne(Nt,D,H),j.add(Nt)}else ne(gt,D,H),j.add(gt)}),T.pop(),m=null,j},this.compileAsync=function(R,K,D=null){const j=this.compile(R,K,D);return new Promise(H=>{function gt(){if(j.forEach(function(At){J.get(At).currentProgram.isReady()&&j.delete(At)}),j.size===0){H(R);return}setTimeout(gt,10)}I.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Zt=null;function se(R){Zt&&Zt(R)}function re(){ue.stop()}function ye(){ue.start()}const ue=new wp;ue.setAnimationLoop(se),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(R){Zt=R,et.setAnimationLoop(R),R===null?ue.stop():ue.start()},et.addEventListener("sessionstart",re),et.addEventListener("sessionend",ye),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(K),K=et.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,K,P),m=Tt.get(R,T.length),m.init(K),T.push(m),O.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Gt.setFromProjectionMatrix(O),ft=this.localClippingEnabled,rt=dt.init(this.clippingPlanes,ft),x=_t.get(R,p.length),x.init(),p.push(x),et.enabled===!0&&et.isPresenting===!0){const gt=w.xr.getDepthSensingMesh();gt!==null&&Ne(gt,K,-1/0,w.sortObjects)}Ne(R,K,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(Y,mt),St=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,St&&Pt.addToRenderList(x,R),this.info.render.frame++,rt===!0&&dt.beginShadows();const D=m.state.shadowsArray;Mt.render(D,R,K),rt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,H=x.transmissive;if(m.setupLights(),K.isArrayCamera){const gt=K.cameras;if(H.length>0)for(let At=0,Nt=gt.length;At<Nt;At++){const Dt=gt[At];ke(j,H,R,Dt)}St&&Pt.render(R);for(let At=0,Nt=gt.length;At<Nt;At++){const Dt=gt[At];Se(x,R,Dt,Dt.viewport)}}else H.length>0&&ke(j,H,R,K),St&&Pt.render(R),Se(x,R,K);P!==null&&(M.updateMultisampleRenderTarget(P),M.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(w,R,K),$t.resetDefaultState(),B=-1,Q=null,T.pop(),T.length>0?(m=T[T.length-1],rt===!0&&dt.setGlobalState(w.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Ne(R,K,D,j){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)D=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Gt.intersectsSprite(R)){j&&ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(O);const At=V.update(R),Nt=R.material;Nt.visible&&x.push(R,At,Nt,D,ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Gt.intersectsObject(R))){const At=V.update(R),Nt=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ot.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),ot.copy(At.boundingSphere.center)),ot.applyMatrix4(R.matrixWorld).applyMatrix4(O)),Array.isArray(Nt)){const Dt=At.groups;for(let Xt=0,Wt=Dt.length;Xt<Wt;Xt++){const zt=Dt[Xt],Qt=Nt[zt.materialIndex];Qt&&Qt.visible&&x.push(R,At,Qt,D,ot.z,zt)}}else Nt.visible&&x.push(R,At,Nt,D,ot.z,null)}}const gt=R.children;for(let At=0,Nt=gt.length;At<Nt;At++)Ne(gt[At],K,D,j)}function Se(R,K,D,j){const H=R.opaque,gt=R.transmissive,At=R.transparent;m.setupLightsView(D),rt===!0&&dt.setGlobalState(w.clippingPlanes,D),j&&N.viewport(y.copy(j)),H.length>0&&we(H,K,D),gt.length>0&&we(gt,K,D),At.length>0&&we(At,K,D),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function ke(R,K,D,j){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new zs(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?yr:Qi,minFilter:ps,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const gt=m.state.transmissionRenderTarget[j.id],At=j.viewport||y;gt.setSize(At.z,At.w);const Nt=w.getRenderTarget();w.setRenderTarget(gt),w.getClearColor(X),it=w.getClearAlpha(),it<1&&w.setClearColor(16777215,.5),w.clear(),St&&Pt.render(D);const Dt=w.toneMapping;w.toneMapping=gs;const Xt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),rt===!0&&dt.setGlobalState(w.clippingPlanes,j),we(R,D,j),M.updateMultisampleRenderTarget(gt),M.updateRenderTargetMipmap(gt),I.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let zt=0,Qt=K.length;zt<Qt;zt++){const oe=K[zt],de=oe.object,ve=oe.geometry,ce=oe.material,Kt=oe.group;if(ce.side===xe&&de.layers.test(j.layers)){const Ae=ce.side;ce.side=Dn,ce.needsUpdate=!0,Ye(de,D,j,ve,ce,Kt),ce.side=Ae,ce.needsUpdate=!0,Wt=!0}}Wt===!0&&(M.updateMultisampleRenderTarget(gt),M.updateRenderTargetMipmap(gt))}w.setRenderTarget(Nt),w.setClearColor(X,it),Xt!==void 0&&(j.viewport=Xt),w.toneMapping=Dt}function we(R,K,D){const j=K.isScene===!0?K.overrideMaterial:null;for(let H=0,gt=R.length;H<gt;H++){const At=R[H],Nt=At.object,Dt=At.geometry,Xt=j===null?At.material:j,Wt=At.group;Nt.layers.test(D.layers)&&Ye(Nt,K,D,Dt,Xt,Wt)}}function Ye(R,K,D,j,H,gt){R.onBeforeRender(w,K,D,j,H,gt),R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(w,K,D,j,R,gt),H.transparent===!0&&H.side===xe&&H.forceSinglePass===!1?(H.side=Dn,H.needsUpdate=!0,w.renderBufferDirect(D,K,j,H,R,gt),H.side=vs,H.needsUpdate=!0,w.renderBufferDirect(D,K,j,H,R,gt),H.side=xe):w.renderBufferDirect(D,K,j,H,R,gt),R.onAfterRender(w,K,D,j,H,gt)}function Ke(R,K,D){K.isScene!==!0&&(K=ht);const j=J.get(R),H=m.state.lights,gt=m.state.shadowsArray,At=H.state.version,Nt=ut.getParameters(R,H.state,gt,K,D),Dt=ut.getProgramCacheKey(Nt);let Xt=j.programs;j.environment=R.isMeshStandardMaterial?K.environment:null,j.fog=K.fog,j.envMap=(R.isMeshStandardMaterial?C:v).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Ht),Xt=new Map,j.programs=Xt);let Wt=Xt.get(Dt);if(Wt!==void 0){if(j.currentProgram===Wt&&j.lightsStateVersion===At)return It(R,Nt),Wt}else Nt.uniforms=ut.getUniforms(R),R.onBeforeCompile(Nt,w),Wt=ut.acquireProgram(Nt,Dt),Xt.set(Dt,Wt),j.uniforms=Nt.uniforms;const zt=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=dt.uniform),It(R,Nt),j.needsLights=Te(R),j.lightsStateVersion=At,j.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.directionalShadowMap.value=H.state.directionalShadowMap,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotShadowMap.value=H.state.spotShadowMap,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMap.value=H.state.pointShadowMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Wt,j.uniformsList=null,Wt}function Nn(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=pa.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function It(R,K){const D=J.get(R);D.outputColorSpace=K.outputColorSpace,D.batching=K.batching,D.batchingColor=K.batchingColor,D.instancing=K.instancing,D.instancingColor=K.instancingColor,D.instancingMorph=K.instancingMorph,D.skinning=K.skinning,D.morphTargets=K.morphTargets,D.morphNormals=K.morphNormals,D.morphColors=K.morphColors,D.morphTargetsCount=K.morphTargetsCount,D.numClippingPlanes=K.numClippingPlanes,D.numIntersection=K.numClipIntersection,D.vertexAlphas=K.vertexAlphas,D.vertexTangents=K.vertexTangents,D.toneMapping=K.toneMapping}function le(R,K,D,j,H){K.isScene!==!0&&(K=ht),M.resetTextureUnits();const gt=K.fog,At=j.isMeshStandardMaterial?K.environment:null,Nt=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ms,Dt=(j.isMeshStandardMaterial?C:v).get(j.envMap||At),Xt=j.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Wt=!!D.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!D.morphAttributes.position,Qt=!!D.morphAttributes.normal,oe=!!D.morphAttributes.color;let de=gs;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=w.toneMapping);const ve=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ce=ve!==void 0?ve.length:0,Kt=J.get(j),Ae=m.state.lights;if(rt===!0&&(ft===!0||R!==Q)){const Be=R===Q&&j.id===B;dt.setState(j,R,Be)}let Rt=!1;j.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ae.state.version||Kt.outputColorSpace!==Nt||H.isBatchedMesh&&Kt.batching===!1||!H.isBatchedMesh&&Kt.batching===!0||H.isBatchedMesh&&Kt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Kt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Kt.instancing===!1||!H.isInstancedMesh&&Kt.instancing===!0||H.isSkinnedMesh&&Kt.skinning===!1||!H.isSkinnedMesh&&Kt.skinning===!0||H.isInstancedMesh&&Kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Kt.instancingMorph===!1&&H.morphTexture!==null||Kt.envMap!==Dt||j.fog===!0&&Kt.fog!==gt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==dt.numPlanes||Kt.numIntersection!==dt.numIntersection)||Kt.vertexAlphas!==Xt||Kt.vertexTangents!==Wt||Kt.morphTargets!==zt||Kt.morphNormals!==Qt||Kt.morphColors!==oe||Kt.toneMapping!==de||Kt.morphTargetsCount!==ce)&&(Rt=!0):(Rt=!0,Kt.__version=j.version);let Re=Kt.currentProgram;Rt===!0&&(Re=Ke(j,K,H));let Pe=!1,Me=!1,tn=!1;const be=Re.getUniforms(),je=Kt.uniforms;if(N.useProgram(Re.program)&&(Pe=!0,Me=!0,tn=!0),j.id!==B&&(B=j.id,Me=!0),Pe||Q!==R){F.reverseDepthBuffer?(wt.copy(R.projectionMatrix),wv(wt),Sv(wt),be.setValue(g,"projectionMatrix",wt)):be.setValue(g,"projectionMatrix",R.projectionMatrix),be.setValue(g,"viewMatrix",R.matrixWorldInverse);const Be=be.map.cameraPosition;Be!==void 0&&Be.setValue(g,lt.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&be.setValue(g,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&be.setValue(g,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,Me=!0,tn=!0)}if(H.isSkinnedMesh){be.setOptional(g,H,"bindMatrix"),be.setOptional(g,H,"bindMatrixInverse");const Be=H.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),be.setValue(g,"boneTexture",Be.boneTexture,M))}H.isBatchedMesh&&(be.setOptional(g,H,"batchingTexture"),be.setValue(g,"batchingTexture",H._matricesTexture,M),be.setOptional(g,H,"batchingIdTexture"),be.setValue(g,"batchingIdTexture",H._indirectTexture,M),be.setOptional(g,H,"batchingColorTexture"),H._colorsTexture!==null&&be.setValue(g,"batchingColorTexture",H._colorsTexture,M));const Mn=D.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Ut.update(H,D,Re),(Me||Kt.receiveShadow!==H.receiveShadow)&&(Kt.receiveShadow=H.receiveShadow,be.setValue(g,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(je.envMap.value=Dt,je.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&K.environment!==null&&(je.envMapIntensity.value=K.environmentIntensity),Me&&(be.setValue(g,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&ge(je,tn),gt&&j.fog===!0&&ct.refreshFogUniforms(je,gt),ct.refreshMaterialUniforms(je,j,st,q,m.state.transmissionRenderTarget[R.id]),pa.upload(g,Nn(Kt),je,M)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(pa.upload(g,Nn(Kt),je,M),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&be.setValue(g,"center",H.center),be.setValue(g,"modelViewMatrix",H.modelViewMatrix),be.setValue(g,"normalMatrix",H.normalMatrix),be.setValue(g,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Be=j.uniformsGroups;for(let cn=0,Fn=Be.length;cn<Fn;cn++){const hn=Be[cn];G.update(hn,Re),G.bind(hn,Re)}}return Re}function ge(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Te(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,K,D){J.get(R.texture).__webglTexture=K,J.get(R.depthTexture).__webglTexture=D;const j=J.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=D===void 0,j.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){const D=J.get(R);D.__webglFramebuffer=K,D.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,D=0){P=R,z=K,L=D;let j=!0,H=null,gt=!1,At=!1;if(R){const Dt=J.get(R);if(Dt.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(g.FRAMEBUFFER,null),j=!1;else if(Dt.__webglFramebuffer===void 0)M.setupRenderTarget(R);else if(Dt.__hasExternalTextures)M.rebindTextures(R,J.get(R.texture).__webglTexture,J.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const zt=R.depthTexture;if(Dt.__boundDepthTexture!==zt){if(zt!==null&&J.has(zt)&&(R.width!==zt.image.width||R.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(At=!0);const Wt=J.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[K])?H=Wt[K][D]:H=Wt[K],gt=!0):R.samples>0&&M.useMultisampledRTT(R)===!1?H=J.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?H=Wt[D]:H=Wt,y.copy(R.viewport),E.copy(R.scissor),U=R.scissorTest}else y.copy(pt).multiplyScalar(st).floor(),E.copy(yt).multiplyScalar(st).floor(),U=Lt;if(N.bindFramebuffer(g.FRAMEBUFFER,H)&&j&&N.drawBuffers(R,H),N.viewport(y),N.scissor(E),N.setScissorTest(U),gt){const Dt=J.get(R.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,D)}else if(At){const Dt=J.get(R.texture),Xt=K||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Dt.__webglTexture,D||0,Xt)}B=-1},this.readRenderTargetPixels=function(R,K,D,j,H,gt,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Nt=Nt[At]),Nt){N.bindFramebuffer(g.FRAMEBUFFER,Nt);try{const Dt=R.texture,Xt=Dt.format,Wt=Dt.type;if(!F.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-j&&D>=0&&D<=R.height-H&&g.readPixels(K,D,j,H,Ot.convert(Xt),Ot.convert(Wt),gt)}finally{const Dt=P!==null?J.get(P).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(R,K,D,j,H,gt,At){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Nt=Nt[At]),Nt){const Dt=R.texture,Xt=Dt.format,Wt=Dt.type;if(!F.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-j&&D>=0&&D<=R.height-H){N.bindFramebuffer(g.FRAMEBUFFER,Nt);const zt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,zt),g.bufferData(g.PIXEL_PACK_BUFFER,gt.byteLength,g.STREAM_READ),g.readPixels(K,D,j,H,Ot.convert(Xt),Ot.convert(Wt),0);const Qt=P!==null?J.get(P).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Qt);const oe=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await Mv(g,oe,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,zt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,gt),g.deleteBuffer(zt),g.deleteSync(oe),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,D=0){R.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);const j=Math.pow(2,-D),H=Math.floor(R.image.width*j),gt=Math.floor(R.image.height*j),At=K!==null?K.x:0,Nt=K!==null?K.y:0;M.setTexture2D(R,0),g.copyTexSubImage2D(g.TEXTURE_2D,D,0,0,At,Nt,H,gt),N.unbindTexture()},this.copyTextureToTexture=function(R,K,D=null,j=null,H=0){R.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],K=arguments[2],H=arguments[3]||0,D=null);let gt,At,Nt,Dt,Xt,Wt;D!==null?(gt=D.max.x-D.min.x,At=D.max.y-D.min.y,Nt=D.min.x,Dt=D.min.y):(gt=R.image.width,At=R.image.height,Nt=0,Dt=0),j!==null?(Xt=j.x,Wt=j.y):(Xt=0,Wt=0);const zt=Ot.convert(K.format),Qt=Ot.convert(K.type);M.setTexture2D(K,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,K.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,K.unpackAlignment);const oe=g.getParameter(g.UNPACK_ROW_LENGTH),de=g.getParameter(g.UNPACK_IMAGE_HEIGHT),ve=g.getParameter(g.UNPACK_SKIP_PIXELS),ce=g.getParameter(g.UNPACK_SKIP_ROWS),Kt=g.getParameter(g.UNPACK_SKIP_IMAGES),Ae=R.isCompressedTexture?R.mipmaps[H]:R.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Ae.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ae.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Nt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Dt),R.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,H,Xt,Wt,gt,At,zt,Qt,Ae.data):R.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,H,Xt,Wt,Ae.width,Ae.height,zt,Ae.data):g.texSubImage2D(g.TEXTURE_2D,H,Xt,Wt,gt,At,zt,Qt,Ae),g.pixelStorei(g.UNPACK_ROW_LENGTH,oe),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,de),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ve),g.pixelStorei(g.UNPACK_SKIP_ROWS,ce),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Kt),H===0&&K.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(R,K,D=null,j=null,H=0){R.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,j=arguments[1]||null,R=arguments[2],K=arguments[3],H=arguments[4]||0);let gt,At,Nt,Dt,Xt,Wt,zt,Qt,oe;const de=R.isCompressedTexture?R.mipmaps[H]:R.image;D!==null?(gt=D.max.x-D.min.x,At=D.max.y-D.min.y,Nt=D.max.z-D.min.z,Dt=D.min.x,Xt=D.min.y,Wt=D.min.z):(gt=de.width,At=de.height,Nt=de.depth,Dt=0,Xt=0,Wt=0),j!==null?(zt=j.x,Qt=j.y,oe=j.z):(zt=0,Qt=0,oe=0);const ve=Ot.convert(K.format),ce=Ot.convert(K.type);let Kt;if(K.isData3DTexture)M.setTexture3D(K,0),Kt=g.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)M.setTexture2DArray(K,0),Kt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,K.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,K.unpackAlignment);const Ae=g.getParameter(g.UNPACK_ROW_LENGTH),Rt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Re=g.getParameter(g.UNPACK_SKIP_PIXELS),Pe=g.getParameter(g.UNPACK_SKIP_ROWS),Me=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,de.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,de.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Dt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Xt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Wt),R.isDataTexture||R.isData3DTexture?g.texSubImage3D(Kt,H,zt,Qt,oe,gt,At,Nt,ve,ce,de.data):K.isCompressedArrayTexture?g.compressedTexSubImage3D(Kt,H,zt,Qt,oe,gt,At,Nt,ve,de.data):g.texSubImage3D(Kt,H,zt,Qt,oe,gt,At,Nt,ve,ce,de),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ae),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Rt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Re),g.pixelStorei(g.UNPACK_SKIP_ROWS,Pe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Me),H===0&&K.generateMipmaps&&g.generateMipmap(Kt),N.unbindTexture()},this.initRenderTarget=function(R){J.get(R).__webglFramebuffer===void 0&&M.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?M.setTextureCube(R,0):R.isData3DTexture?M.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?M.setTexture2DArray(R,0):M.setTexture2D(R,0),N.unbindTexture()},this.resetState=function(){z=0,L=0,P=null,N.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===bu?"display-p3":"srgb",e.unpackColorSpace=Ie.workingColorSpace===Va?"display-p3":"srgb"}}class qn extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Aa extends Io{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ed=new He,kl=new fp,Zr=new Wa,Jr=new Z;class ma extends ln{constructor(t=new yn,e=new Aa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=o,t.ray.intersectsSphere(Zr)===!1)return;Ed.copy(s).invert(),kl.copy(t.ray).applyMatrix4(Ed);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let _=d,x=f;_<x;_++){const m=l.getX(_);Jr.fromBufferAttribute(u,m),Td(Jr,m,c,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let _=d,x=f;_<x;_++)Jr.fromBufferAttribute(u,_),Td(Jr,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Td(n,t,e,i,s,o,r){const a=kl.distanceSqToPoint(n);if(a<e){const c=new Z;kl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new Vt:new Z);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new Z,s=[],o=[],r=[],a=new Z,c=new He;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new Z)}o[0]=new Z,r[0]=new Z;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(rn(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,_))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(rn(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let _=1;_<=t;_++)o[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pu extends Ii{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Vt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class IS extends Pu{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Cu(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Qr=new Z,zc=new Cu,Gc=new Cu,Hc=new Cu;class LS extends Ii{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new Z){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Qr.subVectors(s[0],s[1]).add(s[0]),l=Qr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Qr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),zc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,x,m),Gc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,x,m),Hc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Gc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Hc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(zc.calc(c),Gc.calc(c),Hc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ad(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function DS(n,t){const e=1-n;return e*e*t}function US(n,t){return 2*(1-n)*n*t}function NS(n,t){return n*n*t}function nr(n,t,e,i){return DS(n,t)+US(n,e)+NS(n,i)}function FS(n,t){const e=1-n;return e*e*e*t}function OS(n,t){const e=1-n;return 3*e*e*n*t}function BS(n,t){return 3*(1-n)*n*n*t}function zS(n,t){return n*n*n*t}function ir(n,t,e,i,s){return FS(n,t)+OS(n,e)+BS(n,i)+zS(n,s)}class Pp extends Ii{constructor(t=new Vt,e=new Vt,i=new Vt,s=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Vt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ir(t,s.x,o.x,r.x,a.x),ir(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class GS extends Ii{constructor(t=new Z,e=new Z,i=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Z){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ir(t,s.x,o.x,r.x,a.x),ir(t,s.y,o.y,r.y,a.y),ir(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cp extends Ii{constructor(t=new Vt,e=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Vt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class HS extends Ii{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ip extends Ii{constructor(t=new Vt,e=new Vt,i=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Vt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(nr(t,s.x,o.x,r.x),nr(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kS extends Ii{constructor(t=new Z,e=new Z,i=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Z){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(nr(t,s.x,o.x,r.x),nr(t,s.y,o.y,r.y),nr(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Vt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Ad(a,c.x,l.x,h.x,u.x),Ad(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Vt().fromArray(s))}return this}}var Vl=Object.freeze({__proto__:null,ArcCurve:IS,CatmullRomCurve3:LS,CubicBezierCurve:Pp,CubicBezierCurve3:GS,EllipseCurve:Pu,LineCurve:Cp,LineCurve3:HS,QuadraticBezierCurve:Ip,QuadraticBezierCurve3:kS,SplineCurve:Lp});class VS extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Vl[s.type]().fromJSON(s))}return this}}class Wl extends VS{constructor(t){super(),this.type="Path",this.currentPoint=new Vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Cp(this.currentPoint.clone(),new Vt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Ip(this.currentPoint.clone(),new Vt(t,e),new Vt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Pp(this.currentPoint.clone(),new Vt(t,e),new Vt(i,s),new Vt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Lp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new Pu(t,e,i,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ee extends yn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new Z,h=new Vt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(a,3)),this.setAttribute("uv",new qe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends yn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let _=0;const x=[],m=i/2;let p=0;T(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(f,2));function T(){const b=new Z,z=new Z;let L=0;const P=(e-t)/i;for(let B=0;B<=o;B++){const Q=[],y=B/o,E=y*(e-t)+t;for(let U=0;U<=s;U++){const X=U/s,it=X*c+a,at=Math.sin(it),q=Math.cos(it);z.x=E*at,z.y=-y*i+m,z.z=E*q,u.push(z.x,z.y,z.z),b.set(at,P,q).normalize(),d.push(b.x,b.y,b.z),f.push(X,1-y),Q.push(_++)}x.push(Q)}for(let B=0;B<s;B++)for(let Q=0;Q<o;Q++){const y=x[Q][B],E=x[Q+1][B],U=x[Q+1][B+1],X=x[Q][B+1];t>0&&(h.push(y,E,X),L+=3),e>0&&(h.push(E,U,X),L+=3)}l.addGroup(p,L,0),p+=L}function w(b){const z=_,L=new Vt,P=new Z;let B=0;const Q=b===!0?t:e,y=b===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),_++;const E=_;for(let U=0;U<=s;U++){const it=U/s*c+a,at=Math.cos(it),q=Math.sin(it);P.x=Q*q,P.y=m*y,P.z=Q*at,u.push(P.x,P.y,P.z),d.push(0,y,0),L.x=at*.5+.5,L.y=q*.5*y+.5,f.push(L.x,L.y),_++}for(let U=0;U<s;U++){const X=z+U,it=E+U;b===!0?h.push(it,it+1,X):h.push(it+1,it,X),B+=3}l.addGroup(p,B,b===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ti extends ee{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ti(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wn extends Wl{constructor(t){super(t),this.uuid=ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Wl().fromJSON(s))}return this}}const WS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Dp(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,f;if(i&&(o=$S(n,t,o,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return mr(o,r,e,a,c,f,0),r}};function Dp(n,t,e,i,s){let o,r;if(s===r1(n,t,e,i)>0)for(o=t;o<e;o+=i)r=Rd(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=Rd(o,n[o],n[o+1],r);return r&&Ya(r,r.next)&&(_r(r),r=r.next),r}function Gs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ya(e,e.next)||$e(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function mr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&t1(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?qS(n,i,s,o):XS(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),_r(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=YS(Gs(n),t,e),mr(n,t,e,i,s,o,2)):r===2&&jS(n,t,e,i,s,o):mr(Gs(n),t,e,i,s,o,1);break}}}function XS(n){const t=n.prev,e=n,i=n.next;if($e(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&lo(s,a,o,c,r,l,_.x,_.y)&&$e(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function qS(n,t,e,i){const s=n.prev,o=n,r=n.next;if($e(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Xl(f,_,t,e,i),T=Xl(x,m,t,e,i);let w=n.prevZ,b=n.nextZ;for(;w&&w.z>=p&&b&&b.z<=T;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=m&&w!==s&&w!==r&&lo(a,h,c,u,l,d,w.x,w.y)&&$e(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=x&&b.y>=_&&b.y<=m&&b!==s&&b!==r&&lo(a,h,c,u,l,d,b.x,b.y)&&$e(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=m&&w!==s&&w!==r&&lo(a,h,c,u,l,d,w.x,w.y)&&$e(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=T;){if(b.x>=f&&b.x<=x&&b.y>=_&&b.y<=m&&b!==s&&b!==r&&lo(a,h,c,u,l,d,b.x,b.y)&&$e(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function YS(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Ya(s,o)&&Up(s,i,i.next,o)&&gr(s,o)&&gr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),_r(i),_r(i.next),i=n=o),i=i.next}while(i!==n);return Gs(i)}function jS(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&i1(r,a)){let c=Np(r,a);r=Gs(r,r.next),c=Gs(c,c.next),mr(r,t,e,i,s,o,0),mr(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function $S(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=Dp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(n1(l));for(s.sort(KS),o=0;o<s.length;o++)e=ZS(s[o],e);return e}function KS(n,t){return n.x-t.x}function ZS(n,t){const e=JS(n,t);if(!e)return t;const i=Np(e,n);return Gs(i,i.next),Gs(e,e.next)}function JS(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&lo(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),gr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&QS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function QS(n,t){return $e(n.prev,n,t.prev)<0&&$e(t.next,n,n.next)<0}function t1(n,t,e,i){let s=n;do s.z===0&&(s.z=Xl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,e1(s)}function e1(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function Xl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function n1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function lo(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function i1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!s1(n,t)&&(gr(n,t)&&gr(t,n)&&o1(n,t)&&($e(n.prev,n,t.prev)||$e(n,t.prev,t))||Ya(n,t)&&$e(n.prev,n,n.next)>0&&$e(t.prev,t,t.next)>0)}function $e(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ya(n,t){return n.x===t.x&&n.y===t.y}function Up(n,t,e,i){const s=ea($e(n,t,e)),o=ea($e(n,t,i)),r=ea($e(e,i,n)),a=ea($e(e,i,t));return!!(s!==o&&r!==a||s===0&&ta(n,e,t)||o===0&&ta(n,i,t)||r===0&&ta(e,n,i)||a===0&&ta(e,t,i))}function ta(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ea(n){return n>0?1:n<0?-1:0}function s1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Up(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function gr(n,t){return $e(n.prev,n,n.next)<0?$e(n,t,n.next)>=0&&$e(n,n.prev,t)>=0:$e(n,t,n.prev)<0||$e(n,n.next,t)<0}function o1(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Np(n,t){const e=new ql(n.i,n.x,n.y),i=new ql(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Rd(n,t,e,i){const s=new ql(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ql(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function r1(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class xo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return xo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Pd(t),Cd(i,t);let r=t.length;e.forEach(Pd);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Cd(i,e[c]);const a=WS.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Pd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Cd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ti extends yn{constructor(t=new Wn([new Vt(.5,.5),new Vt(-.5,.5),new Vt(-.5,-.5),new Vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new qe(s,3)),this.setAttribute("uv",new qe(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:a1;let w,b=!1,z,L,P,B;p&&(w=p.getSpacedPoints(h),b=!0,d=!1,z=p.computeFrenetFrames(h,!1),L=new Z,P=new Z,B=new Z),d||(m=0,f=0,_=0,x=0);const Q=a.extractPoints(l);let y=Q.shape;const E=Q.holes;if(!xo.isClockWise(y)){y=y.reverse();for(let nt=0,g=E.length;nt<g;nt++){const A=E[nt];xo.isClockWise(A)&&(E[nt]=A.reverse())}}const X=xo.triangulateShape(y,E),it=y;for(let nt=0,g=E.length;nt<g;nt++){const A=E[nt];y=y.concat(A)}function at(nt,g,A){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(g,A)}const q=y.length,st=X.length;function Y(nt,g,A){let I,F,N;const W=nt.x-g.x,J=nt.y-g.y,M=A.x-nt.x,v=A.y-nt.y,C=W*W+J*J,$=W*v-J*M;if(Math.abs($)>Number.EPSILON){const k=Math.sqrt(C),V=Math.sqrt(M*M+v*v),ut=g.x-J/k,ct=g.y+W/k,_t=A.x-v/V,Tt=A.y+M/V,dt=((_t-ut)*v-(Tt-ct)*M)/(W*v-J*M);I=ut+W*dt-nt.x,F=ct+J*dt-nt.y;const Mt=I*I+F*F;if(Mt<=2)return new Vt(I,F);N=Math.sqrt(Mt/2)}else{let k=!1;W>Number.EPSILON?M>Number.EPSILON&&(k=!0):W<-Number.EPSILON?M<-Number.EPSILON&&(k=!0):Math.sign(J)===Math.sign(v)&&(k=!0),k?(I=-J,F=W,N=Math.sqrt(C)):(I=W,F=J,N=Math.sqrt(C/2))}return new Vt(I/N,F/N)}const mt=[];for(let nt=0,g=it.length,A=g-1,I=nt+1;nt<g;nt++,A++,I++)A===g&&(A=0),I===g&&(I=0),mt[nt]=Y(it[nt],it[A],it[I]);const pt=[];let yt,Lt=mt.concat();for(let nt=0,g=E.length;nt<g;nt++){const A=E[nt];yt=[];for(let I=0,F=A.length,N=F-1,W=I+1;I<F;I++,N++,W++)N===F&&(N=0),W===F&&(W=0),yt[I]=Y(A[I],A[N],A[W]);pt.push(yt),Lt=Lt.concat(yt)}for(let nt=0;nt<m;nt++){const g=nt/m,A=f*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+x;for(let F=0,N=it.length;F<N;F++){const W=at(it[F],mt[F],I);O(W.x,W.y,-A)}for(let F=0,N=E.length;F<N;F++){const W=E[F];yt=pt[F];for(let J=0,M=W.length;J<M;J++){const v=at(W[J],yt[J],I);O(v.x,v.y,-A)}}}const Gt=_+x;for(let nt=0;nt<q;nt++){const g=d?at(y[nt],Lt[nt],Gt):y[nt];b?(P.copy(z.normals[0]).multiplyScalar(g.x),L.copy(z.binormals[0]).multiplyScalar(g.y),B.copy(w[0]).add(P).add(L),O(B.x,B.y,B.z)):O(g.x,g.y,0)}for(let nt=1;nt<=h;nt++)for(let g=0;g<q;g++){const A=d?at(y[g],Lt[g],Gt):y[g];b?(P.copy(z.normals[nt]).multiplyScalar(A.x),L.copy(z.binormals[nt]).multiplyScalar(A.y),B.copy(w[nt]).add(P).add(L),O(B.x,B.y,B.z)):O(A.x,A.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){const g=nt/m,A=f*Math.cos(g*Math.PI/2),I=_*Math.sin(g*Math.PI/2)+x;for(let F=0,N=it.length;F<N;F++){const W=at(it[F],mt[F],I);O(W.x,W.y,u+A)}for(let F=0,N=E.length;F<N;F++){const W=E[F];yt=pt[F];for(let J=0,M=W.length;J<M;J++){const v=at(W[J],yt[J],I);b?O(v.x,v.y+w[h-1].y,w[h-1].x+A):O(v.x,v.y,u+A)}}}rt(),ft();function rt(){const nt=s.length/3;if(d){let g=0,A=q*g;for(let I=0;I<st;I++){const F=X[I];lt(F[2]+A,F[1]+A,F[0]+A)}g=h+m*2,A=q*g;for(let I=0;I<st;I++){const F=X[I];lt(F[0]+A,F[1]+A,F[2]+A)}}else{for(let g=0;g<st;g++){const A=X[g];lt(A[2],A[1],A[0])}for(let g=0;g<st;g++){const A=X[g];lt(A[0]+q*h,A[1]+q*h,A[2]+q*h)}}i.addGroup(nt,s.length/3-nt,0)}function ft(){const nt=s.length/3;let g=0;wt(it,g),g+=it.length;for(let A=0,I=E.length;A<I;A++){const F=E[A];wt(F,g),g+=F.length}i.addGroup(nt,s.length/3-nt,1)}function wt(nt,g){let A=nt.length;for(;--A>=0;){const I=A;let F=A-1;F<0&&(F=nt.length-1);for(let N=0,W=h+m*2;N<W;N++){const J=q*N,M=q*(N+1),v=g+I+J,C=g+F+J,$=g+F+M,k=g+I+M;ot(v,C,$,k)}}}function O(nt,g,A){c.push(nt),c.push(g),c.push(A)}function lt(nt,g,A){ht(nt),ht(g),ht(A);const I=s.length/3,F=T.generateTopUV(i,s,I-3,I-2,I-1);St(F[0]),St(F[1]),St(F[2])}function ot(nt,g,A,I){ht(nt),ht(g),ht(I),ht(g),ht(A),ht(I);const F=s.length/3,N=T.generateSideWallUV(i,s,F-6,F-3,F-2,F-1);St(N[0]),St(N[1]),St(N[3]),St(N[1]),St(N[2]),St(N[3])}function ht(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function St(nt){o.push(nt.x),o.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return c1(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vl[s.type]().fromJSON(s)),new ti(i,t.options)}}const a1={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new Vt(o,r),new Vt(a,c),new Vt(l,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],x=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new Vt(r,1-c),new Vt(l,1-u),new Vt(d,1-_),new Vt(x,1-p)]:[new Vt(a,1-c),new Vt(h,1-u),new Vt(f,1-_),new Vt(m,1-p)]}};function c1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class xt extends yn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new Z,d=new Z,f=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const T=[],w=p/i;let b=0;p===0&&r===0?b=.5/e:p===i&&c===Math.PI&&(b=-.5/e);for(let z=0;z<=e;z++){const L=z/e;u.x=-t*Math.cos(s+L*o)*Math.sin(r+w*a),u.y=t*Math.cos(r+w*a),u.z=t*Math.sin(s+L*o)*Math.sin(r+w*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(L+b,1-w),T.push(l++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<e;T++){const w=h[p][T+1],b=h[p][T],z=h[p+1][T],L=h[p+1][T+1];(p!==0||r>0)&&f.push(w,b,L),(p!==i-1||c<Math.PI)&&f.push(b,z,L)}this.setIndex(f),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ji extends yn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new Z,u=new Z,d=new Z;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const x=_/s*o,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,T=(s+1)*f+_;r.push(x,m,T),r.push(m,p,T)}this.setIndex(r),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bt extends Io{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ft extends Bt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Ra={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class l1{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const u1=new l1;class Do{constructor(t){this.manager=t!==void 0?t:u1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Do.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi={};class h1 extends Error{constructor(t,e){super(t),this.response=e}}class d1 extends Do{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Ra.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Wi[t]!==void 0){Wi[t].push({onLoad:e,onProgress:i,onError:s});return}Wi[t]=[],Wi[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Wi[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let x=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:w,value:b})=>{if(w)p.close();else{x+=b.byteLength;const z=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let L=0,P=h.length;L<P;L++){const B=h[L];B.onProgress&&B.onProgress(z)}p.enqueue(b),T()}},w=>{p.error(w)})}}});return new Response(m)}else throw new h1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{Ra.add(t,l);const h=Wi[t];delete Wi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Wi[t];if(h===void 0)throw this.manager.itemError(t),l;delete Wi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Fp extends Do{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ra.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=pr("img");function c(){h(),Ra.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class Iu extends Do{constructor(t){super(t)}load(t,e,i,s){const o=new Tu;o.colorSpace=ci;const r=new Fp(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function c(l){r.load(t[l],function(h){o.images[l]=h,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let l=0;l<t.length;++l)c(l);return o}}class ei extends Do{constructor(t){super(t)}load(t,e,i,s){const o=new Cn,r=new Fp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class Lu extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const kc=new He,Id=new Z,Ld=new Z;class Op{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Id.setFromMatrixPosition(t.matrixWorld),e.position.copy(Id),Ld.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ld),e.updateMatrixWorld(),kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Dd=new He,Vo=new Z,Vc=new Z;class f1 extends Op{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vt(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Vo.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vo),Vc.copy(i.position),Vc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Vc),i.updateMatrixWorld(),s.makeTranslation(-Vo.x,-Vo.y,-Vo.z),Dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd)}}class Li extends Lu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new f1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class p1 extends Op{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Di extends Lu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new p1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ui extends Lu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ud(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ud();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ud(){return performance.now()}class m1{constructor(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Wl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const T=[];for(let w=0,b=p.length;w<b;w++){const z=p[w],L=new Wn;L.curves=z.curves,T.push(L)}return T}function i(p,T){const w=T.length;let b=!1;for(let z=w-1,L=0;L<w;z=L++){let P=T[z],B=T[L],Q=B.x-P.x,y=B.y-P.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(P=T[L],Q=-Q,B=T[z],y=-y),p.y<P.y||p.y>B.y)continue;if(p.y===P.y){if(p.x===P.x)return!0}else{const E=y*(p.x-P.x)-Q*(p.y-P.y);if(E===0)return!0;if(E<0)continue;b=!b}}else{if(p.y!==P.y)continue;if(B.x<=p.x&&p.x<=P.x||P.x<=p.x&&p.x<=B.x)return!0}}return b}const s=xo.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new Wn,c.curves=a.curves,l.push(c),l;let h=!s(o[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,x;d[_]=void 0,f[_]=[];for(let p=0,T=o.length;p<T;p++)a=o[p],x=a.getPoints(),r=s(x),r=t?!r:r,r?(!h&&d[_]&&_++,d[_]={s:new Wn,p:x},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:x[0]});if(!d[0])return e(o);if(d.length>1){let p=!1,T=0;for(let w=0,b=d.length;w<b;w++)u[w]=[];for(let w=0,b=d.length;w<b;w++){const z=f[w];for(let L=0;L<z.length;L++){const P=z[L];let B=!0;for(let Q=0;Q<d.length;Q++)i(P.p,d[Q].p)&&(w!==Q&&T++,B?(B=!1,u[Q].push(P)):p=!0);B&&u[w].push(P)}}T>0&&p===!1&&(f=u)}let m;for(let p=0,T=d.length;p<T;p++){c=d[p].s,l.push(c),m=f[p];for(let w=0,b=m.length;w<b;w++)c.holes.push(m[w].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);class Ni extends Do{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new d1(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const c=o.parse(JSON.parse(a));e&&e(c)},i,s)}parse(t){return new g1(t)}}class g1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=_1(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function _1(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,c=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)a=0,c-=o;else{const u=v1(h,s,a,c,e);a+=u.offsetX,r.push(u.path)}}return r}function v1(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new m1;let a,c,l,h,u,d,f,_;if(o.o){const x=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let m=0,p=x.length;m<p;)switch(x[m++]){case"m":a=x[m++]*t+e,c=x[m++]*t+i,r.moveTo(a,c);break;case"l":a=x[m++]*t+e,c=x[m++]*t+i,r.lineTo(a,c);break;case"q":l=x[m++]*t+e,h=x[m++]*t+i,u=x[m++]*t+e,d=x[m++]*t+i,r.quadraticCurveTo(u,d,l,h);break;case"b":l=x[m++]*t+e,h=x[m++]*t+i,u=x[m++]*t+e,d=x[m++]*t+i,f=x[m++]*t+e,_=x[m++]*t+i,r.bezierCurveTo(u,d,f,_,l,h);break}}return{offsetX:o.ha*t,path:r}}class Ve extends ti{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const x1=jn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);let i=null,s=Jt(!1),o=Jt(!1),r=Jt(!1);return ni(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new qn,l=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Xn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new jt,d=new Ui(16777215,2);c.add(d);const f=new Di(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Li(16777215,5,50);_.position.set(0,2,4),c.add(_);const x=new ei,m=x.load("/3d-bear-arts/assets/lv2.jpg"),p=x.load("/3d-bear-arts/assets/lv2.jpg");m.wrapS=m.wrapT=Xe,p.wrapS=p.wrapT=Xe;const T=new Ft({color:8343336,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),w=new Ft({color:5978654,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),b=new Ft({color:13152668,metalness:.2,roughness:.05,bumpMap:m,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:p,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:xe});new Ft({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const z=new xt(1,32,32,0,Math.PI),L=new S(z,b),P=new S(z,T);L.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),L.position.y=-.2,P.position.y=-.2,L.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const B=new Ee(1,32),Q=new S(B,T);Q.scale.set(.85,.85,.8),Q.position.set(0,-.2,0),Q.rotation.y=Math.PI/2;const y=new jt;y.add(L),y.add(P),y.add(Q),u.add(y);const E=new xt(.6,32,32,0,Math.PI),U=new S(E,T);U.scale.set(1,.95,.95),U.position.set(0,1,0),U.rotation.y=Math.PI*1.5;const X=new S(E,b);X.scale.set(1,.95,.95),X.position.set(0,1,0),X.rotation.y=Math.PI/2;const it=new Ee(.6,32),at=new S(it,T);at.position.set(0,1,0),at.rotation.y=Math.PI/2,at.scale.set(1,.95,.95);const q=new jt;q.add(U),q.add(X),q.add(at),u.add(q);const st=new xt(.25,32,32),Y=new S(st,T);Y.position.set(-.45,1.35,-.1),u.add(Y);const mt=new S(st,b);mt.position.set(.45,1.35,-.1),u.add(mt);const pt=new xt(.25,32,32,Math.PI/2,Math.PI),yt=new S(pt,w);yt.scale.set(1.1,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI;const Lt=new xt(.25,32,32,Math.PI/2,Math.PI),Gt=new S(Lt,b);Gt.scale.set(1.1,.6,.8),Gt.position.set(0,.84,.5),Gt.rotation.y=0;const rt=new Ee(.25,32),ft=new S(rt,T);ft.scale.set(.8,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI/2;const wt=new jt;wt.add(yt),wt.add(Gt),wt.add(ft),u.add(wt);const O=new Wn;O.moveTo(0,0),O.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),O.bezierCurveTo(-.6,.3,0,.6,0,1),O.bezierCurveTo(0,.6,.6,.3,.6,0),O.bezierCurveTo(.6,-.3,0,-.3,0,0);const lt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ft({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const ot=new ti(O,lt),ht=new S(ot,T);ht.scale.set(.1,.1,.1),ht.rotation.z=ae.degToRad(210),ht.rotation.x=ae.degToRad(5),ht.rotation.y=ae.degToRad(-45),ht.position.set(-.4,.9,.45);const St=new S(ot,w);St.scale.set(.6,.5,.5),St.position.set(.35,0,0),St.rotation.y=Math.PI,St.rotation.x=Math.PI;const nt=new S(ot,w);nt.scale.set(.2,.2,.2),nt.position.set(.5,-.1,.2),nt.rotation.y=Math.PI,nt.rotation.x=Math.PI,u.add(nt);const g=new Pn(1.3,1.2,.6),A=new S(g,T);A.scale.set(.45,.45,.45),A.position.set(.35,-.2,.1),A.rotation.y=Math.PI;const I=new Ji(.15,.025,10,100);new Ft({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const F=new S(I,T);F.position.set(.35,.1,.1),F.rotation.z=Math.PI/2,F.rotation.x=Math.PI/8,F.rotation.y=Math.PI/14;const N=new S(I,T);N.position.set(.35,.1,.13),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/-8,N.rotation.y=Math.PI/12;const W=new jt;W.add(A),W.add(F),W.add(N),u.add(W);const J=new xt(.35,32,32),M=new S(J,T);M.scale.set(.75,1.25,.65),M.position.set(-.7,-.15,.2),u.add(M);const v=new S(J,b);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new ee(.2,.22,.6,32),$=new S(C,T);$.position.set(-.4,-1.05,0),u.add($);const k=new S(C,b);k.position.set(.4,-1.05,0),u.add(k);const V=new xt(.3,32,32),ut=new S(V,T);ut.scale.set(1,.72,1.5),ut.position.set(-.4,-1.45,.17),u.add(ut);const ct=new S(V,b);ct.scale.set(1,.72,1.5),ct.position.set(.4,-1.45,.17),u.add(ct);const _t=new xt(.44,32,32),Tt=new S(_t,T);Tt.position.set(-.15,-.45,-.4),u.add(Tt);const dt=new S(_t,b);dt.position.set(.15,-.45,-.4),u.add(dt);const Mt=new xt(.18,32,32),Pt=new S(Mt,T);Pt.position.set(0,-.35,-.8),u.add(Pt),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const bt=new Ve("X",{font:tt,size:.2,depth:.05});new Jn({color:0});const Et=new S(bt,w);Et.position.set(-.3,.99,.53),Et.rotation.x=ae.degToRad(-5),Et.rotation.y=ae.degToRad(-15),u.add(Et);const Ht=new Ve("O",{font:tt,size:.2,depth:.05});new Jn({color:0});const te=new S(Ht,w);te.position.set(.14,.99,.53),te.rotation.y=ae.degToRad(12),te.rotation.x=ae.degToRad(-5),u.add(te)}),Pt.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Ct=()=>{u.rotation.y,u.rotation.x},qt=()=>{s.value=!0,o.value=!1,r.value=!1},Ot=()=>{s.value=!1,o.value=!0,r.value=!1},$t=()=>{s.value=!1,o.value=!1,Ct()},G=tt=>{const bt=window.innerWidth/2;tt>bt?qt():Ot(),Ct()},vt=tt=>{clearTimeout(i),$t(),r.value=!0;const bt={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1};if(r.value){const Et=bt.x*Math.PI*.2,Ht=bt.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Ht}i=setTimeout(()=>{r.value=!1,G(tt.clientX)},500)};window.addEventListener("mousemove",vt);const et=tt=>{if(r.value){const bt={x:tt.clientX/window.innerWidth*2-1,y:-(tt.clientY/window.innerHeight)*2+1},Et=bt.x*Math.PI*.2,Ht=bt.y*Math.PI*.2;u.rotation.y=Et,u.rotation.x=Ht}};window.addEventListener("mousemove",et),a(),We(()=>t.bodyPosition,tt=>{u.position.set(tt.x,tt.y,tt.z)}),We(()=>t.cameraPosition,tt=>{l.position.set(t.bodyPosition.x,1,tt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(mi(),gi("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2))}}),y1=_i(x1,[["__scopeId","data-v-f3beb116"]]),M1=jn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);let i=null,s=Jt(!1),o=Jt(!1),r=Jt(!1);return ni(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(c,l)};const c=new qn,l=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Xn({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new jt,d=new Ui(16777215,2);c.add(d);const f=new Di(16777215,4);f.position.set(5,5,5),c.add(f);const _=new Li(16777215,5,50);_.position.set(0,2,4),c.add(_);const x=new ei,m=x.load("/3d-bear-arts/assets/pop6.jpg"),p=x.load("/3d-bear-arts/assets/pop7.jpg");m.wrapS=m.wrapT=Xe,p.wrapS=p.wrapT=Xe;const T=new Ft({color:16738740,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),w=new Ft({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xe}),b=new Ft({color:16766720,map:m,metalness:.3,roughness:.5}),z=new Ft({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xe}),L=new Ft({color:9055202,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ft({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xe});const P=new Ft({color:65535,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),B=new Ft({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xe}),Q=new xt(1,32,32,0,Math.PI),y=new S(Q,w),E=new S(Q,T);y.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),y.position.y=-.2,E.position.y=-.2,y.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const U=new Ee(1,32),X=new S(U,T);X.scale.set(.85,.85,.8),X.position.set(0,-.2,0),X.rotation.y=Math.PI/2;const it=new jt;it.add(y),it.add(E),it.add(X),u.add(it);const at=new xt(.6,32,32,0,Math.PI),q=new S(at,b);q.scale.set(1,.95,.95),q.position.set(0,1,0),q.rotation.y=Math.PI*1.5;const st=new S(at,z);st.scale.set(1,.95,.95),st.position.set(0,1,0),st.rotation.y=Math.PI/2;const Y=new Ee(.6,32),mt=new S(Y,b);mt.position.set(0,1,0),mt.rotation.y=Math.PI/2,mt.scale.set(1,.95,.95);const pt=new jt;pt.add(q),pt.add(st),pt.add(mt),u.add(pt);const yt=new xt(.25,32,32),Lt=new S(yt,T);Lt.position.set(-.45,1.35,-.1),u.add(Lt);const Gt=new S(yt,w);Gt.position.set(.45,1.35,-.1),u.add(Gt);const rt=new xt(.25,32,32,Math.PI/2,Math.PI),ft=new S(rt,b);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI;const wt=new xt(.25,32,32,Math.PI/2,Math.PI),O=new S(wt,z);O.scale.set(1.1,.6,.8),O.position.set(0,.84,.5),O.rotation.y=0;const lt=new Ee(.25,32),ot=new S(lt,b);ot.scale.set(.8,.6,.8),ot.position.set(0,.84,.5),ot.rotation.y=Math.PI/2;const ht=new jt;ht.add(ft),ht.add(O),ht.add(ot),u.add(ht);const St=new Wn;St.moveTo(0,0),St.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),St.bezierCurveTo(-.6,.3,0,.6,0,1),St.bezierCurveTo(0,.6,.6,.3,.6,0),St.bezierCurveTo(.6,-.3,0,-.3,0,0);const nt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new ti(St,nt),A=new S(g,b);A.scale.set(.5,.5,.5),A.position.set(.35,0,0),A.rotation.y=Math.PI,A.rotation.x=Math.PI,u.add(A);const I=new S(g,P);I.scale.set(.2,.2,.25),I.position.set(.5,-.3,.4),I.rotation.y=Math.PI,I.rotation.x=Math.PI,u.add(I);const F=new S(g,T);F.scale.set(.25,.25,.27),F.position.set(.4,.3,-.2),F.rotation.y=Math.PI,F.rotation.x=Math.PI,u.add(F);const N=new xt(.35,32,32),W=new S(N,P);W.scale.set(.75,1.25,.65),W.position.set(-.7,-.15,.2),u.add(W);const J=new S(N,B);J.scale.set(.75,1.25,.65),J.position.set(.7,-.15,.2),u.add(J);const M=new ee(.2,.22,.6,32),v=new S(M,b);v.position.set(-.4,-1.05,0),u.add(v);const C=new S(M,z);C.position.set(.4,-1.05,0),u.add(C);const $=new xt(.3,32,32),k=new S($,b);k.scale.set(1,.72,1.5),k.position.set(-.4,-1.45,.17),u.add(k);const V=new S($,z);V.scale.set(1,.72,1.5),V.position.set(.4,-1.45,.17),u.add(V);const ut=new xt(.44,32,32),ct=new S(ut,T);ct.position.set(-.15,-.45,-.4),u.add(ct);const _t=new S(ut,w);_t.position.set(.15,-.45,-.4),u.add(_t);const Tt=new xt(.18,32,32),dt=new S(Tt,T);dt.position.set(0,-.35,-.8),u.add(dt),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(vt){const et=new Ve("X",{font:vt,size:.2,depth:.05});new Jn({color:0});const tt=new S(et,T);tt.position.set(-.3,.99,.53),tt.rotation.x=ae.degToRad(-5),tt.rotation.y=ae.degToRad(-15),u.add(tt);const bt=new Ve("O",{font:vt,size:.2,depth:.05});new Jn({color:0});const Et=new S(bt,P);Et.position.set(.14,.99,.53),Et.rotation.y=ae.degToRad(12),Et.rotation.x=ae.degToRad(-5),u.add(Et);const Ht=new Ve("POP",{font:vt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),te=new Ft({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ft({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ie=new Ft({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),ne=new Ft({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),Zt=new S(Ht,te);Zt.scale.set(.15,.15,.15),Zt.position.set(.03,1.16,.1),Zt.rotateZ(-25),u.add(Zt);const se=new S(Ht,L);se.scale.set(.14,.14,.14),se.rotateZ(45),se.position.set(.2,-.7,.3),u.add(se);const re=new S(Ht,ie);re.scale.set(.14,.14,.14),re.rotateZ(45),re.rotateY(45),re.position.set(.3,.7,.3),u.add(re);const ye=new S(Ht,ie);ye.scale.set(.15,.15,.15),ye.rotateZ(45),ye.rotateY(45),ye.position.set(.35,-1.5,.3),u.add(ye);const ue=new S(Ht,ne);ue.scale.set(.17,.17,.17),ue.rotateZ(45),ue.rotateY(15),ue.position.set(.35,1,.3),u.add(ue)}),dt.renderOrder=1,u.scale.set(1.35,1.35,1.35),c.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),l.position.set(t.bodyPosition.x,1,t.cameraPosition),l.lookAt(t.bodyPosition.x,0,0),l.position.z=4;const Pt=()=>{u.rotation.y,u.rotation.x},Ut=()=>{s.value=!0,o.value=!1,r.value=!1},Ct=()=>{s.value=!1,o.value=!0,r.value=!1},qt=()=>{s.value=!1,o.value=!1,Pt()},Ot=vt=>{const et=window.innerWidth/2;vt>et?Ut():Ct(),Pt()},$t=vt=>{clearTimeout(i),qt(),r.value=!0;const et={x:vt.clientX/window.innerWidth*2-1,y:-(vt.clientY/window.innerHeight)*2+1};if(r.value){const tt=et.x*Math.PI*.2,bt=et.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=bt}i=setTimeout(()=>{r.value=!1,Ot(vt.clientX)},500)};window.addEventListener("mousemove",$t);const G=vt=>{if(r.value){const et={x:vt.clientX/window.innerWidth*2-1,y:-(vt.clientY/window.innerHeight)*2+1},tt=et.x*Math.PI*.2,bt=et.y*Math.PI*.2;u.rotation.y=tt,u.rotation.x=bt}};window.addEventListener("mousemove",G),a(),We(()=>t.bodyPosition,vt=>{u.position.set(vt.x,vt.y,vt.z)}),We(()=>t.cameraPosition,vt=>{l.position.set(t.bodyPosition.x,1,vt),l.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,c)=>(mi(),gi("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2))}}),w1=_i(M1,[["__scopeId","data-v-8cfea564"]]),S1={class:"pixel-controls"},b1={class:"side-buttons"},E1=jn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);let i=Jt(!1),s=Jt(!1),o=Jt(!1),r=Jt(!1);ni(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03);const tt=vt.getElapsedTime();G.forEach((bt,Et)=>{const Ht=.2+Math.sin(tt*3+et[Et])*.1;bt.scale.set(Ht,Ht,Ht)}),x.render(f,_)};const f=new qn,_=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Xn({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new jt,p=new jt;f.add(p);const T=new Ui(16777215,2);f.add(T);const w=new Di(16777215,4);w.position.set(5,5,5),f.add(w);const b=new Li(16777215,5,50);b.position.set(0,2,4),f.add(b);const z=new ei,L=z.load("/3d-bear-arts/assets/pop6.jpg"),P=z.load("/3d-bear-arts/assets/pop7.jpg");L.wrapS=L.wrapT=Xe,P.wrapS=P.wrapT=Xe,P.repeat.set(2,2);const B=new Ft({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Q=new Ft({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xe}),y=new Ft({color:16766720,map:L,metalness:.3,roughness:.5}),E=new Ft({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xe}),U=new Ft({color:9055202,map:L,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),X=new Ft({color:65535,map:L,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),it=new Ft({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xe}),at=new xt(1,32,32,0,Math.PI),q=new S(at,Q),st=new S(at,B);q.scale.set(.85,.85,.8),st.scale.set(.85,.85,.8),q.position.y=-.2,st.position.y=-.2,q.rotation.y=Math.PI/2,st.rotation.y=Math.PI*1.5;const Y=new Ee(1,32),mt=new S(Y,B);mt.scale.set(.85,.85,.8),mt.position.set(0,-.2,0),mt.rotation.y=Math.PI/2;const pt=new jt;pt.add(q),pt.add(st),pt.add(mt),m.add(pt);const yt=new xt(.6,32,32,0,Math.PI),Lt=new S(yt,y);Lt.scale.set(1,.95,.95),Lt.position.set(0,1,0),Lt.rotation.y=Math.PI*1.5;const Gt=new S(yt,E);Gt.scale.set(1,.95,.95),Gt.position.set(0,1,0),Gt.rotation.y=Math.PI/2;const rt=new Ee(.6,32),ft=new S(rt,y);ft.position.set(0,1,0),ft.rotation.y=Math.PI/2,ft.scale.set(1,.95,.95);const wt=new jt;wt.add(Lt),wt.add(Gt),wt.add(ft),m.add(wt);const O=new xt(.25,32,32),lt=new S(O,B);lt.position.set(-.45,1.35,-.1),m.add(lt);const ot=new S(O,Q);ot.position.set(.45,1.35,-.1),m.add(ot);const ht=new xt(.25,32,32,Math.PI/2,Math.PI),St=new S(ht,y);St.scale.set(1.1,.6,.8),St.position.set(0,.84,.5),St.rotation.y=Math.PI;const nt=new xt(.25,32,32,Math.PI/2,Math.PI),g=new S(nt,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const A=new Ee(.25,32),I=new S(A,y);I.scale.set(.8,.6,.8),I.position.set(0,.84,.5),I.rotation.y=Math.PI/2;const F=new jt;F.add(St),F.add(g),F.add(I),m.add(F);const N=new Wn;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const W={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},J=new ti(N,W),M=new S(J,y);M.scale.set(.5,.5,.5),M.position.set(.3,0,0),M.rotation.y=Math.PI,M.rotation.x=Math.PI,m.add(M);const v=new S(J,X);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new S(J,B);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,m.add(C);const $=new xt(.35,32,32),k=new S($,X);k.scale.set(.75,1.25,.65),k.position.set(-.7,-.15,.2),m.add(k);const V=new S($,it);V.scale.set(.75,1.25,.65),V.position.set(.7,-.15,.2),m.add(V);const ut=new ee(.2,.22,.6,32),ct=new S(ut,y);ct.position.set(-.4,-1.05,0),m.add(ct);const _t=new S(ut,E);_t.position.set(.4,-1.05,0),m.add(_t);const Tt=new xt(.3,32,32),dt=new S(Tt,y);dt.scale.set(1,.72,1.5),dt.position.set(-.4,-1.45,.17),m.add(dt);const Mt=new S(Tt,E);Mt.scale.set(1,.72,1.5),Mt.position.set(.4,-1.45,.17),m.add(Mt);const Pt=new xt(.44,32,32),Ut=new S(Pt,B);Ut.position.set(-.15,-.45,-.4),m.add(Ut);const Ct=new S(Pt,Q);Ct.position.set(.15,-.45,-.4),m.add(Ct);const qt=new xt(.18,32,32),Ot=new S(qt,B);Ot.position.set(0,-.35,-.8),m.add(Ot),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(tt){const bt=new Ve("X",{font:tt,size:.2,depth:.05}),Et=new S(bt,B);Et.position.set(-.3,.99,.53),Et.rotation.x=ae.degToRad(-5),Et.rotation.y=ae.degToRad(-15),m.add(Et);const Ht=new Ve("O",{font:tt,size:.2,depth:.05}),te=new S(Ht,X);te.position.set(.14,.99,.53),te.rotation.y=ae.degToRad(12),te.rotation.x=ae.degToRad(-5),m.add(te);const ie=new Ve("POP",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new Ve("🐻",{font:tt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const ne=new Ve("BAO      BEAR",{font:tt,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),Zt=new Ft({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ft({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const se=new Ft({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),re=new Ft({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ye=new S(ie,Zt);ye.scale.set(.15,.15,.15),ye.position.set(.02,1.16,.1),ye.rotateZ(-25),m.add(ye);const ue=new S(ie,U);ue.scale.set(.14,.14,.14),ue.rotateZ(45),ue.position.set(.2,-.7,.3),m.add(ue);const Ne=new S(ie,se);Ne.scale.set(.14,.14,.14),Ne.rotateZ(45),Ne.rotateY(45),Ne.position.set(.3,.7,.3),m.add(Ne);const Se=new S(ie,se);Se.scale.set(.15,.15,.15),Se.rotateZ(45),Se.rotateY(45),Se.position.set(.35,-1.5,.3),m.add(Se);const ke=new S(ie,re);ke.scale.set(.17,.17,.17),ke.rotateZ(45),ke.rotateY(15),ke.position.set(.35,1,.3),m.add(ke);const we=new S(ne,Zt);we.scale.set(.7,.7,.7),we.position.set(-6,0,-3),p.add(we)}),Ot.renderOrder=1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,m.rotation.x=.1;const G=[M,v,C],vt=new Bp,et=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),We(()=>t.bodyPosition,tt=>{m.position.set(tt.x,tt.y,tt.z)}),We(()=>t.cameraPosition,tt=>{_.position.set(t.bodyPosition.x,1,tt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(mi(),gi(gn,null,[Yt("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2),Yt("div",S1,[Yt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Yt("div",b1,[Yt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Yt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Yt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),T1=_i(E1,[["__scopeId","data-v-cb52c927"]]),A1={class:"pixel-controls"},R1={class:"side-buttons"},P1=jn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);let i=Jt(!1),s=Jt(!1),o=Jt(!1),r=Jt(!1);ni(()=>{if(e.value){let d=function(se,re){const ye=new ee($t,$t,G,32);ye.rotateX(Math.PI/2);const ue=new S(ye,se),Ne=new jt;for(let ke=0;ke<vt;ke++){const we=ke/vt*Math.PI*2,Ye=new Pn(et,tt,bt),Ke=new S(Ye,se);Ke.position.set(($t+bt/26)*Math.cos(we),($t+bt/26)*Math.sin(we),0),Ke.rotation.z=we,Ne.add(Ke)}const Se=new jt;return Se.add(ue),Se.add(Ne),Se.position.set(re.x,re.y,re.z),Se},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),Et.rotation.z-=.02,Ht.rotation.z+=.03,te.rotation.z+=.02,ie.rotation.z+=.02,ne.rotation.z-=.03,Zt.rotation.y+=.04,m.render(_,x)};const _=new qn,x=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),m=new Xn({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new jt,T=new jt;_.add(T);const w=new Ui(16777215,2);_.add(w);const b=new Di(16777215,4);b.position.set(5,5,5),_.add(b);const z=new Li(16777215,5,50);z.position.set(0,2,4),_.add(z);const L=new ei,P=L.load("/3d-bear-arts/assets/metal.jpg"),B=L.load("/3d-bear-arts/assets/pop7.jpg"),Q=L.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=Xe,B.wrapS=B.wrapT=Xe,B.repeat.set(2,2);const y=new Ft({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});Q.mapping=wa;const E=new Ft({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),U=new Ft({color:"#C0C0C0",metalness:1,roughness:.25,envMap:Q,clearcoat:.7,clearcoatRoughness:.3}),X=new Ft({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:Q,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),it=new Ft({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:Q,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),at=new Ft({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:xe});new Ft({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const q=new Ft({color:"#d3d3d3",metalness:1,roughness:.2,map:Q,envMap:Q,clearcoat:.7,clearcoatRoughness:.3});new Ft({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:Q}),new Ft({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const st=new xt(1,32,32,0,Math.PI),Y=new S(st,it),mt=new S(st,E);Y.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),Y.position.y=-.2,mt.position.y=-.2,Y.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const pt=new Ee(1,32),yt=new S(pt,X);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const Lt=new jt;Lt.add(Y),Lt.add(mt),Lt.add(yt),p.add(Lt);const Gt=new xt(.6,32,32,0,Math.PI),rt=new S(Gt,E);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI*1.5;const ft=new S(Gt,it);ft.scale.set(1,.95,.95),ft.position.set(0,1,0),ft.rotation.y=Math.PI/2;const wt=new Ee(.6,32),O=new S(wt,X);O.position.set(0,1,0),O.rotation.y=Math.PI/2,O.scale.set(1,.95,.95);const lt=new jt;lt.add(rt),lt.add(ft),lt.add(O),p.add(lt);const ot=new xt(.25,32,32),ht=new S(ot,E);ht.position.set(-.45,1.35,-.1),p.add(ht);const St=new S(ot,X);St.position.set(.45,1.35,-.1),p.add(St);const nt=new xt(.25,32,32,Math.PI/2,Math.PI),g=new S(nt,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const A=new xt(.25,32,32,Math.PI/2,Math.PI),I=new S(A,X);I.scale.set(1.1,.6,.8),I.position.set(0,.84,.5),I.rotation.y=0;const F=new Ee(.25,32),N=new S(F,at);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const W=new jt;W.add(g),W.add(I),W.add(N),p.add(W);const J=new Wn;J.moveTo(0,0),J.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),J.bezierCurveTo(-.6,.3,0,.6,0,1),J.bezierCurveTo(0,.6,.6,.3,.6,0),J.bezierCurveTo(.6,-.3,0,-.3,0,0);const M={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new ti(J,M),C=new xt(.35,32,32),$=new S(C,E);$.scale.set(.75,1.25,.65),$.position.set(-.7,-.15,.2),p.add($);const k=new S(C,X);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),p.add(k);const V=new ee(.2,.22,.6,32),ut=new S(V,E);ut.position.set(-.4,-1.05,0),p.add(ut);const ct=new S(V,X);ct.position.set(.4,-1.05,0),p.add(ct);const _t=new xt(.3,32,32),Tt=new S(_t,E);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),p.add(Tt);const dt=new S(_t,X);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),p.add(dt);const Mt=new xt(.44,32,32),Pt=new S(Mt,E);Pt.position.set(-.15,-.45,-.4),p.add(Pt);const Ut=new S(Mt,it);Ut.position.set(.15,-.45,-.4),p.add(Ut);const Ct=new xt(.18,32,32),qt=new S(Ct,E);qt.position.set(0,-.35,-.8),p.add(qt),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(se){const re=new Ve("X",{font:se,size:.2,depth:.05});new Jn({color:0});const ye=new S(re,y);ye.position.set(-.3,.99,.53),ye.rotation.x=ae.degToRad(-5),ye.rotation.y=ae.degToRad(-15),p.add(ye);const ue=new Ve("O",{font:se,size:.2,depth:.05});new Jn({color:0});const Ne=new S(ue,y);Ne.position.set(.14,.99,.53),Ne.rotation.y=ae.degToRad(12),Ne.rotation.x=ae.degToRad(-5),p.add(Ne)}),qt.renderOrder=1;const $t=1.2,G=.5,vt=8,et=.7,tt=.3,bt=.5,Et=d(q,{x:-2,y:0,z:0}),Ht=d(q,{x:0,y:0,z:0}),te=d(q,{x:2,y:0,z:0}),ie=d(q,{x:2,y:0,z:0}),ne=d(q,{x:2,y:-2,z:0}),Zt=new S(v,U);Zt.scale.set(.3,.3,.3),Zt.position.set(.25,1.1,0),Zt.rotation.y=Math.PI,Zt.rotation.x=Math.PI,p.add(Zt),Et.position.set(.35,0,0),Ht.position.set(.25,-.3,.4),te.position.set(.3,.3,-.2),ie.position.set(.25,.17,.4),ne.position.set(.5,-.3,.45),Et.scale.set(.2,.2,.2),Ht.scale.set(.18,.18,.18),te.scale.set(.15,.15,.15),ie.scale.set(.17,.17,.17),ne.scale.set(.15,.15,.15),Ht.rotation.z=Math.PI/4,te.rotation.z=-Math.PI/4,ie.rotation.y=-Math.PI/2,ne.rotation.y=-Math.PI/2,p.add(Et),p.add(Ht),p.add(te),p.add(ie),p.add(ne),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,f(),We(()=>t.bodyPosition,se=>{p.position.set(se.x,se.y,se.z)}),We(()=>t.cameraPosition,se=>{x.position.set(t.bodyPosition.x,1,se),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(mi(),gi(gn,null,[Yt("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2),Yt("div",A1,[Yt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Yt("div",R1,[Yt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Yt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Yt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),C1=_i(P1,[["__scopeId","data-v-9a57b6d8"]]),I1={class:"pixel-controls"},L1={class:"side-buttons"},D1={class:"directional-buttons"},U1={class:"horizontal-buttons"},N1={class:"directional-buttons-woman"},F1={class:"horizontal-buttons-woman"},O1={class:"directional-buttons-kid"},B1={class:"horizontal-buttons-kid"},na=.1,ia=.05,sa=.08,z1=jn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);let i=Jt(!1),s=Jt(!1),o=Jt(!1),r=Jt(!1);const a=ho(null),c=Jt(!1),l=Jt(!1),h=Jt(!1),u=Jt(!1),d=ho(null),f=ho(null),_=Jt(!1),x=Jt(!1),m=Jt(!1),p=Jt(!1),T=Jt(!1),w=Jt(!1),b=Jt(!1),z=Jt(!1),L=new Xn({antialias:!0});L.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(L.domElement);const P=new qn,B=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3);B.position.z=5,ni(()=>{if(e.value){let nt=function(){const Rt=new jt,Re=new xt(.2,32,32),Pe=new Bt({color:16767916}),Me=new S(Re,Pe);Me.position.set(0,1.5,0),Rt.add(Me);const tn=new xt(.21,32,32,0,Math.PI*2,0,Math.PI/2),be=new Bt({color:16711680}),je=new S(tn,be);je.position.set(0,1.58,0),Rt.add(je);const Mn=new ee(.25,.25,.6,32),Be=new Bt({color:16767916}),cn=new S(Mn,Be);cn.position.set(0,1,0),Rt.add(cn);const Fn=new ee(.26,.26,.3,32),hn=new Bt({color:255}),wn=new S(Fn,hn);wn.position.set(0,.65,0),Rt.add(wn);const In=new ee(.1,.1,.5,32),sn=new Bt({color:16767916}),Sn=new S(In,sn);Sn.position.set(-.15,.25,0),Rt.add(Sn);const Ln=new S(In,sn);Ln.position.set(.15,.25,0),Rt.add(Ln);const On=new ee(.08,.08,.5,32),dn=new S(On,sn);dn.position.set(-.35,1.3,0),dn.rotation.z=Math.PI/4,Rt.add(dn);const fn=new S(On,sn);return fn.position.set(.35,1.3,0),fn.rotation.z=-Math.PI/4,Rt.add(fn),Rt.scale.set(.27,.27,.27),Rt.position.set(-.2,-.1,-.15),Rt},g=function(){const Rt=new jt,Re=new xt(.18,32,32),Pe=new Bt({color:16767916}),Me=new S(Re,Pe);Me.position.set(0,1.2,.04),Rt.add(Me);const tn=new xt(.19,32,32,.4,Math.PI*2,0,Math.PI/2),be=new ee(.18,.18,.4,32),je=new Bt({color:9127187}),Mn=new S(tn,je);Mn.position.set(0,1.28,0),Rt.add(Mn);const Be=new S(be,je);Be.position.set(0,1.1,-.01),Rt.add(Be);const cn=new ee(.18,.2,.5,32),Fn=new Bt({color:16767916}),hn=new S(cn,Fn);hn.position.set(0,.85,0),Rt.add(hn);const wn=new xt(.08,32,32,0,Math.PI),In=new Bt({color:16738740}),sn=new S(wn,In);sn.position.set(-.09,.98,.15),Rt.add(sn);const Sn=new S(wn,In);Sn.position.set(.09,.98,.15),Rt.add(Sn);const Ln=new ee(.22,.22,.25,32),On=new Bt({color:16738740}),dn=new S(Ln,On);dn.position.set(0,.6,0),Rt.add(dn);const fn=new ee(.1,.1,.6,32),vi=new Bt({color:16767916}),xi=new S(fn,vi);xi.position.set(-.09,.5,.2),xi.rotation.x=Math.PI/2,Rt.add(xi);const yi=new S(fn,vi);yi.position.set(.09,.5,.2),yi.rotation.x=Math.PI/2,Rt.add(yi);const Mi=new ee(.08,.08,.35,32),es=new S(Mi,vi);es.position.set(-.24,.95,.18),es.rotation.x=Math.PI/2,Rt.add(es);const Fi=new S(Mi,vi);return Fi.position.set(.2,.85,0),Fi.rotation.z=Math.PI/20,Rt.add(Fi),Rt.scale.set(.27,.27,.27),Rt.position.set(.2,-.15,-.32),Rt},A=function(){const Rt=new jt,Re=new xt(.2,32,32),Pe=new Bt({color:16767916}),Me=new S(Re,Pe);Me.position.set(0,1.5,0),Rt.add(Me);const tn=new xt(.21,32,32,0,Math.PI*2,0,Math.PI/2),be=new Bt({color:25600}),je=new S(tn,be);je.position.set(0,1.58,0),Rt.add(je);const Mn=new ee(.22,.22,.5,32),Be=new Bt({color:16767916}),cn=new S(Mn,Be);cn.position.set(0,1,0),Rt.add(cn);const Fn=new ee(.23,.23,.3,32),hn=new Bt({color:8388736}),wn=new S(Fn,hn);wn.position.set(0,.65,0),Rt.add(wn);const In=new ee(.1,.1,.5,32),sn=new Bt({color:16767916}),Sn=new S(In,sn);Sn.position.set(-.15,.3,-.25),Sn.rotation.x=Math.PI/6,Rt.add(Sn);const Ln=new S(In,sn);Ln.position.set(.15,.3,.25),Ln.rotation.x=-Math.PI/6,Rt.add(Ln);const On=new ee(.08,.08,.4,32),dn=new S(On,sn);dn.position.set(-.28,1,-.2),dn.rotation.x=Math.PI/6,Rt.add(dn);const fn=new S(On,sn);return fn.position.set(.28,1.3,.1),fn.rotation.z=-Math.PI/8,Rt.add(fn),Rt.scale.set(.15,.15,.15),Rt.position.set(.3,-.25,.25),Rt.rotation.x=Math.PI/12,Rt.rotation.y=Math.PI/2,Rt.rotation.z=-Math.PI/3,Rt},I=function(Rt){let Re=1,Pe=0;function Me(){requestAnimationFrame(Me),Rt.position.x+=.01*Re,Rt.position.x>=.35?(Re=-1,Rt.rotation.y=Math.PI):Rt.position.x<=-.35&&(Re=1,Rt.rotation.y=0),Pe+=.003,Rt.position.y=-.4+Math.sin(Pe)*.1,J.render(N,W)}Me()},F=function(){requestAnimationFrame(F),i.value&&(M.rotation.y+=.03),s.value&&(M.rotation.y-=.03),o.value&&(M.rotation.x-=.03),r.value&&(M.rotation.x+=.03),ye.uniforms.u_time.value+=.25,j.rotation.y+=.04,J.render(N,W)};const N=new qn,W=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),J=new Xn({antialias:!0,alpha:!0});J.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(J.domElement);const M=new jt,v=new jt;N.add(v);const C=new Ui(16777215,2);N.add(C);const $=new Di(16777215,4);$.position.set(5,5,5),N.add($);const k=new Li(16777215,5,50);k.position.set(0,2,4),N.add(k);const V=new ei,ut=V.load("/3d-bear-arts/assets/beach.jpg");ut.repeat.set(.8,1);const ct=V.load("/3d-bear-arts/assets/sun.jpg");ut.wrapS=ut.wrapT=Xe,ut.repeat.set(.8,1),ct.wrapS=ct.wrapT=Xe;const _t=new Ft({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Tt=new Ft({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:xe,ior:1.33,depthWrite:!1,depthTest:!0}),dt=new Ft({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),Mt=new Ft({color:11592447,map:ut,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:xe}),Pt=new Ft({color:11592447,map:ut,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:xe,ior:1.33}),Ut=new Ft({color:11592447,map:ut,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Ct=new xt(1,32,32,0,Math.PI),qt=new S(Ct,Mt),Ot=new S(Ct,Tt);qt.scale.set(.85,.85,.8),Ot.scale.set(.85,.85,.8),qt.position.y=-.2,Ot.position.y=-.2,qt.rotation.y=Math.PI/2,Ot.rotation.y=Math.PI*1.5;const $t=new Ee(1,32),G=new S($t,_t);G.scale.set(.85,.85,.8),G.position.set(0,-.2,0),G.rotation.y=Math.PI/2;const vt=new jt;vt.add(qt),vt.add(Ot),vt.add(G),M.add(vt);const et=new xt(.6,32,32,0,Math.PI),tt=new S(et,_t);tt.scale.set(1,.95,.95),tt.position.set(0,1,0),tt.rotation.y=Math.PI*1.5;const bt=new S(et,dt);bt.scale.set(1,.95,.95),bt.position.set(0,1,0),bt.rotation.y=Math.PI/2;const Et=new Ee(.6,32),Ht=new S(Et,_t);Ht.position.set(0,1,0),Ht.rotation.y=Math.PI/2,Ht.scale.set(1,.95,.95);const te=new jt;te.add(tt),te.add(bt),te.add(Ht),M.add(te);const ie=new xt(.6,32,32,0,Math.PI*2,0,Math.PI/2),ne=new Ft({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),Zt=new S(ie,ne);Zt.position.set(0,-.2,0),Zt.rotation.x=Math.PI,Zt.scale.set(1.25,1.25,1.25),vt.add(Zt);const se=new Ft({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:xe,transparent:!0,opacity:.7,depthWrite:!1}),re=new S($t,se);re.scale.set(.7,.7,.7),re.position.set(0,-.3,0),re.rotation.x=Math.PI/2,re.renderOrder=1,vt.add(re),M.add(vt);const ye=new Un({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),ue=new S($t,ye);ue.position.set(0,-.3,0),ue.scale.set(.7,.7,.7),ue.rotation.x=-Math.PI/2,ue.renderOrder=1,vt.add(ue);const Ne=new xt(.25,32,32),Se=new S(Ne,Pt);Se.position.set(-.45,1.35,-.1),M.add(Se);const ke=new S(Ne,dt);ke.position.set(.45,1.35,-.1),M.add(ke);const we=new xt(.25,32,32,Math.PI/2,Math.PI),Ye=new S(we,Pt);Ye.scale.set(1.1,.6,.8),Ye.position.set(0,.84,.5),Ye.rotation.y=Math.PI;const Ke=new xt(.25,32,32,Math.PI/2,Math.PI),Nn=new S(Ke,dt);Nn.scale.set(1.1,.6,.8),Nn.position.set(0,.84,.5),Nn.rotation.y=0;const It=new Ee(.25,32),le=new S(It,Tt);le.scale.set(.8,.6,.8),le.position.set(0,.84,.5),le.rotation.y=Math.PI/2;const ge=new jt;ge.add(Ye),ge.add(Nn),ge.add(le),M.add(ge);const Te=new Ft({color:8374441,metalness:1,roughness:.25,envMap:ct,clearcoat:.7,clearcoatRoughness:.3}),R=new Wn;R.moveTo(0,0),R.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),R.bezierCurveTo(-.6,.3,0,.6,0,1),R.bezierCurveTo(0,.6,.6,.3,.6,0),R.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},D=new ti(R,K),j=new S(D,Te);j.scale.set(.2,.2,.2),j.position.set(.25,1.2,0),j.rotation.y=Math.PI,j.rotation.x=Math.PI,M.add(j);const H=new xt(.35,32,32),gt=new S(H,Tt);gt.scale.set(.75,1.25,.65),gt.position.set(-.7,-.15,.2),M.add(gt);const At=new S(H,Mt);At.scale.set(.75,1.25,.65),At.position.set(.7,-.15,.2),M.add(At);const Nt=new ee(.2,.22,.6,32),Dt=new S(Nt,Pt);Dt.position.set(-.4,-1.05,0),M.add(Dt);const Xt=new S(Nt,dt);Xt.position.set(.4,-1.05,0),M.add(Xt);const Wt=new xt(.3,32,32),zt=new S(Wt,Pt);zt.scale.set(1,.72,1.5),zt.position.set(-.4,-1.45,.17),M.add(zt);const Qt=new S(Wt,dt);Qt.scale.set(1,.72,1.5),Qt.position.set(.4,-1.45,.17),M.add(Qt);const oe=new xt(.44,32,32),de=new S(oe,Pt);de.position.set(-.15,-.45,-.4),M.add(de);const ve=new S(oe,Pt);ve.position.set(.15,-.45,-.4),M.add(ve);const ce=new xt(.18,32,32),Kt=new S(ce,Pt);Kt.position.set(0,-.35,-.8),M.add(Kt),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Rt){const Re=new Ve("X",{font:Rt,size:.2,depth:.05}),Pe=new S(Re,Ut);Pe.position.set(-.3,.99,.53),Pe.rotation.x=ae.degToRad(-5),Pe.rotation.y=ae.degToRad(-15),M.add(Pe);const Me=new Ve("O",{font:Rt,size:.2,depth:.05}),tn=new S(Me,Ut);tn.position.set(.14,.99,.53),tn.rotation.y=ae.degToRad(12),tn.rotation.x=ae.degToRad(-5),M.add(tn)}),a.value=nt(),M.add(a.value),N.add(M),d.value=g(),M.add(d.value),f.value=A(),M.add(f.value),I(f.value),M.scale.set(1.4,1.4,1.4),N.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),W.position.set(t.bodyPosition.x,1,t.cameraPosition),W.lookAt(t.bodyPosition.x,0,0),W.position.z=4,M.rotation.x=.1,F(),We(()=>t.bodyPosition,Rt=>{M.position.set(Rt.x,Rt.y,Rt.z)}),We(()=>t.cameraPosition,Rt=>{W.position.set(t.bodyPosition.x,1,Rt),W.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{W.aspect=window.innerWidth/window.innerHeight,W.updateProjectionMatrix(),J.setSize(window.innerWidth,window.innerHeight)})}});function Q(){s.value=!0}function y(){i.value=!0}function E(){o.value=!0}function U(){r.value=!0}function X(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const it=()=>{c.value=!0,console.log(c.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},at=()=>{l.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},q=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},st=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},Y=()=>{c.value=!1,l.value=!1,h.value=!1,u.value=!1},mt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},pt=()=>{x.value=!0,d.value&&(d.value.rotation.y=0)},yt=()=>{m.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},Lt=()=>{p.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},Gt=()=>{_.value=!1,x.value=!1,m.value=!1,p.value=!1},rt=()=>{requestAnimationFrame(rt),a.value&&(c.value&&(a.value.position.z-=na),l.value&&(a.value.position.z+=na),h.value&&(a.value.position.x-=na),u.value&&(a.value.position.x+=na)),L.render(P,B)},ft=()=>{requestAnimationFrame(ft),d.value&&(_.value&&(d.value.position.z-=ia),x.value&&(d.value.position.z+=ia),m.value&&(d.value.position.x-=ia),p.value&&(d.value.position.x+=ia))};ft(),rt();const wt=()=>{T.value=!0,f.value&&(f.value.rotation.y=0)},O=()=>{w.value=!0,f.value&&(f.value.rotation.y=Math.PI)},lt=()=>{b.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},ot=()=>{z.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},ht=()=>{T.value=!1,w.value=!1,b.value=!1,z.value=!1},St=()=>{requestAnimationFrame(St),f.value&&(T.value&&(f.value.position.z-=sa),w.value&&(f.value.position.z+=sa),b.value&&(f.value.position.x-=sa),z.value&&(f.value.position.x+=sa))};return St(),(nt,g)=>(mi(),gi(gn,null,[Yt("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2),Yt("div",I1,[Yt("button",{class:"pixel-btn up",onMousedown:E,onMouseup:X},"UP",32),Yt("div",L1,[Yt("button",{class:"pixel-btn left",onMousedown:Q,onMouseup:X},"LEFT",32),Yt("button",{class:"pixel-btn right",onMousedown:y,onMouseup:X},"RIGHT",32)]),Yt("button",{class:"pixel-btn down",onMousedown:U,onMouseup:X},"DOWN",32)]),Yt("div",D1,[Yt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:it,onMouseup:Y},"UP",32),Yt("div",U1,[Yt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:q,onMouseup:Y},"LEFT",32),Yt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:st,onMouseup:Y},"RIGHT",32)]),Yt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:at,onMouseup:Y},"DOWN",32)]),Yt("div",N1,[Yt("button",{class:"directional-btn-woman north-btn",onMousedown:mt,onMouseup:Gt},"UP",32),Yt("div",F1,[Yt("button",{class:"directional-btn-woman west-btn",onMousedown:yt,onMouseup:Gt},"LEFT",32),Yt("button",{class:"directional-btn-woman east-btn",onMousedown:Lt,onMouseup:Gt},"RIGHT",32)]),Yt("button",{class:"directional-btn-woman south-btn",onMousedown:pt,onMouseup:Gt},"DOWN",32)]),Yt("div",O1,[Yt("button",{class:"directional-btn-kid north-btn",onMousedown:wt,onMouseup:ht},"UP",32),Yt("div",B1,[Yt("button",{class:"directional-btn-kid west-btn",onMousedown:lt,onMouseup:ht},"LEFT",32),Yt("button",{class:"directional-btn-kid east-btn",onMousedown:ot,onMouseup:ht},"RIGHT",32)]),Yt("button",{class:"directional-btn-kid south-btn",onMousedown:O,onMouseup:ht},"DOWN",32)])],64))}}),G1=_i(z1,[["__scopeId","data-v-f25dfda5"]]),H1={class:"pixel-controls"},k1={class:"side-buttons"},V1=jn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);let i=Jt(!1),s=Jt(!1),o=Jt(!1),r=Jt(!1);ni(()=>{if(e.value){let d=function(Se,ke){const we=new jt,Ye=new xt(1,32,32),Ke=new S(Ye,at);Ke.scale.set(1,.8,1),we.add(Ke);const Nn=new ee(.1,.1,.5,16),It=new Bt({color:9127187}),le=new S(Nn,It);return le.position.set(0,.9,0),we.add(le),we},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),$t.rotation.z-=.04,G.rotation.z+=.04,vt.rotation.z+=.03,et.rotation.z+=.03,v.rotation.y+=.04,Ne+=ye,p.position.y=t.bodyPosition.y+Math.sin(Ne)*ue;const Se=se.getElapsedTime();Zt.forEach((ke,we)=>{const Ye=.1+Math.sin(Se*3+re[we])*.1;ke.scale.set(Ye,Ye,Ye)}),m.render(_,x)};const _=new qn,x=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),m=new Xn({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new jt,T=new jt;_.add(T);const w=new Ui(16777215,2);_.add(w);const b=new Di(16777215,4);b.position.set(5,5,5),_.add(b);const z=new Li(16777215,5,50);z.position.set(0,2,4),_.add(z);const L=new ei,P=L.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=Xe,P.repeat.set(.8,.85);const B=L.load("/3d-bear-arts/assets/pumpkin.jpg");B.wrapS=B.wrapT=Xe,B.repeat.set(1,1);const Q=L.load("/3d-bear-arts/assets/pumpkin.jpg");Q.wrapS=B.wrapT=Xe,Q.repeat.set(2,.8);const y=new Ft({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new jt,U=new Ft({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),X=new Ft({color:16747520,map:B,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),it=new Ft({color:16747520,map:Q,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:xe}),at=new Ft({color:16747520,map:Q,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ft({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ft({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ft({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const q=new xt(1,32,32,0,Math.PI),st=new S(q,it),Y=new S(q,U);st.scale.set(.85,.85,.8),Y.scale.set(.85,.85,.8),st.position.y=-.2,Y.position.y=-.2,st.rotation.y=Math.PI/2,Y.rotation.y=Math.PI*1.5;const mt=new Ee(1,32),pt=new S(mt,X);pt.scale.set(.85,.85,.8),pt.position.set(0,-.2,0),pt.rotation.y=Math.PI/2;const yt=new jt;yt.add(st),yt.add(Y),yt.add(pt),p.add(yt);const Lt=new xt(.6,32,32,0,Math.PI),Gt=new S(Lt,U);Gt.scale.set(1,.95,.95),Gt.position.set(0,1,0),Gt.rotation.y=Math.PI*1.5;const rt=new S(Lt,it);rt.scale.set(1,.95,.95),rt.position.set(0,1,0),rt.rotation.y=Math.PI/2;const ft=new Ee(.6,32),wt=new S(ft,X);wt.position.set(0,1,0),wt.rotation.y=Math.PI/2,wt.scale.set(1,.95,.95);const O=new jt;O.add(Gt),O.add(rt),O.add(wt),p.add(O);const lt=new xt(.25,32,32),ot=new S(lt,at);ot.position.set(-.45,1.35,-.1),p.add(ot);const ht=new S(lt,it);ht.position.set(.45,1.35,-.1),p.add(ht);const St=new xt(.25,32,32,Math.PI/2,Math.PI),nt=new S(St,U);nt.scale.set(1.1,.6,.8),nt.position.set(0,.84,.5),nt.rotation.y=Math.PI;const g=new xt(.25,32,32,Math.PI/2,Math.PI),A=new S(g,it);A.scale.set(1.1,.6,.8),A.position.set(0,.84,.5),A.rotation.y=0;const I=new Ee(.25,32),F=new S(I,U);F.scale.set(.8,.6,.8),F.position.set(0,.84,.5),F.rotation.y=Math.PI/2;const N=new jt;N.add(nt),N.add(A),N.add(F),p.add(N);const W=new Wn;W.moveTo(0,0),W.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),W.bezierCurveTo(-.6,.3,0,.6,0,1),W.bezierCurveTo(0,.6,.6,.3,.6,0),W.bezierCurveTo(.6,-.3,0,-.3,0,0);const J={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},M=new ti(W,J),v=new S(M,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new xt(.35,32,32),$=new S(C,X);$.scale.set(.75,1.25,.65),$.position.set(-.7,-.15,.2),p.add($);const k=new S(C,it);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),p.add(k);const V=new ee(.2,.22,.6,32),ut=new S(V,X);ut.position.set(-.4,-1.05,0),p.add(ut);const ct=new S(V,it);ct.position.set(.4,-1.05,0),p.add(ct);const _t=new xt(.3,32,32),Tt=new S(_t,at);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),p.add(Tt);const dt=new S(_t,it);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),p.add(dt);const Mt=new xt(.44,32,32),Pt=new S(Mt,U);Pt.position.set(-.15,-.45,-.4),p.add(Pt);const Ut=new S(Mt,it);Ut.position.set(.15,-.45,-.4),p.add(Ut);const Ct=new xt(.18,32,32),qt=new S(Ct,at);qt.position.set(0,-.35,-.8),p.add(qt),qt.renderOrder=1,new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Se){const ke=new Ve("X",{font:Se,size:.2,depth:.05}),we=new S(ke,X);we.position.set(-.3,.99,.53),we.rotation.x=ae.degToRad(-5),we.rotation.y=ae.degToRad(-15),p.add(we);const Ye=new Ve("O",{font:Se,size:.2,depth:.05}),Ke=new S(Ye,X);Ke.position.set(.14,.99,.53),Ke.rotation.y=ae.degToRad(12),Ke.rotation.x=ae.degToRad(-5),p.add(Ke)}),p.add(E);const $t=d(),G=d(),vt=d(),et=d();$t.position.set(.35,-.35,-.3),G.position.set(.25,-.45,.3),vt.position.set(.3,.1,-.2),et.position.set(.25,.18,.4),$t.scale.set(.3,.3,.3),G.scale.set(.28,.28,.28),vt.scale.set(.25,.25,.25),et.scale.set(.23,.23,.23),G.rotation.z=Math.PI/4,vt.rotation.z=-Math.PI/4,et.rotation.y=-Math.PI/2,p.add($t),p.add(G),p.add(vt),p.add(et);const tt=new Wn;tt.moveTo(-.5,0),tt.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),tt.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),tt.bezierCurveTo(-.05,.6,.05,.6,.15,.4),tt.bezierCurveTo(.25,.5,.25,.85,.5,.8),tt.bezierCurveTo(1,.6,.75,.25,.5,0),tt.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const bt={depth:.3,bevelEnabled:!1},Et=new ti(tt,bt),Ht=new Jn({color:0}),te=new S(Et,Ht);te.scale.set(.3,.3,.6),te.rotation.x=0,te.rotation.z=0,te.position.set(.26,.35,.25),p.add(te);const ie=new S(Et,Ht);ie.scale.set(.5,.5,.5),ie.position.set(.4,-.1,.54),p.add(ie);const ne=new S(Et,Ht);ne.scale.set(.5,.5,.5),ne.position.set(.32,-.35,.65),p.add(ne),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const Zt=[te,ie,ne],se=new Bp,re=[0,Math.PI/2,Math.PI,0,Math.PI/3];let ye=.05,ue=.25,Ne=0;f(),We(()=>t.bodyPosition,Se=>{p.position.set(Se.x,Se.y,Se.z)}),We(()=>t.cameraPosition,Se=>{x.position.set(t.bodyPosition.x,1,Se),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(mi(),gi(gn,null,[Yt("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2),Yt("div",H1,[Yt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Yt("div",k1,[Yt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Yt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Yt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),W1=_i(V1,[["__scopeId","data-v-5eff72b3"]]),X1={class:"pixel-controls"},q1={class:"side-buttons"},Y1=jn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);let i=Jt(!1),s=Jt(!1),o=Jt(!1),r=Jt(!1);ni(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),J.rotation.y+=.03,Ht+=et,te+=tt,m.position.y=t.bodyPosition.y+Math.sin(Ht)*Et,J.position.y=t.bodyPosition.y+Math.sin(te)*bt,$t.uniforms.u_time.value+=.25,x.render(f,_)};const f=new qn,_=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),x=new Xn({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new jt,p=new jt;f.add(p);const T=new Ui(16777215,2);f.add(T);const w=new Di(16777215,4);w.position.set(5,5,5),f.add(w);const b=new Li(16777215,5,50);b.position.set(0,2,4),f.add(b);const z=new ei,L=z.load("/3d-bear-arts/assets/ghost.jpg");L.wrapS=L.wrapT=Xe,L.repeat.set(2,2);const P=z.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Xe,P.repeat.set(1,1);const B=new Ft({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:xe}),Q=new Ft({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new Ft({color:9109504,map:L,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Ft({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:xe}),U=new Ft({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:xe}),X=new Ft({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:xe}),it=new xt(1,32,32,0,Math.PI),at=new S(it,B),q=new S(it,U);at.scale.set(.85,.85,.8),q.scale.set(.85,.85,.8),at.position.y=-.2,q.position.y=-.2,at.rotation.y=Math.PI/2,q.rotation.y=Math.PI*1.5;const st=new Ee(1,32),Y=new S(st,U);Y.scale.set(.85,.85,.8),Y.position.set(0,-.2,0),Y.rotation.y=Math.PI/2;const mt=new jt;mt.add(at),mt.add(q),mt.add(Y),m.add(mt);const pt=new xt(.6,32,32,0,Math.PI),yt=new S(pt,X);yt.scale.set(1,.95,.95),yt.position.set(0,1,0),yt.rotation.y=Math.PI*1.5;const Lt=new S(pt,Q);Lt.scale.set(1,.95,.95),Lt.position.set(0,1,0),Lt.rotation.y=Math.PI/2;const Gt=new Ee(.6,32),rt=new S(Gt,U);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const ft=new jt;ft.add(yt),ft.add(Lt),ft.add(rt),m.add(ft);const wt=new xt(.25,32,32),O=new S(wt,X);O.position.set(-.45,1.35,-.1),m.add(O);const lt=new S(wt,Q);lt.position.set(.45,1.35,-.1),m.add(lt);const ot=new xt(.25,32,32,Math.PI/2,Math.PI),ht=new S(ot,X);ht.scale.set(1.1,.6,.8),ht.position.set(0,.84,.5),ht.rotation.y=Math.PI;const St=new xt(.25,32,32,Math.PI/2,Math.PI),nt=new S(St,Q);nt.scale.set(1.1,.6,.8),nt.position.set(0,.84,.5),nt.rotation.y=0;const g=new Ee(.25,32),A=new S(g,E);A.scale.set(.8,.6,.8),A.position.set(0,.84,.5),A.rotation.y=Math.PI/2;const I=new jt;I.add(ht),I.add(nt),I.add(A),m.add(I);const F=new Wn;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const N={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},W=new ti(F,N),J=new S(W,y);J.scale.set(.35,.35,.35),J.position.set(0,-.05,0),J.rotation.y=Math.PI,J.rotation.x=Math.PI,m.add(J);const M=new xt(.35,32,32),v=new S(M,U);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),m.add(v);const C=new S(M,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),m.add(C);const $=new ee(.2,.22,.6,32),k=new S($,U);k.position.set(-.4,-1.05,0),m.add(k);const V=new S($,E);V.position.set(.4,-1.05,0),m.add(V);const ut=new xt(.3,32,32),ct=new S(ut,U);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),m.add(ct);const _t=new S(ut,E);_t.scale.set(1,.72,1.5),_t.position.set(.4,-1.45,.17),m.add(_t);const Tt=new xt(.44,32,32),dt=new S(Tt,E);dt.position.set(-.15,-.45,-.4),m.add(dt);const Mt=new S(Tt,E);Mt.position.set(.15,-.45,-.4),m.add(Mt);const Pt=new xt(.18,32,32),Ut=new S(Pt,U);Ut.position.set(0,-.35,-.8),m.add(Ut);const Ct=new xt(.6,32,32,0,Math.PI*2,0,Math.PI/2),qt=new Ft({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Ot=new S(Ct,qt);Ot.position.set(0,-.2,0),Ot.rotation.x=Math.PI,Ot.scale.set(1.25,1.25,1.25),mt.add(Ot);const $t=new Un({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),G=new S(st,$t);G.position.set(0,-.26,0),G.scale.set(.7,.7,.7),G.rotation.x=-Math.PI/2,G.renderOrder=1,mt.add(G),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ie){const ne=new Ve("X",{font:ie,size:.2,depth:.05}),Zt=new S(ne,U);Zt.position.set(-.3,.99,.53),Zt.rotation.x=ae.degToRad(-5),Zt.rotation.y=ae.degToRad(-15),m.add(Zt);const se=new Ve("O",{font:ie,size:.2,depth:.05}),re=new S(se,U);re.position.set(.14,.99,.53),re.rotation.y=ae.degToRad(12),re.rotation.x=ae.degToRad(-5),m.add(re)}),Ut.renderOrder=1,m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let et=.05,tt=.06,bt=.2,Et=.25,Ht=0,te=0;d(),We(()=>t.bodyPosition,ie=>{m.position.set(ie.x,ie.y,ie.z)}),We(()=>t.cameraPosition,ie=>{_.position.set(t.bodyPosition.x,1,ie),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function c(){i.value=!0}function l(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(mi(),gi(gn,null,[Yt("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2),Yt("div",X1,[Yt("button",{class:"pixel-btn up",onMousedown:l,onMouseup:u},"UP",32),Yt("div",q1,[Yt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Yt("button",{class:"pixel-btn right",onMousedown:c,onMouseup:u},"RIGHT",32)]),Yt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),j1=_i(Y1,[["__scopeId","data-v-eb44448e"]]),$1={class:"pixel-controls"},K1={class:"side-buttons"},Z1=15,J1=5,Q1=jn({__name:"Santa",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);let i=Jt(!1),s=Jt(!1),o=Jt(!1),r=Jt(!1);const a=ho(null),c=new Xn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new qn;const l=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,ni(()=>{if(e.value){let x=function(){const It=new jt,le=new Ji(.12,.05,16,100),ge=new Bt({color:16777215}),Te=new S(le,ge);Te.position.set(0,1.65,0),Te.rotation.x=Math.PI/2,It.add(Te);const R=new Ti(.15,.3,32),K=new Bt({color:16711680}),D=new S(R,K);D.position.set(0,1.8,0),It.add(D);const j=new xt(.05,32,32),H=new Bt({color:16777215}),gt=new S(j,H);return gt.position.set(0,1.93,0),It.add(gt),It.position.set(0,-.1,0),It},m=function(){const It=new jt,le=new xt(.15,32,32),ge=new Bt({color:16764057}),Te=new S(le,ge);Te.position.set(0,.4,0),It.add(Te);const R=new Ti(.08,.15,32);new Bt({color:16764057});const K=new S(R,pt);K.position.set(-.1,.55,0),K.rotation.z=Math.PI/6,It.add(K);const D=new S(R,pt);D.position.set(.1,.55,0),D.rotation.z=-Math.PI/6,It.add(D);const j=new ee(.12,.15,.3,32),H=new Bt({color:16764057}),gt=new S(j,H);gt.position.set(0,.2,0),It.add(gt);const At=new ee(.05,.05,.2,32),Nt=new Bt({color:16764057}),Dt=new S(At,Nt);Dt.position.set(-.07,-.05,.05),It.add(Dt);const Xt=new S(At,Nt);Xt.position.set(.07,-.05,.05),It.add(Xt);const Wt=new ee(.04,.04,.2,32),zt=new Bt({color:16764057}),Qt=new S(Wt,pt);Qt.position.set(-.15,.25,0),Qt.rotation.z=Math.PI/4,It.add(Qt);const oe=new S(Wt,zt);oe.position.set(.15,.25,0),oe.rotation.z=-Math.PI/4,It.add(oe);const de=new ee(.03,.03,.25,32),ve=new Bt({color:16764057}),ce=new S(de,ve);return ce.position.set(0,.1,-.2),ce.rotation.x=Math.PI/4,It.add(ce),It.scale.set(.75,.75,.75),It.position.set(.2,0,.2),It},p=function(){const It=new jt,le=new xt(.2,32,32),ge=new Bt({color:16764057}),Te=new S(le,ge);Te.position.set(0,1,0),It.add(Te);const R=new Bt({color:16777215}),K=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Mi of K){const es=new xt(Mi.size,16,16),Fi=new S(es,R);Fi.position.set(Mi.x,Mi.y-.06,Mi.z-.01),It.add(Fi)}const D=new Bt({color:16777215}),j=new ee(.05,.06,.1,32),H=new S(j,D);H.position.set(-.06,.93,.18),H.rotation.z=Math.PI/4;const gt=new ee(.05,.06,.1,32),At=new S(gt,D);At.position.set(.06,.93,.18),At.rotation.z=-Math.PI/4;const Nt=new Ji(.12,.05,16,100),Dt=new Bt({color:16777215}),Xt=new S(Nt,Dt);Xt.position.set(0,1.15,0),Xt.rotation.x=Math.PI/2,It.add(Xt);const Wt=new Ti(.15,.3,32),zt=new Bt({color:16711680}),Qt=new S(Wt,zt);Qt.position.set(0,1.3,0),It.add(Qt);const oe=new xt(.05,32,32),de=new Bt({color:16777215}),ve=new S(oe,de);ve.position.set(0,1.43,0),It.add(ve);const ce=new ee(.2,.25,.6,32),Kt=new Bt({color:16711680}),Ae=new S(ce,Kt);Ae.position.set(0,.5,0),It.add(Ae);const Rt=new ee(.25,.25,.1,32),Re=new Bt({color:0}),Pe=new S(Rt,Re);Pe.position.set(0,.4,.005),It.add(Pe);const Me=new ee(.06,.06,.3,32),tn=new Bt({color:16711680}),be=new S(Me,tn);be.position.set(-.25,.75,0),be.rotation.z=Math.PI/4,It.add(be);const je=new S(Me,tn);je.position.set(.25,.75,0),je.rotation.z=-Math.PI/4,It.add(je);const Mn=new xt(.07,32,32),Be=new Bt({color:16777215}),cn=new S(Mn,Be);cn.position.set(-.35,.85,0),It.add(cn);const Fn=new S(Mn,Be);Fn.position.set(.35,.85,0),It.add(Fn);const hn=new ee(.1,.1,.15,32),wn=new Bt({color:16711680}),In=new ee(.08,.08,.4,32),sn=new Bt({color:0}),Sn=new S(In,sn);Sn.position.set(-.1,.1,0),It.add(Sn);const Ln=new S(hn,wn);Ln.position.set(-.1,-.05,0),It.add(Ln);const On=new S(In,sn);On.position.set(.1,.1,0),It.add(On);const dn=new S(hn,wn);dn.position.set(.1,-.05,0),It.add(dn);const fn=new xt(.12,32,32),vi=new Bt({color:16711680}),xi=new S(fn,vi);xi.scale.set(1,.7,1.5),xi.position.set(-.1,-.12,.12),It.add(xi);const yi=new S(fn,vi);return yi.scale.set(1,.7,1.5),yi.position.set(.1,-.1,.12),It.add(yi),It.scale.set(.25,.25,.25),It.position.set(.2,.5,-0),It},T=function(){let It=0;function le(){requestAnimationFrame(le),It+=.4,se.position.y=.45+Math.sin(It)*.5,E.render(Q,y)}le()},w=function(It){let le=1,ge=0;function Te(){requestAnimationFrame(Te),It.position.x+=.01*le,It.position.x>=.5?(le=-1,It.rotation.y=Math.PI):It.position.x<=0&&(le=1,It.rotation.y=0),ge+=1,It.position.y=-.2+Math.sin(ge)*.01,It.position.z=.5,E.render(Q,y)}Te()},b=function(){const It=new jt,le=new Pn(.7,.8,.7),ge=new Bt({color:9127187}),Te=new S(le,ge);Te.position.set(0,.4,0),It.add(Te);const R=new Ti(.55,.25,4),K=new Bt({color:16777215}),D=new S(R,K);D.position.set(0,.9,0),D.rotation.y=Math.PI/4,It.add(D);const j=new Pn(.25,.35,.05),H=new Bt({color:6636321}),gt=new S(j,H);gt.position.set(0,.2,.36),It.add(gt);const At=new Pn(.15,.15,.05),Nt=new Bt({color:8900331}),Dt=new S(At,Nt);Dt.position.set(-.2,.5,.38),It.add(Dt);const Xt=new S(At,Nt);Xt.position.set(.2,.5,.38),It.add(Xt);const Wt=new Pn(.2,.4,.2),zt=new Bt({color:8421504}),Qt=new S(Wt,zt);Qt.position.set(0,.95,0),It.add(Qt);const oe=new Ji(.07,.04,32,100),de=new Bt({color:2263842}),ve=new S(oe,de);return ve.position.set(0,.45,.38),It.add(ve),It.position.set(.22,-.2,0),It.scale.set(.5,.5,.5),It},z=function(It=1,le={x:0,y:0,z:0}){const ge=new jt,Te=new ee(1.2,.9,3,32),R=new Bt({color:25153}),K=new S(Te,R);ge.add(K);const D=new ee(1.3,1.3,.2,32),j=new Bt({color:3355443}),H=new S(D,j);H.position.y=1.6,ge.add(H);const gt=2,At=new ee(1.1,1.1,gt,32),Nt=new Bt({color:9127187}),Dt=new S(At,Nt);return Dt.position.y=0,new ei().load("/3d-bear-arts/assets/starbucks-logo.png",function(Wt){Wt.repeat.set(4,1),Wt.offset.set(.25,0),Wt.wrapS=Xe,Wt.wrapT=Xe;const zt=new Bt({color:9127187,map:Wt,transparent:!0}),Qt=new ee(1.1,1.05,1.5,32),oe=new S(Qt,zt);oe.position.y=-.5,ge.add(oe)}),ge.scale.set(It,It,It),ge.position.set(le.x,le.y,le.z),ge},L=function(){let It=1;function le(){requestAnimationFrame(le),It-=.1,Se.position.y=.5+Math.sin(It)*.8,E.render(Q,y)}le()},P=function(){requestAnimationFrame(P);const It=we.attributes.position.array;for(let le=1;le<It.length;le+=3)It[le]-=.02,It[le]<-10&&(It[le]=10);we.attributes.position.needsUpdate=!0,E.render(Q,y)},B=function(){requestAnimationFrame(B),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),v.uniforms.u_time.value+=.5,re.rotation.y+=.45,Ne.rotation.y+=.05,Se.rotation.y+=.08,E.render(Q,y)};const Q=new qn,y=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),E=new Xn({antialias:!0,alpha:!0});E.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(E.domElement);const U=new jt,X=new jt;Q.add(X);const it=new Ui(16777215,2);Q.add(it);const at=new Di(16777215,4);at.position.set(5,5,5),Q.add(at);const q=new Li(16777215,5,50);q.position.set(0,2,4),Q.add(q);const st=new ei,Y=st.load("/3d-bear-arts/assets/house.jpg");Y.wrapS=Y.wrapT=Xe,Y.repeat.set(1,1),st.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const mt=new Ft({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:xe});new Ft({color:16777215,metalness:.3,map:Y,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:xe});const pt=new Ft({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:xe}),yt=new Iu().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);Q.environment=yt;const Lt=new Ft({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:xe}),Gt=new Ft({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),rt=new xt(1,32,32,0,Math.PI),ft=new S(rt,mt),wt=new S(rt,pt);ft.scale.set(.85,.85,.8),wt.scale.set(.85,.85,.8),ft.position.y=-.2,wt.position.y=-.2,ft.rotation.y=Math.PI/2,wt.rotation.y=Math.PI*1.5;const O=new Ee(1,32),lt=new S(O,Lt);lt.scale.set(.85,.85,.8),lt.position.set(0,-.2,0),lt.rotation.y=Math.PI/2;const ot=new jt;ot.add(ft),ot.add(wt),ot.add(lt),U.add(ot);const ht=new xt(.6,32,32,0,Math.PI),St=new S(ht,pt);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI*1.5;const nt=new S(ht,mt);nt.scale.set(1,.95,.95),nt.position.set(0,1,0),nt.rotation.y=Math.PI/2;const g=new Ee(.6,32),A=new S(g,Lt);A.position.set(0,1,0),A.rotation.y=Math.PI/2,A.scale.set(1,.95,.95);const I=new jt;I.add(St),I.add(nt),I.add(A),U.add(I);const F=new xt(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new Ft({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),W=new S(F,N);W.position.set(0,-.2,0),W.rotation.x=Math.PI,W.scale.set(1.25,1.25,1.25),ot.add(W);const J=new Ft({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:xe,transparent:!1,opacity:.8}),M=new S(O,J);M.scale.set(.7,.7,.7),M.position.set(0,-.3,0),M.rotation.x=Math.PI/2,M.renderOrder=1,ot.add(M),U.add(ot);const v=new Un({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),C=new S(O,v);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,ot.add(C);const $=new xt(.25,32,32),k=new S($,pt);k.position.set(-.45,1.35,-.1),U.add(k);const V=new S($,mt);V.position.set(.45,1.35,-.1),U.add(V);const ut=new xt(.25,32,32,Math.PI/2,Math.PI),ct=new S(ut,pt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI;const _t=new xt(.25,32,32,Math.PI/2,Math.PI),Tt=new S(_t,mt);Tt.scale.set(1.1,.6,.8),Tt.position.set(0,.84,.5),Tt.rotation.y=0;const dt=new Ee(.25,32),Mt=new S(dt,Lt);Mt.scale.set(.8,.6,.8),Mt.position.set(0,.84,.5),Mt.rotation.y=Math.PI/2;const Pt=new jt;Pt.add(ct),Pt.add(Tt),Pt.add(Mt),U.add(Pt);const Ut=new xt(.35,32,32),Ct=new S(Ut,pt);Ct.scale.set(.75,1.25,.65),Ct.position.set(-.7,-.15,.2),U.add(Ct);const qt=new S(Ut,mt);qt.scale.set(.75,1.25,.65),qt.position.set(.7,-.15,.2),U.add(qt);const Ot=new ee(.2,.22,.6,32),$t=new S(Ot,pt);$t.position.set(-.4,-1.05,0),U.add($t);const G=new S(Ot,mt);G.position.set(.4,-1.05,0),U.add(G);const vt=new xt(.3,32,32),et=new S(vt,pt);et.scale.set(1,.72,1.5),et.position.set(-.4,-1.45,.17),U.add(et);const tt=new S(vt,mt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),U.add(tt);const bt=new xt(.44,32,32),Et=new S(bt,pt);Et.position.set(-.15,-.45,-.4),U.add(Et);const Ht=new S(bt,Gt);Ht.position.set(.15,-.45,-.4),U.add(Ht);const te=new xt(.18,32,32),ie=new S(te,pt);ie.position.set(0,-.35,-.8),U.add(ie),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(It){const le=new Ve("X",{font:It,size:.2,depth:.05}),ge=new S(le,Gt);ge.position.set(-.3,.99,.53),ge.rotation.x=ae.degToRad(-5),ge.rotation.y=ae.degToRad(-15),U.add(ge);const Te=new Ve("O",{font:It,size:.2,depth:.05}),R=new S(Te,Gt);R.position.set(.14,.99,.53),R.rotation.y=ae.degToRad(12),R.rotation.x=ae.degToRad(-5),U.add(R)});const Zt=x();U.add(Zt),m();const se=p();U.add(se);const re=p();re.position.set(-.2,-.1,.5),U.add(re),T(),a.value=p(),U.add(a.value),w(a.value);const ye=b();U.add(ye);const ue=b();ue.position.set(-.2,-.2,0),ue.scale.set(.35,.35,.35),U.add(ue);const Ne=z(.1,{x:0,y:0,z:1}),Se=z(1.1,{x:0,y:-1.2,z:0});L();const ke=1e3,we=new yn,Ye=[];for(let It=0;It<ke;It++){const le=(Math.random()-.5)*20,ge=Math.random()*20,Te=(Math.random()-.5)*20;Ye.push(le,ge,Te)}we.setAttribute("position",new qe(Ye,3));const Ke=new Aa({color:16777215,size:.1,transparent:!0,opacity:.8}),Nn=new ma(we,Ke);U.add(Nn),P(),U.scale.set(1.2,1.2,1.2),Q.add(U),U.scale.set(1.4,1.4,1.4),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),Q.add(U),U.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,U.rotation.x=.1,B(),We(()=>t.bodyPosition,It=>{U.position.set(It.x,It.y,It.z)}),We(()=>t.cameraPosition,It=>{y.position.set(t.bodyPosition.x,1,It),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let x=0;x<Z1;x++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let x=0;x<J1;x++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(x,m)=>(mi(),gi(gn,null,[Yt("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2),Yt("div",$1,[Yt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),Yt("div",K1,[Yt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),Yt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),Yt("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),tb=_i(Q1,[["__scopeId","data-v-9079e50a"]]),eb={class:"pixel-controls"},nb={class:"side-buttons"},ib=15,sb=5,ob=jn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);let i=Jt(!1),s=Jt(!1),o=Jt(!1),r=Jt(!1);const a=ho(null),c=new Xn({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),new qn;const l=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5,ni(()=>{if(e.value){let x=function(){const D=new jt,j=new Ji(.12,.05,16,100),H=new Bt({color:16777215}),gt=new S(j,H);gt.position.set(0,1.65,0),gt.rotation.x=Math.PI/2,D.add(gt);const At=new Ti(.15,.3,32),Nt=new Bt({color:16711680}),Dt=new S(At,Nt);Dt.position.set(0,1.8,0),D.add(Dt);const Xt=new xt(.05,32,32),Wt=new Bt({color:16777215}),zt=new S(Xt,Wt);return zt.position.set(0,1.93,0),D.add(zt),D.position.set(0,-.1,0),D},m=function(){const D=new jt,j=new xt(.15,32,32),H=new Bt({color:16764057}),gt=new S(j,H);gt.position.set(0,.4,0),D.add(gt);const At=new Ti(.08,.15,32);new Bt({color:16764057});const Nt=new S(At,pt);Nt.position.set(-.1,.55,0),Nt.rotation.z=Math.PI/6,D.add(Nt);const Dt=new S(At,pt);Dt.position.set(.1,.55,0),Dt.rotation.z=-Math.PI/6,D.add(Dt);const Xt=new ee(.12,.15,.3,32),Wt=new Bt({color:16764057}),zt=new S(Xt,Wt);zt.position.set(0,.2,0),D.add(zt);const Qt=new ee(.05,.05,.2,32),oe=new Bt({color:16764057}),de=new S(Qt,oe);de.position.set(-.07,-.05,.05),D.add(de);const ve=new S(Qt,oe);ve.position.set(.07,-.05,.05),D.add(ve);const ce=new ee(.04,.04,.2,32),Kt=new Bt({color:16764057}),Ae=new S(ce,pt);Ae.position.set(-.15,.25,0),Ae.rotation.z=Math.PI/4,D.add(Ae);const Rt=new S(ce,Kt);Rt.position.set(.15,.25,0),Rt.rotation.z=-Math.PI/4,D.add(Rt);const Re=new ee(.03,.03,.25,32),Pe=new Bt({color:16764057}),Me=new S(Re,Pe);return Me.position.set(0,.1,-.2),Me.rotation.x=Math.PI/4,D.add(Me),D.scale.set(.75,.75,.75),D.position.set(.2,0,.2),D},p=function(){const D=new jt,j=new xt(.2,32,32),H=new Bt({color:16764057}),gt=new S(j,H);gt.position.set(0,1,0),D.add(gt);const At=new Bt({color:16777215}),Nt=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Sr of Nt){const Gp=new xt(Sr.size,16,16),Uu=new S(Gp,At);Uu.position.set(Sr.x,Sr.y-.06,Sr.z-.01),D.add(Uu)}const Dt=new Bt({color:16777215}),Xt=new ee(.05,.06,.1,32),Wt=new S(Xt,Dt);Wt.position.set(-.06,.93,.18),Wt.rotation.z=Math.PI/4;const zt=new ee(.05,.06,.1,32),Qt=new S(zt,Dt);Qt.position.set(.06,.93,.18),Qt.rotation.z=-Math.PI/4;const oe=new Ji(.12,.05,16,100),de=new Bt({color:16777215}),ve=new S(oe,de);ve.position.set(0,1.15,0),ve.rotation.x=Math.PI/2,D.add(ve);const ce=new Ti(.15,.3,32),Kt=new Bt({color:16711680}),Ae=new S(ce,Kt);Ae.position.set(0,1.3,0),D.add(Ae);const Rt=new xt(.05,32,32),Re=new Bt({color:16777215}),Pe=new S(Rt,Re);Pe.position.set(0,1.43,0),D.add(Pe);const Me=new ee(.2,.25,.6,32),tn=new Bt({color:16711680}),be=new S(Me,tn);be.position.set(0,.5,0),D.add(be);const je=new ee(.25,.25,.1,32),Mn=new Bt({color:0}),Be=new S(je,Mn);Be.position.set(0,.4,.005),D.add(Be);const cn=new ee(.06,.06,.3,32),Fn=new Bt({color:16711680}),hn=new S(cn,Fn);hn.position.set(-.25,.75,0),hn.rotation.z=Math.PI/4,D.add(hn);const wn=new S(cn,Fn);wn.position.set(.25,.75,0),wn.rotation.z=-Math.PI/4,D.add(wn);const In=new xt(.07,32,32),sn=new Bt({color:16777215}),Sn=new S(In,sn);Sn.position.set(-.35,.85,0),D.add(Sn);const Ln=new S(In,sn);Ln.position.set(.35,.85,0),D.add(Ln);const On=new ee(.1,.1,.15,32),dn=new Bt({color:16711680}),fn=new ee(.08,.08,.4,32),vi=new Bt({color:0}),xi=new S(fn,vi);xi.position.set(-.1,.1,0),D.add(xi);const yi=new S(On,dn);yi.position.set(-.1,-.05,0),D.add(yi);const Mi=new S(fn,vi);Mi.position.set(.1,.1,0),D.add(Mi);const es=new S(On,dn);es.position.set(.1,-.05,0),D.add(es);const Fi=new xt(.12,32,32),Du=new Bt({color:16711680}),ja=new S(Fi,Du);ja.scale.set(1,.7,1.5),ja.position.set(-.1,-.12,.12),D.add(ja);const $a=new S(Fi,Du);return $a.scale.set(1,.7,1.5),$a.position.set(.1,-.1,.12),D.add($a),D.scale.set(.25,.25,.25),D.position.set(.2,.5,-0),D},T=function(){let D=0;function j(){requestAnimationFrame(j),D+=.4,se.position.y=.45+Math.sin(D)*.5,E.render(Q,y)}j()},w=function(D){let j=1,H=0;function gt(){requestAnimationFrame(gt),D.position.x+=.01*j,D.position.x>=.5?(j=-1,D.rotation.y=Math.PI):D.position.x<=0&&(j=1,D.rotation.y=0),H+=1,D.position.y=-.2+Math.sin(H)*.01,D.position.z=.5,E.render(Q,y)}gt()},b=function(){const D=new jt,j=new Pn(.7,.8,.7),H=new Bt({color:9127187}),gt=new S(j,H);gt.position.set(0,.4,0),D.add(gt);const At=new Ti(.55,.25,4),Nt=new Bt({color:16777215}),Dt=new S(At,Nt);Dt.position.set(0,.9,0),Dt.rotation.y=Math.PI/4,D.add(Dt);const Xt=new Pn(.25,.35,.05),Wt=new Bt({color:6636321}),zt=new S(Xt,Wt);zt.position.set(0,.2,.36),D.add(zt);const Qt=new Pn(.15,.15,.05),oe=new Bt({color:8900331}),de=new S(Qt,oe);de.position.set(-.2,.5,.38),D.add(de);const ve=new S(Qt,oe);ve.position.set(.2,.5,.38),D.add(ve);const ce=new Pn(.2,.4,.2),Kt=new Bt({color:8421504}),Ae=new S(ce,Kt);Ae.position.set(0,.95,0),D.add(Ae);const Rt=new Ji(.07,.04,32,100),Re=new Bt({color:2263842}),Pe=new S(Rt,Re);return Pe.position.set(0,.45,.38),D.add(Pe),D.position.set(.22,-.2,0),D.scale.set(.5,.5,.5),D},z=function(D=1,j={x:0,y:0,z:0}){const H=new jt,gt=new ee(1.2,.9,3,32),At=new Bt({color:25153}),Nt=new S(gt,At);H.add(Nt);const Dt=new ee(1.3,1.3,.2,32),Xt=new Bt({color:3355443}),Wt=new S(Dt,Xt);return Wt.position.y=1.6,H.add(Wt),new ei().load("/3d-bear-arts/assets/starbucks-logo.png",function(Qt){Qt.repeat.set(4,1),Qt.offset.set(.25,0),Qt.wrapS=Xe,Qt.wrapT=Xe;const oe=new Bt({color:9127187,map:Qt,transparent:!0}),de=new ee(1.1,1.05,1.5,32),ve=new S(de,oe);ve.position.y=-.5,H.add(ve)}),H.scale.set(D,D,D),H.position.set(j.x,j.y,j.z),H},L=function(){requestAnimationFrame(L);const D=we.attributes.position.array;for(let j=1;j<D.length;j+=3)D[j]-=.02,D[j]<-10&&(D[j]=10);we.attributes.position.needsUpdate=!0,E.render(Q,y)},P=function(){requestAnimationFrame(P);const D=Te.attributes.position.array;for(let j=1;j<D.length;j+=3)D[j]-=.02,D[j]<-ge&&(D[j]=ge);Te.attributes.position.needsUpdate=!0,E.render(Q,y)},B=function(){requestAnimationFrame(B),i.value&&(U.rotation.y+=.03),s.value&&(U.rotation.y-=.03),o.value&&(U.rotation.x-=.03),r.value&&(U.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),v.uniforms.u_time.value+=.5,re.rotation.y+=.45,Ne.rotation.y+=.05,Se.rotation.y+=.05,U.rotation.y-=.05,E.render(Q,y)};const Q=new qn,y=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),E=new Xn({antialias:!0,alpha:!0});E.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(E.domElement);const U=new jt,X=new jt;Q.add(X);const it=new Ui(16777215,2);Q.add(it);const at=new Di(16777215,4);at.position.set(5,5,5),Q.add(at);const q=new Li(16777215,5,50);q.position.set(0,2,4),Q.add(q);const st=new ei,Y=st.load("/3d-bear-arts/assets/house.jpg");Y.wrapS=Y.wrapT=Xe,Y.repeat.set(1,1),st.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const mt=new Ft({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:xe});new Ft({color:16777215,metalness:.3,map:Y,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:xe});const pt=new Ft({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.7,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:xe}),yt=new Iu().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);Q.environment=yt;const Lt=new Ft({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:.5,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:xe}),Gt=new Ft({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),rt=new xt(1,32,32,0,Math.PI),ft=new S(rt,mt),wt=new S(rt,pt);ft.scale.set(.85,.85,.8),wt.scale.set(.85,.85,.8),ft.position.y=-.2,wt.position.y=-.2,ft.rotation.y=Math.PI/2,wt.rotation.y=Math.PI*1.5;const O=new Ee(1,32),lt=new S(O,Lt);lt.scale.set(.85,.85,.8),lt.position.set(0,-.2,0),lt.rotation.y=Math.PI/2;const ot=new jt;ot.add(ft),ot.add(wt),ot.add(lt),U.add(ot);const ht=new xt(.6,32,32,0,Math.PI),St=new S(ht,pt);St.scale.set(1,.95,.95),St.position.set(0,1,0),St.rotation.y=Math.PI*1.5;const nt=new S(ht,mt);nt.scale.set(1,.95,.95),nt.position.set(0,1,0),nt.rotation.y=Math.PI/2;const g=new Ee(.6,32),A=new S(g,Lt);A.position.set(0,1,0),A.rotation.y=Math.PI/2,A.scale.set(1,.95,.95);const I=new jt;I.add(St),I.add(nt),I.add(A),U.add(I);const F=new xt(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new Ft({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),W=new S(F,N);W.position.set(0,-.2,0),W.rotation.x=Math.PI,W.scale.set(1.25,1.25,1.25),ot.add(W);const J=new Ft({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:xe,transparent:!1,opacity:.8}),M=new S(O,J);M.scale.set(.7,.7,.7),M.position.set(0,-.3,0),M.rotation.x=Math.PI/2,M.renderOrder=1,ot.add(M),U.add(ot);const v=new Un({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
            `}),C=new S(O,v);C.position.set(0,-.2,0),C.scale.set(.7,.7,.7),C.rotation.x=-Math.PI/2,C.renderOrder=2,ot.add(C);const $=new xt(.25,32,32),k=new S($,pt);k.position.set(-.45,1.35,-.1),U.add(k);const V=new S($,mt);V.position.set(.45,1.35,-.1),U.add(V);const ut=new xt(.25,32,32,Math.PI/2,Math.PI),ct=new S(ut,pt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI;const _t=new xt(.25,32,32,Math.PI/2,Math.PI),Tt=new S(_t,mt);Tt.scale.set(1.1,.6,.8),Tt.position.set(0,.84,.5),Tt.rotation.y=0;const dt=new Ee(.25,32),Mt=new S(dt,Lt);Mt.scale.set(.8,.6,.8),Mt.position.set(0,.84,.5),Mt.rotation.y=Math.PI/2;const Pt=new jt;Pt.add(ct),Pt.add(Tt),Pt.add(Mt),U.add(Pt);const Ut=new xt(.35,32,32),Ct=new S(Ut,pt);Ct.scale.set(.75,1.25,.65),Ct.position.set(-.7,-.15,.2),U.add(Ct);const qt=new S(Ut,mt);qt.scale.set(.75,1.25,.65),qt.position.set(.7,-.15,.2),U.add(qt);const Ot=new ee(.2,.22,.6,32),$t=new S(Ot,pt);$t.position.set(-.4,-1.05,0),U.add($t);const G=new S(Ot,mt);G.position.set(.4,-1.05,0),U.add(G);const vt=new xt(.3,32,32),et=new S(vt,pt);et.scale.set(1,.72,1.5),et.position.set(-.4,-1.45,.17),U.add(et);const tt=new S(vt,mt);tt.scale.set(1,.72,1.5),tt.position.set(.4,-1.45,.17),U.add(tt);const bt=new xt(.44,32,32),Et=new S(bt,pt);Et.position.set(-.15,-.45,-.4),U.add(Et);const Ht=new S(bt,pt);Ht.position.set(.15,-.45,-.4),U.add(Ht);const te=new xt(.18,32,32),ie=new S(te,pt);ie.position.set(0,-.35,-.8),U.add(ie),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(D){const j=new Ve("X",{font:D,size:.2,depth:.05}),H=new S(j,Gt);H.position.set(-.3,.99,.53),H.rotation.x=ae.degToRad(-5),H.rotation.y=ae.degToRad(-15),U.add(H);const gt=new Ve("O",{font:D,size:.2,depth:.05}),At=new S(gt,Gt);At.position.set(.14,.99,.53),At.rotation.y=ae.degToRad(12),At.rotation.x=ae.degToRad(-5),U.add(At)});const Zt=x();U.add(Zt),m();const se=p();U.add(se);const re=p();re.position.set(-.2,-.1,.5),U.add(re),T(),a.value=p(),U.add(a.value),w(a.value);const ye=b();U.add(ye);const ue=b();ue.position.set(-.2,-.2,0),ue.scale.set(.35,.35,.35),U.add(ue);const Ne=z(.1,{x:0,y:0,z:1}),Se=z(.6,{x:0,y:-1.5,z:0}),ke=1e3,we=new yn,Ye=[];for(let D=0;D<ke;D++){const j=(Math.random()-.5)*20,H=Math.random()*20,gt=(Math.random()-.5)*20;Ye.push(j,H,gt)}we.setAttribute("position",new qe(Ye,3));const Ke=new Aa({color:16777215,size:.1,transparent:!0,opacity:.8}),Nn=new ma(we,Ke);U.add(Nn),L();const It=2e3,le=[],ge=.6;for(let D=0;D<It;D++){const j=(Math.random()-.5)*ge*2,H=(Math.random()-.5)*ge*2,gt=(Math.random()-.5)*ge*2;Math.sqrt(j*j+H*H+gt*gt)<ge&&le.push(j,H,gt)}const Te=new yn;Te.setAttribute("position",new qe(le,3)),new Aa({color:16777215,size:.05,transparent:!0,opacity:.9}),new ma(Te,N).position.set(0,-.2,0),new ma(Te,J).position.set(0,.8,0),P(),U.scale.set(.85,.85,.85),U.position.set(t.bodyPosition.x,t.bodyPosition.y+.9,t.bodyPosition.z),Q.add(U),Q.add(Se),y.position.set(t.bodyPosition.x,1,t.cameraPosition),y.lookAt(t.bodyPosition.x,0,0),y.position.z=4,U.rotation.x=.1,B(),We(()=>t.bodyPosition,D=>{U.position.set(D.x,D.y,D.z)}),We(()=>t.cameraPosition,D=>{y.position.set(t.bodyPosition.x,1,D),y.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let x=0;x<ib;x++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let x=0;x<sb;x++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(x,m)=>(mi(),gi(gn,null,[Yt("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2),Yt("div",eb,[Yt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),Yt("div",nb,[Yt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),Yt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),Yt("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),rb=_i(ob,[["__scopeId","data-v-ceb84432"]]),ab=jn({__name:"SliverBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Jt(null);return ni(()=>{if(e.value){let i=function(){c.visible=!1,x.update(a,o),c.visible=!0,requestAnimationFrame(i)},s=function(){requestAnimationFrame(s),G.value?c.rotation.y+=.03:vt.value&&(c.rotation.y-=.03),a.render(o,r)};const o=new qn,r=new Ge(75,window.innerWidth/window.innerHeight,.1,1e3),a=new Xn({antialias:!0,alpha:!0});a.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(a.domElement);const c=new jt,l=new Ui(16777215,2);o.add(l);const h=new Di(16777215,4);h.position.set(5,5,5),o.add(h);const u=new Li(16777215,5,50);u.position.set(0,2,4),o.add(u);const f=new ei().load("3d-bear-arts/src/assets/gradient_texture.jpg"),_=new Mp(256,{format:Zn,generateMipmaps:!0,minFilter:ps}),x=new yp(1,1e3,_);new Ft({color:16738740,metalness:1,roughness:.1,clearcoat:1,clearcoatRoughness:.1,envMap:f,envMapIntensity:1.5}),new Ft({color:12632256,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.35,envMap:_.texture,envMapIntensity:1.5}),o.add(x),o.environment=_.texture,i();const m=new Iu;m.load(["https://threejs.org/examples/textures/cube/Park2/posx.jpg","https://threejs.org/examples/textures/cube/Park2/negx.jpg","https://threejs.org/examples/textures/cube/Park2/posy.jpg","https://threejs.org/examples/textures/cube/Park2/negy.jpg","https://threejs.org/examples/textures/cube/Park2/posz.jpg","https://threejs.org/examples/textures/cube/Park2/negz.jpg"]);const p=m.load(["/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg","/3d-bear-arts/assets/popbear1.jpg"]);o.environment=p;const T=new Ft({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,envMap:p,reflectivity:1}),w=new Ft({color:16738740,metalness:1,roughness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,envMap:p,reflectivity:1}),b=new Un({uniforms:{time:{value:0},color1:{value:new _e(16766720)},color2:{value:new _e(16007990)}},vertexShader:`
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
          `}),z=new Ft({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.89}),L=new Ft({color:"#FF00CC",metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),P=new Ft({color:"#4C99FF",metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),B=`
      varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
      `,Q=`
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
      `,y=new Un({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:B,fragmentShader:Q,transparent:!1,depthWrite:!0}),E=new xt(1,32,32,0,Math.PI),U=new S(E,w),X=new S(E,T);U.scale.set(.85,.85,.8),X.scale.set(.85,.85,.8),U.position.y=-.2,X.position.y=-.2,U.rotation.y=Math.PI/2,X.rotation.y=Math.PI*1.5;const it=new Ee(1,32),at=new S(it,T);at.scale.set(.85,.85,.8),at.position.set(0,-.2,0),at.rotation.y=Math.PI/2;const q=new jt;q.add(U),q.add(X),q.add(at),c.add(q);const st=new xt(.6,32,32,0,Math.PI),Y=new S(st,T);Y.scale.set(1,.95,.95),Y.position.set(0,1,0),Y.rotation.y=Math.PI*1.5;const mt=new S(st,w);mt.scale.set(1,.95,.95),mt.position.set(0,1,0),mt.rotation.y=Math.PI/2;const pt=new Ee(.6,32),yt=new S(pt,T);yt.position.set(0,1,0),yt.rotation.y=Math.PI/2,yt.scale.set(1,.95,.95);const Lt=new jt;Lt.add(Y),Lt.add(mt),Lt.add(yt),c.add(Lt);const Gt=new xt(.25,32,32),rt=new S(Gt,T);rt.position.set(-.45,1.35,-.1),c.add(rt);const ft=new S(Gt,w);ft.position.set(.45,1.35,-.1),c.add(ft);const wt=new xt(.25,32,32,Math.PI/2,Math.PI),O=new S(wt,T);O.scale.set(1.1,.6,.8),O.position.set(0,.84,.5),O.rotation.y=Math.PI;const lt=new xt(.25,32,32,Math.PI/2,Math.PI),ot=new S(lt,w);ot.scale.set(1.1,.6,.8),ot.position.set(0,.84,.5),ot.rotation.y=0;const ht=new Ee(.25,32),St=new S(ht,T);St.scale.set(.8,.6,.8),St.position.set(0,.84,.5),St.rotation.y=Math.PI/2;const nt=new jt;nt.add(O),nt.add(ot),nt.add(St),c.add(nt);const g=new Wn;g.moveTo(0,0),g.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),g.bezierCurveTo(-.6,.3,0,.6,0,1),g.bezierCurveTo(0,.6,.6,.3,.6,0),g.bezierCurveTo(.6,-.3,0,-.3,0,0);const A={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ft({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const I=new ti(g,A);new Jn({color:0});const F=new S(I,z);F.scale.set(.1,.1,.1),F.rotation.z=ae.degToRad(210),F.rotation.x=ae.degToRad(5),F.rotation.y=ae.degToRad(-45),F.position.set(-.4,.9,.45);const N=new S(I,y);N.scale.set(.5,.5,.5),N.position.set(.35,0,0),N.rotation.y=Math.PI,N.rotation.x=Math.PI,c.add(N);const W=new S(I,b);W.scale.set(.35,.35,.35),W.position.set(.3,0,0),W.rotation.y=Math.PI,W.rotation.x=Math.PI,c.add(W);const J=new S(I,P);J.scale.set(.25,.25,.25),J.position.set(.27,.4,0),J.rotation.y=Math.PI,J.rotation.x=Math.PI,c.add(J);const M=new S(I,L);M.scale.set(.3,.3,.3),M.position.set(.23,-.5,.3),M.rotation.y=Math.PI,M.rotation.x=Math.PI,c.add(M);const v=new S(I,y);v.scale.set(.4,.4,.4),v.position.set(.27,0,.35),v.rotation.y=Math.PI,v.rotation.x=Math.PI;const C=new xt(.35,32,32),$=new S(C,T);$.scale.set(.75,1.25,.65),$.position.set(-.7,-.15,.2),c.add($);const k=new S(C,w);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),c.add(k);const V=new ee(.2,.22,.6,32),ut=new S(V,T);ut.position.set(-.4,-1.05,0),c.add(ut);const ct=new S(V,w);ct.position.set(.4,-1.05,0),c.add(ct);const _t=new xt(.3,32,32),Tt=new S(_t,T);Tt.scale.set(1,.72,1.5),Tt.position.set(-.4,-1.45,.17),c.add(Tt);const dt=new S(_t,w);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),c.add(dt);const Mt=new xt(.44,32,32),Pt=new S(Mt,T);Pt.position.set(-.15,-.45,-.4),c.add(Pt);const Ut=new S(Mt,w);Ut.position.set(.15,-.45,-.4),c.add(Ut);const Ct=new xt(.18,32,32),qt=new S(Ct,y);qt.position.set(0,-.35,-.8),c.add(qt),new Ni().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Zt){const se=new Ve("X",{font:Zt,size:.18,depth:.05});new Jn({color:0});const re=new S(se,y);re.position.set(-.3,.99,.53),re.rotation.x=ae.degToRad(-5),re.rotation.y=ae.degToRad(-15),c.add(re);const ye=new Ve("+",{font:Zt,size:.25,depth:.1});new Jn({color:0});const ue=new S(ye,y);ue.position.set(.14,.99,.53),ue.rotation.y=ae.degToRad(12),ue.rotation.x=ae.degToRad(-5),c.add(ue)}),qt.renderOrder=1,c.scale.set(1.4,1.4,1.4),o.add(c),c.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),r.position.set(t.bodyPosition.x,1,t.cameraPosition),r.lookAt(t.bodyPosition.x,0,0),r.position.z=4;let $t=null,G=Jt(!1),vt=Jt(!1),et=Jt(!1);const tt=()=>{c.rotation.y,c.rotation.x},bt=()=>{G.value=!0,vt.value=!1,et.value=!1},Et=()=>{G.value=!1,vt.value=!0,et.value=!1},Ht=()=>{G.value=!1,vt.value=!1,tt()},te=Zt=>{const se=window.innerWidth/2;Zt>se?bt():Et(),tt()},ie=Zt=>{clearTimeout($t),Ht(),et.value=!0;const se={x:Zt.clientX/window.innerWidth*2-1,y:-(Zt.clientY/window.innerHeight)*2+1};if(et.value){const re=se.x*Math.PI*.2,ye=se.y*Math.PI*.2;c.rotation.y=re,c.rotation.x=ye}$t=setTimeout(()=>{et.value=!1,te(Zt.clientX)},500)};window.addEventListener("mousemove",ie);const ne=Zt=>{if(et.value){const se={x:Zt.clientX/window.innerWidth*2-1,y:-(Zt.clientY/window.innerHeight)*2+1},re=se.x*Math.PI*.2,ye=se.y*Math.PI*.2;c.rotation.y=re,c.rotation.x=ye}};window.addEventListener("mousemove",ne),b.uniforms.time.value+=.04,s(),We(()=>t.bodyPosition,Zt=>{c.position.set(Zt.x,Zt.y,Zt.z)}),We(()=>t.cameraPosition,Zt=>{r.position.set(t.bodyPosition.x,1,Zt),r.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(mi(),gi("div",{ref_key:"threeCanvas",ref:e,class:Yn(n.background?"no-bg":"three-canvas")},null,2))}}),cb=_i(ab,[["__scopeId","data-v-0791f68d"]]),lb=[{path:"/3d-bear-arts/leather",name:"Leather",component:y1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:w1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:T1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:C1},{path:"/3d-bear-arts/water",name:"Water",component:G1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:W1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:j1},{path:"/3d-bear-arts/",name:"Santa",component:tb},{path:"/3d-bear-arts/coffee",name:"Coffee",component:rb},{path:"/3d-bear-arts/christmas-ball-pink",name:"ChrsitmasBallPink",component:cb}],ub=m_({history:Xg(),routes:lb}),zp=lg(pg);zp.use(ub);zp.mount("#app");
