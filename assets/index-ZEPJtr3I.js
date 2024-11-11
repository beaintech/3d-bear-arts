(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Pe={},sr=[],gi=()=>{},Ep=()=>!1,Sa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zc=n=>n.startsWith("onUpdate:"),on=Object.assign,Gc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},bp=Object.prototype.hasOwnProperty,Me=(n,t)=>bp.call(n,t),se=Array.isArray,Br=n=>wa(n)==="[object Map]",Tp=n=>wa(n)==="[object Set]",ne=n=>typeof n=="function",sn=n=>typeof n=="string",Sr=n=>typeof n=="symbol",Ye=n=>n!==null&&typeof n=="object",Sd=n=>(Ye(n)||ne(n))&&ne(n.then)&&ne(n.catch),Ap=Object.prototype.toString,wa=n=>Ap.call(n),Rp=n=>wa(n).slice(8,-1),Pp=n=>wa(n)==="[object Object]",Hc=n=>sn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,zr=Bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Cp=/-(\w)/g,zn=Ea(n=>n.replace(Cp,(t,e)=>e?e.toUpperCase():"")),Ip=/\B([A-Z])/g,Us=Ea(n=>n.replace(Ip,"-$1").toLowerCase()),ba=Ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),ka=Ea(n=>n?`on${ba(n)}`:""),cs=(n,t)=>!Object.is(n,t),Va=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},wd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Lp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Eu;const Ed=()=>Eu||(Eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kc(n){if(se(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=sn(i)?Fp(i):kc(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(sn(n)||Ye(n))return n}const Dp=/;(?![^(]*\))/g,Up=/:([^]+)/,Np=/\/\*[^]*?\*\//g;function Fp(n){const t={};return n.replace(Np,"").split(Dp).forEach(e=>{if(e){const i=e.split(Up);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Hn(n){let t="";if(sn(n))t=n;else if(se(n))for(let e=0;e<n.length;e++){const i=Hn(n[e]);i&&(t+=i+" ")}else if(Ye(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bp=Bc(Op);function bd(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let In;class zp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=In,!t&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=In;try{return In=this,t()}finally{In=e}}}on(){In=this}off(){In=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Gp(){return In}let Le;const Wa=new WeakSet;class Td{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,In&&In.active&&In.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bu(this),Pd(this);const t=Le,e=ei;Le=this,ei=!0;try{return this.fn()}finally{Cd(this),Le=t,ei=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xc(t);this.deps=this.depsTail=void 0,bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fl(this)&&this.run()}get dirty(){return Fl(this)}}let Ad=0,er;function Rd(n){n.flags|=8,n.next=er,er=n}function Vc(){Ad++}function Wc(){if(--Ad>0)return;let n;for(;er;){let t=er,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=er,er=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Pd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Cd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Xc(i),Hp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Fl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Id(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Id(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Zr))return;n.globalVersion=Zr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Fl(n)){n.flags&=-3;return}const e=Le,i=ei;Le=n,ei=!0;try{Pd(n);const s=n.fn(n._value);(t.version===0||cs(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Le=e,ei=i,Cd(n),n.flags&=-3}}function Xc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Xc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Hp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let ei=!0;const Ld=[];function hs(){Ld.push(ei),ei=!1}function ds(){const n=Ld.pop();ei=n===void 0?!0:n}function bu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Le;Le=void 0;try{t()}finally{Le=e}}}let Zr=0;class kp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Le||!ei||Le===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Le)e=this.activeLink=new kp(Le,this),Le.deps?(e.prevDep=Le.depsTail,Le.depsTail.nextDep=e,Le.depsTail=e):Le.deps=Le.depsTail=e,Dd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Le.depsTail,e.nextDep=void 0,Le.depsTail.nextDep=e,Le.depsTail=e,Le.deps===e&&(Le.deps=i)}return e}trigger(t){this.version++,Zr++,this.notify(t)}notify(t){Vc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Wc()}}}function Dd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Dd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ol=new WeakMap,Ps=Symbol(""),Bl=Symbol(""),Jr=Symbol("");function fn(n,t,e){if(ei&&Le){let i=Ol.get(n);i||Ol.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new qc),s.target=n,s.map=i,s.key=e),s.track()}}function Gi(n,t,e,i,s,r){const o=Ol.get(n);if(!o){Zr++;return}const a=l=>{l&&l.trigger()};if(Vc(),t==="clear")o.forEach(a);else{const l=se(n),c=l&&Hc(e);if(l&&e==="length"){const h=Number(i);o.forEach((u,d)=>{(d==="length"||d===Jr||!Sr(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(o.get(e)),c&&a(o.get(Jr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Ps)),Br(n)&&a(o.get(Bl)));break;case"delete":l||(a(o.get(Ps)),Br(n)&&a(o.get(Bl)));break;case"set":Br(n)&&a(o.get(Ps));break}}Wc()}function Os(n){const t=Se(n);return t===n?t:(fn(t,"iterate",Jr),ni(n)?t:t.map(vn))}function Yc(n){return fn(n=Se(n),"iterate",Jr),n}const Vp={__proto__:null,[Symbol.iterator](){return Xa(this,Symbol.iterator,vn)},concat(...n){return Os(this).concat(...n.map(t=>se(t)?Os(t):t))},entries(){return Xa(this,"entries",n=>(n[1]=vn(n[1]),n))},every(n,t){return bi(this,"every",n,t,void 0,arguments)},filter(n,t){return bi(this,"filter",n,t,e=>e.map(vn),arguments)},find(n,t){return bi(this,"find",n,t,vn,arguments)},findIndex(n,t){return bi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return bi(this,"findLast",n,t,vn,arguments)},findLastIndex(n,t){return bi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return bi(this,"forEach",n,t,void 0,arguments)},includes(...n){return qa(this,"includes",n)},indexOf(...n){return qa(this,"indexOf",n)},join(n){return Os(this).join(n)},lastIndexOf(...n){return qa(this,"lastIndexOf",n)},map(n,t){return bi(this,"map",n,t,void 0,arguments)},pop(){return Tr(this,"pop")},push(...n){return Tr(this,"push",n)},reduce(n,...t){return Tu(this,"reduce",n,t)},reduceRight(n,...t){return Tu(this,"reduceRight",n,t)},shift(){return Tr(this,"shift")},some(n,t){return bi(this,"some",n,t,void 0,arguments)},splice(...n){return Tr(this,"splice",n)},toReversed(){return Os(this).toReversed()},toSorted(n){return Os(this).toSorted(n)},toSpliced(...n){return Os(this).toSpliced(...n)},unshift(...n){return Tr(this,"unshift",n)},values(){return Xa(this,"values",vn)}};function Xa(n,t,e){const i=Yc(n),s=i[t]();return i!==n&&!ni(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const Wp=Array.prototype;function bi(n,t,e,i,s,r){const o=Yc(n),a=o!==n&&!ni(n),l=o[t];if(l!==Wp[t]){const u=l.apply(n,r);return a?vn(u):u}let c=e;o!==n&&(a?c=function(u,d){return e.call(this,vn(u),d,n)}:e.length>2&&(c=function(u,d){return e.call(this,u,d,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function Tu(n,t,e,i){const s=Yc(n);let r=e;return s!==n&&(ni(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,vn(a),l,n)}),s[t](r,...i)}function qa(n,t,e){const i=Se(n);fn(i,"iterate",Jr);const s=i[t](...e);return(s===-1||s===!1)&&Zc(e[0])?(e[0]=Se(e[0]),i[t](...e)):s}function Tr(n,t,e=[]){hs(),Vc();const i=Se(n)[t].apply(n,e);return Wc(),ds(),i}const Xp=Bc("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Sr));function qp(n){Sr(n)||(n=String(n));const t=Se(this);return fn(t,"has",n),t.hasOwnProperty(n)}class Nd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?rm:zd:r?Bd:Od).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=se(t);if(!s){let l;if(o&&(l=Vp[e]))return l;if(e==="hasOwnProperty")return qp}const a=Reflect.get(t,e,hn(t)?t:i);return(Sr(e)?Ud.has(e):Xp(e))||(s||fn(t,"get",e),r)?a:hn(a)?o&&Hc(e)?a:a.value:Ye(a)?s?Hd(a):Aa(a):a}}class Fd extends Nd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Cs(r);if(!ni(i)&&!Cs(i)&&(r=Se(r),i=Se(i)),!se(t)&&hn(r)&&!hn(i))return l?!1:(r.value=i,!0)}const o=se(t)&&Hc(e)?Number(e)<t.length:Me(t,e),a=Reflect.set(t,e,i,hn(t)?t:s);return t===Se(s)&&(o?cs(i,r)&&Gi(t,"set",e,i):Gi(t,"add",e,i)),a}deleteProperty(t,e){const i=Me(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Gi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Sr(e)||!Ud.has(e))&&fn(t,"has",e),i}ownKeys(t){return fn(t,"iterate",se(t)?"length":Ps),Reflect.ownKeys(t)}}class Yp extends Nd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const $p=new Fd,Kp=new Yp,jp=new Fd(!0);const $c=n=>n,Ta=n=>Reflect.getPrototypeOf(n);function yo(n,t,e=!1,i=!1){n=n.__v_raw;const s=Se(n),r=Se(t);e||(cs(t,r)&&fn(s,"get",t),fn(s,"get",r));const{has:o}=Ta(s),a=i?$c:e?Jc:vn;if(o.call(s,t))return a(n.get(t));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(t)}function So(n,t=!1){const e=this.__v_raw,i=Se(e),s=Se(n);return t||(cs(n,s)&&fn(i,"has",n),fn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function wo(n,t=!1){return n=n.__v_raw,!t&&fn(Se(n),"iterate",Ps),Reflect.get(n,"size",n)}function Au(n,t=!1){!t&&!ni(n)&&!Cs(n)&&(n=Se(n));const e=Se(this);return Ta(e).has.call(e,n)||(e.add(n),Gi(e,"add",n,n)),this}function Ru(n,t,e=!1){!e&&!ni(t)&&!Cs(t)&&(t=Se(t));const i=Se(this),{has:s,get:r}=Ta(i);let o=s.call(i,n);o||(n=Se(n),o=s.call(i,n));const a=r.call(i,n);return i.set(n,t),o?cs(t,a)&&Gi(i,"set",n,t):Gi(i,"add",n,t),this}function Pu(n){const t=Se(this),{has:e,get:i}=Ta(t);let s=e.call(t,n);s||(n=Se(n),s=e.call(t,n)),i&&i.call(t,n);const r=t.delete(n);return s&&Gi(t,"delete",n,void 0),r}function Cu(){const n=Se(this),t=n.size!==0,e=n.clear();return t&&Gi(n,"clear",void 0,void 0),e}function Eo(n,t){return function(i,s){const r=this,o=r.__v_raw,a=Se(o),l=t?$c:n?Jc:vn;return!n&&fn(a,"iterate",Ps),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function bo(n,t,e){return function(...i){const s=this.__v_raw,r=Se(s),o=Br(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=e?$c:t?Jc:vn;return!t&&fn(r,"iterate",l?Bl:Ps),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function Ki(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Zp(){const n={get(r){return yo(this,r)},get size(){return wo(this)},has:So,add:Au,set:Ru,delete:Pu,clear:Cu,forEach:Eo(!1,!1)},t={get(r){return yo(this,r,!1,!0)},get size(){return wo(this)},has:So,add(r){return Au.call(this,r,!0)},set(r,o){return Ru.call(this,r,o,!0)},delete:Pu,clear:Cu,forEach:Eo(!1,!0)},e={get(r){return yo(this,r,!0)},get size(){return wo(this,!0)},has(r){return So.call(this,r,!0)},add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear"),forEach:Eo(!0,!1)},i={get(r){return yo(this,r,!0,!0)},get size(){return wo(this,!0)},has(r){return So.call(this,r,!0)},add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear"),forEach:Eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=bo(r,!1,!1),e[r]=bo(r,!0,!1),t[r]=bo(r,!1,!0),i[r]=bo(r,!0,!0)}),[n,e,t,i]}const[Jp,Qp,tm,em]=Zp();function Kc(n,t){const e=t?n?em:tm:n?Qp:Jp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Me(e,s)&&s in i?e:i,s,r)}const nm={get:Kc(!1,!1)},im={get:Kc(!1,!0)},sm={get:Kc(!0,!1)};const Od=new WeakMap,Bd=new WeakMap,zd=new WeakMap,rm=new WeakMap;function om(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function am(n){return n.__v_skip||!Object.isExtensible(n)?0:om(Rp(n))}function Aa(n){return Cs(n)?n:jc(n,!1,$p,nm,Od)}function Gd(n){return jc(n,!1,jp,im,Bd)}function Hd(n){return jc(n,!0,Kp,sm,zd)}function jc(n,t,e,i,s){if(!Ye(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=am(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Gr(n){return Cs(n)?Gr(n.__v_raw):!!(n&&n.__v_isReactive)}function Cs(n){return!!(n&&n.__v_isReadonly)}function ni(n){return!!(n&&n.__v_isShallow)}function Zc(n){return n?!!n.__v_raw:!1}function Se(n){const t=n&&n.__v_raw;return t?Se(t):n}function lm(n){return!Me(n,"__v_skip")&&Object.isExtensible(n)&&wd(n,"__v_skip",!0),n}const vn=n=>Ye(n)?Aa(n):n,Jc=n=>Ye(n)?Hd(n):n;function hn(n){return n?n.__v_isRef===!0:!1}function Yt(n){return kd(n,!1)}function rr(n){return kd(n,!0)}function kd(n,t){return hn(n)?n:new cm(n,t)}class cm{constructor(t,e){this.dep=new qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Se(t),this._value=e?t:vn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||ni(t)||Cs(t);t=i?t:Se(t),cs(t,e)&&(this._rawValue=t,this._value=i?t:vn(t),this.dep.trigger())}}function or(n){return hn(n)?n.value:n}const um={get:(n,t,e)=>t==="__v_raw"?n:or(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return hn(s)&&!hn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Vd(n){return Gr(n)?n:new Proxy(n,um)}class hm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Rd(this),!0}get value(){const t=this.dep.track();return Id(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function dm(n,t,e=!1){let i,s;return ne(n)?i=n:(i=n.get,s=n.set),new hm(i,s,e)}const To={},ha=new WeakMap;let Ss;function fm(n,t=!1,e=Ss){if(e){let i=ha.get(e);i||ha.set(e,i=[]),i.push(n)}}function pm(n,t,e=Pe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=w=>s?w:ni(w)||s===!1||s===0?Oi(w,1):Oi(w);let h,u,d,f,_=!1,x=!1;if(hn(n)?(u=()=>n.value,_=ni(n)):Gr(n)?(u=()=>c(n),_=!0):se(n)?(x=!0,_=n.some(w=>Gr(w)||ni(w)),u=()=>n.map(w=>{if(hn(w))return w.value;if(Gr(w))return c(w);if(ne(w))return l?l(w,2):w()})):ne(n)?t?u=l?()=>l(n,2):n:u=()=>{if(d){hs();try{d()}finally{ds()}}const w=Ss;Ss=h;try{return l?l(n,3,[f]):n(f)}finally{Ss=w}}:u=gi,t&&s){const w=u,F=s===!0?1/0:s;u=()=>Oi(w(),F)}const p=Gp(),m=()=>{h.stop(),p&&Gc(p.effects,h)};if(r&&t){const w=t;t=(...F)=>{w(...F),m()}}let b=x?new Array(n.length).fill(To):To;const S=w=>{if(!(!(h.flags&1)||!h.dirty&&!w))if(t){const F=h.run();if(s||_||(x?F.some((I,P)=>cs(I,b[P])):cs(F,b))){d&&d();const I=Ss;Ss=h;try{const P=[F,b===To?void 0:x&&b[0]===To?[]:b,f];l?l(t,3,P):t(...P),b=F}finally{Ss=I}}}else h.run()};return a&&a(S),h=new Td(u),h.scheduler=o?()=>o(S,!1):S,f=w=>fm(w,!1,h),d=h.onStop=()=>{const w=ha.get(h);if(w){if(l)l(w,4);else for(const F of w)F();ha.delete(h)}},t?i?S(!0):b=h.run():o?o(S.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function Oi(n,t=1/0,e){if(t<=0||!Ye(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,hn(n))Oi(n.value,t,e);else if(se(n))for(let i=0;i<n.length;i++)Oi(n[i],t,e);else if(Tp(n)||Br(n))n.forEach(i=>{Oi(i,t,e)});else if(Pp(n)){for(const i in n)Oi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Oi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function po(n,t,e,i){try{return i?n(...i):n()}catch(s){Ra(s,t,e)}}function vi(n,t,e,i){if(ne(n)){const s=po(n,t,e,i);return s&&Sd(s)&&s.catch(r=>{Ra(r,t,e)}),s}if(se(n)){const s=[];for(let r=0;r<n.length;r++)s.push(vi(n[r],t,e,i));return s}}function Ra(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Pe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){hs(),po(r,null,10,[n,l,c]),ds();return}}mm(n,e,s,i,o)}function mm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let Qr=!1,zl=!1;const xn=[];let di=0;const ar=[];let is=null,Js=0;const Wd=Promise.resolve();let Qc=null;function Xd(n){const t=Qc||Wd;return n?t.then(this?n.bind(this):n):t}function gm(n){let t=Qr?di+1:0,e=xn.length;for(;t<e;){const i=t+e>>>1,s=xn[i],r=to(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function tu(n){if(!(n.flags&1)){const t=to(n),e=xn[xn.length-1];!e||!(n.flags&2)&&t>=to(e)?xn.push(n):xn.splice(gm(t),0,n),n.flags|=1,qd()}}function qd(){!Qr&&!zl&&(zl=!0,Qc=Wd.then($d))}function _m(n){se(n)?ar.push(...n):is&&n.id===-1?is.splice(Js+1,0,n):n.flags&1||(ar.push(n),n.flags|=1),qd()}function Iu(n,t,e=Qr?di+1:0){for(;e<xn.length;e++){const i=xn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yd(n){if(ar.length){const t=[...new Set(ar)].sort((e,i)=>to(e)-to(i));if(ar.length=0,is){is.push(...t);return}for(is=t,Js=0;Js<is.length;Js++){const e=is[Js];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}is=null,Js=0}}const to=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $d(n){zl=!1,Qr=!0;try{for(di=0;di<xn.length;di++){const t=xn[di];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),po(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;di<xn.length;di++){const t=xn[di];t&&(t.flags&=-2)}di=0,xn.length=0,Yd(),Qr=!1,Qc=null,(xn.length||ar.length)&&$d()}}let Ln=null,Kd=null;function da(n){const t=Ln;return Ln=n,Kd=n&&n.type.__scopeId||null,t}function Di(n,t=Ln,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Hu(-1);const r=da(t);let o;try{o=n(...s)}finally{da(r),i._d&&Hu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vm(n,t){if(Ln===null)return n;const e=Da(Ln),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Pe]=t[s];r&&(ne(r)&&(r={mounted:r,updated:r}),r.deep&&Oi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ps(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(hs(),vi(l,e,8,[n.el,a,n,t]),ds())}}const xm=Symbol("_vte"),Mm=n=>n.__isTeleport;function eu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,eu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function kn(n,t){return ne(n)?on({name:n.name},t,{setup:n}):n}function jd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Gl(n,t,e,i,s=!1){if(se(n)){n.forEach((_,x)=>Gl(_,t&&(se(t)?t[x]:t),e,i,s));return}if(Hr(i)&&!s)return;const r=i.shapeFlag&4?Da(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,h=a.refs===Pe?a.refs={}:a.refs,u=a.setupState,d=Se(u),f=u===Pe?()=>!1:_=>Me(d,_);if(c!=null&&c!==l&&(sn(c)?(h[c]=null,f(c)&&(u[c]=null)):hn(c)&&(c.value=null)),ne(l))po(l,a,12,[o,h]);else{const _=sn(l),x=hn(l);if(_||x){const p=()=>{if(n.f){const m=_?f(l)?u[l]:h[l]:l.value;s?se(m)&&Gc(m,r):se(m)?m.includes(r)||m.push(r):_?(h[l]=[r],f(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else _?(h[l]=o,f(l)&&(u[l]=o)):x&&(l.value=o,n.k&&(h[n.k]=o))};o?(p.id=-1,Cn(p,e)):p()}}}const Hr=n=>!!n.type.__asyncLoader,Zd=n=>n.type.__isKeepAlive;function ym(n,t){Jd(n,"a",t)}function Sm(n,t){Jd(n,"da",t)}function Jd(n,t,e=un){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Zd(s.parent.vnode)&&wm(i,t,e,s),s=s.parent}}function wm(n,t,e,i){const s=Pa(t,n,i,!0);nu(()=>{Gc(i[t],s)},e)}function Pa(n,t,e=un,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{hs();const a=mo(e),l=vi(t,e,n,o);return a(),ds(),l});return i?s.unshift(r):s.push(r),r}}const Vi=n=>(t,e=un)=>{(!La||n==="sp")&&Pa(n,(...i)=>t(...i),e)},Em=Vi("bm"),li=Vi("m"),bm=Vi("bu"),Tm=Vi("u"),Am=Vi("bum"),nu=Vi("um"),Rm=Vi("sp"),Pm=Vi("rtg"),Cm=Vi("rtc");function Im(n,t=un){Pa("ec",n,t)}const Lm="components";function Lu(n,t){return Um(Lm,n,!0,t)||n}const Dm=Symbol.for("v-ndc");function Um(n,t,e=!0,i=!1){const s=Ln||un;if(s){const r=s.type;{const a=y0(r,!1);if(a&&(a===t||a===zn(t)||a===ba(zn(t))))return r}const o=Du(s[n]||r[n],t)||Du(s.appContext[n],t);return!o&&i?r:o}}function Du(n,t){return n&&(n[t]||n[zn(t)]||n[ba(zn(t))])}const Hl=n=>n?vf(n)?Da(n):Hl(n.parent):null,kr=on(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Hl(n.parent),$root:n=>Hl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>iu(n),$forceUpdate:n=>n.f||(n.f=()=>{tu(n.update)}),$nextTick:n=>n.n||(n.n=Xd.bind(n.proxy)),$watch:n=>e0.bind(n)}),Ya=(n,t)=>n!==Pe&&!n.__isScriptSetup&&Me(n,t),Nm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ya(i,t))return o[t]=1,i[t];if(s!==Pe&&Me(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&Me(c,t))return o[t]=3,r[t];if(e!==Pe&&Me(e,t))return o[t]=4,e[t];kl&&(o[t]=0)}}const h=kr[t];let u,d;if(h)return t==="$attrs"&&fn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Pe&&Me(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,Me(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ya(s,t)?(s[t]=e,!0):i!==Pe&&Me(i,t)?(i[t]=e,!0):Me(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==Pe&&Me(n,o)||Ya(t,o)||(a=r[0])&&Me(a,o)||Me(i,o)||Me(kr,o)||Me(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Me(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Uu(n){return se(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let kl=!0;function Fm(n){const t=iu(n),e=n.proxy,i=n.ctx;kl=!1,t.beforeCreate&&Nu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:p,beforeDestroy:m,beforeUnmount:b,destroyed:S,unmounted:w,render:F,renderTracked:I,renderTriggered:P,errorCaptured:O,serverPrefetch:nt,expose:M,inheritAttrs:E,components:j,directives:V,filters:Z}=t;if(c&&Om(c,i,null),o)for(const Q in o){const B=o[Q];ne(B)&&(i[Q]=B.bind(e))}if(s){const Q=s.call(e,e);Ye(Q)&&(n.data=Aa(Q))}if(kl=!0,r)for(const Q in r){const B=r[Q],gt=ne(B)?B.bind(e,e):ne(B.get)?B.get.bind(e,e):gi,yt=!ne(B)&&ne(B.set)?B.set.bind(e):gi,_t=jn({get:gt,set:yt});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>_t.value,set:Ct=>_t.value=Ct})}if(a)for(const Q in a)Qd(a[Q],i,e,Q);if(l){const Q=ne(l)?l.call(e):l;Reflect.ownKeys(Q).forEach(B=>{ea(B,Q[B])})}h&&Nu(h,n,"c");function H(Q,B){se(B)?B.forEach(gt=>Q(gt.bind(e))):B&&Q(B.bind(e))}if(H(Em,u),H(li,d),H(bm,f),H(Tm,_),H(ym,x),H(Sm,p),H(Im,O),H(Cm,I),H(Pm,P),H(Am,b),H(nu,w),H(Rm,nt),se(M))if(M.length){const Q=n.exposed||(n.exposed={});M.forEach(B=>{Object.defineProperty(Q,B,{get:()=>e[B],set:gt=>e[B]=gt})})}else n.exposed||(n.exposed={});F&&n.render===gi&&(n.render=F),E!=null&&(n.inheritAttrs=E),j&&(n.components=j),V&&(n.directives=V),nt&&jd(n)}function Om(n,t,e=gi){se(n)&&(n=Vl(n));for(const i in n){const s=n[i];let r;Ye(s)?"default"in s?r=Hi(s.from||i,s.default,!0):r=Hi(s.from||i):r=Hi(s),hn(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Nu(n,t,e){vi(se(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Qd(n,t,e,i){let s=i.includes(".")?pf(e,i):()=>e[i];if(sn(n)){const r=t[n];ne(r)&&ke(s,r)}else if(ne(n))ke(s,n.bind(e));else if(Ye(n))if(se(n))n.forEach(r=>Qd(r,t,e,i));else{const r=ne(n.handler)?n.handler.bind(e):t[n.handler];ne(r)&&ke(s,r,n)}}function iu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>fa(l,c,o,!0)),fa(l,t,o)),Ye(t)&&r.set(t,l),l}function fa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&fa(n,r,e,!0),s&&s.forEach(o=>fa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Bm[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Bm={data:Fu,props:Ou,emits:Ou,methods:Fr,computed:Fr,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:Fr,directives:Fr,watch:Gm,provide:Fu,inject:zm};function Fu(n,t){return t?n?function(){return on(ne(n)?n.call(this,this):n,ne(t)?t.call(this,this):t)}:t:n}function zm(n,t){return Fr(Vl(n),Vl(t))}function Vl(n){if(se(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function mn(n,t){return n?[...new Set([].concat(n,t))]:t}function Fr(n,t){return n?on(Object.create(null),n,t):t}function Ou(n,t){return n?se(n)&&se(t)?[...new Set([...n,...t])]:on(Object.create(null),Uu(n),Uu(t??{})):t}function Gm(n,t){if(!n)return t;if(!t)return n;const e=on(Object.create(null),n);for(const i in t)e[i]=mn(n[i],t[i]);return e}function tf(){return{app:null,config:{isNativeTag:Ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hm=0;function km(n,t){return function(i,s=null){ne(i)||(i=on({},i)),s!=null&&!Ye(s)&&(s=null);const r=tf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Hm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:w0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&ne(h.install)?(o.add(h),h.install(c,...u)):ne(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,d){if(!l){const f=c._ceVNode||Ze(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(f,h):n(f,h,d),l=!0,c._container=h,h.__vue_app__=c,Da(f.component)}},onUnmount(h){a.push(h)},unmount(){l&&(vi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=lr;lr=c;try{return h()}finally{lr=u}}};return c}}let lr=null;function ea(n,t){if(un){let e=un.provides;const i=un.parent&&un.parent.provides;i===e&&(e=un.provides=Object.create(i)),e[n]=t}}function Hi(n,t,e=!1){const i=un||Ln;if(i||lr){const s=lr?lr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&ne(t)?t.call(i&&i.proxy):t}}const ef={},nf=()=>Object.create(ef),sf=n=>Object.getPrototypeOf(n)===ef;function Vm(n,t,e,i=!1){const s={},r=nf();n.propsDefaults=Object.create(null),rf(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Gd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Wm(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Se(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Ca(n.emitsOptions,d))continue;const f=t[d];if(l)if(Me(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const _=zn(d);s[_]=Wl(l,a,_,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{rf(n,t,s,r)&&(c=!0);let h;for(const u in a)(!t||!Me(t,u)&&((h=Us(u))===u||!Me(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=Wl(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!t||!Me(t,u))&&(delete r[u],c=!0)}c&&Gi(n.attrs,"set","")}function rf(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(zr(l))continue;const c=t[l];let h;s&&Me(s,h=zn(l))?!r||!r.includes(h)?e[h]=c:(a||(a={}))[h]=c:Ca(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Se(e),c=a||Pe;for(let h=0;h<r.length;h++){const u=r[h];e[u]=Wl(s,l,u,c[u],n,!Me(c,u))}}return o}function Wl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Me(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=mo(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Us(e))&&(i=!0))}return i}const Xm=new WeakMap;function of(n,t,e=!1){const i=e?Xm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ne(n)){const h=u=>{l=!0;const[d,f]=of(u,t,!0);on(o,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return Ye(n)&&i.set(n,sr),sr;if(se(r))for(let h=0;h<r.length;h++){const u=zn(r[h]);Bu(u)&&(o[u]=Pe)}else if(r)for(const h in r){const u=zn(h);if(Bu(u)){const d=r[h],f=o[u]=se(d)||ne(d)?{type:d}:on({},d),_=f.type;let x=!1,p=!0;if(se(_))for(let m=0;m<_.length;++m){const b=_[m],S=ne(b)&&b.name;if(S==="Boolean"){x=!0;break}else S==="String"&&(p=!1)}else x=ne(_)&&_.name==="Boolean";f[0]=x,f[1]=p,(x||Me(f,"default"))&&a.push(u)}}const c=[o,a];return Ye(n)&&i.set(n,c),c}function Bu(n){return n[0]!=="$"&&!zr(n)}const af=n=>n[0]==="_"||n==="$stable",su=n=>se(n)?n.map(pi):[pi(n)],qm=(n,t,e)=>{if(t._n)return t;const i=Di((...s)=>su(t(...s)),e);return i._c=!1,i},lf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(af(s))continue;const r=n[s];if(ne(r))t[s]=qm(s,r,i);else if(r!=null){const o=su(r);t[s]=()=>o}}},cf=(n,t)=>{const e=su(t);n.slots.default=()=>e},uf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},Ym=(n,t,e)=>{const i=n.slots=nf();if(n.vnode.shapeFlag&32){const s=t._;s?(uf(i,t,e),e&&wd(i,"_",s,!0)):lf(t,i)}else t&&cf(n,t)},$m=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Pe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:uf(s,t,e):(r=!t.$stable,lf(t,s)),o=t}else t&&(cf(n,t),o={default:1});if(r)for(const a in s)!af(a)&&o[a]==null&&delete s[a]},Cn=l0;function Km(n){return jm(n)}function jm(n,t){const e=Ed();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=gi,insertStaticContent:_}=n,x=(g,T,L,D=null,U=null,W=null,K=void 0,y=null,v=!!T.dynamicChildren)=>{if(g===T)return;g&&!Ar(g,T)&&(D=N(g),Ct(g,U,W,!0),g=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:C,ref:X,shapeFlag:G}=T;switch(C){case Ia:p(g,T,L,D);break;case eo:m(g,T,L,D);break;case ja:g==null&&b(T,L,D,K);break;case cn:j(g,T,L,D,U,W,K,y,v);break;default:G&1?F(g,T,L,D,U,W,K,y,v):G&6?V(g,T,L,D,U,W,K,y,v):(G&64||G&128)&&C.process(g,T,L,D,U,W,K,y,v,lt)}X!=null&&U&&Gl(X,g&&g.ref,W,T||g,!T)},p=(g,T,L,D)=>{if(g==null)i(T.el=a(T.children),L,D);else{const U=T.el=g.el;T.children!==g.children&&c(U,T.children)}},m=(g,T,L,D)=>{g==null?i(T.el=l(T.children||""),L,D):T.el=g.el},b=(g,T,L,D)=>{[g.el,g.anchor]=_(g.children,T,L,D,g.el,g.anchor)},S=({el:g,anchor:T},L,D)=>{let U;for(;g&&g!==T;)U=d(g),i(g,L,D),g=U;i(T,L,D)},w=({el:g,anchor:T})=>{let L;for(;g&&g!==T;)L=d(g),s(g),g=L;s(T)},F=(g,T,L,D,U,W,K,y,v)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),g==null?I(T,L,D,U,W,K,y,v):nt(g,T,U,W,K,y,v)},I=(g,T,L,D,U,W,K,y)=>{let v,C;const{props:X,shapeFlag:G,transition:k,dirs:ht}=g;if(v=g.el=o(g.type,W,X&&X.is,X),G&8?h(v,g.children):G&16&&O(g.children,v,null,D,U,$a(g,W),K,y),ht&&ps(g,null,D,"created"),P(v,g,g.scopeId,K,D),X){for(const pt in X)pt!=="value"&&!zr(pt)&&r(v,pt,null,X[pt],W,D);"value"in X&&r(v,"value",null,X.value,W),(C=X.onVnodeBeforeMount)&&hi(C,D,g)}ht&&ps(g,null,D,"beforeMount");const ct=Zm(U,k);ct&&k.beforeEnter(v),i(v,T,L),((C=X&&X.onVnodeMounted)||ct||ht)&&Cn(()=>{C&&hi(C,D,g),ct&&k.enter(v),ht&&ps(g,null,D,"mounted")},U)},P=(g,T,L,D,U)=>{if(L&&f(g,L),D)for(let W=0;W<D.length;W++)f(g,D[W]);if(U){let W=U.subTree;if(T===W||gf(W.type)&&(W.ssContent===T||W.ssFallback===T)){const K=U.vnode;P(g,K,K.scopeId,K.slotScopeIds,U.parent)}}},O=(g,T,L,D,U,W,K,y,v=0)=>{for(let C=v;C<g.length;C++){const X=g[C]=y?ss(g[C]):pi(g[C]);x(null,X,T,L,D,U,W,K,y)}},nt=(g,T,L,D,U,W,K)=>{const y=T.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:X}=T;v|=g.patchFlag&16;const G=g.props||Pe,k=T.props||Pe;let ht;if(L&&ms(L,!1),(ht=k.onVnodeBeforeUpdate)&&hi(ht,L,T,g),X&&ps(T,g,L,"beforeUpdate"),L&&ms(L,!0),(G.innerHTML&&k.innerHTML==null||G.textContent&&k.textContent==null)&&h(y,""),C?M(g.dynamicChildren,C,y,L,D,$a(T,U),W):K||B(g,T,y,null,L,D,$a(T,U),W,!1),v>0){if(v&16)E(y,G,k,L,U);else if(v&2&&G.class!==k.class&&r(y,"class",null,k.class,U),v&4&&r(y,"style",G.style,k.style,U),v&8){const ct=T.dynamicProps;for(let pt=0;pt<ct.length;pt++){const bt=ct[pt],dt=G[bt],Mt=k[bt];(Mt!==dt||bt==="value")&&r(y,bt,dt,Mt,U,L)}}v&1&&g.children!==T.children&&h(y,T.children)}else!K&&C==null&&E(y,G,k,L,U);((ht=k.onVnodeUpdated)||X)&&Cn(()=>{ht&&hi(ht,L,T,g),X&&ps(T,g,L,"updated")},D)},M=(g,T,L,D,U,W,K)=>{for(let y=0;y<T.length;y++){const v=g[y],C=T[y],X=v.el&&(v.type===cn||!Ar(v,C)||v.shapeFlag&70)?u(v.el):L;x(v,C,X,null,D,U,W,K,!0)}},E=(g,T,L,D,U)=>{if(T!==L){if(T!==Pe)for(const W in T)!zr(W)&&!(W in L)&&r(g,W,T[W],null,U,D);for(const W in L){if(zr(W))continue;const K=L[W],y=T[W];K!==y&&W!=="value"&&r(g,W,y,K,U,D)}"value"in L&&r(g,"value",T.value,L.value,U)}},j=(g,T,L,D,U,W,K,y,v)=>{const C=T.el=g?g.el:a(""),X=T.anchor=g?g.anchor:a("");let{patchFlag:G,dynamicChildren:k,slotScopeIds:ht}=T;ht&&(y=y?y.concat(ht):ht),g==null?(i(C,L,D),i(X,L,D),O(T.children||[],L,X,U,W,K,y,v)):G>0&&G&64&&k&&g.dynamicChildren?(M(g.dynamicChildren,k,L,U,W,K,y),(T.key!=null||U&&T===U.subTree)&&hf(g,T,!0)):B(g,T,L,X,U,W,K,y,v)},V=(g,T,L,D,U,W,K,y,v)=>{T.slotScopeIds=y,g==null?T.shapeFlag&512?U.ctx.activate(T,L,D,K,v):Z(T,L,D,U,W,K,v):rt(g,T,v)},Z=(g,T,L,D,U,W,K)=>{const y=g.component=g0(g,D,U);if(Zd(g)&&(y.ctx.renderer=lt),_0(y,!1,K),y.asyncDep){if(U&&U.registerDep(y,H,K),!g.el){const v=y.subTree=Ze(eo);m(null,v,T,L)}}else H(y,g,T,L,U,W,K)},rt=(g,T,L)=>{const D=T.component=g.component;if(o0(g,T,L))if(D.asyncDep&&!D.asyncResolved){Q(D,T,L);return}else D.next=T,D.update();else T.el=g.el,D.vnode=T},H=(g,T,L,D,U,W,K)=>{const y=()=>{if(g.isMounted){let{next:G,bu:k,u:ht,parent:ct,vnode:pt}=g;{const Lt=df(g);if(Lt){G&&(G.el=pt.el,Q(g,G,K)),Lt.asyncDep.then(()=>{g.isUnmounted||y()});return}}let bt=G,dt;ms(g,!1),G?(G.el=pt.el,Q(g,G,K)):G=pt,k&&Va(k),(dt=G.props&&G.props.onVnodeBeforeUpdate)&&hi(dt,ct,G,pt),ms(g,!0);const Mt=Ka(g),Pt=g.subTree;g.subTree=Mt,x(Pt,Mt,u(Pt.el),N(Pt),g,U,W),G.el=Mt.el,bt===null&&a0(g,Mt.el),ht&&Cn(ht,U),(dt=G.props&&G.props.onVnodeUpdated)&&Cn(()=>hi(dt,ct,G,pt),U)}else{let G;const{el:k,props:ht}=T,{bm:ct,m:pt,parent:bt,root:dt,type:Mt}=g,Pt=Hr(T);if(ms(g,!1),ct&&Va(ct),!Pt&&(G=ht&&ht.onVnodeBeforeMount)&&hi(G,bt,T),ms(g,!0),k&&tt){const Lt=()=>{g.subTree=Ka(g),tt(k,g.subTree,g,U,null)};Pt&&Mt.__asyncHydrate?Mt.__asyncHydrate(k,g,Lt):Lt()}else{dt.ce&&dt.ce._injectChildStyle(Mt);const Lt=g.subTree=Ka(g);x(null,Lt,L,D,g,U,W),T.el=Lt.el}if(pt&&Cn(pt,U),!Pt&&(G=ht&&ht.onVnodeMounted)){const Lt=T;Cn(()=>hi(G,bt,Lt),U)}(T.shapeFlag&256||bt&&Hr(bt.vnode)&&bt.vnode.shapeFlag&256)&&g.a&&Cn(g.a,U),g.isMounted=!0,T=L=D=null}};g.scope.on();const v=g.effect=new Td(y);g.scope.off();const C=g.update=v.run.bind(v),X=g.job=v.runIfDirty.bind(v);X.i=g,X.id=g.uid,v.scheduler=()=>tu(X),ms(g,!0),C()},Q=(g,T,L)=>{T.component=g;const D=g.vnode.props;g.vnode=T,g.next=null,Wm(g,T.props,D,L),$m(g,T.children,L),hs(),Iu(g),ds()},B=(g,T,L,D,U,W,K,y,v=!1)=>{const C=g&&g.children,X=g?g.shapeFlag:0,G=T.children,{patchFlag:k,shapeFlag:ht}=T;if(k>0){if(k&128){yt(C,G,L,D,U,W,K,y,v);return}else if(k&256){gt(C,G,L,D,U,W,K,y,v);return}}ht&8?(X&16&&St(C,U,W),G!==C&&h(L,G)):X&16?ht&16?yt(C,G,L,D,U,W,K,y,v):St(C,U,W,!0):(X&8&&h(L,""),ht&16&&O(G,L,D,U,W,K,y,v))},gt=(g,T,L,D,U,W,K,y,v)=>{g=g||sr,T=T||sr;const C=g.length,X=T.length,G=Math.min(C,X);let k;for(k=0;k<G;k++){const ht=T[k]=v?ss(T[k]):pi(T[k]);x(g[k],ht,L,null,U,W,K,y,v)}C>X?St(g,U,W,!0,!1,G):O(T,L,D,U,W,K,y,v,G)},yt=(g,T,L,D,U,W,K,y,v)=>{let C=0;const X=T.length;let G=g.length-1,k=X-1;for(;C<=G&&C<=k;){const ht=g[C],ct=T[C]=v?ss(T[C]):pi(T[C]);if(Ar(ht,ct))x(ht,ct,L,null,U,W,K,y,v);else break;C++}for(;C<=G&&C<=k;){const ht=g[G],ct=T[k]=v?ss(T[k]):pi(T[k]);if(Ar(ht,ct))x(ht,ct,L,null,U,W,K,y,v);else break;G--,k--}if(C>G){if(C<=k){const ht=k+1,ct=ht<X?T[ht].el:D;for(;C<=k;)x(null,T[C]=v?ss(T[C]):pi(T[C]),L,ct,U,W,K,y,v),C++}}else if(C>k)for(;C<=G;)Ct(g[C],U,W,!0),C++;else{const ht=C,ct=C,pt=new Map;for(C=ct;C<=k;C++){const It=T[C]=v?ss(T[C]):pi(T[C]);It.key!=null&&pt.set(It.key,C)}let bt,dt=0;const Mt=k-ct+1;let Pt=!1,Lt=0;const At=new Array(Mt);for(C=0;C<Mt;C++)At[C]=0;for(C=ht;C<=G;C++){const It=g[C];if(dt>=Mt){Ct(It,U,W,!0);continue}let Xt;if(It.key!=null)Xt=pt.get(It.key);else for(bt=ct;bt<=k;bt++)if(At[bt-ct]===0&&Ar(It,T[bt])){Xt=bt;break}Xt===void 0?Ct(It,U,W,!0):(At[Xt-ct]=C+1,Xt>=Lt?Lt=Xt:Pt=!0,x(It,T[Xt],L,null,U,W,K,y,v),dt++)}const Wt=Pt?Jm(At):sr;for(bt=Wt.length-1,C=Mt-1;C>=0;C--){const It=ct+C,Xt=T[It],z=It+1<X?T[It+1].el:D;At[C]===0?x(null,Xt,L,z,U,W,K,y,v):Pt&&(bt<0||C!==Wt[bt]?_t(Xt,L,z,2):bt--)}}},_t=(g,T,L,D,U=null)=>{const{el:W,type:K,transition:y,children:v,shapeFlag:C}=g;if(C&6){_t(g.component.subTree,T,L,D);return}if(C&128){g.suspense.move(T,L,D);return}if(C&64){K.move(g,T,L,lt);return}if(K===cn){i(W,T,L);for(let G=0;G<v.length;G++)_t(v[G],T,L,D);i(g.anchor,T,L);return}if(K===ja){S(g,T,L);return}if(D!==2&&C&1&&y)if(D===0)y.beforeEnter(W),i(W,T,L),Cn(()=>y.enter(W),U);else{const{leave:G,delayLeave:k,afterLeave:ht}=y,ct=()=>i(W,T,L),pt=()=>{G(W,()=>{ct(),ht&&ht()})};k?k(W,ct,pt):pt()}else i(W,T,L)},Ct=(g,T,L,D=!1,U=!1)=>{const{type:W,props:K,ref:y,children:v,dynamicChildren:C,shapeFlag:X,patchFlag:G,dirs:k,cacheIndex:ht}=g;if(G===-2&&(U=!1),y!=null&&Gl(y,null,L,g,!0),ht!=null&&(T.renderCache[ht]=void 0),X&256){T.ctx.deactivate(g);return}const ct=X&1&&k,pt=!Hr(g);let bt;if(pt&&(bt=K&&K.onVnodeBeforeUnmount)&&hi(bt,T,g),X&6)ft(g.component,L,D);else{if(X&128){g.suspense.unmount(L,D);return}ct&&ps(g,null,T,"beforeUnmount"),X&64?g.type.remove(g,T,L,lt,D):C&&!C.hasOnce&&(W!==cn||G>0&&G&64)?St(C,T,L,!1,!0):(W===cn&&G&384||!U&&X&16)&&St(v,T,L),D&&Gt(g)}(pt&&(bt=K&&K.onVnodeUnmounted)||ct)&&Cn(()=>{bt&&hi(bt,T,g),ct&&ps(g,null,T,"unmounted")},L)},Gt=g=>{const{type:T,el:L,anchor:D,transition:U}=g;if(T===cn){ot(L,D);return}if(T===ja){w(g);return}const W=()=>{s(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(g.shapeFlag&1&&U&&!U.persisted){const{leave:K,delayLeave:y}=U,v=()=>K(L,W);y?y(g.el,W,v):v()}else W()},ot=(g,T)=>{let L;for(;g!==T;)L=d(g),s(g),g=L;s(T)},ft=(g,T,L)=>{const{bum:D,scope:U,job:W,subTree:K,um:y,m:v,a:C}=g;zu(v),zu(C),D&&Va(D),U.stop(),W&&(W.flags|=8,Ct(K,g,T,L)),y&&Cn(y,T),Cn(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},St=(g,T,L,D=!1,U=!1,W=0)=>{for(let K=W;K<g.length;K++)Ct(g[K],T,L,D,U)},N=g=>{if(g.shapeFlag&6)return N(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const T=d(g.anchor||g.el),L=T&&T[xm];return L?d(L):T};let ut=!1;const at=(g,T,L)=>{g==null?T._vnode&&Ct(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,L),T._vnode=g,ut||(ut=!0,Iu(),Yd(),ut=!1)},lt={p:x,um:Ct,m:_t,r:Gt,mt:Z,mc:O,pc:B,pbc:M,n:N,o:n};let Et,tt;return{render:at,hydrate:Et,createApp:km(at,Et)}}function $a({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ms({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Zm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function hf(n,t,e=!1){const i=n.children,s=t.children;if(se(i)&&se(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ss(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&hf(o,a)),a.type===Ia&&(a.el=o.el)}}function Jm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function df(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:df(t)}function zu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Qm=Symbol.for("v-scx"),t0=()=>Hi(Qm);function ke(n,t,e){return ff(n,t,e)}function ff(n,t,e=Pe){const{immediate:i,deep:s,flush:r,once:o}=e,a=on({},e);let l;if(La)if(r==="sync"){const d=t0();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=gi,d.resume=gi,d.pause=gi,d}const c=un;a.call=(d,f,_)=>vi(d,c,f,_);let h=!1;r==="post"?a.scheduler=d=>{Cn(d,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():tu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const u=pm(n,t,a);return l&&l.push(u),u}function e0(n,t,e){const i=this.proxy,s=sn(n)?n.includes(".")?pf(i,n):()=>i[n]:n.bind(i,i);let r;ne(t)?r=t:(r=t.handler,e=t);const o=mo(this),a=ff(s,r.bind(i),e);return o(),a}function pf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const n0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${zn(t)}Modifiers`]||n[`${Us(t)}Modifiers`];function i0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Pe;let s=e;const r=t.startsWith("update:"),o=r&&n0(i,t.slice(7));o&&(o.trim&&(s=e.map(h=>sn(h)?h.trim():h)),o.number&&(s=e.map(Lp)));let a,l=i[a=ka(t)]||i[a=ka(zn(t))];!l&&r&&(l=i[a=ka(Us(t))]),l&&vi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,vi(c,n,6,s)}}function mf(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ne(n)){const l=c=>{const h=mf(c,t,!0);h&&(a=!0,on(o,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Ye(n)&&i.set(n,null),null):(se(r)?r.forEach(l=>o[l]=null):on(o,r),Ye(n)&&i.set(n,o),o)}function Ca(n,t){return!n||!Sa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Me(n,t[0].toLowerCase()+t.slice(1))||Me(n,Us(t))||Me(n,t))}function Ka(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,p=da(n);let m,b;try{if(e.shapeFlag&4){const w=s||i,F=w;m=pi(c.call(F,w,h,u,f,d,_)),b=a}else{const w=t;m=pi(w.length>1?w(u,{attrs:a,slots:o,emit:l}):w(u,null)),b=t.props?a:s0(a)}}catch(w){Vr.length=0,Ra(w,n,1),m=Ze(eo)}let S=m;if(b&&x!==!1){const w=Object.keys(b),{shapeFlag:F}=S;w.length&&F&7&&(r&&w.some(zc)&&(b=r0(b,r)),S=fr(S,b,!1,!0))}return e.dirs&&(S=fr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&eu(S,e.transition),m=S,da(p),m}const s0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Sa(e))&&((t||(t={}))[e]=n[e]);return t},r0=(n,t)=>{const e={};for(const i in n)(!zc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function o0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Gu(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==i[d]&&!Ca(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gu(i,o,c):!0:!!o;return!1}function Gu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Ca(e,r))return!0}return!1}function a0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const gf=n=>n.__isSuspense;function l0(n,t){t&&t.pendingBranch?se(n)?t.effects.push(...n):t.effects.push(n):_m(n)}const cn=Symbol.for("v-fgt"),Ia=Symbol.for("v-txt"),eo=Symbol.for("v-cmt"),ja=Symbol.for("v-stc"),Vr=[];let Dn=null;function Mi(n=!1){Vr.push(Dn=n?null:[])}function c0(){Vr.pop(),Dn=Vr[Vr.length-1]||null}let no=1;function Hu(n){no+=n,n<0&&Dn&&(Dn.hasOnce=!0)}function u0(n){return n.dynamicChildren=no>0?Dn||sr:null,c0(),no>0&&Dn&&Dn.push(n),n}function yi(n,t,e,i,s,r){return u0(Ft(n,t,e,i,s,r,!0))}function pa(n){return n?n.__v_isVNode===!0:!1}function Ar(n,t){return n.type===t.type&&n.key===t.key}const _f=({key:n})=>n??null,na=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?sn(n)||hn(n)||ne(n)?{i:Ln,r:n,k:t,f:!!e}:n:null);function Ft(n,t=null,e=null,i=0,s=null,r=n===cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&_f(t),ref:t&&na(t),scopeId:Kd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ln};return a?(ru(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=sn(e)?8:16),no>0&&!o&&Dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Dn.push(l),l}const Ze=h0;function h0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Dm)&&(n=eo),pa(n)){const a=fr(n,t,!0);return e&&ru(a,e),no>0&&!r&&Dn&&(a.shapeFlag&6?Dn[Dn.indexOf(n)]=a:Dn.push(a)),a.patchFlag=-2,a}if(S0(n)&&(n=n.__vccOpts),t){t=d0(t);let{class:a,style:l}=t;a&&!sn(a)&&(t.class=Hn(a)),Ye(l)&&(Zc(l)&&!se(l)&&(l=on({},l)),t.style=kc(l))}const o=sn(n)?1:gf(n)?128:Mm(n)?64:Ye(n)?4:ne(n)?2:0;return Ft(n,t,e,i,s,o,r,!0)}function d0(n){return n?Zc(n)||sf(n)?on({},n):n:null}function fr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?f0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&_f(c),ref:t&&t.ref?e&&r?se(r)?r.concat(na(t)):[r,na(t)]:na(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==cn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fr(n.ssContent),ssFallback:n.ssFallback&&fr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&eu(h,l.clone(h)),h}function Ui(n=" ",t=0){return Ze(Ia,null,n,t)}function pi(n){return n==null||typeof n=="boolean"?Ze(eo):se(n)?Ze(cn,null,n.slice()):pa(n)?ss(n):Ze(Ia,null,String(n))}function ss(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fr(n)}function ru(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(se(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ru(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!sf(t)?t._ctx=Ln:s===3&&Ln&&(Ln.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else ne(t)?(t={default:t,_ctx:Ln},e=32):(t=String(t),i&64?(e=16,t=[Ui(t)]):e=8);n.children=t,n.shapeFlag|=e}function f0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Hn([t.class,i.class]));else if(s==="style")t.style=kc([t.style,i.style]);else if(Sa(s)){const r=t[s],o=i[s];o&&r!==o&&!(se(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function hi(n,t,e,i=null){vi(n,t,7,[e,i])}const p0=tf();let m0=0;function g0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||p0,r={uid:m0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:of(i,s),emitsOptions:mf(i,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:i.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=i0.bind(null,r),n.ce&&n.ce(r),r}let un=null,ma,Xl;{const n=Ed(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ma=t("__VUE_INSTANCE_SETTERS__",e=>un=e),Xl=t("__VUE_SSR_SETTERS__",e=>La=e)}const mo=n=>{const t=un;return ma(n),n.scope.on(),()=>{n.scope.off(),ma(t)}},ku=()=>{un&&un.scope.off(),ma(null)};function vf(n){return n.vnode.shapeFlag&4}let La=!1;function _0(n,t=!1,e=!1){t&&Xl(t);const{props:i,children:s}=n.vnode,r=vf(n);Vm(n,i,r,t),Ym(n,s,e);const o=r?v0(n,t):void 0;return t&&Xl(!1),o}function v0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Nm);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?M0(n):null,r=mo(n);hs();const o=po(i,n,0,[n.props,s]);if(ds(),r(),Sd(o)){if(Hr(n)||jd(n),o.then(ku,ku),t)return o.then(a=>{Vu(n,a,t)}).catch(a=>{Ra(a,n,0)});n.asyncDep=o}else Vu(n,o,t)}else xf(n,t)}function Vu(n,t,e){ne(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ye(t)&&(n.setupState=Vd(t)),xf(n,e)}let Wu;function xf(n,t,e){const i=n.type;if(!n.render){if(!t&&Wu&&!i.render){const s=i.template||iu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=on(on({isCustomElement:r,delimiters:a},o),l);i.render=Wu(s,c)}}n.render=i.render||gi}{const s=mo(n);hs();try{Fm(n)}finally{ds(),s()}}}const x0={get(n,t){return fn(n,"get",""),n[t]}};function M0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,x0),slots:n.slots,emit:n.emit,expose:t}}function Da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vd(lm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in kr)return kr[e](n)},has(t,e){return e in t||e in kr}})):n.proxy}function y0(n,t=!0){return ne(n)?n.displayName||n.name:n.name||t&&n.__name}function S0(n){return ne(n)&&"__vccOpts"in n}const jn=(n,t)=>dm(n,t,La);function Mf(n,t,e){const i=arguments.length;return i===2?Ye(t)&&!se(t)?pa(t)?Ze(n,null,[t]):Ze(n,t):Ze(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&pa(e)&&(e=[e]),Ze(n,t,e))}const w0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ql;const Xu=typeof window<"u"&&window.trustedTypes;if(Xu)try{ql=Xu.createPolicy("vue",{createHTML:n=>n})}catch{}const yf=ql?n=>ql.createHTML(n):n=>n,E0="http://www.w3.org/2000/svg",b0="http://www.w3.org/1998/Math/MathML",Fi=typeof document<"u"?document:null,qu=Fi&&Fi.createElement("template"),T0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Fi.createElementNS(E0,n):t==="mathml"?Fi.createElementNS(b0,n):e?Fi.createElement(n,{is:e}):Fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Fi.createTextNode(n),createComment:n=>Fi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{qu.innerHTML=yf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},A0=Symbol("_vtc");function R0(n,t,e){const i=n[A0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ga=Symbol("_vod"),Sf=Symbol("_vsh"),P0={beforeMount(n,{value:t},{transition:e}){n[ga]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Rr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Rr(n,!0),i.enter(n)):i.leave(n,()=>{Rr(n,!1)}):Rr(n,t))},beforeUnmount(n,{value:t}){Rr(n,t)}};function Rr(n,t){n.style.display=t?n[ga]:"none",n[Sf]=!t}const C0=Symbol(""),I0=/(^|;)\s*display\s*:/;function L0(n,t,e){const i=n.style,s=sn(e);let r=!1;if(e&&!s){if(t)if(sn(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&ia(i,a,"")}else for(const o in t)e[o]==null&&ia(i,o,"");for(const o in e)o==="display"&&(r=!0),ia(i,o,e[o])}else if(s){if(t!==e){const o=i[C0];o&&(e+=";"+o),i.cssText=e,r=I0.test(e)}}else t&&n.removeAttribute("style");ga in n&&(n[ga]=r?i.display:"",n[Sf]&&(i.display="none"))}const Yu=/\s*!important$/;function ia(n,t,e){if(se(e))e.forEach(i=>ia(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=D0(n,t);Yu.test(e)?n.setProperty(Us(i),e.replace(Yu,""),"important"):n[i]=e}}const $u=["Webkit","Moz","ms"],Za={};function D0(n,t){const e=Za[t];if(e)return e;let i=zn(t);if(i!=="filter"&&i in n)return Za[t]=i;i=ba(i);for(let s=0;s<$u.length;s++){const r=$u[s]+i;if(r in n)return Za[t]=r}return t}const Ku="http://www.w3.org/1999/xlink";function ju(n,t,e,i,s,r=Bp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ku,t.slice(6,t.length)):n.setAttributeNS(Ku,t,e):e==null||r&&!bd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Sr(e)?String(e):e)}function Zu(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?yf(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(o!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let r=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=bd(e):e==null&&o==="string"?(e="",r=!0):o==="number"&&(e=0,r=!0)}try{n[t]=e}catch{}r&&n.removeAttribute(t)}function U0(n,t,e,i){n.addEventListener(t,e,i)}function N0(n,t,e,i){n.removeEventListener(t,e,i)}const Ju=Symbol("_vei");function F0(n,t,e,i,s=null){const r=n[Ju]||(n[Ju]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=O0(t);if(i){const c=r[t]=G0(i,s);U0(n,a,c,l)}else o&&(N0(n,a,o,l),r[t]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function O0(n){let t;if(Qu.test(n)){t={};let i;for(;i=n.match(Qu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Us(n.slice(2)),t]}let Ja=0;const B0=Promise.resolve(),z0=()=>Ja||(B0.then(()=>Ja=0),Ja=Date.now());function G0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;vi(H0(i,e.value),t,5,[i])};return e.value=n,e.attached=z0(),e}function H0(n,t){if(se(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const th=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,k0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?R0(n,i,o):t==="style"?L0(n,e,i):Sa(t)?zc(t)||F0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):V0(n,t,i,o))?(Zu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ju(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!sn(i))?Zu(n,zn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ju(n,t,i,o))};function V0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&th(t)&&ne(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return th(t)&&sn(e)?!1:t in n}const W0=on({patchProp:k0},T0);let eh;function X0(){return eh||(eh=Km(W0))}const q0=(...n)=>{const t=X0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=$0(i);if(!s)return;const r=t._component;!ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Y0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Y0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function $0(n){return sn(n)?document.querySelector(n):n}const K0={id:"app"},j0=kn({__name:"App",setup(n){const t=Yt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return li(()=>{window.addEventListener("mousemove",e)}),nu(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const r=Lu("router-link"),o=Lu("router-view");return Mi(),yi("div",K0,[vm(Ft("nav",null,[Ze(r,{to:"/3d-bear-arts/leather"},{default:Di(()=>s[0]||(s[0]=[Ui("Leather")])),_:1}),Ze(r,{to:"/3d-bear-arts/pop-art"},{default:Di(()=>s[1]||(s[1]=[Ui("Pop MouseMove")])),_:1}),Ze(r,{to:"/3d-bear-arts/pop-art-bear-3"},{default:Di(()=>s[2]||(s[2]=[Ui("Pop3")])),_:1}),Ze(r,{to:"/3d-bear-arts/machine"},{default:Di(()=>s[3]||(s[3]=[Ui("machine")])),_:1}),Ze(r,{to:"/3d-bear-arts/"},{default:Di(()=>s[4]||(s[4]=[Ui("Water")])),_:1}),Ze(r,{to:"/3d-bear-arts/ghost-bear"},{default:Di(()=>s[5]||(s[5]=[Ui("ghost")])),_:1}),Ze(r,{to:"/3d-bear-arts/white-ghost-bear"},{default:Di(()=>s[6]||(s[6]=[Ui("white ghost")])),_:1}),Ze(r,{to:"/3d-bear-arts/aquar"},{default:Di(()=>s[7]||(s[7]=[Ui("Aquar")])),_:1})],512),[[P0,t.value]]),Ze(o)])}}}),Si=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Z0=Si(j0,[["__scopeId","data-v-5c558729"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qs=typeof document<"u";function wf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function J0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&wf(n.default)}const be=Object.assign;function Qa(n,t){const e={};for(const i in t){const s=t[i];e[i]=ii(s)?s.map(n):n(s)}return e}const Wr=()=>{},ii=Array.isArray,Ef=/#/g,Q0=/&/g,tg=/\//g,eg=/=/g,ng=/\?/g,bf=/\+/g,ig=/%5B/g,sg=/%5D/g,Tf=/%5E/g,rg=/%60/g,Af=/%7B/g,og=/%7C/g,Rf=/%7D/g,ag=/%20/g;function ou(n){return encodeURI(""+n).replace(og,"|").replace(ig,"[").replace(sg,"]")}function lg(n){return ou(n).replace(Af,"{").replace(Rf,"}").replace(Tf,"^")}function Yl(n){return ou(n).replace(bf,"%2B").replace(ag,"+").replace(Ef,"%23").replace(Q0,"%26").replace(rg,"`").replace(Af,"{").replace(Rf,"}").replace(Tf,"^")}function cg(n){return Yl(n).replace(eg,"%3D")}function ug(n){return ou(n).replace(Ef,"%23").replace(ng,"%3F")}function hg(n){return n==null?"":ug(n).replace(tg,"%2F")}function io(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const dg=/\/$/,fg=n=>n.replace(dg,"");function tl(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=n(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=_g(i??t,e),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:io(o)}}function pg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function nh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function mg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&pr(t.matched[i],e.matched[s])&&Pf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function pr(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Pf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!gg(n[e],t[e]))return!1;return!0}function gg(n,t){return ii(n)?ih(n,t):ii(t)?ih(t,n):n===t}function ih(n,t){return ii(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function _g(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ji={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var so;(function(n){n.pop="pop",n.push="push"})(so||(so={}));var Xr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Xr||(Xr={}));function vg(n){if(!n)if(Qs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),fg(n)}const xg=/^[^#]+#/;function Mg(n,t){return n.replace(xg,"#")+t}function yg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ua=()=>({left:window.scrollX,top:window.scrollY});function Sg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=yg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function sh(n,t){return(history.state?history.state.position-t:-1)+n}const $l=new Map;function wg(n,t){$l.set(n,t)}function Eg(n){const t=$l.get(n);return $l.delete(n),t}let bg=()=>location.protocol+"//"+location.host;function Cf(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),nh(l,"")}return nh(e,n)+i+s}function Tg(n,t,e,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=Cf(n,location),_=e.value,x=t.value;let p=0;if(d){if(e.value=f,t.value=d,o&&o===_){o=null;return}p=x?d.position-x.position:0}else i(f);s.forEach(m=>{m(e.value,_,{delta:p,type:so.pop,direction:p?p>0?Xr.forward:Xr.back:Xr.unknown})})};function l(){o=e.value}function c(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(be({},d.state,{scroll:Ua()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function rh(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ua():null}}function Ag(n){const{history:t,location:e}=window,i={value:Cf(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+l:bg()+n+l;try{t[h?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),e[h?"replace":"assign"](d)}}function o(l,c){const h=be({},t.state,rh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=be({},s.value,t.state,{forward:l,scroll:Ua()});r(h.current,h,!0);const u=be({},rh(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Rg(n){n=vg(n);const t=Ag(n),e=Tg(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=be({location:"",base:n,go:i,createHref:Mg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Pg(n){return typeof n=="string"||n&&typeof n=="object"}function If(n){return typeof n=="string"||typeof n=="symbol"}const Lf=Symbol("");var oh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(oh||(oh={}));function mr(n,t){return be(new Error,{type:n,[Lf]:!0},t)}function Ti(n,t){return n instanceof Error&&Lf in n&&(t==null||!!(n.type&t))}const ah="[^/]+?",Cg={sensitive:!1,strict:!1,start:!0,end:!0},Ig=/[.+*?^${}()[\]/\\]/g;function Lg(n,t){const e=be({},Cg,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const h=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const d=c[u];let f=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(Ig,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:x,optional:p,regexp:m}=d;r.push({name:_,repeatable:x,optional:p});const b=m||ah;if(b!==ah){f+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+w.message)}}let S=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(S=p&&c.length<2?`(?:/${S})`:"/"+S),p&&(S+="?"),s+=S,f+=20,p&&(f+=-8),x&&(f+=-20),b===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=r[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function l(c){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:x,optional:p}=f,m=_ in c?c[_]:"";if(ii(m)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=ii(m)?m.join("/"):m;if(!b)if(p)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Dg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Df(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=Dg(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(lh(i))return 1;if(lh(s))return-1}return s.length-i.length}function lh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Ug={type:0,value:""},Ng=/[a-zA-Z0-9_]/;function Fg(n){if(!n)return[[]];if(n==="/")return[[Ug]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${c}": ${f}`)}let e=0,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(e===0?r.push({type:0,value:c}):e===1||e===2||e===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:l==="("?e=2:Ng.test(l)?d():(u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:e=3:h+=l;break;case 3:u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function Og(n,t,e){const i=Lg(Fg(n.path),e),s=be(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Bg(n,t){const e=[],i=new Map;t=dh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,d,f){const _=!f,x=uh(u);x.aliasOf=f&&f.record;const p=dh(t,u),m=[x];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of w)m.push(uh(be({},x,{components:f?f.record.components:x.components,path:F,aliasOf:f?f.record:x})))}let b,S;for(const w of m){const{path:F}=w;if(d&&F[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";w.path=d.record.path+(F&&P+F)}if(b=Og(w,d,p),f?f.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),_&&u.name&&!hh(b)&&o(u.name)),Uf(b)&&l(b),x.children){const I=x.children;for(let P=0;P<I.length;P++)r(I[P],b,f&&f.children[P])}f=f||b}return S?()=>{o(S)}:Wr}function o(u){if(If(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){const d=Hg(u,e);e.splice(d,0,u),u.record.name&&!hh(u)&&i.set(u.record.name,u)}function c(u,d){let f,_={},x,p;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw mr(1,{location:u});p=f.record.name,_=be(ch(d.params,f.keys.filter(S=>!S.optional).concat(f.parent?f.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&ch(u.params,f.keys.map(S=>S.name))),x=f.stringify(_)}else if(u.path!=null)x=u.path,f=e.find(S=>S.re.test(x)),f&&(_=f.parse(x),p=f.record.name);else{if(f=d.name?i.get(d.name):e.find(S=>S.re.test(d.path)),!f)throw mr(1,{location:u,currentLocation:d});p=f.record.name,_=be({},d.params,u.params),x=f.stringify(_)}const m=[];let b=f;for(;b;)m.unshift(b.record),b=b.parent;return{name:p,path:x,params:_,matched:m,meta:Gg(m)}}n.forEach(u=>r(u));function h(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function ch(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function uh(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:zg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function zg(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function hh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Gg(n){return n.reduce((t,e)=>be(t,e.meta),{})}function dh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function Hg(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;Df(n,t[r])<0?i=r:e=r+1}const s=kg(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function kg(n){let t=n;for(;t=t.parent;)if(Uf(t)&&Df(n,t)===0)return t}function Uf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Vg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(bf," "),o=r.indexOf("="),a=io(o<0?r:r.slice(0,o)),l=o<0?null:io(r.slice(o+1));if(a in t){let c=t[a];ii(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function fh(n){let t="";for(let e in n){const i=n[e];if(e=cg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(ii(i)?i.map(r=>r&&Yl(r)):[i&&Yl(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function Wg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=ii(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Xg=Symbol(""),ph=Symbol(""),au=Symbol(""),Nf=Symbol(""),Kl=Symbol("");function Pr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function rs(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(mr(4,{from:e,to:t})):d instanceof Error?l(d):Pg(d)?l(mr(2,{from:t,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},h=r(()=>n.call(i&&i.instances[s],t,e,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(d=>l(d))})}function el(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(wf(l)){const h=(l.__vccOpts||l)[t];h&&r.push(rs(h,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=J0(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&rs(f,e,i,o,a,s)()}))}}return r}function mh(n){const t=Hi(au),e=Hi(Nf),i=jn(()=>{const l=or(n.to);return t.resolve(l)}),s=jn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(pr.bind(null,h));if(d>-1)return d;const f=gh(l[c-2]);return c>1&&gh(h)===f&&u[u.length-1].path!==f?u.findIndex(pr.bind(null,l[c-2])):d}),r=jn(()=>s.value>-1&&Kg(e.params,i.value.params)),o=jn(()=>s.value>-1&&s.value===e.matched.length-1&&Pf(e.params,i.value.params));function a(l={}){return $g(l)?t[or(n.replace)?"replace":"push"](or(n.to)).catch(Wr):Promise.resolve()}return{route:i,href:jn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const qg=kn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mh,setup(n,{slots:t}){const e=Aa(mh(n)),{options:i}=Hi(au),s=jn(()=>({[_h(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[_h(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&t.default(e);return n.custom?r:Mf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Yg=qg;function $g(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Kg(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!ii(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function gh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _h=(n,t,e)=>n??t??e,jg=kn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Hi(Kl),s=jn(()=>n.route||i.value),r=Hi(ph,0),o=jn(()=>{let c=or(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=jn(()=>s.value.matched[o.value]);ea(ph,jn(()=>o.value+1)),ea(Xg,a),ea(Kl,s);const l=Yt();return ke(()=>[l.value,a.value,n.name],([c,h,u],[d,f,_])=>{h&&(h.instances[u]=c,f&&f!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),c&&h&&(!f||!pr(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return vh(e.default,{Component:d,route:c});const f=u.props[h],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,p=Mf(d,be({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return vh(e.default,{Component:p,route:c})||p}}});function vh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Zg=jg;function Jg(n){const t=Bg(n.routes,n),e=n.parseQuery||Vg,i=n.stringifyQuery||fh,s=n.history,r=Pr(),o=Pr(),a=Pr(),l=rr(ji);let c=ji;Qs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Qa.bind(null,N=>""+N),u=Qa.bind(null,hg),d=Qa.bind(null,io);function f(N,ut){let at,lt;return If(N)?(at=t.getRecordMatcher(N),lt=ut):lt=N,t.addRoute(lt,at)}function _(N){const ut=t.getRecordMatcher(N);ut&&t.removeRoute(ut)}function x(){return t.getRoutes().map(N=>N.record)}function p(N){return!!t.getRecordMatcher(N)}function m(N,ut){if(ut=be({},ut||l.value),typeof N=="string"){const T=tl(e,N,ut.path),L=t.resolve({path:T.path},ut),D=s.createHref(T.fullPath);return be(T,L,{params:d(L.params),hash:io(T.hash),redirectedFrom:void 0,href:D})}let at;if(N.path!=null)at=be({},N,{path:tl(e,N.path,ut.path).path});else{const T=be({},N.params);for(const L in T)T[L]==null&&delete T[L];at=be({},N,{params:u(T)}),ut.params=u(ut.params)}const lt=t.resolve(at,ut),Et=N.hash||"";lt.params=h(d(lt.params));const tt=pg(i,be({},N,{hash:lg(Et),path:lt.path})),g=s.createHref(tt);return be({fullPath:tt,hash:Et,query:i===fh?Wg(N.query):N.query||{}},lt,{redirectedFrom:void 0,href:g})}function b(N){return typeof N=="string"?tl(e,N,l.value.path):be({},N)}function S(N,ut){if(c!==N)return mr(8,{from:ut,to:N})}function w(N){return P(N)}function F(N){return w(be(b(N),{replace:!0}))}function I(N){const ut=N.matched[N.matched.length-1];if(ut&&ut.redirect){const{redirect:at}=ut;let lt=typeof at=="function"?at(N):at;return typeof lt=="string"&&(lt=lt.includes("?")||lt.includes("#")?lt=b(lt):{path:lt},lt.params={}),be({query:N.query,hash:N.hash,params:lt.path!=null?{}:N.params},lt)}}function P(N,ut){const at=c=m(N),lt=l.value,Et=N.state,tt=N.force,g=N.replace===!0,T=I(at);if(T)return P(be(b(T),{state:typeof T=="object"?be({},Et,T.state):Et,force:tt,replace:g}),ut||at);const L=at;L.redirectedFrom=ut;let D;return!tt&&mg(i,lt,at)&&(D=mr(16,{to:L,from:lt}),_t(lt,lt,!0,!1)),(D?Promise.resolve(D):M(L,lt)).catch(U=>Ti(U)?Ti(U,2)?U:yt(U):B(U,L,lt)).then(U=>{if(U){if(Ti(U,2))return P(be({replace:g},b(U.to),{state:typeof U.to=="object"?be({},Et,U.to.state):Et,force:tt}),ut||L)}else U=j(L,lt,!0,g,Et);return E(L,lt,U),U})}function O(N,ut){const at=S(N,ut);return at?Promise.reject(at):Promise.resolve()}function nt(N){const ut=ot.values().next().value;return ut&&typeof ut.runWithContext=="function"?ut.runWithContext(N):N()}function M(N,ut){let at;const[lt,Et,tt]=Qg(N,ut);at=el(lt.reverse(),"beforeRouteLeave",N,ut);for(const T of lt)T.leaveGuards.forEach(L=>{at.push(rs(L,N,ut))});const g=O.bind(null,N,ut);return at.push(g),St(at).then(()=>{at=[];for(const T of r.list())at.push(rs(T,N,ut));return at.push(g),St(at)}).then(()=>{at=el(Et,"beforeRouteUpdate",N,ut);for(const T of Et)T.updateGuards.forEach(L=>{at.push(rs(L,N,ut))});return at.push(g),St(at)}).then(()=>{at=[];for(const T of tt)if(T.beforeEnter)if(ii(T.beforeEnter))for(const L of T.beforeEnter)at.push(rs(L,N,ut));else at.push(rs(T.beforeEnter,N,ut));return at.push(g),St(at)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),at=el(tt,"beforeRouteEnter",N,ut,nt),at.push(g),St(at))).then(()=>{at=[];for(const T of o.list())at.push(rs(T,N,ut));return at.push(g),St(at)}).catch(T=>Ti(T,8)?T:Promise.reject(T))}function E(N,ut,at){a.list().forEach(lt=>nt(()=>lt(N,ut,at)))}function j(N,ut,at,lt,Et){const tt=S(N,ut);if(tt)return tt;const g=ut===ji,T=Qs?history.state:{};at&&(lt||g?s.replace(N.fullPath,be({scroll:g&&T&&T.scroll},Et)):s.push(N.fullPath,Et)),l.value=N,_t(N,ut,at,g),yt()}let V;function Z(){V||(V=s.listen((N,ut,at)=>{if(!ft.listening)return;const lt=m(N),Et=I(lt);if(Et){P(be(Et,{replace:!0}),lt).catch(Wr);return}c=lt;const tt=l.value;Qs&&wg(sh(tt.fullPath,at.delta),Ua()),M(lt,tt).catch(g=>Ti(g,12)?g:Ti(g,2)?(P(g.to,lt).then(T=>{Ti(T,20)&&!at.delta&&at.type===so.pop&&s.go(-1,!1)}).catch(Wr),Promise.reject()):(at.delta&&s.go(-at.delta,!1),B(g,lt,tt))).then(g=>{g=g||j(lt,tt,!1),g&&(at.delta&&!Ti(g,8)?s.go(-at.delta,!1):at.type===so.pop&&Ti(g,20)&&s.go(-1,!1)),E(lt,tt,g)}).catch(Wr)}))}let rt=Pr(),H=Pr(),Q;function B(N,ut,at){yt(N);const lt=H.list();return lt.length?lt.forEach(Et=>Et(N,ut,at)):console.error(N),Promise.reject(N)}function gt(){return Q&&l.value!==ji?Promise.resolve():new Promise((N,ut)=>{rt.add([N,ut])})}function yt(N){return Q||(Q=!N,Z(),rt.list().forEach(([ut,at])=>N?at(N):ut()),rt.reset()),N}function _t(N,ut,at,lt){const{scrollBehavior:Et}=n;if(!Qs||!Et)return Promise.resolve();const tt=!at&&Eg(sh(N.fullPath,0))||(lt||!at)&&history.state&&history.state.scroll||null;return Xd().then(()=>Et(N,ut,tt)).then(g=>g&&Sg(g)).catch(g=>B(g,N,ut))}const Ct=N=>s.go(N);let Gt;const ot=new Set,ft={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:x,resolve:m,options:n,push:w,replace:F,go:Ct,back:()=>Ct(-1),forward:()=>Ct(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:gt,install(N){const ut=this;N.component("RouterLink",Yg),N.component("RouterView",Zg),N.config.globalProperties.$router=ut,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>or(l)}),Qs&&!Gt&&l.value===ji&&(Gt=!0,w(s.location).catch(Et=>{}));const at={};for(const Et in ji)Object.defineProperty(at,Et,{get:()=>l.value[Et],enumerable:!0});N.provide(au,ut),N.provide(Nf,Gd(at)),N.provide(Kl,l);const lt=N.unmount;ot.add(N),N.unmount=function(){ot.delete(N),ot.size<1&&(c=ji,V&&V(),V=null,l.value=ji,Gt=!1,Q=!1),lt()}}};function St(N){return N.reduce((ut,at)=>ut.then(()=>nt(at)),Promise.resolve())}return ft}function Qg(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>pr(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>pr(c,l))||s.push(l))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="169",t_=0,xh=1,e_=2,Ff=1,n_=2,Ni=3,us=0,bn=1,ue=2,as=0,cr=1,Mh=2,yh=3,Sh=4,i_=5,bs=100,s_=101,r_=102,o_=103,a_=104,l_=200,c_=201,u_=202,h_=203,jl=204,Zl=205,d_=206,f_=207,p_=208,m_=209,g_=210,__=211,v_=212,x_=213,M_=214,Jl=0,Ql=1,tc=2,gr=3,ec=4,nc=5,ic=6,sc=7,Of=0,y_=1,S_=2,ls=0,w_=1,E_=2,b_=3,T_=4,A_=5,R_=6,P_=7,Bf=300,_r=301,vr=302,ro=303,rc=304,Na=306,Ve=1e3,As=1001,oc=1002,Bn=1003,C_=1004,Ao=1005,Zn=1006,nl=1007,Rs=1008,ki=1009,zf=1010,Gf=1011,oo=1012,cu=1013,Is=1014,Bi=1015,go=1016,uu=1017,hu=1018,xr=1020,Hf=35902,kf=1021,Vf=1022,Qn=1023,Wf=1024,Xf=1025,ur=1026,Mr=1027,qf=1028,du=1029,Yf=1030,fu=1031,pu=1033,sa=33776,ra=33777,oa=33778,aa=33779,ac=35840,lc=35841,cc=35842,uc=35843,hc=36196,dc=37492,fc=37496,pc=37808,mc=37809,gc=37810,_c=37811,vc=37812,xc=37813,Mc=37814,yc=37815,Sc=37816,wc=37817,Ec=37818,bc=37819,Tc=37820,Ac=37821,la=36492,Rc=36494,Pc=36495,$f=36283,Cc=36284,Ic=36285,Lc=36286,I_=3200,L_=3201,Kf=0,D_=1,os="",fi="srgb",fs="srgb-linear",mu="display-p3",Fa="display-p3-linear",_a="linear",De="srgb",va="rec709",xa="p3",Bs=7680,wh=519,U_=512,N_=513,F_=514,jf=515,O_=516,B_=517,z_=518,G_=519,Eh=35044,bh="300 es",zi=2e3,Ma=2001;class wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Th=1234567;const qr=Math.PI/180,ao=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function nn(n,t,e){return Math.max(t,Math.min(e,n))}function gu(n,t){return(n%t+t)%t}function H_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function k_(n,t,e){return n!==t?(e-n)/(t-n):0}function Yr(n,t,e){return(1-e)*n+e*t}function V_(n,t,e,i){return Yr(n,t,1-Math.exp(-e*i))}function W_(n,t=1){return t-Math.abs(gu(n,t*2)-t)}function X_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function q_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Y_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $_(n,t){return n+Math.random()*(t-n)}function K_(n){return n*(.5-Math.random())}function j_(n){n!==void 0&&(Th=n);let t=Th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Z_(n){return n*qr}function J_(n){return n*ao}function Q_(n){return(n&n-1)===0&&n!==0}function tv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ev(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nv(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function tr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ae={DEG2RAD:qr,RAD2DEG:ao,generateUUID:Ns,clamp:nn,euclideanModulo:gu,mapLinear:H_,inverseLerp:k_,lerp:Yr,damp:V_,pingpong:W_,smoothstep:X_,smootherstep:q_,randInt:Y_,randFloat:$_,randFloatSpread:K_,seededRandom:j_,degToRad:Z_,radToDeg:J_,isPowerOfTwo:Q_,ceilPowerOfTwo:tv,floorPowerOfTwo:ev,setQuaternionFromProperEuler:nv,normalize:gn,denormalize:tr};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,i,s,r,o,a,l,c){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],x=s[0],p=s[3],m=s[6],b=s[1],S=s[4],w=s[7],F=s[2],I=s[5],P=s[8];return r[0]=o*x+a*b+l*F,r[3]=o*p+a*S+l*I,r[6]=o*m+a*w+l*P,r[1]=c*x+h*b+u*F,r[4]=c*p+h*S+u*I,r[7]=c*m+h*w+u*P,r[2]=d*x+f*b+_*F,r[5]=d*p+f*S+_*I,r[8]=d*m+f*w+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=e*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(il.makeScale(t,e)),this}rotate(t){return this.premultiply(il.makeRotation(-t)),this}translate(t,e){return this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const il=new oe;function Zf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iv(){const n=lo("canvas");return n.style.display="block",n}const Ah={};function ca(n){n in Ah||(Ah[n]=!0,console.warn(n))}function sv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function rv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ov(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Rh=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ph=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cr={[fs]:{transfer:_a,primaries:va,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[fi]:{transfer:De,primaries:va,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Fa]:{transfer:_a,primaries:xa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ph),fromReference:n=>n.applyMatrix3(Rh)},[mu]:{transfer:De,primaries:xa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ph),fromReference:n=>n.applyMatrix3(Rh).convertLinearToSRGB()}},av=new Set([fs,Fa]),ye={enabled:!0,_workingColorSpace:fs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!av.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Cr[t].toReference,s=Cr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Cr[n].primaries},getTransfer:function(n){return n===os?_a:Cr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Cr[t].luminanceCoefficients)}};function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zs;class lv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zs===void 0&&(zs=lo("canvas")),zs.width=t.width,zs.height=t.height;const i=zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hr(e[i]/255)*255):e[i]=hr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cv=0;class Jf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uv=0;class Mn extends wr{constructor(t=Mn.DEFAULT_IMAGE,e=Mn.DEFAULT_MAPPING,i=As,s=As,r=Zn,o=Rs,a=Qn,l=ki,c=Mn.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Ns(),this.name="",this.source=new Jf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ve:t.x=t.x-Math.floor(t.x);break;case As:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ve:t.y=t.y-Math.floor(t.y);break;case As:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Bf;Mn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,w=(f+1)/2,F=(m+1)/2,I=(h+d)/4,P=(u+x)/4,O=(_+p)/4;return S>w&&S>F?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=I/i,r=P/i):w>F?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=I/s,r=O/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=P/r,s=O/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hv extends wr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends hv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Qf extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dv extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==_){let p=1-a;const m=l*d+c*f+h*_+u*x,b=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const F=Math.sqrt(S),I=Math.atan2(F,m*b);p=Math.sin(p*I)/F,a=Math.sin(a*I)/F}const w=a*b;if(l=l*p+d*w,c=c*p+f*w,h=h*p+_*w,u=u*p+x*w,p===1-a){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new q,Ch=new _o;class vo{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),Po.subVectors(this.max,Ir),Gs.subVectors(t.a,Ir),Hs.subVectors(t.b,Ir),ks.subVectors(t.c,Ir),Zi.subVectors(Hs,Gs),Ji.subVectors(ks,Hs),gs.subVectors(Gs,ks);let e=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-gs.z,gs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,gs.z,0,-gs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-gs.y,gs.x,0];return!al(e,Gs,Hs,ks,Po)||(e=[1,0,0,0,1,0,0,0,1],!al(e,Gs,Hs,ks,Po))?!1:(Co.crossVectors(Zi,Ji),e=[Co.x,Co.y,Co.z],al(e,Gs,Hs,ks,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new q,new q,new q,new q,new q,new q,new q,new q],Yn=new q,Ro=new vo,Gs=new q,Hs=new q,ks=new q,Zi=new q,Ji=new q,gs=new q,Ir=new q,Po=new q,Co=new q,_s=new q;function al(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_s.fromArray(n,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fv=new vo,Lr=new q,ll=new q;class _u{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);const e=Lr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(ll)),this.expandByPoint(Lr.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new q,cl=new q,Io=new q,Qi=new q,ul=new q,Lo=new q,hl=new q;class pv{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){cl.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(cl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=Qi.dot(this.direction),l=-Qi.dot(Io),c=Qi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(cl).addScaledVector(Io,d),f}intersectSphere(t,e){Ri.subVectors(t.center,this.origin);const i=Ri.dot(this.direction),s=Ri.dot(Ri)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,i,s,r){ul.subVectors(e,t),Lo.subVectors(i,t),hl.crossVectors(ul,Lo);let o=this.direction.dot(hl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,t);const l=a*this.direction.dot(Lo.crossVectors(Qi,Lo));if(l<0)return null;const c=a*this.direction.dot(ul.cross(Qi));if(c<0||l+c>o)return null;const h=-a*Qi.dot(hl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,_,x,p){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,_,x,p)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,_,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Vs.setFromMatrixColumn(t,0).length(),r=1/Vs.setFromMatrixColumn(t,1).length(),o=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,_=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d+x*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,_=a*h,x=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mv,t,gv)}lookAt(t,e,i){const s=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),ts.crossVectors(i,Rn),ts.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),ts.crossVectors(i,Rn)),ts.normalize(),Do.crossVectors(Rn,ts),s[0]=ts.x,s[4]=Do.x,s[8]=Rn.x,s[1]=ts.y,s[5]=Do.y,s[9]=Rn.y,s[2]=ts.z,s[6]=Do.z,s[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],x=i[6],p=i[10],m=i[14],b=i[3],S=i[7],w=i[11],F=i[15],I=s[0],P=s[4],O=s[8],nt=s[12],M=s[1],E=s[5],j=s[9],V=s[13],Z=s[2],rt=s[6],H=s[10],Q=s[14],B=s[3],gt=s[7],yt=s[11],_t=s[15];return r[0]=o*I+a*M+l*Z+c*B,r[4]=o*P+a*E+l*rt+c*gt,r[8]=o*O+a*j+l*H+c*yt,r[12]=o*nt+a*V+l*Q+c*_t,r[1]=h*I+u*M+d*Z+f*B,r[5]=h*P+u*E+d*rt+f*gt,r[9]=h*O+u*j+d*H+f*yt,r[13]=h*nt+u*V+d*Q+f*_t,r[2]=_*I+x*M+p*Z+m*B,r[6]=_*P+x*E+p*rt+m*gt,r[10]=_*O+x*j+p*H+m*yt,r[14]=_*nt+x*V+p*Q+m*_t,r[3]=b*I+S*M+w*Z+F*B,r[7]=b*P+S*E+w*rt+F*gt,r[11]=b*O+S*j+w*H+F*yt,r[15]=b*nt+S*V+w*Q+F*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],x=t[7],p=t[11],m=t[15];return _*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],x=t[13],p=t[14],m=t[15],b=u*p*c-x*d*c+x*l*f-a*p*f-u*l*m+a*d*m,S=_*d*c-h*p*c-_*l*f+o*p*f+h*l*m-o*d*m,w=h*x*c-_*u*c+_*a*f-o*x*f-h*a*m+o*u*m,F=_*u*l-h*x*l-_*a*d+o*x*d+h*a*p-o*u*p,I=e*b+i*S+s*w+r*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=b*P,t[1]=(x*d*r-u*p*r-x*s*f+i*p*f+u*s*m-i*d*m)*P,t[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*m+i*l*m)*P,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=S*P,t[5]=(h*p*r-_*d*r+_*s*f-e*p*f-h*s*m+e*d*m)*P,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*m-e*l*m)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=w*P,t[9]=(_*u*r-h*x*r-_*i*f+e*x*f+h*i*m-e*u*m)*P,t[10]=(o*x*r-_*a*r+_*i*c-e*x*c-o*i*m+e*a*m)*P,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*P,t[12]=F*P,t[13]=(h*x*s-_*u*s+_*i*d-e*x*d-h*i*p+e*u*p)*P,t[14]=(_*a*s-o*x*s-_*i*l+e*x*l+o*i*p-e*a*p)*P,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,x=o*h,p=o*u,m=a*u,b=l*c,S=l*h,w=l*u,F=i.x,I=i.y,P=i.z;return s[0]=(1-(x+m))*F,s[1]=(f+w)*F,s[2]=(_-S)*F,s[3]=0,s[4]=(f-w)*I,s[5]=(1-(d+m))*I,s[6]=(p+b)*I,s[7]=0,s[8]=(_+S)*P,s[9]=(p-b)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Vs.set(s[0],s[1],s[2]).length();const o=Vs.set(s[4],s[5],s[6]).length(),a=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);const c=1/r,h=1/o,u=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=zi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===zi)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ma)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=zi){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h;let _,x;if(a===zi)_=(o+r)*u,x=-2*u;else if(a===Ma)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Vs=new q,$n=new Ne,mv=new q(0,0,0),gv=new q(1,1,1),ts=new q,Do=new q,Rn=new q,Ih=new Ne,Lh=new _o;class xi{constructor(t=0,e=0,i=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _v=0;const Dh=new q,Ws=new _o,Pi=new Ne,Uo=new q,Dr=new q,vv=new q,xv=new _o,Uh=new q(1,0,0),Nh=new q(0,1,0),Fh=new q(0,0,1),Oh={type:"added"},Mv={type:"removed"},Xs={type:"childadded",child:null},dl={type:"childremoved",child:null};class dn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new q,e=new xi,i=new _o,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new oe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Uo.copy(t):Uo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Dr,Uo,this.up):Pi.lookAt(Uo,Dr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mv),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,vv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,xv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}dn.DEFAULT_UP=new q(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new q,Ci=new q,fl=new q,Ii=new q,qs=new q,Ys=new q,Bh=new q,pl=new q,ml=new q,gl=new q,_l=new Ae,vl=new Ae,xl=new Ae;class Jn{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Kn.subVectors(t,e),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Kn.subVectors(s,e),Ci.subVectors(i,e),fl.subVectors(t,e);const o=Kn.dot(Kn),a=Kn.dot(Ci),l=Kn.dot(fl),c=Ci.dot(Ci),h=Ci.dot(fl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _l.setScalar(0),vl.setScalar(0),xl.setScalar(0),_l.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,i),xl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_l,r.x),o.addScaledVector(vl,r.y),o.addScaledVector(xl,r.z),o}static isFrontFacing(t,e,i,s){return Kn.subVectors(i,e),Ci.subVectors(t,e),Kn.cross(Ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Kn.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Jn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Jn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;qs.subVectors(s,i),Ys.subVectors(r,i),pl.subVectors(t,i);const l=qs.dot(pl),c=Ys.dot(pl);if(l<=0&&c<=0)return e.copy(i);ml.subVectors(t,s);const h=qs.dot(ml),u=Ys.dot(ml);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(qs,o);gl.subVectors(t,r);const f=qs.dot(gl),_=Ys.dot(gl);if(_>=0&&f<=_)return e.copy(r);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ys,a);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return Bh.subVectors(r,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(Bh,a);const m=1/(p+x+d);return o=x*m,a=d*m,e.copy(i).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},No={h:0,s:0,l:0};function Ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class he{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=i,ye.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ye.workingColorSpace){if(t=gu(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ml(o,r,t+1/3),this.g=Ml(o,r,t),this.b=Ml(o,r,t-1/3)}return ye.toWorkingColorSpace(this,s),this}setStyle(t,e=fi){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fi){const i=ep[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}copyLinearToSRGB(t){return this.r=sl(t.r),this.g=sl(t.g),this.b=sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return ye.fromWorkingColorSpace(ln.copy(this),t),Math.round(nn(ln.r*255,0,255))*65536+Math.round(nn(ln.g*255,0,255))*256+Math.round(nn(ln.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(ln.copy(this),e);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=fi){ye.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,i=ln.g,s=ln.b;return t!==fi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(No);const i=Yr(es.h,No.h,e),s=Yr(es.s,No.s,e),r=Yr(es.l,No.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new he;he.NAMES=ep;let yv=0;class xo extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=cr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Zl,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends xo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const je=new q,Fo=new Bt;class _i{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Eh,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fo.fromBufferAttribute(this,e),Fo.applyMatrix3(t),this.setXY(e,Fo.x,Fo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=tr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=gn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),i=gn(i,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eh&&(t.usage=this.usage),t}}class np extends _i{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ip extends _i{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qe extends _i{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Sv=0;const On=new Ne,yl=new dn,$s=new q,Pn=new vo,Ur=new vo,en=new q;class Vn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zf(t)?ip:np)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new oe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,i){return On.makeTranslation(t,e,i),this.applyMatrix4(On),this}scale(t,e,i){return On.makeScale(t,e,i),this.applyMatrix4(On),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _u);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Pn.min,Ur.min),Pn.expandByPoint(en),en.addVectors(Pn.max,Ur.max),Pn.expandByPoint(en)):(Pn.expandByPoint(Ur.min),Pn.expandByPoint(Ur.max))}Pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),en.add($s)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new q,l[O]=new q;const c=new q,h=new q,u=new q,d=new Bt,f=new Bt,_=new Bt,x=new q,p=new q;function m(O,nt,M){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,nt),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,nt),_.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const E=1/(f.x*_.y-_.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(E),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(E),a[O].add(x),a[nt].add(x),a[M].add(x),l[O].add(p),l[nt].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let O=0,nt=b.length;O<nt;++O){const M=b[O],E=M.start,j=M.count;for(let V=E,Z=E+j;V<Z;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const S=new q,w=new q,F=new q,I=new q;function P(O){F.fromBufferAttribute(s,O),I.copy(F);const nt=a[O];S.copy(nt),S.sub(F.multiplyScalar(F.dot(nt))).normalize(),w.crossVectors(I,nt);const E=w.dot(l[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,E)}for(let O=0,nt=b.length;O<nt;++O){const M=b[O],E=M.start,j=M.count;for(let V=E,Z=E+j;V<Z;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new _i(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Vn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new Ne,vs=new pv,Oo=new _u,Gh=new q,Bo=new q,zo=new q,Go=new q,Sl=new q,Ho=new q,Hh=new q,ko=new q;class R extends dn{constructor(t=new Vn,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Sl.fromBufferAttribute(u,t),o?Ho.addScaledVector(Sl,h):Ho.addScaledVector(Sl.sub(e),h))}e.add(Ho)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(Oo.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Oo,Gh)===null||vs.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),vs.copy(t.ray).applyMatrix4(zh),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=o[p.materialIndex],b=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let w=b,F=S;w<F;w+=3){const I=a.getX(w),P=a.getX(w+1),O=a.getX(w+2);s=Vo(this,m,t,i,c,h,u,I,P,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const b=a.getX(p),S=a.getX(p+1),w=a.getX(p+2);s=Vo(this,o,t,i,c,h,u,b,S,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=o[p.materialIndex],b=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=b,F=S;w<F;w+=3){const I=w,P=w+1,O=w+2;s=Vo(this,m,t,i,c,h,u,I,P,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const b=p,S=p+1,w=p+2;s=Vo(this,o,t,i,c,h,u,b,S,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function wv(n,t,e,i,s,r,o,a){let l;if(t.side===bn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===us,a),l===null)return null;ko.copy(a),ko.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:n}}function Vo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Bo),n.getVertexPosition(l,zo),n.getVertexPosition(c,Go);const h=wv(n,t,e,i,Bo,zo,Go,Hh);if(h){const u=new q;Jn.getBarycoord(Hh,Bo,zo,Go,u),s&&(h.uv=Jn.getInterpolatedAttribute(s,a,l,c,u,new Bt)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,a,l,c,u,new Bt)),o&&(h.normal=Jn.getInterpolatedAttribute(o,a,l,c,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new q,materialIndex:0};Jn.getNormal(Bo,zo,Go,d.normal),h.face=d,h.barycoord=u}return h}class ti extends Vn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function _(x,p,m,b,S,w,F,I,P,O,nt){const M=w/P,E=F/O,j=w/2,V=F/2,Z=I/2,rt=P+1,H=O+1;let Q=0,B=0;const gt=new q;for(let yt=0;yt<H;yt++){const _t=yt*E-V;for(let Ct=0;Ct<rt;Ct++){const Gt=Ct*M-j;gt[x]=Gt*b,gt[p]=_t*S,gt[m]=Z,c.push(gt.x,gt.y,gt.z),gt[x]=0,gt[p]=0,gt[m]=I>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(Ct/P),u.push(1-yt/O),Q+=1}}for(let yt=0;yt<O;yt++)for(let _t=0;_t<P;_t++){const Ct=d+_t+rt*yt,Gt=d+_t+rt*(yt+1),ot=d+(_t+1)+rt*(yt+1),ft=d+(_t+1)+rt*yt;l.push(Ct,Gt,ft),l.push(Gt,ot,ft),B+=6}a.addGroup(f,B,nt),f+=B,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function _n(n){const t={};for(let e=0;e<n.length;e++){const i=yr(n[e]);for(const s in i)t[s]=i[s]}return t}function Ev(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}const bv={clone:yr,merge:_n};var Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends xo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=Ev(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rp extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new q,kh=new Bt,Vh=new Bt;class Be extends rp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Vh),e.subVectors(Vh,kh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ks=-90,js=1;class Rv extends dn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(Ks,js,t,e);s.layers=this.layers,this.add(s);const r=new Be(Ks,js,t,e);r.layers=this.layers,this.add(r);const o=new Be(Ks,js,t,e);o.layers=this.layers,this.add(o);const a=new Be(Ks,js,t,e);a.layers=this.layers,this.add(a);const l=new Be(Ks,js,t,e);l.layers=this.layers,this.add(l);const c=new Be(Ks,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class op extends Mn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_r,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pv extends Ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new op(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ti(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:as});r.uniforms.tEquirect.value=e;const o=new R(s,r),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=Zn),new Rv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const wl=new q,Cv=new q,Iv=new oe;class ws{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wl.subVectors(i,e).cross(Cv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Iv.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new _u,Wo=new q;class vu{constructor(t=new ws,e=new ws,i=new ws,s=new ws,r=new ws,o=new ws){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],x=s[10],p=s[11],m=s[12],b=s[13],S=s[14],w=s[15];if(i[0].setComponents(l-r,d-c,p-f,w-m).normalize(),i[1].setComponents(l+r,d+c,p+f,w+m).normalize(),i[2].setComponents(l+o,d+h,p+_,w+b).normalize(),i[3].setComponents(l-o,d-h,p-_,w-b).normalize(),i[4].setComponents(l-a,d-u,p-x,w-S).normalize(),e===zi)i[5].setComponents(l+a,d+u,p+x,w+S).normalize();else if(e===Ma)i[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Wo.x=s.normal.x>0?t.max.x:t.min.x,Wo.y=s.normal.y>0?t.max.y:t.min.y,Wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ap(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Lv(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],x=u[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Oa extends Vn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],x=[],p=[];for(let m=0;m<h;m++){const b=m*d-o;for(let S=0;S<c;S++){const w=S*u-r;_.push(w,-b,0),x.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const S=b+c*m,w=b+c*(m+1),F=b+1+c*(m+1),I=b+1+c*m;f.push(S,w,I),f.push(w,F,I)}this.setIndex(f),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uv=`#ifdef USE_ALPHAHASH
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
#endif`,Nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zv=`#ifdef USE_AOMAP
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
#endif`,Gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hv=`#ifdef USE_BATCHING
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
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qv=`#ifdef USE_IRIDESCENCE
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
#endif`,Yv=`#ifdef USE_BUMPMAP
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nx=`#define PI 3.141592653589793
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
} // validated`,ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ux=`
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
}`,hx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mx=`#ifdef USE_GRADIENTMAP
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
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
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
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
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
#endif`,Ix=`struct PhysicalMaterial {
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
}`,Lx=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
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
#endif`,nM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_M=`float getShadowMask() {
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
}`,vM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xM=`#ifdef USE_SKINNING
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
#endif`,MM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
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
#endif`,SM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TM=`#ifdef USE_TRANSMISSION
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
#endif`,AM=`#ifdef USE_TRANSMISSION
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DM=`uniform sampler2D t2D;
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
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`#include <common>
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
}`,zM=`#if DEPTH_PACKING == 3200
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
}`,GM=`#define DISTANCE
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
}`,HM=`#define DISTANCE
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`uniform float scale;
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
}`,XM=`uniform vec3 diffuse;
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
}`,qM=`#include <common>
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
}`,YM=`uniform vec3 diffuse;
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
}`,$M=`#define LAMBERT
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
}`,KM=`#define LAMBERT
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
}`,jM=`#define MATCAP
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
}`,ZM=`#define MATCAP
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
}`,JM=`#define NORMAL
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
}`,QM=`#define NORMAL
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
}`,ty=`#define PHONG
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
}`,ey=`#define PHONG
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
}`,ny=`#define STANDARD
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
}`,iy=`#define STANDARD
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
}`,sy=`#define TOON
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
}`,ry=`#define TOON
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
}`,oy=`uniform float size;
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
}`,ay=`uniform vec3 diffuse;
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
}`,ly=`#include <common>
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
}`,cy=`uniform vec3 color;
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
}`,uy=`uniform float rotation;
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
}`,hy=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Dv,alphahash_pars_fragment:Uv,alphamap_fragment:Nv,alphamap_pars_fragment:Fv,alphatest_fragment:Ov,alphatest_pars_fragment:Bv,aomap_fragment:zv,aomap_pars_fragment:Gv,batching_pars_vertex:Hv,batching_vertex:kv,begin_vertex:Vv,beginnormal_vertex:Wv,bsdfs:Xv,iridescence_fragment:qv,bumpmap_pars_fragment:Yv,clipping_planes_fragment:$v,clipping_planes_pars_fragment:Kv,clipping_planes_pars_vertex:jv,clipping_planes_vertex:Zv,color_fragment:Jv,color_pars_fragment:Qv,color_pars_vertex:tx,color_vertex:ex,common:nx,cube_uv_reflection_fragment:ix,defaultnormal_vertex:sx,displacementmap_pars_vertex:rx,displacementmap_vertex:ox,emissivemap_fragment:ax,emissivemap_pars_fragment:lx,colorspace_fragment:cx,colorspace_pars_fragment:ux,envmap_fragment:hx,envmap_common_pars_fragment:dx,envmap_pars_fragment:fx,envmap_pars_vertex:px,envmap_physical_pars_fragment:bx,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:_x,fog_fragment:vx,fog_pars_fragment:xx,gradientmap_pars_fragment:Mx,lightmap_pars_fragment:yx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:wx,lights_pars_begin:Ex,lights_toon_fragment:Tx,lights_toon_pars_fragment:Ax,lights_phong_fragment:Rx,lights_phong_pars_fragment:Px,lights_physical_fragment:Cx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Lx,lights_fragment_maps:Dx,lights_fragment_end:Ux,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Bx,map_fragment:zx,map_pars_fragment:Gx,map_particle_fragment:Hx,map_particle_pars_fragment:kx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Wx,morphinstance_vertex:Xx,morphcolor_vertex:qx,morphnormal_vertex:Yx,morphtarget_pars_vertex:$x,morphtarget_vertex:Kx,normal_fragment_begin:jx,normal_fragment_maps:Zx,normal_pars_fragment:Jx,normal_pars_vertex:Qx,normal_vertex:tM,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:nM,clearcoat_normal_fragment_maps:iM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:rM,opaque_fragment:oM,packing:aM,premultiplied_alpha_fragment:lM,project_vertex:cM,dithering_fragment:uM,dithering_pars_fragment:hM,roughnessmap_fragment:dM,roughnessmap_pars_fragment:fM,shadowmap_pars_fragment:pM,shadowmap_pars_vertex:mM,shadowmap_vertex:gM,shadowmask_pars_fragment:_M,skinbase_vertex:vM,skinning_pars_vertex:xM,skinning_vertex:MM,skinnormal_vertex:yM,specularmap_fragment:SM,specularmap_pars_fragment:wM,tonemapping_fragment:EM,tonemapping_pars_fragment:bM,transmission_fragment:TM,transmission_pars_fragment:AM,uv_pars_fragment:RM,uv_pars_vertex:PM,uv_vertex:CM,worldpos_vertex:IM,background_vert:LM,background_frag:DM,backgroundCube_vert:UM,backgroundCube_frag:NM,cube_vert:FM,cube_frag:OM,depth_vert:BM,depth_frag:zM,distanceRGBA_vert:GM,distanceRGBA_frag:HM,equirect_vert:kM,equirect_frag:VM,linedashed_vert:WM,linedashed_frag:XM,meshbasic_vert:qM,meshbasic_frag:YM,meshlambert_vert:$M,meshlambert_frag:KM,meshmatcap_vert:jM,meshmatcap_frag:ZM,meshnormal_vert:JM,meshnormal_frag:QM,meshphong_vert:ty,meshphong_frag:ey,meshphysical_vert:ny,meshphysical_frag:iy,meshtoon_vert:sy,meshtoon_frag:ry,points_vert:oy,points_frag:ay,shadow_vert:ly,shadow_frag:cy,sprite_vert:uy,sprite_frag:hy},Ot={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},mi={basic:{uniforms:_n([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:_n([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:_n([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:_n([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:_n([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:_n([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:_n([Ot.points,Ot.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:_n([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:_n([Ot.common,Ot.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:_n([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:_n([Ot.sprite,Ot.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:_n([Ot.common,Ot.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:_n([Ot.lights,Ot.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};mi.physical={uniforms:_n([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const Xo={r:0,b:0,g:0},Ms=new xi,dy=new Ne;function fy(n,t,e,i,s,r,o){const a=new he(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const w=_(b);w===null?m(a,l):w&&w.isColor&&(m(w,1),S=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===Na)?(h===void 0&&(h=new R(new ti(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:yr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(S.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dy.makeRotationFromEuler(Ms)),h.material.toneMapped=ye.getTransfer(w.colorSpace)!==De,(u!==w||d!==w.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new R(new Oa(2,2),new ri({name:"BackgroundMaterial",uniforms:yr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ye.getTransfer(w.colorSpace)!==De,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,S){b.getRGB(Xo,sp(n)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:p}}function py(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,E,j,V,Z){let rt=!1;const H=u(V,j,E);r!==H&&(r=H,c(r.object)),rt=f(M,V,j,Z),rt&&_(M,V,j,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,w(M,E,j,V),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,E,j){const V=j.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let rt=Z[E.id];rt===void 0&&(rt={},Z[E.id]=rt);let H=rt[V];return H===void 0&&(H=d(l()),rt[V]=H),H}function d(M){const E=[],j=[],V=[];for(let Z=0;Z<e;Z++)E[Z]=0,j[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:j,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,E,j,V){const Z=r.attributes,rt=E.attributes;let H=0;const Q=j.getAttributes();for(const B in Q)if(Q[B].location>=0){const yt=Z[B];let _t=rt[B];if(_t===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),yt===void 0||yt.attribute!==_t||_t&&yt.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function _(M,E,j,V){const Z={},rt=E.attributes;let H=0;const Q=j.getAttributes();for(const B in Q)if(Q[B].location>=0){let yt=rt[B];yt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));const _t={};_t.attribute=yt,yt&&yt.data&&(_t.data=yt.data),Z[B]=_t,H++}r.attributes=Z,r.attributesNum=H,r.index=V}function x(){const M=r.newAttributes;for(let E=0,j=M.length;E<j;E++)M[E]=0}function p(M){m(M,0)}function m(M,E){const j=r.newAttributes,V=r.enabledAttributes,Z=r.attributeDivisors;j[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),Z[M]!==E&&(n.vertexAttribDivisor(M,E),Z[M]=E)}function b(){const M=r.newAttributes,E=r.enabledAttributes;for(let j=0,V=E.length;j<V;j++)E[j]!==M[j]&&(n.disableVertexAttribArray(j),E[j]=0)}function S(M,E,j,V,Z,rt,H){H===!0?n.vertexAttribIPointer(M,E,j,Z,rt):n.vertexAttribPointer(M,E,j,V,Z,rt)}function w(M,E,j,V){x();const Z=V.attributes,rt=j.getAttributes(),H=E.defaultAttributeValues;for(const Q in rt){const B=rt[Q];if(B.location>=0){let gt=Z[Q];if(gt===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),gt!==void 0){const yt=gt.normalized,_t=gt.itemSize,Ct=t.get(gt);if(Ct===void 0)continue;const Gt=Ct.buffer,ot=Ct.type,ft=Ct.bytesPerElement,St=ot===n.INT||ot===n.UNSIGNED_INT||gt.gpuType===cu;if(gt.isInterleavedBufferAttribute){const N=gt.data,ut=N.stride,at=gt.offset;if(N.isInstancedInterleavedBuffer){for(let lt=0;lt<B.locationSize;lt++)m(B.location+lt,N.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let lt=0;lt<B.locationSize;lt++)p(B.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let lt=0;lt<B.locationSize;lt++)S(B.location+lt,_t/B.locationSize,ot,yt,ut*ft,(at+_t/B.locationSize*lt)*ft,St)}else{if(gt.isInstancedBufferAttribute){for(let N=0;N<B.locationSize;N++)m(B.location+N,gt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let N=0;N<B.locationSize;N++)p(B.location+N);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let N=0;N<B.locationSize;N++)S(B.location+N,_t/B.locationSize,ot,yt,_t*ft,_t/B.locationSize*N*ft,St)}}else if(H!==void 0){const yt=H[Q];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(B.location,yt);break;case 3:n.vertexAttrib3fv(B.location,yt);break;case 4:n.vertexAttrib4fv(B.location,yt);break;default:n.vertexAttrib1fv(B.location,yt)}}}}b()}function F(){O();for(const M in i){const E=i[M];for(const j in E){const V=E[j];for(const Z in V)h(V[Z].object),delete V[Z];delete E[j]}delete i[M]}}function I(M){if(i[M.id]===void 0)return;const E=i[M.id];for(const j in E){const V=E[j];for(const Z in V)h(V[Z].object),delete V[Z];delete E[j]}delete i[M.id]}function P(M){for(const E in i){const j=i[E];if(j[M.id]===void 0)continue;const V=j[M.id];for(const Z in V)h(V[Z].object),delete V[Z];delete j[M.id]}}function O(){nt(),o=!0,r!==s&&(r=s,c(r.object))}function nt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:nt,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function my(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<d.length;x++)e.update(_,i,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Qn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ki&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Bi&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:F,maxSamples:I}}function _y(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ws,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,S=b*4;let w=m.clippingState||null;l.value=w,w=h(_,d,S,f);for(let F=0;F!==S;++F)w[F]=e[F];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,w=f;S!==x;++S,w+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function vy(n){let t=new WeakMap;function e(o,a){return a===ro?o.mapping=_r:a===rc&&(o.mapping=vr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ro||a===rc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class lp extends rp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nr=4,Wh=[.125,.215,.35,.446,.526,.582],Ts=20,El=new lp,Xh=new he;let bl=null,Tl=0,Al=0,Rl=!1;const Es=(1+Math.sqrt(5))/2,Zs=1/Es,qh=[new q(-Es,Zs,0),new q(Es,Zs,0),new q(-Zs,0,Es),new q(Zs,0,Es),new q(0,Es,-Zs),new q(0,Es,Zs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bl,Tl,Al),this._renderer.xr.enabled=Rl,t.scissorTest=!1,qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:go,format:Qn,colorSpace:fs,depthBuffer:!1},s=$h(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xy(r)),this._blurMaterial=My(r,t,e)}return s}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,El)}_sceneToCubeUV(t,e,i,s){const a=new Be(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xh),h.toneMapping=ls,h.autoClear=!1;const f=new si({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new R(new ti,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Xh),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;qo(s,b*S,m>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===_r||t.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new R(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;qo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,El)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qh[(s-r-1)%qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new R(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):Ts;p>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ts}`);const m=[];let b=0;for(let P=0;P<Ts;++P){const O=P/x,nt=Math.exp(-O*O/2);m.push(nt),P===0?b+=nt:P<p&&(b+=2*nt)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const w=this._sizeLods[s],F=3*w*(s>S-nr?s-S+nr:0),I=4*(this._cubeSize-w);qo(e,F,I,3*w,2*w),l.setRenderTarget(e),l.render(u,El)}}function xy(n){const t=[],e=[],i=[];let s=n;const r=n-nr+1+Wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-nr?l=Wh[o-n+nr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,x=3,p=2,m=1,b=new Float32Array(x*_*f),S=new Float32Array(p*_*f),w=new Float32Array(m*_*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,O=I>2?0:-1,nt=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];b.set(nt,x*_*I),S.set(d,p*_*I);const M=[I,I,I,I,I,I];w.set(M,m*_*I)}const F=new Vn;F.setAttribute("position",new _i(b,x)),F.setAttribute("uv",new _i(S,p)),F.setAttribute("faceIndex",new _i(w,m)),t.push(F),s>nr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $h(n,t,e){const i=new Ls(n,t,e);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function My(n,t,e){const i=new Float32Array(Ts),s=new q(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xu(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function Kh(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function jh(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function yy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ro||l===rc,h=l===_r||l===vr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Yh(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Yh(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Sy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ca("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function wy(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const x=f[_];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let S=0,w=b.length;S<w;S+=3){const F=b[S+0],I=b[S+1],P=b[S+2];d.push(F,I,I,P,P,F)}}else if(_!==void 0){const b=_.array;x=_.version;for(let S=0,w=b.length/3-1;S<w;S+=3){const F=S+0,I=S+1,P=S+2;d.push(F,I,I,P,P,F)}}else return;const p=new(Zf(d)?ip:np)(d,1);p.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ey(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,d*o,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,i,1)}function u(d,f,_,x){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,_);let m=0;for(let b=0;b<_;b++)m+=f[b];for(let b=0;b<x.length;b++)e.update(m,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function by(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ty(n,t,e){const i=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let M=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),p===!0&&(w=3);let F=a.attributes.position.count*w,I=1;F>t.maxTextureSize&&(I=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const P=new Float32Array(F*I*4*u),O=new Qf(P,F,I,u);O.type=Bi,O.needsUpdate=!0;const nt=w*4;for(let E=0;E<u;E++){const j=m[E],V=b[E],Z=S[E],rt=F*I*4*E;for(let H=0;H<j.count;H++){const Q=H*nt;_===!0&&(s.fromBufferAttribute(j,H),P[rt+Q+0]=s.x,P[rt+Q+1]=s.y,P[rt+Q+2]=s.z,P[rt+Q+3]=0),x===!0&&(s.fromBufferAttribute(V,H),P[rt+Q+4]=s.x,P[rt+Q+5]=s.y,P[rt+Q+6]=s.z,P[rt+Q+7]=0),p===!0&&(s.fromBufferAttribute(Z,H),P[rt+Q+8]=s.x,P[rt+Q+9]=s.y,P[rt+Q+10]=s.z,P[rt+Q+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:O,size:new Bt(F,I)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Ay(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class cp extends Mn{constructor(t,e,i,s,r,o,a,l,c,h=ur){if(h!==ur&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ur&&(i=Is),i===void 0&&h===Mr&&(i=xr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const up=new Mn,Zh=new cp(1,1),hp=new Qf,dp=new dv,fp=new op,Jh=[],Qh=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Er(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Jh[s];if(r===void 0&&(r=new Float32Array(s),Jh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ba(n,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ry(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function Cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function Iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function Ly(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;nd.set(i),n.uniformMatrix2fv(this.addr,!1,nd),tn(e,i)}}function Dy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;ed.set(i),n.uniformMatrix3fv(this.addr,!1,ed),tn(e,i)}}function Uy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;td.set(i),n.uniformMatrix4fv(this.addr,!1,td),tn(e,i)}}function Ny(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function Oy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function By(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function zy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function Hy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function ky(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function Vy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zh.compareFunction=jf,r=Zh):r=up,e.setTexture2D(t||r,s)}function Wy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||dp,s)}function Xy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||fp,s)}function qy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hp,s)}function Yy(n){switch(n){case 5126:return Ry;case 35664:return Py;case 35665:return Cy;case 35666:return Iy;case 35674:return Ly;case 35675:return Dy;case 35676:return Uy;case 5124:case 35670:return Ny;case 35667:case 35671:return Fy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return zy;case 36294:return Gy;case 36295:return Hy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return qy}}function $y(n,t){n.uniform1fv(this.addr,t)}function Ky(n,t){const e=Er(t,this.size,2);n.uniform2fv(this.addr,e)}function jy(n,t){const e=Er(t,this.size,3);n.uniform3fv(this.addr,e)}function Zy(n,t){const e=Er(t,this.size,4);n.uniform4fv(this.addr,e)}function Jy(n,t){const e=Er(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qy(n,t){const e=Er(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tS(n,t){const e=Er(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function eS(n,t){n.uniform1iv(this.addr,t)}function nS(n,t){n.uniform2iv(this.addr,t)}function iS(n,t){n.uniform3iv(this.addr,t)}function sS(n,t){n.uniform4iv(this.addr,t)}function rS(n,t){n.uniform1uiv(this.addr,t)}function oS(n,t){n.uniform2uiv(this.addr,t)}function aS(n,t){n.uniform3uiv(this.addr,t)}function lS(n,t){n.uniform4uiv(this.addr,t)}function cS(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||up,r[o])}function uS(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||dp,r[o])}function hS(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fp,r[o])}function dS(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hp,r[o])}function fS(n){switch(n){case 5126:return $y;case 35664:return Ky;case 35665:return jy;case 35666:return Zy;case 35674:return Jy;case 35675:return Qy;case 35676:return tS;case 5124:case 35670:return eS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return sS;case 5125:return rS;case 36294:return oS;case 36295:return aS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return dS}}class pS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yy(e.type)}}class mS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fS(e.type)}}class gS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function id(n,t){n.seq.push(t),n.map[t.id]=t}function _S(n,t,e){const i=n.name,s=i.length;for(Pl.lastIndex=0;;){const r=Pl.exec(i),o=Pl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){id(e,c===void 0?new pS(a,n,t):new mS(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new gS(a),id(e,u)),e=u}}}class ua{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_S(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function sd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vS=37297;let xS=0;function MS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function yS(n){const t=ye.getPrimaries(ye.workingColorSpace),e=ye.getPrimaries(n);let i;switch(t===e?i="":t===xa&&e===va?i="LinearDisplayP3ToLinearSRGB":t===va&&e===xa&&(i="LinearSRGBToLinearDisplayP3"),n){case fs:case Fa:return[i,"LinearTransferOETF"];case fi:case mu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+MS(n.getShaderSource(t),o)}else return s}function SS(n,t){const e=yS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wS(n,t){let e;switch(t){case w_:e="Linear";break;case E_:e="Reinhard";break;case b_:e="Cineon";break;case T_:e="ACESFilmic";break;case R_:e="AgX";break;case P_:e="Neutral";break;case A_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yo=new q;function ES(){ye.getLuminanceCoefficients(Yo);const n=Yo.x.toFixed(4),t=Yo.y.toFixed(4),e=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function TS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function AS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Or(n){return n!==""}function od(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(n){return n.replace(RS,CS)}const PS=new Map;function CS(n,t){let e=re[t];if(e===void 0){const i=PS.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dc(e)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(n){return n.replace(IS,LS)}function LS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function DS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===n_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function US(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case vr:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function NS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vr:t="ENVMAP_MODE_REFRACTION";break}return t}function FS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Of:t="ENVMAP_BLENDING_MULTIPLY";break;case y_:t="ENVMAP_BLENDING_MIX";break;case S_:t="ENVMAP_BLENDING_ADD";break}return t}function OS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function BS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=DS(e),c=US(e),h=NS(e),u=FS(e),d=OS(e),f=bS(e),_=TS(r),x=s.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Or).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Or).join(`
`),m.length>0&&(m+=`
`)):(p=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),m=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ls?"#define TONE_MAPPING":"",e.toneMapping!==ls?re.tonemapping_pars_fragment:"",e.toneMapping!==ls?wS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,SS("linearToOutputTexel",e.outputColorSpace),ES(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=Dc(o),o=od(o,e),o=ad(o,e),a=Dc(a),a=od(a,e),a=ad(a,e),o=ld(o),a=ld(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=b+p+o,w=b+m+a,F=sd(s,s.VERTEX_SHADER,S),I=sd(s,s.FRAGMENT_SHADER,w);s.attachShader(x,F),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(E){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(F).trim(),Z=s.getShaderInfoLog(I).trim();let rt=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,I);else{const Q=rd(s,F,"vertex"),B=rd(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+j+`
`+Q+`
`+B)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||Z==="")&&(H=!1);H&&(E.diagnostics={runnable:rt,programLog:j,vertexShader:{log:V,prefix:p},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(F),s.deleteShader(I),O=new ua(s,x),nt=AS(s,x)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let nt;this.getAttributes=function(){return nt===void 0&&P(this),nt};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,vS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xS++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=I,this}let zS=0;class GS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new HS(t),e.set(t,i)),i}}class HS{constructor(t){this.id=zS++,this.code=t,this.usedTimes=0}}function kS(n,t,e,i,s,r,o){const a=new tp,l=new GS,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,j,V,Z){const rt=V.fog,H=Z.geometry,Q=M.isMeshStandardMaterial?V.environment:null,B=(M.isMeshStandardMaterial?e:t).get(M.envMap||Q),gt=B&&B.mapping===Na?B.image.height:null,yt=x[M.type];M.precision!==null&&(_=s.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ct=_t!==void 0?_t.length:0;let Gt=0;H.morphAttributes.position!==void 0&&(Gt=1),H.morphAttributes.normal!==void 0&&(Gt=2),H.morphAttributes.color!==void 0&&(Gt=3);let ot,ft,St,N;if(yt){const te=mi[yt];ot=te.vertexShader,ft=te.fragmentShader}else ot=M.vertexShader,ft=M.fragmentShader,l.update(M),St=l.getVertexShaderID(M),N=l.getFragmentShaderID(M);const ut=n.getRenderTarget(),at=Z.isInstancedMesh===!0,lt=Z.isBatchedMesh===!0,Et=!!M.map,tt=!!M.matcap,g=!!B,T=!!M.aoMap,L=!!M.lightMap,D=!!M.bumpMap,U=!!M.normalMap,W=!!M.displacementMap,K=!!M.emissiveMap,y=!!M.metalnessMap,v=!!M.roughnessMap,C=M.anisotropy>0,X=M.clearcoat>0,G=M.dispersion>0,k=M.iridescence>0,ht=M.sheen>0,ct=M.transmission>0,pt=C&&!!M.anisotropyMap,bt=X&&!!M.clearcoatMap,dt=X&&!!M.clearcoatNormalMap,Mt=X&&!!M.clearcoatRoughnessMap,Pt=k&&!!M.iridescenceMap,Lt=k&&!!M.iridescenceThicknessMap,At=ht&&!!M.sheenColorMap,Wt=ht&&!!M.sheenRoughnessMap,It=!!M.specularMap,Xt=!!M.specularColorMap,z=!!M.specularIntensityMap,mt=ct&&!!M.transmissionMap,et=ct&&!!M.thicknessMap,J=!!M.gradientMap,xt=!!M.alphaMap,vt=M.alphaTest>0,zt=!!M.alphaHash,qt=!!M.extensions;let Qt=ls;M.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Qt=n.toneMapping);const Kt={shaderID:yt,shaderType:M.type,shaderName:M.name,vertexShader:ot,fragmentShader:ft,defines:M.defines,customVertexShaderID:St,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:lt,batchingColor:lt&&Z._colorsTexture!==null,instancing:at,instancingColor:at&&Z.instanceColor!==null,instancingMorph:at&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:fs,alphaToCoverage:!!M.alphaToCoverage,map:Et,matcap:tt,envMap:g,envMapMode:g&&B.mapping,envMapCubeUVHeight:gt,aoMap:T,lightMap:L,bumpMap:D,normalMap:U,displacementMap:f&&W,emissiveMap:K,normalMapObjectSpace:U&&M.normalMapType===D_,normalMapTangentSpace:U&&M.normalMapType===Kf,metalnessMap:y,roughnessMap:v,anisotropy:C,anisotropyMap:pt,clearcoat:X,clearcoatMap:bt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Mt,dispersion:G,iridescence:k,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:ht,sheenColorMap:At,sheenRoughnessMap:Wt,specularMap:It,specularColorMap:Xt,specularIntensityMap:z,transmission:ct,transmissionMap:mt,thicknessMap:et,gradientMap:J,opaque:M.transparent===!1&&M.blending===cr&&M.alphaToCoverage===!1,alphaMap:xt,alphaTest:vt,alphaHash:zt,combine:M.combine,mapUv:Et&&p(M.map.channel),aoMapUv:T&&p(M.aoMap.channel),lightMapUv:L&&p(M.lightMap.channel),bumpMapUv:D&&p(M.bumpMap.channel),normalMapUv:U&&p(M.normalMap.channel),displacementMapUv:W&&p(M.displacementMap.channel),emissiveMapUv:K&&p(M.emissiveMap.channel),metalnessMapUv:y&&p(M.metalnessMap.channel),roughnessMapUv:v&&p(M.roughnessMap.channel),anisotropyMapUv:pt&&p(M.anisotropyMap.channel),clearcoatMapUv:bt&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:At&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&p(M.sheenRoughnessMap.channel),specularMapUv:It&&p(M.specularMap.channel),specularColorMapUv:Xt&&p(M.specularColorMap.channel),specularIntensityMapUv:z&&p(M.specularIntensityMap.channel),transmissionMapUv:mt&&p(M.transmissionMap.channel),thicknessMapUv:et&&p(M.thicknessMap.channel),alphaMapUv:xt&&p(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(U||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!H.attributes.uv&&(Et||xt),fog:!!rt,useFog:M.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&ye.getTransfer(M.map.colorSpace)===De,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ue,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&M.extensions.multiDraw===!0||lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function b(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const j in M.defines)E.push(j),E.push(M.defines[j]);return M.isRawShaderMaterial===!1&&(S(E,M),w(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function S(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function w(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),M.push(a.mask)}function F(M){const E=x[M.type];let j;if(E){const V=mi[E];j=bv.clone(V.uniforms)}else j=M.uniforms;return j}function I(M,E){let j;for(let V=0,Z=h.length;V<Z;V++){const rt=h[V];if(rt.cacheKey===E){j=rt,++j.usedTimes;break}}return j===void 0&&(j=new BS(n,E,M,r),h.push(j)),j}function P(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function O(M){l.remove(M)}function nt(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:F,acquireProgram:I,releaseProgram:P,releaseShaderCache:O,programs:h,dispose:nt}}function VS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function WS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ud(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,_,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,_,x,p){const m=o(u,d,f,_,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,_,x,p){const m=o(u,d,f,_,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||WS),i.length>1&&i.sort(d||ud),s.length>1&&s.sort(d||ud)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function XS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new hd,n.set(i,[o])):s>=r.length?(o=new hd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new he};break;case"SpotLight":e={position:new q,direction:new q,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function YS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $S=0;function KS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jS(n){const t=new qS,e=YS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new Ne,o=new Ne;function a(c){let h=0,u=0,d=0;for(let nt=0;nt<9;nt++)i.probe[nt].set(0,0,0);let f=0,_=0,x=0,p=0,m=0,b=0,S=0,w=0,F=0,I=0,P=0;c.sort(KS);for(let nt=0,M=c.length;nt<M;nt++){const E=c[nt],j=E.color,V=E.intensity,Z=E.distance,rt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=j.r*V,u+=j.g*V,d+=j.b*V;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],V);P++}else if(E.isDirectionalLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,B=e.get(E);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=rt,i.directionalShadowMatrix[f]=E.shadow.matrix,b++}i.directional[f]=H,f++}else if(E.isSpotLight){const H=t.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(j).multiplyScalar(V),H.distance=Z,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[x]=H;const Q=E.shadow;if(E.map&&(i.spotLightMap[F]=E.map,F++,Q.updateMatrices(E),E.castShadow&&I++),i.spotLightMatrix[x]=Q.matrix,E.castShadow){const B=e.get(E);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=rt,w++}x++}else if(E.isRectAreaLight){const H=t.get(E);H.color.copy(j).multiplyScalar(V),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=H,p++}else if(E.isPointLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const Q=E.shadow,B=e.get(E);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=rt,i.pointShadowMatrix[_]=E.shadow.matrix,S++}i.point[_]=H,_++}else if(E.isHemisphereLight){const H=t.get(E);H.skyColor.copy(E.color).multiplyScalar(V),H.groundColor.copy(E.groundColor).multiplyScalar(V),i.hemi[m]=H,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ot.LTC_FLOAT_1,i.rectAreaLTC2=Ot.LTC_FLOAT_2):(i.rectAreaLTC1=Ot.LTC_HALF_1,i.rectAreaLTC2=Ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==f||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==p||O.hemiLength!==m||O.numDirectionalShadows!==b||O.numPointShadows!==S||O.numSpotShadows!==w||O.numSpotMaps!==F||O.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+F-I,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,O.directionalLength=f,O.pointLength=_,O.spotLength=x,O.rectAreaLength=p,O.hemiLength=m,O.numDirectionalShadows=b,O.numPointShadows=S,O.numSpotShadows=w,O.numSpotMaps=F,O.numLightProbes=P,i.version=$S++)}function l(c,h){let u=0,d=0,f=0,_=0,x=0;const p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const S=c[m];if(S.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(S.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function dd(n){const t=new jS(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ZS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new dd(n),t.set(s,[a])):r>=o.length?(a=new dd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class JS extends xo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QS extends xo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
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
}`;function nw(n,t,e){let i=new vu;const s=new Bt,r=new Bt,o=new Ae,a=new JS({depthPacking:L_}),l=new QS,c={},h=e.maxTextureSize,u={[us]:bn,[bn]:us,[ue]:ue},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:tw,fragmentShader:ew}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Vn;_.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new R(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff;let m=this.type;this.render=function(I,P,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const nt=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),j=n.state;j.setBlending(as),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=m!==Ni&&this.type===Ni,Z=m===Ni&&this.type!==Ni;for(let rt=0,H=I.length;rt<H;rt++){const Q=I[rt],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const gt=B.getFrameExtents();if(s.multiply(gt),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,B.mapSize.y=r.y)),B.map===null||V===!0||Z===!0){const _t=this.type!==Ni?{minFilter:Bn,magFilter:Bn}:{};B.map!==null&&B.map.dispose(),B.map=new Ls(s.x,s.y,_t),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const yt=B.getViewportCount();for(let _t=0;_t<yt;_t++){const Ct=B.getViewport(_t);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),j.viewport(o),B.updateMatrices(Q,_t),i=B.getFrustum(),w(P,O,B.camera,Q,this.type)}B.isPointLightShadow!==!0&&this.type===Ni&&b(B,O),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(nt,M,E)};function b(I,P){const O=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ls(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,O,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,O,f,x,null)}function S(I,P,O,nt){let M=null;const E=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)M=E;else if(M=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const j=M.uuid,V=P.uuid;let Z=c[j];Z===void 0&&(Z={},c[j]=Z);let rt=Z[V];rt===void 0&&(rt=M.clone(),Z[V]=rt,P.addEventListener("dispose",F)),M=rt}if(M.visible=P.visible,M.wireframe=P.wireframe,nt===Ni?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=n.properties.get(M);j.light=O}return M}function w(I,P,O,nt,M){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===Ni)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const V=t.update(I),Z=I.material;if(Array.isArray(Z)){const rt=V.groups;for(let H=0,Q=rt.length;H<Q;H++){const B=rt[H],gt=Z[B.materialIndex];if(gt&&gt.visible){const yt=S(I,gt,nt,M);I.onBeforeShadow(n,I,P,O,V,yt,B),n.renderBufferDirect(O,null,V,yt,I,B),I.onAfterShadow(n,I,P,O,V,yt,B)}}}else if(Z.visible){const rt=S(I,Z,nt,M);I.onBeforeShadow(n,I,P,O,V,rt,null),n.renderBufferDirect(O,null,V,rt,I,null),I.onAfterShadow(n,I,P,O,V,rt,null)}}const j=I.children;for(let V=0,Z=j.length;V<Z;V++)w(j[V],P,O,nt,M)}function F(I){I.target.removeEventListener("dispose",F);for(const O in c){const nt=c[O],M=I.target.uuid;M in nt&&(nt[M].dispose(),delete nt[M])}}}const iw={[Jl]:Ql,[tc]:ic,[ec]:sc,[gr]:nc,[Ql]:Jl,[ic]:tc,[sc]:ec,[nc]:gr};function sw(n){function t(){let z=!1;const mt=new Ae;let et=null;const J=new Ae(0,0,0,0);return{setMask:function(xt){et!==xt&&!z&&(n.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){z=xt},setClear:function(xt,vt,zt,qt,Qt){Qt===!0&&(xt*=qt,vt*=qt,zt*=qt),mt.set(xt,vt,zt,qt),J.equals(mt)===!1&&(n.clearColor(xt,vt,zt,qt),J.copy(mt))},reset:function(){z=!1,et=null,J.set(-1,0,0,0)}}}function e(){let z=!1,mt=!1,et=null,J=null,xt=null;return{setReversed:function(vt){mt=vt},setTest:function(vt){vt?St(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(vt){et!==vt&&!z&&(n.depthMask(vt),et=vt)},setFunc:function(vt){if(mt&&(vt=iw[vt]),J!==vt){switch(vt){case Jl:n.depthFunc(n.NEVER);break;case Ql:n.depthFunc(n.ALWAYS);break;case tc:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case ec:n.depthFunc(n.EQUAL);break;case nc:n.depthFunc(n.GEQUAL);break;case ic:n.depthFunc(n.GREATER);break;case sc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=vt}},setLocked:function(vt){z=vt},setClear:function(vt){xt!==vt&&(n.clearDepth(vt),xt=vt)},reset:function(){z=!1,et=null,J=null,xt=null}}}function i(){let z=!1,mt=null,et=null,J=null,xt=null,vt=null,zt=null,qt=null,Qt=null;return{setTest:function(Kt){z||(Kt?St(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(Kt){mt!==Kt&&!z&&(n.stencilMask(Kt),mt=Kt)},setFunc:function(Kt,te,le){(et!==Kt||J!==te||xt!==le)&&(n.stencilFunc(Kt,te,le),et=Kt,J=te,xt=le)},setOp:function(Kt,te,le){(vt!==Kt||zt!==te||qt!==le)&&(n.stencilOp(Kt,te,le),vt=Kt,zt=te,qt=le)},setLocked:function(Kt){z=Kt},setClear:function(Kt){Qt!==Kt&&(n.clearStencil(Kt),Qt=Kt)},reset:function(){z=!1,mt=null,et=null,J=null,xt=null,vt=null,zt=null,qt=null,Qt=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,b=null,S=null,w=null,F=null,I=new he(0,0,0),P=0,O=!1,nt=null,M=null,E=null,j=null,V=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,H=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),rt=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),rt=H>=2);let B=null,gt={};const yt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),Ct=new Ae().fromArray(yt),Gt=new Ae().fromArray(_t);function ot(z,mt,et,J){const xt=new Uint8Array(4),vt=n.createTexture();n.bindTexture(z,vt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<et;zt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(mt+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return vt}const ft={};ft[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),St(n.DEPTH_TEST),r.setFunc(gr),L(!1),D(xh),St(n.CULL_FACE),g(as);function St(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function N(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function ut(z,mt){return h[z]!==mt?(n.bindFramebuffer(z,mt),h[z]=mt,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=mt),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function at(z,mt){let et=d,J=!1;if(z){et=u.get(mt),et===void 0&&(et=[],u.set(mt,et));const xt=z.textures;if(et.length!==xt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,zt=xt.length;vt<zt;vt++)et[vt]=n.COLOR_ATTACHMENT0+vt;et.length=xt.length,J=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,J=!0);J&&n.drawBuffers(et)}function lt(z){return f!==z?(n.useProgram(z),f=z,!0):!1}const Et={[bs]:n.FUNC_ADD,[s_]:n.FUNC_SUBTRACT,[r_]:n.FUNC_REVERSE_SUBTRACT};Et[o_]=n.MIN,Et[a_]=n.MAX;const tt={[l_]:n.ZERO,[c_]:n.ONE,[u_]:n.SRC_COLOR,[jl]:n.SRC_ALPHA,[g_]:n.SRC_ALPHA_SATURATE,[p_]:n.DST_COLOR,[d_]:n.DST_ALPHA,[h_]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[m_]:n.ONE_MINUS_DST_COLOR,[f_]:n.ONE_MINUS_DST_ALPHA,[__]:n.CONSTANT_COLOR,[v_]:n.ONE_MINUS_CONSTANT_COLOR,[x_]:n.CONSTANT_ALPHA,[M_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(z,mt,et,J,xt,vt,zt,qt,Qt,Kt){if(z===as){_===!0&&(N(n.BLEND),_=!1);return}if(_===!1&&(St(n.BLEND),_=!0),z!==i_){if(z!==x||Kt!==O){if((p!==bs||S!==bs)&&(n.blendEquation(n.FUNC_ADD),p=bs,S=bs),Kt)switch(z){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mh:n.blendFunc(n.ONE,n.ONE);break;case yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,b=null,w=null,F=null,I.set(0,0,0),P=0,x=z,O=Kt}return}xt=xt||mt,vt=vt||et,zt=zt||J,(mt!==p||xt!==S)&&(n.blendEquationSeparate(Et[mt],Et[xt]),p=mt,S=xt),(et!==m||J!==b||vt!==w||zt!==F)&&(n.blendFuncSeparate(tt[et],tt[J],tt[vt],tt[zt]),m=et,b=J,w=vt,F=zt),(qt.equals(I)===!1||Qt!==P)&&(n.blendColor(qt.r,qt.g,qt.b,Qt),I.copy(qt),P=Qt),x=z,O=!1}function T(z,mt){z.side===ue?N(n.CULL_FACE):St(n.CULL_FACE);let et=z.side===bn;mt&&(et=!et),L(et),z.blending===cr&&z.transparent===!1?g(as):g(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const J=z.stencilWrite;o.setTest(J),J&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),W(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?St(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(z){nt!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),nt=z)}function D(z){z!==t_?(St(n.CULL_FACE),z!==M&&(z===xh?n.cullFace(n.BACK):z===e_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),M=z}function U(z){z!==E&&(rt&&n.lineWidth(z),E=z)}function W(z,mt,et){z?(St(n.POLYGON_OFFSET_FILL),(j!==mt||V!==et)&&(n.polygonOffset(mt,et),j=mt,V=et)):N(n.POLYGON_OFFSET_FILL)}function K(z){z?St(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function y(z){z===void 0&&(z=n.TEXTURE0+Z-1),B!==z&&(n.activeTexture(z),B=z)}function v(z,mt,et){et===void 0&&(B===null?et=n.TEXTURE0+Z-1:et=B);let J=gt[et];J===void 0&&(J={type:void 0,texture:void 0},gt[et]=J),(J.type!==z||J.texture!==mt)&&(B!==et&&(n.activeTexture(et),B=et),n.bindTexture(z,mt||ft[z]),J.type=z,J.texture=mt)}function C(){const z=gt[B];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(z){Ct.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ct.copy(z))}function At(z){Gt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Gt.copy(z))}function Wt(z,mt){let et=l.get(mt);et===void 0&&(et=new WeakMap,l.set(mt,et));let J=et.get(z);J===void 0&&(J=n.getUniformBlockIndex(mt,z.name),et.set(z,J))}function It(z,mt){const J=l.get(mt).get(z);a.get(mt)!==J&&(n.uniformBlockBinding(mt,J,z.__bindingPointIndex),a.set(mt,J))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},B=null,gt={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,p=null,m=null,b=null,S=null,w=null,F=null,I=new he(0,0,0),P=0,O=!1,nt=null,M=null,E=null,j=null,V=null,Ct.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:St,disable:N,bindFramebuffer:ut,drawBuffers:at,useProgram:lt,setBlending:g,setMaterial:T,setFlipSided:L,setCullFace:D,setLineWidth:U,setPolygonOffset:W,setScissorTest:K,activeTexture:y,bindTexture:v,unbindTexture:C,compressedTexImage2D:X,compressedTexImage3D:G,texImage2D:Mt,texImage3D:Pt,updateUBOMapping:Wt,uniformBlockBinding:It,texStorage2D:bt,texStorage3D:dt,texSubImage2D:k,texSubImage3D:ht,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Lt,viewport:At,reset:Xt}}function fd(n,t,e,i){const s=rw(i);switch(e){case kf:return n*t;case Wf:return n*t;case Xf:return n*t*2;case qf:return n*t/s.components*s.byteLength;case du:return n*t/s.components*s.byteLength;case Yf:return n*t*2/s.components*s.byteLength;case fu:return n*t*2/s.components*s.byteLength;case Vf:return n*t*3/s.components*s.byteLength;case Qn:return n*t*4/s.components*s.byteLength;case pu:return n*t*4/s.components*s.byteLength;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lc:case uc:return Math.max(n,16)*Math.max(t,8)/4;case ac:case cc:return Math.max(n,8)*Math.max(t,8)/2;case hc:case dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case la:case Rc:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $f:case Cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ic:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rw(n){switch(n){case ki:case zf:return{byteLength:1,components:1};case oo:case Gf:case go:return{byteLength:2,components:1};case uu:case hu:return{byteLength:2,components:4};case Is:case cu:case Bi:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ow(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return f?new OffscreenCanvas(y,v):lo("canvas")}function x(y,v,C){let X=1;const G=K(y);if((G.width>C||G.height>C)&&(X=C/Math.max(G.width,G.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(X*G.width),ht=Math.floor(X*G.height);u===void 0&&(u=_(k,ht));const ct=v?_(k,ht):u;return ct.width=k,ct.height=ht,ct.getContext("2d").drawImage(y,0,0,k,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+k+"x"+ht+")."),ct}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),y;return y}function p(y){return y.generateMipmaps&&y.minFilter!==Bn&&y.minFilter!==Zn}function m(y){n.generateMipmap(y)}function b(y,v,C,X,G=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=v;if(v===n.RED&&(C===n.FLOAT&&(k=n.R32F),C===n.HALF_FLOAT&&(k=n.R16F),C===n.UNSIGNED_BYTE&&(k=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.R8UI),C===n.UNSIGNED_SHORT&&(k=n.R16UI),C===n.UNSIGNED_INT&&(k=n.R32UI),C===n.BYTE&&(k=n.R8I),C===n.SHORT&&(k=n.R16I),C===n.INT&&(k=n.R32I)),v===n.RG&&(C===n.FLOAT&&(k=n.RG32F),C===n.HALF_FLOAT&&(k=n.RG16F),C===n.UNSIGNED_BYTE&&(k=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RG8UI),C===n.UNSIGNED_SHORT&&(k=n.RG16UI),C===n.UNSIGNED_INT&&(k=n.RG32UI),C===n.BYTE&&(k=n.RG8I),C===n.SHORT&&(k=n.RG16I),C===n.INT&&(k=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGB8UI),C===n.UNSIGNED_SHORT&&(k=n.RGB16UI),C===n.UNSIGNED_INT&&(k=n.RGB32UI),C===n.BYTE&&(k=n.RGB8I),C===n.SHORT&&(k=n.RGB16I),C===n.INT&&(k=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),C===n.UNSIGNED_INT&&(k=n.RGBA32UI),C===n.BYTE&&(k=n.RGBA8I),C===n.SHORT&&(k=n.RGBA16I),C===n.INT&&(k=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),v===n.RGBA){const ht=G?_a:ye.getTransfer(X);C===n.FLOAT&&(k=n.RGBA32F),C===n.HALF_FLOAT&&(k=n.RGBA16F),C===n.UNSIGNED_BYTE&&(k=ht===De?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function S(y,v){let C;return y?v===null||v===Is||v===xr?C=n.DEPTH24_STENCIL8:v===Bi?C=n.DEPTH32F_STENCIL8:v===oo&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Is||v===xr?C=n.DEPTH_COMPONENT24:v===Bi?C=n.DEPTH_COMPONENT32F:v===oo&&(C=n.DEPTH_COMPONENT16),C}function w(y,v){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Bn&&y.minFilter!==Zn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function F(y){const v=y.target;v.removeEventListener("dispose",F),P(v),v.isVideoTexture&&h.delete(v)}function I(y){const v=y.target;v.removeEventListener("dispose",I),nt(v)}function P(y){const v=i.get(y);if(v.__webglInit===void 0)return;const C=y.source,X=d.get(C);if(X){const G=X[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&O(y),Object.keys(X).length===0&&d.delete(C)}i.remove(y)}function O(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const C=y.source,X=d.get(C);delete X[v.__cacheKey],o.memory.textures--}function nt(y){const v=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let G=0;G<v.__webglFramebuffer[X].length;G++)n.deleteFramebuffer(v.__webglFramebuffer[X][G]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=y.textures;for(let X=0,G=C.length;X<G;X++){const k=i.get(C[X]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(C[X])}i.remove(y)}let M=0;function E(){M=0}function j(){const y=M;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),M+=1,y}function V(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function Z(y,v){const C=i.get(y);if(y.isVideoTexture&&U(y),y.isRenderTargetTexture===!1&&y.version>0&&C.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(C,y,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function rt(y,v){const C=i.get(y);if(y.version>0&&C.__version!==y.version){Gt(C,y,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function H(y,v){const C=i.get(y);if(y.version>0&&C.__version!==y.version){Gt(C,y,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function Q(y,v){const C=i.get(y);if(y.version>0&&C.__version!==y.version){ot(C,y,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const B={[Ve]:n.REPEAT,[As]:n.CLAMP_TO_EDGE,[oc]:n.MIRRORED_REPEAT},gt={[Bn]:n.NEAREST,[C_]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[nl]:n.LINEAR_MIPMAP_NEAREST,[Rs]:n.LINEAR_MIPMAP_LINEAR},yt={[U_]:n.NEVER,[G_]:n.ALWAYS,[N_]:n.LESS,[jf]:n.LEQUAL,[F_]:n.EQUAL,[z_]:n.GEQUAL,[O_]:n.GREATER,[B_]:n.NOTEQUAL};function _t(y,v){if(v.type===Bi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Zn||v.magFilter===nl||v.magFilter===Ao||v.magFilter===Rs||v.minFilter===Zn||v.minFilter===nl||v.minFilter===Ao||v.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,B[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,B[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,B[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,gt[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bn||v.minFilter!==Ao&&v.minFilter!==Rs||v.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ct(y,v){let C=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",F));const X=v.source;let G=d.get(X);G===void 0&&(G={},d.set(X,G));const k=V(v);if(k!==y.__cacheKey){G[k]===void 0&&(G[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),G[k].usedTimes++;const ht=G[y.__cacheKey];ht!==void 0&&(G[y.__cacheKey].usedTimes--,ht.usedTimes===0&&O(v)),y.__cacheKey=k,y.__webglTexture=G[k].texture}return C}function Gt(y,v,C){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const G=Ct(y,v),k=v.source;e.bindTexture(X,y.__webglTexture,n.TEXTURE0+C);const ht=i.get(k);if(k.version!==ht.__version||G===!0){e.activeTexture(n.TEXTURE0+C);const ct=ye.getPrimaries(ye.workingColorSpace),pt=v.colorSpace===os?null:ye.getPrimaries(v.colorSpace),bt=v.colorSpace===os||ct===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let dt=x(v.image,!1,s.maxTextureSize);dt=W(v,dt);const Mt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type);let Lt=b(v.internalFormat,Mt,Pt,v.colorSpace,v.isVideoTexture);_t(X,v);let At;const Wt=v.mipmaps,It=v.isVideoTexture!==!0,Xt=ht.__version===void 0||G===!0,z=k.dataReady,mt=w(v,dt);if(v.isDepthTexture)Lt=S(v.format===Mr,v.type),Xt&&(It?e.texStorage2D(n.TEXTURE_2D,1,Lt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Mt,Pt,null));else if(v.isDataTexture)if(Wt.length>0){It&&Xt&&e.texStorage2D(n.TEXTURE_2D,mt,Lt,Wt[0].width,Wt[0].height);for(let et=0,J=Wt.length;et<J;et++)At=Wt[et],It?z&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,At.width,At.height,Mt,Pt,At.data):e.texImage2D(n.TEXTURE_2D,et,Lt,At.width,At.height,0,Mt,Pt,At.data);v.generateMipmaps=!1}else It?(Xt&&e.texStorage2D(n.TEXTURE_2D,mt,Lt,dt.width,dt.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,Mt,Pt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Mt,Pt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){It&&Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Lt,Wt[0].width,Wt[0].height,dt.depth);for(let et=0,J=Wt.length;et<J;et++)if(At=Wt[et],v.format!==Qn)if(Mt!==null)if(It){if(z)if(v.layerUpdates.size>0){const xt=fd(At.width,At.height,v.format,v.type);for(const vt of v.layerUpdates){const zt=At.data.subarray(vt*xt/At.data.BYTES_PER_ELEMENT,(vt+1)*xt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,vt,At.width,At.height,1,Mt,zt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,At.width,At.height,dt.depth,Mt,At.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Lt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,At.width,At.height,dt.depth,Mt,Pt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Lt,At.width,At.height,dt.depth,0,Mt,Pt,At.data)}else{It&&Xt&&e.texStorage2D(n.TEXTURE_2D,mt,Lt,Wt[0].width,Wt[0].height);for(let et=0,J=Wt.length;et<J;et++)At=Wt[et],v.format!==Qn?Mt!==null?It?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,At.width,At.height,Mt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Lt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?z&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,At.width,At.height,Mt,Pt,At.data):e.texImage2D(n.TEXTURE_2D,et,Lt,At.width,At.height,0,Mt,Pt,At.data)}else if(v.isDataArrayTexture)if(It){if(Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Lt,dt.width,dt.height,dt.depth),z)if(v.layerUpdates.size>0){const et=fd(dt.width,dt.height,v.format,v.type);for(const J of v.layerUpdates){const xt=dt.data.subarray(J*et/dt.data.BYTES_PER_ELEMENT,(J+1)*et/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,dt.width,dt.height,1,Mt,Pt,xt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Pt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,dt.width,dt.height,dt.depth,0,Mt,Pt,dt.data);else if(v.isData3DTexture)It?(Xt&&e.texStorage3D(n.TEXTURE_3D,mt,Lt,dt.width,dt.height,dt.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Pt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,dt.width,dt.height,dt.depth,0,Mt,Pt,dt.data);else if(v.isFramebufferTexture){if(Xt)if(It)e.texStorage2D(n.TEXTURE_2D,mt,Lt,dt.width,dt.height);else{let et=dt.width,J=dt.height;for(let xt=0;xt<mt;xt++)e.texImage2D(n.TEXTURE_2D,xt,Lt,et,J,0,Mt,Pt,null),et>>=1,J>>=1}}else if(Wt.length>0){if(It&&Xt){const et=K(Wt[0]);e.texStorage2D(n.TEXTURE_2D,mt,Lt,et.width,et.height)}for(let et=0,J=Wt.length;et<J;et++)At=Wt[et],It?z&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Mt,Pt,At):e.texImage2D(n.TEXTURE_2D,et,Lt,Mt,Pt,At);v.generateMipmaps=!1}else if(It){if(Xt){const et=K(dt);e.texStorage2D(n.TEXTURE_2D,mt,Lt,et.width,et.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Pt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,Mt,Pt,dt);p(v)&&m(X),ht.__version=k.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ot(y,v,C){if(v.image.length!==6)return;const X=Ct(y,v),G=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+C);const k=i.get(G);if(G.version!==k.__version||X===!0){e.activeTexture(n.TEXTURE0+C);const ht=ye.getPrimaries(ye.workingColorSpace),ct=v.colorSpace===os?null:ye.getPrimaries(v.colorSpace),pt=v.colorSpace===os||ht===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const bt=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let J=0;J<6;J++)!bt&&!dt?Mt[J]=x(v.image[J],!0,s.maxCubemapSize):Mt[J]=dt?v.image[J].image:v.image[J],Mt[J]=W(v,Mt[J]);const Pt=Mt[0],Lt=r.convert(v.format,v.colorSpace),At=r.convert(v.type),Wt=b(v.internalFormat,Lt,At,v.colorSpace),It=v.isVideoTexture!==!0,Xt=k.__version===void 0||X===!0,z=G.dataReady;let mt=w(v,Pt);_t(n.TEXTURE_CUBE_MAP,v);let et;if(bt){It&&Xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Wt,Pt.width,Pt.height);for(let J=0;J<6;J++){et=Mt[J].mipmaps;for(let xt=0;xt<et.length;xt++){const vt=et[xt];v.format!==Qn?Lt!==null?It?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,0,0,vt.width,vt.height,Lt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,Wt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,0,0,vt.width,vt.height,Lt,At,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,Wt,vt.width,vt.height,0,Lt,At,vt.data)}}}else{if(et=v.mipmaps,It&&Xt){et.length>0&&mt++;const J=K(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(dt){It?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Mt[J].width,Mt[J].height,Lt,At,Mt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Mt[J].width,Mt[J].height,0,Lt,At,Mt[J].data);for(let xt=0;xt<et.length;xt++){const zt=et[xt].image[J].image;It?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,0,0,zt.width,zt.height,Lt,At,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,Wt,zt.width,zt.height,0,Lt,At,zt.data)}}else{It?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,At,Mt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Lt,At,Mt[J]);for(let xt=0;xt<et.length;xt++){const vt=et[xt];It?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,0,0,Lt,At,vt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,Wt,Lt,At,vt.image[J])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),k.__version=G.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ft(y,v,C,X,G,k){const ht=r.convert(C.format,C.colorSpace),ct=r.convert(C.type),pt=b(C.internalFormat,ht,ct,C.colorSpace);if(!i.get(v).__hasExternalTextures){const dt=Math.max(1,v.width>>k),Mt=Math.max(1,v.height>>k);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?e.texImage3D(G,k,pt,dt,Mt,v.depth,0,ht,ct,null):e.texImage2D(G,k,pt,dt,Mt,0,ht,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),D(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,G,i.get(C).__webglTexture,0,L(v)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,G,i.get(C).__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(y,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const X=v.depthTexture,G=X&&X.isDepthTexture?X.type:null,k=S(v.stencilBuffer,G),ht=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=L(v);D(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,k,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,k,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,y)}else{const X=v.textures;for(let G=0;G<X.length;G++){const k=X[G],ht=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),pt=b(k.internalFormat,ht,ct,k.colorSpace),bt=L(v);C&&D(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,pt,v.width,v.height):D(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const X=i.get(v.depthTexture).__webglTexture,G=L(v);if(v.depthTexture.format===ur)D(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(v.depthTexture.format===Mr)D(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ut(y){const v=i.get(y),C=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",G)};X.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=X}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");N(v.__webglFramebuffer,y)}else if(C){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),St(v.__webglDepthbuffer[X],y,!1);else{const G=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),St(v.__webglDepthbuffer,y,!1);else{const X=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,G)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(y,v,C){const X=i.get(y);v!==void 0&&ft(X.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&ut(y)}function lt(y){const v=y.texture,C=i.get(y),X=i.get(v);y.addEventListener("dispose",I);const G=y.textures,k=y.isWebGLCubeRenderTarget===!0,ht=G.length>1;if(ht||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,o.memory.textures++),k){C.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ct]=[];for(let pt=0;pt<v.mipmaps.length;pt++)C.__webglFramebuffer[ct][pt]=n.createFramebuffer()}else C.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)C.__webglFramebuffer[ct]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ht)for(let ct=0,pt=G.length;ct<pt;ct++){const bt=i.get(G[ct]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&D(y)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ct=0;ct<G.length;ct++){const pt=G[ct];C.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ct]);const bt=r.convert(pt.format,pt.colorSpace),dt=r.convert(pt.type),Mt=b(pt.internalFormat,bt,dt,pt.colorSpace,y.isXRRenderTarget===!0),Pt=L(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,Mt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,C.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),St(C.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),_t(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[ct][pt],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else ft(C.__webglFramebuffer[ct],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ct=0,pt=G.length;ct<pt;ct++){const bt=G[ct],dt=i.get(bt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),_t(n.TEXTURE_2D,bt),ft(C.__webglFramebuffer,y,bt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),p(bt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ct=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,X.__webglTexture),_t(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[pt],y,v,n.COLOR_ATTACHMENT0,ct,pt);else ft(C.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,ct,0);p(v)&&m(ct),e.unbindTexture()}y.depthBuffer&&ut(y)}function Et(y){const v=y.textures;for(let C=0,X=v.length;C<X;C++){const G=v[C];if(p(G)){const k=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ht=i.get(G).__webglTexture;e.bindTexture(k,ht),m(k),e.unbindTexture()}}}const tt=[],g=[];function T(y){if(y.samples>0){if(D(y)===!1){const v=y.textures,C=y.width,X=y.height;let G=n.COLOR_BUFFER_BIT;const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(y),ct=v.length>1;if(ct)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const bt=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,C,X,0,0,C,X,G,n.NEAREST),l===!0&&(tt.length=0,g.length=0,tt.push(n.COLOR_ATTACHMENT0+pt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(tt.push(k),g.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const bt=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(y){return Math.min(s.maxSamples,y.samples)}function D(y){const v=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(y){const v=o.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function W(y,v){const C=y.colorSpace,X=y.format,G=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||C!==fs&&C!==os&&(ye.getTransfer(C)===De?(X!==Qn||G!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function K(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=E,this.setTexture2D=Z,this.setTexture2DArray=rt,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=D}function aw(n,t){function e(i,s=os){let r;const o=ye.getTransfer(s);if(i===ki)return n.UNSIGNED_BYTE;if(i===uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.BYTE;if(i===Gf)return n.SHORT;if(i===oo)return n.UNSIGNED_SHORT;if(i===cu)return n.INT;if(i===Is)return n.UNSIGNED_INT;if(i===Bi)return n.FLOAT;if(i===go)return n.HALF_FLOAT;if(i===kf)return n.ALPHA;if(i===Vf)return n.RGB;if(i===Qn)return n.RGBA;if(i===Wf)return n.LUMINANCE;if(i===Xf)return n.LUMINANCE_ALPHA;if(i===ur)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===qf)return n.RED;if(i===du)return n.RED_INTEGER;if(i===Yf)return n.RG;if(i===fu)return n.RG_INTEGER;if(i===pu)return n.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ac||i===lc||i===cc||i===uc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hc||i===dc||i===fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hc||i===dc)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===Mc||i===yc||i===Sc||i===wc||i===Ec||i===bc||i===Tc||i===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_c)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===Rc||i===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===la)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$f||i===Cc||i===Ic||i===Lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===la)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class lw extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cw={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hw=`
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

}`;class dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ri({vertexShader:uw,fragmentShader:hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new Oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fw extends wr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const x=new dw,p=e.getContextAttributes();let m=null,b=null;const S=[],w=[],F=new Bt;let I=null;const P=new Be;P.layers.enable(1),P.viewport=new Ae;const O=new Be;O.layers.enable(2),O.viewport=new Ae;const nt=[P,O],M=new lw;M.layers.enable(1),M.layers.enable(2);let E=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let ft=S[ot];return ft===void 0&&(ft=new Cl,S[ot]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(ot){let ft=S[ot];return ft===void 0&&(ft=new Cl,S[ot]=ft),ft.getGripSpace()},this.getHand=function(ot){let ft=S[ot];return ft===void 0&&(ft=new Cl,S[ot]=ft),ft.getHandSpace()};function V(ot){const ft=w.indexOf(ot.inputSource);if(ft===-1)return;const St=S[ft];St!==void 0&&(St.update(ot.inputSource,ot.frame,c||o),St.dispatchEvent({type:ot.type,data:ot.inputSource}))}function Z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",rt);for(let ot=0;ot<S.length;ot++){const ft=w[ot];ft!==null&&(w[ot]=null,S[ot].disconnect(ft))}E=null,j=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,b=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",rt),p.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const ft={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ls(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ft=null,St=null,N=null;p.depth&&(N=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=p.stencil?Mr:ur,St=p.stencil?xr:Is);const ut={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ls(d.textureWidth,d.textureHeight,{format:Qn,type:ki,depthTexture:new cp(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function rt(ot){for(let ft=0;ft<ot.removed.length;ft++){const St=ot.removed[ft],N=w.indexOf(St);N>=0&&(w[N]=null,S[N].disconnect(St))}for(let ft=0;ft<ot.added.length;ft++){const St=ot.added[ft];let N=w.indexOf(St);if(N===-1){for(let at=0;at<S.length;at++)if(at>=w.length){w.push(St),N=at;break}else if(w[at]===null){w[at]=St,N=at;break}if(N===-1)break}const ut=S[N];ut&&ut.connect(St)}}const H=new q,Q=new q;function B(ot,ft,St){H.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(St.matrixWorld);const N=H.distanceTo(Q),ut=ft.projectionMatrix.elements,at=St.projectionMatrix.elements,lt=ut[14]/(ut[10]-1),Et=ut[14]/(ut[10]+1),tt=(ut[9]+1)/ut[5],g=(ut[9]-1)/ut[5],T=(ut[8]-1)/ut[0],L=(at[8]+1)/at[0],D=lt*T,U=lt*L,W=N/(-T+L),K=W*-T;if(ft.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(K),ot.translateZ(W),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),ut[10]===-1)ot.projectionMatrix.copy(ft.projectionMatrix),ot.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const y=lt+W,v=Et+W,C=D-K,X=U+(N-K),G=tt*Et/v*y,k=g*Et/v*y;ot.projectionMatrix.makePerspective(C,X,G,k,y,v),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function gt(ot,ft){ft===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(ft.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let ft=ot.near,St=ot.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(St=x.depthFar)),M.near=O.near=P.near=ft,M.far=O.far=P.far=St,(E!==M.near||j!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,j=M.far);const N=ot.parent,ut=M.cameras;gt(M,N);for(let at=0;at<ut.length;at++)gt(ut[at],N);ut.length===2?B(M,P,O):M.projectionMatrix.copy(P.projectionMatrix),yt(ot,M,N)};function yt(ot,ft,St){St===null?ot.matrix.copy(ft.matrixWorld):(ot.matrix.copy(St.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(ft.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(ft.projectionMatrix),ot.projectionMatrixInverse.copy(ft.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=ao*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ot){l=ot,d!==null&&(d.fixedFoveation=ot),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ot)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let _t=null;function Ct(ot,ft){if(h=ft.getViewerPose(c||o),_=ft,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let N=!1;St.length!==M.cameras.length&&(M.cameras.length=0,N=!0);for(let at=0;at<St.length;at++){const lt=St[at];let Et=null;if(f!==null)Et=f.getViewport(lt);else{const g=u.getViewSubImage(d,lt);Et=g.viewport,at===0&&(t.setRenderTargetTextures(b,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(b))}let tt=nt[at];tt===void 0&&(tt=new Be,tt.layers.enable(at),tt.viewport=new Ae,nt[at]=tt),tt.matrix.fromArray(lt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(lt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Et.x,Et.y,Et.width,Et.height),at===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),N===!0&&M.cameras.push(tt)}const ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const at=u.getDepthInformation(St[0]);at&&at.isValid&&at.texture&&x.init(t,at,s.renderState)}}for(let St=0;St<S.length;St++){const N=w[St],ut=S[St];N!==null&&ut!==void 0&&ut.update(N,ft,c||o)}_t&&_t(ot,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const Gt=new ap;Gt.setAnimationLoop(Ct),this.setAnimationLoop=function(ot){_t=ot},this.dispose=function(){}}}const ys=new xi,pw=new Ne;function mw(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,sp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===bn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===bn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),S=b.envMap,w=b.envMapRotation;S&&(p.envMap.value=S,ys.copy(w),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),p.envMapRotation.value.setFromMatrix4(pw.makeRotationFromEuler(ys)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const w=S.program;i.uniformBlockBinding(b,w)}function c(b,S){let w=s[b.id];w===void 0&&(_(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",p));const F=S.program;i.updateUBOMapping(b,F);const I=t.render.frame;r[b.id]!==I&&(d(b),r[b.id]=I)}function h(b){const S=u();b.__bindingPointIndex=S;const w=n.createBuffer(),F=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,F,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],w=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let I=0,P=w.length;I<P;I++){const O=Array.isArray(w[I])?w[I]:[w[I]];for(let nt=0,M=O.length;nt<M;nt++){const E=O[nt];if(f(E,I,nt,F)===!0){const j=E.__offset,V=Array.isArray(E.value)?E.value:[E.value];let Z=0;for(let rt=0;rt<V.length;rt++){const H=V[rt],Q=x(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,j+Z,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,Z),Z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,S,w,F){const I=b.value,P=S+"_"+w;if(F[P]===void 0)return typeof I=="number"||typeof I=="boolean"?F[P]=I:F[P]=I.clone(),!0;{const O=F[P];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return F[P]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function _(b){const S=b.uniforms;let w=0;const F=16;for(let P=0,O=S.length;P<O;P++){const nt=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,E=nt.length;M<E;M++){const j=nt[M],V=Array.isArray(j.value)?j.value:[j.value];for(let Z=0,rt=V.length;Z<rt;Z++){const H=V[Z],Q=x(H),B=w%F,gt=B%Q.boundary,yt=B+gt;w+=gt,yt!==0&&F-yt<Q.storage&&(w+=F-yt),j.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=Q.storage}}}const I=w%F;return I>0&&(w+=F-I),b.__size=w,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class oi{constructor(t={}){const{canvas:e=iv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=ls,this.toneMappingExposure=1;const S=this;let w=!1,F=0,I=0,P=null,O=-1,nt=null;const M=new Ae,E=new Ae;let j=null;const V=new he(0);let Z=0,rt=e.width,H=e.height,Q=1,B=null,gt=null;const yt=new Ae(0,0,rt,H),_t=new Ae(0,0,rt,H);let Ct=!1;const Gt=new vu;let ot=!1,ft=!1;const St=new Ne,N=new Ne,ut=new q,at=new Ae,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function tt(){return P===null?Q:1}let g=i;function T(A,Y){return e.getContext(A,Y)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lu}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),g===null){const Y="webgl2";if(g=T(Y,A),g===null)throw T(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,D,U,W,K,y,v,C,X,G,k,ht,ct,pt,bt,dt,Mt,Pt,Lt,At,Wt,It,Xt,z;function mt(){L=new Sy(g),L.init(),It=new aw(g,L),D=new gy(g,L,t,It),U=new sw(g),D.reverseDepthBuffer&&U.buffers.depth.setReversed(!0),W=new by(g),K=new VS,y=new ow(g,L,U,K,D,It,W),v=new vy(S),C=new yy(S),X=new Lv(g),Xt=new py(g,X),G=new wy(g,X,W,Xt),k=new Ay(g,G,X,W),Lt=new Ty(g,D,y),dt=new _y(K),ht=new kS(S,v,C,L,D,Xt,dt),ct=new mw(S,K),pt=new XS,bt=new ZS(L),Pt=new fy(S,v,C,U,k,d,l),Mt=new nw(S,k,D),z=new gw(g,W,D,U),At=new my(g,L,W),Wt=new Ey(g,L,W),W.programs=ht.programs,S.capabilities=D,S.extensions=L,S.properties=K,S.renderLists=pt,S.shadowMap=Mt,S.state=U,S.info=W}mt();const et=new fw(S,g);this.xr=et,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(rt,H,!1))},this.getSize=function(A){return A.set(rt,H)},this.setSize=function(A,Y,st=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=A,H=Y,e.width=Math.floor(A*Q),e.height=Math.floor(Y*Q),st===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(rt*Q,H*Q).floor()},this.setDrawingBufferSize=function(A,Y,st){rt=A,H=Y,Q=st,e.width=Math.floor(A*st),e.height=Math.floor(Y*st),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,Y,st,it){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,Y,st,it),U.viewport(M.copy(yt).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,Y,st,it){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,Y,st,it),U.scissor(E.copy(_t).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(A){U.setScissorTest(Ct=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(A=!0,Y=!0,st=!0){let it=0;if(A){let $=!1;if(P!==null){const Tt=P.texture.format;$=Tt===pu||Tt===fu||Tt===du}if($){const Tt=P.texture.type,Dt=Tt===ki||Tt===Is||Tt===oo||Tt===xr||Tt===uu||Tt===hu,Ht=Pt.getClearColor(),kt=Pt.getClearAlpha(),jt=Ht.r,Jt=Ht.g,Vt=Ht.b;Dt?(f[0]=jt,f[1]=Jt,f[2]=Vt,f[3]=kt,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=jt,_[1]=Jt,_[2]=Vt,_[3]=kt,g.clearBufferiv(g.COLOR,0,_))}else it|=g.COLOR_BUFFER_BIT}Y&&(it|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),st&&(it|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),pt.dispose(),bt.dispose(),K.dispose(),v.dispose(),C.dispose(),k.dispose(),Xt.dispose(),z.dispose(),ht.dispose(),et.dispose(),et.removeEventListener("sessionstart",pe),et.removeEventListener("sessionend",we),me.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=W.autoReset,Y=Mt.enabled,st=Mt.autoUpdate,it=Mt.needsUpdate,$=Mt.type;mt(),W.autoReset=A,Mt.enabled=Y,Mt.autoUpdate=st,Mt.needsUpdate=it,Mt.type=$}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zt(A){const Y=A.target;Y.removeEventListener("dispose",zt),qt(Y)}function qt(A){Qt(A),K.remove(A)}function Qt(A){const Y=K.get(A).programs;Y!==void 0&&(Y.forEach(function(st){ht.releaseProgram(st)}),A.isShaderMaterial&&ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,st,it,$,Tt){Y===null&&(Y=lt);const Dt=$.isMesh&&$.matrixWorld.determinant()<0,Ht=We(A,Y,st,it,$);U.setMaterial(it,Dt);let kt=st.index,jt=1;if(it.wireframe===!0){if(kt=G.getWireframeAttribute(st),kt===void 0)return;jt=2}const Jt=st.drawRange,Vt=st.attributes.position;let ie=Jt.start*jt,ge=(Jt.start+Jt.count)*jt;Tt!==null&&(ie=Math.max(ie,Tt.start*jt),ge=Math.min(ge,(Tt.start+Tt.count)*jt)),kt!==null?(ie=Math.max(ie,0),ge=Math.min(ge,kt.count)):Vt!=null&&(ie=Math.max(ie,0),ge=Math.min(ge,Vt.count));const _e=ge-ie;if(_e<0||_e===1/0)return;Xt.setup($,it,Ht,st,kt);let Je,de=At;if(kt!==null&&(Je=X.get(kt),de=Wt,de.setIndex(Je)),$.isMesh)it.wireframe===!0?(U.setLineWidth(it.wireframeLinewidth*tt()),de.setMode(g.LINES)):de.setMode(g.TRIANGLES);else if($.isLine){let $t=it.linewidth;$t===void 0&&($t=1),U.setLineWidth($t*tt()),$.isLineSegments?de.setMode(g.LINES):$.isLineLoop?de.setMode(g.LINE_LOOP):de.setMode(g.LINE_STRIP)}else $.isPoints?de.setMode(g.POINTS):$.isSprite&&de.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)de.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))de.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $t=$._multiDrawStarts,Xe=$._multiDrawCounts,Rt=$._multiDrawCount,Ie=kt?X.get(kt).bytesPerElement:1,Ue=K.get(it).currentProgram.getUniforms();for(let ve=0;ve<Rt;ve++)Ue.setValue(g,"_gl_DrawID",ve),de.render($t[ve]/Ie,Xe[ve])}else if($.isInstancedMesh)de.renderInstances(ie,_e,$.count);else if(st.isInstancedBufferGeometry){const $t=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Xe=Math.min(st.instanceCount,$t);de.renderInstances(ie,_e,Xe)}else de.render(ie,_e)};function Kt(A,Y,st){A.transparent===!0&&A.side===ue&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,fe(A,Y,st),A.side=us,A.needsUpdate=!0,fe(A,Y,st),A.side=ue):fe(A,Y,st)}this.compile=function(A,Y,st=null){st===null&&(st=A),p=bt.get(st),p.init(Y),b.push(p),st.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),A!==st&&A.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const it=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Tt=$.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Ht=Tt[Dt];Kt(Ht,st,$),it.add(Ht)}else Kt(Tt,st,$),it.add(Tt)}),b.pop(),p=null,it},this.compileAsync=function(A,Y,st=null){const it=this.compile(A,Y,st);return new Promise($=>{function Tt(){if(it.forEach(function(Dt){K.get(Dt).currentProgram.isReady()&&it.delete(Dt)}),it.size===0){$(A);return}setTimeout(Tt,10)}L.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let te=null;function le(A){te&&te(A)}function pe(){me.stop()}function we(){me.start()}const me=new ap;me.setAnimationLoop(le),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(A){te=A,et.setAnimationLoop(A),A===null?me.stop():me.start()},et.addEventListener("sessionstart",pe),et.addEventListener("sessionend",we),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(Y),Y=et.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,Y,P),p=bt.get(A,b.length),p.init(Y),b.push(p),N.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Gt.setFromProjectionMatrix(N),ft=this.localClippingEnabled,ot=dt.init(this.clippingPlanes,ft),x=pt.get(A,m.length),x.init(),m.push(x),et.enabled===!0&&et.isPresenting===!0){const Tt=S.xr.getDepthSensingMesh();Tt!==null&&Ce(Tt,Y,-1/0,S.sortObjects)}Ce(A,Y,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(B,gt),Et=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Et&&Pt.addToRenderList(x,A),this.info.render.frame++,ot===!0&&dt.beginShadows();const st=p.state.shadowsArray;Mt.render(st,A,Y),ot===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=x.opaque,$=x.transmissive;if(p.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if($.length>0)for(let Dt=0,Ht=Tt.length;Dt<Ht;Dt++){const kt=Tt[Dt];Fe(it,$,A,kt)}Et&&Pt.render(A);for(let Dt=0,Ht=Tt.length;Dt<Ht;Dt++){const kt=Tt[Dt];Ee(x,A,kt,kt.viewport)}}else $.length>0&&Fe(it,$,A,Y),Et&&Pt.render(A),Ee(x,A,Y);P!==null&&(y.updateMultisampleRenderTarget(P),y.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(S,A,Y),Xt.resetDefaultState(),O=-1,nt=null,b.pop(),b.length>0?(p=b[b.length-1],ot===!0&&dt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Ce(A,Y,st,it){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Gt.intersectsSprite(A)){it&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Dt=k.update(A),Ht=A.material;Ht.visible&&x.push(A,Dt,Ht,st,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Gt.intersectsObject(A))){const Dt=k.update(A),Ht=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),at.copy(Dt.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Ht)){const kt=Dt.groups;for(let jt=0,Jt=kt.length;jt<Jt;jt++){const Vt=kt[jt],ie=Ht[Vt.materialIndex];ie&&ie.visible&&x.push(A,Dt,ie,st,at.z,Vt)}}else Ht.visible&&x.push(A,Dt,Ht,st,at.z,null)}}const Tt=A.children;for(let Dt=0,Ht=Tt.length;Dt<Ht;Dt++)Ce(Tt[Dt],Y,st,it)}function Ee(A,Y,st,it){const $=A.opaque,Tt=A.transmissive,Dt=A.transparent;p.setupLightsView(st),ot===!0&&dt.setGlobalState(S.clippingPlanes,st),it&&U.viewport(M.copy(it)),$.length>0&&Re($,Y,st),Tt.length>0&&Re(Tt,Y,st),Dt.length>0&&Re(Dt,Y,st),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Fe(A,Y,st,it){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[it.id]===void 0&&(p.state.transmissionRenderTarget[it.id]=new Ls(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?go:ki,minFilter:Rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));const Tt=p.state.transmissionRenderTarget[it.id],Dt=it.viewport||M;Tt.setSize(Dt.z,Dt.w);const Ht=S.getRenderTarget();S.setRenderTarget(Tt),S.getClearColor(V),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),Et&&Pt.render(st);const kt=S.toneMapping;S.toneMapping=ls;const jt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),p.setupLightsView(it),ot===!0&&dt.setGlobalState(S.clippingPlanes,it),Re(A,st,it),y.updateMultisampleRenderTarget(Tt),y.updateRenderTargetMipmap(Tt),L.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Vt=0,ie=Y.length;Vt<ie;Vt++){const ge=Y[Vt],_e=ge.object,Je=ge.geometry,de=ge.material,$t=ge.group;if(de.side===ue&&_e.layers.test(it.layers)){const Xe=de.side;de.side=bn,de.needsUpdate=!0,Nt(_e,st,it,Je,de,$t),de.side=Xe,de.needsUpdate=!0,Jt=!0}}Jt===!0&&(y.updateMultisampleRenderTarget(Tt),y.updateRenderTargetMipmap(Tt))}S.setRenderTarget(Ht),S.setClearColor(V,Z),jt!==void 0&&(it.viewport=jt),S.toneMapping=kt}function Re(A,Y,st){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Tt=A.length;$<Tt;$++){const Dt=A[$],Ht=Dt.object,kt=Dt.geometry,jt=it===null?Dt.material:it,Jt=Dt.group;Ht.layers.test(st.layers)&&Nt(Ht,Y,st,kt,jt,Jt)}}function Nt(A,Y,st,it,$,Tt){A.onBeforeRender(S,Y,st,it,$,Tt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(S,Y,st,it,A,Tt),$.transparent===!0&&$.side===ue&&$.forceSinglePass===!1?($.side=bn,$.needsUpdate=!0,S.renderBufferDirect(st,Y,it,$,A,Tt),$.side=us,$.needsUpdate=!0,S.renderBufferDirect(st,Y,it,$,A,Tt),$.side=ue):S.renderBufferDirect(st,Y,it,$,A,Tt),A.onAfterRender(S,Y,st,it,$,Tt)}function fe(A,Y,st){Y.isScene!==!0&&(Y=lt);const it=K.get(A),$=p.state.lights,Tt=p.state.shadowsArray,Dt=$.state.version,Ht=ht.getParameters(A,$.state,Tt,Y,st),kt=ht.getProgramCacheKey(Ht);let jt=it.programs;it.environment=A.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(A.isMeshStandardMaterial?C:v).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",zt),jt=new Map,it.programs=jt);let Jt=jt.get(kt);if(Jt!==void 0){if(it.currentProgram===Jt&&it.lightsStateVersion===Dt)return $e(A,Ht),Jt}else Ht.uniforms=ht.getUniforms(A),A.onBeforeCompile(Ht,S),Jt=ht.acquireProgram(Ht,kt),jt.set(kt,Jt),it.uniforms=Ht.uniforms;const Vt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=dt.uniform),$e(A,Ht),it.needsLights=yn(A),it.lightsStateVersion=Dt,it.needsLights&&(Vt.ambientLightColor.value=$.state.ambient,Vt.lightProbe.value=$.state.probe,Vt.directionalLights.value=$.state.directional,Vt.directionalLightShadows.value=$.state.directionalShadow,Vt.spotLights.value=$.state.spot,Vt.spotLightShadows.value=$.state.spotShadow,Vt.rectAreaLights.value=$.state.rectArea,Vt.ltc_1.value=$.state.rectAreaLTC1,Vt.ltc_2.value=$.state.rectAreaLTC2,Vt.pointLights.value=$.state.point,Vt.pointLightShadows.value=$.state.pointShadow,Vt.hemisphereLights.value=$.state.hemi,Vt.directionalShadowMap.value=$.state.directionalShadowMap,Vt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Vt.spotShadowMap.value=$.state.spotShadowMap,Vt.spotLightMatrix.value=$.state.spotLightMatrix,Vt.spotLightMap.value=$.state.spotLightMap,Vt.pointShadowMap.value=$.state.pointShadowMap,Vt.pointShadowMatrix.value=$.state.pointShadowMatrix),it.currentProgram=Jt,it.uniformsList=null,Jt}function Oe(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=ua.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function $e(A,Y){const st=K.get(A);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function We(A,Y,st,it,$){Y.isScene!==!0&&(Y=lt),y.resetTextureUnits();const Tt=Y.fog,Dt=it.isMeshStandardMaterial?Y.environment:null,Ht=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fs,kt=(it.isMeshStandardMaterial?C:v).get(it.envMap||Dt),jt=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Vt=!!st.morphAttributes.position,ie=!!st.morphAttributes.normal,ge=!!st.morphAttributes.color;let _e=ls;it.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_e=S.toneMapping);const Je=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,de=Je!==void 0?Je.length:0,$t=K.get(it),Xe=p.state.lights;if(ot===!0&&(ft===!0||A!==nt)){const Ge=A===nt&&it.id===O;dt.setState(it,A,Ge)}let Rt=!1;it.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Xe.state.version||$t.outputColorSpace!==Ht||$.isBatchedMesh&&$t.batching===!1||!$.isBatchedMesh&&$t.batching===!0||$.isBatchedMesh&&$t.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$t.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$t.instancing===!1||!$.isInstancedMesh&&$t.instancing===!0||$.isSkinnedMesh&&$t.skinning===!1||!$.isSkinnedMesh&&$t.skinning===!0||$.isInstancedMesh&&$t.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$t.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$t.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$t.instancingMorph===!1&&$.morphTexture!==null||$t.envMap!==kt||it.fog===!0&&$t.fog!==Tt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==dt.numPlanes||$t.numIntersection!==dt.numIntersection)||$t.vertexAlphas!==jt||$t.vertexTangents!==Jt||$t.morphTargets!==Vt||$t.morphNormals!==ie||$t.morphColors!==ge||$t.toneMapping!==_e||$t.morphTargetsCount!==de)&&(Rt=!0):(Rt=!0,$t.__version=it.version);let Ie=$t.currentProgram;Rt===!0&&(Ie=fe(it,Y,$));let Ue=!1,ve=!1,rn=!1;const xe=Ie.getUniforms(),Ke=$t.uniforms;if(U.useProgram(Ie.program)&&(Ue=!0,ve=!0,rn=!0),it.id!==O&&(O=it.id,ve=!0),Ue||nt!==A){D.reverseDepthBuffer?(St.copy(A.projectionMatrix),rv(St),ov(St),xe.setValue(g,"projectionMatrix",St)):xe.setValue(g,"projectionMatrix",A.projectionMatrix),xe.setValue(g,"viewMatrix",A.matrixWorldInverse);const Ge=xe.map.cameraPosition;Ge!==void 0&&Ge.setValue(g,ut.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&xe.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&xe.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),nt!==A&&(nt=A,ve=!0,rn=!0)}if($.isSkinnedMesh){xe.setOptional(g,$,"bindMatrix"),xe.setOptional(g,$,"bindMatrixInverse");const Ge=$.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),xe.setValue(g,"boneTexture",Ge.boneTexture,y))}$.isBatchedMesh&&(xe.setOptional(g,$,"batchingTexture"),xe.setValue(g,"batchingTexture",$._matricesTexture,y),xe.setOptional(g,$,"batchingIdTexture"),xe.setValue(g,"batchingIdTexture",$._indirectTexture,y),xe.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&xe.setValue(g,"batchingColorTexture",$._colorsTexture,y));const An=st.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Lt.update($,st,Ie),(ve||$t.receiveShadow!==$.receiveShadow)&&($t.receiveShadow=$.receiveShadow,xe.setValue(g,"receiveShadow",$.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Ke.envMap.value=kt,Ke.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Y.environment!==null&&(Ke.envMapIntensity.value=Y.environmentIntensity),ve&&(xe.setValue(g,"toneMappingExposure",S.toneMappingExposure),$t.needsLights&&Tn(Ke,rn),Tt&&it.fog===!0&&ct.refreshFogUniforms(Ke,Tt),ct.refreshMaterialUniforms(Ke,it,Q,H,p.state.transmissionRenderTarget[A.id]),ua.upload(g,Oe($t),Ke,y)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ua.upload(g,Oe($t),Ke,y),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&xe.setValue(g,"center",$.center),xe.setValue(g,"modelViewMatrix",$.modelViewMatrix),xe.setValue(g,"normalMatrix",$.normalMatrix),xe.setValue(g,"modelMatrix",$.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Ge=it.uniformsGroups;for(let Sn=0,ci=Ge.length;Sn<ci;Sn++){const Nn=Ge[Sn];z.update(Nn,Ie),z.bind(Nn,Ie)}}return Ie}function Tn(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function yn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,Y,st){K.get(A.texture).__webglTexture=Y,K.get(A.depthTexture).__webglTexture=st;const it=K.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=st===void 0,it.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){const st=K.get(A);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,st=0){P=A,F=Y,I=st;let it=!0,$=null,Tt=!1,Dt=!1;if(A){const kt=K.get(A);if(kt.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(g.FRAMEBUFFER,null),it=!1;else if(kt.__webglFramebuffer===void 0)y.setupRenderTarget(A);else if(kt.__hasExternalTextures)y.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Vt=A.depthTexture;if(kt.__boundDepthTexture!==Vt){if(Vt!==null&&K.has(Vt)&&(A.width!==Vt.image.width||A.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(A)}}const jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Dt=!0);const Jt=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[Y])?$=Jt[Y][st]:$=Jt[Y],Tt=!0):A.samples>0&&y.useMultisampledRTT(A)===!1?$=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?$=Jt[st]:$=Jt,M.copy(A.viewport),E.copy(A.scissor),j=A.scissorTest}else M.copy(yt).multiplyScalar(Q).floor(),E.copy(_t).multiplyScalar(Q).floor(),j=Ct;if(U.bindFramebuffer(g.FRAMEBUFFER,$)&&it&&U.drawBuffers(A,$),U.viewport(M),U.scissor(E),U.setScissorTest(j),Tt){const kt=K.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kt.__webglTexture,st)}else if(Dt){const kt=K.get(A.texture),jt=Y||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,kt.__webglTexture,st||0,jt)}O=-1},this.readRenderTargetPixels=function(A,Y,st,it,$,Tt,Dt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht){U.bindFramebuffer(g.FRAMEBUFFER,Ht);try{const kt=A.texture,jt=kt.format,Jt=kt.type;if(!D.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-it&&st>=0&&st<=A.height-$&&g.readPixels(Y,st,it,$,It.convert(jt),It.convert(Jt),Tt)}finally{const kt=P!==null?K.get(P).__webglFramebuffer:null;U.bindFramebuffer(g.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,st,it,$,Tt,Dt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht){const kt=A.texture,jt=kt.format,Jt=kt.type;if(!D.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-it&&st>=0&&st<=A.height-$){U.bindFramebuffer(g.FRAMEBUFFER,Ht);const Vt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Vt),g.bufferData(g.PIXEL_PACK_BUFFER,Tt.byteLength,g.STREAM_READ),g.readPixels(Y,st,it,$,It.convert(jt),It.convert(Jt),0);const ie=P!==null?K.get(P).__webglFramebuffer:null;U.bindFramebuffer(g.FRAMEBUFFER,ie);const ge=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await sv(g,ge,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Vt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Tt),g.deleteBuffer(Vt),g.deleteSync(ge),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,st=0){A.isTexture!==!0&&(ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);const it=Math.pow(2,-st),$=Math.floor(A.image.width*it),Tt=Math.floor(A.image.height*it),Dt=Y!==null?Y.x:0,Ht=Y!==null?Y.y:0;y.setTexture2D(A,0),g.copyTexSubImage2D(g.TEXTURE_2D,st,0,0,Dt,Ht,$,Tt),U.unbindTexture()},this.copyTextureToTexture=function(A,Y,st=null,it=null,$=0){A.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],Y=arguments[2],$=arguments[3]||0,st=null);let Tt,Dt,Ht,kt,jt,Jt;st!==null?(Tt=st.max.x-st.min.x,Dt=st.max.y-st.min.y,Ht=st.min.x,kt=st.min.y):(Tt=A.image.width,Dt=A.image.height,Ht=0,kt=0),it!==null?(jt=it.x,Jt=it.y):(jt=0,Jt=0);const Vt=It.convert(Y.format),ie=It.convert(Y.type);y.setTexture2D(Y,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const ge=g.getParameter(g.UNPACK_ROW_LENGTH),_e=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Je=g.getParameter(g.UNPACK_SKIP_PIXELS),de=g.getParameter(g.UNPACK_SKIP_ROWS),$t=g.getParameter(g.UNPACK_SKIP_IMAGES),Xe=A.isCompressedTexture?A.mipmaps[$]:A.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Xe.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Xe.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ht),g.pixelStorei(g.UNPACK_SKIP_ROWS,kt),A.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,jt,Jt,Tt,Dt,Vt,ie,Xe.data):A.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,jt,Jt,Xe.width,Xe.height,Vt,Xe.data):g.texSubImage2D(g.TEXTURE_2D,$,jt,Jt,Tt,Dt,Vt,ie,Xe),g.pixelStorei(g.UNPACK_ROW_LENGTH,ge),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,_e),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Je),g.pixelStorei(g.UNPACK_SKIP_ROWS,de),g.pixelStorei(g.UNPACK_SKIP_IMAGES,$t),$===0&&Y.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,st=null,it=null,$=0){A.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,it=arguments[1]||null,A=arguments[2],Y=arguments[3],$=arguments[4]||0);let Tt,Dt,Ht,kt,jt,Jt,Vt,ie,ge;const _e=A.isCompressedTexture?A.mipmaps[$]:A.image;st!==null?(Tt=st.max.x-st.min.x,Dt=st.max.y-st.min.y,Ht=st.max.z-st.min.z,kt=st.min.x,jt=st.min.y,Jt=st.min.z):(Tt=_e.width,Dt=_e.height,Ht=_e.depth,kt=0,jt=0,Jt=0),it!==null?(Vt=it.x,ie=it.y,ge=it.z):(Vt=0,ie=0,ge=0);const Je=It.convert(Y.format),de=It.convert(Y.type);let $t;if(Y.isData3DTexture)y.setTexture3D(Y,0),$t=g.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)y.setTexture2DArray(Y,0),$t=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const Xe=g.getParameter(g.UNPACK_ROW_LENGTH),Rt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ie=g.getParameter(g.UNPACK_SKIP_PIXELS),Ue=g.getParameter(g.UNPACK_SKIP_ROWS),ve=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,_e.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,_e.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,kt),g.pixelStorei(g.UNPACK_SKIP_ROWS,jt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Jt),A.isDataTexture||A.isData3DTexture?g.texSubImage3D($t,$,Vt,ie,ge,Tt,Dt,Ht,Je,de,_e.data):Y.isCompressedArrayTexture?g.compressedTexSubImage3D($t,$,Vt,ie,ge,Tt,Dt,Ht,Je,_e.data):g.texSubImage3D($t,$,Vt,ie,ge,Tt,Dt,Ht,Je,de,_e),g.pixelStorei(g.UNPACK_ROW_LENGTH,Xe),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Rt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ie),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ue),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ve),$===0&&Y.generateMipmaps&&g.generateMipmap($t),U.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?y.setTextureCube(A,0):A.isData3DTexture?y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?y.setTexture2DArray(A,0):y.setTexture2D(A,0),U.unbindTexture()},this.resetState=function(){F=0,I=0,P=null,U.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===mu?"display-p3":"srgb",e.unpackColorSpace=ye.workingColorSpace===Fa?"display-p3":"srgb"}}class ai extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Bt:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new q,s=[],r=[],o=[],a=new q,l=new Ne;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new q)}r[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(nn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(nn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Mu extends wi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Bt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _w extends Mu{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const $o=new q,Il=new yu,Ll=new yu,Dl=new yu;class vw extends wi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new q){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),c=$o);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($o.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$o),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),Il.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,x,p),Ll.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,x,p),Dl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,x,p)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ll.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Dl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Il.calc(l),Ll.calc(l),Dl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pd(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function xw(n,t){const e=1-n;return e*e*t}function Mw(n,t){return 2*(1-n)*n*t}function yw(n,t){return n*n*t}function $r(n,t,e,i){return xw(n,t)+Mw(n,e)+yw(n,i)}function Sw(n,t){const e=1-n;return e*e*e*t}function ww(n,t){const e=1-n;return 3*e*e*n*t}function Ew(n,t){return 3*(1-n)*n*n*t}function bw(n,t){return n*n*n*t}function Kr(n,t,e,i,s){return Sw(n,t)+ww(n,e)+Ew(n,i)+bw(n,s)}class pp extends wi{constructor(t=new Bt,e=new Bt,i=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Bt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Kr(t,s.x,r.x,o.x,a.x),Kr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tw extends wi{constructor(t=new q,e=new q,i=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new q){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Kr(t,s.x,r.x,o.x,a.x),Kr(t,s.y,r.y,o.y,a.y),Kr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mp extends wi{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Aw extends wi{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gp extends wi{constructor(t=new Bt,e=new Bt,i=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Bt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rw extends wi{constructor(t=new q,e=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new q){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y),$r(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _p extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(pd(a,l.x,c.x,h.x,u.x),pd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}}var Uc=Object.freeze({__proto__:null,ArcCurve:_w,CatmullRomCurve3:vw,CubicBezierCurve:pp,CubicBezierCurve3:Tw,EllipseCurve:Mu,LineCurve:mp,LineCurve3:Aw,QuadraticBezierCurve:gp,QuadraticBezierCurve3:Rw,SplineCurve:_p});class Pw extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Uc[s.type]().fromJSON(s))}return this}}class Nc extends Pw{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new mp(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new gp(this.currentPoint.clone(),new Bt(t,e),new Bt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new pp(this.currentPoint.clone(),new Bt(t,e),new Bt(i,s),new Bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new _p(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Mu(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Te extends Vn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new q,h=new Bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(a,3)),this.setAttribute("uv",new qe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ce extends Vn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const x=[],p=i/2;let m=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(f,2));function b(){const w=new q,F=new q;let I=0;const P=(e-t)/i;for(let O=0;O<=r;O++){const nt=[],M=O/r,E=M*(e-t)+t;for(let j=0;j<=s;j++){const V=j/s,Z=V*l+a,rt=Math.sin(Z),H=Math.cos(Z);F.x=E*rt,F.y=-M*i+p,F.z=E*H,u.push(F.x,F.y,F.z),w.set(rt,P,H).normalize(),d.push(w.x,w.y,w.z),f.push(V,1-M),nt.push(_++)}x.push(nt)}for(let O=0;O<s;O++)for(let nt=0;nt<r;nt++){const M=x[nt][O],E=x[nt+1][O],j=x[nt+1][O+1],V=x[nt][O+1];t>0&&(h.push(M,E,V),I+=3),e>0&&(h.push(E,j,V),I+=3)}c.addGroup(m,I,0),m+=I}function S(w){const F=_,I=new Bt,P=new q;let O=0;const nt=w===!0?t:e,M=w===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),_++;const E=_;for(let j=0;j<=s;j++){const Z=j/s*l+a,rt=Math.cos(Z),H=Math.sin(Z);P.x=nt*H,P.y=p*M,P.z=nt*rt,u.push(P.x,P.y,P.z),d.push(0,M,0),I.x=rt*.5+.5,I.y=H*.5*M+.5,f.push(I.x,I.y),_++}for(let j=0;j<s;j++){const V=F+j,Z=E+j;w===!0?h.push(Z,Z+1,V):h.push(Z+1,Z,V),O+=3}c.addGroup(m,O,w===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jr extends ce{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new jr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Un extends Nc{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Nc().fromJSON(s))}return this}}const Cw={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=vp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=Nw(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return co(r,o,e,a,l,f,0),o}};function vp(n,t,e,i,s){let r,o;if(s===qw(n,t,e,i)>0)for(r=t;r<e;r+=i)o=md(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=md(r,n[r],n[r+1],o);return o&&za(o,o.next)&&(ho(o),o=o.next),o}function Ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(za(e,e.next)||ze(e.prev,e,e.next)===0)){if(ho(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function co(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Gw(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Lw(n,i,s,r):Iw(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ho(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Dw(Ds(n),t,e),co(n,t,e,i,s,r,2)):o===2&&Uw(n,t,e,i,s,r):co(Ds(n),t,e,i,s,r,1);break}}}function Iw(n){const t=n.prev,e=n,i=n.next;if(ze(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&ir(s,a,r,l,o,c,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Lw(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ze(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=Fc(f,_,t,e,i),b=Fc(x,p,t,e,i);let S=n.prevZ,w=n.nextZ;for(;S&&S.z>=m&&w&&w.z<=b;){if(S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&ir(a,h,l,u,c,d,S.x,S.y)&&ze(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&ir(a,h,l,u,c,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&ir(a,h,l,u,c,d,S.x,S.y)&&ze(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=b;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&ir(a,h,l,u,c,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Dw(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!za(s,r)&&xp(s,i,i.next,r)&&uo(s,r)&&uo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ho(i),ho(i.next),i=n=r),i=i.next}while(i!==n);return Ds(i)}function Uw(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vw(o,a)){let l=Mp(o,a);o=Ds(o,o.next),l=Ds(l,l.next),co(o,t,e,i,s,r,0),co(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Nw(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=vp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(kw(c));for(s.sort(Fw),r=0;r<s.length;r++)e=Ow(s[r],e);return e}function Fw(n,t){return n.x-t.x}function Ow(n,t){const e=Bw(n,t);if(!e)return t;const i=Mp(e,n);return Ds(i,i.next),Ds(e,e.next)}function Bw(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ir(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),uo(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&zw(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function zw(n,t){return ze(n.prev,n,t.prev)<0&&ze(t.next,n,n.next)<0}function Gw(n,t,e,i){let s=n;do s.z===0&&(s.z=Fc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Hw(s)}function Hw(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Fc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function kw(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ir(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Vw(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ww(n,t)&&(uo(n,t)&&uo(t,n)&&Xw(n,t)&&(ze(n.prev,n,t.prev)||ze(n,t.prev,t))||za(n,t)&&ze(n.prev,n,n.next)>0&&ze(t.prev,t,t.next)>0)}function ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function za(n,t){return n.x===t.x&&n.y===t.y}function xp(n,t,e,i){const s=jo(ze(n,t,e)),r=jo(ze(n,t,i)),o=jo(ze(e,i,n)),a=jo(ze(e,i,t));return!!(s!==r&&o!==a||s===0&&Ko(n,e,t)||r===0&&Ko(n,i,t)||o===0&&Ko(e,n,i)||a===0&&Ko(e,t,i))}function Ko(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function jo(n){return n>0?1:n<0?-1:0}function Ww(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&xp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function uo(n,t){return ze(n.prev,n,n.next)<0?ze(n,t,n.next)>=0&&ze(n,n.prev,t)>=0:ze(n,t,n.prev)<0||ze(n,n.next,t)<0}function Xw(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Mp(n,t){const e=new Oc(n.i,n.x,n.y),i=new Oc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function md(n,t,e,i){const s=new Oc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ho(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Oc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qw(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class dr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return dr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];gd(t),_d(i,t);let o=t.length;e.forEach(gd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,_d(i,e[l]);const a=Cw.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function gd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function _d(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Gn extends Vn{constructor(t=new Un([new Bt(.5,.5),new Bt(-.5,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new qe(s,3)),this.setAttribute("uv",new qe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Yw;let S,w=!1,F,I,P,O;m&&(S=m.getSpacedPoints(h),w=!0,d=!1,F=m.computeFrenetFrames(h,!1),I=new q,P=new q,O=new q),d||(p=0,f=0,_=0,x=0);const nt=a.extractPoints(c);let M=nt.shape;const E=nt.holes;if(!dr.isClockWise(M)){M=M.reverse();for(let tt=0,g=E.length;tt<g;tt++){const T=E[tt];dr.isClockWise(T)&&(E[tt]=T.reverse())}}const V=dr.triangulateShape(M,E),Z=M;for(let tt=0,g=E.length;tt<g;tt++){const T=E[tt];M=M.concat(T)}function rt(tt,g,T){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(g,T)}const H=M.length,Q=V.length;function B(tt,g,T){let L,D,U;const W=tt.x-g.x,K=tt.y-g.y,y=T.x-tt.x,v=T.y-tt.y,C=W*W+K*K,X=W*v-K*y;if(Math.abs(X)>Number.EPSILON){const G=Math.sqrt(C),k=Math.sqrt(y*y+v*v),ht=g.x-K/G,ct=g.y+W/G,pt=T.x-v/k,bt=T.y+y/k,dt=((pt-ht)*v-(bt-ct)*y)/(W*v-K*y);L=ht+W*dt-tt.x,D=ct+K*dt-tt.y;const Mt=L*L+D*D;if(Mt<=2)return new Bt(L,D);U=Math.sqrt(Mt/2)}else{let G=!1;W>Number.EPSILON?y>Number.EPSILON&&(G=!0):W<-Number.EPSILON?y<-Number.EPSILON&&(G=!0):Math.sign(K)===Math.sign(v)&&(G=!0),G?(L=-K,D=W,U=Math.sqrt(C)):(L=W,D=K,U=Math.sqrt(C/2))}return new Bt(L/U,D/U)}const gt=[];for(let tt=0,g=Z.length,T=g-1,L=tt+1;tt<g;tt++,T++,L++)T===g&&(T=0),L===g&&(L=0),gt[tt]=B(Z[tt],Z[T],Z[L]);const yt=[];let _t,Ct=gt.concat();for(let tt=0,g=E.length;tt<g;tt++){const T=E[tt];_t=[];for(let L=0,D=T.length,U=D-1,W=L+1;L<D;L++,U++,W++)U===D&&(U=0),W===D&&(W=0),_t[L]=B(T[L],T[U],T[W]);yt.push(_t),Ct=Ct.concat(_t)}for(let tt=0;tt<p;tt++){const g=tt/p,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let D=0,U=Z.length;D<U;D++){const W=rt(Z[D],gt[D],L);N(W.x,W.y,-T)}for(let D=0,U=E.length;D<U;D++){const W=E[D];_t=yt[D];for(let K=0,y=W.length;K<y;K++){const v=rt(W[K],_t[K],L);N(v.x,v.y,-T)}}}const Gt=_+x;for(let tt=0;tt<H;tt++){const g=d?rt(M[tt],Ct[tt],Gt):M[tt];w?(P.copy(F.normals[0]).multiplyScalar(g.x),I.copy(F.binormals[0]).multiplyScalar(g.y),O.copy(S[0]).add(P).add(I),N(O.x,O.y,O.z)):N(g.x,g.y,0)}for(let tt=1;tt<=h;tt++)for(let g=0;g<H;g++){const T=d?rt(M[g],Ct[g],Gt):M[g];w?(P.copy(F.normals[tt]).multiplyScalar(T.x),I.copy(F.binormals[tt]).multiplyScalar(T.y),O.copy(S[tt]).add(P).add(I),N(O.x,O.y,O.z)):N(T.x,T.y,u/h*tt)}for(let tt=p-1;tt>=0;tt--){const g=tt/p,T=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let D=0,U=Z.length;D<U;D++){const W=rt(Z[D],gt[D],L);N(W.x,W.y,u+T)}for(let D=0,U=E.length;D<U;D++){const W=E[D];_t=yt[D];for(let K=0,y=W.length;K<y;K++){const v=rt(W[K],_t[K],L);w?N(v.x,v.y+S[h-1].y,S[h-1].x+T):N(v.x,v.y,u+T)}}}ot(),ft();function ot(){const tt=s.length/3;if(d){let g=0,T=H*g;for(let L=0;L<Q;L++){const D=V[L];ut(D[2]+T,D[1]+T,D[0]+T)}g=h+p*2,T=H*g;for(let L=0;L<Q;L++){const D=V[L];ut(D[0]+T,D[1]+T,D[2]+T)}}else{for(let g=0;g<Q;g++){const T=V[g];ut(T[2],T[1],T[0])}for(let g=0;g<Q;g++){const T=V[g];ut(T[0]+H*h,T[1]+H*h,T[2]+H*h)}}i.addGroup(tt,s.length/3-tt,0)}function ft(){const tt=s.length/3;let g=0;St(Z,g),g+=Z.length;for(let T=0,L=E.length;T<L;T++){const D=E[T];St(D,g),g+=D.length}i.addGroup(tt,s.length/3-tt,1)}function St(tt,g){let T=tt.length;for(;--T>=0;){const L=T;let D=T-1;D<0&&(D=tt.length-1);for(let U=0,W=h+p*2;U<W;U++){const K=H*U,y=H*(U+1),v=g+L+K,C=g+D+K,X=g+D+y,G=g+L+y;at(v,C,X,G)}}}function N(tt,g,T){l.push(tt),l.push(g),l.push(T)}function ut(tt,g,T){lt(tt),lt(g),lt(T);const L=s.length/3,D=b.generateTopUV(i,s,L-3,L-2,L-1);Et(D[0]),Et(D[1]),Et(D[2])}function at(tt,g,T,L){lt(tt),lt(g),lt(L),lt(g),lt(T),lt(L);const D=s.length/3,U=b.generateSideWallUV(i,s,D-6,D-3,D-2,D-1);Et(U[0]),Et(U[1]),Et(U[3]),Et(U[1]),Et(U[2]),Et(U[3])}function lt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function Et(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return $w(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Uc[s.type]().fromJSON(s)),new Gn(i,t.options)}}const Yw={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new Bt(r,o),new Bt(a,l),new Bt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Bt(o,1-l),new Bt(c,1-u),new Bt(d,1-_),new Bt(x,1-m)]:[new Bt(a,1-l),new Bt(h,1-u),new Bt(f,1-_),new Bt(p,1-m)]}};function $w(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wt extends Vn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new q,d=new q,f=[],_=[],x=[],p=[];for(let m=0;m<=i;m++){const b=[],S=m/i;let w=0;m===0&&o===0?w=.5/e:m===i&&l===Math.PI&&(w=-.5/e);for(let F=0;F<=e;F++){const I=F/e;u.x=-t*Math.cos(s+I*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+I*r)*Math.sin(o+S*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(I+w,1-S),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){const S=h[m][b+1],w=h[m][b],F=h[m+1][b],I=h[m+1][b+1];(m!==0||o>0)&&f.push(S,w,I),(m!==i-1||l<Math.PI)&&f.push(w,F,I)}this.setIndex(f),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fo extends Vn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new q,u=new q,d=new q;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const x=_/s*r,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,p=(s+1)*(f-1)+_-1,m=(s+1)*(f-1)+_,b=(s+1)*f+_;o.push(x,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ee extends xo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ut extends ee{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const ya={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Kw{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const jw=new Kw;class Mo{constructor(t){this.manager=t!==void 0?t:jw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class Zw extends Error{constructor(t,e){super(t),this.response=e}}class Jw extends Mo{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ya.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Li[t]!==void 0){Li[t].push({onLoad:e,onProgress:i,onError:s});return}Li[t]=[],Li[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Li[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let x=0;const p=new ReadableStream({start(m){b();function b(){u.read().then(({done:S,value:w})=>{if(S)m.close();else{x+=w.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let I=0,P=h.length;I<P;I++){const O=h[I];O.onProgress&&O.onProgress(F)}m.enqueue(w),b()}},S=>{m.error(S)})}}});return new Response(p)}else throw new Zw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{ya.add(t,c);const h=Li[t];delete Li[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Li[t];if(h===void 0)throw this.manager.itemError(t),c;delete Li[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Qw extends Mo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ya.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=lo("img");function l(){h(),ya.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Wi extends Mo{constructor(t){super(t)}load(t,e,i,s){const r=new Mn,o=new Qw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Su extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ul=new Ne,vd=new q,xd=new q;class yp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vu,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(vd),xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xd),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Md=new Ne,Nr=new q,Nl=new q;class t1 extends yp{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Nr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Nr),Nl.copy(i.position),Nl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Nl),i.updateMatrixWorld(),s.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Md.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md)}}class Xi extends Su{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new t1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class e1 extends yp{constructor(){super(new lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qi extends Su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new e1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yi extends Su{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yd(){return performance.now()}class n1{constructor(){this.type="ShapePath",this.color=new he,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Nc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,o){return this.currentPath.bezierCurveTo(t,e,i,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const b=[];for(let S=0,w=m.length;S<w;S++){const F=m[S],I=new Un;I.curves=F.curves,b.push(I)}return b}function i(m,b){const S=b.length;let w=!1;for(let F=S-1,I=0;I<S;F=I++){let P=b[F],O=b[I],nt=O.x-P.x,M=O.y-P.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(P=b[I],nt=-nt,O=b[F],M=-M),m.y<P.y||m.y>O.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{const E=M*(m.x-P.x)-nt*(m.y-P.y);if(E===0)return!0;if(E<0)continue;w=!w}}else{if(m.y!==P.y)continue;if(O.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=O.x)return!0}}return w}const s=dr.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Un,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,x;d[_]=void 0,f[_]=[];for(let m=0,b=r.length;m<b;m++)a=r[m],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!h&&d[_]&&_++,d[_]={s:new Un,p:x},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:x[0]});if(!d[0])return e(r);if(d.length>1){let m=!1,b=0;for(let S=0,w=d.length;S<w;S++)u[S]=[];for(let S=0,w=d.length;S<w;S++){const F=f[S];for(let I=0;I<F.length;I++){const P=F[I];let O=!0;for(let nt=0;nt<d.length;nt++)i(P.p,d[nt].p)&&(S!==nt&&b++,O?(O=!1,u[nt].push(P)):m=!0);O&&u[S].push(P)}}b>0&&m===!1&&(f=u)}let p;for(let m=0,b=d.length;m<b;m++){l=d[m].s,c.push(l),p=f[m];for(let S=0,w=p.length;S<w;S++)l.holes.push(p[S].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);class $i extends Mo{constructor(t){super(t)}load(t,e,i,s){const r=this,o=new Jw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},i,s)}parse(t){return new i1(t)}}class i1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=s1(t,e,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function s1(n,t,e){const i=Array.from(n),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=r1(h,s,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function r1(n,t,e,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new n1;let a,l,c,h,u,d,f,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=x.length;p<m;)switch(x[p++]){case"m":a=x[p++]*t+e,l=x[p++]*t+i,o.moveTo(a,l);break;case"l":a=x[p++]*t+e,l=x[p++]*t+i,o.lineTo(a,l);break;case"q":c=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,o.quadraticCurveTo(u,d,c,h);break;case"b":c=x[p++]*t+e,h=x[p++]*t+i,u=x[p++]*t+e,d=x[p++]*t+i,f=x[p++]*t+e,_=x[p++]*t+i,o.bezierCurveTo(u,d,f,_,c,h);break}}return{offsetX:r.ha*t,path:o}}class He extends Gn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const o1=kn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=null,s=Yt(!1),r=Yt(!1),o=Yt(!1);return li(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ai,c=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),h=new oi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Zt,d=new Yi(16777215,2);l.add(d);const f=new qi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new Xi(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Wi,p=x.load("/3d-bear-arts/assets/lv2.jpg"),m=x.load("/3d-bear-arts/assets/lv2.jpg");p.wrapS=p.wrapT=Ve,m.wrapS=m.wrapT=Ve;const b=new Ut({color:8343336,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),S=new Ut({color:5978654,metalness:0,roughness:.8,bumpMap:p,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:m,envMapIntensity:.7}),w=new Ut({color:13152668,metalness:.2,roughness:.05,bumpMap:p,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:m,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:ue});new Ut({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const F=new wt(1,32,32,0,Math.PI),I=new R(F,w),P=new R(F,b);I.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),I.position.y=-.2,P.position.y=-.2,I.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const O=new Te(1,32),nt=new R(O,b);nt.scale.set(.85,.85,.8),nt.position.set(0,-.2,0),nt.rotation.y=Math.PI/2;const M=new Zt;M.add(I),M.add(P),M.add(nt),u.add(M);const E=new wt(.6,32,32,0,Math.PI),j=new R(E,b);j.scale.set(1,.95,.95),j.position.set(0,1,0),j.rotation.y=Math.PI*1.5;const V=new R(E,w);V.scale.set(1,.95,.95),V.position.set(0,1,0),V.rotation.y=Math.PI/2;const Z=new Te(.6,32),rt=new R(Z,b);rt.position.set(0,1,0),rt.rotation.y=Math.PI/2,rt.scale.set(1,.95,.95);const H=new Zt;H.add(j),H.add(V),H.add(rt),u.add(H);const Q=new wt(.25,32,32),B=new R(Q,b);B.position.set(-.45,1.35,-.1),u.add(B);const gt=new R(Q,w);gt.position.set(.45,1.35,-.1),u.add(gt);const yt=new wt(.25,32,32,Math.PI/2,Math.PI),_t=new R(yt,S);_t.scale.set(1.1,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=Math.PI;const Ct=new wt(.25,32,32,Math.PI/2,Math.PI),Gt=new R(Ct,w);Gt.scale.set(1.1,.6,.8),Gt.position.set(0,.84,.5),Gt.rotation.y=0;const ot=new Te(.25,32),ft=new R(ot,b);ft.scale.set(.8,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI/2;const St=new Zt;St.add(_t),St.add(Gt),St.add(ft),u.add(St);const N=new Un;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const ut={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Ut({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const at=new Gn(N,ut),lt=new R(at,b);lt.scale.set(.1,.1,.1),lt.rotation.z=ae.degToRad(210),lt.rotation.x=ae.degToRad(5),lt.rotation.y=ae.degToRad(-45),lt.position.set(-.4,.9,.45);const Et=new R(at,S);Et.scale.set(.6,.5,.5),Et.position.set(.35,0,0),Et.rotation.y=Math.PI,Et.rotation.x=Math.PI;const tt=new R(at,S);tt.scale.set(.2,.2,.2),tt.position.set(.5,-.1,.2),tt.rotation.y=Math.PI,tt.rotation.x=Math.PI,u.add(tt);const g=new ti(1.3,1.2,.6),T=new R(g,b);T.scale.set(.45,.45,.45),T.position.set(.35,-.2,.1),T.rotation.y=Math.PI;const L=new fo(.15,.025,10,100);new Ut({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const D=new R(L,b);D.position.set(.35,.1,.1),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/8,D.rotation.y=Math.PI/14;const U=new R(L,b);U.position.set(.35,.1,.13),U.rotation.z=Math.PI/2,U.rotation.x=Math.PI/-8,U.rotation.y=Math.PI/12;const W=new Zt;W.add(T),W.add(D),W.add(U),u.add(W);const K=new wt(.35,32,32),y=new R(K,b);y.scale.set(.75,1.25,.65),y.position.set(-.7,-.15,.2),u.add(y);const v=new R(K,w);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new ce(.2,.22,.6,32),X=new R(C,b);X.position.set(-.4,-1.05,0),u.add(X);const G=new R(C,w);G.position.set(.4,-1.05,0),u.add(G);const k=new wt(.3,32,32),ht=new R(k,b);ht.scale.set(1,.72,1.5),ht.position.set(-.4,-1.45,.17),u.add(ht);const ct=new R(k,w);ct.scale.set(1,.72,1.5),ct.position.set(.4,-1.45,.17),u.add(ct);const pt=new wt(.44,32,32),bt=new R(pt,b);bt.position.set(-.15,-.45,-.4),u.add(bt);const dt=new R(pt,w);dt.position.set(.15,-.45,-.4),u.add(dt);const Mt=new wt(.18,32,32),Pt=new R(Mt,b);Pt.position.set(0,-.35,-.8),u.add(Pt),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(J){const xt=new He("X",{font:J,size:.2,depth:.05});new si({color:0});const vt=new R(xt,S);vt.position.set(-.3,.99,.53),vt.rotation.x=ae.degToRad(-5),vt.rotation.y=ae.degToRad(-15),u.add(vt);const zt=new He("O",{font:J,size:.2,depth:.05});new si({color:0});const qt=new R(zt,S);qt.position.set(.14,.99,.53),qt.rotation.y=ae.degToRad(12),qt.rotation.x=ae.degToRad(-5),u.add(qt)}),Pt.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const At=()=>{u.rotation.y,u.rotation.x},Wt=()=>{s.value=!0,r.value=!1,o.value=!1},It=()=>{s.value=!1,r.value=!0,o.value=!1},Xt=()=>{s.value=!1,r.value=!1,At()},z=J=>{const xt=window.innerWidth/2;J>xt?Wt():It(),At()},mt=J=>{clearTimeout(i),Xt(),o.value=!0;const xt={x:J.clientX/window.innerWidth*2-1,y:-(J.clientY/window.innerHeight)*2+1};if(o.value){const vt=xt.x*Math.PI*.2,zt=xt.y*Math.PI*.2;u.rotation.y=vt,u.rotation.x=zt}i=setTimeout(()=>{o.value=!1,z(J.clientX)},500)};window.addEventListener("mousemove",mt);const et=J=>{if(o.value){const xt={x:J.clientX/window.innerWidth*2-1,y:-(J.clientY/window.innerHeight)*2+1},vt=xt.x*Math.PI*.2,zt=xt.y*Math.PI*.2;u.rotation.y=vt,u.rotation.x=zt}};window.addEventListener("mousemove",et),a(),ke(()=>t.bodyPosition,J=>{u.position.set(J.x,J.y,J.z)}),ke(()=>t.cameraPosition,J=>{c.position.set(t.bodyPosition.x,1,J),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Mi(),yi("div",{ref_key:"threeCanvas",ref:e,class:Hn(n.background?"no-bg":"three-canvas")},null,2))}}),a1=Si(o1,[["__scopeId","data-v-f3beb116"]]),l1=kn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=null,s=Yt(!1),r=Yt(!1),o=Yt(!1);return li(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:r.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ai,c=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),h=new oi({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new Zt,d=new Yi(16777215,2);l.add(d);const f=new qi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new Xi(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new Wi,p=x.load("/3d-bear-arts/assets/pop6.jpg"),m=x.load("/3d-bear-arts/assets/pop7.jpg");p.wrapS=p.wrapT=Ve,m.wrapS=m.wrapT=Ve;const b=new Ut({color:16738740,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),S=new Ut({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ue}),w=new Ut({color:16766720,map:p,metalness:.3,roughness:.5}),F=new Ut({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ue}),I=new Ut({color:9055202,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ut({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ue});const P=new Ut({color:65535,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),O=new Ut({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ue}),nt=new wt(1,32,32,0,Math.PI),M=new R(nt,S),E=new R(nt,b);M.scale.set(.85,.85,.8),E.scale.set(.85,.85,.8),M.position.y=-.2,E.position.y=-.2,M.rotation.y=Math.PI/2,E.rotation.y=Math.PI*1.5;const j=new Te(1,32),V=new R(j,b);V.scale.set(.85,.85,.8),V.position.set(0,-.2,0),V.rotation.y=Math.PI/2;const Z=new Zt;Z.add(M),Z.add(E),Z.add(V),u.add(Z);const rt=new wt(.6,32,32,0,Math.PI),H=new R(rt,w);H.scale.set(1,.95,.95),H.position.set(0,1,0),H.rotation.y=Math.PI*1.5;const Q=new R(rt,F);Q.scale.set(1,.95,.95),Q.position.set(0,1,0),Q.rotation.y=Math.PI/2;const B=new Te(.6,32),gt=new R(B,w);gt.position.set(0,1,0),gt.rotation.y=Math.PI/2,gt.scale.set(1,.95,.95);const yt=new Zt;yt.add(H),yt.add(Q),yt.add(gt),u.add(yt);const _t=new wt(.25,32,32),Ct=new R(_t,b);Ct.position.set(-.45,1.35,-.1),u.add(Ct);const Gt=new R(_t,S);Gt.position.set(.45,1.35,-.1),u.add(Gt);const ot=new wt(.25,32,32,Math.PI/2,Math.PI),ft=new R(ot,w);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI;const St=new wt(.25,32,32,Math.PI/2,Math.PI),N=new R(St,F);N.scale.set(1.1,.6,.8),N.position.set(0,.84,.5),N.rotation.y=0;const ut=new Te(.25,32),at=new R(ut,w);at.scale.set(.8,.6,.8),at.position.set(0,.84,.5),at.rotation.y=Math.PI/2;const lt=new Zt;lt.add(ft),lt.add(N),lt.add(at),u.add(lt);const Et=new Un;Et.moveTo(0,0),Et.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Et.bezierCurveTo(-.6,.3,0,.6,0,1),Et.bezierCurveTo(0,.6,.6,.3,.6,0),Et.bezierCurveTo(.6,-.3,0,-.3,0,0);const tt={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new Gn(Et,tt),T=new R(g,w);T.scale.set(.5,.5,.5),T.position.set(.35,0,0),T.rotation.y=Math.PI,T.rotation.x=Math.PI,u.add(T);const L=new R(g,P);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const D=new R(g,b);D.scale.set(.25,.25,.27),D.position.set(.4,.3,-.2),D.rotation.y=Math.PI,D.rotation.x=Math.PI,u.add(D);const U=new wt(.35,32,32),W=new R(U,P);W.scale.set(.75,1.25,.65),W.position.set(-.7,-.15,.2),u.add(W);const K=new R(U,O);K.scale.set(.75,1.25,.65),K.position.set(.7,-.15,.2),u.add(K);const y=new ce(.2,.22,.6,32),v=new R(y,w);v.position.set(-.4,-1.05,0),u.add(v);const C=new R(y,F);C.position.set(.4,-1.05,0),u.add(C);const X=new wt(.3,32,32),G=new R(X,w);G.scale.set(1,.72,1.5),G.position.set(-.4,-1.45,.17),u.add(G);const k=new R(X,F);k.scale.set(1,.72,1.5),k.position.set(.4,-1.45,.17),u.add(k);const ht=new wt(.44,32,32),ct=new R(ht,b);ct.position.set(-.15,-.45,-.4),u.add(ct);const pt=new R(ht,S);pt.position.set(.15,-.45,-.4),u.add(pt);const bt=new wt(.18,32,32),dt=new R(bt,b);dt.position.set(0,-.35,-.8),u.add(dt),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(mt){const et=new He("X",{font:mt,size:.2,depth:.05});new si({color:0});const J=new R(et,b);J.position.set(-.3,.99,.53),J.rotation.x=ae.degToRad(-5),J.rotation.y=ae.degToRad(-15),u.add(J);const xt=new He("O",{font:mt,size:.2,depth:.05});new si({color:0});const vt=new R(xt,P);vt.position.set(.14,.99,.53),vt.rotation.y=ae.degToRad(12),vt.rotation.x=ae.degToRad(-5),u.add(vt);const zt=new He("POP",{font:mt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),qt=new Ut({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ut({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Qt=new Ut({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Kt=new Ut({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),te=new R(zt,qt);te.scale.set(.15,.15,.15),te.position.set(.03,1.16,.1),te.rotateZ(-25),u.add(te);const le=new R(zt,I);le.scale.set(.14,.14,.14),le.rotateZ(45),le.position.set(.2,-.7,.3),u.add(le);const pe=new R(zt,Qt);pe.scale.set(.14,.14,.14),pe.rotateZ(45),pe.rotateY(45),pe.position.set(.3,.7,.3),u.add(pe);const we=new R(zt,Qt);we.scale.set(.15,.15,.15),we.rotateZ(45),we.rotateY(45),we.position.set(.35,-1.5,.3),u.add(we);const me=new R(zt,Kt);me.scale.set(.17,.17,.17),me.rotateZ(45),me.rotateY(15),me.position.set(.35,1,.3),u.add(me)}),dt.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Pt=()=>{u.rotation.y,u.rotation.x},Lt=()=>{s.value=!0,r.value=!1,o.value=!1},At=()=>{s.value=!1,r.value=!0,o.value=!1},Wt=()=>{s.value=!1,r.value=!1,Pt()},It=mt=>{const et=window.innerWidth/2;mt>et?Lt():At(),Pt()},Xt=mt=>{clearTimeout(i),Wt(),o.value=!0;const et={x:mt.clientX/window.innerWidth*2-1,y:-(mt.clientY/window.innerHeight)*2+1};if(o.value){const J=et.x*Math.PI*.2,xt=et.y*Math.PI*.2;u.rotation.y=J,u.rotation.x=xt}i=setTimeout(()=>{o.value=!1,It(mt.clientX)},500)};window.addEventListener("mousemove",Xt);const z=mt=>{if(o.value){const et={x:mt.clientX/window.innerWidth*2-1,y:-(mt.clientY/window.innerHeight)*2+1},J=et.x*Math.PI*.2,xt=et.y*Math.PI*.2;u.rotation.y=J,u.rotation.x=xt}};window.addEventListener("mousemove",z),a(),ke(()=>t.bodyPosition,mt=>{u.position.set(mt.x,mt.y,mt.z)}),ke(()=>t.cameraPosition,mt=>{c.position.set(t.bodyPosition.x,1,mt),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Mi(),yi("div",{ref_key:"threeCanvas",ref:e,class:Hn(n.background?"no-bg":"three-canvas")},null,2))}}),c1=Si(l1,[["__scopeId","data-v-8cfea564"]]),u1={class:"pixel-controls"},h1={class:"side-buttons"},d1=kn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),s=Yt(!1),r=Yt(!1),o=Yt(!1);li(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03);const J=mt.getElapsedTime();z.forEach((xt,vt)=>{const zt=.2+Math.sin(J*3+et[vt])*.1;xt.scale.set(zt,zt,zt)}),x.render(f,_)};const f=new ai,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),x=new oi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Zt,m=new Zt;f.add(m);const b=new Yi(16777215,2);f.add(b);const S=new qi(16777215,4);S.position.set(5,5,5),f.add(S);const w=new Xi(16777215,5,50);w.position.set(0,2,4),f.add(w);const F=new Wi,I=F.load("/3d-bear-arts/assets/pop6.jpg"),P=F.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=Ve,P.wrapS=P.wrapT=Ve,P.repeat.set(2,2);const O=new Ut({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),nt=new Ut({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ue}),M=new Ut({color:16766720,map:I,metalness:.3,roughness:.5}),E=new Ut({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ue}),j=new Ut({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),V=new Ut({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Ut({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ue}),rt=new wt(1,32,32,0,Math.PI),H=new R(rt,nt),Q=new R(rt,O);H.scale.set(.85,.85,.8),Q.scale.set(.85,.85,.8),H.position.y=-.2,Q.position.y=-.2,H.rotation.y=Math.PI/2,Q.rotation.y=Math.PI*1.5;const B=new Te(1,32),gt=new R(B,O);gt.scale.set(.85,.85,.8),gt.position.set(0,-.2,0),gt.rotation.y=Math.PI/2;const yt=new Zt;yt.add(H),yt.add(Q),yt.add(gt),p.add(yt);const _t=new wt(.6,32,32,0,Math.PI),Ct=new R(_t,M);Ct.scale.set(1,.95,.95),Ct.position.set(0,1,0),Ct.rotation.y=Math.PI*1.5;const Gt=new R(_t,E);Gt.scale.set(1,.95,.95),Gt.position.set(0,1,0),Gt.rotation.y=Math.PI/2;const ot=new Te(.6,32),ft=new R(ot,M);ft.position.set(0,1,0),ft.rotation.y=Math.PI/2,ft.scale.set(1,.95,.95);const St=new Zt;St.add(Ct),St.add(Gt),St.add(ft),p.add(St);const N=new wt(.25,32,32),ut=new R(N,O);ut.position.set(-.45,1.35,-.1),p.add(ut);const at=new R(N,nt);at.position.set(.45,1.35,-.1),p.add(at);const lt=new wt(.25,32,32,Math.PI/2,Math.PI),Et=new R(lt,M);Et.scale.set(1.1,.6,.8),Et.position.set(0,.84,.5),Et.rotation.y=Math.PI;const tt=new wt(.25,32,32,Math.PI/2,Math.PI),g=new R(tt,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const T=new Te(.25,32),L=new R(T,M);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const D=new Zt;D.add(Et),D.add(g),D.add(L),p.add(D);const U=new Un;U.moveTo(0,0),U.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),U.bezierCurveTo(-.6,.3,0,.6,0,1),U.bezierCurveTo(0,.6,.6,.3,.6,0),U.bezierCurveTo(.6,-.3,0,-.3,0,0);const W={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},K=new Gn(U,W),y=new R(K,M);y.scale.set(.5,.5,.5),y.position.set(.3,0,0),y.rotation.y=Math.PI,y.rotation.x=Math.PI,p.add(y);const v=new R(K,V);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new R(K,O);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,p.add(C);const X=new wt(.35,32,32),G=new R(X,V);G.scale.set(.75,1.25,.65),G.position.set(-.7,-.15,.2),p.add(G);const k=new R(X,Z);k.scale.set(.75,1.25,.65),k.position.set(.7,-.15,.2),p.add(k);const ht=new ce(.2,.22,.6,32),ct=new R(ht,M);ct.position.set(-.4,-1.05,0),p.add(ct);const pt=new R(ht,E);pt.position.set(.4,-1.05,0),p.add(pt);const bt=new wt(.3,32,32),dt=new R(bt,M);dt.scale.set(1,.72,1.5),dt.position.set(-.4,-1.45,.17),p.add(dt);const Mt=new R(bt,E);Mt.scale.set(1,.72,1.5),Mt.position.set(.4,-1.45,.17),p.add(Mt);const Pt=new wt(.44,32,32),Lt=new R(Pt,O);Lt.position.set(-.15,-.45,-.4),p.add(Lt);const At=new R(Pt,nt);At.position.set(.15,-.45,-.4),p.add(At);const Wt=new wt(.18,32,32),It=new R(Wt,O);It.position.set(0,-.35,-.8),p.add(It),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(J){const xt=new He("X",{font:J,size:.2,depth:.05}),vt=new R(xt,O);vt.position.set(-.3,.99,.53),vt.rotation.x=ae.degToRad(-5),vt.rotation.y=ae.degToRad(-15),p.add(vt);const zt=new He("O",{font:J,size:.2,depth:.05}),qt=new R(zt,V);qt.position.set(.14,.99,.53),qt.rotation.y=ae.degToRad(12),qt.rotation.x=ae.degToRad(-5),p.add(qt);const Qt=new He("POP",{font:J,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new He("🐻",{font:J,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Kt=new He("BAO      BEAR",{font:J,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),te=new Ut({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Ut({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const le=new Ut({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),pe=new Ut({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),we=new R(Qt,te);we.scale.set(.15,.15,.15),we.position.set(.02,1.16,.1),we.rotateZ(-25),p.add(we);const me=new R(Qt,j);me.scale.set(.14,.14,.14),me.rotateZ(45),me.position.set(.2,-.7,.3),p.add(me);const Ce=new R(Qt,le);Ce.scale.set(.14,.14,.14),Ce.rotateZ(45),Ce.rotateY(45),Ce.position.set(.3,.7,.3),p.add(Ce);const Ee=new R(Qt,le);Ee.scale.set(.15,.15,.15),Ee.rotateZ(45),Ee.rotateY(45),Ee.position.set(.35,-1.5,.3),p.add(Ee);const Fe=new R(Qt,pe);Fe.scale.set(.17,.17,.17),Fe.rotateZ(45),Fe.rotateY(15),Fe.position.set(.35,1,.3),p.add(Fe);const Re=new R(Kt,te);Re.scale.set(.7,.7,.7),Re.position.set(-6,0,-3),m.add(Re)}),It.renderOrder=1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,p.rotation.x=.1;const z=[y,v,C],mt=new Sp,et=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),ke(()=>t.bodyPosition,J=>{p.position.set(J.x,J.y,J.z)}),ke(()=>t.cameraPosition,J=>{_.position.set(t.bodyPosition.x,1,J),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(Mi(),yi(cn,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",u1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",h1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),f1=Si(d1,[["__scopeId","data-v-cb52c927"]]),p1={class:"pixel-controls"},m1={class:"side-buttons"},g1=kn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),s=Yt(!1),r=Yt(!1),o=Yt(!1);li(()=>{if(e.value){let d=function(le,pe){const we=new ce(Xt,Xt,z,32);we.rotateX(Math.PI/2);const me=new R(we,le),Ce=new Zt;for(let Fe=0;Fe<mt;Fe++){const Re=Fe/mt*Math.PI*2,Nt=new ti(et,J,xt),fe=new R(Nt,le);fe.position.set((Xt+xt/26)*Math.cos(Re),(Xt+xt/26)*Math.sin(Re),0),fe.rotation.z=Re,Ce.add(fe)}const Ee=new Zt;return Ee.add(me),Ee.add(Ce),Ee.position.set(pe.x,pe.y,pe.z),Ee},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),vt.rotation.z-=.02,zt.rotation.z+=.03,qt.rotation.z+=.02,Qt.rotation.z+=.02,Kt.rotation.z-=.03,te.rotation.y+=.04,p.render(_,x)};const _=new ai,x=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),p=new oi({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Zt,b=new Zt;_.add(b);const S=new Yi(16777215,2);_.add(S);const w=new qi(16777215,4);w.position.set(5,5,5),_.add(w);const F=new Xi(16777215,5,50);F.position.set(0,2,4),_.add(F);const I=new Wi,P=I.load("/3d-bear-arts/assets/metal.jpg"),O=I.load("/3d-bear-arts/assets/pop7.jpg"),nt=I.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=Ve,O.wrapS=O.wrapT=Ve,O.repeat.set(2,2);const M=new Ut({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});nt.mapping=ro;const E=new Ut({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:nt,clearcoat:.7,clearcoatRoughness:.3}),j=new Ut({color:"#C0C0C0",metalness:1,roughness:.25,envMap:nt,clearcoat:.7,clearcoatRoughness:.3}),V=new Ut({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:nt,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),Z=new Ut({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:nt,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),rt=new Ut({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:ue});new Ut({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const H=new Ut({color:"#d3d3d3",metalness:1,roughness:.2,map:nt,envMap:nt,clearcoat:.7,clearcoatRoughness:.3});new Ut({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:nt}),new Ut({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const Q=new wt(1,32,32,0,Math.PI),B=new R(Q,Z),gt=new R(Q,E);B.scale.set(.85,.85,.8),gt.scale.set(.85,.85,.8),B.position.y=-.2,gt.position.y=-.2,B.rotation.y=Math.PI/2,gt.rotation.y=Math.PI*1.5;const yt=new Te(1,32),_t=new R(yt,V);_t.scale.set(.85,.85,.8),_t.position.set(0,-.2,0),_t.rotation.y=Math.PI/2;const Ct=new Zt;Ct.add(B),Ct.add(gt),Ct.add(_t),m.add(Ct);const Gt=new wt(.6,32,32,0,Math.PI),ot=new R(Gt,E);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI*1.5;const ft=new R(Gt,Z);ft.scale.set(1,.95,.95),ft.position.set(0,1,0),ft.rotation.y=Math.PI/2;const St=new Te(.6,32),N=new R(St,V);N.position.set(0,1,0),N.rotation.y=Math.PI/2,N.scale.set(1,.95,.95);const ut=new Zt;ut.add(ot),ut.add(ft),ut.add(N),m.add(ut);const at=new wt(.25,32,32),lt=new R(at,E);lt.position.set(-.45,1.35,-.1),m.add(lt);const Et=new R(at,V);Et.position.set(.45,1.35,-.1),m.add(Et);const tt=new wt(.25,32,32,Math.PI/2,Math.PI),g=new R(tt,E);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const T=new wt(.25,32,32,Math.PI/2,Math.PI),L=new R(T,V);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const D=new Te(.25,32),U=new R(D,rt);U.scale.set(.8,.6,.8),U.position.set(0,.84,.5),U.rotation.y=Math.PI/2;const W=new Zt;W.add(g),W.add(L),W.add(U),m.add(W);const K=new Un;K.moveTo(0,0),K.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),K.bezierCurveTo(-.6,.3,0,.6,0,1),K.bezierCurveTo(0,.6,.6,.3,.6,0),K.bezierCurveTo(.6,-.3,0,-.3,0,0);const y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new Gn(K,y),C=new wt(.35,32,32),X=new R(C,E);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),m.add(X);const G=new R(C,V);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),m.add(G);const k=new ce(.2,.22,.6,32),ht=new R(k,E);ht.position.set(-.4,-1.05,0),m.add(ht);const ct=new R(k,V);ct.position.set(.4,-1.05,0),m.add(ct);const pt=new wt(.3,32,32),bt=new R(pt,E);bt.scale.set(1,.72,1.5),bt.position.set(-.4,-1.45,.17),m.add(bt);const dt=new R(pt,V);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),m.add(dt);const Mt=new wt(.44,32,32),Pt=new R(Mt,E);Pt.position.set(-.15,-.45,-.4),m.add(Pt);const Lt=new R(Mt,Z);Lt.position.set(.15,-.45,-.4),m.add(Lt);const At=new wt(.18,32,32),Wt=new R(At,E);Wt.position.set(0,-.35,-.8),m.add(Wt),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(le){const pe=new He("X",{font:le,size:.2,depth:.05});new si({color:0});const we=new R(pe,M);we.position.set(-.3,.99,.53),we.rotation.x=ae.degToRad(-5),we.rotation.y=ae.degToRad(-15),m.add(we);const me=new He("O",{font:le,size:.2,depth:.05});new si({color:0});const Ce=new R(me,M);Ce.position.set(.14,.99,.53),Ce.rotation.y=ae.degToRad(12),Ce.rotation.x=ae.degToRad(-5),m.add(Ce)}),Wt.renderOrder=1;const Xt=1.2,z=.5,mt=8,et=.7,J=.3,xt=.5,vt=d(H,{x:-2,y:0,z:0}),zt=d(H,{x:0,y:0,z:0}),qt=d(H,{x:2,y:0,z:0}),Qt=d(H,{x:2,y:0,z:0}),Kt=d(H,{x:2,y:-2,z:0}),te=new R(v,j);te.scale.set(.3,.3,.3),te.position.set(.25,1.1,0),te.rotation.y=Math.PI,te.rotation.x=Math.PI,m.add(te),vt.position.set(.35,0,0),zt.position.set(.25,-.3,.4),qt.position.set(.3,.3,-.2),Qt.position.set(.25,.17,.4),Kt.position.set(.5,-.3,.45),vt.scale.set(.2,.2,.2),zt.scale.set(.18,.18,.18),qt.scale.set(.15,.15,.15),Qt.scale.set(.17,.17,.17),Kt.scale.set(.15,.15,.15),zt.rotation.z=Math.PI/4,qt.rotation.z=-Math.PI/4,Qt.rotation.y=-Math.PI/2,Kt.rotation.y=-Math.PI/2,m.add(vt),m.add(zt),m.add(qt),m.add(Qt),m.add(Kt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,f(),ke(()=>t.bodyPosition,le=>{m.position.set(le.x,le.y,le.z)}),ke(()=>t.cameraPosition,le=>{x.position.set(t.bodyPosition.x,1,le),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(Mi(),yi(cn,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",p1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",m1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),_1=Si(g1,[["__scopeId","data-v-9a57b6d8"]]),v1={class:"pixel-controls"},x1={class:"side-buttons"},M1=kn({__name:"WaterBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),s=Yt(!1),r=Yt(!1),o=Yt(!1);li(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),x.render(f,_)};const f=new ai,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),x=new oi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Zt,m=new Zt;f.add(m);const b=new Yi(16777215,2);f.add(b);const S=new qi(16777215,4);S.position.set(5,5,5),f.add(S);const w=new Xi(16777215,5,50);w.position.set(0,2,4),f.add(w);const F=new Wi,I=F.load("/3d-bear-arts/assets/sun.jpg"),P=F.load("/3d-bear-arts/assets/gear.jpg"),O=F.load("/3d-bear-arts/assets/underwater.jpg"),nt=F.load("/3d-bear-arts/assets/beach.jpg");O.wrapS=O.wrapT=Ve,nt.wrapS=nt.wrapT=Ve,nt.repeat.set(.8,1),P.mapping=ro,I.wrapS=I.wrapT=Ve;const M=new Ut({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,map:nt,envMapIntensity:.8,side:ue,transparent:!0,opacity:.9}),E=new Ut({color:11592447,metalness:.05,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,reflectivity:.4,map:nt,envMapIntensity:.6,side:ue,transparent:!0,opacity:.9,transmission:.5,ior:1.33,depthWrite:!1,depthTest:!0});new Ut({color:11592447,metalness:.05,roughness:.4,clearcoat:.9,clearcoatRoughness:.2,reflectivity:.6,envMapIntensity:.8,map:nt,side:ue,transparent:!0,opacity:.9});const j=new Ut({color:8374441,metalness:1,roughness:.25,envMap:P,clearcoat:.7,clearcoatRoughness:.3}),V=new Ut({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,clearcoat:.6,clearcoatRoughness:.25,transmission:.6,ior:1.4,depthWrite:!1,depthTest:!0,side:ue}),Z=new Ut({color:11592447,metalness:.1,roughness:.3,transparent:!0,opacity:.5,map:nt,clearcoat:.1,clearcoatRoughness:.25,transmission:.6,ior:1.4}),rt=new Ut({color:"#a4d0f5",metalness:0,roughness:.8,map:I,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.8,transparent:!0}),H=new Ut({color:"#a4d0f5",metalness:0,roughness:.85,map:nt,clearcoat:.1,clearcoatRoughness:.7,transmission:.9,opacity:.6,transparent:!0}),Q=new wt(1,32,32,0,Math.PI),B=new R(Q,V),gt=new R(Q,E);B.scale.set(.85,.85,.8),gt.scale.set(.85,.85,.8),B.position.y=-.2,gt.position.y=-.2,B.rotation.y=Math.PI/2,gt.rotation.y=Math.PI*1.5;const yt=new Te(1,32),_t=new R(yt,H);_t.scale.set(.85,.85,.8),_t.position.set(0,-.2,0),_t.rotation.y=Math.PI/2;const Ct=new Zt;Ct.add(B),Ct.add(gt),Ct.add(_t);const Gt=new wt(.6,32,32,0,Math.PI*2,0,Math.PI/2),ot=new Ut({color:6935271,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ft=new R(Gt,ot);ft.position.set(0,-.2,0),ft.rotation.x=Math.PI,ft.scale.set(1.25,1.25,1.25),Ct.add(ft);const St=new Ut({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ue,transparent:!0,opacity:.7,depthWrite:!1}),N=new R(yt,St);N.scale.set(.7,.7,.7),N.position.set(0,-.3,0),N.rotation.x=Math.PI/2,N.renderOrder=1,Ct.add(N),p.add(Ct);const ut=new wt(.6,32,32,0,Math.PI),at=new R(ut,M);at.scale.set(1,.95,.95),at.position.set(0,1,0),at.rotation.y=Math.PI*1.5;const lt=new R(ut,Z);lt.scale.set(1,.95,.95),lt.position.set(0,1,0),lt.rotation.y=Math.PI/2;const Et=new Te(.6,32),tt=new R(Et,rt);tt.position.set(0,1,0),tt.rotation.y=Math.PI/2,tt.scale.set(1,.95,.95);const g=new Zt;g.add(at),g.add(lt),g.add(tt),p.add(g);const T=new wt(.25,32,32),L=new R(T,M);L.position.set(-.45,1.35,-.1),p.add(L);const D=new R(T,Z);D.position.set(.45,1.35,-.1),p.add(D);const U=new wt(.25,32,32,Math.PI/2,Math.PI),W=new R(U,M);W.scale.set(1.1,.6,.8),W.position.set(0,.84,.5),W.rotation.y=Math.PI;const K=new wt(.25,32,32,Math.PI/2,Math.PI),y=new R(K,Z);y.scale.set(1.1,.6,.8),y.position.set(0,.84,.5),y.rotation.y=0;const v=new Te(.25,32),C=new R(v,rt);C.scale.set(.8,.6,.8),C.position.set(0,.84,.5),C.rotation.y=Math.PI/2;const X=new Zt;X.add(W),X.add(y),X.add(C),p.add(X);const G=new Un;G.moveTo(0,0),G.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),G.bezierCurveTo(-.6,.3,0,.6,0,1),G.bezierCurveTo(0,.6,.6,.3,.6,0),G.bezierCurveTo(.6,-.3,0,-.3,0,0);const k={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},ht=new Gn(G,k),ct=new wt(.35,32,32),pt=new R(ct,M);pt.scale.set(.75,1.25,.65),pt.position.set(-.7,-.15,.2),p.add(pt);const bt=new R(ct,Z);bt.scale.set(.75,1.25,.65),bt.position.set(.7,-.15,.2),p.add(bt);const dt=new ce(.2,.22,.6,32),Mt=new R(dt,M);Mt.position.set(-.4,-1.05,0),p.add(Mt);const Pt=new R(dt,Z);Pt.position.set(.4,-1.05,0),p.add(Pt);const Lt=new wt(.3,32,32),At=new R(Lt,M);At.scale.set(1,.72,1.5),At.position.set(-.4,-1.45,.17),p.add(At);const Wt=new R(Lt,Z);Wt.scale.set(1,.72,1.5),Wt.position.set(.4,-1.45,.17),p.add(Wt);const It=new wt(.44,32,32),Xt=new R(It,M);Xt.position.set(-.15,-.45,-.4),p.add(Xt);const z=new R(It,Z);z.position.set(.15,-.45,-.4),p.add(z);const mt=new wt(.18,32,32),et=new R(mt,E);et.position.set(0,-.35,-.8),p.add(et),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(vt){const zt=new He("X",{font:vt,size:.2,depth:.05});new si({color:0});const qt=new R(zt,M);qt.position.set(-.3,.99,.53),qt.rotation.x=ae.degToRad(-5),qt.rotation.y=ae.degToRad(-15),p.add(qt);const Qt=new He("O",{font:vt,size:.2,depth:.05});new si({color:0});const Kt=new R(Qt,E);Kt.position.set(.14,.99,.53),Kt.rotation.y=ae.degToRad(12),Kt.rotation.x=ae.degToRad(-5),p.add(Kt)}),et.renderOrder=1,p.rotation.x=.1;const xt=new R(ht,j);xt.scale.set(.3,.3,.3),xt.position.set(.25,1.1,0),xt.rotation.y=Math.PI,xt.rotation.x=Math.PI,p.add(xt),p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,d(),ke(()=>t.bodyPosition,vt=>{p.position.set(vt.x,vt.y,vt.z)}),ke(()=>t.cameraPosition,vt=>{_.position.set(t.bodyPosition.x,1,vt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(Mi(),yi(cn,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",v1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",x1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),y1=Si(M1,[["__scopeId","data-v-08c607ba"]]),S1={class:"pixel-controls"},w1={class:"side-buttons"},E1={class:"directional-buttons"},b1={class:"horizontal-buttons"},T1={class:"directional-buttons-woman"},A1={class:"horizontal-buttons-woman"},R1={class:"directional-buttons-kid"},P1={class:"horizontal-buttons-kid"},Zo=.1,Jo=.05,Qo=.08,C1=kn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),s=Yt(!1),r=Yt(!1),o=Yt(!1);const a=rr(null),l=Yt(!1),c=Yt(!1),h=Yt(!1),u=Yt(!1),d=rr(null),f=rr(null),_=Yt(!1),x=Yt(!1),p=Yt(!1),m=Yt(!1),b=Yt(!1),S=Yt(!1),w=Yt(!1),F=Yt(!1),I=new oi({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new ai,O=new Be(75,window.innerWidth/window.innerHeight,.1,1e3);O.position.z=5,li(()=>{if(e.value){let tt=function(){const Rt=new Zt,Ie=new wt(.2,32,32),Ue=new ee({color:16767916}),ve=new R(Ie,Ue);ve.position.set(0,1.5,0),Rt.add(ve);const rn=new wt(.21,32,32,0,Math.PI*2,0,Math.PI/2),xe=new ee({color:16711680}),Ke=new R(rn,xe);Ke.position.set(0,1.58,0),Rt.add(Ke);const An=new ce(.25,.25,.6,32),Ge=new ee({color:16767916}),Sn=new R(An,Ge);Sn.position.set(0,1,0),Rt.add(Sn);const ci=new ce(.26,.26,.3,32),Nn=new ee({color:255}),Wn=new R(ci,Nn);Wn.position.set(0,.65,0),Rt.add(Wn);const Xn=new ce(.1,.1,.5,32),pn=new ee({color:16767916}),Fn=new R(Xn,pn);Fn.position.set(-.15,.25,0),Rt.add(Fn);const qn=new R(Xn,pn);qn.position.set(.15,.25,0),Rt.add(qn);const ui=new ce(.08,.08,.5,32),wn=new R(ui,pn);wn.position.set(-.35,1.3,0),wn.rotation.z=Math.PI/4,Rt.add(wn);const En=new R(ui,pn);return En.position.set(.35,1.3,0),En.rotation.z=-Math.PI/4,Rt.add(En),Rt.scale.set(.27,.27,.27),Rt.position.set(-.2,-.1,-.15),Rt},g=function(){const Rt=new Zt,Ie=new wt(.18,32,32),Ue=new ee({color:16767916}),ve=new R(Ie,Ue);ve.position.set(0,1.2,.04),Rt.add(ve);const rn=new wt(.19,32,32,.4,Math.PI*2,0,Math.PI/2),xe=new ce(.18,.18,.4,32),Ke=new ee({color:9127187}),An=new R(rn,Ke);An.position.set(0,1.28,0),Rt.add(An);const Ge=new R(xe,Ke);Ge.position.set(0,1.1,-.01),Rt.add(Ge);const Sn=new ce(.18,.2,.5,32),ci=new ee({color:16767916}),Nn=new R(Sn,ci);Nn.position.set(0,.85,0),Rt.add(Nn);const Wn=new wt(.08,32,32,0,Math.PI),Xn=new ee({color:16738740}),pn=new R(Wn,Xn);pn.position.set(-.09,.98,.15),Rt.add(pn);const Fn=new R(Wn,Xn);Fn.position.set(.09,.98,.15),Rt.add(Fn);const qn=new ce(.22,.22,.25,32),ui=new ee({color:16738740}),wn=new R(qn,ui);wn.position.set(0,.6,0),Rt.add(wn);const En=new ce(.1,.1,.6,32),Ei=new ee({color:16767916}),br=new R(En,Ei);br.position.set(-.09,.5,.2),br.rotation.x=Math.PI/2,Rt.add(br);const Fs=new R(En,Ei);Fs.position.set(.09,.5,.2),Fs.rotation.x=Math.PI/2,Rt.add(Fs);const wu=new ce(.08,.08,.35,32),Ga=new R(wu,Ei);Ga.position.set(-.24,.95,.18),Ga.rotation.x=Math.PI/2,Rt.add(Ga);const Ha=new R(wu,Ei);return Ha.position.set(.2,.85,0),Ha.rotation.z=Math.PI/20,Rt.add(Ha),Rt.scale.set(.27,.27,.27),Rt.position.set(.2,-.15,-.32),Rt},T=function(){const Rt=new Zt,Ie=new wt(.2,32,32),Ue=new ee({color:16767916}),ve=new R(Ie,Ue);ve.position.set(0,1.5,0),Rt.add(ve);const rn=new wt(.21,32,32,0,Math.PI*2,0,Math.PI/2),xe=new ee({color:25600}),Ke=new R(rn,xe);Ke.position.set(0,1.58,0),Rt.add(Ke);const An=new ce(.22,.22,.5,32),Ge=new ee({color:16767916}),Sn=new R(An,Ge);Sn.position.set(0,1,0),Rt.add(Sn);const ci=new ce(.23,.23,.3,32),Nn=new ee({color:8388736}),Wn=new R(ci,Nn);Wn.position.set(0,.65,0),Rt.add(Wn);const Xn=new ce(.1,.1,.5,32),pn=new ee({color:16767916}),Fn=new R(Xn,pn);Fn.position.set(-.15,.3,-.25),Fn.rotation.x=Math.PI/6,Rt.add(Fn);const qn=new R(Xn,pn);qn.position.set(.15,.3,.25),qn.rotation.x=-Math.PI/6,Rt.add(qn);const ui=new ce(.08,.08,.4,32),wn=new R(ui,pn);wn.position.set(-.28,1,-.2),wn.rotation.x=Math.PI/6,Rt.add(wn);const En=new R(ui,pn);return En.position.set(.28,1.3,.1),En.rotation.z=-Math.PI/8,Rt.add(En),Rt.scale.set(.15,.15,.15),Rt.position.set(.3,-.25,.25),Rt.rotation.x=Math.PI/12,Rt.rotation.y=Math.PI/2,Rt.rotation.z=-Math.PI/3,Rt},L=function(Rt){let Ie=1,Ue=0;function ve(){requestAnimationFrame(ve),Rt.position.x+=.01*Ie,Rt.position.x>=.35?(Ie=-1,Rt.rotation.y=Math.PI):Rt.position.x<=-.35&&(Ie=1,Rt.rotation.y=0),Ue+=.003,Rt.position.y=-.4+Math.sin(Ue)*.1,K.render(U,W)}ve()},D=function(){requestAnimationFrame(D),i.value&&(y.rotation.y+=.03),s.value&&(y.rotation.y-=.03),r.value&&(y.rotation.x-=.03),o.value&&(y.rotation.x+=.03),we.uniforms.u_time.value+=.25,it.rotation.y+=.04,K.render(U,W)};const U=new ai,W=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),K=new oi({antialias:!0,alpha:!0});K.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(K.domElement);const y=new Zt,v=new Zt;U.add(v);const C=new Yi(16777215,2);U.add(C);const X=new qi(16777215,4);X.position.set(5,5,5),U.add(X);const G=new Xi(16777215,5,50);G.position.set(0,2,4),U.add(G);const k=new Wi,ht=k.load("/3d-bear-arts/assets/beach.jpg");ht.repeat.set(.8,1);const ct=k.load("/3d-bear-arts/assets/sun.jpg");ht.wrapS=ht.wrapT=Ve,ht.repeat.set(.8,1),ct.wrapS=ct.wrapT=Ve;const pt=new Ut({color:11592447,map:ht,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),bt=new Ut({color:11592447,map:ht,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:ue,ior:1.33,depthWrite:!1,depthTest:!0}),dt=new Ut({color:11592447,map:ht,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),Mt=new Ut({color:11592447,map:ht,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:ue}),Pt=new Ut({color:11592447,map:ht,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:ue,ior:1.33}),Lt=new Ut({color:11592447,map:ht,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),At=new wt(1,32,32,0,Math.PI),Wt=new R(At,Mt),It=new R(At,bt);Wt.scale.set(.85,.85,.8),It.scale.set(.85,.85,.8),Wt.position.y=-.2,It.position.y=-.2,Wt.rotation.y=Math.PI/2,It.rotation.y=Math.PI*1.5;const Xt=new Te(1,32),z=new R(Xt,pt);z.scale.set(.85,.85,.8),z.position.set(0,-.2,0),z.rotation.y=Math.PI/2;const mt=new Zt;mt.add(Wt),mt.add(It),mt.add(z),y.add(mt);const et=new wt(.6,32,32,0,Math.PI),J=new R(et,pt);J.scale.set(1,.95,.95),J.position.set(0,1,0),J.rotation.y=Math.PI*1.5;const xt=new R(et,dt);xt.scale.set(1,.95,.95),xt.position.set(0,1,0),xt.rotation.y=Math.PI/2;const vt=new Te(.6,32),zt=new R(vt,pt);zt.position.set(0,1,0),zt.rotation.y=Math.PI/2,zt.scale.set(1,.95,.95);const qt=new Zt;qt.add(J),qt.add(xt),qt.add(zt),y.add(qt);const Qt=new wt(.6,32,32,0,Math.PI*2,0,Math.PI/2),Kt=new Ut({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),te=new R(Qt,Kt);te.position.set(0,-.2,0),te.rotation.x=Math.PI,te.scale.set(1.25,1.25,1.25),mt.add(te);const le=new Ut({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:ue,transparent:!0,opacity:.7,depthWrite:!1}),pe=new R(Xt,le);pe.scale.set(.7,.7,.7),pe.position.set(0,-.3,0),pe.rotation.x=Math.PI/2,pe.renderOrder=1,mt.add(pe),y.add(mt);const we=new ri({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),me=new R(Xt,we);me.position.set(0,-.3,0),me.scale.set(.7,.7,.7),me.rotation.x=-Math.PI/2,me.renderOrder=1,mt.add(me);const Ce=new wt(.25,32,32),Ee=new R(Ce,Pt);Ee.position.set(-.45,1.35,-.1),y.add(Ee);const Fe=new R(Ce,dt);Fe.position.set(.45,1.35,-.1),y.add(Fe);const Re=new wt(.25,32,32,Math.PI/2,Math.PI),Nt=new R(Re,Pt);Nt.scale.set(1.1,.6,.8),Nt.position.set(0,.84,.5),Nt.rotation.y=Math.PI;const fe=new wt(.25,32,32,Math.PI/2,Math.PI),Oe=new R(fe,dt);Oe.scale.set(1.1,.6,.8),Oe.position.set(0,.84,.5),Oe.rotation.y=0;const $e=new Te(.25,32),We=new R($e,bt);We.scale.set(.8,.6,.8),We.position.set(0,.84,.5),We.rotation.y=Math.PI/2;const Tn=new Zt;Tn.add(Nt),Tn.add(Oe),Tn.add(We),y.add(Tn);const yn=new Ut({color:8374441,metalness:1,roughness:.25,envMap:ct,clearcoat:.7,clearcoatRoughness:.3}),A=new Un;A.moveTo(0,0),A.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),A.bezierCurveTo(-.6,.3,0,.6,0,1),A.bezierCurveTo(0,.6,.6,.3,.6,0),A.bezierCurveTo(.6,-.3,0,-.3,0,0);const Y={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},st=new Gn(A,Y),it=new R(st,yn);it.scale.set(.2,.2,.2),it.position.set(.25,1.2,0),it.rotation.y=Math.PI,it.rotation.x=Math.PI,y.add(it);const $=new wt(.35,32,32),Tt=new R($,bt);Tt.scale.set(.75,1.25,.65),Tt.position.set(-.7,-.15,.2),y.add(Tt);const Dt=new R($,Mt);Dt.scale.set(.75,1.25,.65),Dt.position.set(.7,-.15,.2),y.add(Dt);const Ht=new ce(.2,.22,.6,32),kt=new R(Ht,Pt);kt.position.set(-.4,-1.05,0),y.add(kt);const jt=new R(Ht,dt);jt.position.set(.4,-1.05,0),y.add(jt);const Jt=new wt(.3,32,32),Vt=new R(Jt,Pt);Vt.scale.set(1,.72,1.5),Vt.position.set(-.4,-1.45,.17),y.add(Vt);const ie=new R(Jt,dt);ie.scale.set(1,.72,1.5),ie.position.set(.4,-1.45,.17),y.add(ie);const ge=new wt(.44,32,32),_e=new R(ge,Pt);_e.position.set(-.15,-.45,-.4),y.add(_e);const Je=new R(ge,Pt);Je.position.set(.15,-.45,-.4),y.add(Je);const de=new wt(.18,32,32),$t=new R(de,Pt);$t.position.set(0,-.35,-.8),y.add($t),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Rt){const Ie=new He("X",{font:Rt,size:.2,depth:.05}),Ue=new R(Ie,Lt);Ue.position.set(-.3,.99,.53),Ue.rotation.x=ae.degToRad(-5),Ue.rotation.y=ae.degToRad(-15),y.add(Ue);const ve=new He("O",{font:Rt,size:.2,depth:.05}),rn=new R(ve,Lt);rn.position.set(.14,.99,.53),rn.rotation.y=ae.degToRad(12),rn.rotation.x=ae.degToRad(-5),y.add(rn)}),a.value=tt(),y.add(a.value),U.add(y),d.value=g(),y.add(d.value),f.value=T(),y.add(f.value),L(f.value),y.scale.set(1.4,1.4,1.4),U.add(y),y.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),W.position.set(t.bodyPosition.x,1,t.cameraPosition),W.lookAt(t.bodyPosition.x,0,0),W.position.z=4,y.rotation.x=.1,D(),ke(()=>t.bodyPosition,Rt=>{y.position.set(Rt.x,Rt.y,Rt.z)}),ke(()=>t.cameraPosition,Rt=>{W.position.set(t.bodyPosition.x,1,Rt),W.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{W.aspect=window.innerWidth/window.innerHeight,W.updateProjectionMatrix(),K.setSize(window.innerWidth,window.innerHeight)})}});function nt(){s.value=!0}function M(){i.value=!0}function E(){r.value=!0}function j(){o.value=!0}function V(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}const Z=()=>{l.value=!0,console.log(l.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},rt=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},H=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},Q=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},B=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},gt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},yt=()=>{x.value=!0,d.value&&(d.value.rotation.y=0)},_t=()=>{p.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},Ct=()=>{m.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},Gt=()=>{_.value=!1,x.value=!1,p.value=!1,m.value=!1},ot=()=>{requestAnimationFrame(ot),a.value&&(l.value&&(a.value.position.z-=Zo),c.value&&(a.value.position.z+=Zo),h.value&&(a.value.position.x-=Zo),u.value&&(a.value.position.x+=Zo)),I.render(P,O)},ft=()=>{requestAnimationFrame(ft),d.value&&(_.value&&(d.value.position.z-=Jo),x.value&&(d.value.position.z+=Jo),p.value&&(d.value.position.x-=Jo),m.value&&(d.value.position.x+=Jo))};ft(),ot();const St=()=>{b.value=!0,f.value&&(f.value.rotation.y=0)},N=()=>{S.value=!0,f.value&&(f.value.rotation.y=Math.PI)},ut=()=>{w.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},at=()=>{F.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},lt=()=>{b.value=!1,S.value=!1,w.value=!1,F.value=!1},Et=()=>{requestAnimationFrame(Et),f.value&&(b.value&&(f.value.position.z-=Qo),S.value&&(f.value.position.z+=Qo),w.value&&(f.value.position.x-=Qo),F.value&&(f.value.position.x+=Qo))};return Et(),(tt,g)=>(Mi(),yi(cn,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",S1,[Ft("button",{class:"pixel-btn up",onMousedown:E,onMouseup:V},"UP",32),Ft("div",w1,[Ft("button",{class:"pixel-btn left",onMousedown:nt,onMouseup:V},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:M,onMouseup:V},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:j,onMouseup:V},"DOWN",32)]),Ft("div",E1,[Ft("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:Z,onMouseup:B},"UP",32),Ft("div",b1,[Ft("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:H,onMouseup:B},"LEFT",32),Ft("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:Q,onMouseup:B},"RIGHT",32)]),Ft("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:rt,onMouseup:B},"DOWN",32)]),Ft("div",T1,[Ft("button",{class:"directional-btn-woman north-btn",onMousedown:gt,onMouseup:Gt},"UP",32),Ft("div",A1,[Ft("button",{class:"directional-btn-woman west-btn",onMousedown:_t,onMouseup:Gt},"LEFT",32),Ft("button",{class:"directional-btn-woman east-btn",onMousedown:Ct,onMouseup:Gt},"RIGHT",32)]),Ft("button",{class:"directional-btn-woman south-btn",onMousedown:yt,onMouseup:Gt},"DOWN",32)]),Ft("div",R1,[Ft("button",{class:"directional-btn-kid north-btn",onMousedown:St,onMouseup:lt},"UP",32),Ft("div",P1,[Ft("button",{class:"directional-btn-kid west-btn",onMousedown:ut,onMouseup:lt},"LEFT",32),Ft("button",{class:"directional-btn-kid east-btn",onMousedown:at,onMouseup:lt},"RIGHT",32)]),Ft("button",{class:"directional-btn-kid south-btn",onMousedown:N,onMouseup:lt},"DOWN",32)])],64))}}),I1=Si(C1,[["__scopeId","data-v-354294c6"]]),L1={class:"pixel-controls"},D1={class:"side-buttons"},U1=kn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),s=Yt(!1),r=Yt(!1),o=Yt(!1);li(()=>{if(e.value){let d=function(Ee,Fe){const Re=new Zt,Nt=new wt(1,32,32),fe=new R(Nt,rt);fe.scale.set(1,.8,1),Re.add(fe);const Oe=new ce(.1,.1,.5,16),$e=new ee({color:9127187}),We=new R(Oe,$e);return We.position.set(0,.9,0),Re.add(We),Re},f=function(){requestAnimationFrame(f),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),r.value&&(m.rotation.x-=.03),o.value&&(m.rotation.x+=.03),Xt.rotation.z-=.04,z.rotation.z+=.04,mt.rotation.z+=.03,et.rotation.z+=.03,v.rotation.y+=.04,Ce+=we,m.position.y=t.bodyPosition.y+Math.sin(Ce)*me;const Ee=le.getElapsedTime();te.forEach((Fe,Re)=>{const Nt=.1+Math.sin(Ee*3+pe[Re])*.1;Fe.scale.set(Nt,Nt,Nt)}),p.render(_,x)};const _=new ai,x=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),p=new oi({antialias:!0,alpha:!0});p.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(p.domElement);const m=new Zt,b=new Zt;_.add(b);const S=new Yi(16777215,2);_.add(S);const w=new qi(16777215,4);w.position.set(5,5,5),_.add(w);const F=new Xi(16777215,5,50);F.position.set(0,2,4),_.add(F);const I=new Wi,P=I.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=Ve,P.repeat.set(.8,.85);const O=I.load("/3d-bear-arts/assets/pumpkin.jpg");O.wrapS=O.wrapT=Ve,O.repeat.set(1,1);const nt=I.load("/3d-bear-arts/assets/pumpkin.jpg");nt.wrapS=O.wrapT=Ve,nt.repeat.set(2,.8);const M=new Ut({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),E=new Zt,j=new Ut({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),V=new Ut({color:16747520,map:O,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Z=new Ut({color:16747520,map:nt,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:ue}),rt=new Ut({color:16747520,map:nt,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Ut({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ut({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Ut({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const H=new wt(1,32,32,0,Math.PI),Q=new R(H,Z),B=new R(H,j);Q.scale.set(.85,.85,.8),B.scale.set(.85,.85,.8),Q.position.y=-.2,B.position.y=-.2,Q.rotation.y=Math.PI/2,B.rotation.y=Math.PI*1.5;const gt=new Te(1,32),yt=new R(gt,V);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const _t=new Zt;_t.add(Q),_t.add(B),_t.add(yt),m.add(_t);const Ct=new wt(.6,32,32,0,Math.PI),Gt=new R(Ct,j);Gt.scale.set(1,.95,.95),Gt.position.set(0,1,0),Gt.rotation.y=Math.PI*1.5;const ot=new R(Ct,Z);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI/2;const ft=new Te(.6,32),St=new R(ft,V);St.position.set(0,1,0),St.rotation.y=Math.PI/2,St.scale.set(1,.95,.95);const N=new Zt;N.add(Gt),N.add(ot),N.add(St),m.add(N);const ut=new wt(.25,32,32),at=new R(ut,rt);at.position.set(-.45,1.35,-.1),m.add(at);const lt=new R(ut,Z);lt.position.set(.45,1.35,-.1),m.add(lt);const Et=new wt(.25,32,32,Math.PI/2,Math.PI),tt=new R(Et,j);tt.scale.set(1.1,.6,.8),tt.position.set(0,.84,.5),tt.rotation.y=Math.PI;const g=new wt(.25,32,32,Math.PI/2,Math.PI),T=new R(g,Z);T.scale.set(1.1,.6,.8),T.position.set(0,.84,.5),T.rotation.y=0;const L=new Te(.25,32),D=new R(L,j);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const U=new Zt;U.add(tt),U.add(T),U.add(D),m.add(U);const W=new Un;W.moveTo(0,0),W.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),W.bezierCurveTo(-.6,.3,0,.6,0,1),W.bezierCurveTo(0,.6,.6,.3,.6,0),W.bezierCurveTo(.6,-.3,0,-.3,0,0);const K={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},y=new Gn(W,K),v=new R(y,M);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new wt(.35,32,32),X=new R(C,V);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),m.add(X);const G=new R(C,Z);G.scale.set(.75,1.25,.65),G.position.set(.7,-.15,.2),m.add(G);const k=new ce(.2,.22,.6,32),ht=new R(k,V);ht.position.set(-.4,-1.05,0),m.add(ht);const ct=new R(k,Z);ct.position.set(.4,-1.05,0),m.add(ct);const pt=new wt(.3,32,32),bt=new R(pt,rt);bt.scale.set(1,.72,1.5),bt.position.set(-.4,-1.45,.17),m.add(bt);const dt=new R(pt,Z);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),m.add(dt);const Mt=new wt(.44,32,32),Pt=new R(Mt,j);Pt.position.set(-.15,-.45,-.4),m.add(Pt);const Lt=new R(Mt,Z);Lt.position.set(.15,-.45,-.4),m.add(Lt);const At=new wt(.18,32,32),Wt=new R(At,rt);Wt.position.set(0,-.35,-.8),m.add(Wt),Wt.renderOrder=1,new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Ee){const Fe=new He("X",{font:Ee,size:.2,depth:.05}),Re=new R(Fe,V);Re.position.set(-.3,.99,.53),Re.rotation.x=ae.degToRad(-5),Re.rotation.y=ae.degToRad(-15),m.add(Re);const Nt=new He("O",{font:Ee,size:.2,depth:.05}),fe=new R(Nt,V);fe.position.set(.14,.99,.53),fe.rotation.y=ae.degToRad(12),fe.rotation.x=ae.degToRad(-5),m.add(fe)}),m.add(E);const Xt=d(),z=d(),mt=d(),et=d();Xt.position.set(.35,-.35,-.3),z.position.set(.25,-.45,.3),mt.position.set(.3,.1,-.2),et.position.set(.25,.18,.4),Xt.scale.set(.3,.3,.3),z.scale.set(.28,.28,.28),mt.scale.set(.25,.25,.25),et.scale.set(.23,.23,.23),z.rotation.z=Math.PI/4,mt.rotation.z=-Math.PI/4,et.rotation.y=-Math.PI/2,m.add(Xt),m.add(z),m.add(mt),m.add(et);const J=new Un;J.moveTo(-.5,0),J.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),J.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),J.bezierCurveTo(-.05,.6,.05,.6,.15,.4),J.bezierCurveTo(.25,.5,.25,.85,.5,.8),J.bezierCurveTo(1,.6,.75,.25,.5,0),J.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const xt={depth:.3,bevelEnabled:!1},vt=new Gn(J,xt),zt=new si({color:0}),qt=new R(vt,zt);qt.scale.set(.3,.3,.6),qt.rotation.x=0,qt.rotation.z=0,qt.position.set(.26,.35,.25),m.add(qt);const Qt=new R(vt,zt);Qt.scale.set(.5,.5,.5),Qt.position.set(.4,-.1,.54),m.add(Qt);const Kt=new R(vt,zt);Kt.scale.set(.5,.5,.5),Kt.position.set(.32,-.35,.65),m.add(Kt),m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),_.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const te=[qt,Qt,Kt],le=new Sp,pe=[0,Math.PI/2,Math.PI,0,Math.PI/3];let we=.05,me=.25,Ce=0;f(),ke(()=>t.bodyPosition,Ee=>{m.position.set(Ee.x,Ee.y,Ee.z)}),ke(()=>t.cameraPosition,Ee=>{x.position.set(t.bodyPosition.x,1,Ee),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(Mi(),yi(cn,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",L1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",D1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),N1=Si(U1,[["__scopeId","data-v-5eff72b3"]]),F1={class:"pixel-controls"},O1={class:"side-buttons"},B1=kn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),s=Yt(!1),r=Yt(!1),o=Yt(!1);li(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),r.value&&(p.rotation.x-=.03),o.value&&(p.rotation.x+=.03),K.rotation.y+=.03,zt+=et,qt+=J,p.position.y=t.bodyPosition.y+Math.sin(zt)*vt,K.position.y=t.bodyPosition.y+Math.sin(qt)*xt,Xt.uniforms.u_time.value+=.25,x.render(f,_)};const f=new ai,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),x=new oi({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const p=new Zt,m=new Zt;f.add(m);const b=new Yi(16777215,2);f.add(b);const S=new qi(16777215,4);S.position.set(5,5,5),f.add(S);const w=new Xi(16777215,5,50);w.position.set(0,2,4),f.add(w);const F=new Wi,I=F.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=Ve,I.repeat.set(2,2);const P=F.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Ve,P.repeat.set(1,1);const O=new Ut({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:ue}),nt=new Ut({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),M=new Ut({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),E=new Ut({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:ue}),j=new Ut({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:ue}),V=new Ut({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:ue}),Z=new wt(1,32,32,0,Math.PI),rt=new R(Z,O),H=new R(Z,j);rt.scale.set(.85,.85,.8),H.scale.set(.85,.85,.8),rt.position.y=-.2,H.position.y=-.2,rt.rotation.y=Math.PI/2,H.rotation.y=Math.PI*1.5;const Q=new Te(1,32),B=new R(Q,j);B.scale.set(.85,.85,.8),B.position.set(0,-.2,0),B.rotation.y=Math.PI/2;const gt=new Zt;gt.add(rt),gt.add(H),gt.add(B),p.add(gt);const yt=new wt(.6,32,32,0,Math.PI),_t=new R(yt,V);_t.scale.set(1,.95,.95),_t.position.set(0,1,0),_t.rotation.y=Math.PI*1.5;const Ct=new R(yt,nt);Ct.scale.set(1,.95,.95),Ct.position.set(0,1,0),Ct.rotation.y=Math.PI/2;const Gt=new Te(.6,32),ot=new R(Gt,j);ot.position.set(0,1,0),ot.rotation.y=Math.PI/2,ot.scale.set(1,.95,.95);const ft=new Zt;ft.add(_t),ft.add(Ct),ft.add(ot),p.add(ft);const St=new wt(.25,32,32),N=new R(St,V);N.position.set(-.45,1.35,-.1),p.add(N);const ut=new R(St,nt);ut.position.set(.45,1.35,-.1),p.add(ut);const at=new wt(.25,32,32,Math.PI/2,Math.PI),lt=new R(at,V);lt.scale.set(1.1,.6,.8),lt.position.set(0,.84,.5),lt.rotation.y=Math.PI;const Et=new wt(.25,32,32,Math.PI/2,Math.PI),tt=new R(Et,nt);tt.scale.set(1.1,.6,.8),tt.position.set(0,.84,.5),tt.rotation.y=0;const g=new Te(.25,32),T=new R(g,E);T.scale.set(.8,.6,.8),T.position.set(0,.84,.5),T.rotation.y=Math.PI/2;const L=new Zt;L.add(lt),L.add(tt),L.add(T),p.add(L);const D=new Un;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const U={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},W=new Gn(D,U),K=new R(W,M);K.scale.set(.35,.35,.35),K.position.set(0,-.05,0),K.rotation.y=Math.PI,K.rotation.x=Math.PI,p.add(K);const y=new wt(.35,32,32),v=new R(y,j);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),p.add(v);const C=new R(y,E);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),p.add(C);const X=new ce(.2,.22,.6,32),G=new R(X,j);G.position.set(-.4,-1.05,0),p.add(G);const k=new R(X,E);k.position.set(.4,-1.05,0),p.add(k);const ht=new wt(.3,32,32),ct=new R(ht,j);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),p.add(ct);const pt=new R(ht,E);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),p.add(pt);const bt=new wt(.44,32,32),dt=new R(bt,E);dt.position.set(-.15,-.45,-.4),p.add(dt);const Mt=new R(bt,E);Mt.position.set(.15,-.45,-.4),p.add(Mt);const Pt=new wt(.18,32,32),Lt=new R(Pt,j);Lt.position.set(0,-.35,-.8),p.add(Lt);const At=new wt(.6,32,32,0,Math.PI*2,0,Math.PI/2),Wt=new Ut({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),It=new R(At,Wt);It.position.set(0,-.2,0),It.rotation.x=Math.PI,It.scale.set(1.25,1.25,1.25),gt.add(It);const Xt=new ri({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),z=new R(Q,Xt);z.position.set(0,-.26,0),z.scale.set(.7,.7,.7),z.rotation.x=-Math.PI/2,z.renderOrder=1,gt.add(z),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Qt){const Kt=new He("X",{font:Qt,size:.2,depth:.05}),te=new R(Kt,j);te.position.set(-.3,.99,.53),te.rotation.x=ae.degToRad(-5),te.rotation.y=ae.degToRad(-15),p.add(te);const le=new He("O",{font:Qt,size:.2,depth:.05}),pe=new R(le,j);pe.position.set(.14,.99,.53),pe.rotation.y=ae.degToRad(12),pe.rotation.x=ae.degToRad(-5),p.add(pe)}),Lt.renderOrder=1,p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),f.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let et=.05,J=.06,xt=.2,vt=.25,zt=0,qt=0;d(),ke(()=>t.bodyPosition,Qt=>{p.position.set(Qt.x,Qt.y,Qt.z)}),ke(()=>t.cameraPosition,Qt=>{_.position.set(t.bodyPosition.x,1,Qt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){r.value=!0}function h(){o.value=!0}function u(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}return(d,f)=>(Mi(),yi(cn,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",F1,[Ft("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),Ft("div",O1,[Ft("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),z1=Si(B1,[["__scopeId","data-v-eb44448e"]]),G1={class:"pixel-controls"},H1={class:"side-buttons"},k1={class:"directional-buttons-santa"},V1={class:"horizontal-buttons-santa"},ta=.2,W1=kn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Yt(null);let i=Yt(!1),s=Yt(!1),r=Yt(!1),o=Yt(!1);const a=rr(null);rr(null);const l=Yt(!1),c=Yt(!1),h=Yt(!1),u=Yt(!1),d=new oi({antialias:!0});d.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(d.domElement),new ai;const f=new Be(75,window.innerWidth/window.innerHeight,.1,1e3);f.position.z=5,li(()=>{if(e.value){let nt=function(){const Nt=new Zt,fe=new wt(.15,32,32),Oe=new ee({color:16764057}),$e=new R(fe,Oe);$e.position.set(0,.4,0),Nt.add($e);const We=new jr(.08,.15,32),Tn=new ee({color:16764057}),yn=new R(We,Tn);yn.position.set(-.1,.55,0),yn.rotation.z=Math.PI/6,Nt.add(yn);const A=new R(We,Tn);A.position.set(.1,.55,0),A.rotation.z=-Math.PI/6,Nt.add(A);const Y=new ce(.12,.15,.3,32),st=new ee({color:16764057}),it=new R(Y,st);it.position.set(0,.2,0),Nt.add(it);const $=new ce(.05,.05,.2,32),Tt=new ee({color:16764057}),Dt=new R($,Tt);Dt.position.set(-.07,-.05,.05),Nt.add(Dt);const Ht=new R($,Tt);Ht.position.set(.07,-.05,.05),Nt.add(Ht);const kt=new ce(.04,.04,.2,32),jt=new ee({color:16764057}),Jt=new R(kt,ut);Jt.position.set(-.15,.25,0),Jt.rotation.z=Math.PI/4,Nt.add(Jt);const Vt=new R(kt,jt);Vt.position.set(.15,.25,0),Vt.rotation.z=-Math.PI/4,Nt.add(Vt);const ie=new ce(.03,.03,.25,32),ge=new ee({color:16764057}),_e=new R(ie,ge);return _e.position.set(0,.1,-.2),_e.rotation.x=Math.PI/4,Nt.add(_e),Nt.scale.set(.75,.75,.75),Nt.position.set(.2,0,.2),Nt},M=function(){const Nt=new Zt,fe=new wt(.2,32,32),Oe=new ee({color:16764057}),$e=new R(fe,Oe);$e.position.set(0,1,0),Nt.add($e);const We=new ee({color:16777215}),Tn=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Ei of Tn){const br=new wt(Ei.size,16,16),Fs=new R(br,We);Fs.position.set(Ei.x,Ei.y-.06,Ei.z-.01),Nt.add(Fs)}const yn=new ee({color:16777215}),A=new ce(.05,.06,.1,32),Y=new R(A,yn);Y.position.set(-.06,.93,.18),Y.rotation.z=Math.PI/4;const st=new ce(.05,.06,.1,32),it=new R(st,yn);it.position.set(.06,.93,.18),it.rotation.z=-Math.PI/4;const $=new fo(.12,.05,16,100),Tt=new ee({color:16777215}),Dt=new R($,Tt);Dt.position.set(0,1.15,0),Dt.rotation.x=Math.PI/2,Nt.add(Dt);const Ht=new jr(.15,.3,32),kt=new ee({color:16711680}),jt=new R(Ht,kt);jt.position.set(0,1.3,0),Nt.add(jt);const Jt=new wt(.05,32,32),Vt=new ee({color:16777215}),ie=new R(Jt,Vt);ie.position.set(0,1.43,0),Nt.add(ie);const ge=new ce(.2,.25,.6,32),_e=new ee({color:16711680}),Je=new R(ge,_e);Je.position.set(0,.5,0),Nt.add(Je);const de=new ce(.25,.25,.1,32),$t=new ee({color:0}),Xe=new R(de,$t);Xe.position.set(0,.4,.005),Nt.add(Xe);const Rt=new ce(.06,.06,.3,32),Ie=new ee({color:16711680}),Ue=new R(Rt,Ie);Ue.position.set(-.25,.75,0),Ue.rotation.z=Math.PI/4,Nt.add(Ue);const ve=new R(Rt,Ie);ve.position.set(.25,.75,0),ve.rotation.z=-Math.PI/4,Nt.add(ve);const rn=new wt(.07,32,32),xe=new ee({color:16777215}),Ke=new R(rn,xe);Ke.position.set(-.35,.85,0),Nt.add(Ke);const An=new R(rn,xe);An.position.set(.35,.85,0),Nt.add(An);const Ge=new ce(.1,.1,.15,32),Sn=new ee({color:16711680}),ci=new ce(.08,.08,.4,32),Nn=new ee({color:0}),Wn=new R(ci,Nn);Wn.position.set(-.1,.1,0),Nt.add(Wn);const Xn=new R(Ge,Sn);Xn.position.set(-.1,-.05,0),Nt.add(Xn);const pn=new R(ci,Nn);pn.position.set(.1,.1,0),Nt.add(pn);const Fn=new R(Ge,Sn);Fn.position.set(.1,-.05,0),Nt.add(Fn),Nt.scale.set(.4,.4,.4),Nt.position.set(.2,.5,0);const qn=new wt(.12,32,32),ui=new ee({color:16711680}),wn=new R(qn,ui);wn.scale.set(1,.7,1.5),wn.position.set(-.1,-.12,.12),Nt.add(wn);const En=new R(qn,ui);return En.scale.set(1,.7,1.5),En.position.set(.1,-.1,.12),Nt.add(En),Nt},E=function(){let Nt=0;function fe(){requestAnimationFrame(fe),Nt+=.08,Fe.position.y=.25+Math.sin(Nt)*.25,Q.render(rt,H)}fe()},j=function(Nt){let fe=1,Oe=0;function $e(){requestAnimationFrame($e),Nt.position.x+=.01*fe,Nt.position.x>=.35?(fe=-1,Nt.rotation.y=Math.PI):Nt.position.x<=-.35&&(fe=1,Nt.rotation.y=0),Oe+=.003,Nt.position.y=-.2+Math.sin(Oe)*.1,Nt.position.z=.2,Q.render(rt,H)}$e()},V=function(){const Nt=new Zt,fe=new ti(.7,.8,.7),Oe=new ee({color:9127187}),$e=new R(fe,Oe);$e.position.set(0,.4,0),Nt.add($e);const We=new jr(.55,.25,4),Tn=new ee({color:11674146}),yn=new R(We,Tn);yn.position.set(0,.9,0),yn.rotation.y=Math.PI/4,Nt.add(yn);const A=new ti(.25,.35,.05),Y=new ee({color:6636321}),st=new R(A,Y);st.position.set(0,.2,.36),Nt.add(st);const it=new ti(.15,.15,.05),$=new ee({color:8900331,opacity:.8,transparent:!0}),Tt=new R(it,$);Tt.position.set(-.2,.5,.38),Nt.add(Tt);const Dt=new R(it,$);Dt.position.set(.2,.5,.38),Nt.add(Dt);const Ht=new ti(.2,.4,.2),kt=new ee({color:8421504}),jt=new R(Ht,kt);jt.position.set(0,.95,0),Nt.add(jt);const Jt=new fo(.07,.04,32,100),Vt=new ee({color:2263842}),ie=new R(Jt,Vt);return ie.position.set(0,.45,.38),Nt.add(ie),Nt.position.set(.2,-.2,0),Nt.scale.set(.5,.5,.5),Nt},Z=function(){requestAnimationFrame(Z),i.value&&(B.rotation.y+=.03),s.value&&(B.rotation.y-=.03),r.value&&(B.rotation.x-=.03),o.value&&(B.rotation.x+=.03),Q.render(rt,H)};const rt=new ai,H=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),Q=new oi({antialias:!0,alpha:!0});Q.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(Q.domElement);const B=new Zt,gt=new Zt;rt.add(gt);const yt=new Yi(16777215,2);rt.add(yt);const _t=new qi(16777215,4);_t.position.set(5,5,5),rt.add(_t);const Ct=new Xi(16777215,5,50);Ct.position.set(0,2,4),rt.add(Ct);const Gt=new Wi,ot=Gt.load("/3d-bear-arts/assets/house.jpg");ot.repeat.set(1,1);const ft=Gt.load("/3d-bear-arts/assets/house.jpg"),St=Gt.load("/3d-bear-arts/assets/sun.jpg");ot.wrapS=ot.wrapT=Ve,ot.repeat.set(.5,1),new Ut({color:11592447,metalness:.05,roughness:.1,transparent:!0,opacity:.5,transmission:.95,ior:1.5,depthWrite:!1,depthTest:!0,side:ue});const N=new Ut({color:16777215,metalness:0,roughness:.05,transparent:!0,opacity:.5,clearcoat:1,clearcoatRoughness:.2,transmission:.6,ior:1.5,envMapIntensity:1,depthTest:!0});new Ut({color:16777215,metalness:.05,roughness:.05,transparent:!0,opacity:.3,transmission:.95,ior:1.5,depthWrite:!1,depthTest:!0,envMapIntensity:.8,side:ue});const ut=new Ut({color:16777215,metalness:.05,map:ft,roughness:.2,transparent:!0,opacity:.7,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:ue}),at=new Ut({color:16777215,metalness:.05,map:ft,roughness:.2,transparent:!0,opacity:1,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:ue}),lt=new Ut({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Et=new wt(1,32,32,0,Math.PI),tt=new R(Et,N),g=new R(Et,ut);tt.scale.set(.85,.85,.8),g.scale.set(.85,.85,.8),tt.position.y=-.2,g.position.y=-.2,tt.rotation.y=Math.PI/2,g.rotation.y=Math.PI*1.5;const T=new Te(1,32),L=new R(T,at);L.scale.set(.85,.85,.8),L.position.set(0,-.2,0),L.rotation.y=Math.PI/2;const D=new Zt;D.add(tt),D.add(g),D.add(L),B.add(D);const U=new wt(.6,32,32,0,Math.PI),W=new R(U,lt);W.scale.set(1,.95,.95),W.position.set(0,1,0),W.rotation.y=Math.PI*1.5;const K=new R(U,N);K.scale.set(1,.95,.95),K.position.set(0,1,0),K.rotation.y=Math.PI/2;const y=new Te(.6,32),v=new R(y,at);v.position.set(0,1,0),v.rotation.y=Math.PI/2,v.scale.set(1,.95,.95);const C=new Zt;C.add(W),C.add(K),C.add(v),B.add(C);const X=new wt(.6,32,32,0,Math.PI*2,0,Math.PI/2);new Ut({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1});const G=new Ut({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7}),k=new R(X,G);k.position.set(0,-.2,0),k.rotation.x=Math.PI,k.scale.set(1.25,1.25,1.25),D.add(k);const ht=new Ut({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:ue,transparent:!1}),ct=new R(T,ht);ct.scale.set(.7,.7,.7),ct.position.set(0,-.3,0),ct.rotation.x=Math.PI/2,ct.renderOrder=1,D.add(ct),B.add(D);const pt=new ri({transparent:!1,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),bt=new R(T,pt);bt.position.set(0,-.2,0),bt.scale.set(.7,.7,.7),bt.rotation.x=-Math.PI/2,bt.renderOrder=2,D.add(bt);const dt=new wt(.25,32,32),Mt=new R(dt,lt);Mt.position.set(-.45,1.35,-.1),B.add(Mt);const Pt=new R(dt,N);Pt.position.set(.45,1.35,-.1),B.add(Pt);const Lt=new wt(.25,32,32,Math.PI/2,Math.PI),At=new R(Lt,lt);At.scale.set(1.1,.6,.8),At.position.set(0,.84,.5),At.rotation.y=Math.PI;const Wt=new wt(.25,32,32,Math.PI/2,Math.PI),It=new R(Wt,N);It.scale.set(1.1,.6,.8),It.position.set(0,.84,.5),It.rotation.y=0;const Xt=new Te(.25,32),z=new R(Xt,at);z.scale.set(.8,.6,.8),z.position.set(0,.84,.5),z.rotation.y=Math.PI/2;const mt=new Zt;mt.add(At),mt.add(It),mt.add(z),B.add(mt),new Ut({color:8374441,metalness:1,roughness:.25,envMap:St,clearcoat:.7,clearcoatRoughness:.3});const et=new wt(.35,32,32),J=new R(et,ut);J.scale.set(.75,1.25,.65),J.position.set(-.7,-.15,.2),B.add(J);const xt=new R(et,N);xt.scale.set(.75,1.25,.65),xt.position.set(.7,-.15,.2),B.add(xt);const vt=new ce(.2,.22,.6,32),zt=new R(vt,lt);zt.position.set(-.4,-1.05,0),B.add(zt);const qt=new R(vt,N);qt.position.set(.4,-1.05,0),B.add(qt);const Qt=new wt(.3,32,32),Kt=new R(Qt,lt);Kt.scale.set(1,.72,1.5),Kt.position.set(-.4,-1.45,.17),B.add(Kt);const te=new R(Qt,N);te.scale.set(1,.72,1.5),te.position.set(.4,-1.45,.17),B.add(te);const le=new wt(.44,32,32),pe=new R(le,ut);pe.position.set(-.15,-.45,-.4),B.add(pe);const we=new R(le,lt);we.position.set(.15,-.45,-.4),B.add(we);const me=new wt(.18,32,32),Ce=new R(me,lt);Ce.position.set(0,-.35,-.8),B.add(Ce),new $i().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Nt){const fe=new He("X",{font:Nt,size:.2,depth:.05}),Oe=new R(fe,lt);Oe.position.set(-.3,.99,.53),Oe.rotation.x=ae.degToRad(-5),Oe.rotation.y=ae.degToRad(-15),B.add(Oe);const $e=new He("O",{font:Nt,size:.2,depth:.05}),We=new R($e,lt);We.position.set(.14,.99,.53),We.rotation.y=ae.degToRad(12),We.rotation.x=ae.degToRad(-5),B.add(We)}),nt();const Fe=M();B.add(Fe),E(),a.value=M(),B.add(a.value),j(a.value);const Re=V();B.add(Re),B.scale.set(1.4,1.4,1.4),rt.add(B),B.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),H.position.set(t.bodyPosition.x,1,t.cameraPosition),H.lookAt(t.bodyPosition.x,0,0),H.position.z=4,B.rotation.x=.1,Z(),ke(()=>t.bodyPosition,Nt=>{B.position.set(Nt.x,Nt.y,Nt.z)}),ke(()=>t.cameraPosition,Nt=>{H.position.set(t.bodyPosition.x,1,Nt),H.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{H.aspect=window.innerWidth/window.innerHeight,H.updateProjectionMatrix(),Q.setSize(window.innerWidth,window.innerHeight)})}});function _(){s.value=!0}function x(){i.value=!0}function p(){r.value=!0}function m(){o.value=!0}function b(){s.value=!1,i.value=!1,r.value=!1,o.value=!1}const S=()=>{l.value=!0,a.value&&(a.value.rotation.y=0)},w=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI)},F=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},I=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},P=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},O=()=>{requestAnimationFrame(O),a.value&&(l.value&&(a.value.position.z-=ta),c.value&&(a.value.position.z+=ta),h.value&&(a.value.position.x-=ta),u.value&&(a.value.position.x+=ta))};return O(),(nt,M)=>(Mi(),yi(cn,null,[Ft("div",{ref_key:"threeCanvas",ref:e,class:Hn(n.background?"no-bg":"three-canvas")},null,2),Ft("div",G1,[Ft("button",{class:"pixel-btn up",onMousedown:p,onMouseup:b},"UP",32),Ft("div",H1,[Ft("button",{class:"pixel-btn left",onMousedown:_,onMouseup:b},"LEFT",32),Ft("button",{class:"pixel-btn right",onMousedown:x,onMouseup:b},"RIGHT",32)]),Ft("button",{class:"pixel-btn down",onMousedown:m,onMouseup:b},"DOWN",32)]),Ft("div",k1,[Ft("button",{class:"directional-btn-santa north-btn",onMousedown:S,onMouseup:P},"UP",32),Ft("div",V1,[Ft("button",{class:"directional-btn-santa west-btn",onMousedown:F,onMouseup:P},"LEFT",32),Ft("button",{class:"directional-btn-santa east-btn",onMousedown:I,onMouseup:P},"RIGHT",32)]),Ft("button",{class:"directional-btn-santa south-btn",onMousedown:w,onMouseup:P},"DOWN",32)])],64))}}),X1=Si(W1,[["__scopeId","data-v-ef8dc33d"]]),q1=[{path:"/3d-bear-arts/leather",name:"Leather",component:a1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:c1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:f1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:_1},{path:"/3d-bear-arts/water",name:"Water Bear",component:y1},{path:"/3d-bear-arts/",name:"Water",component:I1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:N1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:z1},{path:"/3d-bear-arts/aquar",name:"Aquar",component:X1}],Y1=Jg({history:Rg(),routes:q1}),wp=q0(Z0);wp.use(Y1);wp.mount("#app");
