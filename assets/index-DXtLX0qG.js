(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Pe={},lo=[],_i=()=>{},Fp=()=>!1,Aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qc=n=>n.startsWith("onUpdate:"),sn=Object.assign,Yc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Op=Object.prototype.hasOwnProperty,ye=(n,t)=>Op.call(n,t),oe=Array.isArray,Xo=n=>Ra(n)==="[object Map]",Bp=n=>Ra(n)==="[object Set]",se=n=>typeof n=="function",en=n=>typeof n=="string",Ao=n=>typeof n=="symbol",qe=n=>n!==null&&typeof n=="object",Id=n=>(qe(n)||se(n))&&se(n.then)&&se(n.catch),zp=Object.prototype.toString,Ra=n=>zp.call(n),Gp=n=>Ra(n).slice(8,-1),Hp=n=>Ra(n)==="[object Object]",$c=n=>en(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,qo=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},kp=/-(\w)/g,Hn=Pa(n=>n.replace(kp,(t,e)=>e?e.toUpperCase():"")),Vp=/\B([A-Z])/g,Fs=Pa(n=>n.replace(Vp,"-$1").toLowerCase()),Ca=Pa(n=>n.charAt(0).toUpperCase()+n.slice(1)),qa=Pa(n=>n?`on${Ca(n)}`:""),as=(n,t)=>!Object.is(n,t),Ya=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Ld=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Wp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Iu;const Dd=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jc(n){if(oe(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=en(i)?$p(i):jc(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(en(n)||qe(n))return n}const Xp=/;(?![^(]*\))/g,qp=/:([^]+)/,Yp=/\/\*[^]*?\*\//g;function $p(n){const t={};return n.replace(Yp,"").split(Xp).forEach(e=>{if(e){const i=e.split(qp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Vn(n){let t="";if(en(n))t=n;else if(oe(n))for(let e=0;e<n.length;e++){const i=Vn(n[e]);i&&(t+=i+" ")}else if(qe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kp=Xc(jp);function Ud(n){return!!n||n===""}/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pn;class Zp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pn,!t&&Pn&&(this.index=(Pn.scopes||(Pn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Pn;try{return Pn=this,t()}finally{Pn=e}}}on(){Pn=this}off(){Pn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Jp(){return Pn}let Le;const $a=new WeakSet;class Nd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pn&&Pn.active&&Pn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lu(this),Bd(this);const t=Le,e=ii;Le=this,ii=!0;try{return this.fn()}finally{zd(this),Le=t,ii=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Jc(t);this.deps=this.depsTail=void 0,Lu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hl(this)&&this.run()}get dirty(){return Hl(this)}}let Fd=0,so;function Od(n){n.flags|=8,n.next=so,so=n}function Kc(){Fd++}function Zc(){if(--Fd>0)return;let n;for(;so;){let t=so,e;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=so,so=void 0;t;){if(e=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Bd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Jc(i),Qp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Hl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Gd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Gd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===sr))return;n.globalVersion=sr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Hl(n)){n.flags&=-3;return}const e=Le,i=ii;Le=n,ii=!0;try{Bd(n);const s=n.fn(n._value);(t.version===0||as(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Le=e,ii=i,zd(n),n.flags&=-3}}function Jc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i),!e.subs&&e.computed){e.computed.flags&=-5;for(let o=e.computed.deps;o;o=o.nextDep)Jc(o,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Qp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let ii=!0;const Hd=[];function cs(){Hd.push(ii),ii=!1}function us(){const n=Hd.pop();ii=n===void 0?!0:n}function Lu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Le;Le=void 0;try{t()}finally{Le=e}}}let sr=0;class tm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Le||!ii||Le===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Le)e=this.activeLink=new tm(Le,this),Le.deps?(e.prevDep=Le.depsTail,Le.depsTail.nextDep=e,Le.depsTail=e):Le.deps=Le.depsTail=e,kd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Le.depsTail,e.nextDep=void 0,Le.depsTail.nextDep=e,Le.depsTail=e,Le.deps===e&&(Le.deps=i)}return e}trigger(t){this.version++,sr++,this.notify(t)}notify(t){Kc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Zc()}}}function kd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)kd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const kl=new WeakMap,Is=Symbol(""),Vl=Symbol(""),or=Symbol("");function hn(n,t,e){if(ii&&Le){let i=kl.get(n);i||kl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Qc),s.target=n,s.map=i,s.key=e),s.track()}}function zi(n,t,e,i,s,o){const r=kl.get(n);if(!r){sr++;return}const a=l=>{l&&l.trigger()};if(Kc(),t==="clear")r.forEach(a);else{const l=oe(n),c=l&&$c(e);if(l&&e==="length"){const h=Number(i);r.forEach((u,d)=>{(d==="length"||d===or||!Ao(d)&&d>=h)&&a(u)})}else switch(e!==void 0&&a(r.get(e)),c&&a(r.get(or)),t){case"add":l?c&&a(r.get("length")):(a(r.get(Is)),Xo(n)&&a(r.get(Vl)));break;case"delete":l||(a(r.get(Is)),Xo(n)&&a(r.get(Vl)));break;case"set":Xo(n)&&a(r.get(Is));break}}Zc()}function Gs(n){const t=we(n);return t===n?t:(hn(t,"iterate",or),si(n)?t:t.map(_n))}function tu(n){return hn(n=we(n),"iterate",or),n}const em={__proto__:null,[Symbol.iterator](){return ja(this,Symbol.iterator,_n)},concat(...n){return Gs(this).concat(...n.map(t=>oe(t)?Gs(t):t))},entries(){return ja(this,"entries",n=>(n[1]=_n(n[1]),n))},every(n,t){return Ti(this,"every",n,t,void 0,arguments)},filter(n,t){return Ti(this,"filter",n,t,e=>e.map(_n),arguments)},find(n,t){return Ti(this,"find",n,t,_n,arguments)},findIndex(n,t){return Ti(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ti(this,"findLast",n,t,_n,arguments)},findLastIndex(n,t){return Ti(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ti(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ka(this,"includes",n)},indexOf(...n){return Ka(this,"indexOf",n)},join(n){return Gs(this).join(n)},lastIndexOf(...n){return Ka(this,"lastIndexOf",n)},map(n,t){return Ti(this,"map",n,t,void 0,arguments)},pop(){return Do(this,"pop")},push(...n){return Do(this,"push",n)},reduce(n,...t){return Du(this,"reduce",n,t)},reduceRight(n,...t){return Du(this,"reduceRight",n,t)},shift(){return Do(this,"shift")},some(n,t){return Ti(this,"some",n,t,void 0,arguments)},splice(...n){return Do(this,"splice",n)},toReversed(){return Gs(this).toReversed()},toSorted(n){return Gs(this).toSorted(n)},toSpliced(...n){return Gs(this).toSpliced(...n)},unshift(...n){return Do(this,"unshift",n)},values(){return ja(this,"values",_n)}};function ja(n,t,e){const i=tu(n),s=i[t]();return i!==n&&!si(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=e(o.value)),o}),s}const nm=Array.prototype;function Ti(n,t,e,i,s,o){const r=tu(n),a=r!==n&&!si(n),l=r[t];if(l!==nm[t]){const u=l.apply(n,o);return a?_n(u):u}let c=e;r!==n&&(a?c=function(u,d){return e.call(this,_n(u),d,n)}:e.length>2&&(c=function(u,d){return e.call(this,u,d,n)}));const h=l.call(r,c,i);return a&&s?s(h):h}function Du(n,t,e,i){const s=tu(n);let o=e;return s!==n&&(si(n)?e.length>3&&(o=function(r,a,l){return e.call(this,r,a,l,n)}):o=function(r,a,l){return e.call(this,r,_n(a),l,n)}),s[t](o,...i)}function Ka(n,t,e){const i=we(n);hn(i,"iterate",or);const s=i[t](...e);return(s===-1||s===!1)&&su(e[0])?(e[0]=we(e[0]),i[t](...e)):s}function Do(n,t,e=[]){cs(),Kc();const i=we(n)[t].apply(n,e);return Zc(),us(),i}const im=Xc("__proto__,__v_isRef,__isVue"),Vd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ao));function sm(n){Ao(n)||(n=String(n));const t=we(this);return hn(t,"has",n),t.hasOwnProperty(n)}class Wd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(s?o?_m:$d:o?Yd:qd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=oe(t);if(!s){let l;if(r&&(l=em[e]))return l;if(e==="hasOwnProperty")return sm}const a=Reflect.get(t,e,un(t)?t:i);return(Ao(e)?Vd.has(e):im(e))||(s||hn(t,"get",e),o)?a:un(a)?r&&$c(e)?a:a.value:qe(a)?s?Kd(a):La(a):a}}class Xd extends Wd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let o=t[e];if(!this._isShallow){const l=Ls(o);if(!si(i)&&!Ls(i)&&(o=we(o),i=we(i)),!oe(t)&&un(o)&&!un(i))return l?!1:(o.value=i,!0)}const r=oe(t)&&$c(e)?Number(e)<t.length:ye(t,e),a=Reflect.set(t,e,i,un(t)?t:s);return t===we(s)&&(r?as(i,o)&&zi(t,"set",e,i):zi(t,"add",e,i)),a}deleteProperty(t,e){const i=ye(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&zi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Ao(e)||!Vd.has(e))&&hn(t,"has",e),i}ownKeys(t){return hn(t,"iterate",oe(t)?"length":Is),Reflect.ownKeys(t)}}class om extends Wd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const rm=new Xd,am=new om,lm=new Xd(!0);const eu=n=>n,Ia=n=>Reflect.getPrototypeOf(n);function Er(n,t,e=!1,i=!1){n=n.__v_raw;const s=we(n),o=we(t);e||(as(t,o)&&hn(s,"get",t),hn(s,"get",o));const{has:r}=Ia(s),a=i?eu:e?ou:_n;if(r.call(s,t))return a(n.get(t));if(r.call(s,o))return a(n.get(o));n!==s&&n.get(t)}function br(n,t=!1){const e=this.__v_raw,i=we(e),s=we(n);return t||(as(n,s)&&hn(i,"has",n),hn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Tr(n,t=!1){return n=n.__v_raw,!t&&hn(we(n),"iterate",Is),Reflect.get(n,"size",n)}function Uu(n,t=!1){!t&&!si(n)&&!Ls(n)&&(n=we(n));const e=we(this);return Ia(e).has.call(e,n)||(e.add(n),zi(e,"add",n,n)),this}function Nu(n,t,e=!1){!e&&!si(t)&&!Ls(t)&&(t=we(t));const i=we(this),{has:s,get:o}=Ia(i);let r=s.call(i,n);r||(n=we(n),r=s.call(i,n));const a=o.call(i,n);return i.set(n,t),r?as(t,a)&&zi(i,"set",n,t):zi(i,"add",n,t),this}function Fu(n){const t=we(this),{has:e,get:i}=Ia(t);let s=e.call(t,n);s||(n=we(n),s=e.call(t,n)),i&&i.call(t,n);const o=t.delete(n);return s&&zi(t,"delete",n,void 0),o}function Ou(){const n=we(this),t=n.size!==0,e=n.clear();return t&&zi(n,"clear",void 0,void 0),e}function Ar(n,t){return function(i,s){const o=this,r=o.__v_raw,a=we(r),l=t?eu:n?ou:_n;return!n&&hn(a,"iterate",Is),r.forEach((c,h)=>i.call(s,l(c),l(h),o))}}function Rr(n,t,e){return function(...i){const s=this.__v_raw,o=we(s),r=Xo(o),a=n==="entries"||n===Symbol.iterator&&r,l=n==="keys"&&r,c=s[n](...i),h=e?eu:t?ou:_n;return!t&&hn(o,"iterate",l?Vl:Is),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function Yi(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function cm(){const n={get(o){return Er(this,o)},get size(){return Tr(this)},has:br,add:Uu,set:Nu,delete:Fu,clear:Ou,forEach:Ar(!1,!1)},t={get(o){return Er(this,o,!1,!0)},get size(){return Tr(this)},has:br,add(o){return Uu.call(this,o,!0)},set(o,r){return Nu.call(this,o,r,!0)},delete:Fu,clear:Ou,forEach:Ar(!1,!0)},e={get(o){return Er(this,o,!0)},get size(){return Tr(this,!0)},has(o){return br.call(this,o,!0)},add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear"),forEach:Ar(!0,!1)},i={get(o){return Er(this,o,!0,!0)},get size(){return Tr(this,!0)},has(o){return br.call(this,o,!0)},add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Rr(o,!1,!1),e[o]=Rr(o,!0,!1),t[o]=Rr(o,!1,!0),i[o]=Rr(o,!0,!0)}),[n,e,t,i]}const[um,hm,dm,fm]=cm();function nu(n,t){const e=t?n?fm:dm:n?hm:um;return(i,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ye(e,s)&&s in i?e:i,s,o)}const pm={get:nu(!1,!1)},mm={get:nu(!1,!0)},gm={get:nu(!0,!1)};const qd=new WeakMap,Yd=new WeakMap,$d=new WeakMap,_m=new WeakMap;function vm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xm(n){return n.__v_skip||!Object.isExtensible(n)?0:vm(Gp(n))}function La(n){return Ls(n)?n:iu(n,!1,rm,pm,qd)}function jd(n){return iu(n,!1,lm,mm,Yd)}function Kd(n){return iu(n,!0,am,gm,$d)}function iu(n,t,e,i,s){if(!qe(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=xm(n);if(r===0)return n;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Yo(n){return Ls(n)?Yo(n.__v_raw):!!(n&&n.__v_isReactive)}function Ls(n){return!!(n&&n.__v_isReadonly)}function si(n){return!!(n&&n.__v_isShallow)}function su(n){return n?!!n.__v_raw:!1}function we(n){const t=n&&n.__v_raw;return t?we(t):n}function ym(n){return!ye(n,"__v_skip")&&Object.isExtensible(n)&&Ld(n,"__v_skip",!0),n}const _n=n=>qe(n)?La(n):n,ou=n=>qe(n)?Kd(n):n;function un(n){return n?n.__v_isRef===!0:!1}function Zt(n){return Zd(n,!1)}function $o(n){return Zd(n,!0)}function Zd(n,t){return un(n)?n:new Mm(n,t)}class Mm{constructor(t,e){this.dep=new Qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:we(t),this._value=e?t:_n(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||si(t)||Ls(t);t=i?t:we(t),as(t,e)&&(this._rawValue=t,this._value=i?t:_n(t),this.dep.trigger())}}function co(n){return un(n)?n.value:n}const wm={get:(n,t,e)=>t==="__v_raw"?n:co(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return un(s)&&!un(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Jd(n){return Yo(n)?n:new Proxy(n,wm)}class Sm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Od(this),!0}get value(){const t=this.dep.track();return Gd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Em(n,t,e=!1){let i,s;return se(n)?i=n:(i=n.get,s=n.set),new Sm(i,s,e)}const Pr={},ma=new WeakMap;let Es;function bm(n,t=!1,e=Es){if(e){let i=ma.get(e);i||ma.set(e,i=[]),i.push(n)}}function Tm(n,t,e=Pe){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:l}=e,c=E=>s?E:si(E)||s===!1||s===0?Fi(E,1):Fi(E);let h,u,d,f,_=!1,x=!1;if(un(n)?(u=()=>n.value,_=si(n)):Yo(n)?(u=()=>c(n),_=!0):oe(n)?(x=!0,_=n.some(E=>Yo(E)||si(E)),u=()=>n.map(E=>{if(un(E))return E.value;if(Yo(E))return c(E);if(se(E))return l?l(E,2):E()})):se(n)?t?u=l?()=>l(n,2):n:u=()=>{if(d){cs();try{d()}finally{us()}}const E=Es;Es=h;try{return l?l(n,3,[f]):n(f)}finally{Es=E}}:u=_i,t&&s){const E=u,O=s===!0?1/0:s;u=()=>Fi(E(),O)}const m=Jp(),p=()=>{h.stop(),m&&Yc(m.effects,h)};if(o&&t){const E=t;t=(...O)=>{E(...O),p()}}let T=x?new Array(n.length).fill(Pr):Pr;const M=E=>{if(!(!(h.flags&1)||!h.dirty&&!E))if(t){const O=h.run();if(s||_||(x?O.some((I,P)=>as(I,T[P])):as(O,T))){d&&d();const I=Es;Es=h;try{const P=[O,T===Pr?void 0:x&&T[0]===Pr?[]:T,f];l?l(t,3,P):t(...P),T=O}finally{Es=I}}}else h.run()};return a&&a(M),h=new Nd(u),h.scheduler=r?()=>r(M,!1):M,f=E=>bm(E,!1,h),d=h.onStop=()=>{const E=ma.get(h);if(E){if(l)l(E,4);else for(const O of E)O();ma.delete(h)}},t?i?M(!0):T=h.run():r?r(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function Fi(n,t=1/0,e){if(t<=0||!qe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,un(n))Fi(n.value,t,e);else if(oe(n))for(let i=0;i<n.length;i++)Fi(n[i],t,e);else if(Bp(n)||Xo(n))n.forEach(i=>{Fi(i,t,e)});else if(Hp(n)){for(const i in n)Fi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Fi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vr(n,t,e,i){try{return i?n(...i):n()}catch(s){Da(s,t,e)}}function xi(n,t,e,i){if(se(n)){const s=vr(n,t,e,i);return s&&Id(s)&&s.catch(o=>{Da(o,t,e)}),s}if(oe(n)){const s=[];for(let o=0;o<n.length;o++)s.push(xi(n[o],t,e,i));return s}}function Da(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Pe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(o){cs(),vr(o,null,10,[n,l,c]),us();return}}Am(n,e,s,i,r)}function Am(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}let rr=!1,Wl=!1;const vn=[];let pi=0;const uo=[];let es=null,eo=0;const Qd=Promise.resolve();let ru=null;function tf(n){const t=ru||Qd;return n?t.then(this?n.bind(this):n):t}function Rm(n){let t=rr?pi+1:0,e=vn.length;for(;t<e;){const i=t+e>>>1,s=vn[i],o=ar(s);o<n||o===n&&s.flags&2?t=i+1:e=i}return t}function au(n){if(!(n.flags&1)){const t=ar(n),e=vn[vn.length-1];!e||!(n.flags&2)&&t>=ar(e)?vn.push(n):vn.splice(Rm(t),0,n),n.flags|=1,ef()}}function ef(){!rr&&!Wl&&(Wl=!0,ru=Qd.then(sf))}function Pm(n){oe(n)?uo.push(...n):es&&n.id===-1?es.splice(eo+1,0,n):n.flags&1||(uo.push(n),n.flags|=1),ef()}function Bu(n,t,e=rr?pi+1:0){for(;e<vn.length;e++){const i=vn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;vn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function nf(n){if(uo.length){const t=[...new Set(uo)].sort((e,i)=>ar(e)-ar(i));if(uo.length=0,es){es.push(...t);return}for(es=t,eo=0;eo<es.length;eo++){const e=es[eo];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}es=null,eo=0}}const ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function sf(n){Wl=!1,rr=!0;try{for(pi=0;pi<vn.length;pi++){const t=vn[pi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),vr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;pi<vn.length;pi++){const t=vn[pi];t&&(t.flags&=-2)}pi=0,vn.length=0,nf(),rr=!1,ru=null,(vn.length||uo.length)&&sf()}}let Cn=null,of=null;function ga(n){const t=Cn;return Cn=n,of=n&&n.type.__scopeId||null,t}function di(n,t=Cn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&$u(-1);const o=ga(t);let r;try{r=n(...s)}finally{ga(o),i._d&&$u(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Cm(n,t){if(Cn===null)return n;const e=Ba(Cn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,l=Pe]=t[s];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Fi(r),i.push({dir:o,instance:e,value:r,oldValue:void 0,arg:a,modifiers:l}))}return n}function gs(n,t,e,i){const s=n.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let l=a.dir[i];l&&(cs(),xi(l,e,8,[n.el,a,n,t]),us())}}const Im=Symbol("_vte"),Lm=n=>n.__isTeleport;function lu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,lu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Wn(n,t){return se(n)?sn({name:n.name},t,{setup:n}):n}function rf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xl(n,t,e,i,s=!1){if(oe(n)){n.forEach((_,x)=>Xl(_,t&&(oe(t)?t[x]:t),e,i,s));return}if(jo(i)&&!s)return;const o=i.shapeFlag&4?Ba(i.component):i.el,r=s?null:o,{i:a,r:l}=n,c=t&&t.r,h=a.refs===Pe?a.refs={}:a.refs,u=a.setupState,d=we(u),f=u===Pe?()=>!1:_=>ye(d,_);if(c!=null&&c!==l&&(en(c)?(h[c]=null,f(c)&&(u[c]=null)):un(c)&&(c.value=null)),se(l))vr(l,a,12,[r,h]);else{const _=en(l),x=un(l);if(_||x){const m=()=>{if(n.f){const p=_?f(l)?u[l]:h[l]:l.value;s?oe(p)&&Yc(p,o):oe(p)?p.includes(o)||p.push(o):_?(h[l]=[o],f(l)&&(u[l]=h[l])):(l.value=[o],n.k&&(h[n.k]=l.value))}else _?(h[l]=r,f(l)&&(u[l]=r)):x&&(l.value=r,n.k&&(h[n.k]=r))};r?(m.id=-1,Rn(m,e)):m()}}}const jo=n=>!!n.type.__asyncLoader,af=n=>n.type.__isKeepAlive;function Dm(n,t){lf(n,"a",t)}function Um(n,t){lf(n,"da",t)}function lf(n,t,e=cn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ua(t,i,e),e){let s=e.parent;for(;s&&s.parent;)af(s.parent.vnode)&&Nm(i,t,e,s),s=s.parent}}function Nm(n,t,e,i){const s=Ua(t,n,i,!0);cu(()=>{Yc(i[t],s)},e)}function Ua(n,t,e=cn,i=!1){if(e){const s=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...r)=>{cs();const a=xr(e),l=xi(t,e,n,r);return a(),us(),l});return i?s.unshift(o):s.push(o),o}}const ki=n=>(t,e=cn)=>{(!Oa||n==="sp")&&Ua(n,(...i)=>t(...i),e)},Fm=ki("bm"),li=ki("m"),Om=ki("bu"),Bm=ki("u"),zm=ki("bum"),cu=ki("um"),Gm=ki("sp"),Hm=ki("rtg"),km=ki("rtc");function Vm(n,t=cn){Ua("ec",n,t)}const Wm="components";function zu(n,t){return qm(Wm,n,!0,t)||n}const Xm=Symbol.for("v-ndc");function qm(n,t,e=!0,i=!1){const s=Cn||cn;if(s){const o=s.type;{const a=D0(o,!1);if(a&&(a===t||a===Hn(t)||a===Ca(Hn(t))))return o}const r=Gu(s[n]||o[n],t)||Gu(s.appContext[n],t);return!r&&i?o:r}}function Gu(n,t){return n&&(n[t]||n[Hn(t)]||n[Ca(Hn(t))])}const ql=n=>n?Af(n)?Ba(n):ql(n.parent):null,Ko=sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ql(n.parent),$root:n=>ql(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>uu(n),$forceUpdate:n=>n.f||(n.f=()=>{au(n.update)}),$nextTick:n=>n.n||(n.n=tf.bind(n.proxy)),$watch:n=>f0.bind(n)}),Za=(n,t)=>n!==Pe&&!n.__isScriptSetup&&ye(n,t),Ym={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return o[t]}else{if(Za(i,t))return r[t]=1,i[t];if(s!==Pe&&ye(s,t))return r[t]=2,s[t];if((c=n.propsOptions[0])&&ye(c,t))return r[t]=3,o[t];if(e!==Pe&&ye(e,t))return r[t]=4,e[t];Yl&&(r[t]=0)}}const h=Ko[t];let u,d;if(h)return t==="$attrs"&&hn(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Pe&&ye(e,t))return r[t]=4,e[t];if(d=l.config.globalProperties,ye(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:o}=n;return Za(s,t)?(s[t]=e,!0):i!==Pe&&ye(i,t)?(i[t]=e,!0):ye(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:o}},r){let a;return!!e[r]||n!==Pe&&ye(n,r)||Za(t,r)||(a=o[0])&&ye(a,r)||ye(i,r)||ye(Ko,r)||ye(s.config.globalProperties,r)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ye(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Hu(n){return oe(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Yl=!0;function $m(n){const t=uu(n),e=n.proxy,i=n.ctx;Yl=!1,t.beforeCreate&&ku(t.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:M,unmounted:E,render:O,renderTracked:I,renderTriggered:P,errorCaptured:U,serverPrefetch:tt,expose:y,inheritAttrs:S,components:K,directives:k,filters:J}=t;if(c&&jm(c,i,null),r)for(const et in r){const V=r[et];se(V)&&(i[et]=V.bind(e))}if(s){const et=s.call(e,e);qe(et)&&(n.data=La(et))}if(Yl=!0,o)for(const et in o){const V=o[et],mt=se(V)?V.bind(e,e):se(V.get)?V.get.bind(e,e):_i,yt=!se(V)&&se(V.set)?V.set.bind(e):_i,_t=Jn({get:mt,set:yt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>_t.value,set:It=>_t.value=It})}if(a)for(const et in a)cf(a[et],i,e,et);if(l){const et=se(l)?l.call(e):l;Reflect.ownKeys(et).forEach(V=>{oa(V,et[V])})}h&&ku(h,n,"c");function W(et,V){oe(V)?V.forEach(mt=>et(mt.bind(e))):V&&et(V.bind(e))}if(W(Fm,u),W(li,d),W(Om,f),W(Bm,_),W(Dm,x),W(Um,m),W(Vm,U),W(km,I),W(Hm,P),W(zm,T),W(cu,E),W(Gm,tt),oe(y))if(y.length){const et=n.exposed||(n.exposed={});y.forEach(V=>{Object.defineProperty(et,V,{get:()=>e[V],set:mt=>e[V]=mt})})}else n.exposed||(n.exposed={});O&&n.render===_i&&(n.render=O),S!=null&&(n.inheritAttrs=S),K&&(n.components=K),k&&(n.directives=k),tt&&rf(n)}function jm(n,t,e=_i){oe(n)&&(n=$l(n));for(const i in n){const s=n[i];let o;qe(s)?"default"in s?o=Gi(s.from||i,s.default,!0):o=Gi(s.from||i):o=Gi(s),un(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function ku(n,t,e){xi(oe(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function cf(n,t,e,i){let s=i.includes(".")?Sf(e,i):()=>e[i];if(en(n)){const o=t[n];se(o)&&Ve(s,o)}else if(se(n))Ve(s,n.bind(e));else if(qe(n))if(oe(n))n.forEach(o=>cf(o,t,e,i));else{const o=se(n.handler)?n.handler.bind(e):t[n.handler];se(o)&&Ve(s,o,n)}}function uu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>_a(l,c,r,!0)),_a(l,t,r)),qe(t)&&o.set(t,l),l}function _a(n,t,e,i=!1){const{mixins:s,extends:o}=t;o&&_a(n,o,e,!0),s&&s.forEach(r=>_a(n,r,e,!0));for(const r in t)if(!(i&&r==="expose")){const a=Km[r]||e&&e[r];n[r]=a?a(n[r],t[r]):t[r]}return n}const Km={data:Vu,props:Wu,emits:Wu,methods:Vo,computed:Vo,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:Vo,directives:Vo,watch:Jm,provide:Vu,inject:Zm};function Vu(n,t){return t?n?function(){return sn(se(n)?n.call(this,this):n,se(t)?t.call(this,this):t)}:t:n}function Zm(n,t){return Vo($l(n),$l(t))}function $l(n){if(oe(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function pn(n,t){return n?[...new Set([].concat(n,t))]:t}function Vo(n,t){return n?sn(Object.create(null),n,t):t}function Wu(n,t){return n?oe(n)&&oe(t)?[...new Set([...n,...t])]:sn(Object.create(null),Hu(n),Hu(t??{})):t}function Jm(n,t){if(!n)return t;if(!t)return n;const e=sn(Object.create(null),n);for(const i in t)e[i]=pn(n[i],t[i]);return e}function uf(){return{app:null,config:{isNativeTag:Fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qm=0;function t0(n,t){return function(i,s=null){se(i)||(i=sn({},i)),s!=null&&!qe(s)&&(s=null);const o=uf(),r=new WeakSet,a=[];let l=!1;const c=o.app={_uid:Qm++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:N0,get config(){return o.config},set config(h){},use(h,...u){return r.has(h)||(h&&se(h.install)?(r.add(h),h.install(c,...u)):se(h)&&(r.add(h),h(c,...u))),c},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),c},component(h,u){return u?(o.components[h]=u,c):o.components[h]},directive(h,u){return u?(o.directives[h]=u,c):o.directives[h]},mount(h,u,d){if(!l){const f=c._ceVNode||Xe(i,s);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(f,h):n(f,h,d),l=!0,c._container=h,h.__vue_app__=c,Ba(f.component)}},onUnmount(h){a.push(h)},unmount(){l&&(xi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return o.provides[h]=u,c},runWithContext(h){const u=ho;ho=c;try{return h()}finally{ho=u}}};return c}}let ho=null;function oa(n,t){if(cn){let e=cn.provides;const i=cn.parent&&cn.parent.provides;i===e&&(e=cn.provides=Object.create(i)),e[n]=t}}function Gi(n,t,e=!1){const i=cn||Cn;if(i||ho){const s=ho?ho._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&se(t)?t.call(i&&i.proxy):t}}const hf={},df=()=>Object.create(hf),ff=n=>Object.getPrototypeOf(n)===hf;function e0(n,t,e,i=!1){const s={},o=df();n.propsDefaults=Object.create(null),pf(n,t,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);e?n.props=i?s:jd(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function n0(n,t,e,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,a=we(s),[l]=n.propsOptions;let c=!1;if((i||r>0)&&!(r&16)){if(r&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Na(n.emitsOptions,d))continue;const f=t[d];if(l)if(ye(o,d))f!==o[d]&&(o[d]=f,c=!0);else{const _=Hn(d);s[_]=jl(l,a,_,f,n,!1)}else f!==o[d]&&(o[d]=f,c=!0)}}}else{pf(n,t,s,o)&&(c=!0);let h;for(const u in a)(!t||!ye(t,u)&&((h=Fs(u))===u||!ye(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=jl(l,a,u,void 0,n,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!ye(t,u))&&(delete o[u],c=!0)}c&&zi(n.attrs,"set","")}function pf(n,t,e,i){const[s,o]=n.propsOptions;let r=!1,a;if(t)for(let l in t){if(qo(l))continue;const c=t[l];let h;s&&ye(s,h=Hn(l))?!o||!o.includes(h)?e[h]=c:(a||(a={}))[h]=c:Na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,r=!0)}if(o){const l=we(e),c=a||Pe;for(let h=0;h<o.length;h++){const u=o[h];e[u]=jl(s,l,u,c[u],n,!ye(c,u))}}return r}function jl(n,t,e,i,s,o){const r=n[e];if(r!=null){const a=ye(r,"default");if(a&&i===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&se(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=xr(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Fs(e))&&(i=!0))}return i}const i0=new WeakMap;function mf(n,t,e=!1){const i=e?i0:t.propsCache,s=i.get(n);if(s)return s;const o=n.props,r={},a=[];let l=!1;if(!se(n)){const h=u=>{l=!0;const[d,f]=mf(u,t,!0);sn(r,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!o&&!l)return qe(n)&&i.set(n,lo),lo;if(oe(o))for(let h=0;h<o.length;h++){const u=Hn(o[h]);Xu(u)&&(r[u]=Pe)}else if(o)for(const h in o){const u=Hn(h);if(Xu(u)){const d=o[h],f=r[u]=oe(d)||se(d)?{type:d}:sn({},d),_=f.type;let x=!1,m=!0;if(oe(_))for(let p=0;p<_.length;++p){const T=_[p],M=se(T)&&T.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(m=!1)}else x=se(_)&&_.name==="Boolean";f[0]=x,f[1]=m,(x||ye(f,"default"))&&a.push(u)}}const c=[r,a];return qe(n)&&i.set(n,c),c}function Xu(n){return n[0]!=="$"&&!qo(n)}const gf=n=>n[0]==="_"||n==="$stable",hu=n=>oe(n)?n.map(mi):[mi(n)],s0=(n,t,e)=>{if(t._n)return t;const i=di((...s)=>hu(t(...s)),e);return i._c=!1,i},_f=(n,t,e)=>{const i=n._ctx;for(const s in n){if(gf(s))continue;const o=n[s];if(se(o))t[s]=s0(s,o,i);else if(o!=null){const r=hu(o);t[s]=()=>r}}},vf=(n,t)=>{const e=hu(t);n.slots.default=()=>e},xf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},o0=(n,t,e)=>{const i=n.slots=df();if(n.vnode.shapeFlag&32){const s=t._;s?(xf(i,t,e),e&&Ld(i,"_",s,!0)):_f(t,i)}else t&&vf(n,t)},r0=(n,t,e)=>{const{vnode:i,slots:s}=n;let o=!0,r=Pe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:xf(s,t,e):(o=!t.$stable,_f(t,s)),r=t}else t&&(vf(n,t),r={default:1});if(o)for(const a in s)!gf(a)&&r[a]==null&&delete s[a]},Rn=y0;function a0(n){return l0(n)}function l0(n,t){const e=Dd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=_i,insertStaticContent:_}=n,x=(g,A,L,N=null,D=null,q=null,j=void 0,w=null,v=!!A.dynamicChildren)=>{if(g===A)return;g&&!Uo(g,A)&&(N=F(g),It(g,D,q,!0),g=null),A.patchFlag===-2&&(v=!1,A.dynamicChildren=null);const{type:C,ref:X,shapeFlag:z}=A;switch(C){case Fa:m(g,A,L,N);break;case lr:p(g,A,L,N);break;case tl:g==null&&T(A,L,N,j);break;case xn:K(g,A,L,N,D,q,j,w,v);break;default:z&1?O(g,A,L,N,D,q,j,w,v):z&6?k(g,A,L,N,D,q,j,w,v):(z&64||z&128)&&C.process(g,A,L,N,D,q,j,w,v,ut)}X!=null&&D&&Xl(X,g&&g.ref,q,A||g,!A)},m=(g,A,L,N)=>{if(g==null)i(A.el=a(A.children),L,N);else{const D=A.el=g.el;A.children!==g.children&&c(D,A.children)}},p=(g,A,L,N)=>{g==null?i(A.el=l(A.children||""),L,N):A.el=g.el},T=(g,A,L,N)=>{[g.el,g.anchor]=_(g.children,A,L,N,g.el,g.anchor)},M=({el:g,anchor:A},L,N)=>{let D;for(;g&&g!==A;)D=d(g),i(g,L,N),g=D;i(A,L,N)},E=({el:g,anchor:A})=>{let L;for(;g&&g!==A;)L=d(g),s(g),g=L;s(A)},O=(g,A,L,N,D,q,j,w,v)=>{A.type==="svg"?j="svg":A.type==="math"&&(j="mathml"),g==null?I(A,L,N,D,q,j,w,v):tt(g,A,D,q,j,w,v)},I=(g,A,L,N,D,q,j,w)=>{let v,C;const{props:X,shapeFlag:z,transition:H,dirs:ct}=g;if(v=g.el=r(g.type,q,X&&X.is,X),z&8?h(v,g.children):z&16&&U(g.children,v,null,N,D,Ja(g,q),j,w),ct&&gs(g,null,N,"created"),P(v,g,g.scopeId,j,N),X){for(const pt in X)pt!=="value"&&!qo(pt)&&o(v,pt,null,X[pt],q,N);"value"in X&&o(v,"value",null,X.value,q),(C=X.onVnodeBeforeMount)&&hi(C,N,g)}ct&&gs(g,null,N,"beforeMount");const dt=c0(D,H);dt&&H.beforeEnter(v),i(v,A,L),((C=X&&X.onVnodeMounted)||dt||ct)&&Rn(()=>{C&&hi(C,N,g),dt&&H.enter(v),ct&&gs(g,null,N,"mounted")},D)},P=(g,A,L,N,D)=>{if(L&&f(g,L),N)for(let q=0;q<N.length;q++)f(g,N[q]);if(D){let q=D.subTree;if(A===q||bf(q.type)&&(q.ssContent===A||q.ssFallback===A)){const j=D.vnode;P(g,j,j.scopeId,j.slotScopeIds,D.parent)}}},U=(g,A,L,N,D,q,j,w,v=0)=>{for(let C=v;C<g.length;C++){const X=g[C]=w?ns(g[C]):mi(g[C]);x(null,X,A,L,N,D,q,j,w)}},tt=(g,A,L,N,D,q,j)=>{const w=A.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:X}=A;v|=g.patchFlag&16;const z=g.props||Pe,H=A.props||Pe;let ct;if(L&&_s(L,!1),(ct=H.onVnodeBeforeUpdate)&&hi(ct,L,A,g),X&&gs(A,g,L,"beforeUpdate"),L&&_s(L,!0),(z.innerHTML&&H.innerHTML==null||z.textContent&&H.textContent==null)&&h(w,""),C?y(g.dynamicChildren,C,w,L,N,Ja(A,D),q):j||V(g,A,w,null,L,N,Ja(A,D),q,!1),v>0){if(v&16)S(w,z,H,L,D);else if(v&2&&z.class!==H.class&&o(w,"class",null,H.class,D),v&4&&o(w,"style",z.style,H.style,D),v&8){const dt=A.dynamicProps;for(let pt=0;pt<dt.length;pt++){const Rt=dt[pt],ht=z[Rt],xt=H[Rt];(xt!==ht||Rt==="value")&&o(w,Rt,ht,xt,D,L)}}v&1&&g.children!==A.children&&h(w,A.children)}else!j&&C==null&&S(w,z,H,L,D);((ct=H.onVnodeUpdated)||X)&&Rn(()=>{ct&&hi(ct,L,A,g),X&&gs(A,g,L,"updated")},N)},y=(g,A,L,N,D,q,j)=>{for(let w=0;w<A.length;w++){const v=g[w],C=A[w],X=v.el&&(v.type===xn||!Uo(v,C)||v.shapeFlag&70)?u(v.el):L;x(v,C,X,null,N,D,q,j,!0)}},S=(g,A,L,N,D)=>{if(A!==L){if(A!==Pe)for(const q in A)!qo(q)&&!(q in L)&&o(g,q,A[q],null,D,N);for(const q in L){if(qo(q))continue;const j=L[q],w=A[q];j!==w&&q!=="value"&&o(g,q,w,j,D,N)}"value"in L&&o(g,"value",A.value,L.value,D)}},K=(g,A,L,N,D,q,j,w,v)=>{const C=A.el=g?g.el:a(""),X=A.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:H,slotScopeIds:ct}=A;ct&&(w=w?w.concat(ct):ct),g==null?(i(C,L,N),i(X,L,N),U(A.children||[],L,X,D,q,j,w,v)):z>0&&z&64&&H&&g.dynamicChildren?(y(g.dynamicChildren,H,L,D,q,j,w),(A.key!=null||D&&A===D.subTree)&&yf(g,A,!0)):V(g,A,L,X,D,q,j,w,v)},k=(g,A,L,N,D,q,j,w,v)=>{A.slotScopeIds=w,g==null?A.shapeFlag&512?D.ctx.activate(A,L,N,j,v):J(A,L,N,D,q,j,v):lt(g,A,v)},J=(g,A,L,N,D,q,j)=>{const w=g.component=R0(g,N,D);if(af(g)&&(w.ctx.renderer=ut),P0(w,!1,j),w.asyncDep){if(D&&D.registerDep(w,W,j),!g.el){const v=w.subTree=Xe(lr);p(null,v,A,L)}}else W(w,g,A,L,D,q,j)},lt=(g,A,L)=>{const N=A.component=g.component;if(v0(g,A,L))if(N.asyncDep&&!N.asyncResolved){et(N,A,L);return}else N.next=A,N.update();else A.el=g.el,N.vnode=A},W=(g,A,L,N,D,q,j)=>{const w=()=>{if(g.isMounted){let{next:z,bu:H,u:ct,parent:dt,vnode:pt}=g;{const Lt=Mf(g);if(Lt){z&&(z.el=pt.el,et(g,z,j)),Lt.asyncDep.then(()=>{g.isUnmounted||w()});return}}let Rt=z,ht;_s(g,!1),z?(z.el=pt.el,et(g,z,j)):z=pt,H&&Ya(H),(ht=z.props&&z.props.onVnodeBeforeUpdate)&&hi(ht,dt,z,pt),_s(g,!0);const xt=Qa(g),Ct=g.subTree;g.subTree=xt,x(Ct,xt,u(Ct.el),F(Ct),g,D,q),z.el=xt.el,Rt===null&&x0(g,xt.el),ct&&Rn(ct,D),(ht=z.props&&z.props.onVnodeUpdated)&&Rn(()=>hi(ht,dt,z,pt),D)}else{let z;const{el:H,props:ct}=A,{bm:dt,m:pt,parent:Rt,root:ht,type:xt}=g,Ct=jo(A);if(_s(g,!1),dt&&Ya(dt),!Ct&&(z=ct&&ct.onVnodeBeforeMount)&&hi(z,Rt,A),_s(g,!0),H&&st){const Lt=()=>{g.subTree=Qa(g),st(H,g.subTree,g,D,null)};Ct&&xt.__asyncHydrate?xt.__asyncHydrate(H,g,Lt):Lt()}else{ht.ce&&ht.ce._injectChildStyle(xt);const Lt=g.subTree=Qa(g);x(null,Lt,L,N,g,D,q),A.el=Lt.el}if(pt&&Rn(pt,D),!Ct&&(z=ct&&ct.onVnodeMounted)){const Lt=A;Rn(()=>hi(z,Rt,Lt),D)}(A.shapeFlag&256||Rt&&jo(Rt.vnode)&&Rt.vnode.shapeFlag&256)&&g.a&&Rn(g.a,D),g.isMounted=!0,A=L=N=null}};g.scope.on();const v=g.effect=new Nd(w);g.scope.off();const C=g.update=v.run.bind(v),X=g.job=v.runIfDirty.bind(v);X.i=g,X.id=g.uid,v.scheduler=()=>au(X),_s(g,!0),C()},et=(g,A,L)=>{A.component=g;const N=g.vnode.props;g.vnode=A,g.next=null,n0(g,A.props,N,L),r0(g,A.children,L),cs(),Bu(g),us()},V=(g,A,L,N,D,q,j,w,v=!1)=>{const C=g&&g.children,X=g?g.shapeFlag:0,z=A.children,{patchFlag:H,shapeFlag:ct}=A;if(H>0){if(H&128){yt(C,z,L,N,D,q,j,w,v);return}else if(H&256){mt(C,z,L,N,D,q,j,w,v);return}}ct&8?(X&16&&vt(C,D,q),z!==C&&h(L,z)):X&16?ct&16?yt(C,z,L,N,D,q,j,w,v):vt(C,D,q,!0):(X&8&&h(L,""),ct&16&&U(z,L,N,D,q,j,w,v))},mt=(g,A,L,N,D,q,j,w,v)=>{g=g||lo,A=A||lo;const C=g.length,X=A.length,z=Math.min(C,X);let H;for(H=0;H<z;H++){const ct=A[H]=v?ns(A[H]):mi(A[H]);x(g[H],ct,L,null,D,q,j,w,v)}C>X?vt(g,D,q,!0,!1,z):U(A,L,N,D,q,j,w,v,z)},yt=(g,A,L,N,D,q,j,w,v)=>{let C=0;const X=A.length;let z=g.length-1,H=X-1;for(;C<=z&&C<=H;){const ct=g[C],dt=A[C]=v?ns(A[C]):mi(A[C]);if(Uo(ct,dt))x(ct,dt,L,null,D,q,j,w,v);else break;C++}for(;C<=z&&C<=H;){const ct=g[z],dt=A[H]=v?ns(A[H]):mi(A[H]);if(Uo(ct,dt))x(ct,dt,L,null,D,q,j,w,v);else break;z--,H--}if(C>z){if(C<=H){const ct=H+1,dt=ct<X?A[ct].el:N;for(;C<=H;)x(null,A[C]=v?ns(A[C]):mi(A[C]),L,dt,D,q,j,w,v),C++}}else if(C>H)for(;C<=z;)It(g[C],D,q,!0),C++;else{const ct=C,dt=C,pt=new Map;for(C=dt;C<=H;C++){const Dt=A[C]=v?ns(A[C]):mi(A[C]);Dt.key!=null&&pt.set(Dt.key,C)}let Rt,ht=0;const xt=H-dt+1;let Ct=!1,Lt=0;const Et=new Array(xt);for(C=0;C<xt;C++)Et[C]=0;for(C=ct;C<=z;C++){const Dt=g[C];if(ht>=xt){It(Dt,D,q,!0);continue}let Vt;if(Dt.key!=null)Vt=pt.get(Dt.key);else for(Rt=dt;Rt<=H;Rt++)if(Et[Rt-dt]===0&&Uo(Dt,A[Rt])){Vt=Rt;break}Vt===void 0?It(Dt,D,q,!0):(Et[Vt-dt]=C+1,Vt>=Lt?Lt=Vt:Ct=!0,x(Dt,A[Vt],L,null,D,q,j,w,v),ht++)}const Wt=Ct?u0(Et):lo;for(Rt=Wt.length-1,C=xt-1;C>=0;C--){const Dt=dt+C,Vt=A[Dt],B=Dt+1<X?A[Dt+1].el:N;Et[C]===0?x(null,Vt,L,B,D,q,j,w,v):Ct&&(Rt<0||C!==Wt[Rt]?_t(Vt,L,B,2):Rt--)}}},_t=(g,A,L,N,D=null)=>{const{el:q,type:j,transition:w,children:v,shapeFlag:C}=g;if(C&6){_t(g.component.subTree,A,L,N);return}if(C&128){g.suspense.move(A,L,N);return}if(C&64){j.move(g,A,L,ut);return}if(j===xn){i(q,A,L);for(let z=0;z<v.length;z++)_t(v[z],A,L,N);i(g.anchor,A,L);return}if(j===tl){M(g,A,L);return}if(N!==2&&C&1&&w)if(N===0)w.beforeEnter(q),i(q,A,L),Rn(()=>w.enter(q),D);else{const{leave:z,delayLeave:H,afterLeave:ct}=w,dt=()=>i(q,A,L),pt=()=>{z(q,()=>{dt(),ct&&ct()})};H?H(q,dt,pt):pt()}else i(q,A,L)},It=(g,A,L,N=!1,D=!1)=>{const{type:q,props:j,ref:w,children:v,dynamicChildren:C,shapeFlag:X,patchFlag:z,dirs:H,cacheIndex:ct}=g;if(z===-2&&(D=!1),w!=null&&Xl(w,null,L,g,!0),ct!=null&&(A.renderCache[ct]=void 0),X&256){A.ctx.deactivate(g);return}const dt=X&1&&H,pt=!jo(g);let Rt;if(pt&&(Rt=j&&j.onVnodeBeforeUnmount)&&hi(Rt,A,g),X&6)ft(g.component,L,N);else{if(X&128){g.suspense.unmount(L,N);return}dt&&gs(g,null,A,"beforeUnmount"),X&64?g.type.remove(g,A,L,ut,N):C&&!C.hasOnce&&(q!==xn||z>0&&z&64)?vt(C,A,L,!1,!0):(q===xn&&z&384||!D&&X&16)&&vt(v,A,L),N&&Gt(g)}(pt&&(Rt=j&&j.onVnodeUnmounted)||dt)&&Rn(()=>{Rt&&hi(Rt,A,g),dt&&gs(g,null,A,"unmounted")},L)},Gt=g=>{const{type:A,el:L,anchor:N,transition:D}=g;if(A===xn){ot(L,N);return}if(A===tl){E(g);return}const q=()=>{s(L),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:j,delayLeave:w}=D,v=()=>j(L,q);w?w(g.el,q,v):v()}else q()},ot=(g,A)=>{let L;for(;g!==A;)L=d(g),s(g),g=L;s(A)},ft=(g,A,L)=>{const{bum:N,scope:D,job:q,subTree:j,um:w,m:v,a:C}=g;qu(v),qu(C),N&&Ya(N),D.stop(),q&&(q.flags|=8,It(j,g,A,L)),w&&Rn(w,A),Rn(()=>{g.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},vt=(g,A,L,N=!1,D=!1,q=0)=>{for(let j=q;j<g.length;j++)It(g[j],A,L,N,D)},F=g=>{if(g.shapeFlag&6)return F(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const A=d(g.anchor||g.el),L=A&&A[Im];return L?d(L):A};let at=!1;const rt=(g,A,L)=>{g==null?A._vnode&&It(A._vnode,null,null,!0):x(A._vnode||null,g,A,null,null,null,L),A._vnode=g,at||(at=!0,Bu(),nf(),at=!1)},ut={p:x,um:It,m:_t,r:Gt,mt:J,mc:U,pc:V,pbc:y,n:F,o:n};let Mt,st;return{render:rt,hydrate:Mt,createApp:t0(rt,Mt)}}function Ja({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function _s({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function c0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function yf(n,t,e=!1){const i=n.children,s=t.children;if(oe(i)&&oe(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=ns(s[o]),a.el=r.el),!e&&a.patchFlag!==-2&&yf(r,a)),a.type===Fa&&(a.el=r.el)}}function u0(n){const t=n.slice(),e=[0];let i,s,o,r,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(o=0,r=e.length-1;o<r;)a=o+r>>1,n[e[a]]<c?o=a+1:r=a;c<n[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,r=e[o-1];o-- >0;)e[o]=r,r=t[r];return e}function Mf(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Mf(t)}function qu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const h0=Symbol.for("v-scx"),d0=()=>Gi(h0);function Ve(n,t,e){return wf(n,t,e)}function wf(n,t,e=Pe){const{immediate:i,deep:s,flush:o,once:r}=e,a=sn({},e);let l;if(Oa)if(o==="sync"){const d=d0();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||i)a.once=!0;else{const d=()=>{};return d.stop=_i,d.resume=_i,d.pause=_i,d}const c=cn;a.call=(d,f,_)=>xi(d,c,f,_);let h=!1;o==="post"?a.scheduler=d=>{Rn(d,c&&c.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(d,f)=>{f?d():au(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const u=Tm(n,t,a);return l&&l.push(u),u}function f0(n,t,e){const i=this.proxy,s=en(n)?n.includes(".")?Sf(i,n):()=>i[n]:n.bind(i,i);let o;se(t)?o=t:(o=t.handler,e=t);const r=xr(this),a=wf(s,o.bind(i),e);return r(),a}function Sf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const p0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Hn(t)}Modifiers`]||n[`${Fs(t)}Modifiers`];function m0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Pe;let s=e;const o=t.startsWith("update:"),r=o&&p0(i,t.slice(7));r&&(r.trim&&(s=e.map(h=>en(h)?h.trim():h)),r.number&&(s=e.map(Wp)));let a,l=i[a=qa(t)]||i[a=qa(Hn(t))];!l&&o&&(l=i[a=qa(Fs(t))]),l&&xi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,xi(c,n,6,s)}}function Ef(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const o=n.emits;let r={},a=!1;if(!se(n)){const l=c=>{const h=Ef(c,t,!0);h&&(a=!0,sn(r,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!a?(qe(n)&&i.set(n,null),null):(oe(o)?o.forEach(l=>r[l]=null):sn(r,o),qe(n)&&i.set(n,r),r)}function Na(n,t){return!n||!Aa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ye(n,t[0].toLowerCase()+t.slice(1))||ye(n,Fs(t))||ye(n,t))}function Qa(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,m=ga(n);let p,T;try{if(e.shapeFlag&4){const E=s||i,O=E;p=mi(c.call(O,E,h,u,f,d,_)),T=a}else{const E=t;p=mi(E.length>1?E(u,{attrs:a,slots:r,emit:l}):E(u,null)),T=t.props?a:g0(a)}}catch(E){Zo.length=0,Da(E,n,1),p=Xe(lr)}let M=p;if(T&&x!==!1){const E=Object.keys(T),{shapeFlag:O}=M;E.length&&O&7&&(o&&E.some(qc)&&(T=_0(T,o)),M=vo(M,T,!1,!0))}return e.dirs&&(M=vo(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&lu(M,e.transition),p=M,ga(m),p}const g0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Aa(e))&&((t||(t={}))[e]=n[e]);return t},_0=(n,t)=>{const e={};for(const i in n)(!qc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function v0(n,t,e){const{props:i,children:s,component:o}=n,{props:r,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Yu(i,r,c):!!r;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(r[d]!==i[d]&&!Na(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Yu(i,r,c):!0:!!r;return!1}function Yu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==n[o]&&!Na(e,o))return!0}return!1}function x0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const bf=n=>n.__isSuspense;function y0(n,t){t&&t.pendingBranch?oe(n)?t.effects.push(...n):t.effects.push(n):Pm(n)}const xn=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),lr=Symbol.for("v-cmt"),tl=Symbol.for("v-stc"),Zo=[];let In=null;function Mi(n=!1){Zo.push(In=n?null:[])}function M0(){Zo.pop(),In=Zo[Zo.length-1]||null}let cr=1;function $u(n){cr+=n,n<0&&In&&(In.hasOnce=!0)}function w0(n){return n.dynamicChildren=cr>0?In||lo:null,M0(),cr>0&&In&&In.push(n),n}function wi(n,t,e,i,s,o){return w0(qt(n,t,e,i,s,o,!0))}function va(n){return n?n.__v_isVNode===!0:!1}function Uo(n,t){return n.type===t.type&&n.key===t.key}const Tf=({key:n})=>n??null,ra=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?en(n)||un(n)||se(n)?{i:Cn,r:n,k:t,f:!!e}:n:null);function qt(n,t=null,e=null,i=0,s=null,o=n===xn?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Tf(t),ref:t&&ra(t),scopeId:of,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Cn};return a?(du(l,e),o&128&&n.normalize(l)):e&&(l.shapeFlag|=en(e)?8:16),cr>0&&!r&&In&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&In.push(l),l}const Xe=S0;function S0(n,t=null,e=null,i=0,s=null,o=!1){if((!n||n===Xm)&&(n=lr),va(n)){const a=vo(n,t,!0);return e&&du(a,e),cr>0&&!o&&In&&(a.shapeFlag&6?In[In.indexOf(n)]=a:In.push(a)),a.patchFlag=-2,a}if(U0(n)&&(n=n.__vccOpts),t){t=E0(t);let{class:a,style:l}=t;a&&!en(a)&&(t.class=Vn(a)),qe(l)&&(su(l)&&!oe(l)&&(l=sn({},l)),t.style=jc(l))}const r=en(n)?1:bf(n)?128:Lm(n)?64:qe(n)?4:se(n)?2:0;return qt(n,t,e,i,s,r,o,!0)}function E0(n){return n?su(n)||ff(n)?sn({},n):n:null}function vo(n,t,e=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:l}=n,c=t?b0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Tf(c),ref:t&&t.ref?e&&o?oe(o)?o.concat(ra(t)):[o,ra(t)]:ra(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==xn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vo(n.ssContent),ssFallback:n.ssFallback&&vo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&lu(h,l.clone(h)),h}function fi(n=" ",t=0){return Xe(Fa,null,n,t)}function mi(n){return n==null||typeof n=="boolean"?Xe(lr):oe(n)?Xe(xn,null,n.slice()):va(n)?ns(n):Xe(Fa,null,String(n))}function ns(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vo(n)}function du(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(oe(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),du(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!ff(t)?t._ctx=Cn:s===3&&Cn&&(Cn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else se(t)?(t={default:t,_ctx:Cn},e=32):(t=String(t),i&64?(e=16,t=[fi(t)]):e=8);n.children=t,n.shapeFlag|=e}function b0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Vn([t.class,i.class]));else if(s==="style")t.style=jc([t.style,i.style]);else if(Aa(s)){const o=t[s],r=i[s];r&&o!==r&&!(oe(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function hi(n,t,e,i=null){xi(n,t,7,[e,i])}const T0=uf();let A0=0;function R0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||T0,o={uid:A0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mf(i,s),emitsOptions:Ef(i,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:i.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=m0.bind(null,o),n.ce&&n.ce(o),o}let cn=null,xa,Kl;{const n=Dd(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};xa=t("__VUE_INSTANCE_SETTERS__",e=>cn=e),Kl=t("__VUE_SSR_SETTERS__",e=>Oa=e)}const xr=n=>{const t=cn;return xa(n),n.scope.on(),()=>{n.scope.off(),xa(t)}},ju=()=>{cn&&cn.scope.off(),xa(null)};function Af(n){return n.vnode.shapeFlag&4}let Oa=!1;function P0(n,t=!1,e=!1){t&&Kl(t);const{props:i,children:s}=n.vnode,o=Af(n);e0(n,i,o,t),o0(n,s,e);const r=o?C0(n,t):void 0;return t&&Kl(!1),r}function C0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ym);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?L0(n):null,o=xr(n);cs();const r=vr(i,n,0,[n.props,s]);if(us(),o(),Id(r)){if(jo(n)||rf(n),r.then(ju,ju),t)return r.then(a=>{Ku(n,a,t)}).catch(a=>{Da(a,n,0)});n.asyncDep=r}else Ku(n,r,t)}else Rf(n,t)}function Ku(n,t,e){se(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:qe(t)&&(n.setupState=Jd(t)),Rf(n,e)}let Zu;function Rf(n,t,e){const i=n.type;if(!n.render){if(!t&&Zu&&!i.render){const s=i.template||uu(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=sn(sn({isCustomElement:o,delimiters:a},r),l);i.render=Zu(s,c)}}n.render=i.render||_i}{const s=xr(n);cs();try{$m(n)}finally{us(),s()}}}const I0={get(n,t){return hn(n,"get",""),n[t]}};function L0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,I0),slots:n.slots,emit:n.emit,expose:t}}function Ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Jd(ym(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ko)return Ko[e](n)},has(t,e){return e in t||e in Ko}})):n.proxy}function D0(n,t=!0){return se(n)?n.displayName||n.name:n.name||t&&n.__name}function U0(n){return se(n)&&"__vccOpts"in n}const Jn=(n,t)=>Em(n,t,Oa);function Pf(n,t,e){const i=arguments.length;return i===2?qe(t)&&!oe(t)?va(t)?Xe(n,null,[t]):Xe(n,t):Xe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&va(e)&&(e=[e]),Xe(n,t,e))}const N0="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zl;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{Zl=Ju.createPolicy("vue",{createHTML:n=>n})}catch{}const Cf=Zl?n=>Zl.createHTML(n):n=>n,F0="http://www.w3.org/2000/svg",O0="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,Qu=Ni&&Ni.createElement("template"),B0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Ni.createElementNS(F0,n):t==="mathml"?Ni.createElementNS(O0,n):e?Ni.createElement(n,{is:e}):Ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ni.createTextNode(n),createComment:n=>Ni.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ni.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,o){const r=e?e.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===o||!(s=s.nextSibling)););else{Qu.innerHTML=Cf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},z0=Symbol("_vtc");function G0(n,t,e){const i=n[z0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ya=Symbol("_vod"),If=Symbol("_vsh"),H0={beforeMount(n,{value:t},{transition:e}){n[ya]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):No(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),No(n,!0),i.enter(n)):i.leave(n,()=>{No(n,!1)}):No(n,t))},beforeUnmount(n,{value:t}){No(n,t)}};function No(n,t){n.style.display=t?n[ya]:"none",n[If]=!t}const k0=Symbol(""),V0=/(^|;)\s*display\s*:/;function W0(n,t,e){const i=n.style,s=en(e);let o=!1;if(e&&!s){if(t)if(en(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&aa(i,a,"")}else for(const r in t)e[r]==null&&aa(i,r,"");for(const r in e)r==="display"&&(o=!0),aa(i,r,e[r])}else if(s){if(t!==e){const r=i[k0];r&&(e+=";"+r),i.cssText=e,o=V0.test(e)}}else t&&n.removeAttribute("style");ya in n&&(n[ya]=o?i.display:"",n[If]&&(i.display="none"))}const th=/\s*!important$/;function aa(n,t,e){if(oe(e))e.forEach(i=>aa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=X0(n,t);th.test(e)?n.setProperty(Fs(i),e.replace(th,""),"important"):n[i]=e}}const eh=["Webkit","Moz","ms"],el={};function X0(n,t){const e=el[t];if(e)return e;let i=Hn(t);if(i!=="filter"&&i in n)return el[t]=i;i=Ca(i);for(let s=0;s<eh.length;s++){const o=eh[s]+i;if(o in n)return el[t]=o}return t}const nh="http://www.w3.org/1999/xlink";function ih(n,t,e,i,s,o=Kp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(nh,t.slice(6,t.length)):n.setAttributeNS(nh,t,e):e==null||o&&!Ud(e)?n.removeAttribute(t):n.setAttribute(t,o?"":Ao(e)?String(e):e)}function sh(n,t,e,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Cf(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?n.type==="checkbox"?"on":"":String(e);(r!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const r=typeof n[t];r==="boolean"?e=Ud(e):e==null&&r==="string"?(e="",o=!0):r==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(t)}function q0(n,t,e,i){n.addEventListener(t,e,i)}function Y0(n,t,e,i){n.removeEventListener(t,e,i)}const oh=Symbol("_vei");function $0(n,t,e,i,s=null){const o=n[oh]||(n[oh]={}),r=o[t];if(i&&r)r.value=i;else{const[a,l]=j0(t);if(i){const c=o[t]=J0(i,s);q0(n,a,c,l)}else r&&(Y0(n,a,r,l),o[t]=void 0)}}const rh=/(?:Once|Passive|Capture)$/;function j0(n){let t;if(rh.test(n)){t={};let i;for(;i=n.match(rh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Fs(n.slice(2)),t]}let nl=0;const K0=Promise.resolve(),Z0=()=>nl||(K0.then(()=>nl=0),nl=Date.now());function J0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;xi(Q0(i,e.value),t,5,[i])};return e.value=n,e.attached=Z0(),e}function Q0(n,t){if(oe(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const ah=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,tg=(n,t,e,i,s,o)=>{const r=s==="svg";t==="class"?G0(n,i,r):t==="style"?W0(n,e,i):Aa(t)?qc(t)||$0(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):eg(n,t,i,r))?(sh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ih(n,t,i,r,o,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!en(i))?sh(n,Hn(t),i):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ih(n,t,i,r))};function eg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&ah(t)&&se(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ah(t)&&en(e)?!1:t in n}const ng=sn({patchProp:tg},B0);let lh;function ig(){return lh||(lh=a0(ng))}const sg=(...n)=>{const t=ig().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=rg(i);if(!s)return;const o=t._component;!se(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=e(s,!1,og(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function og(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function rg(n){return en(n)?document.querySelector(n):n}const ag={id:"app"},lg=Wn({__name:"App",setup(n){const t=Zt(!1);function e(i){i.clientY<100?t.value=!0:t.value=!1}return li(()=>{window.addEventListener("mousemove",e)}),cu(()=>{window.removeEventListener("mousemove",e)}),(i,s)=>{const o=zu("router-link"),r=zu("router-view");return Mi(),wi("div",ag,[Cm(qt("nav",null,[Xe(o,{to:"/3d-bear-arts/leather"},{default:di(()=>s[0]||(s[0]=[fi("Leather")])),_:1}),Xe(o,{to:"/3d-bear-arts/pop-art"},{default:di(()=>s[1]||(s[1]=[fi("Pop MouseMove")])),_:1}),Xe(o,{to:"/3d-bear-arts/pop-art-bear-3"},{default:di(()=>s[2]||(s[2]=[fi("Pop3")])),_:1}),Xe(o,{to:"/3d-bear-arts/machine"},{default:di(()=>s[3]||(s[3]=[fi("machine")])),_:1}),Xe(o,{to:"/3d-bear-arts/water"},{default:di(()=>s[4]||(s[4]=[fi("Water")])),_:1}),Xe(o,{to:"/3d-bear-arts/ghost-bear"},{default:di(()=>s[5]||(s[5]=[fi("ghost")])),_:1}),Xe(o,{to:"/3d-bear-arts/white-ghost-bear"},{default:di(()=>s[6]||(s[6]=[fi("white ghost")])),_:1}),Xe(o,{to:"/3d-bear-arts/"},{default:di(()=>s[7]||(s[7]=[fi("santa")])),_:1}),Xe(o,{to:"/3d-bear-arts/half"},{default:di(()=>s[8]||(s[8]=[fi("HalfTranparent")])),_:1})],512),[[H0,t.value]]),Xe(r)])}}}),Si=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},cg=Si(lg,[["__scopeId","data-v-703cc388"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const no=typeof document<"u";function Lf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ug(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Lf(n.default)}const Ee=Object.assign;function il(n,t){const e={};for(const i in t){const s=t[i];e[i]=oi(s)?s.map(n):n(s)}return e}const Jo=()=>{},oi=Array.isArray,Df=/#/g,hg=/&/g,dg=/\//g,fg=/=/g,pg=/\?/g,Uf=/\+/g,mg=/%5B/g,gg=/%5D/g,Nf=/%5E/g,_g=/%60/g,Ff=/%7B/g,vg=/%7C/g,Of=/%7D/g,xg=/%20/g;function fu(n){return encodeURI(""+n).replace(vg,"|").replace(mg,"[").replace(gg,"]")}function yg(n){return fu(n).replace(Ff,"{").replace(Of,"}").replace(Nf,"^")}function Jl(n){return fu(n).replace(Uf,"%2B").replace(xg,"+").replace(Df,"%23").replace(hg,"%26").replace(_g,"`").replace(Ff,"{").replace(Of,"}").replace(Nf,"^")}function Mg(n){return Jl(n).replace(fg,"%3D")}function wg(n){return fu(n).replace(Df,"%23").replace(pg,"%3F")}function Sg(n){return n==null?"":wg(n).replace(dg,"%2F")}function ur(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Eg=/\/$/,bg=n=>n.replace(Eg,"");function sl(n,t,e="/"){let i,s={},o="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),s=n(o)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Pg(i??t,e),{fullPath:i+(o&&"?")+o+r,path:i,query:s,hash:ur(r)}}function Tg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function ch(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Ag(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&xo(t.matched[i],e.matched[s])&&Bf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function xo(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Bf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Rg(n[e],t[e]))return!1;return!0}function Rg(n,t){return oi(n)?uh(n,t):oi(t)?uh(t,n):n===t}function uh(n,t){return oi(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Pg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=e.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const $i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var hr;(function(n){n.pop="pop",n.push="push"})(hr||(hr={}));var Qo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qo||(Qo={}));function Cg(n){if(!n)if(no){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),bg(n)}const Ig=/^[^#]+#/;function Lg(n,t){return n.replace(Ig,"#")+t}function Dg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function Ug(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Dg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function hh(n,t){return(history.state?history.state.position-t:-1)+n}const Ql=new Map;function Ng(n,t){Ql.set(n,t)}function Fg(n){const t=Ql.get(n);return Ql.delete(n),t}let Og=()=>location.protocol+"//"+location.host;function zf(n,t){const{pathname:e,search:i,hash:s}=t,o=n.indexOf("#");if(o>-1){let a=s.includes(n.slice(o))?n.slice(o).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ch(l,"")}return ch(e,n)+i+s}function Bg(n,t,e,i){let s=[],o=[],r=null;const a=({state:d})=>{const f=zf(n,location),_=e.value,x=t.value;let m=0;if(d){if(e.value=f,t.value=d,r&&r===_){r=null;return}m=x?d.position-x.position:0}else i(f);s.forEach(p=>{p(e.value,_,{delta:m,type:hr.pop,direction:m?m>0?Qo.forward:Qo.back:Qo.unknown})})};function l(){r=e.value}function c(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return o.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:za()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function dh(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?za():null}}function zg(n){const{history:t,location:e}=window,i={value:zf(n,e)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,h){const u=n.indexOf("#"),d=u>-1?(e.host&&document.querySelector("base")?n:n.slice(u))+l:Og()+n+l;try{t[h?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),e[h?"replace":"assign"](d)}}function r(l,c){const h=Ee({},t.state,dh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});o(l,h,!0),i.value=l}function a(l,c){const h=Ee({},s.value,t.state,{forward:l,scroll:za()});o(h.current,h,!0);const u=Ee({},dh(i.value,l,null),{position:h.position+1},c);o(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:r}}function Gg(n){n=Cg(n);const t=zg(n),e=Bg(n,t.state,t.location,t.replace);function i(o,r=!0){r||e.pauseListeners(),history.go(o)}const s=Ee({location:"",base:n,go:i,createHref:Lg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Hg(n){return typeof n=="string"||n&&typeof n=="object"}function Gf(n){return typeof n=="string"||typeof n=="symbol"}const Hf=Symbol("");var fh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(fh||(fh={}));function yo(n,t){return Ee(new Error,{type:n,[Hf]:!0},t)}function Ai(n,t){return n instanceof Error&&Hf in n&&(t==null||!!(n.type&t))}const ph="[^/]+?",kg={sensitive:!1,strict:!1,start:!0,end:!0},Vg=/[.+*?^${}()[\]/\\]/g;function Wg(n,t){const e=Ee({},kg,t),i=[];let s=e.start?"^":"";const o=[];for(const c of n){const h=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const d=c[u];let f=40+(e.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(Vg,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:x,optional:m,regexp:p}=d;o.push({name:_,repeatable:x,optional:m});const T=p||ph;if(T!==ph){f+=10;try{new RegExp(`(${T})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${T}): `+E.message)}}let M=x?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;u||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,f+=20,m&&(f+=-8),x&&(f+=-20),T===".*"&&(f+=-50)}h.push(f)}i.push(h)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const r=new RegExp(s,e.sensitive?"":"i");function a(c){const h=c.match(r),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",_=o[d-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function l(c){let h="",u=!1;for(const d of n){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:_,repeatable:x,optional:m}=f,p=_ in c?c[_]:"";if(oi(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const T=oi(p)?p.join("/"):p;if(!T)if(m)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=T}}return h||"/"}return{re:r,score:i,keys:o,parse:a,stringify:l}}function Xg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function kf(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const o=Xg(i[e],s[e]);if(o)return o;e++}if(Math.abs(s.length-i.length)===1){if(mh(i))return 1;if(mh(s))return-1}return s.length-i.length}function mh(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const qg={type:0,value:""},Yg=/[a-zA-Z0-9_]/;function $g(n){if(!n)return[[]];if(n==="/")return[[qg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(f){throw new Error(`ERR (${e})/"${c}": ${f}`)}let e=0,i=e;const s=[];let o;function r(){o&&s.push(o),o=[]}let a=0,l,c="",h="";function u(){c&&(e===0?o.push({type:0,value:c}):e===1||e===2||e===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&u(),r()):l===":"?(u(),e=1):d();break;case 4:d(),e=i;break;case 1:l==="("?e=2:Yg.test(l)?d():(u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:e=3:h+=l;break;case 3:u(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),r(),s}function jg(n,t,e){const i=Wg($g(n.path),e),s=Ee(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Kg(n,t){const e=[],i=new Map;t=xh({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function o(u,d,f){const _=!f,x=_h(u);x.aliasOf=f&&f.record;const m=xh(t,u),p=[x];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of E)p.push(_h(Ee({},x,{components:f?f.record.components:x.components,path:O,aliasOf:f?f.record:x})))}let T,M;for(const E of p){const{path:O}=E;if(d&&O[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";E.path=d.record.path+(O&&P+O)}if(T=jg(E,d,m),f?f.alias.push(T):(M=M||T,M!==T&&M.alias.push(T),_&&u.name&&!vh(T)&&r(u.name)),Vf(T)&&l(T),x.children){const I=x.children;for(let P=0;P<I.length;P++)o(I[P],T,f&&f.children[P])}f=f||T}return M?()=>{r(M)}:Jo}function r(u){if(Gf(u)){const d=i.get(u);d&&(i.delete(u),e.splice(e.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=e.indexOf(u);d>-1&&(e.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return e}function l(u){const d=Qg(u,e);e.splice(d,0,u),u.record.name&&!vh(u)&&i.set(u.record.name,u)}function c(u,d){let f,_={},x,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw yo(1,{location:u});m=f.record.name,_=Ee(gh(d.params,f.keys.filter(M=>!M.optional).concat(f.parent?f.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&gh(u.params,f.keys.map(M=>M.name))),x=f.stringify(_)}else if(u.path!=null)x=u.path,f=e.find(M=>M.re.test(x)),f&&(_=f.parse(x),m=f.record.name);else{if(f=d.name?i.get(d.name):e.find(M=>M.re.test(d.path)),!f)throw yo(1,{location:u,currentLocation:d});m=f.record.name,_=Ee({},d.params,u.params),x=f.stringify(_)}const p=[];let T=f;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:x,params:_,matched:p,meta:Jg(p)}}n.forEach(u=>o(u));function h(){e.length=0,i.clear()}return{addRoute:o,resolve:c,removeRoute:r,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function gh(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function _h(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Zg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Zg(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function vh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Jg(n){return n.reduce((t,e)=>Ee(t,e.meta),{})}function xh(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function Qg(n,t){let e=0,i=t.length;for(;e!==i;){const o=e+i>>1;kf(n,t[o])<0?i=o:e=o+1}const s=t_(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function t_(n){let t=n;for(;t=t.parent;)if(Vf(t)&&kf(n,t)===0)return t}function Vf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function e_(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Uf," "),r=o.indexOf("="),a=ur(r<0?o:o.slice(0,r)),l=r<0?null:ur(o.slice(r+1));if(a in t){let c=t[a];oi(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function yh(n){let t="";for(let e in n){const i=n[e];if(e=Mg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(oi(i)?i.map(o=>o&&Jl(o)):[i&&Jl(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+e,o!=null&&(t+="="+o))})}return t}function n_(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=oi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const i_=Symbol(""),Mh=Symbol(""),pu=Symbol(""),Wf=Symbol(""),tc=Symbol("");function Fo(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function is(n,t,e,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(yo(4,{from:e,to:t})):d instanceof Error?l(d):Hg(d)?l(yo(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},h=o(()=>n.call(i&&i.instances[s],t,e,c));let u=Promise.resolve(h);n.length<3&&(u=u.then(c)),u.catch(d=>l(d))})}function ol(n,t,e,i,s=o=>o()){const o=[];for(const r of n)for(const a in r.components){let l=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Lf(l)){const h=(l.__vccOpts||l)[t];h&&o.push(is(h,e,i,r,a,s))}else{let c=l();o.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=ug(h)?h.default:h;r.mods[a]=h,r.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&is(f,e,i,r,a,s)()}))}}return o}function wh(n){const t=Gi(pu),e=Gi(Wf),i=Jn(()=>{const l=co(n.to);return t.resolve(l)}),s=Jn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=e.matched;if(!h||!u.length)return-1;const d=u.findIndex(xo.bind(null,h));if(d>-1)return d;const f=Sh(l[c-2]);return c>1&&Sh(h)===f&&u[u.length-1].path!==f?u.findIndex(xo.bind(null,l[c-2])):d}),o=Jn(()=>s.value>-1&&a_(e.params,i.value.params)),r=Jn(()=>s.value>-1&&s.value===e.matched.length-1&&Bf(e.params,i.value.params));function a(l={}){return r_(l)?t[co(n.replace)?"replace":"push"](co(n.to)).catch(Jo):Promise.resolve()}return{route:i,href:Jn(()=>i.value.href),isActive:o,isExactActive:r,navigate:a}}const s_=Wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wh,setup(n,{slots:t}){const e=La(wh(n)),{options:i}=Gi(pu),s=Jn(()=>({[Eh(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Eh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const o=t.default&&t.default(e);return n.custom?o:Pf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},o)}}}),o_=s_;function r_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function a_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!oi(s)||s.length!==i.length||i.some((o,r)=>o!==s[r]))return!1}return!0}function Sh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Eh=(n,t,e)=>n??t??e,l_=Wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Gi(tc),s=Jn(()=>n.route||i.value),o=Gi(Mh,0),r=Jn(()=>{let c=co(o);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=Jn(()=>s.value.matched[r.value]);oa(Mh,Jn(()=>r.value+1)),oa(i_,a),oa(tc,s);const l=Zt();return Ve(()=>[l.value,a.value,n.name],([c,h,u],[d,f,_])=>{h&&(h.instances[u]=c,f&&f!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),c&&h&&(!f||!xo(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,h=n.name,u=a.value,d=u&&u.components[h];if(!d)return bh(e.default,{Component:d,route:c});const f=u.props[h],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,m=Pf(d,Ee({},_,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return bh(e.default,{Component:m,route:c})||m}}});function bh(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const c_=l_;function u_(n){const t=Kg(n.routes,n),e=n.parseQuery||e_,i=n.stringifyQuery||yh,s=n.history,o=Fo(),r=Fo(),a=Fo(),l=$o($i);let c=$i;no&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=il.bind(null,F=>""+F),u=il.bind(null,Sg),d=il.bind(null,ur);function f(F,at){let rt,ut;return Gf(F)?(rt=t.getRecordMatcher(F),ut=at):ut=F,t.addRoute(ut,rt)}function _(F){const at=t.getRecordMatcher(F);at&&t.removeRoute(at)}function x(){return t.getRoutes().map(F=>F.record)}function m(F){return!!t.getRecordMatcher(F)}function p(F,at){if(at=Ee({},at||l.value),typeof F=="string"){const A=sl(e,F,at.path),L=t.resolve({path:A.path},at),N=s.createHref(A.fullPath);return Ee(A,L,{params:d(L.params),hash:ur(A.hash),redirectedFrom:void 0,href:N})}let rt;if(F.path!=null)rt=Ee({},F,{path:sl(e,F.path,at.path).path});else{const A=Ee({},F.params);for(const L in A)A[L]==null&&delete A[L];rt=Ee({},F,{params:u(A)}),at.params=u(at.params)}const ut=t.resolve(rt,at),Mt=F.hash||"";ut.params=h(d(ut.params));const st=Tg(i,Ee({},F,{hash:yg(Mt),path:ut.path})),g=s.createHref(st);return Ee({fullPath:st,hash:Mt,query:i===yh?n_(F.query):F.query||{}},ut,{redirectedFrom:void 0,href:g})}function T(F){return typeof F=="string"?sl(e,F,l.value.path):Ee({},F)}function M(F,at){if(c!==F)return yo(8,{from:at,to:F})}function E(F){return P(F)}function O(F){return E(Ee(T(F),{replace:!0}))}function I(F){const at=F.matched[F.matched.length-1];if(at&&at.redirect){const{redirect:rt}=at;let ut=typeof rt=="function"?rt(F):rt;return typeof ut=="string"&&(ut=ut.includes("?")||ut.includes("#")?ut=T(ut):{path:ut},ut.params={}),Ee({query:F.query,hash:F.hash,params:ut.path!=null?{}:F.params},ut)}}function P(F,at){const rt=c=p(F),ut=l.value,Mt=F.state,st=F.force,g=F.replace===!0,A=I(rt);if(A)return P(Ee(T(A),{state:typeof A=="object"?Ee({},Mt,A.state):Mt,force:st,replace:g}),at||rt);const L=rt;L.redirectedFrom=at;let N;return!st&&Ag(i,ut,rt)&&(N=yo(16,{to:L,from:ut}),_t(ut,ut,!0,!1)),(N?Promise.resolve(N):y(L,ut)).catch(D=>Ai(D)?Ai(D,2)?D:yt(D):V(D,L,ut)).then(D=>{if(D){if(Ai(D,2))return P(Ee({replace:g},T(D.to),{state:typeof D.to=="object"?Ee({},Mt,D.to.state):Mt,force:st}),at||L)}else D=K(L,ut,!0,g,Mt);return S(L,ut,D),D})}function U(F,at){const rt=M(F,at);return rt?Promise.reject(rt):Promise.resolve()}function tt(F){const at=ot.values().next().value;return at&&typeof at.runWithContext=="function"?at.runWithContext(F):F()}function y(F,at){let rt;const[ut,Mt,st]=h_(F,at);rt=ol(ut.reverse(),"beforeRouteLeave",F,at);for(const A of ut)A.leaveGuards.forEach(L=>{rt.push(is(L,F,at))});const g=U.bind(null,F,at);return rt.push(g),vt(rt).then(()=>{rt=[];for(const A of o.list())rt.push(is(A,F,at));return rt.push(g),vt(rt)}).then(()=>{rt=ol(Mt,"beforeRouteUpdate",F,at);for(const A of Mt)A.updateGuards.forEach(L=>{rt.push(is(L,F,at))});return rt.push(g),vt(rt)}).then(()=>{rt=[];for(const A of st)if(A.beforeEnter)if(oi(A.beforeEnter))for(const L of A.beforeEnter)rt.push(is(L,F,at));else rt.push(is(A.beforeEnter,F,at));return rt.push(g),vt(rt)}).then(()=>(F.matched.forEach(A=>A.enterCallbacks={}),rt=ol(st,"beforeRouteEnter",F,at,tt),rt.push(g),vt(rt))).then(()=>{rt=[];for(const A of r.list())rt.push(is(A,F,at));return rt.push(g),vt(rt)}).catch(A=>Ai(A,8)?A:Promise.reject(A))}function S(F,at,rt){a.list().forEach(ut=>tt(()=>ut(F,at,rt)))}function K(F,at,rt,ut,Mt){const st=M(F,at);if(st)return st;const g=at===$i,A=no?history.state:{};rt&&(ut||g?s.replace(F.fullPath,Ee({scroll:g&&A&&A.scroll},Mt)):s.push(F.fullPath,Mt)),l.value=F,_t(F,at,rt,g),yt()}let k;function J(){k||(k=s.listen((F,at,rt)=>{if(!ft.listening)return;const ut=p(F),Mt=I(ut);if(Mt){P(Ee(Mt,{replace:!0}),ut).catch(Jo);return}c=ut;const st=l.value;no&&Ng(hh(st.fullPath,rt.delta),za()),y(ut,st).catch(g=>Ai(g,12)?g:Ai(g,2)?(P(g.to,ut).then(A=>{Ai(A,20)&&!rt.delta&&rt.type===hr.pop&&s.go(-1,!1)}).catch(Jo),Promise.reject()):(rt.delta&&s.go(-rt.delta,!1),V(g,ut,st))).then(g=>{g=g||K(ut,st,!1),g&&(rt.delta&&!Ai(g,8)?s.go(-rt.delta,!1):rt.type===hr.pop&&Ai(g,20)&&s.go(-1,!1)),S(ut,st,g)}).catch(Jo)}))}let lt=Fo(),W=Fo(),et;function V(F,at,rt){yt(F);const ut=W.list();return ut.length?ut.forEach(Mt=>Mt(F,at,rt)):console.error(F),Promise.reject(F)}function mt(){return et&&l.value!==$i?Promise.resolve():new Promise((F,at)=>{lt.add([F,at])})}function yt(F){return et||(et=!F,J(),lt.list().forEach(([at,rt])=>F?rt(F):at()),lt.reset()),F}function _t(F,at,rt,ut){const{scrollBehavior:Mt}=n;if(!no||!Mt)return Promise.resolve();const st=!rt&&Fg(hh(F.fullPath,0))||(ut||!rt)&&history.state&&history.state.scroll||null;return tf().then(()=>Mt(F,at,st)).then(g=>g&&Ug(g)).catch(g=>V(g,F,at))}const It=F=>s.go(F);let Gt;const ot=new Set,ft={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:E,replace:O,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:W.add,isReady:mt,install(F){const at=this;F.component("RouterLink",o_),F.component("RouterView",c_),F.config.globalProperties.$router=at,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>co(l)}),no&&!Gt&&l.value===$i&&(Gt=!0,E(s.location).catch(Mt=>{}));const rt={};for(const Mt in $i)Object.defineProperty(rt,Mt,{get:()=>l.value[Mt],enumerable:!0});F.provide(pu,at),F.provide(Wf,jd(rt)),F.provide(tc,l);const ut=F.unmount;ot.add(F),F.unmount=function(){ot.delete(F),ot.size<1&&(c=$i,k&&k(),k=null,l.value=$i,Gt=!1,et=!1),ut()}}};function vt(F){return F.reduce((at,rt)=>at.then(()=>tt(rt)),Promise.resolve())}return ft}function h_(n,t){const e=[],i=[],s=[],o=Math.max(t.matched.length,n.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(n.matched.find(c=>xo(c,a))?i.push(a):e.push(a));const l=n.matched[r];l&&(t.matched.find(c=>xo(c,l))||s.push(l))}return[e,i,s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mu="169",d_=0,Th=1,f_=2,Xf=1,p_=2,Ui=3,ls=0,wn=1,pe=2,os=0,fo=1,Ah=2,Rh=3,Ph=4,m_=5,As=100,g_=101,__=102,v_=103,x_=104,y_=200,M_=201,w_=202,S_=203,ec=204,nc=205,E_=206,b_=207,T_=208,A_=209,R_=210,P_=211,C_=212,I_=213,L_=214,ic=0,sc=1,oc=2,Mo=3,rc=4,ac=5,lc=6,cc=7,qf=0,D_=1,U_=2,rs=0,N_=1,F_=2,O_=3,Yf=4,B_=5,z_=6,G_=7,$f=300,wo=301,So=302,Ma=303,uc=304,Ga=306,Ke=1e3,Ps=1001,hc=1002,zn=1003,H_=1004,Cr=1005,Qn=1006,rl=1007,Cs=1008,Hi=1009,jf=1010,Kf=1011,dr=1012,gu=1013,Ds=1014,Oi=1015,yr=1016,_u=1017,vu=1018,Eo=1020,Zf=35902,Jf=1021,Qf=1022,ei=1023,tp=1024,ep=1025,po=1026,bo=1027,np=1028,xu=1029,ip=1030,yu=1031,Mu=1033,la=33776,ca=33777,ua=33778,ha=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,xc=37808,yc=37809,Mc=37810,wc=37811,Sc=37812,Ec=37813,bc=37814,Tc=37815,Ac=37816,Rc=37817,Pc=37818,Cc=37819,Ic=37820,Lc=37821,da=36492,Dc=36494,Uc=36495,sp=36283,Nc=36284,Fc=36285,Oc=36286,k_=3200,V_=3201,op=0,W_=1,ss="",Zn="srgb",hs="srgb-linear",wu="display-p3",Ha="display-p3-linear",wa="linear",Ue="srgb",Sa="rec709",Ea="p3",Hs=7680,Ch=519,X_=512,q_=513,Y_=514,rp=515,$_=516,j_=517,K_=518,Z_=519,Ih=35044,Lh="300 es",Bi=2e3,ba=2001;class Ro{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dh=1234567;const tr=Math.PI/180,fr=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function Su(n,t){return(n%t+t)%t}function J_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Q_(n,t,e){return n!==t?(e-n)/(t-n):0}function er(n,t,e){return(1-e)*n+e*t}function tv(n,t,e,i){return er(n,t,1-Math.exp(-e*i))}function ev(n,t=1){return t-Math.abs(Su(n,t*2)-t)}function nv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function iv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function sv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ov(n,t){return n+Math.random()*(t-n)}function rv(n){return n*(.5-Math.random())}function av(n){n!==void 0&&(Dh=n);let t=Dh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lv(n){return n*tr}function cv(n){return n*fr}function uv(n){return(n&n-1)===0&&n!==0}function hv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fv(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),f=o((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function io(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ie={DEG2RAD:tr,RAD2DEG:fr,generateUUID:Os,clamp:tn,euclideanModulo:Su,mapLinear:J_,inverseLerp:Q_,lerp:er,damp:tv,pingpong:ev,smoothstep:nv,smootherstep:iv,randInt:sv,randFloat:ov,randFloatSpread:rv,seededRandom:av,degToRad:lv,radToDeg:cv,isPowerOfTwo:uv,ceilPowerOfTwo:hv,floorPowerOfTwo:dv,setQuaternionFromProperEuler:fv,normalize:mn,denormalize:io};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,i,s,o,r,a,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c)}set(t,e,i,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],x=s[0],m=s[3],p=s[6],T=s[1],M=s[4],E=s[7],O=s[2],I=s[5],P=s[8];return o[0]=r*x+a*T+l*O,o[3]=r*m+a*M+l*I,o[6]=r*p+a*E+l*P,o[1]=c*x+h*T+u*O,o[4]=c*m+h*M+u*I,o[7]=c*p+h*E+u*P,o[2]=d*x+f*T+_*O,o[5]=d*m+f*M+_*I,o[8]=d*p+f*E+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*o*h+i*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,_=e*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*r)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(al.makeScale(t,e)),this}rotate(t){return this.premultiply(al.makeRotation(-t)),this}translate(t,e){return this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const al=new le;function ap(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pv(){const n=pr("canvas");return n.style.display="block",n}const Uh={};function fa(n){n in Uh||(Uh[n]=!0,console.warn(n))}function mv(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function gv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _v(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Nh=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fh=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[hs]:{transfer:wa,primaries:Sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Zn]:{transfer:Ue,primaries:Sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ha]:{transfer:wa,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Fh),fromReference:n=>n.applyMatrix3(Nh)},[wu]:{transfer:Ue,primaries:Ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fh),fromReference:n=>n.applyMatrix3(Nh).convertLinearToSRGB()}},vv=new Set([hs,Ha]),Me={enabled:!0,_workingColorSpace:hs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!vv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Oo[t].toReference,s=Oo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Oo[n].primaries},getTransfer:function(n){return n===ss?wa:Oo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Oo[t].luminanceCoefficients)}};function mo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ll(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ks;class xv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ks===void 0&&(ks=pr("canvas")),ks.width=t.width,ks.height=t.height;const i=ks.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ks}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=mo(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mo(e[i]/255)*255):e[i]=mo(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yv=0;class lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(cl(s[r].image)):o.push(cl(s[r]))}else o=cl(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mv=0;class yn extends Ro{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,i=Ps,s=Ps,o=Qn,r=Cs,a=ei,l=Hi,c=yn.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Os(),this.name="",this.source=new lp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$f)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ke:t.x=t.x-Math.floor(t.x);break;case Ps:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ke:t.y=t.y-Math.floor(t.y);break;case Ps:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=$f;yn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,E=(f+1)/2,O=(p+1)/2,I=(h+d)/4,P=(u+x)/4,U=(_+m)/4;return M>E&&M>O?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=I/i,o=P/i):E>O?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=I/s,o=U/s):O<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),i=P/o,s=U/o),this.set(i,s,o,e),this}let T=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wv extends Ro{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends wv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class cp extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sv extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],f=o[r+1],_=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==_){let m=1-a;const p=l*d+c*f+h*_+u*x,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const O=Math.sqrt(M),I=Math.atan2(O,p*T);m=Math.sin(m*I)/O,a=Math.sin(a*I)/O}const E=a*T;if(l=l*m+d*E,c=c*m+f*E,h=h*m+_*E,u=u*m+x*E,m===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],_=o[r+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(o/2),d=l(i/2),f=l(s/2),_=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-s*a,this._w=r*h-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,i=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+l*c+r*u-a*h,this.y=i+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new Y,Oh=new Mr;class wr{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,$n):$n.fromBufferAttribute(o,r),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),Lr.subVectors(this.max,Bo),Vs.subVectors(t.a,Bo),Ws.subVectors(t.b,Bo),Xs.subVectors(t.c,Bo),ji.subVectors(Ws,Vs),Ki.subVectors(Xs,Ws),vs.subVectors(Vs,Xs);let e=[0,-ji.z,ji.y,0,-Ki.z,Ki.y,0,-vs.z,vs.y,ji.z,0,-ji.x,Ki.z,0,-Ki.x,vs.z,0,-vs.x,-ji.y,ji.x,0,-Ki.y,Ki.x,0,-vs.y,vs.x,0];return!hl(e,Vs,Ws,Xs,Lr)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,Vs,Ws,Xs,Lr))?!1:(Dr.crossVectors(ji,Ki),e=[Dr.x,Dr.y,Dr.z],hl(e,Vs,Ws,Xs,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ri=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],$n=new Y,Ir=new wr,Vs=new Y,Ws=new Y,Xs=new Y,ji=new Y,Ki=new Y,vs=new Y,Bo=new Y,Lr=new Y,Dr=new Y,xs=new Y;function hl(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){xs.fromArray(n,o);const a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=i.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ev=new wr,zo=new Y,dl=new Y;class ka{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ev.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const e=zo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(dl)),this.expandByPoint(zo.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new Y,fl=new Y,Ur=new Y,Zi=new Y,pl=new Y,Nr=new Y,ml=new Y;class up{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){fl.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(fl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ur),a=Zi.dot(this.direction),l=-Zi.dot(Ur),c=Zi.lengthSq(),h=Math.abs(1-r*r);let u,d,f,_;if(h>0)if(u=r*l-a,d=r*a-l,_=o*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fl).addScaledVector(Ur,d),f}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,s,o){pl.subVectors(e,t),Nr.subVectors(i,t),ml.crossVectors(pl,Nr);let r=this.direction.dot(ml),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Zi.subVectors(this.origin,t);const l=a*this.direction.dot(Nr.crossVectors(Zi,Nr));if(l<0)return null;const c=a*this.direction.dot(pl.cross(Zi));if(c<0||l+c>r)return null;const h=-a*Zi.dot(ml);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(t,e,i,s,o,r,a,l,c,h,u,d,f,_,x,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c,h,u,d,f,_,x,m)}set(t,e,i,s,o,r,a,l,c,h,u,d,f,_,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/qs.setFromMatrixColumn(t,0).length(),o=1/qs.setFromMatrixColumn(t,1).length(),r=1/qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=_+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d+x*a,e[4]=_*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-_,e[6]=x+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,x=c*u;e[0]=d-x*a,e[4]=-r*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=a*h,x=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,_=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*l,f=r*c,_=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bv,t,Tv)}lookAt(t,e,i){const s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ji.crossVectors(i,Tn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ji.crossVectors(i,Tn)),Ji.normalize(),Fr.crossVectors(Tn,Ji),s[0]=Ji.x,s[4]=Fr.x,s[8]=Tn.x,s[1]=Ji.y,s[5]=Fr.y,s[9]=Tn.y,s[2]=Ji.z,s[6]=Fr.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],x=i[6],m=i[10],p=i[14],T=i[3],M=i[7],E=i[11],O=i[15],I=s[0],P=s[4],U=s[8],tt=s[12],y=s[1],S=s[5],K=s[9],k=s[13],J=s[2],lt=s[6],W=s[10],et=s[14],V=s[3],mt=s[7],yt=s[11],_t=s[15];return o[0]=r*I+a*y+l*J+c*V,o[4]=r*P+a*S+l*lt+c*mt,o[8]=r*U+a*K+l*W+c*yt,o[12]=r*tt+a*k+l*et+c*_t,o[1]=h*I+u*y+d*J+f*V,o[5]=h*P+u*S+d*lt+f*mt,o[9]=h*U+u*K+d*W+f*yt,o[13]=h*tt+u*k+d*et+f*_t,o[2]=_*I+x*y+m*J+p*V,o[6]=_*P+x*S+m*lt+p*mt,o[10]=_*U+x*K+m*W+p*yt,o[14]=_*tt+x*k+m*et+p*_t,o[3]=T*I+M*y+E*J+O*V,o[7]=T*P+M*S+E*lt+O*mt,o[11]=T*U+M*K+E*W+O*yt,o[15]=T*tt+M*k+E*et+O*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],x=t[7],m=t[11],p=t[15];return _*(+o*l*u-s*c*u-o*a*d+i*c*d+s*a*f-i*l*f)+x*(+e*l*f-e*c*d+o*r*d-s*r*f+s*c*h-o*l*h)+m*(+e*c*u-e*a*f-o*r*u+i*r*f+o*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*r*u-i*r*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],x=t[13],m=t[14],p=t[15],T=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,M=_*d*c-h*m*c-_*l*f+r*m*f+h*l*p-r*d*p,E=h*x*c-_*u*c+_*a*f-r*x*f-h*a*p+r*u*p,O=_*u*l-h*x*l-_*a*d+r*x*d+h*a*m-r*u*m,I=e*T+i*M+s*E+o*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=T*P,t[1]=(x*d*o-u*m*o-x*s*f+i*m*f+u*s*p-i*d*p)*P,t[2]=(a*m*o-x*l*o+x*s*c-i*m*c-a*s*p+i*l*p)*P,t[3]=(u*l*o-a*d*o-u*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=M*P,t[5]=(h*m*o-_*d*o+_*s*f-e*m*f-h*s*p+e*d*p)*P,t[6]=(_*l*o-r*m*o-_*s*c+e*m*c+r*s*p-e*l*p)*P,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*f+e*l*f)*P,t[8]=E*P,t[9]=(_*u*o-h*x*o-_*i*f+e*x*f+h*i*p-e*u*p)*P,t[10]=(r*x*o-_*a*o+_*i*c-e*x*c-r*i*p+e*a*p)*P,t[11]=(h*a*o-r*u*o-h*i*c+e*u*c+r*i*f-e*a*f)*P,t[12]=O*P,t[13]=(h*x*s-_*u*s+_*i*d-e*x*d-h*i*m+e*u*m)*P,t[14]=(_*a*s-r*x*s-_*i*l+e*x*l+r*i*m-e*a*m)*P,t[15]=(r*u*s-h*a*s+h*i*l-e*u*l-r*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,_=o*u,x=r*h,m=r*u,p=a*u,T=l*c,M=l*h,E=l*u,O=i.x,I=i.y,P=i.z;return s[0]=(1-(x+p))*O,s[1]=(f+E)*O,s[2]=(_-M)*O,s[3]=0,s[4]=(f-E)*I,s[5]=(1-(d+p))*I,s[6]=(m+T)*I,s[7]=0,s[8]=(_+M)*P,s[9]=(m-T)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=qs.set(s[0],s[1],s[2]).length();const r=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],jn.copy(this);const c=1/o,h=1/r,u=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,e.setFromRotationMatrix(jn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Bi){const l=this.elements,c=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,_;if(a===Bi)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===ba)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Bi){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*c,f=(i+s)*h;let _,x;if(a===Bi)_=(r+o)*u,x=-2*u;else if(a===ba)_=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const qs=new Y,jn=new Ne,bv=new Y(0,0,0),Tv=new Y(1,1,1),Ji=new Y,Fr=new Y,Tn=new Y,Bh=new Ne,zh=new Mr;class yi{constructor(t=0,e=0,i=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Av=0;const Gh=new Y,Ys=new Mr,Ci=new Ne,Or=new Y,Go=new Y,Rv=new Y,Pv=new Mr,Hh=new Y(1,0,0),kh=new Y(0,1,0),Vh=new Y(0,0,1),Wh={type:"added"},Cv={type:"removed"},$s={type:"childadded",child:null},gl={type:"childremoved",child:null};class nn extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const t=new Y,e=new yi,i=new Mr,s=new Y(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new le}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Gh.copy(t).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Or.copy(t):Or.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Go,Or,this.up):Ci.lookAt(Or,Go,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),$s.child=t,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cv),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,Rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Pv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}nn.DEFAULT_UP=new Y(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new Y,Ii=new Y,_l=new Y,Li=new Y,js=new Y,Ks=new Y,Xh=new Y,vl=new Y,xl=new Y,yl=new Y,Ml=new Ae,wl=new Ae,Sl=new Ae;class ti{constructor(t=new Y,e=new Y,i=new Y){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Kn.subVectors(t,e),s.cross(Kn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Kn.subVectors(s,e),Ii.subVectors(i,e),_l.subVectors(t,e);const r=Kn.dot(Kn),a=Kn.dot(Ii),l=Kn.dot(_l),c=Ii.dot(Ii),h=Ii.dot(_l),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(r*h-a*l)*d;return o.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Li.x),l.addScaledVector(r,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(t,e,i,s,o,r){return Ml.setScalar(0),wl.setScalar(0),Sl.setScalar(0),Ml.fromBufferAttribute(t,e),wl.fromBufferAttribute(t,i),Sl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ml,o.x),r.addScaledVector(wl,o.y),r.addScaledVector(Sl,o.z),r}static isFrontFacing(t,e,i,s){return Kn.subVectors(i,e),Ii.subVectors(t,e),Kn.cross(Ii).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Kn.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return ti.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;js.subVectors(s,i),Ks.subVectors(o,i),vl.subVectors(t,i);const l=js.dot(vl),c=Ks.dot(vl);if(l<=0&&c<=0)return e.copy(i);xl.subVectors(t,s);const h=js.dot(xl),u=Ks.dot(xl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(js,r);yl.subVectors(t,o);const f=js.dot(yl),_=Ks.dot(yl);if(_>=0&&f<=_)return e.copy(o);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ks,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Xh.subVectors(o,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(Xh,a);const p=1/(m+x+d);return r=x*p,a=d*p,e.copy(i).addScaledVector(js,r).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function El(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class he{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=i,Me.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Me.workingColorSpace){if(t=Su(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=El(r,o,t+1/3),this.g=El(r,o,t),this.b=El(r,o,t-1/3)}return Me.toWorkingColorSpace(this,s),this}setStyle(t,e=Zn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zn){const i=dp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}copyLinearToSRGB(t){return this.r=ll(t.r),this.g=ll(t.g),this.b=ll(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return Me.fromWorkingColorSpace(ln.copy(this),t),Math.round(tn(ln.r*255,0,255))*65536+Math.round(tn(ln.g*255,0,255))*256+Math.round(tn(ln.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(ln.copy(this),e);const i=ln.r,s=ln.g,o=ln.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-i)/u+2;break;case o:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Zn){Me.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,i=ln.g,s=ln.b;return t!==Zn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(Br);const i=er(Qi.h,Br.h,e),s=er(Qi.s,Br.s,e),o=er(Qi.l,Br.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new he;he.NAMES=dp;let Iv=0;class Po extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=fo,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=nc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==As&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gn extends Po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new Y,zr=new Ot;class vi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=io(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=io(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=io(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=io(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=io(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),s=mn(s,this.array),o=mn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}}class fp extends vi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class pp extends vi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ge extends vi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Lv=0;const Bn=new Ne,bl=new nn,Zs=new Y,An=new wr,Ho=new wr,Qe=new Y;class Mn extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ap(t)?pp:fp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new le().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,i){return Bn.makeTranslation(t,e,i),this.applyMatrix4(Bn),this}scale(t,e,i){return Bn.makeScale(t,e,i),this.applyMatrix4(Bn),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];An.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(An.min,Ho.min),An.expandByPoint(Qe),Qe.addVectors(An.max,Ho.max),An.expandByPoint(Qe)):(An.expandByPoint(Ho.min),An.expandByPoint(Ho.max))}An.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Qe.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(t,c),Qe.add(Zs)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new Y,l[U]=new Y;const c=new Y,h=new Y,u=new Y,d=new Ot,f=new Ot,_=new Ot,x=new Y,m=new Y;function p(U,tt,y){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,tt),u.fromBufferAttribute(i,y),d.fromBufferAttribute(o,U),f.fromBufferAttribute(o,tt),_.fromBufferAttribute(o,y),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const S=1/(f.x*_.y-_.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(S),a[U].add(x),a[tt].add(x),a[y].add(x),l[U].add(m),l[tt].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,tt=T.length;U<tt;++U){const y=T[U],S=y.start,K=y.count;for(let k=S,J=S+K;k<J;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new Y,E=new Y,O=new Y,I=new Y;function P(U){O.fromBufferAttribute(s,U),I.copy(O);const tt=a[U];M.copy(tt),M.sub(O.multiplyScalar(O.dot(tt))).normalize(),E.crossVectors(I,tt);const S=E.dot(l[U])<0?-1:1;r.setXYZW(U,M.x,M.y,M.z,S)}for(let U=0,tt=T.length;U<tt;++U){const y=T[U],S=y.start,K=y.count;for(let k=S,J=S+K;k<J;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new Y,o=new Y,r=new Y,a=new Y,l=new Y,c=new Y,h=new Y,u=new Y;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new vi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new Ne,ys=new up,Gr=new ka,Yh=new Y,Hr=new Y,kr=new Y,Vr=new Y,Tl=new Y,Wr=new Y,$h=new Y,Xr=new Y;class R extends nn{constructor(t=new Mn,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Wr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Tl.fromBufferAttribute(u,t),r?Wr.addScaledVector(Tl,h):Wr.addScaledVector(Tl.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(o),ys.copy(t.ray).recast(t.near),!(Gr.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Gr,Yh)===null||ys.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(qh.copy(o).invert(),ys.copy(t.ray).applyMatrix4(qh),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ys)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=r[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=T,O=M;E<O;E+=3){const I=a.getX(E),P=a.getX(E+1),U=a.getX(E+2);s=qr(this,p,t,i,c,h,u,I,P,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);s=qr(this,r,t,i,c,h,u,T,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=r[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=T,O=M;E<O;E+=3){const I=E,P=E+1,U=E+2;s=qr(this,p,t,i,c,h,u,I,P,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const T=m,M=m+1,E=m+2;s=qr(this,r,t,i,c,h,u,T,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Dv(n,t,e,i,s,o,r,a){let l;if(t.side===wn?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===ls,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:n}}function qr(n,t,e,i,s,o,r,a,l,c){n.getVertexPosition(a,Hr),n.getVertexPosition(l,kr),n.getVertexPosition(c,Vr);const h=Dv(n,t,e,i,Hr,kr,Vr,$h);if(h){const u=new Y;ti.getBarycoord($h,Hr,kr,Vr,u),s&&(h.uv=ti.getInterpolatedAttribute(s,a,l,c,u,new Ot)),o&&(h.uv1=ti.getInterpolatedAttribute(o,a,l,c,u,new Ot)),r&&(h.normal=ti.getInterpolatedAttribute(r,a,l,c,u,new Y),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};ti.getNormal(Hr,kr,Vr,d.normal),h.face=d,h.barycoord=u}return h}class ni extends Mn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,r,o,0),_("z","y","x",1,-1,i,e,-t,r,o,1),_("x","z","y",1,1,t,i,e,s,r,2),_("x","z","y",1,-1,t,i,-e,s,r,3),_("x","y","z",1,-1,t,e,i,s,o,4),_("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function _(x,m,p,T,M,E,O,I,P,U,tt){const y=E/P,S=O/U,K=E/2,k=O/2,J=I/2,lt=P+1,W=U+1;let et=0,V=0;const mt=new Y;for(let yt=0;yt<W;yt++){const _t=yt*S-k;for(let It=0;It<lt;It++){const Gt=It*y-K;mt[x]=Gt*T,mt[m]=_t*M,mt[p]=J,c.push(mt.x,mt.y,mt.z),mt[x]=0,mt[m]=0,mt[p]=I>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(It/P),u.push(1-yt/U),et+=1}}for(let yt=0;yt<U;yt++)for(let _t=0;_t<P;_t++){const It=d+_t+lt*yt,Gt=d+_t+lt*(yt+1),ot=d+(_t+1)+lt*(yt+1),ft=d+(_t+1)+lt*yt;l.push(It,Gt,ft),l.push(Gt,ot,ft),V+=6}a.addGroup(f,V,tt),f+=V,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function To(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function gn(n){const t={};for(let e=0;e<n.length;e++){const i=To(n[e]);for(const s in i)t[s]=i[s]}return t}function Uv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const Nv={clone:To,merge:gn};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=To(t.uniforms),this.uniformsGroups=Uv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class gp extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new Y,jh=new Ot,Kh=new Ot;class Be extends gp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,jh,Kh),e.subVectors(Kh,jh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Js=-90,Qs=1;class Bv extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(Js,Qs,t,e);s.layers=this.layers,this.add(s);const o=new Be(Js,Qs,t,e);o.layers=this.layers,this.add(o);const r=new Be(Js,Qs,t,e);r.layers=this.layers,this.add(r);const a=new Be(Js,Qs,t,e);a.layers=this.layers,this.add(a);const l=new Be(Js,Qs,t,e);l.layers=this.layers,this.add(l);const c=new Be(Js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Eu extends yn{constructor(t,e,i,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:wo,super(t,e,i,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zv extends Us{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Eu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ni(5,5,5),o=new Dn({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:os});o.uniforms.tEquirect.value=e;const r=new R(s,o),a=e.minFilter;return e.minFilter===Cs&&(e.minFilter=Qn),new Bv(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Al=new Y,Gv=new Y,Hv=new le;class bs{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Al.subVectors(i,e).cross(Gv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Al),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hv.getNormalMatrix(t),s=this.coplanarPoint(Al).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new ka,Yr=new Y;class bu{constructor(t=new bs,e=new bs,i=new bs,s=new bs,o=new bs,r=new bs){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bi){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],x=s[10],m=s[11],p=s[12],T=s[13],M=s[14],E=s[15];if(i[0].setComponents(l-o,d-c,m-f,E-p).normalize(),i[1].setComponents(l+o,d+c,m+f,E+p).normalize(),i[2].setComponents(l+r,d+h,m+_,E+T).normalize(),i[3].setComponents(l-r,d-h,m-_,E-T).normalize(),i[4].setComponents(l-a,d-u,m-x,E-M).normalize(),e===Bi)i[5].setComponents(l+a,d+u,m+x,E+M).normalize();else if(e===ba)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _p(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function kv(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],x=u[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Va extends Mn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],x=[],m=[];for(let p=0;p<h;p++){const T=p*d-r;for(let M=0;M<c;M++){const E=M*u-o;_.push(E,-T,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const M=T+c*p,E=T+c*(p+1),O=T+1+c*(p+1),I=T+1+c*p;f.push(M,E,I),f.push(E,O,I)}this.setIndex(f),this.setAttribute("position",new Ge(_,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
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
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
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
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
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
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nx=`#ifdef USE_IRIDESCENCE
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
#endif`,ix=`#ifdef USE_BUMPMAP
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
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dx=`#define PI 3.141592653589793
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
} // validated`,fx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,px=`vec3 transformedNormal = objectNormal;
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
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",yx=`
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
}`,Mx=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
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
}`,Ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
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
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gx=`PhysicalMaterial material;
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
#endif`,Hx=`struct PhysicalMaterial {
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
}`,kx=`
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jx=`#if defined( USE_POINTS_UV )
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
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
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
#endif`,oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
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
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ay=`float getShadowMask() {
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
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iy=`#ifdef USE_SKINNING
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
#endif`,Ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vy=`uniform sampler2D t2D;
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`#include <common>
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
}`,jy=`#if DEPTH_PACKING == 3200
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
}`,Ky=`#define DISTANCE
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
}`,Zy=`#define DISTANCE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
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
}`,eM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 diffuse;
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
}`,sM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,rM=`#define MATCAP
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
}`,aM=`#define MATCAP
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
}`,lM=`#define NORMAL
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
}`,cM=`#define NORMAL
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
}`,uM=`#define PHONG
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
}`,hM=`#define PHONG
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
}`,dM=`#define STANDARD
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
}`,fM=`#define STANDARD
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
}`,pM=`#define TOON
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
}`,mM=`#define TOON
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
}`,gM=`uniform float size;
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
}`,_M=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,xM=`uniform vec3 color;
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
}`,yM=`uniform float rotation;
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
}`,MM=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Vv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:qv,alphatest_fragment:Yv,alphatest_pars_fragment:$v,aomap_fragment:jv,aomap_pars_fragment:Kv,batching_pars_vertex:Zv,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:tx,bsdfs:ex,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:sx,clipping_planes_pars_fragment:ox,clipping_planes_pars_vertex:rx,clipping_planes_vertex:ax,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:ux,color_vertex:hx,common:dx,cube_uv_reflection_fragment:fx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:gx,emissivemap_fragment:_x,emissivemap_pars_fragment:vx,colorspace_fragment:xx,colorspace_pars_fragment:yx,envmap_fragment:Mx,envmap_common_pars_fragment:wx,envmap_pars_fragment:Sx,envmap_pars_vertex:Ex,envmap_physical_pars_fragment:Nx,envmap_vertex:bx,fog_vertex:Tx,fog_pars_vertex:Ax,fog_fragment:Rx,fog_pars_fragment:Px,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Ix,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Dx,lights_pars_begin:Ux,lights_toon_fragment:Fx,lights_toon_pars_fragment:Ox,lights_phong_fragment:Bx,lights_phong_pars_fragment:zx,lights_physical_fragment:Gx,lights_physical_pars_fragment:Hx,lights_fragment_begin:kx,lights_fragment_maps:Vx,lights_fragment_end:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:$x,map_fragment:jx,map_pars_fragment:Kx,map_particle_fragment:Zx,map_particle_pars_fragment:Jx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:ty,morphinstance_vertex:ey,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:sy,morphtarget_vertex:oy,normal_fragment_begin:ry,normal_fragment_maps:ay,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:uy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:fy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:gy,packing:_y,premultiplied_alpha_fragment:vy,project_vertex:xy,dithering_fragment:yy,dithering_pars_fragment:My,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Sy,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:by,shadowmap_vertex:Ty,shadowmask_pars_fragment:Ay,skinbase_vertex:Ry,skinning_pars_vertex:Py,skinning_vertex:Cy,skinnormal_vertex:Iy,specularmap_fragment:Ly,specularmap_pars_fragment:Dy,tonemapping_fragment:Uy,tonemapping_pars_fragment:Ny,transmission_fragment:Fy,transmission_pars_fragment:Oy,uv_pars_fragment:By,uv_pars_vertex:zy,uv_vertex:Gy,worldpos_vertex:Hy,background_vert:ky,background_frag:Vy,backgroundCube_vert:Wy,backgroundCube_frag:Xy,cube_vert:qy,cube_frag:Yy,depth_vert:$y,depth_frag:jy,distanceRGBA_vert:Ky,distanceRGBA_frag:Zy,equirect_vert:Jy,equirect_frag:Qy,linedashed_vert:tM,linedashed_frag:eM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:sM,meshlambert_frag:oM,meshmatcap_vert:rM,meshmatcap_frag:aM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:uM,meshphong_frag:hM,meshphysical_vert:dM,meshphysical_frag:fM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:_M,shadow_vert:vM,shadow_frag:xM,sprite_vert:yM,sprite_frag:MM},Ft={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},gi={basic:{uniforms:gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:gn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:gn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new he(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:gn([Ft.points,Ft.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:gn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:gn([Ft.common,Ft.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:gn([Ft.sprite,Ft.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:gn([Ft.common,Ft.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:gn([Ft.lights,Ft.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};gi.physical={uniforms:gn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const $r={r:0,b:0,g:0},ws=new yi,wM=new Ne;function SM(n,t,e,i,s,o,r){const a=new he(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function x(T){let M=!1;const E=_(T);E===null?p(a,l):E&&E.isColor&&(p(E,1),M=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const E=_(M);E&&(E.isCubeTexture||E.mapping===Ga)?(h===void 0&&(h=new R(new ni(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:To(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ws.copy(M.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(ws)),h.material.toneMapped=Me.getTransfer(E.colorSpace)!==Ue,(u!==E||d!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new R(new Va(2,2),new Dn({name:"BackgroundMaterial",uniforms:To(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Me.getTransfer(E.colorSpace)!==Ue,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB($r,mp(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:m}}function EM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(y,S,K,k,J){let lt=!1;const W=u(k,K,S);o!==W&&(o=W,c(o.object)),lt=f(y,k,K,J),lt&&_(y,k,K,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(lt||r)&&(r=!1,E(y,S,K,k),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,S,K){const k=K.wireframe===!0;let J=i[y.id];J===void 0&&(J={},i[y.id]=J);let lt=J[S.id];lt===void 0&&(lt={},J[S.id]=lt);let W=lt[k];return W===void 0&&(W=d(l()),lt[k]=W),W}function d(y){const S=[],K=[],k=[];for(let J=0;J<e;J++)S[J]=0,K[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:K,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,S,K,k){const J=o.attributes,lt=S.attributes;let W=0;const et=K.getAttributes();for(const V in et)if(et[V].location>=0){const yt=J[V];let _t=lt[V];if(_t===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),yt===void 0||yt.attribute!==_t||_t&&yt.data!==_t.data)return!0;W++}return o.attributesNum!==W||o.index!==k}function _(y,S,K,k){const J={},lt=S.attributes;let W=0;const et=K.getAttributes();for(const V in et)if(et[V].location>=0){let yt=lt[V];yt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const _t={};_t.attribute=yt,yt&&yt.data&&(_t.data=yt.data),J[V]=_t,W++}o.attributes=J,o.attributesNum=W,o.index=k}function x(){const y=o.newAttributes;for(let S=0,K=y.length;S<K;S++)y[S]=0}function m(y){p(y,0)}function p(y,S){const K=o.newAttributes,k=o.enabledAttributes,J=o.attributeDivisors;K[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),J[y]!==S&&(n.vertexAttribDivisor(y,S),J[y]=S)}function T(){const y=o.newAttributes,S=o.enabledAttributes;for(let K=0,k=S.length;K<k;K++)S[K]!==y[K]&&(n.disableVertexAttribArray(K),S[K]=0)}function M(y,S,K,k,J,lt,W){W===!0?n.vertexAttribIPointer(y,S,K,J,lt):n.vertexAttribPointer(y,S,K,k,J,lt)}function E(y,S,K,k){x();const J=k.attributes,lt=K.getAttributes(),W=S.defaultAttributeValues;for(const et in lt){const V=lt[et];if(V.location>=0){let mt=J[et];if(mt===void 0&&(et==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),et==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const yt=mt.normalized,_t=mt.itemSize,It=t.get(mt);if(It===void 0)continue;const Gt=It.buffer,ot=It.type,ft=It.bytesPerElement,vt=ot===n.INT||ot===n.UNSIGNED_INT||mt.gpuType===gu;if(mt.isInterleavedBufferAttribute){const F=mt.data,at=F.stride,rt=mt.offset;if(F.isInstancedInterleavedBuffer){for(let ut=0;ut<V.locationSize;ut++)p(V.location+ut,F.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let ut=0;ut<V.locationSize;ut++)M(V.location+ut,_t/V.locationSize,ot,yt,at*ft,(rt+_t/V.locationSize*ut)*ft,vt)}else{if(mt.isInstancedBufferAttribute){for(let F=0;F<V.locationSize;F++)p(V.location+F,mt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let F=0;F<V.locationSize;F++)m(V.location+F);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let F=0;F<V.locationSize;F++)M(V.location+F,_t/V.locationSize,ot,yt,_t*ft,_t/V.locationSize*F*ft,vt)}}else if(W!==void 0){const yt=W[et];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(V.location,yt);break;case 3:n.vertexAttrib3fv(V.location,yt);break;case 4:n.vertexAttrib4fv(V.location,yt);break;default:n.vertexAttrib1fv(V.location,yt)}}}}T()}function O(){U();for(const y in i){const S=i[y];for(const K in S){const k=S[K];for(const J in k)h(k[J].object),delete k[J];delete S[K]}delete i[y]}}function I(y){if(i[y.id]===void 0)return;const S=i[y.id];for(const K in S){const k=S[K];for(const J in k)h(k[J].object),delete k[J];delete S[K]}delete i[y.id]}function P(y){for(const S in i){const K=i[S];if(K[y.id]===void 0)continue;const k=K[y.id];for(const J in k)h(k[J].object),delete k[J];delete K[y.id]}}function U(){tt(),r=!0,o!==s&&(o=s,c(o.object))}function tt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:tt,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function bM(n,t,e){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)r(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<d.length;x++)e.update(_,i,d[x])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function TM(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==ei&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Hi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Oi&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:O,maxSamples:I}}function AM(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new bs,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||o&&!m)o?h(null):c();else{const T=o?0:i,M=T*4;let E=p.clippingState||null;l.value=E,E=h(_,d,M,f);for(let O=0;O!==M;++O)E[O]=e[O];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=f+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==x;++M,E+=4)r.copy(u[M]).applyMatrix4(T,a),r.normal.toArray(m,E),m[E+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function RM(n){let t=new WeakMap;function e(r,a){return a===Ma?r.mapping=wo:a===uc&&(r.mapping=So),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ma||a===uc)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new zv(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class vp extends gp{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oo=4,Zh=[.125,.215,.35,.446,.526,.582],Rs=20,Rl=new vp,Jh=new he;let Pl=null,Cl=0,Il=0,Ll=!1;const Ts=(1+Math.sqrt(5))/2,to=1/Ts,Qh=[new Y(-Ts,to,0),new Y(Ts,to,0),new Y(-to,0,Ts),new Y(to,0,Ts),new Y(0,Ts,-to),new Y(0,Ts,to),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class td{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Pl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pl,Cl,Il),this._renderer.xr.enabled=Ll,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wo||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:yr,format:ei,colorSpace:hs,depthBuffer:!1},s=ed(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PM(o)),this._blurMaterial=CM(o,t,e)}return s}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,Rl)}_sceneToCubeUV(t,e,i,s){const a=new Be(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jh),h.toneMapping=rs,h.autoClear=!1;const f=new Gn({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),_=new R(new ni,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Jh),x=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;jr(s,T*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===wo||t.mapping===So;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new R(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;jr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,Rl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Qh[(s-o-1)%Qh.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new R(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Rs-1),x=o/_,m=isFinite(o)?1+Math.floor(h*x):Rs;m>Rs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);const p=[];let T=0;for(let P=0;P<Rs;++P){const U=P/x,tt=Math.exp(-U*U/2);p.push(tt),P===0?T+=tt:P<m&&(T+=2*tt)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const E=this._sizeLods[s],O=3*E*(s>M-oo?s-M+oo:0),I=4*(this._cubeSize-E);jr(e,O,I,3*E,2*E),l.setRenderTarget(e),l.render(u,Rl)}}function PM(n){const t=[],e=[],i=[];let s=n;const o=n-oo+1+Zh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>n-oo?l=Zh[r-n+oo-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,x=3,m=2,p=1,T=new Float32Array(x*_*f),M=new Float32Array(m*_*f),E=new Float32Array(p*_*f);for(let I=0;I<f;I++){const P=I%3*2/3-1,U=I>2?0:-1,tt=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];T.set(tt,x*_*I),M.set(d,m*_*I);const y=[I,I,I,I,I,I];E.set(y,p*_*I)}const O=new Mn;O.setAttribute("position",new vi(T,x)),O.setAttribute("uv",new vi(M,m)),O.setAttribute("faceIndex",new vi(E,p)),t.push(O),s>oo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ed(n,t,e){const i=new Us(n,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function CM(n,t,e){const i=new Float32Array(Rs),s=new Y(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function nd(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function id(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Tu(){return`

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
	`}function IM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ma||l===uc,h=l===wo||l===So;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new td(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new td(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function LM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function DM(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const x=f[_];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let x=0;if(f!==null){const T=f.array;x=f.version;for(let M=0,E=T.length;M<E;M+=3){const O=T[M+0],I=T[M+1],P=T[M+2];d.push(O,I,I,P,P,O)}}else if(_!==void 0){const T=_.array;x=_.version;for(let M=0,E=T.length/3-1;M<E;M+=3){const O=M+0,I=M+1,P=M+2;d.push(O,I,I,P,P,O)}}else return;const m=new(ap(d)?pp:fp)(d,1);m.version=x;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function UM(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,o,d*r,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,i,1)}function u(d,f,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,x,0,_);let p=0;for(let T=0;T<_;T++)p+=f[T];for(let T=0;T<x.length;T++)e.update(p,i,x[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function NM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function FM(n,t,e){const i=new WeakMap,s=new Ae;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let O=a.attributes.position.count*E,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*I*4*u),U=new cp(P,O,I,u);U.type=Oi,U.needsUpdate=!0;const tt=E*4;for(let S=0;S<u;S++){const K=p[S],k=T[S],J=M[S],lt=O*I*4*S;for(let W=0;W<K.count;W++){const et=W*tt;_===!0&&(s.fromBufferAttribute(K,W),P[lt+et+0]=s.x,P[lt+et+1]=s.y,P[lt+et+2]=s.z,P[lt+et+3]=0),x===!0&&(s.fromBufferAttribute(k,W),P[lt+et+4]=s.x,P[lt+et+5]=s.y,P[lt+et+6]=s.z,P[lt+et+7]=0),m===!0&&(s.fromBufferAttribute(J,W),P[lt+et+8]=s.x,P[lt+et+9]=s.y,P[lt+et+10]=s.z,P[lt+et+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new Ot(O,I)},i.set(a,d),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function OM(n,t,e,i){let s=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class xp extends yn{constructor(t,e,i,s,o,r,a,l,c,h=po){if(h!==po&&h!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===po&&(i=Ds),i===void 0&&h===bo&&(i=Eo),super(null,s,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yp=new yn,sd=new xp(1,1),Mp=new cp,wp=new Sv,Sp=new Eu,od=[],rd=[],ad=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function Co(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=od[s];if(o===void 0&&(o=new Float32Array(s),od[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wa(n,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function BM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function zM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),Je(e,t)}}function GM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),Je(e,t)}}function HM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),Je(e,t)}}function kM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;cd.set(i),n.uniformMatrix2fv(this.addr,!1,cd),Je(e,i)}}function VM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;ld.set(i),n.uniformMatrix3fv(this.addr,!1,ld),Je(e,i)}}function WM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;ad.set(i),n.uniformMatrix4fv(this.addr,!1,ad),Je(e,i)}}function XM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function qM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),Je(e,t)}}function YM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),Je(e,t)}}function $M(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),Je(e,t)}}function jM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function KM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),Je(e,t)}}function ZM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),Je(e,t)}}function JM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),Je(e,t)}}function QM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(sd.compareFunction=rp,o=sd):o=yp,e.setTexture2D(t||o,s)}function tw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||wp,s)}function ew(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Sp,s)}function nw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Mp,s)}function iw(n){switch(n){case 5126:return BM;case 35664:return zM;case 35665:return GM;case 35666:return HM;case 35674:return kM;case 35675:return VM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return $M;case 5125:return jM;case 36294:return KM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return nw}}function sw(n,t){n.uniform1fv(this.addr,t)}function ow(n,t){const e=Co(t,this.size,2);n.uniform2fv(this.addr,e)}function rw(n,t){const e=Co(t,this.size,3);n.uniform3fv(this.addr,e)}function aw(n,t){const e=Co(t,this.size,4);n.uniform4fv(this.addr,e)}function lw(n,t){const e=Co(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function cw(n,t){const e=Co(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function uw(n,t){const e=Co(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function hw(n,t){n.uniform1iv(this.addr,t)}function dw(n,t){n.uniform2iv(this.addr,t)}function fw(n,t){n.uniform3iv(this.addr,t)}function pw(n,t){n.uniform4iv(this.addr,t)}function mw(n,t){n.uniform1uiv(this.addr,t)}function gw(n,t){n.uniform2uiv(this.addr,t)}function _w(n,t){n.uniform3uiv(this.addr,t)}function vw(n,t){n.uniform4uiv(this.addr,t)}function xw(n,t,e){const i=this.cache,s=t.length,o=Wa(e,s);Ze(i,o)||(n.uniform1iv(this.addr,o),Je(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||yp,o[r])}function yw(n,t,e){const i=this.cache,s=t.length,o=Wa(e,s);Ze(i,o)||(n.uniform1iv(this.addr,o),Je(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||wp,o[r])}function Mw(n,t,e){const i=this.cache,s=t.length,o=Wa(e,s);Ze(i,o)||(n.uniform1iv(this.addr,o),Je(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Sp,o[r])}function ww(n,t,e){const i=this.cache,s=t.length,o=Wa(e,s);Ze(i,o)||(n.uniform1iv(this.addr,o),Je(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Mp,o[r])}function Sw(n){switch(n){case 5126:return sw;case 35664:return ow;case 35665:return rw;case 35666:return aw;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return hw;case 35667:case 35671:return dw;case 35668:case 35672:return fw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return ww}}class Ew{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=iw(e.type)}}class bw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sw(e.type)}}class Tw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function ud(n,t){n.seq.push(t),n.map[t.id]=t}function Aw(n,t,e){const i=n.name,s=i.length;for(Dl.lastIndex=0;;){const o=Dl.exec(i),r=Dl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){ud(e,c===void 0?new Ew(a,n,t):new bw(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Tw(a),ud(e,u)),e=u}}}class pa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Aw(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function hd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Rw=37297;let Pw=0;function Cw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Iw(n){const t=Me.getPrimaries(Me.workingColorSpace),e=Me.getPrimaries(n);let i;switch(t===e?i="":t===Ea&&e===Sa?i="LinearDisplayP3ToLinearSRGB":t===Sa&&e===Ea&&(i="LinearSRGBToLinearDisplayP3"),n){case hs:case Ha:return[i,"LinearTransferOETF"];case Zn:case wu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function dd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Cw(n.getShaderSource(t),r)}else return s}function Lw(n,t){const e=Iw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dw(n,t){let e;switch(t){case N_:e="Linear";break;case F_:e="Reinhard";break;case O_:e="Cineon";break;case Yf:e="ACESFilmic";break;case z_:e="AgX";break;case G_:e="Neutral";break;case B_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new Y;function Uw(){Me.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Fw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ow(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Wo(n){return n!==""}function fd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(Bw,Gw)}const zw=new Map;function Gw(n,t){let e=ae[t];if(e===void 0){const i=zw.get(t);if(i!==void 0)e=ae[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Bc(e)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(n){return n.replace(Hw,kw)}function kw(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function gd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Vw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===p_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function Ww(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case So:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case So:t="ENVMAP_MODE_REFRACTION";break}return t}function qw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qf:t="ENVMAP_BLENDING_MULTIPLY";break;case D_:t="ENVMAP_BLENDING_MIX";break;case U_:t="ENVMAP_BLENDING_ADD";break}return t}function Yw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function $w(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Vw(e),c=Ww(e),h=Xw(e),u=qw(e),d=Yw(e),f=Nw(e),_=Fw(o),x=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(m=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rs?"#define TONE_MAPPING":"",e.toneMapping!==rs?ae.tonemapping_pars_fragment:"",e.toneMapping!==rs?Dw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Lw("linearToOutputTexel",e.outputColorSpace),Uw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wo).join(`
`)),r=Bc(r),r=fd(r,e),r=pd(r,e),a=Bc(a),a=fd(a,e),a=pd(a,e),r=md(r),a=md(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+r,E=T+p+a,O=hd(s,s.VERTEX_SHADER,M),I=hd(s,s.FRAGMENT_SHADER,E);s.attachShader(x,O),s.attachShader(x,I),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(S){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(O).trim(),J=s.getShaderInfoLog(I).trim();let lt=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,I);else{const et=dd(s,O,"vertex"),V=dd(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+K+`
`+et+`
`+V)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(k===""||J==="")&&(W=!1);W&&(S.diagnostics={runnable:lt,programLog:K,vertexShader:{log:k,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(O),s.deleteShader(I),U=new pa(s,x),tt=Ow(s,x)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let tt;this.getAttributes=function(){return tt===void 0&&P(this),tt};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Rw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=I,this}let jw=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Zw(t),e.set(t,i)),i}}class Zw{constructor(t){this.id=jw++,this.code=t,this.usedTimes=0}}function Jw(n,t,e,i,s,o,r){const a=new hp,l=new Kw,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,S,K,k,J){const lt=k.fog,W=J.geometry,et=y.isMeshStandardMaterial?k.environment:null,V=(y.isMeshStandardMaterial?e:t).get(y.envMap||et),mt=V&&V.mapping===Ga?V.image.height:null,yt=x[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const _t=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,It=_t!==void 0?_t.length:0;let Gt=0;W.morphAttributes.position!==void 0&&(Gt=1),W.morphAttributes.normal!==void 0&&(Gt=2),W.morphAttributes.color!==void 0&&(Gt=3);let ot,ft,vt,F;if(yt){const ee=gi[yt];ot=ee.vertexShader,ft=ee.fragmentShader}else ot=y.vertexShader,ft=y.fragmentShader,l.update(y),vt=l.getVertexShaderID(y),F=l.getFragmentShaderID(y);const at=n.getRenderTarget(),rt=J.isInstancedMesh===!0,ut=J.isBatchedMesh===!0,Mt=!!y.map,st=!!y.matcap,g=!!V,A=!!y.aoMap,L=!!y.lightMap,N=!!y.bumpMap,D=!!y.normalMap,q=!!y.displacementMap,j=!!y.emissiveMap,w=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,X=y.clearcoat>0,z=y.dispersion>0,H=y.iridescence>0,ct=y.sheen>0,dt=y.transmission>0,pt=C&&!!y.anisotropyMap,Rt=X&&!!y.clearcoatMap,ht=X&&!!y.clearcoatNormalMap,xt=X&&!!y.clearcoatRoughnessMap,Ct=H&&!!y.iridescenceMap,Lt=H&&!!y.iridescenceThicknessMap,Et=ct&&!!y.sheenColorMap,Wt=ct&&!!y.sheenRoughnessMap,Dt=!!y.specularMap,Vt=!!y.specularColorMap,B=!!y.specularIntensityMap,gt=dt&&!!y.transmissionMap,it=dt&&!!y.thicknessMap,Q=!!y.gradientMap,wt=!!y.alphaMap,St=y.alphaTest>0,Ht=!!y.alphaHash,Kt=!!y.extensions;let Qt=rs;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Qt=n.toneMapping);const Jt={shaderID:yt,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:ft,defines:y.defines,customVertexShaderID:vt,customFragmentShaderID:F,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ut,batchingColor:ut&&J._colorsTexture!==null,instancing:rt,instancingColor:rt&&J.instanceColor!==null,instancingMorph:rt&&J.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:hs,alphaToCoverage:!!y.alphaToCoverage,map:Mt,matcap:st,envMap:g,envMapMode:g&&V.mapping,envMapCubeUVHeight:mt,aoMap:A,lightMap:L,bumpMap:N,normalMap:D,displacementMap:f&&q,emissiveMap:j,normalMapObjectSpace:D&&y.normalMapType===W_,normalMapTangentSpace:D&&y.normalMapType===op,metalnessMap:w,roughnessMap:v,anisotropy:C,anisotropyMap:pt,clearcoat:X,clearcoatMap:Rt,clearcoatNormalMap:ht,clearcoatRoughnessMap:xt,dispersion:z,iridescence:H,iridescenceMap:Ct,iridescenceThicknessMap:Lt,sheen:ct,sheenColorMap:Et,sheenRoughnessMap:Wt,specularMap:Dt,specularColorMap:Vt,specularIntensityMap:B,transmission:dt,transmissionMap:gt,thicknessMap:it,gradientMap:Q,opaque:y.transparent===!1&&y.blending===fo&&y.alphaToCoverage===!1,alphaMap:wt,alphaTest:St,alphaHash:Ht,combine:y.combine,mapUv:Mt&&m(y.map.channel),aoMapUv:A&&m(y.aoMap.channel),lightMapUv:L&&m(y.lightMap.channel),bumpMapUv:N&&m(y.bumpMap.channel),normalMapUv:D&&m(y.normalMap.channel),displacementMapUv:q&&m(y.displacementMap.channel),emissiveMapUv:j&&m(y.emissiveMap.channel),metalnessMapUv:w&&m(y.metalnessMap.channel),roughnessMapUv:v&&m(y.roughnessMap.channel),anisotropyMapUv:pt&&m(y.anisotropyMap.channel),clearcoatMapUv:Rt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&m(y.sheenRoughnessMap.channel),specularMapUv:Dt&&m(y.specularMap.channel),specularColorMapUv:Vt&&m(y.specularColorMap.channel),specularIntensityMapUv:B&&m(y.specularIntensityMap.channel),transmissionMapUv:gt&&m(y.transmissionMap.channel),thicknessMapUv:it&&m(y.thicknessMap.channel),alphaMapUv:wt&&m(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(D||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!W.attributes.uv&&(Mt||wt),fog:!!lt,useFog:y.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Mt&&y.map.isVideoTexture===!0&&Me.getTransfer(y.map.colorSpace)===Ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pe,flipSided:y.side===wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Kt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&y.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function T(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const K in y.defines)S.push(K),S.push(y.defines[K]);return y.isRawShaderMaterial===!1&&(M(S,y),E(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function E(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),y.push(a.mask)}function O(y){const S=x[y.type];let K;if(S){const k=gi[S];K=Nv.clone(k.uniforms)}else K=y.uniforms;return K}function I(y,S){let K;for(let k=0,J=h.length;k<J;k++){const lt=h[k];if(lt.cacheKey===S){K=lt,++K.usedTimes;break}}return K===void 0&&(K=new $w(n,S,y,o),h.push(K)),K}function P(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function U(y){l.remove(y)}function tt(){l.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:O,acquireProgram:I,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:tt}}function Qw(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function tS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vd(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,_,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,_,x,m){const p=r(u,d,f,_,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,_,x,m){const p=r(u,d,f,_,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||tS),i.length>1&&i.sort(d||_d),s.length>1&&s.sort(d||_d)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function eS(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new vd,n.set(i,[r])):s>=o.length?(r=new vd,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function nS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new he};break;case"SpotLight":e={position:new Y,direction:new Y,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[t.id]=e,e}}}function iS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let sS=0;function oS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function rS(n){const t=new nS,e=iS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,o=new Ne,r=new Ne;function a(c){let h=0,u=0,d=0;for(let tt=0;tt<9;tt++)i.probe[tt].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,T=0,M=0,E=0,O=0,I=0,P=0;c.sort(oS);for(let tt=0,y=c.length;tt<y;tt++){const S=c[tt],K=S.color,k=S.intensity,J=S.distance,lt=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=K.r*k,u+=K.g*k,d+=K.b*k;else if(S.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(S.sh.coefficients[W],k);P++}else if(S.isDirectionalLight){const W=t.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const et=S.shadow,V=e.get(S);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=lt,i.directionalShadowMatrix[f]=S.shadow.matrix,T++}i.directional[f]=W,f++}else if(S.isSpotLight){const W=t.get(S);W.position.setFromMatrixPosition(S.matrixWorld),W.color.copy(K).multiplyScalar(k),W.distance=J,W.coneCos=Math.cos(S.angle),W.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),W.decay=S.decay,i.spot[x]=W;const et=S.shadow;if(S.map&&(i.spotLightMap[O]=S.map,O++,et.updateMatrices(S),S.castShadow&&I++),i.spotLightMatrix[x]=et.matrix,S.castShadow){const V=e.get(S);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=lt,E++}x++}else if(S.isRectAreaLight){const W=t.get(S);W.color.copy(K).multiplyScalar(k),W.halfWidth.set(S.width*.5,0,0),W.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=W,m++}else if(S.isPointLight){const W=t.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),W.distance=S.distance,W.decay=S.decay,S.castShadow){const et=S.shadow,V=e.get(S);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,V.shadowCameraNear=et.camera.near,V.shadowCameraFar=et.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=lt,i.pointShadowMatrix[_]=S.shadow.matrix,M++}i.point[_]=W,_++}else if(S.isHemisphereLight){const W=t.get(S);W.skyColor.copy(S.color).multiplyScalar(k),W.groundColor.copy(S.groundColor).multiplyScalar(k),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ft.LTC_FLOAT_1,i.rectAreaLTC2=Ft.LTC_FLOAT_2):(i.rectAreaLTC1=Ft.LTC_HALF_1,i.rectAreaLTC2=Ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==f||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==T||U.numPointShadows!==M||U.numSpotShadows!==E||U.numSpotMaps!==O||U.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,U.directionalLength=f,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=T,U.numPointShadows=M,U.numSpotShadows=E,U.numSpotMaps=O,U.numLightProbes=P,i.version=sS++)}function l(c,h){let u=0,d=0,f=0,_=0,x=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(M.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),r.identity(),o.copy(M.matrixWorld),o.premultiply(m),r.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function xd(n){const t=new rS(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function aS(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new xd(n),t.set(s,[a])):o>=r.length?(a=new xd(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class lS extends Po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cS extends Po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const uS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hS=`uniform sampler2D shadow_pass;
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
}`;function dS(n,t,e){let i=new bu;const s=new Ot,o=new Ot,r=new Ae,a=new lS({depthPacking:V_}),l=new cS,c={},h=e.maxTextureSize,u={[ls]:wn,[wn]:ls,[pe]:pe},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:uS,fragmentShader:hS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Mn;_.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new R(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let p=this.type;this.render=function(I,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const tt=n.getRenderTarget(),y=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),K=n.state;K.setBlending(os),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const k=p!==Ui&&this.type===Ui,J=p===Ui&&this.type!==Ui;for(let lt=0,W=I.length;lt<W;lt++){const et=I[lt],V=et.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const mt=V.getFrameExtents();if(s.multiply(mt),o.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/mt.x),s.x=o.x*mt.x,V.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/mt.y),s.y=o.y*mt.y,V.mapSize.y=o.y)),V.map===null||k===!0||J===!0){const _t=this.type!==Ui?{minFilter:zn,magFilter:zn}:{};V.map!==null&&V.map.dispose(),V.map=new Us(s.x,s.y,_t),V.map.texture.name=et.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const yt=V.getViewportCount();for(let _t=0;_t<yt;_t++){const It=V.getViewport(_t);r.set(o.x*It.x,o.y*It.y,o.x*It.z,o.y*It.w),K.viewport(r),V.updateMatrices(et,_t),i=V.getFrustum(),E(P,U,V.camera,et,this.type)}V.isPointLightShadow!==!0&&this.type===Ui&&T(V,U),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(tt,y,S)};function T(I,P){const U=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Us(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,U,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,U,f,x,null)}function M(I,P,U,tt){let y=null;const S=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(S!==void 0)y=S;else if(y=U.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const K=y.uuid,k=P.uuid;let J=c[K];J===void 0&&(J={},c[K]=J);let lt=J[k];lt===void 0&&(lt=y.clone(),J[k]=lt,P.addEventListener("dispose",O)),y=lt}if(y.visible=P.visible,y.wireframe=P.wireframe,tt===Ui?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=n.properties.get(y);K.light=U}return y}function E(I,P,U,tt,y){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===Ui)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const k=t.update(I),J=I.material;if(Array.isArray(J)){const lt=k.groups;for(let W=0,et=lt.length;W<et;W++){const V=lt[W],mt=J[V.materialIndex];if(mt&&mt.visible){const yt=M(I,mt,tt,y);I.onBeforeShadow(n,I,P,U,k,yt,V),n.renderBufferDirect(U,null,k,yt,I,V),I.onAfterShadow(n,I,P,U,k,yt,V)}}}else if(J.visible){const lt=M(I,J,tt,y);I.onBeforeShadow(n,I,P,U,k,lt,null),n.renderBufferDirect(U,null,k,lt,I,null),I.onAfterShadow(n,I,P,U,k,lt,null)}}const K=I.children;for(let k=0,J=K.length;k<J;k++)E(K[k],P,U,tt,y)}function O(I){I.target.removeEventListener("dispose",O);for(const U in c){const tt=c[U],y=I.target.uuid;y in tt&&(tt[y].dispose(),delete tt[y])}}}const fS={[ic]:sc,[oc]:lc,[rc]:cc,[Mo]:ac,[sc]:ic,[lc]:oc,[cc]:rc,[ac]:Mo};function pS(n){function t(){let B=!1;const gt=new Ae;let it=null;const Q=new Ae(0,0,0,0);return{setMask:function(wt){it!==wt&&!B&&(n.colorMask(wt,wt,wt,wt),it=wt)},setLocked:function(wt){B=wt},setClear:function(wt,St,Ht,Kt,Qt){Qt===!0&&(wt*=Kt,St*=Kt,Ht*=Kt),gt.set(wt,St,Ht,Kt),Q.equals(gt)===!1&&(n.clearColor(wt,St,Ht,Kt),Q.copy(gt))},reset:function(){B=!1,it=null,Q.set(-1,0,0,0)}}}function e(){let B=!1,gt=!1,it=null,Q=null,wt=null;return{setReversed:function(St){gt=St},setTest:function(St){St?vt(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(St){it!==St&&!B&&(n.depthMask(St),it=St)},setFunc:function(St){if(gt&&(St=fS[St]),Q!==St){switch(St){case ic:n.depthFunc(n.NEVER);break;case sc:n.depthFunc(n.ALWAYS);break;case oc:n.depthFunc(n.LESS);break;case Mo:n.depthFunc(n.LEQUAL);break;case rc:n.depthFunc(n.EQUAL);break;case ac:n.depthFunc(n.GEQUAL);break;case lc:n.depthFunc(n.GREATER);break;case cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=St}},setLocked:function(St){B=St},setClear:function(St){wt!==St&&(n.clearDepth(St),wt=St)},reset:function(){B=!1,it=null,Q=null,wt=null}}}function i(){let B=!1,gt=null,it=null,Q=null,wt=null,St=null,Ht=null,Kt=null,Qt=null;return{setTest:function(Jt){B||(Jt?vt(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(Jt){gt!==Jt&&!B&&(n.stencilMask(Jt),gt=Jt)},setFunc:function(Jt,ee,ce){(it!==Jt||Q!==ee||wt!==ce)&&(n.stencilFunc(Jt,ee,ce),it=Jt,Q=ee,wt=ce)},setOp:function(Jt,ee,ce){(St!==Jt||Ht!==ee||Kt!==ce)&&(n.stencilOp(Jt,ee,ce),St=Jt,Ht=ee,Kt=ce)},setLocked:function(Jt){B=Jt},setClear:function(Jt){Qt!==Jt&&(n.clearStencil(Jt),Qt=Jt)},reset:function(){B=!1,gt=null,it=null,Q=null,wt=null,St=null,Ht=null,Kt=null,Qt=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,m=null,p=null,T=null,M=null,E=null,O=null,I=new he(0,0,0),P=0,U=!1,tt=null,y=null,S=null,K=null,k=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,W=0;const et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(et)[1]),lt=W>=1):et.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),lt=W>=2);let V=null,mt={};const yt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),It=new Ae().fromArray(yt),Gt=new Ae().fromArray(_t);function ot(B,gt,it,Q){const wt=new Uint8Array(4),St=n.createTexture();n.bindTexture(B,St),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<it;Ht++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(gt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return St}const ft={};ft[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),vt(n.DEPTH_TEST),o.setFunc(Mo),L(!1),N(Th),vt(n.CULL_FACE),g(os);function vt(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function F(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function at(B,gt){return h[B]!==gt?(n.bindFramebuffer(B,gt),h[B]=gt,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function rt(B,gt){let it=d,Q=!1;if(B){it=u.get(gt),it===void 0&&(it=[],u.set(gt,it));const wt=B.textures;if(it.length!==wt.length||it[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Ht=wt.length;St<Ht;St++)it[St]=n.COLOR_ATTACHMENT0+St;it.length=wt.length,Q=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,Q=!0);Q&&n.drawBuffers(it)}function ut(B){return f!==B?(n.useProgram(B),f=B,!0):!1}const Mt={[As]:n.FUNC_ADD,[g_]:n.FUNC_SUBTRACT,[__]:n.FUNC_REVERSE_SUBTRACT};Mt[v_]=n.MIN,Mt[x_]=n.MAX;const st={[y_]:n.ZERO,[M_]:n.ONE,[w_]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[R_]:n.SRC_ALPHA_SATURATE,[T_]:n.DST_COLOR,[E_]:n.DST_ALPHA,[S_]:n.ONE_MINUS_SRC_COLOR,[nc]:n.ONE_MINUS_SRC_ALPHA,[A_]:n.ONE_MINUS_DST_COLOR,[b_]:n.ONE_MINUS_DST_ALPHA,[P_]:n.CONSTANT_COLOR,[C_]:n.ONE_MINUS_CONSTANT_COLOR,[I_]:n.CONSTANT_ALPHA,[L_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,gt,it,Q,wt,St,Ht,Kt,Qt,Jt){if(B===os){_===!0&&(F(n.BLEND),_=!1);return}if(_===!1&&(vt(n.BLEND),_=!0),B!==m_){if(B!==x||Jt!==U){if((m!==As||M!==As)&&(n.blendEquation(n.FUNC_ADD),m=As,M=As),Jt)switch(B){case fo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ah:n.blendFunc(n.ONE,n.ONE);break;case Rh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ah:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,T=null,E=null,O=null,I.set(0,0,0),P=0,x=B,U=Jt}return}wt=wt||gt,St=St||it,Ht=Ht||Q,(gt!==m||wt!==M)&&(n.blendEquationSeparate(Mt[gt],Mt[wt]),m=gt,M=wt),(it!==p||Q!==T||St!==E||Ht!==O)&&(n.blendFuncSeparate(st[it],st[Q],st[St],st[Ht]),p=it,T=Q,E=St,O=Ht),(Kt.equals(I)===!1||Qt!==P)&&(n.blendColor(Kt.r,Kt.g,Kt.b,Qt),I.copy(Kt),P=Qt),x=B,U=!1}function A(B,gt){B.side===pe?F(n.CULL_FACE):vt(n.CULL_FACE);let it=B.side===wn;gt&&(it=!it),L(it),B.blending===fo&&B.transparent===!1?g(os):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Q=B.stencilWrite;r.setTest(Q),Q&&(r.setMask(B.stencilWriteMask),r.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),r.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),q(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){tt!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),tt=B)}function N(B){B!==d_?(vt(n.CULL_FACE),B!==y&&(B===Th?n.cullFace(n.BACK):B===f_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),y=B}function D(B){B!==S&&(lt&&n.lineWidth(B),S=B)}function q(B,gt,it){B?(vt(n.POLYGON_OFFSET_FILL),(K!==gt||k!==it)&&(n.polygonOffset(gt,it),K=gt,k=it)):F(n.POLYGON_OFFSET_FILL)}function j(B){B?vt(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function w(B){B===void 0&&(B=n.TEXTURE0+J-1),V!==B&&(n.activeTexture(B),V=B)}function v(B,gt,it){it===void 0&&(V===null?it=n.TEXTURE0+J-1:it=V);let Q=mt[it];Q===void 0&&(Q={type:void 0,texture:void 0},mt[it]=Q),(Q.type!==B||Q.texture!==gt)&&(V!==it&&(n.activeTexture(it),V=it),n.bindTexture(B,gt||ft[B]),Q.type=B,Q.texture=gt)}function C(){const B=mt[V];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(B){It.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),It.copy(B))}function Et(B){Gt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Gt.copy(B))}function Wt(B,gt){let it=l.get(gt);it===void 0&&(it=new WeakMap,l.set(gt,it));let Q=it.get(B);Q===void 0&&(Q=n.getUniformBlockIndex(gt,B.name),it.set(B,Q))}function Dt(B,gt){const Q=l.get(gt).get(B);a.get(gt)!==Q&&(n.uniformBlockBinding(gt,Q,B.__bindingPointIndex),a.set(gt,Q))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,mt={},h={},u=new WeakMap,d=[],f=null,_=!1,x=null,m=null,p=null,T=null,M=null,E=null,O=null,I=new he(0,0,0),P=0,U=!1,tt=null,y=null,S=null,K=null,k=null,It.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:vt,disable:F,bindFramebuffer:at,drawBuffers:rt,useProgram:ut,setBlending:g,setMaterial:A,setFlipSided:L,setCullFace:N,setLineWidth:D,setPolygonOffset:q,setScissorTest:j,activeTexture:w,bindTexture:v,unbindTexture:C,compressedTexImage2D:X,compressedTexImage3D:z,texImage2D:xt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:ht,texSubImage2D:H,texSubImage3D:ct,compressedTexSubImage2D:dt,compressedTexSubImage3D:pt,scissor:Lt,viewport:Et,reset:Vt}}function yd(n,t,e,i){const s=mS(i);switch(e){case Jf:return n*t;case tp:return n*t;case ep:return n*t*2;case np:return n*t/s.components*s.byteLength;case xu:return n*t/s.components*s.byteLength;case ip:return n*t*2/s.components*s.byteLength;case yu:return n*t*2/s.components*s.byteLength;case Qf:return n*t*3/s.components*s.byteLength;case ei:return n*t*4/s.components*s.byteLength;case Mu:return n*t*4/s.components*s.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:case mc:return Math.max(n,16)*Math.max(t,8)/4;case dc:case pc:return Math.max(n,8)*Math.max(t,8)/2;case gc:case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case da:case Dc:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case sp:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fc:case Oc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mS(n){switch(n){case Hi:case jf:return{byteLength:1,components:1};case dr:case Kf:case yr:return{byteLength:2,components:1};case _u:case vu:return{byteLength:2,components:4};case Ds:case gu:case Oi:return{byteLength:4,components:1};case Zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gS(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return f?new OffscreenCanvas(w,v):pr("canvas")}function x(w,v,C){let X=1;const z=j(w);if((z.width>C||z.height>C)&&(X=C/Math.max(z.width,z.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const H=Math.floor(X*z.width),ct=Math.floor(X*z.height);u===void 0&&(u=_(H,ct));const dt=v?_(H,ct):u;return dt.width=H,dt.height=ct,dt.getContext("2d").drawImage(w,0,0,H,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+H+"x"+ct+")."),dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==zn&&w.minFilter!==Qn}function p(w){n.generateMipmap(w)}function T(w,v,C,X,z=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=v;if(v===n.RED&&(C===n.FLOAT&&(H=n.R32F),C===n.HALF_FLOAT&&(H=n.R16F),C===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.R8UI),C===n.UNSIGNED_SHORT&&(H=n.R16UI),C===n.UNSIGNED_INT&&(H=n.R32UI),C===n.BYTE&&(H=n.R8I),C===n.SHORT&&(H=n.R16I),C===n.INT&&(H=n.R32I)),v===n.RG&&(C===n.FLOAT&&(H=n.RG32F),C===n.HALF_FLOAT&&(H=n.RG16F),C===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.RG8UI),C===n.UNSIGNED_SHORT&&(H=n.RG16UI),C===n.UNSIGNED_INT&&(H=n.RG32UI),C===n.BYTE&&(H=n.RG8I),C===n.SHORT&&(H=n.RG16I),C===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.RGB8UI),C===n.UNSIGNED_SHORT&&(H=n.RGB16UI),C===n.UNSIGNED_INT&&(H=n.RGB32UI),C===n.BYTE&&(H=n.RGB8I),C===n.SHORT&&(H=n.RGB16I),C===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),C===n.UNSIGNED_INT&&(H=n.RGBA32UI),C===n.BYTE&&(H=n.RGBA8I),C===n.SHORT&&(H=n.RGBA16I),C===n.INT&&(H=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),v===n.RGBA){const ct=z?wa:Me.getTransfer(X);C===n.FLOAT&&(H=n.RGBA32F),C===n.HALF_FLOAT&&(H=n.RGBA16F),C===n.UNSIGNED_BYTE&&(H=ct===Ue?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function M(w,v){let C;return w?v===null||v===Ds||v===Eo?C=n.DEPTH24_STENCIL8:v===Oi?C=n.DEPTH32F_STENCIL8:v===dr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ds||v===Eo?C=n.DEPTH_COMPONENT24:v===Oi?C=n.DEPTH_COMPONENT32F:v===dr&&(C=n.DEPTH_COMPONENT16),C}function E(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==zn&&w.minFilter!==Qn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function O(w){const v=w.target;v.removeEventListener("dispose",O),P(v),v.isVideoTexture&&h.delete(v)}function I(w){const v=w.target;v.removeEventListener("dispose",I),tt(v)}function P(w){const v=i.get(w);if(v.__webglInit===void 0)return;const C=w.source,X=d.get(C);if(X){const z=X[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&U(w),Object.keys(X).length===0&&d.delete(C)}i.remove(w)}function U(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const C=w.source,X=d.get(C);delete X[v.__cacheKey],r.memory.textures--}function tt(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let z=0;z<v.__webglFramebuffer[X].length;z++)n.deleteFramebuffer(v.__webglFramebuffer[X][z]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=w.textures;for(let X=0,z=C.length;X<z;X++){const H=i.get(C[X]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),r.memory.textures--),i.remove(C[X])}i.remove(w)}let y=0;function S(){y=0}function K(){const w=y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),y+=1,w}function k(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function J(w,v){const C=i.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.version>0&&C.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(C,w,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function lt(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){Gt(C,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function W(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){Gt(C,w,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function et(w,v){const C=i.get(w);if(w.version>0&&C.__version!==w.version){ot(C,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const V={[Ke]:n.REPEAT,[Ps]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},mt={[zn]:n.NEAREST,[H_]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Qn]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[Cs]:n.LINEAR_MIPMAP_LINEAR},yt={[X_]:n.NEVER,[Z_]:n.ALWAYS,[q_]:n.LESS,[rp]:n.LEQUAL,[Y_]:n.EQUAL,[K_]:n.GEQUAL,[$_]:n.GREATER,[j_]:n.NOTEQUAL};function _t(w,v){if(v.type===Oi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qn||v.magFilter===rl||v.magFilter===Cr||v.magFilter===Cs||v.minFilter===Qn||v.minFilter===rl||v.minFilter===Cr||v.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,V[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,V[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,V[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zn||v.minFilter!==Cr&&v.minFilter!==Cs||v.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function It(w,v){let C=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",O));const X=v.source;let z=d.get(X);z===void 0&&(z={},d.set(X,z));const H=k(v);if(H!==w.__cacheKey){z[H]===void 0&&(z[H]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),z[H].usedTimes++;const ct=z[w.__cacheKey];ct!==void 0&&(z[w.__cacheKey].usedTimes--,ct.usedTimes===0&&U(v)),w.__cacheKey=H,w.__webglTexture=z[H].texture}return C}function Gt(w,v,C){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const z=It(w,v),H=v.source;e.bindTexture(X,w.__webglTexture,n.TEXTURE0+C);const ct=i.get(H);if(H.version!==ct.__version||z===!0){e.activeTexture(n.TEXTURE0+C);const dt=Me.getPrimaries(Me.workingColorSpace),pt=v.colorSpace===ss?null:Me.getPrimaries(v.colorSpace),Rt=v.colorSpace===ss||dt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ht=x(v.image,!1,s.maxTextureSize);ht=q(v,ht);const xt=o.convert(v.format,v.colorSpace),Ct=o.convert(v.type);let Lt=T(v.internalFormat,xt,Ct,v.colorSpace,v.isVideoTexture);_t(X,v);let Et;const Wt=v.mipmaps,Dt=v.isVideoTexture!==!0,Vt=ct.__version===void 0||z===!0,B=H.dataReady,gt=E(v,ht);if(v.isDepthTexture)Lt=M(v.format===bo,v.type),Vt&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,Lt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Lt,ht.width,ht.height,0,xt,Ct,null));else if(v.isDataTexture)if(Wt.length>0){Dt&&Vt&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,Wt[0].width,Wt[0].height);for(let it=0,Q=Wt.length;it<Q;it++)Et=Wt[it],Dt?B&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Et.width,Et.height,xt,Ct,Et.data):e.texImage2D(n.TEXTURE_2D,it,Lt,Et.width,Et.height,0,xt,Ct,Et.data);v.generateMipmaps=!1}else Dt?(Vt&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,ht.width,ht.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,xt,Ct,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,ht.width,ht.height,0,xt,Ct,ht.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,Wt[0].width,Wt[0].height,ht.depth);for(let it=0,Q=Wt.length;it<Q;it++)if(Et=Wt[it],v.format!==ei)if(xt!==null)if(Dt){if(B)if(v.layerUpdates.size>0){const wt=yd(Et.width,Et.height,v.format,v.type);for(const St of v.layerUpdates){const Ht=Et.data.subarray(St*wt/Et.data.BYTES_PER_ELEMENT,(St+1)*wt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,St,Et.width,Et.height,1,xt,Ht,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Et.width,Et.height,ht.depth,xt,Et.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,Lt,Et.width,Et.height,ht.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Et.width,Et.height,ht.depth,xt,Ct,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,Lt,Et.width,Et.height,ht.depth,0,xt,Ct,Et.data)}else{Dt&&Vt&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,Wt[0].width,Wt[0].height);for(let it=0,Q=Wt.length;it<Q;it++)Et=Wt[it],v.format!==ei?xt!==null?Dt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,Et.width,Et.height,xt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,it,Lt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?B&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Et.width,Et.height,xt,Ct,Et.data):e.texImage2D(n.TEXTURE_2D,it,Lt,Et.width,Et.height,0,xt,Ct,Et.data)}else if(v.isDataArrayTexture)if(Dt){if(Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,ht.width,ht.height,ht.depth),B)if(v.layerUpdates.size>0){const it=yd(ht.width,ht.height,v.format,v.type);for(const Q of v.layerUpdates){const wt=ht.data.subarray(Q*it/ht.data.BYTES_PER_ELEMENT,(Q+1)*it/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ht.width,ht.height,1,xt,Ct,wt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,xt,Ct,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,xt,Ct,ht.data);else if(v.isData3DTexture)Dt?(Vt&&e.texStorage3D(n.TEXTURE_3D,gt,Lt,ht.width,ht.height,ht.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,xt,Ct,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,xt,Ct,ht.data);else if(v.isFramebufferTexture){if(Vt)if(Dt)e.texStorage2D(n.TEXTURE_2D,gt,Lt,ht.width,ht.height);else{let it=ht.width,Q=ht.height;for(let wt=0;wt<gt;wt++)e.texImage2D(n.TEXTURE_2D,wt,Lt,it,Q,0,xt,Ct,null),it>>=1,Q>>=1}}else if(Wt.length>0){if(Dt&&Vt){const it=j(Wt[0]);e.texStorage2D(n.TEXTURE_2D,gt,Lt,it.width,it.height)}for(let it=0,Q=Wt.length;it<Q;it++)Et=Wt[it],Dt?B&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,xt,Ct,Et):e.texImage2D(n.TEXTURE_2D,it,Lt,xt,Ct,Et);v.generateMipmaps=!1}else if(Dt){if(Vt){const it=j(ht);e.texStorage2D(n.TEXTURE_2D,gt,Lt,it.width,it.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Ct,ht)}else e.texImage2D(n.TEXTURE_2D,0,Lt,xt,Ct,ht);m(v)&&p(X),ct.__version=H.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ot(w,v,C){if(v.image.length!==6)return;const X=It(w,v),z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+C);const H=i.get(z);if(z.version!==H.__version||X===!0){e.activeTexture(n.TEXTURE0+C);const ct=Me.getPrimaries(Me.workingColorSpace),dt=v.colorSpace===ss?null:Me.getPrimaries(v.colorSpace),pt=v.colorSpace===ss||ct===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,ht=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!Rt&&!ht?xt[Q]=x(v.image[Q],!0,s.maxCubemapSize):xt[Q]=ht?v.image[Q].image:v.image[Q],xt[Q]=q(v,xt[Q]);const Ct=xt[0],Lt=o.convert(v.format,v.colorSpace),Et=o.convert(v.type),Wt=T(v.internalFormat,Lt,Et,v.colorSpace),Dt=v.isVideoTexture!==!0,Vt=H.__version===void 0||X===!0,B=z.dataReady;let gt=E(v,Ct);_t(n.TEXTURE_CUBE_MAP,v);let it;if(Rt){Dt&&Vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Wt,Ct.width,Ct.height);for(let Q=0;Q<6;Q++){it=xt[Q].mipmaps;for(let wt=0;wt<it.length;wt++){const St=it[wt];v.format!==ei?Lt!==null?Dt?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,0,0,St.width,St.height,Lt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,Wt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,0,0,St.width,St.height,Lt,Et,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,Wt,St.width,St.height,0,Lt,Et,St.data)}}}else{if(it=v.mipmaps,Dt&&Vt){it.length>0&&gt++;const Q=j(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Wt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ht){Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Lt,Et,xt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,xt[Q].width,xt[Q].height,0,Lt,Et,xt[Q].data);for(let wt=0;wt<it.length;wt++){const Ht=it[wt].image[Q].image;Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,0,0,Ht.width,Ht.height,Lt,Et,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,Wt,Ht.width,Ht.height,0,Lt,Et,Ht.data)}}else{Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,Et,xt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,Lt,Et,xt[Q]);for(let wt=0;wt<it.length;wt++){const St=it[wt];Dt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,0,0,Lt,Et,St.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,Wt,Lt,Et,St.image[Q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),H.__version=z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ft(w,v,C,X,z,H){const ct=o.convert(C.format,C.colorSpace),dt=o.convert(C.type),pt=T(C.internalFormat,ct,dt,C.colorSpace);if(!i.get(v).__hasExternalTextures){const ht=Math.max(1,v.width>>H),xt=Math.max(1,v.height>>H);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,H,pt,ht,xt,v.depth,0,ct,dt,null):e.texImage2D(z,H,pt,ht,xt,0,ct,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,z,i.get(C).__webglTexture,0,L(v)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,z,i.get(C).__webglTexture,H),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const X=v.depthTexture,z=X&&X.isDepthTexture?X.type:null,H=M(v.stencilBuffer,z),ct=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=L(v);N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,H,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,w)}else{const X=v.textures;for(let z=0;z<X.length;z++){const H=X[z],ct=o.convert(H.format,H.colorSpace),dt=o.convert(H.type),pt=T(H.internalFormat,ct,dt,H.colorSpace),Rt=L(v);C&&N(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,pt,v.width,v.height):N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const X=i.get(v.depthTexture).__webglTexture,z=L(v);if(v.depthTexture.format===po)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(v.depthTexture.format===bo)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function at(w){const v=i.get(w),C=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",z)};X.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=X}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");F(v.__webglFramebuffer,w)}else if(C){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),vt(v.__webglDepthbuffer[X],w,!1);else{const z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,H)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),vt(v.__webglDepthbuffer,w,!1);else{const X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(w,v,C){const X=i.get(w);v!==void 0&&ft(X.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&at(w)}function ut(w){const v=w.texture,C=i.get(w),X=i.get(v);w.addEventListener("dispose",I);const z=w.textures,H=w.isWebGLCubeRenderTarget===!0,ct=z.length>1;if(ct||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,r.memory.textures++),H){C.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[dt]=[];for(let pt=0;pt<v.mipmaps.length;pt++)C.__webglFramebuffer[dt][pt]=n.createFramebuffer()}else C.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)C.__webglFramebuffer[dt]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ct)for(let dt=0,pt=z.length;dt<pt;dt++){const Rt=i.get(z[dt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),r.memory.textures++)}if(w.samples>0&&N(w)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let dt=0;dt<z.length;dt++){const pt=z[dt];C.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[dt]);const Rt=o.convert(pt.format,pt.colorSpace),ht=o.convert(pt.type),xt=T(pt.internalFormat,Rt,ht,pt.colorSpace,w.isXRRenderTarget===!0),Ct=L(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,xt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,C.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(C.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),_t(n.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[dt][pt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else ft(C.__webglFramebuffer[dt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let dt=0,pt=z.length;dt<pt;dt++){const Rt=z[dt],ht=i.get(Rt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),_t(n.TEXTURE_2D,Rt),ft(C.__webglFramebuffer,w,Rt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),m(Rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,X.__webglTexture),_t(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)ft(C.__webglFramebuffer[pt],w,v,n.COLOR_ATTACHMENT0,dt,pt);else ft(C.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,dt,0);m(v)&&p(dt),e.unbindTexture()}w.depthBuffer&&at(w)}function Mt(w){const v=w.textures;for(let C=0,X=v.length;C<X;C++){const z=v[C];if(m(z)){const H=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ct=i.get(z).__webglTexture;e.bindTexture(H,ct),p(H),e.unbindTexture()}}}const st=[],g=[];function A(w){if(w.samples>0){if(N(w)===!1){const v=w.textures,C=w.width,X=w.height;let z=n.COLOR_BUFFER_BIT;const H=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(w),dt=v.length>1;if(dt)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[pt]);const Rt=i.get(v[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,C,X,0,0,C,X,z,n.NEAREST),l===!0&&(st.length=0,g.length=0,st.push(n.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(st.push(H),g.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ct.__webglColorRenderbuffer[pt]);const Rt=i.get(v[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function N(w){const v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(w){const v=r.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function q(w,v){const C=w.colorSpace,X=w.format,z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||C!==hs&&C!==ss&&(Me.getTransfer(C)===Ue?(X!==ei||z!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function j(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=S,this.setTexture2D=J,this.setTexture2DArray=lt,this.setTexture3D=W,this.setTextureCube=et,this.rebindTextures=rt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=N}function _S(n,t){function e(i,s=ss){let o;const r=Me.getTransfer(s);if(i===Hi)return n.UNSIGNED_BYTE;if(i===_u)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jf)return n.BYTE;if(i===Kf)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===gu)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===Oi)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===Jf)return n.ALPHA;if(i===Qf)return n.RGB;if(i===ei)return n.RGBA;if(i===tp)return n.LUMINANCE;if(i===ep)return n.LUMINANCE_ALPHA;if(i===po)return n.DEPTH_COMPONENT;if(i===bo)return n.DEPTH_STENCIL;if(i===np)return n.RED;if(i===xu)return n.RED_INTEGER;if(i===ip)return n.RG;if(i===yu)return n.RG_INTEGER;if(i===Mu)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===ha)if(r===Ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===la)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===la)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dc||i===fc||i===pc||i===mc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===dc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===vc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===gc||i===_c)return r===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===vc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xc||i===yc||i===Mc||i===wc||i===Sc||i===Ec||i===bc||i===Tc||i===Ac||i===Rc||i===Pc||i===Cc||i===Ic||i===Lc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===xc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lc)return r===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===da||i===Dc||i===Uc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===da)return r===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sp||i===Nc||i===Fc||i===Oc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===da)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class vS extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const yS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MS=`
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

}`;class wS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new yn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Dn({vertexShader:yS,fragmentShader:MS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new Va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SS extends Ro{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const x=new wS,m=e.getContextAttributes();let p=null,T=null;const M=[],E=[],O=new Ot;let I=null;const P=new Be;P.layers.enable(1),P.viewport=new Ae;const U=new Be;U.layers.enable(2),U.viewport=new Ae;const tt=[P,U],y=new vS;y.layers.enable(1),y.layers.enable(2);let S=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let ft=M[ot];return ft===void 0&&(ft=new Ul,M[ot]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(ot){let ft=M[ot];return ft===void 0&&(ft=new Ul,M[ot]=ft),ft.getGripSpace()},this.getHand=function(ot){let ft=M[ot];return ft===void 0&&(ft=new Ul,M[ot]=ft),ft.getHandSpace()};function k(ot){const ft=E.indexOf(ot.inputSource);if(ft===-1)return;const vt=M[ft];vt!==void 0&&(vt.update(ot.inputSource,ot.frame,c||r),vt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function J(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",lt);for(let ot=0;ot<M.length;ot++){const ft=E[ot];ft!==null&&(E[ot]=null,M[ot].disconnect(ft))}S=null,K=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,T=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){o=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",J),s.addEventListener("inputsourceschange",lt),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Us(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,vt=null,F=null;m.depth&&(F=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?bo:po,vt=m.stencil?Eo:Ds);const at={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(at),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Us(d.textureWidth,d.textureHeight,{format:ei,type:Hi,depthTexture:new xp(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function lt(ot){for(let ft=0;ft<ot.removed.length;ft++){const vt=ot.removed[ft],F=E.indexOf(vt);F>=0&&(E[F]=null,M[F].disconnect(vt))}for(let ft=0;ft<ot.added.length;ft++){const vt=ot.added[ft];let F=E.indexOf(vt);if(F===-1){for(let rt=0;rt<M.length;rt++)if(rt>=E.length){E.push(vt),F=rt;break}else if(E[rt]===null){E[rt]=vt,F=rt;break}if(F===-1)break}const at=M[F];at&&at.connect(vt)}}const W=new Y,et=new Y;function V(ot,ft,vt){W.setFromMatrixPosition(ft.matrixWorld),et.setFromMatrixPosition(vt.matrixWorld);const F=W.distanceTo(et),at=ft.projectionMatrix.elements,rt=vt.projectionMatrix.elements,ut=at[14]/(at[10]-1),Mt=at[14]/(at[10]+1),st=(at[9]+1)/at[5],g=(at[9]-1)/at[5],A=(at[8]-1)/at[0],L=(rt[8]+1)/rt[0],N=ut*A,D=ut*L,q=F/(-A+L),j=q*-A;if(ft.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(j),ot.translateZ(q),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),at[10]===-1)ot.projectionMatrix.copy(ft.projectionMatrix),ot.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const w=ut+q,v=Mt+q,C=N-j,X=D+(F-j),z=st*Mt/v*w,H=g*Mt/v*w;ot.projectionMatrix.makePerspective(C,X,z,H,w,v),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function mt(ot,ft){ft===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(ft.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let ft=ot.near,vt=ot.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),y.near=U.near=P.near=ft,y.far=U.far=P.far=vt,(S!==y.near||K!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,K=y.far);const F=ot.parent,at=y.cameras;mt(y,F);for(let rt=0;rt<at.length;rt++)mt(at[rt],F);at.length===2?V(y,P,U):y.projectionMatrix.copy(P.projectionMatrix),yt(ot,y,F)};function yt(ot,ft,vt){vt===null?ot.matrix.copy(ft.matrixWorld):(ot.matrix.copy(vt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(ft.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(ft.projectionMatrix),ot.projectionMatrixInverse.copy(ft.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=fr*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ot){l=ot,d!==null&&(d.fixedFoveation=ot),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ot)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let _t=null;function It(ot,ft){if(h=ft.getViewerPose(c||r),_=ft,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let F=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,F=!0);for(let rt=0;rt<vt.length;rt++){const ut=vt[rt];let Mt=null;if(f!==null)Mt=f.getViewport(ut);else{const g=u.getViewSubImage(d,ut);Mt=g.viewport,rt===0&&(t.setRenderTargetTextures(T,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),t.setRenderTarget(T))}let st=tt[rt];st===void 0&&(st=new Be,st.layers.enable(rt),st.viewport=new Ae,tt[rt]=st),st.matrix.fromArray(ut.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ut.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),rt===0&&(y.matrix.copy(st.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),F===!0&&y.cameras.push(st)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")){const rt=u.getDepthInformation(vt[0]);rt&&rt.isValid&&rt.texture&&x.init(t,rt,s.renderState)}}for(let vt=0;vt<M.length;vt++){const F=E[vt],at=M[vt];F!==null&&at!==void 0&&at.update(F,ft,c||r)}_t&&_t(ot,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const Gt=new _p;Gt.setAnimationLoop(It),this.setAnimationLoop=function(ot){_t=ot},this.dispose=function(){}}}const Ss=new yi,ES=new Ne;function bS(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(o(m,p),_(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),M=T.envMap,E=T.envMapRotation;M&&(m.envMap.value=M,Ss.copy(E),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),m.envMapRotation.value.setFromMatrix4(ES.makeRotationFromEuler(Ss)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TS(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const E=M.program;i.uniformBlockBinding(T,E)}function c(T,M){let E=s[T.id];E===void 0&&(_(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",m));const O=M.program;i.updateUBOMapping(T,O);const I=t.render.frame;o[T.id]!==I&&(d(T),o[T.id]=I)}function h(T){const M=u();T.__bindingPointIndex=M;const E=n.createBuffer(),O=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,O,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function u(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const M=s[T.id],E=T.uniforms,O=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let I=0,P=E.length;I<P;I++){const U=Array.isArray(E[I])?E[I]:[E[I]];for(let tt=0,y=U.length;tt<y;tt++){const S=U[tt];if(f(S,I,tt,O)===!0){const K=S.__offset,k=Array.isArray(S.value)?S.value:[S.value];let J=0;for(let lt=0;lt<k.length;lt++){const W=k[lt],et=x(W);typeof W=="number"||typeof W=="boolean"?(S.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,K+J,S.__data)):W.isMatrix3?(S.__data[0]=W.elements[0],S.__data[1]=W.elements[1],S.__data[2]=W.elements[2],S.__data[3]=0,S.__data[4]=W.elements[3],S.__data[5]=W.elements[4],S.__data[6]=W.elements[5],S.__data[7]=0,S.__data[8]=W.elements[6],S.__data[9]=W.elements[7],S.__data[10]=W.elements[8],S.__data[11]=0):(W.toArray(S.__data,J),J+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,M,E,O){const I=T.value,P=M+"_"+E;if(O[P]===void 0)return typeof I=="number"||typeof I=="boolean"?O[P]=I:O[P]=I.clone(),!0;{const U=O[P];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return O[P]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function _(T){const M=T.uniforms;let E=0;const O=16;for(let P=0,U=M.length;P<U;P++){const tt=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,S=tt.length;y<S;y++){const K=tt[y],k=Array.isArray(K.value)?K.value:[K.value];for(let J=0,lt=k.length;J<lt;J++){const W=k[J],et=x(W),V=E%O,mt=V%et.boundary,yt=V+mt;E+=mt,yt!==0&&O-yt<et.storage&&(E+=O-yt),K.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=et.storage}}}const I=E%O;return I>0&&(E+=O-I),T.__size=E,T.__cache={},this}function x(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const E=r.indexOf(M.__bindingPointIndex);r.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class ri{constructor(t={}){const{canvas:e=pv(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=rs,this.toneMappingExposure=1;const M=this;let E=!1,O=0,I=0,P=null,U=-1,tt=null;const y=new Ae,S=new Ae;let K=null;const k=new he(0);let J=0,lt=e.width,W=e.height,et=1,V=null,mt=null;const yt=new Ae(0,0,lt,W),_t=new Ae(0,0,lt,W);let It=!1;const Gt=new bu;let ot=!1,ft=!1;const vt=new Ne,F=new Ne,at=new Y,rt=new Ae,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function st(){return P===null?et:1}let g=i;function A(b,G){return e.getContext(b,G)}try{const b={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mu}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",St,!1),g===null){const G="webgl2";if(g=A(G,b),g===null)throw A(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let L,N,D,q,j,w,v,C,X,z,H,ct,dt,pt,Rt,ht,xt,Ct,Lt,Et,Wt,Dt,Vt,B;function gt(){L=new LM(g),L.init(),Dt=new _S(g,L),N=new TM(g,L,t,Dt),D=new pS(g),N.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),q=new NM(g),j=new Qw,w=new gS(g,L,D,j,N,Dt,q),v=new RM(M),C=new IM(M),X=new kv(g),Vt=new EM(g,X),z=new DM(g,X,q,Vt),H=new OM(g,z,X,q),Lt=new FM(g,N,w),ht=new AM(j),ct=new Jw(M,v,C,L,N,Vt,ht),dt=new bS(M,j),pt=new eS,Rt=new aS(L),Ct=new SM(M,v,C,D,H,d,l),xt=new dS(M,H,N),B=new TS(g,q,N,D),Et=new bM(g,L,q),Wt=new UM(g,L,q),q.programs=ct.programs,M.capabilities=N,M.extensions=L,M.properties=j,M.renderLists=pt,M.shadowMap=xt,M.state=D,M.info=q}gt();const it=new SS(M,g);this.xr=it,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const b=L.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=L.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(lt,W,!1))},this.getSize=function(b){return b.set(lt,W)},this.setSize=function(b,G,Z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=b,W=G,e.width=Math.floor(b*et),e.height=Math.floor(G*et),Z===!0&&(e.style.width=b+"px",e.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(lt*et,W*et).floor()},this.setDrawingBufferSize=function(b,G,Z){lt=b,W=G,et=Z,e.width=Math.floor(b*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(yt)},this.setViewport=function(b,G,Z,nt){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,G,Z,nt),D.viewport(y.copy(yt).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(_t)},this.setScissor=function(b,G,Z,nt){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,G,Z,nt),D.scissor(S.copy(_t).multiplyScalar(et).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(b){D.setScissorTest(It=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){mt=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,G=!0,Z=!0){let nt=0;if(b){let $=!1;if(P!==null){const bt=P.texture.format;$=bt===Mu||bt===yu||bt===xu}if($){const bt=P.texture.type,Ut=bt===Hi||bt===Ds||bt===dr||bt===Eo||bt===_u||bt===vu,Bt=Ct.getClearColor(),zt=Ct.getClearAlpha(),Yt=Bt.r,jt=Bt.g,kt=Bt.b;Ut?(f[0]=Yt,f[1]=jt,f[2]=kt,f[3]=zt,g.clearBufferuiv(g.COLOR,0,f)):(_[0]=Yt,_[1]=jt,_[2]=kt,_[3]=zt,g.clearBufferiv(g.COLOR,0,_))}else nt|=g.COLOR_BUFFER_BIT}G&&(nt|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(nt|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),pt.dispose(),Rt.dispose(),j.dispose(),v.dispose(),C.dispose(),H.dispose(),Vt.dispose(),B.dispose(),ct.dispose(),it.dispose(),it.removeEventListener("sessionstart",me),it.removeEventListener("sessionend",ve),fe.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=q.autoReset,G=xt.enabled,Z=xt.autoUpdate,nt=xt.needsUpdate,$=xt.type;gt(),q.autoReset=b,xt.enabled=G,xt.autoUpdate=Z,xt.needsUpdate=nt,xt.type=$}function St(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ht(b){const G=b.target;G.removeEventListener("dispose",Ht),Kt(G)}function Kt(b){Qt(b),j.remove(b)}function Qt(b){const G=j.get(b).programs;G!==void 0&&(G.forEach(function(Z){ct.releaseProgram(Z)}),b.isShaderMaterial&&ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,Z,nt,$,bt){G===null&&(G=ut);const Ut=$.isMesh&&$.matrixWorld.determinant()<0,Bt=Nn(b,G,Z,nt,$);D.setMaterial(nt,Ut);let zt=Z.index,Yt=1;if(nt.wireframe===!0){if(zt=z.getWireframeAttribute(Z),zt===void 0)return;Yt=2}const jt=Z.drawRange,kt=Z.attributes.position;let ne=jt.start*Yt,de=(jt.start+jt.count)*Yt;bt!==null&&(ne=Math.max(ne,bt.start*Yt),de=Math.min(de,(bt.start+bt.count)*Yt)),zt!==null?(ne=Math.max(ne,0),de=Math.min(de,zt.count)):kt!=null&&(ne=Math.max(ne,0),de=Math.min(de,kt.count));const _e=de-ne;if(_e<0||_e===1/0)return;Vt.setup($,nt,Bt,Z,zt);let Ce,re=Et;if(zt!==null&&(Ce=X.get(zt),re=Wt,re.setIndex(Ce)),$.isMesh)nt.wireframe===!0?(D.setLineWidth(nt.wireframeLinewidth*st()),re.setMode(g.LINES)):re.setMode(g.TRIANGLES);else if($.isLine){let Xt=nt.linewidth;Xt===void 0&&(Xt=1),D.setLineWidth(Xt*st()),$.isLineSegments?re.setMode(g.LINES):$.isLineLoop?re.setMode(g.LINE_LOOP):re.setMode(g.LINE_STRIP)}else $.isPoints?re.setMode(g.POINTS):$.isSprite&&re.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)re.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))re.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Xt=$._multiDrawStarts,Ie=$._multiDrawCounts,At=$._multiDrawCount,De=zt?X.get(zt).bytesPerElement:1,Fe=j.get(nt).currentProgram.getUniforms();for(let Se=0;Se<At;Se++)Fe.setValue(g,"_gl_DrawID",Se),re.render(Xt[Se]/De,Ie[Se])}else if($.isInstancedMesh)re.renderInstances(ne,_e,$.count);else if(Z.isInstancedBufferGeometry){const Xt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ie=Math.min(Z.instanceCount,Xt);re.renderInstances(ne,_e,Ie)}else re.render(ne,_e)};function Jt(b,G,Z){b.transparent===!0&&b.side===pe&&b.forceSinglePass===!1?(b.side=wn,b.needsUpdate=!0,We(b,G,Z),b.side=ls,b.needsUpdate=!0,We(b,G,Z),b.side=pe):We(b,G,Z)}this.compile=function(b,G,Z=null){Z===null&&(Z=b),m=Rt.get(Z),m.init(G),T.push(m),Z.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),b!==Z&&b.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();const nt=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const bt=$.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Bt=bt[Ut];Jt(Bt,Z,$),nt.add(Bt)}else Jt(bt,Z,$),nt.add(bt)}),T.pop(),m=null,nt},this.compileAsync=function(b,G,Z=null){const nt=this.compile(b,G,Z);return new Promise($=>{function bt(){if(nt.forEach(function(Ut){j.get(Ut).currentProgram.isReady()&&nt.delete(Ut)}),nt.size===0){$(b);return}setTimeout(bt,10)}L.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ee=null;function ce(b){ee&&ee(b)}function me(){fe.stop()}function ve(){fe.start()}const fe=new _p;fe.setAnimationLoop(ce),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(b){ee=b,it.setAnimationLoop(b),b===null?fe.stop():fe.start()},it.addEventListener("sessionstart",me),it.addEventListener("sessionend",ve),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(G),G=it.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,G,P),m=Rt.get(b,T.length),m.init(G),T.push(m),F.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Gt.setFromProjectionMatrix(F),ft=this.localClippingEnabled,ot=ht.init(this.clippingPlanes,ft),x=pt.get(b,p.length),x.init(),p.push(x),it.enabled===!0&&it.isPresenting===!0){const bt=M.xr.getDepthSensingMesh();bt!==null&&Te(bt,G,-1/0,M.sortObjects)}Te(b,G,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(V,mt),Mt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Mt&&Ct.addToRenderList(x,b),this.info.render.frame++,ot===!0&&ht.beginShadows();const Z=m.state.shadowsArray;xt.render(Z,b,G),ot===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=x.opaque,$=x.transmissive;if(m.setupLights(),G.isArrayCamera){const bt=G.cameras;if($.length>0)for(let Ut=0,Bt=bt.length;Ut<Bt;Ut++){const zt=bt[Ut];He(nt,$,b,zt)}Mt&&Ct.render(b);for(let Ut=0,Bt=bt.length;Ut<Bt;Ut++){const zt=bt[Ut];ge(x,b,zt,zt.viewport)}}else $.length>0&&He(nt,$,b,G),Mt&&Ct.render(b),ge(x,b,G);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(M,b,G),Vt.resetDefaultState(),U=-1,tt=null,T.pop(),T.length>0?(m=T[T.length-1],ot===!0&&ht.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Te(b,G,Z,nt){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Gt.intersectsSprite(b)){nt&&rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(F);const Ut=H.update(b),Bt=b.material;Bt.visible&&x.push(b,Ut,Bt,Z,rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Gt.intersectsObject(b))){const Ut=H.update(b),Bt=b.material;if(nt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),rt.copy(b.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),rt.copy(Ut.boundingSphere.center)),rt.applyMatrix4(b.matrixWorld).applyMatrix4(F)),Array.isArray(Bt)){const zt=Ut.groups;for(let Yt=0,jt=zt.length;Yt<jt;Yt++){const kt=zt[Yt],ne=Bt[kt.materialIndex];ne&&ne.visible&&x.push(b,Ut,ne,Z,rt.z,kt)}}else Bt.visible&&x.push(b,Ut,Bt,Z,rt.z,null)}}const bt=b.children;for(let Ut=0,Bt=bt.length;Ut<Bt;Ut++)Te(bt[Ut],G,Z,nt)}function ge(b,G,Z,nt){const $=b.opaque,bt=b.transmissive,Ut=b.transparent;m.setupLightsView(Z),ot===!0&&ht.setGlobalState(M.clippingPlanes,Z),nt&&D.viewport(y.copy(nt)),$.length>0&&Re($,G,Z),bt.length>0&&Re(bt,G,Z),Ut.length>0&&Re(Ut,G,Z),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function He(b,G,Z,nt){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new Us(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?yr:Hi,minFilter:Cs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const bt=m.state.transmissionRenderTarget[nt.id],Ut=nt.viewport||y;bt.setSize(Ut.z,Ut.w);const Bt=M.getRenderTarget();M.setRenderTarget(bt),M.getClearColor(k),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Mt&&Ct.render(Z);const zt=M.toneMapping;M.toneMapping=rs;const Yt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),ot===!0&&ht.setGlobalState(M.clippingPlanes,nt),Re(b,Z,nt),w.updateMultisampleRenderTarget(bt),w.updateRenderTargetMipmap(bt),L.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let kt=0,ne=G.length;kt<ne;kt++){const de=G[kt],_e=de.object,Ce=de.geometry,re=de.material,Xt=de.group;if(re.side===pe&&_e.layers.test(nt.layers)){const Ie=re.side;re.side=wn,re.needsUpdate=!0,je(_e,Z,nt,Ce,re,Xt),re.side=Ie,re.needsUpdate=!0,jt=!0}}jt===!0&&(w.updateMultisampleRenderTarget(bt),w.updateRenderTargetMipmap(bt))}M.setRenderTarget(Bt),M.setClearColor(k,J),Yt!==void 0&&(nt.viewport=Yt),M.toneMapping=zt}function Re(b,G,Z){const nt=G.isScene===!0?G.overrideMaterial:null;for(let $=0,bt=b.length;$<bt;$++){const Ut=b[$],Bt=Ut.object,zt=Ut.geometry,Yt=nt===null?Ut.material:nt,jt=Ut.group;Bt.layers.test(Z.layers)&&je(Bt,G,Z,zt,Yt,jt)}}function je(b,G,Z,nt,$,bt){b.onBeforeRender(M,G,Z,nt,$,bt),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(M,G,Z,nt,b,bt),$.transparent===!0&&$.side===pe&&$.forceSinglePass===!1?($.side=wn,$.needsUpdate=!0,M.renderBufferDirect(Z,G,nt,$,b,bt),$.side=ls,$.needsUpdate=!0,M.renderBufferDirect(Z,G,nt,$,b,bt),$.side=pe):M.renderBufferDirect(Z,G,nt,$,b,bt),b.onAfterRender(M,G,Z,nt,$,bt)}function We(b,G,Z){G.isScene!==!0&&(G=ut);const nt=j.get(b),$=m.state.lights,bt=m.state.shadowsArray,Ut=$.state.version,Bt=ct.getParameters(b,$.state,bt,G,Z),zt=ct.getProgramCacheKey(Bt);let Yt=nt.programs;nt.environment=b.isMeshStandardMaterial?G.environment:null,nt.fog=G.fog,nt.envMap=(b.isMeshStandardMaterial?C:v).get(b.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,Yt===void 0&&(b.addEventListener("dispose",Ht),Yt=new Map,nt.programs=Yt);let jt=Yt.get(zt);if(jt!==void 0){if(nt.currentProgram===jt&&nt.lightsStateVersion===Ut)return Un(b,Bt),jt}else Bt.uniforms=ct.getUniforms(b),b.onBeforeCompile(Bt,M),jt=ct.acquireProgram(Bt,zt),Yt.set(zt,jt),nt.uniforms=Bt.uniforms;const kt=nt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=ht.uniform),Un(b,Bt),nt.needsLights=Pt(b),nt.lightsStateVersion=Ut,nt.needsLights&&(kt.ambientLightColor.value=$.state.ambient,kt.lightProbe.value=$.state.probe,kt.directionalLights.value=$.state.directional,kt.directionalLightShadows.value=$.state.directionalShadow,kt.spotLights.value=$.state.spot,kt.spotLightShadows.value=$.state.spotShadow,kt.rectAreaLights.value=$.state.rectArea,kt.ltc_1.value=$.state.rectAreaLTC1,kt.ltc_2.value=$.state.rectAreaLTC2,kt.pointLights.value=$.state.point,kt.pointLightShadows.value=$.state.pointShadow,kt.hemisphereLights.value=$.state.hemi,kt.directionalShadowMap.value=$.state.directionalShadowMap,kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,kt.spotShadowMap.value=$.state.spotShadowMap,kt.spotLightMatrix.value=$.state.spotLightMatrix,kt.spotLightMap.value=$.state.spotLightMap,kt.pointShadowMap.value=$.state.pointShadowMap,kt.pointShadowMatrix.value=$.state.pointShadowMatrix),nt.currentProgram=jt,nt.uniformsList=null,jt}function on(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=pa.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function Un(b,G){const Z=j.get(b);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Nn(b,G,Z,nt,$){G.isScene!==!0&&(G=ut),w.resetTextureUnits();const bt=G.fog,Ut=nt.isMeshStandardMaterial?G.environment:null,Bt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:hs,zt=(nt.isMeshStandardMaterial?C:v).get(nt.envMap||Ut),Yt=nt.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,jt=!!Z.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),kt=!!Z.morphAttributes.position,ne=!!Z.morphAttributes.normal,de=!!Z.morphAttributes.color;let _e=rs;nt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_e=M.toneMapping);const Ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,re=Ce!==void 0?Ce.length:0,Xt=j.get(nt),Ie=m.state.lights;if(ot===!0&&(ft===!0||b!==tt)){const Oe=b===tt&&nt.id===U;ht.setState(nt,b,Oe)}let At=!1;nt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ie.state.version||Xt.outputColorSpace!==Bt||$.isBatchedMesh&&Xt.batching===!1||!$.isBatchedMesh&&Xt.batching===!0||$.isBatchedMesh&&Xt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Xt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Xt.instancing===!1||!$.isInstancedMesh&&Xt.instancing===!0||$.isSkinnedMesh&&Xt.skinning===!1||!$.isSkinnedMesh&&Xt.skinning===!0||$.isInstancedMesh&&Xt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xt.instancingMorph===!1&&$.morphTexture!==null||Xt.envMap!==zt||nt.fog===!0&&Xt.fog!==bt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ht.numPlanes||Xt.numIntersection!==ht.numIntersection)||Xt.vertexAlphas!==Yt||Xt.vertexTangents!==jt||Xt.morphTargets!==kt||Xt.morphNormals!==ne||Xt.morphColors!==de||Xt.toneMapping!==_e||Xt.morphTargetsCount!==re)&&(At=!0):(At=!0,Xt.__version=nt.version);let De=Xt.currentProgram;At===!0&&(De=We(nt,G,$));let Fe=!1,Se=!1,rn=!1;const xe=De.getUniforms(),Ye=Xt.uniforms;if(D.useProgram(De.program)&&(Fe=!0,Se=!0,rn=!0),nt.id!==U&&(U=nt.id,Se=!0),Fe||tt!==b){N.reverseDepthBuffer?(vt.copy(b.projectionMatrix),gv(vt),_v(vt),xe.setValue(g,"projectionMatrix",vt)):xe.setValue(g,"projectionMatrix",b.projectionMatrix),xe.setValue(g,"viewMatrix",b.matrixWorldInverse);const Oe=xe.map.cameraPosition;Oe!==void 0&&Oe.setValue(g,at.setFromMatrixPosition(b.matrixWorld)),N.logarithmicDepthBuffer&&xe.setValue(g,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&xe.setValue(g,"isOrthographic",b.isOrthographicCamera===!0),tt!==b&&(tt=b,Se=!0,rn=!0)}if($.isSkinnedMesh){xe.setOptional(g,$,"bindMatrix"),xe.setOptional(g,$,"bindMatrixInverse");const Oe=$.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),xe.setValue(g,"boneTexture",Oe.boneTexture,w))}$.isBatchedMesh&&(xe.setOptional(g,$,"batchingTexture"),xe.setValue(g,"batchingTexture",$._matricesTexture,w),xe.setOptional(g,$,"batchingIdTexture"),xe.setValue(g,"batchingIdTexture",$._indirectTexture,w),xe.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&xe.setValue(g,"batchingColorTexture",$._colorsTexture,w));const Sn=Z.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Lt.update($,Z,De),(Se||Xt.receiveShadow!==$.receiveShadow)&&(Xt.receiveShadow=$.receiveShadow,xe.setValue(g,"receiveShadow",$.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Ye.envMap.value=zt,Ye.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&G.environment!==null&&(Ye.envMapIntensity.value=G.environmentIntensity),Se&&(xe.setValue(g,"toneMappingExposure",M.toneMappingExposure),Xt.needsLights&&bi(Ye,rn),bt&&nt.fog===!0&&dt.refreshFogUniforms(Ye,bt),dt.refreshMaterialUniforms(Ye,nt,et,W,m.state.transmissionRenderTarget[b.id]),pa.upload(g,on(Xt),Ye,w)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(pa.upload(g,on(Xt),Ye,w),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&xe.setValue(g,"center",$.center),xe.setValue(g,"modelViewMatrix",$.modelViewMatrix),xe.setValue(g,"normalMatrix",$.normalMatrix),xe.setValue(g,"modelMatrix",$.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Oe=nt.uniformsGroups;for(let dn=0,ci=Oe.length;dn<ci;dn++){const Fn=Oe[dn];B.update(Fn,De),B.bind(Fn,De)}}return De}function bi(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Pt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,G,Z){j.get(b.texture).__webglTexture=G,j.get(b.depthTexture).__webglTexture=Z;const nt=j.get(b);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=Z===void 0,nt.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){const Z=j.get(b);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,Z=0){P=b,O=G,I=Z;let nt=!0,$=null,bt=!1,Ut=!1;if(b){const zt=j.get(b);if(zt.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(g.FRAMEBUFFER,null),nt=!1;else if(zt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(zt.__hasExternalTextures)w.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const kt=b.depthTexture;if(zt.__boundDepthTexture!==kt){if(kt!==null&&j.has(kt)&&(b.width!==kt.image.width||b.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Yt=b.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ut=!0);const jt=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(jt[G])?$=jt[G][Z]:$=jt[G],bt=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?$=j.get(b).__webglMultisampledFramebuffer:Array.isArray(jt)?$=jt[Z]:$=jt,y.copy(b.viewport),S.copy(b.scissor),K=b.scissorTest}else y.copy(yt).multiplyScalar(et).floor(),S.copy(_t).multiplyScalar(et).floor(),K=It;if(D.bindFramebuffer(g.FRAMEBUFFER,$)&&nt&&D.drawBuffers(b,$),D.viewport(y),D.scissor(S),D.setScissorTest(K),bt){const zt=j.get(b.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+G,zt.__webglTexture,Z)}else if(Ut){const zt=j.get(b.texture),Yt=G||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,zt.__webglTexture,Z||0,Yt)}U=-1},this.readRenderTargetPixels=function(b,G,Z,nt,$,bt,Ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){D.bindFramebuffer(g.FRAMEBUFFER,Bt);try{const zt=b.texture,Yt=zt.format,jt=zt.type;if(!N.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-nt&&Z>=0&&Z<=b.height-$&&g.readPixels(G,Z,nt,$,Dt.convert(Yt),Dt.convert(jt),bt)}finally{const zt=P!==null?j.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(b,G,Z,nt,$,bt,Ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){const zt=b.texture,Yt=zt.format,jt=zt.type;if(!N.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-nt&&Z>=0&&Z<=b.height-$){D.bindFramebuffer(g.FRAMEBUFFER,Bt);const kt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,kt),g.bufferData(g.PIXEL_PACK_BUFFER,bt.byteLength,g.STREAM_READ),g.readPixels(G,Z,nt,$,Dt.convert(Yt),Dt.convert(jt),0);const ne=P!==null?j.get(P).__webglFramebuffer:null;D.bindFramebuffer(g.FRAMEBUFFER,ne);const de=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await mv(g,de,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,kt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,bt),g.deleteBuffer(kt),g.deleteSync(de),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,Z=0){b.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);const nt=Math.pow(2,-Z),$=Math.floor(b.image.width*nt),bt=Math.floor(b.image.height*nt),Ut=G!==null?G.x:0,Bt=G!==null?G.y:0;w.setTexture2D(b,0),g.copyTexSubImage2D(g.TEXTURE_2D,Z,0,0,Ut,Bt,$,bt),D.unbindTexture()},this.copyTextureToTexture=function(b,G,Z=null,nt=null,$=0){b.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,b=arguments[1],G=arguments[2],$=arguments[3]||0,Z=null);let bt,Ut,Bt,zt,Yt,jt;Z!==null?(bt=Z.max.x-Z.min.x,Ut=Z.max.y-Z.min.y,Bt=Z.min.x,zt=Z.min.y):(bt=b.image.width,Ut=b.image.height,Bt=0,zt=0),nt!==null?(Yt=nt.x,jt=nt.y):(Yt=0,jt=0);const kt=Dt.convert(G.format),ne=Dt.convert(G.type);w.setTexture2D(G,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,G.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,G.unpackAlignment);const de=g.getParameter(g.UNPACK_ROW_LENGTH),_e=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ce=g.getParameter(g.UNPACK_SKIP_PIXELS),re=g.getParameter(g.UNPACK_SKIP_ROWS),Xt=g.getParameter(g.UNPACK_SKIP_IMAGES),Ie=b.isCompressedTexture?b.mipmaps[$]:b.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Ie.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Ie.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Bt),g.pixelStorei(g.UNPACK_SKIP_ROWS,zt),b.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,Yt,jt,bt,Ut,kt,ne,Ie.data):b.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,Yt,jt,Ie.width,Ie.height,kt,Ie.data):g.texSubImage2D(g.TEXTURE_2D,$,Yt,jt,bt,Ut,kt,ne,Ie),g.pixelStorei(g.UNPACK_ROW_LENGTH,de),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,_e),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ce),g.pixelStorei(g.UNPACK_SKIP_ROWS,re),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Xt),$===0&&G.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(b,G,Z=null,nt=null,$=0){b.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,nt=arguments[1]||null,b=arguments[2],G=arguments[3],$=arguments[4]||0);let bt,Ut,Bt,zt,Yt,jt,kt,ne,de;const _e=b.isCompressedTexture?b.mipmaps[$]:b.image;Z!==null?(bt=Z.max.x-Z.min.x,Ut=Z.max.y-Z.min.y,Bt=Z.max.z-Z.min.z,zt=Z.min.x,Yt=Z.min.y,jt=Z.min.z):(bt=_e.width,Ut=_e.height,Bt=_e.depth,zt=0,Yt=0,jt=0),nt!==null?(kt=nt.x,ne=nt.y,de=nt.z):(kt=0,ne=0,de=0);const Ce=Dt.convert(G.format),re=Dt.convert(G.type);let Xt;if(G.isData3DTexture)w.setTexture3D(G,0),Xt=g.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),Xt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,G.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,G.unpackAlignment);const Ie=g.getParameter(g.UNPACK_ROW_LENGTH),At=g.getParameter(g.UNPACK_IMAGE_HEIGHT),De=g.getParameter(g.UNPACK_SKIP_PIXELS),Fe=g.getParameter(g.UNPACK_SKIP_ROWS),Se=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,_e.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,_e.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,zt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Yt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,jt),b.isDataTexture||b.isData3DTexture?g.texSubImage3D(Xt,$,kt,ne,de,bt,Ut,Bt,Ce,re,_e.data):G.isCompressedArrayTexture?g.compressedTexSubImage3D(Xt,$,kt,ne,de,bt,Ut,Bt,Ce,_e.data):g.texSubImage3D(Xt,$,kt,ne,de,bt,Ut,Bt,Ce,re,_e),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ie),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,At),g.pixelStorei(g.UNPACK_SKIP_PIXELS,De),g.pixelStorei(g.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Se),$===0&&G.generateMipmaps&&g.generateMipmap(Xt),D.unbindTexture()},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),D.unbindTexture()},this.resetState=function(){O=0,I=0,P=null,D.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===wu?"display-p3":"srgb",e.unpackColorSpace=Me.workingColorSpace===Ha?"display-p3":"srgb"}}class ai extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zc extends Po{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Md=new Ne,Gc=new up,Zr=new ka,Jr=new Y;class Nl extends nn{constructor(t=new Mn,e=new zc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=o,t.ray.intersectsSphere(Zr)===!1)return;Md.copy(s).invert(),Gc.copy(t.ray).applyMatrix4(Md);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let _=d,x=f;_<x;_++){const m=c.getX(_);Jr.fromBufferAttribute(u,m),wd(Jr,m,l,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let _=d,x=f;_<x;_++)Jr.fromBufferAttribute(u,_),wd(Jr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function wd(n,t,e,i,s,o,r){const a=Gc.distanceSqToPoint(n);if(a<e){const l=new Y;Gc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new Ot:new Y);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new Y,s=[],o=[],r=[],a=new Y,l=new Ne;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new Y)}o[0]=new Y,r[0]=new Y;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(tn(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,_))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(tn(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let _=1;_<=t;_++)o[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Au extends Ei{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ot){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class AS extends Au{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ru(){let n=0,t=0,e=0,i=0;function s(o,r,a,l){n=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Qr=new Y,Fl=new Ru,Ol=new Ru,Bl=new Ru;class RS extends Ei{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new Y){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Qr.subVectors(s[0],s[1]).add(s[0]),c=Qr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Qr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Fl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,x,m),Ol.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,x,m),Bl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ol.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Bl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Fl.calc(l),Ol.calc(l),Bl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sd(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*n+e}function PS(n,t){const e=1-n;return e*e*t}function CS(n,t){return 2*(1-n)*n*t}function IS(n,t){return n*n*t}function nr(n,t,e,i){return PS(n,t)+CS(n,e)+IS(n,i)}function LS(n,t){const e=1-n;return e*e*e*t}function DS(n,t){const e=1-n;return 3*e*e*n*t}function US(n,t){return 3*(1-n)*n*n*t}function NS(n,t){return n*n*n*t}function ir(n,t,e,i,s){return LS(n,t)+DS(n,e)+US(n,i)+NS(n,s)}class Ep extends Ei{constructor(t=new Ot,e=new Ot,i=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ot){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ir(t,s.x,o.x,r.x,a.x),ir(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class FS extends Ei{constructor(t=new Y,e=new Y,i=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Y){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ir(t,s.x,o.x,r.x,a.x),ir(t,s.y,o.y,r.y,a.y),ir(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bp extends Ei{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class OS extends Ei{constructor(t=new Y,e=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Y){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tp extends Ei{constructor(t=new Ot,e=new Ot,i=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ot){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(nr(t,s.x,o.x,r.x),nr(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class BS extends Ei{constructor(t=new Y,e=new Y,i=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Y){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(nr(t,s.x,o.x,r.x),nr(t,s.y,o.y,r.y),nr(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ap extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Sd(a,l.x,c.x,h.x,u.x),Sd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}}var Hc=Object.freeze({__proto__:null,ArcCurve:AS,CatmullRomCurve3:RS,CubicBezierCurve:Ep,CubicBezierCurve3:FS,EllipseCurve:Au,LineCurve:bp,LineCurve3:OS,QuadraticBezierCurve:Tp,QuadraticBezierCurve3:BS,SplineCurve:Ap});class zS extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Hc[s.type]().fromJSON(s))}return this}}class kc extends zS{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new bp(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Tp(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Ep(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s),new Ot(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ap(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,o,r,a,l),this}absellipse(t,e,i,s,o,r,a,l){const c=new Au(t,e,i,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class be extends Mn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new Y,h=new Ot;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ue extends Mn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let _=0;const x=[],m=i/2;let p=0;T(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function T(){const E=new Y,O=new Y;let I=0;const P=(e-t)/i;for(let U=0;U<=o;U++){const tt=[],y=U/o,S=y*(e-t)+t;for(let K=0;K<=s;K++){const k=K/s,J=k*l+a,lt=Math.sin(J),W=Math.cos(J);O.x=S*lt,O.y=-y*i+m,O.z=S*W,u.push(O.x,O.y,O.z),E.set(lt,P,W).normalize(),d.push(E.x,E.y,E.z),f.push(k,1-y),tt.push(_++)}x.push(tt)}for(let U=0;U<s;U++)for(let tt=0;tt<o;tt++){const y=x[tt][U],S=x[tt+1][U],K=x[tt+1][U+1],k=x[tt][U+1];t>0&&(h.push(y,S,k),I+=3),e>0&&(h.push(S,K,k),I+=3)}c.addGroup(p,I,0),p+=I}function M(E){const O=_,I=new Ot,P=new Y;let U=0;const tt=E===!0?t:e,y=E===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),_++;const S=_;for(let K=0;K<=s;K++){const J=K/s*l+a,lt=Math.cos(J),W=Math.sin(J);P.x=tt*W,P.y=m*y,P.z=tt*lt,u.push(P.x,P.y,P.z),d.push(0,y,0),I.x=lt*.5+.5,I.y=W*.5*y+.5,f.push(I.x,I.y),_++}for(let K=0;K<s;K++){const k=O+K,J=S+K;E===!0?h.push(J,J+1,k):h.push(J+1,J,k),U+=3}c.addGroup(p,U,E===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ro extends ue{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ro(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ln extends kc{constructor(t){super(t),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new kc().fromJSON(s))}return this}}const GS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Rp(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,d,f;if(i&&(o=XS(n,t,o,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let _=e;_<s;_+=e)u=n[_],d=n[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return mr(o,r,e,a,l,f,0),r}};function Rp(n,t,e,i,s){let o,r;if(s===n1(n,t,e,i)>0)for(o=t;o<e;o+=i)r=Ed(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=Ed(o,n[o],n[o+1],r);return r&&Xa(r,r.next)&&(_r(r),r=r.next),r}function Ns(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Xa(e,e.next)||ze(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function mr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&KS(n,i,s,o);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,o?kS(n,i,s,o):HS(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),_r(n),n=c.next,a=c.next;continue}if(n=c,n===a){r?r===1?(n=VS(Ns(n),t,e),mr(n,t,e,i,s,o,2)):r===2&&WS(n,t,e,i,s,o):mr(Ns(n),t,e,i,s,o,1);break}}}function HS(n){const t=n.prev,e=n,i=n.next;if(ze(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,l=e.y,c=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,d=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&ao(s,a,o,l,r,c,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function kS(n,t,e,i){const s=n.prev,o=n,r=n.next;if(ze(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,u=o.y,d=r.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Vc(f,_,t,e,i),T=Vc(x,m,t,e,i);let M=n.prevZ,E=n.nextZ;for(;M&&M.z>=p&&E&&E.z<=T;){if(M.x>=f&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==r&&ao(a,h,l,u,c,d,M.x,M.y)&&ze(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=f&&E.x<=x&&E.y>=_&&E.y<=m&&E!==s&&E!==r&&ao(a,h,l,u,c,d,E.x,E.y)&&ze(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==r&&ao(a,h,l,u,c,d,M.x,M.y)&&ze(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=T;){if(E.x>=f&&E.x<=x&&E.y>=_&&E.y<=m&&E!==s&&E!==r&&ao(a,h,l,u,c,d,E.x,E.y)&&ze(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function VS(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Xa(s,o)&&Pp(s,i,i.next,o)&&gr(s,o)&&gr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),_r(i),_r(i.next),i=n=o),i=i.next}while(i!==n);return Ns(i)}function WS(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&QS(r,a)){let l=Cp(r,a);r=Ns(r,r.next),l=Ns(l,l.next),mr(r,t,e,i,s,o,0),mr(l,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function XS(n,t,e,i){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*i,l=o<r-1?t[o+1]*i:n.length,c=Rp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(JS(c));for(s.sort(qS),o=0;o<s.length;o++)e=YS(s[o],e);return e}function qS(n,t){return n.x-t.x}function YS(n,t){const e=$S(n,t);if(!e)return t;const i=Cp(e,n);return Ns(i,i.next),Ns(e,e.next)}function $S(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&ao(r<c?o:i,r,l,c,r<c?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),gr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&jS(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function jS(n,t){return ze(n.prev,n,t.prev)<0&&ze(t.next,n,n.next)<0}function KS(n,t,e,i){let s=n;do s.z===0&&(s.z=Vc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ZS(s)}function ZS(n){let t,e,i,s,o,r,a,l,c=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,c*=2}while(r>1);return n}function Vc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function JS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ao(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function QS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!t1(n,t)&&(gr(n,t)&&gr(t,n)&&e1(n,t)&&(ze(n.prev,n,t.prev)||ze(n,t.prev,t))||Xa(n,t)&&ze(n.prev,n,n.next)>0&&ze(t.prev,t,t.next)>0)}function ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Xa(n,t){return n.x===t.x&&n.y===t.y}function Pp(n,t,e,i){const s=ea(ze(n,t,e)),o=ea(ze(n,t,i)),r=ea(ze(e,i,n)),a=ea(ze(e,i,t));return!!(s!==o&&r!==a||s===0&&ta(n,e,t)||o===0&&ta(n,i,t)||r===0&&ta(e,n,i)||a===0&&ta(e,t,i))}function ta(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ea(n){return n>0?1:n<0?-1:0}function t1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Pp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function gr(n,t){return ze(n.prev,n,n.next)<0?ze(n,t,n.next)>=0&&ze(n,n.prev,t)>=0:ze(n,t,n.prev)<0||ze(n,n.next,t)<0}function e1(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Cp(n,t){const e=new Wc(n.i,n.x,n.y),i=new Wc(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Ed(n,t,e,i){const s=new Wc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function n1(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class go{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return go.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];bd(t),Td(i,t);let r=t.length;e.forEach(bd);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Td(i,e[l]);const a=GS.triangulate(i,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function bd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Td(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class kn extends Mn{constructor(t=new Ln([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Ge(s,3)),this.setAttribute("uv",new Ge(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:i1;let M,E=!1,O,I,P,U;p&&(M=p.getSpacedPoints(h),E=!0,d=!1,O=p.computeFrenetFrames(h,!1),I=new Y,P=new Y,U=new Y),d||(m=0,f=0,_=0,x=0);const tt=a.extractPoints(c);let y=tt.shape;const S=tt.holes;if(!go.isClockWise(y)){y=y.reverse();for(let st=0,g=S.length;st<g;st++){const A=S[st];go.isClockWise(A)&&(S[st]=A.reverse())}}const k=go.triangulateShape(y,S),J=y;for(let st=0,g=S.length;st<g;st++){const A=S[st];y=y.concat(A)}function lt(st,g,A){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(g,A)}const W=y.length,et=k.length;function V(st,g,A){let L,N,D;const q=st.x-g.x,j=st.y-g.y,w=A.x-st.x,v=A.y-st.y,C=q*q+j*j,X=q*v-j*w;if(Math.abs(X)>Number.EPSILON){const z=Math.sqrt(C),H=Math.sqrt(w*w+v*v),ct=g.x-j/z,dt=g.y+q/z,pt=A.x-v/H,Rt=A.y+w/H,ht=((pt-ct)*v-(Rt-dt)*w)/(q*v-j*w);L=ct+q*ht-st.x,N=dt+j*ht-st.y;const xt=L*L+N*N;if(xt<=2)return new Ot(L,N);D=Math.sqrt(xt/2)}else{let z=!1;q>Number.EPSILON?w>Number.EPSILON&&(z=!0):q<-Number.EPSILON?w<-Number.EPSILON&&(z=!0):Math.sign(j)===Math.sign(v)&&(z=!0),z?(L=-j,N=q,D=Math.sqrt(C)):(L=q,N=j,D=Math.sqrt(C/2))}return new Ot(L/D,N/D)}const mt=[];for(let st=0,g=J.length,A=g-1,L=st+1;st<g;st++,A++,L++)A===g&&(A=0),L===g&&(L=0),mt[st]=V(J[st],J[A],J[L]);const yt=[];let _t,It=mt.concat();for(let st=0,g=S.length;st<g;st++){const A=S[st];_t=[];for(let L=0,N=A.length,D=N-1,q=L+1;L<N;L++,D++,q++)D===N&&(D=0),q===N&&(q=0),_t[L]=V(A[L],A[D],A[q]);yt.push(_t),It=It.concat(_t)}for(let st=0;st<m;st++){const g=st/m,A=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let N=0,D=J.length;N<D;N++){const q=lt(J[N],mt[N],L);F(q.x,q.y,-A)}for(let N=0,D=S.length;N<D;N++){const q=S[N];_t=yt[N];for(let j=0,w=q.length;j<w;j++){const v=lt(q[j],_t[j],L);F(v.x,v.y,-A)}}}const Gt=_+x;for(let st=0;st<W;st++){const g=d?lt(y[st],It[st],Gt):y[st];E?(P.copy(O.normals[0]).multiplyScalar(g.x),I.copy(O.binormals[0]).multiplyScalar(g.y),U.copy(M[0]).add(P).add(I),F(U.x,U.y,U.z)):F(g.x,g.y,0)}for(let st=1;st<=h;st++)for(let g=0;g<W;g++){const A=d?lt(y[g],It[g],Gt):y[g];E?(P.copy(O.normals[st]).multiplyScalar(A.x),I.copy(O.binormals[st]).multiplyScalar(A.y),U.copy(M[st]).add(P).add(I),F(U.x,U.y,U.z)):F(A.x,A.y,u/h*st)}for(let st=m-1;st>=0;st--){const g=st/m,A=f*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let N=0,D=J.length;N<D;N++){const q=lt(J[N],mt[N],L);F(q.x,q.y,u+A)}for(let N=0,D=S.length;N<D;N++){const q=S[N];_t=yt[N];for(let j=0,w=q.length;j<w;j++){const v=lt(q[j],_t[j],L);E?F(v.x,v.y+M[h-1].y,M[h-1].x+A):F(v.x,v.y,u+A)}}}ot(),ft();function ot(){const st=s.length/3;if(d){let g=0,A=W*g;for(let L=0;L<et;L++){const N=k[L];at(N[2]+A,N[1]+A,N[0]+A)}g=h+m*2,A=W*g;for(let L=0;L<et;L++){const N=k[L];at(N[0]+A,N[1]+A,N[2]+A)}}else{for(let g=0;g<et;g++){const A=k[g];at(A[2],A[1],A[0])}for(let g=0;g<et;g++){const A=k[g];at(A[0]+W*h,A[1]+W*h,A[2]+W*h)}}i.addGroup(st,s.length/3-st,0)}function ft(){const st=s.length/3;let g=0;vt(J,g),g+=J.length;for(let A=0,L=S.length;A<L;A++){const N=S[A];vt(N,g),g+=N.length}i.addGroup(st,s.length/3-st,1)}function vt(st,g){let A=st.length;for(;--A>=0;){const L=A;let N=A-1;N<0&&(N=st.length-1);for(let D=0,q=h+m*2;D<q;D++){const j=W*D,w=W*(D+1),v=g+L+j,C=g+N+j,X=g+N+w,z=g+L+w;rt(v,C,X,z)}}}function F(st,g,A){l.push(st),l.push(g),l.push(A)}function at(st,g,A){ut(st),ut(g),ut(A);const L=s.length/3,N=T.generateTopUV(i,s,L-3,L-2,L-1);Mt(N[0]),Mt(N[1]),Mt(N[2])}function rt(st,g,A,L){ut(st),ut(g),ut(L),ut(g),ut(A),ut(L);const N=s.length/3,D=T.generateSideWallUV(i,s,N-6,N-3,N-2,N-1);Mt(D[0]),Mt(D[1]),Mt(D[3]),Mt(D[1]),Mt(D[2]),Mt(D[3])}function ut(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Mt(st){o.push(st.x),o.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return s1(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Hc[s.type]().fromJSON(s)),new kn(i,t.options)}}const i1={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new Ot(o,r),new Ot(a,l),new Ot(c,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],x=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new Ot(r,1-l),new Ot(c,1-u),new Ot(d,1-_),new Ot(x,1-p)]:[new Ot(a,1-l),new Ot(h,1-u),new Ot(f,1-_),new Ot(m,1-p)]}};function s1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Tt extends Mn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new Y,d=new Y,f=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const T=[],M=p/i;let E=0;p===0&&r===0?E=.5/e:p===i&&l===Math.PI&&(E=-.5/e);for(let O=0;O<=e;O++){const I=O/e;u.x=-t*Math.cos(s+I*o)*Math.sin(r+M*a),u.y=t*Math.cos(r+M*a),u.z=t*Math.sin(s+I*o)*Math.sin(r+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(I+E,1-M),T.push(c++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<e;T++){const M=h[p][T+1],E=h[p][T],O=h[p+1][T],I=h[p+1][T+1];(p!==0||r>0)&&f.push(M,E,I),(p!==i-1||l<Math.PI)&&f.push(E,O,I)}this.setIndex(f),this.setAttribute("position",new Ge(_,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _o extends Mn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new Y,u=new Y,d=new Y;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const x=_/s*o,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,T=(s+1)*f+_;r.push(x,m,T),r.push(m,p,T)}this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class te extends Po{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=op,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nt extends te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Ta={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class o1{constructor(t,e,i){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const r1=new o1;class Io{constructor(t){this.manager=t!==void 0?t:r1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Io.DEFAULT_MATERIAL_NAME="__DEFAULT";const Di={};class a1 extends Error{constructor(t,e){super(t),this.response=e}}class l1 extends Io{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Ta.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Di[t]!==void 0){Di[t].push({onLoad:e,onProgress:i,onError:s});return}Di[t]=[],Di[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Di[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let x=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:M,value:E})=>{if(M)p.close();else{x+=E.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let I=0,P=h.length;I<P;I++){const U=h[I];U.onProgress&&U.onProgress(O)}p.enqueue(E),T()}},M=>{p.error(M)})}}});return new Response(m)}else throw new a1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Ta.add(t,c);const h=Di[t];delete Di[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Di[t];if(h===void 0)throw this.manager.itemError(t),c;delete Di[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ip extends Io{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ta.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=pr("img");function l(){h(),Ta.add(t,this),e&&e(this),o.manager.itemEnd(t)}function c(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class c1 extends Io{constructor(t){super(t)}load(t,e,i,s){const o=new Eu;o.colorSpace=Zn;const r=new Ip(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(c){r.load(t[c],function(h){o.images[c]=h,a++,a===6&&(o.needsUpdate=!0,e&&e(o))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return o}}class ds extends Io{constructor(t){super(t)}load(t,e,i,s){const o=new yn,r=new Ip(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class Pu extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const zl=new Ne,Ad=new Y,Rd=new Y;class Lp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bu,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ad.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ad),Rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rd),e.updateMatrixWorld(),zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pd=new Ne,ko=new Y,Gl=new Y;class u1 extends Lp{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ko.setFromMatrixPosition(t.matrixWorld),i.position.copy(ko),Gl.copy(i.position),Gl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Gl),i.updateMatrixWorld(),s.makeTranslation(-ko.x,-ko.y,-ko.z),Pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd)}}class Vi extends Pu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new u1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class h1 extends Lp{constructor(){super(new vp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wi extends Pu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new h1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xi extends Pu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cd(){return performance.now()}class d1{constructor(){this.type="ShapePath",this.color=new he,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new kc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,o,r){return this.currentPath.bezierCurveTo(t,e,i,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const T=[];for(let M=0,E=p.length;M<E;M++){const O=p[M],I=new Ln;I.curves=O.curves,T.push(I)}return T}function i(p,T){const M=T.length;let E=!1;for(let O=M-1,I=0;I<M;O=I++){let P=T[O],U=T[I],tt=U.x-P.x,y=U.y-P.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(P=T[I],tt=-tt,U=T[O],y=-y),p.y<P.y||p.y>U.y)continue;if(p.y===P.y){if(p.x===P.x)return!0}else{const S=y*(p.x-P.x)-tt*(p.y-P.y);if(S===0)return!0;if(S<0)continue;E=!E}}else{if(p.y!==P.y)continue;if(U.x<=p.x&&p.x<=P.x||P.x<=p.x&&p.x<=U.x)return!0}}return E}const s=go.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,l;const c=[];if(o.length===1)return a=o[0],l=new Ln,l.curves=a.curves,c.push(l),c;let h=!s(o[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,x;d[_]=void 0,f[_]=[];for(let p=0,T=o.length;p<T;p++)a=o[p],x=a.getPoints(),r=s(x),r=t?!r:r,r?(!h&&d[_]&&_++,d[_]={s:new Ln,p:x},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:x[0]});if(!d[0])return e(o);if(d.length>1){let p=!1,T=0;for(let M=0,E=d.length;M<E;M++)u[M]=[];for(let M=0,E=d.length;M<E;M++){const O=f[M];for(let I=0;I<O.length;I++){const P=O[I];let U=!0;for(let tt=0;tt<d.length;tt++)i(P.p,d[tt].p)&&(M!==tt&&T++,U?(U=!1,u[tt].push(P)):p=!0);U&&u[M].push(P)}}T>0&&p===!1&&(f=u)}let m;for(let p=0,T=d.length;p<T;p++){l=d[p].s,c.push(l),m=f[p];for(let M=0,E=m.length;M<E;M++)l.holes.push(m[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);class qi extends Io{constructor(t){super(t)}load(t,e,i,s){const o=this,r=new l1(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const l=o.parse(JSON.parse(a));e&&e(l)},i,s)}parse(t){return new f1(t)}}class f1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],s=p1(t,e,this.data);for(let o=0,r=s.length;o<r;o++)i.push(...s[o].toShapes());return i}}function p1(n,t,e){const i=Array.from(n),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=o;else{const u=m1(h,s,a,l,e);a+=u.offsetX,r.push(u.path)}}return r}function m1(n,t,e,i,s){const o=s.glyphs[n]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const r=new d1;let a,l,c,h,u,d,f,_;if(o.o){const x=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let m=0,p=x.length;m<p;)switch(x[m++]){case"m":a=x[m++]*t+e,l=x[m++]*t+i,r.moveTo(a,l);break;case"l":a=x[m++]*t+e,l=x[m++]*t+i,r.lineTo(a,l);break;case"q":c=x[m++]*t+e,h=x[m++]*t+i,u=x[m++]*t+e,d=x[m++]*t+i,r.quadraticCurveTo(u,d,c,h);break;case"b":c=x[m++]*t+e,h=x[m++]*t+i,u=x[m++]*t+e,d=x[m++]*t+i,f=x[m++]*t+e,_=x[m++]*t+i,r.bezierCurveTo(u,d,f,_,c,h);break}}return{offsetX:o.ha*t,path:r}}class ke extends kn{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const s=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const g1=Wn({__name:"HalfBlueBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);return li(()=>{if(e.value){let i=function(){requestAnimationFrame(i),xt&&(M.rotation.y+=.03),r.render(s,o)};const s=new ai,o=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),r=new ri({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=Yf,r.toneMappingExposure=1.25,e.value.appendChild(r.domElement);const a=new Xi(16777215,.6);s.add(a);const l=new Wi(16777215,1.2);l.position.set(5,5,5),s.add(l);const c=new Vi(16777215,2,50);c.position.set(0,2,4),s.add(c);const h=new Dn({uniforms:{time:{value:0},color1:{value:new he(16766720)},color2:{value:new he(16007990)}},vertexShader:`
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
        `}),u=new Nt({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.99}),d=new Nt({color:52945,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.35});new Nt({color:13882323,metalness:.7,roughness:.25,clearcoat:.4,clearcoatRoughness:.1,transparent:!1,opacity:1}),new Nt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,transparent:!0,opacity:.35});const f=new Nt({color:16738740,metalness:.2,roughness:.5,clearcoat:.1,clearcoatRoughness:.8,transparent:!0,opacity:.79}),_=new Nt({color:13369344,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),x=new Nt({color:16738740,metalness:.2,roughness:.6,clearcoat:.1,clearcoatRoughness:.8,transparent:!1,opacity:.99,depthWrite:!0,depthTest:!0}),m=`
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
    `,T=new Dn({uniforms:{time:{value:0},opacity:{value:1}},vertexShader:m,fragmentShader:p,transparent:!1,depthWrite:!0}),M=new $t,E=new Tt(1,32,32,0,Math.PI),O=new R(E,d),I=new R(E,u);O.scale.set(.85,.85,.8),I.scale.set(.85,.85,.8),O.position.y=-.2,I.position.y=-.2,O.rotation.y=Math.PI/2,I.rotation.y=Math.PI*1.5;const P=new be(1,32),U=new R(P,u);U.scale.set(.85,.85,.8),U.position.set(0,-.2,0),U.rotation.y=Math.PI/2;const tt=new $t;tt.add(O),tt.add(I),tt.add(U),M.add(tt);const y=new Tt(.6,32,32,0,Math.PI),S=new R(y,u);S.scale.set(1,.95,.95),S.position.set(0,1,0),S.rotation.y=Math.PI*1.5;const K=new R(y,d);K.scale.set(1,.95,.95),K.position.set(0,1,0),K.rotation.y=Math.PI/2;const k=new be(.6,32),J=new R(k,u);J.position.set(0,1,0),J.rotation.y=Math.PI/2,J.scale.set(1,.95,.95);const lt=new $t;lt.add(S),lt.add(K),lt.add(J),M.add(lt);const W=new Tt(.25,32,32),et=new R(W,u);et.position.set(-.45,1.35,-.1),M.add(et);const V=new R(W,d);V.position.set(.45,1.35,-.1),M.add(V);const mt=new Tt(.25,32,32,Math.PI/2,Math.PI),yt=new R(mt,u);yt.scale.set(1.1,.6,.8),yt.position.set(0,.84,.5),yt.rotation.y=Math.PI;const _t=new Tt(.25,32,32,Math.PI/2,Math.PI),It=new R(_t,d);It.scale.set(1.1,.6,.8),It.position.set(0,.84,.5),It.rotation.y=0;const Gt=new be(.25,32),ot=new R(Gt,u);ot.scale.set(.8,.6,.8),ot.position.set(0,.84,.5),ot.rotation.y=Math.PI/2;const ft=new $t;ft.add(yt),ft.add(It),ft.add(ot),M.add(ft);const vt=new Ln;vt.moveTo(0,0),vt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),vt.bezierCurveTo(-.6,.3,0,.6,0,1),vt.bezierCurveTo(0,.6,.6,.3,.6,0),vt.bezierCurveTo(.6,-.3,0,-.3,0,0);const F={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Nt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const at=new kn(vt,F);new Gn({color:0});const rt=new R(at,f);rt.scale.set(.1,.1,.1),rt.rotation.z=ie.degToRad(210),rt.rotation.x=ie.degToRad(5),rt.rotation.y=ie.degToRad(-45),rt.position.set(-.4,.9,.45);const ut=new R(at,T);ut.scale.set(.5,.5,.5),ut.position.set(.35,0,0),ut.rotation.y=Math.PI,ut.rotation.x=Math.PI,M.add(ut);const Mt=new R(at,h);Mt.scale.set(.35,.35,.35),Mt.position.set(.3,0,0),Mt.rotation.y=Math.PI,Mt.rotation.x=Math.PI;const st=new R(at,x);st.scale.set(.25,.25,.25),st.position.set(.27,.2,0),st.rotation.y=Math.PI,st.rotation.x=Math.PI;const g=new R(at,_);g.scale.set(.3,.3,.3),g.position.set(.23,-.5,.3),g.rotation.y=Math.PI,g.rotation.x=Math.PI;const A=new R(at,T);A.scale.set(.4,.4,.4),A.position.set(.27,0,.35),A.rotation.y=Math.PI,A.rotation.x=Math.PI;const L=new Tt(.35,32,32),N=new R(L,u);N.scale.set(.75,1.25,.65),N.position.set(-.7,-.15,.2),M.add(N);const D=new R(L,d);D.scale.set(.75,1.25,.65),D.position.set(.7,-.15,.2),M.add(D);const q=new ue(.2,.22,.6,32),j=new R(q,u);j.position.set(-.4,-1.05,0),M.add(j);const w=new R(q,d);w.position.set(.4,-1.05,0),M.add(w);const v=new Tt(.3,32,32),C=new R(v,u);C.scale.set(1,.72,1.5),C.position.set(-.4,-1.45,.17),M.add(C);const X=new R(v,d);X.scale.set(1,.72,1.5),X.position.set(.4,-1.45,.17),M.add(X);const z=new Tt(.44,32,32),H=new R(z,u);H.position.set(-.15,-.45,-.4),M.add(H);const ct=new R(z,d);ct.position.set(.15,-.45,-.4),M.add(ct);const dt=new Tt(.18,32,32),pt=new R(dt,f);pt.position.set(0,-.35,-.8),M.add(pt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Et){const Wt=new ke("X",{font:Et,size:.18,depth:.05}),Dt=new Gn({color:0}),Vt=new R(Wt,Dt);Vt.position.set(-.3,.99,.53),Vt.rotation.x=ie.degToRad(-5),Vt.rotation.y=ie.degToRad(-15),M.add(Vt);const B=new ke("+",{font:Et,size:.25,depth:.1}),gt=new Gn({color:0}),it=new R(B,gt);it.position.set(.14,.99,.53),it.rotation.y=ie.degToRad(12),it.rotation.x=ie.degToRad(-5),M.add(it)}),pt.renderOrder=1,M.scale.set(1.2,1.2,1.2),s.add(M),M.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),o.position.set(t.bodyPosition.x,1,t.cameraPosition),o.lookAt(t.bodyPosition.x,0,0),o.position.z=4;const ht={x:0,y:0};let xt=!0,Ct=null;const Lt=Et=>{xt=!1,ht.x=Et.clientX/window.innerWidth*2-1,ht.y=-(Et.clientY/window.innerHeight)*2+1;const Wt=ht.x*Math.PI*.2,Dt=ht.y*Math.PI*.2;M.rotation.y=Wt,M.rotation.x=Dt,clearTimeout(Ct),Ct=setTimeout(()=>{xt=!0},500)};window.addEventListener("mousemove",Lt),h.uniforms.time.value+=.04,i(),Ve(()=>t.bodyPosition,Et=>{M.position.set(Et.x,Et.y,Et.z)}),Ve(()=>t.cameraPosition,Et=>{o.position.set(t.bodyPosition.x,1,Et),o.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})}}),(i,s)=>(Mi(),wi("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2))}}),_1=Si(g1,[["__scopeId","data-v-5bf83852"]]),v1=Wn({__name:"MetalBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=null,s=Zt(!1),o=Zt(!1),r=Zt(!1);return li(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ai,c=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),h=new ri({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new $t,d=new Xi(16777215,2);l.add(d);const f=new Wi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new Vi(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new ds,m=x.load("/3d-bear-arts/assets/lv2.jpg"),p=x.load("/3d-bear-arts/assets/lv2.jpg");m.wrapS=m.wrapT=Ke,p.wrapS=p.wrapT=Ke;const T=new Nt({color:8343336,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),M=new Nt({color:5978654,metalness:0,roughness:.8,bumpMap:m,bumpScale:.1,clearcoat:.2,clearcoatRoughness:.9,map:p,envMapIntensity:.7}),E=new Nt({color:13152668,metalness:.2,roughness:.05,bumpMap:m,bumpScale:.05,clearcoat:1,clearcoatRoughness:.05,map:p,transparent:!0,opacity:.4,transmission:.9,envMapIntensity:1,reflectivity:.9,ior:1.45,side:pe});new Nt({color:13421772,metalness:1,roughness:.5,clearcoat:.3,clearcoatRoughness:.3});const O=new Tt(1,32,32,0,Math.PI),I=new R(O,E),P=new R(O,T);I.scale.set(.85,.85,.8),P.scale.set(.85,.85,.8),I.position.y=-.2,P.position.y=-.2,I.rotation.y=Math.PI/2,P.rotation.y=Math.PI*1.5;const U=new be(1,32),tt=new R(U,T);tt.scale.set(.85,.85,.8),tt.position.set(0,-.2,0),tt.rotation.y=Math.PI/2;const y=new $t;y.add(I),y.add(P),y.add(tt),u.add(y);const S=new Tt(.6,32,32,0,Math.PI),K=new R(S,T);K.scale.set(1,.95,.95),K.position.set(0,1,0),K.rotation.y=Math.PI*1.5;const k=new R(S,E);k.scale.set(1,.95,.95),k.position.set(0,1,0),k.rotation.y=Math.PI/2;const J=new be(.6,32),lt=new R(J,T);lt.position.set(0,1,0),lt.rotation.y=Math.PI/2,lt.scale.set(1,.95,.95);const W=new $t;W.add(K),W.add(k),W.add(lt),u.add(W);const et=new Tt(.25,32,32),V=new R(et,T);V.position.set(-.45,1.35,-.1),u.add(V);const mt=new R(et,E);mt.position.set(.45,1.35,-.1),u.add(mt);const yt=new Tt(.25,32,32,Math.PI/2,Math.PI),_t=new R(yt,M);_t.scale.set(1.1,.6,.8),_t.position.set(0,.84,.5),_t.rotation.y=Math.PI;const It=new Tt(.25,32,32,Math.PI/2,Math.PI),Gt=new R(It,E);Gt.scale.set(1.1,.6,.8),Gt.position.set(0,.84,.5),Gt.rotation.y=0;const ot=new be(.25,32),ft=new R(ot,T);ft.scale.set(.8,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI/2;const vt=new $t;vt.add(_t),vt.add(Gt),vt.add(ft),u.add(vt);const F=new Ln;F.moveTo(0,0),F.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),F.bezierCurveTo(-.6,.3,0,.6,0,1),F.bezierCurveTo(0,.6,.6,.3,.6,0),F.bezierCurveTo(.6,-.3,0,-.3,0,0);const at={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1};new Nt({color:16777215,metalness:0,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.85,reflectivity:1,envMapIntensity:1});const rt=new kn(F,at),ut=new R(rt,T);ut.scale.set(.1,.1,.1),ut.rotation.z=ie.degToRad(210),ut.rotation.x=ie.degToRad(5),ut.rotation.y=ie.degToRad(-45),ut.position.set(-.4,.9,.45);const Mt=new R(rt,M);Mt.scale.set(.6,.5,.5),Mt.position.set(.35,0,0),Mt.rotation.y=Math.PI,Mt.rotation.x=Math.PI;const st=new R(rt,M);st.scale.set(.2,.2,.2),st.position.set(.5,-.1,.2),st.rotation.y=Math.PI,st.rotation.x=Math.PI,u.add(st);const g=new ni(1.3,1.2,.6),A=new R(g,T);A.scale.set(.45,.45,.45),A.position.set(.35,-.2,.1),A.rotation.y=Math.PI;const L=new _o(.15,.025,10,100);new Nt({color:8343336,metalness:.3,roughness:.4,clearcoat:.5});const N=new R(L,T);N.position.set(.35,.1,.1),N.rotation.z=Math.PI/2,N.rotation.x=Math.PI/8,N.rotation.y=Math.PI/14;const D=new R(L,T);D.position.set(.35,.1,.13),D.rotation.z=Math.PI/2,D.rotation.x=Math.PI/-8,D.rotation.y=Math.PI/12;const q=new $t;q.add(A),q.add(N),q.add(D),u.add(q);const j=new Tt(.35,32,32),w=new R(j,T);w.scale.set(.75,1.25,.65),w.position.set(-.7,-.15,.2),u.add(w);const v=new R(j,E);v.scale.set(.75,1.25,.65),v.position.set(.7,-.15,.2),u.add(v);const C=new ue(.2,.22,.6,32),X=new R(C,T);X.position.set(-.4,-1.05,0),u.add(X);const z=new R(C,E);z.position.set(.4,-1.05,0),u.add(z);const H=new Tt(.3,32,32),ct=new R(H,T);ct.scale.set(1,.72,1.5),ct.position.set(-.4,-1.45,.17),u.add(ct);const dt=new R(H,E);dt.scale.set(1,.72,1.5),dt.position.set(.4,-1.45,.17),u.add(dt);const pt=new Tt(.44,32,32),Rt=new R(pt,T);Rt.position.set(-.15,-.45,-.4),u.add(Rt);const ht=new R(pt,E);ht.position.set(.15,-.45,-.4),u.add(ht);const xt=new Tt(.18,32,32),Ct=new R(xt,T);Ct.position.set(0,-.35,-.8),u.add(Ct),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const wt=new ke("X",{font:Q,size:.2,depth:.05});new Gn({color:0});const St=new R(wt,M);St.position.set(-.3,.99,.53),St.rotation.x=ie.degToRad(-5),St.rotation.y=ie.degToRad(-15),u.add(St);const Ht=new ke("O",{font:Q,size:.2,depth:.05});new Gn({color:0});const Kt=new R(Ht,M);Kt.position.set(.14,.99,.53),Kt.rotation.y=ie.degToRad(12),Kt.rotation.x=ie.degToRad(-5),u.add(Kt)}),Ct.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Et=()=>{u.rotation.y,u.rotation.x},Wt=()=>{s.value=!0,o.value=!1,r.value=!1},Dt=()=>{s.value=!1,o.value=!0,r.value=!1},Vt=()=>{s.value=!1,o.value=!1,Et()},B=Q=>{const wt=window.innerWidth/2;Q>wt?Wt():Dt(),Et()},gt=Q=>{clearTimeout(i),Vt(),r.value=!0;const wt={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1};if(r.value){const St=wt.x*Math.PI*.2,Ht=wt.y*Math.PI*.2;u.rotation.y=St,u.rotation.x=Ht}i=setTimeout(()=>{r.value=!1,B(Q.clientX)},500)};window.addEventListener("mousemove",gt);const it=Q=>{if(r.value){const wt={x:Q.clientX/window.innerWidth*2-1,y:-(Q.clientY/window.innerHeight)*2+1},St=wt.x*Math.PI*.2,Ht=wt.y*Math.PI*.2;u.rotation.y=St,u.rotation.x=Ht}};window.addEventListener("mousemove",it),a(),Ve(()=>t.bodyPosition,Q=>{u.position.set(Q.x,Q.y,Q.z)}),Ve(()=>t.cameraPosition,Q=>{c.position.set(t.bodyPosition.x,1,Q),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Mi(),wi("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2))}}),x1=Si(v1,[["__scopeId","data-v-f3beb116"]]),y1=Wn({__name:"PopartBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=null,s=Zt(!1),o=Zt(!1),r=Zt(!1);return li(()=>{if(e.value){let a=function(){requestAnimationFrame(a),s.value?u.rotation.y+=.03:o.value&&(u.rotation.y-=.03),h.render(l,c)};const l=new ai,c=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),h=new ri({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(h.domElement);const u=new $t,d=new Xi(16777215,2);l.add(d);const f=new Wi(16777215,4);f.position.set(5,5,5),l.add(f);const _=new Vi(16777215,5,50);_.position.set(0,2,4),l.add(_);const x=new ds,m=x.load("/3d-bear-arts/assets/pop6.jpg"),p=x.load("/3d-bear-arts/assets/pop7.jpg");m.wrapS=m.wrapT=Ke,p.wrapS=p.wrapT=Ke;const T=new Nt({color:16738740,map:p,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),M=new Nt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:pe}),E=new Nt({color:16766720,map:m,metalness:.3,roughness:.5}),O=new Nt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:pe}),I=new Nt({color:9055202,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Nt({color:9055202,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:pe});const P=new Nt({color:65535,map:m,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),U=new Nt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:pe}),tt=new Tt(1,32,32,0,Math.PI),y=new R(tt,M),S=new R(tt,T);y.scale.set(.85,.85,.8),S.scale.set(.85,.85,.8),y.position.y=-.2,S.position.y=-.2,y.rotation.y=Math.PI/2,S.rotation.y=Math.PI*1.5;const K=new be(1,32),k=new R(K,T);k.scale.set(.85,.85,.8),k.position.set(0,-.2,0),k.rotation.y=Math.PI/2;const J=new $t;J.add(y),J.add(S),J.add(k),u.add(J);const lt=new Tt(.6,32,32,0,Math.PI),W=new R(lt,E);W.scale.set(1,.95,.95),W.position.set(0,1,0),W.rotation.y=Math.PI*1.5;const et=new R(lt,O);et.scale.set(1,.95,.95),et.position.set(0,1,0),et.rotation.y=Math.PI/2;const V=new be(.6,32),mt=new R(V,E);mt.position.set(0,1,0),mt.rotation.y=Math.PI/2,mt.scale.set(1,.95,.95);const yt=new $t;yt.add(W),yt.add(et),yt.add(mt),u.add(yt);const _t=new Tt(.25,32,32),It=new R(_t,T);It.position.set(-.45,1.35,-.1),u.add(It);const Gt=new R(_t,M);Gt.position.set(.45,1.35,-.1),u.add(Gt);const ot=new Tt(.25,32,32,Math.PI/2,Math.PI),ft=new R(ot,E);ft.scale.set(1.1,.6,.8),ft.position.set(0,.84,.5),ft.rotation.y=Math.PI;const vt=new Tt(.25,32,32,Math.PI/2,Math.PI),F=new R(vt,O);F.scale.set(1.1,.6,.8),F.position.set(0,.84,.5),F.rotation.y=0;const at=new be(.25,32),rt=new R(at,E);rt.scale.set(.8,.6,.8),rt.position.set(0,.84,.5),rt.rotation.y=Math.PI/2;const ut=new $t;ut.add(ft),ut.add(F),ut.add(rt),u.add(ut);const Mt=new Ln;Mt.moveTo(0,0),Mt.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),Mt.bezierCurveTo(-.6,.3,0,.6,0,1),Mt.bezierCurveTo(0,.6,.6,.3,.6,0),Mt.bezierCurveTo(.6,-.3,0,-.3,0,0);const st={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},g=new kn(Mt,st),A=new R(g,E);A.scale.set(.5,.5,.5),A.position.set(.35,0,0),A.rotation.y=Math.PI,A.rotation.x=Math.PI,u.add(A);const L=new R(g,P);L.scale.set(.2,.2,.25),L.position.set(.5,-.3,.4),L.rotation.y=Math.PI,L.rotation.x=Math.PI,u.add(L);const N=new R(g,T);N.scale.set(.25,.25,.27),N.position.set(.4,.3,-.2),N.rotation.y=Math.PI,N.rotation.x=Math.PI,u.add(N);const D=new Tt(.35,32,32),q=new R(D,P);q.scale.set(.75,1.25,.65),q.position.set(-.7,-.15,.2),u.add(q);const j=new R(D,U);j.scale.set(.75,1.25,.65),j.position.set(.7,-.15,.2),u.add(j);const w=new ue(.2,.22,.6,32),v=new R(w,E);v.position.set(-.4,-1.05,0),u.add(v);const C=new R(w,O);C.position.set(.4,-1.05,0),u.add(C);const X=new Tt(.3,32,32),z=new R(X,E);z.scale.set(1,.72,1.5),z.position.set(-.4,-1.45,.17),u.add(z);const H=new R(X,O);H.scale.set(1,.72,1.5),H.position.set(.4,-1.45,.17),u.add(H);const ct=new Tt(.44,32,32),dt=new R(ct,T);dt.position.set(-.15,-.45,-.4),u.add(dt);const pt=new R(ct,M);pt.position.set(.15,-.45,-.4),u.add(pt);const Rt=new Tt(.18,32,32),ht=new R(Rt,T);ht.position.set(0,-.35,-.8),u.add(ht),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(gt){const it=new ke("X",{font:gt,size:.2,depth:.05});new Gn({color:0});const Q=new R(it,T);Q.position.set(-.3,.99,.53),Q.rotation.x=ie.degToRad(-5),Q.rotation.y=ie.degToRad(-15),u.add(Q);const wt=new ke("O",{font:gt,size:.2,depth:.05});new Gn({color:0});const St=new R(wt,P);St.position.set(.14,.99,.53),St.rotation.y=ie.degToRad(12),St.rotation.x=ie.degToRad(-5),u.add(St);const Ht=new ke("POP",{font:gt,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5}),Kt=new Nt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const Qt=new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),Jt=new Nt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ee=new R(Ht,Kt);ee.scale.set(.15,.15,.15),ee.position.set(.03,1.16,.1),ee.rotateZ(-25),u.add(ee);const ce=new R(Ht,I);ce.scale.set(.14,.14,.14),ce.rotateZ(45),ce.position.set(.2,-.7,.3),u.add(ce);const me=new R(Ht,Qt);me.scale.set(.14,.14,.14),me.rotateZ(45),me.rotateY(45),me.position.set(.3,.7,.3),u.add(me);const ve=new R(Ht,Qt);ve.scale.set(.15,.15,.15),ve.rotateZ(45),ve.rotateY(45),ve.position.set(.35,-1.5,.3),u.add(ve);const fe=new R(Ht,Jt);fe.scale.set(.17,.17,.17),fe.rotateZ(45),fe.rotateY(15),fe.position.set(.35,1,.3),u.add(fe)}),ht.renderOrder=1,u.scale.set(1.35,1.35,1.35),l.add(u),u.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),c.position.set(t.bodyPosition.x,1,t.cameraPosition),c.lookAt(t.bodyPosition.x,0,0),c.position.z=4;const Ct=()=>{u.rotation.y,u.rotation.x},Lt=()=>{s.value=!0,o.value=!1,r.value=!1},Et=()=>{s.value=!1,o.value=!0,r.value=!1},Wt=()=>{s.value=!1,o.value=!1,Ct()},Dt=gt=>{const it=window.innerWidth/2;gt>it?Lt():Et(),Ct()},Vt=gt=>{clearTimeout(i),Wt(),r.value=!0;const it={x:gt.clientX/window.innerWidth*2-1,y:-(gt.clientY/window.innerHeight)*2+1};if(r.value){const Q=it.x*Math.PI*.2,wt=it.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=wt}i=setTimeout(()=>{r.value=!1,Dt(gt.clientX)},500)};window.addEventListener("mousemove",Vt);const B=gt=>{if(r.value){const it={x:gt.clientX/window.innerWidth*2-1,y:-(gt.clientY/window.innerHeight)*2+1},Q=it.x*Math.PI*.2,wt=it.y*Math.PI*.2;u.rotation.y=Q,u.rotation.x=wt}};window.addEventListener("mousemove",B),a(),Ve(()=>t.bodyPosition,gt=>{u.position.set(gt.x,gt.y,gt.z)}),Ve(()=>t.cameraPosition,gt=>{c.position.set(t.bodyPosition.x,1,gt),c.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}}),(a,l)=>(Mi(),wi("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2))}}),M1=Si(y1,[["__scopeId","data-v-8cfea564"]]),w1={class:"pixel-controls"},S1={class:"side-buttons"},E1=Wn({__name:"PopArtBear3",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);li(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03);const Q=gt.getElapsedTime();B.forEach((wt,St)=>{const Ht=.2+Math.sin(Q*3+it[St])*.1;wt.scale.set(Ht,Ht,Ht)}),x.render(f,_)};const f=new ai,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),x=new ri({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new $t,p=new $t;f.add(p);const T=new Xi(16777215,2);f.add(T);const M=new Wi(16777215,4);M.position.set(5,5,5),f.add(M);const E=new Vi(16777215,5,50);E.position.set(0,2,4),f.add(E);const O=new ds,I=O.load("/3d-bear-arts/assets/pop6.jpg"),P=O.load("/3d-bear-arts/assets/pop7.jpg");I.wrapS=I.wrapT=Ke,P.wrapS=P.wrapT=Ke,P.repeat.set(2,2);const U=new Nt({color:16738740,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),tt=new Nt({color:16766720,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:pe}),y=new Nt({color:16766720,map:I,metalness:.3,roughness:.5}),S=new Nt({color:16738740,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.5,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:pe}),K=new Nt({color:9055202,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Nt({color:65535,map:I,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Nt({color:65535,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.4,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:pe}),lt=new Tt(1,32,32,0,Math.PI),W=new R(lt,tt),et=new R(lt,U);W.scale.set(.85,.85,.8),et.scale.set(.85,.85,.8),W.position.y=-.2,et.position.y=-.2,W.rotation.y=Math.PI/2,et.rotation.y=Math.PI*1.5;const V=new be(1,32),mt=new R(V,U);mt.scale.set(.85,.85,.8),mt.position.set(0,-.2,0),mt.rotation.y=Math.PI/2;const yt=new $t;yt.add(W),yt.add(et),yt.add(mt),m.add(yt);const _t=new Tt(.6,32,32,0,Math.PI),It=new R(_t,y);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI*1.5;const Gt=new R(_t,S);Gt.scale.set(1,.95,.95),Gt.position.set(0,1,0),Gt.rotation.y=Math.PI/2;const ot=new be(.6,32),ft=new R(ot,y);ft.position.set(0,1,0),ft.rotation.y=Math.PI/2,ft.scale.set(1,.95,.95);const vt=new $t;vt.add(It),vt.add(Gt),vt.add(ft),m.add(vt);const F=new Tt(.25,32,32),at=new R(F,U);at.position.set(-.45,1.35,-.1),m.add(at);const rt=new R(F,tt);rt.position.set(.45,1.35,-.1),m.add(rt);const ut=new Tt(.25,32,32,Math.PI/2,Math.PI),Mt=new R(ut,y);Mt.scale.set(1.1,.6,.8),Mt.position.set(0,.84,.5),Mt.rotation.y=Math.PI;const st=new Tt(.25,32,32,Math.PI/2,Math.PI),g=new R(st,S);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=0;const A=new be(.25,32),L=new R(A,y);L.scale.set(.8,.6,.8),L.position.set(0,.84,.5),L.rotation.y=Math.PI/2;const N=new $t;N.add(Mt),N.add(g),N.add(L),m.add(N);const D=new Ln;D.moveTo(0,0),D.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),D.bezierCurveTo(-.6,.3,0,.6,0,1),D.bezierCurveTo(0,.6,.6,.3,.6,0),D.bezierCurveTo(.6,-.3,0,-.3,0,0);const q={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},j=new kn(D,q),w=new R(j,y);w.scale.set(.5,.5,.5),w.position.set(.3,0,0),w.rotation.y=Math.PI,w.rotation.x=Math.PI,m.add(w);const v=new R(j,k);v.scale.set(.2,.2,.25),v.position.set(.35,-.3,.4),v.rotation.y=Math.PI,v.rotation.x=Math.PI,m.add(v);const C=new R(j,U);C.scale.set(.25,.25,.27),C.position.set(.38,.3,-.2),C.rotation.y=Math.PI,C.rotation.x=Math.PI,m.add(C);const X=new Tt(.35,32,32),z=new R(X,k);z.scale.set(.75,1.25,.65),z.position.set(-.7,-.15,.2),m.add(z);const H=new R(X,J);H.scale.set(.75,1.25,.65),H.position.set(.7,-.15,.2),m.add(H);const ct=new ue(.2,.22,.6,32),dt=new R(ct,y);dt.position.set(-.4,-1.05,0),m.add(dt);const pt=new R(ct,S);pt.position.set(.4,-1.05,0),m.add(pt);const Rt=new Tt(.3,32,32),ht=new R(Rt,y);ht.scale.set(1,.72,1.5),ht.position.set(-.4,-1.45,.17),m.add(ht);const xt=new R(Rt,S);xt.scale.set(1,.72,1.5),xt.position.set(.4,-1.45,.17),m.add(xt);const Ct=new Tt(.44,32,32),Lt=new R(Ct,U);Lt.position.set(-.15,-.45,-.4),m.add(Lt);const Et=new R(Ct,tt);Et.position.set(.15,-.45,-.4),m.add(Et);const Wt=new Tt(.18,32,32),Dt=new R(Wt,U);Dt.position.set(0,-.35,-.8),m.add(Dt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Q){const wt=new ke("X",{font:Q,size:.2,depth:.05}),St=new R(wt,U);St.position.set(-.3,.99,.53),St.rotation.x=ie.degToRad(-5),St.rotation.y=ie.degToRad(-15),m.add(St);const Ht=new ke("O",{font:Q,size:.2,depth:.05}),Kt=new R(Ht,k);Kt.position.set(.14,.99,.53),Kt.rotation.y=ie.degToRad(12),Kt.rotation.x=ie.degToRad(-5),m.add(Kt);const Qt=new ke("POP",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});new ke("🐻",{font:Q,size:1,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:5});const Jt=new ke("BAO      BEAR",{font:Q,size:2,height:.5,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),ee=new Nt({color:16716947,metalness:.3,roughness:.6,clearcoat:.2});new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2});const ce=new Nt({color:16766720,metalness:.3,roughness:.6,clearcoat:.2}),me=new Nt({color:16753920,metalness:.3,roughness:.6,clearcoat:.2}),ve=new R(Qt,ee);ve.scale.set(.15,.15,.15),ve.position.set(.02,1.16,.1),ve.rotateZ(-25),m.add(ve);const fe=new R(Qt,K);fe.scale.set(.14,.14,.14),fe.rotateZ(45),fe.position.set(.2,-.7,.3),m.add(fe);const Te=new R(Qt,ce);Te.scale.set(.14,.14,.14),Te.rotateZ(45),Te.rotateY(45),Te.position.set(.3,.7,.3),m.add(Te);const ge=new R(Qt,ce);ge.scale.set(.15,.15,.15),ge.rotateZ(45),ge.rotateY(45),ge.position.set(.35,-1.5,.3),m.add(ge);const He=new R(Qt,me);He.scale.set(.17,.17,.17),He.rotateZ(45),He.rotateY(15),He.position.set(.35,1,.3),m.add(He);const Re=new R(Jt,ee);Re.scale.set(.7,.7,.7),Re.position.set(-6,0,-3),p.add(Re)}),Dt.renderOrder=1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4,m.rotation.x=.1;const B=[w,v,C],gt=new Dp,it=[0,Math.PI/2,Math.PI,0,Math.PI/3];d(),Ve(()=>t.bodyPosition,Q=>{m.position.set(Q.x,Q.y,Q.z)}),Ve(()=>t.cameraPosition,Q=>{_.position.set(t.bodyPosition.x,1,Q),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(Mi(),wi(xn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),qt("div",w1,[qt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),qt("div",S1,[qt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),b1=Si(E1,[["__scopeId","data-v-cb52c927"]]),T1={class:"pixel-controls"},A1={class:"side-buttons"},R1=Wn({__name:"MetalMachineBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);li(()=>{if(e.value){let d=function(ce,me){const ve=new ue(Vt,Vt,B,32);ve.rotateX(Math.PI/2);const fe=new R(ve,ce),Te=new $t;for(let He=0;He<gt;He++){const Re=He/gt*Math.PI*2,je=new ni(it,Q,wt),We=new R(je,ce);We.position.set((Vt+wt/26)*Math.cos(Re),(Vt+wt/26)*Math.sin(Re),0),We.rotation.z=Re,Te.add(We)}const ge=new $t;return ge.add(fe),ge.add(Te),ge.position.set(me.x,me.y,me.z),ge},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),St.rotation.z-=.02,Ht.rotation.z+=.03,Kt.rotation.z+=.02,Qt.rotation.z+=.02,Jt.rotation.z-=.03,ee.rotation.y+=.04,m.render(_,x)};const _=new ai,x=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),m=new ri({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new $t,T=new $t;_.add(T);const M=new Xi(16777215,2);_.add(M);const E=new Wi(16777215,4);E.position.set(5,5,5),_.add(E);const O=new Vi(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new ds,P=I.load("/3d-bear-arts/assets/metal.jpg"),U=I.load("/3d-bear-arts/assets/pop7.jpg"),tt=I.load("/3d-bear-arts/assets/gear.jpg");P.wrapS=P.wrapT=Ke,U.wrapS=U.wrapT=Ke,U.repeat.set(2,2);const y=new Nt({color:13882323,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:P});tt.mapping=Ma;const S=new Nt({color:"#d3d3d3",metalness:1,roughness:.25,map:P,envMap:tt,clearcoat:.7,clearcoatRoughness:.3}),K=new Nt({color:"#C0C0C0",metalness:1,roughness:.25,envMap:tt,clearcoat:.7,clearcoatRoughness:.3}),k=new Nt({color:"#C0C0C0",metalness:1,roughness:.25,map:P,envMap:tt,transparent:!0,opacity:.8,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),J=new Nt({color:"#C0C0C0",metalness:1,roughness:.5,map:P,envMap:tt,transparent:!0,opacity:.23,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45}),lt=new Nt({color:13882323,metalness:1,roughness:.25,clearcoat:1,clearcoatRoughness:.05,reflectivity:.9,envMapIntensity:1,side:pe});new Nt({color:"#C0C0C0",metalness:1,roughness:.2,transparent:!0,opacity:.4,clearcoat:.7,clearcoatRoughness:.3,transmission:.8,ior:1.45});const W=new Nt({color:"#d3d3d3",metalness:1,roughness:.2,map:tt,envMap:tt,clearcoat:.7,clearcoatRoughness:.3});new Nt({color:12632256,metalness:.9,roughness:.2,clearcoat:.5,clearcoatRoughness:.1,map:tt}),new Nt({color:12632256,metalness:1,roughness:.3,clearcoat:.5,clearcoatRoughness:.1,map:P,transparent:!0,opacity:.3});const et=new Tt(1,32,32,0,Math.PI),V=new R(et,J),mt=new R(et,S);V.scale.set(.85,.85,.8),mt.scale.set(.85,.85,.8),V.position.y=-.2,mt.position.y=-.2,V.rotation.y=Math.PI/2,mt.rotation.y=Math.PI*1.5;const yt=new be(1,32),_t=new R(yt,k);_t.scale.set(.85,.85,.8),_t.position.set(0,-.2,0),_t.rotation.y=Math.PI/2;const It=new $t;It.add(V),It.add(mt),It.add(_t),p.add(It);const Gt=new Tt(.6,32,32,0,Math.PI),ot=new R(Gt,S);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI*1.5;const ft=new R(Gt,J);ft.scale.set(1,.95,.95),ft.position.set(0,1,0),ft.rotation.y=Math.PI/2;const vt=new be(.6,32),F=new R(vt,k);F.position.set(0,1,0),F.rotation.y=Math.PI/2,F.scale.set(1,.95,.95);const at=new $t;at.add(ot),at.add(ft),at.add(F),p.add(at);const rt=new Tt(.25,32,32),ut=new R(rt,S);ut.position.set(-.45,1.35,-.1),p.add(ut);const Mt=new R(rt,k);Mt.position.set(.45,1.35,-.1),p.add(Mt);const st=new Tt(.25,32,32,Math.PI/2,Math.PI),g=new R(st,S);g.scale.set(1.1,.6,.8),g.position.set(0,.84,.5),g.rotation.y=Math.PI;const A=new Tt(.25,32,32,Math.PI/2,Math.PI),L=new R(A,k);L.scale.set(1.1,.6,.8),L.position.set(0,.84,.5),L.rotation.y=0;const N=new be(.25,32),D=new R(N,lt);D.scale.set(.8,.6,.8),D.position.set(0,.84,.5),D.rotation.y=Math.PI/2;const q=new $t;q.add(g),q.add(L),q.add(D),p.add(q);const j=new Ln;j.moveTo(0,0),j.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),j.bezierCurveTo(-.6,.3,0,.6,0,1),j.bezierCurveTo(0,.6,.6,.3,.6,0),j.bezierCurveTo(.6,-.3,0,-.3,0,0);const w={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},v=new kn(j,w),C=new Tt(.35,32,32),X=new R(C,S);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),p.add(X);const z=new R(C,k);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),p.add(z);const H=new ue(.2,.22,.6,32),ct=new R(H,S);ct.position.set(-.4,-1.05,0),p.add(ct);const dt=new R(H,k);dt.position.set(.4,-1.05,0),p.add(dt);const pt=new Tt(.3,32,32),Rt=new R(pt,S);Rt.scale.set(1,.72,1.5),Rt.position.set(-.4,-1.45,.17),p.add(Rt);const ht=new R(pt,k);ht.scale.set(1,.72,1.5),ht.position.set(.4,-1.45,.17),p.add(ht);const xt=new Tt(.44,32,32),Ct=new R(xt,S);Ct.position.set(-.15,-.45,-.4),p.add(Ct);const Lt=new R(xt,J);Lt.position.set(.15,-.45,-.4),p.add(Lt);const Et=new Tt(.18,32,32),Wt=new R(Et,S);Wt.position.set(0,-.35,-.8),p.add(Wt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ce){const me=new ke("X",{font:ce,size:.2,depth:.05});new Gn({color:0});const ve=new R(me,y);ve.position.set(-.3,.99,.53),ve.rotation.x=ie.degToRad(-5),ve.rotation.y=ie.degToRad(-15),p.add(ve);const fe=new ke("O",{font:ce,size:.2,depth:.05});new Gn({color:0});const Te=new R(fe,y);Te.position.set(.14,.99,.53),Te.rotation.y=ie.degToRad(12),Te.rotation.x=ie.degToRad(-5),p.add(Te)}),Wt.renderOrder=1;const Vt=1.2,B=.5,gt=8,it=.7,Q=.3,wt=.5,St=d(W,{x:-2,y:0,z:0}),Ht=d(W,{x:0,y:0,z:0}),Kt=d(W,{x:2,y:0,z:0}),Qt=d(W,{x:2,y:0,z:0}),Jt=d(W,{x:2,y:-2,z:0}),ee=new R(v,K);ee.scale.set(.3,.3,.3),ee.position.set(.25,1.1,0),ee.rotation.y=Math.PI,ee.rotation.x=Math.PI,p.add(ee),St.position.set(.35,0,0),Ht.position.set(.25,-.3,.4),Kt.position.set(.3,.3,-.2),Qt.position.set(.25,.17,.4),Jt.position.set(.5,-.3,.45),St.scale.set(.2,.2,.2),Ht.scale.set(.18,.18,.18),Kt.scale.set(.15,.15,.15),Qt.scale.set(.17,.17,.17),Jt.scale.set(.15,.15,.15),Ht.rotation.z=Math.PI/4,Kt.rotation.z=-Math.PI/4,Qt.rotation.y=-Math.PI/2,Jt.rotation.y=-Math.PI/2,p.add(St),p.add(Ht),p.add(Kt),p.add(Qt),p.add(Jt),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4,f(),Ve(()=>t.bodyPosition,ce=>{p.position.set(ce.x,ce.y,ce.z)}),Ve(()=>t.cameraPosition,ce=>{x.position.set(t.bodyPosition.x,1,ce),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(Mi(),wi(xn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),qt("div",T1,[qt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),qt("div",A1,[qt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),P1=Si(R1,[["__scopeId","data-v-9a57b6d8"]]),C1={class:"pixel-controls"},I1={class:"side-buttons"},L1={class:"directional-buttons"},D1={class:"horizontal-buttons"},U1={class:"directional-buttons-woman"},N1={class:"horizontal-buttons-woman"},F1={class:"directional-buttons-kid"},O1={class:"horizontal-buttons-kid"},na=.1,ia=.05,sa=.08,B1=Wn({__name:"Water",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);const a=$o(null),l=Zt(!1),c=Zt(!1),h=Zt(!1),u=Zt(!1),d=$o(null),f=$o(null),_=Zt(!1),x=Zt(!1),m=Zt(!1),p=Zt(!1),T=Zt(!1),M=Zt(!1),E=Zt(!1),O=Zt(!1),I=new ri({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(I.domElement);const P=new ai,U=new Be(75,window.innerWidth/window.innerHeight,.1,1e3);U.position.z=5,li(()=>{if(e.value){let st=function(){const At=new $t,De=new Tt(.2,32,32),Fe=new te({color:16767916}),Se=new R(De,Fe);Se.position.set(0,1.5,0),At.add(Se);const rn=new Tt(.21,32,32,0,Math.PI*2,0,Math.PI/2),xe=new te({color:16711680}),Ye=new R(rn,xe);Ye.position.set(0,1.58,0),At.add(Ye);const Sn=new ue(.25,.25,.6,32),Oe=new te({color:16767916}),dn=new R(Sn,Oe);dn.position.set(0,1,0),At.add(dn);const ci=new ue(.26,.26,.3,32),Fn=new te({color:255}),Xn=new R(ci,Fn);Xn.position.set(0,.65,0),At.add(Xn);const qn=new ue(.1,.1,.5,32),fn=new te({color:16767916}),On=new R(qn,fn);On.position.set(-.15,.25,0),At.add(On);const Yn=new R(qn,fn);Yn.position.set(.15,.25,0),At.add(Yn);const ui=new ue(.08,.08,.5,32),En=new R(ui,fn);En.position.set(-.35,1.3,0),En.rotation.z=Math.PI/4,At.add(En);const bn=new R(ui,fn);return bn.position.set(.35,1.3,0),bn.rotation.z=-Math.PI/4,At.add(bn),At.scale.set(.27,.27,.27),At.position.set(-.2,-.1,-.15),At},g=function(){const At=new $t,De=new Tt(.18,32,32),Fe=new te({color:16767916}),Se=new R(De,Fe);Se.position.set(0,1.2,.04),At.add(Se);const rn=new Tt(.19,32,32,.4,Math.PI*2,0,Math.PI/2),xe=new ue(.18,.18,.4,32),Ye=new te({color:9127187}),Sn=new R(rn,Ye);Sn.position.set(0,1.28,0),At.add(Sn);const Oe=new R(xe,Ye);Oe.position.set(0,1.1,-.01),At.add(Oe);const dn=new ue(.18,.2,.5,32),ci=new te({color:16767916}),Fn=new R(dn,ci);Fn.position.set(0,.85,0),At.add(Fn);const Xn=new Tt(.08,32,32,0,Math.PI),qn=new te({color:16738740}),fn=new R(Xn,qn);fn.position.set(-.09,.98,.15),At.add(fn);const On=new R(Xn,qn);On.position.set(.09,.98,.15),At.add(On);const Yn=new ue(.22,.22,.25,32),ui=new te({color:16738740}),En=new R(Yn,ui);En.position.set(0,.6,0),At.add(En);const bn=new ue(.1,.1,.6,32),fs=new te({color:16767916}),Bs=new R(bn,fs);Bs.position.set(-.09,.5,.2),Bs.rotation.x=Math.PI/2,At.add(Bs);const zs=new R(bn,fs);zs.position.set(.09,.5,.2),zs.rotation.x=Math.PI/2,At.add(zs);const Lo=new ue(.08,.08,.35,32),ps=new R(Lo,fs);ps.position.set(-.24,.95,.18),ps.rotation.x=Math.PI/2,At.add(ps);const ms=new R(Lo,fs);return ms.position.set(.2,.85,0),ms.rotation.z=Math.PI/20,At.add(ms),At.scale.set(.27,.27,.27),At.position.set(.2,-.15,-.32),At},A=function(){const At=new $t,De=new Tt(.2,32,32),Fe=new te({color:16767916}),Se=new R(De,Fe);Se.position.set(0,1.5,0),At.add(Se);const rn=new Tt(.21,32,32,0,Math.PI*2,0,Math.PI/2),xe=new te({color:25600}),Ye=new R(rn,xe);Ye.position.set(0,1.58,0),At.add(Ye);const Sn=new ue(.22,.22,.5,32),Oe=new te({color:16767916}),dn=new R(Sn,Oe);dn.position.set(0,1,0),At.add(dn);const ci=new ue(.23,.23,.3,32),Fn=new te({color:8388736}),Xn=new R(ci,Fn);Xn.position.set(0,.65,0),At.add(Xn);const qn=new ue(.1,.1,.5,32),fn=new te({color:16767916}),On=new R(qn,fn);On.position.set(-.15,.3,-.25),On.rotation.x=Math.PI/6,At.add(On);const Yn=new R(qn,fn);Yn.position.set(.15,.3,.25),Yn.rotation.x=-Math.PI/6,At.add(Yn);const ui=new ue(.08,.08,.4,32),En=new R(ui,fn);En.position.set(-.28,1,-.2),En.rotation.x=Math.PI/6,At.add(En);const bn=new R(ui,fn);return bn.position.set(.28,1.3,.1),bn.rotation.z=-Math.PI/8,At.add(bn),At.scale.set(.15,.15,.15),At.position.set(.3,-.25,.25),At.rotation.x=Math.PI/12,At.rotation.y=Math.PI/2,At.rotation.z=-Math.PI/3,At},L=function(At){let De=1,Fe=0;function Se(){requestAnimationFrame(Se),At.position.x+=.01*De,At.position.x>=.35?(De=-1,At.rotation.y=Math.PI):At.position.x<=-.35&&(De=1,At.rotation.y=0),Fe+=.003,At.position.y=-.4+Math.sin(Fe)*.1,j.render(D,q)}Se()},N=function(){requestAnimationFrame(N),i.value&&(w.rotation.y+=.03),s.value&&(w.rotation.y-=.03),o.value&&(w.rotation.x-=.03),r.value&&(w.rotation.x+=.03),ve.uniforms.u_time.value+=.25,nt.rotation.y+=.04,j.render(D,q)};const D=new ai,q=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),j=new ri({antialias:!0,alpha:!0});j.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(j.domElement);const w=new $t,v=new $t;D.add(v);const C=new Xi(16777215,2);D.add(C);const X=new Wi(16777215,4);X.position.set(5,5,5),D.add(X);const z=new Vi(16777215,5,50);z.position.set(0,2,4),D.add(z);const H=new ds,ct=H.load("/3d-bear-arts/assets/beach.jpg");ct.repeat.set(.8,1);const dt=H.load("/3d-bear-arts/assets/sun.jpg");ct.wrapS=ct.wrapT=Ke,ct.repeat.set(.8,1),dt.wrapS=dt.wrapT=Ke;const pt=new Nt({color:11592447,map:ct,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Rt=new Nt({color:11592447,map:ct,metalness:.3,roughness:.5,transparent:!0,opacity:.6,side:pe,ior:1.33,depthWrite:!1,depthTest:!0}),ht=new Nt({color:11592447,map:ct,metalness:.1,roughness:.6,transparent:!0,opacity:.6,clearcoat:.9,clearcoatRoughness:.4,transmission:.7,ior:1.2,depthTest:!0,envMapIntensity:.8}),xt=new Nt({color:11592447,map:ct,metalness:.1,roughness:.6,transparent:!0,opacity:.3,clearcoat:.9,clearcoatRoughness:.4,ior:1.2,depthWrite:!1,depthTest:!0,envMapIntensity:.6,side:pe}),Ct=new Nt({color:11592447,map:ct,metalness:.3,roughness:.5,transparent:!0,opacity:.8,side:pe,ior:1.33}),Lt=new Nt({color:11592447,map:ct,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Et=new Tt(1,32,32,0,Math.PI),Wt=new R(Et,xt),Dt=new R(Et,Rt);Wt.scale.set(.85,.85,.8),Dt.scale.set(.85,.85,.8),Wt.position.y=-.2,Dt.position.y=-.2,Wt.rotation.y=Math.PI/2,Dt.rotation.y=Math.PI*1.5;const Vt=new be(1,32),B=new R(Vt,pt);B.scale.set(.85,.85,.8),B.position.set(0,-.2,0),B.rotation.y=Math.PI/2;const gt=new $t;gt.add(Wt),gt.add(Dt),gt.add(B),w.add(gt);const it=new Tt(.6,32,32,0,Math.PI),Q=new R(it,pt);Q.scale.set(1,.95,.95),Q.position.set(0,1,0),Q.rotation.y=Math.PI*1.5;const wt=new R(it,ht);wt.scale.set(1,.95,.95),wt.position.set(0,1,0),wt.rotation.y=Math.PI/2;const St=new be(.6,32),Ht=new R(St,pt);Ht.position.set(0,1,0),Ht.rotation.y=Math.PI/2,Ht.scale.set(1,.95,.95);const Kt=new $t;Kt.add(Q),Kt.add(wt),Kt.add(Ht),w.add(Kt);const Qt=new Tt(.6,32,32,0,Math.PI*2,0,Math.PI/2),Jt=new Nt({color:11592447,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.9,transmission:.9,ior:1.33,reflectivity:.8,envMapIntensity:1}),ee=new R(Qt,Jt);ee.position.set(0,-.2,0),ee.rotation.x=Math.PI,ee.scale.set(1.25,1.25,1.25),gt.add(ee);const ce=new Nt({color:49151,metalness:.1,roughness:.5,clearcoat:.7,clearcoatRoughness:.25,side:pe,transparent:!0,opacity:.7,depthWrite:!1}),me=new R(Vt,ce);me.scale.set(.7,.7,.7),me.position.set(0,-.3,0),me.rotation.x=Math.PI/2,me.renderOrder=1,gt.add(me),w.add(gt);const ve=new Dn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:8},u_waveAmplitude:{value:.05},u_waveSpeed:{value:.2}},vertexShader:`
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
            `}),fe=new R(Vt,ve);fe.position.set(0,-.3,0),fe.scale.set(.7,.7,.7),fe.rotation.x=-Math.PI/2,fe.renderOrder=1,gt.add(fe);const Te=new Tt(.25,32,32),ge=new R(Te,Ct);ge.position.set(-.45,1.35,-.1),w.add(ge);const He=new R(Te,ht);He.position.set(.45,1.35,-.1),w.add(He);const Re=new Tt(.25,32,32,Math.PI/2,Math.PI),je=new R(Re,Ct);je.scale.set(1.1,.6,.8),je.position.set(0,.84,.5),je.rotation.y=Math.PI;const We=new Tt(.25,32,32,Math.PI/2,Math.PI),on=new R(We,ht);on.scale.set(1.1,.6,.8),on.position.set(0,.84,.5),on.rotation.y=0;const Un=new be(.25,32),Nn=new R(Un,Rt);Nn.scale.set(.8,.6,.8),Nn.position.set(0,.84,.5),Nn.rotation.y=Math.PI/2;const bi=new $t;bi.add(je),bi.add(on),bi.add(Nn),w.add(bi);const Pt=new Nt({color:8374441,metalness:1,roughness:.25,envMap:dt,clearcoat:.7,clearcoatRoughness:.3}),b=new Ln;b.moveTo(0,0),b.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),b.bezierCurveTo(-.6,.3,0,.6,0,1),b.bezierCurveTo(0,.6,.6,.3,.6,0),b.bezierCurveTo(.6,-.3,0,-.3,0,0);const G={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},Z=new kn(b,G),nt=new R(Z,Pt);nt.scale.set(.2,.2,.2),nt.position.set(.25,1.2,0),nt.rotation.y=Math.PI,nt.rotation.x=Math.PI,w.add(nt);const $=new Tt(.35,32,32),bt=new R($,Rt);bt.scale.set(.75,1.25,.65),bt.position.set(-.7,-.15,.2),w.add(bt);const Ut=new R($,xt);Ut.scale.set(.75,1.25,.65),Ut.position.set(.7,-.15,.2),w.add(Ut);const Bt=new ue(.2,.22,.6,32),zt=new R(Bt,Ct);zt.position.set(-.4,-1.05,0),w.add(zt);const Yt=new R(Bt,ht);Yt.position.set(.4,-1.05,0),w.add(Yt);const jt=new Tt(.3,32,32),kt=new R(jt,Ct);kt.scale.set(1,.72,1.5),kt.position.set(-.4,-1.45,.17),w.add(kt);const ne=new R(jt,ht);ne.scale.set(1,.72,1.5),ne.position.set(.4,-1.45,.17),w.add(ne);const de=new Tt(.44,32,32),_e=new R(de,Ct);_e.position.set(-.15,-.45,-.4),w.add(_e);const Ce=new R(de,Ct);Ce.position.set(.15,-.45,-.4),w.add(Ce);const re=new Tt(.18,32,32),Xt=new R(re,Ct);Xt.position.set(0,-.35,-.8),w.add(Xt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(At){const De=new ke("X",{font:At,size:.2,depth:.05}),Fe=new R(De,Lt);Fe.position.set(-.3,.99,.53),Fe.rotation.x=ie.degToRad(-5),Fe.rotation.y=ie.degToRad(-15),w.add(Fe);const Se=new ke("O",{font:At,size:.2,depth:.05}),rn=new R(Se,Lt);rn.position.set(.14,.99,.53),rn.rotation.y=ie.degToRad(12),rn.rotation.x=ie.degToRad(-5),w.add(rn)}),a.value=st(),w.add(a.value),D.add(w),d.value=g(),w.add(d.value),f.value=A(),w.add(f.value),L(f.value),w.scale.set(1.4,1.4,1.4),D.add(w),w.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),q.position.set(t.bodyPosition.x,1,t.cameraPosition),q.lookAt(t.bodyPosition.x,0,0),q.position.z=4,w.rotation.x=.1,N(),Ve(()=>t.bodyPosition,At=>{w.position.set(At.x,At.y,At.z)}),Ve(()=>t.cameraPosition,At=>{q.position.set(t.bodyPosition.x,1,At),q.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{q.aspect=window.innerWidth/window.innerHeight,q.updateProjectionMatrix(),j.setSize(window.innerWidth,window.innerHeight)})}});function tt(){s.value=!0}function y(){i.value=!0}function S(){o.value=!0}function K(){r.value=!0}function k(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}const J=()=>{l.value=!0,console.log(l.value),a.value&&(a.value.rotation.y=0),console.log(a.value)},lt=()=>{c.value=!0,a.value&&(a.value.rotation.y=Math.PI),console.log(a.value)},W=()=>{h.value=!0,a.value&&(a.value.rotation.y=Math.PI/2)},et=()=>{u.value=!0,a.value&&(a.value.rotation.y=-Math.PI/2)},V=()=>{l.value=!1,c.value=!1,h.value=!1,u.value=!1},mt=()=>{_.value=!0,d.value&&(d.value.rotation.y=Math.PI)},yt=()=>{x.value=!0,d.value&&(d.value.rotation.y=0)},_t=()=>{m.value=!0,d.value&&(d.value.rotation.y=-Math.PI/2)},It=()=>{p.value=!0,d.value&&(d.value.rotation.y=Math.PI/2)},Gt=()=>{_.value=!1,x.value=!1,m.value=!1,p.value=!1},ot=()=>{requestAnimationFrame(ot),a.value&&(l.value&&(a.value.position.z-=na),c.value&&(a.value.position.z+=na),h.value&&(a.value.position.x-=na),u.value&&(a.value.position.x+=na)),I.render(P,U)},ft=()=>{requestAnimationFrame(ft),d.value&&(_.value&&(d.value.position.z-=ia),x.value&&(d.value.position.z+=ia),m.value&&(d.value.position.x-=ia),p.value&&(d.value.position.x+=ia))};ft(),ot();const vt=()=>{T.value=!0,f.value&&(f.value.rotation.y=0)},F=()=>{M.value=!0,f.value&&(f.value.rotation.y=Math.PI)},at=()=>{E.value=!0,f.value&&(f.value.rotation.y=Math.PI/2)},rt=()=>{O.value=!0,f.value&&(f.value.rotation.y=-Math.PI/2)},ut=()=>{T.value=!1,M.value=!1,E.value=!1,O.value=!1},Mt=()=>{requestAnimationFrame(Mt),f.value&&(T.value&&(f.value.position.z-=sa),M.value&&(f.value.position.z+=sa),E.value&&(f.value.position.x-=sa),O.value&&(f.value.position.x+=sa))};return Mt(),(st,g)=>(Mi(),wi(xn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),qt("div",C1,[qt("button",{class:"pixel-btn up",onMousedown:S,onMouseup:k},"UP",32),qt("div",I1,[qt("button",{class:"pixel-btn left",onMousedown:tt,onMouseup:k},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:y,onMouseup:k},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:K,onMouseup:k},"DOWN",32)]),qt("div",L1,[qt("button",{id:"move-north",class:"directional-btn north-btn",onMousedown:J,onMouseup:V},"UP",32),qt("div",D1,[qt("button",{id:"move-west",class:"directional-btn west-btn",onMousedown:W,onMouseup:V},"LEFT",32),qt("button",{id:"move-east",class:"directional-btn east-btn",onMousedown:et,onMouseup:V},"RIGHT",32)]),qt("button",{id:"move-south",class:"directional-btn south-btn",onMousedown:lt,onMouseup:V},"DOWN",32)]),qt("div",U1,[qt("button",{class:"directional-btn-woman north-btn",onMousedown:mt,onMouseup:Gt},"UP",32),qt("div",N1,[qt("button",{class:"directional-btn-woman west-btn",onMousedown:_t,onMouseup:Gt},"LEFT",32),qt("button",{class:"directional-btn-woman east-btn",onMousedown:It,onMouseup:Gt},"RIGHT",32)]),qt("button",{class:"directional-btn-woman south-btn",onMousedown:yt,onMouseup:Gt},"DOWN",32)]),qt("div",F1,[qt("button",{class:"directional-btn-kid north-btn",onMousedown:vt,onMouseup:ut},"UP",32),qt("div",O1,[qt("button",{class:"directional-btn-kid west-btn",onMousedown:at,onMouseup:ut},"LEFT",32),qt("button",{class:"directional-btn-kid east-btn",onMousedown:rt,onMouseup:ut},"RIGHT",32)]),qt("button",{class:"directional-btn-kid south-btn",onMousedown:F,onMouseup:ut},"DOWN",32)])],64))}}),z1=Si(B1,[["__scopeId","data-v-f25dfda5"]]),G1={class:"pixel-controls"},H1={class:"side-buttons"},k1=Wn({__name:"GhostBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);li(()=>{if(e.value){let d=function(ge,He){const Re=new $t,je=new Tt(1,32,32),We=new R(je,lt);We.scale.set(1,.8,1),Re.add(We);const on=new ue(.1,.1,.5,16),Un=new te({color:9127187}),Nn=new R(on,Un);return Nn.position.set(0,.9,0),Re.add(Nn),Re},f=function(){requestAnimationFrame(f),i.value&&(p.rotation.y+=.03),s.value&&(p.rotation.y-=.03),o.value&&(p.rotation.x-=.03),r.value&&(p.rotation.x+=.03),Vt.rotation.z-=.04,B.rotation.z+=.04,gt.rotation.z+=.03,it.rotation.z+=.03,v.rotation.y+=.04,Te+=ve,p.position.y=t.bodyPosition.y+Math.sin(Te)*fe;const ge=ce.getElapsedTime();ee.forEach((He,Re)=>{const je=.1+Math.sin(ge*3+me[Re])*.1;He.scale.set(je,je,je)}),m.render(_,x)};const _=new ai,x=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),m=new ri({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(m.domElement);const p=new $t,T=new $t;_.add(T);const M=new Xi(16777215,2);_.add(M);const E=new Wi(16777215,4);E.position.set(5,5,5),_.add(E);const O=new Vi(16777215,5,50);O.position.set(0,2,4),_.add(O);const I=new ds,P=I.load("/3d-bear-arts/assets/pumpkin.jpg");P.wrapS=P.wrapT=Ke,P.repeat.set(.8,.85);const U=I.load("/3d-bear-arts/assets/pumpkin.jpg");U.wrapS=U.wrapT=Ke,U.repeat.set(1,1);const tt=I.load("/3d-bear-arts/assets/pumpkin.jpg");tt.wrapS=U.wrapT=Ke,tt.repeat.set(2,.8);const y=new Nt({color:16747520,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),S=new $t,K=new Nt({color:16747520,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),k=new Nt({color:16747520,map:U,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),J=new Nt({color:16747520,map:tt,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.45,reflectivity:.9,envMapIntensity:1,side:pe}),lt=new Nt({color:16747520,map:tt,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});new Nt({color:16766720,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Nt({color:9109504,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),new Nt({color:4915330,map:P,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9});const W=new Tt(1,32,32,0,Math.PI),et=new R(W,J),V=new R(W,K);et.scale.set(.85,.85,.8),V.scale.set(.85,.85,.8),et.position.y=-.2,V.position.y=-.2,et.rotation.y=Math.PI/2,V.rotation.y=Math.PI*1.5;const mt=new be(1,32),yt=new R(mt,k);yt.scale.set(.85,.85,.8),yt.position.set(0,-.2,0),yt.rotation.y=Math.PI/2;const _t=new $t;_t.add(et),_t.add(V),_t.add(yt),p.add(_t);const It=new Tt(.6,32,32,0,Math.PI),Gt=new R(It,K);Gt.scale.set(1,.95,.95),Gt.position.set(0,1,0),Gt.rotation.y=Math.PI*1.5;const ot=new R(It,J);ot.scale.set(1,.95,.95),ot.position.set(0,1,0),ot.rotation.y=Math.PI/2;const ft=new be(.6,32),vt=new R(ft,k);vt.position.set(0,1,0),vt.rotation.y=Math.PI/2,vt.scale.set(1,.95,.95);const F=new $t;F.add(Gt),F.add(ot),F.add(vt),p.add(F);const at=new Tt(.25,32,32),rt=new R(at,lt);rt.position.set(-.45,1.35,-.1),p.add(rt);const ut=new R(at,J);ut.position.set(.45,1.35,-.1),p.add(ut);const Mt=new Tt(.25,32,32,Math.PI/2,Math.PI),st=new R(Mt,K);st.scale.set(1.1,.6,.8),st.position.set(0,.84,.5),st.rotation.y=Math.PI;const g=new Tt(.25,32,32,Math.PI/2,Math.PI),A=new R(g,J);A.scale.set(1.1,.6,.8),A.position.set(0,.84,.5),A.rotation.y=0;const L=new be(.25,32),N=new R(L,K);N.scale.set(.8,.6,.8),N.position.set(0,.84,.5),N.rotation.y=Math.PI/2;const D=new $t;D.add(st),D.add(A),D.add(N),p.add(D);const q=new Ln;q.moveTo(0,0),q.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),q.bezierCurveTo(-.6,.3,0,.6,0,1),q.bezierCurveTo(0,.6,.6,.3,.6,0),q.bezierCurveTo(.6,-.3,0,-.3,0,0);const j={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},w=new kn(q,j),v=new R(w,y);v.scale.set(.3,.3,.3),v.position.set(.25,1.1,0),v.rotation.y=Math.PI,v.rotation.x=Math.PI,p.add(v);const C=new Tt(.35,32,32),X=new R(C,k);X.scale.set(.75,1.25,.65),X.position.set(-.7,-.15,.2),p.add(X);const z=new R(C,J);z.scale.set(.75,1.25,.65),z.position.set(.7,-.15,.2),p.add(z);const H=new ue(.2,.22,.6,32),ct=new R(H,k);ct.position.set(-.4,-1.05,0),p.add(ct);const dt=new R(H,J);dt.position.set(.4,-1.05,0),p.add(dt);const pt=new Tt(.3,32,32),Rt=new R(pt,lt);Rt.scale.set(1,.72,1.5),Rt.position.set(-.4,-1.45,.17),p.add(Rt);const ht=new R(pt,J);ht.scale.set(1,.72,1.5),ht.position.set(.4,-1.45,.17),p.add(ht);const xt=new Tt(.44,32,32),Ct=new R(xt,K);Ct.position.set(-.15,-.45,-.4),p.add(Ct);const Lt=new R(xt,J);Lt.position.set(.15,-.45,-.4),p.add(Lt);const Et=new Tt(.18,32,32),Wt=new R(Et,lt);Wt.position.set(0,-.35,-.8),p.add(Wt),Wt.renderOrder=1,new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(ge){const He=new ke("X",{font:ge,size:.2,depth:.05}),Re=new R(He,k);Re.position.set(-.3,.99,.53),Re.rotation.x=ie.degToRad(-5),Re.rotation.y=ie.degToRad(-15),p.add(Re);const je=new ke("O",{font:ge,size:.2,depth:.05}),We=new R(je,k);We.position.set(.14,.99,.53),We.rotation.y=ie.degToRad(12),We.rotation.x=ie.degToRad(-5),p.add(We)}),p.add(S);const Vt=d(),B=d(),gt=d(),it=d();Vt.position.set(.35,-.35,-.3),B.position.set(.25,-.45,.3),gt.position.set(.3,.1,-.2),it.position.set(.25,.18,.4),Vt.scale.set(.3,.3,.3),B.scale.set(.28,.28,.28),gt.scale.set(.25,.25,.25),it.scale.set(.23,.23,.23),B.rotation.z=Math.PI/4,gt.rotation.z=-Math.PI/4,it.rotation.y=-Math.PI/2,p.add(Vt),p.add(B),p.add(gt),p.add(it);const Q=new Ln;Q.moveTo(-.5,0),Q.bezierCurveTo(-.75,.25,-1,.6,-.5,.8),Q.bezierCurveTo(-.25,.85,-.25,.5,-.15,.4),Q.bezierCurveTo(-.05,.6,.05,.6,.15,.4),Q.bezierCurveTo(.25,.5,.25,.85,.5,.8),Q.bezierCurveTo(1,.6,.75,.25,.5,0),Q.bezierCurveTo(.3,-.25,-.3,-.25,-.5,0);const wt={depth:.3,bevelEnabled:!1},St=new kn(Q,wt),Ht=new Gn({color:0}),Kt=new R(St,Ht);Kt.scale.set(.3,.3,.6),Kt.rotation.x=0,Kt.rotation.z=0,Kt.position.set(.26,.35,.25),p.add(Kt);const Qt=new R(St,Ht);Qt.scale.set(.5,.5,.5),Qt.position.set(.4,-.1,.54),p.add(Qt);const Jt=new R(St,Ht);Jt.scale.set(.5,.5,.5),Jt.position.set(.32,-.35,.65),p.add(Jt),p.rotation.x=.1,p.scale.set(1.4,1.4,1.4),_.add(p),p.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),x.position.set(t.bodyPosition.x,1,t.cameraPosition),x.lookAt(t.bodyPosition.x,0,0),x.position.z=4;const ee=[Kt,Qt,Jt],ce=new Dp,me=[0,Math.PI/2,Math.PI,0,Math.PI/3];let ve=.05,fe=.25,Te=0;f(),Ve(()=>t.bodyPosition,ge=>{p.position.set(ge.x,ge.y,ge.z)}),Ve(()=>t.cameraPosition,ge=>{x.position.set(t.bodyPosition.x,1,ge),x.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(Mi(),wi(xn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),qt("div",G1,[qt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),qt("div",H1,[qt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),V1=Si(k1,[["__scopeId","data-v-5eff72b3"]]),W1={class:"pixel-controls"},X1={class:"side-buttons"},q1=Wn({__name:"GhostBallonBear",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);li(()=>{if(e.value){let d=function(){requestAnimationFrame(d),i.value&&(m.rotation.y+=.03),s.value&&(m.rotation.y-=.03),o.value&&(m.rotation.x-=.03),r.value&&(m.rotation.x+=.03),j.rotation.y+=.03,Ht+=it,Kt+=Q,m.position.y=t.bodyPosition.y+Math.sin(Ht)*St,j.position.y=t.bodyPosition.y+Math.sin(Kt)*wt,Vt.uniforms.u_time.value+=.25,x.render(f,_)};const f=new ai,_=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),x=new ri({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(x.domElement);const m=new $t,p=new $t;f.add(p);const T=new Xi(16777215,2);f.add(T);const M=new Wi(16777215,4);M.position.set(5,5,5),f.add(M);const E=new Vi(16777215,5,50);E.position.set(0,2,4),f.add(E);const O=new ds,I=O.load("/3d-bear-arts/assets/ghost.jpg");I.wrapS=I.wrapT=Ke,I.repeat.set(2,2);const P=O.load("/3d-bear-arts/assets/ghost.jpg");P.wrapS=P.wrapT=Ke,P.repeat.set(1,1);const U=new Nt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.15,transmission:.95,ior:1.1,reflectivity:.2,envMapIntensity:.3,depthTest:!0,depthWrite:!1,side:pe}),tt=new Nt({color:16777215,metalness:0,roughness:.8,clearcoat:.3,clearcoatRoughness:.9,transparent:!0,opacity:.1,envMapIntensity:.3}),y=new Nt({color:9109504,map:I,metalness:.9,roughness:.25,clearcoat:.7,clearcoatRoughness:.3}),S=new Nt({color:16777215,metalness:.1,roughness:.05,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.1,transmission:.95,ior:1,reflectivity:.2,envMapIntensity:.4,depthTest:!0,depthWrite:!1,side:pe}),K=new Nt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,depthTest:!0,depthWrite:!1,side:pe}),k=new Nt({color:16777215,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.45,transmission:.8,reflectivity:.9,envMapIntensity:1,side:pe}),J=new Tt(1,32,32,0,Math.PI),lt=new R(J,U),W=new R(J,K);lt.scale.set(.85,.85,.8),W.scale.set(.85,.85,.8),lt.position.y=-.2,W.position.y=-.2,lt.rotation.y=Math.PI/2,W.rotation.y=Math.PI*1.5;const et=new be(1,32),V=new R(et,K);V.scale.set(.85,.85,.8),V.position.set(0,-.2,0),V.rotation.y=Math.PI/2;const mt=new $t;mt.add(lt),mt.add(W),mt.add(V),m.add(mt);const yt=new Tt(.6,32,32,0,Math.PI),_t=new R(yt,k);_t.scale.set(1,.95,.95),_t.position.set(0,1,0),_t.rotation.y=Math.PI*1.5;const It=new R(yt,tt);It.scale.set(1,.95,.95),It.position.set(0,1,0),It.rotation.y=Math.PI/2;const Gt=new be(.6,32),ot=new R(Gt,K);ot.position.set(0,1,0),ot.rotation.y=Math.PI/2,ot.scale.set(1,.95,.95);const ft=new $t;ft.add(_t),ft.add(It),ft.add(ot),m.add(ft);const vt=new Tt(.25,32,32),F=new R(vt,k);F.position.set(-.45,1.35,-.1),m.add(F);const at=new R(vt,tt);at.position.set(.45,1.35,-.1),m.add(at);const rt=new Tt(.25,32,32,Math.PI/2,Math.PI),ut=new R(rt,k);ut.scale.set(1.1,.6,.8),ut.position.set(0,.84,.5),ut.rotation.y=Math.PI;const Mt=new Tt(.25,32,32,Math.PI/2,Math.PI),st=new R(Mt,tt);st.scale.set(1.1,.6,.8),st.position.set(0,.84,.5),st.rotation.y=0;const g=new be(.25,32),A=new R(g,S);A.scale.set(.8,.6,.8),A.position.set(0,.84,.5),A.rotation.y=Math.PI/2;const L=new $t;L.add(ut),L.add(st),L.add(A),m.add(L);const N=new Ln;N.moveTo(0,0),N.bezierCurveTo(0,-.3,-.6,-.3,-.6,0),N.bezierCurveTo(-.6,.3,0,.6,0,1),N.bezierCurveTo(0,.6,.6,.3,.6,0),N.bezierCurveTo(.6,-.3,0,-.3,0,0);const D={depth:.4,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.1,bevelThickness:.1},q=new kn(N,D),j=new R(q,y);j.scale.set(.35,.35,.35),j.position.set(0,-.05,0),j.rotation.y=Math.PI,j.rotation.x=Math.PI,m.add(j);const w=new Tt(.35,32,32),v=new R(w,K);v.scale.set(.75,1.25,.65),v.position.set(-.7,-.15,.2),m.add(v);const C=new R(w,S);C.scale.set(.75,1.25,.65),C.position.set(.7,-.15,.2),m.add(C);const X=new ue(.2,.22,.6,32),z=new R(X,K);z.position.set(-.4,-1.05,0),m.add(z);const H=new R(X,S);H.position.set(.4,-1.05,0),m.add(H);const ct=new Tt(.3,32,32),dt=new R(ct,K);dt.scale.set(1,.72,1.5),dt.position.set(-.4,-1.45,.17),m.add(dt);const pt=new R(ct,S);pt.scale.set(1,.72,1.5),pt.position.set(.4,-1.45,.17),m.add(pt);const Rt=new Tt(.44,32,32),ht=new R(Rt,S);ht.position.set(-.15,-.45,-.4),m.add(ht);const xt=new R(Rt,S);xt.position.set(.15,-.45,-.4),m.add(xt);const Ct=new Tt(.18,32,32),Lt=new R(Ct,K);Lt.position.set(0,-.35,-.8),m.add(Lt);const Et=new Tt(.6,32,32,0,Math.PI*2,0,Math.PI/2),Wt=new Nt({color:9109504,metalness:.3,roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.8,transmission:.85,ior:1.4,reflectivity:.9,envMapIntensity:1.2}),Dt=new R(Et,Wt);Dt.position.set(0,-.2,0),Dt.rotation.x=Math.PI,Dt.scale.set(1.25,1.25,1.25),mt.add(Dt);const Vt=new Dn({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{u_time:{value:0},u_waveFrequency:{value:4},u_waveAmplitude:{value:.5},u_waveSpeed:{value:.3}},vertexShader:`
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
            `}),B=new R(et,Vt);B.position.set(0,-.26,0),B.scale.set(.7,.7,.7),B.rotation.x=-Math.PI/2,B.renderOrder=1,mt.add(B),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Qt){const Jt=new ke("X",{font:Qt,size:.2,depth:.05}),ee=new R(Jt,K);ee.position.set(-.3,.99,.53),ee.rotation.x=ie.degToRad(-5),ee.rotation.y=ie.degToRad(-15),m.add(ee);const ce=new ke("O",{font:Qt,size:.2,depth:.05}),me=new R(ce,K);me.position.set(.14,.99,.53),me.rotation.y=ie.degToRad(12),me.rotation.x=ie.degToRad(-5),m.add(me)}),Lt.renderOrder=1,m.rotation.x=.1,m.scale.set(1.4,1.4,1.4),f.add(m),m.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),_.position.set(t.bodyPosition.x,1,t.cameraPosition),_.lookAt(t.bodyPosition.x,0,0),_.position.z=4;let it=.05,Q=.06,wt=.2,St=.25,Ht=0,Kt=0;d(),Ve(()=>t.bodyPosition,Qt=>{m.position.set(Qt.x,Qt.y,Qt.z)}),Ve(()=>t.cameraPosition,Qt=>{_.position.set(t.bodyPosition.x,1,Qt),_.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)})}});function a(){s.value=!0}function l(){i.value=!0}function c(){o.value=!0}function h(){r.value=!0}function u(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}return(d,f)=>(Mi(),wi(xn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),qt("div",W1,[qt("button",{class:"pixel-btn up",onMousedown:c,onMouseup:u},"UP",32),qt("div",X1,[qt("button",{class:"pixel-btn left",onMousedown:a,onMouseup:u},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:l,onMouseup:u},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:h,onMouseup:u},"DOWN",32)])],64))}}),Y1=Si(q1,[["__scopeId","data-v-eb44448e"]]),$1={class:"pixel-controls"},j1={class:"side-buttons"},K1=15,Z1=5,J1=Wn({__name:"Aquar",props:{background:{type:Boolean,default:!1},cameraPosition:{type:Number,default:5},bodyPosition:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(n){const t=n,e=Zt(null);let i=Zt(!1),s=Zt(!1),o=Zt(!1),r=Zt(!1);const a=$o(null),l=new ri({antialias:!0});l.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(l.domElement),new ai;const c=new Be(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=5,li(()=>{if(e.value){let x=function(){const Pt=new $t,b=new _o(.12,.05,16,100),G=new te({color:16777215}),Z=new R(b,G);Z.position.set(0,1.65,0),Z.rotation.x=Math.PI/2,Pt.add(Z);const nt=new ro(.15,.3,32),$=new te({color:16711680}),bt=new R(nt,$);bt.position.set(0,1.8,0),Pt.add(bt);const Ut=new Tt(.05,32,32),Bt=new te({color:16777215}),zt=new R(Ut,Bt);return zt.position.set(0,1.93,0),Pt.add(zt),Pt.position.set(0,-.1,0),Pt},m=function(){const Pt=new $t,b=new Tt(.15,32,32),G=new te({color:16764057}),Z=new R(b,G);Z.position.set(0,.4,0),Pt.add(Z);const nt=new ro(.08,.15,32);new te({color:16764057});const $=new R(nt,mt);$.position.set(-.1,.55,0),$.rotation.z=Math.PI/6,Pt.add($);const bt=new R(nt,mt);bt.position.set(.1,.55,0),bt.rotation.z=-Math.PI/6,Pt.add(bt);const Ut=new ue(.12,.15,.3,32),Bt=new te({color:16764057}),zt=new R(Ut,Bt);zt.position.set(0,.2,0),Pt.add(zt);const Yt=new ue(.05,.05,.2,32),jt=new te({color:16764057}),kt=new R(Yt,jt);kt.position.set(-.07,-.05,.05),Pt.add(kt);const ne=new R(Yt,jt);ne.position.set(.07,-.05,.05),Pt.add(ne);const de=new ue(.04,.04,.2,32),_e=new te({color:16764057}),Ce=new R(de,mt);Ce.position.set(-.15,.25,0),Ce.rotation.z=Math.PI/4,Pt.add(Ce);const re=new R(de,_e);re.position.set(.15,.25,0),re.rotation.z=-Math.PI/4,Pt.add(re);const Xt=new ue(.03,.03,.25,32),Ie=new te({color:16764057}),At=new R(Xt,Ie);return At.position.set(0,.1,-.2),At.rotation.x=Math.PI/4,Pt.add(At),Pt.scale.set(.75,.75,.75),Pt.position.set(.2,0,.2),Pt},p=function(){const Pt=new $t,b=new Tt(.2,32,32),G=new te({color:16764057}),Z=new R(b,G);Z.position.set(0,1,0),Pt.add(Z);const nt=new te({color:16777215}),$=[{x:0,y:.85,z:.15,size:.12},{x:-.1,y:.88,z:.1,size:.1},{x:.1,y:.88,z:.1,size:.1},{x:-.15,y:.95,z:.1,size:.08},{x:.15,y:.95,z:.1,size:.08}];for(const Sr of $){const Np=new Tt(Sr.size,16,16),Cu=new R(Np,nt);Cu.position.set(Sr.x,Sr.y-.06,Sr.z-.01),Pt.add(Cu)}const bt=new te({color:16777215}),Ut=new ue(.05,.06,.1,32),Bt=new R(Ut,bt);Bt.position.set(-.06,.93,.18),Bt.rotation.z=Math.PI/4;const zt=new ue(.05,.06,.1,32),Yt=new R(zt,bt);Yt.position.set(.06,.93,.18),Yt.rotation.z=-Math.PI/4;const jt=new _o(.12,.05,16,100),kt=new te({color:16777215}),ne=new R(jt,kt);ne.position.set(0,1.15,0),ne.rotation.x=Math.PI/2,Pt.add(ne);const de=new ro(.15,.3,32),_e=new te({color:16711680}),Ce=new R(de,_e);Ce.position.set(0,1.3,0),Pt.add(Ce);const re=new Tt(.05,32,32),Xt=new te({color:16777215}),Ie=new R(re,Xt);Ie.position.set(0,1.43,0),Pt.add(Ie);const At=new ue(.2,.25,.6,32),De=new te({color:16711680}),Fe=new R(At,De);Fe.position.set(0,.5,0),Pt.add(Fe);const Se=new ue(.25,.25,.1,32),rn=new te({color:0}),xe=new R(Se,rn);xe.position.set(0,.4,.005),Pt.add(xe);const Ye=new ue(.06,.06,.3,32),Sn=new te({color:16711680}),Oe=new R(Ye,Sn);Oe.position.set(-.25,.75,0),Oe.rotation.z=Math.PI/4,Pt.add(Oe);const dn=new R(Ye,Sn);dn.position.set(.25,.75,0),dn.rotation.z=-Math.PI/4,Pt.add(dn);const ci=new Tt(.07,32,32),Fn=new te({color:16777215}),Xn=new R(ci,Fn);Xn.position.set(-.35,.85,0),Pt.add(Xn);const qn=new R(ci,Fn);qn.position.set(.35,.85,0),Pt.add(qn);const fn=new ue(.1,.1,.15,32),On=new te({color:16711680}),Yn=new ue(.08,.08,.4,32),ui=new te({color:0}),En=new R(Yn,ui);En.position.set(-.1,.1,0),Pt.add(En);const bn=new R(fn,On);bn.position.set(-.1,-.05,0),Pt.add(bn);const fs=new R(Yn,ui);fs.position.set(.1,.1,0),Pt.add(fs);const Bs=new R(fn,On);Bs.position.set(.1,-.05,0),Pt.add(Bs);const zs=new Tt(.12,32,32),Lo=new te({color:16711680}),ps=new R(zs,Lo);ps.scale.set(1,.7,1.5),ps.position.set(-.1,-.12,.12),Pt.add(ps);const ms=new R(zs,Lo);return ms.scale.set(1,.7,1.5),ms.position.set(.1,-.1,.12),Pt.add(ms),Pt.scale.set(.25,.25,.25),Pt.position.set(.2,.5,-0),Pt},T=function(){let Pt=0;function b(){requestAnimationFrame(b),Pt+=.4,ee.position.y=.5+Math.sin(Pt)*.45,y.render(U,tt)}b()},M=function(Pt){let b=1,G=0;function Z(){requestAnimationFrame(Z),Pt.position.x+=.01*b,Pt.position.x>=.5?(b=-1,Pt.rotation.y=Math.PI):Pt.position.x<=0&&(b=1,Pt.rotation.y=0),G+=1,Pt.position.y=-.2+Math.sin(G)*.01,Pt.position.z=.5,y.render(U,tt)}Z()},E=function(){const Pt=new $t,b=new ni(.7,.8,.7),G=new te({color:9127187}),Z=new R(b,G);Z.position.set(0,.4,0),Pt.add(Z);const nt=new ro(.55,.25,4),$=new te({color:16777215}),bt=new R(nt,$);bt.position.set(0,.9,0),bt.rotation.y=Math.PI/4,Pt.add(bt);const Ut=new ni(.25,.35,.05),Bt=new te({color:6636321}),zt=new R(Ut,Bt);zt.position.set(0,.2,.36),Pt.add(zt);const Yt=new ni(.15,.15,.05),jt=new te({color:8900331}),kt=new R(Yt,jt);kt.position.set(-.2,.5,.38),Pt.add(kt);const ne=new R(Yt,jt);ne.position.set(.2,.5,.38),Pt.add(ne);const de=new ni(.2,.4,.2),_e=new te({color:8421504}),Ce=new R(de,_e);Ce.position.set(0,.95,0),Pt.add(Ce);const re=new _o(.07,.04,32,100),Xt=new te({color:2263842}),Ie=new R(re,Xt);return Ie.position.set(0,.45,.38),Pt.add(Ie),Pt.position.set(.22,-.2,0),Pt.scale.set(.5,.5,.5),Pt},O=function(){requestAnimationFrame(O);const Pt=Te.attributes.position.array;for(let b=1;b<Pt.length;b+=3)Pt[b]-=.02,Pt[b]<-10&&(Pt[b]=10);Te.attributes.position.needsUpdate=!0,y.render(U,tt)},I=function(){requestAnimationFrame(I);const Pt=Un.attributes.position.array;for(let b=1;b<Pt.length;b+=3)Pt[b]-=.02,Pt[b]<-on&&(Pt[b]=on);Un.attributes.position.needsUpdate=!0,y.render(U,tt)},P=function(){requestAnimationFrame(P),i.value&&(S.rotation.y+=.03),s.value&&(S.rotation.y-=.03),o.value&&(S.rotation.x-=.03),r.value&&(S.rotation.x+=.03),a.value&&(a.value.rotation.y+=.7),w.uniforms.u_time.value+=.5,ce.rotation.y+=.25,y.render(U,tt)};const U=new ai,tt=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),y=new ri({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(y.domElement);const S=new $t,K=new $t;U.add(K);const k=new Xi(16777215,2);U.add(k);const J=new Wi(16777215,4);J.position.set(5,5,5),U.add(J);const lt=new Vi(16777215,5,50);lt.position.set(0,2,4),U.add(lt);const W=new ds,et=W.load("/3d-bear-arts/assets/house.jpg");et.wrapS=et.wrapT=Ke,et.repeat.set(1,1),W.load("/3d-bear-arts/assets/houseenv_texture_5.jpg");const V=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.5,transmission:1,ior:1.33,thickness:.01,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:pe});new Nt({color:16777215,metalness:.3,map:et,roughness:.05,transparent:!0,opacity:.5,transmission:.7,ior:1.33,thickness:.4,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:pe});const mt=new Nt({color:16777215,metalness:.3,roughness:.05,transparent:!0,opacity:.6,transmission:.8,ior:1.33,thickness:.8,depthWrite:!0,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.1,side:pe}),yt=new c1().load(["/3d-bear-arts/assets/house_env_texture_1.jpg","/3d-bear-arts/assets/house_env_texture_4.jpg","/3d-bear-arts/assets/house_env_texture_6.jpg","/3d-bear-arts/assets/house_env_texture_2.jpg","/3d-bear-arts/assets/house_env_texture_5.jpg","/3d-bear-arts/assets/house_env_texture_3.jpg"]);U.environment=yt;const _t=new Nt({color:16777215,metalness:.05,roughness:.2,transparent:!0,opacity:1,transmission:.2,ior:1.5,depthWrite:!0,envMapIntensity:1,side:pe}),It=new Nt({color:16777215,metalness:.2,roughness:.7,clearcoat:.05,clearcoatRoughness:.9}),Gt=new Tt(1,32,32,0,Math.PI),ot=new R(Gt,V),ft=new R(Gt,mt);ot.scale.set(.85,.85,.8),ft.scale.set(.85,.85,.8),ot.position.y=-.2,ft.position.y=-.2,ot.rotation.y=Math.PI/2,ft.rotation.y=Math.PI*1.5;const vt=new be(1,32),F=new R(vt,_t);F.scale.set(.85,.85,.8),F.position.set(0,-.2,0),F.rotation.y=Math.PI/2;const at=new $t;at.add(ot),at.add(ft),at.add(F),S.add(at);const rt=new Tt(.6,32,32,0,Math.PI),ut=new R(rt,mt);ut.scale.set(1,.95,.95),ut.position.set(0,1,0),ut.rotation.y=Math.PI*1.5;const Mt=new R(rt,V);Mt.scale.set(1,.95,.95),Mt.position.set(0,1,0),Mt.rotation.y=Math.PI/2;const st=new be(.6,32),g=new R(st,_t);g.position.set(0,1,0),g.rotation.y=Math.PI/2,g.scale.set(1,.95,.95);const A=new $t;A.add(ut),A.add(Mt),A.add(g),S.add(A);const L=new Tt(.6,32,32,0,Math.PI*2,0,Math.PI/2),N=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.5,clearcoatRoughness:.7,transparent:!1,opacity:.85}),D=new R(L,N);D.position.set(0,-.2,0),D.rotation.x=Math.PI,D.scale.set(1.25,1.25,1.25),at.add(D);const q=new Nt({color:16777215,metalness:.1,roughness:.9,clearcoat:.6,clearcoatRoughness:.8,side:pe,transparent:!1,opacity:.8}),j=new R(vt,q);j.scale.set(.7,.7,.7),j.position.set(0,-.3,0),j.rotation.x=Math.PI/2,j.renderOrder=1,at.add(j),S.add(at);const w=new Dn({transparent:!0,uniforms:{u_time:{value:0}},vertexShader:`
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
    `}),v=new R(vt,w);v.position.set(0,-.2,0),v.scale.set(.7,.7,.7),v.rotation.x=-Math.PI/2,v.renderOrder=2,at.add(v);const C=new Tt(.25,32,32),X=new R(C,mt);X.position.set(-.45,1.35,-.1),S.add(X);const z=new R(C,V);z.position.set(.45,1.35,-.1),S.add(z);const H=new Tt(.25,32,32,Math.PI/2,Math.PI),ct=new R(H,mt);ct.scale.set(1.1,.6,.8),ct.position.set(0,.84,.5),ct.rotation.y=Math.PI;const dt=new Tt(.25,32,32,Math.PI/2,Math.PI),pt=new R(dt,V);pt.scale.set(1.1,.6,.8),pt.position.set(0,.84,.5),pt.rotation.y=0;const Rt=new be(.25,32),ht=new R(Rt,_t);ht.scale.set(.8,.6,.8),ht.position.set(0,.84,.5),ht.rotation.y=Math.PI/2;const xt=new $t;xt.add(ct),xt.add(pt),xt.add(ht),S.add(xt);const Ct=new Tt(.35,32,32),Lt=new R(Ct,mt);Lt.scale.set(.75,1.25,.65),Lt.position.set(-.7,-.15,.2),S.add(Lt);const Et=new R(Ct,V);Et.scale.set(.75,1.25,.65),Et.position.set(.7,-.15,.2),S.add(Et);const Wt=new ue(.2,.22,.6,32),Dt=new R(Wt,mt);Dt.position.set(-.4,-1.05,0),S.add(Dt);const Vt=new R(Wt,V);Vt.position.set(.4,-1.05,0),S.add(Vt);const B=new Tt(.3,32,32),gt=new R(B,mt);gt.scale.set(1,.72,1.5),gt.position.set(-.4,-1.45,.17),S.add(gt);const it=new R(B,V);it.scale.set(1,.72,1.5),it.position.set(.4,-1.45,.17),S.add(it);const Q=new Tt(.44,32,32),wt=new R(Q,It);wt.position.set(-.15,-.45,-.4),S.add(wt);const St=new R(Q,It);St.position.set(.15,-.45,-.4),S.add(St);const Ht=new Tt(.18,32,32),Kt=new R(Ht,mt);Kt.position.set(0,-.35,-.8),S.add(Kt),new qi().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(Pt){const b=new ke("X",{font:Pt,size:.2,depth:.05}),G=new R(b,It);G.position.set(-.3,.99,.53),G.rotation.x=ie.degToRad(-5),G.rotation.y=ie.degToRad(-15),S.add(G);const Z=new ke("O",{font:Pt,size:.2,depth:.05}),nt=new R(Z,It);nt.position.set(.14,.99,.53),nt.rotation.y=ie.degToRad(12),nt.rotation.x=ie.degToRad(-5),S.add(nt)});const Jt=x();S.add(Jt),m();const ee=p();S.add(ee);const ce=p();ce.position.set(-.2,-.1,.5),S.add(ce),T(),a.value=p(),S.add(a.value),M(a.value);const me=E();S.add(me);const ve=E();ve.position.set(-.2,-.2,0),ve.scale.set(.35,.35,.35),S.add(ve);const fe=1e3,Te=new Mn,ge=[];for(let Pt=0;Pt<fe;Pt++){const b=(Math.random()-.5)*20,G=Math.random()*20,Z=(Math.random()-.5)*20;ge.push(b,G,Z)}Te.setAttribute("position",new Ge(ge,3));const He=new zc({color:16777215,size:.1,transparent:!0,opacity:.8}),Re=new Nl(Te,He);S.add(Re),O();const je=2e3,We=[],on=.6;for(let Pt=0;Pt<je;Pt++){const b=(Math.random()-.5)*on*2,G=(Math.random()-.5)*on*2,Z=(Math.random()-.5)*on*2;Math.sqrt(b*b+G*G+Z*Z)<on&&We.push(b,G,Z)}const Un=new Mn;Un.setAttribute("position",new Ge(We,3)),new zc({color:16777215,size:.05,transparent:!0,opacity:.9});const Nn=new Nl(Un,N);Nn.position.set(0,-.2,0),S.add(Nn);const bi=new Nl(Un,q);bi.position.set(0,.8,0),S.add(bi),I(),S.scale.set(1.4,1.4,1.4),U.add(S),S.position.set(t.bodyPosition.x,t.bodyPosition.y,t.bodyPosition.z),tt.position.set(t.bodyPosition.x,1,t.cameraPosition),tt.lookAt(t.bodyPosition.x,0,0),tt.position.z=4,S.rotation.x=.1,P(),Ve(()=>t.bodyPosition,Pt=>{S.position.set(Pt.x,Pt.y,Pt.z)}),Ve(()=>t.cameraPosition,Pt=>{tt.position.set(t.bodyPosition.x,1,Pt),tt.lookAt(t.bodyPosition.x,0,0)}),window.addEventListener("resize",()=>{tt.aspect=window.innerWidth/window.innerHeight,tt.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)})}});function h(){s.value=!0}function u(){i.value=!0}function d(){o.value=!0}function f(){r.value=!0}function _(){s.value=!1,i.value=!1,o.value=!1,r.value=!1}for(let x=0;x<K1;x++){const m=document.createElement("div");m.classList.add("confetti"),m.style.left=`${Math.random()*100}vw`,m.style.animationDuration=`${Math.random()*3+4}s`,m.style.animationDelay=`${Math.random()*5}s`,document.body.appendChild(m)}for(let x=0;x<Z1;x++){const m=document.createElement("div");m.classList.add("light"),document.body.appendChild(m)}return(x,m)=>(Mi(),wi(xn,null,[qt("div",{ref_key:"threeCanvas",ref:e,class:Vn(n.background?"no-bg":"three-canvas")},null,2),qt("div",$1,[qt("button",{class:"pixel-btn up",onMousedown:d,onMouseup:_},"UP",32),qt("div",j1,[qt("button",{class:"pixel-btn left",onMousedown:h,onMouseup:_},"LEFT",32),qt("button",{class:"pixel-btn right",onMousedown:u,onMouseup:_},"RIGHT",32)]),qt("button",{class:"pixel-btn down",onMousedown:f,onMouseup:_},"DOWN",32)])],64))}}),Q1=Si(J1,[["__scopeId","data-v-4b343af4"]]),tE=[{path:"/3d-bear-arts/leather",name:"Leather",component:x1},{path:"/3d-bear-arts/pop-art",name:"Pop",component:M1},{path:"/3d-bear-arts/pop-art-bear-3",name:"PopArtBear 3",component:b1},{path:"/3d-bear-arts/machine",name:"MetalMachineBear",component:P1},{path:"/3d-bear-arts/water",name:"Water",component:z1},{path:"/3d-bear-arts/ghost-bear",name:"GhostBear",component:V1},{path:"/3d-bear-arts/white-ghost-bear",name:"GhostBallonBear",component:Y1},{path:"/3d-bear-arts/",name:"Santa",component:Q1},{path:"/3d-bear-arts/half",name:"HalfBear",component:_1}],eE=u_({history:Gg(),routes:tE}),Up=sg(cg);Up.use(eE);Up.mount("#app");
